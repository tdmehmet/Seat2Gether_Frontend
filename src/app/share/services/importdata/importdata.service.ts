import { Injectable } from '@angular/core';
import { BaseService } from '../../utils/base.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class ImportDataService extends BaseService {

  constructor(http: Http, router: Router) {
    super(http, router);
  }

  importExportedFile(formData: FormData) {
    let requestOptions = this.getRequestOptions();
    requestOptions.headers.delete('Accept');
    requestOptions.headers.delete('Content-Type');

    let result$ = this.post('importdata/uploadfile', formData, requestOptions)
      .map((res: Response) => res.json());

    return result$;
  }

  importExportedSingleBBFile(formData: FormData, bbnumber: String) {
    let requestOptions = this.getRequestOptions();
    requestOptions.headers.delete('Accept');
    requestOptions.headers.delete('Content-Type');

    let result$ = this.post('importdata/uploadfileforbbnumber/' + bbnumber, formData, requestOptions)
      .map((res: Response) => res.json());

    return result$;
  }

  recreateMaterials(materials: any) {
    let result$ = this.post('importdata/savematerials', materials)
      .map((res: Response) => res.json());

    return result$;
  }

}
