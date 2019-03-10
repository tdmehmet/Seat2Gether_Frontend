import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { AppTranslationModule } from '../../../app.translation.module';
import { routing } from './bus.specification.routing';
import { TranslateService } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BusyModule } from 'angular2-busy';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { VehicleService } from '../../../share/services/vehicle/vehicle.service';
import { ImportDataService } from '../../../share/services/importdata/importdata.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    NgbModule,
    routing,
    BusyModule,
    Ng2Bs3ModalModule,
    Ng2SmartTableModule
  ],
  declarations: [
  ],
  providers: [
    TranslateService,
    VehicleService,
    ImportDataService]
})
export class BusSpecificationModule { }
