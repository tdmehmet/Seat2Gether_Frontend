import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { AppTranslationModule } from '../../../app.translation.module';
import { routing } from './role.binding.routing';
import { RoleBinding } from './components/role.binding.component';
import { DataTableModule } from 'angular2-datatable';
import { BusyModule } from 'angular2-busy"';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    HttpModule,
    BrowserModule,
    AppTranslationModule,
    NgbModalModule,
    routing,
    Ng2Bs3ModalModule,
    DataTableModule,
    BusyModule
  ],
  providers: []
})
export class RoleBindingModule {}
