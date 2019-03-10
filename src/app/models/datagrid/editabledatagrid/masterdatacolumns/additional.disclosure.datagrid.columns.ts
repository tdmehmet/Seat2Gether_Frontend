import { DatagridColumn } from '../../datagrid.column';

export class AdditionalDisclosureDatagridColumns {
  specification: DatagridColumn;
  standardTime: DatagridColumn;

  constructor(specification: DatagridColumn, standardTime: DatagridColumn) {
    this.specification = specification;
    this.standardTime = standardTime;
  }
}
