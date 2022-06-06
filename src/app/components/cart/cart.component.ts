import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
array?:any
  products?:any
  totalPrice=0;
  constructor() { }

  ngOnInit(): void {
    this.getCartItems()
  }
  getCartItems(){
   this.array = localStorage.getItem("carItem")
    this.products = JSON.parse(this.array)
    this.getTotalPrice()
  }
  delete(id:any) {
    this.products = this.products.filter((item: { id: any; }) => item.id !==id)
    localStorage.setItem("carItem",JSON.stringify(this.products))
    this.getTotalPrice()
    console.log(this.products)
  }
  getTotalPrice(){
    let total = 0
    for (let product of this.products) {
      total+=(product.price * product.quantity);
    }
    this.totalPrice = total;
    console.log(this.totalPrice)
  }
}
