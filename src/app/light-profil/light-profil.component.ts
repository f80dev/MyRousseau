import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-light-profil',
  templateUrl: './light-profil.component.html',
  styleUrls: ['./light-profil.component.css']
})
export class LightProfilComponent implements OnInit {

  constructor(public userService:UserService,public router:Router) { }

  ngOnInit() {
  }

  selcar(evt) {
    this.userService.addcar(evt.car).subscribe((r)=>{
      this.userService.user=r;
    });
  }

  deleteCar() {
    this.userService.delcar(0).subscribe((r)=>{
      this.userService.user=r;
    });
  }

  linkServices() {
    this.router.navigate(["services",this.userService.user.cars[0].modele])
  }

  addcar() {

  }

  takephoto() {

  }
}
