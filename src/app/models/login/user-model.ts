import { UserRole } from '../role/user.role.model';
import { List } from 'lodash';
export class User {
  id: string;
  personnelName: string;
  personnelSurname: string;
  userName: string;
  email: string;
  phoneNumber: string;
  dateCreated: Date;
  activated: boolean;
  roles: UserRole[];

  constructor() {
    this.id = '';
    this.userName = '';
    this.personnelName = '';
    this.personnelSurname = '';
    this.dateCreated = null;
    this.email = '';
    this.phoneNumber = '';
    this.activated = false;
    this.roles = [];
  }
}
