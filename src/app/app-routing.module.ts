import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {LoginComponent} from './login/login.component';
import {HomescreenComponent} from './homescreen/homescreen.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

import {AddtaskComponent} from './addtask/addtask.component';
import {ManagetaskComponent} from './managetask/managetask.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [


  {
    path: 'userdetails',
    component: StudentDetailsComponent

  },
  {
    path: 'addtask',
    component: AddtaskComponent

  },
  {
    path: 'managetask',
    component: ManagetaskComponent

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'homedetails',
    component: HomescreenComponent,
    children: [
       { path: '', redirectTo: 'home', pathMatch: 'full' }
      ,  {
         path: 'home', component: WelcomePageComponent },
      { path: 'userdetails', component: StudentDetailsComponent },
      { path: 'addtask', component: AddtaskComponent },
      { path: 'managetask', component: ManagetaskComponent }
    ]
  },


  {
    path: 'register', component: RegisterComponent },
  {
    path: '', redirectTo: '/login',pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
