import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './employees/home.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeesComponent } from './employees/create-employees.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';



const appRoutes: Routes =[
  {path: 'home' , component: HomeComponent},
  {path: 'list' , component: ListEmployeesComponent},
  {path: 'edit/:id', component: CreateEmployeesComponent},
  {path: 'employees/:id' , component: EmployeeDetailsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
