import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGaurdService } from './core/auth-gaurd.service';
import { SignupComponent } from './pages/signup/signup.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' , canActivate: [AuthGaurdService] },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGaurdService] },
  { path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule' , canActivate: [AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup' , component: SignupComponent },
  { path: 'settings' , component: SettingsComponent , canActivate: [AuthGaurdService] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ] ,
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
