import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(public api:ApiService,public route:ActivatedRoute) { }

  ngOnInit() {
    if(this.email==""){
      this.route.queryParams.subscribe((params) => {
        this.email=params['email'] || "";
      });
    }
  }

  selcar(evt){
    this.modele=evt;
  }

  sendUser() {
    this.api.add(this.email,this.firstname,this.lastname,this.modele).subscribe((r)=>{
      localStorage.setItem("email",this.email);
      document.location.reload();
    })
  }
}
