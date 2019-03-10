import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { NgaModule } from '../../../theme/nga.module';
import { AppTranslationModule } from '../../../app.translation.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SuccessModalComponent } from './success.modal.component';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    Ng2Bs3ModalModule,
  ],
  declarations: [ SuccessModalComponent ],
  exports: [ SuccessModalComponent ]
})
export class SuccessModalModule {

}
