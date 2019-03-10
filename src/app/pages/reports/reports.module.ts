import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import {NgbDatepicker, NgbDatepickerModule, NgbDropdownModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { AppTranslationModule } from '../../app.translation.module';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { DataTableModule } from 'angular2-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BusyModule } from 'angular2-busy';
import { ComboBoxModule } from 'ng2-combobox';
import { ErrorModalModule } from '../../share/components/errormodal/error.modal.module';
import { Seat2getherEditableDatagridModule } from '../../share/components/editabledatagrid/seat2gether.editable.datagrid.module';
import { SuccessModalModule } from '../../share/components/successmodal/success.modal.module';
import { BusReports } from './busreports/components/bus.reports.component';
import { Reports } from './reports.component';
import { BusReportsModule } from './busreports/bus.reports.module';
import { routing } from './reports.routing';
import {BusDetailModule} from "../busmanagement/busdetail/bus.detail.module";
import {ReportDetail} from "./reportdetails/components/report.detail.component";
import {ReportDetailModule} from "./reportdetails/report.detail.module";
import {DataFilterPipe} from "../../share/utils/data.filter.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    AppTranslationModule,
    routing,
    DataTableModule,
    Ng2SmartTableModule,
    BusyModule,
    ComboBoxModule,
    Ng2Bs3ModalModule,
    ErrorModalModule,
    SuccessModalModule,
    BusReportsModule,
    Seat2getherEditableDatagridModule,
    NgbDatepickerModule,
    ReportDetailModule
  ],
  declarations: [
    Reports,
    BusReports,
    ReportDetail,
    DataFilterPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: []
})

export class ReportsModule {
}
