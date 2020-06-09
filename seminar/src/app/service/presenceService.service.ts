import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams, HttpClient} from '@angular/common/http';
import {Presence} from '../classes/presence';
import {Dictionary} from '../classes/Dictionary';
import { addPresence } from 'src/app/classes/addPresance';
import { baseURL } from '../../environments/environment';
@Injectable
({
    providedIn: 'root'
})
  export class PresenceService {

    constructor(public http: HttpClient) {}
   setPresences(presence: addPresence) {

         let header = new HttpHeaders();
         header = header.set('Content-Type', 'application/json');
         const options = { headers: header };
         this.http.post(baseURL + 'addPresnce', presence, options).subscribe();


    }
    gatReport(): Observable<Dictionary[]> {
      return this.http.get<Dictionary[]>(baseURL + 'getReport' , );
    }
}
