import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { BaseService } from "../../utils/base.service";
import { Order } from "../../../models/order/order";
import "rxjs/add/operator/map";
import { OrderModel } from "../../../models/order/orderModel";
import { OrderInfoModel } from "../../../models/order/orderInfoModel";
import { WorkingUnit } from "../../../models/order/workingUnit";
import { WorkingUnitModel } from "../../../models/order/workingUnitModel";
import { WorkingUnitDG } from '../../../models/order/workingUnitDG';
import { CommentDG } from '../../../models/order/commentDG';
import { CommentMDL } from '../../../models/order/comment';

@Injectable()
export class EditOrderService extends BaseService {
  constructor(http: Http, router: Router) {
    super(http, router);
  }

  public findOrders(): Observable<Order[]> {
    let orderList$ = this.post(`EditOrder/EditOrderList`, null).map(
      (res: Response) => res.json() as Order[]
    );
    return orderList$;
  }

  public saveOrder(body: Order): any {
    let result$ = this.post(`EditOrder/UpdateEditOrder`, body).map((res: Response) =>
      res.json()
    );
    return result$;
  }

  public updateOrder(body: Order): any {
    let result$ = this.post(`Orders/UpdateOrder`, body).map((res: Response) =>
      res.json()
    );

    return result$;
  }

  public deleteOrder(body: Order): any {
    let result$ = this.post(`Orders/DeleteOrder`, body).map((res: Response) =>
      res.json()
    );

    return result$;
  }

  public findEditOrderById(body: Order): Observable<Order[]> {
    let order$ = this.post(`EditOrder/FindEditOrder`, body).map(
      (res: Response) => res.json() as Order[]
    );
    return order$;
  }

  public getOrderInfo(orderNumber: string): Observable<OrderModel> {
    let order$ = this.post(
      `EditOrder/findEditOrderByOrderName/` + orderNumber,
      null
    ).map((res: Response) => res.json() as OrderModel);
    return order$;
  }

  public findOrderInfoStatus(): Observable<OrderInfoModel[]> {
    let orderInfoModelList$ = this.post(
      `OrderStatusInfo/OrderStatusInfoList`,
      null
    ).map((res: Response) => res.json() as OrderInfoModel[]);
    return orderInfoModelList$;
  }

  public findWorkingUnit(orderNumber: string): Observable<WorkingUnit[]> {
    let workingUnit$ = this.post(`OrderIDCommentIDWorkingUnitID/OrderIDCommentIDWorkingUnitIDList/`+orderNumber,null).map(
      (res: Response) => res.json() as WorkingUnit[]
    );

    return workingUnit$;
  }
  public findWorkingUnitText(): Observable<WorkingUnitModel[]> {
    let workingUnitModelList$ = this.post(`WorkingUnit/WorkingUnitList`,null).map((res: Response) => res.json() as WorkingUnitModel[]);
    return workingUnitModelList$;
  }

  public getComment(commentID: number): Observable<Comment[]>{
    let comment$= this.post(`Comment/FindComment/` + commentID,null).map((res:Response) => res.json() as Comment[] );
    return comment$
  }


  public saveComment(body: Comment): any {
    let saveComment$ = this.post(`Comment/AddComment`, body).map((res: Response) =>
      res.json()
    );
    return saveComment$;
  }
}
