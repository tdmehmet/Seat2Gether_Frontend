import { Routes, RouterModule }  from '@angular/router';
import { MasterData } from './master.data.component';
import { FrontData } from './frontdata/components/front.data.component';

const routes: Routes = [
  {
    path: '',
    component: MasterData,
    children: [
      { path: 'frontdata', component: FrontData},
    ]
  }
];

export const routing = RouterModule.forChild(routes);
