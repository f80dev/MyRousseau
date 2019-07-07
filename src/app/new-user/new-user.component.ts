import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {reload} from '../tools';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  modele:string="";
  @Input() email:string="";
  profil: any={firstname:"",lastname:"",dtLastModif:1e9};
  carPicture:string="";
  message: string = '';
  photo: string="";

  constructor(public config:ConfigService,public api:ApiService,public route:ActivatedRoute,public router:Router) { }

  ngOnInit() {
    if(this.email==""){
      this.route.queryParams.subscribe((params) => {
        this.email=params['email'] || "";
        this.photo=params['photo'] || "./assets/img/avatar.png";
        this.profil.email=this.email;
      });
    }
  }

  selcar(evt){
    this.modele=evt.car;
    this.api.getcar(evt.car).subscribe((c:any)=>{
      if(c!=null)
        this.carPicture=c.photo;
    });
  }

  updateProfil(p:any){
    this.profil=p;
  }

  sendUser() {
    this.message="Votre code d'accès vient d'être envoyé sur votre mail. Vérifier votre boite "+this.email;
    this.api.add(this.profil).subscribe((r:any)=>{
      localStorage.setItem("email",r.email);
      setTimeout(()=>{
        this.router.navigate(["login"],{queryParams:{email:this.email}});
      },2500);
    },(err)=>{
      debugger
      console.log("Error d'enregistrement");
    });
  }

  cancel(){
    this.router.navigate(["start"]);
  }
}
