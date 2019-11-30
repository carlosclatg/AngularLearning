import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _isLoggedIn = false
  constructor(private router: Router){}

  isLoggedIn(){
    return this._isLoggedIn
  } 

  login () {
    this._isLoggedIn = true
  }
  logout () {
    this._isLoggedIn = false  }
}
