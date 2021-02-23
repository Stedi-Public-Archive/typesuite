"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeEmailResponse = exports.SearchMoreWithIdResponse = exports.GetCustomizationIdResponse = exports.UpdateListResponse = exports.UpdateListRequest = exports.AddListRequest = exports.PartnerInfo = exports.ApplicationInfo = exports.SsoLoginRequest = exports.AsyncDeleteListResult = exports.ReadResponse = exports.GetAsyncResultRequest = exports.UpdateRequest = exports.LoginRequest = exports.AddListResponse = exports.SessionResponse = exports.GetSavedSearchRequest = exports.GetCurrencyRateResponse = exports.AsyncInitializeListRequest = exports.SsoLoginResponse = exports.UpdateInviteeStatusRequest = exports.AsyncSearchResult = exports.GetSelectValueResponse = exports.LogoutResponse = exports.SearchRequest = exports.AsyncDeleteListRequest = exports.AddRequest = exports.AsyncUpsertListResult = exports.GetResponse = exports.WriteResponse = exports.CheckAsyncStatusRequest = exports.InitializeListResponse = exports.GetRequest = exports.GetServerTimeResponse = exports.AsyncAddListResult = exports.AsyncResult = exports.DeleteResponse = exports.GetPostingTransactionSummaryResponse = exports.InitializeResponse = exports.GetSavedSearchResponse = exports.UpdateResponse = exports.AsyncGetListRequest = exports.UpdateInviteeStatusListRequest = exports.DetachResponse = exports.AttachRequest = exports.AsyncUpsertListRequest = exports.DocumentInfo = exports.MapSsoRequest = exports.DeleteListRequest = exports.SearchPreferences = void 0;
exports.GetListResponse = exports.Preferences = exports.InitializeListRequest = exports.InitializeRequest = exports.AsyncAddListRequest = exports.UpdateInviteeStatusResponse = exports.DeleteListResponse = exports.ChangePasswordResponse = exports.UpsertListResponse = exports.GetPostingTransactionSummaryRequest = exports.UpsertListRequest = exports.LogoutRequest = exports.GetServerTimeRequest = exports.UpsertResponse = exports.ReadResponseList = exports.GetBudgetExchangeRateResponse = exports.WriteResponseList = exports.ChangePasswordRequest = exports.AsyncInitializeListResult = exports.DeleteRequest = exports.GetDeletedRequest = exports.SearchMoreRequest = exports.MapSsoResponse = exports.GetAllRequest = exports.UpsertRequest = exports.AsyncGetListResult = exports.GetDataCenterUrlsResponse = exports.AddResponse = exports.GetAllResponse = exports.SearchResponse = exports.DetachRequest = exports.SearchNextRequest = exports.SearchMoreWithIdRequest = exports.GetAsyncResultResponse = exports.SearchMoreResponse = exports.GetBudgetExchangeRateRequest = exports.ChangeEmailRequest = exports.AsyncUpdateListRequest = exports.AsyncUpdateListResult = exports.GetListRequest = exports.AsyncSearchRequest = exports.SearchNextResponse = exports.GetSelectValueRequest = exports.GetCustomizationIdRequest = exports.GetCurrencyRateRequest = exports.AsyncStatusResponse = exports.GetDataCenterUrlsRequest = exports.GetItemAvailabilityRequest = exports.GetItemAvailabilityResponse = exports.GetDeletedResponse = void 0;
exports.LoginResponse = exports.UpdateInviteeStatusListResponse = exports.AttachResponse = void 0;
const soap_types_1 = require("../../soap-types");
const MAPPINGS_NAME = "com_netsuite_webservices_platform_messages_2019_2";
class SearchPreferences extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.bodyFieldsOnly = props.bodyFieldsOnly;
        this.returnSearchColumns = props.returnSearchColumns;
        this.pageSize = props.pageSize;
    }
}
exports.SearchPreferences = SearchPreferences;
class DeleteListRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.baseRef = props.baseRef;
        this.deletionReason = props.deletionReason;
    }
}
exports.DeleteListRequest = DeleteListRequest;
class MapSsoRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.ssoCredentials = props.ssoCredentials;
    }
}
exports.MapSsoRequest = MapSsoRequest;
class DocumentInfo extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.nsId = props.nsId;
    }
}
exports.DocumentInfo = DocumentInfo;
class AsyncUpsertListRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.record = props.record;
    }
}
exports.AsyncUpsertListRequest = AsyncUpsertListRequest;
class AttachRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.attachReference = props.attachReference;
    }
}
exports.AttachRequest = AttachRequest;
class DetachResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.writeResponse = props.writeResponse;
    }
}
exports.DetachResponse = DetachResponse;
class UpdateInviteeStatusListRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.updateInviteeStatusReference = props.updateInviteeStatusReference;
    }
}
exports.UpdateInviteeStatusListRequest = UpdateInviteeStatusListRequest;
class AsyncGetListRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.baseRef = props.baseRef;
    }
}
exports.AsyncGetListRequest = AsyncGetListRequest;
class UpdateResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.writeResponse = props.writeResponse;
    }
}
exports.UpdateResponse = UpdateResponse;
class GetSavedSearchResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.getSavedSearchResult = props.getSavedSearchResult;
    }
}
exports.GetSavedSearchResponse = GetSavedSearchResponse;
class InitializeResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.readResponse = props.readResponse;
    }
}
exports.InitializeResponse = InitializeResponse;
class GetPostingTransactionSummaryResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.getPostingTransactionSummaryResult =
            props.getPostingTransactionSummaryResult;
    }
}
exports.GetPostingTransactionSummaryResponse = GetPostingTransactionSummaryResponse;
class DeleteResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.writeResponse = props.writeResponse;
    }
}
exports.DeleteResponse = DeleteResponse;
class AsyncResult extends soap_types_1.SoapMappingBase {
}
exports.AsyncResult = AsyncResult;
class AsyncAddListResult extends AsyncResult {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.writeResponseList = props.writeResponseList;
    }
}
exports.AsyncAddListResult = AsyncAddListResult;
class GetServerTimeResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.getServerTimeResult = props.getServerTimeResult;
    }
}
exports.GetServerTimeResponse = GetServerTimeResponse;
class GetRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.baseRef = props.baseRef;
    }
}
exports.GetRequest = GetRequest;
class InitializeListResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.readResponseList = props.readResponseList;
    }
}
exports.InitializeListResponse = InitializeListResponse;
class CheckAsyncStatusRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.jobId = props.jobId;
    }
}
exports.CheckAsyncStatusRequest = CheckAsyncStatusRequest;
class WriteResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.baseRef = props.baseRef;
    }
}
exports.WriteResponse = WriteResponse;
class GetResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.readResponse = props.readResponse;
    }
}
exports.GetResponse = GetResponse;
class AsyncUpsertListResult extends AsyncResult {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.writeResponseList = props.writeResponseList;
    }
}
exports.AsyncUpsertListResult = AsyncUpsertListResult;
class AddRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.record = props.record;
    }
}
exports.AddRequest = AddRequest;
class AsyncDeleteListRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.baseRef = props.baseRef;
        this.deletionReason = props.deletionReason;
    }
}
exports.AsyncDeleteListRequest = AsyncDeleteListRequest;
class SearchRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchRecord = props.searchRecord;
    }
}
exports.SearchRequest = SearchRequest;
class LogoutResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.sessionResponse = props.sessionResponse;
    }
}
exports.LogoutResponse = LogoutResponse;
class GetSelectValueResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.getSelectValueResult = props.getSelectValueResult;
    }
}
exports.GetSelectValueResponse = GetSelectValueResponse;
class AsyncSearchResult extends AsyncResult {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchResult = props.searchResult;
    }
}
exports.AsyncSearchResult = AsyncSearchResult;
class UpdateInviteeStatusRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.updateInviteeStatusReference = props.updateInviteeStatusReference;
    }
}
exports.UpdateInviteeStatusRequest = UpdateInviteeStatusRequest;
class SsoLoginResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.sessionResponse = props.sessionResponse;
    }
}
exports.SsoLoginResponse = SsoLoginResponse;
class AsyncInitializeListRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.initializeRecord = props.initializeRecord;
    }
}
exports.AsyncInitializeListRequest = AsyncInitializeListRequest;
class GetCurrencyRateResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.getCurrencyRateResult = props.getCurrencyRateResult;
    }
}
exports.GetCurrencyRateResponse = GetCurrencyRateResponse;
class GetSavedSearchRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.record = props.record;
    }
}
exports.GetSavedSearchRequest = GetSavedSearchRequest;
class SessionResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.userId = props.userId;
        this.wsRoleList = props.wsRoleList;
    }
}
exports.SessionResponse = SessionResponse;
class AddListResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.writeResponseList = props.writeResponseList;
    }
}
exports.AddListResponse = AddListResponse;
class LoginRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.passport = props.passport;
    }
}
exports.LoginRequest = LoginRequest;
class UpdateRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.record = props.record;
    }
}
exports.UpdateRequest = UpdateRequest;
class GetAsyncResultRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.jobId = props.jobId;
        this.pageIndex = props.pageIndex;
    }
}
exports.GetAsyncResultRequest = GetAsyncResultRequest;
class ReadResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.record = props.record;
    }
}
exports.ReadResponse = ReadResponse;
class AsyncDeleteListResult extends AsyncResult {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.writeResponseList = props.writeResponseList;
    }
}
exports.AsyncDeleteListResult = AsyncDeleteListResult;
class SsoLoginRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.ssoPassport = props.ssoPassport;
    }
}
exports.SsoLoginRequest = SsoLoginRequest;
class ApplicationInfo extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.applicationId = props.applicationId;
    }
}
exports.ApplicationInfo = ApplicationInfo;
class PartnerInfo extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.partnerId = props.partnerId;
    }
}
exports.PartnerInfo = PartnerInfo;
class AddListRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.record = props.record;
    }
}
exports.AddListRequest = AddListRequest;
class UpdateListRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.record = props.record;
    }
}
exports.UpdateListRequest = UpdateListRequest;
class UpdateListResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.writeResponseList = props.writeResponseList;
    }
}
exports.UpdateListResponse = UpdateListResponse;
class GetCustomizationIdResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.getCustomizationIdResult = props.getCustomizationIdResult;
    }
}
exports.GetCustomizationIdResponse = GetCustomizationIdResponse;
class SearchMoreWithIdResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchResult = props.searchResult;
    }
}
exports.SearchMoreWithIdResponse = SearchMoreWithIdResponse;
class ChangeEmailResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.sessionResponse = props.sessionResponse;
    }
}
exports.ChangeEmailResponse = ChangeEmailResponse;
class GetDeletedResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.getDeletedResult = props.getDeletedResult;
    }
}
exports.GetDeletedResponse = GetDeletedResponse;
class GetItemAvailabilityResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.getItemAvailabilityResult = props.getItemAvailabilityResult;
    }
}
exports.GetItemAvailabilityResponse = GetItemAvailabilityResponse;
class GetItemAvailabilityRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.itemAvailabilityFilter = props.itemAvailabilityFilter;
    }
}
exports.GetItemAvailabilityRequest = GetItemAvailabilityRequest;
class GetDataCenterUrlsRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
    }
}
exports.GetDataCenterUrlsRequest = GetDataCenterUrlsRequest;
class AsyncStatusResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.asyncStatusResult = props.asyncStatusResult;
    }
}
exports.AsyncStatusResponse = AsyncStatusResponse;
class GetCurrencyRateRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.currencyRateFilter = props.currencyRateFilter;
    }
}
exports.GetCurrencyRateRequest = GetCurrencyRateRequest;
class GetCustomizationIdRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customizationType = props.customizationType;
        this.includeInactives = props.includeInactives;
    }
}
exports.GetCustomizationIdRequest = GetCustomizationIdRequest;
class GetSelectValueRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.fieldDescription = props.fieldDescription;
        this.pageIndex = props.pageIndex;
    }
}
exports.GetSelectValueRequest = GetSelectValueRequest;
class SearchNextResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchResult = props.searchResult;
    }
}
exports.SearchNextResponse = SearchNextResponse;
class AsyncSearchRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchRecord = props.searchRecord;
    }
}
exports.AsyncSearchRequest = AsyncSearchRequest;
class GetListRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.baseRef = props.baseRef;
    }
}
exports.GetListRequest = GetListRequest;
class AsyncUpdateListResult extends AsyncResult {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.writeResponseList = props.writeResponseList;
    }
}
exports.AsyncUpdateListResult = AsyncUpdateListResult;
class AsyncUpdateListRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.record = props.record;
    }
}
exports.AsyncUpdateListRequest = AsyncUpdateListRequest;
class ChangeEmailRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.changeEmail = props.changeEmail;
    }
}
exports.ChangeEmailRequest = ChangeEmailRequest;
class GetBudgetExchangeRateRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.budgetExchangeRateFilter = props.budgetExchangeRateFilter;
    }
}
exports.GetBudgetExchangeRateRequest = GetBudgetExchangeRateRequest;
class SearchMoreResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchResult = props.searchResult;
    }
}
exports.SearchMoreResponse = SearchMoreResponse;
class GetAsyncResultResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.asyncResult = props.asyncResult;
    }
}
exports.GetAsyncResultResponse = GetAsyncResultResponse;
class SearchMoreWithIdRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchId = props.searchId;
        this.pageIndex = props.pageIndex;
    }
}
exports.SearchMoreWithIdRequest = SearchMoreWithIdRequest;
class SearchNextRequest extends soap_types_1.SoapMappingBase {
}
exports.SearchNextRequest = SearchNextRequest;
class DetachRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.detachReference = props.detachReference;
    }
}
exports.DetachRequest = DetachRequest;
class SearchResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchResult = props.searchResult;
    }
}
exports.SearchResponse = SearchResponse;
class GetAllResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.getAllResult = props.getAllResult;
    }
}
exports.GetAllResponse = GetAllResponse;
class AddResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.writeResponse = props.writeResponse;
    }
}
exports.AddResponse = AddResponse;
class GetDataCenterUrlsResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.getDataCenterUrlsResult = props.getDataCenterUrlsResult;
    }
}
exports.GetDataCenterUrlsResponse = GetDataCenterUrlsResponse;
class AsyncGetListResult extends AsyncResult {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.readResponseList = props.readResponseList;
    }
}
exports.AsyncGetListResult = AsyncGetListResult;
class UpsertRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.record = props.record;
    }
}
exports.UpsertRequest = UpsertRequest;
class GetAllRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.record = props.record;
    }
}
exports.GetAllRequest = GetAllRequest;
class MapSsoResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.sessionResponse = props.sessionResponse;
    }
}
exports.MapSsoResponse = MapSsoResponse;
class SearchMoreRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.pageIndex = props.pageIndex;
    }
}
exports.SearchMoreRequest = SearchMoreRequest;
class GetDeletedRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.getDeletedFilter = props.getDeletedFilter;
        this.pageIndex = props.pageIndex;
    }
}
exports.GetDeletedRequest = GetDeletedRequest;
class DeleteRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.baseRef = props.baseRef;
        this.deletionReason = props.deletionReason;
    }
}
exports.DeleteRequest = DeleteRequest;
class AsyncInitializeListResult extends AsyncResult {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.readResponseList = props.readResponseList;
    }
}
exports.AsyncInitializeListResult = AsyncInitializeListResult;
class ChangePasswordRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.changePassword = props.changePassword;
    }
}
exports.ChangePasswordRequest = ChangePasswordRequest;
class WriteResponseList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.writeResponse = props.writeResponse;
    }
}
exports.WriteResponseList = WriteResponseList;
class GetBudgetExchangeRateResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.getBudgetExchangeRateResult = props.getBudgetExchangeRateResult;
    }
}
exports.GetBudgetExchangeRateResponse = GetBudgetExchangeRateResponse;
class ReadResponseList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.readResponse = props.readResponse;
    }
}
exports.ReadResponseList = ReadResponseList;
class UpsertResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.writeResponse = props.writeResponse;
    }
}
exports.UpsertResponse = UpsertResponse;
class GetServerTimeRequest extends soap_types_1.SoapMappingBase {
}
exports.GetServerTimeRequest = GetServerTimeRequest;
class LogoutRequest extends soap_types_1.SoapMappingBase {
}
exports.LogoutRequest = LogoutRequest;
class UpsertListRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.record = props.record;
    }
}
exports.UpsertListRequest = UpsertListRequest;
class GetPostingTransactionSummaryRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.fields = props.fields;
        this.filters = props.filters;
        this.pageIndex = props.pageIndex;
        this.operationId = props.operationId;
    }
}
exports.GetPostingTransactionSummaryRequest = GetPostingTransactionSummaryRequest;
class UpsertListResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.writeResponseList = props.writeResponseList;
    }
}
exports.UpsertListResponse = UpsertListResponse;
class ChangePasswordResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.sessionResponse = props.sessionResponse;
    }
}
exports.ChangePasswordResponse = ChangePasswordResponse;
class DeleteListResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.writeResponseList = props.writeResponseList;
    }
}
exports.DeleteListResponse = DeleteListResponse;
class UpdateInviteeStatusResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.writeResponse = props.writeResponse;
    }
}
exports.UpdateInviteeStatusResponse = UpdateInviteeStatusResponse;
class AsyncAddListRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.record = props.record;
    }
}
exports.AsyncAddListRequest = AsyncAddListRequest;
class InitializeRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.initializeRecord = props.initializeRecord;
    }
}
exports.InitializeRequest = InitializeRequest;
class InitializeListRequest extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.initializeRecord = props.initializeRecord;
    }
}
exports.InitializeListRequest = InitializeListRequest;
class Preferences extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.Preferences = Preferences;
class GetListResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.readResponseList = props.readResponseList;
    }
}
exports.GetListResponse = GetListResponse;
class AttachResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.writeResponse = props.writeResponse;
    }
}
exports.AttachResponse = AttachResponse;
class UpdateInviteeStatusListResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.writeResponseList = props.writeResponseList;
    }
}
exports.UpdateInviteeStatusListResponse = UpdateInviteeStatusListResponse;
class LoginResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.sessionResponse = props.sessionResponse;
    }
}
exports.LoginResponse = LoginResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fbWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbmV0c3VpdGVfd2Vic2VydmljZXMvMjAxOV8yL3BsYXRmb3JtX21lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsaURBQTBFO0FBQzFFLE1BQU0sYUFBYSxHQUFHLG1EQUFtRCxDQUFDO0FBTzFFLE1BQWEsaUJBQWtCLFNBQVEsNEJBQWU7SUFJcEQsWUFBWSxLQUE2QjtRQUN2QyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQzNDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsbUJBQW1CLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQVZELDhDQVVDO0FBT0QsTUFBYSxpQkFBa0IsU0FBUSw0QkFBZTtJQUdwRCxZQUFZLEtBQTZCO1FBQ3ZDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUM7Q0FDRjtBQVJELDhDQVFDO0FBTUQsTUFBYSxhQUFjLFNBQVEsNEJBQWU7SUFFaEQsWUFBWSxLQUF5QjtRQUNuQyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUM7Q0FDRjtBQU5ELHNDQU1DO0FBTUQsTUFBYSxZQUFhLFNBQVEsNEJB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UUFDbkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO0lBQy9DLENBQUM7Q0FDRjtBQU5ELHNDQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUGxhdGZvcm1Db3JlIGZyb20gXCIuL3BsYXRmb3JtX2NvcmVcIjtcbmltcG9ydCB7IFNvYXBNYXBwaW5nQmFzZSwgcHJvcHNXaXRoTWFwcGluZ3NOYW1lIH0gZnJvbSBcIi4uLy4uL3NvYXAtdHlwZXNcIjtcbmNvbnN0IE1BUFBJTkdTX05BTUUgPSBcImNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9tZXNzYWdlc18yMDE5XzJcIjtcbmV4cG9ydCB0eXBlIFNlYXJjaFByZWZlcmVuY2VzUHJvcHMgPSB7XG4gIGJvZHlGaWVsZHNPbmx5PzogYm9vbGVhbjtcbiAgcmV0dXJuU2VhcmNoQ29sdW1ucz86IGJvb2xlYW47XG4gIHBhZ2VTaXplPzogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFByZWZlcmVuY2VzIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgYm9keUZpZWxkc09ubHk/OiBib29sZWFuO1xuICByZXR1cm5TZWFyY2hDb2x1bW5zPzogYm9vbGVhbjtcbiAgcGFnZVNpemU/OiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTZWFyY2hQcmVmZXJlbmNlc1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5ib2R5RmllbGRzT25seSA9IHByb3BzLmJvZHlGaWVsZHNPbmx5O1xuICAgIHRoaXMucmV0dXJuU2VhcmNoQ29sdW1ucyA9IHByb3BzLnJldHVyblNlYXJjaENvbHVtbnM7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IHByb3BzLnBhZ2VTaXplO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIERlbGV0ZUxpc3RSZXF1ZXN0UHJvcHMgPSB7XG4gIGJhc2VSZWY6IFBsYXRmb3JtQ29yZS5CYXNlUmVmW107XG4gIGRlbGV0aW9uUmVhc29uPzogUGxhdGZvcm1Db3JlLkRlbGV0aW9uUmVhc29uO1xufTtcblxuZXhwb3J0IGNsYXNzIERlbGV0ZUxpc3RSZXF1ZXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgYmFzZVJlZjogUGxhdGZvcm1Db3JlLkJhc2VSZWZbXTtcbiAgZGVsZXRpb25SZWFzb24/OiBQbGF0Zm9ybUNvcmUuRGVsZXRpb25SZWFzb247XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBEZWxldGVMaXN0UmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5iYXNlUmVmID0gcHJvcHMuYmFzZVJlZjtcbiAgICB0aGlzLmRlbGV0aW9uUmVhc29uID0gcHJvcHMuZGVsZXRpb25SZWFzb247XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgTWFwU3NvUmVxdWVzdFByb3BzID0ge1xuICBzc29DcmVkZW50aWFsczogUGxhdGZvcm1Db3JlLlNzb0NyZWRlbnRpYWxzO1xufTtcblxuZXhwb3J0IGNsYXNzIE1hcFNzb1JlcXVlc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBzc29DcmVkZW50aWFsczogUGxhdGZvcm1Db3JlLlNzb0NyZWRlbnRpYWxzO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogTWFwU3NvUmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zc29DcmVkZW50aWFscyA9IHByb3BzLnNzb0NyZWRlbnRpYWxzO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5mb1Byb3BzID0ge1xuICBuc0lkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRJbmZvIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgbnNJZDogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogRG9jdW1lbnRJbmZvUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLm5zSWQgPSBwcm9wcy5uc0lkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFzeW5jVXBzZXJ0TGlzdFJlcXVlc3RQcm9wcyA9IHtcbiAgcmVjb3JkOiBQbGF0Zm9ybUNvcmUuUmVjb3JkW107XG59O1xuXG5leHBvcnQgY2xhc3MgQXN5bmNVcHNlcnRMaXN0UmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHJlY29yZDogUGxhdGZvcm1Db3JlLlJlY29yZFtdO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQXN5bmNVcHNlcnRMaXN0UmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5yZWNvcmQgPSBwcm9wcy5yZWNvcmQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQXR0YWNoUmVxdWVzdFByb3BzID0ge1xuICBhdHRhY2hSZWZlcmVuY2U6IFBsYXRmb3JtQ29yZS5BdHRhY2hSZWZlcmVuY2U7XG59O1xuXG5leHBvcnQgY2xhc3MgQXR0YWNoUmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGF0dGFjaFJlZmVyZW5jZTogUGxhdGZvcm1Db3JlLkF0dGFjaFJlZmVyZW5jZTtcbiAgY29uc3RydWN0b3IocHJvcHM6IEF0dGFjaFJlcXVlc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuYXR0YWNoUmVmZXJlbmNlID0gcHJvcHMuYXR0YWNoUmVmZXJlbmNlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIERldGFjaFJlc3BvbnNlUHJvcHMgPSB7XG4gIHdyaXRlUmVzcG9uc2U6IFdyaXRlUmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY2xhc3MgRGV0YWNoUmVzcG9uc2UgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICB3cml0ZVJlc3BvbnNlOiBXcml0ZVJlc3BvbnNlO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogRGV0YWNoUmVzcG9uc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMud3JpdGVSZXNwb25zZSA9IHByb3BzLndyaXRlUmVzcG9uc2U7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlSW52aXRlZVN0YXR1c0xpc3RSZXF1ZXN0UHJvcHMgPSB7XG4gIHVwZGF0ZUludml0ZWVTdGF0dXNSZWZlcmVuY2U6IFBsYXRmb3JtQ29yZS5VcGRhdGVJbnZpdGVlU3RhdHVzUmVmZXJlbmNlW107XG59O1xuXG5leHBvcnQgY2xhc3MgVXBkYXRlSW52aXRlZVN0YXR1c0xpc3RSZXF1ZXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgdXBkYXRlSW52aXRlZVN0YXR1c1JlZmVyZW5jZTogUGxhdGZvcm1Db3JlLlVwZGF0ZUludml0ZWVTdGF0dXNSZWZlcmVuY2VbXTtcbiAgY29uc3RydWN0b3IocHJvcHM6IFVwZGF0ZUludml0ZWVTdGF0dXNMaXN0UmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy51cGRhdGVJbnZpdGVlU3RhdHVzUmVmZXJlbmNlID0gcHJvcHMudXBkYXRlSW52aXRlZVN0YXR1c1JlZmVyZW5jZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBBc3luY0dldExpc3RSZXF1ZXN0UHJvcHMgPSB7XG4gIGJhc2VSZWY6IFBsYXRmb3JtQ29yZS5CYXNlUmVmW107XG59O1xuXG5leHBvcnQgY2xhc3MgQXN5bmNHZXRMaXN0UmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGJhc2VSZWY6IFBsYXRmb3JtQ29yZS5CYXNlUmVmW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBBc3luY0dldExpc3RSZXF1ZXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmJhc2VSZWYgPSBwcm9wcy5iYXNlUmVmO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVJlc3BvbnNlUHJvcHMgPSB7XG4gIHdyaXRlUmVzcG9uc2U6IFdyaXRlUmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY2xhc3MgVXBkYXRlUmVzcG9uc2UgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICB3cml0ZVJlc3BvbnNlOiBXcml0ZVJlc3BvbnNlO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVXBkYXRlUmVzcG9uc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMud3JpdGVSZXNwb25zZSA9IHByb3BzLndyaXRlUmVzcG9uc2U7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0U2F2ZWRTZWFyY2hSZXNwb25zZVByb3BzID0ge1xuICBnZXRTYXZlZFNlYXJjaFJlc3VsdDogUGxhdGZvcm1Db3JlLkdldFNhdmVkU2VhcmNoUmVzdWx0O1xufTtcblxuZXhwb3J0IGNsYXNzIEdldFNhdmVkU2VhcmNoUmVzcG9uc2UgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBnZXRTYXZlZFNlYXJjaFJlc3VsdDogUGxhdGZvcm1Db3JlLkdldFNhdmVkU2VhcmNoUmVzdWx0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0U2F2ZWRTZWFyY2hSZXNwb25zZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5nZXRTYXZlZFNlYXJjaFJlc3VsdCA9IHByb3BzLmdldFNhdmVkU2VhcmNoUmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVSZXNwb25zZVByb3BzID0ge1xuICByZWFkUmVzcG9uc2U6IFJlYWRSZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBJbml0aWFsaXplUmVzcG9uc2UgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICByZWFkUmVzcG9uc2U6IFJlYWRSZXNwb25zZTtcbiAgY29uc3RydWN0b3IocHJvcHM6IEluaXRpYWxpemVSZXNwb25zZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5yZWFkUmVzcG9uc2UgPSBwcm9wcy5yZWFkUmVzcG9uc2U7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0UG9zdGluZ1RyYW5zYWN0aW9uU3VtbWFyeVJlc3BvbnNlUHJvcHMgPSB7XG4gIGdldFBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnlSZXN1bHQ6IFBsYXRmb3JtQ29yZS5HZXRQb3N0aW5nVHJhbnNhY3Rpb25TdW1tYXJ5UmVzdWx0O1xufTtcblxuZXhwb3J0IGNsYXNzIEdldFBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnlSZXNwb25zZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGdldFBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnlSZXN1bHQ6IFBsYXRmb3JtQ29yZS5HZXRQb3N0aW5nVHJhbnNhY3Rpb25TdW1tYXJ5UmVzdWx0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0UG9zdGluZ1RyYW5zYWN0aW9uU3VtbWFyeVJlc3BvbnNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmdldFBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnlSZXN1bHQgPVxuICAgICAgcHJvcHMuZ2V0UG9zdGluZ1RyYW5zYWN0aW9uU3VtbWFyeVJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBEZWxldGVSZXNwb25zZVByb3BzID0ge1xuICB3cml0ZVJlc3BvbnNlOiBXcml0ZVJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNsYXNzIERlbGV0ZVJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgd3JpdGVSZXNwb25zZTogV3JpdGVSZXNwb25zZTtcbiAgY29uc3RydWN0b3IocHJvcHM6IERlbGV0ZVJlc3BvbnNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLndyaXRlUmVzcG9uc2UgPSBwcm9wcy53cml0ZVJlc3BvbnNlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3luY1Jlc3VsdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7fVxuXG5leHBvcnQgdHlwZSBBc3luY0FkZExpc3RSZXN1bHRQcm9wcyA9IHtcbiAgd3JpdGVSZXNwb25zZUxpc3Q6IFdyaXRlUmVzcG9uc2VMaXN0O1xufTtcblxuZXhwb3J0IGNsYXNzIEFzeW5jQWRkTGlzdFJlc3VsdCBleHRlbmRzIEFzeW5jUmVzdWx0IHtcbiAgd3JpdGVSZXNwb25zZUxpc3Q6IFdyaXRlUmVzcG9uc2VMaXN0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQXN5bmNBZGRMaXN0UmVzdWx0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLndyaXRlUmVzcG9uc2VMaXN0ID0gcHJvcHMud3JpdGVSZXNwb25zZUxpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0U2VydmVyVGltZVJlc3BvbnNlUHJvcHMgPSB7XG4gIGdldFNlcnZlclRpbWVSZXN1bHQ6IFBsYXRmb3JtQ29yZS5HZXRTZXJ2ZXJUaW1lUmVzdWx0O1xufTtcblxuZXhwb3J0IGNsYXNzIEdldFNlcnZlclRpbWVSZXNwb25zZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGdldFNlcnZlclRpbWVSZXN1bHQ6IFBsYXRmb3JtQ29yZS5HZXRTZXJ2ZXJUaW1lUmVzdWx0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0U2VydmVyVGltZVJlc3BvbnNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmdldFNlcnZlclRpbWVSZXN1bHQgPSBwcm9wcy5nZXRTZXJ2ZXJUaW1lUmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdldFJlcXVlc3RQcm9wcyA9IHtcbiAgYmFzZVJlZjogUGxhdGZvcm1Db3JlLkJhc2VSZWY7XG59O1xuXG5leHBvcnQgY2xhc3MgR2V0UmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGJhc2VSZWY6IFBsYXRmb3JtQ29yZS5CYXNlUmVmO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0UmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5iYXNlUmVmID0gcHJvcHMuYmFzZVJlZjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBJbml0aWFsaXplTGlzdFJlc3BvbnNlUHJvcHMgPSB7XG4gIHJlYWRSZXNwb25zZUxpc3Q6IFJlYWRSZXNwb25zZUxpc3Q7XG59O1xuXG5leHBvcnQgY2xhc3MgSW5pdGlhbGl6ZUxpc3RSZXNwb25zZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHJlYWRSZXNwb25zZUxpc3Q6IFJlYWRSZXNwb25zZUxpc3Q7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJbml0aWFsaXplTGlzdFJlc3BvbnNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnJlYWRSZXNwb25zZUxpc3QgPSBwcm9wcy5yZWFkUmVzcG9uc2VMaXN0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENoZWNrQXN5bmNTdGF0dXNSZXF1ZXN0UHJvcHMgPSB7XG4gIGpvYklkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgQ2hlY2tBc3luY1N0YXR1c1JlcXVlc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBqb2JJZDogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQ2hlY2tBc3luY1N0YXR1c1JlcXVlc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuam9iSWQgPSBwcm9wcy5qb2JJZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBXcml0ZVJlc3BvbnNlUHJvcHMgPSB7XG4gIHN0YXR1czogUGxhdGZvcm1Db3JlLlN0YXR1cztcbiAgYmFzZVJlZj86IFBsYXRmb3JtQ29yZS5CYXNlUmVmO1xufTtcblxuZXhwb3J0IGNsYXNzIFdyaXRlUmVzcG9uc2UgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBzdGF0dXM6IFBsYXRmb3JtQ29yZS5TdGF0dXM7XG4gIGJhc2VSZWY/OiBQbGF0Zm9ybUNvcmUuQmFzZVJlZjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFdyaXRlUmVzcG9uc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc3RhdHVzID0gcHJvcHMuc3RhdHVzO1xuICAgIHRoaXMuYmFzZVJlZiA9IHByb3BzLmJhc2VSZWY7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0UmVzcG9uc2VQcm9wcyA9IHtcbiAgcmVhZFJlc3BvbnNlOiBSZWFkUmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY2xhc3MgR2V0UmVzcG9uc2UgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICByZWFkUmVzcG9uc2U6IFJlYWRSZXNwb25zZTtcbiAgY29uc3RydWN0b3IocHJvcHM6IEdldFJlc3BvbnNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnJlYWRSZXNwb25zZSA9IHByb3BzLnJlYWRSZXNwb25zZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBBc3luY1Vwc2VydExpc3RSZXN1bHRQcm9wcyA9IHtcbiAgd3JpdGVSZXNwb25zZUxpc3Q6IFdyaXRlUmVzcG9uc2VMaXN0O1xufTtcblxuZXhwb3J0IGNsYXNzIEFzeW5jVXBzZXJ0TGlzdFJlc3VsdCBleHRlbmRzIEFzeW5jUmVzdWx0IHtcbiAgd3JpdGVSZXNwb25zZUxpc3Q6IFdyaXRlUmVzcG9uc2VMaXN0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQXN5bmNVcHNlcnRMaXN0UmVzdWx0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLndyaXRlUmVzcG9uc2VMaXN0ID0gcHJvcHMud3JpdGVSZXNwb25zZUxpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQWRkUmVxdWVzdFByb3BzID0ge1xuICByZWNvcmQ6IFBsYXRmb3JtQ29yZS5SZWNvcmQ7XG59O1xuXG5leHBvcnQgY2xhc3MgQWRkUmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHJlY29yZDogUGxhdGZvcm1Db3JlLlJlY29yZDtcbiAgY29uc3RydWN0b3IocHJvcHM6IEFkZFJlcXVlc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMucmVjb3JkID0gcHJvcHMucmVjb3JkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFzeW5jRGVsZXRlTGlzdFJlcXVlc3RQcm9wcyA9IHtcbiAgYmFzZVJlZjogUGxhdGZvcm1Db3JlLkJhc2VSZWZbXTtcbiAgZGVsZXRpb25SZWFzb24/OiBQbGF0Zm9ybUNvcmUuRGVsZXRpb25SZWFzb247XG59O1xuXG5leHBvcnQgY2xhc3MgQXN5bmNEZWxldGVMaXN0UmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGJhc2VSZWY6IFBsYXRmb3JtQ29yZS5CYXNlUmVmW107XG4gIGRlbGV0aW9uUmVhc29uPzogUGxhdGZvcm1Db3JlLkRlbGV0aW9uUmVhc29uO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQXN5bmNEZWxldGVMaXN0UmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5iYXNlUmVmID0gcHJvcHMuYmFzZVJlZjtcbiAgICB0aGlzLmRlbGV0aW9uUmVhc29uID0gcHJvcHMuZGVsZXRpb25SZWFzb247XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2VhcmNoUmVxdWVzdFByb3BzID0ge1xuICBzZWFyY2hSZWNvcmQ6IFBsYXRmb3JtQ29yZS5TZWFyY2hSZWNvcmQ7XG59O1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHNlYXJjaFJlY29yZDogUGxhdGZvcm1Db3JlLlNlYXJjaFJlY29yZDtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlYXJjaFJlcXVlc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc2VhcmNoUmVjb3JkID0gcHJvcHMuc2VhcmNoUmVjb3JkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIExvZ291dFJlc3BvbnNlUHJvcHMgPSB7XG4gIHNlc3Npb25SZXNwb25zZTogU2Vzc2lvblJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNsYXNzIExvZ291dFJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc2Vzc2lvblJlc3BvbnNlOiBTZXNzaW9uUmVzcG9uc2U7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMb2dvdXRSZXNwb25zZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZXNzaW9uUmVzcG9uc2UgPSBwcm9wcy5zZXNzaW9uUmVzcG9uc2U7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0U2VsZWN0VmFsdWVSZXNwb25zZVByb3BzID0ge1xuICBnZXRTZWxlY3RWYWx1ZVJlc3VsdDogUGxhdGZvcm1Db3JlLkdldFNlbGVjdFZhbHVlUmVzdWx0O1xufTtcblxuZXhwb3J0IGNsYXNzIEdldFNlbGVjdFZhbHVlUmVzcG9uc2UgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBnZXRTZWxlY3RWYWx1ZVJlc3VsdDogUGxhdGZvcm1Db3JlLkdldFNlbGVjdFZhbHVlUmVzdWx0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0U2VsZWN0VmFsdWVSZXNwb25zZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5nZXRTZWxlY3RWYWx1ZVJlc3VsdCA9IHByb3BzLmdldFNlbGVjdFZhbHVlUmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFzeW5jU2VhcmNoUmVzdWx0UHJvcHMgPSB7XG4gIHNlYXJjaFJlc3VsdDogUGxhdGZvcm1Db3JlLlNlYXJjaFJlc3VsdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBBc3luY1NlYXJjaFJlc3VsdCBleHRlbmRzIEFzeW5jUmVzdWx0IHtcbiAgc2VhcmNoUmVzdWx0OiBQbGF0Zm9ybUNvcmUuU2VhcmNoUmVzdWx0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQXN5bmNTZWFyY2hSZXN1bHRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc2VhcmNoUmVzdWx0ID0gcHJvcHMuc2VhcmNoUmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZUludml0ZWVTdGF0dXNSZXF1ZXN0UHJvcHMgPSB7XG4gIHVwZGF0ZUludml0ZWVTdGF0dXNSZWZlcmVuY2U6IFBsYXRmb3JtQ29yZS5VcGRhdGVJbnZpdGVlU3RhdHVzUmVmZXJlbmNlO1xufTtcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZUludml0ZWVTdGF0dXNSZXF1ZXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgdXBkYXRlSW52aXRlZVN0YXR1c1JlZmVyZW5jZTogUGxhdGZvcm1Db3JlLlVwZGF0ZUludml0ZWVTdGF0dXNSZWZlcmVuY2U7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBVcGRhdGVJbnZpdGVlU3RhdHVzUmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy51cGRhdGVJbnZpdGVlU3RhdHVzUmVmZXJlbmNlID0gcHJvcHMudXBkYXRlSW52aXRlZVN0YXR1c1JlZmVyZW5jZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTc29Mb2dpblJlc3BvbnNlUHJvcHMgPSB7XG4gIHNlc3Npb25SZXNwb25zZTogU2Vzc2lvblJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNsYXNzIFNzb0xvZ2luUmVzcG9uc2UgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBzZXNzaW9uUmVzcG9uc2U6IFNlc3Npb25SZXNwb25zZTtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNzb0xvZ2luUmVzcG9uc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc2Vzc2lvblJlc3BvbnNlID0gcHJvcHMuc2Vzc2lvblJlc3BvbnNlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFzeW5jSW5pdGlhbGl6ZUxpc3RSZXF1ZXN0UHJvcHMgPSB7XG4gIGluaXRpYWxpemVSZWNvcmQ6IFBsYXRmb3JtQ29yZS5Jbml0aWFsaXplUmVjb3JkW107XG59O1xuXG5leHBvcnQgY2xhc3MgQXN5bmNJbml0aWFsaXplTGlzdFJlcXVlc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBpbml0aWFsaXplUmVjb3JkOiBQbGF0Zm9ybUNvcmUuSW5pdGlhbGl6ZVJlY29yZFtdO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQXN5bmNJbml0aWFsaXplTGlzdFJlcXVlc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZVJlY29yZCA9IHByb3BzLmluaXRpYWxpemVSZWNvcmQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0Q3VycmVuY3lSYXRlUmVzcG9uc2VQcm9wcyA9IHtcbiAgZ2V0Q3VycmVuY3lSYXRlUmVzdWx0OiBQbGF0Zm9ybUNvcmUuR2V0Q3VycmVuY3lSYXRlUmVzdWx0O1xufTtcblxuZXhwb3J0IGNsYXNzIEdldEN1cnJlbmN5UmF0ZVJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgZ2V0Q3VycmVuY3lSYXRlUmVzdWx0OiBQbGF0Zm9ybUNvcmUuR2V0Q3VycmVuY3lSYXRlUmVzdWx0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0Q3VycmVuY3lSYXRlUmVzcG9uc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZ2V0Q3VycmVuY3lSYXRlUmVzdWx0ID0gcHJvcHMuZ2V0Q3VycmVuY3lSYXRlUmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdldFNhdmVkU2VhcmNoUmVxdWVzdFByb3BzID0ge1xuICByZWNvcmQ6IFBsYXRmb3JtQ29yZS5HZXRTYXZlZFNlYXJjaFJlY29yZDtcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXRTYXZlZFNlYXJjaFJlcXVlc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICByZWNvcmQ6IFBsYXRmb3JtQ29yZS5HZXRTYXZlZFNlYXJjaFJlY29yZDtcbiAgY29uc3RydWN0b3IocHJvcHM6IEdldFNhdmVkU2VhcmNoUmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5yZWNvcmQgPSBwcm9wcy5yZWNvcmQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2Vzc2lvblJlc3BvbnNlUHJvcHMgPSB7XG4gIHN0YXR1czogUGxhdGZvcm1Db3JlLlN0YXR1cztcbiAgdXNlcklkPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgd3NSb2xlTGlzdD86IFBsYXRmb3JtQ29yZS5Xc1JvbGVMaXN0O1xufTtcblxuZXhwb3J0IGNsYXNzIFNlc3Npb25SZXNwb25zZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHN0YXR1czogUGxhdGZvcm1Db3JlLlN0YXR1cztcbiAgdXNlcklkPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgd3NSb2xlTGlzdD86IFBsYXRmb3JtQ29yZS5Xc1JvbGVMaXN0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2Vzc2lvblJlc3BvbnNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnN0YXR1cyA9IHByb3BzLnN0YXR1cztcbiAgICB0aGlzLnVzZXJJZCA9IHByb3BzLnVzZXJJZDtcbiAgICB0aGlzLndzUm9sZUxpc3QgPSBwcm9wcy53c1JvbGVMaXN0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFkZExpc3RSZXNwb25zZVByb3BzID0ge1xuICB3cml0ZVJlc3BvbnNlTGlzdDogV3JpdGVSZXNwb25zZUxpc3Q7XG59O1xuXG5leHBvcnQgY2xhc3MgQWRkTGlzdFJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgd3JpdGVSZXNwb25zZUxpc3Q6IFdyaXRlUmVzcG9uc2VMaXN0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQWRkTGlzdFJlc3BvbnNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLndyaXRlUmVzcG9uc2VMaXN0ID0gcHJvcHMud3JpdGVSZXNwb25zZUxpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgTG9naW5SZXF1ZXN0UHJvcHMgPSB7XG4gIHBhc3Nwb3J0OiBQbGF0Zm9ybUNvcmUuUGFzc3BvcnQ7XG59O1xuXG5leHBvcnQgY2xhc3MgTG9naW5SZXF1ZXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgcGFzc3BvcnQ6IFBsYXRmb3JtQ29yZS5QYXNzcG9ydDtcbiAgY29uc3RydWN0b3IocHJvcHM6IExvZ2luUmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5wYXNzcG9ydCA9IHByb3BzLnBhc3Nwb3J0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVJlcXVlc3RQcm9wcyA9IHtcbiAgcmVjb3JkOiBQbGF0Zm9ybUNvcmUuUmVjb3JkO1xufTtcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICByZWNvcmQ6IFBsYXRmb3JtQ29yZS5SZWNvcmQ7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBVcGRhdGVSZXF1ZXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnJlY29yZCA9IHByb3BzLnJlY29yZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBHZXRBc3luY1Jlc3VsdFJlcXVlc3RQcm9wcyA9IHtcbiAgam9iSWQ6IHN0cmluZztcbiAgcGFnZUluZGV4OiBudW1iZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgR2V0QXN5bmNSZXN1bHRSZXF1ZXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgam9iSWQ6IHN0cmluZztcbiAgcGFnZUluZGV4OiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBHZXRBc3luY1Jlc3VsdFJlcXVlc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuam9iSWQgPSBwcm9wcy5qb2JJZDtcbiAgICB0aGlzLnBhZ2VJbmRleCA9IHByb3BzLnBhZ2VJbmRleDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBSZWFkUmVzcG9uc2VQcm9wcyA9IHtcbiAgc3RhdHVzOiBQbGF0Zm9ybUNvcmUuU3RhdHVzO1xuICByZWNvcmQ/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkO1xufTtcblxuZXhwb3J0IGNsYXNzIFJlYWRSZXNwb25zZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHN0YXR1czogUGxhdGZvcm1Db3JlLlN0YXR1cztcbiAgcmVjb3JkPzogUGxhdGZvcm1Db3JlLlJlY29yZDtcbiAgY29uc3RydWN0b3IocHJvcHM6IFJlYWRSZXNwb25zZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zdGF0dXMgPSBwcm9wcy5zdGF0dXM7XG4gICAgdGhpcy5yZWNvcmQgPSBwcm9wcy5yZWNvcmQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQXN5bmNEZWxldGVMaXN0UmVzdWx0UHJvcHMgPSB7XG4gIHdyaXRlUmVzcG9uc2VMaXN0OiBXcml0ZVJlc3BvbnNlTGlzdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBBc3luY0RlbGV0ZUxpc3RSZXN1bHQgZXh0ZW5kcyBBc3luY1Jlc3VsdCB7XG4gIHdyaXRlUmVzcG9uc2VMaXN0OiBXcml0ZVJlc3BvbnNlTGlzdDtcbiAgY29uc3RydWN0b3IocHJvcHM6IEFzeW5jRGVsZXRlTGlzdFJlc3VsdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy53cml0ZVJlc3BvbnNlTGlzdCA9IHByb3BzLndyaXRlUmVzcG9uc2VMaXN0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNzb0xvZ2luUmVxdWVzdFByb3BzID0ge1xuICBzc29QYXNzcG9ydDogUGxhdGZvcm1Db3JlLlNzb1Bhc3Nwb3J0O1xufTtcblxuZXhwb3J0IGNsYXNzIFNzb0xvZ2luUmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHNzb1Bhc3Nwb3J0OiBQbGF0Zm9ybUNvcmUuU3NvUGFzc3BvcnQ7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTc29Mb2dpblJlcXVlc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc3NvUGFzc3BvcnQgPSBwcm9wcy5zc29QYXNzcG9ydDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBBcHBsaWNhdGlvbkluZm9Qcm9wcyA9IHtcbiAgYXBwbGljYXRpb25JZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uSW5mbyBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGFwcGxpY2F0aW9uSWQ6IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IEFwcGxpY2F0aW9uSW5mb1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5hcHBsaWNhdGlvbklkID0gcHJvcHMuYXBwbGljYXRpb25JZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBQYXJ0bmVySW5mb1Byb3BzID0ge1xuICBwYXJ0bmVySWQ/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgUGFydG5lckluZm8gZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBwYXJ0bmVySWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQYXJ0bmVySW5mb1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5wYXJ0bmVySWQgPSBwcm9wcy5wYXJ0bmVySWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQWRkTGlzdFJlcXVlc3RQcm9wcyA9IHtcbiAgcmVjb3JkOiBQbGF0Zm9ybUNvcmUuUmVjb3JkW107XG59O1xuXG5leHBvcnQgY2xhc3MgQWRkTGlzdFJlcXVlc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICByZWNvcmQ6IFBsYXRmb3JtQ29yZS5SZWNvcmRbXTtcbiAgY29uc3RydWN0b3IocHJvcHM6IEFkZExpc3RSZXF1ZXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnJlY29yZCA9IHByb3BzLnJlY29yZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBVcGRhdGVMaXN0UmVxdWVzdFByb3BzID0ge1xuICByZWNvcmQ6IFBsYXRmb3JtQ29yZS5SZWNvcmRbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVMaXN0UmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHJlY29yZDogUGxhdGZvcm1Db3JlLlJlY29yZFtdO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVXBkYXRlTGlzdFJlcXVlc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMucmVjb3JkID0gcHJvcHMucmVjb3JkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZUxpc3RSZXNwb25zZVByb3BzID0ge1xuICB3cml0ZVJlc3BvbnNlTGlzdDogV3JpdGVSZXNwb25zZUxpc3Q7XG59O1xuXG5leHBvcnQgY2xhc3MgVXBkYXRlTGlzdFJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgd3JpdGVSZXNwb25zZUxpc3Q6IFdyaXRlUmVzcG9uc2VMaXN0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVXBkYXRlTGlzdFJlc3BvbnNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLndyaXRlUmVzcG9uc2VMaXN0ID0gcHJvcHMud3JpdGVSZXNwb25zZUxpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0Q3VzdG9taXphdGlvbklkUmVzcG9uc2VQcm9wcyA9IHtcbiAgZ2V0Q3VzdG9taXphdGlvbklkUmVzdWx0OiBQbGF0Zm9ybUNvcmUuR2V0Q3VzdG9taXphdGlvbklkUmVzdWx0O1xufTtcblxuZXhwb3J0IGNsYXNzIEdldEN1c3RvbWl6YXRpb25JZFJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgZ2V0Q3VzdG9taXphdGlvbklkUmVzdWx0OiBQbGF0Zm9ybUNvcmUuR2V0Q3VzdG9taXphdGlvbklkUmVzdWx0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0Q3VzdG9taXphdGlvbklkUmVzcG9uc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZ2V0Q3VzdG9taXphdGlvbklkUmVzdWx0ID0gcHJvcHMuZ2V0Q3VzdG9taXphdGlvbklkUmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNlYXJjaE1vcmVXaXRoSWRSZXNwb25zZVByb3BzID0ge1xuICBzZWFyY2hSZXN1bHQ6IFBsYXRmb3JtQ29yZS5TZWFyY2hSZXN1bHQ7XG59O1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9yZVdpdGhJZFJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc2VhcmNoUmVzdWx0OiBQbGF0Zm9ybUNvcmUuU2VhcmNoUmVzdWx0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VhcmNoTW9yZVdpdGhJZFJlc3BvbnNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdCA9IHByb3BzLnNlYXJjaFJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDaGFuZ2VFbWFpbFJlc3BvbnNlUHJvcHMgPSB7XG4gIHNlc3Npb25SZXNwb25zZTogU2Vzc2lvblJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNsYXNzIENoYW5nZUVtYWlsUmVzcG9uc2UgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBzZXNzaW9uUmVzcG9uc2U6IFNlc3Npb25SZXNwb25zZTtcbiAgY29uc3RydWN0b3IocHJvcHM6IENoYW5nZUVtYWlsUmVzcG9uc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc2Vzc2lvblJlc3BvbnNlID0gcHJvcHMuc2Vzc2lvblJlc3BvbnNlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdldERlbGV0ZWRSZXNwb25zZVByb3BzID0ge1xuICBnZXREZWxldGVkUmVzdWx0OiBQbGF0Zm9ybUNvcmUuR2V0RGVsZXRlZFJlc3VsdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXREZWxldGVkUmVzcG9uc2UgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBnZXREZWxldGVkUmVzdWx0OiBQbGF0Zm9ybUNvcmUuR2V0RGVsZXRlZFJlc3VsdDtcbiAgY29uc3RydWN0b3IocHJvcHM6IEdldERlbGV0ZWRSZXNwb25zZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5nZXREZWxldGVkUmVzdWx0ID0gcHJvcHMuZ2V0RGVsZXRlZFJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBHZXRJdGVtQXZhaWxhYmlsaXR5UmVzcG9uc2VQcm9wcyA9IHtcbiAgZ2V0SXRlbUF2YWlsYWJpbGl0eVJlc3VsdDogUGxhdGZvcm1Db3JlLkdldEl0ZW1BdmFpbGFiaWxpdHlSZXN1bHQ7XG59O1xuXG5leHBvcnQgY2xhc3MgR2V0SXRlbUF2YWlsYWJpbGl0eVJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgZ2V0SXRlbUF2YWlsYWJpbGl0eVJlc3VsdDogUGxhdGZvcm1Db3JlLkdldEl0ZW1BdmFpbGFiaWxpdHlSZXN1bHQ7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBHZXRJdGVtQXZhaWxhYmlsaXR5UmVzcG9uc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZ2V0SXRlbUF2YWlsYWJpbGl0eVJlc3VsdCA9IHByb3BzLmdldEl0ZW1BdmFpbGFiaWxpdHlSZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0SXRlbUF2YWlsYWJpbGl0eVJlcXVlc3RQcm9wcyA9IHtcbiAgaXRlbUF2YWlsYWJpbGl0eUZpbHRlcjogUGxhdGZvcm1Db3JlLkl0ZW1BdmFpbGFiaWxpdHlGaWx0ZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgR2V0SXRlbUF2YWlsYWJpbGl0eVJlcXVlc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBpdGVtQXZhaWxhYmlsaXR5RmlsdGVyOiBQbGF0Zm9ybUNvcmUuSXRlbUF2YWlsYWJpbGl0eUZpbHRlcjtcbiAgY29uc3RydWN0b3IocHJvcHM6IEdldEl0ZW1BdmFpbGFiaWxpdHlSZXF1ZXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLml0ZW1BdmFpbGFiaWxpdHlGaWx0ZXIgPSBwcm9wcy5pdGVtQXZhaWxhYmlsaXR5RmlsdGVyO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdldERhdGFDZW50ZXJVcmxzUmVxdWVzdFByb3BzID0ge1xuICBhY2NvdW50OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgR2V0RGF0YUNlbnRlclVybHNSZXF1ZXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgYWNjb3VudDogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0RGF0YUNlbnRlclVybHNSZXF1ZXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmFjY291bnQgPSBwcm9wcy5hY2NvdW50O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFzeW5jU3RhdHVzUmVzcG9uc2VQcm9wcyA9IHtcbiAgYXN5bmNTdGF0dXNSZXN1bHQ6IFBsYXRmb3JtQ29yZS5Bc3luY1N0YXR1c1Jlc3VsdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBBc3luY1N0YXR1c1Jlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgYXN5bmNTdGF0dXNSZXN1bHQ6IFBsYXRmb3JtQ29yZS5Bc3luY1N0YXR1c1Jlc3VsdDtcbiAgY29uc3RydWN0b3IocHJvcHM6IEFzeW5jU3RhdHVzUmVzcG9uc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuYXN5bmNTdGF0dXNSZXN1bHQgPSBwcm9wcy5hc3luY1N0YXR1c1Jlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBHZXRDdXJyZW5jeVJhdGVSZXF1ZXN0UHJvcHMgPSB7XG4gIGN1cnJlbmN5UmF0ZUZpbHRlcjogUGxhdGZvcm1Db3JlLkN1cnJlbmN5UmF0ZUZpbHRlcjtcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXRDdXJyZW5jeVJhdGVSZXF1ZXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgY3VycmVuY3lSYXRlRmlsdGVyOiBQbGF0Zm9ybUNvcmUuQ3VycmVuY3lSYXRlRmlsdGVyO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0Q3VycmVuY3lSYXRlUmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5jdXJyZW5jeVJhdGVGaWx0ZXIgPSBwcm9wcy5jdXJyZW5jeVJhdGVGaWx0ZXI7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0Q3VzdG9taXphdGlvbklkUmVxdWVzdFByb3BzID0ge1xuICBjdXN0b21pemF0aW9uVHlwZTogUGxhdGZvcm1Db3JlLkN1c3RvbWl6YXRpb25UeXBlO1xuICBpbmNsdWRlSW5hY3RpdmVzOiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIEdldEN1c3RvbWl6YXRpb25JZFJlcXVlc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBjdXN0b21pemF0aW9uVHlwZTogUGxhdGZvcm1Db3JlLkN1c3RvbWl6YXRpb25UeXBlO1xuICBpbmNsdWRlSW5hY3RpdmVzOiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0Q3VzdG9taXphdGlvbklkUmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5jdXN0b21pemF0aW9uVHlwZSA9IHByb3BzLmN1c3RvbWl6YXRpb25UeXBlO1xuICAgIHRoaXMuaW5jbHVkZUluYWN0aXZlcyA9IHByb3BzLmluY2x1ZGVJbmFjdGl2ZXM7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0U2VsZWN0VmFsdWVSZXF1ZXN0UHJvcHMgPSB7XG4gIGZpZWxkRGVzY3JpcHRpb246IFBsYXRmb3JtQ29yZS5HZXRTZWxlY3RWYWx1ZUZpZWxkRGVzY3JpcHRpb247XG4gIHBhZ2VJbmRleDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNsYXNzIEdldFNlbGVjdFZhbHVlUmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGZpZWxkRGVzY3JpcHRpb246IFBsYXRmb3JtQ29yZS5HZXRTZWxlY3RWYWx1ZUZpZWxkRGVzY3JpcHRpb247XG4gIHBhZ2VJbmRleDogbnVtYmVyO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0U2VsZWN0VmFsdWVSZXF1ZXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmZpZWxkRGVzY3JpcHRpb24gPSBwcm9wcy5maWVsZERlc2NyaXB0aW9uO1xuICAgIHRoaXMucGFnZUluZGV4ID0gcHJvcHMucGFnZUluZGV4O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNlYXJjaE5leHRSZXNwb25zZVByb3BzID0ge1xuICBzZWFyY2hSZXN1bHQ6IFBsYXRmb3JtQ29yZS5TZWFyY2hSZXN1bHQ7XG59O1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoTmV4dFJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc2VhcmNoUmVzdWx0OiBQbGF0Zm9ybUNvcmUuU2VhcmNoUmVzdWx0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VhcmNoTmV4dFJlc3BvbnNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdCA9IHByb3BzLnNlYXJjaFJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBBc3luY1NlYXJjaFJlcXVlc3RQcm9wcyA9IHtcbiAgc2VhcmNoUmVjb3JkOiBQbGF0Zm9ybUNvcmUuU2VhcmNoUmVjb3JkO1xufTtcblxuZXhwb3J0IGNsYXNzIEFzeW5jU2VhcmNoUmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHNlYXJjaFJlY29yZDogUGxhdGZvcm1Db3JlLlNlYXJjaFJlY29yZDtcbiAgY29uc3RydWN0b3IocHJvcHM6IEFzeW5jU2VhcmNoUmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZWFyY2hSZWNvcmQgPSBwcm9wcy5zZWFyY2hSZWNvcmQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0TGlzdFJlcXVlc3RQcm9wcyA9IHtcbiAgYmFzZVJlZjogUGxhdGZvcm1Db3JlLkJhc2VSZWZbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXRMaXN0UmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGJhc2VSZWY6IFBsYXRmb3JtQ29yZS5CYXNlUmVmW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBHZXRMaXN0UmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5iYXNlUmVmID0gcHJvcHMuYmFzZVJlZjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBBc3luY1VwZGF0ZUxpc3RSZXN1bHRQcm9wcyA9IHtcbiAgd3JpdGVSZXNwb25zZUxpc3Q6IFdyaXRlUmVzcG9uc2VMaXN0O1xufTtcblxuZXhwb3J0IGNsYXNzIEFzeW5jVXBkYXRlTGlzdFJlc3VsdCBleHRlbmRzIEFzeW5jUmVzdWx0IHtcbiAgd3JpdGVSZXNwb25zZUxpc3Q6IFdyaXRlUmVzcG9uc2VMaXN0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQXN5bmNVcGRhdGVMaXN0UmVzdWx0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLndyaXRlUmVzcG9uc2VMaXN0ID0gcHJvcHMud3JpdGVSZXNwb25zZUxpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQXN5bmNVcGRhdGVMaXN0UmVxdWVzdFByb3BzID0ge1xuICByZWNvcmQ6IFBsYXRmb3JtQ29yZS5SZWNvcmRbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBBc3luY1VwZGF0ZUxpc3RSZXF1ZXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgcmVjb3JkOiBQbGF0Zm9ybUNvcmUuUmVjb3JkW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBBc3luY1VwZGF0ZUxpc3RSZXF1ZXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnJlY29yZCA9IHByb3BzLnJlY29yZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDaGFuZ2VFbWFpbFJlcXVlc3RQcm9wcyA9IHtcbiAgY2hhbmdlRW1haWw6IFBsYXRmb3JtQ29yZS5DaGFuZ2VFbWFpbDtcbn07XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VFbWFpbFJlcXVlc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBjaGFuZ2VFbWFpbDogUGxhdGZvcm1Db3JlLkNoYW5nZUVtYWlsO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQ2hhbmdlRW1haWxSZXF1ZXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmNoYW5nZUVtYWlsID0gcHJvcHMuY2hhbmdlRW1haWw7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0QnVkZ2V0RXhjaGFuZ2VSYXRlUmVxdWVzdFByb3BzID0ge1xuICBidWRnZXRFeGNoYW5nZVJhdGVGaWx0ZXI6IFBsYXRmb3JtQ29yZS5CdWRnZXRFeGNoYW5nZVJhdGVGaWx0ZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgR2V0QnVkZ2V0RXhjaGFuZ2VSYXRlUmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGJ1ZGdldEV4Y2hhbmdlUmF0ZUZpbHRlcjogUGxhdGZvcm1Db3JlLkJ1ZGdldEV4Y2hhbmdlUmF0ZUZpbHRlcjtcbiAgY29uc3RydWN0b3IocHJvcHM6IEdldEJ1ZGdldEV4Y2hhbmdlUmF0ZVJlcXVlc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuYnVkZ2V0RXhjaGFuZ2VSYXRlRmlsdGVyID0gcHJvcHMuYnVkZ2V0RXhjaGFuZ2VSYXRlRmlsdGVyO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNlYXJjaE1vcmVSZXNwb25zZVByb3BzID0ge1xuICBzZWFyY2hSZXN1bHQ6IFBsYXRmb3JtQ29yZS5TZWFyY2hSZXN1bHQ7XG59O1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9yZVJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc2VhcmNoUmVzdWx0OiBQbGF0Zm9ybUNvcmUuU2VhcmNoUmVzdWx0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VhcmNoTW9yZVJlc3BvbnNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdCA9IHByb3BzLnNlYXJjaFJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBHZXRBc3luY1Jlc3VsdFJlc3BvbnNlUHJvcHMgPSB7XG4gIGFzeW5jUmVzdWx0OiBBc3luY1Jlc3VsdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXRBc3luY1Jlc3VsdFJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgYXN5bmNSZXN1bHQ6IEFzeW5jUmVzdWx0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0QXN5bmNSZXN1bHRSZXNwb25zZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5hc3luY1Jlc3VsdCA9IHByb3BzLmFzeW5jUmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNlYXJjaE1vcmVXaXRoSWRSZXF1ZXN0UHJvcHMgPSB7XG4gIHNlYXJjaElkOiBzdHJpbmc7XG4gIHBhZ2VJbmRleDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vcmVXaXRoSWRSZXF1ZXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc2VhcmNoSWQ6IHN0cmluZztcbiAgcGFnZUluZGV4OiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTZWFyY2hNb3JlV2l0aElkUmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZWFyY2hJZCA9IHByb3BzLnNlYXJjaElkO1xuICAgIHRoaXMucGFnZUluZGV4ID0gcHJvcHMucGFnZUluZGV4O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hOZXh0UmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7fVxuXG5leHBvcnQgdHlwZSBEZXRhY2hSZXF1ZXN0UHJvcHMgPSB7XG4gIGRldGFjaFJlZmVyZW5jZTogUGxhdGZvcm1Db3JlLkRldGFjaFJlZmVyZW5jZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBEZXRhY2hSZXF1ZXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgZGV0YWNoUmVmZXJlbmNlOiBQbGF0Zm9ybUNvcmUuRGV0YWNoUmVmZXJlbmNlO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogRGV0YWNoUmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5kZXRhY2hSZWZlcmVuY2UgPSBwcm9wcy5kZXRhY2hSZWZlcmVuY2U7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2VhcmNoUmVzcG9uc2VQcm9wcyA9IHtcbiAgc2VhcmNoUmVzdWx0OiBQbGF0Zm9ybUNvcmUuU2VhcmNoUmVzdWx0O1xufTtcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc2VhcmNoUmVzdWx0OiBQbGF0Zm9ybUNvcmUuU2VhcmNoUmVzdWx0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VhcmNoUmVzcG9uc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc2VhcmNoUmVzdWx0ID0gcHJvcHMuc2VhcmNoUmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdldEFsbFJlc3BvbnNlUHJvcHMgPSB7XG4gIGdldEFsbFJlc3VsdDogUGxhdGZvcm1Db3JlLkdldEFsbFJlc3VsdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXRBbGxSZXNwb25zZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGdldEFsbFJlc3VsdDogUGxhdGZvcm1Db3JlLkdldEFsbFJlc3VsdDtcbiAgY29uc3RydWN0b3IocHJvcHM6IEdldEFsbFJlc3BvbnNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmdldEFsbFJlc3VsdCA9IHByb3BzLmdldEFsbFJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBBZGRSZXNwb25zZVByb3BzID0ge1xuICB3cml0ZVJlc3BvbnNlOiBXcml0ZVJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNsYXNzIEFkZFJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgd3JpdGVSZXNwb25zZTogV3JpdGVSZXNwb25zZTtcbiAgY29uc3RydWN0b3IocHJvcHM6IEFkZFJlc3BvbnNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLndyaXRlUmVzcG9uc2UgPSBwcm9wcy53cml0ZVJlc3BvbnNlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdldERhdGFDZW50ZXJVcmxzUmVzcG9uc2VQcm9wcyA9IHtcbiAgZ2V0RGF0YUNlbnRlclVybHNSZXN1bHQ6IFBsYXRmb3JtQ29yZS5HZXREYXRhQ2VudGVyVXJsc1Jlc3VsdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXREYXRhQ2VudGVyVXJsc1Jlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgZ2V0RGF0YUNlbnRlclVybHNSZXN1bHQ6IFBsYXRmb3JtQ29yZS5HZXREYXRhQ2VudGVyVXJsc1Jlc3VsdDtcbiAgY29uc3RydWN0b3IocHJvcHM6IEdldERhdGFDZW50ZXJVcmxzUmVzcG9uc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZ2V0RGF0YUNlbnRlclVybHNSZXN1bHQgPSBwcm9wcy5nZXREYXRhQ2VudGVyVXJsc1Jlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBBc3luY0dldExpc3RSZXN1bHRQcm9wcyA9IHtcbiAgcmVhZFJlc3BvbnNlTGlzdDogUmVhZFJlc3BvbnNlTGlzdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBBc3luY0dldExpc3RSZXN1bHQgZXh0ZW5kcyBBc3luY1Jlc3VsdCB7XG4gIHJlYWRSZXNwb25zZUxpc3Q6IFJlYWRSZXNwb25zZUxpc3Q7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBBc3luY0dldExpc3RSZXN1bHRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMucmVhZFJlc3BvbnNlTGlzdCA9IHByb3BzLnJlYWRSZXNwb25zZUxpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVXBzZXJ0UmVxdWVzdFByb3BzID0ge1xuICByZWNvcmQ6IFBsYXRmb3JtQ29yZS5SZWNvcmQ7XG59O1xuXG5leHBvcnQgY2xhc3MgVXBzZXJ0UmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHJlY29yZDogUGxhdGZvcm1Db3JlLlJlY29yZDtcbiAgY29uc3RydWN0b3IocHJvcHM6IFVwc2VydFJlcXVlc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMucmVjb3JkID0gcHJvcHMucmVjb3JkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdldEFsbFJlcXVlc3RQcm9wcyA9IHtcbiAgcmVjb3JkOiBQbGF0Zm9ybUNvcmUuR2V0QWxsUmVjb3JkO1xufTtcblxuZXhwb3J0IGNsYXNzIEdldEFsbFJlcXVlc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICByZWNvcmQ6IFBsYXRmb3JtQ29yZS5HZXRBbGxSZWNvcmQ7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBHZXRBbGxSZXF1ZXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnJlY29yZCA9IHByb3BzLnJlY29yZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBNYXBTc29SZXNwb25zZVByb3BzID0ge1xuICBzZXNzaW9uUmVzcG9uc2U6IFNlc3Npb25SZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBNYXBTc29SZXNwb25zZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHNlc3Npb25SZXNwb25zZTogU2Vzc2lvblJlc3BvbnNlO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogTWFwU3NvUmVzcG9uc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc2Vzc2lvblJlc3BvbnNlID0gcHJvcHMuc2Vzc2lvblJlc3BvbnNlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNlYXJjaE1vcmVSZXF1ZXN0UHJvcHMgPSB7XG4gIHBhZ2VJbmRleDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vcmVSZXF1ZXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgcGFnZUluZGV4OiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTZWFyY2hNb3JlUmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5wYWdlSW5kZXggPSBwcm9wcy5wYWdlSW5kZXg7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0RGVsZXRlZFJlcXVlc3RQcm9wcyA9IHtcbiAgZ2V0RGVsZXRlZEZpbHRlcjogUGxhdGZvcm1Db3JlLkdldERlbGV0ZWRGaWx0ZXI7XG4gIHBhZ2VJbmRleDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNsYXNzIEdldERlbGV0ZWRSZXF1ZXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgZ2V0RGVsZXRlZEZpbHRlcjogUGxhdGZvcm1Db3JlLkdldERlbGV0ZWRGaWx0ZXI7XG4gIHBhZ2VJbmRleDogbnVtYmVyO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0RGVsZXRlZFJlcXVlc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZ2V0RGVsZXRlZEZpbHRlciA9IHByb3BzLmdldERlbGV0ZWRGaWx0ZXI7XG4gICAgdGhpcy5wYWdlSW5kZXggPSBwcm9wcy5wYWdlSW5kZXg7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRGVsZXRlUmVxdWVzdFByb3BzID0ge1xuICBiYXNlUmVmOiBQbGF0Zm9ybUNvcmUuQmFzZVJlZjtcbiAgZGVsZXRpb25SZWFzb24/OiBQbGF0Zm9ybUNvcmUuRGVsZXRpb25SZWFzb247XG59O1xuXG5leHBvcnQgY2xhc3MgRGVsZXRlUmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGJhc2VSZWY6IFBsYXRmb3JtQ29yZS5CYXNlUmVmO1xuICBkZWxldGlvblJlYXNvbj86IFBsYXRmb3JtQ29yZS5EZWxldGlvblJlYXNvbjtcbiAgY29uc3RydWN0b3IocHJvcHM6IERlbGV0ZVJlcXVlc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuYmFzZVJlZiA9IHByb3BzLmJhc2VSZWY7XG4gICAgdGhpcy5kZWxldGlvblJlYXNvbiA9IHByb3BzLmRlbGV0aW9uUmVhc29uO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFzeW5jSW5pdGlhbGl6ZUxpc3RSZXN1bHRQcm9wcyA9IHtcbiAgcmVhZFJlc3BvbnNlTGlzdDogUmVhZFJlc3BvbnNlTGlzdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBBc3luY0luaXRpYWxpemVMaXN0UmVzdWx0IGV4dGVuZHMgQXN5bmNSZXN1bHQge1xuICByZWFkUmVzcG9uc2VMaXN0OiBSZWFkUmVzcG9uc2VMaXN0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQXN5bmNJbml0aWFsaXplTGlzdFJlc3VsdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5yZWFkUmVzcG9uc2VMaXN0ID0gcHJvcHMucmVhZFJlc3BvbnNlTGlzdDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDaGFuZ2VQYXNzd29yZFJlcXVlc3RQcm9wcyA9IHtcbiAgY2hhbmdlUGFzc3dvcmQ6IFBsYXRmb3JtQ29yZS5DaGFuZ2VQYXNzd29yZDtcbn07XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBjaGFuZ2VQYXNzd29yZDogUGxhdGZvcm1Db3JlLkNoYW5nZVBhc3N3b3JkO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmNoYW5nZVBhc3N3b3JkID0gcHJvcHMuY2hhbmdlUGFzc3dvcmQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgV3JpdGVSZXNwb25zZUxpc3RQcm9wcyA9IHtcbiAgc3RhdHVzPzogUGxhdGZvcm1Db3JlLlN0YXR1cztcbiAgd3JpdGVSZXNwb25zZTogV3JpdGVSZXNwb25zZVtdO1xufTtcblxuZXhwb3J0IGNsYXNzIFdyaXRlUmVzcG9uc2VMaXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc3RhdHVzPzogUGxhdGZvcm1Db3JlLlN0YXR1cztcbiAgd3JpdGVSZXNwb25zZTogV3JpdGVSZXNwb25zZVtdO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogV3JpdGVSZXNwb25zZUxpc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc3RhdHVzID0gcHJvcHMuc3RhdHVzO1xuICAgIHRoaXMud3JpdGVSZXNwb25zZSA9IHByb3BzLndyaXRlUmVzcG9uc2U7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0QnVkZ2V0RXhjaGFuZ2VSYXRlUmVzcG9uc2VQcm9wcyA9IHtcbiAgZ2V0QnVkZ2V0RXhjaGFuZ2VSYXRlUmVzdWx0OiBQbGF0Zm9ybUNvcmUuR2V0QnVkZ2V0RXhjaGFuZ2VSYXRlUmVzdWx0O1xufTtcblxuZXhwb3J0IGNsYXNzIEdldEJ1ZGdldEV4Y2hhbmdlUmF0ZVJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgZ2V0QnVkZ2V0RXhjaGFuZ2VSYXRlUmVzdWx0OiBQbGF0Zm9ybUNvcmUuR2V0QnVkZ2V0RXhjaGFuZ2VSYXRlUmVzdWx0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0QnVkZ2V0RXhjaGFuZ2VSYXRlUmVzcG9uc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZ2V0QnVkZ2V0RXhjaGFuZ2VSYXRlUmVzdWx0ID0gcHJvcHMuZ2V0QnVkZ2V0RXhjaGFuZ2VSYXRlUmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFJlYWRSZXNwb25zZUxpc3RQcm9wcyA9IHtcbiAgc3RhdHVzPzogUGxhdGZvcm1Db3JlLlN0YXR1cztcbiAgcmVhZFJlc3BvbnNlPzogUmVhZFJlc3BvbnNlW107XG59O1xuXG5leHBvcnQgY2xhc3MgUmVhZFJlc3BvbnNlTGlzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHN0YXR1cz86IFBsYXRmb3JtQ29yZS5TdGF0dXM7XG4gIHJlYWRSZXNwb25zZT86IFJlYWRSZXNwb25zZVtdO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUmVhZFJlc3BvbnNlTGlzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zdGF0dXMgPSBwcm9wcy5zdGF0dXM7XG4gICAgdGhpcy5yZWFkUmVzcG9uc2UgPSBwcm9wcy5yZWFkUmVzcG9uc2U7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVXBzZXJ0UmVzcG9uc2VQcm9wcyA9IHtcbiAgd3JpdGVSZXNwb25zZTogV3JpdGVSZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBVcHNlcnRSZXNwb25zZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHdyaXRlUmVzcG9uc2U6IFdyaXRlUmVzcG9uc2U7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBVcHNlcnRSZXNwb25zZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy53cml0ZVJlc3BvbnNlID0gcHJvcHMud3JpdGVSZXNwb25zZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2V0U2VydmVyVGltZVJlcXVlc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge31cblxuZXhwb3J0IGNsYXNzIExvZ291dFJlcXVlc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge31cblxuZXhwb3J0IHR5cGUgVXBzZXJ0TGlzdFJlcXVlc3RQcm9wcyA9IHtcbiAgcmVjb3JkOiBQbGF0Zm9ybUNvcmUuUmVjb3JkW107XG59O1xuXG5leHBvcnQgY2xhc3MgVXBzZXJ0TGlzdFJlcXVlc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICByZWNvcmQ6IFBsYXRmb3JtQ29yZS5SZWNvcmRbXTtcbiAgY29uc3RydWN0b3IocHJvcHM6IFVwc2VydExpc3RSZXF1ZXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnJlY29yZCA9IHByb3BzLnJlY29yZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBHZXRQb3N0aW5nVHJhbnNhY3Rpb25TdW1tYXJ5UmVxdWVzdFByb3BzID0ge1xuICBmaWVsZHM/OiBQbGF0Zm9ybUNvcmUuUG9zdGluZ1RyYW5zYWN0aW9uU3VtbWFyeUZpZWxkO1xuICBmaWx0ZXJzPzogUGxhdGZvcm1Db3JlLlBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnlGaWx0ZXI7XG4gIHBhZ2VJbmRleDogbnVtYmVyO1xuICBvcGVyYXRpb25JZD86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXRQb3N0aW5nVHJhbnNhY3Rpb25TdW1tYXJ5UmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGZpZWxkcz86IFBsYXRmb3JtQ29yZS5Qb3N0aW5nVHJhbnNhY3Rpb25TdW1tYXJ5RmllbGQ7XG4gIGZpbHRlcnM/OiBQbGF0Zm9ybUNvcmUuUG9zdGluZ1RyYW5zYWN0aW9uU3VtbWFyeUZpbHRlcjtcbiAgcGFnZUluZGV4OiBudW1iZXI7XG4gIG9wZXJhdGlvbklkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0UG9zdGluZ1RyYW5zYWN0aW9uU3VtbWFyeVJlcXVlc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZmllbGRzID0gcHJvcHMuZmllbGRzO1xuICAgIHRoaXMuZmlsdGVycyA9IHByb3BzLmZpbHRlcnM7XG4gICAgdGhpcy5wYWdlSW5kZXggPSBwcm9wcy5wYWdlSW5kZXg7XG4gICAgdGhpcy5vcGVyYXRpb25JZCA9IHByb3BzLm9wZXJhdGlvbklkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFVwc2VydExpc3RSZXNwb25zZVByb3BzID0ge1xuICB3cml0ZVJlc3BvbnNlTGlzdDogV3JpdGVSZXNwb25zZUxpc3Q7XG59O1xuXG5leHBvcnQgY2xhc3MgVXBzZXJ0TGlzdFJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgd3JpdGVSZXNwb25zZUxpc3Q6IFdyaXRlUmVzcG9uc2VMaXN0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVXBzZXJ0TGlzdFJlc3BvbnNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLndyaXRlUmVzcG9uc2VMaXN0ID0gcHJvcHMud3JpdGVSZXNwb25zZUxpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2hhbmdlUGFzc3dvcmRSZXNwb25zZVByb3BzID0ge1xuICBzZXNzaW9uUmVzcG9uc2U6IFNlc3Npb25SZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc2Vzc2lvblJlc3BvbnNlOiBTZXNzaW9uUmVzcG9uc2U7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDaGFuZ2VQYXNzd29yZFJlc3BvbnNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnNlc3Npb25SZXNwb25zZSA9IHByb3BzLnNlc3Npb25SZXNwb25zZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBEZWxldGVMaXN0UmVzcG9uc2VQcm9wcyA9IHtcbiAgd3JpdGVSZXNwb25zZUxpc3Q6IFdyaXRlUmVzcG9uc2VMaXN0O1xufTtcblxuZXhwb3J0IGNsYXNzIERlbGV0ZUxpc3RSZXNwb25zZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHdyaXRlUmVzcG9uc2VMaXN0OiBXcml0ZVJlc3BvbnNlTGlzdDtcbiAgY29uc3RydWN0b3IocHJvcHM6IERlbGV0ZUxpc3RSZXNwb25zZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy53cml0ZVJlc3BvbnNlTGlzdCA9IHByb3BzLndyaXRlUmVzcG9uc2VMaXN0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZUludml0ZWVTdGF0dXNSZXNwb25zZVByb3BzID0ge1xuICB3cml0ZVJlc3BvbnNlOiBXcml0ZVJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZUludml0ZWVTdGF0dXNSZXNwb25zZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHdyaXRlUmVzcG9uc2U6IFdyaXRlUmVzcG9uc2U7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBVcGRhdGVJbnZpdGVlU3RhdHVzUmVzcG9uc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMud3JpdGVSZXNwb25zZSA9IHByb3BzLndyaXRlUmVzcG9uc2U7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQXN5bmNBZGRMaXN0UmVxdWVzdFByb3BzID0ge1xuICByZWNvcmQ6IFBsYXRmb3JtQ29yZS5SZWNvcmRbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBBc3luY0FkZExpc3RSZXF1ZXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgcmVjb3JkOiBQbGF0Zm9ybUNvcmUuUmVjb3JkW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBBc3luY0FkZExpc3RSZXF1ZXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnJlY29yZCA9IHByb3BzLnJlY29yZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBJbml0aWFsaXplUmVxdWVzdFByb3BzID0ge1xuICBpbml0aWFsaXplUmVjb3JkOiBQbGF0Zm9ybUNvcmUuSW5pdGlhbGl6ZVJlY29yZDtcbn07XG5cbmV4cG9ydCBjbGFzcyBJbml0aWFsaXplUmVxdWVzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGluaXRpYWxpemVSZWNvcmQ6IFBsYXRmb3JtQ29yZS5Jbml0aWFsaXplUmVjb3JkO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogSW5pdGlhbGl6ZVJlcXVlc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZVJlY29yZCA9IHByb3BzLmluaXRpYWxpemVSZWNvcmQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgSW5pdGlhbGl6ZUxpc3RSZXF1ZXN0UHJvcHMgPSB7XG4gIGluaXRpYWxpemVSZWNvcmQ6IFBsYXRmb3JtQ29yZS5Jbml0aWFsaXplUmVjb3JkW107XG59O1xuXG5leHBvcnQgY2xhc3MgSW5pdGlhbGl6ZUxpc3RSZXF1ZXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgaW5pdGlhbGl6ZVJlY29yZDogUGxhdGZvcm1Db3JlLkluaXRpYWxpemVSZWNvcmRbXTtcbiAgY29uc3RydWN0b3IocHJvcHM6IEluaXRpYWxpemVMaXN0UmVxdWVzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5pbml0aWFsaXplUmVjb3JkID0gcHJvcHMuaW5pdGlhbGl6ZVJlY29yZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBQcmVmZXJlbmNlc1Byb3BzID0ge1xuICB3YXJuaW5nQXNFcnJvcj86IGJvb2xlYW47XG4gIGRpc2FibGVNYW5kYXRvcnlDdXN0b21GaWVsZFZhbGlkYXRpb24/OiBib29sZWFuO1xuICBkaXNhYmxlU3lzdGVtTm90ZXNGb3JDdXN0b21GaWVsZHM/OiBib29sZWFuO1xuICBpZ25vcmVSZWFkT25seUZpZWxkcz86IGJvb2xlYW47XG4gIHJ1blNlcnZlclN1aXRlU2NyaXB0QW5kVHJpZ2dlcldvcmtmbG93cz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgUHJlZmVyZW5jZXMgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICB3YXJuaW5nQXNFcnJvcj86IGJvb2xlYW47XG4gIGRpc2FibGVNYW5kYXRvcnlDdXN0b21GaWVsZFZhbGlkYXRpb24/OiBib29sZWFuO1xuICBkaXNhYmxlU3lzdGVtTm90ZXNGb3JDdXN0b21GaWVsZHM/OiBib29sZWFuO1xuICBpZ25vcmVSZWFkT25seUZpZWxkcz86IGJvb2xlYW47XG4gIHJ1blNlcnZlclN1aXRlU2NyaXB0QW5kVHJpZ2dlcldvcmtmbG93cz86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcmVmZXJlbmNlc1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy53YXJuaW5nQXNFcnJvciA9IHByb3BzLndhcm5pbmdBc0Vycm9yO1xuICAgIHRoaXMuZGlzYWJsZU1hbmRhdG9yeUN1c3RvbUZpZWxkVmFsaWRhdGlvbiA9XG4gICAgICBwcm9wcy5kaXNhYmxlTWFuZGF0b3J5Q3VzdG9tRmllbGRWYWxpZGF0aW9uO1xuICAgIHRoaXMuZGlzYWJsZVN5c3RlbU5vdGVzRm9yQ3VzdG9tRmllbGRzID1cbiAgICAgIHByb3BzLmRpc2FibGVTeXN0ZW1Ob3Rlc0ZvckN1c3RvbUZpZWxkcztcbiAgICB0aGlzLmlnbm9yZVJlYWRPbmx5RmllbGRzID0gcHJvcHMuaWdub3JlUmVhZE9ubHlGaWVsZHM7XG4gICAgdGhpcy5ydW5TZXJ2ZXJTdWl0ZVNjcmlwdEFuZFRyaWdnZXJXb3JrZmxvd3MgPVxuICAgICAgcHJvcHMucnVuU2VydmVyU3VpdGVTY3JpcHRBbmRUcmlnZ2VyV29ya2Zsb3dzO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdldExpc3RSZXNwb25zZVByb3BzID0ge1xuICByZWFkUmVzcG9uc2VMaXN0OiBSZWFkUmVzcG9uc2VMaXN0O1xufTtcblxuZXhwb3J0IGNsYXNzIEdldExpc3RSZXNwb25zZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHJlYWRSZXNwb25zZUxpc3Q6IFJlYWRSZXNwb25zZUxpc3Q7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBHZXRMaXN0UmVzcG9uc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMucmVhZFJlc3BvbnNlTGlzdCA9IHByb3BzLnJlYWRSZXNwb25zZUxpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQXR0YWNoUmVzcG9uc2VQcm9wcyA9IHtcbiAgd3JpdGVSZXNwb25zZTogV3JpdGVSZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBBdHRhY2hSZXNwb25zZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHdyaXRlUmVzcG9uc2U6IFdyaXRlUmVzcG9uc2U7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBBdHRhY2hSZXNwb25zZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy53cml0ZVJlc3BvbnNlID0gcHJvcHMud3JpdGVSZXNwb25zZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBVcGRhdGVJbnZpdGVlU3RhdHVzTGlzdFJlc3BvbnNlUHJvcHMgPSB7XG4gIHdyaXRlUmVzcG9uc2VMaXN0OiBXcml0ZVJlc3BvbnNlTGlzdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVJbnZpdGVlU3RhdHVzTGlzdFJlc3BvbnNlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgd3JpdGVSZXNwb25zZUxpc3Q6IFdyaXRlUmVzcG9uc2VMaXN0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVXBkYXRlSW52aXRlZVN0YXR1c0xpc3RSZXNwb25zZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy53cml0ZVJlc3BvbnNlTGlzdCA9IHByb3BzLndyaXRlUmVzcG9uc2VMaXN0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIExvZ2luUmVzcG9uc2VQcm9wcyA9IHtcbiAgc2Vzc2lvblJlc3BvbnNlOiBTZXNzaW9uUmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY2xhc3MgTG9naW5SZXNwb25zZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHNlc3Npb25SZXNwb25zZTogU2Vzc2lvblJlc3BvbnNlO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogTG9naW5SZXNwb25zZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZXNzaW9uUmVzcG9uc2UgPSBwcm9wcy5zZXNzaW9uUmVzcG9uc2U7XG4gIH1cbn1cbiJdfQ==