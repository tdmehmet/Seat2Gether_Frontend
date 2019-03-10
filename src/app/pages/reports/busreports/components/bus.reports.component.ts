import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatagridColumnValues } from '../../../../models/datagrid/datagrid.column.values';
import { DatagridColourColumns } from '../../../../models/datagrid/colour/datagrid.colour.columns';
import { ErrorModalComponent } from '../../../../share/components/errormodal/error.modal.component';
import { SuccessModalComponent } from '../../../../share/components/successmodal/success.modal.component';
import { BusyModule } from 'angular2-busy';
import { Subscription } from 'rxjs/Subscription';
import { VehicleDG } from '../../../../models/busmanagement/busspecification/vehicleDG';
import 'style-loader!./bus.reports.scss';
import { BBNRModel } from '../../../../models/reports/bbnr.model';
import { CutReportService } from '../../../../share/services/reports/cut.report.service';
import { SearchBBNRModel } from '../../../../models/reports/search.bbnr.model';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ReportService } from '../../../../share/services/reports/report.service';
import { credentials } from '../../../../share/credientials';
import { CodeValueModel } from '../../../../models/reports/code.value.model';
import { ReportLogModel } from '../../../../models/reports/report.log.model';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'busreports',
  templateUrl: './bus.reports.html'
})
export class BusReports implements OnInit {

  @ViewChild('errormodal')
  errorModal: ErrorModalComponent;

  @ViewChild('successmodal')
  successModal: SuccessModalComponent;

  @ViewChild('busdetails')
  busDetailsModal: ModalComponent;

  busyDiv: BusyModule;

  busy: Subscription;

  searchBBNR: SearchBBNRModel = new SearchBBNRModel();
  bbnrList: BBNRModel[] = [];
  selectedBBNRList: string[] = [];
  startDate: NgbDateStruct = null;
  endDate: NgbDateStruct  = null;
  filterQuery = '';
  reportLogFilterQuery = '';

  reportLogList: ReportLogModel[] = [];
  codeValueList: CodeValueModel[] = [];
  selectedDeckType: string = '-';
  selectedCodeValue: CodeValueModel;
  credentialsVals = credentials;
  selectedReports: string[] = [];

  constructor(private reportService: ReportService,
              private translate: TranslateService
  ) {

  }

  ngOnInit(): void {
  }

  onSearchClicked(): void {
    this.bbnrList = [];
    if (this.endDate != null) {
      this.searchBBNR.EndDate = new Date(this.endDate.year, this.endDate.month - 1, this.endDate.day);
    }else {
      this.searchBBNR.EndDate = new Date();
    }
    if (this.startDate != null) {
      this.searchBBNR.StartDate = new Date(this.startDate.year, this.startDate.month - 1, this.startDate.day);
    }
    this.busy = this.reportService.findBBNRListBySearchBBNR(this.searchBBNR).subscribe(result => {
        result.forEach(bbnr => this.bbnrList.push(bbnr));
      },
      (err) => {
        this.errorModal.openErrorModal(err);
      }
    );
  }

  onResetClicked(): void {
    this.searchBBNR = new SearchBBNRModel();
    this.startDate = null;
    this.endDate = null;
    this.selectedDeckType = "-";
  }

  onDateKeyDown(event): void {
    event.preventDefault();
  }

  onReportClicked() {
    this.selectedReports = [];
    this.selectedBBNRList = [];
    this.bbnrList.forEach(bbnr => {
      if (bbnr.itemChecked) {
        this.selectedBBNRList.push(bbnr.bbnrid);
      }
    });
    if (this.selectedBBNRList == null || this.selectedBBNRList.length === 0) {
      let err = new Error();
      err.message = 'You did not select any BBNr. Please select at least one BBNR';
      this.errorModal.openErrorModal(err);
      return;
    }
    let pressCode: string = 'Press';
    let previewCode: string = 'Preview';
    if ( sessionStorage.getItem('language') === 'de' ) {
      pressCode = 'Drucken';
      previewCode = 'Vorschau';
    }
    if ( sessionStorage.getItem('language') === 'tr' ) {
      pressCode = 'Baskı';
      previewCode = 'Önizleme';
    }
    this.codeValueList.push(new CodeValueModel(previewCode, false));
    this.codeValueList.push(new CodeValueModel(pressCode, true));
    this.reportService.findReportLogsByBBNRList(this.selectedBBNRList).subscribe(reportLogListResult => {
        for (let i = 0; i < reportLogListResult.length; i++) {
          this.reportLogList.push(reportLogListResult[i]);
        }
        this.busDetailsModal.open();
        this.reportLogFilterQuery = '';
        // reportLogListResult.forEach(reportLog => this.reportLogList.push(reportLog));
      },
      (err) => {
        this.errorModal.openErrorModal(err);
      }
    );
  }

  test() {
    this.reportLogFilterQuery = '';
  }

  loadReportLogList() {
    this.reportService.findReportLogsByBBNRList(this.selectedBBNRList).subscribe(reportLogListResult => {
        for (let i = 0; i < reportLogListResult.length; i++) {
          this.reportLogList.push(reportLogListResult[i]);
        }
      },
      (err) => {
        this.errorModal.openErrorModal(err);
      }
    );
  }

  reportTypesChkboxClicked(event) {
    let currentTargetValue = event.currentTarget.value;
    let currentTargetSelected = event.currentTarget.checked;
    if (currentTargetSelected) {
      this.selectedReports.push(currentTargetValue);
    }else {
      let index: number = this.selectedReports.indexOf(currentTargetValue);
      if (index !== -1) {
        this.selectedReports.splice(index, 1);
      }
    }
  }

  allReportTypesChkBoxClicked(event) {
    let currentTargetSelected = event.currentTarget.checked;
    if (currentTargetSelected) {
      this.selectedReports.push('cut');
      this.selectedReports.push('sti');
      this.selectedReports.push('stc');
      this.selectedReports.push('mon');
      this.selectedReports.push('exs');
      this.selectedReports.push('ges');
      this.selectedReports.push('msk');
    }else {
      this.selectedReports = [];
    }
  }

  onCummulativeReportClicked() {
    if (this.selectedReports.length === 0) {
      let err: Error =  new Error();
      err.message = 'No value selected';
      this.errorModal.openErrorModal(err);
      return;
    }else {
      this.selectedBBNRList.forEach(bbnr => {
        let newWindow = window.open(this.credentialsVals.host + '/Reports/CummulativeAccessReports/Seat2GetherReports.aspx?BBNr=' + bbnr + '&user=' +
          sessionStorage.getItem('username') + '&types=' + this.selectedReports.toString(), '_blank');
        this.selectedReports.forEach(rep => {
          let reportLog: ReportLogModel = new ReportLogModel();
          reportLog.printStatus = 'N';
          reportLog.bbnr = bbnr;
          reportLog.reportUser = sessionStorage.getItem('username');
          reportLog.reportDate = new Date();
          if (rep === 'cut') {
            reportLog.reportName = 'B_BBNR_UA_Zuschnitt';
          }
          if (rep === 'ges') {
            reportLog.reportName = 'B_BBNr_UA_Gessler';
          }
          if (rep === 'sti') {
            reportLog.reportName = 'B_BBNR_UA_Näherei';
          }
          if (rep === 'mon') {
            reportLog.reportName = 'B_BBNR_UA_Montage';
          }
          if (rep === 'exs') {
            reportLog.reportName = 'B_BBNR_UA_Sonderstuhl';
          }
          if (rep === 'msk') {
            reportLog.reportName = 'B_BBNr_Sesselblenden';
          }
          if (rep === 'stc') {
            reportLog.reportName = 'B_BBNr_UA_Näherei_Vorhang';
          }
          this.reportLogList.push(reportLog);
        });
      });

    }
  }


  onBusReportCloseButtonClicked() {
    this.selectedBBNRList = [];
    this.reportLogList = [];
    this.busDetailsModal.close();
  }

  bbnrCheckBoxClicked(item: BBNRModel, event) {
    if (event.currentTarget.checked) {
      item.itemChecked = true;
    }else {
      item.itemChecked = false;
    }
  }

  mainBBNRCheckBoxClicked(event) {
    if (event.currentTarget.checked) {
      this.bbnrList.forEach(bbnr => {
        if (this.checkFilterQuery(bbnr, this.filterQuery)) {
          bbnr.itemChecked = true;
        }
      });
    }else {
      for (let bbnr of this.bbnrList) {
        bbnr.itemChecked = false;
      }
      this.bbnrList.forEach(bbnr => {
        bbnr.itemChecked = false;
      });
    }
  }

  checkFilterQuery(bbnr: BBNRModel, filterQuery: string) {
    if (filterQuery == null || filterQuery === '') {
      return true;
    }
    return (bbnr.bbnrid != null && bbnr.bbnrid.indexOf(filterQuery) >= 0) ? true :
      (bbnr.orderID != null && bbnr.orderID.indexOf(filterQuery) >= 0) ? true :
        (bbnr.numberOfLeft  != null && bbnr.numberOfLeft.toString().indexOf(filterQuery) >= 0) ? true :
          (bbnr.numberOfRight != null && bbnr.numberOfRight.toString().indexOf(filterQuery) >= 0) ? true :
            (bbnr.numberOfBack  != null && bbnr.numberOfBack.toString().indexOf(filterQuery) >= 0) ? true :
              (bbnr.armChairType  != null && bbnr.armChairType.indexOf(filterQuery) >= 0) ? true :
                (bbnr.lfdnrStatus   != null && bbnr.lfdnrStatus.toString().indexOf(filterQuery) >= 0) ? true :
                  (bbnr.countryCode   != null && bbnr.countryCode.indexOf(filterQuery) >= 0) ? true :
                    (bbnr.customer      != null && bbnr.customer.indexOf(filterQuery) >= 0) ? true :
                      (bbnr.contactSales  != null && bbnr.contactSales.indexOf(filterQuery) >= 0) ? true :
                        (bbnr.contactAZ     != null && bbnr.contactAZ.indexOf(filterQuery) >= 0) ? true :
                          (bbnr.euGuidelines  != null && bbnr.euGuidelines.indexOf(filterQuery) >= 0) ? true :
                            (bbnr.decrease      != null && bbnr.decrease.indexOf(filterQuery) >= 0) ? true :
                              (bbnr.bbnrMax       != null && bbnr.bbnrMax.indexOf(filterQuery) >= 0) ? true :
                                (bbnr.bbnrMin       != null && bbnr.bbnrMin.indexOf(filterQuery) >= 0) ? true :
                                  (bbnr.bbnrType      != null && bbnr.bbnrType.indexOf(filterQuery) >= 0) ? true :
                                    (bbnr.location      != null && bbnr.location.indexOf(filterQuery) >= 0) ? true :
                                      (bbnr.toBe_Date     != null && bbnr.toBe_Date.toString().indexOf(filterQuery) >= 0) ? true : false;
  }
}
