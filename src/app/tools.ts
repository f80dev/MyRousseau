import {environment} from '../environments/environment';

export function api(service:string ,param : string, encode : boolean = true):string  {
  if (encode) param = encodeURI(param);
  return(environment.root_api+ "/" + service + "?" + param);
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
