import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  username:string='';
  editUser:any;

  constructor(private route:ActivatedRoute, private userService:UserService, private router:Router){}
  
  ngOnInit(): void {
  
   this.username=  this.route.snapshot.paramMap.get('username') || '';
   this.getUserByUsername(this.username);
  }

  user = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      firstName: new FormControl('',[Validators.required,Validators.minLength(2)]),
      lastName: new FormControl('',[Validators.required,Validators.minLength(2)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      role:new FormControl('',[Validators.required])
    });

    getUserByUsername(username:string){
     this.userService.getUserByUsername(username).subscribe(res=>{

      this.editUser= res;

      this.user.patchValue({
        username: this.editUser.username || '',
        password: this.editUser.password,
        firstName: this.editUser.firstName || '',
        lastName: this.editUser.lastName || '',
        email: this.editUser.email || '',
        role: this.editUser.role || ''
      })
    })
  }

  updateUser(){
    this.userService.updateUser(this.user.value).subscribe(res=>{
      if(res != null){
        alert("Updated")
        this.router.navigateByUrl("/all-users")
       
      }else{
        alert("Something Went Wrong !")
      }
    })

  }
}
