export class ReportLogModel {

  bbnr: string;
  deck: string;
  reportName: string;
  reportDate: Date;
  reportUser: string;
  printStatus: string;

  constructor() {
    this.bbnr = '';
    this.deck = '';
    this.reportName = '';
    this.reportDate = null;
    this.reportUser = '';
    this.printStatus = '';
  }
}
