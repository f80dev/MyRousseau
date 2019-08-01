import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users:any[]=[];
  gifts:any[]=[];
  addresses: any[]=[];
  menus: any[]=[];

  constructor(public userData:UserService,public api:ApiService,public rooter:Router) { }

  ngOnInit() {
    this.api.getusers().subscribe((l:any)=>{this.users=l.items;});
    this.api.getMenus(0).subscribe((l:any)=>{this.menus=l.items;});
    this.api.getreferences(null).subscribe((l:any)=>{this.addresses=l.items;});

    this.gifts=[
      {message:"des pneus offert",picture:"https://staticjn.1001pneus.fr/images/profils/ProfilsGoogle/ENERGY_SAVER.png"},
      {message:"une vidange offerte",picture:"https://nitifilter.com/wp-content/uploads/2015/08/20952739_l-1288x724.jpg"},
      {message:"une voiture de sport pendant un weekend",picture:"https://www.auto-forever.com/wp-content/uploads/2015/07/Boxster_1996-2002_2-1030x773.jpg"}
    ]

  }

  raz(){
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    this.api.raz();
    location.href="/login";
  }

  init(){
    this.api.init().subscribe(()=>{});
  }

  admin() {
    document.location.href="http://localhost:8080/_ah/admin";
  }

  addmessage() {
    this.userData.postmessage("coucou",24).subscribe(()=>{});
  }
}
