import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Teacher } from 'src/app/classes/Techer';

import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

  

@Injectable({
    providedIn: 'root'
  })
  export class teacherService
  {
    constructor(public http:HttpClient){}
  baseUrl="http://localhost:55281";

  GetAllTeacher(): Observable<Teacher[]> {

    // let param = new HttpParams();
    // param = param.set("search", "aaa");
    // let options = { params: param };

    return this.http.get<Teacher[]>(this.baseUrl + '/api/getAllTeachers');

  }
AddTaecher(techer:Teacher){

  let header = new HttpHeaders();
  header = header.set("Content-Type", "application/json");
  let options = { headers: header };
  this.http.post(this.baseUrl + "/api/addTeacher",techer,options) 
   .subscribe();
  }
   deleteTeacher(id:number)
   {
    let header = new HttpHeaders();
    // header = header.set("Content-Type", "application/json");
    // let options = { headers: header };//ככה???????????
    this.http.delete(this.baseUrl+"/api/removeTeacher/"+id).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    //.subscribe();
   }

    update(n:Teacher)
   {
      this.http.put(this.baseUrl+"/api/updateTeacher", n).subscribe()
   }
  }