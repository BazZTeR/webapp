import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { LoginComponent }   from './login/login.component';
import { SignupComponent }  from './signup/signup.component';
import { HomeComponent }    from './home/home.component';

import { AuthGuard } from './auth.guard';
import { SettingsComponent } from './settings/settings.component';
 
const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, /*canActivate: [AuthGuard]*/ },
  { path: 'settings', component: SettingsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}