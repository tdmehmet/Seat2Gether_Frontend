import { Component, OnInit } from '@angular/core';
import { Seat2GetherBasePage } from '../../basepage/seat2gether.base.page.component';
import { LocalDataSource } from 'ng2-smart-table';
import { Seat2getherDatagridService } from '../../services/datagrid/seat2gether.datagrid.service';
import { ErrorModalComponent } from '../errormodal/error.modal.component';
import { Subscription } from 'rxjs/Subscription';
import { SuccessModalComponent } from '../successmodal/success.modal.component';

@Component({
  selector: 'seat2gether-editable-data-grid',
  templateUrl: 'seat2gether.editable.datagrid.html',
})
export class Seat2getherEditableDatagridComponent implements OnInit{

  errorModal: ErrorModalComponent;
  successModal: SuccessModalComponent;

  ng2TableSettings;

  columns: any;
  objectSample: any;
  clazz;
  addServiceName: string = '';
  listServiceName: string = '';
  updateServiceName: string = '';
  deleteServiceName: string = '';
  datagridVisible: boolean = false;
  busy: Subscription;
  dataSource: LocalDataSource = new LocalDataSource();

  constructor(private seat2getherDatagridService: Seat2getherDatagridService) {
  }

  initializeDataGrid() {
    this.busy = this.seat2getherDatagridService.callParametricServicePost(this.listServiceName, null).subscribe(data => {
      this.dataSource.empty();
      this.dataSource.load(data);
      this.dataSource.refresh();
    },
      (err) => {
        this.errorModal.openErrorModal(err);
    });

  }

  onDGEditConfirm(event) {
    this.busy = this.seat2getherDatagridService.callParametricServicePost(this.updateServiceName, event.newData).subscribe(x => {
        this.successModal.openSuccessModal();
        event.confirm.resolve(event.newData);
      },
      (err) => {
        this.errorModal.openErrorModal(err);
      }
    );
  }
  onDGDeleteConfirm(event) {
    this.busy = this.seat2getherDatagridService.callParametricServicePost(this.deleteServiceName, event.data).subscribe(x => {
        this.successModal.openSuccessModal();
        event.confirm.resolve(event.newData);
      },
      (err) => {
        this.errorModal.openErrorModal(err);
      }
    );
  }
  onDGCreateConfirm(event) {
    this.busy = this.seat2getherDatagridService.callParametricServicePost(this.addServiceName, event.newData).subscribe(x => {
        this.successModal.openSuccessModal();
        event.confirm.resolve(event.newData);
        this.initializeDataGrid();
      },
      (err) => {
        this.errorModal.openErrorModal(err);
      }
    );

  }
  ngOnInit() {
  }
}
