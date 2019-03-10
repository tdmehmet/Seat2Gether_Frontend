export class AdditionalDisclosure {
  lfdnrSpecification: number;
  specification: string;
  standardTime: number;
  constructor(lfdnrSpecification: number, specification: string, standardTime: number) {
    this.lfdnrSpecification = lfdnrSpecification;
    this.specification = specification;
    this.standardTime = standardTime;
  }
}
