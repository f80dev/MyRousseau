import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  email="";
  firstname="";
  url_appli: string;

  constructor(public config:ConfigService,public snackBar:MatSnackBar,public userService:UserService,public router:Router) { }

  ngOnInit() {
    this.url_appli=this.config.values.url_invite+"?from="+this.userService.user.id;
  }

  sendInvitation() {
    if(this.email.length>0){
      this.userService.share(this.email,this.firstname).subscribe((r:any)=>{
        this.firstname="";
        this.email="";
        this.snackBar.open(r.message,"",{duration:5000});
        this.router.navigate(["main"]);
      });
    }
  }
}
