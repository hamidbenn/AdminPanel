import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '@services/users/product.service';
import { NgForm } from '@angular/forms';
import { User } from '@model/user';
import { ProductFormEmittersInit } from '@component/users/utils/decorators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
@ProductFormEmittersInit
export class ProductFormComponent implements OnInit {

  @Output() submitEventEmitter: EventEmitter<User>;
  @Output() resetEventEmitter: EventEmitter<void>;
  @Output() getProductsEventEmitter: EventEmitter<void>;

  constructor(readonly productService: ProductService) {}

  ngOnInit() {
    this.getProductsEventEmitter.emit();
    this.resetFormEvent();
  }

  onSubmitEvent(productForm: NgForm) {
    this.submitEventEmitter.emit(productForm.value);
    this.resetFormEvent(productForm);
  }

  resetFormEvent(productForm?: NgForm) {
    if (productForm != null) {
      productForm.resetForm();
      this.resetEventEmitter.emit();
    }
  }
}
