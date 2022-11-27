import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumerBusinessComponent } from './consumer-business/consumer-business.component';
import { PolicyComponent } from './policy/policy.component';
import { PropertyComponent } from './property/property.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './component/delete-employee/delete-employee.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsumerBusinessComponent,
    LoginComponent,
    HomeComponent,
    PolicyComponent,
    PropertyComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    EmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
