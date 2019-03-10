import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { UserAutocompleteModel } from '../../../../models/usermanagement/User.autocomplete.model';
import { UserService } from '../../../../share/services/user/user.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { User } from '../../../../models/login/user-model';


@Component({
  selector: 'roletransactions',
  templateUrl: './role.transactions.html'
})
export class RoleTransactions implements OnInit{

  @ViewChild('errormodal')
  errorModal: ModalComponent;

  userAutoCompleteList: UserAutocompleteModel[] = [];
  selectedUserList: UserAutocompleteModel[] = [];
  errorText: string;
  error: object;
  data: User[] = [];
  columnDefs = [
    {headerName: 'User Name', field: 'userName'},
    {headerName: 'Name', field: 'personnelName'},
    {headerName: 'Surname', field: 'personnelSurname'}
  ]

  constructor(private router: Router, private userService: UserService) {
    this.userService.findUsers().subscribe(
      p => {
        p.forEach(user => {
          this.data.push(user);
        });

      },
      (err) => {
        this.errorText = 'login.systemerror';
        this.error = err;
        this.errorModal.open();
      }
    );
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }
  /*onUserNameKeyUp(event) {
    this.userAutoCompleteList = [];
    if ( event.target.value.length >= 2 ) {
      this.userService.findUsersStartsWithUserName(event.target.value).subscribe(
        p => {
          p.forEach(user => {
            user.name = user.userName;
            this.userAutoCompleteList.push(user);
          });

        },
        (err) => {
          this.errorText = 'login.systemerror';
          this.error = err;
          this.errorModal.open();
        }
      );
    }
  }*/

  ngOnInit() {

  }



}
