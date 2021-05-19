import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { WidgetComponent } from './widget/widget.component';
import { ChartComponent } from './chart/chart.component';
import { WorkRequestPageComponent } from './work-request-page/work-request-page.component';
import { TableComponent } from './table/table.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { IncidentPageComponent } from './incident-page/incident-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent,
    RegisterComponent,
    RegisterPageComponent,
    SidebarComponent,
    TopBarComponent,
    DashboardPageComponent,
    WidgetComponent,
    ChartComponent,
    WorkRequestPageComponent,
    TableComponent,
    PieChartComponent,
    IncidentPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
