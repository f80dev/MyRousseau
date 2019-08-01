import { Injectable } from '@angular/core';
import {api, direct_api} from './tools';
import {HttpClient} from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  products=[];

  constructor(public http: HttpClient) { }

  public add(user:any,dtLastNotif=0){
    return this.http.post(api("adduser","dtLastNotif="+dtLastNotif),user)
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
    return this.http.get(api("getusers",""));
  }

  public getproducts(id=""){
    return this.http.get(api("getproducts","id="+id));
  }

  public getappointments(){
    return this.http.get(api("getappointments",""));
  }

  public getservices(id:string=null){
      return this.http.get(api("getservices","product="+id));
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

  initProducts(func=null) {
    if(this.products==null || this.products.length==0){
      this.getproducts().subscribe((r:any)=>{
        this.products=r.items;
        if(func!=null)func(this.products);
      });
    } else
      func(this.products);
  }

  startwork(product_id:string) {
    return this.http.get(api("startwork","product_id="+product_id));
  }


  getresp(product_id: string) {
    return this.http.get(api("getresp","product_id="+product_id));
  }

  getreferences(category:string) {
    return this.http.get(api("getreferences","category="+category));
  }

  getItems(filter: string) {
    return this.http.get(api("getitems","category="+filter));
  }

  getMenus(dtStart:number,filter:string=null,limit=20) {
    return this.http.get(api("getmenus","dtStart="+dtStart+"&filter="+filter+"&limit="+limit));
  }

  nextmenudate(dtStart:number=null) {
    return this.http.get(api("nextmenudate","dtStart="+dtStart));
  }

  isopen(dt:number,func:Function) {
    this.http.get(api("isopen","dt="+dt)).subscribe((r:any)=>{
      if(r.code==200)
        func(true);
      else
        func(false);
    });
  }

  deleteitem(id: string) {
    return this.http.get(api("deleteitem","item_id="+id));
  }

  init() {
    return this.http.get(api("init",""));
  }
}
