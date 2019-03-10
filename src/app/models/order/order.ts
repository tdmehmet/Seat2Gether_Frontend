export class Order {
  orderNumber: string;
  minBBNR: string;
  maxBBNR: string;
  comment: string;
  statusID: number;

  constructor(orderNumber: string, minBBNR: string, maxBBNR: string, comment: string, statusID: number) {
    this.orderNumber = orderNumber;
    this.minBBNR = minBBNR;
    this.maxBBNR = maxBBNR;
    this.comment = comment;
    this.statusID = statusID;
  }
}
