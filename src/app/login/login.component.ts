import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {api, direct_api, openGeneral, reload} from '../tools';
import {UserService} from '../user.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import {ConfigService} from '../config.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword=false;
  email="";
  waiting=false;
  password="";
  showResendCode=false;
  handleLogin=null;
  showServiceTiers: boolean=true;

  constructor(public deviceService: DeviceDetectorService,
              public userService:UserService,public config:ConfigService,
              public api:ApiService,public router:Router,public routes:ActivatedRoute) {
    config.init();
  }

  ngOnInit() {
    this.email=this.routes.snapshot.queryParamMap.get("email");
    if(this.email==null)this.email=localStorage.getItem("email");
    if(this.email=="null" || this.email=="undefined")this.email=null;

    this.password=localStorage.getItem("password") || this.routes.snapshot.queryParamMap.get("password");
    if(this.password=="undefined")this.password=null;

    if(this.email!=null && this.password!=null){
      setTimeout(()=>{this.login();},1000);
    }
  }

  login(manual=false) {
    if(manual)this.showServiceTiers=false;
    localStorage.setItem("email",this.email);
    this.waiting=true;
    this.api.login(this.email,this.password).subscribe((r:any)=>{
      if(!this.showPassword){
        if(r==null){
          if(manual)
            this.router.navigate(['/newuser'],{ queryParams: { email: this.email,photo:this.config.values.user_profil.default_photo} });
        }
        else
          this.showPassword=true;
      } else {
        if(r!=null){
          clearInterval(this.handleLogin);
          localStorage.setItem("password",this.password);
          this.userService.init(this.email);
          this.router.navigate(["start"]);
        } else {
          if(this.password!=null){
            this.showResendCode=true;
          }
        }
      }
    })
  }

  clearEmail() {
    this.email="";
    this.showPassword=false;
    this.showServiceTiers=true;
  }

  keypress($event) {
    this.showServiceTiers=false;
    if($event.keyCode==13){
      this.login(true);
    }

  }

  loginService(service: string) {
    openGeneral(service,location.host).then((data:any)=>{
      this.email=data.email;
      this.password=data.password;
      clearInterval(this.handleLogin);
      this.handleLogin=setInterval(()=>{
        this.showPassword=true;
        this.login();
        },1000);
    })
  }

  resend_code() {
    this.api.resend_code(this.email).subscribe(()=>{
      this.showPassword=true;
    });
  }
}
