import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Schedule } from '../classes/Schedule';
import { Scheduler } from 'rxjs/internal/Scheduler';
import { ScheduleR } from 'src/app/classes/ScheduleR';
import { SA } from '../classes/SA';
import { baseURL } from '../../environments/environment';
@Injectable
  ({
    providedIn: 'root'
  })
export class schduleSevice {

  constructor(public http: HttpClient) { }
  getSchedule(): Observable<Array<ScheduleR>> {

    return this.http.get<Array<ScheduleR>>(baseURL + 'getAllSchedules');

  }
  AddSchdule(s: SA) {
    try {
      this.http.post(baseURL + 'addSchdule', s)
        .subscribe(() => {
          console.log('successfully');
        });
    } catch { console.log('נפל'); }

  }
}
