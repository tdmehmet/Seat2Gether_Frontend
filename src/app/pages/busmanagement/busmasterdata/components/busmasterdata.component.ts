import { Component, OnInit, ViewChild } from "@angular/core";
import { Seat2getherEditableDatagridComponent } from "../../../../share/components/editabledatagrid/seat2gether.editable.datagrid.component";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
import { Button } from "../../../../models/button/button";
import { EditableDatagridSettings } from "../../../../models/datagrid/editabledatagrid/editable.datagrid.settings";
import { DatagridColumn } from "../../../../models/datagrid/datagrid.column";
import { ErrorModalComponent } from "../../../../share/components/errormodal/error.modal.component";
import { SuccessModalComponent } from "../../../../share/components/successmodal/success.modal.component";
import { StationDatagridColumns } from "../../../../models/datagrid/editabledatagrid/busmanagementcolumns/busmasterdata/StationDatagridColumns";
import { WarehouseDatagridColumns } from "../../../../models/datagrid/editabledatagrid/busmanagementcolumns/busmasterdata/WarehouseDatagridColumns";
import { CountryDatagridColumns } from "../../../../models/datagrid/editabledatagrid/busmanagementcolumns/busmasterdata/CountryDatagridColumns";
import { MasterDataType } from "../../../../enums/masterdatatype.enum";

@Component({
  selector: "busmasterdata",
  templateUrl: "./busmasterdata.component.html",
  styleUrls: ["./busmasterdata.component.css"]
})
export class BusMasterData implements OnInit {
  @ViewChild("editableDataGrid")
  editableDataGrid: Seat2getherEditableDatagridComponent;

  @ViewChild("errormodal") errorModal: ErrorModalComponent;

  @ViewChild("successmodal") successModal: SuccessModalComponent;

  buttonList: Button[] = [];
  selectedButton: Button;

  constructor(private translate: TranslateService) {
    this.generateButtonList();
  }

  ngOnInit() {}

  generateButtonList(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setButtonList();
      return;
    });
    this.setButtonList();
  }

  setButtonList(): void {
    this.buttonList = [
      new Button("0", this.translate.instant("external.busmasterdata.STATION")),
      new Button(
        "1",
        this.translate.instant("external.busmasterdata.WAREHOUSE")
      ),
      new Button("2", this.translate.instant("external.busmasterdata.COUNTRY")),
      new Button("3", this.translate.instant("external.busmasterdata.SEAT_TYPE")),
      new Button("4", this.translate.instant("external.busmasterdata.HOSTESS")),
      new Button("5", this.translate.instant("external.busmasterdata.BACK_ROW")),
    ];
  }

  initializeDataGrid(event): void {
    if (event == null || event.buttonValue == null) {
      return;
    }
    this.prepareSettings(event.buttonValue);
  }

  prepareSettings(selectedButtonValue: string): void {
    if (selectedButtonValue != null && selectedButtonValue === "0") {
      let columns = new StationDatagridColumns(
        new DatagridColumn(
          this.translate.instant("external.busmasterdata.STATION_NUMBER"),
          "string",
          false,
          true
        ),
        new DatagridColumn(
          this.translate.instant("external.busmasterdata.STATION_NAME"),
          "string",
          true,
          true
        )
      );
      this.prepareDatagridStructure<StationDatagridColumns>(
        columns,
        "Station/AddStation",
        "Station/UpdateStation",
        "Station/DeleteStation",
        "Station/GetStationList",
        true
      );
      return;
    }
    if (selectedButtonValue != null && selectedButtonValue === "1") {
      let columns = new WarehouseDatagridColumns(
        new DatagridColumn(
          this.translate.instant("external.busmasterdata.MATERIAL_NUMBER"),
          "string",
          false,
          true
        ),
        new DatagridColumn(
          this.translate.instant("external.busmasterdata.WAREHOUSE_NUMBER"),
          "string",
          true,
          true
        )
      );
      this.prepareDatagridStructure<WarehouseDatagridColumns>(
        columns,
        "Warehouse/AddWarehouse",
        "Warehouse/UpdateWarehouse",
        "Warehouse/DeleteWarehouse",
        "Warehouse/GetWarehouseList",
        true
      );
      return;
    }
    if (selectedButtonValue != null && selectedButtonValue === "2") {
      let columns = new CountryDatagridColumns(
        new DatagridColumn(
          this.translate.instant("external.busmasterdata.TR"),
          "string",
          true,
          true
        ),
        new DatagridColumn(
          this.translate.instant("external.busmasterdata.EN"),
          "string",
          true,
          true
        ),
        new DatagridColumn(
          this.translate.instant("external.busmasterdata.DE"),
          "string",
          true,
          true
        )
      );
      this.prepareDatagridStructure<CountryDatagridColumns>(
        columns,
        "MasterData/AddMasterData/" + MasterDataType.country,
        "MasterData/UpdateMasterData/" + MasterDataType.country,
        "MasterData/DeleteMasterData",
        "MasterData/GetMasterDataListByType/" + MasterDataType.country,
        true
      );
      return;
    }
    if (selectedButtonValue != null && selectedButtonValue === "3") {
      let columns = new CountryDatagridColumns(
        new DatagridColumn(
          this.translate.instant("external.busmasterdata.TR"),
          "string",
          true,
          true
        ),
        new DatagridColumn(
          this.translate.instant("external.busmasterdata.EN"),
          "string",
          true,
          true
        ),
        new DatagridColumn(
          this.translate.instant("external.busmasterdata.DE"),
          "string",
          true,
          true
        )
      );
      this.prepareDatagridStructure<CountryDatagridColumns>(
        columns,
        "MasterData/AddMasterData/" + MasterDataType.seatType,
        "MasterData/UpdateMasterData/" + MasterDataType.seatType,
        "MasterData/DeleteMasterData",
        "MasterData/GetMasterDataListByType/" + MasterDataType.seatType,
        true
      );
      return;
    }
    if (selectedButtonValue != null && selectedButtonValue === "4") {
      let columns = new CountryDatagridColumns(
        new DatagridColumn(
          this.translate.instant("external.busmasterdata.TR"),
          "string",
          true,
          true
        ),
        new DatagridColumn(
          this.translate.instant("external.busmasterdata.EN"),
          "string",
          true,
          true
        ),
        new DatagridColumn(
          this.translate.instant("external.busmasterdata.DE"),
          "string",
          true,
          true
        )
      );
      this.prepareDatagridStructure<CountryDatagridColumns>(
        columns,
        "MasterData/AddMasterData/" + MasterDataType.hostessSeat,
        "MasterData/UpdateMasterData/" + MasterDataType.hostessSeat,
        "MasterData/DeleteMasterData",
        "MasterData/GetMasterDataListByType/" + MasterDataType.hostessSeat,
        true
      );
      return;
    }
    if (selectedButtonValue != null && selectedButtonValue === "5") {
      let columns = new CountryDatagridColumns(
        new DatagridColumn(
          this.translate.instant("external.busmasterdata.TR"),
          "string",
          true,
          true
        ),
        new DatagridColumn(
          this.translate.instant("external.busmasterdata.EN"),
          "string",
          true,
          true
        ),
        new DatagridColumn(
          this.translate.instant("external.busmasterdata.DE"),
          "string",
          true,
          true
        )
      );
      this.prepareDatagridStructure<CountryDatagridColumns>(
        columns,
        "MasterData/AddMasterData/" + MasterDataType.backRowSeat,
        "MasterData/UpdateMasterData/" + MasterDataType.backRowSeat,
        "MasterData/DeleteMasterData",
        "MasterData/GetMasterDataListByType/" + MasterDataType.backRowSeat,
        true
      );
      return;
    }
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
    this.editableDataGrid.initializeDataGrid();
    this.editableDataGrid.datagridVisible = datagridVisible;
  }
}
