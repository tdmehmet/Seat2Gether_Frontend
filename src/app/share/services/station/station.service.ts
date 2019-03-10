import { Injectable } from '@angular/core';
import { BaseService } from '../../utils/base.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class StationService extends BaseService {

  constructor(http: Http, router: Router) {
    super(http, router);
  }

  updateStationName(station) {
    let result$ = this.post('station/UpdateStation', station)
      .map((res: Response) => res.json());

    return result$;
  }

  getStationList() {
    let result$ = this.post('station/GetStationList', null).map((res: Response) => res.json());

    return result$;
  }

}
