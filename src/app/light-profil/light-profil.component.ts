import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {ConfigService} from '../config.service';
import {ApiService} from '../api.service';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-light-profil',
  templateUrl: './light-profil.component.html',
  styleUrls: ['./light-profil.component.css']
})
export class LightProfilComponent implements OnInit {
  takePicture: boolean=false;
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  private multipleWebcamsAvailable: boolean;

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
    this.userService.addproduct(ref).subscribe((r:any)=>{
        this.userService.user=r;
        this.userService.loadProducts();
    });
  }

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
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

  triggerSnapshot() {
    this.trigger.next();
  }
}
