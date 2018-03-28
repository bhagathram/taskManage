import { Component, OnInit } from '@angular/core';
import {Router, Params, ActivatedRoute}from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  tasklist = [];
  receivedurl: any;
  constructor(private fb: FormBuilder, private router: Router, private ActivateRoute: ActivatedRoute) {




  }
  addTask: FormGroup;
  usertaskform() {

    this.addTask = this.fb.group({
      taskname: ['', Validators.required],
      duedate: ['', Validators.required],
      status: ['', Validators.required]

    });
  }


  ngOnInit() {
  
  
this.usertaskform();

 
  }
  senddata(add) {

    var received = JSON.parse(localStorage.getItem('taskdata'));
    this.tasklist = (received) ? (received) : [];
    this.tasklist.push(add);
    localStorage.setItem('taskdata', JSON.stringify(this.tasklist));



  }
 


}
