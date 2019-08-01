import {Component, Inject, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ConfigService} from '../config.service';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {api} from '../tools';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ModalInputComponent} from '../modal-input/modal-input.component';

@Component({
  selector: 'app-list-works',
  templateUrl: './list-works.component.html',
  styleUrls: ['./list-works.component.css']
})
export class ListWorksComponent implements OnInit {
  works: any[]=[];
  now:number=new Date().getTime();
  showManual:boolean=false;
  @Input("max_items") max_items:number=50;

  totalDuration: string="";

  constructor(public route:ActivatedRoute,
              public api:ApiService,
              public dialog: MatDialog,
              public router:Router,
              public userData:UserService,
              public config:ConfigService) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      let command=params["command"] || "";
      if(command=="mark") {
        this.userData.init(localStorage.getItem("email"),() => {
          this.userData.loadProducts(() => {
            if (this.userData.user.load_products[0].dtStartWork == null || this.userData.user.load_products[0].dtStartWork == 0)
              this.onStart();
            else
              this.onEnd();

            this.router.navigate(["main"]);
          });
        },()=>{
          this.router.navigate(["login"]);
        });
      }
    });

    setTimeout(()=>{
      this.refresh();
    },1500);
  }

  refresh(){
    this.totalDuration="";
    this.now=new Date().getTime();
    var currentMonth=0;
    if(this.userData.getworks()==null)return;
    this.userData.getworks().subscribe((wks:any)=>{
      this.works=wks.items.slice(0,this.max_items);
      wks.items.forEach((wk)=>{
        wk.duration=(Number(wk.dtEnd)-Number(wk.dtStart))/60000;
        var m=new Date(Number(wk.dtStart)).getMonth();
        if(m==new Date().getMonth())
          currentMonth+=wk.duration;
      });
      var h=Math.trunc(currentMonth/60);

      if(h>0)
        this.totalDuration=h+"h"+this.totalDuration;
      else
        this.totalDuration=Math.trunc(currentMonth) % 60+" min";
    })
  }


  delete(w:any){
    this.userData.delwork(w).subscribe(()=>{
      setTimeout(()=>{this.refresh();},1500);
    })
  }

  onInsert(res){
    let w={
      label:this.config.values.work.label_newwork.replace("%product_name%",this.userData.user.load_products[0].label),
      product_id:this.userData.user.load_products[0].id,
      dtStart:res.dtStart,
      dtEnd:res.dtStart+res.duration*60*1000
    };
    this.add(w);
    this.showManual=false;
  }

  onStart() {
    this.userData.user.load_products[0].dtStartWork=new Date().getTime();
    this.api.startwork(this.userData.user.load_products[0].id).subscribe(()=>{
      this.refresh();
    });
  }


  onEnd() {
    let dtStart=this.userData.user.load_products[0].dtStartWork;
    let dtEnd=new Date().getTime();
    let label=this.config.values.work.label_newwork.replace("%product_name%",this.userData.user.load_products[0].label);
    let w={
      label:label,
      product_id:this.userData.user.products[0],
      dtStart:dtStart,
      dtEnd:dtEnd
    };

    this.add(w);
  }

  /**
   * Ajoute une consommation
   * @param w
   */
  add(w:any){
    this.userData.addwork(w).subscribe(()=>{
      this.userData.user.load_products[0].dtStartWork=0;
      this.refresh();
    });
  }
}

