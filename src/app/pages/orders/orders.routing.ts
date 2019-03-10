import { Routes, RouterModule }  from '@angular/router';
import { Orders } from './components/orders.component';

const routes: Routes = [
  {
    path: '',
    component: Orders
  }
];

export const routing = RouterModule.forChild(routes);
