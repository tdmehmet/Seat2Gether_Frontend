import { RoleBinding } from './components/role.binding.component';
import { Routes, RouterModule }  from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RoleBinding
  }
];

export const routing = RouterModule.forChild(routes);
