export class WorkingUnit {

  orderID:number;
  commentID:number;
  workingUnitID:number;
  comment:string;


  constructor(orderID:number, commentID:number, workingUnitID:number, comment:string) {
    this.orderID = orderID;
    this.commentID = commentID;
    this.workingUnitID = workingUnitID;
    this.comment=comment;
  }
}
