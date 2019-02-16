import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-car-picker',
  templateUrl: './car-picker.component.html',
  styleUrls: ['./car-picker.component.css']
})
export class CarPickerComponent implements OnInit {

  modeles: any;
  marques=[];
  references=[];

  @Output('onclick') onclick: EventEmitter<any>=new EventEmitter();
  selMarque: string=null;
  selRef: string=null;


  constructor(public api:ApiService) {
  }


  ngOnInit() {
    this.api.getmodeles().subscribe((ms:any)=>{
      this.modeles=ms;
      ms.forEach(m => {
        if(this.marques.indexOf(m.marque)==-1)
          this.marques.push(m.marque);
      })
    })
  }


  changeMarque() {
    this.selRef=null;
    this.modeles.forEach(m=>{
      if(m.marque==this.selMarque)
        this.references=m.modeles;
    });
  }

  selCar(ref) {
    this.onclick.emit({car:this.selMarque+"/"+this.selRef});
  }
}
