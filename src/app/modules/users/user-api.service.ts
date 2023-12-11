import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModal } from './users.modal';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  SERVER_URL="http://localhost:3000"

  constructor(private http:HttpClient) {}
  // add user
  addUserAPI(user:UserModal){
    return this.http.post(`${this.SERVER_URL}/users`,user)
  }

  // get all users
  getAllUserAPI(){
    return this.http.get(`${this.SERVER_URL}/users`)

  }

  // delete user
  deleteUserAPI(id:string){
    return this.http.delete(`${this.SERVER_URL}/users/${id}`)

  }
}
