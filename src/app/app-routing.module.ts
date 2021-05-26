import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { WorkRequestPageComponent } from './work-request-page/work-request-page.component';
import { IncidentPageComponent } from './incident-page/incident-page.component';
import { AddIncidentPageComponent } from './add-incident-page/add-incident-page.component';
import { IncidentBasicInfoComponent } from './incident-basic-info/incident-basic-info.component';
import { IncidentDevicesComponent } from './incident-devices/incident-devices.component';
import { IncidentCallsComponent } from './incident-calls/incident-calls.component';
import { IncidentResolutionComponent } from './incident-resolution/incident-resolution.component';


const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: 'workRequest', component: WorkRequestPageComponent},
  {path: 'incidents', component: IncidentPageComponent},
  {path: 'addIncidents', component: AddIncidentPageComponent,
    children: [
      {path: '', component: IncidentBasicInfoComponent},
      {path: 'incBasicInfo', component: IncidentBasicInfoComponent},
      {path: 'incDevices', component: IncidentDevicesComponent},
      {path: 'incResolution', component: IncidentResolutionComponent},
      {path: 'incCalls', component: IncidentCallsComponent},

    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
