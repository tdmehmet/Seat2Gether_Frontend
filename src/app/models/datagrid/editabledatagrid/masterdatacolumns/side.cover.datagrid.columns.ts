import { DatagridColumn } from '../../datagrid.column';

export class SideCoverDatagridColumns {
  partNumber: DatagridColumn;
  designations: DatagridColumn;
  beltAisleSide: DatagridColumn;
  armRest: DatagridColumn;

  constructor(partNumber: DatagridColumn, designations: DatagridColumn, beltAisleSide: DatagridColumn, armRest: DatagridColumn) {
    this.partNumber = partNumber;
    this.designations = designations;
    this.beltAisleSide = beltAisleSide;
    this.armRest = armRest;
  }
}
