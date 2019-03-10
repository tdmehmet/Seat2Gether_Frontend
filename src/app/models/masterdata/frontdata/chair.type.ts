export class ChairType {
      lfdnrChairType:number;
      chairtype: string;
      classification:string;
      setupTime: number;
      active: boolean;
      janzList: boolean;
      outsideCompany:string;
      feedback:string;
      referenceTime:number;
      presetTimeReferenceSlot:number;
      group:string;
      upholsteryLine:boolean;
      tbSeatFrame:string;
      colloquial:boolean;
      factorForNumberCalculation:number;
  constructor(value2: number, value3: string, value4: string, value5: number, value6: boolean,
              value7: boolean, value8: string, value9: string, value10: number, value11: number,
              value12: string, value13: boolean, value14: string, value15: boolean, value16: number) {
   this.lfdnrChairType = value2;
   this.chairtype = value3;
   this.classification = value4;
   this.setupTime = value5;
   this.active =  value6;
   this.janzList = value7;
   this.outsideCompany = value8;
   this.feedback = value9;
   this.referenceTime = value10;
   this.presetTimeReferenceSlot = value11;
   this.group = value12;
   this.upholsteryLine = value13;
   this.tbSeatFrame = value14;
   this.colloquial = value15;
   this.factorForNumberCalculation = value16;
  }
}
