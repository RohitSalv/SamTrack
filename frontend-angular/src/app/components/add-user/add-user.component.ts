import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor( private userService:UserService){}

  user = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(2)]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    firstName: new FormControl('',[Validators.required,Validators.minLength(2)]),
    lastName: new FormControl('',[Validators.required,Validators.minLength(2)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    role:new FormControl('',[Validators.required])
  });

  adduser(){
     this.userService.addUser(this.user.value).subscribe(res=>
      alert(res)
    )
    this.resetForm();
  }

  resetForm(){
  this.user = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl(''),
  })
  }

}
