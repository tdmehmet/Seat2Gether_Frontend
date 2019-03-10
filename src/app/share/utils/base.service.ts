import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isUndefined } from 'util';
import { credentials } from '../credientials';

@Injectable()
export class BaseService {

  constructor(public http: Http, public router: Router) {
    if (sessionStorage.getItem('Authorization') == null || isUndefined(sessionStorage.getItem('Authorization'))) {
      this.router.navigate(['/login']);
    }
  }

  get(url: string): Observable<Response> {

    return this.http.get(`${credentials.host}/api/` + url, this.getRequestOptions());
  }

  post(url: string, body: Object, requestOptions?: RequestOptions): Observable<Response> {
    requestOptions = requestOptions === undefined ? this.getRequestOptions() : requestOptions;
    return this.http.post(`${credentials.host}/api/` + url, body, requestOptions);
  }

  put(url: string, body: Object): Observable<Response> {
    return this.http.put(`${credentials.host}/api/` + url, body, this.getRequestOptions());
  }

  delete(url: string): Observable<Response> {
    return this.http.delete(`${credentials.host}/api/` + url, this.getRequestOptions());
  }

  public getRequestOptions(): RequestOptions {
    let authorizationHeaders = new Headers();
    if (sessionStorage.getItem('isAuthenticated') === 'true') {
      authorizationHeaders.append('Authorization', 'Bearer ' + sessionStorage.getItem('Authorization'));
      authorizationHeaders.append('Accept', `application/json`);
      authorizationHeaders.append('Content-Type', `application/json; charset=utf-8`);
      authorizationHeaders.append('Cache-Control', `no-cache`);
      authorizationHeaders.append('Pragma', `no-cache`);
      authorizationHeaders.append('Expires', `Sat, 01 Jan 2000 00:00:00 GMT`);
      
      let options = new RequestOptions({ headers: authorizationHeaders });
      return options;
    } else {
      this.router.navigate(['/login']);
    }

    return null;
  }

}
