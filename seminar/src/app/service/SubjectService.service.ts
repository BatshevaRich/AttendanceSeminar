import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders,HttpParams, HttpClient} from '@angular/common/http';
import { subject } from 'src/app/classes/subject';


@Injectable({
    providedIn: 'root'
  })
  export class SubjectSevice{
  
   constructor(public http: HttpClient){}
  baseUrl="http://localhost:55281"
  
   AddSubject(s:subject)
   {
    let header = new HttpHeaders();
    header = header.set("Content-Type", "application/json");
    let options = { headers: header };
    this.http.post(this.baseUrl + "/api/addSubject",s,options) 
     .subscribe(()=>{
    });
  }
  getAllSubject():Observable<subject[]>
  {
    return this.http.get<subject[]>(this.baseUrl+"/api/getAllSubjects");
 
  }
  deleteSubject(id:number)
  {
    let header = new HttpHeaders();
    //header = header.set("Content-Type", "application/json");
    //let options = { headers: header };//ככה???????????
    this.http.delete(this.baseUrl+"/api/removeSubject/"+id/*,options*/).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
     
  }
  update(s:subject)
  {
    this.http.put(this.baseUrl+"/api/updateSubject",s).subscribe();
  }
}