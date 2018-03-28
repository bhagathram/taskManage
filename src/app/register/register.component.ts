import { Component, OnInit } from '@angular/core';
import {StudentService}from'../student.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Student} from '../student';
import {Router}from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  dropData = ["india", "america", "usa"];

  taskManageData = [];
  constructor(private studentservice: StudentService, private fb: FormBuilder, private router: Router) {
  }


  userForm: FormGroup;

  ngOnInit() {



    this.userForm = this.fb.group({
      id: [''],
      username: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],

      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      cnfmpassword: ['', Validators.required]

    });


  }



  postdata(data) {
    
    this.studentservice.postHttpData(data).subscribe(res => {
      this.taskManageData = res
    });

    this.userForm.reset();
    this.router.navigate(['login']);

  }
  
}
