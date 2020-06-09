import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Teacher } from 'src/app/classes/Techer';

import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { baseURL } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(public http: HttpClient) { }

  GetAllTeacher(): Observable<Teacher[]> {

    // let param = new HttpParams();
    // param = param.set("search", "aaa");
    // let options = { params: param };

    return this.http.get<Teacher[]>(baseURL + 'getAllTeachers');

  }
  AddTaecher(techer: Teacher) {

    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');
    const options = { headers: header };
    this.http.post(baseURL + 'addTeacher', techer, options)
      .subscribe();
  }
  deleteTeacher(id: number) {
    const header = new HttpHeaders();
    // header = header.set("Content-Type", "application/json");
    // let options = { headers: header };//ככה???????????
    this.http.delete(baseURL + 'removeTeacher/' + id).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    // .subscribe();
  }

  update(n: Teacher) {
    this.http.put(baseURL + 'updateTeacher', n).subscribe();
  }
}
