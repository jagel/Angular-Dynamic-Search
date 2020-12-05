import { isIE } from "./MSALConfigFactory";
import { MsalAngularConfiguration } from '@azure/msal-angular';
import { AuthMsalDataConfiguration } from './AuthMsalDataConfiguration';
  
export const protectedResourceMap: [string, string[]][] = [
    ['https://graph.microsoft.com/v1.0/me', ['user.read']]
  ];

export function MSALAngularConfigFactory(dataConfig: AuthMsalDataConfiguration): MsalAngularConfiguration {
    return {
      popUp: !isIE,
      consentScopes: dataConfig.angularConfig.consentScopes,
      unprotectedResources: [],
      protectedResourceMap,
      extraQueryParameters: {}
    };
  }