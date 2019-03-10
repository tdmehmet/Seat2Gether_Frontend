
export class MaterialMaster {
  lfdnrMaterial: number;
  partNumber: string;
  designation: string;
  position: string;
  lfdnrCharacteristic: number;
  standardTimeInMinute: number; /** Must be double */
  vzko: number; /** Must be double */
  vzbw: number; /** Must be double */
  VZEL: number; /** Must be double */
  VZAZ: number; /** Must be double */
  VZVS: number; /** Must be double */
  VZMO: number; /** Must be double */
  VZAL: number; /** Must be double */
  VZGF: number; /** Must be double */
  standart: boolean;
  active: boolean;
  createdBy: string;
  createdOn: string;  /** Must be date */
  alteredFrom: string;
  changedOn: string; /** Must be date */
  bulkGood: boolean;
  numberAdditionalShare: number;
  background: string;
  foreground: string;
  posX: number;
  posY: number;
  picture: string;
  acquisitionVariation: string;
  partNumberWithout: string;

  constructor(value1: number, value2: string, value3: string, value4: string,
              value5: number, value6: number, value7: number, value8: number,
              value9: number, value10: number, value11: number, value12: number,
              value13: number, value14: number, value15: boolean, value16: boolean,
              value17: string, value18: string, value19: string, value20: string,
              value21: boolean, value22: number, value23: string, value24: string,
              value25: number, value26: number, value27: string, value28: string, value29: string) {
    this.lfdnrMaterial = value1;
    this.partNumber = value2;
    this.designation = value3;
    this.position = value4;
    this.lfdnrCharacteristic = value5;
    this.standardTimeInMinute = value6;
    this.vzko = value7;
    this.vzbw = value8;
    this.VZEL = value9;
    this.VZAZ = value10;
    this.VZVS = value11;
    this.VZMO = value12;
    this.VZAL = value13;
    this.VZGF = value14;
    this.standart = value15;
    this.active = value16;
    this.createdBy = value17;
    this.createdOn = value18;
    this.alteredFrom = value19;
    this.changedOn = value20;
    this.bulkGood = value21;
    this.numberAdditionalShare = value22;
    this.background = value23;
    this.foreground = value24;
    this.posX = value25;
    this.posY = value26;
    this.picture = value27;
    this.acquisitionVariation = value28;
    this.partNumberWithout = value29;
  }
}
