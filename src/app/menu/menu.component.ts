import {Component, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import {filter, map, withLatestFrom} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';
import {MatSidenav} from '@angular/material';
import {UserService} from '../user.service';
import {environment} from '../../environments/environment';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('drawer') drawer: MatSidenav;
  version:string="";
  logo:string="";
  menus:any[]=[];
  menu_appli:any={};

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

    
  constructor(public config:ConfigService,public userService:UserService,private breakpointObserver: BreakpointObserver,public router:Router) {
    //Construction du slide menu
    config.init((conf)=>{
      this.menus=[];
      conf.menus.forEach(m=>{
        m.href=m.href.replace("$domain_server$",environment.domain);
        if(m.online==null || m.online){
          m.routerLink="/catalogue/"+encodeURIComponent(btoa(m.href));
          if(m.description==null)m.description=m.title;
          this.menus.push(m);
        }
      });
    });

    router.events.pipe(
      withLatestFrom(this.isHandset$),
      filter(([a, b]) => b && a instanceof NavigationEnd)
    ).subscribe(_ => {
      if(this.drawer!=null)this.drawer.close();
    });
    this.version=environment.version;


  }

  ngOnInit(){
    this.userService.init(localStorage.getItem("email"));
  }

  logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    this.userService.logout();
    this.router.navigate(["/login"]);
  }
  
  }
