import {Component, Input, OnInit} from '@angular/core';
import {getDelay} from '../tools';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input("label") label: string="";
  @Input("end") end: number=0;
  @Input("server") server: number=null;
  @Input("noSecond") noSecond: boolean=false;
  @Input("onlyPositif") onlyPositif:boolean =false;
  handle:any=null;
  delay:string="";


  constructor() {
    this.handle=setInterval(()=>{
      this.refresh();
    },1000);
  }

  ngOnInit() {
  }

  refresh(){
    if(this.end<new Date().getTime()){
      if(this.handle!=null){
        clearInterval(this.handle);
        this.handle=null;
      }
    }
    else{
      if(!this.onlyPositif || this.end>new Date().getTime()){
        var out=getDelay(this.end,"fr","jours",this.server);
        if(this.noSecond)out=out.split(":")[0];
        if(this.label!="")
          this.delay=this.label+" "+out;
        else
          this.delay=out;
      }
    }

  }


}
