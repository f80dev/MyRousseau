import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  @Input() public dtSchedule:any={};
  motif="";
  sch_hour="15:00";
  sch_date="04/02/2019";

  constructor(public router:Router,public userService:UserService) { }

  ngOnInit() {

  }

  askForAppointment() {
    var dt:Date=new Date(this.sch_date);
    dt.setHours(parseInt(this.sch_hour.split(":")[0]))
    this.userService.askforappointment(dt.getTime(),this.motif).subscribe(()=>{
      this.router.navigate(["main"]);
    });
  }
}
