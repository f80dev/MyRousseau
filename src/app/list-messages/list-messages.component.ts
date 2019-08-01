import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {

  messages:any[]=[];

  constructor(public userData:UserService) { }

  ngOnInit() {
    setTimeout(()=>{this.refresh()},1000);
  }

  refresh(){
    this.userData.getmessages().subscribe((mess:any)=>{
      this.messages=mess.items;
    })
  }

  onRead(message: any) {
    this.userData.readmessage(message.id).subscribe(()=>{
      this.refresh();
    });
  }
}
