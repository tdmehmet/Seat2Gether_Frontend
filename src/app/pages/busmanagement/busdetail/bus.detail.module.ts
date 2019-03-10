import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { AppTranslationModule } from '../../../app.translation.module';
import { TranslateService } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BusyModule } from 'angular2-busy';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { VehicleService } from '../../../share/services/vehicle/vehicle.service';
import { BusService } from '../../../share/services/bus/bus.service';
import { RouterModule } from '@angular/router';
import { routing } from "./bus.detail.routing";
import { MasterDataService } from '../../../share/services/masterdata/masterdata.service';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    NgbModule,
    BusyModule,
    Ng2Bs3ModalModule,
    routing
  ],
  declarations: [
  ],
  providers: [TranslateService, VehicleService, BusService, MasterDataService]
})
export class BusDetailModule { }
