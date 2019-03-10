import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { AppTranslationModule } from '../../../app.translation.module';
import { routing } from './front.data.routing';
import { FrontData } from './components/front.data.component';
import { TranslateService } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BusyModule } from 'angular2-busy';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

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
    FrontData
  ],
  providers: [TranslateService]
})
export class FrontDataModule {}
