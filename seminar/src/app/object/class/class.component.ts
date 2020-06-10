import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/classes/class';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClassSevice } from 'src/app/service/ClassSevice.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  @ViewChild('signupForm') form: NgForm;
  @ViewChild('divS') divHtml: ElementRef;
  constructor(private server: ClassSevice) {
    this.class = new Class();
  }
  class: Class;
  search: '';
  color: string;
  classList: Class[];

   ngOnInit() {
    this.getAllClass();


  }
  private getAllClass() {
    this.server.getAllClass().subscribe(data => {
      this.classList = data;
    });
  }

  onSubmitForm() {
    this.server.AddClass(this.class);
    this.form.reset();

  }
  Delete(n: Class) {
    if (confirm('האם ברצונך למחוק את הכיתה ' + n.Name + '?')) {
  this.server.removeClass(n.CodeClass);
  this.getAllClass();
    }
  }
}
