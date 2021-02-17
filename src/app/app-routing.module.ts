import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/users/users.module').then(module => module.ProductsModule)
  },
  {
    path: "policy",
    component: PolicyComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./components/users/users.module').then(module => module.ProductsModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
