import { Component, OnInit, Input , ElementRef, HostListener, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent implements OnInit {

  constructor(private auth: AuthService , private router: Router , private eRef: ElementRef) { }

  @Input() show: boolean;
  @Input() user: string;
  @Output() outClick: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if ( this.eRef.nativeElement.contains(event.target)) {
      this.outClick.emit('false');
    } else {
      this.outClick.emit('true');
    }
  }

  doLogout() {
    console.log('logging out...');
    this.auth.logout();
    this.user = null;
    this.router.navigate(['/login']);
  }

}
