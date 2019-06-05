import { Component } from '@angular/core';
import { User } from './shared/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InvMan';
  isSideBarActive = true;
  showUserOptions = false;
  currentUser: string;

 toggleSideBar() {
    this.isSideBarActive = !this.isSideBarActive;
 }

 toggleShowUserOptions() {
   this.showUserOptions = ! this.showUserOptions;
   this.currentUser = localStorage.getItem('user');
 }

}
