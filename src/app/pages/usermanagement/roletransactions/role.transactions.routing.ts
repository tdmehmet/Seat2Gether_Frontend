import { Routes, RouterModule }  from '@angular/router';
import { RoleTransactions } from './components/role.transactions.component';

const routes: Routes = [
  {
    path: '',
    component: RoleTransactions
  }
];

export const routing = RouterModule.forChild(routes);
