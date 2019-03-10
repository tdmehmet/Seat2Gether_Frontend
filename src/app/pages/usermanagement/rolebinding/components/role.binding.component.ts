import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../share/services/user/user.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { User } from '../../../../models/login/user-model';
import { RoleService } from '../../../../share/services/role/role.service';
import { Role } from '../../../../models/role/role.model';
import { UserRole } from '../../../../models/role/user.role.model';
import { Subscription } from 'rxjs/Subscription';
import { BusyModule } from 'angular2-busy';
import { ErrorModalComponent } from '../../../../share/components/errormodal/error.modal.component';
import { SuccessModalComponent } from '../../../../share/components/successmodal/success.modal.component';
import 'style-loader!./role.binding.scss';

@Component({
  selector: 'rolebinding',
  templateUrl: './role.binding.html'
})
export class RoleBinding implements OnInit{

  @ViewChild('errormodal')
  errorModal: ErrorModalComponent;
  @ViewChild('successmodal')
  successModal: SuccessModalComponent;
  @ViewChild('userdetails')
  userDetailModal: ModalComponent;
  @ViewChild('busydiv')
  busyDiv: BusyModule;

  busy: Subscription;
  userDetail: User = new User();
  roleList: Role[] = [];
  searchUser: User = new User();
  private userList: User[] = [];


  constructor(  private userService: UserService,
                private roleService: RoleService) {

  }

  ngOnInit() {
    this.busy = this.userService.findUsers().subscribe( userList => {
        this.userList = userList;
        this.roleService.findRoles().subscribe(r => {
            this.roleList = r;
          },
          (err) => {
            this.errorModal.openErrorModal(err);
          }
        );
      },
      (err) => {
        this.errorModal.openErrorModal(err);
      }
    );
  }

  onEditClicked(item: User): void {
    let userName: string = item == null ? 'null' : item.userName;
    console.log('USER NAME : ' + userName);
    console.log('USER NAME : ' + item.userName);
    this.userService.getUserInfo(userName).subscribe(user => {
        this.userDetail = new User();
        this.userDetail.userName = user.userName;
        this.userDetail.roles = user.roles;
        this.userDetail.id = user.id;
        this.userDetail.activated = user.activated;
        this.userDetail.dateCreated = user.dateCreated;
        this.userDetail.email = user.email;
        this.userDetail.personnelName = user.personnelName;
        this.userDetail.personnelSurname = user.personnelSurname;
        this.userDetail.phoneNumber = user.phoneNumber;
        if (user == null) {
          console.log('USER NOT FOUND');
          return;
        }
        this.setActiveRoles();
        this.userDetailModal.open();
      },
      (err) => {
        this.errorModal.openErrorModal(err);
      }
    );
  }


  setActiveRoles() {
    this.roleList.forEach(r => r.selected = false);
    if (this.userDetail.roles == null) {
      this.userDetail.roles = [];
      return;
    }
    this.roleService.findRoles().subscribe(r => {
        this.roleList = r;
        this.userDetail.roles.forEach(ur => {
          this.roleList.forEach(or => {
            if (ur.roleId === or.id) {
              or.selected = true;
            }
          });
        });
      },
      (err) => {
        this.errorModal.openErrorModal(err);
      }
    );
  }

  onSearchClicked(): void {
    this.busy = this.userService.findUsersByUserBody(this.searchUser,
       sessionStorage.getItem('username')
    ).subscribe(userList => {
     this.userList = userList;
    },
      (err) => {
        this.errorModal.openErrorModal(err);
      });
  }

  onErrorModalCloseClicked(): void {
    this.errorModal.closeErrorModal();
  }

  onUserDetailsModalCloseClicked(): void {
    this.userDetailModal.close();
  }

  onUserDetailsModalSaveClicked(): void {
    this.userDetail.roles = [];
    this.roleList.forEach(r => {
      if (r.selected) {
        let userRole: UserRole = new UserRole();
        userRole.roleId = r.id;
        userRole.userId = this.userDetail.id;
        this.userDetail.roles.push(userRole);
      }
    });
    this.userService.addUserWithRoles(this.userDetail).subscribe(x => {
      this.userDetailModal.close();
      this.successModal.openSuccessModal();
    },
      (err) => {
        this.userDetailModal.close();
        this.errorModal.openErrorModal(err);
      }
    );
  }

  onResetClicked() {
    this.searchUser = new User();
    this.userList = [];
  }
}
