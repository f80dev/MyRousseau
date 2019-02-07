import { Component } from '@angular/core';
import {UserService} from './user.service';
import {Router} from '@angular/router';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my Rousseau Automobile';
  login: string="login";

  constructor(public api:ApiService,public userService:UserService,public router:Router){
    this.api.login(localStorage.getItem("email"),localStorage.getItem("password")).subscribe((r)=>{
      if(r==null)
        this.router.navigate(["/login"]);
      else{
        userService.init(localStorage.getItem("email"));
        this.router.navigate(["/main"]);
      }

    })
  }
}
