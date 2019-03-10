import { Routes, RouterModule }  from '@angular/router';
import { BusSpecification } from './components/bus.specification.component';
import { BusDetail } from '../busdetail/components/bus.detail.component';

const routes: Routes = [
  {
    path: '',
    component: BusSpecification
  }
];

export const routing = RouterModule.forChild(routes);
