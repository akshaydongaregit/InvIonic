import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  canActivate(): boolean {
    if (this.auth.isAutenticated()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  constructor(private auth: AuthService ,  private router: Router) { }

}
