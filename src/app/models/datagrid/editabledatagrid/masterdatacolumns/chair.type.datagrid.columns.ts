import { DatagridColumn } from '../../datagrid.column';

export class ChairtypeDatagridColumns {
  chairtype: DatagridColumn;
  classification: DatagridColumn;
  setupTime: DatagridColumn;
  active: DatagridColumn;
  janzList: DatagridColumn;
  outsideCompany: DatagridColumn;
  feedback: DatagridColumn;
  referenceTime: DatagridColumn;
  presetTimeReferenceSlot: DatagridColumn;
  group: DatagridColumn;
  upholsteryLine: DatagridColumn;
  tbSeatFrame: DatagridColumn;
  colloquial: DatagridColumn;
  factorForNumberCalculation: DatagridColumn;

  constructor(chairtype: DatagridColumn, classification: DatagridColumn, setupTime: DatagridColumn, active: DatagridColumn,
              janzList: DatagridColumn, outsideCompany: DatagridColumn, feedback: DatagridColumn, referenceTime: DatagridColumn,
              presetTimeReferenceSlot: DatagridColumn, group: DatagridColumn, upholsteryLine: DatagridColumn, tbSeatFrame: DatagridColumn,
              colloquial: DatagridColumn, factorForNumberCalculation: DatagridColumn ) {
    this.chairtype = chairtype;
    this.classification = classification;
    this.setupTime = setupTime;
    this.active = active;
    this.janzList = janzList;
    this.outsideCompany = outsideCompany;
    this.feedback = feedback;
    this.referenceTime = referenceTime;
    this.presetTimeReferenceSlot = presetTimeReferenceSlot;
    this.group = group;
    this.upholsteryLine = upholsteryLine;
    this.tbSeatFrame = tbSeatFrame;
    this.colloquial = colloquial;
    this.factorForNumberCalculation = factorForNumberCalculation;
  }
}
