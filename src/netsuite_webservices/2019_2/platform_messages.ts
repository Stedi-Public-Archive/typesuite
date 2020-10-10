import * as PlatformCore from "./platform_core";

export class SearchPreferences {
  bodyFieldsOnly?: boolean;
  returnSearchColumns?: boolean;
  pageSize?: number;
  constructor(props: SearchPreferences) {
    this.bodyFieldsOnly = props.bodyFieldsOnly;
    this.returnSearchColumns = props.returnSearchColumns;
    this.pageSize = props.pageSize;
  }
}

export class DeleteListRequest {
  baseRef: PlatformCore.BaseRef[];
  deletionReason?: PlatformCore.DeletionReason;
  constructor(props: DeleteListRequest) {
    this.baseRef = props.baseRef;
    this.deletionReason = props.deletionReason;
  }
}

export class MapSsoRequest {
  ssoCredentials: PlatformCore.SsoCredentials;
  constructor(props: MapSsoRequest) {
    this.ssoCredentials = props.ssoCredentials;
  }
}

export class DocumentInfo {
  nsId: string;
  constructor(props: DocumentInfo) {
    this.nsId = props.nsId;
  }
}

export class AsyncUpsertListRequest {
  record: PlatformCore.Record[];
  constructor(props: AsyncUpsertListRequest) {
    this.record = props.record;
  }
}

export class AttachRequest {
  attachReference: PlatformCore.AttachReference;
  constructor(props: AttachRequest) {
    this.attachReference = props.attachReference;
  }
}

export class DetachResponse {
  writeResponse: WriteResponse;
  constructor(props: DetachResponse) {
    this.writeResponse = props.writeResponse;
  }
}

export class UpdateInviteeStatusListRequest {
  updateInviteeStatusReference: PlatformCore.UpdateInviteeStatusReference[];
  constructor(props: UpdateInviteeStatusListRequest) {
    this.updateInviteeStatusReference = props.updateInviteeStatusReference;
  }
}

export class AsyncGetListRequest {
  baseRef: PlatformCore.BaseRef[];
  constructor(props: AsyncGetListRequest) {
    this.baseRef = props.baseRef;
  }
}

export class UpdateResponse {
  writeResponse: WriteResponse;
  constructor(props: UpdateResponse) {
    this.writeResponse = props.writeResponse;
  }
}

export class GetSavedSearchResponse {
  getSavedSearchResult: PlatformCore.GetSavedSearchResult;
  constructor(props: GetSavedSearchResponse) {
    this.getSavedSearchResult = props.getSavedSearchResult;
  }
}

export class InitializeResponse {
  readResponse: ReadResponse;
  constructor(props: InitializeResponse) {
    this.readResponse = props.readResponse;
  }
}

export class GetPostingTransactionSummaryResponse {
  getPostingTransactionSummaryResult: PlatformCore.GetPostingTransactionSummaryResult;
  constructor(props: GetPostingTransactionSummaryResponse) {
    this.getPostingTransactionSummaryResult =
      props.getPostingTransactionSummaryResult;
  }
}

export class DeleteResponse {
  writeResponse: WriteResponse;
  constructor(props: DeleteResponse) {
    this.writeResponse = props.writeResponse;
  }
}

export class AsyncResult {}

export class AsyncAddListResult extends AsyncResult {
  writeResponseList: WriteResponseList;
  constructor(props: AsyncAddListResult) {
    super();
    this.writeResponseList = props.writeResponseList;
  }
}

export class GetServerTimeResponse {
  getServerTimeResult: PlatformCore.GetServerTimeResult;
  constructor(props: GetServerTimeResponse) {
    this.getServerTimeResult = props.getServerTimeResult;
  }
}

export class GetRequest {
  baseRef: PlatformCore.BaseRef;
  constructor(props: GetRequest) {
    this.baseRef = props.baseRef;
  }
}

export class InitializeListResponse {
  readResponseList: ReadResponseList;
  constructor(props: InitializeListResponse) {
    this.readResponseList = props.readResponseList;
  }
}

export class CheckAsyncStatusRequest {
  jobId: string;
  constructor(props: CheckAsyncStatusRequest) {
    this.jobId = props.jobId;
  }
}

export class WriteResponse {
  status: PlatformCore.Status;
  baseRef?: PlatformCore.BaseRef;
  constructor(props: WriteResponse) {
    this.status = props.status;
    this.baseRef = props.baseRef;
  }
}

export class GetResponse {
  readResponse: ReadResponse;
  constructor(props: GetResponse) {
    this.readResponse = props.readResponse;
  }
}

export class AsyncUpsertListResult extends AsyncResult {
  writeResponseList: WriteResponseList;
  constructor(props: AsyncUpsertListResult) {
    super();
    this.writeResponseList = props.writeResponseList;
  }
}

export class AddRequest {
  record: PlatformCore.Record;
  constructor(props: AddRequest) {
    this.record = props.record;
  }
}

export class AsyncDeleteListRequest {
  baseRef: PlatformCore.BaseRef[];
  deletionReason?: PlatformCore.DeletionReason;
  constructor(props: AsyncDeleteListRequest) {
    this.baseRef = props.baseRef;
    this.deletionReason = props.deletionReason;
  }
}

export class SearchRequest {
  searchRecord: PlatformCore.SearchRecord;
  constructor(props: SearchRequest) {
    this.searchRecord = props.searchRecord;
  }
}

export class LogoutResponse {
  sessionResponse: SessionResponse;
  constructor(props: LogoutResponse) {
    this.sessionResponse = props.sessionResponse;
  }
}

export class GetSelectValueResponse {
  getSelectValueResult: PlatformCore.GetSelectValueResult;
  constructor(props: GetSelectValueResponse) {
    this.getSelectValueResult = props.getSelectValueResult;
  }
}

export class AsyncSearchResult extends AsyncResult {
  searchResult: PlatformCore.SearchResult;
  constructor(props: AsyncSearchResult) {
    super();
    this.searchResult = props.searchResult;
  }
}

export class UpdateInviteeStatusRequest {
  updateInviteeStatusReference: PlatformCore.UpdateInviteeStatusReference;
  constructor(props: UpdateInviteeStatusRequest) {
    this.updateInviteeStatusReference = props.updateInviteeStatusReference;
  }
}

export class SsoLoginResponse {
  sessionResponse: SessionResponse;
  constructor(props: SsoLoginResponse) {
    this.sessionResponse = props.sessionResponse;
  }
}

export class AsyncInitializeListRequest {
  initializeRecord: PlatformCore.InitializeRecord[];
  constructor(props: AsyncInitializeListRequest) {
    this.initializeRecord = props.initializeRecord;
  }
}

export class GetCurrencyRateResponse {
  getCurrencyRateResult: PlatformCore.GetCurrencyRateResult;
  constructor(props: GetCurrencyRateResponse) {
    this.getCurrencyRateResult = props.getCurrencyRateResult;
  }
}

export class GetSavedSearchRequest {
  record: PlatformCore.GetSavedSearchRecord;
  constructor(props: GetSavedSearchRequest) {
    this.record = props.record;
  }
}

export class SessionResponse {
  status: PlatformCore.Status;
  userId?: PlatformCore.RecordRef;
  wsRoleList?: PlatformCore.WsRoleList;
  constructor(props: SessionResponse) {
    this.status = props.status;
    this.userId = props.userId;
    this.wsRoleList = props.wsRoleList;
  }
}

export class AddListResponse {
  writeResponseList: WriteResponseList;
  constructor(props: AddListResponse) {
    this.writeResponseList = props.writeResponseList;
  }
}

export class LoginRequest {
  passport: PlatformCore.Passport;
  constructor(props: LoginRequest) {
    this.passport = props.passport;
  }
}

export class UpdateRequest {
  record: PlatformCore.Record;
  constructor(props: UpdateRequest) {
    this.record = props.record;
  }
}

export class GetAsyncResultRequest {
  jobId: string;
  pageIndex: number;
  constructor(props: GetAsyncResultRequest) {
    this.jobId = props.jobId;
    this.pageIndex = props.pageIndex;
  }
}

export class ReadResponse {
  status: PlatformCore.Status;
  record?: PlatformCore.Record;
  constructor(props: ReadResponse) {
    this.status = props.status;
    this.record = props.record;
  }
}

export class AsyncDeleteListResult extends AsyncResult {
  writeResponseList: WriteResponseList;
  constructor(props: AsyncDeleteListResult) {
    super();
    this.writeResponseList = props.writeResponseList;
  }
}

export class SsoLoginRequest {
  ssoPassport: PlatformCore.SsoPassport;
  constructor(props: SsoLoginRequest) {
    this.ssoPassport = props.ssoPassport;
  }
}

export class ApplicationInfo {
  applicationId: string;
  constructor(props: ApplicationInfo) {
    this.applicationId = props.applicationId;
  }
}

export class PartnerInfo {
  partnerId?: string;
  constructor(props: PartnerInfo) {
    this.partnerId = props.partnerId;
  }
}

export class AddListRequest {
  record: PlatformCore.Record[];
  constructor(props: AddListRequest) {
    this.record = props.record;
  }
}

export class UpdateListRequest {
  record: PlatformCore.Record[];
  constructor(props: UpdateListRequest) {
    this.record = props.record;
  }
}

export class UpdateListResponse {
  writeResponseList: WriteResponseList;
  constructor(props: UpdateListResponse) {
    this.writeResponseList = props.writeResponseList;
  }
}

export class GetCustomizationIdResponse {
  getCustomizationIdResult: PlatformCore.GetCustomizationIdResult;
  constructor(props: GetCustomizationIdResponse) {
    this.getCustomizationIdResult = props.getCustomizationIdResult;
  }
}

export class SearchMoreWithIdResponse {
  searchResult: PlatformCore.SearchResult;
  constructor(props: SearchMoreWithIdResponse) {
    this.searchResult = props.searchResult;
  }
}

export class ChangeEmailResponse {
  sessionResponse: SessionResponse;
  constructor(props: ChangeEmailResponse) {
    this.sessionResponse = props.sessionResponse;
  }
}

export class GetDeletedResponse {
  getDeletedResult: PlatformCore.GetDeletedResult;
  constructor(props: GetDeletedResponse) {
    this.getDeletedResult = props.getDeletedResult;
  }
}

export class GetItemAvailabilityResponse {
  getItemAvailabilityResult: PlatformCore.GetItemAvailabilityResult;
  constructor(props: GetItemAvailabilityResponse) {
    this.getItemAvailabilityResult = props.getItemAvailabilityResult;
  }
}

export class GetItemAvailabilityRequest {
  itemAvailabilityFilter: PlatformCore.ItemAvailabilityFilter;
  constructor(props: GetItemAvailabilityRequest) {
    this.itemAvailabilityFilter = props.itemAvailabilityFilter;
  }
}

export class GetDataCenterUrlsRequest {
  account: string;
  constructor(props: GetDataCenterUrlsRequest) {
    this.account = props.account;
  }
}

export class AsyncStatusResponse {
  asyncStatusResult: PlatformCore.AsyncStatusResult;
  constructor(props: AsyncStatusResponse) {
    this.asyncStatusResult = props.asyncStatusResult;
  }
}

export class GetCurrencyRateRequest {
  currencyRateFilter: PlatformCore.CurrencyRateFilter;
  constructor(props: GetCurrencyRateRequest) {
    this.currencyRateFilter = props.currencyRateFilter;
  }
}

export class GetCustomizationIdRequest {
  customizationType: PlatformCore.CustomizationType;
  includeInactives: boolean;
  constructor(props: GetCustomizationIdRequest) {
    this.customizationType = props.customizationType;
    this.includeInactives = props.includeInactives;
  }
}

export class GetSelectValueRequest {
  fieldDescription: PlatformCore.GetSelectValueFieldDescription;
  pageIndex: number;
  constructor(props: GetSelectValueRequest) {
    this.fieldDescription = props.fieldDescription;
    this.pageIndex = props.pageIndex;
  }
}

export class SearchNextResponse {
  searchResult: PlatformCore.SearchResult;
  constructor(props: SearchNextResponse) {
    this.searchResult = props.searchResult;
  }
}

export class AsyncSearchRequest {
  searchRecord: PlatformCore.SearchRecord;
  constructor(props: AsyncSearchRequest) {
    this.searchRecord = props.searchRecord;
  }
}

export class GetListRequest {
  baseRef: PlatformCore.BaseRef[];
  constructor(props: GetListRequest) {
    this.baseRef = props.baseRef;
  }
}

export class AsyncUpdateListResult extends AsyncResult {
  writeResponseList: WriteResponseList;
  constructor(props: AsyncUpdateListResult) {
    super();
    this.writeResponseList = props.writeResponseList;
  }
}

export class AsyncUpdateListRequest {
  record: PlatformCore.Record[];
  constructor(props: AsyncUpdateListRequest) {
    this.record = props.record;
  }
}

export class ChangeEmailRequest {
  changeEmail: PlatformCore.ChangeEmail;
  constructor(props: ChangeEmailRequest) {
    this.changeEmail = props.changeEmail;
  }
}

export class GetBudgetExchangeRateRequest {
  budgetExchangeRateFilter: PlatformCore.BudgetExchangeRateFilter;
  constructor(props: GetBudgetExchangeRateRequest) {
    this.budgetExchangeRateFilter = props.budgetExchangeRateFilter;
  }
}

export class SearchMoreResponse {
  searchResult: PlatformCore.SearchResult;
  constructor(props: SearchMoreResponse) {
    this.searchResult = props.searchResult;
  }
}

export class GetAsyncResultResponse {
  asyncResult: AsyncResult;
  constructor(props: GetAsyncResultResponse) {
    this.asyncResult = props.asyncResult;
  }
}

export class SearchMoreWithIdRequest {
  searchId: string;
  pageIndex: number;
  constructor(props: SearchMoreWithIdRequest) {
    this.searchId = props.searchId;
    this.pageIndex = props.pageIndex;
  }
}

export class SearchNextRequest {}

export class DetachRequest {
  detachReference: PlatformCore.DetachReference;
  constructor(props: DetachRequest) {
    this.detachReference = props.detachReference;
  }
}

export class SearchResponse {
  searchResult: PlatformCore.SearchResult;
  constructor(props: SearchResponse) {
    this.searchResult = props.searchResult;
  }
}

export class GetAllResponse {
  getAllResult: PlatformCore.GetAllResult;
  constructor(props: GetAllResponse) {
    this.getAllResult = props.getAllResult;
  }
}

export class AddResponse {
  writeResponse: WriteResponse;
  constructor(props: AddResponse) {
    this.writeResponse = props.writeResponse;
  }
}

export class GetDataCenterUrlsResponse {
  getDataCenterUrlsResult: PlatformCore.GetDataCenterUrlsResult;
  constructor(props: GetDataCenterUrlsResponse) {
    this.getDataCenterUrlsResult = props.getDataCenterUrlsResult;
  }
}

export class AsyncGetListResult extends AsyncResult {
  readResponseList: ReadResponseList;
  constructor(props: AsyncGetListResult) {
    super();
    this.readResponseList = props.readResponseList;
  }
}

export class UpsertRequest {
  record: PlatformCore.Record;
  constructor(props: UpsertRequest) {
    this.record = props.record;
  }
}

export class GetAllRequest {
  record: PlatformCore.GetAllRecord;
  constructor(props: GetAllRequest) {
    this.record = props.record;
  }
}

export class MapSsoResponse {
  sessionResponse: SessionResponse;
  constructor(props: MapSsoResponse) {
    this.sessionResponse = props.sessionResponse;
  }
}

export class SearchMoreRequest {
  pageIndex: number;
  constructor(props: SearchMoreRequest) {
    this.pageIndex = props.pageIndex;
  }
}

export class GetDeletedRequest {
  getDeletedFilter: PlatformCore.GetDeletedFilter;
  pageIndex: number;
  constructor(props: GetDeletedRequest) {
    this.getDeletedFilter = props.getDeletedFilter;
    this.pageIndex = props.pageIndex;
  }
}

export class DeleteRequest {
  baseRef: PlatformCore.BaseRef;
  deletionReason?: PlatformCore.DeletionReason;
  constructor(props: DeleteRequest) {
    this.baseRef = props.baseRef;
    this.deletionReason = props.deletionReason;
  }
}

export class AsyncInitializeListResult extends AsyncResult {
  readResponseList: ReadResponseList;
  constructor(props: AsyncInitializeListResult) {
    super();
    this.readResponseList = props.readResponseList;
  }
}

export class ChangePasswordRequest {
  changePassword: PlatformCore.ChangePassword;
  constructor(props: ChangePasswordRequest) {
    this.changePassword = props.changePassword;
  }
}

export class WriteResponseList {
  status?: PlatformCore.Status;
  writeResponse: WriteResponse[];
  constructor(props: WriteResponseList) {
    this.status = props.status;
    this.writeResponse = props.writeResponse;
  }
}

export class GetBudgetExchangeRateResponse {
  getBudgetExchangeRateResult: PlatformCore.GetBudgetExchangeRateResult;
  constructor(props: GetBudgetExchangeRateResponse) {
    this.getBudgetExchangeRateResult = props.getBudgetExchangeRateResult;
  }
}

export class ReadResponseList {
  status?: PlatformCore.Status;
  readResponse?: ReadResponse[];
  constructor(props: ReadResponseList) {
    this.status = props.status;
    this.readResponse = props.readResponse;
  }
}

export class UpsertResponse {
  writeResponse: WriteResponse;
  constructor(props: UpsertResponse) {
    this.writeResponse = props.writeResponse;
  }
}

export class GetServerTimeRequest {}

export class LogoutRequest {}

export class UpsertListRequest {
  record: PlatformCore.Record[];
  constructor(props: UpsertListRequest) {
    this.record = props.record;
  }
}

export class GetPostingTransactionSummaryRequest {
  fields?: PlatformCore.PostingTransactionSummaryField;
  filters?: PlatformCore.PostingTransactionSummaryFilter;
  pageIndex: number;
  operationId?: string;
  constructor(props: GetPostingTransactionSummaryRequest) {
    this.fields = props.fields;
    this.filters = props.filters;
    this.pageIndex = props.pageIndex;
    this.operationId = props.operationId;
  }
}

export class UpsertListResponse {
  writeResponseList: WriteResponseList;
  constructor(props: UpsertListResponse) {
    this.writeResponseList = props.writeResponseList;
  }
}

export class ChangePasswordResponse {
  sessionResponse: SessionResponse;
  constructor(props: ChangePasswordResponse) {
    this.sessionResponse = props.sessionResponse;
  }
}

export class DeleteListResponse {
  writeResponseList: WriteResponseList;
  constructor(props: DeleteListResponse) {
    this.writeResponseList = props.writeResponseList;
  }
}

export class UpdateInviteeStatusResponse {
  writeResponse: WriteResponse;
  constructor(props: UpdateInviteeStatusResponse) {
    this.writeResponse = props.writeResponse;
  }
}

export class AsyncAddListRequest {
  record: PlatformCore.Record[];
  constructor(props: AsyncAddListRequest) {
    this.record = props.record;
  }
}

export class InitializeRequest {
  initializeRecord: PlatformCore.InitializeRecord;
  constructor(props: InitializeRequest) {
    this.initializeRecord = props.initializeRecord;
  }
}

export class InitializeListRequest {
  initializeRecord: PlatformCore.InitializeRecord[];
  constructor(props: InitializeListRequest) {
    this.initializeRecord = props.initializeRecord;
  }
}

export class Preferences {
  warningAsError?: boolean;
  disableMandatoryCustomFieldValidation?: boolean;
  disableSystemNotesForCustomFields?: boolean;
  ignoreReadOnlyFields?: boolean;
  runServerSuiteScriptAndTriggerWorkflows?: boolean;
  constructor(props: Preferences) {
    this.warningAsError = props.warningAsError;
    this.disableMandatoryCustomFieldValidation =
      props.disableMandatoryCustomFieldValidation;
    this.disableSystemNotesForCustomFields =
      props.disableSystemNotesForCustomFields;
    this.ignoreReadOnlyFields = props.ignoreReadOnlyFields;
    this.runServerSuiteScriptAndTriggerWorkflows =
      props.runServerSuiteScriptAndTriggerWorkflows;
  }
}

export class GetListResponse {
  readResponseList: ReadResponseList;
  constructor(props: GetListResponse) {
    this.readResponseList = props.readResponseList;
  }
}

export class AttachResponse {
  writeResponse: WriteResponse;
  constructor(props: AttachResponse) {
    this.writeResponse = props.writeResponse;
  }
}

export class UpdateInviteeStatusListResponse {
  writeResponseList: WriteResponseList;
  constructor(props: UpdateInviteeStatusListResponse) {
    this.writeResponseList = props.writeResponseList;
  }
}

export class LoginResponse {
  sessionResponse: SessionResponse;
  constructor(props: LoginResponse) {
    this.sessionResponse = props.sessionResponse;
  }
}
