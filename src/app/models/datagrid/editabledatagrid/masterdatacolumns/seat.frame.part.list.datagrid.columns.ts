
import { DatagridColumn } from '../../datagrid.column';

export class SeatFramePartListDataGridColumns{
    
  
    characteristic:DatagridColumn;
    tnrLi:DatagridColumn;
    tnrRe:DatagridColumn;  
   

    constructor(characteristic:DatagridColumn,tnrLi:DatagridColumn,tnrRe:DatagridColumn)
    {   
        this.characteristic=characteristic;
        this.tnrLi=tnrLi;
        this.tnrRe=tnrRe;
        
   
    
    }

}