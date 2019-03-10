import { AuthService } from '../../../share/services/login/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from '../../../models/login/login.user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Seat2GetherBasePage } from '../../basepage/seat2gether.base.page.component';
import { ErrorModalComponent } from '../../../share/components/errormodal/error.modal.component';
import { BusyModule } from 'angular2-busy';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../../../share/services/user/user.service';

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: 'login.html',
})
export class Login implements OnInit{

  @ViewChild('errormodal')
  errorModal: ErrorModalComponent;
  @ViewChild('busydiv')
  busyDiv: BusyModule;
  busy: Subscription;
  error: Object;
  userErrorText: string;

  user: LoginUser = new LoginUser();

  constructor(fb: FormBuilder, private router: Router, private auth: AuthService, private modalService: NgbModal, private userService: UserService) {
    
  }

  ngOnInit() {
  }

  login() {
    this.busy = this.auth.login(this.user).subscribe(
      (data) => {
        sessionStorage.setItem('isAuthenticated', 'true');
        sessionStorage.setItem('username', this.user.UserName);
        sessionStorage.setItem('Authorization', data.json().access_token);
        this.userService.getUserInfo(this.user.UserName).subscribe(
          user => {
            if (user.roles != null && user.roles.length > 0) {
              this.router.navigate(['/dashboard']);
            }else {
              sessionStorage.removeItem('isAuthenticated');
              sessionStorage.removeItem('username');
              sessionStorage.removeItem('Authorization');
              let err = new Error();
              err.message = 'You do not have any menu defined. Please contact with your manager for permissions';
              this.errorModal.openErrorModal(err);
            }
          },
          err => {
            this.errorModal.openErrorModal(err);
          }
        );
      },
      (err) => {
        this.errorModal.openErrorModal(err);
        }
    );
  }
}
