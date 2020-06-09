import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders,HttpParams, HttpClient} from '@angular/common/http';
import{Schedule}from'../classes/Schedule'
import { Scheduler } from 'rxjs/internal/Scheduler';
import { ScheduleR } from 'src/app/classes/ScheduleR';
import { SA } from '../classes/SA';
@Injectable
({
    providedIn: 'root'
})
  export class schduleSevice
{
  
   constructor(public http: HttpClient){}
  baseUrl="http://localhost:55281"
  getSchedule():Observable<Array<ScheduleR>>
  {
    
return this.http.get<Array<ScheduleR>>(this.baseUrl+"/api/getAllSchedules");
 
  }
  AddSchdule(s:SA)
  {
   try{
  this.http.post(this.baseUrl + "/api/addSchdule",s) 
    .subscribe(()=>{console.log("successfully")
   });
  }catch{console.log("נפל")};
  
 }
}