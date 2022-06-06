import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Account} from "../../models/account.model";

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  token: any ={
    exp:"",
    sub:""
}
  accounts?: any
  status = 5;
  checkMaster = false;
  checkedElement?: any;
  indeterminate = false;
  arrayId = new Set<number>();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.token = atob("eyJleHAiOjE2NTQxNDk4MTIsImlhdCI6MTY1NDE0OTUxMiwianRpIjoiM2ZjZDJiNTAtYTQ2NC00NDY4LTllMGQtMGM5ZTdjZTI3ZjFiIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MTgwL2F1dGgvcmVhbG1zL2phdmF0ZWNoaWUiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYmUxY2NjYzgtOTk3Ni00YmUzLWIzODctZDlmYjYzMzlhZGM1IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic3ByaW5nYm9vdC1rZXljbG9hayIsInNlc3Npb25fc3RhdGUiOiJmZmJhMGIyMC01ZTc3LTQ0NGItYWIwYS1iY2ViNTM3MzVmNmYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6OTA5MCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1qYXZhdGVjaGllIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInVzZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJmZmJhMGIyMC01ZTc3LTQ0NGItYWIwYS1iY2ViNTM3MzVmNmYiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImdlbmRlciI6Ik5hbSIsInByZWZlcnJlZF91c2VybmFtZSI6ImhvYW5na2llbjEifQ");
    console.log(JSON.parse(this.token).sub)
  }

  getAll() {
    this.authService.getAll()
      .subscribe({
        next: (data) => {
          this.accounts = data;
        }
      })
  }

  updateStatus() {
    alert(this.status)
    for (let id of this.arrayId) {
      this.authService.updatedStatus(id, this.status)
        .subscribe({
          next: (res) => {
            console.log(res)
          }
        })
    }
    window.location.reload()
  }

  checkAll() {
    for (let i = 0; i < this.accounts.length; i++) {
      this.checkedElement = this.checkMaster
      this.check(this.accounts[i].id)
      this.checkedElement = this.checkMaster
    }
    console.log(this.arrayId)
  }

  check(id: any) {
    if (this.checkedElement) {
      this.arrayId.add(id)
    } else {
      this.arrayId.delete(id)
    }
    this.checkedElement = false
    console.log(this.arrayId)
  }
}
