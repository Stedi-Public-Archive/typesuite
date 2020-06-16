import got, { Got, RequestError, Response } from "got";
import Request from "got/dist/source/core"; // Really, got?
import { createHmac, randomBytes } from "crypto";
import {
  GetRequest,
  GetResponse,
  SearchRequest,
  SearchResponse
} from "./netsuite_webservices/2019_2/platform_messages";
import { UnexpectedErrorFault } from "./netsuite_webservices/2019_2/platform_faults";
import { TransactionSearchBasic } from "./netsuite_webservices/2019_2/platform_common";
import { TokenPassport } from "./netsuite_webservices/2019_2/platform_core";
import { SoapMapper } from "./soapMapper";

export interface Configuration {
  account: string,
  apiVersion: string,
  token: {
    consumerKey: string,
    consumerSecret: string,
    tokenKey: string,
    tokenSecret: string,
  },
  queryTerms?: TransactionSearchBasic,
}

export class TypeSuiteClient implements NetSuiteClient {
  private readonly config: Configuration;
  private readonly endpoint: string;
  private readonly gotClient: Got;

  constructor(config: Configuration) {
    this.config = config;
    const account = config.account.replace("_", "-");
    this.endpoint = `https://${account}.suitetalk.api.netsuite.com/services/NetSuitePort_${config.apiVersion}`;
    this.gotClient = got.extend({
      headers: { contentType: "text/xml; charset=UTF-8" },
    });
  }

  get(request: GetRequest): Promise<GetResponse | UnexpectedErrorFault> {
    const authToken = this.authenticateRequestWithTokenPassport();
    const soapXML = SoapMapper.serializeSoapRequest(authToken, request);
    return this.gotClient.post(this.endpoint, { headers: { SOAPAction: "get" }, body: soapXML })
      .then((response: Response<string>) => {
        this.logLastRequest(response.request);
        const soapObj: any = SoapMapper.deserializeSoapResponse(response.body);
        return soapObj.value.body.any[0].value;
      })
      .catch((error: RequestError) => {
        this.logLastRequest(error.request);
        return error;
      });
  }

  search(request: SearchRequest): Promise<SearchResponse | UnexpectedErrorFault> {
    const authToken = this.authenticateRequestWithTokenPassport();
    const soapXML = SoapMapper.serializeSoapRequest(authToken, request);
    return this.gotClient.post(this.endpoint, { headers: { SOAPAction: "search" }, body: soapXML })
      .then((response: Response<string>) => {
        this.logLastRequest(response.request);
        const soapObj: any = SoapMapper.deserializeSoapResponse(response.body);
        return soapObj.value.body.any[0].value;
      })
      .catch((error: RequestError) => {
        this.logLastRequest(error.request);
        return error;
      });
  }

  private authenticateRequestWithTokenPassport(): TokenPassport {
    const config = this.config;
    const nonce = randomBytes(18).toString('hex');
    const timeStamp = Math.round((new Date()).getTime() / 1000);
    const baseString = [config.account, config.token.consumerKey, config.token.tokenKey, nonce, timeStamp]
      .join("&");
    const base64hash = createHmac("sha256", `${config.token.consumerSecret}&${config.token.tokenSecret}`)
      .update(baseString)
      .digest("base64");

    return new TokenPassport({
      account: config.account,
      consumerKey: config.token.consumerKey,
      nonce: nonce,
      timestamp: timeStamp,
      token: config.token.tokenKey,
      signature: {
        algorithm: "HMAC_SHA256",
        value: base64hash,
      }
    });
  }

  private logLastRequest(_request?: Request) {
    // console.log("Last request:\n%s\n", _request);
  }
}

interface NetSuiteClient {
  // login: () => void;
  // ssoLogin: () => void;
  // mapSso: () => void;
  // changePassword: () => void;
  // changeEmail: () => void;
  // logout: () => void;
  // add: () => void;
  // delete: () => void;
  search: (request: SearchRequest) => Promise<SearchResponse | UnexpectedErrorFault>;
  // searchMore: () => void;
  // searchMoreWithId: () => void;
  // searchNext: () => void;
  // update: () => void;
  // upsert: () => void;
  // addList: () => void;
  // deleteList: () => void;
  // updateList: () => void;
  // upsertList: () => void;
  // get: (input: IgetInput, cb: (err: any | null, result: IgetOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
  get: (request: GetRequest) => Promise<GetResponse | UnexpectedErrorFault>;
  // getList: () => void;
  // getAll: () => void;
  // getSavedSearch: () => void;
  // getCustomizationId: () => void;
  // initialize: () => void;
  // initializeList: () => void;
  // getSelectValue: () => void;
  // getItemAvailability: () => void;
  // getBudgetExchangeRate: () => void;
  // getCurrencyRate: () => void;
  // getDataCenterUrls: () => void;
  // getPostingTransactionSummary: () => void;
  // getServerTime: () => void;
  // attach: () => void;
  // detach: () => void;
  // updateInviteeStatus: () => void;
  // updateInviteeStatusList: () => void;
  // asyncAddList: () => void;
  // asyncUpdateList: () => void;
  // asyncUpsertList: () => void;
  // asyncDeleteList: () => void;
  // asyncGetList: () => void;
  // asyncInitializeList: () => void;
  // asyncSearch: () => void;
  // getAsyncResult: () => void;
  // checkAsyncStatus: () => void;
  // getDeleted: () => void;
}
