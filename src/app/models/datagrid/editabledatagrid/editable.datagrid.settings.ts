import { EditableDatagridAction } from './editabledatagridaction';
import { EditableDatagridAdd } from './editable.datagrid.add';
import { EditableDatagridDelete } from './editable.datagrid.delete';
import { EditableDatagridEdit } from './editable.datagrid.edit';

export class EditableDatagridSettings {

  mode: string;
  actions: EditableDatagridAction;
  add: EditableDatagridAdd;
  edit: EditableDatagridEdit;
  delete: EditableDatagridDelete;
  columns: any;

  constructor(columns: any) {
    this.mode = 'inline';
    this.actions = new EditableDatagridAction();
    this.add = new EditableDatagridAdd();
    this.edit = new EditableDatagridEdit();
    this.delete = new EditableDatagridDelete();
    this.columns = columns;
  }
}
