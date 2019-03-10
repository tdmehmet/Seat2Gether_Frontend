export class UserRole {
  userId: string;
  roleId: string;
  isSelected: boolean;

  constructor() {
    this.userId = '';
    this.roleId = '';
    this.isSelected = false;
  }
}
