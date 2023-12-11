import { Component } from '@angular/core';
import { UserModal } from '../users.modal';
import { UserApiService } from '../user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user:UserModal={}
  constructor(private api:UserApiService,private router:Router){}
  addUser(){
    this.api.addUserAPI(this.user).subscribe({
      next:(res:UserModal)=>{
        console.log(res);
        alert("new user is added successfully")
        this.router.navigateByUrl('/users')
        
      },error:(err:any)=>{
        alert(err.message)
      }
    })
  }
  cancel(){
    this.user={}
  }

}
