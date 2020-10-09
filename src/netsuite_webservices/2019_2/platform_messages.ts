import * as SoapTypes from "../../util/soap-types";
import * as PlatformCore from "./platform_core";

const mappingsName = "com_netsuite_webservices_platform_messages_2019_2";

export class SearchPreferences extends SoapTypes.Base {
  bodyFieldsOnly?: boolean;
  returnSearchColumns?: boolean;
  pageSize?: number;
  constructor(props: SearchPreferences) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.bodyFieldsOnly = props.bodyFieldsOnly;
    this.returnSearchColumns = props.returnSearchColumns;
    this.pageSize = props.pageSize;
  }
}

export class DeleteListRequest extends SoapTypes.Base {
  baseRef: PlatformCore.BaseRef[];
  deletionReason?: PlatformCore.DeletionReason;
  constructor(props: DeleteListRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.baseRef = props.baseRef;
    this.deletionReason = props.deletionReason;
  }
}

export class MapSsoRequest extends SoapTypes.Base {
  ssoCredentials: PlatformCore.SsoCredentials;
  constructor(props: MapSsoRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.ssoCredentials = props.ssoCredentials;
  }
}

export class DocumentInfo extends SoapTypes.Base {
  nsId: string;
  constructor(props: DocumentInfo) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.nsId = props.nsId;
  }
}

export class AsyncUpsertListRequest extends SoapTypes.Base {
  record: PlatformCore.Record[];
  constructor(props: AsyncUpsertListRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.record = props.record;
  }
}

export class AttachRequest extends SoapTypes.Base {
  attachReference: PlatformCore.AttachReference;
  constructor(props: AttachRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.attachReference = props.attachReference;
  }
}

export class DetachResponse extends SoapTypes.Base {
  writeResponse: WriteResponse;
  constructor(props: DetachResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.writeResponse = props.writeResponse;
  }
}

export class UpdateInviteeStatusListRequest extends SoapTypes.Base {
  updateInviteeStatusReference: PlatformCore.UpdateInviteeStatusReference[];
  constructor(props: UpdateInviteeStatusListRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.updateInviteeStatusReference = props.updateInviteeStatusReference;
  }
}

export class AsyncGetListRequest extends SoapTypes.Base {
  baseRef: PlatformCore.BaseRef[];
  constructor(props: AsyncGetListRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.baseRef = props.baseRef;
  }
}

export class UpdateResponse extends SoapTypes.Base {
  writeResponse: WriteResponse;
  constructor(props: UpdateResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.writeResponse = props.writeResponse;
  }
}

export class GetSavedSearchResponse extends SoapTypes.Base {
  getSavedSearchResult: PlatformCore.GetSavedSearchResult;
  constructor(props: GetSavedSearchResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.getSavedSearchResult = props.getSavedSearchResult;
  }
}

export class InitializeResponse extends SoapTypes.Base {
  readResponse: ReadResponse;
  constructor(props: InitializeResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.readResponse = props.readResponse;
  }
}

export class GetPostingTransactionSummaryResponse extends SoapTypes.Base {
  getPostingTransactionSummaryResult: PlatformCore.GetPostingTransactionSummaryResult;
  constructor(props: GetPostingTransactionSummaryResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.getPostingTransactionSummaryResult = props.getPostingTransactionSummaryResult;
  }
}

export class DeleteResponse extends SoapTypes.Base {
  writeResponse: WriteResponse;
  constructor(props: DeleteResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.writeResponse = props.writeResponse;
  }
}

export class AsyncResult extends SoapTypes.Base {
  constructor(props: AsyncResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class AsyncAddListResult extends AsyncResult {
  writeResponseList: WriteResponseList;
  constructor(props: AsyncAddListResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.writeResponseList = props.writeResponseList;
  }
}

export class GetServerTimeResponse extends SoapTypes.Base {
  getServerTimeResult: PlatformCore.GetServerTimeResult;
  constructor(props: GetServerTimeResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.getServerTimeResult = props.getServerTimeResult;
  }
}

export class GetRequest extends SoapTypes.Base {
  baseRef: PlatformCore.BaseRef;
  constructor(props: GetRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.baseRef = props.baseRef;
  }
}

export class InitializeListResponse extends SoapTypes.Base {
  readResponseList: ReadResponseList;
  constructor(props: InitializeListResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.readResponseList = props.readResponseList;
  }
}

export class CheckAsyncStatusRequest extends SoapTypes.Base {
  jobId: string;
  constructor(props: CheckAsyncStatusRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.jobId = props.jobId;
  }
}

export class WriteResponse extends SoapTypes.Base {
  status: PlatformCore.Status;
  baseRef?: PlatformCore.BaseRef;
  constructor(props: WriteResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.status = props.status;
    this.baseRef = props.baseRef;
  }
}

export class GetResponse extends SoapTypes.Base {
  readResponse: ReadResponse;
  constructor(props: GetResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.readResponse = props.readResponse;
  }
}

export class AsyncUpsertListResult extends AsyncResult {
  writeResponseList: WriteResponseList;
  constructor(props: AsyncUpsertListResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.writeResponseList = props.writeResponseList;
  }
}

export class AddRequest extends SoapTypes.Base {
  record: PlatformCore.Record;
  constructor(props: AddRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.record = props.record;
  }
}

export class AsyncDeleteListRequest extends SoapTypes.Base {
  baseRef: PlatformCore.BaseRef[];
  deletionReason?: PlatformCore.DeletionReason;
  constructor(props: AsyncDeleteListRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.baseRef = props.baseRef;
    this.deletionReason = props.deletionReason;
  }
}

export class SearchRequest extends SoapTypes.Base {
  searchRecord: PlatformCore.SearchRecord;
  constructor(props: SearchRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchRecord = props.searchRecord;
  }
}

export class LogoutResponse extends SoapTypes.Base {
  sessionResponse: SessionResponse;
  constructor(props: LogoutResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.sessionResponse = props.sessionResponse;
  }
}

export class GetSelectValueResponse extends SoapTypes.Base {
  getSelectValueResult: PlatformCore.GetSelectValueResult;
  constructor(props: GetSelectValueResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.getSelectValueResult = props.getSelectValueResult;
  }
}

export class AsyncSearchResult extends AsyncResult {
  searchResult: PlatformCore.SearchResult;
  constructor(props: AsyncSearchResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchResult = props.searchResult;
  }
}

export class UpdateInviteeStatusRequest extends SoapTypes.Base {
  updateInviteeStatusReference: PlatformCore.UpdateInviteeStatusReference;
  constructor(props: UpdateInviteeStatusRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.updateInviteeStatusReference = props.updateInviteeStatusReference;
  }
}

export class SsoLoginResponse extends SoapTypes.Base {
  sessionResponse: SessionResponse;
  constructor(props: SsoLoginResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.sessionResponse = props.sessionResponse;
  }
}

export class AsyncInitializeListRequest extends SoapTypes.Base {
  initializeRecord: PlatformCore.InitializeRecord[];
  constructor(props: AsyncInitializeListRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.initializeRecord = props.initializeRecord;
  }
}

export class GetCurrencyRateResponse extends SoapTypes.Base {
  getCurrencyRateResult: PlatformCore.GetCurrencyRateResult;
  constructor(props: GetCurrencyRateResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.getCurrencyRateResult = props.getCurrencyRateResult;
  }
}

export class GetSavedSearchRequest extends SoapTypes.Base {
  record: PlatformCore.GetSavedSearchRecord;
  constructor(props: GetSavedSearchRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.record = props.record;
  }
}

export class SessionResponse extends SoapTypes.Base {
  status: PlatformCore.Status;
  userId?: PlatformCore.RecordRef;
  wsRoleList?: PlatformCore.WsRoleList;
  constructor(props: SessionResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.status = props.status;
    this.userId = props.userId;
    this.wsRoleList = props.wsRoleList;
  }
}

export class AddListResponse extends SoapTypes.Base {
  writeResponseList: WriteResponseList;
  constructor(props: AddListResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.writeResponseList = props.writeResponseList;
  }
}

export class LoginRequest extends SoapTypes.Base {
  passport: PlatformCore.Passport;
  constructor(props: LoginRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.passport = props.passport;
  }
}

export class UpdateRequest extends SoapTypes.Base {
  record: PlatformCore.Record;
  constructor(props: UpdateRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.record = props.record;
  }
}

export class GetAsyncResultRequest extends SoapTypes.Base {
  jobId: string;
  pageIndex: number;
  constructor(props: GetAsyncResultRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.jobId = props.jobId;
    this.pageIndex = props.pageIndex;
  }
}

export class ReadResponse extends SoapTypes.Base {
  status: PlatformCore.Status;
  record?: PlatformCore.Record;
  constructor(props: ReadResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.status = props.status;
    this.record = props.record;
  }
}

export class AsyncDeleteListResult extends AsyncResult {
  writeResponseList: WriteResponseList;
  constructor(props: AsyncDeleteListResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.writeResponseList = props.writeResponseList;
  }
}

export class SsoLoginRequest extends SoapTypes.Base {
  ssoPassport: PlatformCore.SsoPassport;
  constructor(props: SsoLoginRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.ssoPassport = props.ssoPassport;
  }
}

export class ApplicationInfo extends SoapTypes.Base {
  applicationId: string;
  constructor(props: ApplicationInfo) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.applicationId = props.applicationId;
  }
}

export class PartnerInfo extends SoapTypes.Base {
  partnerId?: string;
  constructor(props: PartnerInfo) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.partnerId = props.partnerId;
  }
}

export class AddListRequest extends SoapTypes.Base {
  record: PlatformCore.Record[];
  constructor(props: AddListRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.record = props.record;
  }
}

export class UpdateListRequest extends SoapTypes.Base {
  record: PlatformCore.Record[];
  constructor(props: UpdateListRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.record = props.record;
  }
}

export class UpdateListResponse extends SoapTypes.Base {
  writeResponseList: WriteResponseList;
  constructor(props: UpdateListResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.writeResponseList = props.writeResponseList;
  }
}

export class GetCustomizationIdResponse extends SoapTypes.Base {
  getCustomizationIdResult: PlatformCore.GetCustomizationIdResult;
  constructor(props: GetCustomizationIdResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.getCustomizationIdResult = props.getCustomizationIdResult;
  }
}

export class SearchMoreWithIdResponse extends SoapTypes.Base {
  searchResult: PlatformCore.SearchResult;
  constructor(props: SearchMoreWithIdResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchResult = props.searchResult;
  }
}

export class ChangeEmailResponse extends SoapTypes.Base {
  sessionResponse: SessionResponse;
  constructor(props: ChangeEmailResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.sessionResponse = props.sessionResponse;
  }
}

export class GetDeletedResponse extends SoapTypes.Base {
  getDeletedResult: PlatformCore.GetDeletedResult;
  constructor(props: GetDeletedResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.getDeletedResult = props.getDeletedResult;
  }
}

export class GetItemAvailabilityResponse extends SoapTypes.Base {
  getItemAvailabilityResult: PlatformCore.GetItemAvailabilityResult;
  constructor(props: GetItemAvailabilityResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.getItemAvailabilityResult = props.getItemAvailabilityResult;
  }
}

export class GetItemAvailabilityRequest extends SoapTypes.Base {
  itemAvailabilityFilter: PlatformCore.ItemAvailabilityFilter;
  constructor(props: GetItemAvailabilityRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.itemAvailabilityFilter = props.itemAvailabilityFilter;
  }
}

export class GetDataCenterUrlsRequest extends SoapTypes.Base {
  account: string;
  constructor(props: GetDataCenterUrlsRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.account = props.account;
  }
}

export class AsyncStatusResponse extends SoapTypes.Base {
  asyncStatusResult: PlatformCore.AsyncStatusResult;
  constructor(props: AsyncStatusResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.asyncStatusResult = props.asyncStatusResult;
  }
}

export class GetCurrencyRateRequest extends SoapTypes.Base {
  currencyRateFilter: PlatformCore.CurrencyRateFilter;
  constructor(props: GetCurrencyRateRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.currencyRateFilter = props.currencyRateFilter;
  }
}

export class GetCustomizationIdRequest extends SoapTypes.Base {
  customizationType: PlatformCore.CustomizationType;
  includeInactives: boolean;
  constructor(props: GetCustomizationIdRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customizationType = props.customizationType;
    this.includeInactives = props.includeInactives;
  }
}

export class GetSelectValueRequest extends SoapTypes.Base {
  fieldDescription: PlatformCore.GetSelectValueFieldDescription;
  pageIndex: number;
  constructor(props: GetSelectValueRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.fieldDescription = props.fieldDescription;
    this.pageIndex = props.pageIndex;
  }
}

export class SearchNextResponse extends SoapTypes.Base {
  searchResult: PlatformCore.SearchResult;
  constructor(props: SearchNextResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchResult = props.searchResult;
  }
}

export class AsyncSearchRequest extends SoapTypes.Base {
  searchRecord: PlatformCore.SearchRecord;
  constructor(props: AsyncSearchRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchRecord = props.searchRecord;
  }
}

export class GetListRequest extends SoapTypes.Base {
  baseRef: PlatformCore.BaseRef[];
  constructor(props: GetListRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.baseRef = props.baseRef;
  }
}

export class AsyncUpdateListResult extends AsyncResult {
  writeResponseList: WriteResponseList;
  constructor(props: AsyncUpdateListResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.writeResponseList = props.writeResponseList;
  }
}

export class AsyncUpdateListRequest extends SoapTypes.Base {
  record: PlatformCore.Record[];
  constructor(props: AsyncUpdateListRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.record = props.record;
  }
}

export class ChangeEmailRequest extends SoapTypes.Base {
  changeEmail: PlatformCore.ChangeEmail;
  constructor(props: ChangeEmailRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.changeEmail = props.changeEmail;
  }
}

export class GetBudgetExchangeRateRequest extends SoapTypes.Base {
  budgetExchangeRateFilter: PlatformCore.BudgetExchangeRateFilter;
  constructor(props: GetBudgetExchangeRateRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.budgetExchangeRateFilter = props.budgetExchangeRateFilter;
  }
}

export class SearchMoreResponse extends SoapTypes.Base {
  searchResult: PlatformCore.SearchResult;
  constructor(props: SearchMoreResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchResult = props.searchResult;
  }
}

export class GetAsyncResultResponse extends SoapTypes.Base {
  asyncResult: AsyncResult;
  constructor(props: GetAsyncResultResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.asyncResult = props.asyncResult;
  }
}

export class SearchMoreWithIdRequest extends SoapTypes.Base {
  searchId: string;
  pageIndex: number;
  constructor(props: SearchMoreWithIdRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchId = props.searchId;
    this.pageIndex = props.pageIndex;
  }
}

export class SearchNextRequest extends SoapTypes.Base {
  constructor(props: SearchNextRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class DetachRequest extends SoapTypes.Base {
  detachReference: PlatformCore.DetachReference;
  constructor(props: DetachRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.detachReference = props.detachReference;
  }
}

export class SearchResponse extends SoapTypes.Base {
  searchResult: PlatformCore.SearchResult;
  constructor(props: SearchResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchResult = props.searchResult;
  }
}

export class GetAllResponse extends SoapTypes.Base {
  getAllResult: PlatformCore.GetAllResult;
  constructor(props: GetAllResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.getAllResult = props.getAllResult;
  }
}

export class AddResponse extends SoapTypes.Base {
  writeResponse: WriteResponse;
  constructor(props: AddResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.writeResponse = props.writeResponse;
  }
}

export class GetDataCenterUrlsResponse extends SoapTypes.Base {
  getDataCenterUrlsResult: PlatformCore.GetDataCenterUrlsResult;
  constructor(props: GetDataCenterUrlsResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.getDataCenterUrlsResult = props.getDataCenterUrlsResult;
  }
}

export class AsyncGetListResult extends AsyncResult {
  readResponseList: ReadResponseList;
  constructor(props: AsyncGetListResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.readResponseList = props.readResponseList;
  }
}

export class UpsertRequest extends SoapTypes.Base {
  record: PlatformCore.Record;
  constructor(props: UpsertRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.record = props.record;
  }
}

export class GetAllRequest extends SoapTypes.Base {
  record: PlatformCore.GetAllRecord;
  constructor(props: GetAllRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.record = props.record;
  }
}

export class MapSsoResponse extends SoapTypes.Base {
  sessionResponse: SessionResponse;
  constructor(props: MapSsoResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.sessionResponse = props.sessionResponse;
  }
}

export class SearchMoreRequest extends SoapTypes.Base {
  pageIndex: number;
  constructor(props: SearchMoreRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.pageIndex = props.pageIndex;
  }
}

export class GetDeletedRequest extends SoapTypes.Base {
  getDeletedFilter: PlatformCore.GetDeletedFilter;
  pageIndex: number;
  constructor(props: GetDeletedRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.getDeletedFilter = props.getDeletedFilter;
    this.pageIndex = props.pageIndex;
  }
}

export class DeleteRequest extends SoapTypes.Base {
  baseRef: PlatformCore.BaseRef;
  deletionReason?: PlatformCore.DeletionReason;
  constructor(props: DeleteRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.baseRef = props.baseRef;
    this.deletionReason = props.deletionReason;
  }
}

export class AsyncInitializeListResult extends AsyncResult {
  readResponseList: ReadResponseList;
  constructor(props: AsyncInitializeListResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.readResponseList = props.readResponseList;
  }
}

export class ChangePasswordRequest extends SoapTypes.Base {
  changePassword: PlatformCore.ChangePassword;
  constructor(props: ChangePasswordRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.changePassword = props.changePassword;
  }
}

export class WriteResponseList extends SoapTypes.Base {
  status?: PlatformCore.Status;
  writeResponse: WriteResponse[];
  constructor(props: WriteResponseList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.status = props.status;
    this.writeResponse = props.writeResponse;
  }
}

export class GetBudgetExchangeRateResponse extends SoapTypes.Base {
  getBudgetExchangeRateResult: PlatformCore.GetBudgetExchangeRateResult;
  constructor(props: GetBudgetExchangeRateResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.getBudgetExchangeRateResult = props.getBudgetExchangeRateResult;
  }
}

export class ReadResponseList extends SoapTypes.Base {
  status?: PlatformCore.Status;
  readResponse?: ReadResponse[];
  constructor(props: ReadResponseList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.status = props.status;
    this.readResponse = props.readResponse;
  }
}

export class UpsertResponse extends SoapTypes.Base {
  writeResponse: WriteResponse;
  constructor(props: UpsertResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.writeResponse = props.writeResponse;
  }
}

export class GetServerTimeRequest extends SoapTypes.Base {
  constructor(props: GetServerTimeRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class LogoutRequest extends SoapTypes.Base {
  constructor(props: LogoutRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class UpsertListRequest extends SoapTypes.Base {
  record: PlatformCore.Record[];
  constructor(props: UpsertListRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.record = props.record;
  }
}

export class GetPostingTransactionSummaryRequest extends SoapTypes.Base {
  fields?: PlatformCore.PostingTransactionSummaryField;
  filters?: PlatformCore.PostingTransactionSummaryFilter;
  pageIndex: number;
  operationId?: string;
  constructor(props: GetPostingTransactionSummaryRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.fields = props.fields;
    this.filters = props.filters;
    this.pageIndex = props.pageIndex;
    this.operationId = props.operationId;
  }
}

export class UpsertListResponse extends SoapTypes.Base {
  writeResponseList: WriteResponseList;
  constructor(props: UpsertListResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.writeResponseList = props.writeResponseList;
  }
}

export class ChangePasswordResponse extends SoapTypes.Base {
  sessionResponse: SessionResponse;
  constructor(props: ChangePasswordResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.sessionResponse = props.sessionResponse;
  }
}

export class DeleteListResponse extends SoapTypes.Base {
  writeResponseList: WriteResponseList;
  constructor(props: DeleteListResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.writeResponseList = props.writeResponseList;
  }
}

export class UpdateInviteeStatusResponse extends SoapTypes.Base {
  writeResponse: WriteResponse;
  constructor(props: UpdateInviteeStatusResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.writeResponse = props.writeResponse;
  }
}

export class AsyncAddListRequest extends SoapTypes.Base {
  record: PlatformCore.Record[];
  constructor(props: AsyncAddListRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.record = props.record;
  }
}

export class InitializeRequest extends SoapTypes.Base {
  initializeRecord: PlatformCore.InitializeRecord;
  constructor(props: InitializeRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.initializeRecord = props.initializeRecord;
  }
}

export class InitializeListRequest extends SoapTypes.Base {
  initializeRecord: PlatformCore.InitializeRecord[];
  constructor(props: InitializeListRequest) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.initializeRecord = props.initializeRecord;
  }
}

export class Preferences extends SoapTypes.Base {
  warningAsError?: boolean;
  disableMandatoryCustomFieldValidation?: boolean;
  disableSystemNotesForCustomFields?: boolean;
  ignoreReadOnlyFields?: boolean;
  runServerSuiteScriptAndTriggerWorkflows?: boolean;
  constructor(props: Preferences) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.warningAsError = props.warningAsError;
    this.disableMandatoryCustomFieldValidation = props.disableMandatoryCustomFieldValidation;
    this.disableSystemNotesForCustomFields = props.disableSystemNotesForCustomFields;
    this.ignoreReadOnlyFields = props.ignoreReadOnlyFields;
    this.runServerSuiteScriptAndTriggerWorkflows = props.runServerSuiteScriptAndTriggerWorkflows;
  }
}

export class GetListResponse extends SoapTypes.Base {
  readResponseList: ReadResponseList;
  constructor(props: GetListResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.readResponseList = props.readResponseList;
  }
}

export class AttachResponse extends SoapTypes.Base {
  writeResponse: WriteResponse;
  constructor(props: AttachResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.writeResponse = props.writeResponse;
  }
}

export class UpdateInviteeStatusListResponse extends SoapTypes.Base {
  writeResponseList: WriteResponseList;
  constructor(props: UpdateInviteeStatusListResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.writeResponseList = props.writeResponseList;
  }
}

export class LoginResponse extends SoapTypes.Base {
  sessionResponse: SessionResponse;
  constructor(props: LoginResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.sessionResponse = props.sessionResponse;
  }
}
