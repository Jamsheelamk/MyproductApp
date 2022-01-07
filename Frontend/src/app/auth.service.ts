import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  
  private _loginUrl = "http://localhost:3000/login";
  
  constructor(private http: HttpClient) { }


  loginUser(user:any)
  {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}