import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/api/v1/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  getAll(page?:number,size?:number):Observable<any> {
    return this.http.get(`${baseUrl}?page=${page}&size=${size}`)
  }
}
