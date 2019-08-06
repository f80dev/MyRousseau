import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {ConfigService} from '../config.service';
import {ApiService} from '../api.service';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Observable, Subject} from 'rxjs';
import {resizeBase64Img} from '../tools';

@Component({
  selector: 'app-light-profil',
  templateUrl: './light-profil.component.html',
  styleUrls: ['./light-profil.component.css']
})
export class LightProfilComponent implements OnInit {
  takePicture: boolean=false;
  waiting=false;
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  webcamsAvailable=0;

  constructor(public api:ApiService,public config:ConfigService,
              public userService:UserService,public router:Router) {

  }

  addProduct() {
    //TODO
  }

  takePhoto() {
    this.takePicture=true;
  }

  linkServices() {
    var p=this.api.products[this.userService.user.products[0]];
    if(p!=null){
      this.router.navigate(["services",p.id]);
    }

  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }

  selproduct(ref) {
    this.waiting=true;
    this.userService.addproduct(ref).subscribe((r:any)=>{
      this.userService.user=r;
      this.userService.loadProducts(()=>{
        this.waiting=false;
      })
    });
  }

  initAvailableCameras(){
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        if(mediaDevices==null)
          this.webcamsAvailable =0;
        else
          this.webcamsAvailable = mediaDevices.length;
      });
  }

  ngOnInit(): void {
   setTimeout(()=>{
     this.initAvailableCameras();
   },500);
  }


  handleImage($event: WebcamImage) {
    this.userService.sendphoto({photo:$event.imageAsDataUrl,type:"product"}).subscribe(()=>{});
    this.userService.user.load_products[0].photo=$event.imageAsDataUrl;
    this.takePicture=false;
  }

  cameraWasSwitched($event: string) {
    
  }

  handleInitError($event: WebcamInitError) {
    
  }

  triggerSnapshot(takePhoto:boolean) {
    if(takePhoto)
      this.trigger.next();
    else
      this.takePicture=false;
  }

  showproduct(id:string) {
    this.router.navigate(["product/"+id]);
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        resizeBase64Img(e.target.result,400,0.5,(img)=>{
          this.userService.user.load_products[0].photo = img;
          this.userService.sendphoto({photo:img,type:"product"}).subscribe(()=>{});
        });
      };
      reader.readAsDataURL(inputNode.files[0]);
    }
  }
}
