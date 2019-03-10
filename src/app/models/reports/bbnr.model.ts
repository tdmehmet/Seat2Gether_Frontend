export class BBNRModel {

  bbnrid: string;
  orderID: string;
  numberOfLeft: number;
  numberOfRight: number;
  numberOfBack: number;
  armChairType: string;
  lfdnrStatus: number;
  countryCode: string;
  toBe_Date: Date;
  customer: string;
  contactSales: string;
  contactAZ: string;
  euGuidelines: string;
  decrease: string;
  bbnrMax: string;
  bbnrMin: string;
  bbnrType: string;
  location: string;
  itemChecked: boolean;

  constructor() {
    this.bbnrid = '';
    this.orderID = '';
    this.numberOfLeft = 0;
    this.numberOfRight = 0;
    this.numberOfBack = 0;
    this.armChairType = '';
    this.lfdnrStatus = 0;
    this.countryCode = '';
    this.customer = '';
    this.contactSales = '';
    this.contactAZ = '';
    this.euGuidelines = '';
    this.decrease = '';
    this.bbnrMax = '';
    this.bbnrMin = '';
    this.bbnrType = '';
    this.location = '';
    this.toBe_Date = null;
    this.itemChecked = false;
  }



}
