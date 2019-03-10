import { Routes, RouterModule }  from '@angular/router';
import { BusDetail } from './components/bus.detail.component';
import { ReportDetail } from './components/report.detail.component';

const routes: Routes = [
  {
    path: '',
    component: ReportDetail
  }
];

export const routing = RouterModule.forChild(routes);
