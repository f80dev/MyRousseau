import { Injectable } from '@angular/core';
import {api} from './tools';
import {HttpClient} from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  public add(user:string,firstname:string,lastname:string,modele:string=""){
    return this.http.get(api("adduser","email="+user+"&firstname="+firstname+"&lastname="+lastname+"&modele="+modele))
  }

  public raz(){
    return this.http.get(api("raz","")).subscribe(()=>{})
  }

  public getcar(modele:string){
    return this.http.get(api("getcar","modele="+modele));
  }

  public login(email:string,password:string=""){
    return this.http.get(api("login","email="+email+"&password="+password))
  }


  public getusers(){
    return this.http.get(api("getusers",""))
  }

  public getappointments(){
    return this.http.get(api("getappointments",""))
  }

  public addgift(user:string,gift:any){
    return this.http.post(api("addgift","email="+user),gift);
  }

  getgifts(email:string) {
    if(email==null)email="null";
    return this.http.get(api("getgifts","email="+email));
  }
}
