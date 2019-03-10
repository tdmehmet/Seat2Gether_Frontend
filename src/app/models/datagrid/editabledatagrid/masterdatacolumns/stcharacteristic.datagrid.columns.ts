
import { DatagridColumn } from '../../datagrid.column';

export class StCharacteristicDataGridColumns{
    lfdNrCharacteristic:DatagridColumn;
    characteristic:DatagridColumn;
    sort:DatagridColumn;
    lfdNrPot:DatagridColumn;
    cut:DatagridColumn;
    stitching:DatagridColumn;
    specialSeat:DatagridColumn;
    montage:DatagridColumn;
    issueCircus:DatagridColumn;
    materialRelevant:DatagridColumn;

    constructor(lfdNrCharacteristic:DatagridColumn, characteristic:DatagridColumn,sort:DatagridColumn,lfdNrPot:DatagridColumn,cut:DatagridColumn,stitching:DatagridColumn,specialSeat:DatagridColumn,montage:DatagridColumn,issueCircus:DatagridColumn,materialRelevant:DatagridColumn)
    {
        this.lfdNrCharacteristic=lfdNrCharacteristic;
        this.characteristic=characteristic;
        this.sort=sort;
        this.lfdNrPot=lfdNrPot;
        this.cut=cut;
        this.stitching=stitching;
        this.specialSeat=specialSeat;
        this.montage=montage;
        this.issueCircus=issueCircus;
        this.materialRelevant=materialRelevant;

    }

}