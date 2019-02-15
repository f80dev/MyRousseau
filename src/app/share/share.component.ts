import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  email="";
  firstname="";

  constructor(public snackBar:MatSnackBar,public userService:UserService,public router:Router) { }

  ngOnInit() {

  }

  sendInvitation() {
    if(this.email.length>0){
      this.userService.share(this.email,this.firstname).subscribe(()=>{
        this.firstname="";
        this.email="";
        this.snackBar.open("Invitation envoyeé","",{duration:5000});
        this.router.navigate(["main"]);
      });
    }
  }
}
