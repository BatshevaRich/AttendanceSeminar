import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { subject } from 'src/app/classes/subject';
import { baseURL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectSevice {

  constructor(public http: HttpClient) { }

  AddSubject(s: subject) {
    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');
    const options = { headers: header };
    this.http.post(baseURL + 'addSubject', s, options)
      .subscribe(() => {
      });
  }
  getAllSubject(): Observable<subject[]> {
    return this.http.get<subject[]>(baseURL + 'getAllSubjects');

  }
  deleteSubject(id: number) {
    const header = new HttpHeaders();
    // header = header.set("Content-Type", "application/json");
    // let options = { headers: header };//ככה???????????
    this.http.delete(baseURL + 'removeSubject/' + id/*,options*/).subscribe(
      res => console.log(res),
      err => console.log(err)
    );

  }
  update(s: subject) {
    this.http.put(baseURL + 'updateSubject', s).subscribe();
  }
}
