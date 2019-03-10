import { DatagridColumn } from '../../datagrid.column';

export class CharacteristicDatagridColumns {

  characteristicValue: DatagridColumn;
  area: DatagridColumn;
  sort: DatagridColumn;

  constructor(characteristicValue: DatagridColumn, area: DatagridColumn, sort: DatagridColumn) {
    this.characteristicValue = characteristicValue;
    this.area = area;
    this.sort = sort;
  }
}
