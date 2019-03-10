import { Routes, RouterModule }  from '@angular/router';
import { FrontData } from './components/front.data.component';

const routes: Routes = [
  {
    path: '',
    component: FrontData
  }
];

export const routing = RouterModule.forChild(routes);
