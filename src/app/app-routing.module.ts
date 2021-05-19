import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { WorkRequestPageComponent } from './work-request-page/work-request-page.component';
import { IncidentPageComponent } from './incident-page/incident-page.component';


const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: 'workRequest', component: WorkRequestPageComponent},
  {path: 'incidents', component: IncidentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
