import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
import {reload} from '../tools';

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

  constructor(public api:ApiService,public router:Router) { }

  ngOnInit() {
    this.email=localStorage.getItem("email") || "";
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
}
