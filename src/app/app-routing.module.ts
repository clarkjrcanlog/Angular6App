import { NgModule } from '@angular/core';
import{ RouterModule, Routes } from '@angular/router';
import{ ListEmployeesComponent } from './employee/list-employees.component';
import{ CreateEmployeeComponent } from './employee/create-employee.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { TodoComponent } from './employee/todo.component';
import { ChallengeComponent } from './employee/challenge.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'list', component: ListEmployeesComponent},
  {path: 'create', component: CreateEmployeeComponent},
  {path: 'edit/:id', component: CreateEmployeeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'todo', component: TodoComponent},
  {path: 'challenge', component: ChallengeComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
