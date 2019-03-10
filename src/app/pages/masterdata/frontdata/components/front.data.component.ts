import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import 'style-loader!./front.data.scss';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Button } from '../../../../models/button/button';
import { DatagridColumn } from '../../../../models/datagrid/datagrid.column';
import { DatagridColumnValues } from '../../../../models/datagrid/datagrid.column.values';
import { DatagridColourColumns } from '../../../../models/datagrid/colour/datagrid.colour.columns';
import { EditableDatagridSettings } from '../../../../models/datagrid/editabledatagrid/editable.datagrid.settings';
import { ErrorModalComponent } from '../../../../share/components/errormodal/error.modal.component';
import { Seat2getherEditableDatagridComponent } from '../../../../share/components/editabledatagrid/seat2gether.editable.datagrid.component';
import { SuccessModalComponent } from '../../../../share/components/successmodal/success.modal.component';
import { LocalDataSource } from 'ng2-smart-table';
import { ColourDatagridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/colour.datagrid.columns';
import { CharacteristicDatagridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/characteristic.datagrid.columns';
import { StatusDatagridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/status.datagrid.columns';
import { ChairtypeDatagridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/chair.type.datagrid.columns';
import { MaterialMasterDatagridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/materialmaster.datagrid.columns';
import { AdditionalDisclosureDatagridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/additional.disclosure.datagrid.columns';

import { RearseatpanDatagridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/rear.seat.pan.datagrid.columns';
import { WallconnectionDatagridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/wall.connection.datagrid.columns';
import { ChairfootDatagridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/chair.foot.datagrid.columns';
import { LateraladjustmentDatagridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/lateral.adjustment.datagrid.columns';
import { BeltDatagridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/belt.datagrid.columns';
import { SideCoverDatagridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/side.cover.datagrid.columns';
import { AdjustingLeverDatagridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/adjusting.lever.datagrid.columns';
import { BackrestAdjustmentDatagridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/backrest.adjustment.datagrid.columns';
import { StCharacteristicDataGridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/stcharacteristic.datagrid.columns';
import { StMaterialMasterDataGridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/stmaterial.master.datagrid.columns';
import { RemarkDataGridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/remark.datagrid.columns';
import { SeatFrameDataGridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/seat.frame.datagrid.columns';
import { SeatFramePartListDataGridColumns } from '../../../../models/datagrid/editabledatagrid/masterdatacolumns/seat.frame.part.list.datagrid.columns';
@Component({
  selector: 'frontdata',
  templateUrl: './front.data.html'
})
export class FrontData implements OnInit {

  @ViewChild('editableDataGrid')
  editableDataGrid: Seat2getherEditableDatagridComponent;

  @ViewChild('errormodal')
  errorModal: ErrorModalComponent;

  @ViewChild('successmodal')
  successModal: SuccessModalComponent;

  buttonList: Button[] = [];
  selectedButton: Button;
  clazz;

  constructor(private router: Router,
              private translate: TranslateService,
              private viewContainerRef: ViewContainerRef,
              private el: ElementRef
  ) {
    this.generateButtonList();
  }

  ngOnInit(): void {
  }
  test(event): void {
    console.log('Test');
  }
  generateButtonList(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setButtonList();
      return;
    });
    this.setButtonList();
  }

  onDGDblClick(event): void {
    console.log('Test');
  }

  setButtonList(): void {
    this.buttonList = [
      (new Button('0', this.translate.instant('masterdata.frontdata.colour'))),
      (new Button('1', this.translate.instant('masterdata.frontdata.characteristic'))),
      (new Button('2', this.translate.instant('masterdata.frontdata.status'))),
      (new Button('3', this.translate.instant('masterdata.frontdata.chairType'))),
      (new Button('4', this.translate.instant('masterdata.frontdata.materialOrigin'))),
      (new Button('5', this.translate.instant('masterdata.frontdata.additionalDisclosure'))),
      (new Button('7', this.translate.instant('masterdata.frontdata.rearSeatPan'))),
      (new Button('8', this.translate.instant('masterdata.frontdata.wallConnection'))),
      (new Button('9', this.translate.instant('masterdata.frontdata.chairFoot'))),
      (new Button('11', this.translate.instant('masterdata.frontdata.lateralAdjustment'))),
      (new Button('12', this.translate.instant('masterdata.frontdata.belt'))),
      (new Button('13', this.translate.instant('masterdata.frontdata.sideCover'))),
      (new Button('14', this.translate.instant('masterdata.frontdata.adjustingLever'))),
      (new Button('15',this.translate.instant('masterdata.frontdata.backrestAdjustment'))),
      (new Button('16',this.translate.instant('masterdata.frontdata.stCharacteristic'))),
      (new Button('17',this.translate.instant('masterdata.frontdata.stMaterialMaster'))),
      (new Button('18',this.translate.instant('masterdata.frontdata.remark'))),
      (new Button('19',this.translate.instant('masterdata.frontdata.seatFrame')))
    ];
  }

  initializeDataGrid(event): void {
    if (event == null || event.buttonValue == null) {
      return;
    }
    this.prepareSettings(event.buttonValue);
  }

  prepareSettings(selectedButtonValue: string): void {
    /* COLOUR */
    if (selectedButtonValue != null && selectedButtonValue === '0') {
      let columns = new ColourDatagridColumns(new DatagridColumn(this.translate.instant('masterdata.frontdata.colourDG.colourColumn.colourName'), 'string', true, true));
      this.prepareDatagridStructure<ColourDatagridColumns>(columns,
        'MasterdataColor/saveColor',
        'MasterdataColor/updateColor',
        'MasterdataColor/deleteColor',
        'MasterdataColor/findColors',
        true);
      return;
    }

    /* CHARACTERISTIC */
    if (selectedButtonValue != null && selectedButtonValue === '1') {
      let columns = new CharacteristicDatagridColumns(
        new DatagridColumn(this.translate.instant('masterdata.frontdata.characteristicDG.characteristicColumn.characteristicValue'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.characteristicDG.characteristicColumn.area'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.characteristicDG.characteristicColumn.sort'), 'number', true, true));
      this.prepareDatagridStructure<CharacteristicDatagridColumns>(columns,
        'Characteristic/addCharacteristic',
        'Characteristic/updateCharacteristic',
        'Characteristic/deleteCharacteristic',
        'Characteristic/CharacteristicList',
        true);
      return;
    }

    /* STATUS */
    if (selectedButtonValue != null && selectedButtonValue === '2') {
      let columns = new StatusDatagridColumns(
        new DatagridColumn(this.translate.instant('masterdata.frontdata.statusDG.statusColumn.statusName'), 'string', true, true));
      this.prepareDatagridStructure<StatusDatagridColumns>(columns,
        'Status/addStatus',
        'Status/updateStatus',
        'Status/deleteStatus',
        'Status/StatusList',
        true);
      return;
    }

    /* CHAIRTYPE */
    if (selectedButtonValue != null && selectedButtonValue === '3') {
      let columns = new ChairtypeDatagridColumns(
        new DatagridColumn(this.translate.instant('masterdata.frontdata.chairTypeDG.chairTypeColumn.chairType'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.chairTypeDG.chairTypeColumn.classification'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.chairTypeDG.chairTypeColumn.setupTime'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.chairTypeDG.chairTypeColumn.active'), 'boolean', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.chairTypeDG.chairTypeColumn.janzList'), 'boolean', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.chairTypeDG.chairTypeColumn.outsideCompany'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.chairTypeDG.chairTypeColumn.feedback'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.chairTypeDG.chairTypeColumn.referenceTime'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.chairTypeDG.chairTypeColumn.presetTimeReferenceSlot'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.chairTypeDG.chairTypeColumn.group'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.chairTypeDG.chairTypeColumn.upholsteryLine'), 'boolean', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.chairTypeDG.chairTypeColumn.tbSeatFrame'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.chairTypeDG.chairTypeColumn.colloquial'), 'boolean', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.chairTypeDG.chairTypeColumn.factorForNumberCalculation'), 'number', true, true));
      this.prepareDatagridStructure<ChairtypeDatagridColumns>(columns,
        'ChairType/addChairType',
        'ChairType/updateChairType',
        'ChairType/deleteChairType',
        'ChairType/ChairTypeList',
        true);
      return;
    }

    /* MATERIAL MASTER */
    if (selectedButtonValue != null && selectedButtonValue === '4') {
      let columns = new MaterialMasterDatagridColumns(
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.partNumber'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.designation'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.position'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.lfdnrCharacteristic'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.standardTimeInMinute'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.vzko'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.VZBW'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.VZEL'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.VZAZ'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.VZVS'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.VZMO'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.VZAL'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.VZGF'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.standart'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.active'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.createdBy'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.createdOn'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.alteredFrom'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.changedOn'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.bulkGood'), 'boolean', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.numberAdditionalShare'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.background'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.foreground'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.posX'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.posY'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.picture'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.acquisitionVariation'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.materialOriginDG.materialOriginColumn.partNumberWithout'), 'string', true, true)

      );
      this.prepareDatagridStructure<MaterialMasterDatagridColumns>(columns,
        'MaterialMaster/addMaterialMaster',
        'MaterialMaster/updateMaterialMaster',
        'MaterialMaster/deleteMaterialMaster',
        'MaterialMaster/MaterialMasterList',
        true);
      return;
    }

    /* ADDITIONALDISCLOSURE */
    if (selectedButtonValue != null && selectedButtonValue === '5') {
      let columns = new AdditionalDisclosureDatagridColumns(
        new DatagridColumn(this.translate.instant('masterdata.frontdata.additionalDisclosureDG.additionalDisclosureColumn.Specification'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.additionalDisclosureDG.additionalDisclosureColumn.StandardTime'), 'number', true, true));
      this.prepareDatagridStructure<AdditionalDisclosureDatagridColumns>(columns,
        'AdditionalDisclosure/addAdditionalDisclosure',
        'AdditionalDisclosure/updateAdditionalDisclosure',
        'AdditionalDisclosure/deleteAdditionalDisclosure',
        'AdditionalDisclosure/AdditionalDisclosureList',
        true);
      return;
    }

    /* REAR SEAT PAN */
    if (selectedButtonValue != null && selectedButtonValue === '7') {
      let columns = new RearseatpanDatagridColumns(
        new DatagridColumn(this.translate.instant('masterdata.frontdata.rearSeatPanDG.rearSeatPanColumn.rearSeatPanId'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.rearSeatPanDG.rearSeatPanColumn.narrow'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.rearSeatPanDG.rearSeatPanColumn.characteristic'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.rearSeatPanDG.rearSeatPanColumn.remark'), 'string', true, true));
      this.prepareDatagridStructure<RearseatpanDatagridColumns>(columns,
        'RearSeatPan/addRearSeatPan',
        'RearSeatPan/updateRearSeatPan',
        'RearSeatPan/deleteRearSeatPan',
        'RearSeatPan/RearSeatPanList',
        true);
      return;
    }

    /* WALLCONNECTION */
    if (selectedButtonValue != null && selectedButtonValue === '8') {
      let columns = new WallconnectionDatagridColumns(
        new DatagridColumn(this.translate.instant('masterdata.frontdata.wallConnectionDG.wallConnectionColumn.wallConnectionId'), 'string', true, true));
      this.prepareDatagridStructure<WallconnectionDatagridColumns>(columns,
        'WallConnection/addWallConnection',
        'WallConnection/updateWallConnection',
        'WallConnection/deleteWallConnection',
        'WallConnection/WallConnectionList',
        true);
      return;
    }

    /* CHAIRFOOT */
    if (selectedButtonValue != null && selectedButtonValue === '9') {
      let columns = new ChairfootDatagridColumns(
        new DatagridColumn(this.translate.instant('masterdata.frontdata.chairFootDG.chairFootColumn.chairFootId'), 'string', true, true));
      this.prepareDatagridStructure<ChairfootDatagridColumns>(columns,
        'ChairFoot/addChairFoot',
        'ChairFoot/updateChairFoot',
        'ChairFoot/deleteChairFoot',
        'ChairFoot/ChairFootList',
        true);
      return;
    }

    /* LATERAL ADJUSTMENT */
    if (selectedButtonValue != null && selectedButtonValue === '11') {
      let columns = new LateraladjustmentDatagridColumns(
        new DatagridColumn(this.translate.instant('masterdata.frontdata.lateralAdjustmentDG.lateralAdjustmentColumn.EB'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.lateralAdjustmentDG.lateralAdjustmentColumn.Designation'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.lateralAdjustmentDG.lateralAdjustmentColumn.LateralAdjustmentLI'), 'boolean', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.lateralAdjustmentDG.lateralAdjustmentColumn.LateralAdjustmentRE'), 'boolean', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.lateralAdjustmentDG.lateralAdjustmentColumn.Gauge'), 'string', true, true));
      this.prepareDatagridStructure<LateraladjustmentDatagridColumns>(columns,
        'LateralAdjustment/addLateralAdjustment',
        'LateralAdjustment/updateLateralAdjustment',
        'LateralAdjustment/deleteLateralAdjustment',
        'LateralAdjustment/LateralAdjustmentList',
        true);
      return;
    }

    /* BELT */
    if (selectedButtonValue != null && selectedButtonValue === '12') {
      let columns = new BeltDatagridColumns(
        new DatagridColumn(this.translate.instant('masterdata.frontdata.beltDG.beltColumn.EB'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.beltDG.beltColumn.Designation'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.beltDG.beltColumn.Link'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.beltDG.beltColumn.Right'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.beltDG.beltColumn.Program'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.beltDG.beltColumn.DSCharacteristic'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.beltDG.beltColumn.NumberOfBack'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.beltDG.beltColumn.Arrangement'), 'number', true, true));
      this.prepareDatagridStructure<BeltDatagridColumns>(columns,
        'EBBelt/addEBBelt',
        'EBBelt/updateEBBelt',
        'EBBelt/deleteEBBelt',
        'EBBelt/EBBeltList',
        true);
      return;
    }

    /* SIDE COVER */
    if (selectedButtonValue != null && selectedButtonValue === '13') {
      let columns = new SideCoverDatagridColumns(
        new DatagridColumn(this.translate.instant('masterdata.frontdata.sideCoverDG.sideCoverColumn.PartNumber'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.sideCoverDG.sideCoverColumn.Designation'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.sideCoverDG.sideCoverColumn.BeltAisleSide'), 'boolean', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.sideCoverDG.sideCoverColumn.ArmRest'), 'boolean', true, true));
      this.prepareDatagridStructure<SideCoverDatagridColumns>(columns,
        'SideCover/addSideCover',
        'SideCover/updateSideCover',
        'SideCover/deleteSideCover',
        'SideCover/SideCoverList',
        true);
      return;
    }

    /* ADJUSTING LEVER */
    if (selectedButtonValue != null && selectedButtonValue === '14') {
      let columns = new AdjustingLeverDatagridColumns(
        new DatagridColumn(this.translate.instant('masterdata.frontdata.adjustingLeverDG.adjustingLeverColumn.PartNumber'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.adjustingLeverDG.adjustingLeverColumn.NumberOfBlocking'), 'number', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.adjustingLeverDG.adjustingLeverColumn.Designation'), 'string', true, true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.adjustingLeverDG.adjustingLeverColumn.Page'), 'string', true, true));
      this.prepareDatagridStructure<AdjustingLeverDatagridColumns>(columns,
        'AdjustingLever/addAdjustingLever',
        'AdjustingLever/updateAdjustingLever',
        'AdjustingLever/deleteAdjustingLever',
        'AdjustingLever/AdjustingLeverList',
        true);
      return;
    }

     /*BACKREST ADJUSTMENT*/
     if(selectedButtonValue !=null && selectedButtonValue=='15')
     {
       let columns=new BackrestAdjustmentDatagridColumns(
         new DatagridColumn(this.translate.instant('masterdata.frontdata.backrestAdjustmentDG.backrestAdjustmentColumn.eB'),'string',true,true),
         new DatagridColumn(this.translate.instant('masterdata.frontdata.backrestAdjustmentDG.backrestAdjustmentColumn.designation'),'string',true,true),
         new DatagridColumn(this.translate.instant('masterdata.frontdata.backrestAdjustmentDG.backrestAdjustmentColumn.numberOfPnematicSpring'),'number',true,true),
         new DatagridColumn(this.translate.instant('masterdata.frontdata.backrestAdjustmentDG.backrestAdjustmentColumn.pretenseLi'),'number',true,true),
         new DatagridColumn(this.translate.instant('masterdata.frontdata.backrestAdjustmentDG.backrestAdjustmentColumn.pretenseRe'),'number',true,true));
         this.prepareDatagridStructure<BackrestAdjustmentDatagridColumns>(columns,
         'BackrestAdjuster/addBackrestAdjuster',
         'BackrestAdjuster/updateBackrestAdjuster',
         'BackrestAdjuster/deleteBackrestAdjuster',
         'BackrestAdjuster/BackrestAdjusterList',
         true);
       return;
     }

     /*ST Characteristic*/
     if(selectedButtonValue !=null && selectedButtonValue=='16')
     {
        let columns=new StCharacteristicDataGridColumns(
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stCharacteristicDG.stCharacteristicColumn.lfdnrCharacteristic'),'number',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stCharacteristicDG.stCharacteristicColumn.characteristic'),'string',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stCharacteristicDG.stCharacteristicColumn.sort'),'number',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stCharacteristicDG.stCharacteristicColumn.lfdnrPot'),'number',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stCharacteristicDG.stCharacteristicColumn.cut'),'boolean',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stCharacteristicDG.stCharacteristicColumn.stitching'),'boolean',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stCharacteristicDG.stCharacteristicColumn.specialSeat'),'boolean',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stCharacteristicDG.stCharacteristicColumn.montage'),'boolean',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stCharacteristicDG.stCharacteristicColumn.issueCircus'),'boolean',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stCharacteristicDG.stCharacteristicColumn.materialRevelant'),'boolean',true,true));
          this.prepareDatagridStructure<StCharacteristicDataGridColumns>(columns,
          'StCharacteristic/addStCharacteristic',
          'StCharacteristic/updateStCharacteristic',
          'StCharacteristic/deleteStCharacteristic',
          'StCharacteristic/StCharacteristicList',
    true);
    return;
     }

     /*St Material Master */
     if(selectedButtonValue !=null && selectedButtonValue=='17')
     {
        let columns=new StMaterialMasterDataGridColumns(
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.partNumber'),'string',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.designations'),'string',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.lfdNrCharacteristic'),'number',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.active'),'boolean',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.createdBy'),'string',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.createdOn'),'date',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.alteredFrom'),'string',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.changedOn'),'date',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.area'),'number',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.designationReport'),'string',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.issueLabel'),'boolean',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.columnReportSpecialSeat'),'number',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.issueReport'),'string',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.lineReportCircus'),'number',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.issueReportCircus'),'string',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.columnSSFNS'),'number',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.issueSSFNS'),'string',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.columnSSFS'),'number',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.issueSSFS'),'string',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.labelText'),'string',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.uGR'),'string',true,true),
          new DatagridColumn(this.translate.instant('masterdata.frontdata.stMaterialMasterDG.stMaterialMasterColumn.kSW'),'boolean',true,true));
        this.prepareDatagridStructure<StMaterialMasterDataGridColumns>(columns,
        'STMaterialMaster/addSTMaterialMaster',
        'STMaterialMaster/updateSTMaterialMaster',
        'STMaterialMaster/deleteSTMaterialMaster',
        'STMaterialMaster/STMaterialMasterList',
      true);
      return;
     }

     /*Remark */
     if(selectedButtonValue != null && selectedButtonValue == '18')
     {
      let columns=new RemarkDataGridColumns(
        new DatagridColumn(this.translate.instant('masterdata.frontdata.remarkDG.remarkColumn.remark'),'string',true,true)
      );
      this.prepareDatagridStructure<RemarkDataGridColumns>(columns,
      'Remark/addRemark',
      'Remark/updateRemark',
      'Remark/deleteRemark',
      'Remark/RemarkList',
    true);
    return;

     }

     /* Seat Frame*/
     if(selectedButtonValue != null && selectedButtonValue == '19')
     {
       let columns=new SeatFrameDataGridColumns(
         new DatagridColumn(this.translate.instant('masterdata.frontdata.seatFrameDG.seatFrameColumn.ebNumber'),'string',true,true),
         new DatagridColumn(this.translate.instant('masterdata.frontdata.seatFrameDG.seatFrameColumn.designation'),'string',true,true),
         new DatagridColumn(this.translate.instant('masterdata.frontdata.seatFrameDG.seatFrameColumn.tnrSupportTube'),'string',true,true),
         new DatagridColumn(this.translate.instant('masterdata.frontdata.seatFrameDG.seatFrameColumn.amount'),'number',true,true),
         new DatagridColumn(this.translate.instant('masterdata.frontdata.seatFrameDG.seatFrameColumn.template'),'number',true,true),
         new DatagridColumn(this.translate.instant('masterdata.frontdata.seatFrameDG.seatFrameColumn.seatPitch'),'number',true,true),
         new DatagridColumn(this.translate.instant('masterdata.frontdata.seatFrameDG.seatFrameColumn.page'),'string',true,true),
         new DatagridColumn(this.translate.instant('masterdata.frontdata.seatFrameDG.seatFrameColumn.colorInfo'),'string',true,true),
         new DatagridColumn(this.translate.instant('masterdata.frontdata.seatFrameDG.seatFrameColumn.adapter'),'boolean',true,true),
       );
       this.prepareDatagridStructure<SeatFrameDataGridColumns>(columns,
        'SeatFrame/AddSeatFrame',
        'SeatFrame/UpdateSeatFrame',
        'SeatFrame/DeleteSeatFrame',
        'SeatFrame/SeatFrameList',true);
        return;
     }

     if(selectedButtonValue != null && selectedButtonValue == '19')
     {
      let columns=new SeatFramePartListDataGridColumns(
        
        new DatagridColumn(this.translate.instant('masterdata.frontdata.seatFrameDG.seatFrameColumn.characteristic'),'string',true,true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.seatFrameDG.seatFrameColumn.tnrLi'),'string',true,true),
        new DatagridColumn(this.translate.instant('masterdata.frontdata.seatFrameDG.seatFrameColumn.tnrRe'),'string',true,true),
      );
      this.prepareDatagridStructure<SeatFramePartListDataGridColumns>(columns,
       'SeatFrame/AddSeatFrame',
       'SeatFrame/UpdateSeatFrame',
       'SeatFrame/DeleteSeatFrame',
       'SeatFrame/SeatFramePartList/' + 'A6060009895',true);
       return;
     }

     

    this.editableDataGrid.dataSource = new LocalDataSource();
    this.editableDataGrid.datagridVisible = false;
  }

  prepareDatagridStructure<T>(columns: T,
                              addServiceName: string,
                              updateServiceName: string,
                              deleteServiceName: string,
                              listServiceName: string,
                              datagridVisible: boolean) {
    this.editableDataGrid.errorModal = this.errorModal;
    this.editableDataGrid.successModal = this.successModal;
    this.editableDataGrid.ng2TableSettings = JSON.parse(JSON.stringify(new EditableDatagridSettings(columns)));
    this.editableDataGrid.addServiceName = addServiceName;
    this.editableDataGrid.updateServiceName = updateServiceName;
    this.editableDataGrid.deleteServiceName = deleteServiceName;
    this.editableDataGrid.listServiceName = listServiceName;
    this.editableDataGrid.initializeDataGrid();
    this.editableDataGrid.datagridVisible = datagridVisible;
  }
}
