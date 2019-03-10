import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import swal from "sweetalert2";

@Injectable()
export class SwalService {
  constructor(private translate: TranslateService) {}
  showConfirm(runFn: Function, title?: string, message?: string) {
    swal({
      title: title ? title : this.translate.instant("external.swal.defaultmessage.CONFIRM_TITLE"),
      text: message ? message : this.translate.instant("external.swal.defaultmessage.CONFIRM_TEXT"),
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: this.translate.instant("external.swal.action.NO"),
      confirmButtonText: this.translate.instant("external.swal.action.YES"),
    }).then(result => {
      if (result.value && runFn !== undefined && runFn !== null) {
        runFn();
      }
    });
  }
  showSuccessMessage(title?: string, message?: string) {
    swal(
      title ? title : this.translate.instant("external.swal.defaultmessage.SUCCESS_TITLE"),
      message ? message : this.translate.instant("external.swal.defaultmessage.SUCCESS_TEXT"),
      "success"
    );
  }
  showErrorMessage(title?: string, message?: string) {
    swal(
      title ? title : this.translate.instant("external.swal.defaultmessage.ERROR_TITLE"),
      message ? message : this.translate.instant("external.swal.defaultmessage.ERROR_TEXT"),
      "error"
    );
  }
}
