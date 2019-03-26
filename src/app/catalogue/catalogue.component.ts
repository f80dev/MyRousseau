import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  url:string;

  constructor(public config:ConfigService,public route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.url=atob(decodeURIComponent(params["url"]));
    });
  }
}
