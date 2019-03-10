export class LateralAdjustment {
  eb: string;
  designation: string;
  lateralAdjustmentLI: boolean;
  lateralAdjustmentRE: boolean;
  gauge: string;

  constructor(value1: string, value2: string, value3: boolean, value4: boolean, value5: string) {
    this.eb = value1;
    this.designation = value2;
    this.lateralAdjustmentLI = value3;
    this.lateralAdjustmentRE = value4;
    this.gauge = value5;
  }
}
