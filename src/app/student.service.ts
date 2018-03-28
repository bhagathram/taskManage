import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import{Student}from'./student';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable()
export class StudentService {

  url="http://localhost:4321/taskdata";
  constructor(private http:HttpClient) { }

 
 
getHttpData():Observable<Student[]>{
return this.http.get<Student[]>(this.url);
}

postHttpData(data):Observable<Student[]>{
return this.http.post<Student[]>(this.url,data);
}


deleteHttpData(id:number) {
    const urldelete = `${this.url}/${id}`; 
    return this.http.delete(urldelete, httpOptions).subscribe();     
  }

 


}

