import { Routes, RouterModule }  from '@angular/router';
import { BusReports } from './components/bus.reports.component';

const routes: Routes = [
  {
    path: '',
    component: BusReports
  }
];

export const routing = RouterModule.forChild(routes);
