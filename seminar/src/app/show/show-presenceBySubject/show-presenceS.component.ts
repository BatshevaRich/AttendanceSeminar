import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Presence } from 'src/app/classes/presence';
import { Schedule } from 'src/app/classes/Schedule';
import { Class } from 'src/app/classes/class';
@Component({
  selector: 'app-show-presenceBySubject',
  templateUrl: './show-presenceS.component.html',
  styleUrls: ['./show-presence.component.css']
})
export class ShowPresenceBySubjectComponent implements OnInit {
  @Input() day: Schedule;
  // @Output() addNumber=new EventEmitter();

  constructor() { }

  ngOnInit() { }

}
