import { Injectable } from '@angular/core';
import { BaseService } from '../../utils/base.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BusService extends BaseService {

  constructor(http: Http, router: Router) {
    super(http, router);
  }

  getBus(bbNumber: string) {
    let result$ = this.get(`vehicleexternal/getvehicle/${bbNumber}`)
      .map((res: Response) => res.json());
    return result$;
  }

  findVehicleByBody(body): Observable<any[]> {
    let vehicle$ = this.post(`vehicleexternal/getfilteredvehiclelist`, body)
      .map((res: Response) => res.json());
    return vehicle$;
  }

  deleteBus(bbNumber: string) {
    let result$ = this.delete(`vehicleexternal/deletevehicle/${bbNumber}`)
      .map((res: Response) => res.json());
    return result$;
  }

  saveBus(bus) {
    let result$ = this.put('vehicleexternal/updatevehicle', bus).map((res: Response) => res.json());
    return result$;
  }

  public findSeatFabricTypes(): Observable<any> {
    let vehicleTypeList$ = this.post(`ExMasterDataSeatFabricType/GetExMasterDataSeatFabricTypeList`, null)
      .map((res: Response) => res.json());
    return vehicleTypeList$;
  }

}
