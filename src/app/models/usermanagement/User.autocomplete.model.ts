export class UserAutocompleteModel {
  personnelName: string;
  personnelSurname: string;
  userName: string;
  dateCreated: Date;
  activated: boolean;
  name: string;

  constructor() {
    this.userName = '';
    this.personnelName = '';
    this.personnelSurname = '';
    this.dateCreated = null;
    this.activated = false;
    this.name = this.userName;
  }
}
