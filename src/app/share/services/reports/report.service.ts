import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseService } from '../../utils/base.service';
import { BBNRModel } from '../../../models/reports/bbnr.model';
import { SearchBBNRModel } from '../../../models/reports/search.bbnr.model';
import 'rxjs/add/operator/map';
import { ReportLogModel } from '../../../models/reports/report.log.model';
import { List } from 'lodash';

@Injectable()
export class ReportService extends BaseService{

  constructor(http: Http, router: Router) {
    super(http, router);
  }

  public findBBNRListBySearchBBNR(searchBBNR: SearchBBNRModel): Observable<BBNRModel[]> {

    let bbnrList$ = this.post(`Report/FindBBNRListBySearchBBNR`, searchBBNR)
      .map((res: Response) => res.json() as BBNRModel[]);
    return bbnrList$;
  }

  public findReportLogsByBBNR(bbnr: string): Observable<ReportLogModel[]> {

    let reportLogList$ = this.post(`Report/FindReportLogsByBBNR/` + bbnr, null)
      .map((res: Response) => res.json() as ReportLogModel[]);
    return reportLogList$;
  }

  public findReportLogsByBBNRList(bbnrList: List<string>): Observable<ReportLogModel[]> {

    let reportLogList$ = this.post(`Report/FindReportLogsByBBNRList`, bbnrList)
      .map((res: Response) => res.json() as ReportLogModel[]);
    return reportLogList$;
  }

}
