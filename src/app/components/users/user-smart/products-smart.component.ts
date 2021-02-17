import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '@services/users/product.service';
import { Subscription } from 'rxjs';
import { User } from '@model/user';

@Component({
  templateUrl: './products-smart.component.html',
  styleUrls: ['./products-smart.component.css']
})
export class ProductsSmartComponent implements OnInit, OnDestroy {

  productList: User[];
  productsSubscription: Subscription;

  constructor(readonly productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsSubscription = this.productService.getProducts()
      .snapshotChanges()
      .subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          const product = element.payload.toJSON();
          product['$key'] = element.key;
          this.productList.push(product as User);
        });
      });
  }

  onEdit(product: User) {
    this.productService.selectedProduct = Object.assign({}, product);
  }

  onDelete($key: string) {
      this.productService.deleteProduct($key);
  }

  onSubmit(product: User) {
    if (product.$key == null) {
      this.productService.insertProduct(product);
    } else {
      this.productService.updateProduct(product);
    }
    this.resetForm();
  }

  resetForm() {
      this.productService.selectedProduct = new User();
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }

}
