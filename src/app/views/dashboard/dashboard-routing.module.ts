import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {RegisterComponent} from "../pages/register/register.component";
import {CompleteRegistrationComponent} from "../pages/complete-registration/complete-registration.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'complete-registration', component: CompleteRegistrationComponent },
      { path: '', redirectTo: 'register', pathMatch: 'full' }, // Redirection par défaut vers 'register'
    ],
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirection par défaut vers 'dashboard'
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
