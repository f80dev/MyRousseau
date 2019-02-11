import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-light-profil',
  templateUrl: './light-profil.component.html',
  styleUrls: ['./light-profil.component.css']
})
export class LightProfilComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit() {
  }

  selcar(evt) {
    this.userService.addcar(evt.car).subscribe((r)=>{
      this.userService.user=r;
    });
  }

}
