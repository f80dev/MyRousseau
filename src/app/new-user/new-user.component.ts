import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {reload} from '../tools';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  modele:string="";
  @Input() email:string="";
  lastname: any;
  firstname:any;
  carPicture:string="";

  constructor(public api:ApiService,public route:ActivatedRoute,public router:Router) { }

  ngOnInit() {
    if(this.email==""){
      this.route.queryParams.subscribe((params) => {
        this.email=params['email'] || "";
      });
    }
  }

  selcar(evt){
    this.modele=evt.car;
    this.api.getcar(this.modele).subscribe((c:any)=>{
      if(c!=null)
        this.carPicture=c.photo;
    });
  }

  sendUser() {
    this.api.add(this.email,this.firstname,this.lastname,this.modele).subscribe((r)=>{
      localStorage.setItem("email",this.email);
      this.router.navigate(["main"]);
    });
  }
}
