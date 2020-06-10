import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/classes/Teacher';
import { Dictionary } from 'src/app/classes/Dictionary';
import { PresenceService } from 'src/app/service/presenceService.service';
import { TeacherService } from 'src/app/service/serviceTeacher.service';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  head = [['שם מורה', 'ת"ז מורה', 'שעות עבודה', 'שעות מחלה', 'ימי עבודה']];
  dataForPDF = [];
  dictionary: Dictionary[] = [];
  teachers: Teacher[];
  constructor(public service: PresenceService, public servicet: TeacherService) {
    this.servicet.GetAllTeacher().subscribe(data => {
      this.teachers = data;
    });
    this.service.gatReport().subscribe((res) => {
      this.dictionary = res;
    });
  }

  private dataConvert() {
    this.dataForPDF = this.teachers.map(({ Name, CodeTeacher }) => ({ 'שם מורה': Name, 'ת"ז מורה': CodeTeacher }));
    for (let i = 0; i < this.dictionary.length; i++) {
      this.dataForPDF[i]['שעות עבודה'] = this.dictionary[i].Arr[0];
      this.dataForPDF[i]['שעות מחלה'] = this.dictionary[i].Arr[1];
      this.dataForPDF[i]['ימי עבודה'] = this.dictionary[i].Arr[2];
    }
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
  ngOnInit() { }

  createPdf() {
    const data = document.getElementById('contentToConvert');  // Id of the table
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      // pdf.output('dataurlnewwindow');
      pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }
}

