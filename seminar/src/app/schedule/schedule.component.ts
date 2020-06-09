import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/classes/Schedule';
import { Class } from 'src/app/classes/class';
import { subject } from 'src/app/classes/subject';
import { Teacher } from 'src/app/classes/Techer';
import { ClassComponent } from 'src/app/class/class.component';
import { ClassSevice } from 'src/app/service/ClassSevice.service';
//import { tick } from '@angular/core';
import { SubjectSevice } from 'src/app/service/SubjectService.service';
import { TeacherService } from 'src/app/service/serviceTeacher.service';
import { schduleSevice } from 'src/app/service/schduleService.service';
import { ScheduleR } from 'src/app/classes/ScheduleR';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedule1: Schedule;
  days: number[] = [1, 2, 3, 4, 5, 6];
  hours: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  subjects: Array<subject> = []
  subjectsListFilter: Array<subject> = []
  classesList: Array<Class> = []
  classesListFilter: Array<Class> = []
  listScheduler: Array<ScheduleR> = []
  listSchedule: Array<Schedule> = []
  techerListFilter: Array<Teacher> = []
  teacherList: Array<Teacher> = []
  searchObj: Schedule;
  subjectFilter: any;
  classFilter: any;
  techerFilter: any;
  defulteS = true;
  isShowClasses = false;
  isShowTeachers = false;
  isShowSubjects = false;
  arrayBuffer: any;
  file: File;

  constructor(
    private server: schduleSevice,
    public serviceClass: ClassSevice,
    public serviceSubject: SubjectSevice, public serviceTeacher: TeacherService) {
  }



  gatAllClass() {
    this.serviceClass.getAllClass().subscribe((res) => {
      this.classesList = res;
      this.classesListFilter = this.classesList;
    }
    )
  }
  ngOnInit() {
    this.classFilter = "כל הכיתות"
    this.techerFilter = "כל המורות"
    this.subjectFilter = "כל המקצועות"
    this.server.getSchedule().subscribe((res) => {
      this.listScheduler = res;
      this.serviceClass.getAllClass().subscribe((res) => {
        this.classesList = res;
        this.classesListFilter = this.classesList;

        this.serviceTeacher.GetAllTeacher().subscribe((res) => {
          this.teacherList = res;
          this.techerListFilter = this.teacherList;
          this.serviceSubject.getAllSubject().subscribe((res) => {
            this.subjects = res;
            this.subjectsListFilter = this.subjects;
            for (let index = 0; index < this.listScheduler.length; index++) {
              let element = this.listScheduler[index];
              this.schedule1 = new Schedule();
              this.schedule1.Hour_in_dey = element.Hour_in_dey;
              this.schedule1.Day = element.Day
              this.teacherList.forEach(el => {
                if (<number>element.Techer == el.CodeTeacher) {
                  this.schedule1.Techer = el;
                  return;
                }
              }
              )

              this.classesList.forEach
                (el => {
                  if (element.Clss == el.CodeClass) {
                    this.schedule1.Clss = el;
                    return;
                  }
                })

              this.subjects.forEach
                (el => {
                  if (element.SubjectIn == el.CodeSubject) {
                    this.schedule1.SubjectIn = el;
                    return;
                  }
                })
              this.listSchedule.push(this.schedule1);
            }

          })
        })
      })
    });
    this.classesListFilter = this.classesList
  }

  getS(day: number, hour: number, teacher: Teacher, subject: subject, clas: Class) {
    let l: Schedule;
    l = this.listSchedule.filter(
      item => item.Day == day && item.Hour_in_dey == hour
        && item.Clss.CodeClass == clas.CodeClass
        && item.Techer.CodeTeacher == teacher.CodeTeacher
        && item.SubjectIn.CodeSubject == subject.CodeSubject
    )[0];

    if (l == undefined)
      l = new Schedule(hour, clas, day, subject, teacher);

    return l;
  }
  search() {

    //איך עושים את הסינון
    if (this.classFilter != "כל הכיתות") {
      this.classesListFilter = this.classesList.filter(
        //לסנן רק אם לא בחור "כל הכיתות
        item => item.CodeClass == this.classFilter.CodeClass//לבדוק איך מקבלים את הערך שנבחר בדדל
      );

    } else { this.classesListFilter = this.classesList }

    if (this.techerFilter != "כל המורות") {

      this.techerListFilter = this.teacherList.filter(

        item => item.CodeTeacher == this.techerFilter.CodeTeacher//לבדוק איך מקבלים את הערך שנבחר בדדל
      );
    } else { this.techerListFilter = this.teacherList }
    if (this.subjectFilter != "כל המקצועות") {
      this.subjectsListFilter = this.subjects.filter(
        item => item.CodeSubject == this.subjectFilter.CodeSubject//לבדוק איך מקבלים את הערך שנבחר בדדל
      );
    } else { this.subjectsListFilter = this.subjects }


  }


  //כך הדרך הנכונה לסנן???????????????
  getScheduleClass(day: number, hour: number, c: Class) {
    let l: Schedule;
    l = this.listSchedule.filter(
      item => item.Day == day && item.Hour_in_dey == hour && item.Clss.CodeClass == c.CodeClass
    )[0];

    if (l == undefined)
      l = new Schedule(hour, c, day, new subject(), new Teacher());


    return l;
  }
  getScheduleT(day: number, hour: number, c: Teacher) {
    let l: Schedule;
    l = this.listSchedule.filter(
      item => item.Hour_in_dey == hour && item.Day == day && item.Techer.CodeTeacher == c.CodeTeacher
    )[0];

    if (l == undefined)
      l = new Schedule(hour, new Class(), day, new subject(), c);


    return l;
  }
  getScheduleSubject(day: number, hour: number, c: subject) {
    let l: Schedule;
    l = this.listSchedule.filter(
      item => item.Day == day && item.Hour_in_dey == hour && item.SubjectIn.CodeSubject == c.CodeSubject
    )[0];

    if (l == undefined)
      l = new Schedule(hour, new Class(), day, c, new Teacher());


    return l;
  }

  showByClasses() {
    this.isShowClasses = true;
    this.isShowSubjects = this.isShowTeachers = false;
  }

  showByTeachers() {
    this.isShowTeachers = true;
    this.isShowSubjects = this.isShowClasses = false;
  }
  showBySubjects() {
    this.isShowSubjects = true;
    this.isShowTeachers = this.isShowClasses = false;
  }

}



