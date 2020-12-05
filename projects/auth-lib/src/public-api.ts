/*
 * Public API Surface of auth-lib
 */

 // MSAL authentication
 
export * from './lib/auth-msal/auth-msal.module';
export * from './lib/auth-msal/guards/auth-msal-guard.service';

export * from './lib/auth-msal/configurations/AuthMsalDataConfiguration'
export * from './lib/auth-msal/definitions/authMsalData.interface'