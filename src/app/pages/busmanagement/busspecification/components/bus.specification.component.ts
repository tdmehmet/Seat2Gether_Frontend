import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { DatagridColumn } from "../../../../models/datagrid/datagrid.column";
import { DatagridColumnValues } from "../../../../models/datagrid/datagrid.column.values";
import { DatagridColourColumns } from "../../../../models/datagrid/colour/datagrid.colour.columns";
import { EditableDatagridSettings } from "../../../../models/datagrid/editabledatagrid/editable.datagrid.settings";
import { ErrorModalComponent } from "../../../../share/components/errormodal/error.modal.component";
import { Seat2getherEditableDatagridComponent } from "../../../../share/components/editabledatagrid/seat2gether.editable.datagrid.component";
import { SuccessModalComponent } from "../../../../share/components/successmodal/success.modal.component";
import { Vehicle } from "../../../../models/busmanagement/busspecification/vehicle";
import { VehicleService } from "../../../../share/services/vehicle/vehicle.service";
import { VehicleType } from "../../../../models/busmanagement/busspecification/vehicle.type";
import { BusyModule } from "angular2-busy";
import { Subscription } from "rxjs/Subscription";
import { VehicleDG } from "../../../../models/busmanagement/busspecification/vehicleDG";
import "style-loader!./bus.specification.scss";
import { ModalComponent } from "ng2-bs3-modal/ng2-bs3-modal";
import { VehicleSeatType } from "../../../../models/busmanagement/busspecification/vehicle.seat.type";
import { VehicleModel } from "../../../../models/busmanagement/busspecification/vehicle.model";
import { BusService } from "../../../../share/services/bus/bus.service";
import { Observable } from "rxjs/Observable";
import { request } from "https";
import { MasterDataService } from "../../../../share/services/masterdata/masterdata.service";
import { MasterDataType } from "../../../../enums/masterdatatype.enum";
import { Subject } from "rxjs";
import { SwalService } from "../../../../share/utils/swal.service";
import { credentials } from "../../../../share/credientials";
import { ComboBoxComponent } from "ng2-combobox";

@Component({
  selector: "busspecification",
  templateUrl: "./bus.specification.html"
})
export class BusSpecification implements OnInit {
  @ViewChild("editableDataGrid")
  editableDataGrid: Seat2getherEditableDatagridComponent;

  @ViewChild("errormodal") errorModal: ErrorModalComponent;

  @ViewChild("successmodal") successModal: SuccessModalComponent;

  @ViewChild("vehicleDetails") vehicleModal: ModalComponent;

  busyDiv: BusyModule;

  busy: Subscription;

  // keyUp = new Subject<string>();
  @ViewChild("filterModel") filterModel: ComboBoxComponent;
  @ViewChild("filterType") filterType: ComboBoxComponent;
  @ViewChild("filterCountry") filterCountry: ComboBoxComponent;

  searchVehicle: Vehicle = new Vehicle(null, "", null, "", null);
  vehicleDGList: VehicleDG[] = [];
  masterDataList: any[] = [];
  countryList: any[] = [];
  vehicleTypeList: any[] = [];
  vehicleModelList: any[] = [];
  vehicleSeatTypeList: VehicleSeatType[] = [];
  selectedVehicle: Vehicle = new Vehicle(0, "", 0, "", 0);
  displayField: string = "en";
  constructor(
    private vehicleService: VehicleService,
    private masterDataService: MasterDataService,
    private busService: BusService,
    private translate: TranslateService,
    private swalService: SwalService
  ) {
    // this.keyUp
    //   .map((elem: any) => elem.target.value)
    //   .debounceTime(1000)
    //   .distinctUntilChanged()
    //   .flatMap(search => {
    //     return Observable.of(search).delay(500);
    //   })
    //   .subscribe(data => {
    //     if (data !== undefined && data !== null && data.length > 3)
    //       this.onSearchClicked();
    //   });
  }

  materialReport() {
    window.open(credentials.host + "/Reports/ExReports/TestReport.aspx");
  }

  listAllData() {
    if (sessionStorage.getItem("language") === "tr") {
      this.displayField = "tr";
    } else if (sessionStorage.getItem("language") === "de") {
      this.displayField = "de";
    } else {
      this.displayField = "en";
    }

    const masterDataRequest = this.masterDataService.getMasterData();

    Observable.forkJoin([masterDataRequest]).subscribe(
      result => {
        this.masterDataList = result[0];
        this.countryList = this.getMasterDataByMasterDataType(
          MasterDataType.country
        );
        this.vehicleTypeList = this.getMasterDataByMasterDataType(
          MasterDataType.vehicleType
        );
        this.vehicleModelList = this.getMasterDataByMasterDataType(
          MasterDataType.vehicleModel
        );
        this.onSearchClicked();
      },
      err => {
        this.errorModal.openErrorModal(err);
      }
    );
  }

  getMasterDataByMasterDataType(
    masterDataType: MasterDataType,
    parentId?: number
  ) {
    let result = this.masterDataList.filter(r => {
      if (r.masterDataTypeId == masterDataType) {
        return r;
      }
    });

    return result;
  }

  ngOnInit(): void {
    this.listAllData();
  }

  onEditClicked(item: VehicleDG): void {
    if (sessionStorage.getItem("language") === "tr") {
      this.displayField = "tr";
    } else if (sessionStorage.getItem("language") === "de") {
      this.displayField = "de";
    } else {
      this.displayField = "en";
    }

    this.selectedVehicle.modelId = item.modelId;
    this.selectedVehicle.bbNumber = item.bbNumber;
    this.vehicleModal.open();
  }

  deleteBusClicked(bbNumber: string) {
    this.swalService.showConfirm(() => {
      this.busy = this.busService.deleteBus(bbNumber).subscribe(res => {
        this.onSearchClicked();
      });
    });
  }
  onResetClicked() {
    this.searchVehicle = new Vehicle(null, "", null, "", null);
    this.filterModel.currVal = "";
    this.filterCountry.currVal = "";
    this.filterType.currVal = "";
    this.onSearchClicked();
  }
  onSearchClicked(): void {
    this.vehicleDGList = [];
    this.busy = this.busService.findVehicleByBody(this.searchVehicle).subscribe(
      vehicleList => {
        vehicleList.forEach(vehicle => {
          let vehicleDG: VehicleDG = new VehicleDG();
          vehicleDG.bbNumber = vehicle.bbNumber;
          vehicleDG.id = vehicle.id;
          let type: string = "";
          this.vehicleTypeList.forEach(vehicleType => {
            if (vehicleType.id === vehicle.typeId) {
              if (sessionStorage.getItem("language") === "de") {
                type = vehicleType.de;
              } else if (sessionStorage.getItem("language") === "tr") {
                type = vehicleType.tr;
              } else {
                type = vehicleType.en;
              }
            }
          });
          let model: string = "";
          this.vehicleModelList.forEach(vehicleModel => {
            if (vehicleModel.id === vehicle.modelId) {
              if (sessionStorage.getItem("language") === "de") {
                model = vehicleModel.de;
              } else if (sessionStorage.getItem("language") === "tr") {
                model = vehicleModel.tr;
              } else {
                model = vehicleModel.en;
              }
            }
          });

          let country: string = "";
          this.countryList.forEach(vehicleCountry => {
            if (vehicleCountry.id === vehicle.countryId) {
              if (sessionStorage.getItem("language") === "de") {
                country = vehicleCountry.de;
              } else if (sessionStorage.getItem("language") === "tr") {
                country = vehicleCountry.tr;
              } else {
                country = vehicleCountry.en;
              }
            }
          });

          vehicleDG.type = type;
          vehicleDG.typeId = vehicle.typeId;
          vehicleDG.model = model;
          vehicleDG.modelId = vehicle.modelId;
          vehicleDG.country = country;
          vehicleDG.countryId = vehicle.countryId;
          this.vehicleDGList.push(vehicleDG);
        });
      },
      err => {
        this.errorModal.openErrorModal(err);
      }
    );
    /* let columns = new VehicleDatagridColumns(
       new DatagridColumn(this.translate.instant('busmanagement.busspecification.bbnumber'), 'string', true, true),
       // new DatagridColumn(this.translate.instant('busmanagement.busspecification.type'), 'string', true, true),
       new RichDatagridColumn<Seat2getherEditableDatagridComboboxParentComponent>('Type', '{editable: true, listData: ' + JSON.stringify(this.vehicleTypeList) + ', selectedData: 1}'),
       new DatagridColumn(this.translate.instant('busmanagement.busspecification.country'), 'string', true, true),
       new DatagridColumn(this.translate.instant('busmanagement.busspecification.model'), 'string', true, true),
       );
     this.vehicleService.findVehicleByBody(this.searchVehicle).subscribe(
       vehicleList => {
         this.prepareDatagridStructure<VehicleDatagridColumns>(columns,
           'Vehicle/addVehicle',
           'Vehicle/updateVehicle',
           'Vehicle/deleteVehicle',
           'Vehicle/FindVehicleByBody',
           true);

         this.editableDataGrid.dataSource = new LocalDataSource();
         this.editableDataGrid.dataSource.load(vehicleList);
         this.editableDataGrid.datagridVisible = false;
       }
     );*/
  }

  prepareDatagridStructure<T>(
    columns: T,
    addServiceName: string,
    updateServiceName: string,
    deleteServiceName: string,
    listServiceName: string,
    datagridVisible: boolean
  ) {
    this.editableDataGrid.errorModal = this.errorModal;
    this.editableDataGrid.successModal = this.successModal;
    this.editableDataGrid.ng2TableSettings = JSON.parse(
      JSON.stringify(new EditableDatagridSettings(columns))
    );
    this.editableDataGrid.addServiceName = addServiceName;
    this.editableDataGrid.updateServiceName = updateServiceName;
    this.editableDataGrid.deleteServiceName = deleteServiceName;
    this.editableDataGrid.listServiceName = listServiceName;
    this.editableDataGrid.datagridVisible = datagridVisible;
  }
}
