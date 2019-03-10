import { DatagridColumn } from '../../datagrid.column';

export class BeltDatagridColumns {
  eb: DatagridColumn;
  designation: DatagridColumn;
  link: DatagridColumn;
  right: DatagridColumn;
  program: DatagridColumn;
  dsCharacteristic: DatagridColumn;
  numberOfBack: DatagridColumn;
  arrangement: DatagridColumn;

  constructor(eb: DatagridColumn, designation: DatagridColumn, link: DatagridColumn, right: DatagridColumn,
              program: DatagridColumn, dsCharacteristic: DatagridColumn, numberOfBack: DatagridColumn, arrangement: DatagridColumn) {
    this.eb = eb;
    this.designation = designation;
    this.link = link;
    this.right = right;
    this.program = program;
    this.dsCharacteristic = dsCharacteristic;
    this.numberOfBack = numberOfBack;
    this.arrangement = arrangement;
  }
}
