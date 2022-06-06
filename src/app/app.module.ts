import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import{ProductListComponent} from "./components/product-list/product-list.component"
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzCardModule} from "ng-zorro-antd/card";
import { LoginComponent } from './components/login/login.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {TokenInterceptorService} from "../_help/http.interceptor";
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ListAccountComponent } from './components/list-account/list-account.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    OrdersListComponent,
    ProductListComponent,
    LoginComponent,
    ListAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzModalModule,
    NzButtonModule,
    NzPaginationModule,
    NzInputModule,
    NzDatePickerModule,
    NzAvatarModule,
    NzCardModule,
    NzFormModule,
    NzMessageModule,
    NzCheckboxModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
