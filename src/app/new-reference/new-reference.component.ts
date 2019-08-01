import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../user.service';
import {ConfigService} from '../config.service';
import {LocService} from '../loc.service';

@Component({
  selector: 'app-new-reference',
  templateUrl: './new-reference.component.html',
  styleUrls: ['./new-reference.component.css']
})
export class NewReferenceComponent implements OnInit {

  @Input("profil") ref:any={url:"",title:"",owner:""};
  @Output('onchange') onchange: EventEmitter<any>=new EventEmitter();
  categories=[];

  constructor(public userService:UserService,public config:ConfigService,public loc:LocService) { }

  ngOnInit() {
    this.categories=this.config.values.references.categories;
  }


  checkAddress() {
    this.loc.getAddress(this.ref.address,(res)=>{
      this.ref.address=res[0].display_name;
      this.ref.lat=res[0].lat;
      this.ref.lng=res[0].lon;
    });
  }
}
