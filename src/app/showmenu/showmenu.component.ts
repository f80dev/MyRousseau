import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-showmenu',
  templateUrl: './showmenu.component.html',
  styleUrls: ['./showmenu.component.css']
})
export class ShowmenuComponent implements OnInit {

  constructor(public router:Router,public userService:UserService) { }

  ngOnInit() {
    this.userService.loadProducts();
  }


  showMenu(){
    this.router.navigate(["compose_menu"]);
  }

  showBlog() {
    var url=encodeURIComponent(btoa("https://cibisblog.com/"));
    this.router.navigate(["/catalogue/"+url])
  }
}
