import { Component, Input } from '@angular/core';
import { EditableDatagridComboboxModel } from '../../../../models/datagrid/editabledatagrid/editable.datagrid.combobox.model';

// both this and the parent component could be folded into one component as they're both simple, but it illustrates how
// a fuller example could work
@Component({
  selector: 'dg-combobox',
  template: `
    <combo-box  [listData]="listData"
                [displayField]="'display'"
                [valueField]="'value'"
                [(ngModel)]="selectedValue"
                [forceSelection]="true"
                [localFilter]="true"
                [inputClass]="'form-control'"
                [inputPlaceholder]="translate.instant('masterdata.frontdata.pleaseSelect')"
                [noMatchesText]="translate.instant('masterdata.frontdata.pleaseSelect')"
                [editable]="false">
    </combo-box>`
})
export class Seat2getherEditableDatagridComboboxComponent{

  @Input() listData: EditableDatagridComboboxModel[];
  @Input() selectedValue: number;
  @Input()  editable: boolean;

}
