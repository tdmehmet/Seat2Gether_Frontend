import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';
import { Pages } from './pages.component';
import { MenuService } from '../share/services/menu/menu.service';
import { UserService } from '../share/services/user/user.service';
import { FileService } from '../share/services/file/file.service';
import { Seat2GetherErrorModal } from './components/modal/errormodal/seat2gether.error.modal.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { RoleService } from '../share/services/role/role.service';
import { LoginModule } from './login/login.module';
import { MasterDataModule } from './masterdata/master.data.module';
import { ErrorModalModule } from '../share/components/errormodal/error.modal.module';
import { BusyModule } from 'angular2-busy';
import { BusManagementModule } from './busmanagement/bus.management.module';
import { OrdersModule } from './orders/orders.module';
import {ReportsModule} from "./reports/reports.module";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing,
    Ng2Bs3ModalModule,
    LoginModule,
    MasterDataModule,
    ErrorModalModule,
    BusyModule,
    BusManagementModule,
    ReportsModule,
    OrdersModule
  ],
  declarations: [
    Pages
  ],
  providers: [
    MenuService,
    UserService,
    FileService,
    RoleService]
})
export class PagesModule {
}
