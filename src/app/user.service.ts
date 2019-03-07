import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {api} from './tools';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user:any={}

  constructor(public http: HttpClient) { }


  public askforappointment(dt:number,motif=""){
    return this.http.get(api("askforappointment","email="+this.user.email+"&dt="+dt+"&motif="+motif))
  }

  public getappointments(){
    return this.http.get(api("getappointments","email="+this.user.email))
  }

  public init(email:string=null,func_sucess=null,func_failed=null){
    if(email==null)
      email=this.user.email;

    if(email==null){
      if(func_failed!=null)func_failed();
    } else {
      return this.http.get(api("getuser","email="+email)).subscribe((r:any)=>{
        this.set(r);
        if(func_sucess!=null)func_sucess();
      });
    }
  }

  public set(r:any){
    if(r==null)return;
    if(!r.hasOwnProperty("dtLastNotif"))r.dtLastNotif=1e9;
    r.notif=(r.dtLastNotif!=1e9)
    this.user=r;
  }

  logout() {
    localStorage.removeItem("login");
    localStorage.removeItem("email");
    this.user={};
  }

  addgift(id: string) {
    return this.http.get(api("addgift","email="+this.user.email+"&gift="+id));
  }

  share(email: string,firstname="") {
    return this.http.get(api("share","email="+this.user.email+"&dest="+email+"&firstname="+firstname))
  }

  addcar(car: string) {
    return this.http.get(api("addcar","email="+this.user.email+"&modele="+car))
  }

  cancelappointments(id: string) {
    return this.http.get(api("cancelappointments","email="+this.user.email+"&appointment="+id))
  }

  delcar(index: number) {
    return this.http.get(api("delcar","email="+this.user.email+"&index="+index))
  }

}
