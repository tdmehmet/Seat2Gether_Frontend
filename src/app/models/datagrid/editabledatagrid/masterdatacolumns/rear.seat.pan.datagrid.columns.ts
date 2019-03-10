import { DatagridColumn } from '../../datagrid.column';

export class RearseatpanDatagridColumns {
  partNumber: DatagridColumn;
  narrow: DatagridColumn;
  characteristic: DatagridColumn;
  remark: DatagridColumn;

  constructor(partNumber: DatagridColumn, narrow: DatagridColumn, characteristic: DatagridColumn, remark: DatagridColumn) {
    this.partNumber = partNumber;
    this.narrow = narrow;
    this.characteristic = characteristic;
    this.remark = remark;
  }
}
