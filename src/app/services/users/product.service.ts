import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '@model/user';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: AngularFireList<any>;
  selectedProduct: User = new User();

  constructor(private firebase: AngularFireDatabase) {}

  getProducts() {
    return this.products = this.firebase.list('Users');
  }

  insertProduct(product: User) {
    this.products.push({
      name: product.name,
      category: product.email,
      location: product.phone,
      price: product.date
    });
  }

  updateProduct(product: User) {
    this.products.update(product.$key, {
      name: product.name,
      category: product.email,
      location: product.phone,
      price: product.date,
      friendsnames: product.friendsnames,
      imei:product.imei
    });
  }

  deleteProduct($key: string) {
    this.products.remove($key);
  }
}
