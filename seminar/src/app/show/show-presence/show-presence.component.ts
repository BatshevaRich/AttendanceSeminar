import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Presence } from 'src/app/classes/presence';
import { Schedule } from 'src/app/classes/Schedule';
import { Class } from 'src/app/classes/class';
@Component({
  selector: 'app-show-presence',
  templateUrl: './show-presence.component.html',
  styleUrls: ['./show-presence.component.css']
})
export class ShowPresenceComponent implements OnInit {
  @Input() day: Schedule;
  @Input() ha: Schedule;
  l1: Schedule;
  constructor() {
  }

  ngOnInit() {
  }

}
