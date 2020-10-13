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
import { Configuration } from "./types";
import { sendSoapRequest } from "./soap";

export class TypeSuiteClient {
  readonly config: Configuration;
  constructor(config: Configuration) {
    this.config = config;
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
    return sendSoapRequest(this.config, request, "add");
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
    return sendSoapRequest(this.config, request, "addList");
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
    return sendSoapRequest(this.config, request, "asyncAddList");
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
    return sendSoapRequest(this.config, request, "asyncDeleteList");
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
    return sendSoapRequest(this.config, request, "asyncGetList");
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
    return sendSoapRequest(this.config, request, "asyncInitializeList");
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
    return sendSoapRequest(this.config, request, "asyncSearch");
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
    return sendSoapRequest(this.config, request, "asyncUpdateList");
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
    return sendSoapRequest(this.config, request, "asyncUpsertList");
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
    return sendSoapRequest(this.config, request, "attach");
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
    return sendSoapRequest(this.config, request, "changeEmail");
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
    return sendSoapRequest(this.config, request, "changePassword");
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
    return sendSoapRequest(this.config, request, "checkAsyncStatus");
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
    return sendSoapRequest(this.config, request, "delete");
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
    return sendSoapRequest(this.config, request, "deleteList");
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
    return sendSoapRequest(this.config, request, "detach");
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
    return sendSoapRequest(this.config, request, "get");
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
    return sendSoapRequest(this.config, request, "getAll");
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
    return sendSoapRequest(this.config, request, "getAsyncResult");
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
    return sendSoapRequest(this.config, request, "getBudgetExchangeRate");
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
    return sendSoapRequest(this.config, request, "getCurrencyRate");
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
    return sendSoapRequest(this.config, request, "getCustomizationId");
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
    return sendSoapRequest(this.config, request, "getDataCenterUrls");
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
    return sendSoapRequest(this.config, request, "getDeleted");
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
    return sendSoapRequest(this.config, request, "getItemAvailability");
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
    return sendSoapRequest(this.config, request, "getList");
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
    return sendSoapRequest(
      this.config,
      request,
      "getPostingTransactionSummary"
    );
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
    return sendSoapRequest(this.config, request, "getSavedSearch");
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
    return sendSoapRequest(this.config, request, "getSelectValue");
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
    return sendSoapRequest(this.config, request, "getServerTime");
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
    return sendSoapRequest(this.config, request, "initialize");
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
    return sendSoapRequest(this.config, request, "initializeList");
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
    return sendSoapRequest(this.config, request, "login");
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
    return sendSoapRequest(this.config, request, "logout");
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
    return sendSoapRequest(this.config, request, "mapSso");
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
    return sendSoapRequest(this.config, request, "search");
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
    return sendSoapRequest(this.config, request, "searchMore");
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
    return sendSoapRequest(this.config, request, "searchMoreWithId");
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
    return sendSoapRequest(this.config, request, "searchNext");
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
    return sendSoapRequest(this.config, request, "ssoLogin");
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
    return sendSoapRequest(this.config, request, "update");
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
    return sendSoapRequest(this.config, request, "updateInviteeStatus");
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
    return sendSoapRequest(this.config, request, "updateInviteeStatusList");
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
    return sendSoapRequest(this.config, request, "updateList");
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
    return sendSoapRequest(this.config, request, "upsert");
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
    return sendSoapRequest(this.config, request, "upsertList");
  }
}
