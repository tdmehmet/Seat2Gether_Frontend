import { DatagridColumn } from '../../datagrid.column';

export class StatusDatagridColumns {
  statusValue: DatagridColumn;

  constructor(statusValue: DatagridColumn) {
    this.statusValue = statusValue;
  }
}
