import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services=[];
  modele:any;

  constructor(public api:ApiService,public router:Router,public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.modele= params["modele"];
      this.api.getservices(this.modele).subscribe((r:any)=>{
        this.services=r;
      })
    });
  }

  rendezVous(service: any) {
    this.router.navigate(["schedule",service.label]);
  }
}
