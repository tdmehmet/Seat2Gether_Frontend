import {NgModule, NO_ERRORS_SCHEMA}      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { AppTranslationModule } from '../../../app.translation.module';
import { routing } from './role.transactions.routing';
import { RoleTransactions } from './components/role.transactions.component';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    RoleTransactions
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RoleTransactionsModule {}
