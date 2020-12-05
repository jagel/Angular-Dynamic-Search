import { AuthMSALData, AuthMSAL_Internals, AuthMSAL_AD_Data, AuthMSAL_AngularConfiguration } from 'auth-lib';

export const environment = {
  production: true,
  baseEndpoint:""
};

export const ADConfigurationVariables = <AuthMSALData>{
  auth: <AuthMSAL_AD_Data>{
    clientId: '<production-client-id>',
    authority: '<production-authority>',
    redirectUri: '<production-redirect-uri>',
    postLogoutRedirectUri: '<production-post-redirect-uri>',
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

