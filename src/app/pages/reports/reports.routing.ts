import { Routes, RouterModule }  from '@angular/router';
import { BusDetail } from './busdetail/components/bus.detail.component';
import { Reports } from './reports.component';
import { BusReports } from './busreports/components/bus.reports.component';
import { ReportDetail } from './reportdetails/components/report.detail.component';

const routes: Routes = [
  {
    path: '',
    component: Reports,
    children: [
      { path: 'busreports', component: BusReports },
      { path: 'reportdetail/:bbnr', component: ReportDetail}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
