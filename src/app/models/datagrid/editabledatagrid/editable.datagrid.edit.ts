export class EditableDatagridEdit {

  editButtonContent: string;
  saveButtonContent: string;
  cancelButtonContent: string;
  confirmSave: boolean;

  constructor() {
    this.editButtonContent = '<i class="ion-md-create"></i>';
    this.saveButtonContent = '<i class="ion-md-checkmark"></i>';
    this.cancelButtonContent = '<i class="ion-md-close"></i>';
    this.confirmSave = true;
  }

}
