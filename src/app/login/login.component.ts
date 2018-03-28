import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {StudentService}from'../student.service';
import {Router}from '@angular/router';
import {Student} from '../student';

import {HideserviceService} from '../hideservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  
  loginForm: FormGroup;
  taskManageData: Student[];

  constructor(private studentservice: StudentService, private loginuser: FormBuilder,
    private route: Router,
    private hideservice: HideserviceService) {
    this.loginForm = this.loginuser.group({

      'email': '',
      'password': ''

    })


  }


  ngOnInit() {

    this.getData();

  }

  getData() {

    this.studentservice.getHttpData().subscribe(res => { this.taskManageData = res });



  } 

  login(loginForm) {

    var count = 0;
    for (let obj of this.taskManageData) 
    {

      if (obj.email == loginForm.email && obj.password == loginForm.password) {

        // here adding currentuser name to service name
        
        this.hideservice.name=obj.username;
        count++;
      }

    }
    if (count == 1) {
      this.route.navigate(['/homedetails']);
   
      this.hideservice.register = false;
      this.hideservice.logout = true;

    }
    else {
      alert('please enter valid details');
    }
  }



}
