import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MsalModule,
  MsalInterceptor,
  MSAL_CONFIG,
  MSAL_CONFIG_ANGULAR,
  MsalService
} from '@azure/msal-angular';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MSALConfigFactory } from './configurations/MSALConfigFactory'
import { MSALAngularConfigFactory } from './configurations/MSALAngularConfigFactory'
import { AuthMsalDataConfiguration } from './configurations/AuthMsalDataConfiguration';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MsalModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_CONFIG,
      useFactory: MSALConfigFactory,
      deps:[AuthMsalDataConfiguration]
    },
    {
      provide: MSAL_CONFIG_ANGULAR,
      useFactory: MSALAngularConfigFactory,
      deps:[AuthMsalDataConfiguration]
    },
    MsalService
  ],
})
export class AuthMsalModule { 
  static forRoot(
    dataConfiguration : AuthMsalDataConfiguration
  ): ModuleWithProviders {
    return {
      ngModule: AuthMsalModule,
      providers: [
        { provide: AuthMsalDataConfiguration, useValue: dataConfiguration },
      ]
    };
  }
}
