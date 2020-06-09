import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders,HttpParams, HttpClient} from '@angular/common/http';
import{Presence}from'../classes/presence'
import{Dictionary}from'../classes/Dictionary'
import { addPresence } from 'src/app/classes/addPresance';

@Injectable
({
    providedIn: 'root'
})
  export class ServicePresence
{
  
    constructor(public http: HttpClient){}
   baseUrl="http://localhost:55281"
   setPresences(presence:addPresence){
    
         let header = new HttpHeaders();
         header = header.set("Content-Type", "application/json");
         let options = { headers: header };
         this.http.post(this.baseUrl + "/api/addPresnce",presence,options).subscribe();
       
    
    }
    gatReport():Observable<Dictionary[]>{
      return this.http.get<Dictionary[]>(this.baseUrl + "/api/getReport" , );
    }
}
