import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseService } from '../../utils/base.service';
import { List } from 'lodash';
import { Role } from '../../../models/role/role.model';

@Injectable()
export class RoleService extends BaseService{

  constructor(http: Http, router: Router) {
    super(http, router);
  }

  public findRoles(): Observable<Role[]> {

    let role$ = this.post(`Role/findRoles`, null)
      .map((res: Response) => res.json() as List<Role>);
    return role$;
  }


}
