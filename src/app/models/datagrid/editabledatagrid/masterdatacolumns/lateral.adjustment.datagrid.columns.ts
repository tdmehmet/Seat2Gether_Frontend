import { DatagridColumn } from '../../datagrid.column';

export class LateraladjustmentDatagridColumns {
  eb: DatagridColumn;
  designation: DatagridColumn;
  lateralAdjustmentLI: DatagridColumn;
  lateralAdjustmentRE: DatagridColumn;
  gauge: DatagridColumn;

  constructor(eb: DatagridColumn, designation: DatagridColumn, lateralAdjustmentLI: DatagridColumn, lateralAdjustmentRE: DatagridColumn, gauge: DatagridColumn) {
    this.eb = eb;
    this.designation = designation;
    this.lateralAdjustmentLI = lateralAdjustmentLI;
    this.lateralAdjustmentRE = lateralAdjustmentRE;
    this.gauge = gauge;
  }
}
