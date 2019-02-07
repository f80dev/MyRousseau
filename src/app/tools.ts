import {environment} from '../environments/environment';

export function api(service:string ,param : string, encode : boolean = true):string  {
  if (encode) param = encodeURI(param);
  return(environment.root_api+ "/" + service + "?" + param);
}
