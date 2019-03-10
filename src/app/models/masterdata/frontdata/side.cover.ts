export class SideCover {
  partNumber: string;
  designations: string;
  beltAisleSide: boolean;
  armRest: boolean;

  constructor(partNumber: string, designations: string, beltAisleSide: boolean, armRest: boolean) {
    this.partNumber = partNumber;
    this.designations = designations;
    this.beltAisleSide = beltAisleSide;
    this.armRest = armRest;
  }
}
