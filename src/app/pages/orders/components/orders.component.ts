import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import 'style-loader!./orders.scss';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { DatagridColumn } from '../../../models/datagrid/datagrid.column';
import { DatagridColumnValues } from '../../../models/datagrid/datagrid.column.values';
import { EditableDatagridSettings } from '../../../models/datagrid/editabledatagrid/editable.datagrid.settings';
import { LocalDataSource } from 'ng2-smart-table';
import { Seat2getherEditableDatagridComponent } from '../../../share/components/editabledatagrid/seat2gether.editable.datagrid.component';
import { ErrorModalComponent } from '../../../share/components/errormodal/error.modal.component';
import { SuccessModalComponent } from '../../../share/components/successmodal/success.modal.component';
import { Button } from '../../../models/button/button';
import { OrdersDatagridColumns } from '../../../models/datagrid/editabledatagrid/orderscolumns/orders.datagrid.columns';
import { Subscription } from 'rxjs';
import { Order } from '../../../models/order/order';
import { OrderDG } from '../../../models/order/orderDG';
import { EditOrderService } from '../../../share/services/order/order.service';
import { OrderModel } from '../../../models/order/orderModel';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { OrderInfoModel } from '../../../models/order/orderInfoModel';
import { WorkingUnitDG } from '../../../models/order/workingUnitDG';
import { WorkingUnit } from '../../../models/order/workingUnit';
import { WorkingUnitModel } from '../../../models/order/workingUnitModel';
import { CommentDG } from '../../../models/order/commentDG';
import { Comment } from '@angular/compiler';
import { CommentMDL } from '../../../models/order/comment';
import { WorkingUnitMDL } from '../../../models/order/workingUnitMDL';

@Component({
  selector: 'orders',
  templateUrl: './orders.html'
})

export class Orders implements OnInit {

  @ViewChild('errormodal')
  errorModal: ErrorModalComponent;

  @ViewChild('successmodal')
  successModal: SuccessModalComponent;

  @ViewChild('orderDetails')
  orderDetailModal: ModalComponent;

  busy: Subscription;

  searchOrder: Order = new Order("", null, null, null, null);
  orderDetail:OrderModel=new OrderModel();
  orderDGList: OrderDG[] = [];
  selectedOrder: Order = new Order("", "", "", "", 0);
  displayField: string = sessionStorage.getItem('language');
  orderInfoModelList: OrderInfoModel[] = [];
  workingUnitDGList: WorkingUnitDG[] = [];
  searchWorkingUnit: WorkingUnit = new WorkingUnit(null, null, null, null);
  workingUnitModelList: WorkingUnitModel[] = [];
  commentMdl:CommentMDL = new CommentMDL(null,"");
  workingUnitMdl:WorkingUnitMDL = new WorkingUnitMDL(null, null, null, null);

  constructor(private router: Router,
              private translate: TranslateService,
              private viewContainerRef: ViewContainerRef,
              private el: ElementRef,
              private orderService:EditOrderService
  ){

    this.orderService.findOrderInfoStatus().subscribe(orderInfoModelList => {
      orderInfoModelList.forEach(orderInfoModelList => this.orderInfoModelList.push(orderInfoModelList));

      this.orderService.findWorkingUnitText().subscribe(WorkingUnitModel => {
        WorkingUnitModel.forEach(WorkingUnitModel => this.workingUnitModelList.push(WorkingUnitModel));
      })

    },
    (err) => {
      this.errorModal.openErrorModal(err);
    });
  }


  ngOnInit(): void {

  }

  onSearchClicked(): void {
    this.orderDGList=[];
    this.busy = this.orderService.findEditOrderById(this.searchOrder).subscribe(
      orderList => {
        orderList.forEach(order => {
          let orderDG: OrderDG = new OrderDG();
         orderDG.orderNumber = order.orderNumber;
         orderDG.minBBNR=order.minBBNR;
         orderDG.maxBBNR=order.maxBBNR;
         orderDG.comment=order.comment;
         orderDG.statusID=order.statusID;
        let status: string = '';
        this.orderInfoModelList.forEach( OrderInfoModel => {
          if (OrderInfoModel.id === order.statusID) {
            if (sessionStorage.getItem('language') === 'de') {
              status = OrderInfoModel.de;
            }else if (sessionStorage.getItem('language') === 'tr') {
              status = OrderInfoModel.tr;
            }else {
              status = OrderInfoModel.en;
            }
          }
        });
        orderDG.status=status;
          this.orderDGList.push(orderDG);
        });
      },
      (err) => {
        this.errorModal.openErrorModal(err);
      }
    );
    }


  onEditClicked(item: OrderModel): void {
    let orderNumber: string = item == null ? 'null' : item.orderNumber;
    console.log('Order Number : ' + orderNumber);
        this.orderService.getOrderInfo(orderNumber).subscribe(order => {
        this.orderDetail = new OrderModel();
        this.orderDetail.orderNumber = order.orderNumber;
        this.orderDetail.minBBNR=order.minBBNR;
        this.orderDetail.maxBBNR=order.maxBBNR;
        this.orderDetail.comment=order.comment;
        this.orderDetail.statusID=order.statusID;
        if (order == null) {
          console.log('ORDER NOT FOUND');
          return;
        }

        this.orderDetailModal.open();
        this.onWorkingUnitList(orderNumber);

      },
      (err) => {
        this.errorModal.openErrorModal(err);
      }
    );
  }

  onOrderSaveClicked(): void {
    this.busy = this.orderService.saveOrder(this.orderDetail).subscribe(x => {
     this.successModal.openSuccessModal();
        },
          (err) => {
            this.errorModal.openErrorModal(err);
          });
      }

      onOrderCloseClicked(): void{
        this.orderDetailModal.close();
        }

        onWorkingUnitList(orderNumber: string): void {

          this.workingUnitDGList=[];
          this.busy = this.orderService.findWorkingUnit(orderNumber).subscribe(
            workingUnitList => {
              workingUnitList.forEach(workingUnit => {
                let workingUnitDG: WorkingUnitDG = new WorkingUnitDG();
                workingUnitDG.commentID=workingUnit.commentID;
                workingUnitDG.workingUnitID=workingUnit.workingUnitID;
                ////////////////////////////////////////////////////////////////////////////
                let workingunit: string = '';
              this.workingUnitModelList.forEach( workingUnitModelText => {
                if (workingUnitModelText.id === workingUnit.workingUnitID) {
                  if (sessionStorage.getItem('language') === 'de') {
                    workingunit = workingUnitModelText.de;
                  }else if (sessionStorage.getItem('language') === 'tr') {
                    workingunit = workingUnitModelText.tr;
                  }else {
                    workingunit = workingUnitModelText.en;
                  }
                }

              });
              workingUnitDG.workingUnitText=workingunit;
              workingUnitDG.comment=workingUnit.comment;
                this.workingUnitDGList.push(workingUnitDG);
              });
            },
            (err) => {
              this.errorModal.openErrorModal(err);
            }
          );
          }

         // saveWorkingUnitComment(comment:):void{
              //this.orderService.saveComment()
          //}


        }



