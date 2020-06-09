import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/classes/Schedule';

@Component({
  selector: 'app-Day',
  templateUrl: './Day.component.html',
  styleUrls: ['./Day.component.css']
})
export class DayComponent implements OnInit {

  days:String[]=["ראשון","שני","שלישי","רביעי","חמישי","שישי"];
  schedule:Schedule[];
  constructor() { }

  ngOnInit() {
  }

}
