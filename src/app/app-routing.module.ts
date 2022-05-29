import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersListComponent} from './components/orders-list/orders-list.component'
import {ProductListComponent} from './components/product-list/product-list.component'
import {LoginComponent} from './components/login/login.component'
import {ListAccountComponent} from './components/list-account/list-account.component'

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'orders', component: OrdersListComponent },
  {path: 'products', component: ProductListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account', component: ListAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
