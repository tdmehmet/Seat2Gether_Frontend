import { DatagridColumn } from "../../../datagrid.column";

export class CountryDatagridColumns {
  tr: DatagridColumn;
  en: DatagridColumn;
  de: DatagridColumn;

  constructor(tr: DatagridColumn, en: DatagridColumn, de: DatagridColumn) {
    this.tr = tr;
    this.en = en;
    this.de = de;
  }
}
