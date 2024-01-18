export interface Environment {
  production: boolean;

  apiUser: string;

  cognitoUserPoolId: string;
  cognitoAppClientId: string;
}
