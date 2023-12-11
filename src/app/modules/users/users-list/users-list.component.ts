import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { UserModal } from '../users.modal';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  allusers:UserModal[]=[]

  constructor(private api:UserApiService){}

  ngOnInit(): void {
    this.getallusers()
  }
  getallusers(){
    console.log('inside all users');
    this.api.getAllUserAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allusers=res
        
      },error:(err:any)=>{
        alert(err.message)
      }
    })
    
  }

  removeUser(id:any){
    this.api.deleteUserAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert("user removed successfully")
        this.getallusers()
        
      },error:(err:any)=>{
        alert(err.message)
      }
    })
    
  }

}
