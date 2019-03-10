import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../models/login/user-model';
import { BaseService } from '../../utils/base.service';
import { UserAutocompleteModel } from '../../../models/usermanagement/User.autocomplete.model';
import { List } from 'lodash';

@Injectable()
export class UserService extends BaseService{

  constructor(http: Http, router: Router) {
    super(http, router);
  }

  public getUserInfo(userName: string): Observable<User> {

    let user$ = this.post(`User/findUserByUserName/` + userName, null)
      .map((res: Response) => res.json() as User);
    return user$;
  }

  public findUsersStartsWithUserName(userName: string): Observable<UserAutocompleteModel[]> {
    let userAutoCompleteModel$ = this.post(`User/findUsersStartsWithUserName/` + userName, null)
      .map((res: Response) => res.json() as List<UserAutocompleteModel>);
    return userAutoCompleteModel$;
  }

  public findUsers(): Observable<User[]> {
    let userList$ = this.post(`User/FindUsersByManager/` + sessionStorage.getItem('username'), null)
      .map((res: Response) => res.json() as User[]);
    return userList$;
  }

  public addUserWithRoles(user: User): any {
    return this.post('User/addUserWithRoles', user).map((res: Response) => res.json());
  }

  public findUsersByUserBody(user: User, manager: string): Observable<User[]> {
    let userList$ = this.post('User/findUsersByUserBody/' + manager, user).map((res: Response) => res.json() as List<User>);
    return userList$;
  }


}
