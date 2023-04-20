import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: 'https://accountuat.nssf.gov.kh',
  redirectUri: 'http://localhost:4200/',
  clientId: '2ADA5F1E-357D-401B-92A3-F817C567FEDFO',
  scope: 'openid profile offline_access beneficiary_registration_api registration_api webadmin_api enterprise roles IDCard',
  clearHashAfterLogin: false,
  strictDiscoveryDocumentValidation: false,
  responseType: 'code',
};
