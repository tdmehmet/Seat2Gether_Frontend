export class WallConnection {
  partNumber: string;
  characteristic: number;

  constructor(value1: string, value2: number) {
    this.partNumber = value1;
    this.characteristic = value2;
  }
}
