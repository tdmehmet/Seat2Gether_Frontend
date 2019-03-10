import { DatagridColumn } from '../../../datagrid.column';


export class StationDatagridColumns {

  stationNumber: DatagridColumn;
  stationName: DatagridColumn;

  constructor(stationNumber: DatagridColumn ,stationName: DatagridColumn) {
    this.stationNumber = stationNumber;
    this.stationName = stationName;
  }

}
