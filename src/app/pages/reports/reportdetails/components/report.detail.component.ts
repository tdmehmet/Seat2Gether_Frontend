import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DatagridColumnValues } from '../../../../models/datagrid/datagrid.column.values';
import { DatagridColourColumns } from '../../../../models/datagrid/colour/datagrid.colour.columns';
import { ErrorModalComponent } from '../../../../share/components/errormodal/error.modal.component';
import { SuccessModalComponent } from '../../../../share/components/successmodal/success.modal.component';
import { BusyModule } from 'angular2-busy';
import { Subscription } from 'rxjs/Subscription';
import { ReportService } from '../../../../share/services/reports/report.service';
import { ReportLogModel } from '../../../../models/reports/report.log.model';
import { CodeValueModel } from '../../../../models/reports/code.value.model';
import 'style-loader!./report.detail.scss';
import { credentials } from '../../../../share/credientials';
import BrowserWindowProxy = Electron.BrowserWindowProxy;

@Component({
  selector: 'reportdetail',
  templateUrl: './report.detail.html'
})
export class ReportDetail implements OnInit {

  @ViewChild('errormodal')
  errorModal: ErrorModalComponent;

  @ViewChild('successmodal')
  successModal: SuccessModalComponent;

  busyDiv: BusyModule;

  busy: Subscription;
  bbnr: string;

  reportLogList: ReportLogModel[] = [];
  codeValueList: CodeValueModel[] = [];
  selectedCodeValue: CodeValueModel;
  credentialsVals = credentials;
  constructor(private activatedRoute: ActivatedRoute,
              private translate: TranslateService,
              private reportService: ReportService) {
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

      this.activatedRoute.params.subscribe((params: Params) => {
        this.bbnr = params['bbnr'];
        this.reportService.findReportLogsByBBNR(this.bbnr).subscribe(reportLogListResult => {
            reportLogListResult.forEach(reportLog => this.reportLogList.push(reportLog));
          },
          (err) => {
            this.errorModal.openErrorModal(err);
          }
        );
      });

  }

  ngOnInit(): void {

  }

  onBusMainInfoSaveClicked(): void {

  }

  openStitchingReport(): void {
    window.open(this.credentialsVals.host + '/Reports/StitchingReport/StitchingReport.aspx?BBNr=' + this.bbnr, '_blank');
    // setTimeout(window.open(this.credentialsVals.host + '/Reports/StitchingReportDetail/StitchingReportDetail.aspx?BBNr=' + this.bbnr, '_blank2'), 3000);
  }
}
