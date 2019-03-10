import { AuthManager } from './app.authmanager';
import { Login } from './pages/login/components/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
    { path: '', component: Login, canActivate: [AuthManager]},
    { path: 'login', component: Login, canActivate: [AuthManager]},
    { path: 'dashboard', redirectTo: 'pages/dashboard', pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
