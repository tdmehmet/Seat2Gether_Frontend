import { Component, ViewChild } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { MenuService } from '../share/services/menu/menu.service';
import { ErrorModalComponent } from '../share/components/errormodal/error.modal.component';
import { BusyModule } from 'angular2-busy';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
    </footer>
    <ba-back-top position="200"></ba-back-top>
    <div
      [ngBusy]="{busy: busy, message: 'modal.busyMessage' | translate, backdrop: false, delay: 200, minDuration: 600 }">
    </div>
    <errormodal #errormodal></errormodal>
  `
})
export class Pages {

  @ViewChild('errormodal')
  errorModal: ErrorModalComponent;
  @ViewChild('busydiv')
  busyDiv: BusyModule;

  busy: Subscription;

  constructor(private _menuService: BaMenuService, private menuService: MenuService) {
  }

  ngOnInit() {

    this.busy = this.menuService.getUserMenu(sessionStorage.getItem('username')).subscribe(p => {
        let routes: Routes = [];
        routes.push(p);

        this._menuService.updateMenuByRoutes(routes);

      },
      (err) => {
        this.errorModal.openErrorModal(err);
      }
    );
  }

  closeErrorModal() {
    this.errorModal.closeErrorModal();
  }
}
