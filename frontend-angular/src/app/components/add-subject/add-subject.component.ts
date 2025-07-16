import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from 'src/app/services/subject.service';


@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {

  constructor(private subjectService:SubjectService){}

subjectForm = new FormGroup({
  name : new FormControl('',[Validators.minLength(3),Validators.required])
})

addSubject() {
  console.log(this.subjectForm)
   this.subjectService.addSubject(this.subjectForm.value).subscribe(res=>{
    alert(res)
  });
}
}
