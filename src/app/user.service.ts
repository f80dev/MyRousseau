import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {$$, api} from './tools';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user:any={}

  constructor(public http: HttpClient) { }


  public askforappointment(dt:number,motif="",duration=30){
    return this.http.get(api("askforappointment","durationInMin="+duration+"&email="+this.user.email+"&dt="+dt+"&motif="+motif))
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

  public loadProducts(func=null){
    this.http.get(api("getproducts","email="+this.user.email)).subscribe((resp:any)=>{
      this.user.load_products=resp.items;
      if(func!=null)func(resp.items);
    });
  }

  public set(r:any){
    if(r==null)return;
    if(!r.hasOwnProperty("dtLastNotif"))r.dtLastNotif=1e9;
    r.notif=(r.dtLastNotif!=1e9)
    this.user=r;
    this.loadProducts();
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

  addproduct(p: any) {
    return this.http.post(api("addproduct","email="+this.user.email),p);
  }

  cancelappointments(id: string) {
    return this.http.get(api("cancelappointments","email="+this.user.email+"&appointment="+id));
  }

  delproduct(index: number) {
    return this.http.get(api("delproduct","email="+this.user.email+"&index="+index));
  }

  getmessages() {
    return this.http.get(api("getmessages","email="+this.user.email));
  }

  readmessage(messageId:string) {
    return this.http.get(api("readmessage","email="+this.user.email+"&message="+messageId));
  }

  postmessage(text: string,delay:number) {
    let message={text:text,from:this.user.firstname,author:this.user.id,dtStart:new Date().getTime(),dtEnd:new Date().getTime()+delay*1000*60*60};
    return this.http.post(api("addmessage",""),message);
  }

  addwork(w:any) {
    w.owner=this.user.email;
    return this.http.post(api("addwork",""),w);
  }

  updateuser(u:any) {
    return this.http.post(api("updateuser","email="+this.user.email),u);
  }

  addmessage(m:any) {
    return this.http.post(api("addmessage",""),m);
  }

  getworks() {
    if(this.user.products!=null){
      var productid=this.user.products[0];
      return this.http.get(api("getworks","productid="+productid));
    }
  }

  sendphoto(param: { photo: string ,type:string}) {
    return this.http.post(api("sendphoto","email="+this.user.email),param);
  }

  delwork(w: any) {
    w.owner=this.user.email;
    return this.http.get(api("delwork","work_id="+w.id));
  }

  addreference(ref: any) {
    return this.http.post(api("addreference","user="+this.user.email),ref);
  }

  delreference(ref: any) {
    return this.http.get(api("delreference","user="+this.user.email+"&refid="+ref.id));
  }

  addvote(refid: string, note: number) {
    return this.http.get(api("addvote","user="+this.user.email+"&refid="+refid+"&note="+note));
  }

  addItem(item: any) {
    return this.http.post(api("additem","user="+this.user.email),item);
  }

  addtomenu(nextDate: number, groupe:string,id: any, item: any) {
    return this.http.post(api("addtomenu","user="+this.user.email+"&dtStart="+nextDate+"&groupe="+groupe),item);
  }

  deleteMenu(id: string) {
    return this.http.get(api("deletemenu","user="+this.user.email+"&idmenu="+id));
  }
}
