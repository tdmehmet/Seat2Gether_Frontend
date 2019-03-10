import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule' },
      { path: 'usermanagement', loadChildren: 'app/pages/usermanagement/user.management.module#UserManagementModule' },
      { path: 'masterdata', loadChildren: 'app/pages/masterdata/master.data.module#MasterDataModule' },
      { path: 'busmanagement', loadChildren: 'app/pages/busmanagement/bus.management.module#BusManagementModule' },
      { path: 'orders', loadChildren: 'app/pages/orders/orders.module#OrdersModule' },
      { path: 'reports', loadChildren: 'app/pages/reports/reports.module#ReportsModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
