
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PresenceComponent } from './object/presence/presence.component';
import { ScheduleComponent } from '../app/schedule/schedule.component';
import { TecherComponent } from '../app/techer/techer.component';
import { HomeComponent } from './UI/home/home.component';
import { ClassComponent } from '../app/object/class/class.component';
import { ReportComponent } from 'src/app/report/report.component';
import { SubjectComponent } from 'src/app/object/subject/subject.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowTeacherComponent } from '../app/show-teacher/show-teacher.component';
import { ShowPresenceComponent } from '../app/show-presence/show-presence.component';
import { ShowPresenceBySubjectComponent } from '../app/show-presenceBySubject/show-presenceS.component';
import { ShowPresenceByTeacherComponent } from '../app/show-presenceByTeacher/show-presenceT.component';
import { DayComponent } from '../app/day/day.component';
import { Component } from '@angular/core';
import { ManagerComponent } from 'src/app/object/Manager/Manager.component';
import { ShortenPipe } from 'src/app/pipes/short.pipe';
import { SubjectSevice } from 'src/app/service/SubjectService.service';
import { CalendarModule } from 'primeng/calendar';
import { FormGroup, FormControl } from '@angular/forms';
import { permenentDirective } from './dirctive/dirctive.directive';
// import { MatTabsModule } from '@angular/material';
import { } from './dirctive/d.directive';
import { HeaderComponent } from './UI/header/header.component';
import { FooterComponent } from './UI/footer/footer.component';

// import {MatGridListModule} from '@angular/primeng';
// import {AccordionModule,MenuItem} from 'primeng/*';
const route: Routes = [

  { path: 'Presence', component: PresenceComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'Report', component: ReportComponent },
  { path: 'Subject', component: SubjectComponent },
  { path: 'Class', component: ClassComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'Teacher', component: TecherComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PresenceComponent,
    ScheduleComponent,
    TecherComponent,
    HomeComponent,
    ReportComponent,
    SubjectComponent,
    ClassComponent,
    ManagerComponent,
    FilterPipe,
    ShowTeacherComponent,
    ShowPresenceComponent,
    ShowPresenceBySubjectComponent,
    ShowPresenceByTeacherComponent,
    DayComponent,
    permenentDirective,
    ShortenPipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CalendarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(route),
    HttpClientModule
  ],
  providers: [SubjectSevice],
  bootstrap: [AppComponent]
})
export class AppModule {

}
