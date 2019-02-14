import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-next-appointment',
  templateUrl: './next-appointment.component.html',
  styleUrls: ['./next-appointment.component.css']
})
export class NextAppointmentComponent implements OnInit {

  appointments:any[]=[];

  constructor(public router:Router,public userService:UserService) { }

  ngOnInit() {

  }

  ngAfterContentInit(){
    setTimeout(()=>{
      this.userService.getappointments().subscribe((r:any)=>{
        this.appointments=r.items;
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
