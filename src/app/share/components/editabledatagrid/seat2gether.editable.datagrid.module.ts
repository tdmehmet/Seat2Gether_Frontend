import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { NgaModule } from '../../../theme/nga.module';
import { AppTranslationModule } from '../../../app.translation.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModalComponent } from './error.modal.component';
import { Seat2getherEditableDatagridComponent } from './seat2gether.editable.datagrid.component';
import { BusyModule } from 'angular2-busy';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    Ng2Bs3ModalModule,
    Ng2SmartTableModule,
    BusyModule,
  ],
  declarations: [ Seat2getherEditableDatagridComponent ],
  exports: [ Seat2getherEditableDatagridComponent ]
})
export class Seat2getherEditableDatagridModule {

}
