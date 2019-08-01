import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../user.service';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  @Input("item") item:any={title:"",description:"",from:""};
  @Output('onchange') onchange: EventEmitter<any>=new EventEmitter();
  categories=[];

  constructor(public userService:UserService,public config:ConfigService) { }

  ngOnInit() {
    this.categories=this.config.values.item.tags.split(",");
  }

}
