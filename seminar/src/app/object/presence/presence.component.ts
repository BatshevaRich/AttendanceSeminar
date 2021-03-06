import { Component, OnInit } from '@angular/core';
import { Presence } from 'src/app/classes/presence';
import { Stutus } from 'src/app/classes/Stutus';
import { presenceMat } from 'src/app/classes/presenceMat';
import { subject } from 'src/app/classes/subject';
import { Class } from 'src/app/classes/class';
import { Teacher } from 'src/app/classes/Teacher';
import { Event } from '@angular/router';
import { Data } from '@angular/router';
import { ClassSevice } from 'src/app/service/ClassSevice.service';
import { SubjectSevice } from 'src/app/service/SubjectService.service';
import { TeacherService } from 'src/app/service/serviceTeacher.service';
import { schduleSevice } from 'src/app/service/schduleService.service';
import { PresenceService } from 'src/app/service/presenceService.service';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { addPresence } from 'src/app/classes/addPresance';
// import { element } from 'protractor';
import { ScheduleR } from 'src/app/classes/ScheduleR';
import { Schedule } from 'src/app/classes/Schedule';
import { Scheduler } from 'rxjs/internal/Scheduler';
import { CalendarModule } from 'primeng/calendar';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit {
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  rangeDates: [Date, Date];
  p: presenceMat;
  days: number[] = [1, 2, 3, 4, 5, 6];
  hours: number[];
  classList: Array<Class> = [];
  subjectList: Array<subject> = [];
  Scheduler: Array<ScheduleR> = [];
  Schedule: Array<Schedule> = [];
  ScheduleAddTeacher: Array<Schedule> = [];
  teacherList: Array<Teacher> = [];
  listPresense: Array<presenceMat> = [];
  index = 0;
  s = Stutus.present;
  listP: Array<addPresence> = [];
  listTP: Array<Teacher> = [];
  cla: Class;
  t: Teacher;
  sub: subject;
  hakbzot: Array<Schedule> = [];
  schedule1: Schedule = new Schedule();
  myGroup: any;
  subjectsListFilter: Array<subject> = [];
  classesListFilter: Array<Class> = [];
  listScheduler: Array<ScheduleR> = [];
  teacherListFilter: Array<Teacher> = [];
  searchObj: Schedule;
  subjectFilter: any;
  classFilter: any;
  teacherFilter: any;
  defulteS = true;
  isShowClasses = false;
  isShowTeachers = false;
  isShowSubjects = false;

  constructor(
    public scheduleService: schduleSevice,
    public classService: ClassSevice,
    public subjectService: SubjectSevice,
    public teacherService: TeacherService,
    public presenceService: PresenceService,
    calendar: NgbCalendar) {
      ///// אתחול לוח שנה
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    this.scheduleService.getSchedule().subscribe((schedule) => {
      this.Scheduler = schedule;
      this.classService.getAllClass().subscribe((classg) => {
        this.classList = classg;
        this.classesListFilter = this.classList;
        this.teacherService.GetAllTeacher().subscribe((teacher) => {
          this.teacherList = teacher;
          this.teacherListFilter = this.teacherList;
          this.subjectService.getAllSubject().subscribe((subjectg) => {
            this.subjectList = subjectg;
            this.subjectsListFilter = this.subjectList;
            this.Scheduler.forEach(elements => {
              this.schedule1 = new Schedule();
              this.schedule1.Hour_in_dey = elements.Hour_in_dey;
              this.schedule1.Day = elements.Day;

              // this.Schedule.push(this.schedule1);
              this.teacherList.forEach(el => {
                if (elements.Teacher as number === el.CodeTeacher) {
                  this.schedule1.teacher = el;
                  return;
                }
              }
              );

              this.classList.forEach
                (el => {
                  if (elements.Clss === el.CodeClass) {
                    this.schedule1.Clss = el;
                    return;
                  }
                });

              this.subjectList.forEach
                (el => {
                  if (elements.SubjectIn === el.CodeSubject) {
                    this.schedule1.SubjectIn = el;
                    if (el.Group1 !== '') { this.schedule1.SubjectIn.groups = true; }
                    this.hakbzot.push(this.schedule1);
                    return;
                  }
                });
              this.Schedule.push(this.schedule1);
            });
          });
        });
      });
    });
    this.hours = [1, 2, 3, 4, 5, 6, 7, 8];
    this.days = [1, 2, 3, 4, 5, 6];
  }

  ngOnInit() {
    this.listPresense.push(new presenceMat(new Teacher(), new Teacher(), false, 1, 1, new Class()));
    this.classFilter = 'כל הכיתות';
    this.teacherFilter = 'כל המורות';
    this.subjectFilter = 'כל המקצועות';
    this.rangeDates = [new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day),
    new Date(this.toDate.year, this.toDate.month, this.toDate.day)];
  }

  getH(Day: number, hour: number, c: Class) {
    const foundSchedule = this.getSchedule(Day, hour, c);
    this.hakbzot.forEach(element => {
      if (element.Day === Day
        && element.Hour_in_dey === hour
        && c.CodeClass === element.Clss.CodeClass && element !== foundSchedule) {
        return element;
      }
    }
    );
    return new Schedule();
  }
  getSchedule(Day: number, hour: number, c: Class) {
    let foundSchedule: Schedule;
    const d = 0;
    for (const schdule of this.Schedule) {
      const item = schdule;
      if (item.Day === Day
        && item.Hour_in_dey === hour
        && c.CodeClass === item.Clss.CodeClass) {
        foundSchedule = item;
        // if(d==0){ d=1;l[0]=item}
        // else
        // if(item.SubjectIn.groups==false||d==0)
        //   {l = item;d=1}
        //   else{this.hakbzot.push(l);
        //   l=item; break}
      }
    }
    if (foundSchedule === undefined) {
      foundSchedule = new Schedule(hour, c, Day, new subject(), new Teacher());
    }
    return foundSchedule;
  }
  addTeacher(Day: number, hour: number, c: Class) {
    let b: boolean;
    b = true;
    const theSchedule = this.getSchedule(Day, hour, c);
    this.listP.forEach(element => {
      if (theSchedule.teacher.CodeTeacher === element.CodeTeacher &&
        theSchedule.Day === element.Day &&
        theSchedule.Hour_in_dey === element.Mis_Hour) {
        b = false;
        return false;
      }
    });
    if (b === true) {
      this.p = new presenceMat(theSchedule.teacher, new Teacher(), false, theSchedule.Hour_in_dey, theSchedule.Day, theSchedule.Clss);
      this.listPresense.push(this.p);
      this.listP.push(new addPresence(this.rangeDates[0], hour, 3, theSchedule.teacher.CodeTeacher, Day));
      this.ScheduleAddTeacher.push(theSchedule);
    }
  }
  addTeacherByTeacher(Day: number, hour: number, c: Teacher) {
    let b: boolean;
    b = true;
    const theSchedule = this.getScheduleT(Day, hour, c);
    this.listP.forEach(element => {
      if (theSchedule.teacher.CodeTeacher === element.CodeTeacher
        && theSchedule.Day === element.Day &&
        theSchedule.Hour_in_dey === element.Mis_Hour) {
        b = false;
        return false;
      }
    });
    if (b === true) {
      this.p = new presenceMat(theSchedule.teacher, new Teacher(), false, theSchedule.Hour_in_dey, theSchedule.Day, theSchedule.Clss);
      this.listPresense.push(this.p);
      this.listP.push(new addPresence(this.rangeDates[0], hour, 3, theSchedule.teacher.CodeTeacher, Day));
      this.ScheduleAddTeacher.push(theSchedule);
    }
  }
  addTeacherBySubject(Day: number, hour: number, c: subject) {
    let b: boolean;
    b = true;
    const theSchedule = this.getScheduleSubject(Day, hour, c);
    this.listP.forEach(element => {
      if (theSchedule.teacher.CodeTeacher === element.CodeTeacher &&
        theSchedule.Day === element.Day &&
        theSchedule.Hour_in_dey === element.Mis_Hour) {
        b = false;
        return false;
      }
    });
    if (b === true) {
      this.p = new presenceMat(theSchedule.teacher, new Teacher(), false, theSchedule.Hour_in_dey, theSchedule.Day, theSchedule.Clss);
      this.listPresense.push(this.p);
      this.listP.push(new addPresence(this.rangeDates[0], hour, 3, theSchedule.teacher.CodeTeacher, Day));
      this.ScheduleAddTeacher.push(theSchedule);
    }
  }
  addVaction() {
    for (const range of this.rangeDates) { ////////////// למה בתוך לולאה זו?
      this.s = Stutus.liberty;
      for (const schdule of this.Schedule) {
        this.presenceService.setPresences(new addPresence(
          this.rangeDates[schdule.Day],
          schdule.Hour_in_dey,
          this.s,
          schdule.teacher.CodeTeacher,
          schdule.Day));
      }
    }
  }
  delet(i: number) {
    const l = this.listPresense[i];
    this.listP.forEach(element => {
      if (l.teacher1.CodeTeacher === element.CodeTeacher && l.day === element.Day && l.hour === element.Mis_Hour) {
        const z = this.listP.indexOf(element);
        this.listP.splice(z);
      }
      if (this.listPresense[i].teacher2.CodeTeacher === element.CodeTeacher) {
        const z = this.listP.indexOf(element);
        this.listP.splice(z);
      }
    });
    this.listPresense.splice(i, 1);

  }
  addPresence() {////////////////// איפה נעשה שימוש בתצוגה?????
    for (let index = 0; index < this.listPresense.length; index++) {
      this.listP.push(new addPresence(
        this.rangeDates[this.listP[index].Day],
        Stutus.present,
        this.listP[index].Mis_Hour,
        this.listPresense[index].teacher2.CodeTeacher,
        this.listP[index].Day
      ));
      if (this.listPresense[index].bool === true) {
        this.listP[index].StatusToDay = Stutus.sickness;
      }
    }
    this.listPresense.forEach(element => {
      this.listTP.push(element.teacher1);
    });
    for (const schdule of this.Schedule) {
      if (this.ScheduleAddTeacher.includes(schdule) === false) {
        this.listP.push(new addPresence(
          this.rangeDates[0],
          schdule.Hour_in_dey,
          Stutus.present,
          schdule.teacher.CodeTeacher,
          schdule.Day));
      }
    }
    this.listP.forEach(p => {
      this.presenceService.setPresences(p);
    });
  }
  addDay(l: presenceMat) {
    // l.teacher1 as Teacher;
    let element: Schedule;
    /////////////////// לא נעשה שימוש
    for (let index = 1; index < 8; index++) {
      element = this.getScheduleT(l.day, index, l.teacher1);
      if (element.teacher.CodeTeacher === l.teacher1.CodeTeacher) {
        this.addTeacherByTeacher(l.day, index, l.teacher1);
      }
    }
  }
  addWeek(l: presenceMat) {
    // l.teacher1 as Teacher;
    // let element: presenceMat;
    /////////////// לא נעשה שימוש!!!
    for (let index = 1; index < 7; index++) {
      this.addDay(new presenceMat(l.teacher1, l.teacher2, l.bool, 1, index, l.c));
    }
  }
  search() {
    // איך עושים את הסינון
    if (this.classFilter !== 'כל הכיתות') {
      this.classesListFilter = this.classList.filter(
        // לסנן רק אם לא בחור "כל הכיתות
        item => item.CodeClass === this.classFilter.CodeClass// לבדוק איך מקבלים את הערך שנבחר בדדל
      );
    } else { this.classesListFilter = this.classList; }
    if (this.teacherFilter !== 'כל המורות') {
      this.teacherListFilter = this.teacherList.filter(
        item => item.CodeTeacher === this.teacherFilter.CodeTeacher// לבדוק איך מקבלים את הערך שנבחר בדדל
      );
    } else { this.teacherListFilter = this.teacherList; }
    if (this.subjectFilter !== 'כל המקצועות') {
      this.subjectsListFilter = this.subjectList.filter(
        item => item.CodeSubject === this.subjectFilter.CodeSubject// לבדוק איך מקבלים את הערך שנבחר בדדל
      );
    } else { this.subjectsListFilter = this.subjectList; }
  }
  // כך הדרך הנכונה לסנן???????????????
  getScheduleClass(day: number, hour: number, c: Class) {
    let foundSchedule: Schedule;
    foundSchedule = this.Schedule.filter(
      item => item.Day === day && item.Hour_in_dey === hour && item.Clss.CodeClass === c.CodeClass
    )[0];
    if (foundSchedule === undefined) {
      foundSchedule = new Schedule(hour, c, day, new subject(), new Teacher());
    }
    return foundSchedule;
  }
  getScheduleT(day: number, hour: number, c: Teacher) {
    let foundSchedule: Schedule;
    foundSchedule = this.Schedule.filter(
      item => item.Hour_in_dey === hour && item.Day === day && item.teacher.CodeTeacher === c.CodeTeacher
    )[0];
    if (foundSchedule === undefined) {
      foundSchedule = new Schedule(hour, new Class(), day, new subject(), new Teacher());
    }
    return foundSchedule;
  }
  getScheduleSubject(day: number, hour: number, c: subject) {
    let foundSchedule: Schedule;
    foundSchedule = this.Schedule.filter(
      item => item.Day === day && item.Hour_in_dey === hour && item.SubjectIn.CodeSubject === c.CodeSubject
    )[0];
    if (foundSchedule === undefined) {
      foundSchedule = new Schedule(hour, new Class(), day, c, new Teacher());
    }
    return foundSchedule;
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
  ////////////////////////////////// פונקציות לטווח תאריכים
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    this.rangeDates = [new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day),
    new Date(this.toDate.year, this.toDate.month, this.toDate.day)];
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

}



