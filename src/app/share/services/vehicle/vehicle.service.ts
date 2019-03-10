import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseService } from '../../utils/base.service';
import { VehicleType } from '../../../models/busmanagement/busspecification/vehicle.type';
import { Vehicle } from '../../../models/busmanagement/busspecification/vehicle';
import { VehicleModel } from '../../../models/busmanagement/busspecification/vehicle.model';
import 'rxjs/add/operator/map';
import { VehicleSeatType } from '../../../models/busmanagement/busspecification/vehicle.seat.type';
import { VehicleSeatMainModel } from '../../../models/busmanagement/busspecification/vehicle.seat.main.model';
import { VehicleSeatFabric } from '../../../models/busmanagement/busspecification/vehicle.seat.fabric';
import { VehicleSeatHeaderFastenerType } from '../../../models/busmanagement/busspecification/vehicle.seat.header.fastener.type';

@Injectable()
export class VehicleService extends BaseService {

  constructor(http: Http, router: Router) {
    super(http, router);
  }

  public findVehicleTypes(): Observable<VehicleType[]> {

    let vehicleTypeList$ = this.post(`VehicleType/FindVehicleTypes`, null)
      .map((res: Response) => res.json() as VehicleType[]);
    return vehicleTypeList$;
  }

  public findVehicleModels(): Observable<VehicleModel[]> {

    let vehicleModelList$ = this.post(`VehicleModel/VehicleModelList`, null)
      .map((res: Response) => res.json() as VehicleModel[]);
    return vehicleModelList$;
  }

  public findVehicleSeatHeaderFastenerTypes(): Observable<VehicleSeatHeaderFastenerType[]> {

    let vehicleHeaderFastenerType$ = this.post(`VehicleSeatHeaderFastenerType/FindVehicleSeatHeaderFastenerType`, null)
      .map((res: Response) => res.json() as VehicleSeatHeaderFastenerType[]);
    return vehicleHeaderFastenerType$;
  }

  // public findVehicleByBody(body: Vehicle): Observable<Vehicle[]> {

  //   let vehicle$ = this.post(`Vehicle/FindVehicleByBody`, body)
  //     .map((res: Response) => res.json() as Vehicle[]);
  //   return vehicle$;
  // }

  public findVehicleByBody(body: Vehicle): Observable<Vehicle[]> {

    let vehicle$ = this.post(`VehicleExternal/FilteredList`, body)
      .map((res: Response) => res.json() as Vehicle[]);
    return vehicle$;
  }


  public findVehicleSeatTypes(): Observable<VehicleSeatType[]> {

    let vehicleSeatTypeList$ = this.post(`VehicleSeatType/VehicleSeatTypelList`, null)
      .map((res: Response) => res.json() as VehicleSeatType[]);
    return vehicleSeatTypeList$;
  }

  public findVehicleSeatMainInfoByVehicleId(vehicleId: number): Observable<VehicleSeatMainModel> {

    let vehicleSeatMainModel$ = this.post(`VehicleSeatMainInfo/FindVehicleSeatById/` + vehicleId, null)
      .map((res: Response) => res.json() as VehicleSeatMainModel);
    return vehicleSeatMainModel$;
  }

  public findVehicleSeatFabricByVehicleId(vehicleId: number): Observable<VehicleSeatFabric> {

    let vehicleSeatFabric$ = this.post(`VehicleSeatFabric/FindVehicleSeatFabricByVehicleId/` + vehicleId, null)
      .map((res: Response) => res.json() as VehicleSeatFabric);
    return vehicleSeatFabric$;
  }

  public findVehicleById(vehicleId: number): Observable<Vehicle> {

    let vehicle$ = this.post(`Vehicle/FindVehicleByID/` + vehicleId, null)
      .map((res: Response) => res.json() as Vehicle);
    return vehicle$;
  }

  public saveVehicle(body: Vehicle): any {

    let result$ = this.post(`Vehicle/UpdateVehicle`, body)
      .map((res: Response) => res.json());

    return result$;
  }

  public saveVehicleSeatMainInfo(body: VehicleSeatMainModel): any {

    let result$ = this.post(`VehicleSeatMainInfo/updateVehicleSeatMainInfo`, body)
      .map((res: Response) => res.json());

    return result$;
  }

  public saveVehicleSeatFabric(body: VehicleSeatFabric): any {

    let result$ = this.post(`VehicleSeatFabric/updateVehicleSeatFabric`, body)
      .map((res: Response) => res.json());

    return result$;
  }

}
