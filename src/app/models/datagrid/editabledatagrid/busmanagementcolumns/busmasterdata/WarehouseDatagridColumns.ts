import { DatagridColumn } from '../../../datagrid.column';

export class WarehouseDatagridColumns {

  materialNumber: DatagridColumn;
  warehouseNumber: DatagridColumn;

  constructor(materialNumber: DatagridColumn, warehouseNumber: DatagridColumn) {
    this.materialNumber = materialNumber;
    this.warehouseNumber = warehouseNumber;
  }

}
