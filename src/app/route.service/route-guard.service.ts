import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../authService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private router: Router, private service: AuthService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.service.isLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['login']);
    }


  }
}
