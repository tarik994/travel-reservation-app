import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './User.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private userService:UserService, private router:Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(!this.userService.loggedUser.id){
            this.router.navigateByUrl('');
            return false;
        }
        return true;
    }
}