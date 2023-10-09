import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currentUser: any;

  constructor(private http: HttpClient) {
    this.currentUser = this.isLoggedIn()
  }

  getAllUsers() {
    return this.http.get('https://fakestoreapi.com/users')
  }

  deleteUsers(id:number) {
    return this.http.delete('https://fakestoreapi.com/users/'+id)
  }

  login(user: any) {
    return this.http.post('https://fakestoreapi.com/auth/login', user)
  }

  setUserInStorage(user: any) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  isLoggedIn() {
    let user = localStorage.getItem('user')
    if(!user) {
      return
    } else {
      return jwt_decode(JSON.parse(user).token)
    }
  }
}
