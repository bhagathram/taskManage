import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {StudentService}from'./student.service';
import { AppRoutingModule } from './app-routing.module';
import {HideserviceService} from './hideservice.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { LoginComponent } from './login/login.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ManagetaskComponent } from './managetask/managetask.component';
import { SearchPipe } from './search.pipe';
import { TestComponent } from './test/test.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RegisterComponent } from './register/register.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentDetailsComponent,
    LoginComponent,
    HomescreenComponent,
    AddtaskComponent,
    ManagetaskComponent,
    SearchPipe,
    TestComponent,
    WelcomePageComponent,
    RegisterComponent






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [StudentService, HideserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
