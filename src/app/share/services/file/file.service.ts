import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {BaseService} from "../../utils/base.service";
import 'rxjs/add/operator/map'

@Injectable()
export class FileService extends BaseService{

  constructor(http:Http, router: Router) {
    super(http, router);
  }


  public fileExists(path: string): Promise<boolean> {
    return this.http.head(path)
      .mapTo(true)
      .catch((error) => Observable.of(false))
      .toPromise();
  }
}
