export class EditableDatagridAction {

  columnTitle: string;
  add: boolean;
  edit: boolean;
  delete: boolean;
  position: string;

  constructor() {
    this.columnTitle = 'Action';
    this.add = true;
    this.edit = true;
    this.delete = true;
    this.position = 'left';
  }

}
