import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthService} from "./share/services/login/auth.service";

@Injectable()
export class AuthManager implements CanActivate {
    constructor(private router: Router, private auth: AuthService) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (next.url[0].path === 'login'){
            if (sessionStorage.getItem('isAuthenticated') === 'true'){
            return false;
            }
            else
            return true;
        }

        if (sessionStorage.getItem('isAuthenticated') === 'true')
        return true;
        this.router.navigate(['/login']);
        return false;
    }
}
