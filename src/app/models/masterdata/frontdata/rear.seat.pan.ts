export class RearSeatPan {
  partNumber: string;
  narrow: number;
  characteristic: number;
  remark: string;

  constructor(value1: string, value2: number, value3: number, value4: string) {
    this.partNumber = value1;
    this.narrow = value2;
    this.characteristic = value3;
    this.remark = value4;
  }
}
