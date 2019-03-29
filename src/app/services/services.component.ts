import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services=[];
  modele={};

  constructor(public userService:UserService,public api:ApiService,public router:Router,public route: ActivatedRoute) {
    this.route.params.subscribe((val) => {
      this.api.getservices(val.product).subscribe((r:any)=>{
        this.services=r;
      })
    });
  }

  ngOnInit() {

  }

  rendezVous(service: any) {
    this.router.navigate(["schedule",service.label]);
  }
}
