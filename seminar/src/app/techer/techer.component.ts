import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Teacher} from"../classes/Techer"
//import { Service } from 'src/app/service/Service.service';
import { fail } from 'assert';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { teacherService } from 'src/app/service/serviceTeacher.service';
@Component({
  selector: 'app-techer',
  templateUrl: './techer.component.html',
  styleUrls: ['./techer.component.css']
})
export class TecherComponent implements OnInit {
// public add: Service
  constructor(public service:teacherService) 
  {
    this.techar = new Teacher();
    
   }

  names:Teacher[]
  //=[new Teacher(12345,"ruth",true),new Teacher(6789),new Teacher(67890)];
  techar:Teacher;
  showSuccess=false;
  successMsg="הוספת בהצלחה את מורה מספר..." ;
 search:"";
 teacherDel:Teacher=new Teacher;
  @ViewChild('divS') divHtml: ElementRef;
 @ViewChild('signupForm') Form: NgForm;
 
  ngOnInit()
   {
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
  
     this.service.AddTaecher(this.techar) ;
      this.Form.reset();
  //)
//  (new Techer(this.name, this.teken ,this.year));
  }
  Delete(n)
  { 
    alert("אם תמחק את המורה ימחקו שעות הלימוד שלה אם ברצונך רק להחליף מורה עדכן פרטי מורה")

    this.service.deleteTeacher(n.CodeTeacher);
     
     this.getAllTeachers();
    }
     update(n)
    {
      n.Name=this.techar.Name
      n.Hour_teken_month=this.techar.Hour_teken_month
      n.Permanent=this.techar.Permanent
      this.service.update(n)
   }
}
