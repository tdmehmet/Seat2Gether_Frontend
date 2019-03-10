import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BusMaterial } from './bus.material.component';
import { StationList } from './components/station-list/station-list.component';
import { MaterialList } from './components/material-list/material-list.component';
import { MaterialService } from '../../../share/services/material/material.service';
import { NgaModule } from '../../../theme/nga.module';
import { StationService } from '../../../share/services/station/station.service';
import { MaterialAdd } from './components/material-add/material-add.component';
import { AppTranslationModule } from '../../../app.translation.module';
import { BusyModule } from 'angular2-busy';
import { ErrorModalModule } from '../../../share/components/errormodal/error.modal.module';
import { ComboBoxModule } from 'ng2-combobox';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    NgaModule,
    ComboBoxModule,
    AppTranslationModule,
    BusyModule,
    ErrorModalModule
  ],
  exports: [],
  declarations: [BusMaterial, MaterialList, StationList, MaterialAdd],
  providers: [MaterialService, StationService],
})
export class BusMaterialModule { }
