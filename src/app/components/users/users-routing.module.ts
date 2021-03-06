import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsSmartComponent } from '@component/users/user-smart/products-smart.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsSmartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
