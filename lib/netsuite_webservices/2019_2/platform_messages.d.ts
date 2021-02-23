import * as PlatformCore from "./platform_core";
import { SoapMappingBase } from "../../soap-types";
export declare type SearchPreferencesProps = {
    bodyFieldsOnly?: boolean;
    returnSearchColumns?: boolean;
    pageSize?: number;
};
export declare class SearchPreferences extends SoapMappingBase {
    bodyFieldsOnly?: boolean;
    returnSearchColumns?: boolean;
    pageSize?: number;
    constructor(props: SearchPreferencesProps);
}
export declare type DeleteListRequestProps = {
    baseRef: PlatformCore.BaseRef[];
    deletionReason?: PlatformCore.DeletionReason;
};
export declare class DeleteListRequest extends SoapMappingBase {
    baseRef: PlatformCore.BaseRef[];
    deletionReason?: PlatformCore.DeletionReason;
    constructor(props: DeleteListRequestProps);
}
export declare type MapSsoRequestProps = {
    ssoCredentials: PlatformCore.SsoCredentials;
};
export declare class MapSsoRequest extends SoapMappingBase {
    ssoCredentials: PlatformCore.SsoCredentials;
    constructor(props: MapSsoRequestProps);
}
export declare type DocumentInfoProps = {
    nsId: string;
};
export declare class DocumentInfo extends SoapMappingBase {
    nsId: string;
    constructor(props: DocumentInfoProps);
}
export declare type AsyncUpsertListRequestProps = {
    record: PlatformCore.Record[];
};
export declare class AsyncUpsertListRequest extends SoapMappingBase {
    record: PlatformCore.Record[];
    constructor(props: AsyncUpsertListRequestProps);
}
export declare type AttachRequestProps = {
    attachReference: PlatformCore.AttachReference;
};
export declare class AttachRequest extends SoapMappingBase {
    attachReference: PlatformCore.AttachReference;
    constructor(props: AttachRequestProps);
}
export declare type DetachResponseProps = {
    writeResponse: WriteResponse;
};
export declare class DetachResponse extends SoapMappingBase {
    writeResponse: WriteResponse;
    constructor(props: DetachResponseProps);
}
export declare type UpdateInviteeStatusListRequestProps = {
    updateInviteeStatusReference: PlatformCore.UpdateInviteeStatusReference[];
};
export declare class UpdateInviteeStatusListRequest extends SoapMappingBase {
    updateInviteeStatusReference: PlatformCore.UpdateInviteeStatusReference[];
    constructor(props: UpdateInviteeStatusListRequestProps);
}
export declare type AsyncGetListRequestProps = {
    baseRef: PlatformCore.BaseRef[];
};
export declare class AsyncGetListRequest extends SoapMappingBase {
    baseRef: PlatformCore.BaseRef[];
    constructor(props: AsyncGetListRequestProps);
}
export declare type UpdateResponseProps = {
    writeResponse: WriteResponse;
};
export declare class UpdateResponse extends SoapMappingBase {
    writeResponse: WriteResponse;
    constructor(props: UpdateResponseProps);
}
export declare type GetSavedSearchResponseProps = {
    getSavedSearchResult: PlatformCore.GetSavedSearchResult;
};
export declare class GetSavedSearchResponse extends SoapMappingBase {
    getSavedSearchResult: PlatformCore.GetSavedSearchResult;
    constructor(props: GetSavedSearchResponseProps);
}
export declare type InitializeResponseProps = {
    readResponse: ReadResponse;
};
export declare class InitializeResponse extends SoapMappingBase {
    readResponse: ReadResponse;
    constructor(props: InitializeResponseProps);
}
export declare type GetPostingTransactionSummaryResponseProps = {
    getPostingTransactionSummaryResult: PlatformCore.GetPostingTransactionSummaryResult;
};
export declare class GetPostingTransactionSummaryResponse extends SoapMappingBase {
    getPostingTransactionSummaryResult: PlatformCore.GetPostingTransactionSummaryResult;
    constructor(props: GetPostingTransactionSummaryResponseProps);
}
export declare type DeleteResponseProps = {
    writeResponse: WriteResponse;
};
export declare class DeleteResponse extends SoapMappingBase {
    writeResponse: WriteResponse;
    constructor(props: DeleteResponseProps);
}
export declare class AsyncResult extends SoapMappingBase {
}
export declare type AsyncAddListResultProps = {
    writeResponseList: WriteResponseList;
};
export declare class AsyncAddListResult extends AsyncResult {
    writeResponseList: WriteResponseList;
    constructor(props: AsyncAddListResultProps);
}
export declare type GetServerTimeResponseProps = {
    getServerTimeResult: PlatformCore.GetServerTimeResult;
};
export declare class GetServerTimeResponse extends SoapMappingBase {
    getServerTimeResult: PlatformCore.GetServerTimeResult;
    constructor(props: GetServerTimeResponseProps);
}
export declare type GetRequestProps = {
    baseRef: PlatformCore.BaseRef;
};
export declare class GetRequest extends SoapMappingBase {
    baseRef: PlatformCore.BaseRef;
    constructor(props: GetRequestProps);
}
export declare type InitializeListResponseProps = {
    readResponseList: ReadResponseList;
};
export declare class InitializeListResponse extends SoapMappingBase {
    readResponseList: ReadResponseList;
    constructor(props: InitializeListResponseProps);
}
export declare type CheckAsyncStatusRequestProps = {
    jobId: string;
};
export declare class CheckAsyncStatusRequest extends SoapMappingBase {
    jobId: string;
    constructor(props: CheckAsyncStatusRequestProps);
}
export declare type WriteResponseProps = {
    status: PlatformCore.Status;
    baseRef?: PlatformCore.BaseRef;
};
export declare class WriteResponse extends SoapMappingBase {
    status: PlatformCore.Status;
    baseRef?: PlatformCore.BaseRef;
    constructor(props: WriteResponseProps);
}
export declare type GetResponseProps = {
    readResponse: ReadResponse;
};
export declare class GetResponse extends SoapMappingBase {
    readResponse: ReadResponse;
    constructor(props: GetResponseProps);
}
export declare type AsyncUpsertListResultProps = {
    writeResponseList: WriteResponseList;
};
export declare class AsyncUpsertListResult extends AsyncResult {
    writeResponseList: WriteResponseList;
    constructor(props: AsyncUpsertListResultProps);
}
export declare type AddRequestProps = {
    record: PlatformCore.Record;
};
export declare class AddRequest extends SoapMappingBase {
    record: PlatformCore.Record;
    constructor(props: AddRequestProps);
}
export declare type AsyncDeleteListRequestProps = {
    baseRef: PlatformCore.BaseRef[];
    deletionReason?: PlatformCore.DeletionReason;
};
export declare class AsyncDeleteListRequest extends SoapMappingBase {
    baseRef: PlatformCore.BaseRef[];
    deletionReason?: PlatformCore.DeletionReason;
    constructor(props: AsyncDeleteListRequestProps);
}
export declare type SearchRequestProps = {
    searchRecord: PlatformCore.SearchRecord;
};
export declare class SearchRequest extends SoapMappingBase {
    searchRecord: PlatformCore.SearchRecord;
    constructor(props: SearchRequestProps);
}
export declare type LogoutResponseProps = {
    sessionResponse: SessionResponse;
};
export declare class LogoutResponse extends SoapMappingBase {
    sessionResponse: SessionResponse;
    constructor(props: LogoutResponseProps);
}
export declare type GetSelectValueResponseProps = {
    getSelectValueResult: PlatformCore.GetSelectValueResult;
};
export declare class GetSelectValueResponse extends SoapMappingBase {
    getSelectValueResult: PlatformCore.GetSelectValueResult;
    constructor(props: GetSelectValueResponseProps);
}
export declare type AsyncSearchResultProps = {
    searchResult: PlatformCore.SearchResult;
};
export declare class AsyncSearchResult extends AsyncResult {
    searchResult: PlatformCore.SearchResult;
    constructor(props: AsyncSearchResultProps);
}
export declare type UpdateInviteeStatusRequestProps = {
    updateInviteeStatusReference: PlatformCore.UpdateInviteeStatusReference;
};
export declare class UpdateInviteeStatusRequest extends SoapMappingBase {
    updateInviteeStatusReference: PlatformCore.UpdateInviteeStatusReference;
    constructor(props: UpdateInviteeStatusRequestProps);
}
export declare type SsoLoginResponseProps = {
    sessionResponse: SessionResponse;
};
export declare class SsoLoginResponse extends SoapMappingBase {
    sessionResponse: SessionResponse;
    constructor(props: SsoLoginResponseProps);
}
export declare type AsyncInitializeListRequestProps = {
    initializeRecord: PlatformCore.InitializeRecord[];
};
export declare class AsyncInitializeListRequest extends SoapMappingBase {
    initializeRecord: PlatformCore.InitializeRecord[];
    constructor(props: AsyncInitializeListRequestProps);
}
export declare type GetCurrencyRateResponseProps = {
    getCurrencyRateResult: PlatformCore.GetCurrencyRateResult;
};
export declare class GetCurrencyRateResponse extends SoapMappingBase {
    getCurrencyRateResult: PlatformCore.GetCurrencyRateResult;
    constructor(props: GetCurrencyRateResponseProps);
}
export declare type GetSavedSearchRequestProps = {
    record: PlatformCore.GetSavedSearchRecord;
};
export declare class GetSavedSearchRequest extends SoapMappingBase {
    record: PlatformCore.GetSavedSearchRecord;
    constructor(props: GetSavedSearchRequestProps);
}
export declare type SessionResponseProps = {
    status: PlatformCore.Status;
    userId?: PlatformCore.RecordRef;
    wsRoleList?: PlatformCore.WsRoleList;
};
export declare class SessionResponse extends SoapMappingBase {
    status: PlatformCore.Status;
    userId?: PlatformCore.RecordRef;
    wsRoleList?: PlatformCore.WsRoleList;
    constructor(props: SessionResponseProps);
}
export declare type AddListResponseProps = {
    writeResponseList: WriteResponseList;
};
export declare class AddListResponse extends SoapMappingBase {
    writeResponseList: WriteResponseList;
    constructor(props: AddListResponseProps);
}
export declare type LoginRequestProps = {
    passport: PlatformCore.Passport;
};
export declare class LoginRequest extends SoapMappingBase {
    passport: PlatformCore.Passport;
    constructor(props: LoginRequestProps);
}
export declare type UpdateRequestProps = {
    record: PlatformCore.Record;
};
export declare class UpdateRequest extends SoapMappingBase {
    record: PlatformCore.Record;
    constructor(props: UpdateRequestProps);
}
export declare type GetAsyncResultRequestProps = {
    jobId: string;
    pageIndex: number;
};
export declare class GetAsyncResultRequest extends SoapMappingBase {
    jobId: string;
    pageIndex: number;
    constructor(props: GetAsyncResultRequestProps);
}
export declare type ReadResponseProps = {
    status: PlatformCore.Status;
    record?: PlatformCore.Record;
};
export declare class ReadResponse extends SoapMappingBase {
    status: PlatformCore.Status;
    record?: PlatformCore.Record;
    constructor(props: ReadResponseProps);
}
export declare type AsyncDeleteListResultProps = {
    writeResponseList: WriteResponseList;
};
export declare class AsyncDeleteListResult extends AsyncResult {
    writeResponseList: WriteResponseList;
    constructor(props: AsyncDeleteListResultProps);
}
export declare type SsoLoginRequestProps = {
    ssoPassport: PlatformCore.SsoPassport;
};
export declare class SsoLoginRequest extends SoapMappingBase {
    ssoPassport: PlatformCore.SsoPassport;
    constructor(props: SsoLoginRequestProps);
}
export declare type ApplicationInfoProps = {
    applicationId: string;
};
export declare class ApplicationInfo extends SoapMappingBase {
    applicationId: string;
    constructor(props: ApplicationInfoProps);
}
export declare type PartnerInfoProps = {
    partnerId?: string;
};
export declare class PartnerInfo extends SoapMappingBase {
    partnerId?: string;
    constructor(props: PartnerInfoProps);
}
export declare type AddListRequestProps = {
    record: PlatformCore.Record[];
};
export declare class AddListRequest extends SoapMappingBase {
    record: PlatformCore.Record[];
    constructor(props: AddListRequestProps);
}
export declare type UpdateListRequestProps = {
    record: PlatformCore.Record[];
};
export declare class UpdateListRequest extends SoapMappingBase {
    record: PlatformCore.Record[];
    constructor(props: UpdateListRequestProps);
}
export declare type UpdateListResponseProps = {
    writeResponseList: WriteResponseList;
};
export declare class UpdateListResponse extends SoapMappingBase {
    writeResponseList: WriteResponseList;
    constructor(props: UpdateListResponseProps);
}
export declare type GetCustomizationIdResponseProps = {
    getCustomizationIdResult: PlatformCore.GetCustomizationIdResult;
};
export declare class GetCustomizationIdResponse extends SoapMappingBase {
    getCustomizationIdResult: PlatformCore.GetCustomizationIdResult;
    constructor(props: GetCustomizationIdResponseProps);
}
export declare type SearchMoreWithIdResponseProps = {
    searchResult: PlatformCore.SearchResult;
};
export declare class SearchMoreWithIdResponse extends SoapMappingBase {
    searchResult: PlatformCore.SearchResult;
    constructor(props: SearchMoreWithIdResponseProps);
}
export declare type ChangeEmailResponseProps = {
    sessionResponse: SessionResponse;
};
export declare class ChangeEmailResponse extends SoapMappingBase {
    sessionResponse: SessionResponse;
    constructor(props: ChangeEmailResponseProps);
}
export declare type GetDeletedResponseProps = {
    getDeletedResult: PlatformCore.GetDeletedResult;
};
export declare class GetDeletedResponse extends SoapMappingBase {
    getDeletedResult: PlatformCore.GetDeletedResult;
    constructor(props: GetDeletedResponseProps);
}
export declare type GetItemAvailabilityResponseProps = {
    getItemAvailabilityResult: PlatformCore.GetItemAvailabilityResult;
};
export declare class GetItemAvailabilityResponse extends SoapMappingBase {
    getItemAvailabilityResult: PlatformCore.GetItemAvailabilityResult;
    constructor(props: GetItemAvailabilityResponseProps);
}
export declare type GetItemAvailabilityRequestProps = {
    itemAvailabilityFilter: PlatformCore.ItemAvailabilityFilter;
};
export declare class GetItemAvailabilityRequest extends SoapMappingBase {
    itemAvailabilityFilter: PlatformCore.ItemAvailabilityFilter;
    constructor(props: GetItemAvailabilityRequestProps);
}
export declare type GetDataCenterUrlsRequestProps = {
    account: string;
};
export declare class GetDataCenterUrlsRequest extends SoapMappingBase {
    account: string;
    constructor(props: GetDataCenterUrlsRequestProps);
}
export declare type AsyncStatusResponseProps = {
    asyncStatusResult: PlatformCore.AsyncStatusResult;
};
export declare class AsyncStatusResponse extends SoapMappingBase {
    asyncStatusResult: PlatformCore.AsyncStatusResult;
    constructor(props: AsyncStatusResponseProps);
}
export declare type GetCurrencyRateRequestProps = {
    currencyRateFilter: PlatformCore.CurrencyRateFilter;
};
export declare class GetCurrencyRateRequest extends SoapMappingBase {
    currencyRateFilter: PlatformCore.CurrencyRateFilter;
    constructor(props: GetCurrencyRateRequestProps);
}
export declare type GetCustomizationIdRequestProps = {
    customizationType: PlatformCore.CustomizationType;
    includeInactives: boolean;
};
export declare class GetCustomizationIdRequest extends SoapMappingBase {
    customizationType: PlatformCore.CustomizationType;
    includeInactives: boolean;
    constructor(props: GetCustomizationIdRequestProps);
}
export declare type GetSelectValueRequestProps = {
    fieldDescription: PlatformCore.GetSelectValueFieldDescription;
    pageIndex: number;
};
export declare class GetSelectValueRequest extends SoapMappingBase {
    fieldDescription: PlatformCore.GetSelectValueFieldDescription;
    pageIndex: number;
    constructor(props: GetSelectValueRequestProps);
}
export declare type SearchNextResponseProps = {
    searchResult: PlatformCore.SearchResult;
};
export declare class SearchNextResponse extends SoapMappingBase {
    searchResult: PlatformCore.SearchResult;
    constructor(props: SearchNextResponseProps);
}
export declare type AsyncSearchRequestProps = {
    searchRecord: PlatformCore.SearchRecord;
};
export declare class AsyncSearchRequest extends SoapMappingBase {
    searchRecord: PlatformCore.SearchRecord;
    constructor(props: AsyncSearchRequestProps);
}
export declare type GetListRequestProps = {
    baseRef: PlatformCore.BaseRef[];
};
export declare class GetListRequest extends SoapMappingBase {
    baseRef: PlatformCore.BaseRef[];
    constructor(props: GetListRequestProps);
}
export declare type AsyncUpdateListResultProps = {
    writeResponseList: WriteResponseList;
};
export declare class AsyncUpdateListResult extends AsyncResult {
    writeResponseList: WriteResponseList;
    constructor(props: AsyncUpdateListResultProps);
}
export declare type AsyncUpdateListRequestProps = {
    record: PlatformCore.Record[];
};
export declare class AsyncUpdateListRequest extends SoapMappingBase {
    record: PlatformCore.Record[];
    constructor(props: AsyncUpdateListRequestProps);
}
export declare type ChangeEmailRequestProps = {
    changeEmail: PlatformCore.ChangeEmail;
};
export declare class ChangeEmailRequest extends SoapMappingBase {
    changeEmail: PlatformCore.ChangeEmail;
    constructor(props: ChangeEmailRequestProps);
}
export declare type GetBudgetExchangeRateRequestProps = {
    budgetExchangeRateFilter: PlatformCore.BudgetExchangeRateFilter;
};
export declare class GetBudgetExchangeRateRequest extends SoapMappingBase {
    budgetExchangeRateFilter: PlatformCore.BudgetExchangeRateFilter;
    constructor(props: GetBudgetExchangeRateRequestProps);
}
export declare type SearchMoreResponseProps = {
    searchResult: PlatformCore.SearchResult;
};
export declare class SearchMoreResponse extends SoapMappingBase {
    searchResult: PlatformCore.SearchResult;
    constructor(props: SearchMoreResponseProps);
}
export declare type GetAsyncResultResponseProps = {
    asyncResult: AsyncResult;
};
export declare class GetAsyncResultResponse extends SoapMappingBase {
    asyncResult: AsyncResult;
    constructor(props: GetAsyncResultResponseProps);
}
export declare type SearchMoreWithIdRequestProps = {
    searchId: string;
    pageIndex: number;
};
export declare class SearchMoreWithIdRequest extends SoapMappingBase {
    searchId: string;
    pageIndex: number;
    constructor(props: SearchMoreWithIdRequestProps);
}
export declare class SearchNextRequest extends SoapMappingBase {
}
export declare type DetachRequestProps = {
    detachReference: PlatformCore.DetachReference;
};
export declare class DetachRequest extends SoapMappingBase {
    detachReference: PlatformCore.DetachReference;
    constructor(props: DetachRequestProps);
}
export declare type SearchResponseProps = {
    searchResult: PlatformCore.SearchResult;
};
export declare class SearchResponse extends SoapMappingBase {
    searchResult: PlatformCore.SearchResult;
    constructor(props: SearchResponseProps);
}
export declare type GetAllResponseProps = {
    getAllResult: PlatformCore.GetAllResult;
};
export declare class GetAllResponse extends SoapMappingBase {
    getAllResult: PlatformCore.GetAllResult;
    constructor(props: GetAllResponseProps);
}
export declare type AddResponseProps = {
    writeResponse: WriteResponse;
};
export declare class AddResponse extends SoapMappingBase {
    writeResponse: WriteResponse;
    constructor(props: AddResponseProps);
}
export declare type GetDataCenterUrlsResponseProps = {
    getDataCenterUrlsResult: PlatformCore.GetDataCenterUrlsResult;
};
export declare class GetDataCenterUrlsResponse extends SoapMappingBase {
    getDataCenterUrlsResult: PlatformCore.GetDataCenterUrlsResult;
    constructor(props: GetDataCenterUrlsResponseProps);
}
export declare type AsyncGetListResultProps = {
    readResponseList: ReadResponseList;
};
export declare class AsyncGetListResult extends AsyncResult {
    readResponseList: ReadResponseList;
    constructor(props: AsyncGetListResultProps);
}
export declare type UpsertRequestProps = {
    record: PlatformCore.Record;
};
export declare class UpsertRequest extends SoapMappingBase {
    record: PlatformCore.Record;
    constructor(props: UpsertRequestProps);
}
export declare type GetAllRequestProps = {
    record: PlatformCore.GetAllRecord;
};
export declare class GetAllRequest extends SoapMappingBase {
    record: PlatformCore.GetAllRecord;
    constructor(props: GetAllRequestProps);
}
export declare type MapSsoResponseProps = {
    sessionResponse: SessionResponse;
};
export declare class MapSsoResponse extends SoapMappingBase {
    sessionResponse: SessionResponse;
    constructor(props: MapSsoResponseProps);
}
export declare type SearchMoreRequestProps = {
    pageIndex: number;
};
export declare class SearchMoreRequest extends SoapMappingBase {
    pageIndex: number;
    constructor(props: SearchMoreRequestProps);
}
export declare type GetDeletedRequestProps = {
    getDeletedFilter: PlatformCore.GetDeletedFilter;
    pageIndex: number;
};
export declare class GetDeletedRequest extends SoapMappingBase {
    getDeletedFilter: PlatformCore.GetDeletedFilter;
    pageIndex: number;
    constructor(props: GetDeletedRequestProps);
}
export declare type DeleteRequestProps = {
    baseRef: PlatformCore.BaseRef;
    deletionReason?: PlatformCore.DeletionReason;
};
export declare class DeleteRequest extends SoapMappingBase {
    baseRef: PlatformCore.BaseRef;
    deletionReason?: PlatformCore.DeletionReason;
    constructor(props: DeleteRequestProps);
}
export declare type AsyncInitializeListResultProps = {
    readResponseList: ReadResponseList;
};
export declare class AsyncInitializeListResult extends AsyncResult {
    readResponseList: ReadResponseList;
    constructor(props: AsyncInitializeListResultProps);
}
export declare type ChangePasswordRequestProps = {
    changePassword: PlatformCore.ChangePassword;
};
export declare class ChangePasswordRequest extends SoapMappingBase {
    changePassword: PlatformCore.ChangePassword;
    constructor(props: ChangePasswordRequestProps);
}
export declare type WriteResponseListProps = {
    status?: PlatformCore.Status;
    writeResponse: WriteResponse[];
};
export declare class WriteResponseList extends SoapMappingBase {
    status?: PlatformCore.Status;
    writeResponse: WriteResponse[];
    constructor(props: WriteResponseListProps);
}
export declare type GetBudgetExchangeRateResponseProps = {
    getBudgetExchangeRateResult: PlatformCore.GetBudgetExchangeRateResult;
};
export declare class GetBudgetExchangeRateResponse extends SoapMappingBase {
    getBudgetExchangeRateResult: PlatformCore.GetBudgetExchangeRateResult;
    constructor(props: GetBudgetExchangeRateResponseProps);
}
export declare type ReadResponseListProps = {
    status?: PlatformCore.Status;
    readResponse?: ReadResponse[];
};
export declare class ReadResponseList extends SoapMappingBase {
    status?: PlatformCore.Status;
    readResponse?: ReadResponse[];
    constructor(props: ReadResponseListProps);
}
export declare type UpsertResponseProps = {
    writeResponse: WriteResponse;
};
export declare class UpsertResponse extends SoapMappingBase {
    writeResponse: WriteResponse;
    constructor(props: UpsertResponseProps);
}
export declare class GetServerTimeRequest extends SoapMappingBase {
}
export declare class LogoutRequest extends SoapMappingBase {
}
export declare type UpsertListRequestProps = {
    record: PlatformCore.Record[];
};
export declare class UpsertListRequest extends SoapMappingBase {
    record: PlatformCore.Record[];
    constructor(props: UpsertListRequestProps);
}
export declare type GetPostingTransactionSummaryRequestProps = {
    fields?: PlatformCore.PostingTransactionSummaryField;
    filters?: PlatformCore.PostingTransactionSummaryFilter;
    pageIndex: number;
    operationId?: string;
};
export declare class GetPostingTransactionSummaryRequest extends SoapMappingBase {
    fields?: PlatformCore.PostingTransactionSummaryField;
    filters?: PlatformCore.PostingTransactionSummaryFilter;
    pageIndex: number;
    operationId?: string;
    constructor(props: GetPostingTransactionSummaryRequestProps);
}
export declare type UpsertListResponseProps = {
    writeResponseList: WriteResponseList;
};
export declare class UpsertListResponse extends SoapMappingBase {
    writeResponseList: WriteResponseList;
    constructor(props: UpsertListResponseProps);
}
export declare type ChangePasswordResponseProps = {
    sessionResponse: SessionResponse;
};
export declare class ChangePasswordResponse extends SoapMappingBase {
    sessionResponse: SessionResponse;
    constructor(props: ChangePasswordResponseProps);
}
export declare type DeleteListResponseProps = {
    writeResponseList: WriteResponseList;
};
export declare class DeleteListResponse extends SoapMappingBase {
    writeResponseList: WriteResponseList;
    constructor(props: DeleteListResponseProps);
}
export declare type UpdateInviteeStatusResponseProps = {
    writeResponse: WriteResponse;
};
export declare class UpdateInviteeStatusResponse extends SoapMappingBase {
    writeResponse: WriteResponse;
    constructor(props: UpdateInviteeStatusResponseProps);
}
export declare type AsyncAddListRequestProps = {
    record: PlatformCore.Record[];
};
export declare class AsyncAddListRequest extends SoapMappingBase {
    record: PlatformCore.Record[];
    constructor(props: AsyncAddListRequestProps);
}
export declare type InitializeRequestProps = {
    initializeRecord: PlatformCore.InitializeRecord;
};
export declare class InitializeRequest extends SoapMappingBase {
    initializeRecord: PlatformCore.InitializeRecord;
    constructor(props: InitializeRequestProps);
}
export declare type InitializeListRequestProps = {
    initializeRecord: PlatformCore.InitializeRecord[];
};
export declare class InitializeListRequest extends SoapMappingBase {
    initializeRecord: PlatformCore.InitializeRecord[];
    constructor(props: InitializeListRequestProps);
}
export declare type PreferencesProps = {
    warningAsError?: boolean;
    disableMandatoryCustomFieldValidation?: boolean;
    disableSystemNotesForCustomFields?: boolean;
    ignoreReadOnlyFields?: boolean;
    runServerSuiteScriptAndTriggerWorkflows?: boolean;
};
export declare class Preferences extends SoapMappingBase {
    warningAsError?: boolean;
    disableMandatoryCustomFieldValidation?: boolean;
    disableSystemNotesForCustomFields?: boolean;
    ignoreReadOnlyFields?: boolean;
    runServerSuiteScriptAndTriggerWorkflows?: boolean;
    constructor(props: PreferencesProps);
}
export declare type GetListResponseProps = {
    readResponseList: ReadResponseList;
};
export declare class GetListResponse extends SoapMappingBase {
    readResponseList: ReadResponseList;
    constructor(props: GetListResponseProps);
}
export declare type AttachResponseProps = {
    writeResponse: WriteResponse;
};
export declare class AttachResponse extends SoapMappingBase {
    writeResponse: WriteResponse;
    constructor(props: AttachResponseProps);
}
export declare type UpdateInviteeStatusListResponseProps = {
    writeResponseList: WriteResponseList;
};
export declare class UpdateInviteeStatusListResponse extends SoapMappingBase {
    writeResponseList: WriteResponseList;
    constructor(props: UpdateInviteeStatusListResponseProps);
}
export declare type LoginResponseProps = {
    sessionResponse: SessionResponse;
};
export declare class LoginResponse extends SoapMappingBase {
    sessionResponse: SessionResponse;
    constructor(props: LoginResponseProps);
}
