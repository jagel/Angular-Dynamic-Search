import { AuthMSALData, AuthMSAL_AD_Data, AuthMSAL_AngularConfiguration, AuthMSAL_Internals } from '../definitions/authMsalData.interface';

export class AuthMsalDataConfiguration implements AuthMSALData{
    auth: AuthMSAL_AD_Data;
    internals: AuthMSAL_Internals;
    angularConfig: AuthMSAL_AngularConfiguration;
}
