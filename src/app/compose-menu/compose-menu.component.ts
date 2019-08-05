import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ConfigService} from '../config.service';
import {ApiService} from '../api.service';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {MatDatepickerInputEvent, MatDialog} from '@angular/material';
import {NewItemComponent} from '../new-item/new-item.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-compose-menu',
  templateUrl: './compose-menu.component.html',
  styleUrls: ['./compose-menu.component.css']
})
export class ComposeMenuComponent implements OnInit {

  items=[];
  categories=[""];
  filter1="";
  filter2="";
  showAdd=false;
  nextDate:any=new Date();
  viewDate:any=new Date();

  menu:any={entree:{title:""},plat:{title:""}};

  @ViewChild("lst_menus") lst_menus:any;
  nowDate: any=new Date();


  constructor(public dialog: MatDialog,
              public config:ConfigService,
              public api:ApiService,
              public userService:UserService,
              public router:Router) {

  }

  ngOnInit() {
    if(this.userService.user.load_products!=null){
      this.api.nextmenudate(null,this.userService.user.load_products[0].groupe).subscribe((r:any)=>{
        this.nextDate=new Date(Number(r.nextDate));
        //this.schedule_title_menu="Les prochaines menus à partir du "+new DatePipe("en-US").transform(this.viewDate,"dd/MM");
        this.refresh();
      })
    }
  }

  nextDay(step:number){
    this.nextDate=new Date(this.nextDate.getTime()+step*(24*3600*1000));
    this.nextDate.setHours(11);
    this.nextDate.setMinutes(30);

    this.api.isopen(this.nextDate.getTime(),(r)=>{
      if(r){
        this.lst_menus.refresh();

        this.api.getMenus(this.nextDate.getTime(),this.userService.user.load_products[0].groupe,null,1).subscribe((m:any)=>{
          if(m.items.length>0){
            this.menu.entree=m.items[0].items[0];
            this.menu.plat=m.items[0].items[1];
          } else {
            this.razCurrentMenu();
          }
        })

      } else {
        if(step!=0)
          this.nextDay(step);
        else
          this.nextDay(1);
      }

    });

  }

  changeDate(evt:MatDatepickerInputEvent<Date>){
    this.nextDate=new Date(evt.value.toISOString());
    this.nextDay(0);
  }


  refresh(){
    this.api.getItems(this.filter1+","+this.filter2).subscribe((r:any)=>{
      this.items=[];
      r.items.forEach((it)=>{
        this.items.push(it);
        var tags=it.tags.split(",");
        tags.forEach((tag)=>{
          if(this.categories.indexOf(tag)==-1){
            this.categories.push(tag);
          }
        });
      });
    });
  }

  add_item(ref:any=null){
    this.showAdd=false;
    if(ref!=null){
      this.userService.addItem(ref).subscribe(()=>{
        this.refresh();
      });
    }
  }

  addToCurrentMenu(item){
    if(item.tags.indexOf("Entrée")>-1)
      this.menu.entree=item;
    else
      this.menu.plat=item;
  }

  addToMenu(){
    this.nextDate.setHours(11);
    this.nextDate.setMinutes(30);
    this.userService.addtomenu(
      this.nextDate.getTime(),
      this.userService.user.load_products[0].groupe,
      this.userService.user.id,
      this.menu)
      .subscribe((r:any)=>{
        this.nextDate=new Date(Number(r.nextDate));
        this.razCurrentMenu();
        setTimeout(()=>{
          this.nextDay(1);
          this.lst_menus.refresh();
        },1500);
    });
  }


  deleteItem(it: any) {
    this.api.deleteitem(it.title).subscribe(()=>{
      this.refresh();
    });
  }

  razCurrentMenu() {
    this.menu={entree:{title:""},plat:{title:""}};
  }
}
