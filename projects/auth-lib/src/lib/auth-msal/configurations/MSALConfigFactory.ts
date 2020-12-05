import { Configuration } from 'msal';
import { AuthMsalDataConfiguration } from './AuthMsalDataConfiguration';

export const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

export function MSALConfigFactory(dataConfig: AuthMsalDataConfiguration ): Configuration {
    return {
      auth: {
        clientId: dataConfig.auth.clientId,
        authority: dataConfig.auth.authority,
        validateAuthority: true,
        redirectUri: dataConfig.auth.redirectUri,
        postLogoutRedirectUri: dataConfig.auth.postLogoutRedirectUri,
        navigateToLoginRequestUrl: true,
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: isIE, // set to true for IE 11
      },
    };
  }