import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { AppTranslationModule } from '../../../app.translation.module';
import { TranslateService } from '@ngx-translate/core';
import { BusyModule } from 'angular2-busy';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { routing } from './bus.reports.routing';
import { ReportService } from '../../../share/services/reports/report.service';
import { DataFilterPipe } from '../../../share/utils/data.filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    BusyModule,
    Ng2Bs3ModalModule
  ],
  declarations: [  ],
  providers: [TranslateService, ReportService]
})
export class BusReportsModule {}
