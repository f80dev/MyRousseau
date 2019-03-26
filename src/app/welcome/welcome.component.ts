import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public config:ConfigService,public userService:UserService) { }

  ngOnInit() {
  }

}
