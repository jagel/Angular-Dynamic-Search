import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { AuthMsalDataConfiguration } from '../configurations/AuthMsalDataConfiguration';

@Injectable({
  providedIn: 'root'
})
export class AuthMsalGuard implements CanActivate{

  logoutNavigation = '/home'

  constructor(
    private router: Router,
    private msalGuard : MsalGuard,
    private dataConfiguration : AuthMsalDataConfiguration
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    return new Promise<boolean>((resolve,reject)=>{
      let msalGuard : Promise<boolean> = <Promise<boolean>>this.msalGuard.canActivate(route, state);
      msalGuard.then(authenticated =>{
        if(!authenticated)
          this.router.navigate([this.dataConfiguration.internals.logoutNavigate]);
        resolve(authenticated);
      })
      .catch(error => {
        this.router.navigate([this.dataConfiguration.internals.logoutNavigate]);
        console.error('authError',error);
        resolve(false);
      });
    });
  }
}