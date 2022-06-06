import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersListComponent} from './components/orders-list/orders-list.component'
import {ProductListComponent} from './components/product-list/product-list.component'
import {LoginComponent} from './components/login/login.component'
import {ListAccountComponent} from './components/list-account/list-account.component'
import {ProductComponent} from './components/product/product.component'
import {CartComponent} from './components/cart/cart.component'

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'admin/orders', component: OrdersListComponent },
  {path: 'admin/products', component: ProductListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin/account', component: ListAccountComponent},
  {path: 'products', component: ProductComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
