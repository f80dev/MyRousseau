import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-next-appointment',
  templateUrl: './next-appointment.component.html',
  styleUrls: ['./next-appointment.component.css']
})
export class NextAppointmentComponent implements OnInit {

  appointments:any[]=[];

  constructor(public userService:UserService) { }

  ngOnInit() {
    this.userService.getappointments().subscribe((r:any)=>{
      this.appointments=r.items;
    })
  }

}
