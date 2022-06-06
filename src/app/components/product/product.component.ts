import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any
  carItem:any=[]
  page = 1;
  size = 3;
  total?:any
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.productService.getAll(this.page, this.size)
      .subscribe({
        next:(rest)=>{
          this.products = rest.content
          this.products.forEach((a:any)=>{
            Object.assign(a,{quantity:1})
          })
          console.log(this.products)
        }
      })
  }

  addToCart(product: any) {
  let productsExist = false;
  for (let i in this.carItem){
    if (this.carItem[i].id === product.id){
      this.carItem[i].quantity++;
      productsExist = true;
    }
  }
  if (!productsExist){
    this.carItem.push(product);
  }
  console.log(this.carItem)
    localStorage.setItem("carItem",JSON.stringify(this.carItem))
  }
}
