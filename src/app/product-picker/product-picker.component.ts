import {AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../api.service';
import {ConfigService} from '../config.service';
import {UserService} from '../user.service';
import {$$} from '../tools';

@Component({
  selector: 'app-product-picker',
  templateUrl: './product-picker.component.html',
  styleUrls: ['./product-picker.component.css']
})
export class ProductPickerComponent implements OnInit {
  @Output('onclick') onclick: EventEmitter<any>=new EventEmitter();
  @Input("height") height:string="150px";
  products: any[]=[];
  width:string="250px";

  constructor(public api:ApiService,
              public config:ConfigService,
              public userData:UserService) {
  }


  onClick(ref) {
    this.onclick.emit(ref);
  }

  ngOnInit(): void {
    this.api.initProducts((r)=>{
      this.products=r;
    });
  }

}
