export class EditableDatagridAdd {

  addButtonContent: string;
  saveButtonContent: string;
  cancelButtonContent: string;
  confirmCreate: boolean;

  constructor() {
    this.addButtonContent = '<i class="ion-ios-add-outline"></i>';
    this.saveButtonContent = '<i class="ion-md-checkmark"></i>';
    this.cancelButtonContent = '<i class="ion-md-close"></i>';
    this.confirmCreate = true;
  }

}
