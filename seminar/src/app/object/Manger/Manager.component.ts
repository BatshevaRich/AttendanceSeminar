import { Component, OnInit } from '@angular/core';
import { TecherComponent } from 'src/app/techer/techer.component';
import { ClassComponent } from 'src/app/class/class.component';
import { SubjectComponent } from 'src/app/subject/subject.component';
//import { Routes } from '@angular/router';
import * as XLSX from 'xlsx';
//import * as Excel from 'exceljs/dist/exceljs.min.js';
//import { element } from 'protractor';
import { schduleSevice } from '../../service/schduleService.service';
import { ClassSevice } from '../../service/ClassSevice.service';
import { SubjectSevice } from '../../service/SubjectService.service';
import { teacherService } from '../../service/serviceTeacher.service';
import { Class } from '../../classes/class';
import { Schedule } from '../../classes/Schedule';
import { subject } from '../../classes/subject';
import { Teacher } from '../../classes/Techer';
import { ScheduleR } from '../../classes/ScheduleR';
import { SA } from '../../classes/SA';



@Component({
  selector: 'app-manager',
  templateUrl: './Manager.component.html',
  styleUrls: ['./Manager.component.css']
})
export class ManagerComponent implements OnInit {
  hourEnd = 8;
  arrayBuffer: any;
  file: File;
  classesList: Array<Class> = [];
  subjects: Array<subject> = [];
  teachers: Array<Teacher> = [];

  constructor(
    public server1: schduleSevice,
    public serviceClass: ClassSevice,
    public serviceSubject: SubjectSevice,
    public serviceTeacher: teacherService) {

  }

  ngOnInit() {
    this.serviceClass.getAllClass().subscribe(d => {debugger; this.classesList = d; });
    this.serviceSubject.getAllSubject().subscribe(d => {debugger; this.subjects = d; });
    this.serviceTeacher.GetAllTeacher().subscribe(d => {debugger; this.teachers = d; });
  }
  incomingfile(event) {
    this.file = event.target.files[0];
  }

  Upload(event) {
debugger;
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];

      this.to_csv(workbook);

    }
    fileReader.readAsArrayBuffer(this.file);
  }

  to_csv(workbook) {
    var X = XLSX;
    {

      var result = [];
      var result1;
      var result2;
      var result3;
      var result4;
      var result5;
      var result6;
      var element = []
      this.classesList.forEach(e => {
        element.push(e);
        workbook.SheetNames.forEach(function (sheetName) {
          var csv = X.utils.sheet_to_csv(workbook.Sheets[sheetName]);

          if (csv.length) {
            element.forEach(e => {

            });
            var c1 = csv.indexOf(",א,");
            var c2 = csv.indexOf(",ב,");
            result[1] = csv.substr(c1, c2 - c1);
            var c3 = csv.indexOf(",ג,");
            result[2] = csv.substr(c2, c3 - c2);
            var c4 = csv.indexOf(",ד,"); 
            result[3] = csv.substr(c3, c4 - c3);
            var c5 = csv.indexOf(",ה,"); 
            result[4] = csv.substr(c4, c5 - c4);
            var c6 = csv.indexOf(",ו,"); 
            result[5] = csv.substr(c5, c6 - c5);
            var c7 = (csv + c6).indexOf(",,,,,");
            result[6] = csv.substr(c6, c7 - c6);
          }

        });
      });
    }
    var h

    var index
    var d = 0
   let classN=1009
    for (let day = 1; 7 > day; day++) {



      var c = result[day].split(",");
      index = 2; h = 1
      do {
      if (c[index] == "") { h++ ; classN=1010}
         else {
          if (c[index].includes("1") == true) { break; }
           if (c[index].includes("0") == true) 
           //{
              //d = 1 - d; if (d == 0) 
              { classN++;   
              }
       
            else{
            if (classN >(this.classesList.length+1008)) {  classN = 1010; } 
            else { classN++ } 
            }
            var clas = this.classesList.filter(e => classN == e.CodeClass)[0];

            //if (clas == undefined) { console.log(index, c[index], h, day) }


            var t1 = c[index++].split("/");

            var sub = this.subjects.filter(e => c[index].includes(e.Name))[0];
            //if (sub == undefined) { console.log(index, c[index], h, day) }

            t1.forEach(element => {
              var teach = this.teachers.filter(e => e.Name.includes(element))[0];
             // var s = new SA(h, clas.CodeClass, day, sub.CodeSubject, teach.CodeTeacher)
              //  var a=undefined
              //  while(a==undefined){
                if (sub!= undefined) 
             { if (sub.groups == true) var s = new SA(h, clas.CodeClass, day, sub.CodeSubject, teach.CodeTeacher, true)
              else var s = new SA(h, clas.CodeClass, day, sub.CodeSubject, teach.CodeTeacher,false)
              this.server1.AddSchdule(s);}
            });
          }
        }
       while (index++ < c.length - 1)
    }

  }
}
