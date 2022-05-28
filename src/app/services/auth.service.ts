import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/api/v1/login';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  login(data:any):Observable<any>{
    return this.http.post(baseUrl, data, httpOptions)
  }

  logout(): Observable<any> {
    return this.http.post(baseUrl, { }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      baseUrl,
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }
}
