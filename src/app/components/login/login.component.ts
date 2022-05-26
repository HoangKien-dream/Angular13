import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {StorageService} from '../../services/storage.service'
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username?:string;
password?:string;
isLogin = false;
  constructor(private loginService:AuthService,
              private storageService:StorageService,
              private  router:Router
              ) { }
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
    this.isLogin = true;
    }
  }
  login(type:string) {
    const data = {
      username: this.username,
      password:this.password
    }
    console.log(data)
    this.loginService.login(data)
      .subscribe({
        next:(res)=>{
          this.storageService.saveUser(res);
          console.log(res);
          this.reloadPage();
        },
        error: err => console.log(err)
      })
  }
  reloadPage(): void {
    this.router.navigate(['products'])
      .then(() => {
        window.location.reload();
      });
  }
}
