import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { LoginUser } from '../../../models/login/login.user.model';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { BaseService } from '../../utils/base.service';
import { credentials } from '../../credientials';

@Injectable()
export class AuthService extends BaseService{

  constructor(http: Http, router: Router) {
    super(http, router);
  }

  login( usercreds: LoginUser ): Observable<Response> {
    let creds = 'grant_type=password' + '&username=' + usercreds.UserName + '&password=' + usercreds.Password;
    let headers: Headers =  new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded; charset=utf-8');
    headers.append('Accept', 'application/json');

    return this.http.post(credentials.host + '/token', creds, { headers: headers });

  }
}
