import {NgModule}      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { TreeModule } from 'ng2-tree';

import { routing }       from './components.routing';
import { Components } from './components.component';
import { TreeView } from './components/treeView/treeView.component';
import {Seat2GetherErrorModal} from "./modal/errormodal/seat2gether.error.modal.component";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {AppTranslationModule} from "../../app.translation.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    TreeModule,
    routing,
    AppTranslationModule,
    Ng2Bs3ModalModule
  ],
  declarations: [
    Components,
    TreeView
  ]
})
export class ComponentsModule {}
