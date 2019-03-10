export class RichDatagridColumn<T> {

  headerName: string;
  field: string;
  cellRendererFramework: T;

  constructor(headerName: string, field: string) {
    this.headerName = headerName;
    this.field = field;
  }
}
