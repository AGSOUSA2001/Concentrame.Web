import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  
  isLogged = false;

  constructor(private router: Router){
    this.isLogged = JSON.parse(localStorage.getItem('isLogged') || 'false');
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.isLogged){
      void this.router.navigate(['/admin/home']);
    }
    return true;
  }
  
}
