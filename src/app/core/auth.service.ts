import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  public isAutenticated(): boolean {
    console.log('isAutenticated : ' + JSON.stringify(localStorage.getItem('user')));
    if (localStorage.getItem('user') != null) {
      return true;
    } else {
      return false;
    }
  }

  public authenticate(cred: any): boolean {
   console.log(JSON.stringify(cred));
    localStorage.setItem('user', cred.username);
    return true;
  }
  public logout() {
    localStorage.removeItem('user');
  }

  constructor( ) { }

}
