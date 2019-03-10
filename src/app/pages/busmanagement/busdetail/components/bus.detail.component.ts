import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { DatagridColumnValues } from "../../../../models/datagrid/datagrid.column.values";
import { DatagridColourColumns } from "../../../../models/datagrid/colour/datagrid.colour.columns";
import { ErrorModalComponent } from "../../../../share/components/errormodal/error.modal.component";
import { Seat2getherEditableDatagridComponent } from "../../../../share/components/editabledatagrid/seat2gether.editable.datagrid.component";
import { SuccessModalComponent } from "../../../../share/components/successmodal/success.modal.component";
import { Vehicle } from "../../../../models/busmanagement/busspecification/vehicle";
import { VehicleService } from "../../../../share/services/vehicle/vehicle.service";
import { VehicleType } from "../../../../models/busmanagement/busspecification/vehicle.type";
import { BusyModule } from "angular2-busy";
import { Subscription } from "rxjs/Subscription";
import { ModalComponent } from "ng2-bs3-modal/ng2-bs3-modal";
import { VehicleSeatType } from "../../../../models/busmanagement/busspecification/vehicle.seat.type";
import { VehicleModel } from "../../../../models/busmanagement/busspecification/vehicle.model";
import { VehicleSeatMainModel } from "../../../../models/busmanagement/busspecification/vehicle.seat.main.model";
import { VehicleSeatHeaderFastenerType } from "../../../../models/busmanagement/busspecification/vehicle.seat.header.fastener.type";
import { VehicleSeatFabric } from "../../../../models/busmanagement/busspecification/vehicle.seat.fabric";
import "style-loader!./bus.detail.scss";
import { BusService } from "../../../../share/services/bus/bus.service";
import "rxjs/add/observable/forkJoin";
import { Observable } from "rxjs/Observable";
import moment from "moment";
import { MasterDataService } from "../../../../share/services/masterdata/masterdata.service";
import { MasterDataType } from "../../../../enums/masterdatatype.enum";
import { ComboBoxComponent } from "ng2-combobox";
import { SwalService } from "../../../../share/utils/swal.service";

@Component({
  selector: "busspecification",
  templateUrl: "./bus.detail.html"
})
export class BusDetail implements OnInit {
  @ViewChild("editableDataGrid")
  editableDataGrid: Seat2getherEditableDatagridComponent;

  @ViewChild("errormodal") errorModal: ErrorModalComponent;

  @ViewChild("successmodal") successModal: SuccessModalComponent;

  @ViewChild("vehicleDetails") vehicleModal: ModalComponent;

  @ViewChild("vehicleType") vehicleType: ComboBoxComponent;

  busyDiv: BusyModule;

  busy: Subscription;

  hostessSeatTypeList: any[] = [];
  backRowSeatTypeList: any[] = [];
  portableHeadPortableFixedList: any[] = [];
  portableHeadFastenerList: any[] = [];
  doorTypeList: any[] = [];
  driverArmrestList: any[] = [];
  driverHeatingList: any[] = [];
  driverVibrationList: any[] = [];
  driverMercedesStarList: any[] = [];
  hostessElectricalList: any[] = [];
  hostessLockList: any[] = [];
  netTypeList: any[] = [];
  countryList: any[] = [];

  vehicleTypeList: any[] = [];
  vehicleModelList: any[] = [];
  vehicleSeatTypeList: VehicleSeatType[] = [];
  vehicleSeatHeaderFastenerTypeList: VehicleSeatHeaderFastenerType[] = [];
  //selectedVehicle: Vehicle = new Vehicle(0, '', 0, '', 0);
  selectedVehicle: any = {};
  selectedVehicleSeatMainInfo: VehicleSeatMainModel = new VehicleSeatMainModel();
  selectedVehicleSeatFabric: VehicleSeatFabric = new VehicleSeatFabric();
  displayField: string = "en";
  vehicleId: number = 0;
  bbNumber: string = "";
  tmpDate;
  vehicleSeatFabricTypeList: any[] = [];
  vehicleMasterDataList: any[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService,
    private vehicleService: VehicleService,
    private busService: BusService,
    private masterDataService: MasterDataService,
    private swalService: SwalService
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      //this.vehicleId = params['id'];
      this.bbNumber = params["bbNumber"];
    });

    let seatFabricTypeList = this.busService.findSeatFabricTypes();
    let masterDataList = this.masterDataService.getMasterData();

    this.busy = Observable.forkJoin([
      seatFabricTypeList,
      masterDataList
    ]).subscribe(results => {
      this.vehicleSeatFabricTypeList = results[0];
      this.vehicleMasterDataList = results[1];

      this.fillAllTypeList();

      this.busService.getBus(this.bbNumber).subscribe(res => {
        this.selectedVehicle = res;
        if (res.modelId === null) {
          this.vehicleType.listData = [];
        } else {
          this.vehicleType.listData = this.vehicleTypeList.filter(r => {
            if (r.parentId === res.modelId) return r;
          });
        }
        if (res.bandRecivingDate !== null) {
          const sdate = moment(res.bandRecivingDate);
          this.tmpDate = {
            year: sdate.get("year"),
            month: sdate.get("month") + 1,
            day: sdate.get("date")
          };
        }
      });
    });
  }

  vehicleModelSelect(e) {
    this.vehicleType.currVal = "";
    this.vehicleType.listData = [];
    this.selectedVehicle.typeId = null;

    if (e !== null) {
      this.vehicleType.listData = this.vehicleTypeList.filter(t => {
        if (t.parentId === e.id) return t;
      });
    }
  }

  dateChanged(e) {
    console.log(e);
    if (e === null) {
      this.selectedVehicle.bandRecivingDate = e;
      this.selectedVehicle.kwInfo = e;
      return;
    }
    var utcDate = new Date(Date.UTC(e.year, e.month - 1, e.day, 0, 0, 0));
    const date = moment(utcDate);
    this.selectedVehicle.bandRecivingDate = date.format("YYYY-MM-DD");
    this.selectedVehicle.kwInfo = "KW " + date.isoWeek();
  }
  saveBus() {
    this.busy = this.busService.saveBus(this.selectedVehicle).subscribe(res => {
      this.swalService.showSuccessMessage();
    });
  }

  getMasterDataByMasterDataType(
    masterDataType: MasterDataType,
    parentId?: number
  ) {
    let result = this.vehicleMasterDataList.filter(r => {
      if (r.masterDataTypeId == masterDataType) {
        return r;
      }
    });

    return result;
  }

  saveBusAndContinue() {
    this.busy = this.busService.saveBus(this.selectedVehicle).subscribe(res => {
      this.swalService.showSuccessMessage();
      this.router.navigate(["pages/busmanagement/busmaterial", this.bbNumber]);
    });
  }

  ngOnInit(): void {}

  fillAllTypeList(): void {
    this.hostessSeatTypeList = this.getMasterDataByMasterDataType(
      MasterDataType.hostessSeat
    );
    this.backRowSeatTypeList = this.getMasterDataByMasterDataType(
      MasterDataType.backRowSeat
    );
    this.vehicleSeatTypeList = this.getMasterDataByMasterDataType(
      MasterDataType.seatType
    );
    this.vehicleTypeList = this.getMasterDataByMasterDataType(
      MasterDataType.vehicleType
    );
    this.vehicleModelList = this.getMasterDataByMasterDataType(
      MasterDataType.vehicleModel
    );
    this.portableHeadFastenerList = this.getMasterDataByMasterDataType(
      MasterDataType.fastenerType
    );
    this.portableHeadPortableFixedList = this.getMasterDataByMasterDataType(
      MasterDataType.portableFixed
    );
    this.doorTypeList = this.getMasterDataByMasterDataType(
      MasterDataType.doorType
    );
    this.driverArmrestList = this.getMasterDataByMasterDataType(
      MasterDataType.armrest
    );
    this.driverHeatingList = this.getMasterDataByMasterDataType(
      MasterDataType.heating
    );
    this.driverMercedesStarList = this.getMasterDataByMasterDataType(
      MasterDataType.mercedesStar
    );
    this.driverVibrationList = this.getMasterDataByMasterDataType(
      MasterDataType.vibration
    );
    this.hostessElectricalList = this.getMasterDataByMasterDataType(
      MasterDataType.electrical
    );
    this.hostessLockList = this.getMasterDataByMasterDataType(
      MasterDataType.locking
    );
    this.netTypeList = this.getMasterDataByMasterDataType(
      MasterDataType.netType
    );
    this.countryList = this.getMasterDataByMasterDataType(
      MasterDataType.country
    );
  }

  onBusMainInfoSaveClicked(): void {
    this.busy = this.vehicleService.saveVehicle(this.selectedVehicle).subscribe(
      x => {
        this.vehicleService
          .saveVehicleSeatMainInfo(this.selectedVehicleSeatMainInfo)
          .subscribe(
            y => {
              this.vehicleService
                .saveVehicleSeatFabric(this.selectedVehicleSeatFabric)
                .subscribe(
                  z => {
                    this.successModal.openSuccessModal();
                  },
                  err => {
                    this.errorModal.openErrorModal(err);
                  }
                );
            },
            err => {
              this.errorModal.openErrorModal(err);
            }
          );
      },
      err => {
        this.errorModal.openErrorModal(err);
      }
    );
  }
}
