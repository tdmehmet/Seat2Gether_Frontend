import { Component, OnInit, ViewChild } from '@angular/core';
import { ImportDataService } from '../../../share/services/importdata/importdata.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'busimport',
  templateUrl: 'bus.import.html'
})

export class BusImport implements OnInit {
  @ViewChild('fileInput') fileInput;
  importResults: any;
  stationList: any;
  stationDbList: any;
  selectedFile = '';
  isLoading: Boolean = false;
  isSaving: Boolean = false;
  bbNumber: String = '';
  busy: Subscription;

  constructor(private importDataService: ImportDataService) { }

  ngOnInit() { }

  recreateMaterials(materials: any) {
    this.isSaving = true;
    this.busy = this.importDataService.recreateMaterials(materials)
      .finally(() => this.isSaving = false)
      .subscribe(res => {
        materials.created = true;
        // let importResult = this.importResults.find(t => t.bbNumber === res.bbNumber);
        // importResult.created = true;
      });
  }

  importExportedFile() {
    this.isLoading = true;
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append('file', fileBrowser.files[0]);
      this.busy = this.importDataService.importExportedFile(formData)
        .finally(() => this.isLoading = false)
        .subscribe(res => {
          this.importResults = res;
        });
    }
  }

  selectedFileChange(event: any) {
    this.stationList = null;
    this.selectedFile = event.target.value;
  }
}
