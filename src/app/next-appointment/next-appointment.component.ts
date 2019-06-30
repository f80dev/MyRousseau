import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-next-appointment',
  templateUrl: './next-appointment.component.html',
  styleUrls: ['./next-appointment.component.css']
})
export class NextAppointmentComponent implements OnInit {

  appointments:any[]=[];
  @Input() count=1;
  @Input() new_button=true;

  constructor(public config:ConfigService,public router:Router,public userService:UserService) { }

  ngOnInit() {

  }

  ngAfterContentInit(){
    setTimeout(()=>{
      this.userService.getappointments().subscribe((r:any)=>{
        this.appointments=r.items;
        if(this.count<this.appointments.length)
          this.appointments=this.appointments.slice(0,this.count);
      });
    },1000);

  }

  ask_appointment() {
    this.router.navigate(["schedule"]);
  }

  cancelAppointment(app: any) {
    this.userService.cancelappointments(app.id).subscribe((r:any)=>{
      this.appointments=r.items;
    });
  }
}
