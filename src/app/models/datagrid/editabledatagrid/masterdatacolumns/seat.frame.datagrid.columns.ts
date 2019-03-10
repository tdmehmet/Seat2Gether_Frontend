
import { DatagridColumn } from '../../datagrid.column';

export class SeatFrameDataGridColumns{
    
    ebNumber :DatagridColumn;
    designation:DatagridColumn;
    tnrSupportTube :DatagridColumn;
    amount :DatagridColumn;
    template :DatagridColumn;
    seatPitch :DatagridColumn;
    page :DatagridColumn;
    colorInfo :DatagridColumn;
    adapter :DatagridColumn; 
   

    constructor(ebNumber :DatagridColumn,designation:DatagridColumn,tnrSupportTube :DatagridColumn,amount :DatagridColumn,template :DatagridColumn,seatPitch :DatagridColumn,page :DatagridColumn,colorInfo :DatagridColumn,adapter :DatagridColumn)
    {   
        this.ebNumber =ebNumber;
        this.designation=designation;
        this.tnrSupportTube =tnrSupportTube;
        this.amount =amount;
        this.template =template;
        this.seatPitch =seatPitch;
        this.page =page;
        this.colorInfo =colorInfo;
        this.adapter =adapter;
   
    
    }

}