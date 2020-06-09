import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/classes/Techer';
import { Dictionary } from 'src/app/classes/Dictionary';
import { ServicePresence } from 'src/app/service/presenceService.service';
import { teacherService } from 'src/app/service/serviceTeacher.service';
//import * as jspdf from 'jspdf';  
//import html2canvas from 'html2canvas'; 
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  
dictionary:Dictionary[]
  teachers:Teacher[]
  constructor(public service:ServicePresence,public servicet:teacherService)
   { this.getAllTeachers();
          
   }
   private getAllTeachers() {
    this.servicet.GetAllTeacher().subscribe(data => {
      this.teachers = data;
    });
  } 
//   captureScreen(){
//     var data = document.getElementById('contentToConvert');  
//   html2canvas(data).then(canvas => {  
//     // Few necessary setting options  
//     var imgWidth = 208;   
//     var pageHeight = 295;    
//     var imgHeight = canvas.height * imgWidth / canvas.width;  
//     var heightLeft = imgHeight;  

//     const contentDataURL = canvas.toDataURL('image/png')  
//     let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
//     var position = 0;  
//     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
//     pdf.save('MYPdf.pdf'); // Generated PDF   
//   });
//  }
  ngOnInit() {
    this.service.gatReport().subscribe((res)=>{
      this.dictionary = res;})
  }
}

