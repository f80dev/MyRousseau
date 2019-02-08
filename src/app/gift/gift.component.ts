import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {

  gifts:any[]=[];
  @Input() dtStart=0;
  @Input() dtEnd=0;
  @Input() userFilter="";
  @Input() icon_view: boolean=false;

  constructor(public api:ApiService,public userService:UserService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.api.getgifts(localStorage.getItem("email")).subscribe((r:any)=>{
      this.gifts=[];
      r.items.forEach((i)=>{
        if((i.dtStart>=this.dtStart || this.dtStart==0) && (i.dtEnd>=this.dtEnd || this.dtEnd==0))
          this.gifts.push(i);
      });
    })
  }

  useGift(evt,gift) {

    this.userService.addgift(gift.id).subscribe(()=>{
      this.refresh();
    });

    let elt:any=evt.target.parentElement.parentElement;

    while(elt.className.indexOf("flip-card-inner")==-1)
      elt=elt.parentElement;

    elt.className+=" flip-card-reback";
    //
    // elt.parentElement.parentElement.parentElement.addEventListener("mouseleave",()=>{
    //   elt.parentElement.parentElement.parentElement.parentElement.className="flip-card-inner";
    // });

    // elt.parentElement.parentElement.parentElement.parentElement.addEventListener("tap",()=>{
    //   elt.parentElement.parentElement.parentElement.parentElement.className="flip-card-inner";
    // });

    setTimeout(()=>{
      elt.parentElement.parentElement.parentElement.parentElement.className="flip-card-inner";
    },6000);
  }
}
