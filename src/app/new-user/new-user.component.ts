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
  profil: any={firstname:"",lastname:"",dtLastModif:1e9};
  carPicture:string="";
  message: string = '';

  constructor(public api:ApiService,public route:ActivatedRoute,public router:Router) { }

  ngOnInit() {
    if(this.email==""){
      this.route.queryParams.subscribe((params) => {
        this.email=params['email'] || "";
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
    this.api.add(this.email,this.profil.firstname,this.profil.lastname,this.profil.dtLastModif,this.modele).subscribe((r:any)=>{
      localStorage.setItem("email",r.email);
      this.message="Votre code d'accès vient d'être envoyé sur votre mail. Vérifier votre boite "+this.email;
      setTimeout(()=>{
        this.router.navigate(["login"],{queryParams:{email:this.email}});
      },2000);

    });
  }

  cancel(){
    this.router.navigate(["start"]);
  }
}
