import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  accounts?:any
  status = 5;
  check: any;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.getAll();
  }
 getAll(){
    this.authService.getAll()
      .subscribe({
        next:(data) =>{
          this.accounts = data;
        }
      })
 }

  updateStatus() {
    alert(this.status)
  }

  checkAll() {
    // var checkBoxes = document.getElementsByName('accountCheck')
    // for (let i = 0; i < checkBoxes.length; i++) {
    //   checkBoxes[i].t
    // }

    }
}
