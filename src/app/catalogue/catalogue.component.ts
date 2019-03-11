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
    });
  }

  ngOnInit() {

  }

}
