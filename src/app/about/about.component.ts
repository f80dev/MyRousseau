import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  url_record_work: string="";

  constructor(public config:ConfigService) {
    this.url_record_work=config.values.work.short_url;
  }

  ngOnInit() {
  }

}
