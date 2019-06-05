import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cred: User = {
    username: '' ,
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {

  }

  public doLogin() {
    if (this.auth.authenticate(this.cred)) {
      this.router.navigate(['']);
    }
  }

}
