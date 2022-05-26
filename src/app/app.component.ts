import { Component } from '@angular/core';
import {StorageService} from '../app/services/storage.service'
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  title = 'crudAngular';
  name?:string;
  constructor(private storageService:StorageService,
              private message:NzMessageService
  ) {
  }
  ngOnInit(){
    this.isLoggedIn = this.storageService.isLoggedIn();
    this.name = this.storageService.getUser().username;
  }
  logout(type:string): void {
    this.storageService.clean()
    this.isLoggedIn = false;
    this.message.create(type,"Logout success !!")
  }
}
