import { DatagridColumn } from '../../datagrid.column';

export class AdjustingLeverDatagridColumns {
  partNumber: DatagridColumn;
  numberOfBlocking: DatagridColumn;
  designation: DatagridColumn;
  page: DatagridColumn;

  constructor(partNumber: DatagridColumn, numberOfBlocking: DatagridColumn, designation: DatagridColumn, page: DatagridColumn) {
    this.partNumber = partNumber;
    this.numberOfBlocking = numberOfBlocking;
    this.designation = designation;
    this.page = page;
  }
}
