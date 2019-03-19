import { Injectable } from '@angular/core';
import {api, direct_api} from './tools';
import {HttpClient} from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  public add(user:string,firstname:string,lastname:string,dtlastnotif:number,modele:string=""){
    return this.http.get(api("adduser","dtlastnotif="+dtlastnotif+"&email="+user+"&firstname="+firstname+"&lastname="+lastname+"&modele="+modele))
  }

  public raz(){
    return this.http.get(api("raz","")).subscribe(()=>{})
  }

  public getcar(modele:string){
    return this.http.get(api("getcar","modele="+modele));
  }

  public login(email:string,password:string=""){
    var complete="";
    if(password!=null)complete="&password="+password;
    return this.http.get(api("login","email="+email+complete))
  }

  public getusers(){
    return this.http.get(api("getusers",""))
  }

  public getappointments(){
    return this.http.get(api("getappointments",""))
  }

  public getservices(modele:string=null){
    if(modele==null)
      return this.http.get(api("getservices",""))
    else
      return this.http.get(api("getservices","modele="+modele))
  }

  public addgift(user:string,gift:any){
    return this.http.post(api("addgift","email="+user),gift);
  }

  getgifts(email:string,limit:number) {
    if(email==null)email="null";
    return this.http.get(api("getgifts","email="+email+"&limit="+limit));
  }

  loginService(service: string) {
    return this.http.get(direct_api("api/connectTo","service="+service+"&domain="+location.host))
  }

  getmodeles() {
    return this.http.get(api("getmodeles",""));
  }


  resend_code(email: string) {
    return this.http.get(api("resend_code","email="+email));
  }
}
