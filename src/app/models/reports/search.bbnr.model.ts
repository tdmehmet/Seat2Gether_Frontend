export class SearchBBNRModel {

  BBNRID: string;
  OrderID: string;
  StartDate: Date;
  EndDate: Date;

  constructor() {
    this.BBNRID = '';
    this.OrderID = '';
    this.StartDate = null;
    this.EndDate = null;
  }
}
