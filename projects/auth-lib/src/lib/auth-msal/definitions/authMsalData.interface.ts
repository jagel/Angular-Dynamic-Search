export interface AuthMSALData{
    auth: AuthMSAL_AD_Data;
    internals: AuthMSAL_Internals;
    angularConfig:AuthMSAL_AngularConfiguration;
}

export interface AuthMSAL_AD_Data {
    clientId: string;
    authority: string;
    redirectUri: string,
    postLogoutRedirectUri: string,
}

export interface AuthMSAL_Internals{
    logoutNavigate:string;
}
export interface AuthMSAL_AngularConfiguration{
    consentScopes : string[];
}