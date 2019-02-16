import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users:any[]=[];
  gifts:any[]=[];

  constructor(public api:ApiService,public rooter:Router) { }

  ngOnInit() {
    this.api.getusers().subscribe((l:any)=>{
      this.users=l.items;
    });

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
    location.href="/MyRousseauAuto/login";
  }

  admin() {
    document.location.href="http://localhost:8080/_ah/admin";
  }
}
