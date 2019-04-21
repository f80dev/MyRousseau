import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConfigService} from '../config.service';
import {UserService} from '../user.service';
import {Observable, Subject} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  takePicture: boolean=false;
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  private multipleWebcamsAvailable: boolean;

  @Input("profil") profil:any={email:"",firstname:"",lastname:"",notif:false,share:false};
  @Output('onchange') onchange: EventEmitter<any>=new EventEmitter();

  constructor(public router:Router,public config:ConfigService,public userService:UserService) {

  }


  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }

  handleImage($event: WebcamImage) {
    this.userService.sendphoto({photo:$event.imageAsDataUrl,type:"perso"}).subscribe(()=>{});
    this.userService.user.photo=$event.imageAsDataUrl;
    this.takePicture=false;
  }

  cameraWasSwitched($event: string) {
  }

  handleInitError($event: WebcamInitError) {

  }

  triggerSnapshot() {
    this.trigger.next();
  }

  ngOnInit() {
    this.profil.photo=this.config.values.avatar;
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  deleteProduct() {
    this.userService.delproduct(0).subscribe((r)=>{
      this.userService.set(r);
      this.router.navigate(["main"]);
    });
  }


}
