import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Colour } from '../../../../models/masterdata/frontdata/colour';
import { BaseService } from '../../utils/base.service';
import { Seat2GetherErrorDB } from '../../../models/error/seat2gether.error.db';

@Injectable()
export class ErrorService extends BaseService{

  constructor(http: Http, router: Router) {
    super(http, router);
  }

  public findErrorById(errorId: string): Observable<Seat2GetherErrorDB> {

    let error$ = this.post('Error/FindErrorById/' + errorId, null)
      .map((res: Response) => res.json() as Seat2GetherErrorDB);

    return error$;
  }
}
