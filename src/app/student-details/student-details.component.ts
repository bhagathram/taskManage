import { Component, OnInit } from '@angular/core';

import {StudentService}from'../student.service';
import {Student} from '../student';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  taskManageData = [];
  constructor(private studentservice: StudentService) { }

  ngOnInit() {
    this.getData();
  }

 @HostListener('window:popstate', ['$event'])
  onPopState(event)  {
    console.log('Back button pressed');
  }

  getData() {

    this.studentservice.getHttpData().subscribe(res => { this.taskManageData = res });


  }


 onDelete(student:Student): void {
    this.taskManageData = this.taskManageData.filter(h => h !== student);
    this.studentservice.deleteHttpData(student.id);
   
  }


}
