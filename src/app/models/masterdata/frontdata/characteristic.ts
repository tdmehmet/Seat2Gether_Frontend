/**
 * Created by ocelikk on 8/03/2017.
 */
export class Characteristic {
  lfdnrCharacteristic: number;
  characteristicValue: string;
  area: string;
  sort: number;

  constructor(value1: number, value2: string, value3: string, value4: number) {
    this.lfdnrCharacteristic = value1;
    this.characteristicValue = value2;
    this.area = value3;
    this.sort = value4;
  }
}
