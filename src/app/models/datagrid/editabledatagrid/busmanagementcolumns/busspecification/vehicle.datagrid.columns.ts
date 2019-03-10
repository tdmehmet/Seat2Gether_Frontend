import { DatagridColumn } from '../../../datagrid.column';
import { RichDatagridColumn } from '../../../rich.datagrid.column';
import { Seat2getherEditableDatagridComboboxParentComponent } from '../../../../../share/components/editabledatagrid/combobox/seat2gether.editable.datagrid.combobox.parent.component';

export class VehicleDatagridColumns {

  bbNumber: DatagridColumn;
  typeId: RichDatagridColumn<Seat2getherEditableDatagridComboboxParentComponent>;
  // typeId: DatagridColumn;
  country: DatagridColumn;
  modelId: DatagridColumn;

  constructor(bbNumber: DatagridColumn, typeId: RichDatagridColumn<Seat2getherEditableDatagridComboboxParentComponent>, country: DatagridColumn,
              modelId: DatagridColumn) {
  /*  constructor(bbNumber: DatagridColumn, typeId: DatagridColumn, country: DatagridColumn,
              modelId: DatagridColumn) {*/
    this.bbNumber = bbNumber;
    this.typeId = typeId;
    this.country = country;
    this.modelId = modelId;
  }
}
