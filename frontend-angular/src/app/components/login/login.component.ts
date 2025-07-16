import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService:UserService,private router:Router){}

  loginRequest={
    username:'',
    password:''
  }

  loginUser(){
    
    this.userService.loginRequest(this.loginRequest).subscribe(res=>{
      if(res!=null){
        if(res.role==='admin'){
          this.router.navigateByUrl('/admin-dashboard');
        }else{
          this.router.navigateByUrl('/faculty-dashboard');
        }
      }else{
        alert("invalid")
      }
    })
  }

}
