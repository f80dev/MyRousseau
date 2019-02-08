import {Component, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import {filter, map, withLatestFrom} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';
import {MatSidenav} from '@angular/material';
import {UserService} from '../user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('drawer') drawer: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(public userService:UserService,private breakpointObserver: BreakpointObserver,public router:Router) {
    router.events.pipe(
      withLatestFrom(this.isHandset$),
      filter(([a, b]) => b && a instanceof NavigationEnd)
    ).subscribe(_ => {
      if(this.drawer!=null)this.drawer.close();
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(["/login"]);
  }
  
  }
