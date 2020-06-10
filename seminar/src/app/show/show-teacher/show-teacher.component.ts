import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/classes/Techer';
import { Input } from '@angular/core';

@Component({
  selector: 'app-show-teacher',
  templateUrl: './show-teacher.component.html',
  styleUrls: ['./show-teacher.component.css']
})
export class ShowTeacherComponent implements OnInit {

  constructor() { }
  @Input() showTeacher: Teacher;
  // @Input() massege:string="לשנות מספר שעות למורה";
  ngOnInit() {

  }

}
