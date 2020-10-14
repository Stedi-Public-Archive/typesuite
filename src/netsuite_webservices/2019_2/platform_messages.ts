import * as PlatformCore from "./platform_core";
import { SoapMappingBase, propsWithMappingsName } from "../../soap-types";
const MAPPINGS_NAME = "com_netsuite_webservices_platform_messages_2019_2";
export type SearchPreferencesProps = {
  bodyFieldsOnly?: boolean;
  returnSearchColumns?: boolean;
  pageSize?: number;
};

export class SearchPreferences extends SoapMappingBase {
  bodyFieldsOnly?: boolean;
  returnSearchColumns?: boolean;
  pageSize?: number;
  constructor(props: SearchPreferencesProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.bodyFieldsOnly = props.bodyFieldsOnly;
    this.returnSearchColumns = props.returnSearchColumns;
    this.pageSize = props.pageSize;
  }
}

export type DeleteListRequestProps = {
  baseRef: PlatformCore.BaseRef[];
  deletionReason?: PlatformCore.DeletionReason;
};

export class DeleteListRequest extends SoapMappingBase {
  baseRef: PlatformCore.BaseRef[];
  deletionReason?: PlatformCore.DeletionReason;
  constructor(props: DeleteListRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.baseRef = props.baseRef;
    this.deletionReason = props.deletionReason;
  }
}

export type MapSsoRequestProps = {
  ssoCredentials: PlatformCore.SsoCredentials;
};

export class MapSsoRequest extends SoapMappingBase {
  ssoCredentials: PlatformCore.SsoCredentials;
  constructor(props: MapSsoRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.ssoCredentials = props.ssoCredentials;
  }
}

export type DocumentInfoProps = {
  nsId: string;
};

export class DocumentInfo extends SoapMappingBase {
  nsId: string;
  constructor(props: DocumentInfoProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.nsId = props.nsId;
  }
}

export type AsyncUpsertListRequestProps = {
  record: PlatformCore.Record[];
};

export class AsyncUpsertListRequest extends SoapMappingBase {
  record: PlatformCore.Record[];
  constructor(props: AsyncUpsertListRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.record = props.record;
  }
}

export type AttachRequestProps = {
  attachReference: PlatformCore.AttachReference;
};

export class AttachRequest extends SoapMappingBase {
  attachReference: PlatformCore.AttachReference;
  constructor(props: AttachRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.attachReference = props.attachReference;
  }
}

export type DetachResponseProps = {
  writeResponse: WriteResponse;
};

export class DetachResponse extends SoapMappingBase {
  writeResponse: WriteResponse;
  constructor(props: DetachResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.writeResponse = props.writeResponse;
  }
}

export type UpdateInviteeStatusListRequestProps = {
  updateInviteeStatusReference: PlatformCore.UpdateInviteeStatusReference[];
};

export class UpdateInviteeStatusListRequest extends SoapMappingBase {
  updateInviteeStatusReference: PlatformCore.UpdateInviteeStatusReference[];
  constructor(props: UpdateInviteeStatusListRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.updateInviteeStatusReference = props.updateInviteeStatusReference;
  }
}

export type AsyncGetListRequestProps = {
  baseRef: PlatformCore.BaseRef[];
};

export class AsyncGetListRequest extends SoapMappingBase {
  baseRef: PlatformCore.BaseRef[];
  constructor(props: AsyncGetListRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.baseRef = props.baseRef;
  }
}

export type UpdateResponseProps = {
  writeResponse: WriteResponse;
};

export class UpdateResponse extends SoapMappingBase {
  writeResponse: WriteResponse;
  constructor(props: UpdateResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.writeResponse = props.writeResponse;
  }
}

export type GetSavedSearchResponseProps = {
  getSavedSearchResult: PlatformCore.GetSavedSearchResult;
};

export class GetSavedSearchResponse extends SoapMappingBase {
  getSavedSearchResult: PlatformCore.GetSavedSearchResult;
  constructor(props: GetSavedSearchResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.getSavedSearchResult = props.getSavedSearchResult;
  }
}

export type InitializeResponseProps = {
  readResponse: ReadResponse;
};

export class InitializeResponse extends SoapMappingBase {
  readResponse: ReadResponse;
  constructor(props: InitializeResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.readResponse = props.readResponse;
  }
}

export type GetPostingTransactionSummaryResponseProps = {
  getPostingTransactionSummaryResult: PlatformCore.GetPostingTransactionSummaryResult;
};

export class GetPostingTransactionSummaryResponse extends SoapMappingBase {
  getPostingTransactionSummaryResult: PlatformCore.GetPostingTransactionSummaryResult;
  constructor(props: GetPostingTransactionSummaryResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.getPostingTransactionSummaryResult =
      props.getPostingTransactionSummaryResult;
  }
}

export type DeleteResponseProps = {
  writeResponse: WriteResponse;
};

export class DeleteResponse extends SoapMappingBase {
  writeResponse: WriteResponse;
  constructor(props: DeleteResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.writeResponse = props.writeResponse;
  }
}

export class AsyncResult extends SoapMappingBase {}

export type AsyncAddListResultProps = {
  writeResponseList: WriteResponseList;
};

export class AsyncAddListResult extends AsyncResult {
  writeResponseList: WriteResponseList;
  constructor(props: AsyncAddListResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.writeResponseList = props.writeResponseList;
  }
}

export type GetServerTimeResponseProps = {
  getServerTimeResult: PlatformCore.GetServerTimeResult;
};

export class GetServerTimeResponse extends SoapMappingBase {
  getServerTimeResult: PlatformCore.GetServerTimeResult;
  constructor(props: GetServerTimeResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.getServerTimeResult = props.getServerTimeResult;
  }
}

export type GetRequestProps = {
  baseRef: PlatformCore.BaseRef;
};

export class GetRequest extends SoapMappingBase {
  baseRef: PlatformCore.BaseRef;
  constructor(props: GetRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.baseRef = props.baseRef;
  }
}

export type InitializeListResponseProps = {
  readResponseList: ReadResponseList;
};

export class InitializeListResponse extends SoapMappingBase {
  readResponseList: ReadResponseList;
  constructor(props: InitializeListResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.readResponseList = props.readResponseList;
  }
}

export type CheckAsyncStatusRequestProps = {
  jobId: string;
};

export class CheckAsyncStatusRequest extends SoapMappingBase {
  jobId: string;
  constructor(props: CheckAsyncStatusRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.jobId = props.jobId;
  }
}

export type WriteResponseProps = {
  status: PlatformCore.Status;
  baseRef?: PlatformCore.BaseRef;
};

export class WriteResponse extends SoapMappingBase {
  status: PlatformCore.Status;
  baseRef?: PlatformCore.BaseRef;
  constructor(props: WriteResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.status = props.status;
    this.baseRef = props.baseRef;
  }
}

export type GetResponseProps = {
  readResponse: ReadResponse;
};

export class GetResponse extends SoapMappingBase {
  readResponse: ReadResponse;
  constructor(props: GetResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.readResponse = props.readResponse;
  }
}

export type AsyncUpsertListResultProps = {
  writeResponseList: WriteResponseList;
};

export class AsyncUpsertListResult extends AsyncResult {
  writeResponseList: WriteResponseList;
  constructor(props: AsyncUpsertListResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.writeResponseList = props.writeResponseList;
  }
}

export type AddRequestProps = {
  record: PlatformCore.Record;
};

export class AddRequest extends SoapMappingBase {
  record: PlatformCore.Record;
  constructor(props: AddRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.record = props.record;
  }
}

export type AsyncDeleteListRequestProps = {
  baseRef: PlatformCore.BaseRef[];
  deletionReason?: PlatformCore.DeletionReason;
};

export class AsyncDeleteListRequest extends SoapMappingBase {
  baseRef: PlatformCore.BaseRef[];
  deletionReason?: PlatformCore.DeletionReason;
  constructor(props: AsyncDeleteListRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.baseRef = props.baseRef;
    this.deletionReason = props.deletionReason;
  }
}

export type SearchRequestProps = {
  searchRecord: PlatformCore.SearchRecord;
};

export class SearchRequest extends SoapMappingBase {
  searchRecord: PlatformCore.SearchRecord;
  constructor(props: SearchRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchRecord = props.searchRecord;
  }
}

export type LogoutResponseProps = {
  sessionResponse: SessionResponse;
};

export class LogoutResponse extends SoapMappingBase {
  sessionResponse: SessionResponse;
  constructor(props: LogoutResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.sessionResponse = props.sessionResponse;
  }
}

export type GetSelectValueResponseProps = {
  getSelectValueResult: PlatformCore.GetSelectValueResult;
};

export class GetSelectValueResponse extends SoapMappingBase {
  getSelectValueResult: PlatformCore.GetSelectValueResult;
  constructor(props: GetSelectValueResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.getSelectValueResult = props.getSelectValueResult;
  }
}

export type AsyncSearchResultProps = {
  searchResult: PlatformCore.SearchResult;
};

export class AsyncSearchResult extends AsyncResult {
  searchResult: PlatformCore.SearchResult;
  constructor(props: AsyncSearchResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchResult = props.searchResult;
  }
}

export type UpdateInviteeStatusRequestProps = {
  updateInviteeStatusReference: PlatformCore.UpdateInviteeStatusReference;
};

export class UpdateInviteeStatusRequest extends SoapMappingBase {
  updateInviteeStatusReference: PlatformCore.UpdateInviteeStatusReference;
  constructor(props: UpdateInviteeStatusRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.updateInviteeStatusReference = props.updateInviteeStatusReference;
  }
}

export type SsoLoginResponseProps = {
  sessionResponse: SessionResponse;
};

export class SsoLoginResponse extends SoapMappingBase {
  sessionResponse: SessionResponse;
  constructor(props: SsoLoginResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.sessionResponse = props.sessionResponse;
  }
}

export type AsyncInitializeListRequestProps = {
  initializeRecord: PlatformCore.InitializeRecord[];
};

export class AsyncInitializeListRequest extends SoapMappingBase {
  initializeRecord: PlatformCore.InitializeRecord[];
  constructor(props: AsyncInitializeListRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.initializeRecord = props.initializeRecord;
  }
}

export type GetCurrencyRateResponseProps = {
  getCurrencyRateResult: PlatformCore.GetCurrencyRateResult;
};

export class GetCurrencyRateResponse extends SoapMappingBase {
  getCurrencyRateResult: PlatformCore.GetCurrencyRateResult;
  constructor(props: GetCurrencyRateResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.getCurrencyRateResult = props.getCurrencyRateResult;
  }
}

export type GetSavedSearchRequestProps = {
  record: PlatformCore.GetSavedSearchRecord;
};

export class GetSavedSearchRequest extends SoapMappingBase {
  record: PlatformCore.GetSavedSearchRecord;
  constructor(props: GetSavedSearchRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.record = props.record;
  }
}

export type SessionResponseProps = {
  status: PlatformCore.Status;
  userId?: PlatformCore.RecordRef;
  wsRoleList?: PlatformCore.WsRoleList;
};

export class SessionResponse extends SoapMappingBase {
  status: PlatformCore.Status;
  userId?: PlatformCore.RecordRef;
  wsRoleList?: PlatformCore.WsRoleList;
  constructor(props: SessionResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.status = props.status;
    this.userId = props.userId;
    this.wsRoleList = props.wsRoleList;
  }
}

export type AddListResponseProps = {
  writeResponseList: WriteResponseList;
};

export class AddListResponse extends SoapMappingBase {
  writeResponseList: WriteResponseList;
  constructor(props: AddListResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.writeResponseList = props.writeResponseList;
  }
}

export type LoginRequestProps = {
  passport: PlatformCore.Passport;
};

export class LoginRequest extends SoapMappingBase {
  passport: PlatformCore.Passport;
  constructor(props: LoginRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.passport = props.passport;
  }
}

export type UpdateRequestProps = {
  record: PlatformCore.Record;
};

export class UpdateRequest extends SoapMappingBase {
  record: PlatformCore.Record;
  constructor(props: UpdateRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.record = props.record;
  }
}

export type GetAsyncResultRequestProps = {
  jobId: string;
  pageIndex: number;
};

export class GetAsyncResultRequest extends SoapMappingBase {
  jobId: string;
  pageIndex: number;
  constructor(props: GetAsyncResultRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.jobId = props.jobId;
    this.pageIndex = props.pageIndex;
  }
}

export type ReadResponseProps = {
  status: PlatformCore.Status;
  record?: PlatformCore.Record;
};

export class ReadResponse extends SoapMappingBase {
  status: PlatformCore.Status;
  record?: PlatformCore.Record;
  constructor(props: ReadResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.writeResponseList = props.writeResponseList;
  }
}

export type SsoLoginRequestProps = {
  ssoPassport: PlatformCore.SsoPassport;
};

export class SsoLoginRequest extends SoapMappingBase {
  ssoPassport: PlatformCore.SsoPassport;
  constructor(props: SsoLoginRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.ssoPassport = props.ssoPassport;
  }
}

export type ApplicationInfoProps = {
  applicationId: string;
};

export class ApplicationInfo extends SoapMappingBase {
  applicationId: string;
  constructor(props: ApplicationInfoProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.applicationId = props.applicationId;
  }
}

export type PartnerInfoProps = {
  partnerId?: string;
};

export class PartnerInfo extends SoapMappingBase {
  partnerId?: string;
  constructor(props: PartnerInfoProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.partnerId = props.partnerId;
  }
}

export type AddListRequestProps = {
  record: PlatformCore.Record[];
};

export class AddListRequest extends SoapMappingBase {
  record: PlatformCore.Record[];
  constructor(props: AddListRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.record = props.record;
  }
}

export type UpdateListRequestProps = {
  record: PlatformCore.Record[];
};

export class UpdateListRequest extends SoapMappingBase {
  record: PlatformCore.Record[];
  constructor(props: UpdateListRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.record = props.record;
  }
}

export type UpdateListResponseProps = {
  writeResponseList: WriteResponseList;
};

export class UpdateListResponse extends SoapMappingBase {
  writeResponseList: WriteResponseList;
  constructor(props: UpdateListResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.writeResponseList = props.writeResponseList;
  }
}

export type GetCustomizationIdResponseProps = {
  getCustomizationIdResult: PlatformCore.GetCustomizationIdResult;
};

export class GetCustomizationIdResponse extends SoapMappingBase {
  getCustomizationIdResult: PlatformCore.GetCustomizationIdResult;
  constructor(props: GetCustomizationIdResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.getCustomizationIdResult = props.getCustomizationIdResult;
  }
}

export type SearchMoreWithIdResponseProps = {
  searchResult: PlatformCore.SearchResult;
};

export class SearchMoreWithIdResponse extends SoapMappingBase {
  searchResult: PlatformCore.SearchResult;
  constructor(props: SearchMoreWithIdResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchResult = props.searchResult;
  }
}

export type ChangeEmailResponseProps = {
  sessionResponse: SessionResponse;
};

export class ChangeEmailResponse extends SoapMappingBase {
  sessionResponse: SessionResponse;
  constructor(props: ChangeEmailResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.sessionResponse = props.sessionResponse;
  }
}

export type GetDeletedResponseProps = {
  getDeletedResult: PlatformCore.GetDeletedResult;
};

export class GetDeletedResponse extends SoapMappingBase {
  getDeletedResult: PlatformCore.GetDeletedResult;
  constructor(props: GetDeletedResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.getDeletedResult = props.getDeletedResult;
  }
}

export type GetItemAvailabilityResponseProps = {
  getItemAvailabilityResult: PlatformCore.GetItemAvailabilityResult;
};

export class GetItemAvailabilityResponse extends SoapMappingBase {
  getItemAvailabilityResult: PlatformCore.GetItemAvailabilityResult;
  constructor(props: GetItemAvailabilityResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.getItemAvailabilityResult = props.getItemAvailabilityResult;
  }
}

export type GetItemAvailabilityRequestProps = {
  itemAvailabilityFilter: PlatformCore.ItemAvailabilityFilter;
};

export class GetItemAvailabilityRequest extends SoapMappingBase {
  itemAvailabilityFilter: PlatformCore.ItemAvailabilityFilter;
  constructor(props: GetItemAvailabilityRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.itemAvailabilityFilter = props.itemAvailabilityFilter;
  }
}

export type GetDataCenterUrlsRequestProps = {
  account: string;
};

export class GetDataCenterUrlsRequest extends SoapMappingBase {
  account: string;
  constructor(props: GetDataCenterUrlsRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.account = props.account;
  }
}

export type AsyncStatusResponseProps = {
  asyncStatusResult: PlatformCore.AsyncStatusResult;
};

export class AsyncStatusResponse extends SoapMappingBase {
  asyncStatusResult: PlatformCore.AsyncStatusResult;
  constructor(props: AsyncStatusResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.asyncStatusResult = props.asyncStatusResult;
  }
}

export type GetCurrencyRateRequestProps = {
  currencyRateFilter: PlatformCore.CurrencyRateFilter;
};

export class GetCurrencyRateRequest extends SoapMappingBase {
  currencyRateFilter: PlatformCore.CurrencyRateFilter;
  constructor(props: GetCurrencyRateRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.currencyRateFilter = props.currencyRateFilter;
  }
}

export type GetCustomizationIdRequestProps = {
  customizationType: PlatformCore.CustomizationType;
  includeInactives: boolean;
};

export class GetCustomizationIdRequest extends SoapMappingBase {
  customizationType: PlatformCore.CustomizationType;
  includeInactives: boolean;
  constructor(props: GetCustomizationIdRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.customizationType = props.customizationType;
    this.includeInactives = props.includeInactives;
  }
}

export type GetSelectValueRequestProps = {
  fieldDescription: PlatformCore.GetSelectValueFieldDescription;
  pageIndex: number;
};

export class GetSelectValueRequest extends SoapMappingBase {
  fieldDescription: PlatformCore.GetSelectValueFieldDescription;
  pageIndex: number;
  constructor(props: GetSelectValueRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.fieldDescription = props.fieldDescription;
    this.pageIndex = props.pageIndex;
  }
}

export type SearchNextResponseProps = {
  searchResult: PlatformCore.SearchResult;
};

export class SearchNextResponse extends SoapMappingBase {
  searchResult: PlatformCore.SearchResult;
  constructor(props: SearchNextResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchResult = props.searchResult;
  }
}

export type AsyncSearchRequestProps = {
  searchRecord: PlatformCore.SearchRecord;
};

export class AsyncSearchRequest extends SoapMappingBase {
  searchRecord: PlatformCore.SearchRecord;
  constructor(props: AsyncSearchRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchRecord = props.searchRecord;
  }
}

export type GetListRequestProps = {
  baseRef: PlatformCore.BaseRef[];
};

export class GetListRequest extends SoapMappingBase {
  baseRef: PlatformCore.BaseRef[];
  constructor(props: GetListRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.baseRef = props.baseRef;
  }
}

export type AsyncUpdateListResultProps = {
  writeResponseList: WriteResponseList;
};

export class AsyncUpdateListResult extends AsyncResult {
  writeResponseList: WriteResponseList;
  constructor(props: AsyncUpdateListResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.writeResponseList = props.writeResponseList;
  }
}

export type AsyncUpdateListRequestProps = {
  record: PlatformCore.Record[];
};

export class AsyncUpdateListRequest extends SoapMappingBase {
  record: PlatformCore.Record[];
  constructor(props: AsyncUpdateListRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.record = props.record;
  }
}

export type ChangeEmailRequestProps = {
  changeEmail: PlatformCore.ChangeEmail;
};

export class ChangeEmailRequest extends SoapMappingBase {
  changeEmail: PlatformCore.ChangeEmail;
  constructor(props: ChangeEmailRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.changeEmail = props.changeEmail;
  }
}

export type GetBudgetExchangeRateRequestProps = {
  budgetExchangeRateFilter: PlatformCore.BudgetExchangeRateFilter;
};

export class GetBudgetExchangeRateRequest extends SoapMappingBase {
  budgetExchangeRateFilter: PlatformCore.BudgetExchangeRateFilter;
  constructor(props: GetBudgetExchangeRateRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.budgetExchangeRateFilter = props.budgetExchangeRateFilter;
  }
}

export type SearchMoreResponseProps = {
  searchResult: PlatformCore.SearchResult;
};

export class SearchMoreResponse extends SoapMappingBase {
  searchResult: PlatformCore.SearchResult;
  constructor(props: SearchMoreResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchResult = props.searchResult;
  }
}

export type GetAsyncResultResponseProps = {
  asyncResult: AsyncResult;
};

export class GetAsyncResultResponse extends SoapMappingBase {
  asyncResult: AsyncResult;
  constructor(props: GetAsyncResultResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.asyncResult = props.asyncResult;
  }
}

export type SearchMoreWithIdRequestProps = {
  searchId: string;
  pageIndex: number;
};

export class SearchMoreWithIdRequest extends SoapMappingBase {
  searchId: string;
  pageIndex: number;
  constructor(props: SearchMoreWithIdRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchId = props.searchId;
    this.pageIndex = props.pageIndex;
  }
}

export class SearchNextRequest extends SoapMappingBase {}

export type DetachRequestProps = {
  detachReference: PlatformCore.DetachReference;
};

export class DetachRequest extends SoapMappingBase {
  detachReference: PlatformCore.DetachReference;
  constructor(props: DetachRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.detachReference = props.detachReference;
  }
}

export type SearchResponseProps = {
  searchResult: PlatformCore.SearchResult;
};

export class SearchResponse extends SoapMappingBase {
  searchResult: PlatformCore.SearchResult;
  constructor(props: SearchResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchResult = props.searchResult;
  }
}

export type GetAllResponseProps = {
  getAllResult: PlatformCore.GetAllResult;
};

export class GetAllResponse extends SoapMappingBase {
  getAllResult: PlatformCore.GetAllResult;
  constructor(props: GetAllResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.getAllResult = props.getAllResult;
  }
}

export type AddResponseProps = {
  writeResponse: WriteResponse;
};

export class AddResponse extends SoapMappingBase {
  writeResponse: WriteResponse;
  constructor(props: AddResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.writeResponse = props.writeResponse;
  }
}

export type GetDataCenterUrlsResponseProps = {
  getDataCenterUrlsResult: PlatformCore.GetDataCenterUrlsResult;
};

export class GetDataCenterUrlsResponse extends SoapMappingBase {
  getDataCenterUrlsResult: PlatformCore.GetDataCenterUrlsResult;
  constructor(props: GetDataCenterUrlsResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.getDataCenterUrlsResult = props.getDataCenterUrlsResult;
  }
}

export type AsyncGetListResultProps = {
  readResponseList: ReadResponseList;
};

export class AsyncGetListResult extends AsyncResult {
  readResponseList: ReadResponseList;
  constructor(props: AsyncGetListResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.readResponseList = props.readResponseList;
  }
}

export type UpsertRequestProps = {
  record: PlatformCore.Record;
};

export class UpsertRequest extends SoapMappingBase {
  record: PlatformCore.Record;
  constructor(props: UpsertRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.record = props.record;
  }
}

export type GetAllRequestProps = {
  record: PlatformCore.GetAllRecord;
};

export class GetAllRequest extends SoapMappingBase {
  record: PlatformCore.GetAllRecord;
  constructor(props: GetAllRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.record = props.record;
  }
}

export type MapSsoResponseProps = {
  sessionResponse: SessionResponse;
};

export class MapSsoResponse extends SoapMappingBase {
  sessionResponse: SessionResponse;
  constructor(props: MapSsoResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.sessionResponse = props.sessionResponse;
  }
}

export type SearchMoreRequestProps = {
  pageIndex: number;
};

export class SearchMoreRequest extends SoapMappingBase {
  pageIndex: number;
  constructor(props: SearchMoreRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.pageIndex = props.pageIndex;
  }
}

export type GetDeletedRequestProps = {
  getDeletedFilter: PlatformCore.GetDeletedFilter;
  pageIndex: number;
};

export class GetDeletedRequest extends SoapMappingBase {
  getDeletedFilter: PlatformCore.GetDeletedFilter;
  pageIndex: number;
  constructor(props: GetDeletedRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.getDeletedFilter = props.getDeletedFilter;
    this.pageIndex = props.pageIndex;
  }
}

export type DeleteRequestProps = {
  baseRef: PlatformCore.BaseRef;
  deletionReason?: PlatformCore.DeletionReason;
};

export class DeleteRequest extends SoapMappingBase {
  baseRef: PlatformCore.BaseRef;
  deletionReason?: PlatformCore.DeletionReason;
  constructor(props: DeleteRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.readResponseList = props.readResponseList;
  }
}

export type ChangePasswordRequestProps = {
  changePassword: PlatformCore.ChangePassword;
};

export class ChangePasswordRequest extends SoapMappingBase {
  changePassword: PlatformCore.ChangePassword;
  constructor(props: ChangePasswordRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.changePassword = props.changePassword;
  }
}

export type WriteResponseListProps = {
  status?: PlatformCore.Status;
  writeResponse: WriteResponse[];
};

export class WriteResponseList extends SoapMappingBase {
  status?: PlatformCore.Status;
  writeResponse: WriteResponse[];
  constructor(props: WriteResponseListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.status = props.status;
    this.writeResponse = props.writeResponse;
  }
}

export type GetBudgetExchangeRateResponseProps = {
  getBudgetExchangeRateResult: PlatformCore.GetBudgetExchangeRateResult;
};

export class GetBudgetExchangeRateResponse extends SoapMappingBase {
  getBudgetExchangeRateResult: PlatformCore.GetBudgetExchangeRateResult;
  constructor(props: GetBudgetExchangeRateResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.getBudgetExchangeRateResult = props.getBudgetExchangeRateResult;
  }
}

export type ReadResponseListProps = {
  status?: PlatformCore.Status;
  readResponse?: ReadResponse[];
};

export class ReadResponseList extends SoapMappingBase {
  status?: PlatformCore.Status;
  readResponse?: ReadResponse[];
  constructor(props: ReadResponseListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.status = props.status;
    this.readResponse = props.readResponse;
  }
}

export type UpsertResponseProps = {
  writeResponse: WriteResponse;
};

export class UpsertResponse extends SoapMappingBase {
  writeResponse: WriteResponse;
  constructor(props: UpsertResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.writeResponse = props.writeResponse;
  }
}

export class GetServerTimeRequest extends SoapMappingBase {}

export class LogoutRequest extends SoapMappingBase {}

export type UpsertListRequestProps = {
  record: PlatformCore.Record[];
};

export class UpsertListRequest extends SoapMappingBase {
  record: PlatformCore.Record[];
  constructor(props: UpsertListRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.record = props.record;
  }
}

export type GetPostingTransactionSummaryRequestProps = {
  fields?: PlatformCore.PostingTransactionSummaryField;
  filters?: PlatformCore.PostingTransactionSummaryFilter;
  pageIndex: number;
  operationId?: string;
};

export class GetPostingTransactionSummaryRequest extends SoapMappingBase {
  fields?: PlatformCore.PostingTransactionSummaryField;
  filters?: PlatformCore.PostingTransactionSummaryFilter;
  pageIndex: number;
  operationId?: string;
  constructor(props: GetPostingTransactionSummaryRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.fields = props.fields;
    this.filters = props.filters;
    this.pageIndex = props.pageIndex;
    this.operationId = props.operationId;
  }
}

export type UpsertListResponseProps = {
  writeResponseList: WriteResponseList;
};

export class UpsertListResponse extends SoapMappingBase {
  writeResponseList: WriteResponseList;
  constructor(props: UpsertListResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.writeResponseList = props.writeResponseList;
  }
}

export type ChangePasswordResponseProps = {
  sessionResponse: SessionResponse;
};

export class ChangePasswordResponse extends SoapMappingBase {
  sessionResponse: SessionResponse;
  constructor(props: ChangePasswordResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.sessionResponse = props.sessionResponse;
  }
}

export type DeleteListResponseProps = {
  writeResponseList: WriteResponseList;
};

export class DeleteListResponse extends SoapMappingBase {
  writeResponseList: WriteResponseList;
  constructor(props: DeleteListResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.writeResponseList = props.writeResponseList;
  }
}

export type UpdateInviteeStatusResponseProps = {
  writeResponse: WriteResponse;
};

export class UpdateInviteeStatusResponse extends SoapMappingBase {
  writeResponse: WriteResponse;
  constructor(props: UpdateInviteeStatusResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.writeResponse = props.writeResponse;
  }
}

export type AsyncAddListRequestProps = {
  record: PlatformCore.Record[];
};

export class AsyncAddListRequest extends SoapMappingBase {
  record: PlatformCore.Record[];
  constructor(props: AsyncAddListRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.record = props.record;
  }
}

export type InitializeRequestProps = {
  initializeRecord: PlatformCore.InitializeRecord;
};

export class InitializeRequest extends SoapMappingBase {
  initializeRecord: PlatformCore.InitializeRecord;
  constructor(props: InitializeRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.initializeRecord = props.initializeRecord;
  }
}

export type InitializeListRequestProps = {
  initializeRecord: PlatformCore.InitializeRecord[];
};

export class InitializeListRequest extends SoapMappingBase {
  initializeRecord: PlatformCore.InitializeRecord[];
  constructor(props: InitializeListRequestProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class Preferences extends SoapMappingBase {
  warningAsError?: boolean;
  disableMandatoryCustomFieldValidation?: boolean;
  disableSystemNotesForCustomFields?: boolean;
  ignoreReadOnlyFields?: boolean;
  runServerSuiteScriptAndTriggerWorkflows?: boolean;
  constructor(props: PreferencesProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class GetListResponse extends SoapMappingBase {
  readResponseList: ReadResponseList;
  constructor(props: GetListResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.readResponseList = props.readResponseList;
  }
}

export type AttachResponseProps = {
  writeResponse: WriteResponse;
};

export class AttachResponse extends SoapMappingBase {
  writeResponse: WriteResponse;
  constructor(props: AttachResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.writeResponse = props.writeResponse;
  }
}

export type UpdateInviteeStatusListResponseProps = {
  writeResponseList: WriteResponseList;
};

export class UpdateInviteeStatusListResponse extends SoapMappingBase {
  writeResponseList: WriteResponseList;
  constructor(props: UpdateInviteeStatusListResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.writeResponseList = props.writeResponseList;
  }
}

export type LoginResponseProps = {
  sessionResponse: SessionResponse;
};

export class LoginResponse extends SoapMappingBase {
  sessionResponse: SessionResponse;
  constructor(props: LoginResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.sessionResponse = props.sessionResponse;
  }
}
