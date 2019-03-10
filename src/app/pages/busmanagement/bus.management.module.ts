import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { routing } from "./bus.management.routing";
import { NgaModule } from "../../theme/nga.module";
import {
  NgbDropdownModule,
  NgbModalModule,
  NgbDatepickerModule
} from "@ng-bootstrap/ng-bootstrap";
import { AppTranslationModule } from "../../app.translation.module";
import { Ng2Bs3ModalModule } from "ng2-bs3-modal/ng2-bs3-modal";
import { DataTableModule } from "angular2-datatable";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { BusyModule } from "angular2-busy";
import { ComboBoxModule } from "ng2-combobox";
import { ErrorModalModule } from "../../share/components/errormodal/error.modal.module";
import { Seat2getherEditableDatagridModule } from "../../share/components/editabledatagrid/seat2gether.editable.datagrid.module";
import { SuccessModalModule } from "../../share/components/successmodal/success.modal.module";
import { BusManagement } from "./bus.management.component";
import { BusSpecificationModule } from "./busspecification/bus.specification.module";
import { BusSpecification } from "./busspecification/components/bus.specification.component";
import { BusDetailModule } from "./busdetail/bus.detail.module";
import { BusDetail } from "./busdetail/components/bus.detail.component";
import { BusImport } from "./busimport/bus.import.component";
import { BusMaterialModule } from "./busmaterial/bus.material.module";
import { BusMasterDataModule } from "./busmasterdata/busmasterdata.module";
import { BusSeatModule } from "./busseat/busseat.module";
import { S2gSelectComponent } from "./components/s2gselect/s2gselect.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    AppTranslationModule,
    NgbModalModule,
    NgbDatepickerModule,
    routing,
    DataTableModule,
    Ng2SmartTableModule,
    BusyModule,
    ComboBoxModule,
    Ng2Bs3ModalModule,
    ErrorModalModule,
    SuccessModalModule,
    BusSpecificationModule,
    Seat2getherEditableDatagridModule,
    BusDetailModule,
    BusMaterialModule,
    BusMasterDataModule,
    BusSeatModule
  ],
  declarations: [
    BusManagement,
    BusSpecification,
    BusDetail,
    BusImport,
    S2gSelectComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: []
})
export class BusManagementModule {}
