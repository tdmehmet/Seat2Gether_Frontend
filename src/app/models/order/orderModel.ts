import { UserRole } from '../role/user.role.model';
import { List } from 'lodash';
export class OrderModel {
    orderNumber: string;
    minBBNR: string;
    maxBBNR: string;
    comment: string;
    statusID: number;
  
    constructor() {
      this.orderNumber = "";
      this.minBBNR ="";
      this.maxBBNR = "";
      this.comment = "";
      this.statusID = null;
    }
}
