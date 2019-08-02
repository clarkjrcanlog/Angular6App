import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'; // for the reactive forms to work


import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { AppRoutingModule } from './app-routing.module';

import {EmployeeService} from './employee/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { TodoComponent } from './employee/todo.component';
import { ChallengeComponent } from './employee/challenge.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeesComponent,
    HomeComponent,
    PageNotFoundComponent,
    TodoComponent,
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule //instantiate imports here
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
