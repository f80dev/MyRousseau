import {AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../api.service';
import {ConfigService} from '../config.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-product-picker',
  templateUrl: './product-picker.component.html',
  styleUrls: ['./product-picker.component.css']
})
export class ProductPickerComponent implements OnInit {
  @Output('onclick') onclick: EventEmitter<any>=new EventEmitter();
  @Input("width") width:string="100%";
  @Input("height") height:string="150px";

  constructor(public api:ApiService,public config:ConfigService,public userData:UserService) {
    this.api.initProducts();
  }


  onClick(ref) {
    this.onclick.emit(ref);
  }

  ngOnInit(): void {
  }

}
