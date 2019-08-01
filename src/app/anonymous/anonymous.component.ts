import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.component.html',
  styleUrls: ['./anonymous.component.css']
})
export class AnonymousComponent implements OnInit {

  constructor(public userService:UserService,public config:ConfigService,public router:Router) {

  }

  ngOnInit() {
    setTimeout(()=>{
      if(this.userService.user.id!=null)this.router.navigate(["main"]);
    },1000);
  }

  open_login() {
    this.router.navigate(["login"]);
  }
}
