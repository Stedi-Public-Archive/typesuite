"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRowList = exports.SearchDoubleField = exports.RecordRefList = exports.SelectCustomFieldRef = exports.GetCurrencyRateResult = exports.SearchResult = exports.SearchEnumMultiSelectCustomField = exports.SearchColumnBooleanCustomField = exports.PostingTransactionSummaryFilter = exports.PostingTransactionSummary = exports.SsoPassport = exports.DataCenterUrls = exports.CurrencyRateList = exports.CustomTransactionRef = exports.GetAllResult = exports.SearchColumnStringField = exports.SearchStringCustomField = exports.SearchColumnDateCustomField = exports.SsoCredentials = exports.SearchColumnMultiSelectCustomField = exports.SearchRow = exports.GetSelectValueResult = exports.InitializeAuxRef = exports.StringCustomFieldRef = exports.StatusDetail = exports.DimensionList = exports.SearchMultiSelectField = exports.SearchTextNumberField = exports.DateCustomFieldRef = exports.CustomFieldRef = exports.CustomizationRef = exports.RecordRef = exports.BaseRef = exports.SearchDoubleCustomField = exports.DetachBasicReference = exports.DetachReference = exports.SearchColumnLongCustomField = exports.PostingTransactionSummaryField = exports.GetSavedSearchResult = exports.GetSelectFilterByFieldValueList = exports.BudgetExchangeRateFilter = exports.SearchColumnField = exports.SearchBooleanCustomField = exports.SearchCustomField = exports.WsRoleList = exports.DeletedRecordList = exports.BaseRefList = exports.SearchEnumMultiSelectField = exports.CustomFieldList = exports.SearchColumnCustomField = void 0;
exports.BudgetExchangeRate = exports.Passport = exports.GetSelectValueFilter = exports.GetCustomizationIdResult = exports.DoubleCustomFieldRef = exports.TokenPassport = exports.LongCustomFieldRef = exports.ListOrRecordRef = exports.SearchColumnDoubleCustomField = exports.CustomizationType = exports.Duration = exports.CurrencyRate = exports.GetSavedSearchRecord = exports.CustomizationRefList = exports.SearchLongField = exports.DimensionRef = exports.PostingTransactionSummaryList = exports.GetDataCenterUrlsResult = exports.SearchColumnSelectCustomField = exports.SearchDateField = exports.ItemAvailabilityList = exports.GetDeletedFilter = exports.GetSelectFilterByFieldValue = exports.SearchColumnLongField = exports.MultiSelectCustomFieldRef = exports.GetDeletedResult = exports.WsRole = exports.DeletedRecord = exports.SearchColumnSelectField = exports.BooleanCustomFieldRef = exports.GetSelectValueFieldDescription = exports.RecordList = exports.CurrencyRateFilter = exports.ItemAvailability = exports.SearchColumnTextNumberField = exports.GetItemAvailabilityResult = exports.NullField = exports.AttachBasicReference = exports.Record = exports.SearchColumnBooleanField = exports.AttachContactReference = exports.AttachReference = exports.InitializeRef = exports.DeletionReason = exports.SearchCustomFieldList = exports.SearchRecordBasic = exports.SearchRecord = exports.ChangeEmail = exports.SearchRowBasic = exports.AsyncStatusResult = void 0;
exports.SearchColumnCustomFieldList = exports.SearchColumnDateField = exports.ItemAvailabilityFilter = exports.TokenPassportSignature = exports.SearchLongCustomField = exports.GetBudgetExchangeRateResult = exports.SearchColumnDoubleField = exports.SearchColumnEnumSelectField = exports.InitializeRecord = exports.BudgetExchangeRateList = exports.CustomRecordRef = exports.GetServerTimeResult = exports.UpdateInviteeStatusReference = exports.SearchColumnEnumMultiSelectCustomField = exports.ChangePassword = exports.InitializeRefList = exports.SearchStringField = exports.GetAllRecord = exports.SearchColumnStringCustomField = exports.SelectDimensionRef = exports.GetPostingTransactionSummaryResult = exports.StringDimensionRef = exports.SearchMultiSelectCustomField = exports.SearchDateCustomField = exports.Status = void 0;
const soap_types_1 = require("../../soap-types");
const MAPPINGS_NAME = "com_netsuite_webservices_platform_core_2019_2";
class SearchColumnCustomField extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customLabel = props.customLabel;
        this.internalId = props.internalId;
        this.scriptId = props.scriptId;
    }
}
exports.SearchColumnCustomField = SearchColumnCustomField;
class CustomFieldList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customField = props.customField;
    }
}
exports.CustomFieldList = CustomFieldList;
class SearchEnumMultiSelectField extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
        this.operator = props.operator;
    }
}
exports.SearchEnumMultiSelectField = SearchEnumMultiSelectField;
class BaseRefList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.baseRef = props.baseRef;
    }
}
exports.BaseRefList = BaseRefList;
class DeletedRecordList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.deletedRecord = props.deletedRecord;
    }
}
exports.DeletedRecordList = DeletedRecordList;
class WsRoleList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.wsRole = props.wsRole;
    }
}
exports.WsRoleList = WsRoleList;
class SearchCustomField extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.internalId = props.internalId;
        this.scriptId = props.scriptId;
    }
}
exports.SearchCustomField = SearchCustomField;
class SearchBooleanCustomField extends SearchCustomField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchBooleanCustomField = SearchBooleanCustomField;
class SearchColumnField extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customLabel = props.customLabel;
    }
}
exports.SearchColumnField = SearchColumnField;
class BudgetExchangeRateFilter extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.period = props.period;
        this.fromSubsidiary = props.fromSubsidiary;
        this.toSubsidiary = props.toSubsidiary;
    }
}
exports.BudgetExchangeRateFilter = BudgetExchangeRateFilter;
class GetSelectFilterByFieldValueList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.filterBy = props.filterBy;
    }
}
exports.GetSelectFilterByFieldValueList = GetSelectFilterByFieldValueList;
class GetSavedSearchResult extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.totalRecords = props.totalRecords;
        this.recordRefList = props.recordRefList;
    }
}
exports.GetSavedSearchResult = GetSavedSearchResult;
class PostingTransactionSummaryField extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.period = props.period;
        this.account = props.account;
        this.parentItem = props.parentItem;
        this.item = props.item;
        this.entity = props.entity;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.subsidiary = props.subsidiary;
        this.book = props.book;
    }
}
exports.PostingTransactionSummaryField = PostingTransactionSummaryField;
class SearchColumnLongCustomField extends SearchColumnCustomField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchColumnLongCustomField = SearchColumnLongCustomField;
class DetachReference extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.detachFrom = props.detachFrom;
    }
}
exports.DetachReference = DetachReference;
class DetachBasicReference extends DetachReference {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.detachedRecord = props.detachedRecord;
    }
}
exports.DetachBasicReference = DetachBasicReference;
class SearchDoubleCustomField extends SearchCustomField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
        this.searchValue2 = props.searchValue2;
        this.operator = props.operator;
    }
}
exports.SearchDoubleCustomField = SearchDoubleCustomField;
class BaseRef extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
    }
}
exports.BaseRef = BaseRef;
class RecordRef extends BaseRef {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.internalId = props.internalId;
        this.externalId = props.externalId;
        this.type = props.type;
    }
}
exports.RecordRef = RecordRef;
class CustomizationRef extends RecordRef {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.scriptId = props.scriptId;
    }
}
exports.CustomizationRef = CustomizationRef;
class CustomFieldRef extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.internalId = props.internalId;
        this.scriptId = props.scriptId;
    }
}
exports.CustomFieldRef = CustomFieldRef;
class DateCustomFieldRef extends CustomFieldRef {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.value = props.value;
    }
}
exports.DateCustomFieldRef = DateCustomFieldRef;
class SearchTextNumberField extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
        this.searchValue2 = props.searchValue2;
        this.operator = props.operator;
    }
}
exports.SearchTextNumberField = SearchTextNumberField;
class SearchMultiSelectField extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
        this.operator = props.operator;
    }
}
exports.SearchMultiSelectField = SearchMultiSelectField;
class DimensionList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.dimension = props.dimension;
    }
}
exports.DimensionList = DimensionList;
class StatusDetail extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.code = props.code;
        this.message = props.message;
        this.afterSubmitFailed = props.afterSubmitFailed;
        this.type = props.type;
    }
}
exports.StatusDetail = StatusDetail;
class StringCustomFieldRef extends CustomFieldRef {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.value = props.value;
    }
}
exports.StringCustomFieldRef = StringCustomFieldRef;
class InitializeAuxRef extends BaseRef {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.type = props.type;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
        this.scriptId = props.scriptId;
    }
}
exports.InitializeAuxRef = InitializeAuxRef;
class GetSelectValueResult extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.totalRecords = props.totalRecords;
        this.totalPages = props.totalPages;
        this.baseRefList = props.baseRefList;
    }
}
exports.GetSelectValueResult = GetSelectValueResult;
class SearchRow extends soap_types_1.SoapMappingBase {
}
exports.SearchRow = SearchRow;
class SearchColumnMultiSelectCustomField extends SearchColumnCustomField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchColumnMultiSelectCustomField = SearchColumnMultiSelectCustomField;
class SsoCredentials extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.email = props.email;
        this.password = props.password;
        this.account = props.account;
        this.role = props.role;
        this.authenticationToken = props.authenticationToken;
        this.partnerId = props.partnerId;
    }
}
exports.SsoCredentials = SsoCredentials;
class SearchColumnDateCustomField extends SearchColumnCustomField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchColumnDateCustomField = SearchColumnDateCustomField;
class SearchStringCustomField extends SearchCustomField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
        this.operator = props.operator;
    }
}
exports.SearchStringCustomField = SearchStringCustomField;
class SearchColumnStringField extends SearchColumnField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchColumnStringField = SearchColumnStringField;
class GetAllResult extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.totalRecords = props.totalRecords;
        this.recordList = props.recordList;
    }
}
exports.GetAllResult = GetAllResult;
class CustomTransactionRef extends BaseRef {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.internalId = props.internalId;
        this.externalId = props.externalId;
        this.typeId = props.typeId;
        this.scriptId = props.scriptId;
    }
}
exports.CustomTransactionRef = CustomTransactionRef;
class CurrencyRateList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.currencyRate = props.currencyRate;
    }
}
exports.CurrencyRateList = CurrencyRateList;
class DataCenterUrls extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.restDomain = props.restDomain;
        this.webservicesDomain = props.webservicesDomain;
        this.systemDomain = props.systemDomain;
    }
}
exports.DataCenterUrls = DataCenterUrls;
class SsoPassport extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.authenticationToken = props.authenticationToken;
        this.partnerId = props.partnerId;
        this.partnerAccount = props.partnerAccount;
        this.partnerUserId = props.partnerUserId;
    }
}
exports.SsoPassport = SsoPassport;
class PostingTransactionSummary extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.period = props.period;
        this.account = props.account;
        this.parentItem = props.parentItem;
        this.item = props.item;
        this.entity = props.entity;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.subsidiary = props.subsidiary;
        this.book = props.book;
        this.amount = props.amount;
    }
}
exports.PostingTransactionSummary = PostingTransactionSummary;
class PostingTransactionSummaryFilter extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.period = props.period;
        this.account = props.account;
        this.parentItem = props.parentItem;
        this.item = props.item;
        this.entity = props.entity;
        this.department = props.department;
        this.clazz = props.clazz;
        this.location = props.location;
        this.subsidiary = props.subsidiary;
        this.book = props.book;
    }
}
exports.PostingTransactionSummaryFilter = PostingTransactionSummaryFilter;
class SearchColumnBooleanCustomField extends SearchColumnCustomField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchColumnBooleanCustomField = SearchColumnBooleanCustomField;
class SearchEnumMultiSelectCustomField extends SearchCustomField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
        this.operator = props.operator;
    }
}
exports.SearchEnumMultiSelectCustomField = SearchEnumMultiSelectCustomField;
class SearchResult extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.totalRecords = props.totalRecords;
        this.pageSize = props.pageSize;
        this.totalPages = props.totalPages;
        this.pageIndex = props.pageIndex;
        this.searchId = props.searchId;
        this.recordList = props.recordList;
        this.searchRowList = props.searchRowList;
    }
}
exports.SearchResult = SearchResult;
class GetCurrencyRateResult extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.currencyRateList = props.currencyRateList;
    }
}
exports.GetCurrencyRateResult = GetCurrencyRateResult;
class SelectCustomFieldRef extends CustomFieldRef {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.value = props.value;
    }
}
exports.SelectCustomFieldRef = SelectCustomFieldRef;
class RecordRefList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.recordRef = props.recordRef;
    }
}
exports.RecordRefList = RecordRefList;
class SearchDoubleField extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
        this.searchValue2 = props.searchValue2;
        this.operator = props.operator;
    }
}
exports.SearchDoubleField = SearchDoubleField;
class SearchRowList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchRow = props.searchRow;
    }
}
exports.SearchRowList = SearchRowList;
class AsyncStatusResult extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.jobId = props.jobId;
        this.status = props.status;
        this.percentCompleted = props.percentCompleted;
        this.estRemainingDuration = props.estRemainingDuration;
    }
}
exports.AsyncStatusResult = AsyncStatusResult;
class SearchRowBasic extends SearchRow {
}
exports.SearchRowBasic = SearchRowBasic;
class ChangeEmail extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.currentPassword = props.currentPassword;
        this.newEmail = props.newEmail;
        this.newEmail2 = props.newEmail2;
        this.justThisAccount = props.justThisAccount;
    }
}
exports.ChangeEmail = ChangeEmail;
class SearchRecord extends soap_types_1.SoapMappingBase {
}
exports.SearchRecord = SearchRecord;
class SearchRecordBasic extends SearchRecord {
}
exports.SearchRecordBasic = SearchRecordBasic;
class SearchCustomFieldList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customField = props.customField;
    }
}
exports.SearchCustomFieldList = SearchCustomFieldList;
class DeletionReason extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.deletionReasonCode = props.deletionReasonCode;
        this.deletionReasonMemo = props.deletionReasonMemo;
    }
}
exports.DeletionReason = DeletionReason;
class InitializeRef extends BaseRef {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.type = props.type;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.InitializeRef = InitializeRef;
class AttachReference extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.attachTo = props.attachTo;
    }
}
exports.AttachReference = AttachReference;
class AttachContactReference extends AttachReference {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.contact = props.contact;
        this.contactRole = props.contactRole;
    }
}
exports.AttachContactReference = AttachContactReference;
class SearchColumnBooleanField extends SearchColumnField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchColumnBooleanField = SearchColumnBooleanField;
class Record extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.nullFieldList = props.nullFieldList;
    }
}
exports.Record = Record;
class AttachBasicReference extends AttachReference {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.attachedRecord = props.attachedRecord;
    }
}
exports.AttachBasicReference = AttachBasicReference;
class NullField extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
    }
}
exports.NullField = NullField;
class GetItemAvailabilityResult extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.itemAvailabilityList = props.itemAvailabilityList;
    }
}
exports.GetItemAvailabilityResult = GetItemAvailabilityResult;
class SearchColumnTextNumberField extends SearchColumnField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchColumnTextNumberField = SearchColumnTextNumberField;
class ItemAvailability extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.item = props.item;
        this.lastQtyAvailableChange = props.lastQtyAvailableChange;
        this.locationId = props.locationId;
        this.quantityOnHand = props.quantityOnHand;
        this.onHandValueMli = props.onHandValueMli;
        this.reorderPoint = props.reorderPoint;
        this.preferredStockLevel = props.preferredStockLevel;
        this.quantityOnOrder = props.quantityOnOrder;
        this.quantityCommitted = props.quantityCommitted;
        this.quantityBackOrdered = props.quantityBackOrdered;
        this.quantityAvailable = props.quantityAvailable;
    }
}
exports.ItemAvailability = ItemAvailability;
class CurrencyRateFilter extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.baseCurrency = props.baseCurrency;
        this.fromCurrency = props.fromCurrency;
        this.effectiveDate = props.effectiveDate;
    }
}
exports.CurrencyRateFilter = CurrencyRateFilter;
class RecordList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.record = props.record;
    }
}
exports.RecordList = RecordList;
class GetSelectValueFieldDescription extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.recordType = props.recordType;
        this.customRecordType = props.customRecordType;
        this.customTransactionType = props.customTransactionType;
        this.sublist = props.sublist;
        this.field = props.field;
        this.customForm = props.customForm;
        this.filter = props.filter;
        this.filterByValueList = props.filterByValueList;
    }
}
exports.GetSelectValueFieldDescription = GetSelectValueFieldDescription;
class BooleanCustomFieldRef extends CustomFieldRef {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.value = props.value;
    }
}
exports.BooleanCustomFieldRef = BooleanCustomFieldRef;
class SearchColumnSelectField extends SearchColumnField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchColumnSelectField = SearchColumnSelectField;
class DeletedRecord extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.deletedDate = props.deletedDate;
        this.record = props.record;
    }
}
exports.DeletedRecord = DeletedRecord;
class WsRole extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.role = props.role;
        this.isDefault = props.isDefault;
        this.isInactive = props.isInactive;
        this.isLoggedInRole = props.isLoggedInRole;
    }
}
exports.WsRole = WsRole;
class GetDeletedResult extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.totalRecords = props.totalRecords;
        this.pageSize = props.pageSize;
        this.totalPages = props.totalPages;
        this.pageIndex = props.pageIndex;
        this.deletedRecordList = props.deletedRecordList;
    }
}
exports.GetDeletedResult = GetDeletedResult;
class MultiSelectCustomFieldRef extends CustomFieldRef {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.value = props.value;
    }
}
exports.MultiSelectCustomFieldRef = MultiSelectCustomFieldRef;
class SearchColumnLongField extends SearchColumnField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchColumnLongField = SearchColumnLongField;
class GetSelectFilterByFieldValue extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.sublist = props.sublist;
        this.field = props.field;
        this.internalId = props.internalId;
    }
}
exports.GetSelectFilterByFieldValue = GetSelectFilterByFieldValue;
class GetDeletedFilter extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.deletedDate = props.deletedDate;
        this.type = props.type;
        this.scriptId = props.scriptId;
    }
}
exports.GetDeletedFilter = GetDeletedFilter;
class ItemAvailabilityList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.itemAvailability = props.itemAvailability;
    }
}
exports.ItemAvailabilityList = ItemAvailabilityList;
class SearchDateField extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.predefinedSearchValue = props.predefinedSearchValue;
        this.searchValue = props.searchValue;
        this.searchValue2 = props.searchValue2;
        this.operator = props.operator;
    }
}
exports.SearchDateField = SearchDateField;
class SearchColumnSelectCustomField extends SearchColumnCustomField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchColumnSelectCustomField = SearchColumnSelectCustomField;
class GetDataCenterUrlsResult extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.dataCenterUrls = props.dataCenterUrls;
    }
}
exports.GetDataCenterUrlsResult = GetDataCenterUrlsResult;
class PostingTransactionSummaryList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.postingTransactionSummary = props.postingTransactionSummary;
    }
}
exports.PostingTransactionSummaryList = PostingTransactionSummaryList;
class DimensionRef extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.scriptId = props.scriptId;
    }
}
exports.DimensionRef = DimensionRef;
class SearchLongField extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
        this.searchValue2 = props.searchValue2;
        this.operator = props.operator;
    }
}
exports.SearchLongField = SearchLongField;
class CustomizationRefList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customizationRef = props.customizationRef;
    }
}
exports.CustomizationRefList = CustomizationRefList;
class GetSavedSearchRecord extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchType = props.searchType;
    }
}
exports.GetSavedSearchRecord = GetSavedSearchRecord;
class CurrencyRate extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.baseCurrency = props.baseCurrency;
        this.fromCurrency = props.fromCurrency;
        this.exchangeRate = props.exchangeRate;
        this.effectiveDate = props.effectiveDate;
    }
}
exports.CurrencyRate = CurrencyRate;
class Duration extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.timeSpan = props.timeSpan;
        this.unit = props.unit;
    }
}
exports.Duration = Duration;
class CustomizationType extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.getCustomizationType = props.getCustomizationType;
    }
}
exports.CustomizationType = CustomizationType;
class SearchColumnDoubleCustomField extends SearchColumnCustomField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchColumnDoubleCustomField = SearchColumnDoubleCustomField;
class ListOrRecordRef extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
        this.typeId = props.typeId;
    }
}
exports.ListOrRecordRef = ListOrRecordRef;
class LongCustomFieldRef extends CustomFieldRef {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.value = props.value;
    }
}
exports.LongCustomFieldRef = LongCustomFieldRef;
class TokenPassport extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.account = props.account;
        this.consumerKey = props.consumerKey;
        this.token = props.token;
        this.nonce = props.nonce;
        this.timestamp = props.timestamp;
        this.signature = props.signature;
    }
}
exports.TokenPassport = TokenPassport;
class DoubleCustomFieldRef extends CustomFieldRef {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.value = props.value;
    }
}
exports.DoubleCustomFieldRef = DoubleCustomFieldRef;
class GetCustomizationIdResult extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.totalRecords = props.totalRecords;
        this.customizationRefList = props.customizationRefList;
    }
}
exports.GetCustomizationIdResult = GetCustomizationIdResult;
class GetSelectValueFilter extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.filterValue = props.filterValue;
        this.operator = props.operator;
    }
}
exports.GetSelectValueFilter = GetSelectValueFilter;
class Passport extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.email = props.email;
        this.password = props.password;
        this.account = props.account;
        this.role = props.role;
    }
}
exports.Passport = Passport;
class BudgetExchangeRate extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.period = props.period;
        this.fromSubsidiary = props.fromSubsidiary;
        this.toSubsidiary = props.toSubsidiary;
        this.currentRate = props.currentRate;
        this.averageRate = props.averageRate;
        this.historicalRate = props.historicalRate;
    }
}
exports.BudgetExchangeRate = BudgetExchangeRate;
class Status extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.statusDetail = props.statusDetail;
        this.isSuccess = props.isSuccess;
    }
}
exports.Status = Status;
class SearchDateCustomField extends SearchCustomField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.predefinedSearchValue = props.predefinedSearchValue;
        this.searchValue = props.searchValue;
        this.searchValue2 = props.searchValue2;
        this.operator = props.operator;
    }
}
exports.SearchDateCustomField = SearchDateCustomField;
class SearchMultiSelectCustomField extends SearchCustomField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
        this.operator = props.operator;
    }
}
exports.SearchMultiSelectCustomField = SearchMultiSelectCustomField;
class StringDimensionRef extends DimensionRef {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.value = props.value;
    }
}
exports.StringDimensionRef = StringDimensionRef;
class GetPostingTransactionSummaryResult extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.totalRecords = props.totalRecords;
        this.pageSize = props.pageSize;
        this.totalPages = props.totalPages;
        this.pageIndex = props.pageIndex;
        this.operationId = props.operationId;
        this.postingTransactionSummaryList = props.postingTransactionSummaryList;
    }
}
exports.GetPostingTransactionSummaryResult = GetPostingTransactionSummaryResult;
class SelectDimensionRef extends DimensionRef {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.value = props.value;
    }
}
exports.SelectDimensionRef = SelectDimensionRef;
class SearchColumnStringCustomField extends SearchColumnCustomField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchColumnStringCustomField = SearchColumnStringCustomField;
class GetAllRecord extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.recordType = props.recordType;
    }
}
exports.GetAllRecord = GetAllRecord;
class SearchStringField extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
        this.operator = props.operator;
    }
}
exports.SearchStringField = SearchStringField;
class InitializeRefList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.initializeRef = props.initializeRef;
    }
}
exports.InitializeRefList = InitializeRefList;
class ChangePassword extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.currentPassword = props.currentPassword;
        this.newPassword = props.newPassword;
        this.newPassword2 = props.newPassword2;
    }
}
exports.ChangePassword = ChangePassword;
class SearchColumnEnumMultiSelectCustomField extends SearchColumnCustomField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchColumnEnumMultiSelectCustomField = SearchColumnEnumMultiSelectCustomField;
class UpdateInviteeStatusReference extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.eventId = props.eventId;
        this.responseCode = props.responseCode;
    }
}
exports.UpdateInviteeStatusReference = UpdateInviteeStatusReference;
class GetServerTimeResult extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.serverTime = props.serverTime;
    }
}
exports.GetServerTimeResult = GetServerTimeResult;
class CustomRecordRef extends BaseRef {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.internalId = props.internalId;
        this.externalId = props.externalId;
        this.typeId = props.typeId;
        this.scriptId = props.scriptId;
    }
}
exports.CustomRecordRef = CustomRecordRef;
class BudgetExchangeRateList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.budgetExchangeRate = props.budgetExchangeRate;
    }
}
exports.BudgetExchangeRateList = BudgetExchangeRateList;
class InitializeRecord extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.type = props.type;
        this.reference = props.reference;
        this.auxReference = props.auxReference;
        this.referenceList = props.referenceList;
    }
}
exports.InitializeRecord = InitializeRecord;
class SearchColumnEnumSelectField extends SearchColumnField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchColumnEnumSelectField = SearchColumnEnumSelectField;
class SearchColumnDoubleField extends SearchColumnField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchColumnDoubleField = SearchColumnDoubleField;
class GetBudgetExchangeRateResult extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.status = props.status;
        this.budgetExchangeRateList = props.budgetExchangeRateList;
    }
}
exports.GetBudgetExchangeRateResult = GetBudgetExchangeRateResult;
class SearchLongCustomField extends SearchCustomField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
        this.searchValue2 = props.searchValue2;
        this.operator = props.operator;
    }
}
exports.SearchLongCustomField = SearchLongCustomField;
class TokenPassportSignature extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.value = props.value;
        this.algorithm = props.algorithm;
    }
}
exports.TokenPassportSignature = TokenPassportSignature;
class ItemAvailabilityFilter extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.item = props.item;
        this.lastQtyAvailableChange = props.lastQtyAvailableChange;
    }
}
exports.ItemAvailabilityFilter = ItemAvailabilityFilter;
class SearchColumnDateField extends SearchColumnField {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.searchValue = props.searchValue;
    }
}
exports.SearchColumnDateField = SearchColumnDateField;
class SearchColumnCustomFieldList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.customField = props.customField;
    }
}
exports.SearchColumnCustomFieldList = SearchColumnCustomFieldList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uZXRzdWl0ZV93ZWJzZXJ2aWNlcy8yMDE5XzIvcGxhdGZvcm1fY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLGlEQUEwRTtBQUMxRSxNQUFNLGFBQWEsR0FBRywrQ0FBK0MsQ0FBQztBQU90RSxNQUFhLHVCQUF3QixTQUFRLDRCQUFlO0lBSTFELFlBQVksS0FBbUM7UUFDN0MsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQVZELDBEQVVDO0FBTUQsTUFBYSxlQUFnQixTQUFRLDRCQUFlO0lBRWxELFlBQVksS0FBMkI7UUFDckMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7QUFORCwwQ0FNQztBQU9ELE1BQWEsMEJBQTJCLFNBQVEsNEJBQWU7SUFHN0QsWUFBWSxLQUFzQztRQUNoRCxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFSRCxnRUFRQztBQU1ELE1BQWEsV0FBWSxTQUFRLDRCQUFlO0lBRTlDLFlBQVksS0FBdUI7UUFDakMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUFORCxrQ0FNQztBQU1ELE1BQWEsaUJBQWtCLFNBQVEsNEJBQWU7SUFFcEQsWUFBWSxLQUE2QjtRQUN2QyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQU5ELDhDQU1DO0FBTUQsTUFBYSxVQUFXLFNBQVEsNEJBQWU7SUFFN0MsWUFBWSxLQUFzQjtRQUNoQyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQU5ELGdDQU1DO0FBT0QsTUFBYSxpQkFBa0IsU0FBUSw0QkFBZTtJQUdwRCxZQUFZLEtBQTZCO1FBQ3ZDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQVJELDhDQVFDO0FBTUQsTUFBYSx3QkFBeUIsU0FBUSxpQkFBaUI7SUFFN0QsWUFBWSxLQUFvQztRQUM5QyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQU5ELDREQU1DO0FBTUQsTUFBYSxpQkFBa0IsU0FBUSw0QkFBZTtJQUVwRCxZQUFZLEtBQTZCO1FBQ3ZDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBTkQsOENBTUM7QUFRRCxNQUFhLHdCQUF5QixTQUFRLDRCQUFlO0lBSTNELFlBQVksS0FBb0M7UUFDOUMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO0lBQ3pDLENBQUM7Q0FDRjtBQVZELDREQVVDO0FBTUQsTUFBYSwrQkFBZ0MsU0FBUSw0QkFBZTtJQUVsRSxZQUFZLEtBQTJDO1FBQ3JELEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztDQUNGO0FBTkQsMEVBTUM7QUFRRCxNQUFhLG9CQUFxQixTQUFRLDRCQUFlO0lBSXZELFlBQVksS0FBZ0M7UUFDMUMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQVZELG9EQVVDO0FBZUQsTUFBYSw4QkFBK0IsU0FBUSw0QkFBZTtJQVdqRSxZQUFZLEtBQTBDO1FBQ3BELEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBeEJELHdFQXdCQztBQU1ELE1BQWEsMkJBQTRCLFNBQVEsdUJBQXVCO0lBRXRFLFlBQVksS0FBdUM7UUFDakQsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7QUFORCxrRUFNQztBQU1ELE1BQWEsZUFBZ0IsU0FBUSw0QkFBZTtJQUVsRCxZQUFZLEtBQTJCO1FBQ3JDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDckMsQ0FBQztDQUNGO0FBTkQsMENBTUM7QUFNRCxNQUFhLG9CQUFxQixTQUFRLGVBQWU7SUFFdkQsWUFBWSxLQUFnQztRQUMxQyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUM7Q0FDRjtBQU5ELG9EQU1DO0FBUUQsTUFBYSx1QkFBd0IsU0FBUSxpQkFBaUI7SUFJNUQsWUFBWSxLQUFtQztRQUM3QyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztDQUNGO0FBVkQsMERBVUM7QUFNRCxNQUFhLE9BQVEsU0FBUSw0QkFBZTtJQUUxQyxZQUFZLEtBQW1CO1FBQzdCLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBTkQsMEJBTUM7QUFRRCxNQUFhLFNBQVUsU0FBUSxPQUFPO0lBSXBDLFlBQVksS0FBcUI7UUFDL0IsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQVZELDhCQVVDO0FBTUQsTUFBYSxnQkFBaUIsU0FBUSxTQUFTO0lBRTdDLFlBQVksS0FBNEI7UUFDdEMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFORCw0Q0FNQztBQU9ELE1BQWEsY0FBZSxTQUFRLDRCQUFlO0lBR2pELFlBQVksS0FBMEI7UUFDcEMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztDQUNGO0FBUkQsd0NBUUM7QUFNRCxNQUFhLGtCQUFtQixTQUFRLGNBQWM7SUFFcEQsWUFBWSxLQUE4QjtRQUN4QyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQU5ELGdEQU1DO0FBUUQsTUFBYSxxQkFBc0IsU0FBUSw0QkFBZTtJQUl4RCxZQUFZLEtBQWlDO1FBQzNDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFWRCxzREFVQztBQU9ELE1BQWEsc0JBQXVCLFNBQVEsNEJBQWU7SUFHekQsWUFBWSxLQUFrQztRQUM1QyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFSRCx3REFRQztBQU1ELE1BQWEsYUFBYyxTQUFRLDRCQUFlO0lBRWhELFlBQVksS0FBeUI7UUFDbkMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7QUFORCxzQ0FNQztBQVNELE1BQWEsWUFBYSxTQUFRLDRCQUFlO0lBSy9DLFlBQVksS0FBd0I7UUFDbEMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBWkQsb0NBWUM7QUFNRCxNQUFhLG9CQUFxQixTQUFRLGNBQWM7SUFFdEQsWUFBWSxLQUFnQztRQUMxQyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQU5ELG9EQU1DO0FBU0QsTUFBYSxnQkFBaUIsU0FBUSxPQUFPO0lBSzNDLFlBQVksS0FBNEI7UUFDdEMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFaRCw0Q0FZQztBQVNELE1BQWEsb0JBQXFCLFNBQVEsNEJBQWU7SUFLdkQsWUFBWSxLQUFnQztRQUMxQyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQVpELG9EQVlDO0FBRUQsTUFBYSxTQUFVLFNBQVEsNEJBQWU7Q0FBRztBQUFqRCw4QkFBaUQ7QUFNakQsTUFBYSxrQ0FBbUMsU0FBUSx1QkFBdUI7SUFFN0UsWUFBWSxLQUE4QztRQUN4RCxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQU5ELGdGQU1DO0FBV0QsTUFBYSxjQUFlLFNBQVEsNEJBQWU7SUFPakQsWUFBWSxLQUEwQjtRQUNwQyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsbUJBQW1CLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7Q0FDRjtBQWhCRCx3Q0FnQkM7QUFNRCxNQUFhLDJCQUE0QixTQUFRLHVCQUF1QjtJQUV0RSxZQUFZLEtBQXVDO1FBQ2pELEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBTkQsa0VBTUM7QUFPRCxNQUFhLHVCQUF3QixTQUFRLGlCQUFpQjtJQUc1RCxZQUFZLEtBQW1DO1FBQzdDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQVJELDBEQVFDO0FBTUQsTUFBYSx1QkFBd0IsU0FBUSxpQkFBaUI7SUFFNUQsWUFBWSxLQUFtQztRQUM3QyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQU5ELDBEQU1DO0FBUUQsTUFBYSxZQUFhLFNBQVEsNEJBQWU7SUFJL0MsWUFBWSxLQUF3QjtRQUNsQyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDckMsQ0FBQztDQUNGO0FBVkQsb0NBVUM7QUFTRCxNQUFhLG9CQUFxQixTQUFRLE9BQU87SUFLL0MsWUFBWSxLQUFnQztRQUMxQyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQVpELG9EQVlDO0FBTUQsTUFBYSxnQkFBaUIsU0FBUSw0QkFBZTtJQUVuRCxZQUFZLEtBQTRCO1FBQ3RDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDekMsQ0FBQztDQUNGO0FBTkQsNENBTUM7QUFRRCxNQUFhLGNBQWUsU0FBUSw0QkFBZTtJQUlqRCxZQUFZLEtBQTBCO1FBQ3BDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDekMsQ0FBQztDQUNGO0FBVkQsd0NBVUM7QUFTRCxNQUFhLFdBQVksU0FBUSw0QkFBZTtJQUs5QyxZQUFZLEtBQXVCO1FBQ2pDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQVpELGtDQVlDO0FBZ0JELE1BQWEseUJBQTBCLFNBQVEsNEJBQWU7SUFZNUQsWUFBWSxLQUFxQztRQUMvQyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUExQkQsOERBMEJDO0FBZUQsTUFBYSwrQkFBZ0MsU0FBUSw0QkFBZTtJQVdsRSxZQUFZLEtBQTJDO1FBQ3JELEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBeEJELDBFQXdCQztBQU1ELE1BQWEsOEJBQStCLFNBQVEsdUJBQXVCO0lBRXpFLFlBQVksS0FBMEM7UUFDcEQsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7QUFORCx3RUFNQztBQU9ELE1BQWEsZ0NBQWlDLFNBQVEsaUJBQWlCO0lBR3JFLFlBQVksS0FBNEM7UUFDdEQsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztDQUNGO0FBUkQsNEVBUUM7QUFhRCxNQUFhLFlBQWEsU0FBUSw0QkFBZTtJQVMvQyxZQUFZLEtBQXdCO1FBQ2xDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQXBCRCxvQ0FvQkM7QUFPRCxNQUFhLHFCQUFzQixTQUFRLDRCQUFlO0lBR3hELFlBQVksS0FBaUM7UUFDM0MsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO0lBQ2pELENBQUM7Q0FDRjtBQVJELHNEQVFDO0FBTUQsTUFBYSxvQkFBcUIsU0FBUSxjQUFjO0lBRXRELFlBQVksS0FBZ0M7UUFDMUMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFORCxvREFNQztBQU1ELE1BQWEsYUFBYyxTQUFRLDRCQUFlO0lBRWhELFlBQVksS0FBeUI7UUFDbkMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7QUFORCxzQ0FNQztBQVFELE1BQWEsaUJBQWtCLFNBQVEsNEJBQWU7SUFJcEQsWUFBWSxLQUE2QjtRQUN2QyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztDQUNGO0FBVkQsOENBVUM7QUFNRCxNQUFhLGFBQWMsU0FBUSw0QkFBZTtJQUVoRCxZQUFZLEtBQXlCO1FBQ25DLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7SUFDbkMsQ0FBQztDQUNGO0FBTkQsc0NBTUM7QUFTRCxNQUFhLGlCQUFrQixTQUFRLDRCQUFlO0lBS3BELFlBQVksS0FBNkI7UUFDdkMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDO0lBQ3pELENBQUM7Q0FDRjtBQVpELDhDQVlDO0FBRUQsTUFBYSxjQUFlLFNBQVEsU0FBUztDQUFHO0FBQWhELHdDQUFnRDtBQVNoRCxNQUFhLFdBQVksU0FBUSw0QkFBZTtJQUs5QyxZQUFZLEtBQXVCO1FBQ2pDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7SUFDL0MsQ0FBQztDQUNGO0FBWkQsa0NBWUM7QUFFRCxNQUFhLFlBQWEsU0FBUSw0QkFBZTtDQUFHO0FBQXBELG9DQUFvRDtBQUVwRCxNQUFhLGlCQUFrQixTQUFRLFlBQVk7Q0FBRztBQUF0RCw4Q0FBc0Q7QUFNdEQsTUFBYSxxQkFBc0IsU0FBUSw0QkFBZTtJQUV4RCxZQUFZLEtBQWlDO1FBQzNDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBTkQsc0RBTUM7QUFPRCxNQUFhLGNBQWUsU0FBUSw0QkFBZTtJQUdqRCxZQUFZLEtBQTBCO1FBQ3BDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1FBQ25ELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUM7SUFDckQsQ0FBQztDQUNGO0FBUkQsd0NBUUM7QUFRRCxNQUFhLGFBQWMsU0FBUSxPQUFPO0lBSXhDLFlBQVksS0FBeUI7UUFDbkMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQ3JDLENBQUM7Q0FDRjtBQVZELHNDQVVDO0FBTUQsTUFBYSxlQUFnQixTQUFRLDRCQUFlO0lBRWxELFlBQVksS0FBMkI7UUFDckMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFORCwwQ0FNQztBQU9ELE1BQWEsc0JBQXVCLFNBQVEsZUFBZTtJQUd6RCxZQUFZLEtBQWtDO1FBQzVDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQVJELHdEQVFDO0FBTUQsTUFBYSx3QkFBeUIsU0FBUSxpQkFBaUI7SUFFN0QsWUFBWSxLQUFvQztRQUM5QyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQU5ELDREQU1DO0FBTUQsTUFBYSxNQUFPLFNBQVEsNEJBQWU7SUFFekMsWUFBWSxLQUFrQjtRQUM1QixLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQU5ELHdCQU1DO0FBTUQsTUFBYSxvQkFBcUIsU0FBUSxlQUFlO0lBRXZELFlBQVksS0FBZ0M7UUFDMUMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7QUFORCxvREFNQztBQVFELE1BQWEsU0FBVSxTQUFRLDRCQUFlO0lBRTVDLFlBQVksS0FBcUI7UUFDL0IsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDO0NBQ0Y7QUFORCw4QkFNQztBQU9ELE1BQWEseUJBQTBCLFNBQVEsNEJBQWU7SUFHNUQsWUFBWSxLQUFxQztRQUMvQyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7SUFDekQsQ0FBQztDQUNGO0FBUkQsOERBUUM7QUFNRCxNQUFhLDJCQUE0QixTQUFRLGlCQUFpQjtJQUVoRSxZQUFZLEtBQXVDO1FBQ2pELEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBTkQsa0VBTUM7QUFnQkQsTUFBYSxnQkFBaUIsU0FBUSw0QkFBZTtJQVluRCxZQUFZLEtBQTRCO1FBQ3RDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7UUFDN0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztRQUNqRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7SUFDbkQsQ0FBQztDQUNGO0FBMUJELDRDQTBCQztBQVFELE1BQWEsa0JBQW1CLFNBQVEsNEJBQWU7SUFJckQsWUFBWSxLQUE4QjtRQUN4QyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7SUFDM0MsQ0FBQztDQUNGO0FBVkQsZ0RBVUM7QUFNRCxNQUFhLFVBQVcsU0FBUSw0QkFBZTtJQUU3QyxZQUFZLEtBQXNCO1FBQ2hDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBTkQsZ0NBTUM7QUFhRCxNQUFhLDhCQUErQixTQUFRLDRCQUFlO0lBU2pFLFlBQVksS0FBMEM7UUFDcEQsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1FBQy9DLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7SUFDbkQsQ0FBQztDQUNGO0FBcEJELHdFQW9CQztBQU1ELE1BQWEscUJBQXNCLFNBQVEsY0FBYztJQUV2RCxZQUFZLEtBQWlDO1FBQzNDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztDQUNGO0FBTkQsc0RBTUM7QUFNRCxNQUFhLHVCQUF3QixTQUFRLGlCQUFpQjtJQUU1RCxZQUFZLEtBQW1DO1FBQzdDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBTkQsMERBTUM7QUFPRCxNQUFhLGFBQWMsU0FBUSw0QkFBZTtJQUdoRCxZQUFZLEtBQXlCO1FBQ25DLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQVJELHNDQVFDO0FBU0QsTUFBYSxNQUFPLFNBQVEsNEJBQWU7SUFLekMsWUFBWSxLQUFrQjtRQUM1QixLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUM7Q0FDRjtBQVpELHdCQVlDO0FBV0QsTUFBYSxnQkFBaUIsU0FBUSw0QkFBZTtJQU9uRCxZQUFZLEtBQTRCO1FBQ3RDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7SUFDbkQsQ0FBQztDQUNGO0FBaEJELDRDQWdCQztBQU1ELE1BQWEseUJBQTBCLFNBQVEsY0FBYztJQUUzRCxZQUFZLEtBQXFDO1FBQy9DLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztDQUNGO0FBTkQsOERBTUM7QUFNRCxNQUFhLHFCQUFzQixTQUFRLGlCQUFpQjtJQUUxRCxZQUFZLEtBQWlDO1FBQzNDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBTkQsc0RBTUM7QUFRRCxNQUFhLDJCQUE0QixTQUFRLDRCQUFlO0lBSTlELFlBQVksS0FBdUM7UUFDakQsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQ3JDLENBQUM7Q0FDRjtBQVZELGtFQVVDO0FBUUQsTUFBYSxnQkFBaUIsU0FBUSw0QkFBZTtJQUluRCxZQUFZLEtBQTRCO1FBQ3RDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFWRCw0Q0FVQztBQU1ELE1BQWEsb0JBQXFCLFNBQVEsNEJBQWU7SUFFdkQsWUFBWSxLQUFnQztRQUMxQyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqRCxDQUFDO0NBQ0Y7QUFORCxvREFNQztBQVNELE1BQWEsZUFBZ0IsU0FBUSw0QkFBZTtJQUtsRCxZQUFZLEtBQTJCO1FBQ3JDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQVpELDBDQVlDO0FBTUQsTUFBYSw2QkFBOEIsU0FBUSx1QkFBdUI7SUFFeEUsWUFBWSxLQUF5QztRQUNuRCxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQU5ELHNFQU1DO0FBT0QsTUFBYSx1QkFBd0IsU0FBUSw0QkFBZTtJQUcxRCxZQUFZLEtBQW1DO1FBQzdDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUM7Q0FDRjtBQVJELDBEQVFDO0FBTUQsTUFBYSw2QkFBOEIsU0FBUSw0QkFBZTtJQUVoRSxZQUFZLEtBQXlDO1FBQ25ELEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDLHlCQUF5QixDQUFDO0lBQ25FLENBQUM7Q0FDRjtBQU5ELHNFQU1DO0FBTUQsTUFBYSxZQUFhLFNBQVEsNEJBQWU7SUFFL0MsWUFBWSxLQUF3QjtRQUNsQyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQU5ELG9DQU1DO0FBUUQsTUFBYSxlQUFnQixTQUFRLDRCQUFlO0lBSWxELFlBQVksS0FBMkI7UUFDckMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQVZELDBDQVVDO0FBTUQsTUFBYSxvQkFBcUIsU0FBUSw0QkFBZTtJQUV2RCxZQUFZLEtBQWdDO1FBQzFDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO0lBQ2pELENBQUM7Q0FDRjtBQU5ELG9EQU1DO0FBTUQsTUFBYSxvQkFBcUIsU0FBUSw0QkFBZTtJQUV2RCxZQUFZLEtBQWdDO1FBQzFDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDckMsQ0FBQztDQUNGO0FBTkQsb0RBTUM7QUFTRCxNQUFhLFlBQWEsU0FBUSw0QkFBZTtJQUsvQyxZQUFZLEtBQXdCO1FBQ2xDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7SUFDM0MsQ0FBQztDQUNGO0FBWkQsb0NBWUM7QUFPRCxNQUFhLFFBQVMsU0FBUSw0QkFBZTtJQUczQyxZQUFZLEtBQW9CO1FBQzlCLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQVJELDRCQVFDO0FBTUQsTUFBYSxpQkFBa0IsU0FBUSw0QkFBZTtJQUVwRCxZQUFZLEtBQTZCO1FBQ3ZDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDO0lBQ3pELENBQUM7Q0FDRjtBQU5ELDhDQU1DO0FBTUQsTUFBYSw2QkFBOEIsU0FBUSx1QkFBdUI7SUFFeEUsWUFBWSxLQUF5QztRQUNuRCxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQU5ELHNFQU1DO0FBU0QsTUFBYSxlQUFnQixTQUFRLDRCQUFlO0lBS2xELFlBQVksS0FBMkI7UUFDckMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUFaRCwwQ0FZQztBQU1ELE1BQWEsa0JBQW1CLFNBQVEsY0FBYztJQUVwRCxZQUFZLEtBQThCO1FBQ3hDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztDQUNGO0FBTkQsZ0RBTUM7QUFXRCxNQUFhLGFBQWMsU0FBUSw0QkFBZTtJQU9oRCxZQUFZLEtBQXlCO1FBQ25DLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7QUFoQkQsc0NBZ0JDO0FBTUQsTUFBYSxvQkFBcUIsU0FBUSxjQUFjO0lBRXRELFlBQVksS0FBZ0M7UUFDMUMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFORCxvREFNQztBQVFELE1BQWEsd0JBQXlCLFNBQVEsNEJBQWU7SUFJM0QsWUFBWSxLQUFvQztRQUM5QyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDO0lBQ3pELENBQUM7Q0FDRjtBQVZELDREQVVDO0FBT0QsTUFBYSxvQkFBcUIsU0FBUSw0QkFBZTtJQUd2RCxZQUFZLEtBQWdDO1FBQzFDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQVJELG9EQVFDO0FBU0QsTUFBYSxRQUFTLFNBQVEsNEJBQWU7SUFLM0MsWUFBWSxLQUFvQjtRQUM5QixLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQVpELDRCQVlDO0FBV0QsTUFBYSxrQkFBbUIsU0FBUSw0QkFBZTtJQU9yRCxZQUFZLEtBQThCO1FBQ3hDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7QUFoQkQsZ0RBZ0JDO0FBT0QsTUFBYSxNQUFPLFNBQVEsNEJBQWU7SUFHekMsWUFBWSxLQUFrQjtRQUM1QixLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7QUFSRCx3QkFRQztBQVNELE1BQWEscUJBQXNCLFNBQVEsaUJBQWlCO0lBSzFELFlBQVksS0FBaUM7UUFDM0MsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztDQUNGO0FBWkQsc0RBWUM7QUFPRCxNQUFhLDRCQUE2QixTQUFRLGlCQUFpQjtJQUdqRSxZQUFZLEtBQXdDO1FBQ2xELEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQVJELG9FQVFDO0FBTUQsTUFBYSxrQkFBbUIsU0FBUSxZQUFZO0lBRWxELFlBQVksS0FBOEI7UUFDeEMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFORCxnREFNQztBQVlELE1BQWEsa0NBQW1DLFNBQVEsNEJBQWU7SUFRckUsWUFBWSxLQUE4QztRQUN4RCxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLDZCQUE2QixHQUFHLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQztJQUMzRSxDQUFDO0NBQ0Y7QUFsQkQsZ0ZBa0JDO0FBTUQsTUFBYSxrQkFBbUIsU0FBUSxZQUFZO0lBRWxELFlBQVksS0FBOEI7UUFDeEMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFORCxnREFNQztBQU1ELE1BQWEsNkJBQThCLFNBQVEsdUJBQXVCO0lBRXhFLFlBQVksS0FBeUM7UUFDbkQsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7QUFORCxzRUFNQztBQU1ELE1BQWEsWUFBYSxTQUFRLDRCQUFlO0lBRS9DLFlBQVksS0FBd0I7UUFDbEMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0NBQ0Y7QUFORCxvQ0FNQztBQU9ELE1BQWEsaUJBQWtCLFNBQVEsNEJBQWU7SUFHcEQsWUFBWSxLQUE2QjtRQUN2QyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFSRCw4Q0FRQztBQU1ELE1BQWEsaUJBQWtCLFNBQVEsNEJBQWU7SUFFcEQsWUFBWSxLQUE2QjtRQUN2QyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQU5ELDhDQU1DO0FBUUQsTUFBYSxjQUFlLFNBQVEsNEJBQWU7SUFJakQsWUFBWSxLQUEwQjtRQUNwQyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDekMsQ0FBQztDQUNGO0FBVkQsd0NBVUM7QUFNRCxNQUFhLHNDQUF1QyxTQUFRLHVCQUF1QjtJQUVqRixZQUFZLEtBQWtEO1FBQzVELEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBTkQsd0ZBTUM7QUFPRCxNQUFhLDRCQUE2QixTQUFRLDRCQUFlO0lBRy9ELFlBQVksS0FBd0M7UUFDbEQsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDekMsQ0FBQztDQUNGO0FBUkQsb0VBUUM7QUFPRCxNQUFhLG1CQUFvQixTQUFRLDRCQUFlO0lBR3RELFlBQVksS0FBK0I7UUFDekMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDckMsQ0FBQztDQUNGO0FBUkQsa0RBUUM7QUFTRCxNQUFhLGVBQWdCLFNBQVEsT0FBTztJQUsxQyxZQUFZLEtBQTJCO1FBQ3JDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztDQUNGO0FBWkQsMENBWUM7QUFNRCxNQUFhLHNCQUF1QixTQUFRLDRCQUFlO0lBRXpELFlBQVksS0FBa0M7UUFDNUMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUM7SUFDckQsQ0FBQztDQUNGO0FBTkQsd0RBTUM7QUFTRCxNQUFhLGdCQUFpQixTQUFRLDRCQUFlO0lBS25ELFlBQVksS0FBNEI7UUFDdEMsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUFaRCw0Q0FZQztBQU1ELE1BQWEsMkJBQTRCLFNBQVEsaUJBQWlCO0lBRWhFLFlBQVksS0FBdUM7UUFDakQsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7QUFORCxrRUFNQztBQU1ELE1BQWEsdUJBQXdCLFNBQVEsaUJBQWlCO0lBRTVELFlBQVksS0FBbUM7UUFDN0MsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7QUFORCwwREFNQztBQU9ELE1BQWEsMkJBQTRCLFNBQVEsNEJBQWU7SUFHOUQsWUFBWSxLQUF1QztRQUNqRCxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUMsc0JBQXNCLENBQUM7SUFDN0QsQ0FBQztDQUNGO0FBUkQsa0VBUUM7QUFRRCxNQUFhLHFCQUFzQixTQUFRLGlCQUFpQjtJQUkxRCxZQUFZLEtBQWlDO1FBQzNDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFWRCxzREFVQztBQU9ELE1BQWEsc0JBQXVCLFNBQVEsNEJBQWU7SUFHekQsWUFBWSxLQUFrQztRQUM1QyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7QUFSRCx3REFRQztBQU9ELE1BQWEsc0JBQXVCLFNBQVEsNEJBQWU7SUFHekQsWUFBWSxLQUFrQztRQUM1QyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUMsc0JBQXNCLENBQUM7SUFDN0QsQ0FBQztDQUNGO0FBUkQsd0RBUUM7QUFNRCxNQUFhLHFCQUFzQixTQUFRLGlCQUFpQjtJQUUxRCxZQUFZLEtBQWlDO1FBQzNDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBTkQsc0RBTUM7QUFNRCxNQUFhLDJCQUE0QixTQUFRLDRCQUFlO0lBRTlELFlBQVksS0FBdUM7UUFDakQsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7QUFORCxrRUFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFBsYXRmb3JtRmF1bHRzVHlwZXMgZnJvbSBcIi4vcGxhdGZvcm1fZmF1bHRzX3R5cGVzXCI7XG5pbXBvcnQgKiBhcyBQbGF0Zm9ybUNvcmVUeXBlcyBmcm9tIFwiLi9wbGF0Zm9ybV9jb3JlX3R5cGVzXCI7XG5pbXBvcnQgeyBTb2FwTWFwcGluZ0Jhc2UsIHByb3BzV2l0aE1hcHBpbmdzTmFtZSB9IGZyb20gXCIuLi8uLi9zb2FwLXR5cGVzXCI7XG5jb25zdCBNQVBQSU5HU19OQU1FID0gXCJjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzJcIjtcbmV4cG9ydCB0eXBlIFNlYXJjaENvbHVtbkN1c3RvbUZpZWxkUHJvcHMgPSB7XG4gIGN1c3RvbUxhYmVsPzogc3RyaW5nO1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBzY3JpcHRJZD86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hDb2x1bW5DdXN0b21GaWVsZCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGN1c3RvbUxhYmVsPzogc3RyaW5nO1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBzY3JpcHRJZD86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlYXJjaENvbHVtbkN1c3RvbUZpZWxkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmN1c3RvbUxhYmVsID0gcHJvcHMuY3VzdG9tTGFiZWw7XG4gICAgdGhpcy5pbnRlcm5hbElkID0gcHJvcHMuaW50ZXJuYWxJZDtcbiAgICB0aGlzLnNjcmlwdElkID0gcHJvcHMuc2NyaXB0SWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ3VzdG9tRmllbGRMaXN0UHJvcHMgPSB7XG4gIGN1c3RvbUZpZWxkPzogQ3VzdG9tRmllbGRSZWZbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21GaWVsZExpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBjdXN0b21GaWVsZD86IEN1c3RvbUZpZWxkUmVmW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDdXN0b21GaWVsZExpc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuY3VzdG9tRmllbGQgPSBwcm9wcy5jdXN0b21GaWVsZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hFbnVtTXVsdGlTZWxlY3RGaWVsZFByb3BzID0ge1xuICBzZWFyY2hWYWx1ZT86IHN0cmluZ1tdO1xuICBvcGVyYXRvcj86IFBsYXRmb3JtQ29yZVR5cGVzLlNlYXJjaEVudW1NdWx0aVNlbGVjdEZpZWxkT3BlcmF0b3I7XG59O1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoRW51bU11bHRpU2VsZWN0RmllbGQgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBzZWFyY2hWYWx1ZT86IHN0cmluZ1tdO1xuICBvcGVyYXRvcj86IFBsYXRmb3JtQ29yZVR5cGVzLlNlYXJjaEVudW1NdWx0aVNlbGVjdEZpZWxkT3BlcmF0b3I7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTZWFyY2hFbnVtTXVsdGlTZWxlY3RGaWVsZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHByb3BzLnNlYXJjaFZhbHVlO1xuICAgIHRoaXMub3BlcmF0b3IgPSBwcm9wcy5vcGVyYXRvcjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUmVmTGlzdFByb3BzID0ge1xuICBiYXNlUmVmPzogQmFzZVJlZltdO1xufTtcblxuZXhwb3J0IGNsYXNzIEJhc2VSZWZMaXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgYmFzZVJlZj86IEJhc2VSZWZbXTtcbiAgY29uc3RydWN0b3IocHJvcHM6IEJhc2VSZWZMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmJhc2VSZWYgPSBwcm9wcy5iYXNlUmVmO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIERlbGV0ZWRSZWNvcmRMaXN0UHJvcHMgPSB7XG4gIGRlbGV0ZWRSZWNvcmQ/OiBEZWxldGVkUmVjb3JkW107XG59O1xuXG5leHBvcnQgY2xhc3MgRGVsZXRlZFJlY29yZExpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBkZWxldGVkUmVjb3JkPzogRGVsZXRlZFJlY29yZFtdO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogRGVsZXRlZFJlY29yZExpc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZGVsZXRlZFJlY29yZCA9IHByb3BzLmRlbGV0ZWRSZWNvcmQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgV3NSb2xlTGlzdFByb3BzID0ge1xuICB3c1JvbGU/OiBXc1JvbGVbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBXc1JvbGVMaXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgd3NSb2xlPzogV3NSb2xlW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBXc1JvbGVMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLndzUm9sZSA9IHByb3BzLndzUm9sZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hDdXN0b21GaWVsZFByb3BzID0ge1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBzY3JpcHRJZD86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hDdXN0b21GaWVsZCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIHNjcmlwdElkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VhcmNoQ3VzdG9tRmllbGRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuaW50ZXJuYWxJZCA9IHByb3BzLmludGVybmFsSWQ7XG4gICAgdGhpcy5zY3JpcHRJZCA9IHByb3BzLnNjcmlwdElkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNlYXJjaEJvb2xlYW5DdXN0b21GaWVsZFByb3BzID0ge1xuICBzZWFyY2hWYWx1ZT86IGJvb2xlYW47XG59ICYgU2VhcmNoQ3VzdG9tRmllbGRQcm9wcztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaEJvb2xlYW5DdXN0b21GaWVsZCBleHRlbmRzIFNlYXJjaEN1c3RvbUZpZWxkIHtcbiAgc2VhcmNoVmFsdWU/OiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VhcmNoQm9vbGVhbkN1c3RvbUZpZWxkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gcHJvcHMuc2VhcmNoVmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2VhcmNoQ29sdW1uRmllbGRQcm9wcyA9IHtcbiAgY3VzdG9tTGFiZWw/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29sdW1uRmllbGQgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBjdXN0b21MYWJlbD86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlYXJjaENvbHVtbkZpZWxkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmN1c3RvbUxhYmVsID0gcHJvcHMuY3VzdG9tTGFiZWw7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQnVkZ2V0RXhjaGFuZ2VSYXRlRmlsdGVyUHJvcHMgPSB7XG4gIHBlcmlvZDogUmVjb3JkUmVmO1xuICBmcm9tU3Vic2lkaWFyeT86IFJlY29yZFJlZjtcbiAgdG9TdWJzaWRpYXJ5PzogUmVjb3JkUmVmO1xufTtcblxuZXhwb3J0IGNsYXNzIEJ1ZGdldEV4Y2hhbmdlUmF0ZUZpbHRlciBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHBlcmlvZDogUmVjb3JkUmVmO1xuICBmcm9tU3Vic2lkaWFyeT86IFJlY29yZFJlZjtcbiAgdG9TdWJzaWRpYXJ5PzogUmVjb3JkUmVmO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQnVkZ2V0RXhjaGFuZ2VSYXRlRmlsdGVyUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnBlcmlvZCA9IHByb3BzLnBlcmlvZDtcbiAgICB0aGlzLmZyb21TdWJzaWRpYXJ5ID0gcHJvcHMuZnJvbVN1YnNpZGlhcnk7XG4gICAgdGhpcy50b1N1YnNpZGlhcnkgPSBwcm9wcy50b1N1YnNpZGlhcnk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0U2VsZWN0RmlsdGVyQnlGaWVsZFZhbHVlTGlzdFByb3BzID0ge1xuICBmaWx0ZXJCeTogR2V0U2VsZWN0RmlsdGVyQnlGaWVsZFZhbHVlW107XG59O1xuXG5leHBvcnQgY2xhc3MgR2V0U2VsZWN0RmlsdGVyQnlGaWVsZFZhbHVlTGlzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGZpbHRlckJ5OiBHZXRTZWxlY3RGaWx0ZXJCeUZpZWxkVmFsdWVbXTtcbiAgY29uc3RydWN0b3IocHJvcHM6IEdldFNlbGVjdEZpbHRlckJ5RmllbGRWYWx1ZUxpc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZmlsdGVyQnkgPSBwcm9wcy5maWx0ZXJCeTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBHZXRTYXZlZFNlYXJjaFJlc3VsdFByb3BzID0ge1xuICBzdGF0dXM6IFN0YXR1cztcbiAgdG90YWxSZWNvcmRzPzogbnVtYmVyO1xuICByZWNvcmRSZWZMaXN0PzogUmVjb3JkUmVmTGlzdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXRTYXZlZFNlYXJjaFJlc3VsdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHN0YXR1czogU3RhdHVzO1xuICB0b3RhbFJlY29yZHM/OiBudW1iZXI7XG4gIHJlY29yZFJlZkxpc3Q/OiBSZWNvcmRSZWZMaXN0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0U2F2ZWRTZWFyY2hSZXN1bHRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc3RhdHVzID0gcHJvcHMuc3RhdHVzO1xuICAgIHRoaXMudG90YWxSZWNvcmRzID0gcHJvcHMudG90YWxSZWNvcmRzO1xuICAgIHRoaXMucmVjb3JkUmVmTGlzdCA9IHByb3BzLnJlY29yZFJlZkxpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUG9zdGluZ1RyYW5zYWN0aW9uU3VtbWFyeUZpZWxkUHJvcHMgPSB7XG4gIHBlcmlvZD86IGJvb2xlYW47XG4gIGFjY291bnQ/OiBib29sZWFuO1xuICBwYXJlbnRJdGVtPzogYm9vbGVhbjtcbiAgaXRlbT86IGJvb2xlYW47XG4gIGVudGl0eT86IGJvb2xlYW47XG4gIGRlcGFydG1lbnQ/OiBib29sZWFuO1xuICBjbGF6ej86IGJvb2xlYW47XG4gIGxvY2F0aW9uPzogYm9vbGVhbjtcbiAgc3Vic2lkaWFyeT86IGJvb2xlYW47XG4gIGJvb2s/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIFBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnlGaWVsZCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHBlcmlvZD86IGJvb2xlYW47XG4gIGFjY291bnQ/OiBib29sZWFuO1xuICBwYXJlbnRJdGVtPzogYm9vbGVhbjtcbiAgaXRlbT86IGJvb2xlYW47XG4gIGVudGl0eT86IGJvb2xlYW47XG4gIGRlcGFydG1lbnQ/OiBib29sZWFuO1xuICBjbGF6ej86IGJvb2xlYW47XG4gIGxvY2F0aW9uPzogYm9vbGVhbjtcbiAgc3Vic2lkaWFyeT86IGJvb2xlYW47XG4gIGJvb2s/OiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUG9zdGluZ1RyYW5zYWN0aW9uU3VtbWFyeUZpZWxkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnBlcmlvZCA9IHByb3BzLnBlcmlvZDtcbiAgICB0aGlzLmFjY291bnQgPSBwcm9wcy5hY2NvdW50O1xuICAgIHRoaXMucGFyZW50SXRlbSA9IHByb3BzLnBhcmVudEl0ZW07XG4gICAgdGhpcy5pdGVtID0gcHJvcHMuaXRlbTtcbiAgICB0aGlzLmVudGl0eSA9IHByb3BzLmVudGl0eTtcbiAgICB0aGlzLmRlcGFydG1lbnQgPSBwcm9wcy5kZXBhcnRtZW50O1xuICAgIHRoaXMuY2xhenogPSBwcm9wcy5jbGF6ejtcbiAgICB0aGlzLmxvY2F0aW9uID0gcHJvcHMubG9jYXRpb247XG4gICAgdGhpcy5zdWJzaWRpYXJ5ID0gcHJvcHMuc3Vic2lkaWFyeTtcbiAgICB0aGlzLmJvb2sgPSBwcm9wcy5ib29rO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNlYXJjaENvbHVtbkxvbmdDdXN0b21GaWVsZFByb3BzID0ge1xuICBzZWFyY2hWYWx1ZT86IG51bWJlcjtcbn0gJiBTZWFyY2hDb2x1bW5DdXN0b21GaWVsZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29sdW1uTG9uZ0N1c3RvbUZpZWxkIGV4dGVuZHMgU2VhcmNoQ29sdW1uQ3VzdG9tRmllbGQge1xuICBzZWFyY2hWYWx1ZT86IG51bWJlcjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlYXJjaENvbHVtbkxvbmdDdXN0b21GaWVsZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHByb3BzLnNlYXJjaFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIERldGFjaFJlZmVyZW5jZVByb3BzID0ge1xuICBkZXRhY2hGcm9tOiBCYXNlUmVmO1xufTtcblxuZXhwb3J0IGNsYXNzIERldGFjaFJlZmVyZW5jZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGRldGFjaEZyb206IEJhc2VSZWY7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBEZXRhY2hSZWZlcmVuY2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZGV0YWNoRnJvbSA9IHByb3BzLmRldGFjaEZyb207XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRGV0YWNoQmFzaWNSZWZlcmVuY2VQcm9wcyA9IHtcbiAgZGV0YWNoZWRSZWNvcmQ6IEJhc2VSZWY7XG59ICYgRGV0YWNoUmVmZXJlbmNlUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBEZXRhY2hCYXNpY1JlZmVyZW5jZSBleHRlbmRzIERldGFjaFJlZmVyZW5jZSB7XG4gIGRldGFjaGVkUmVjb3JkOiBCYXNlUmVmO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogRGV0YWNoQmFzaWNSZWZlcmVuY2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZGV0YWNoZWRSZWNvcmQgPSBwcm9wcy5kZXRhY2hlZFJlY29yZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hEb3VibGVDdXN0b21GaWVsZFByb3BzID0ge1xuICBzZWFyY2hWYWx1ZT86IG51bWJlcjtcbiAgc2VhcmNoVmFsdWUyPzogbnVtYmVyO1xuICBvcGVyYXRvcj86IFBsYXRmb3JtQ29yZVR5cGVzLlNlYXJjaERvdWJsZUZpZWxkT3BlcmF0b3I7XG59ICYgU2VhcmNoQ3VzdG9tRmllbGRQcm9wcztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaERvdWJsZUN1c3RvbUZpZWxkIGV4dGVuZHMgU2VhcmNoQ3VzdG9tRmllbGQge1xuICBzZWFyY2hWYWx1ZT86IG51bWJlcjtcbiAgc2VhcmNoVmFsdWUyPzogbnVtYmVyO1xuICBvcGVyYXRvcj86IFBsYXRmb3JtQ29yZVR5cGVzLlNlYXJjaERvdWJsZUZpZWxkT3BlcmF0b3I7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTZWFyY2hEb3VibGVDdXN0b21GaWVsZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHByb3BzLnNlYXJjaFZhbHVlO1xuICAgIHRoaXMuc2VhcmNoVmFsdWUyID0gcHJvcHMuc2VhcmNoVmFsdWUyO1xuICAgIHRoaXMub3BlcmF0b3IgPSBwcm9wcy5vcGVyYXRvcjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUmVmUHJvcHMgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgQmFzZVJlZiBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBCYXNlUmVmUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFJlY29yZFJlZlByb3BzID0ge1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xuICB0eXBlPzogUGxhdGZvcm1Db3JlVHlwZXMuUmVjb3JkVHlwZTtcbn0gJiBCYXNlUmVmUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBSZWNvcmRSZWYgZXh0ZW5kcyBCYXNlUmVmIHtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgZXh0ZXJuYWxJZD86IHN0cmluZztcbiAgdHlwZT86IFBsYXRmb3JtQ29yZVR5cGVzLlJlY29yZFR5cGU7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBSZWNvcmRSZWZQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuaW50ZXJuYWxJZCA9IHByb3BzLmludGVybmFsSWQ7XG4gICAgdGhpcy5leHRlcm5hbElkID0gcHJvcHMuZXh0ZXJuYWxJZDtcbiAgICB0aGlzLnR5cGUgPSBwcm9wcy50eXBlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEN1c3RvbWl6YXRpb25SZWZQcm9wcyA9IHtcbiAgc2NyaXB0SWQ/OiBzdHJpbmc7XG59ICYgUmVjb3JkUmVmUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21pemF0aW9uUmVmIGV4dGVuZHMgUmVjb3JkUmVmIHtcbiAgc2NyaXB0SWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDdXN0b21pemF0aW9uUmVmUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnNjcmlwdElkID0gcHJvcHMuc2NyaXB0SWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ3VzdG9tRmllbGRSZWZQcm9wcyA9IHtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgc2NyaXB0SWQ/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tRmllbGRSZWYgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBzY3JpcHRJZD86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IEN1c3RvbUZpZWxkUmVmUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmludGVybmFsSWQgPSBwcm9wcy5pbnRlcm5hbElkO1xuICAgIHRoaXMuc2NyaXB0SWQgPSBwcm9wcy5zY3JpcHRJZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBEYXRlQ3VzdG9tRmllbGRSZWZQcm9wcyA9IHtcbiAgdmFsdWU6IHN0cmluZztcbn0gJiBDdXN0b21GaWVsZFJlZlByb3BzO1xuXG5leHBvcnQgY2xhc3MgRGF0ZUN1c3RvbUZpZWxkUmVmIGV4dGVuZHMgQ3VzdG9tRmllbGRSZWYge1xuICB2YWx1ZTogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogRGF0ZUN1c3RvbUZpZWxkUmVmUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnZhbHVlID0gcHJvcHMudmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2VhcmNoVGV4dE51bWJlckZpZWxkUHJvcHMgPSB7XG4gIHNlYXJjaFZhbHVlPzogc3RyaW5nO1xuICBzZWFyY2hWYWx1ZTI/OiBzdHJpbmc7XG4gIG9wZXJhdG9yPzogUGxhdGZvcm1Db3JlVHlwZXMuU2VhcmNoVGV4dE51bWJlckZpZWxkT3BlcmF0b3I7XG59O1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoVGV4dE51bWJlckZpZWxkIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc2VhcmNoVmFsdWU/OiBzdHJpbmc7XG4gIHNlYXJjaFZhbHVlMj86IHN0cmluZztcbiAgb3BlcmF0b3I/OiBQbGF0Zm9ybUNvcmVUeXBlcy5TZWFyY2hUZXh0TnVtYmVyRmllbGRPcGVyYXRvcjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlYXJjaFRleHROdW1iZXJGaWVsZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHByb3BzLnNlYXJjaFZhbHVlO1xuICAgIHRoaXMuc2VhcmNoVmFsdWUyID0gcHJvcHMuc2VhcmNoVmFsdWUyO1xuICAgIHRoaXMub3BlcmF0b3IgPSBwcm9wcy5vcGVyYXRvcjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hNdWx0aVNlbGVjdEZpZWxkUHJvcHMgPSB7XG4gIHNlYXJjaFZhbHVlPzogUmVjb3JkUmVmW107XG4gIG9wZXJhdG9yPzogUGxhdGZvcm1Db3JlVHlwZXMuU2VhcmNoTXVsdGlTZWxlY3RGaWVsZE9wZXJhdG9yO1xufTtcblxuZXhwb3J0IGNsYXNzIFNlYXJjaE11bHRpU2VsZWN0RmllbGQgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBzZWFyY2hWYWx1ZT86IFJlY29yZFJlZltdO1xuICBvcGVyYXRvcj86IFBsYXRmb3JtQ29yZVR5cGVzLlNlYXJjaE11bHRpU2VsZWN0RmllbGRPcGVyYXRvcjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlYXJjaE11bHRpU2VsZWN0RmllbGRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSBwcm9wcy5zZWFyY2hWYWx1ZTtcbiAgICB0aGlzLm9wZXJhdG9yID0gcHJvcHMub3BlcmF0b3I7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRGltZW5zaW9uTGlzdFByb3BzID0ge1xuICBkaW1lbnNpb24/OiBEaW1lbnNpb25SZWZbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBEaW1lbnNpb25MaXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgZGltZW5zaW9uPzogRGltZW5zaW9uUmVmW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBEaW1lbnNpb25MaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmRpbWVuc2lvbiA9IHByb3BzLmRpbWVuc2lvbjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTdGF0dXNEZXRhaWxQcm9wcyA9IHtcbiAgY29kZT86IFBsYXRmb3JtRmF1bHRzVHlwZXMuU3RhdHVzRGV0YWlsQ29kZVR5cGU7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIGFmdGVyU3VibWl0RmFpbGVkPzogYm9vbGVhbjtcbiAgdHlwZT86IFBsYXRmb3JtRmF1bHRzVHlwZXMuU3RhdHVzRGV0YWlsVHlwZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBTdGF0dXNEZXRhaWwgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBjb2RlPzogUGxhdGZvcm1GYXVsdHNUeXBlcy5TdGF0dXNEZXRhaWxDb2RlVHlwZTtcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgYWZ0ZXJTdWJtaXRGYWlsZWQ/OiBib29sZWFuO1xuICB0eXBlPzogUGxhdGZvcm1GYXVsdHNUeXBlcy5TdGF0dXNEZXRhaWxUeXBlO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU3RhdHVzRGV0YWlsUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmNvZGUgPSBwcm9wcy5jb2RlO1xuICAgIHRoaXMubWVzc2FnZSA9IHByb3BzLm1lc3NhZ2U7XG4gICAgdGhpcy5hZnRlclN1Ym1pdEZhaWxlZCA9IHByb3BzLmFmdGVyU3VibWl0RmFpbGVkO1xuICAgIHRoaXMudHlwZSA9IHByb3BzLnR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3RyaW5nQ3VzdG9tRmllbGRSZWZQcm9wcyA9IHtcbiAgdmFsdWU6IHN0cmluZztcbn0gJiBDdXN0b21GaWVsZFJlZlByb3BzO1xuXG5leHBvcnQgY2xhc3MgU3RyaW5nQ3VzdG9tRmllbGRSZWYgZXh0ZW5kcyBDdXN0b21GaWVsZFJlZiB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTdHJpbmdDdXN0b21GaWVsZFJlZlByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy52YWx1ZSA9IHByb3BzLnZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVBdXhSZWZQcm9wcyA9IHtcbiAgdHlwZT86IFBsYXRmb3JtQ29yZVR5cGVzLkluaXRpYWxpemVBdXhSZWZUeXBlO1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xuICBzY3JpcHRJZD86IHN0cmluZztcbn0gJiBCYXNlUmVmUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBJbml0aWFsaXplQXV4UmVmIGV4dGVuZHMgQmFzZVJlZiB7XG4gIHR5cGU/OiBQbGF0Zm9ybUNvcmVUeXBlcy5Jbml0aWFsaXplQXV4UmVmVHlwZTtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgZXh0ZXJuYWxJZD86IHN0cmluZztcbiAgc2NyaXB0SWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJbml0aWFsaXplQXV4UmVmUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnR5cGUgPSBwcm9wcy50eXBlO1xuICAgIHRoaXMuaW50ZXJuYWxJZCA9IHByb3BzLmludGVybmFsSWQ7XG4gICAgdGhpcy5leHRlcm5hbElkID0gcHJvcHMuZXh0ZXJuYWxJZDtcbiAgICB0aGlzLnNjcmlwdElkID0gcHJvcHMuc2NyaXB0SWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0U2VsZWN0VmFsdWVSZXN1bHRQcm9wcyA9IHtcbiAgc3RhdHVzOiBTdGF0dXM7XG4gIHRvdGFsUmVjb3Jkcz86IG51bWJlcjtcbiAgdG90YWxQYWdlcz86IG51bWJlcjtcbiAgYmFzZVJlZkxpc3Q/OiBCYXNlUmVmTGlzdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXRTZWxlY3RWYWx1ZVJlc3VsdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHN0YXR1czogU3RhdHVzO1xuICB0b3RhbFJlY29yZHM/OiBudW1iZXI7XG4gIHRvdGFsUGFnZXM/OiBudW1iZXI7XG4gIGJhc2VSZWZMaXN0PzogQmFzZVJlZkxpc3Q7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBHZXRTZWxlY3RWYWx1ZVJlc3VsdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zdGF0dXMgPSBwcm9wcy5zdGF0dXM7XG4gICAgdGhpcy50b3RhbFJlY29yZHMgPSBwcm9wcy50b3RhbFJlY29yZHM7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gcHJvcHMudG90YWxQYWdlcztcbiAgICB0aGlzLmJhc2VSZWZMaXN0ID0gcHJvcHMuYmFzZVJlZkxpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFJvdyBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7fVxuXG5leHBvcnQgdHlwZSBTZWFyY2hDb2x1bW5NdWx0aVNlbGVjdEN1c3RvbUZpZWxkUHJvcHMgPSB7XG4gIHNlYXJjaFZhbHVlPzogTGlzdE9yUmVjb3JkUmVmW107XG59ICYgU2VhcmNoQ29sdW1uQ3VzdG9tRmllbGRQcm9wcztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbHVtbk11bHRpU2VsZWN0Q3VzdG9tRmllbGQgZXh0ZW5kcyBTZWFyY2hDb2x1bW5DdXN0b21GaWVsZCB7XG4gIHNlYXJjaFZhbHVlPzogTGlzdE9yUmVjb3JkUmVmW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTZWFyY2hDb2x1bW5NdWx0aVNlbGVjdEN1c3RvbUZpZWxkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gcHJvcHMuc2VhcmNoVmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3NvQ3JlZGVudGlhbHNQcm9wcyA9IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgYWNjb3VudDogc3RyaW5nO1xuICByb2xlPzogUmVjb3JkUmVmO1xuICBhdXRoZW50aWNhdGlvblRva2VuOiBzdHJpbmc7XG4gIHBhcnRuZXJJZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIFNzb0NyZWRlbnRpYWxzIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgYWNjb3VudDogc3RyaW5nO1xuICByb2xlPzogUmVjb3JkUmVmO1xuICBhdXRoZW50aWNhdGlvblRva2VuOiBzdHJpbmc7XG4gIHBhcnRuZXJJZDogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU3NvQ3JlZGVudGlhbHNQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZW1haWwgPSBwcm9wcy5lbWFpbDtcbiAgICB0aGlzLnBhc3N3b3JkID0gcHJvcHMucGFzc3dvcmQ7XG4gICAgdGhpcy5hY2NvdW50ID0gcHJvcHMuYWNjb3VudDtcbiAgICB0aGlzLnJvbGUgPSBwcm9wcy5yb2xlO1xuICAgIHRoaXMuYXV0aGVudGljYXRpb25Ub2tlbiA9IHByb3BzLmF1dGhlbnRpY2F0aW9uVG9rZW47XG4gICAgdGhpcy5wYXJ0bmVySWQgPSBwcm9wcy5wYXJ0bmVySWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2VhcmNoQ29sdW1uRGF0ZUN1c3RvbUZpZWxkUHJvcHMgPSB7XG4gIHNlYXJjaFZhbHVlPzogc3RyaW5nO1xufSAmIFNlYXJjaENvbHVtbkN1c3RvbUZpZWxkUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hDb2x1bW5EYXRlQ3VzdG9tRmllbGQgZXh0ZW5kcyBTZWFyY2hDb2x1bW5DdXN0b21GaWVsZCB7XG4gIHNlYXJjaFZhbHVlPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VhcmNoQ29sdW1uRGF0ZUN1c3RvbUZpZWxkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gcHJvcHMuc2VhcmNoVmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2VhcmNoU3RyaW5nQ3VzdG9tRmllbGRQcm9wcyA9IHtcbiAgc2VhcmNoVmFsdWU/OiBzdHJpbmc7XG4gIG9wZXJhdG9yPzogUGxhdGZvcm1Db3JlVHlwZXMuU2VhcmNoU3RyaW5nRmllbGRPcGVyYXRvcjtcbn0gJiBTZWFyY2hDdXN0b21GaWVsZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoU3RyaW5nQ3VzdG9tRmllbGQgZXh0ZW5kcyBTZWFyY2hDdXN0b21GaWVsZCB7XG4gIHNlYXJjaFZhbHVlPzogc3RyaW5nO1xuICBvcGVyYXRvcj86IFBsYXRmb3JtQ29yZVR5cGVzLlNlYXJjaFN0cmluZ0ZpZWxkT3BlcmF0b3I7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTZWFyY2hTdHJpbmdDdXN0b21GaWVsZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHByb3BzLnNlYXJjaFZhbHVlO1xuICAgIHRoaXMub3BlcmF0b3IgPSBwcm9wcy5vcGVyYXRvcjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hDb2x1bW5TdHJpbmdGaWVsZFByb3BzID0ge1xuICBzZWFyY2hWYWx1ZT86IHN0cmluZztcbn0gJiBTZWFyY2hDb2x1bW5GaWVsZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29sdW1uU3RyaW5nRmllbGQgZXh0ZW5kcyBTZWFyY2hDb2x1bW5GaWVsZCB7XG4gIHNlYXJjaFZhbHVlPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VhcmNoQ29sdW1uU3RyaW5nRmllbGRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSBwcm9wcy5zZWFyY2hWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBHZXRBbGxSZXN1bHRQcm9wcyA9IHtcbiAgc3RhdHVzOiBTdGF0dXM7XG4gIHRvdGFsUmVjb3Jkcz86IG51bWJlcjtcbiAgcmVjb3JkTGlzdD86IFJlY29yZExpc3Q7XG59O1xuXG5leHBvcnQgY2xhc3MgR2V0QWxsUmVzdWx0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc3RhdHVzOiBTdGF0dXM7XG4gIHRvdGFsUmVjb3Jkcz86IG51bWJlcjtcbiAgcmVjb3JkTGlzdD86IFJlY29yZExpc3Q7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBHZXRBbGxSZXN1bHRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc3RhdHVzID0gcHJvcHMuc3RhdHVzO1xuICAgIHRoaXMudG90YWxSZWNvcmRzID0gcHJvcHMudG90YWxSZWNvcmRzO1xuICAgIHRoaXMucmVjb3JkTGlzdCA9IHByb3BzLnJlY29yZExpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ3VzdG9tVHJhbnNhY3Rpb25SZWZQcm9wcyA9IHtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgZXh0ZXJuYWxJZD86IHN0cmluZztcbiAgdHlwZUlkPzogc3RyaW5nO1xuICBzY3JpcHRJZD86IHN0cmluZztcbn0gJiBCYXNlUmVmUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21UcmFuc2FjdGlvblJlZiBleHRlbmRzIEJhc2VSZWYge1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xuICB0eXBlSWQ/OiBzdHJpbmc7XG4gIHNjcmlwdElkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQ3VzdG9tVHJhbnNhY3Rpb25SZWZQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuaW50ZXJuYWxJZCA9IHByb3BzLmludGVybmFsSWQ7XG4gICAgdGhpcy5leHRlcm5hbElkID0gcHJvcHMuZXh0ZXJuYWxJZDtcbiAgICB0aGlzLnR5cGVJZCA9IHByb3BzLnR5cGVJZDtcbiAgICB0aGlzLnNjcmlwdElkID0gcHJvcHMuc2NyaXB0SWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ3VycmVuY3lSYXRlTGlzdFByb3BzID0ge1xuICBjdXJyZW5jeVJhdGU/OiBDdXJyZW5jeVJhdGVbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVJhdGVMaXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgY3VycmVuY3lSYXRlPzogQ3VycmVuY3lSYXRlW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDdXJyZW5jeVJhdGVMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmN1cnJlbmN5UmF0ZSA9IHByb3BzLmN1cnJlbmN5UmF0ZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBEYXRhQ2VudGVyVXJsc1Byb3BzID0ge1xuICByZXN0RG9tYWluOiBzdHJpbmc7XG4gIHdlYnNlcnZpY2VzRG9tYWluOiBzdHJpbmc7XG4gIHN5c3RlbURvbWFpbjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIERhdGFDZW50ZXJVcmxzIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgcmVzdERvbWFpbjogc3RyaW5nO1xuICB3ZWJzZXJ2aWNlc0RvbWFpbjogc3RyaW5nO1xuICBzeXN0ZW1Eb21haW46IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IERhdGFDZW50ZXJVcmxzUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnJlc3REb21haW4gPSBwcm9wcy5yZXN0RG9tYWluO1xuICAgIHRoaXMud2Vic2VydmljZXNEb21haW4gPSBwcm9wcy53ZWJzZXJ2aWNlc0RvbWFpbjtcbiAgICB0aGlzLnN5c3RlbURvbWFpbiA9IHByb3BzLnN5c3RlbURvbWFpbjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTc29QYXNzcG9ydFByb3BzID0ge1xuICBhdXRoZW50aWNhdGlvblRva2VuOiBzdHJpbmc7XG4gIHBhcnRuZXJJZDogc3RyaW5nO1xuICBwYXJ0bmVyQWNjb3VudDogc3RyaW5nO1xuICBwYXJ0bmVyVXNlcklkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgU3NvUGFzc3BvcnQgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBhdXRoZW50aWNhdGlvblRva2VuOiBzdHJpbmc7XG4gIHBhcnRuZXJJZDogc3RyaW5nO1xuICBwYXJ0bmVyQWNjb3VudDogc3RyaW5nO1xuICBwYXJ0bmVyVXNlcklkOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTc29QYXNzcG9ydFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGlvblRva2VuID0gcHJvcHMuYXV0aGVudGljYXRpb25Ub2tlbjtcbiAgICB0aGlzLnBhcnRuZXJJZCA9IHByb3BzLnBhcnRuZXJJZDtcbiAgICB0aGlzLnBhcnRuZXJBY2NvdW50ID0gcHJvcHMucGFydG5lckFjY291bnQ7XG4gICAgdGhpcy5wYXJ0bmVyVXNlcklkID0gcHJvcHMucGFydG5lclVzZXJJZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBQb3N0aW5nVHJhbnNhY3Rpb25TdW1tYXJ5UHJvcHMgPSB7XG4gIHBlcmlvZD86IFJlY29yZFJlZjtcbiAgYWNjb3VudD86IFJlY29yZFJlZjtcbiAgcGFyZW50SXRlbT86IFJlY29yZFJlZjtcbiAgaXRlbT86IFJlY29yZFJlZjtcbiAgZW50aXR5PzogUmVjb3JkUmVmO1xuICBkZXBhcnRtZW50PzogUmVjb3JkUmVmO1xuICBjbGF6ej86IFJlY29yZFJlZjtcbiAgbG9jYXRpb24/OiBSZWNvcmRSZWY7XG4gIHN1YnNpZGlhcnk/OiBSZWNvcmRSZWY7XG4gIGJvb2s/OiBSZWNvcmRSZWY7XG4gIGFtb3VudDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNsYXNzIFBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnkgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBwZXJpb2Q/OiBSZWNvcmRSZWY7XG4gIGFjY291bnQ/OiBSZWNvcmRSZWY7XG4gIHBhcmVudEl0ZW0/OiBSZWNvcmRSZWY7XG4gIGl0ZW0/OiBSZWNvcmRSZWY7XG4gIGVudGl0eT86IFJlY29yZFJlZjtcbiAgZGVwYXJ0bWVudD86IFJlY29yZFJlZjtcbiAgY2xheno/OiBSZWNvcmRSZWY7XG4gIGxvY2F0aW9uPzogUmVjb3JkUmVmO1xuICBzdWJzaWRpYXJ5PzogUmVjb3JkUmVmO1xuICBib29rPzogUmVjb3JkUmVmO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnlQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMucGVyaW9kID0gcHJvcHMucGVyaW9kO1xuICAgIHRoaXMuYWNjb3VudCA9IHByb3BzLmFjY291bnQ7XG4gICAgdGhpcy5wYXJlbnRJdGVtID0gcHJvcHMucGFyZW50SXRlbTtcbiAgICB0aGlzLml0ZW0gPSBwcm9wcy5pdGVtO1xuICAgIHRoaXMuZW50aXR5ID0gcHJvcHMuZW50aXR5O1xuICAgIHRoaXMuZGVwYXJ0bWVudCA9IHByb3BzLmRlcGFydG1lbnQ7XG4gICAgdGhpcy5jbGF6eiA9IHByb3BzLmNsYXp6O1xuICAgIHRoaXMubG9jYXRpb24gPSBwcm9wcy5sb2NhdGlvbjtcbiAgICB0aGlzLnN1YnNpZGlhcnkgPSBwcm9wcy5zdWJzaWRpYXJ5O1xuICAgIHRoaXMuYm9vayA9IHByb3BzLmJvb2s7XG4gICAgdGhpcy5hbW91bnQgPSBwcm9wcy5hbW91bnQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUG9zdGluZ1RyYW5zYWN0aW9uU3VtbWFyeUZpbHRlclByb3BzID0ge1xuICBwZXJpb2Q/OiBSZWNvcmRSZWZMaXN0O1xuICBhY2NvdW50PzogUmVjb3JkUmVmTGlzdDtcbiAgcGFyZW50SXRlbT86IFJlY29yZFJlZkxpc3Q7XG4gIGl0ZW0/OiBSZWNvcmRSZWZMaXN0O1xuICBlbnRpdHk/OiBSZWNvcmRSZWZMaXN0O1xuICBkZXBhcnRtZW50PzogUmVjb3JkUmVmTGlzdDtcbiAgY2xheno/OiBSZWNvcmRSZWZMaXN0O1xuICBsb2NhdGlvbj86IFJlY29yZFJlZkxpc3Q7XG4gIHN1YnNpZGlhcnk/OiBSZWNvcmRSZWZMaXN0O1xuICBib29rPzogUmVjb3JkUmVmTGlzdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBQb3N0aW5nVHJhbnNhY3Rpb25TdW1tYXJ5RmlsdGVyIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgcGVyaW9kPzogUmVjb3JkUmVmTGlzdDtcbiAgYWNjb3VudD86IFJlY29yZFJlZkxpc3Q7XG4gIHBhcmVudEl0ZW0/OiBSZWNvcmRSZWZMaXN0O1xuICBpdGVtPzogUmVjb3JkUmVmTGlzdDtcbiAgZW50aXR5PzogUmVjb3JkUmVmTGlzdDtcbiAgZGVwYXJ0bWVudD86IFJlY29yZFJlZkxpc3Q7XG4gIGNsYXp6PzogUmVjb3JkUmVmTGlzdDtcbiAgbG9jYXRpb24/OiBSZWNvcmRSZWZMaXN0O1xuICBzdWJzaWRpYXJ5PzogUmVjb3JkUmVmTGlzdDtcbiAgYm9vaz86IFJlY29yZFJlZkxpc3Q7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQb3N0aW5nVHJhbnNhY3Rpb25TdW1tYXJ5RmlsdGVyUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnBlcmlvZCA9IHByb3BzLnBlcmlvZDtcbiAgICB0aGlzLmFjY291bnQgPSBwcm9wcy5hY2NvdW50O1xuICAgIHRoaXMucGFyZW50SXRlbSA9IHByb3BzLnBhcmVudEl0ZW07XG4gICAgdGhpcy5pdGVtID0gcHJvcHMuaXRlbTtcbiAgICB0aGlzLmVudGl0eSA9IHByb3BzLmVudGl0eTtcbiAgICB0aGlzLmRlcGFydG1lbnQgPSBwcm9wcy5kZXBhcnRtZW50O1xuICAgIHRoaXMuY2xhenogPSBwcm9wcy5jbGF6ejtcbiAgICB0aGlzLmxvY2F0aW9uID0gcHJvcHMubG9jYXRpb247XG4gICAgdGhpcy5zdWJzaWRpYXJ5ID0gcHJvcHMuc3Vic2lkaWFyeTtcbiAgICB0aGlzLmJvb2sgPSBwcm9wcy5ib29rO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNlYXJjaENvbHVtbkJvb2xlYW5DdXN0b21GaWVsZFByb3BzID0ge1xuICBzZWFyY2hWYWx1ZT86IGJvb2xlYW47XG59ICYgU2VhcmNoQ29sdW1uQ3VzdG9tRmllbGRQcm9wcztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbHVtbkJvb2xlYW5DdXN0b21GaWVsZCBleHRlbmRzIFNlYXJjaENvbHVtbkN1c3RvbUZpZWxkIHtcbiAgc2VhcmNoVmFsdWU/OiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VhcmNoQ29sdW1uQm9vbGVhbkN1c3RvbUZpZWxkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gcHJvcHMuc2VhcmNoVmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2VhcmNoRW51bU11bHRpU2VsZWN0Q3VzdG9tRmllbGRQcm9wcyA9IHtcbiAgc2VhcmNoVmFsdWU/OiBzdHJpbmdbXTtcbiAgb3BlcmF0b3I/OiBQbGF0Zm9ybUNvcmVUeXBlcy5TZWFyY2hFbnVtTXVsdGlTZWxlY3RGaWVsZE9wZXJhdG9yO1xufSAmIFNlYXJjaEN1c3RvbUZpZWxkUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hFbnVtTXVsdGlTZWxlY3RDdXN0b21GaWVsZCBleHRlbmRzIFNlYXJjaEN1c3RvbUZpZWxkIHtcbiAgc2VhcmNoVmFsdWU/OiBzdHJpbmdbXTtcbiAgb3BlcmF0b3I/OiBQbGF0Zm9ybUNvcmVUeXBlcy5TZWFyY2hFbnVtTXVsdGlTZWxlY3RGaWVsZE9wZXJhdG9yO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VhcmNoRW51bU11bHRpU2VsZWN0Q3VzdG9tRmllbGRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSBwcm9wcy5zZWFyY2hWYWx1ZTtcbiAgICB0aGlzLm9wZXJhdG9yID0gcHJvcHMub3BlcmF0b3I7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2VhcmNoUmVzdWx0UHJvcHMgPSB7XG4gIHN0YXR1czogU3RhdHVzO1xuICB0b3RhbFJlY29yZHM/OiBudW1iZXI7XG4gIHBhZ2VTaXplPzogbnVtYmVyO1xuICB0b3RhbFBhZ2VzPzogbnVtYmVyO1xuICBwYWdlSW5kZXg/OiBudW1iZXI7XG4gIHNlYXJjaElkPzogc3RyaW5nO1xuICByZWNvcmRMaXN0PzogUmVjb3JkTGlzdDtcbiAgc2VhcmNoUm93TGlzdD86IFNlYXJjaFJvd0xpc3Q7XG59O1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc3RhdHVzOiBTdGF0dXM7XG4gIHRvdGFsUmVjb3Jkcz86IG51bWJlcjtcbiAgcGFnZVNpemU/OiBudW1iZXI7XG4gIHRvdGFsUGFnZXM/OiBudW1iZXI7XG4gIHBhZ2VJbmRleD86IG51bWJlcjtcbiAgc2VhcmNoSWQ/OiBzdHJpbmc7XG4gIHJlY29yZExpc3Q/OiBSZWNvcmRMaXN0O1xuICBzZWFyY2hSb3dMaXN0PzogU2VhcmNoUm93TGlzdDtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlYXJjaFJlc3VsdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zdGF0dXMgPSBwcm9wcy5zdGF0dXM7XG4gICAgdGhpcy50b3RhbFJlY29yZHMgPSBwcm9wcy50b3RhbFJlY29yZHM7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IHByb3BzLnBhZ2VTaXplO1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHByb3BzLnRvdGFsUGFnZXM7XG4gICAgdGhpcy5wYWdlSW5kZXggPSBwcm9wcy5wYWdlSW5kZXg7XG4gICAgdGhpcy5zZWFyY2hJZCA9IHByb3BzLnNlYXJjaElkO1xuICAgIHRoaXMucmVjb3JkTGlzdCA9IHByb3BzLnJlY29yZExpc3Q7XG4gICAgdGhpcy5zZWFyY2hSb3dMaXN0ID0gcHJvcHMuc2VhcmNoUm93TGlzdDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBHZXRDdXJyZW5jeVJhdGVSZXN1bHRQcm9wcyA9IHtcbiAgc3RhdHVzOiBTdGF0dXM7XG4gIGN1cnJlbmN5UmF0ZUxpc3Q/OiBDdXJyZW5jeVJhdGVMaXN0O1xufTtcblxuZXhwb3J0IGNsYXNzIEdldEN1cnJlbmN5UmF0ZVJlc3VsdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHN0YXR1czogU3RhdHVzO1xuICBjdXJyZW5jeVJhdGVMaXN0PzogQ3VycmVuY3lSYXRlTGlzdDtcbiAgY29uc3RydWN0b3IocHJvcHM6IEdldEN1cnJlbmN5UmF0ZVJlc3VsdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zdGF0dXMgPSBwcm9wcy5zdGF0dXM7XG4gICAgdGhpcy5jdXJyZW5jeVJhdGVMaXN0ID0gcHJvcHMuY3VycmVuY3lSYXRlTGlzdDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWxlY3RDdXN0b21GaWVsZFJlZlByb3BzID0ge1xuICB2YWx1ZTogTGlzdE9yUmVjb3JkUmVmO1xufSAmIEN1c3RvbUZpZWxkUmVmUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RDdXN0b21GaWVsZFJlZiBleHRlbmRzIEN1c3RvbUZpZWxkUmVmIHtcbiAgdmFsdWU6IExpc3RPclJlY29yZFJlZjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlbGVjdEN1c3RvbUZpZWxkUmVmUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnZhbHVlID0gcHJvcHMudmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUmVjb3JkUmVmTGlzdFByb3BzID0ge1xuICByZWNvcmRSZWY/OiBSZWNvcmRSZWZbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBSZWNvcmRSZWZMaXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgcmVjb3JkUmVmPzogUmVjb3JkUmVmW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBSZWNvcmRSZWZMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnJlY29yZFJlZiA9IHByb3BzLnJlY29yZFJlZjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hEb3VibGVGaWVsZFByb3BzID0ge1xuICBzZWFyY2hWYWx1ZT86IG51bWJlcjtcbiAgc2VhcmNoVmFsdWUyPzogbnVtYmVyO1xuICBvcGVyYXRvcj86IFBsYXRmb3JtQ29yZVR5cGVzLlNlYXJjaERvdWJsZUZpZWxkT3BlcmF0b3I7XG59O1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoRG91YmxlRmllbGQgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBzZWFyY2hWYWx1ZT86IG51bWJlcjtcbiAgc2VhcmNoVmFsdWUyPzogbnVtYmVyO1xuICBvcGVyYXRvcj86IFBsYXRmb3JtQ29yZVR5cGVzLlNlYXJjaERvdWJsZUZpZWxkT3BlcmF0b3I7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTZWFyY2hEb3VibGVGaWVsZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHByb3BzLnNlYXJjaFZhbHVlO1xuICAgIHRoaXMuc2VhcmNoVmFsdWUyID0gcHJvcHMuc2VhcmNoVmFsdWUyO1xuICAgIHRoaXMub3BlcmF0b3IgPSBwcm9wcy5vcGVyYXRvcjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hSb3dMaXN0UHJvcHMgPSB7XG4gIHNlYXJjaFJvdz86IFNlYXJjaFJvd1tdO1xufTtcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFJvd0xpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBzZWFyY2hSb3c/OiBTZWFyY2hSb3dbXTtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlYXJjaFJvd0xpc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc2VhcmNoUm93ID0gcHJvcHMuc2VhcmNoUm93O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFzeW5jU3RhdHVzUmVzdWx0UHJvcHMgPSB7XG4gIGpvYklkOiBzdHJpbmc7XG4gIHN0YXR1czogUGxhdGZvcm1Db3JlVHlwZXMuQXN5bmNTdGF0dXNUeXBlO1xuICBwZXJjZW50Q29tcGxldGVkOiBudW1iZXI7XG4gIGVzdFJlbWFpbmluZ0R1cmF0aW9uOiBudW1iZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgQXN5bmNTdGF0dXNSZXN1bHQgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBqb2JJZDogc3RyaW5nO1xuICBzdGF0dXM6IFBsYXRmb3JtQ29yZVR5cGVzLkFzeW5jU3RhdHVzVHlwZTtcbiAgcGVyY2VudENvbXBsZXRlZDogbnVtYmVyO1xuICBlc3RSZW1haW5pbmdEdXJhdGlvbjogbnVtYmVyO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQXN5bmNTdGF0dXNSZXN1bHRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuam9iSWQgPSBwcm9wcy5qb2JJZDtcbiAgICB0aGlzLnN0YXR1cyA9IHByb3BzLnN0YXR1cztcbiAgICB0aGlzLnBlcmNlbnRDb21wbGV0ZWQgPSBwcm9wcy5wZXJjZW50Q29tcGxldGVkO1xuICAgIHRoaXMuZXN0UmVtYWluaW5nRHVyYXRpb24gPSBwcm9wcy5lc3RSZW1haW5pbmdEdXJhdGlvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUm93QmFzaWMgZXh0ZW5kcyBTZWFyY2hSb3cge31cblxuZXhwb3J0IHR5cGUgQ2hhbmdlRW1haWxQcm9wcyA9IHtcbiAgY3VycmVudFBhc3N3b3JkOiBzdHJpbmc7XG4gIG5ld0VtYWlsOiBzdHJpbmc7XG4gIG5ld0VtYWlsMjogc3RyaW5nO1xuICBqdXN0VGhpc0FjY291bnQ/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIENoYW5nZUVtYWlsIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgY3VycmVudFBhc3N3b3JkOiBzdHJpbmc7XG4gIG5ld0VtYWlsOiBzdHJpbmc7XG4gIG5ld0VtYWlsMjogc3RyaW5nO1xuICBqdXN0VGhpc0FjY291bnQ/OiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQ2hhbmdlRW1haWxQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuY3VycmVudFBhc3N3b3JkID0gcHJvcHMuY3VycmVudFBhc3N3b3JkO1xuICAgIHRoaXMubmV3RW1haWwgPSBwcm9wcy5uZXdFbWFpbDtcbiAgICB0aGlzLm5ld0VtYWlsMiA9IHByb3BzLm5ld0VtYWlsMjtcbiAgICB0aGlzLmp1c3RUaGlzQWNjb3VudCA9IHByb3BzLmp1c3RUaGlzQWNjb3VudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVjb3JkIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHt9XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hSZWNvcmRCYXNpYyBleHRlbmRzIFNlYXJjaFJlY29yZCB7fVxuXG5leHBvcnQgdHlwZSBTZWFyY2hDdXN0b21GaWVsZExpc3RQcm9wcyA9IHtcbiAgY3VzdG9tRmllbGQ/OiBTZWFyY2hDdXN0b21GaWVsZFtdO1xufTtcblxuZXhwb3J0IGNsYXNzIFNlYXJjaEN1c3RvbUZpZWxkTGlzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGN1c3RvbUZpZWxkPzogU2VhcmNoQ3VzdG9tRmllbGRbXTtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlYXJjaEN1c3RvbUZpZWxkTGlzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5jdXN0b21GaWVsZCA9IHByb3BzLmN1c3RvbUZpZWxkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIERlbGV0aW9uUmVhc29uUHJvcHMgPSB7XG4gIGRlbGV0aW9uUmVhc29uQ29kZTogUmVjb3JkUmVmO1xuICBkZWxldGlvblJlYXNvbk1lbW8/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgRGVsZXRpb25SZWFzb24gZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBkZWxldGlvblJlYXNvbkNvZGU6IFJlY29yZFJlZjtcbiAgZGVsZXRpb25SZWFzb25NZW1vPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogRGVsZXRpb25SZWFzb25Qcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZGVsZXRpb25SZWFzb25Db2RlID0gcHJvcHMuZGVsZXRpb25SZWFzb25Db2RlO1xuICAgIHRoaXMuZGVsZXRpb25SZWFzb25NZW1vID0gcHJvcHMuZGVsZXRpb25SZWFzb25NZW1vO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVSZWZQcm9wcyA9IHtcbiAgdHlwZT86IFBsYXRmb3JtQ29yZVR5cGVzLkluaXRpYWxpemVSZWZUeXBlO1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xufSAmIEJhc2VSZWZQcm9wcztcblxuZXhwb3J0IGNsYXNzIEluaXRpYWxpemVSZWYgZXh0ZW5kcyBCYXNlUmVmIHtcbiAgdHlwZT86IFBsYXRmb3JtQ29yZVR5cGVzLkluaXRpYWxpemVSZWZUeXBlO1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogSW5pdGlhbGl6ZVJlZlByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy50eXBlID0gcHJvcHMudHlwZTtcbiAgICB0aGlzLmludGVybmFsSWQgPSBwcm9wcy5pbnRlcm5hbElkO1xuICAgIHRoaXMuZXh0ZXJuYWxJZCA9IHByb3BzLmV4dGVybmFsSWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQXR0YWNoUmVmZXJlbmNlUHJvcHMgPSB7XG4gIGF0dGFjaFRvOiBCYXNlUmVmO1xufTtcblxuZXhwb3J0IGNsYXNzIEF0dGFjaFJlZmVyZW5jZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGF0dGFjaFRvOiBCYXNlUmVmO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQXR0YWNoUmVmZXJlbmNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmF0dGFjaFRvID0gcHJvcHMuYXR0YWNoVG87XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQXR0YWNoQ29udGFjdFJlZmVyZW5jZVByb3BzID0ge1xuICBjb250YWN0OiBSZWNvcmRSZWY7XG4gIGNvbnRhY3RSb2xlPzogUmVjb3JkUmVmO1xufSAmIEF0dGFjaFJlZmVyZW5jZVByb3BzO1xuXG5leHBvcnQgY2xhc3MgQXR0YWNoQ29udGFjdFJlZmVyZW5jZSBleHRlbmRzIEF0dGFjaFJlZmVyZW5jZSB7XG4gIGNvbnRhY3Q6IFJlY29yZFJlZjtcbiAgY29udGFjdFJvbGU/OiBSZWNvcmRSZWY7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBBdHRhY2hDb250YWN0UmVmZXJlbmNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmNvbnRhY3QgPSBwcm9wcy5jb250YWN0O1xuICAgIHRoaXMuY29udGFjdFJvbGUgPSBwcm9wcy5jb250YWN0Um9sZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hDb2x1bW5Cb29sZWFuRmllbGRQcm9wcyA9IHtcbiAgc2VhcmNoVmFsdWU/OiBib29sZWFuO1xufSAmIFNlYXJjaENvbHVtbkZpZWxkUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hDb2x1bW5Cb29sZWFuRmllbGQgZXh0ZW5kcyBTZWFyY2hDb2x1bW5GaWVsZCB7XG4gIHNlYXJjaFZhbHVlPzogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlYXJjaENvbHVtbkJvb2xlYW5GaWVsZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHByb3BzLnNlYXJjaFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFJlY29yZFByb3BzID0ge1xuICBudWxsRmllbGRMaXN0PzogTnVsbEZpZWxkO1xufTtcblxuZXhwb3J0IGNsYXNzIFJlY29yZCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIG51bGxGaWVsZExpc3Q/OiBOdWxsRmllbGQ7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBSZWNvcmRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMubnVsbEZpZWxkTGlzdCA9IHByb3BzLm51bGxGaWVsZExpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQXR0YWNoQmFzaWNSZWZlcmVuY2VQcm9wcyA9IHtcbiAgYXR0YWNoZWRSZWNvcmQ6IEJhc2VSZWY7XG59ICYgQXR0YWNoUmVmZXJlbmNlUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBBdHRhY2hCYXNpY1JlZmVyZW5jZSBleHRlbmRzIEF0dGFjaFJlZmVyZW5jZSB7XG4gIGF0dGFjaGVkUmVjb3JkOiBCYXNlUmVmO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQXR0YWNoQmFzaWNSZWZlcmVuY2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuYXR0YWNoZWRSZWNvcmQgPSBwcm9wcy5hdHRhY2hlZFJlY29yZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hCb29sZWFuRmllbGQgPSBib29sZWFuIHwgeyBzZWFyY2hWYWx1ZT86IGJvb2xlYW4gfTtcblxuZXhwb3J0IHR5cGUgTnVsbEZpZWxkUHJvcHMgPSB7XG4gIG5hbWU/OiBzdHJpbmdbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBOdWxsRmllbGQgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBuYW1lPzogc3RyaW5nW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBOdWxsRmllbGRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0SXRlbUF2YWlsYWJpbGl0eVJlc3VsdFByb3BzID0ge1xuICBzdGF0dXM6IFN0YXR1cztcbiAgaXRlbUF2YWlsYWJpbGl0eUxpc3Q/OiBJdGVtQXZhaWxhYmlsaXR5TGlzdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXRJdGVtQXZhaWxhYmlsaXR5UmVzdWx0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc3RhdHVzOiBTdGF0dXM7XG4gIGl0ZW1BdmFpbGFiaWxpdHlMaXN0PzogSXRlbUF2YWlsYWJpbGl0eUxpc3Q7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBHZXRJdGVtQXZhaWxhYmlsaXR5UmVzdWx0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnN0YXR1cyA9IHByb3BzLnN0YXR1cztcbiAgICB0aGlzLml0ZW1BdmFpbGFiaWxpdHlMaXN0ID0gcHJvcHMuaXRlbUF2YWlsYWJpbGl0eUxpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2VhcmNoQ29sdW1uVGV4dE51bWJlckZpZWxkUHJvcHMgPSB7XG4gIHNlYXJjaFZhbHVlPzogc3RyaW5nO1xufSAmIFNlYXJjaENvbHVtbkZpZWxkUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hDb2x1bW5UZXh0TnVtYmVyRmllbGQgZXh0ZW5kcyBTZWFyY2hDb2x1bW5GaWVsZCB7XG4gIHNlYXJjaFZhbHVlPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VhcmNoQ29sdW1uVGV4dE51bWJlckZpZWxkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gcHJvcHMuc2VhcmNoVmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgSXRlbUF2YWlsYWJpbGl0eVByb3BzID0ge1xuICBpdGVtOiBSZWNvcmRSZWY7XG4gIGxhc3RRdHlBdmFpbGFibGVDaGFuZ2U/OiBzdHJpbmc7XG4gIGxvY2F0aW9uSWQ/OiBSZWNvcmRSZWY7XG4gIHF1YW50aXR5T25IYW5kPzogbnVtYmVyO1xuICBvbkhhbmRWYWx1ZU1saT86IG51bWJlcjtcbiAgcmVvcmRlclBvaW50PzogbnVtYmVyO1xuICBwcmVmZXJyZWRTdG9ja0xldmVsPzogbnVtYmVyO1xuICBxdWFudGl0eU9uT3JkZXI/OiBudW1iZXI7XG4gIHF1YW50aXR5Q29tbWl0dGVkPzogbnVtYmVyO1xuICBxdWFudGl0eUJhY2tPcmRlcmVkPzogbnVtYmVyO1xuICBxdWFudGl0eUF2YWlsYWJsZT86IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjbGFzcyBJdGVtQXZhaWxhYmlsaXR5IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgaXRlbTogUmVjb3JkUmVmO1xuICBsYXN0UXR5QXZhaWxhYmxlQ2hhbmdlPzogc3RyaW5nO1xuICBsb2NhdGlvbklkPzogUmVjb3JkUmVmO1xuICBxdWFudGl0eU9uSGFuZD86IG51bWJlcjtcbiAgb25IYW5kVmFsdWVNbGk/OiBudW1iZXI7XG4gIHJlb3JkZXJQb2ludD86IG51bWJlcjtcbiAgcHJlZmVycmVkU3RvY2tMZXZlbD86IG51bWJlcjtcbiAgcXVhbnRpdHlPbk9yZGVyPzogbnVtYmVyO1xuICBxdWFudGl0eUNvbW1pdHRlZD86IG51bWJlcjtcbiAgcXVhbnRpdHlCYWNrT3JkZXJlZD86IG51bWJlcjtcbiAgcXVhbnRpdHlBdmFpbGFibGU/OiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJdGVtQXZhaWxhYmlsaXR5UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLml0ZW0gPSBwcm9wcy5pdGVtO1xuICAgIHRoaXMubGFzdFF0eUF2YWlsYWJsZUNoYW5nZSA9IHByb3BzLmxhc3RRdHlBdmFpbGFibGVDaGFuZ2U7XG4gICAgdGhpcy5sb2NhdGlvbklkID0gcHJvcHMubG9jYXRpb25JZDtcbiAgICB0aGlzLnF1YW50aXR5T25IYW5kID0gcHJvcHMucXVhbnRpdHlPbkhhbmQ7XG4gICAgdGhpcy5vbkhhbmRWYWx1ZU1saSA9IHByb3BzLm9uSGFuZFZhbHVlTWxpO1xuICAgIHRoaXMucmVvcmRlclBvaW50ID0gcHJvcHMucmVvcmRlclBvaW50O1xuICAgIHRoaXMucHJlZmVycmVkU3RvY2tMZXZlbCA9IHByb3BzLnByZWZlcnJlZFN0b2NrTGV2ZWw7XG4gICAgdGhpcy5xdWFudGl0eU9uT3JkZXIgPSBwcm9wcy5xdWFudGl0eU9uT3JkZXI7XG4gICAgdGhpcy5xdWFudGl0eUNvbW1pdHRlZCA9IHByb3BzLnF1YW50aXR5Q29tbWl0dGVkO1xuICAgIHRoaXMucXVhbnRpdHlCYWNrT3JkZXJlZCA9IHByb3BzLnF1YW50aXR5QmFja09yZGVyZWQ7XG4gICAgdGhpcy5xdWFudGl0eUF2YWlsYWJsZSA9IHByb3BzLnF1YW50aXR5QXZhaWxhYmxlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEN1cnJlbmN5UmF0ZUZpbHRlclByb3BzID0ge1xuICBiYXNlQ3VycmVuY3k/OiBSZWNvcmRSZWY7XG4gIGZyb21DdXJyZW5jeT86IFJlY29yZFJlZjtcbiAgZWZmZWN0aXZlRGF0ZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVJhdGVGaWx0ZXIgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBiYXNlQ3VycmVuY3k/OiBSZWNvcmRSZWY7XG4gIGZyb21DdXJyZW5jeT86IFJlY29yZFJlZjtcbiAgZWZmZWN0aXZlRGF0ZT86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IEN1cnJlbmN5UmF0ZUZpbHRlclByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5iYXNlQ3VycmVuY3kgPSBwcm9wcy5iYXNlQ3VycmVuY3k7XG4gICAgdGhpcy5mcm9tQ3VycmVuY3kgPSBwcm9wcy5mcm9tQ3VycmVuY3k7XG4gICAgdGhpcy5lZmZlY3RpdmVEYXRlID0gcHJvcHMuZWZmZWN0aXZlRGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBSZWNvcmRMaXN0UHJvcHMgPSB7XG4gIHJlY29yZD86IFJlY29yZFtdO1xufTtcblxuZXhwb3J0IGNsYXNzIFJlY29yZExpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICByZWNvcmQ/OiBSZWNvcmRbXTtcbiAgY29uc3RydWN0b3IocHJvcHM6IFJlY29yZExpc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMucmVjb3JkID0gcHJvcHMucmVjb3JkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdldFNlbGVjdFZhbHVlRmllbGREZXNjcmlwdGlvblByb3BzID0ge1xuICByZWNvcmRUeXBlPzogUGxhdGZvcm1Db3JlVHlwZXMuUmVjb3JkVHlwZTtcbiAgY3VzdG9tUmVjb3JkVHlwZT86IFJlY29yZFJlZjtcbiAgY3VzdG9tVHJhbnNhY3Rpb25UeXBlPzogUmVjb3JkUmVmO1xuICBzdWJsaXN0Pzogc3RyaW5nO1xuICBmaWVsZDogc3RyaW5nO1xuICBjdXN0b21Gb3JtPzogUmVjb3JkUmVmO1xuICBmaWx0ZXI/OiBHZXRTZWxlY3RWYWx1ZUZpbHRlcjtcbiAgZmlsdGVyQnlWYWx1ZUxpc3Q/OiBHZXRTZWxlY3RGaWx0ZXJCeUZpZWxkVmFsdWVMaXN0O1xufTtcblxuZXhwb3J0IGNsYXNzIEdldFNlbGVjdFZhbHVlRmllbGREZXNjcmlwdGlvbiBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHJlY29yZFR5cGU/OiBQbGF0Zm9ybUNvcmVUeXBlcy5SZWNvcmRUeXBlO1xuICBjdXN0b21SZWNvcmRUeXBlPzogUmVjb3JkUmVmO1xuICBjdXN0b21UcmFuc2FjdGlvblR5cGU/OiBSZWNvcmRSZWY7XG4gIHN1Ymxpc3Q/OiBzdHJpbmc7XG4gIGZpZWxkOiBzdHJpbmc7XG4gIGN1c3RvbUZvcm0/OiBSZWNvcmRSZWY7XG4gIGZpbHRlcj86IEdldFNlbGVjdFZhbHVlRmlsdGVyO1xuICBmaWx0ZXJCeVZhbHVlTGlzdD86IEdldFNlbGVjdEZpbHRlckJ5RmllbGRWYWx1ZUxpc3Q7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBHZXRTZWxlY3RWYWx1ZUZpZWxkRGVzY3JpcHRpb25Qcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMucmVjb3JkVHlwZSA9IHByb3BzLnJlY29yZFR5cGU7XG4gICAgdGhpcy5jdXN0b21SZWNvcmRUeXBlID0gcHJvcHMuY3VzdG9tUmVjb3JkVHlwZTtcbiAgICB0aGlzLmN1c3RvbVRyYW5zYWN0aW9uVHlwZSA9IHByb3BzLmN1c3RvbVRyYW5zYWN0aW9uVHlwZTtcbiAgICB0aGlzLnN1Ymxpc3QgPSBwcm9wcy5zdWJsaXN0O1xuICAgIHRoaXMuZmllbGQgPSBwcm9wcy5maWVsZDtcbiAgICB0aGlzLmN1c3RvbUZvcm0gPSBwcm9wcy5jdXN0b21Gb3JtO1xuICAgIHRoaXMuZmlsdGVyID0gcHJvcHMuZmlsdGVyO1xuICAgIHRoaXMuZmlsdGVyQnlWYWx1ZUxpc3QgPSBwcm9wcy5maWx0ZXJCeVZhbHVlTGlzdDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCb29sZWFuQ3VzdG9tRmllbGRSZWZQcm9wcyA9IHtcbiAgdmFsdWU6IGJvb2xlYW47XG59ICYgQ3VzdG9tRmllbGRSZWZQcm9wcztcblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5DdXN0b21GaWVsZFJlZiBleHRlbmRzIEN1c3RvbUZpZWxkUmVmIHtcbiAgdmFsdWU6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBCb29sZWFuQ3VzdG9tRmllbGRSZWZQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMudmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hDb2x1bW5TZWxlY3RGaWVsZFByb3BzID0ge1xuICBzZWFyY2hWYWx1ZT86IFJlY29yZFJlZjtcbn0gJiBTZWFyY2hDb2x1bW5GaWVsZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29sdW1uU2VsZWN0RmllbGQgZXh0ZW5kcyBTZWFyY2hDb2x1bW5GaWVsZCB7XG4gIHNlYXJjaFZhbHVlPzogUmVjb3JkUmVmO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VhcmNoQ29sdW1uU2VsZWN0RmllbGRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSBwcm9wcy5zZWFyY2hWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBEZWxldGVkUmVjb3JkUHJvcHMgPSB7XG4gIGRlbGV0ZWREYXRlPzogc3RyaW5nO1xuICByZWNvcmQ/OiBCYXNlUmVmO1xufTtcblxuZXhwb3J0IGNsYXNzIERlbGV0ZWRSZWNvcmQgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBkZWxldGVkRGF0ZT86IHN0cmluZztcbiAgcmVjb3JkPzogQmFzZVJlZjtcbiAgY29uc3RydWN0b3IocHJvcHM6IERlbGV0ZWRSZWNvcmRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZGVsZXRlZERhdGUgPSBwcm9wcy5kZWxldGVkRGF0ZTtcbiAgICB0aGlzLnJlY29yZCA9IHByb3BzLnJlY29yZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBXc1JvbGVQcm9wcyA9IHtcbiAgcm9sZT86IFJlY29yZFJlZjtcbiAgaXNEZWZhdWx0PzogYm9vbGVhbjtcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGlzTG9nZ2VkSW5Sb2xlPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjbGFzcyBXc1JvbGUgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICByb2xlPzogUmVjb3JkUmVmO1xuICBpc0RlZmF1bHQ/OiBib29sZWFuO1xuICBpc0luYWN0aXZlPzogYm9vbGVhbjtcbiAgaXNMb2dnZWRJblJvbGU/OiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogV3NSb2xlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnJvbGUgPSBwcm9wcy5yb2xlO1xuICAgIHRoaXMuaXNEZWZhdWx0ID0gcHJvcHMuaXNEZWZhdWx0O1xuICAgIHRoaXMuaXNJbmFjdGl2ZSA9IHByb3BzLmlzSW5hY3RpdmU7XG4gICAgdGhpcy5pc0xvZ2dlZEluUm9sZSA9IHByb3BzLmlzTG9nZ2VkSW5Sb2xlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdldERlbGV0ZWRSZXN1bHRQcm9wcyA9IHtcbiAgc3RhdHVzOiBTdGF0dXM7XG4gIHRvdGFsUmVjb3Jkcz86IG51bWJlcjtcbiAgcGFnZVNpemU/OiBudW1iZXI7XG4gIHRvdGFsUGFnZXM/OiBudW1iZXI7XG4gIHBhZ2VJbmRleD86IG51bWJlcjtcbiAgZGVsZXRlZFJlY29yZExpc3Q/OiBEZWxldGVkUmVjb3JkTGlzdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXREZWxldGVkUmVzdWx0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc3RhdHVzOiBTdGF0dXM7XG4gIHRvdGFsUmVjb3Jkcz86IG51bWJlcjtcbiAgcGFnZVNpemU/OiBudW1iZXI7XG4gIHRvdGFsUGFnZXM/OiBudW1iZXI7XG4gIHBhZ2VJbmRleD86IG51bWJlcjtcbiAgZGVsZXRlZFJlY29yZExpc3Q/OiBEZWxldGVkUmVjb3JkTGlzdDtcbiAgY29uc3RydWN0b3IocHJvcHM6IEdldERlbGV0ZWRSZXN1bHRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc3RhdHVzID0gcHJvcHMuc3RhdHVzO1xuICAgIHRoaXMudG90YWxSZWNvcmRzID0gcHJvcHMudG90YWxSZWNvcmRzO1xuICAgIHRoaXMucGFnZVNpemUgPSBwcm9wcy5wYWdlU2l6ZTtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSBwcm9wcy50b3RhbFBhZ2VzO1xuICAgIHRoaXMucGFnZUluZGV4ID0gcHJvcHMucGFnZUluZGV4O1xuICAgIHRoaXMuZGVsZXRlZFJlY29yZExpc3QgPSBwcm9wcy5kZWxldGVkUmVjb3JkTGlzdDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBNdWx0aVNlbGVjdEN1c3RvbUZpZWxkUmVmUHJvcHMgPSB7XG4gIHZhbHVlOiBMaXN0T3JSZWNvcmRSZWZbXTtcbn0gJiBDdXN0b21GaWVsZFJlZlByb3BzO1xuXG5leHBvcnQgY2xhc3MgTXVsdGlTZWxlY3RDdXN0b21GaWVsZFJlZiBleHRlbmRzIEN1c3RvbUZpZWxkUmVmIHtcbiAgdmFsdWU6IExpc3RPclJlY29yZFJlZltdO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogTXVsdGlTZWxlY3RDdXN0b21GaWVsZFJlZlByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy52YWx1ZSA9IHByb3BzLnZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNlYXJjaENvbHVtbkxvbmdGaWVsZFByb3BzID0ge1xuICBzZWFyY2hWYWx1ZT86IG51bWJlcjtcbn0gJiBTZWFyY2hDb2x1bW5GaWVsZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29sdW1uTG9uZ0ZpZWxkIGV4dGVuZHMgU2VhcmNoQ29sdW1uRmllbGQge1xuICBzZWFyY2hWYWx1ZT86IG51bWJlcjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlYXJjaENvbHVtbkxvbmdGaWVsZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHByb3BzLnNlYXJjaFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdldFNlbGVjdEZpbHRlckJ5RmllbGRWYWx1ZVByb3BzID0ge1xuICBzdWJsaXN0Pzogc3RyaW5nO1xuICBmaWVsZDogc3RyaW5nO1xuICBpbnRlcm5hbElkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgR2V0U2VsZWN0RmlsdGVyQnlGaWVsZFZhbHVlIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc3VibGlzdD86IHN0cmluZztcbiAgZmllbGQ6IHN0cmluZztcbiAgaW50ZXJuYWxJZDogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0U2VsZWN0RmlsdGVyQnlGaWVsZFZhbHVlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnN1Ymxpc3QgPSBwcm9wcy5zdWJsaXN0O1xuICAgIHRoaXMuZmllbGQgPSBwcm9wcy5maWVsZDtcbiAgICB0aGlzLmludGVybmFsSWQgPSBwcm9wcy5pbnRlcm5hbElkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdldERlbGV0ZWRGaWx0ZXJQcm9wcyA9IHtcbiAgZGVsZXRlZERhdGU/OiBTZWFyY2hEYXRlRmllbGQ7XG4gIHR5cGU/OiBTZWFyY2hFbnVtTXVsdGlTZWxlY3RGaWVsZDtcbiAgc2NyaXB0SWQ/OiBTZWFyY2hTdHJpbmdGaWVsZDtcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXREZWxldGVkRmlsdGVyIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgZGVsZXRlZERhdGU/OiBTZWFyY2hEYXRlRmllbGQ7XG4gIHR5cGU/OiBTZWFyY2hFbnVtTXVsdGlTZWxlY3RGaWVsZDtcbiAgc2NyaXB0SWQ/OiBTZWFyY2hTdHJpbmdGaWVsZDtcbiAgY29uc3RydWN0b3IocHJvcHM6IEdldERlbGV0ZWRGaWx0ZXJQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZGVsZXRlZERhdGUgPSBwcm9wcy5kZWxldGVkRGF0ZTtcbiAgICB0aGlzLnR5cGUgPSBwcm9wcy50eXBlO1xuICAgIHRoaXMuc2NyaXB0SWQgPSBwcm9wcy5zY3JpcHRJZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBJdGVtQXZhaWxhYmlsaXR5TGlzdFByb3BzID0ge1xuICBpdGVtQXZhaWxhYmlsaXR5OiBJdGVtQXZhaWxhYmlsaXR5W107XG59O1xuXG5leHBvcnQgY2xhc3MgSXRlbUF2YWlsYWJpbGl0eUxpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBpdGVtQXZhaWxhYmlsaXR5OiBJdGVtQXZhaWxhYmlsaXR5W107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJdGVtQXZhaWxhYmlsaXR5TGlzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5pdGVtQXZhaWxhYmlsaXR5ID0gcHJvcHMuaXRlbUF2YWlsYWJpbGl0eTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hEYXRlRmllbGRQcm9wcyA9IHtcbiAgcHJlZGVmaW5lZFNlYXJjaFZhbHVlPzogUGxhdGZvcm1Db3JlVHlwZXMuU2VhcmNoRGF0ZTtcbiAgc2VhcmNoVmFsdWU/OiBzdHJpbmc7XG4gIHNlYXJjaFZhbHVlMj86IHN0cmluZztcbiAgb3BlcmF0b3I/OiBQbGF0Zm9ybUNvcmVUeXBlcy5TZWFyY2hEYXRlRmllbGRPcGVyYXRvcjtcbn07XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hEYXRlRmllbGQgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBwcmVkZWZpbmVkU2VhcmNoVmFsdWU/OiBQbGF0Zm9ybUNvcmVUeXBlcy5TZWFyY2hEYXRlO1xuICBzZWFyY2hWYWx1ZT86IHN0cmluZztcbiAgc2VhcmNoVmFsdWUyPzogc3RyaW5nO1xuICBvcGVyYXRvcj86IFBsYXRmb3JtQ29yZVR5cGVzLlNlYXJjaERhdGVGaWVsZE9wZXJhdG9yO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VhcmNoRGF0ZUZpZWxkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnByZWRlZmluZWRTZWFyY2hWYWx1ZSA9IHByb3BzLnByZWRlZmluZWRTZWFyY2hWYWx1ZTtcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gcHJvcHMuc2VhcmNoVmFsdWU7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZTIgPSBwcm9wcy5zZWFyY2hWYWx1ZTI7XG4gICAgdGhpcy5vcGVyYXRvciA9IHByb3BzLm9wZXJhdG9yO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNlYXJjaENvbHVtblNlbGVjdEN1c3RvbUZpZWxkUHJvcHMgPSB7XG4gIHNlYXJjaFZhbHVlPzogTGlzdE9yUmVjb3JkUmVmO1xufSAmIFNlYXJjaENvbHVtbkN1c3RvbUZpZWxkUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hDb2x1bW5TZWxlY3RDdXN0b21GaWVsZCBleHRlbmRzIFNlYXJjaENvbHVtbkN1c3RvbUZpZWxkIHtcbiAgc2VhcmNoVmFsdWU/OiBMaXN0T3JSZWNvcmRSZWY7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTZWFyY2hDb2x1bW5TZWxlY3RDdXN0b21GaWVsZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHByb3BzLnNlYXJjaFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdldERhdGFDZW50ZXJVcmxzUmVzdWx0UHJvcHMgPSB7XG4gIHN0YXR1czogU3RhdHVzO1xuICBkYXRhQ2VudGVyVXJscz86IERhdGFDZW50ZXJVcmxzO1xufTtcblxuZXhwb3J0IGNsYXNzIEdldERhdGFDZW50ZXJVcmxzUmVzdWx0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc3RhdHVzOiBTdGF0dXM7XG4gIGRhdGFDZW50ZXJVcmxzPzogRGF0YUNlbnRlclVybHM7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBHZXREYXRhQ2VudGVyVXJsc1Jlc3VsdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zdGF0dXMgPSBwcm9wcy5zdGF0dXM7XG4gICAgdGhpcy5kYXRhQ2VudGVyVXJscyA9IHByb3BzLmRhdGFDZW50ZXJVcmxzO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnlMaXN0UHJvcHMgPSB7XG4gIHBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnk6IFBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnlbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBQb3N0aW5nVHJhbnNhY3Rpb25TdW1tYXJ5TGlzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnk6IFBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnlbXTtcbiAgY29uc3RydWN0b3IocHJvcHM6IFBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnlMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnkgPSBwcm9wcy5wb3N0aW5nVHJhbnNhY3Rpb25TdW1tYXJ5O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIERpbWVuc2lvblJlZlByb3BzID0ge1xuICBzY3JpcHRJZD86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBEaW1lbnNpb25SZWYgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBzY3JpcHRJZD86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IERpbWVuc2lvblJlZlByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zY3JpcHRJZCA9IHByb3BzLnNjcmlwdElkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNlYXJjaExvbmdGaWVsZFByb3BzID0ge1xuICBzZWFyY2hWYWx1ZT86IG51bWJlcjtcbiAgc2VhcmNoVmFsdWUyPzogbnVtYmVyO1xuICBvcGVyYXRvcj86IFBsYXRmb3JtQ29yZVR5cGVzLlNlYXJjaExvbmdGaWVsZE9wZXJhdG9yO1xufTtcblxuZXhwb3J0IGNsYXNzIFNlYXJjaExvbmdGaWVsZCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHNlYXJjaFZhbHVlPzogbnVtYmVyO1xuICBzZWFyY2hWYWx1ZTI/OiBudW1iZXI7XG4gIG9wZXJhdG9yPzogUGxhdGZvcm1Db3JlVHlwZXMuU2VhcmNoTG9uZ0ZpZWxkT3BlcmF0b3I7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTZWFyY2hMb25nRmllbGRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSBwcm9wcy5zZWFyY2hWYWx1ZTtcbiAgICB0aGlzLnNlYXJjaFZhbHVlMiA9IHByb3BzLnNlYXJjaFZhbHVlMjtcbiAgICB0aGlzLm9wZXJhdG9yID0gcHJvcHMub3BlcmF0b3I7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ3VzdG9taXphdGlvblJlZkxpc3RQcm9wcyA9IHtcbiAgY3VzdG9taXphdGlvblJlZj86IEN1c3RvbWl6YXRpb25SZWZbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21pemF0aW9uUmVmTGlzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGN1c3RvbWl6YXRpb25SZWY/OiBDdXN0b21pemF0aW9uUmVmW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDdXN0b21pemF0aW9uUmVmTGlzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5jdXN0b21pemF0aW9uUmVmID0gcHJvcHMuY3VzdG9taXphdGlvblJlZjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBHZXRTYXZlZFNlYXJjaFJlY29yZFByb3BzID0ge1xuICBzZWFyY2hUeXBlPzogUGxhdGZvcm1Db3JlVHlwZXMuU2VhcmNoUmVjb3JkVHlwZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXRTYXZlZFNlYXJjaFJlY29yZCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHNlYXJjaFR5cGU/OiBQbGF0Zm9ybUNvcmVUeXBlcy5TZWFyY2hSZWNvcmRUeXBlO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0U2F2ZWRTZWFyY2hSZWNvcmRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc2VhcmNoVHlwZSA9IHByb3BzLnNlYXJjaFR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ3VycmVuY3lSYXRlUHJvcHMgPSB7XG4gIGJhc2VDdXJyZW5jeTogUmVjb3JkUmVmO1xuICBmcm9tQ3VycmVuY3k6IFJlY29yZFJlZjtcbiAgZXhjaGFuZ2VSYXRlOiBudW1iZXI7XG4gIGVmZmVjdGl2ZURhdGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVJhdGUgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBiYXNlQ3VycmVuY3k6IFJlY29yZFJlZjtcbiAgZnJvbUN1cnJlbmN5OiBSZWNvcmRSZWY7XG4gIGV4Y2hhbmdlUmF0ZTogbnVtYmVyO1xuICBlZmZlY3RpdmVEYXRlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDdXJyZW5jeVJhdGVQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuYmFzZUN1cnJlbmN5ID0gcHJvcHMuYmFzZUN1cnJlbmN5O1xuICAgIHRoaXMuZnJvbUN1cnJlbmN5ID0gcHJvcHMuZnJvbUN1cnJlbmN5O1xuICAgIHRoaXMuZXhjaGFuZ2VSYXRlID0gcHJvcHMuZXhjaGFuZ2VSYXRlO1xuICAgIHRoaXMuZWZmZWN0aXZlRGF0ZSA9IHByb3BzLmVmZmVjdGl2ZURhdGU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRHVyYXRpb25Qcm9wcyA9IHtcbiAgdGltZVNwYW46IG51bWJlcjtcbiAgdW5pdDogUGxhdGZvcm1Db3JlVHlwZXMuRHVyYXRpb25Vbml0O1xufTtcblxuZXhwb3J0IGNsYXNzIER1cmF0aW9uIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgdGltZVNwYW46IG51bWJlcjtcbiAgdW5pdDogUGxhdGZvcm1Db3JlVHlwZXMuRHVyYXRpb25Vbml0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogRHVyYXRpb25Qcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMudGltZVNwYW4gPSBwcm9wcy50aW1lU3BhbjtcbiAgICB0aGlzLnVuaXQgPSBwcm9wcy51bml0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEN1c3RvbWl6YXRpb25UeXBlUHJvcHMgPSB7XG4gIGdldEN1c3RvbWl6YXRpb25UeXBlPzogUGxhdGZvcm1Db3JlVHlwZXMuR2V0Q3VzdG9taXphdGlvblR5cGU7XG59O1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9taXphdGlvblR5cGUgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBnZXRDdXN0b21pemF0aW9uVHlwZT86IFBsYXRmb3JtQ29yZVR5cGVzLkdldEN1c3RvbWl6YXRpb25UeXBlO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQ3VzdG9taXphdGlvblR5cGVQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZ2V0Q3VzdG9taXphdGlvblR5cGUgPSBwcm9wcy5nZXRDdXN0b21pemF0aW9uVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hDb2x1bW5Eb3VibGVDdXN0b21GaWVsZFByb3BzID0ge1xuICBzZWFyY2hWYWx1ZT86IG51bWJlcjtcbn0gJiBTZWFyY2hDb2x1bW5DdXN0b21GaWVsZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29sdW1uRG91YmxlQ3VzdG9tRmllbGQgZXh0ZW5kcyBTZWFyY2hDb2x1bW5DdXN0b21GaWVsZCB7XG4gIHNlYXJjaFZhbHVlPzogbnVtYmVyO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VhcmNoQ29sdW1uRG91YmxlQ3VzdG9tRmllbGRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSBwcm9wcy5zZWFyY2hWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBMaXN0T3JSZWNvcmRSZWZQcm9wcyA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgZXh0ZXJuYWxJZD86IHN0cmluZztcbiAgdHlwZUlkPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIExpc3RPclJlY29yZFJlZiBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG4gIHR5cGVJZD86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IExpc3RPclJlY29yZFJlZlByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICB0aGlzLmludGVybmFsSWQgPSBwcm9wcy5pbnRlcm5hbElkO1xuICAgIHRoaXMuZXh0ZXJuYWxJZCA9IHByb3BzLmV4dGVybmFsSWQ7XG4gICAgdGhpcy50eXBlSWQgPSBwcm9wcy50eXBlSWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgTG9uZ0N1c3RvbUZpZWxkUmVmUHJvcHMgPSB7XG4gIHZhbHVlOiBudW1iZXI7XG59ICYgQ3VzdG9tRmllbGRSZWZQcm9wcztcblxuZXhwb3J0IGNsYXNzIExvbmdDdXN0b21GaWVsZFJlZiBleHRlbmRzIEN1c3RvbUZpZWxkUmVmIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgY29uc3RydWN0b3IocHJvcHM6IExvbmdDdXN0b21GaWVsZFJlZlByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy52YWx1ZSA9IHByb3BzLnZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFRva2VuUGFzc3BvcnRQcm9wcyA9IHtcbiAgYWNjb3VudDogc3RyaW5nO1xuICBjb25zdW1lcktleTogc3RyaW5nO1xuICB0b2tlbjogc3RyaW5nO1xuICBub25jZTogc3RyaW5nO1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbiAgc2lnbmF0dXJlOiBUb2tlblBhc3Nwb3J0U2lnbmF0dXJlO1xufTtcblxuZXhwb3J0IGNsYXNzIFRva2VuUGFzc3BvcnQgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBhY2NvdW50OiBzdHJpbmc7XG4gIGNvbnN1bWVyS2V5OiBzdHJpbmc7XG4gIHRva2VuOiBzdHJpbmc7XG4gIG5vbmNlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuICBzaWduYXR1cmU6IFRva2VuUGFzc3BvcnRTaWduYXR1cmU7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBUb2tlblBhc3Nwb3J0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmFjY291bnQgPSBwcm9wcy5hY2NvdW50O1xuICAgIHRoaXMuY29uc3VtZXJLZXkgPSBwcm9wcy5jb25zdW1lcktleTtcbiAgICB0aGlzLnRva2VuID0gcHJvcHMudG9rZW47XG4gICAgdGhpcy5ub25jZSA9IHByb3BzLm5vbmNlO1xuICAgIHRoaXMudGltZXN0YW1wID0gcHJvcHMudGltZXN0YW1wO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gcHJvcHMuc2lnbmF0dXJlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIERvdWJsZUN1c3RvbUZpZWxkUmVmUHJvcHMgPSB7XG4gIHZhbHVlOiBudW1iZXI7XG59ICYgQ3VzdG9tRmllbGRSZWZQcm9wcztcblxuZXhwb3J0IGNsYXNzIERvdWJsZUN1c3RvbUZpZWxkUmVmIGV4dGVuZHMgQ3VzdG9tRmllbGRSZWYge1xuICB2YWx1ZTogbnVtYmVyO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogRG91YmxlQ3VzdG9tRmllbGRSZWZQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMudmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBHZXRDdXN0b21pemF0aW9uSWRSZXN1bHRQcm9wcyA9IHtcbiAgc3RhdHVzOiBTdGF0dXM7XG4gIHRvdGFsUmVjb3Jkcz86IG51bWJlcjtcbiAgY3VzdG9taXphdGlvblJlZkxpc3Q/OiBDdXN0b21pemF0aW9uUmVmTGlzdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXRDdXN0b21pemF0aW9uSWRSZXN1bHQgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBzdGF0dXM6IFN0YXR1cztcbiAgdG90YWxSZWNvcmRzPzogbnVtYmVyO1xuICBjdXN0b21pemF0aW9uUmVmTGlzdD86IEN1c3RvbWl6YXRpb25SZWZMaXN0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0Q3VzdG9taXphdGlvbklkUmVzdWx0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnN0YXR1cyA9IHByb3BzLnN0YXR1cztcbiAgICB0aGlzLnRvdGFsUmVjb3JkcyA9IHByb3BzLnRvdGFsUmVjb3JkcztcbiAgICB0aGlzLmN1c3RvbWl6YXRpb25SZWZMaXN0ID0gcHJvcHMuY3VzdG9taXphdGlvblJlZkxpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0U2VsZWN0VmFsdWVGaWx0ZXJQcm9wcyA9IHtcbiAgZmlsdGVyVmFsdWU6IHN0cmluZztcbiAgb3BlcmF0b3I6IFBsYXRmb3JtQ29yZVR5cGVzLkdldFNlbGVjdFZhbHVlRmlsdGVyT3BlcmF0b3I7XG59O1xuXG5leHBvcnQgY2xhc3MgR2V0U2VsZWN0VmFsdWVGaWx0ZXIgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBmaWx0ZXJWYWx1ZTogc3RyaW5nO1xuICBvcGVyYXRvcjogUGxhdGZvcm1Db3JlVHlwZXMuR2V0U2VsZWN0VmFsdWVGaWx0ZXJPcGVyYXRvcjtcbiAgY29uc3RydWN0b3IocHJvcHM6IEdldFNlbGVjdFZhbHVlRmlsdGVyUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmZpbHRlclZhbHVlID0gcHJvcHMuZmlsdGVyVmFsdWU7XG4gICAgdGhpcy5vcGVyYXRvciA9IHByb3BzLm9wZXJhdG9yO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFBhc3Nwb3J0UHJvcHMgPSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGFjY291bnQ6IHN0cmluZztcbiAgcm9sZT86IFJlY29yZFJlZjtcbn07XG5cbmV4cG9ydCBjbGFzcyBQYXNzcG9ydCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGFjY291bnQ6IHN0cmluZztcbiAgcm9sZT86IFJlY29yZFJlZjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFBhc3Nwb3J0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmVtYWlsID0gcHJvcHMuZW1haWw7XG4gICAgdGhpcy5wYXNzd29yZCA9IHByb3BzLnBhc3N3b3JkO1xuICAgIHRoaXMuYWNjb3VudCA9IHByb3BzLmFjY291bnQ7XG4gICAgdGhpcy5yb2xlID0gcHJvcHMucm9sZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCdWRnZXRFeGNoYW5nZVJhdGVQcm9wcyA9IHtcbiAgcGVyaW9kOiBSZWNvcmRSZWY7XG4gIGZyb21TdWJzaWRpYXJ5OiBSZWNvcmRSZWY7XG4gIHRvU3Vic2lkaWFyeTogUmVjb3JkUmVmO1xuICBjdXJyZW50UmF0ZT86IG51bWJlcjtcbiAgYXZlcmFnZVJhdGU/OiBudW1iZXI7XG4gIGhpc3RvcmljYWxSYXRlPzogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNsYXNzIEJ1ZGdldEV4Y2hhbmdlUmF0ZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHBlcmlvZDogUmVjb3JkUmVmO1xuICBmcm9tU3Vic2lkaWFyeTogUmVjb3JkUmVmO1xuICB0b1N1YnNpZGlhcnk6IFJlY29yZFJlZjtcbiAgY3VycmVudFJhdGU/OiBudW1iZXI7XG4gIGF2ZXJhZ2VSYXRlPzogbnVtYmVyO1xuICBoaXN0b3JpY2FsUmF0ZT86IG51bWJlcjtcbiAgY29uc3RydWN0b3IocHJvcHM6IEJ1ZGdldEV4Y2hhbmdlUmF0ZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5wZXJpb2QgPSBwcm9wcy5wZXJpb2Q7XG4gICAgdGhpcy5mcm9tU3Vic2lkaWFyeSA9IHByb3BzLmZyb21TdWJzaWRpYXJ5O1xuICAgIHRoaXMudG9TdWJzaWRpYXJ5ID0gcHJvcHMudG9TdWJzaWRpYXJ5O1xuICAgIHRoaXMuY3VycmVudFJhdGUgPSBwcm9wcy5jdXJyZW50UmF0ZTtcbiAgICB0aGlzLmF2ZXJhZ2VSYXRlID0gcHJvcHMuYXZlcmFnZVJhdGU7XG4gICAgdGhpcy5oaXN0b3JpY2FsUmF0ZSA9IHByb3BzLmhpc3RvcmljYWxSYXRlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFN0YXR1c1Byb3BzID0ge1xuICBzdGF0dXNEZXRhaWw/OiBTdGF0dXNEZXRhaWxbXTtcbiAgaXNTdWNjZXNzPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjbGFzcyBTdGF0dXMgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBzdGF0dXNEZXRhaWw/OiBTdGF0dXNEZXRhaWxbXTtcbiAgaXNTdWNjZXNzPzogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFN0YXR1c1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zdGF0dXNEZXRhaWwgPSBwcm9wcy5zdGF0dXNEZXRhaWw7XG4gICAgdGhpcy5pc1N1Y2Nlc3MgPSBwcm9wcy5pc1N1Y2Nlc3M7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2VhcmNoRGF0ZUN1c3RvbUZpZWxkUHJvcHMgPSB7XG4gIHByZWRlZmluZWRTZWFyY2hWYWx1ZT86IFBsYXRmb3JtQ29yZVR5cGVzLlNlYXJjaERhdGU7XG4gIHNlYXJjaFZhbHVlPzogc3RyaW5nO1xuICBzZWFyY2hWYWx1ZTI/OiBzdHJpbmc7XG4gIG9wZXJhdG9yPzogUGxhdGZvcm1Db3JlVHlwZXMuU2VhcmNoRGF0ZUZpZWxkT3BlcmF0b3I7XG59ICYgU2VhcmNoQ3VzdG9tRmllbGRQcm9wcztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaERhdGVDdXN0b21GaWVsZCBleHRlbmRzIFNlYXJjaEN1c3RvbUZpZWxkIHtcbiAgcHJlZGVmaW5lZFNlYXJjaFZhbHVlPzogUGxhdGZvcm1Db3JlVHlwZXMuU2VhcmNoRGF0ZTtcbiAgc2VhcmNoVmFsdWU/OiBzdHJpbmc7XG4gIHNlYXJjaFZhbHVlMj86IHN0cmluZztcbiAgb3BlcmF0b3I/OiBQbGF0Zm9ybUNvcmVUeXBlcy5TZWFyY2hEYXRlRmllbGRPcGVyYXRvcjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlYXJjaERhdGVDdXN0b21GaWVsZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5wcmVkZWZpbmVkU2VhcmNoVmFsdWUgPSBwcm9wcy5wcmVkZWZpbmVkU2VhcmNoVmFsdWU7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHByb3BzLnNlYXJjaFZhbHVlO1xuICAgIHRoaXMuc2VhcmNoVmFsdWUyID0gcHJvcHMuc2VhcmNoVmFsdWUyO1xuICAgIHRoaXMub3BlcmF0b3IgPSBwcm9wcy5vcGVyYXRvcjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hNdWx0aVNlbGVjdEN1c3RvbUZpZWxkUHJvcHMgPSB7XG4gIHNlYXJjaFZhbHVlPzogTGlzdE9yUmVjb3JkUmVmW107XG4gIG9wZXJhdG9yPzogUGxhdGZvcm1Db3JlVHlwZXMuU2VhcmNoTXVsdGlTZWxlY3RGaWVsZE9wZXJhdG9yO1xufSAmIFNlYXJjaEN1c3RvbUZpZWxkUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hNdWx0aVNlbGVjdEN1c3RvbUZpZWxkIGV4dGVuZHMgU2VhcmNoQ3VzdG9tRmllbGQge1xuICBzZWFyY2hWYWx1ZT86IExpc3RPclJlY29yZFJlZltdO1xuICBvcGVyYXRvcj86IFBsYXRmb3JtQ29yZVR5cGVzLlNlYXJjaE11bHRpU2VsZWN0RmllbGRPcGVyYXRvcjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlYXJjaE11bHRpU2VsZWN0Q3VzdG9tRmllbGRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSBwcm9wcy5zZWFyY2hWYWx1ZTtcbiAgICB0aGlzLm9wZXJhdG9yID0gcHJvcHMub3BlcmF0b3I7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3RyaW5nRGltZW5zaW9uUmVmUHJvcHMgPSB7XG4gIHZhbHVlOiBzdHJpbmc7XG59ICYgRGltZW5zaW9uUmVmUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdEaW1lbnNpb25SZWYgZXh0ZW5kcyBEaW1lbnNpb25SZWYge1xuICB2YWx1ZTogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU3RyaW5nRGltZW5zaW9uUmVmUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnZhbHVlID0gcHJvcHMudmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR2V0UG9zdGluZ1RyYW5zYWN0aW9uU3VtbWFyeVJlc3VsdFByb3BzID0ge1xuICBzdGF0dXM6IFN0YXR1cztcbiAgdG90YWxSZWNvcmRzPzogbnVtYmVyO1xuICBwYWdlU2l6ZT86IG51bWJlcjtcbiAgdG90YWxQYWdlcz86IG51bWJlcjtcbiAgcGFnZUluZGV4PzogbnVtYmVyO1xuICBvcGVyYXRpb25JZD86IHN0cmluZztcbiAgcG9zdGluZ1RyYW5zYWN0aW9uU3VtbWFyeUxpc3Q/OiBQb3N0aW5nVHJhbnNhY3Rpb25TdW1tYXJ5TGlzdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXRQb3N0aW5nVHJhbnNhY3Rpb25TdW1tYXJ5UmVzdWx0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc3RhdHVzOiBTdGF0dXM7XG4gIHRvdGFsUmVjb3Jkcz86IG51bWJlcjtcbiAgcGFnZVNpemU/OiBudW1iZXI7XG4gIHRvdGFsUGFnZXM/OiBudW1iZXI7XG4gIHBhZ2VJbmRleD86IG51bWJlcjtcbiAgb3BlcmF0aW9uSWQ/OiBzdHJpbmc7XG4gIHBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnlMaXN0PzogUG9zdGluZ1RyYW5zYWN0aW9uU3VtbWFyeUxpc3Q7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBHZXRQb3N0aW5nVHJhbnNhY3Rpb25TdW1tYXJ5UmVzdWx0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnN0YXR1cyA9IHByb3BzLnN0YXR1cztcbiAgICB0aGlzLnRvdGFsUmVjb3JkcyA9IHByb3BzLnRvdGFsUmVjb3JkcztcbiAgICB0aGlzLnBhZ2VTaXplID0gcHJvcHMucGFnZVNpemU7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gcHJvcHMudG90YWxQYWdlcztcbiAgICB0aGlzLnBhZ2VJbmRleCA9IHByb3BzLnBhZ2VJbmRleDtcbiAgICB0aGlzLm9wZXJhdGlvbklkID0gcHJvcHMub3BlcmF0aW9uSWQ7XG4gICAgdGhpcy5wb3N0aW5nVHJhbnNhY3Rpb25TdW1tYXJ5TGlzdCA9IHByb3BzLnBvc3RpbmdUcmFuc2FjdGlvblN1bW1hcnlMaXN0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNlbGVjdERpbWVuc2lvblJlZlByb3BzID0ge1xuICB2YWx1ZTogTGlzdE9yUmVjb3JkUmVmO1xufSAmIERpbWVuc2lvblJlZlByb3BzO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0RGltZW5zaW9uUmVmIGV4dGVuZHMgRGltZW5zaW9uUmVmIHtcbiAgdmFsdWU6IExpc3RPclJlY29yZFJlZjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlbGVjdERpbWVuc2lvblJlZlByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy52YWx1ZSA9IHByb3BzLnZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNlYXJjaENvbHVtblN0cmluZ0N1c3RvbUZpZWxkUHJvcHMgPSB7XG4gIHNlYXJjaFZhbHVlPzogc3RyaW5nO1xufSAmIFNlYXJjaENvbHVtbkN1c3RvbUZpZWxkUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hDb2x1bW5TdHJpbmdDdXN0b21GaWVsZCBleHRlbmRzIFNlYXJjaENvbHVtbkN1c3RvbUZpZWxkIHtcbiAgc2VhcmNoVmFsdWU/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTZWFyY2hDb2x1bW5TdHJpbmdDdXN0b21GaWVsZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHByb3BzLnNlYXJjaFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdldEFsbFJlY29yZFByb3BzID0ge1xuICByZWNvcmRUeXBlPzogUGxhdGZvcm1Db3JlVHlwZXMuR2V0QWxsUmVjb3JkVHlwZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXRBbGxSZWNvcmQgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICByZWNvcmRUeXBlPzogUGxhdGZvcm1Db3JlVHlwZXMuR2V0QWxsUmVjb3JkVHlwZTtcbiAgY29uc3RydWN0b3IocHJvcHM6IEdldEFsbFJlY29yZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5yZWNvcmRUeXBlID0gcHJvcHMucmVjb3JkVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hTdHJpbmdGaWVsZFByb3BzID0ge1xuICBzZWFyY2hWYWx1ZT86IHN0cmluZztcbiAgb3BlcmF0b3I/OiBQbGF0Zm9ybUNvcmVUeXBlcy5TZWFyY2hTdHJpbmdGaWVsZE9wZXJhdG9yO1xufTtcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFN0cmluZ0ZpZWxkIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc2VhcmNoVmFsdWU/OiBzdHJpbmc7XG4gIG9wZXJhdG9yPzogUGxhdGZvcm1Db3JlVHlwZXMuU2VhcmNoU3RyaW5nRmllbGRPcGVyYXRvcjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlYXJjaFN0cmluZ0ZpZWxkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gcHJvcHMuc2VhcmNoVmFsdWU7XG4gICAgdGhpcy5vcGVyYXRvciA9IHByb3BzLm9wZXJhdG9yO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVSZWZMaXN0UHJvcHMgPSB7XG4gIGluaXRpYWxpemVSZWY/OiBJbml0aWFsaXplUmVmW107XG59O1xuXG5leHBvcnQgY2xhc3MgSW5pdGlhbGl6ZVJlZkxpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBpbml0aWFsaXplUmVmPzogSW5pdGlhbGl6ZVJlZltdO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogSW5pdGlhbGl6ZVJlZkxpc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZVJlZiA9IHByb3BzLmluaXRpYWxpemVSZWY7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2hhbmdlUGFzc3dvcmRQcm9wcyA9IHtcbiAgY3VycmVudFBhc3N3b3JkOiBzdHJpbmc7XG4gIG5ld1Bhc3N3b3JkPzogc3RyaW5nO1xuICBuZXdQYXNzd29yZDI/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmQgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBjdXJyZW50UGFzc3dvcmQ6IHN0cmluZztcbiAgbmV3UGFzc3dvcmQ/OiBzdHJpbmc7XG4gIG5ld1Bhc3N3b3JkMj86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IENoYW5nZVBhc3N3b3JkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmN1cnJlbnRQYXNzd29yZCA9IHByb3BzLmN1cnJlbnRQYXNzd29yZDtcbiAgICB0aGlzLm5ld1Bhc3N3b3JkID0gcHJvcHMubmV3UGFzc3dvcmQ7XG4gICAgdGhpcy5uZXdQYXNzd29yZDIgPSBwcm9wcy5uZXdQYXNzd29yZDI7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2VhcmNoQ29sdW1uRW51bU11bHRpU2VsZWN0Q3VzdG9tRmllbGRQcm9wcyA9IHtcbiAgc2VhcmNoVmFsdWU/OiBzdHJpbmdbXTtcbn0gJiBTZWFyY2hDb2x1bW5DdXN0b21GaWVsZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29sdW1uRW51bU11bHRpU2VsZWN0Q3VzdG9tRmllbGQgZXh0ZW5kcyBTZWFyY2hDb2x1bW5DdXN0b21GaWVsZCB7XG4gIHNlYXJjaFZhbHVlPzogc3RyaW5nW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTZWFyY2hDb2x1bW5FbnVtTXVsdGlTZWxlY3RDdXN0b21GaWVsZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHByb3BzLnNlYXJjaFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZUludml0ZWVTdGF0dXNSZWZlcmVuY2VQcm9wcyA9IHtcbiAgZXZlbnRJZDogUmVjb3JkUmVmO1xuICByZXNwb25zZUNvZGU6IFBsYXRmb3JtQ29yZVR5cGVzLkNhbGVuZGFyRXZlbnRBdHRlbmRlZVJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZUludml0ZWVTdGF0dXNSZWZlcmVuY2UgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBldmVudElkOiBSZWNvcmRSZWY7XG4gIHJlc3BvbnNlQ29kZTogUGxhdGZvcm1Db3JlVHlwZXMuQ2FsZW5kYXJFdmVudEF0dGVuZGVlUmVzcG9uc2U7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBVcGRhdGVJbnZpdGVlU3RhdHVzUmVmZXJlbmNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmV2ZW50SWQgPSBwcm9wcy5ldmVudElkO1xuICAgIHRoaXMucmVzcG9uc2VDb2RlID0gcHJvcHMucmVzcG9uc2VDb2RlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdldFNlcnZlclRpbWVSZXN1bHRQcm9wcyA9IHtcbiAgc3RhdHVzOiBTdGF0dXM7XG4gIHNlcnZlclRpbWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBHZXRTZXJ2ZXJUaW1lUmVzdWx0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc3RhdHVzOiBTdGF0dXM7XG4gIHNlcnZlclRpbWU6IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IEdldFNlcnZlclRpbWVSZXN1bHRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc3RhdHVzID0gcHJvcHMuc3RhdHVzO1xuICAgIHRoaXMuc2VydmVyVGltZSA9IHByb3BzLnNlcnZlclRpbWU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ3VzdG9tUmVjb3JkUmVmUHJvcHMgPSB7XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG4gIHR5cGVJZD86IHN0cmluZztcbiAgc2NyaXB0SWQ/OiBzdHJpbmc7XG59ICYgQmFzZVJlZlByb3BzO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tUmVjb3JkUmVmIGV4dGVuZHMgQmFzZVJlZiB7XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG4gIHR5cGVJZD86IHN0cmluZztcbiAgc2NyaXB0SWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDdXN0b21SZWNvcmRSZWZQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuaW50ZXJuYWxJZCA9IHByb3BzLmludGVybmFsSWQ7XG4gICAgdGhpcy5leHRlcm5hbElkID0gcHJvcHMuZXh0ZXJuYWxJZDtcbiAgICB0aGlzLnR5cGVJZCA9IHByb3BzLnR5cGVJZDtcbiAgICB0aGlzLnNjcmlwdElkID0gcHJvcHMuc2NyaXB0SWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQnVkZ2V0RXhjaGFuZ2VSYXRlTGlzdFByb3BzID0ge1xuICBidWRnZXRFeGNoYW5nZVJhdGU6IEJ1ZGdldEV4Y2hhbmdlUmF0ZVtdO1xufTtcblxuZXhwb3J0IGNsYXNzIEJ1ZGdldEV4Y2hhbmdlUmF0ZUxpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBidWRnZXRFeGNoYW5nZVJhdGU6IEJ1ZGdldEV4Y2hhbmdlUmF0ZVtdO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQnVkZ2V0RXhjaGFuZ2VSYXRlTGlzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5idWRnZXRFeGNoYW5nZVJhdGUgPSBwcm9wcy5idWRnZXRFeGNoYW5nZVJhdGU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgSW5pdGlhbGl6ZVJlY29yZFByb3BzID0ge1xuICB0eXBlOiBQbGF0Zm9ybUNvcmVUeXBlcy5Jbml0aWFsaXplVHlwZTtcbiAgcmVmZXJlbmNlPzogSW5pdGlhbGl6ZVJlZjtcbiAgYXV4UmVmZXJlbmNlPzogSW5pdGlhbGl6ZUF1eFJlZjtcbiAgcmVmZXJlbmNlTGlzdD86IEluaXRpYWxpemVSZWZMaXN0O1xufTtcblxuZXhwb3J0IGNsYXNzIEluaXRpYWxpemVSZWNvcmQgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICB0eXBlOiBQbGF0Zm9ybUNvcmVUeXBlcy5Jbml0aWFsaXplVHlwZTtcbiAgcmVmZXJlbmNlPzogSW5pdGlhbGl6ZVJlZjtcbiAgYXV4UmVmZXJlbmNlPzogSW5pdGlhbGl6ZUF1eFJlZjtcbiAgcmVmZXJlbmNlTGlzdD86IEluaXRpYWxpemVSZWZMaXN0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogSW5pdGlhbGl6ZVJlY29yZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy50eXBlID0gcHJvcHMudHlwZTtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHByb3BzLnJlZmVyZW5jZTtcbiAgICB0aGlzLmF1eFJlZmVyZW5jZSA9IHByb3BzLmF1eFJlZmVyZW5jZTtcbiAgICB0aGlzLnJlZmVyZW5jZUxpc3QgPSBwcm9wcy5yZWZlcmVuY2VMaXN0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNlYXJjaENvbHVtbkVudW1TZWxlY3RGaWVsZFByb3BzID0ge1xuICBzZWFyY2hWYWx1ZT86IHN0cmluZztcbn0gJiBTZWFyY2hDb2x1bW5GaWVsZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29sdW1uRW51bVNlbGVjdEZpZWxkIGV4dGVuZHMgU2VhcmNoQ29sdW1uRmllbGQge1xuICBzZWFyY2hWYWx1ZT86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlYXJjaENvbHVtbkVudW1TZWxlY3RGaWVsZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHByb3BzLnNlYXJjaFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNlYXJjaENvbHVtbkRvdWJsZUZpZWxkUHJvcHMgPSB7XG4gIHNlYXJjaFZhbHVlPzogbnVtYmVyO1xufSAmIFNlYXJjaENvbHVtbkZpZWxkUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hDb2x1bW5Eb3VibGVGaWVsZCBleHRlbmRzIFNlYXJjaENvbHVtbkZpZWxkIHtcbiAgc2VhcmNoVmFsdWU/OiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTZWFyY2hDb2x1bW5Eb3VibGVGaWVsZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHByb3BzLnNlYXJjaFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdldEJ1ZGdldEV4Y2hhbmdlUmF0ZVJlc3VsdFByb3BzID0ge1xuICBzdGF0dXM6IFN0YXR1cztcbiAgYnVkZ2V0RXhjaGFuZ2VSYXRlTGlzdD86IEJ1ZGdldEV4Y2hhbmdlUmF0ZUxpc3Q7XG59O1xuXG5leHBvcnQgY2xhc3MgR2V0QnVkZ2V0RXhjaGFuZ2VSYXRlUmVzdWx0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc3RhdHVzOiBTdGF0dXM7XG4gIGJ1ZGdldEV4Y2hhbmdlUmF0ZUxpc3Q/OiBCdWRnZXRFeGNoYW5nZVJhdGVMaXN0O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogR2V0QnVkZ2V0RXhjaGFuZ2VSYXRlUmVzdWx0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnN0YXR1cyA9IHByb3BzLnN0YXR1cztcbiAgICB0aGlzLmJ1ZGdldEV4Y2hhbmdlUmF0ZUxpc3QgPSBwcm9wcy5idWRnZXRFeGNoYW5nZVJhdGVMaXN0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNlYXJjaExvbmdDdXN0b21GaWVsZFByb3BzID0ge1xuICBzZWFyY2hWYWx1ZT86IG51bWJlcjtcbiAgc2VhcmNoVmFsdWUyPzogbnVtYmVyO1xuICBvcGVyYXRvcj86IFBsYXRmb3JtQ29yZVR5cGVzLlNlYXJjaExvbmdGaWVsZE9wZXJhdG9yO1xufSAmIFNlYXJjaEN1c3RvbUZpZWxkUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hMb25nQ3VzdG9tRmllbGQgZXh0ZW5kcyBTZWFyY2hDdXN0b21GaWVsZCB7XG4gIHNlYXJjaFZhbHVlPzogbnVtYmVyO1xuICBzZWFyY2hWYWx1ZTI/OiBudW1iZXI7XG4gIG9wZXJhdG9yPzogUGxhdGZvcm1Db3JlVHlwZXMuU2VhcmNoTG9uZ0ZpZWxkT3BlcmF0b3I7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTZWFyY2hMb25nQ3VzdG9tRmllbGRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSBwcm9wcy5zZWFyY2hWYWx1ZTtcbiAgICB0aGlzLnNlYXJjaFZhbHVlMiA9IHByb3BzLnNlYXJjaFZhbHVlMjtcbiAgICB0aGlzLm9wZXJhdG9yID0gcHJvcHMub3BlcmF0b3I7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVG9rZW5QYXNzcG9ydFNpZ25hdHVyZVByb3BzID0ge1xuICB2YWx1ZT86IHN0cmluZztcbiAgYWxnb3JpdGhtOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgVG9rZW5QYXNzcG9ydFNpZ25hdHVyZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHZhbHVlPzogc3RyaW5nO1xuICBhbGdvcml0aG06IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IFRva2VuUGFzc3BvcnRTaWduYXR1cmVQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMudmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICB0aGlzLmFsZ29yaXRobSA9IHByb3BzLmFsZ29yaXRobTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBJdGVtQXZhaWxhYmlsaXR5RmlsdGVyUHJvcHMgPSB7XG4gIGl0ZW06IFJlY29yZFJlZkxpc3Q7XG4gIGxhc3RRdHlBdmFpbGFibGVDaGFuZ2U/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgSXRlbUF2YWlsYWJpbGl0eUZpbHRlciBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGl0ZW06IFJlY29yZFJlZkxpc3Q7XG4gIGxhc3RRdHlBdmFpbGFibGVDaGFuZ2U/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJdGVtQXZhaWxhYmlsaXR5RmlsdGVyUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLml0ZW0gPSBwcm9wcy5pdGVtO1xuICAgIHRoaXMubGFzdFF0eUF2YWlsYWJsZUNoYW5nZSA9IHByb3BzLmxhc3RRdHlBdmFpbGFibGVDaGFuZ2U7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2VhcmNoQ29sdW1uRGF0ZUZpZWxkUHJvcHMgPSB7XG4gIHNlYXJjaFZhbHVlPzogc3RyaW5nO1xufSAmIFNlYXJjaENvbHVtbkZpZWxkUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hDb2x1bW5EYXRlRmllbGQgZXh0ZW5kcyBTZWFyY2hDb2x1bW5GaWVsZCB7XG4gIHNlYXJjaFZhbHVlPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VhcmNoQ29sdW1uRGF0ZUZpZWxkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gcHJvcHMuc2VhcmNoVmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2VhcmNoQ29sdW1uQ3VzdG9tRmllbGRMaXN0UHJvcHMgPSB7XG4gIGN1c3RvbUZpZWxkPzogU2VhcmNoQ29sdW1uQ3VzdG9tRmllbGRbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hDb2x1bW5DdXN0b21GaWVsZExpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBjdXN0b21GaWVsZD86IFNlYXJjaENvbHVtbkN1c3RvbUZpZWxkW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTZWFyY2hDb2x1bW5DdXN0b21GaWVsZExpc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuY3VzdG9tRmllbGQgPSBwcm9wcy5jdXN0b21GaWVsZDtcbiAgfVxufVxuIl19