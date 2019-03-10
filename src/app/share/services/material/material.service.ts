import { Injectable } from '@angular/core';
import { BaseService } from '../../utils/base.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from "../../../../environments/environment";

@Injectable()
export class MaterialService extends BaseService {

  constructor(http: Http, router: Router) {
    super(http, router);
  }

  getBusMaterials(bbNumber: String) {
    let result$ = this.get('exmaterial/GetMaterialListGroupedByStation/' + bbNumber)
      .map((res: Response) => res.json());

    return result$;
  }
  getBusMaterialsWithoutStation(bbNumber: String) {
    let result$ = this.get('exmaterial/GetMaterialList/' + bbNumber)
      .map((res: Response) => res.json());

    return result$;
  }
  updateMaterial(material: any) {
    let result$ = this.put('exmaterial/UpdateMaterial', material)
      .map((res: Response) => res.json());

    return result$;
  }

  addMaterial(material: any) {
    let result$ = this.post('exmaterial/AddMaterial', material)
      .map((res: Response) => res.json());

    return result$;
  }

  deleteMaterial(materialId: Number) {
    let result$ = this.delete('exmaterial/DeleteMaterial/' + materialId)
      .map((res: Response) => res.json());

    return result$;
  }

  deleteMaterials(bbnumber: String) {
    let result$ = this.delete('exmaterial/DeleteMaterialByBBNumber/' + bbnumber)
      .map((res: Response) => res.json());

    return result$;
  }
}
