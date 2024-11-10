// app.routes.ts

import { Routes } from '@angular/router';
import { LogicComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {DashboardComponent} from './Dashboard/dashboard.component';
export const routes: Routes = [
  { path: '', component: RegisterComponent }, // RegisterComponent as the home page
  { path: 'login', component: LogicComponent },
  { path: 'dashboard', component: DashboardComponent },

  // Add other routes as needed
];
