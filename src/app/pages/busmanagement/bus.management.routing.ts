import { Routes, RouterModule } from '@angular/router';
import { BusManagement } from './bus.management.component';
import { BusSpecification } from './busspecification/components/bus.specification.component';
import { BusDetail } from './busdetail/components/bus.detail.component';
import { BusImport } from './busimport/bus.import.component';
import { BusMaterial } from './busmaterial/bus.material.component';
import { BusMasterData } from './busmasterdata/components/busmasterdata.component';
import { BusSeat } from './busseat/components/busseat';

const routes: Routes = [
  {
    path: '',
    component: BusManagement,
    children: [
      { path: 'busspecification', component: BusSpecification },
      { path: 'busmasterdata', component: BusMasterData },
      { path: 'busdetail/:bbNumber', component: BusDetail },
      { path: 'busimport', component: BusImport },
      { path: 'busmaterial/:bbNumber', component: BusMaterial },
      { path: 'busseat/:bbNumber', component: BusSeat },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
