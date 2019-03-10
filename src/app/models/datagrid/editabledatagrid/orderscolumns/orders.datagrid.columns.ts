import { DatagridColumn } from '../../datagrid.column';
//import { RichDatagridColumn } from '../../rich.datagrid.column';
//import { Seat2getherEditableDatagridComboboxParentComponent } from '../../../../share/components/editabledatagrid/combobox/seat2gether.editable.datagrid.combobox.parent.component';

export class OrdersDatagridColumns {
  orderNumber: DatagridColumn; 
  minBBNR: DatagridColumn;
  maxBBNR: DatagridColumn
  comment: DatagridColumn;
  statusID: DatagridColumn;
  //statusId: RichDatagridColumn<Seat2getherEditableDatagridComboboxParentComponent>;

  constructor(orderNumber: DatagridColumn, minBBNR: DatagridColumn, maxBBNR: DatagridColumn,
    comment: DatagridColumn, statusID: DatagridColumn) {
    this.orderNumber = orderNumber;
    this.minBBNR = minBBNR;
    this.maxBBNR = maxBBNR;
    this.comment = comment;
    this.statusID = statusID;
  }
}
