import got, { Got } from "got";
import Request from "got/dist/source/core"; // Really, got?
import { createHmac, randomBytes } from "crypto";
import {
  AddListRequest,
  AddListResponse,
  AddRequest,
  AddResponse,
  AsyncAddListRequest,
  AsyncDeleteListRequest,
  AsyncGetListRequest,
  AsyncInitializeListRequest,
  AsyncSearchRequest,
  AsyncStatusResponse,
  AsyncUpdateListRequest,
  AsyncUpsertListRequest,
  AttachRequest,
  AttachResponse,
  ChangeEmailRequest,
  ChangeEmailResponse,
  ChangePasswordRequest,
  ChangePasswordResponse,
  CheckAsyncStatusRequest,
  DeleteListRequest,
  DeleteListResponse,
  DeleteRequest,
  DeleteResponse,
  DetachRequest,
  DetachResponse,
  GetAllRequest,
  GetAllResponse,
  GetAsyncResultRequest,
  GetAsyncResultResponse,
  GetBudgetExchangeRateRequest,
  GetBudgetExchangeRateResponse,
  GetCurrencyRateRequest,
  GetCurrencyRateResponse,
  GetCustomizationIdRequest,
  GetCustomizationIdResponse,
  GetDataCenterUrlsRequest,
  GetDataCenterUrlsResponse,
  GetDeletedRequest,
  GetDeletedResponse,
  GetItemAvailabilityRequest,
  GetItemAvailabilityResponse,
  GetListRequest,
  GetListResponse,
  GetPostingTransactionSummaryRequest,
  GetPostingTransactionSummaryResponse,
  GetRequest,
  GetResponse,
  GetSavedSearchRequest,
  GetSavedSearchResponse,
  GetSelectValueRequest,
  GetSelectValueResponse,
  GetServerTimeRequest,
  GetServerTimeResponse,
  InitializeListRequest,
  InitializeListResponse,
  InitializeRequest,
  InitializeResponse,
  LoginRequest,
  LoginResponse,
  LogoutRequest,
  LogoutResponse,
  MapSsoRequest,
  MapSsoResponse,
  SearchMoreRequest,
  SearchMoreResponse,
  SearchMoreWithIdRequest,
  SearchMoreWithIdResponse,
  SearchNextRequest,
  SearchNextResponse,
  SearchRequest,
  SearchResponse,
  SsoLoginRequest,
  SsoLoginResponse,
  UpdateInviteeStatusListRequest,
  UpdateInviteeStatusListResponse,
  UpdateInviteeStatusRequest,
  UpdateInviteeStatusResponse,
  UpdateListRequest,
  UpdateListResponse,
  UpdateRequest,
  UpdateResponse,
  UpsertListRequest,
  UpsertListResponse,
  UpsertRequest,
  UpsertResponse,
} from "./netsuite_webservices/2019_2/platform_messages";
import {
  AsyncFault,
  ExceededConcurrentRequestLimitFault,
  ExceededRecordCountFault,
  ExceededRequestLimitFault,
  ExceededRequestSizeFault,
  ExceededUsageLimitFault,
  InsufficientPermissionFault,
  InvalidAccountFault,
  InvalidCredentialsFault,
  InvalidSessionFault,
  InvalidVersionFault,
  UnexpectedErrorFault,
} from "./netsuite_webservices/2019_2/platform_faults";
import { TokenPassport } from "./netsuite_webservices/2019_2/platform_core";
import { serializeSoapRequest, deserializeSoapResponse } from "./soap-mapper";

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

  add(
    request: AddRequest
  ): Promise<
    | AddResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "add");
  }

  addList(
    request: AddListRequest
  ): Promise<
    | AddListResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "addList");
  }

  asyncAddList(
    request: AsyncAddListRequest
  ): Promise<
    | AsyncStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "asyncAddList");
  }

  asyncDeleteList(
    request: AsyncDeleteListRequest
  ): Promise<
    | AsyncStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "asyncDeleteList");
  }

  asyncGetList(
    request: AsyncGetListRequest
  ): Promise<
    | AsyncStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "asyncGetList");
  }

  asyncInitializeList(
    request: AsyncInitializeListRequest
  ): Promise<
    | AsyncStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "asyncInitializeList");
  }

  asyncSearch(
    request: AsyncSearchRequest
  ): Promise<
    | AsyncStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "asyncSearch");
  }

  asyncUpdateList(
    request: AsyncUpdateListRequest
  ): Promise<
    | AsyncStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "asyncUpdateList");
  }

  asyncUpsertList(
    request: AsyncUpsertListRequest
  ): Promise<
    | AsyncStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "asyncUpsertList");
  }

  attach(
    request: AttachRequest
  ): Promise<
    | AttachResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "attach");
  }

  changeEmail(
    request: ChangeEmailRequest
  ): Promise<
    | ChangeEmailResponse
    | InsufficientPermissionFault
    | InvalidAccountFault
    | InvalidCredentialsFault
    | InvalidSessionFault
    | InvalidVersionFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "changeEmail");
  }

  changePassword(
    request: ChangePasswordRequest
  ): Promise<
    | ChangePasswordResponse
    | InsufficientPermissionFault
    | InvalidAccountFault
    | InvalidCredentialsFault
    | InvalidSessionFault
    | InvalidVersionFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "changePassword");
  }

  checkAsyncStatus(
    request: CheckAsyncStatusRequest
  ): Promise<
    | AsyncStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
    | AsyncFault
  > {
    return this.executePort(request, "checkAsyncStatus");
  }

  delete(
    request: DeleteRequest
  ): Promise<
    | DeleteResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "delete");
  }

  deleteList(
    request: DeleteListRequest
  ): Promise<
    | DeleteListResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "deleteList");
  }

  detach(
    request: DetachRequest
  ): Promise<
    | DetachResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "detach");
  }

  get(
    request: GetRequest
  ): Promise<
    | GetResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "get");
  }

  getAll(
    request: GetAllRequest
  ): Promise<
    | GetAllResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "getAll");
  }

  getAsyncResult(
    request: GetAsyncResultRequest
  ): Promise<
    | GetAsyncResultResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
    | AsyncFault
  > {
    return this.executePort(request, "getAsyncResult");
  }

  getBudgetExchangeRate(
    request: GetBudgetExchangeRateRequest
  ): Promise<
    | GetBudgetExchangeRateResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "getBudgetExchangeRate");
  }

  getCurrencyRate(
    request: GetCurrencyRateRequest
  ): Promise<
    | GetCurrencyRateResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "getCurrencyRate");
  }

  getCustomizationId(
    request: GetCustomizationIdRequest
  ): Promise<
    | GetCustomizationIdResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "getCustomizationId");
  }

  getDataCenterUrls(
    request: GetDataCenterUrlsRequest
  ): Promise<
    | GetDataCenterUrlsResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "getDataCenterUrls");
  }

  getDeleted(
    request: GetDeletedRequest
  ): Promise<
    | GetDeletedResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "getDeleted");
  }

  getItemAvailability(
    request: GetItemAvailabilityRequest
  ): Promise<
    | GetItemAvailabilityResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "getItemAvailability");
  }

  getList(
    request: GetListRequest
  ): Promise<
    | GetListResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "getList");
  }

  getPostingTransactionSummary(
    request: GetPostingTransactionSummaryRequest
  ): Promise<
    | GetPostingTransactionSummaryResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "getPostingTransactionSummary");
  }

  getSavedSearch(
    request: GetSavedSearchRequest
  ): Promise<
    | GetSavedSearchResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "getSavedSearch");
  }

  getSelectValue(
    request: GetSelectValueRequest
  ): Promise<
    | GetSelectValueResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "getSelectValue");
  }

  getServerTime(
    request: GetServerTimeRequest
  ): Promise<
    | GetServerTimeResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "getServerTime");
  }

  initialize(
    request: InitializeRequest
  ): Promise<
    | InitializeResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "initialize");
  }

  initializeList(
    request: InitializeListRequest
  ): Promise<
    | InitializeListResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "initializeList");
  }

  login(
    request: LoginRequest
  ): Promise<
    | LoginResponse
    | InsufficientPermissionFault
    | InvalidAccountFault
    | InvalidCredentialsFault
    | InvalidSessionFault
    | InvalidVersionFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "login");
  }

  logout(
    request: LogoutRequest
  ): Promise<
    | LogoutResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "logout");
  }

  mapSso(
    request: MapSsoRequest
  ): Promise<
    | MapSsoResponse
    | InsufficientPermissionFault
    | InvalidAccountFault
    | InvalidCredentialsFault
    | InvalidSessionFault
    | InvalidVersionFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "mapSso");
  }

  search(
    request: SearchRequest
  ): Promise<
    | SearchResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "search");
  }

  searchMore(
    request: SearchMoreRequest
  ): Promise<
    | SearchMoreResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "searchMore");
  }

  searchMoreWithId(
    request: SearchMoreWithIdRequest
  ): Promise<
    | SearchMoreWithIdResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "searchMoreWithId");
  }

  searchNext(
    request: SearchNextRequest
  ): Promise<
    | SearchNextResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "searchNext");
  }

  ssoLogin(
    request: SsoLoginRequest
  ): Promise<
    | SsoLoginResponse
    | InsufficientPermissionFault
    | InvalidAccountFault
    | InvalidCredentialsFault
    | InvalidSessionFault
    | InvalidVersionFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "ssoLogin");
  }

  update(
    request: UpdateRequest
  ): Promise<
    | UpdateResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "update");
  }

  updateInviteeStatus(
    request: UpdateInviteeStatusRequest
  ): Promise<
    | UpdateInviteeStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "updateInviteeStatus");
  }

  updateInviteeStatusList(
    request: UpdateInviteeStatusListRequest
  ): Promise<
    | UpdateInviteeStatusListResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "updateInviteeStatusList");
  }

  updateList(
    request: UpdateListRequest
  ): Promise<
    | UpdateListResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "updateList");
  }

  upsert(
    request: UpsertRequest
  ): Promise<
    | UpsertResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "upsert");
  }

  upsertList(
    request: UpsertListRequest
  ): Promise<
    | UpsertListResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  > {
    return this.executePort(request, "upsertList");
  }

  private async executePort<T, R>(request: T, soapAction: string): Promise<R> {
    const authToken = this.authenticateRequestWithTokenPassport();
    const soapXML = serializeSoapRequest(authToken, request);
    const response = await this.gotClient.post(this.endpoint, {
      headers: { SOAPAction: soapAction },
      body: soapXML,
    });
    this.logLastRequest(response.request);
    const soapObj = deserializeSoapResponse(response.body);
    return soapObj.value.body.any[0].value as R;
  }

  private authenticateRequestWithTokenPassport(): TokenPassport {
    const config = this.config;
    const nonce = randomBytes(18).toString("hex");
    const timeStamp = Math.round(new Date().getTime() / 1000);
    const baseString = [
      config.account,
      config.token.consumerKey,
      config.token.tokenKey,
      nonce,
      timeStamp,
    ].join("&");
    const base64hash = createHmac(
      "sha256",
      `${config.token.consumerSecret}&${config.token.tokenSecret}`
    )
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
      },
    });
  }

  private logLastRequest(_request?: Request) {
    // console.log("Last request:\n%s\n", _request);
  }
}

interface NetSuiteClient {
  login: (
    request: LoginRequest
  ) => Promise<
    | LoginResponse
    | InsufficientPermissionFault
    | InvalidAccountFault
    | InvalidCredentialsFault
    | InvalidSessionFault
    | InvalidVersionFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  >;
  ssoLogin: (
    request: SsoLoginRequest
  ) => Promise<
    | SsoLoginResponse
    | InsufficientPermissionFault
    | InvalidAccountFault
    | InvalidCredentialsFault
    | InvalidSessionFault
    | InvalidVersionFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  >;
  mapSso: (
    request: MapSsoRequest
  ) => Promise<
    | MapSsoResponse
    | InsufficientPermissionFault
    | InvalidAccountFault
    | InvalidCredentialsFault
    | InvalidSessionFault
    | InvalidVersionFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  >;
  changePassword: (
    request: ChangePasswordRequest
  ) => Promise<
    | ChangePasswordResponse
    | InsufficientPermissionFault
    | InvalidAccountFault
    | InvalidCredentialsFault
    | InvalidSessionFault
    | InvalidVersionFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  >;
  changeEmail: (
    request: ChangeEmailRequest
  ) => Promise<
    | ChangeEmailResponse
    | InsufficientPermissionFault
    | InvalidAccountFault
    | InvalidCredentialsFault
    | InvalidSessionFault
    | InvalidVersionFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  >;
  logout: (
    request: LogoutRequest
  ) => Promise<
    | LogoutResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  >;
  add: (
    request: AddRequest
  ) => Promise<
    | AddResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  delete: (
    request: DeleteRequest
  ) => Promise<
    | DeleteResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  search: (
    request: SearchRequest
  ) => Promise<
    | SearchResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  searchMore: (
    request: SearchMoreRequest
  ) => Promise<
    | SearchMoreResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  searchMoreWithId: (
    request: SearchMoreWithIdRequest
  ) => Promise<
    | SearchMoreWithIdResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  searchNext: (
    request: SearchNextRequest
  ) => Promise<
    | SearchNextResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  update: (
    request: UpdateRequest
  ) => Promise<
    | UpdateResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  upsert: (
    request: UpsertRequest
  ) => Promise<
    | UpsertResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  addList: (
    request: AddListRequest
  ) => Promise<
    | AddListResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  deleteList: (
    request: DeleteListRequest
  ) => Promise<
    | DeleteListResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  updateList: (
    request: UpdateListRequest
  ) => Promise<
    | UpdateListResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  upsertList: (
    request: UpsertListRequest
  ) => Promise<
    | UpsertListResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  get: (
    request: GetRequest
  ) => Promise<
    | GetResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  getList: (
    request: GetListRequest
  ) => Promise<
    | GetListResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  getAll: (
    request: GetAllRequest
  ) => Promise<
    | GetAllResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  getSavedSearch: (
    request: GetSavedSearchRequest
  ) => Promise<
    | GetSavedSearchResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  getCustomizationId: (
    request: GetCustomizationIdRequest
  ) => Promise<
    | GetCustomizationIdResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  initialize: (
    request: InitializeRequest
  ) => Promise<
    | InitializeResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  initializeList: (
    request: InitializeListRequest
  ) => Promise<
    | InitializeListResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  getSelectValue: (
    request: GetSelectValueRequest
  ) => Promise<
    | GetSelectValueResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  getItemAvailability: (
    request: GetItemAvailabilityRequest
  ) => Promise<
    | GetItemAvailabilityResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  getBudgetExchangeRate: (
    request: GetBudgetExchangeRateRequest
  ) => Promise<
    | GetBudgetExchangeRateResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  getCurrencyRate: (
    request: GetCurrencyRateRequest
  ) => Promise<
    | GetCurrencyRateResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  getDataCenterUrls: (
    request: GetDataCenterUrlsRequest
  ) => Promise<
    | GetDataCenterUrlsResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  getPostingTransactionSummary: (
    request: GetPostingTransactionSummaryRequest
  ) => Promise<
    | GetPostingTransactionSummaryResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  getServerTime: (
    request: GetServerTimeRequest
  ) => Promise<
    | GetServerTimeResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | UnexpectedErrorFault
  >;
  attach: (
    request: AttachRequest
  ) => Promise<
    | AttachResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  detach: (
    request: DetachRequest
  ) => Promise<
    | DetachResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  updateInviteeStatus: (
    request: UpdateInviteeStatusRequest
  ) => Promise<
    | UpdateInviteeStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  updateInviteeStatusList: (
    request: UpdateInviteeStatusListRequest
  ) => Promise<
    | UpdateInviteeStatusListResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  asyncAddList: (
    request: AsyncAddListRequest
  ) => Promise<
    | AsyncStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  >;
  asyncUpdateList: (
    request: AsyncUpdateListRequest
  ) => Promise<
    | AsyncStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  >;
  asyncUpsertList: (
    request: AsyncUpsertListRequest
  ) => Promise<
    | AsyncStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  >;
  asyncDeleteList: (
    request: AsyncDeleteListRequest
  ) => Promise<
    | AsyncStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  >;
  asyncGetList: (
    request: AsyncGetListRequest
  ) => Promise<
    | AsyncStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  >;
  asyncInitializeList: (
    request: AsyncInitializeListRequest
  ) => Promise<
    | AsyncStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
  asyncSearch: (
    request: AsyncSearchRequest
  ) => Promise<
    | AsyncStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
  >;
  getAsyncResult: (
    request: GetAsyncResultRequest
  ) => Promise<
    | GetAsyncResultResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
    | AsyncFault
  >;
  checkAsyncStatus: (
    request: CheckAsyncStatusRequest
  ) => Promise<
    | AsyncStatusResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | UnexpectedErrorFault
    | AsyncFault
  >;
  getDeleted: (
    request: GetDeletedRequest
  ) => Promise<
    | GetDeletedResponse
    | InsufficientPermissionFault
    | InvalidSessionFault
    | InvalidCredentialsFault
    | ExceededConcurrentRequestLimitFault
    | ExceededRequestLimitFault
    | ExceededUsageLimitFault
    | ExceededRecordCountFault
    | ExceededRequestSizeFault
    | UnexpectedErrorFault
  >;
}
