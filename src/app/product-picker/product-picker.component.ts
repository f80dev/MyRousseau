import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../api.service';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-product-picker',
  templateUrl: './product-picker.component.html',
  styleUrls: ['./product-picker.component.css']
})
export class ProductPickerComponent implements OnInit {
  @Output('onclick') onclick: EventEmitter<any>=new EventEmitter();
  @Input("width") width:string="100%";
  @Input("height") height:string="150px";

  constructor(public api:ApiService,public config:ConfigService) {
    this.api.initProducts();
  }

  ngOnInit() {
  }

  onClick(ref) {
    debugger
    this.onclick.emit(ref);
  }

}
