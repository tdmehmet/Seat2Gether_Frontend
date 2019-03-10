export class DatagridColumn {

  title: string;
  type: string;
  editable: boolean;
  sort: boolean;

  constructor(title: string, type: string, editable: boolean, sort: boolean) {
    this.title = title;
    this.type = type;
    this.editable = editable;
    this.sort = sort;
  }
}
