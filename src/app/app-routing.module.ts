import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { LoginComponent }   from './login/login.component';
import { SignupComponent }  from './signup/signup.component';
import { HomeComponent }    from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { NetworkComponent } from './network/network.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AdminComponent } from './admin/admin.component';

import { AuthGuard } from './auth.guard';
 
const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, /*canActivate: [AuthGuard]*/ },
  { path: 'settings', component: SettingsComponent },
  { path: 'network', component: NetworkComponent },
  { path: 'profile/:email', component: ProfileComponent},
  { path: 'notifications', component: NotificationsComponent},
  { path: 'admin', component: AdminComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}