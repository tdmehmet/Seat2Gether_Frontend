import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Seat2GetherBasePage } from '../../basepage/seat2gether.base.page.component';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ErrorService } from '../../services/error/error.service';

@Component({
  selector: 'successmodal',
  templateUrl: 'success.modal.html',
})
export class SuccessModalComponent implements OnInit{

  @ViewChild('successmodal')
  successModal: ModalComponent;

  constructor(private errorService: ErrorService) {
  }

  ngOnInit() {
  }

  public openSuccessModal() {
    this.successModal.open();
  }

  closeSuccessModal() {
    this.successModal.close();
  }
}
