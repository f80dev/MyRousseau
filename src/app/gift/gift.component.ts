import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {

  gifts:any[]=[];

  constructor(public userService:UserService) { }

  ngOnInit() {
    this.userService.init();
  }

}
