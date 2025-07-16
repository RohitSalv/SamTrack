import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor( private http:HttpClient ) { }

  getAllSubject(){}

  addSubject(subject:any):Observable<any>{
    //http://localhost:8091/subject/add-subject
    return this.http.post('http://localhost:8091/subject/add-subject',subject,{responseType: 'text' as 'text'});
  }

  getAllSubjects():Observable<any>{
    //http://localhost:8091/subject/get-all-subjects
    return this.http.get('http://localhost:8091/subject/get-all-subjects');
  }

  deleteSubject(id:number):Observable<any>{
    return this.http.delete(`http://localhost:8091/subject/delete-subject/${id}`,{responseType: 'text' as 'text'})
  }
}
