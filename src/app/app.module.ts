import { AuthManager } from "./app.authmanager";
import { NgModule, ApplicationRef } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from "@angularclass/hmr";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ENV_PROVIDERS } from "./environment";
import { routing } from "./app.routing";

import { App } from "./app.component";
import { AppState, InternalStateType } from "./app.service";
import { GlobalState } from "./global.state";
import { DashboardModule } from "./pages/dashboard/dashboard.module";
import { LoginModule } from "./pages/login/login.module";
import { NgaModule } from "./theme/nga.module";
import { PagesModule } from "./pages/pages.module";
import { Seat2GetherErrorModal } from "./pages/components/modal/errormodal/seat2gether.error.modal.component";
import { OrdersModule } from "./pages/orders/orders.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { ErrorService } from "./share/services/error/error.service";
import { AppTranslationModule } from "./app.translation.module";
import { BusyModule } from "angular2-busy";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { DataTableModule } from "angular2-datatable";
import { Ng2Bs3ModalModule } from "ng2-bs3-modal/ng2-bs3-modal";
import { Seat2getherDatagridService } from "./share/services/datagrid/seat2gether.datagrid.service";
import { SwalService } from "./share/utils/swal.service";

// Application wide providers
const APP_PROVIDERS = [AppState, GlobalState];

export type StoreType = {
  state: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [App],
  imports: [
    // import Angular's modules
    CommonModule,
    BrowserAnimationsModule,
    HttpModule,
    AppTranslationModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
    LoginModule,
    routing,
    DashboardModule,
    Ng2Bs3ModalModule,
    DataTableModule,
    Ng2SmartTableModule,
    BusyModule,
    OrdersModule
  ],
  providers: [
    // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    AuthManager,
    ErrorService,
    Seat2getherDatagridService,
    SwalService
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    // console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ("restoreInputValues" in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }
    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(
      cmp => cmp.location.nativeElement
    );
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
