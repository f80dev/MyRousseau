import {Component, OnInit, ViewChild} from '@angular/core';
import {clear} from '../tools';
import {MatSidenav} from '@angular/material';
import {SafePipe} from 'safe-pipe';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  url:string="http://www.rousseau-auto.com/groupe-rousseau/groupe-rousseau.php";

  constructor() { }

  ngOnInit() {
  }

  clearframe() {
    //clear(this.out.nativeElement,"//*[@id=\"main-content\"]")
  }
}
