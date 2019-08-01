import {Component, Input, OnInit} from '@angular/core';
import {hashCode} from '../tools';

@Component({
  selector: 'app-tuto',
  templateUrl: './tuto.component.html',
  styleUrls: ['./tuto.component.css']
})
export class TutoComponent implements OnInit {

  @Input("text") text: string="";
  @Input("delay") delay=0.01;
  @Input('if') _if: boolean=true;

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      if(this._if){
        let code=hashCode(this.text);
        let res=localStorage.getItem(code);
        if(res!=null)
          this.text="";
        else{
          localStorage.setItem(code,"read"+new Date().getTime());
          let duration=this.text.split(" ").length*800;
          setTimeout(()=>{
            this.text="";
          },3000+duration);
        }
      }
    },this.delay*1000);
  }

  hideTuto() {
    this.text="";
  }
}
