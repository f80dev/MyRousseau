import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {UserService} from '../user.service';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  references=[];
  categories=[];
  filter="";
  showAdd=false;

  constructor(public config:ConfigService,public api:ApiService,public userService:UserService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.api.getreferences(this.filter).subscribe((r:any)=>{
      this.references=[];
      r.items.forEach((it)=>{
        if(it.likes==null)it.likes=[];
        if(it.dislikes==null)it.dislikes=[];

        it.score=it.likes.length-it.dislikes.length;
        this.references.push(it);

        if(this.categories.indexOf(it.tags)==-1)
          this.categories.push(it.tags);
      });
    });
  }

  add_reference(ref=null){
    this.showAdd=false;
    if(ref!=null){
      this.userService.addreference(ref).subscribe((r)=>{
        this.references.push(r);
        this.refresh();
      });
    }

  }

  del_reference(ref){
    this.userService.delreference(ref).subscribe((r)=>{
      this.refresh();
    });
  }

  like(refid:string,note: number) {
    this.userService.addvote(refid,note).subscribe((r)=>{
      this.refresh();
    });
  }

  openMap(ref: any) {
    window.open("https://www.google.com/maps/@"+ref.lat+","+ref.lng+",22z","_blank");
  }

  openUrl(url: any) {
    if(url!=null && url.length>0)
      window.open(url,"_blank");
  }
}
