import {DatagridColumn} from '../../datagrid.column';

export class BackrestAdjustmentDatagridColumns{
    eb:DatagridColumn;
    designation:DatagridColumn;
    numberOfPneumaticSpring:DatagridColumn;
    pretenseLi:DatagridColumn;
    pretenseRe:DatagridColumn;

       
    constructor(eb: DatagridColumn, designation: DatagridColumn, numberOfPneumaticSpring: DatagridColumn, pretenseLi: DatagridColumn,pretenseRe:DatagridColumn) {
    this.eb=eb;
    this.designation=designation;
    this.numberOfPneumaticSpring=numberOfPneumaticSpring;
    this.pretenseLi=pretenseLi;
    this.pretenseRe=pretenseRe;
  } 
}
