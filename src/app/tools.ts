import {environment} from '../environments/environment';

export function api(service:string ,param : string, encode : boolean = true):string  {
  if (encode) param = encodeURI(param);
  return(environment.root_api+ "/" + service + "?" + param);
}

export function direct_api(service:string ,param : string, encode : boolean = true):string  {
  if (encode) param = encodeURI(param);
  return(environment.domain+ "/" + service + "?" + param);
}


export function openGeneral(item,domain)  {
  return new Promise((resolve,reject)=>{
      let url = environment.domain + "/api/connectTo?service=" + item+"&domain="+domain;
      var hwnd:any=window.open(url, "Login", "menubar=0,status=0,height=600,titlebar=0,width=400");
      //setTimeout(()=>{hwnd.width=300;hwnd.height=500;},1500);
      window.addEventListener("message", (event:  any)=>{
        if (event.origin !== "https://www.shifumix.com")
          reject();
        else{
          resolve(event.data);
        }
      }, false);
  });
}



export function getDelay(dtStart,lang="en",label_day="jours",serverNow=null){
  if(dtStart==undefined)return "";
  if(serverNow==null)serverNow=new Date().getTime();
  var delay=Math.abs(dtStart-serverNow);

  if(delay>24*3600*1000){
    var nbJours=Math.trunc(delay/(24*3600*1000));
    return nbJours+" "+label_day;
  }

  if(lang==undefined)lang="fr";
  var affichage =new Date(delay).toUTCString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  if(affichage.indexOf("00:")==0)
    affichage=affichage.split(":")[1]+":"+affichage.split(":")[2];
  else
    affichage=affichage.split(":")[0]+"h"+affichage.split(":")[1];

  return affichage;
}

export function reload(){
  document.location.href=environment.domain;
}

export function clear(elt:any,xpath:string){
  var doc=elt.contentDocument;
  var to_keep=doc.querySelector(xpath);
  to_keep.parentElement.childNodes.forEach((n)=>{
    if(n!=to_keep)n.style.display="none";
  });
}
