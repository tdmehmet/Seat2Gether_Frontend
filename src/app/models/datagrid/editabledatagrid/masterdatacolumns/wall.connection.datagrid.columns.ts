import { DatagridColumn } from '../../datagrid.column';

export class WallconnectionDatagridColumns {
  partNumber: DatagridColumn;

  constructor(partNumber: DatagridColumn) {
    this.partNumber = partNumber;
  }
}
