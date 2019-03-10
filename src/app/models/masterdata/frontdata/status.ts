/**
 * Created by ocelikk on 7/24/2017.
 */
export class Status {
  lfdnrStatus: number;
  statusValue: string;

  constructor(buttonValue: number, buttonName: string) {
    this.lfdnrStatus = buttonValue;
    this.statusValue = buttonName;
  }
}
