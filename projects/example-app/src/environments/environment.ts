import { AuthMSALData, AuthMSAL_Internals, AuthMSAL_AD_Data, AuthMSAL_AngularConfiguration } from 'auth-lib';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  baseEndpoint:'http://localhost:3000',
};


export const ADConfigurationVariables = <AuthMSALData>{
  auth: <AuthMSAL_AD_Data>{
    clientId: '<client-id>',
    authority: '<authority>',
    redirectUri: '<redirect-uri>',
    postLogoutRedirectUri: '<post-redirect-uri>',
  },
  internals: <AuthMSAL_Internals>{
    logoutNavigate: 'home'
  },
  angularConfig: <AuthMSAL_AngularConfiguration>{
    consentScopes : [
      "user.read",
      'openid',
      'profile',
      // "api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user"
    ]
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
