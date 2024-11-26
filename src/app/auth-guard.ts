import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import moment from 'moment';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('id_token');
    const expires_at = localStorage.getItem('expires_at');

    if (token && expires_at) {
      const expirationTime = moment.unix(Number(expires_at));
      const currentTime = moment();

      if (currentTime.isBefore(expirationTime)) {
        return true;
      } else {
        localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      this.router.navigate(['/login']);
      return false;
    }
}}