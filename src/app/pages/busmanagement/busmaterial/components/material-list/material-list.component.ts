import { Component, OnInit, Input } from "@angular/core";
import { MaterialService } from "../../../../../share/services/material/material.service";
import { SwalService } from "../../../../../share/utils/swal.service";

@Component({
  selector: "app-material-list",
  templateUrl: "./material-list.component.html",
  styleUrls: ["./material-list.component.css"]
})
export class MaterialList implements OnInit {
  @Input() materialList: any;

  constructor(
    private materialService: MaterialService,
    private swalService: SwalService
  ) {}

  ngOnInit() {}

  updateMaterial(material: any) {
    this.swalService.showConfirm(
      () => {
        this.materialService.updateMaterial(material).subscribe(res => {
          material.show = false;
        });
      },
      "Dikkat!",
      "Seçilen malzeme güncellenecektir. Onaylıyor musunuz?"
    );
  }

  deleteMaterial(materialId: Number) {
    this.swalService.showConfirm(
      () => {
        this.materialService.deleteMaterial(materialId).subscribe(res => {
          const deletedIndex = this.materialList.findIndex(
            t => t.id === materialId
          );
          this.materialList.splice(deletedIndex, 1);
          this.swalService.showSuccessMessage("Başarılı", "Malzeme Silindi");
        });
      },
      "Dikkat!",
      "Seçilen malzeme silinecektir. Onaylıyor musunuz?"
    );
  }
}
