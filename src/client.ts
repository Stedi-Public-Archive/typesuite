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
import { Configuration } from "./types";
import { sendSoapRequest } from "./soap";

export class TypeSuiteClient {
  readonly config: Configuration;
  constructor(config: Configuration) {
    this.config = config;
  }

  add(request: AddRequest): Promise<AddResponse> {
    return sendSoapRequest(this.config, request, "add");
  }

  addList(request: AddListRequest): Promise<AddListResponse> {
    return sendSoapRequest(this.config, request, "addList");
  }

  asyncAddList(request: AsyncAddListRequest): Promise<AsyncStatusResponse> {
    return sendSoapRequest(this.config, request, "asyncAddList");
  }

  asyncDeleteList(
    request: AsyncDeleteListRequest
  ): Promise<AsyncStatusResponse> {
    return sendSoapRequest(this.config, request, "asyncDeleteList");
  }

  asyncGetList(request: AsyncGetListRequest): Promise<AsyncStatusResponse> {
    return sendSoapRequest(this.config, request, "asyncGetList");
  }

  asyncInitializeList(
    request: AsyncInitializeListRequest
  ): Promise<AsyncStatusResponse> {
    return sendSoapRequest(this.config, request, "asyncInitializeList");
  }

  asyncSearch(request: AsyncSearchRequest): Promise<AsyncStatusResponse> {
    return sendSoapRequest(this.config, request, "asyncSearch");
  }

  asyncUpdateList(
    request: AsyncUpdateListRequest
  ): Promise<AsyncStatusResponse> {
    return sendSoapRequest(this.config, request, "asyncUpdateList");
  }

  asyncUpsertList(
    request: AsyncUpsertListRequest
  ): Promise<AsyncStatusResponse> {
    return sendSoapRequest(this.config, request, "asyncUpsertList");
  }

  attach(request: AttachRequest): Promise<AttachResponse> {
    return sendSoapRequest(this.config, request, "attach");
  }

  changeEmail(request: ChangeEmailRequest): Promise<ChangeEmailResponse> {
    return sendSoapRequest(this.config, request, "changeEmail");
  }

  changePassword(
    request: ChangePasswordRequest
  ): Promise<ChangePasswordResponse> {
    return sendSoapRequest(this.config, request, "changePassword");
  }

  checkAsyncStatus(
    request: CheckAsyncStatusRequest
  ): Promise<AsyncStatusResponse> {
    return sendSoapRequest(this.config, request, "checkAsyncStatus");
  }

  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return sendSoapRequest(this.config, request, "delete");
  }

  deleteList(request: DeleteListRequest): Promise<DeleteListResponse> {
    return sendSoapRequest(this.config, request, "deleteList");
  }

  detach(request: DetachRequest): Promise<DetachResponse> {
    return sendSoapRequest(this.config, request, "detach");
  }

  get(request: GetRequest): Promise<GetResponse> {
    return sendSoapRequest(this.config, request, "get");
  }

  getAll(request: GetAllRequest): Promise<GetAllResponse> {
    return sendSoapRequest(this.config, request, "getAll");
  }

  getAsyncResult(
    request: GetAsyncResultRequest
  ): Promise<GetAsyncResultResponse> {
    return sendSoapRequest(this.config, request, "getAsyncResult");
  }

  getBudgetExchangeRate(
    request: GetBudgetExchangeRateRequest
  ): Promise<GetBudgetExchangeRateResponse> {
    return sendSoapRequest(this.config, request, "getBudgetExchangeRate");
  }

  getCurrencyRate(
    request: GetCurrencyRateRequest
  ): Promise<GetCurrencyRateResponse> {
    return sendSoapRequest(this.config, request, "getCurrencyRate");
  }

  getCustomizationId(
    request: GetCustomizationIdRequest
  ): Promise<GetCustomizationIdResponse> {
    return sendSoapRequest(this.config, request, "getCustomizationId");
  }

  getDataCenterUrls(
    request: GetDataCenterUrlsRequest
  ): Promise<GetDataCenterUrlsResponse> {
    return sendSoapRequest(this.config, request, "getDataCenterUrls");
  }

  getDeleted(request: GetDeletedRequest): Promise<GetDeletedResponse> {
    return sendSoapRequest(this.config, request, "getDeleted");
  }

  getItemAvailability(
    request: GetItemAvailabilityRequest
  ): Promise<GetItemAvailabilityResponse> {
    return sendSoapRequest(this.config, request, "getItemAvailability");
  }

  getList(request: GetListRequest): Promise<GetListResponse> {
    return sendSoapRequest(this.config, request, "getList");
  }

  getPostingTransactionSummary(
    request: GetPostingTransactionSummaryRequest
  ): Promise<GetPostingTransactionSummaryResponse> {
    return sendSoapRequest(
      this.config,
      request,
      "getPostingTransactionSummary"
    );
  }

  getSavedSearch(
    request: GetSavedSearchRequest
  ): Promise<GetSavedSearchResponse> {
    return sendSoapRequest(this.config, request, "getSavedSearch");
  }

  getSelectValue(
    request: GetSelectValueRequest
  ): Promise<GetSelectValueResponse> {
    return sendSoapRequest(this.config, request, "getSelectValue");
  }

  getServerTime(request: GetServerTimeRequest): Promise<GetServerTimeResponse> {
    return sendSoapRequest(this.config, request, "getServerTime");
  }

  initialize(request: InitializeRequest): Promise<InitializeResponse> {
    return sendSoapRequest(this.config, request, "initialize");
  }

  initializeList(
    request: InitializeListRequest
  ): Promise<InitializeListResponse> {
    return sendSoapRequest(this.config, request, "initializeList");
  }

  login(request: LoginRequest): Promise<LoginResponse> {
    return sendSoapRequest(this.config, request, "login");
  }

  logout(request: LogoutRequest): Promise<LogoutResponse> {
    return sendSoapRequest(this.config, request, "logout");
  }

  mapSso(request: MapSsoRequest): Promise<MapSsoResponse> {
    return sendSoapRequest(this.config, request, "mapSso");
  }

  search(request: SearchRequest): Promise<SearchResponse> {
    return sendSoapRequest(this.config, request, "search");
  }

  searchMore(request: SearchMoreRequest): Promise<SearchMoreResponse> {
    return sendSoapRequest(this.config, request, "searchMore");
  }

  searchMoreWithId(
    request: SearchMoreWithIdRequest
  ): Promise<SearchMoreWithIdResponse> {
    return sendSoapRequest(this.config, request, "searchMoreWithId");
  }

  searchNext(request: SearchNextRequest): Promise<SearchNextResponse> {
    return sendSoapRequest(this.config, request, "searchNext");
  }

  ssoLogin(request: SsoLoginRequest): Promise<SsoLoginResponse> {
    return sendSoapRequest(this.config, request, "ssoLogin");
  }

  update(request: UpdateRequest): Promise<UpdateResponse> {
    return sendSoapRequest(this.config, request, "update");
  }

  updateInviteeStatus(
    request: UpdateInviteeStatusRequest
  ): Promise<UpdateInviteeStatusResponse> {
    return sendSoapRequest(this.config, request, "updateInviteeStatus");
  }

  updateInviteeStatusList(
    request: UpdateInviteeStatusListRequest
  ): Promise<UpdateInviteeStatusListResponse> {
    return sendSoapRequest(this.config, request, "updateInviteeStatusList");
  }

  updateList(request: UpdateListRequest): Promise<UpdateListResponse> {
    return sendSoapRequest(this.config, request, "updateList");
  }

  upsert(request: UpsertRequest): Promise<UpsertResponse> {
    return sendSoapRequest(this.config, request, "upsert");
  }

  upsertList(request: UpsertListRequest): Promise<UpsertListResponse> {
    return sendSoapRequest(this.config, request, "upsertList");
  }
}
