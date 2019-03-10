import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { StationService } from "../../../../../share/services/station/station.service";
import { SwalService } from "../../../../../share/utils/swal.service";

@Component({
  selector: "app-station-list",
  templateUrl: "./station-list.component.html",
  styleUrls: ["./station-list.component.css"]
})
export class StationList implements OnInit {
  @Input() stationList: any;
  @Input() isEditable: Boolean = true;

  constructor(
    private stationService: StationService,
    private swalService: SwalService
  ) {}

  ngOnInit() {}

  updateStationName(station: any) {
    this.swalService.showConfirm(
      () => {
        this.stationService.updateStationName(station).subscribe(res => {
          this.swalService.showSuccessMessage(
            "Başarılı",
            "İstasyon güncellendi."
          );
          station.editable = false;
        });
      },
      "Dikkat!",
      "Seçilen istasyon güncellenecektir. Onaylıyor musunuz?"
    );
  }
}
