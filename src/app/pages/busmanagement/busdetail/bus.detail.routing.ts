import { Routes, RouterModule }  from '@angular/router';
import { BusDetail } from './components/bus.detail.component';

const routes: Routes = [
  {
    path: '',
    component: BusDetail
  }
];

export const routing = RouterModule.forChild(routes);
