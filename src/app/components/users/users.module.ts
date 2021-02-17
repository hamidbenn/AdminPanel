import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './users-routing.module';
import { ProductsSmartComponent } from '@component/users/user-smart/products-smart.component';
import { ProductFormComponent } from '@component/users/user-form/product-form.component';
import { ProductDumbComponent } from '@component/users/user-dumb/product-dumb.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsSmartComponent,
    ProductFormComponent,
    ProductDumbComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  exports: [
    ProductsSmartComponent
  ]
})
export class ProductsModule { }
