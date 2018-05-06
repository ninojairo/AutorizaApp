import { Injectable } from '@angular/core';
import {
        Router,
        ActivatedRouteSnapshot,
        RouterStateSnapshot,
        CanActivate} from '@angular/router';

import { AuthService} from '../services/auth.service'


@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    
    console.log(next);
    if(this.authService.isAuthenticated){
      console.log("Paso el guard");
      return true;
    }
    else{
      console.error("NO Paso el guard");
      return false;
    }

    
    
  }

}
