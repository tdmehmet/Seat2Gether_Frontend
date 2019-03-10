import { Routes, RouterModule }  from '@angular/router';

import { Login } from './components/login.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: Login
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
