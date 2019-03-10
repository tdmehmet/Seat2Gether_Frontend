import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular/main';
import { EditableDatagridComboboxModel } from '../../../../models/datagrid/editabledatagrid/editable.datagrid.combobox.model';

// both this and the parent component could be folded into one component as they're both simple, but it illustrates how
// a fuller example could work
@Component({
  selector: 'ratio-cell',
  template: `
    <dg-combobox style="height:20px" [editable]="params?.value?.editable" [listData]="params?.value?.listData" [selectedValue]="params?.value?.selectedValue" >
    </dg-combobox>
    `,
  styles: [`
        ag-ratio {
          display: block;
          overflow:hidden;
          border:1px solid #ccc;
          border-radius:6px;
          background: #fff;
        }
    `]
})
export class Seat2getherEditableDatagridComboboxParentComponent implements ICellRendererAngularComp {
  public params: any = {
    value: {listData: [new EditableDatagridComboboxModel(0, 'No Value Found')], editable: false, selectedValue: 0}
  };

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }
}
