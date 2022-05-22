import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/api/v1/order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  getAll(page?:number, size?:number, keyword?:string,userName?:string,userPhone?:string): Observable<any> {
    return this.http.get(`${baseUrl}?page=${page}&size=${size}&keyword=${keyword}&userName=${userName}&userPhone=${userPhone}`);
  }
}
