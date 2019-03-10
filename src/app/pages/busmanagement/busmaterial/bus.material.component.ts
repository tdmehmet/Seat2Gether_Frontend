import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialService } from '../../../share/services/material/material.service';
import { ImportDataService } from '../../../share/services/importdata/importdata.service';
import { Subscription } from 'rxjs/Subscription';
import { SwalService } from '../../../share/utils/swal.service';

@Component({
  selector: 'busmaterial',
  templateUrl: 'bus.material.html'
})

export class BusMaterial implements OnInit {

  @ViewChild('fileInput') fileInput;

  isFileUpload: Boolean = false;
  isAddMaterial: Boolean = false;

  importResults: any;
  stationList: any;
  isLoading: Boolean = false;
  isSaving: Boolean = false;
  bbNumber: String = '';
  selectedFile = '';
  busy: Subscription;

  constructor(
    private materialService: MaterialService,
    private importDataService: ImportDataService,
    private activatedRoute: ActivatedRoute,
    private swalService: SwalService
  ) {
    this.activatedRoute.params.subscribe(params => this.bbNumber = params['bbNumber']);
  }

  ngOnInit() { this.getMaterials(); }

  getMaterials() {
    this.busy = this.materialService.getBusMaterials(this.bbNumber)
      .subscribe(res => {
        this.stationList = res;
      });
  }

  importExportedSingleBBFile() {
    this.isLoading = true;
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append('file', fileBrowser.files[0]);
      this.busy = this.importDataService.importExportedSingleBBFile(formData, this.bbNumber)
        .finally(() => this.isLoading = false)
        .subscribe(res => {
          this.swalService.showSuccessMessage();
          this.getMaterials();
        });
    }
  }

  deleteMaterials() {
    this.busy = this.materialService.deleteMaterials(this.bbNumber)
      .subscribe(res => {
        this.swalService.showSuccessMessage();
        this.getMaterials();
      });
  }

  selectedFileChange(event: any) {
    this.selectedFile = event.target.value;
  }

  refreshMaterialList() {
    this.getMaterials();
  }

}
