import { Component, OnInit } from "@angular/core";
import { clone, sortBy, groupBy, map, mapValues } from "lodash";
import { MaterialService } from "../../../../share/services/material/material.service";
import { ActivatedRoute, Params } from "@angular/router";
import swal from "sweetalert2";
import { SwalService } from "../../../../share/utils/swal.service";

@Component({
  selector: "app-busseat",
  templateUrl: "./busseat.html",
  styleUrls: ["./busseat.scss"]
})
export class BusSeat implements OnInit {
  bbNumber: string = "";
  multiSelect: Boolean = false;
  moveSelect: Boolean = false;
  selectedSeatRow: Number;
  selectedSeatColumn: Number;
  activeSeat: String;
  materialList: any[] = [];
  seatMaterialList: Array<any> = [];
  seatColumns = ["A", "B", "C", "D"];
  seatRows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  selectedSeatList: Seat[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private materialSevice: MaterialService,
    private swalService: SwalService
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.bbNumber = params["bbNumber"];
    });
  }
  ngOnInit() {
    this.materialSevice
      .getBusMaterialsWithoutStation(this.bbNumber)
      .subscribe((res: any[]) => {
        res.forEach(mat => {
          mat.quantityReadOnly = mat.quantity;
        });
        this.materialList = res;
      });
  }
  multiSelectChanged() {
    this.selectedSeatList = [];
  }
  moveSelectChanged() {
    this.multiSelect = true;
  }

  isSeatSelected(activeSeat: string) {
    return (
      this.selectedSeatList.findIndex(t => t.seatNumber === activeSeat) !== -1
    );
  }

  selectSeat(activeSeat: string) {
    const currSeatIndex = this.selectedSeatList.findIndex(
      t => t.seatNumber === activeSeat
    );
    if (currSeatIndex === -1) {
      if (this.multiSelect === false) this.selectedSeatList = [];
      this.selectedSeatList.push({ seatNumber: activeSeat });
    } else {
      this.selectedSeatList.splice(currSeatIndex, 1);
    }
  }

  selectSeatMouseOver(event, activeSeat: string) {
    if (event.ctrlKey && (!this.moveSelect || !this.multiSelect)) {
      this.moveSelect = true;
      this.multiSelect = true;
    }
    if (this.moveSelect && event.ctrlKey) {
      const currSeatIndex = this.selectedSeatList.findIndex(
        t => t.seatNumber === activeSeat
      );
      if (currSeatIndex === -1) {
        if (this.multiSelect === false) this.selectedSeatList = [];
        this.selectedSeatList.push({ seatNumber: activeSeat });
      } else {
        this.selectedSeatList.splice(currSeatIndex, 1);
      }
    }
  }

  addMaterialToSeat(material) {
    material.quantity -= this.selectedSeatList.length;

    this.selectedSeatList.forEach(element => {
      const hasMaterial = this.seatMaterialList.find(
        m => m.id === material.id && m.seatCode === element.seatNumber
      );
      if (hasMaterial === undefined) {
        const copyModel = clone(material);
        copyModel.seatCode = element.seatNumber;
        copyModel.quantity = 1;
        this.seatMaterialList.push(copyModel);
      } else {
        hasMaterial.quantity += 1;
      }
    });
    //this.seatMaterialList = sortBy(this.seatMaterialList, ['seatCode']);
  }
  removeMaterialFromSeat(seatMaterial) {
    const material = this.materialList.find(m => m.id === seatMaterial.id);
    material.quantity += 1;
    seatMaterial.quantity -= 1;
    if (seatMaterial.quantity === 0) {
      const index = this.seatMaterialList.findIndex(
        t => t.id === seatMaterial.id && t.seatCode === seatMaterial.seatCode
      );
      this.seatMaterialList.splice(index, 1);
    }
  }
  removeAllSeatMaterial() {
    this.swalService.showConfirm(() => {
      const cloneSeatMaterialList = clone(this.seatMaterialList);
      cloneSeatMaterialList.forEach(material => {
        const currentMaterial = this.materialList.find(
          m => m.id === material.id
        );
        currentMaterial.quantity += material.quantity;
      });
      this.selectedSeatList = [];
      this.seatMaterialList = [];
    });
  }
  seatComplated(id, seatCode): Boolean {
    const seat = this.seatMaterialList.find(
      t => t.id === id && t.seatCode === seatCode
    );

    return seat && seat.complated;
  }
  getSeatMaterialCount(seatCode: string): number {
    const selectedSeatMaterialList = this.seatMaterialList.filter(material => {
      return material.seatCode === seatCode;
    });
    let sum = selectedSeatMaterialList.reduce((s, a) => {
      return s + a.quantity;
    }, 0);
    return sum;
  }
  getSelectedSeatMaterialList() {
    if (this.selectedSeatList.length === 0) return this.seatMaterialList;

    const selectedSeatMaterialList = this.seatMaterialList.filter(material => {
      return (
        this.selectedSeatList.findIndex(
          t => t.seatNumber === material.seatCode
        ) !== -1
      );
    });

    return selectedSeatMaterialList;
  }

  // getGrouppedAllSeatMaterial() {
  //   const grouppedObj = groupBy(this.seatMaterialList, 'seatCode');
  //   const grouppedList = map(grouppedObj, (v, p) => {
  //     return { p, v };
  //   });

  //   if (this.selectedSeatList.length === 0) return grouppedList;

  //   const selectedSeatMaterialList = grouppedList.filter(material => {
  //     return this.selectedSeatList.findIndex(t => t.seatNumber === material.p) !== -1;
  //   });

  //   return selectedSeatMaterialList;
  // }
}

export interface Seat {
  seatNumber: string;
}
