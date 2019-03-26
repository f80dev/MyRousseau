import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {ConfigService} from '../config.service';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-light-profil',
  templateUrl: './light-profil.component.html',
  styleUrls: ['./light-profil.component.css']
})
export class LightProfilComponent {

  constructor(public api:ApiService,public config:ConfigService,public userService:UserService,public router:Router) { }

  deleteProduct() {
    this.userService.delproduct(0).subscribe((r)=>{
      this.userService.set(r);
    });
  }

  addProduct() {
    //TODO
  }

  takePhoto() {
    //TODO
  }



  linkServices() {
    this.router.navigate(["services",this.api.products[this.userService.user.products[0]].id])
  }

  selproduct(ref) {
    this.userService.addproduct(ref).subscribe((r:any)=>{
        this.userService.user=r;
    });
  }
}
