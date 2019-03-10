import { Routes, RouterModule }  from '@angular/router';
import { UserManagement } from './user.management.component';
import { RoleBinding } from './rolebinding/components/role.binding.component';
import { RoleTransactions } from './roletransactions/components/role.transactions.component';

const routes: Routes = [
  {
    path: '',
    component: UserManagement,
    children: [
      { path: 'rolebinding', component: RoleBinding }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
