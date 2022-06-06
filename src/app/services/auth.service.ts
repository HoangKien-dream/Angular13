import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/api/v1/login';
const getAccount = 'http://localhost:8080/api/v1/accounts';
const getRole = 'http://localhost:8080/api/v1/role';
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
  getAll():Observable<any>{
    return this.http.get(getAccount,httpOptions)
  }
  updatedStatus(id:any,status:any):Observable<any>{
    return this.http.put(`${getAccount}?id=${id}&status=${status}`,httpOptions)
  }
  addRole(username:string,role:string):Observable<any>{
    return this.http.put(`${getRole}?username=${username}&role=${role}`,httpOptions);
  }

  removeRole(username:string,role:string):Observable<any>{
    return this.http.delete(`${getRole}?username=${username}&role=${role}`,httpOptions);
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
