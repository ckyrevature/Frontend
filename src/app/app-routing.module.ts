import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
// import { EmployeeListHttpComponent } from './employee-list-http/employee-list-http.component';
// import { ManagerListHttpComponent } from './manager-list-http/manager-list-http.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { ViewReimbursementComponent } from './view-reimbursement/view-reimbursement.component';


const routes: Routes = [
  // { path: "manager-http-crud", component: ManagerListHttpComponent },
  // { path: "employee-http-crud", component: EmployeeListHttpComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "view-reimbursement", component: ViewReimbursementComponent },
  { path: "view-employees", component: ViewEmployeesComponent },
  { path: "header", component: HeaderComponent },
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
