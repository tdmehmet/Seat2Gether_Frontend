import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppTranslationModule } from '../../app.translation.module';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { DataTableModule } from 'angular2-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BusyModule } from 'angular2-busy';
import { Orders } from './components/orders.component';
import { ComboBoxModule } from 'ng2-combobox';
import { ErrorModalModule } from '../../share/components/errormodal/error.modal.module';
import { Seat2getherEditableDatagridModule } from '../../share/components/editabledatagrid/seat2gether.editable.datagrid.module';
import { SuccessModalModule } from '../../share/components/successmodal/success.modal.module';
import { routing } from './orders.routing';
import { TranslateService } from '@ngx-translate/core';
import { EditOrderService } from '../../share/services/order/order.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    AppTranslationModule,
    NgbModalModule,
    routing,
    DataTableModule,
    Ng2SmartTableModule,
    BusyModule,
    ComboBoxModule,
    Ng2Bs3ModalModule,
    ErrorModalModule,
    SuccessModalModule,
    Seat2getherEditableDatagridModule
  ],
  declarations: [
    Orders
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [TranslateService,EditOrderService]
})

export class OrdersModule {
}
