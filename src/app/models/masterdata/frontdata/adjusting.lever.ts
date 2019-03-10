export class AdjustingLever {
  partNumber: string;
  numberOfBlocking: number;
  designation: string;
  page: string;

  constructor(partNumber: string, numberOfBlocking: number, designation: string, page: string) {
    this.partNumber = partNumber;
    this.numberOfBlocking = numberOfBlocking;
    this.designation = designation;
    this.page = page;
  }
}
