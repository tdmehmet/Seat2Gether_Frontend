import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './user.management.routing';

import { NgaModule } from '../../theme/nga.module';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { UserManagement } from './user.management.component';
import { RoleBinding } from './rolebinding/components/role.binding.component';
import { AppTranslationModule } from '../../app.translation.module';
import { MultipleAutocompleteComponent } from '../../share/components/autocomplete/multiple-auto-complete';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { DataTableModule } from 'angular2-datatable';
import { RoleTransactions } from './roletransactions/components/role.transactions.component';
import { RoleService } from '../../share/services/role/role.service';
import { CheckboxInputs } from '../forms/components/inputs/components/checkboxInputs/checkboxInputs.component';
import { BusyModule } from 'angular2-busy';
import { ErrorModalModule } from '../../share/components/errormodal/error.modal.module';
import { SuccessModalModule } from '../../share/components/successmodal/success.modal.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    AppTranslationModule,
    NgbModalModule,
    routing,
    Ng2Bs3ModalModule,
    DataTableModule,
    BusyModule,
    ErrorModalModule,
    SuccessModalModule
  ],
  declarations: [
    UserManagement,
    RoleBinding
  ],
  providers: [RoleService],
})
export class UserManagementModule {
}
