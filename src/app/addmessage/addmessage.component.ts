import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addmessage',
  templateUrl: './addmessage.component.html',
  styleUrls: ['./addmessage.component.css']
})
export class AddmessageComponent implements OnInit {

  message:any={text:"",hour:new Date().getHours()+":"+new Date().getMinutes(),duration:24,date:new Date().toISOString()};

  constructor(public userData:UserService,public router:Router) { }

  ngOnInit() {
  }

  addmessage(){
    this.message.dtStart=new Date(this.message.date).getTime();
    this.message.dtEnd=this.message.dtStart+this.message.duration*3600*1000;
    this.message.owner=this.userData.user.id;
    this.message.from=this.userData.user.firstname;
    this.userData.addmessage(this.message).subscribe(()=>{
      this.router.navigate(["main"]);
    });
  }

}
