import { Routes, RouterModule }  from '@angular/router';
import { BusMasterData } from './components/busmasterdata.component';

const routes: Routes = [
  {
    path: '',
    component: BusMasterData
  }
];

export const routing = RouterModule.forChild(routes);
