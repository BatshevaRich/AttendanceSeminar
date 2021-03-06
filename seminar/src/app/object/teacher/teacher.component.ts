import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Teacher } from '../../classes/Teacher';
import { fail } from 'assert';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TeacherService } from 'src/app/service/serviceTeacher.service';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  constructor(public service: TeacherService) {
    this.techar = new Teacher();

  }

  names: Teacher[] = [];
  // =[new Teacher(12345,"ruth",true),new Teacher(6789),new Teacher(67890)];
  techar: Teacher;
  showSuccess = false;
  successMsg = 'הוספת בהצלחה את מורה מספר...';
  search: '';
  teacherDel: Teacher = new Teacher();
  @ViewChild('divS') divHtml: ElementRef;
  @ViewChild('signupForm') Form: NgForm;

  ngOnInit() {
    this.getAllTeachers();
  }
  private getAllTeachers() {
    this.service.GetAllTeacher().subscribe(data => {
      this.names = data;
    });
  }

  // id:number;
  // name: string;
  // teken: boolean;
  // year: number;
  onSubmitForm() {

    this.service.AddTaecher(this.techar);
    this.Form.reset();
    // )
    //  (new Teacher(this.name, this.teken ,this.year));
  }
  Delete(n) {
    if (confirm('אם תמחקי את המורה ימחקו שעות הלימוד שלה.\nהאם ברצונך להמשיך במחיקת המורה  ' + n.Name + '?')) {
      this.service.deleteTeacher(n.CodeTeacher);
      this.getAllTeachers();
    }
  }
  update(n) {
    if (this.techar.Name !== '') {
      n.Name = this.techar.Name;
      n.Hour_teken_month = this.techar.Hour_teken_month;
      n.Permanent = this.techar.Permanent;
      this.service.update(n);
    } else { alert('נא למלא פרטים לעדכון!'); }
  }
}
