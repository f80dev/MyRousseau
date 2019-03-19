import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  url:string;

  constructor(public route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.url="https://"+params["url"]+"/";
      if(params["url"]=="faq")this.url="/faq.html";
      if(params["url"]=="loc")this.url="https://www.salvaloc.fr/";
      if(params["url"]=="forum")this.url="https://forum.quechoisir.org/reparation-voiture-f41.html";
      if(params["url"]=="blog")this.url="https://blog.atome.auto/category/auto/belles-voitures/voiture-de-collection/";
    });
  }

  ngOnInit() {

  }

}
