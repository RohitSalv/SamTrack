import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllSubjectComponent } from './components/all-subject/all-subject.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { EditSubjectComponent } from './components/edit-subject/edit-subject.component';
import { ViewAllSubjectComponent } from './components/view-all-subject/view-all-subject.component';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';
import { FacultyMenuComponent } from './components/faculty-menu/faculty-menu.component';
import { AddStudenComponent } from './components/add-student/add-studen.component';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { EditStudenComponent } from './components/edit-studen/edit-studen.component';
import { TakeAttendanceComponent } from './components/take-attendance/take-attendance.component';
import { ViewAttendanceComponent } from './components/view-attendance/view-attendance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllUsersComponent } from './components/all-users/all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    AllSubjectComponent,
    AdminDashboardComponent,
    AdminUserComponent,
    AddUserComponent,
    AdminMenuComponent,
    EditUserComponent,
    AddSubjectComponent,
    EditSubjectComponent,
    ViewAllSubjectComponent,
    FacultyDashboardComponent,
    FacultyMenuComponent,
    AddStudenComponent,
    AllStudentComponent,
    EditStudenComponent,
    TakeAttendanceComponent,
    ViewAttendanceComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
