import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent implements OnInit {

  constructor(private auth: AuthService , private router: Router) { }

  @Input() show: boolean;
  @Input() user: string;

  ngOnInit() {
  }

  doLogout() {
    console.log('logging out...');
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
