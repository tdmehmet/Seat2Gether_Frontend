import { Injectable } from "@angular/core";
import { BaseService } from "../../utils/base.service";
import { Http, Response } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MasterDataService extends BaseService {
  constructor(http: Http, router: Router) {
    super(http, router);
  }
  getMasterData() {
    let result$ = this.post(`masterdata/getmasterdatalist`, null).map(
      (res: Response) => res.json()
    );
    return result$;
  }
}
