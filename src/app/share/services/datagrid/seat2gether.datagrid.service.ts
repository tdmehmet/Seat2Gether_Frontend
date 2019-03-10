import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseService } from '../../utils/base.service';

@Injectable()
export class Seat2getherDatagridService extends BaseService{

  constructor(http: Http, router: Router) {
    super(http, router);
  }

  public callParametricServicePost<T>(url: string, body: T): Observable<T> {

    let result$ = this.post(url, body)
      .map((res: Response) => res.json() as T);

    return result$;
  }

  public callParametricServicePut<T>(url: string, body: T): Observable<T> {

    let result$ = this.put(url, body)
      .map((res: Response) => res.json() as T);

    return result$;
  }
}
