export class Vehicle {

  id: number;
  bbNumber: string;
  typeId: number;
  country: string;
  modelId: number;

  constructor(id: number, bbNumber: string, typeId: number, country: string, modelId: number) {
    this.id = id;
    this.bbNumber = bbNumber;
    this.typeId = typeId;
    this.country = country;
    this.modelId = modelId;
  }
}
