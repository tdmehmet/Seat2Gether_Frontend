import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BusMasterData } from './components/busmasterdata.component';
import { routing } from './busmasterdata.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { ComboBoxModule } from 'ng2-combobox';
import { Seat2getherEditableDatagridModule } from '../../../share/components/editabledatagrid/seat2gether.editable.datagrid.module';
import { DataTableModule } from 'angular2-datatable';
import { AppTranslationModule } from '../../../app.translation.module';
import { ErrorModalModule } from '../../../share/components/errormodal/error.modal.module';
import { SuccessModalModule } from '../../../share/components/successmodal/success.modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    ErrorModalModule,
    SuccessModalModule,
    routing,
    NgaModule,
    ComboBoxModule,
    DataTableModule,
    Seat2getherEditableDatagridModule
  ],
  exports: [],
  declarations: [BusMasterData],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
})
export class BusMasterDataModule { }
