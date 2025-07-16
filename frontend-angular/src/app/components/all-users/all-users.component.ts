import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  Users: User[]=[]

  constructor(private userService:UserService){}

  ngOnInit():void{
    this.getAllUser();
  }

  getAllUser(){
    this.userService.getAllUser().subscribe(res=>{
      this.Users =res;
    })
  }

  deleteUser(username:string){
    this.userService.deleteUser(username).subscribe(res=>{
      if(res != null){
        alert("User Deleted")
        this.getAllUser();
      }else{
        alert("Something Went Wrong")
      }
    })
  }
}
