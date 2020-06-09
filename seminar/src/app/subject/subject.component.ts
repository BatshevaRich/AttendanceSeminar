import { Component, OnInit } from '@angular/core';
import { subject } from 'src/app/classes/subject';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { SubjectSevice } from 'src/app/service/SubjectService.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(public service:SubjectSevice) { 
    this.subject=new subject();
    
  }
subject:subject;
@ViewChild('signupForm') form: NgForm;
@ViewChild('divS') divHtml: ElementRef;
search:"";
subjectList:subject[]
//=[new subject(1,"תורה"),new subject(1,"חשבון"),new subject(1,"ט2"),new subject(1,"2י")]
ngOnInit() 
{
  this.getAllSubject();

}
  private getAllSubject() {
    this.service.getAllSubject().subscribe(data => {
      this.subjectList = data;
    });
  }

onSubmitForm()
{
  this.service.AddSubject(this.subject);
this.form.reset();
 
}
Delete(s:subject)
{
this.service.deleteSubject(s.CodeSubject);
this.getAllSubject();
}
update(s:subject)
{
  s.Name=this.subject.Name
  s.groups=this.subject.groups
  s.Group1=this.subject.Group1
  s.Group2=this.subject.Group2
this.service.update(s);

}
}

