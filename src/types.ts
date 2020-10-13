export interface Configuration {
  account: string;
  apiVersion: "2019_2";
  token: {
    consumerKey: string;
    consumerSecret: string;
    tokenKey: string;
    tokenSecret: string;
  };
}
