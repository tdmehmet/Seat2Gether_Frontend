import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Seat2GetherBasePage } from '../../basepage/seat2gether.base.page.component';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Seat2GetherError } from '../../../models/error/seat2gether.error';
import { ErrorService } from '../../services/error/error.service';
import { isUndefined } from 'util';

@Component({
  selector: 'errormodal',
  templateUrl: 'error.modal.html',
})
export class ErrorModalComponent implements OnInit{

  @ViewChild('errormodal')
  errorModal: ModalComponent;

  errorDetail: string = '';
  errorDetailHidden: boolean;
  error;
  stackTrace: string[] = [];
  seat2GetherError: Seat2GetherError ;
  userErrorText: string;

  constructor(private errorService: ErrorService) {
    this.seat2GetherError = new Seat2GetherError();
  }

  ngOnInit() {
    this.errorDetailHidden = true;
  }

  public openErrorModal(error) {
    this.errorDetailHidden = true;
    this.error = error;
    let errorBody = new Seat2GetherError();
    try {
      errorBody = JSON.parse(this.error._body);
      if ( isUndefined(errorBody.message) ) {
        errorBody = this.parseErrorBody(JSON.parse(this.error._body).error);
      }
    }catch (error) {
      errorBody = null;
    }
    if ( !(errorBody == null) ) {
      this.seat2GetherError = errorBody;
    }else {
      this.seat2GetherError = new Seat2GetherError();
      this.seat2GetherError.exceptionType = error.message == null ? 'Frontend Error - Please Inform IT Support Team' : 'Custom Exception';
      this.seat2GetherError.message = error.message == null ? 'Frontend Error - Please Inform IT Support Team' : error.message ;
      this.seat2GetherError.exceptionMessage = error.message == null ? 'Seat2Gether frontend may not connect to backend services' : error.message ;
      this.seat2GetherError.stackTrace = error.message == null ? 'Seat2Gether frontend may not connect to backend services. ' +
        'Please check if your backend application is up' : error.message;
    }
    this.errorModal.open();
  }

  closeErrorModal() {
    this.errorDetail = '';
    this.errorDetailHidden = true;
    this.error = null;
    this.errorModal.close();
  }

  viewDetails() {
    this.errorDetailHidden = false;
  }

  hideDetails() {
    this.errorDetailHidden = true;
  }

  parseErrorBody(errorDetails): Seat2GetherError {
    let seat2GetherError = new Seat2GetherError();
    let errorArray: string[] = errorDetails.split(';');
    errorArray.forEach(data => {
      let dataKey: string[] = data.split(':');
      switch (dataKey[0]) {
        case 'message' :
          seat2GetherError.message = dataKey[1];
          break;
        case 'exceptionMessage' :
          seat2GetherError.exceptionMessage = dataKey[1];
          break;
        case 'exceptionType' :
          seat2GetherError.exceptionType = dataKey[1];
          break;
        case 'stackTrace' :
          seat2GetherError.stackTrace = dataKey[1];
          break;
        default:
          break;
      }
    });
    return seat2GetherError;
  }
}
