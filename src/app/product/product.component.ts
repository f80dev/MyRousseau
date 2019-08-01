import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {ConfigService} from '../config.service';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input("product_id") product_id:string="";
  product:any={};
  users: any[]=[];

  constructor(public route: ActivatedRoute,public api:ApiService,public config:ConfigService) {
    this.route.params.subscribe(params => {
      this.product_id= params["product_id"];
    });
  }

  ngOnInit() {
    if(this.api!=null){
      this.api.getresp(this.product_id).subscribe((lu:any)=>{
        this.users=lu.items;
      });
      this.api.getproducts(this.product_id).subscribe((p:any)=>{
        this.product=p.items[0];
      });
    }
  }

}
