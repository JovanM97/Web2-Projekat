import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { IncidentNavComponent } from './incident-nav/incident-nav.component';
import { AddIncidentPageComponent } from './add-incident-page/add-incident-page.component';
import { IncidentBasicInfoComponent } from './incident-basic-info/incident-basic-info.component';
import { IncidentDevicesComponent } from './incident-devices/incident-devices.component';
import { IncidentCallsComponent } from './incident-calls/incident-calls.component';
import { IncidentResolutionComponent } from './incident-resolution/incident-resolution.component';
import { IncAddCallsComponent } from './inc-add-calls/inc-add-calls.component';
import { SafetyDocPageComponent } from './safety-doc-page/safety-doc-page.component';
import { AddSafetyDocComponent } from './add-safety-doc/add-safety-doc.component';
import { SafetyDocNavComponent } from './safety-doc-nav/safety-doc-nav.component';
import { SafetyDocBasicInfoComponent } from './safety-doc-basic-info/safety-doc-basic-info.component';
import { SafetyDocChecklistComponent } from './safety-doc-checklist/safety-doc-checklist.component';
import { EquipmentPageComponent } from './equipment-page/equipment-page.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { EquipmentTableComponent } from './equipment-table/equipment-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';


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
    IncidentNavComponent,
    AddIncidentPageComponent,
    IncidentBasicInfoComponent,
    IncidentDevicesComponent,
    IncidentCallsComponent,
    IncidentResolutionComponent,
    IncAddCallsComponent,
    SafetyDocPageComponent,
    AddSafetyDocComponent,
    SafetyDocNavComponent,
    SafetyDocBasicInfoComponent,
    SafetyDocChecklistComponent,
    EquipmentPageComponent,
    AddEquipmentComponent,
    EquipmentTableComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
