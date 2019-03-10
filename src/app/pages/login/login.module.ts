import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { AuthService } from '../../share/services/login/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Login } from './components/login.component';
import { routing }       from './login.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Seat2GetherBasePage } from '../basepage/seat2gether.base.page.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BusyModule } from 'angular2-busy';
import { ErrorModalModule } from '../../share/components/errormodal/error.modal.module';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    NgbModule,
    routing,
    Ng2Bs3ModalModule,
    BusyModule,
    ErrorModalModule
  ],
  declarations: [Login],
  providers: [AuthService]
})
export class LoginModule {}
