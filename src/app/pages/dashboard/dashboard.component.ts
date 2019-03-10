import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../share/services/user/user.service';
import { ModalComponent } from 'ng2-bs3-modal/components/modal';
import { User } from '../../models/login/user-model';
import {LineChartService} from "./lineChart/lineChart.service";
import {ChartistJsService} from "../charts/components/chartistJs/chartistJs.service";
import Any = jasmine.Any;
import {ErrorModalComponent} from "../../share/components/errormodal/error.modal.component";
import {Router} from "@angular/router";

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;

  user: User = new User();
  userImagePath: string = 'assets/img/users/no-photo.png';

  data: any;
  simpleLineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    series: [
      [20, 20, 12, 45, 50],
      [3, 45, 30, 14, 12],
      [34, 12, 12, 40, 50],

      ]
  };
  simpleLineOptions = {
    color: '#000000',
    fullWidth: true,
    height: '300px',
    chartPadding: {
      right: 40
    }
  };
  constructor(private router: Router, private userService: UserService, private _chartistJsService: ChartistJsService) {
    this.userService.getUserInfo(sessionStorage.getItem('username')).subscribe(
      p => {
        if (p.roles != null && p.roles.length > 0) {
          this.user.userName = p.userName;
          this.user.activated = p.activated;
          this.user.personnelName = p.personnelName;
          this.user.personnelSurname = p.personnelSurname;
          this.user.dateCreated = p.dateCreated;
          sessionStorage.setItem('personnelName', p.personnelName + ' ' + p.personnelSurname);
          this.userImagePath = 'assets/img/users/' + p.userName + '.png';
        }else {
          this.router.navigate(['/login']);
        }
      },
      (err) => {

      }

    );
  }

  public getUserName(): string {
    return this.user.personnelName + ' ' + this.user.personnelSurname;
  }

  ngOnInit() {
    this.data = this._chartistJsService.getAll();
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }

}
