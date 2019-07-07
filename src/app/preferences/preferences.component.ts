import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {ApiService} from '../api.service';
import {PushNotificationsService} from '../push-notifications.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  profil:any;

  constructor(public _pn:PushNotificationsService,public userService:UserService,public api:ApiService) {
  }

  updateProfil(p:any){
    var dtLastNotif=1e9;
    if(p.notif){
      dtLastNotif=new Date().getTime();
      if(this._pn.isSupported())this._pn.requestPermission();
    }
    this.api.add(p,dtLastNotif).subscribe((r)=>{
      this.userService.set(r);
    });
  }

  ngOnInit() {

  }

}
