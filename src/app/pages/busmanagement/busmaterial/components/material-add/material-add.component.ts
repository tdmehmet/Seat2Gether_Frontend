import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MaterialService } from '../../../../../share/services/material/material.service';
import { ActivatedRoute } from '@angular/router';
import { ErrorModalComponent } from '../../../../../share/components/errormodal/error.modal.component';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';
import { StationService } from '../../../../../share/services/station/station.service';
import { SwalService } from '../../../../../share/utils/swal.service';

@Component({
  selector: 'material-add',
  templateUrl: 'material-add.component.html'
})

export class MaterialAdd implements OnInit {

  @ViewChild('errormodal')
  errorModal: ErrorModalComponent;

  busy: Subscription;

  @Output() materialAdded = new EventEmitter();

  newMaterial: any = {
    vehicleBBNumber: '',
    stationNumber: '',
    unit: '',
    quantity: '',
    materialNumber: '',
    materialName: '',
    subGroupId: '01'
  };
  stationList: any[] = [
    { stationNumber: 'xx1', stationName: 'X Station' },
    { stationNumber: 'yy1', stationName: 'Y Station' }
  ];
  otherStation: Boolean = false;
  bbNumber: String = '';

  constructor(
    private materialService: MaterialService,
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService,
    private stationService: StationService,
    private swalService: SwalService
  ) {
    this.activatedRoute.params.subscribe(params => this.bbNumber = params['bbNumber']);
  }

  ngOnInit() {
    this.stationService.getStationList().subscribe(res => {
      this.stationList = res;
    })
  }

  addMaterial() {
    this.newMaterial.vehicleBBNumber = this.bbNumber
    this.busy = this.materialService.addMaterial(this.newMaterial)
      .subscribe(res => {
        this.materialAdded.emit();
        this.swalService.showSuccessMessage();
      }, (err) => {
        this.errorModal.openErrorModal(err);
      });
  }

}
