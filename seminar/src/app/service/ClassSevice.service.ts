import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders,HttpParams, HttpClient} from '@angular/common/http';
import { Class } from 'src/app/classes/class';

@Injectable
({
    providedIn: 'root'
})
  export class ClassSevice
{
  
   constructor(public http: HttpClient){}
  baseUrl="http://localhost:55281"
  
   AddClass(c:Class)
   {
    let header = new HttpHeaders();
    header = header.set("Content-Type", "application/json");
    let options = { headers: header };
    this.http.post(this.baseUrl + "/api/addClass",JSON.stringify(c),options).subscribe(d=>{
      console.log(d);
    }) ;
   
  }
  getAllClass():Observable<Class[]>
  {
    return this.http.get<Class[]>(this.baseUrl+"/api/getAllClasses");
 
  }
  removeClass(id:number)
  {
    let header = new HttpHeaders();
    header = header.set("Content-Type", "application/json");
    let options = { HttpParams:id,headers: header };//ככה???????????
    this.http.delete(this.baseUrl+"/api/removeClass/"+id).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    // this.http.delete(this.baseUrl+"/api/removeClass/"+id,options)
     
  }
}