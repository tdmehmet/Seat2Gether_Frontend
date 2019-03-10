import { NgModule } from '@angular/core';
import { RatioComponent } from './ratio.component';
import { RatioParentComponent } from './ratio.parent.component';
import { Seat2getherEditableDatagridComboboxComponent } from './seat2gether.editable.datagrid.combobox.component';
import { Seat2getherEditableDatagridComboboxParentComponent } from './seat2gether.editable.datagrid.combobox.parent.component';

@NgModule({
  imports: [],
  declarations: [
    Seat2getherEditableDatagridComboboxComponent,
    Seat2getherEditableDatagridComboboxParentComponent
  ],
  exports: [
    RatioParentComponent
  ]
})
export class Seat2getherEditableDatagridComboboxMoldule {
}
