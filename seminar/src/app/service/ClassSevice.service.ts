import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams, HttpClient} from '@angular/common/http';
import { Class } from 'src/app/classes/class';
import { baseURL } from '../../environments/environment';
@Injectable
({
    providedIn: 'root'
})
  export class ClassSevice {

   constructor(public http: HttpClient) {}

   AddClass(c: Class) {
    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');
    const options = { headers: header };
    this.http.post(baseURL + 'addClass', JSON.stringify(c), options).subscribe(d => {
      console.log(d);
    }) ;

  }
  getAllClass(): Observable<Class[]> {
    return this.http.get<Class[]>(baseURL + 'getAllClasses');

  }
  removeClass(id: number) {
    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');
    const options = { HttpParams: id, headers: header }; // ככה???????????
    this.http.delete(baseURL + 'removeClass/' + id).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    // this.http.delete(this.baseUrl+"/api/removeClass/"+id,options)

  }
}
