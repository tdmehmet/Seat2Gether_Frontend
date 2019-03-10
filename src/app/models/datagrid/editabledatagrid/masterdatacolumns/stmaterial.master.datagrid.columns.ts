
import { DatagridColumn } from '../../datagrid.column';

export class StMaterialMasterDataGridColumns{
    
    partNumber:DatagridColumn;
    designations:DatagridColumn;
    lfdNrCharacteristic:DatagridColumn;
    active:DatagridColumn;
    createdBy:DatagridColumn;
    createdOn:DatagridColumn;
    alteredFrom:DatagridColumn;
    changedOn:DatagridColumn;
    area:DatagridColumn;
    designationReport:DatagridColumn;
    issueLabel:DatagridColumn;
    columnReportSpecialSeat:DatagridColumn;
    issueReport:DatagridColumn;
    lineReportCircus:DatagridColumn;
    issueReportCircus:DatagridColumn;
    columnSSFNS:DatagridColumn;
    issueSSFNS:DatagridColumn;
    columnSSFS:DatagridColumn;
    issueSSFS:DatagridColumn;
    labelText:DatagridColumn;
    uGR:DatagridColumn;
    kSW:DatagridColumn;
   

    constructor(partNumber:DatagridColumn,designations:DatagridColumn,lfdNrCharacteristic:DatagridColumn,active:DatagridColumn,createdBy:DatagridColumn,createdOn:DatagridColumn,alteredFrom:DatagridColumn,changedOn:DatagridColumn,area:DatagridColumn,designationReport:DatagridColumn,issueLabel:DatagridColumn,columnReportSpecialSeat:DatagridColumn,issueReport:DatagridColumn,lineReportCircus:DatagridColumn,issueReportCircus:DatagridColumn,columnSSFNS:DatagridColumn,issueSSFNS:DatagridColumn,columnSSFS:DatagridColumn,issueSSFS:DatagridColumn,labelText:DatagridColumn,uGR:DatagridColumn,kSW:DatagridColumn)
    {   
    this.partNumber=partNumber;
    this.designations=designations;
    this.lfdNrCharacteristic=lfdNrCharacteristic;
    this.active=active;
    this.createdBy=createdBy;
    this.createdOn=createdOn;
    this.alteredFrom=alteredFrom;
    this.changedOn=changedOn;
    this.area=area;
    this.designationReport=designationReport;
    this.issueLabel=issueLabel;
    this.columnReportSpecialSeat=columnReportSpecialSeat;
    this.issueReport=issueReport;
    this.lineReportCircus=lineReportCircus;
    this.issueReportCircus=issueReportCircus;
    this.columnSSFNS=columnSSFNS;
    this.issueSSFNS=issueSSFNS;
    this.columnSSFS=columnSSFS;
    this.issueSSFS=issueSSFS;
    this.labelText=labelText;
    this.uGR=uGR;
    this.kSW=kSW;
    }

}