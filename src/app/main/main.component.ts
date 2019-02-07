import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:  [ UserService ]
})
export class MainComponent implements OnInit {

  public user:any={};

  constructor(public api:ApiService,public userService:UserService,public router:Router) { }

  ngOnInit() {
      this.userService.init("hhoareau@gmail.com");
  }


}
