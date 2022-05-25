import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersListComponent} from './components/orders-list/orders-list.component'
import {ProductListComponent} from './components/product-list/product-list.component'

const routes: Routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  { path: 'orders', component: OrdersListComponent },
  {path: 'products', component: ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
