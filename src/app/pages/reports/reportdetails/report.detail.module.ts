import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { AppTranslationModule } from '../../../app.translation.module';
import { routing } from './report.detail.routing';
import { TranslateService } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BusyModule } from 'angular2-busy';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { VehicleService } from '../../../share/services/vehicle/vehicle.service';

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
    Ng2Bs3ModalModule
  ],
  declarations: [
  ],
  providers: [TranslateService, VehicleService]
})
export class ReportDetailModule {}
