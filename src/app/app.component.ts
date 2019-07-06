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

  //for user option click tracking
  _outClick = false;
  _toggleClick = false;

 toggleSideBar() {
    this.isSideBarActive = !this.isSideBarActive;
 }

 toggleShowUserOptions() {
   //this.showUserOptions = ! this.showUserOptions;
   console.log('toggleShowUserOptions' + this._toggleClick);
   this._toggleClick = true;
   this.refreshShowUseroptions();
   this.currentUser = localStorage.getItem('user');
 }

 checkOutClick(event) {
    console.log('checkOutClick : ' + event);
    event === 'true' ? this._outClick = true : this._outClick = false;
    this.refreshShowUseroptions();
  }

  refreshShowUseroptions() {
    if ( this._toggleClick && this._outClick ) {
      this.showUserOptions = true;
      this._toggleClick = false;
      this._outClick = false;
    } else if (this._outClick ) {
      this.showUserOptions = false;
      this._outClick = false;
    }
  }

}
