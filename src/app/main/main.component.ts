import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:  [ UserService ]
})
export class MainComponent implements OnInit {

  public user:any={};
  bigScreen=true;

  constructor(bkob:BreakpointObserver,public api:ApiService,public userService:UserService,public router:Router) {
    bkob.observe([Breakpoints.Handset,Breakpoints.TabletPortrait,Breakpoints.WebPortrait]).subscribe((result)=>{
        this.bigScreen =!result.matches;
    });


  }

  ngOnInit() {
    this.userService.init(localStorage.getItem("email"),null,()=>{
      this.router.navigate(["login"]);
    });
  }


}
