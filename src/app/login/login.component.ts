import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {api, reload} from '../tools';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '../../../node_modules/@angular/cdk/layout';
import {map} from 'rxjs/operators';
import { DeviceDetectorService } from 'ngx-device-detector';

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
  password="";
  message="";

  constructor(public deviceService: DeviceDetectorService,
              public userService:UserService,
              public api:ApiService,public router:Router,public routes:ActivatedRoute) {

  }

  ngOnInit() {
    this.email=localStorage.getItem("email") || this.routes.snapshot.queryParamMap.get("email");
    if(this.email=="null")this.email=null;
    this.showPassword=(this.email!=null);
    this.password=localStorage.getItem("password") || this.routes.snapshot.queryParamMap.get("password");
    if(this.email!=null && this.password!=null){
      setTimeout(()=>{
        this.login();
      },2000);
    }
  }

  login() {
    localStorage.setItem("email",this.email);
    this.api.login(this.email,this.password).subscribe((r:any)=>{
      if(!this.showPassword){
        if(r==null){
          this.router.navigate(['/newuser'],{ queryParams: { email: this.email} });
        }
        else
          this.showPassword=true;
      } else {
        if(r!=null){
          localStorage.setItem("password",this.password);
          this.userService.init(this.email);
          this.router.navigate(["start"]);
        } else {
          this.message="Mot de passe incorrect";
        }
      }
    })
  }

  clearEmail() {
    this.email="";
    this.showPassword=false;
  }

  keypress($event) {
    if($event.keyCode==13)
      this.login();
  }

  loginService(service: string) {
    var domain=location.href.replace("https://","").replace("http://","").replace("/login","");
    domain=domain.replace("/","_slash_");
    document.location.href=api("connectTo","service="+service+"&domain="+domain);
  }
}
