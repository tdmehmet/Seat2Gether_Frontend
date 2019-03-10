export class Belt {
  eb: string;
  designation: string;
  link: string;
  right: string;
  program: string;
  dscharacteristic: string;
  numberofback: number;
  arrangement: number;

  constructor(value1: string, value2: string, value3: string, value4: string, value5: string, value6: string, value7: number, value8: number) {
    this.eb = value1;
    this.designation = value2;
    this.link = value3;
    this.right = value4;
    this.program = value5;
    this.dscharacteristic = value6;
    this.numberofback = value7;
    this.arrangement = value8;
  }
}
