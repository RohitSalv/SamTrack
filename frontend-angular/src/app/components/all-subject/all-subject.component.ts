import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject.model';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-all-subject',
  templateUrl: './all-subject.component.html',
  styleUrls: ['./all-subject.component.css']
})
export class AllSubjectComponent {
  constructor(private subjectService:SubjectService){}

  ngOnInit():void{
    this.getAllSubjects();
  }

subjects:Subject[]=[];


getAllSubjects(){
  this.subjectService.getAllSubjects().subscribe(res=>{
    this.subjects=res;
  })
}

deleteSubject(id:any){
    console.log(id);
    this.subjectService.deleteSubject(id).subscribe(res=>{
    if(res != null){
      alert('Subject Deleted')
      this.getAllSubjects();
    }else{
      alert('Something Went Wrong')
    }
  })
}
}
