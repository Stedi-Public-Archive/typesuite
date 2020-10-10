import * as PlatformFaultsTypes from "./platform_faults_types";
import * as PlatformCoreTypes from "./platform_core_types";

export class SearchColumnCustomField {
  customLabel?: string;
  internalId?: string;
  scriptId?: string;
  constructor(props: SearchColumnCustomField) {
    this.customLabel = props.customLabel;
    this.internalId = props.internalId;
    this.scriptId = props.scriptId;
  }
}

export class CustomFieldList {
  customField?: CustomFieldRef[];
  constructor(props: CustomFieldList) {
    this.customField = props.customField;
  }
}

export class SearchEnumMultiSelectField {
  searchValue?: string[];
  operator?: PlatformCoreTypes.SearchEnumMultiSelectFieldOperator;
  constructor(props: SearchEnumMultiSelectField) {
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export class BaseRefList {
  baseRef?: BaseRef[];
  constructor(props: BaseRefList) {
    this.baseRef = props.baseRef;
  }
}

export class DeletedRecordList {
  deletedRecord?: DeletedRecord[];
  constructor(props: DeletedRecordList) {
    this.deletedRecord = props.deletedRecord;
  }
}

export class WsRoleList {
  wsRole?: WsRole[];
  constructor(props: WsRoleList) {
    this.wsRole = props.wsRole;
  }
}

export class SearchCustomField {
  internalId?: string;
  scriptId?: string;
  constructor(props: SearchCustomField) {
    this.internalId = props.internalId;
    this.scriptId = props.scriptId;
  }
}

export class SearchBooleanCustomField extends SearchCustomField {
  searchValue?: boolean;
  constructor(props: SearchBooleanCustomField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class SearchColumnField {
  customLabel?: string;
  constructor(props: SearchColumnField) {
    this.customLabel = props.customLabel;
  }
}

export class BudgetExchangeRateFilter {
  period: RecordRef;
  fromSubsidiary?: RecordRef;
  toSubsidiary?: RecordRef;
  constructor(props: BudgetExchangeRateFilter) {
    this.period = props.period;
    this.fromSubsidiary = props.fromSubsidiary;
    this.toSubsidiary = props.toSubsidiary;
  }
}

export class GetSelectFilterByFieldValueList {
  filterBy: GetSelectFilterByFieldValue[];
  constructor(props: GetSelectFilterByFieldValueList) {
    this.filterBy = props.filterBy;
  }
}

export class GetSavedSearchResult {
  status: Status;
  totalRecords?: number;
  recordRefList?: RecordRefList;
  constructor(props: GetSavedSearchResult) {
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.recordRefList = props.recordRefList;
  }
}

export class PostingTransactionSummaryField {
  period?: boolean;
  account?: boolean;
  parentItem?: boolean;
  item?: boolean;
  entity?: boolean;
  department?: boolean;
  clazz?: boolean;
  location?: boolean;
  subsidiary?: boolean;
  book?: boolean;
  constructor(props: PostingTransactionSummaryField) {
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

export class SearchColumnLongCustomField extends SearchColumnCustomField {
  searchValue?: number;
  constructor(props: SearchColumnLongCustomField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class DetachReference {
  detachFrom: BaseRef;
  constructor(props: DetachReference) {
    this.detachFrom = props.detachFrom;
  }
}

export class DetachBasicReference extends DetachReference {
  detachedRecord: BaseRef;
  constructor(props: DetachBasicReference) {
    super(props);
    this.detachedRecord = props.detachedRecord;
  }
}

export class SearchDoubleCustomField extends SearchCustomField {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchDoubleFieldOperator;
  constructor(props: SearchDoubleCustomField) {
    super(props);
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export class BaseRef {
  name?: string;
  constructor(props: BaseRef) {
    this.name = props.name;
  }
}

export class RecordRef extends BaseRef {
  internalId?: string;
  externalId?: string;
  type?: PlatformCoreTypes.RecordType;
  constructor(props: RecordRef) {
    super(props);
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.type = props.type;
  }
}

export class CustomizationRef extends RecordRef {
  scriptId?: string;
  constructor(props: CustomizationRef) {
    super(props);
    this.scriptId = props.scriptId;
  }
}

export class CustomFieldRef {
  internalId?: string;
  scriptId?: string;
  constructor(props: CustomFieldRef) {
    this.internalId = props.internalId;
    this.scriptId = props.scriptId;
  }
}

export class DateCustomFieldRef extends CustomFieldRef {
  value: string;
  constructor(props: DateCustomFieldRef) {
    super(props);
    this.value = props.value;
  }
}

export class SearchTextNumberField {
  searchValue?: string;
  searchValue2?: string;
  operator?: PlatformCoreTypes.SearchTextNumberFieldOperator;
  constructor(props: SearchTextNumberField) {
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export class SearchMultiSelectField {
  searchValue?: RecordRef[];
  operator?: PlatformCoreTypes.SearchMultiSelectFieldOperator;
  constructor(props: SearchMultiSelectField) {
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export class DimensionList {
  dimension?: DimensionRef[];
  constructor(props: DimensionList) {
    this.dimension = props.dimension;
  }
}

export class StatusDetail {
  code?: PlatformFaultsTypes.StatusDetailCodeType;
  message?: string;
  afterSubmitFailed?: boolean;
  type?: PlatformFaultsTypes.StatusDetailType;
  constructor(props: StatusDetail) {
    this.code = props.code;
    this.message = props.message;
    this.afterSubmitFailed = props.afterSubmitFailed;
    this.type = props.type;
  }
}

export class StringCustomFieldRef extends CustomFieldRef {
  value: string;
  constructor(props: StringCustomFieldRef) {
    super(props);
    this.value = props.value;
  }
}

export class InitializeAuxRef extends BaseRef {
  type?: PlatformCoreTypes.InitializeAuxRefType;
  internalId?: string;
  externalId?: string;
  scriptId?: string;
  constructor(props: InitializeAuxRef) {
    super(props);
    this.type = props.type;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.scriptId = props.scriptId;
  }
}

export class GetSelectValueResult {
  status: Status;
  totalRecords?: number;
  totalPages?: number;
  baseRefList?: BaseRefList;
  constructor(props: GetSelectValueResult) {
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.totalPages = props.totalPages;
    this.baseRefList = props.baseRefList;
  }
}

export class SearchRow {}

export class SearchColumnMultiSelectCustomField extends SearchColumnCustomField {
  searchValue?: ListOrRecordRef[];
  constructor(props: SearchColumnMultiSelectCustomField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class SsoCredentials {
  email: string;
  password: string;
  account: string;
  role?: RecordRef;
  authenticationToken: string;
  partnerId: string;
  constructor(props: SsoCredentials) {
    this.email = props.email;
    this.password = props.password;
    this.account = props.account;
    this.role = props.role;
    this.authenticationToken = props.authenticationToken;
    this.partnerId = props.partnerId;
  }
}

export class SearchColumnDateCustomField extends SearchColumnCustomField {
  searchValue?: string;
  constructor(props: SearchColumnDateCustomField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class SearchStringCustomField extends SearchCustomField {
  searchValue?: string;
  operator?: PlatformCoreTypes.SearchStringFieldOperator;
  constructor(props: SearchStringCustomField) {
    super(props);
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export class SearchColumnStringField extends SearchColumnField {
  searchValue?: string;
  constructor(props: SearchColumnStringField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class GetAllResult {
  status: Status;
  totalRecords?: number;
  recordList?: RecordList;
  constructor(props: GetAllResult) {
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.recordList = props.recordList;
  }
}

export class CustomTransactionRef extends BaseRef {
  internalId?: string;
  externalId?: string;
  typeId?: string;
  scriptId?: string;
  constructor(props: CustomTransactionRef) {
    super(props);
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.typeId = props.typeId;
    this.scriptId = props.scriptId;
  }
}

export class CurrencyRateList {
  currencyRate?: CurrencyRate[];
  constructor(props: CurrencyRateList) {
    this.currencyRate = props.currencyRate;
  }
}

export class DataCenterUrls {
  restDomain: string;
  webservicesDomain: string;
  systemDomain: string;
  constructor(props: DataCenterUrls) {
    this.restDomain = props.restDomain;
    this.webservicesDomain = props.webservicesDomain;
    this.systemDomain = props.systemDomain;
  }
}

export class SsoPassport {
  authenticationToken: string;
  partnerId: string;
  partnerAccount: string;
  partnerUserId: string;
  constructor(props: SsoPassport) {
    this.authenticationToken = props.authenticationToken;
    this.partnerId = props.partnerId;
    this.partnerAccount = props.partnerAccount;
    this.partnerUserId = props.partnerUserId;
  }
}

export class PostingTransactionSummary {
  period?: RecordRef;
  account?: RecordRef;
  parentItem?: RecordRef;
  item?: RecordRef;
  entity?: RecordRef;
  department?: RecordRef;
  clazz?: RecordRef;
  location?: RecordRef;
  subsidiary?: RecordRef;
  book?: RecordRef;
  amount: number;
  constructor(props: PostingTransactionSummary) {
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

export class PostingTransactionSummaryFilter {
  period?: RecordRefList;
  account?: RecordRefList;
  parentItem?: RecordRefList;
  item?: RecordRefList;
  entity?: RecordRefList;
  department?: RecordRefList;
  clazz?: RecordRefList;
  location?: RecordRefList;
  subsidiary?: RecordRefList;
  book?: RecordRefList;
  constructor(props: PostingTransactionSummaryFilter) {
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

export class SearchColumnBooleanCustomField extends SearchColumnCustomField {
  searchValue?: boolean;
  constructor(props: SearchColumnBooleanCustomField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class SearchEnumMultiSelectCustomField extends SearchCustomField {
  searchValue?: string[];
  operator?: PlatformCoreTypes.SearchEnumMultiSelectFieldOperator;
  constructor(props: SearchEnumMultiSelectCustomField) {
    super(props);
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export class SearchResult {
  status: Status;
  totalRecords?: number;
  pageSize?: number;
  totalPages?: number;
  pageIndex?: number;
  searchId?: string;
  recordList?: RecordList;
  searchRowList?: SearchRowList;
  constructor(props: SearchResult) {
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

export class GetCurrencyRateResult {
  status: Status;
  currencyRateList?: CurrencyRateList;
  constructor(props: GetCurrencyRateResult) {
    this.status = props.status;
    this.currencyRateList = props.currencyRateList;
  }
}

export class SelectCustomFieldRef extends CustomFieldRef {
  value: ListOrRecordRef;
  constructor(props: SelectCustomFieldRef) {
    super(props);
    this.value = props.value;
  }
}

export class RecordRefList {
  recordRef?: RecordRef[];
  constructor(props: RecordRefList) {
    this.recordRef = props.recordRef;
  }
}

export class SearchDoubleField {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchDoubleFieldOperator;
  constructor(props: SearchDoubleField) {
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export class SearchRowList {
  searchRow?: SearchRow[];
  constructor(props: SearchRowList) {
    this.searchRow = props.searchRow;
  }
}

export class AsyncStatusResult {
  jobId: string;
  status: PlatformCoreTypes.AsyncStatusType;
  percentCompleted: number;
  estRemainingDuration: number;
  constructor(props: AsyncStatusResult) {
    this.jobId = props.jobId;
    this.status = props.status;
    this.percentCompleted = props.percentCompleted;
    this.estRemainingDuration = props.estRemainingDuration;
  }
}

export class SearchRowBasic extends SearchRow {}

export class ChangeEmail {
  currentPassword: string;
  newEmail: string;
  newEmail2: string;
  justThisAccount?: boolean;
  constructor(props: ChangeEmail) {
    this.currentPassword = props.currentPassword;
    this.newEmail = props.newEmail;
    this.newEmail2 = props.newEmail2;
    this.justThisAccount = props.justThisAccount;
  }
}

export class SearchRecord {}

export class SearchRecordBasic extends SearchRecord {}

export class SearchCustomFieldList {
  customField?: SearchCustomField[];
  constructor(props: SearchCustomFieldList) {
    this.customField = props.customField;
  }
}

export class DeletionReason {
  deletionReasonCode: RecordRef;
  deletionReasonMemo?: string;
  constructor(props: DeletionReason) {
    this.deletionReasonCode = props.deletionReasonCode;
    this.deletionReasonMemo = props.deletionReasonMemo;
  }
}

export class InitializeRef extends BaseRef {
  type?: PlatformCoreTypes.InitializeRefType;
  internalId?: string;
  externalId?: string;
  constructor(props: InitializeRef) {
    super(props);
    this.type = props.type;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class AttachReference {
  attachTo: BaseRef;
  constructor(props: AttachReference) {
    this.attachTo = props.attachTo;
  }
}

export class AttachContactReference extends AttachReference {
  contact: RecordRef;
  contactRole?: RecordRef;
  constructor(props: AttachContactReference) {
    super(props);
    this.contact = props.contact;
    this.contactRole = props.contactRole;
  }
}

export class SearchColumnBooleanField extends SearchColumnField {
  searchValue?: boolean;
  constructor(props: SearchColumnBooleanField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class Record {
  nullFieldList?: NullField;
  constructor(props: Record) {
    this.nullFieldList = props.nullFieldList;
  }
}

export class AttachBasicReference extends AttachReference {
  attachedRecord: BaseRef;
  constructor(props: AttachBasicReference) {
    super(props);
    this.attachedRecord = props.attachedRecord;
  }
}

export type SearchBooleanField = boolean | { searchValue?: boolean };

export class NullField {
  name?: string[];
  constructor(props: NullField) {
    this.name = props.name;
  }
}

export class GetItemAvailabilityResult {
  status: Status;
  itemAvailabilityList?: ItemAvailabilityList;
  constructor(props: GetItemAvailabilityResult) {
    this.status = props.status;
    this.itemAvailabilityList = props.itemAvailabilityList;
  }
}

export class SearchColumnTextNumberField extends SearchColumnField {
  searchValue?: string;
  constructor(props: SearchColumnTextNumberField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class ItemAvailability {
  item: RecordRef;
  lastQtyAvailableChange?: string;
  locationId?: RecordRef;
  quantityOnHand?: number;
  onHandValueMli?: number;
  reorderPoint?: number;
  preferredStockLevel?: number;
  quantityOnOrder?: number;
  quantityCommitted?: number;
  quantityBackOrdered?: number;
  quantityAvailable?: number;
  constructor(props: ItemAvailability) {
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

export class CurrencyRateFilter {
  baseCurrency?: RecordRef;
  fromCurrency?: RecordRef;
  effectiveDate?: string;
  constructor(props: CurrencyRateFilter) {
    this.baseCurrency = props.baseCurrency;
    this.fromCurrency = props.fromCurrency;
    this.effectiveDate = props.effectiveDate;
  }
}

export class RecordList {
  record?: Record[];
  constructor(props: RecordList) {
    this.record = props.record;
  }
}

export class GetSelectValueFieldDescription {
  recordType?: PlatformCoreTypes.RecordType;
  customRecordType?: RecordRef;
  customTransactionType?: RecordRef;
  sublist?: string;
  field: string;
  customForm?: RecordRef;
  filter?: GetSelectValueFilter;
  filterByValueList?: GetSelectFilterByFieldValueList;
  constructor(props: GetSelectValueFieldDescription) {
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

export class BooleanCustomFieldRef extends CustomFieldRef {
  value: boolean;
  constructor(props: BooleanCustomFieldRef) {
    super(props);
    this.value = props.value;
  }
}

export class SearchColumnSelectField extends SearchColumnField {
  searchValue?: RecordRef;
  constructor(props: SearchColumnSelectField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class DeletedRecord {
  deletedDate?: string;
  record?: BaseRef;
  constructor(props: DeletedRecord) {
    this.deletedDate = props.deletedDate;
    this.record = props.record;
  }
}

export class WsRole {
  role?: RecordRef;
  isDefault?: boolean;
  isInactive?: boolean;
  isLoggedInRole?: boolean;
  constructor(props: WsRole) {
    this.role = props.role;
    this.isDefault = props.isDefault;
    this.isInactive = props.isInactive;
    this.isLoggedInRole = props.isLoggedInRole;
  }
}

export class GetDeletedResult {
  status: Status;
  totalRecords?: number;
  pageSize?: number;
  totalPages?: number;
  pageIndex?: number;
  deletedRecordList?: DeletedRecordList;
  constructor(props: GetDeletedResult) {
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.pageSize = props.pageSize;
    this.totalPages = props.totalPages;
    this.pageIndex = props.pageIndex;
    this.deletedRecordList = props.deletedRecordList;
  }
}

export class MultiSelectCustomFieldRef extends CustomFieldRef {
  value: ListOrRecordRef[];
  constructor(props: MultiSelectCustomFieldRef) {
    super(props);
    this.value = props.value;
  }
}

export class SearchColumnLongField extends SearchColumnField {
  searchValue?: number;
  constructor(props: SearchColumnLongField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class GetSelectFilterByFieldValue {
  sublist?: string;
  field: string;
  internalId: string;
  constructor(props: GetSelectFilterByFieldValue) {
    this.sublist = props.sublist;
    this.field = props.field;
    this.internalId = props.internalId;
  }
}

export class GetDeletedFilter {
  deletedDate?: SearchDateField;
  type?: SearchEnumMultiSelectField;
  scriptId?: SearchStringField;
  constructor(props: GetDeletedFilter) {
    this.deletedDate = props.deletedDate;
    this.type = props.type;
    this.scriptId = props.scriptId;
  }
}

export class ItemAvailabilityList {
  itemAvailability: ItemAvailability[];
  constructor(props: ItemAvailabilityList) {
    this.itemAvailability = props.itemAvailability;
  }
}

export class SearchDateField {
  predefinedSearchValue?: PlatformCoreTypes.SearchDate;
  searchValue?: string;
  searchValue2?: string;
  operator?: PlatformCoreTypes.SearchDateFieldOperator;
  constructor(props: SearchDateField) {
    this.predefinedSearchValue = props.predefinedSearchValue;
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export class SearchColumnSelectCustomField extends SearchColumnCustomField {
  searchValue?: ListOrRecordRef;
  constructor(props: SearchColumnSelectCustomField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class GetDataCenterUrlsResult {
  status: Status;
  dataCenterUrls?: DataCenterUrls;
  constructor(props: GetDataCenterUrlsResult) {
    this.status = props.status;
    this.dataCenterUrls = props.dataCenterUrls;
  }
}

export class PostingTransactionSummaryList {
  postingTransactionSummary: PostingTransactionSummary[];
  constructor(props: PostingTransactionSummaryList) {
    this.postingTransactionSummary = props.postingTransactionSummary;
  }
}

export class DimensionRef {
  scriptId?: string;
  constructor(props: DimensionRef) {
    this.scriptId = props.scriptId;
  }
}

export class SearchLongField {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchLongFieldOperator;
  constructor(props: SearchLongField) {
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export class CustomizationRefList {
  customizationRef?: CustomizationRef[];
  constructor(props: CustomizationRefList) {
    this.customizationRef = props.customizationRef;
  }
}

export class GetSavedSearchRecord {
  searchType?: PlatformCoreTypes.SearchRecordType;
  constructor(props: GetSavedSearchRecord) {
    this.searchType = props.searchType;
  }
}

export class CurrencyRate {
  baseCurrency: RecordRef;
  fromCurrency: RecordRef;
  exchangeRate: number;
  effectiveDate: string;
  constructor(props: CurrencyRate) {
    this.baseCurrency = props.baseCurrency;
    this.fromCurrency = props.fromCurrency;
    this.exchangeRate = props.exchangeRate;
    this.effectiveDate = props.effectiveDate;
  }
}

export class Duration {
  timeSpan: number;
  unit: PlatformCoreTypes.DurationUnit;
  constructor(props: Duration) {
    this.timeSpan = props.timeSpan;
    this.unit = props.unit;
  }
}

export class CustomizationType {
  getCustomizationType?: PlatformCoreTypes.GetCustomizationType;
  constructor(props: CustomizationType) {
    this.getCustomizationType = props.getCustomizationType;
  }
}

export class SearchColumnDoubleCustomField extends SearchColumnCustomField {
  searchValue?: number;
  constructor(props: SearchColumnDoubleCustomField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class ListOrRecordRef {
  name?: string;
  internalId?: string;
  externalId?: string;
  typeId?: string;
  constructor(props: ListOrRecordRef) {
    this.name = props.name;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.typeId = props.typeId;
  }
}

export class LongCustomFieldRef extends CustomFieldRef {
  value: number;
  constructor(props: LongCustomFieldRef) {
    super(props);
    this.value = props.value;
  }
}

export class TokenPassport {
  account: string;
  consumerKey: string;
  token: string;
  nonce: string;
  timestamp: number;
  signature: TokenPassportSignature;
  constructor(props: TokenPassport) {
    this.account = props.account;
    this.consumerKey = props.consumerKey;
    this.token = props.token;
    this.nonce = props.nonce;
    this.timestamp = props.timestamp;
    this.signature = props.signature;
  }
}

export class DoubleCustomFieldRef extends CustomFieldRef {
  value: number;
  constructor(props: DoubleCustomFieldRef) {
    super(props);
    this.value = props.value;
  }
}

export class GetCustomizationIdResult {
  status: Status;
  totalRecords?: number;
  customizationRefList?: CustomizationRefList;
  constructor(props: GetCustomizationIdResult) {
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.customizationRefList = props.customizationRefList;
  }
}

export class GetSelectValueFilter {
  filterValue: string;
  operator: PlatformCoreTypes.GetSelectValueFilterOperator;
  constructor(props: GetSelectValueFilter) {
    this.filterValue = props.filterValue;
    this.operator = props.operator;
  }
}

export class Passport {
  email: string;
  password: string;
  account: string;
  role?: RecordRef;
  constructor(props: Passport) {
    this.email = props.email;
    this.password = props.password;
    this.account = props.account;
    this.role = props.role;
  }
}

export class BudgetExchangeRate {
  period: RecordRef;
  fromSubsidiary: RecordRef;
  toSubsidiary: RecordRef;
  currentRate?: number;
  averageRate?: number;
  historicalRate?: number;
  constructor(props: BudgetExchangeRate) {
    this.period = props.period;
    this.fromSubsidiary = props.fromSubsidiary;
    this.toSubsidiary = props.toSubsidiary;
    this.currentRate = props.currentRate;
    this.averageRate = props.averageRate;
    this.historicalRate = props.historicalRate;
  }
}

export class Status {
  statusDetail?: StatusDetail[];
  isSuccess?: boolean;
  constructor(props: Status) {
    this.statusDetail = props.statusDetail;
    this.isSuccess = props.isSuccess;
  }
}

export class SearchDateCustomField extends SearchCustomField {
  predefinedSearchValue?: PlatformCoreTypes.SearchDate;
  searchValue?: string;
  searchValue2?: string;
  operator?: PlatformCoreTypes.SearchDateFieldOperator;
  constructor(props: SearchDateCustomField) {
    super(props);
    this.predefinedSearchValue = props.predefinedSearchValue;
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export class SearchMultiSelectCustomField extends SearchCustomField {
  searchValue?: ListOrRecordRef[];
  operator?: PlatformCoreTypes.SearchMultiSelectFieldOperator;
  constructor(props: SearchMultiSelectCustomField) {
    super(props);
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export class StringDimensionRef extends DimensionRef {
  value: string;
  constructor(props: StringDimensionRef) {
    super(props);
    this.value = props.value;
  }
}

export class GetPostingTransactionSummaryResult {
  status: Status;
  totalRecords?: number;
  pageSize?: number;
  totalPages?: number;
  pageIndex?: number;
  operationId?: string;
  postingTransactionSummaryList?: PostingTransactionSummaryList;
  constructor(props: GetPostingTransactionSummaryResult) {
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.pageSize = props.pageSize;
    this.totalPages = props.totalPages;
    this.pageIndex = props.pageIndex;
    this.operationId = props.operationId;
    this.postingTransactionSummaryList = props.postingTransactionSummaryList;
  }
}

export class SelectDimensionRef extends DimensionRef {
  value: ListOrRecordRef;
  constructor(props: SelectDimensionRef) {
    super(props);
    this.value = props.value;
  }
}

export class SearchColumnStringCustomField extends SearchColumnCustomField {
  searchValue?: string;
  constructor(props: SearchColumnStringCustomField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class GetAllRecord {
  recordType?: PlatformCoreTypes.GetAllRecordType;
  constructor(props: GetAllRecord) {
    this.recordType = props.recordType;
  }
}

export class SearchStringField {
  searchValue?: string;
  operator?: PlatformCoreTypes.SearchStringFieldOperator;
  constructor(props: SearchStringField) {
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export class InitializeRefList {
  initializeRef?: InitializeRef[];
  constructor(props: InitializeRefList) {
    this.initializeRef = props.initializeRef;
  }
}

export class ChangePassword {
  currentPassword: string;
  newPassword?: string;
  newPassword2?: string;
  constructor(props: ChangePassword) {
    this.currentPassword = props.currentPassword;
    this.newPassword = props.newPassword;
    this.newPassword2 = props.newPassword2;
  }
}

export class SearchColumnEnumMultiSelectCustomField extends SearchColumnCustomField {
  searchValue?: string[];
  constructor(props: SearchColumnEnumMultiSelectCustomField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class UpdateInviteeStatusReference {
  eventId: RecordRef;
  responseCode: PlatformCoreTypes.CalendarEventAttendeeResponse;
  constructor(props: UpdateInviteeStatusReference) {
    this.eventId = props.eventId;
    this.responseCode = props.responseCode;
  }
}

export class GetServerTimeResult {
  status: Status;
  serverTime: string;
  constructor(props: GetServerTimeResult) {
    this.status = props.status;
    this.serverTime = props.serverTime;
  }
}

export class CustomRecordRef extends BaseRef {
  internalId?: string;
  externalId?: string;
  typeId?: string;
  scriptId?: string;
  constructor(props: CustomRecordRef) {
    super(props);
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.typeId = props.typeId;
    this.scriptId = props.scriptId;
  }
}

export class BudgetExchangeRateList {
  budgetExchangeRate: BudgetExchangeRate[];
  constructor(props: BudgetExchangeRateList) {
    this.budgetExchangeRate = props.budgetExchangeRate;
  }
}

export class InitializeRecord {
  type: PlatformCoreTypes.InitializeType;
  reference?: InitializeRef;
  auxReference?: InitializeAuxRef;
  referenceList?: InitializeRefList;
  constructor(props: InitializeRecord) {
    this.type = props.type;
    this.reference = props.reference;
    this.auxReference = props.auxReference;
    this.referenceList = props.referenceList;
  }
}

export class SearchColumnEnumSelectField extends SearchColumnField {
  searchValue?: string;
  constructor(props: SearchColumnEnumSelectField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class SearchColumnDoubleField extends SearchColumnField {
  searchValue?: number;
  constructor(props: SearchColumnDoubleField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class GetBudgetExchangeRateResult {
  status: Status;
  budgetExchangeRateList?: BudgetExchangeRateList;
  constructor(props: GetBudgetExchangeRateResult) {
    this.status = props.status;
    this.budgetExchangeRateList = props.budgetExchangeRateList;
  }
}

export class SearchLongCustomField extends SearchCustomField {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchLongFieldOperator;
  constructor(props: SearchLongCustomField) {
    super(props);
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export class TokenPassportSignature {
  value?: string;
  algorithm: string;
  constructor(props: TokenPassportSignature) {
    this.value = props.value;
    this.algorithm = props.algorithm;
  }
}

export class ItemAvailabilityFilter {
  item: RecordRefList;
  lastQtyAvailableChange?: string;
  constructor(props: ItemAvailabilityFilter) {
    this.item = props.item;
    this.lastQtyAvailableChange = props.lastQtyAvailableChange;
  }
}

export class SearchColumnDateField extends SearchColumnField {
  searchValue?: string;
  constructor(props: SearchColumnDateField) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export class SearchColumnCustomFieldList {
  customField?: SearchColumnCustomField[];
  constructor(props: SearchColumnCustomFieldList) {
    this.customField = props.customField;
  }
}
