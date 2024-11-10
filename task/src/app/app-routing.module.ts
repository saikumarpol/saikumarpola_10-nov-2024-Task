// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes'; // Import your defined routes
import { RegisterComponent } from './register/register.component'; // Import RegisterComponent if not already imported
import { LogicComponent } from './login/login.component'; // Import LoginComponent if not already imported

const appRoutes: Routes = routes; // Assign imported routes to appRoutes

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
