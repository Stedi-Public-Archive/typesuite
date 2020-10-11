import * as PlatformCore from "./platform_core";

export type SearchPreferencesProps = {
  bodyFieldsOnly?: boolean;
  returnSearchColumns?: boolean;
  pageSize?: number;
};

export class SearchPreferences {
  bodyFieldsOnly?: boolean;
  returnSearchColumns?: boolean;
  pageSize?: number;
  constructor(props: SearchPreferencesProps) {
    this.bodyFieldsOnly = props.bodyFieldsOnly;
    this.returnSearchColumns = props.returnSearchColumns;
    this.pageSize = props.pageSize;
  }
}

export type DeleteListRequestProps = {
  baseRef: PlatformCore.BaseRef[];
  deletionReason?: PlatformCore.DeletionReason;
};

export class DeleteListRequest {
  baseRef: PlatformCore.BaseRef[];
  deletionReason?: PlatformCore.DeletionReason;
  constructor(props: DeleteListRequestProps) {
    this.baseRef = props.baseRef;
    this.deletionReason = props.deletionReason;
  }
}

export type MapSsoRequestProps = {
  ssoCredentials: PlatformCore.SsoCredentials;
};

export class MapSsoRequest {
  ssoCredentials: PlatformCore.SsoCredentials;
  constructor(props: MapSsoRequestProps) {
    this.ssoCredentials = props.ssoCredentials;
  }
}

export type DocumentInfoProps = {
  nsId: string;
};

export class DocumentInfo {
  nsId: string;
  constructor(props: DocumentInfoProps) {
    this.nsId = props.nsId;
  }
}

export type AsyncUpsertListRequestProps = {
  record: PlatformCore.Record[];
};

export class AsyncUpsertListRequest {
  record: PlatformCore.Record[];
  constructor(props: AsyncUpsertListRequestProps) {
    this.record = props.record;
  }
}

export type AttachRequestProps = {
  attachReference: PlatformCore.AttachReference;
};

export class AttachRequest {
  attachReference: PlatformCore.AttachReference;
  constructor(props: AttachRequestProps) {
    this.attachReference = props.attachReference;
  }
}

export type DetachResponseProps = {
  writeResponse: WriteResponse;
};

export class DetachResponse {
  writeResponse: WriteResponse;
  constructor(props: DetachResponseProps) {
    this.writeResponse = props.writeResponse;
  }
}

export type UpdateInviteeStatusListRequestProps = {
  updateInviteeStatusReference: PlatformCore.UpdateInviteeStatusReference[];
};

export class UpdateInviteeStatusListRequest {
  updateInviteeStatusReference: PlatformCore.UpdateInviteeStatusReference[];
  constructor(props: UpdateInviteeStatusListRequestProps) {
    this.updateInviteeStatusReference = props.updateInviteeStatusReference;
  }
}

export type AsyncGetListRequestProps = {
  baseRef: PlatformCore.BaseRef[];
};

export class AsyncGetListRequest {
  baseRef: PlatformCore.BaseRef[];
  constructor(props: AsyncGetListRequestProps) {
    this.baseRef = props.baseRef;
  }
}

export type UpdateResponseProps = {
  writeResponse: WriteResponse;
};

export class UpdateResponse {
  writeResponse: WriteResponse;
  constructor(props: UpdateResponseProps) {
    this.writeResponse = props.writeResponse;
  }
}

export type GetSavedSearchResponseProps = {
  getSavedSearchResult: PlatformCore.GetSavedSearchResult;
};

export class GetSavedSearchResponse {
  getSavedSearchResult: PlatformCore.GetSavedSearchResult;
  constructor(props: GetSavedSearchResponseProps) {
    this.getSavedSearchResult = props.getSavedSearchResult;
  }
}

export type InitializeResponseProps = {
  readResponse: ReadResponse;
};

export class InitializeResponse {
  readResponse: ReadResponse;
  constructor(props: InitializeResponseProps) {
    this.readResponse = props.readResponse;
  }
}

export type GetPostingTransactionSummaryResponseProps = {
  getPostingTransactionSummaryResult: PlatformCore.GetPostingTransactionSummaryResult;
};

export class GetPostingTransactionSummaryResponse {
  getPostingTransactionSummaryResult: PlatformCore.GetPostingTransactionSummaryResult;
  constructor(props: GetPostingTransactionSummaryResponseProps) {
    this.getPostingTransactionSummaryResult =
      props.getPostingTransactionSummaryResult;
  }
}

export type DeleteResponseProps = {
  writeResponse: WriteResponse;
};

export class DeleteResponse {
  writeResponse: WriteResponse;
  constructor(props: DeleteResponseProps) {
    this.writeResponse = props.writeResponse;
  }
}

export class AsyncResult {}

export type AsyncAddListResultProps = {
  writeResponseList: WriteResponseList;
};

export class AsyncAddListResult extends AsyncResult {
  writeResponseList: WriteResponseList;
  constructor(props: AsyncAddListResultProps) {
    super();
    this.writeResponseList = props.writeResponseList;
  }
}

export type GetServerTimeResponseProps = {
  getServerTimeResult: PlatformCore.GetServerTimeResult;
};

export class GetServerTimeResponse {
  getServerTimeResult: PlatformCore.GetServerTimeResult;
  constructor(props: GetServerTimeResponseProps) {
    this.getServerTimeResult = props.getServerTimeResult;
  }
}

export type GetRequestProps = {
  baseRef: PlatformCore.BaseRef;
};

export class GetRequest {
  baseRef: PlatformCore.BaseRef;
  constructor(props: GetRequestProps) {
    this.baseRef = props.baseRef;
  }
}

export type InitializeListResponseProps = {
  readResponseList: ReadResponseList;
};

export class InitializeListResponse {
  readResponseList: ReadResponseList;
  constructor(props: InitializeListResponseProps) {
    this.readResponseList = props.readResponseList;
  }
}

export type CheckAsyncStatusRequestProps = {
  jobId: string;
};

export class CheckAsyncStatusRequest {
  jobId: string;
  constructor(props: CheckAsyncStatusRequestProps) {
    this.jobId = props.jobId;
  }
}

export type WriteResponseProps = {
  status: PlatformCore.Status;
  baseRef?: PlatformCore.BaseRef;
};

export class WriteResponse {
  status: PlatformCore.Status;
  baseRef?: PlatformCore.BaseRef;
  constructor(props: WriteResponseProps) {
    this.status = props.status;
    this.baseRef = props.baseRef;
  }
}

export type GetResponseProps = {
  readResponse: ReadResponse;
};

export class GetResponse {
  readResponse: ReadResponse;
  constructor(props: GetResponseProps) {
    this.readResponse = props.readResponse;
  }
}

export type AsyncUpsertListResultProps = {
  writeResponseList: WriteResponseList;
};

export class AsyncUpsertListResult extends AsyncResult {
  writeResponseList: WriteResponseList;
  constructor(props: AsyncUpsertListResultProps) {
    super();
    this.writeResponseList = props.writeResponseList;
  }
}

export type AddRequestProps = {
  record: PlatformCore.Record;
};

export class AddRequest {
  record: PlatformCore.Record;
  constructor(props: AddRequestProps) {
    this.record = props.record;
  }
}

export type AsyncDeleteListRequestProps = {
  baseRef: PlatformCore.BaseRef[];
  deletionReason?: PlatformCore.DeletionReason;
};

export class AsyncDeleteListRequest {
  baseRef: PlatformCore.BaseRef[];
  deletionReason?: PlatformCore.DeletionReason;
  constructor(props: AsyncDeleteListRequestProps) {
    this.baseRef = props.baseRef;
    this.deletionReason = props.deletionReason;
  }
}

export type SearchRequestProps = {
  searchRecord: PlatformCore.SearchRecord;
};

export class SearchRequest {
  searchRecord: PlatformCore.SearchRecord;
  constructor(props: SearchRequestProps) {
    this.searchRecord = props.searchRecord;
  }
}

export type LogoutResponseProps = {
  sessionResponse: SessionResponse;
};

export class LogoutResponse {
  sessionResponse: SessionResponse;
  constructor(props: LogoutResponseProps) {
    this.sessionResponse = props.sessionResponse;
  }
}

export type GetSelectValueResponseProps = {
  getSelectValueResult: PlatformCore.GetSelectValueResult;
};

export class GetSelectValueResponse {
  getSelectValueResult: PlatformCore.GetSelectValueResult;
  constructor(props: GetSelectValueResponseProps) {
    this.getSelectValueResult = props.getSelectValueResult;
  }
}

export type AsyncSearchResultProps = {
  searchResult: PlatformCore.SearchResult;
};

export class AsyncSearchResult extends AsyncResult {
  searchResult: PlatformCore.SearchResult;
  constructor(props: AsyncSearchResultProps) {
    super();
    this.searchResult = props.searchResult;
  }
}

export type UpdateInviteeStatusRequestProps = {
  updateInviteeStatusReference: PlatformCore.UpdateInviteeStatusReference;
};

export class UpdateInviteeStatusRequest {
  updateInviteeStatusReference: PlatformCore.UpdateInviteeStatusReference;
  constructor(props: UpdateInviteeStatusRequestProps) {
    this.updateInviteeStatusReference = props.updateInviteeStatusReference;
  }
}

export type SsoLoginResponseProps = {
  sessionResponse: SessionResponse;
};

export class SsoLoginResponse {
  sessionResponse: SessionResponse;
  constructor(props: SsoLoginResponseProps) {
    this.sessionResponse = props.sessionResponse;
  }
}

export type AsyncInitializeListRequestProps = {
  initializeRecord: PlatformCore.InitializeRecord[];
};

export class AsyncInitializeListRequest {
  initializeRecord: PlatformCore.InitializeRecord[];
  constructor(props: AsyncInitializeListRequestProps) {
    this.initializeRecord = props.initializeRecord;
  }
}

export type GetCurrencyRateResponseProps = {
  getCurrencyRateResult: PlatformCore.GetCurrencyRateResult;
};

export class GetCurrencyRateResponse {
  getCurrencyRateResult: PlatformCore.GetCurrencyRateResult;
  constructor(props: GetCurrencyRateResponseProps) {
    this.getCurrencyRateResult = props.getCurrencyRateResult;
  }
}

export type GetSavedSearchRequestProps = {
  record: PlatformCore.GetSavedSearchRecord;
};

export class GetSavedSearchRequest {
  record: PlatformCore.GetSavedSearchRecord;
  constructor(props: GetSavedSearchRequestProps) {
    this.record = props.record;
  }
}

export type SessionResponseProps = {
  status: PlatformCore.Status;
  userId?: PlatformCore.RecordRef;
  wsRoleList?: PlatformCore.WsRoleList;
};

export class SessionResponse {
  status: PlatformCore.Status;
  userId?: PlatformCore.RecordRef;
  wsRoleList?: PlatformCore.WsRoleList;
  constructor(props: SessionResponseProps) {
    this.status = props.status;
    this.userId = props.userId;
    this.wsRoleList = props.wsRoleList;
  }
}

export type AddListResponseProps = {
  writeResponseList: WriteResponseList;
};

export class AddListResponse {
  writeResponseList: WriteResponseList;
  constructor(props: AddListResponseProps) {
    this.writeResponseList = props.writeResponseList;
  }
}

export type LoginRequestProps = {
  passport: PlatformCore.Passport;
};

export class LoginRequest {
  passport: PlatformCore.Passport;
  constructor(props: LoginRequestProps) {
    this.passport = props.passport;
  }
}

export type UpdateRequestProps = {
  record: PlatformCore.Record;
};

export class UpdateRequest {
  record: PlatformCore.Record;
  constructor(props: UpdateRequestProps) {
    this.record = props.record;
  }
}

export type GetAsyncResultRequestProps = {
  jobId: string;
  pageIndex: number;
};

export class GetAsyncResultRequest {
  jobId: string;
  pageIndex: number;
  constructor(props: GetAsyncResultRequestProps) {
    this.jobId = props.jobId;
    this.pageIndex = props.pageIndex;
  }
}

export type ReadResponseProps = {
  status: PlatformCore.Status;
  record?: PlatformCore.Record;
};

export class ReadResponse {
  status: PlatformCore.Status;
  record?: PlatformCore.Record;
  constructor(props: ReadResponseProps) {
    this.status = props.status;
    this.record = props.record;
  }
}

export type AsyncDeleteListResultProps = {
  writeResponseList: WriteResponseList;
};

export class AsyncDeleteListResult extends AsyncResult {
  writeResponseList: WriteResponseList;
  constructor(props: AsyncDeleteListResultProps) {
    super();
    this.writeResponseList = props.writeResponseList;
  }
}

export type SsoLoginRequestProps = {
  ssoPassport: PlatformCore.SsoPassport;
};

export class SsoLoginRequest {
  ssoPassport: PlatformCore.SsoPassport;
  constructor(props: SsoLoginRequestProps) {
    this.ssoPassport = props.ssoPassport;
  }
}

export type ApplicationInfoProps = {
  applicationId: string;
};

export class ApplicationInfo {
  applicationId: string;
  constructor(props: ApplicationInfoProps) {
    this.applicationId = props.applicationId;
  }
}

export type PartnerInfoProps = {
  partnerId?: string;
};

export class PartnerInfo {
  partnerId?: string;
  constructor(props: PartnerInfoProps) {
    this.partnerId = props.partnerId;
  }
}

export type AddListRequestProps = {
  record: PlatformCore.Record[];
};

export class AddListRequest {
  record: PlatformCore.Record[];
  constructor(props: AddListRequestProps) {
    this.record = props.record;
  }
}

export type UpdateListRequestProps = {
  record: PlatformCore.Record[];
};

export class UpdateListRequest {
  record: PlatformCore.Record[];
  constructor(props: UpdateListRequestProps) {
    this.record = props.record;
  }
}

export type UpdateListResponseProps = {
  writeResponseList: WriteResponseList;
};

export class UpdateListResponse {
  writeResponseList: WriteResponseList;
  constructor(props: UpdateListResponseProps) {
    this.writeResponseList = props.writeResponseList;
  }
}

export type GetCustomizationIdResponseProps = {
  getCustomizationIdResult: PlatformCore.GetCustomizationIdResult;
};

export class GetCustomizationIdResponse {
  getCustomizationIdResult: PlatformCore.GetCustomizationIdResult;
  constructor(props: GetCustomizationIdResponseProps) {
    this.getCustomizationIdResult = props.getCustomizationIdResult;
  }
}

export type SearchMoreWithIdResponseProps = {
  searchResult: PlatformCore.SearchResult;
};

export class SearchMoreWithIdResponse {
  searchResult: PlatformCore.SearchResult;
  constructor(props: SearchMoreWithIdResponseProps) {
    this.searchResult = props.searchResult;
  }
}

export type ChangeEmailResponseProps = {
  sessionResponse: SessionResponse;
};

export class ChangeEmailResponse {
  sessionResponse: SessionResponse;
  constructor(props: ChangeEmailResponseProps) {
    this.sessionResponse = props.sessionResponse;
  }
}

export type GetDeletedResponseProps = {
  getDeletedResult: PlatformCore.GetDeletedResult;
};

export class GetDeletedResponse {
  getDeletedResult: PlatformCore.GetDeletedResult;
  constructor(props: GetDeletedResponseProps) {
    this.getDeletedResult = props.getDeletedResult;
  }
}

export type GetItemAvailabilityResponseProps = {
  getItemAvailabilityResult: PlatformCore.GetItemAvailabilityResult;
};

export class GetItemAvailabilityResponse {
  getItemAvailabilityResult: PlatformCore.GetItemAvailabilityResult;
  constructor(props: GetItemAvailabilityResponseProps) {
    this.getItemAvailabilityResult = props.getItemAvailabilityResult;
  }
}

export type GetItemAvailabilityRequestProps = {
  itemAvailabilityFilter: PlatformCore.ItemAvailabilityFilter;
};

export class GetItemAvailabilityRequest {
  itemAvailabilityFilter: PlatformCore.ItemAvailabilityFilter;
  constructor(props: GetItemAvailabilityRequestProps) {
    this.itemAvailabilityFilter = props.itemAvailabilityFilter;
  }
}

export type GetDataCenterUrlsRequestProps = {
  account: string;
};

export class GetDataCenterUrlsRequest {
  account: string;
  constructor(props: GetDataCenterUrlsRequestProps) {
    this.account = props.account;
  }
}

export type AsyncStatusResponseProps = {
  asyncStatusResult: PlatformCore.AsyncStatusResult;
};

export class AsyncStatusResponse {
  asyncStatusResult: PlatformCore.AsyncStatusResult;
  constructor(props: AsyncStatusResponseProps) {
    this.asyncStatusResult = props.asyncStatusResult;
  }
}

export type GetCurrencyRateRequestProps = {
  currencyRateFilter: PlatformCore.CurrencyRateFilter;
};

export class GetCurrencyRateRequest {
  currencyRateFilter: PlatformCore.CurrencyRateFilter;
  constructor(props: GetCurrencyRateRequestProps) {
    this.currencyRateFilter = props.currencyRateFilter;
  }
}

export type GetCustomizationIdRequestProps = {
  customizationType: PlatformCore.CustomizationType;
  includeInactives: boolean;
};

export class GetCustomizationIdRequest {
  customizationType: PlatformCore.CustomizationType;
  includeInactives: boolean;
  constructor(props: GetCustomizationIdRequestProps) {
    this.customizationType = props.customizationType;
    this.includeInactives = props.includeInactives;
  }
}

export type GetSelectValueRequestProps = {
  fieldDescription: PlatformCore.GetSelectValueFieldDescription;
  pageIndex: number;
};

export class GetSelectValueRequest {
  fieldDescription: PlatformCore.GetSelectValueFieldDescription;
  pageIndex: number;
  constructor(props: GetSelectValueRequestProps) {
    this.fieldDescription = props.fieldDescription;
    this.pageIndex = props.pageIndex;
  }
}

export type SearchNextResponseProps = {
  searchResult: PlatformCore.SearchResult;
};

export class SearchNextResponse {
  searchResult: PlatformCore.SearchResult;
  constructor(props: SearchNextResponseProps) {
    this.searchResult = props.searchResult;
  }
}

export type AsyncSearchRequestProps = {
  searchRecord: PlatformCore.SearchRecord;
};

export class AsyncSearchRequest {
  searchRecord: PlatformCore.SearchRecord;
  constructor(props: AsyncSearchRequestProps) {
    this.searchRecord = props.searchRecord;
  }
}

export type GetListRequestProps = {
  baseRef: PlatformCore.BaseRef[];
};

export class GetListRequest {
  baseRef: PlatformCore.BaseRef[];
  constructor(props: GetListRequestProps) {
    this.baseRef = props.baseRef;
  }
}

export type AsyncUpdateListResultProps = {
  writeResponseList: WriteResponseList;
};

export class AsyncUpdateListResult extends AsyncResult {
  writeResponseList: WriteResponseList;
  constructor(props: AsyncUpdateListResultProps) {
    super();
    this.writeResponseList = props.writeResponseList;
  }
}

export type AsyncUpdateListRequestProps = {
  record: PlatformCore.Record[];
};

export class AsyncUpdateListRequest {
  record: PlatformCore.Record[];
  constructor(props: AsyncUpdateListRequestProps) {
    this.record = props.record;
  }
}

export type ChangeEmailRequestProps = {
  changeEmail: PlatformCore.ChangeEmail;
};

export class ChangeEmailRequest {
  changeEmail: PlatformCore.ChangeEmail;
  constructor(props: ChangeEmailRequestProps) {
    this.changeEmail = props.changeEmail;
  }
}

export type GetBudgetExchangeRateRequestProps = {
  budgetExchangeRateFilter: PlatformCore.BudgetExchangeRateFilter;
};

export class GetBudgetExchangeRateRequest {
  budgetExchangeRateFilter: PlatformCore.BudgetExchangeRateFilter;
  constructor(props: GetBudgetExchangeRateRequestProps) {
    this.budgetExchangeRateFilter = props.budgetExchangeRateFilter;
  }
}

export type SearchMoreResponseProps = {
  searchResult: PlatformCore.SearchResult;
};

export class SearchMoreResponse {
  searchResult: PlatformCore.SearchResult;
  constructor(props: SearchMoreResponseProps) {
    this.searchResult = props.searchResult;
  }
}

export type GetAsyncResultResponseProps = {
  asyncResult: AsyncResult;
};

export class GetAsyncResultResponse {
  asyncResult: AsyncResult;
  constructor(props: GetAsyncResultResponseProps) {
    this.asyncResult = props.asyncResult;
  }
}

export type SearchMoreWithIdRequestProps = {
  searchId: string;
  pageIndex: number;
};

export class SearchMoreWithIdRequest {
  searchId: string;
  pageIndex: number;
  constructor(props: SearchMoreWithIdRequestProps) {
    this.searchId = props.searchId;
    this.pageIndex = props.pageIndex;
  }
}

export class SearchNextRequest {}

export type DetachRequestProps = {
  detachReference: PlatformCore.DetachReference;
};

export class DetachRequest {
  detachReference: PlatformCore.DetachReference;
  constructor(props: DetachRequestProps) {
    this.detachReference = props.detachReference;
  }
}

export type SearchResponseProps = {
  searchResult: PlatformCore.SearchResult;
};

export class SearchResponse {
  searchResult: PlatformCore.SearchResult;
  constructor(props: SearchResponseProps) {
    this.searchResult = props.searchResult;
  }
}

export type GetAllResponseProps = {
  getAllResult: PlatformCore.GetAllResult;
};

export class GetAllResponse {
  getAllResult: PlatformCore.GetAllResult;
  constructor(props: GetAllResponseProps) {
    this.getAllResult = props.getAllResult;
  }
}

export type AddResponseProps = {
  writeResponse: WriteResponse;
};

export class AddResponse {
  writeResponse: WriteResponse;
  constructor(props: AddResponseProps) {
    this.writeResponse = props.writeResponse;
  }
}

export type GetDataCenterUrlsResponseProps = {
  getDataCenterUrlsResult: PlatformCore.GetDataCenterUrlsResult;
};

export class GetDataCenterUrlsResponse {
  getDataCenterUrlsResult: PlatformCore.GetDataCenterUrlsResult;
  constructor(props: GetDataCenterUrlsResponseProps) {
    this.getDataCenterUrlsResult = props.getDataCenterUrlsResult;
  }
}

export type AsyncGetListResultProps = {
  readResponseList: ReadResponseList;
};

export class AsyncGetListResult extends AsyncResult {
  readResponseList: ReadResponseList;
  constructor(props: AsyncGetListResultProps) {
    super();
    this.readResponseList = props.readResponseList;
  }
}

export type UpsertRequestProps = {
  record: PlatformCore.Record;
};

export class UpsertRequest {
  record: PlatformCore.Record;
  constructor(props: UpsertRequestProps) {
    this.record = props.record;
  }
}

export type GetAllRequestProps = {
  record: PlatformCore.GetAllRecord;
};

export class GetAllRequest {
  record: PlatformCore.GetAllRecord;
  constructor(props: GetAllRequestProps) {
    this.record = props.record;
  }
}

export type MapSsoResponseProps = {
  sessionResponse: SessionResponse;
};

export class MapSsoResponse {
  sessionResponse: SessionResponse;
  constructor(props: MapSsoResponseProps) {
    this.sessionResponse = props.sessionResponse;
  }
}

export type SearchMoreRequestProps = {
  pageIndex: number;
};

export class SearchMoreRequest {
  pageIndex: number;
  constructor(props: SearchMoreRequestProps) {
    this.pageIndex = props.pageIndex;
  }
}

export type GetDeletedRequestProps = {
  getDeletedFilter: PlatformCore.GetDeletedFilter;
  pageIndex: number;
};

export class GetDeletedRequest {
  getDeletedFilter: PlatformCore.GetDeletedFilter;
  pageIndex: number;
  constructor(props: GetDeletedRequestProps) {
    this.getDeletedFilter = props.getDeletedFilter;
    this.pageIndex = props.pageIndex;
  }
}

export type DeleteRequestProps = {
  baseRef: PlatformCore.BaseRef;
  deletionReason?: PlatformCore.DeletionReason;
};

export class DeleteRequest {
  baseRef: PlatformCore.BaseRef;
  deletionReason?: PlatformCore.DeletionReason;
  constructor(props: DeleteRequestProps) {
    this.baseRef = props.baseRef;
    this.deletionReason = props.deletionReason;
  }
}

export type AsyncInitializeListResultProps = {
  readResponseList: ReadResponseList;
};

export class AsyncInitializeListResult extends AsyncResult {
  readResponseList: ReadResponseList;
  constructor(props: AsyncInitializeListResultProps) {
    super();
    this.readResponseList = props.readResponseList;
  }
}

export type ChangePasswordRequestProps = {
  changePassword: PlatformCore.ChangePassword;
};

export class ChangePasswordRequest {
  changePassword: PlatformCore.ChangePassword;
  constructor(props: ChangePasswordRequestProps) {
    this.changePassword = props.changePassword;
  }
}

export type WriteResponseListProps = {
  status?: PlatformCore.Status;
  writeResponse: WriteResponse[];
};

export class WriteResponseList {
  status?: PlatformCore.Status;
  writeResponse: WriteResponse[];
  constructor(props: WriteResponseListProps) {
    this.status = props.status;
    this.writeResponse = props.writeResponse;
  }
}

export type GetBudgetExchangeRateResponseProps = {
  getBudgetExchangeRateResult: PlatformCore.GetBudgetExchangeRateResult;
};

export class GetBudgetExchangeRateResponse {
  getBudgetExchangeRateResult: PlatformCore.GetBudgetExchangeRateResult;
  constructor(props: GetBudgetExchangeRateResponseProps) {
    this.getBudgetExchangeRateResult = props.getBudgetExchangeRateResult;
  }
}

export type ReadResponseListProps = {
  status?: PlatformCore.Status;
  readResponse?: ReadResponse[];
};

export class ReadResponseList {
  status?: PlatformCore.Status;
  readResponse?: ReadResponse[];
  constructor(props: ReadResponseListProps) {
    this.status = props.status;
    this.readResponse = props.readResponse;
  }
}

export type UpsertResponseProps = {
  writeResponse: WriteResponse;
};

export class UpsertResponse {
  writeResponse: WriteResponse;
  constructor(props: UpsertResponseProps) {
    this.writeResponse = props.writeResponse;
  }
}

export class GetServerTimeRequest {}

export class LogoutRequest {}

export type UpsertListRequestProps = {
  record: PlatformCore.Record[];
};

export class UpsertListRequest {
  record: PlatformCore.Record[];
  constructor(props: UpsertListRequestProps) {
    this.record = props.record;
  }
}

export type GetPostingTransactionSummaryRequestProps = {
  fields?: PlatformCore.PostingTransactionSummaryField;
  filters?: PlatformCore.PostingTransactionSummaryFilter;
  pageIndex: number;
  operationId?: string;
};

export class GetPostingTransactionSummaryRequest {
  fields?: PlatformCore.PostingTransactionSummaryField;
  filters?: PlatformCore.PostingTransactionSummaryFilter;
  pageIndex: number;
  operationId?: string;
  constructor(props: GetPostingTransactionSummaryRequestProps) {
    this.fields = props.fields;
    this.filters = props.filters;
    this.pageIndex = props.pageIndex;
    this.operationId = props.operationId;
  }
}

export type UpsertListResponseProps = {
  writeResponseList: WriteResponseList;
};

export class UpsertListResponse {
  writeResponseList: WriteResponseList;
  constructor(props: UpsertListResponseProps) {
    this.writeResponseList = props.writeResponseList;
  }
}

export type ChangePasswordResponseProps = {
  sessionResponse: SessionResponse;
};

export class ChangePasswordResponse {
  sessionResponse: SessionResponse;
  constructor(props: ChangePasswordResponseProps) {
    this.sessionResponse = props.sessionResponse;
  }
}

export type DeleteListResponseProps = {
  writeResponseList: WriteResponseList;
};

export class DeleteListResponse {
  writeResponseList: WriteResponseList;
  constructor(props: DeleteListResponseProps) {
    this.writeResponseList = props.writeResponseList;
  }
}

export type UpdateInviteeStatusResponseProps = {
  writeResponse: WriteResponse;
};

export class UpdateInviteeStatusResponse {
  writeResponse: WriteResponse;
  constructor(props: UpdateInviteeStatusResponseProps) {
    this.writeResponse = props.writeResponse;
  }
}

export type AsyncAddListRequestProps = {
  record: PlatformCore.Record[];
};

export class AsyncAddListRequest {
  record: PlatformCore.Record[];
  constructor(props: AsyncAddListRequestProps) {
    this.record = props.record;
  }
}

export type InitializeRequestProps = {
  initializeRecord: PlatformCore.InitializeRecord;
};

export class InitializeRequest {
  initializeRecord: PlatformCore.InitializeRecord;
  constructor(props: InitializeRequestProps) {
    this.initializeRecord = props.initializeRecord;
  }
}

export type InitializeListRequestProps = {
  initializeRecord: PlatformCore.InitializeRecord[];
};

export class InitializeListRequest {
  initializeRecord: PlatformCore.InitializeRecord[];
  constructor(props: InitializeListRequestProps) {
    this.initializeRecord = props.initializeRecord;
  }
}

export type PreferencesProps = {
  warningAsError?: boolean;
  disableMandatoryCustomFieldValidation?: boolean;
  disableSystemNotesForCustomFields?: boolean;
  ignoreReadOnlyFields?: boolean;
  runServerSuiteScriptAndTriggerWorkflows?: boolean;
};

export class Preferences {
  warningAsError?: boolean;
  disableMandatoryCustomFieldValidation?: boolean;
  disableSystemNotesForCustomFields?: boolean;
  ignoreReadOnlyFields?: boolean;
  runServerSuiteScriptAndTriggerWorkflows?: boolean;
  constructor(props: PreferencesProps) {
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

export type GetListResponseProps = {
  readResponseList: ReadResponseList;
};

export class GetListResponse {
  readResponseList: ReadResponseList;
  constructor(props: GetListResponseProps) {
    this.readResponseList = props.readResponseList;
  }
}

export type AttachResponseProps = {
  writeResponse: WriteResponse;
};

export class AttachResponse {
  writeResponse: WriteResponse;
  constructor(props: AttachResponseProps) {
    this.writeResponse = props.writeResponse;
  }
}

export type UpdateInviteeStatusListResponseProps = {
  writeResponseList: WriteResponseList;
};

export class UpdateInviteeStatusListResponse {
  writeResponseList: WriteResponseList;
  constructor(props: UpdateInviteeStatusListResponseProps) {
    this.writeResponseList = props.writeResponseList;
  }
}

export type LoginResponseProps = {
  sessionResponse: SessionResponse;
};

export class LoginResponse {
  sessionResponse: SessionResponse;
  constructor(props: LoginResponseProps) {
    this.sessionResponse = props.sessionResponse;
  }
}
