import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuardGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const isAuthent = sessionStorage.getItem('isAuthent') != null ?
        sessionStorage.getItem('isAuthent') === 'true' ? true : false
        : false;
      console.log('Status logged : ' + isAuthent);
      return isAuthent;
  }
}
