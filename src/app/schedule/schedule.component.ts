import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AmazingTimePickerService} from 'amazing-time-picker';
import {tirage} from '../tools';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  @Input() public dtSchedule:any={};
  @Input("title") title:string="";
  @Input("lang") lang:string="fr";
  @Input("defaultDuration") defaultDuration:number=9;
  @Input("durations") durations:any[]=[];
  motif:string="";
  sch_hour="09:00";
  sch_date:string="";
  duration:number=540;

  @Input("needMotif") needMotif:boolean=true;
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  sch_end_hour="17:00";

  constructor(public atp:AmazingTimePickerService,
              public config:ConfigService,
              public router:Router,public userService:UserService,public route: ActivatedRoute) { }

  ngOnInit() {
    this.sch_date=new Date(new Date().getTime()).toISOString();
    this.route.params.subscribe(params => {
        this.motif = params["motif"];
    });
    this.calculEndHour();
  }

  open(){
    const amazingTimePicker = this.atp.open({
      theme: 'material-blue',
      time:"08:00",
      locale:"fr"
    });
    amazingTimePicker.afterClose().subscribe(time => {
      this.sch_hour=time;
      this.calculEndHour();
    });
  }

  getFullDate(_date:string=null,_time:string=null):Date{
    if(_time==null){
      _time=new Date().toISOString().split("T")[1];
      if(new Date().getMinutes()<10)
        _time=_time.substr(0,_time.length-2)+"0"+_time.substr(_time.length-1);
    }
    var fullDate=_date+"T"+_time;
    if(fullDate.indexOf("+")==-1)fullDate+="+02:00";
    return new Date(fullDate);
  }

  convertStringTime(s:string){
    var h=parseInt(s.split(":")[0]);
    var m=parseInt(s.split(":")[1]);
    return (h*60+m);
  }

  askForAppointment() {
    var _max=this.config.values.schedule.max_time;
    if(this.convertStringTime(this.sch_end_hour)>this.convertStringTime(_max))
      this.sch_end_hour=_max;

    var d=new Date(this.sch_date);
    d.setHours(Number(this.sch_hour.split(":")[0]));
    d.setMinutes(Number(this.sch_hour.split(":")[1]));
    var dtStart=new Date(d);

    d.setHours(Number(this.sch_end_hour.split(":")[0]));
    d.setMinutes(Number(this.sch_end_hour.split(":")[1]));
    var dtEnd=new Date(d);

    var duration=(dtEnd.getTime()-dtStart.getTime())/60000;

      this.close.emit({dtStart:dtStart.getTime(),motif:this.motif,duration:duration});

      // this.userService.askforappointment(dtStart.getTime(),this.motif,this.duration).subscribe(()=>{
      //   this.router.navigate(["main"]);
      // });
  }

  calculEndHour(){
    var _end=this.convertStringTime(this.sch_hour)+tirage(20)-10+this.defaultDuration*60;
    var _max=this.config.values.schedule.max_time;
    if(_end>this.convertStringTime(_max)) _end=this.convertStringTime(_max);

    this.sch_end_hour=Math.trunc(_end / 60) + ":" + (_end % 60);
  }
}
