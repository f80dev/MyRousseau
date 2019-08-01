import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-schedule-menu',
  templateUrl: './schedule-menu.component.html',
  styleUrls: ['./schedule-menu.component.css']
})
export class ScheduleMenuComponent implements OnInit {

  menus:any[]=[];
  @Input("start") dtStart=new Date();
  @Input("filter") filter=null;
  @Input("can_delete") can_delete=true;
  @Input("title") title="";
  @Input("limit") limit=10;

  constructor(public api:ApiService,public userService:UserService) {

  }

  ngOnInit() {
    this.refresh();
  }

  public refresh(){
    var dt=this.dtStart;
    dt.setHours(11);
    dt.setMinutes(30);
    this.api.getMenus(dt.getTime(),this.filter).subscribe((r:any)=>{
      this.menus=r.items;
      if(this.menus.length>this.limit)
        this.menus=this.menus.slice(0,this.limit);
    })
  }

  deleteMenu(menu: any) {
    this.userService.deleteMenu(menu.id).subscribe(()=>{
      this.refresh();
    });
  }

  openRecette(recette: any) {

  }
}
