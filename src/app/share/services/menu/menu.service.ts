import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseService } from '../../utils/base.service';
import 'rxjs/add/operator/map';


@Injectable()
export class MenuService extends BaseService{

  constructor(http: Http, router: Router) {
    super(http, router);
  }

  public getUserMenu(userName: string): Observable<Routes> {

    let menu$ = this.post(`Menu/getUserMenu/` + userName + `/` + sessionStorage.getItem('language'), null)
      .map((res: Response) => res.json());
    return menu$;
  }
}
