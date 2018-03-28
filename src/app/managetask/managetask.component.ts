import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-managetask',
  templateUrl: './managetask.component.html',
  styleUrls: ['./managetask.component.css']
})
export class ManagetaskComponent implements OnInit {
addTask:FormGroup;
tasklist=[];
find:any;
selectedId;
selectedtask;

  constructor(private router:Router,private fb:FormBuilder) { 
     this.addTask=this.fb.group({
taskname:[''],
duedate:[''],
status:['']
     });
     
 
  }

  ngOnInit() {


this.getdata();

  }

getdata(){

  this.tasklist=JSON.parse(localStorage.getItem('taskdata')); 
}

selecetdIdvalue(id)
{
this.selectedId=id;


}

deletedata(id)

{
for(var i=0;i<this.tasklist.length;i++)
{

if(id==i)
{
  this.tasklist.splice(i,1);
  
}
}
localStorage.setItem('taskdata',JSON.stringify(this.tasklist));


}

senddata(data){
  this.addTask.setValue(data);
 


//this.router.navigate(['/homedetails/managetask',task]);
}


saveEdit(data){
// console.log(data);
 for(let obj of this.tasklist)
  {
    if(obj.taskname==data.taskname)
    {
      obj.duedate=data.duedate;
      obj.status=data.status;
    }
  }

localStorage.setItem('taskdata',JSON.stringify(this.tasklist));

  
}

}
