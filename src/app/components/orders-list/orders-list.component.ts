import { Component, OnInit } from '@angular/core';
import {Order} from "../../models/order.model";
import {OrderService} from "../../services/order.service";
import {Product} from "../../models/product.model";
import {OrderDetail} from "../../models/order-detail.model";
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  orders?: Order[];
  orderDetails ?:any;
  isVisible = false;
  page=1;
  size=4;
  total?:number;
  keyword=""
  userName=""
  userPhone="";
  dateFormat='yyyy/MM/dd';
  startDate: any;

  constructor(private  orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.orderService.getAll(this.page,this.size,this.keyword,this.userName,this.userPhone)
      .subscribe({
        next: (data) => {
          this.orders = data.content;
          this.page = data.pageable.pageNumber+1;
          this.total = data.totalElements;
          console.log(this.orders);
        },
        error: (e) => console.error(e)
      });
  }

  showModal(event?:any): void {
    this.orderDetails = event;
    console.log(this.orderDetails)
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  handlePageChange(event:number) {
    this.page = event;
    this.getAll()
  }

  search() {
    console.log(this.startDate)
    this.getAll()

  }
}
