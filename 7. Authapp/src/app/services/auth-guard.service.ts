import { Injectable } from '@angular/core';
import {Router,
        ActivatedRouteSnapshot,
        RouterStateSnapshot,
        CanActivate} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private auth:AuthService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log(next);
    if(this.auth.isAuthenticated()){
      console.log("Pasó el guard");
      return true;
    }else{
      console.log("Bloqueo el guard");
      return false;
    }

  }

}
