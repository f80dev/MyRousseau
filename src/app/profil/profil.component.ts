import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  @Input("profil") profil:any={email:"",firstname:"",lastname:""}
  @Output('onchange') onchange: EventEmitter<any>=new EventEmitter();

  constructor(public config:ConfigService) {
  }

  ngOnInit() {
  }

}
