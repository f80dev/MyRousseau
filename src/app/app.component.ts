import { Component } from '@angular/core';
import {UserService} from './user.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login: string="login";

  constructor(public api:ApiService,public userService:UserService,public router:Router,private route: ActivatedRoute){
    this.api.initProducts((r)=>{
      console.log("Produits initialisés");
    });
  }

}
