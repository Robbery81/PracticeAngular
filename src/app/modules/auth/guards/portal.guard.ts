import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class PortalGuard implements CanActivate{
  public token = localStorage.getItem('token');

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.token) {
      this.router.navigateByUrl('/');
      return false;
    }

    return true;
  }
}