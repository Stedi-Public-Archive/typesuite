import * as SoapTypes from "../../util/soap-types";
import * as PlatformFaultsTypes from "./platform_faults_types";
import * as PlatformCoreTypes from "./platform_core_types";

const mappingsName = "com_netsuite_webservices_platform_core_2019_2";

export class SearchColumnCustomField extends SoapTypes.Base {
  customLabel?: string;
  internalId?: string;
  scriptId?: string;
  constructor(props: SearchColumnCustomField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customLabel = props.customLabel;
    this.internalId = props.internalId;
    this.scriptId = props.scriptId;
  }
}

export class CustomFieldList extends SoapTypes.Base {
  customField?: CustomFieldRef[];
  constructor(props: CustomFieldList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customField = props.customField;
  }
}

export class SearchEnumMultiSelectField extends SoapTypes.Base {
  searchValue?: string[];
  operator?: PlatformCoreTypes.SearchEnumMultiSelectFieldOperator;
  constructor(props: SearchEnumMultiSelectField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export class BaseRefList extends SoapTypes.Base {
  baseRef?: BaseRef[];
  constructor(props: BaseRefList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.baseRef = props.baseRef;
  }
}

export class DeletedRecordList extends SoapTypes.Base {
  deletedRecord?: DeletedRecord[];
  constructor(props: DeletedRecordList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.deletedRecord = props.deletedRecord;
  }
}

export class WsRoleList extends SoapTypes.Base {
  wsRole?: WsRole[];
  constructor(props: WsRoleList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.wsRole = props.wsRole;
  }
}

export class SearchCustomField extends SoapTypes.Base {
  internalId?: string;
  scriptId?: string;
  constructor(props: SearchCustomField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.internalId = props.internalId;
    this.scriptId = props.scriptId;
  }
}

export class SearchBooleanCustomField extends SearchCustomField {
  searchValue?: boolean;
  constructor(props: SearchBooleanCustomField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class SearchColumnField extends SoapTypes.Base {
  customLabel?: string;
  constructor(props: SearchColumnField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customLabel = props.customLabel;
  }
}

export class BudgetExchangeRateFilter extends SoapTypes.Base {
  period: RecordRef;
  fromSubsidiary?: RecordRef;
  toSubsidiary?: RecordRef;
  constructor(props: BudgetExchangeRateFilter) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.period = props.period;
    this.fromSubsidiary = props.fromSubsidiary;
    this.toSubsidiary = props.toSubsidiary;
  }
}

export class GetSelectFilterByFieldValueList extends SoapTypes.Base {
  filterBy: GetSelectFilterByFieldValue[];
  constructor(props: GetSelectFilterByFieldValueList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.filterBy = props.filterBy;
  }
}

export class GetSavedSearchResult extends SoapTypes.Base {
  status: Status;
  totalRecords?: number;
  recordRefList?: RecordRefList;
  constructor(props: GetSavedSearchResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.recordRefList = props.recordRefList;
  }
}

export class PostingTransactionSummaryField extends SoapTypes.Base {
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class DetachReference extends SoapTypes.Base {
  detachFrom: BaseRef;
  constructor(props: DetachReference) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.detachFrom = props.detachFrom;
  }
}

export class DetachBasicReference extends DetachReference {
  detachedRecord: BaseRef;
  constructor(props: DetachBasicReference) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.detachedRecord = props.detachedRecord;
  }
}

export class SearchDoubleCustomField extends SearchCustomField {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchDoubleFieldOperator;
  constructor(props: SearchDoubleCustomField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export class BaseRef extends SoapTypes.Base {
  name?: string;
  constructor(props: BaseRef) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
  }
}

export class RecordRef extends BaseRef {
  internalId?: string;
  externalId?: string;
  type?: PlatformCoreTypes.RecordType;
  constructor(props: RecordRef) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.type = props.type;
  }
}

export class CustomizationRef extends RecordRef {
  scriptId?: string;
  constructor(props: CustomizationRef) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.scriptId = props.scriptId;
  }
}

export class CustomFieldRef extends SoapTypes.Base {
  internalId?: string;
  scriptId?: string;
  constructor(props: CustomFieldRef) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.internalId = props.internalId;
    this.scriptId = props.scriptId;
  }
}

export class DateCustomFieldRef extends CustomFieldRef {
  value: SoapTypes.Dateish;
  constructor(props: DateCustomFieldRef) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.value = props.value;
  }
}

export class SearchTextNumberField extends SoapTypes.Base {
  searchValue?: string;
  searchValue2?: string;
  operator?: PlatformCoreTypes.SearchTextNumberFieldOperator;
  constructor(props: SearchTextNumberField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export class SearchMultiSelectField extends SoapTypes.Base {
  searchValue?: RecordRef[];
  operator?: PlatformCoreTypes.SearchMultiSelectFieldOperator;
  constructor(props: SearchMultiSelectField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export class DimensionList extends SoapTypes.Base {
  dimension?: DimensionRef[];
  constructor(props: DimensionList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.dimension = props.dimension;
  }
}

export class StatusDetail extends SoapTypes.Base {
  code?: PlatformFaultsTypes.StatusDetailCodeType;
  message?: string;
  afterSubmitFailed?: boolean;
  type?: PlatformFaultsTypes.StatusDetailType;
  constructor(props: StatusDetail) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.code = props.code;
    this.message = props.message;
    this.afterSubmitFailed = props.afterSubmitFailed;
    this.type = props.type;
  }
}

export class StringCustomFieldRef extends CustomFieldRef {
  value: string;
  constructor(props: StringCustomFieldRef) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.value = props.value;
  }
}

export class InitializeAuxRef extends BaseRef {
  type?: PlatformCoreTypes.InitializeAuxRefType;
  internalId?: string;
  externalId?: string;
  scriptId?: string;
  constructor(props: InitializeAuxRef) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.type = props.type;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.scriptId = props.scriptId;
  }
}

export class GetSelectValueResult extends SoapTypes.Base {
  status: Status;
  totalRecords?: number;
  totalPages?: number;
  baseRefList?: BaseRefList;
  constructor(props: GetSelectValueResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.totalPages = props.totalPages;
    this.baseRefList = props.baseRefList;
  }
}

export class SearchRow extends SoapTypes.Base {
  constructor(props: SearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class SearchColumnMultiSelectCustomField extends SearchColumnCustomField {
  searchValue?: ListOrRecordRef[];
  constructor(props: SearchColumnMultiSelectCustomField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class SsoCredentials extends SoapTypes.Base {
  email: string;
  password: string;
  account: string;
  role?: RecordRef;
  authenticationToken: string;
  partnerId: string;
  constructor(props: SsoCredentials) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.email = props.email;
    this.password = props.password;
    this.account = props.account;
    this.role = props.role;
    this.authenticationToken = props.authenticationToken;
    this.partnerId = props.partnerId;
  }
}

export class SearchColumnDateCustomField extends SearchColumnCustomField {
  searchValue?: SoapTypes.Dateish;
  constructor(props: SearchColumnDateCustomField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class SearchStringCustomField extends SearchCustomField {
  searchValue?: string;
  operator?: PlatformCoreTypes.SearchStringFieldOperator;
  constructor(props: SearchStringCustomField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export class SearchColumnStringField extends SearchColumnField {
  searchValue?: string;
  constructor(props: SearchColumnStringField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class GetAllResult extends SoapTypes.Base {
  status: Status;
  totalRecords?: number;
  recordList?: RecordList;
  constructor(props: GetAllResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.typeId = props.typeId;
    this.scriptId = props.scriptId;
  }
}

export class CurrencyRateList extends SoapTypes.Base {
  currencyRate?: CurrencyRate[];
  constructor(props: CurrencyRateList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.currencyRate = props.currencyRate;
  }
}

export class DataCenterUrls extends SoapTypes.Base {
  restDomain: string;
  webservicesDomain: string;
  systemDomain: string;
  constructor(props: DataCenterUrls) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.restDomain = props.restDomain;
    this.webservicesDomain = props.webservicesDomain;
    this.systemDomain = props.systemDomain;
  }
}

export class SsoPassport extends SoapTypes.Base {
  authenticationToken: string;
  partnerId: string;
  partnerAccount: string;
  partnerUserId: string;
  constructor(props: SsoPassport) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.authenticationToken = props.authenticationToken;
    this.partnerId = props.partnerId;
    this.partnerAccount = props.partnerAccount;
    this.partnerUserId = props.partnerUserId;
  }
}

export class PostingTransactionSummary extends SoapTypes.Base {
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
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

export class PostingTransactionSummaryFilter extends SoapTypes.Base {
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class SearchEnumMultiSelectCustomField extends SearchCustomField {
  searchValue?: string[];
  operator?: PlatformCoreTypes.SearchEnumMultiSelectFieldOperator;
  constructor(props: SearchEnumMultiSelectCustomField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export class SearchResult extends SoapTypes.Base {
  status: Status;
  totalRecords?: number;
  pageSize?: number;
  totalPages?: number;
  pageIndex?: number;
  searchId?: string;
  recordList?: RecordList;
  searchRowList?: SearchRowList;
  constructor(props: SearchResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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

export class GetCurrencyRateResult extends SoapTypes.Base {
  status: Status;
  currencyRateList?: CurrencyRateList;
  constructor(props: GetCurrencyRateResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.status = props.status;
    this.currencyRateList = props.currencyRateList;
  }
}

export class SelectCustomFieldRef extends CustomFieldRef {
  value: ListOrRecordRef;
  constructor(props: SelectCustomFieldRef) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.value = props.value;
  }
}

export class RecordRefList extends SoapTypes.Base {
  recordRef?: RecordRef[];
  constructor(props: RecordRefList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.recordRef = props.recordRef;
  }
}

export class SearchDoubleField extends SoapTypes.Base {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchDoubleFieldOperator;
  constructor(props: SearchDoubleField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export class SearchRowList extends SoapTypes.Base {
  searchRow?: SearchRow[];
  constructor(props: SearchRowList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchRow = props.searchRow;
  }
}

export class AsyncStatusResult extends SoapTypes.Base {
  jobId: string;
  status: PlatformCoreTypes.AsyncStatusType;
  percentCompleted: number;
  estRemainingDuration: number;
  constructor(props: AsyncStatusResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.jobId = props.jobId;
    this.status = props.status;
    this.percentCompleted = props.percentCompleted;
    this.estRemainingDuration = props.estRemainingDuration;
  }
}

export class SearchRowBasic extends SearchRow {
  constructor(props: SearchRowBasic) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class ChangeEmail extends SoapTypes.Base {
  currentPassword: string;
  newEmail: string;
  newEmail2: string;
  justThisAccount?: boolean;
  constructor(props: ChangeEmail) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.currentPassword = props.currentPassword;
    this.newEmail = props.newEmail;
    this.newEmail2 = props.newEmail2;
    this.justThisAccount = props.justThisAccount;
  }
}

export class SearchRecord extends SoapTypes.Base {
  constructor(props: SearchRecord) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class SearchRecordBasic extends SearchRecord {
  constructor(props: SearchRecordBasic) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class SearchCustomFieldList extends SoapTypes.Base {
  customField?: SearchCustomField[];
  constructor(props: SearchCustomFieldList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customField = props.customField;
  }
}

export class DeletionReason extends SoapTypes.Base {
  deletionReasonCode: RecordRef;
  deletionReasonMemo?: string;
  constructor(props: DeletionReason) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.deletionReasonCode = props.deletionReasonCode;
    this.deletionReasonMemo = props.deletionReasonMemo;
  }
}

export class InitializeRef extends BaseRef {
  type?: PlatformCoreTypes.InitializeRefType;
  internalId?: string;
  externalId?: string;
  constructor(props: InitializeRef) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.type = props.type;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class AttachReference extends SoapTypes.Base {
  attachTo: BaseRef;
  constructor(props: AttachReference) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.attachTo = props.attachTo;
  }
}

export class AttachContactReference extends AttachReference {
  contact: RecordRef;
  contactRole?: RecordRef;
  constructor(props: AttachContactReference) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.contact = props.contact;
    this.contactRole = props.contactRole;
  }
}

export class SearchColumnBooleanField extends SearchColumnField {
  searchValue?: boolean;
  constructor(props: SearchColumnBooleanField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class Record extends SoapTypes.Base {
  nullFieldList?: NullField;
  constructor(props: Record) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.nullFieldList = props.nullFieldList;
  }
}

export class AttachBasicReference extends AttachReference {
  attachedRecord: BaseRef;
  constructor(props: AttachBasicReference) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.attachedRecord = props.attachedRecord;
  }
}

export type SearchBooleanField = boolean | { searchValue?: boolean };

export class NullField extends SoapTypes.Base {
  name?: string[];
  constructor(props: NullField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
  }
}

export class GetItemAvailabilityResult extends SoapTypes.Base {
  status: Status;
  itemAvailabilityList?: ItemAvailabilityList;
  constructor(props: GetItemAvailabilityResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.status = props.status;
    this.itemAvailabilityList = props.itemAvailabilityList;
  }
}

export class SearchColumnTextNumberField extends SearchColumnField {
  searchValue?: string;
  constructor(props: SearchColumnTextNumberField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class ItemAvailability extends SoapTypes.Base {
  item: RecordRef;
  lastQtyAvailableChange?: SoapTypes.Dateish;
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
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

export class CurrencyRateFilter extends SoapTypes.Base {
  baseCurrency?: RecordRef;
  fromCurrency?: RecordRef;
  effectiveDate?: SoapTypes.Dateish;
  constructor(props: CurrencyRateFilter) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.baseCurrency = props.baseCurrency;
    this.fromCurrency = props.fromCurrency;
    this.effectiveDate = props.effectiveDate;
  }
}

export class RecordList extends SoapTypes.Base {
  record?: Record[];
  constructor(props: RecordList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.record = props.record;
  }
}

export class GetSelectValueFieldDescription extends SoapTypes.Base {
  recordType?: PlatformCoreTypes.RecordType;
  customRecordType?: RecordRef;
  customTransactionType?: RecordRef;
  sublist?: string;
  field: string;
  customForm?: RecordRef;
  filter?: GetSelectValueFilter;
  filterByValueList?: GetSelectFilterByFieldValueList;
  constructor(props: GetSelectValueFieldDescription) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.value = props.value;
  }
}

export class SearchColumnSelectField extends SearchColumnField {
  searchValue?: RecordRef;
  constructor(props: SearchColumnSelectField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class DeletedRecord extends SoapTypes.Base {
  deletedDate?: SoapTypes.Dateish;
  record?: BaseRef;
  constructor(props: DeletedRecord) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.deletedDate = props.deletedDate;
    this.record = props.record;
  }
}

export class WsRole extends SoapTypes.Base {
  role?: RecordRef;
  isDefault?: boolean;
  isInactive?: boolean;
  isLoggedInRole?: boolean;
  constructor(props: WsRole) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.role = props.role;
    this.isDefault = props.isDefault;
    this.isInactive = props.isInactive;
    this.isLoggedInRole = props.isLoggedInRole;
  }
}

export class GetDeletedResult extends SoapTypes.Base {
  status: Status;
  totalRecords?: number;
  pageSize?: number;
  totalPages?: number;
  pageIndex?: number;
  deletedRecordList?: DeletedRecordList;
  constructor(props: GetDeletedResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.value = props.value;
  }
}

export class SearchColumnLongField extends SearchColumnField {
  searchValue?: number;
  constructor(props: SearchColumnLongField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class GetSelectFilterByFieldValue extends SoapTypes.Base {
  sublist?: string;
  field: string;
  internalId: string;
  constructor(props: GetSelectFilterByFieldValue) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.sublist = props.sublist;
    this.field = props.field;
    this.internalId = props.internalId;
  }
}

export class GetDeletedFilter extends SoapTypes.Base {
  deletedDate?: SearchDateField;
  type?: SearchEnumMultiSelectField;
  scriptId?: SearchStringField;
  constructor(props: GetDeletedFilter) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.deletedDate = props.deletedDate;
    this.type = props.type;
    this.scriptId = props.scriptId;
  }
}

export class ItemAvailabilityList extends SoapTypes.Base {
  itemAvailability: ItemAvailability[];
  constructor(props: ItemAvailabilityList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.itemAvailability = props.itemAvailability;
  }
}

export class SearchDateField extends SoapTypes.Base {
  predefinedSearchValue?: PlatformCoreTypes.SearchDate;
  searchValue?: SoapTypes.Dateish;
  searchValue2?: SoapTypes.Dateish;
  operator?: PlatformCoreTypes.SearchDateFieldOperator;
  constructor(props: SearchDateField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.predefinedSearchValue = props.predefinedSearchValue;
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export class SearchColumnSelectCustomField extends SearchColumnCustomField {
  searchValue?: ListOrRecordRef;
  constructor(props: SearchColumnSelectCustomField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class GetDataCenterUrlsResult extends SoapTypes.Base {
  status: Status;
  dataCenterUrls?: DataCenterUrls;
  constructor(props: GetDataCenterUrlsResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.status = props.status;
    this.dataCenterUrls = props.dataCenterUrls;
  }
}

export class PostingTransactionSummaryList extends SoapTypes.Base {
  postingTransactionSummary: PostingTransactionSummary[];
  constructor(props: PostingTransactionSummaryList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.postingTransactionSummary = props.postingTransactionSummary;
  }
}

export class DimensionRef extends SoapTypes.Base {
  scriptId?: string;
  constructor(props: DimensionRef) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.scriptId = props.scriptId;
  }
}

export class SearchLongField extends SoapTypes.Base {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchLongFieldOperator;
  constructor(props: SearchLongField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export class CustomizationRefList extends SoapTypes.Base {
  customizationRef?: CustomizationRef[];
  constructor(props: CustomizationRefList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customizationRef = props.customizationRef;
  }
}

export class GetSavedSearchRecord extends SoapTypes.Base {
  searchType?: PlatformCoreTypes.SearchRecordType;
  constructor(props: GetSavedSearchRecord) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchType = props.searchType;
  }
}

export class CurrencyRate extends SoapTypes.Base {
  baseCurrency: RecordRef;
  fromCurrency: RecordRef;
  exchangeRate: number;
  effectiveDate: SoapTypes.Dateish;
  constructor(props: CurrencyRate) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.baseCurrency = props.baseCurrency;
    this.fromCurrency = props.fromCurrency;
    this.exchangeRate = props.exchangeRate;
    this.effectiveDate = props.effectiveDate;
  }
}

export class Duration extends SoapTypes.Base {
  timeSpan: number;
  unit: PlatformCoreTypes.DurationUnit;
  constructor(props: Duration) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.timeSpan = props.timeSpan;
    this.unit = props.unit;
  }
}

export class CustomizationType extends SoapTypes.Base {
  getCustomizationType?: PlatformCoreTypes.GetCustomizationType;
  constructor(props: CustomizationType) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.getCustomizationType = props.getCustomizationType;
  }
}

export class SearchColumnDoubleCustomField extends SearchColumnCustomField {
  searchValue?: number;
  constructor(props: SearchColumnDoubleCustomField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class ListOrRecordRef extends SoapTypes.Base {
  name?: string;
  internalId?: string;
  externalId?: string;
  typeId?: string;
  constructor(props: ListOrRecordRef) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.typeId = props.typeId;
  }
}

export class LongCustomFieldRef extends CustomFieldRef {
  value: number;
  constructor(props: LongCustomFieldRef) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.value = props.value;
  }
}

export class TokenPassport extends SoapTypes.Base {
  account: string;
  consumerKey: string;
  token: string;
  nonce: string;
  timestamp: number;
  signature: TokenPassportSignature;
  constructor(props: TokenPassport) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.value = props.value;
  }
}

export class GetCustomizationIdResult extends SoapTypes.Base {
  status: Status;
  totalRecords?: number;
  customizationRefList?: CustomizationRefList;
  constructor(props: GetCustomizationIdResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.customizationRefList = props.customizationRefList;
  }
}

export class GetSelectValueFilter extends SoapTypes.Base {
  filterValue: string;
  operator: PlatformCoreTypes.GetSelectValueFilterOperator;
  constructor(props: GetSelectValueFilter) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.filterValue = props.filterValue;
    this.operator = props.operator;
  }
}

export class Passport extends SoapTypes.Base {
  email: string;
  password: string;
  account: string;
  role?: RecordRef;
  constructor(props: Passport) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.email = props.email;
    this.password = props.password;
    this.account = props.account;
    this.role = props.role;
  }
}

export class BudgetExchangeRate extends SoapTypes.Base {
  period: RecordRef;
  fromSubsidiary: RecordRef;
  toSubsidiary: RecordRef;
  currentRate?: number;
  averageRate?: number;
  historicalRate?: number;
  constructor(props: BudgetExchangeRate) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.period = props.period;
    this.fromSubsidiary = props.fromSubsidiary;
    this.toSubsidiary = props.toSubsidiary;
    this.currentRate = props.currentRate;
    this.averageRate = props.averageRate;
    this.historicalRate = props.historicalRate;
  }
}

export class Status extends SoapTypes.Base {
  statusDetail?: StatusDetail[];
  isSuccess?: boolean;
  constructor(props: Status) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.statusDetail = props.statusDetail;
    this.isSuccess = props.isSuccess;
  }
}

export class SearchDateCustomField extends SearchCustomField {
  predefinedSearchValue?: PlatformCoreTypes.SearchDate;
  searchValue?: SoapTypes.Dateish;
  searchValue2?: SoapTypes.Dateish;
  operator?: PlatformCoreTypes.SearchDateFieldOperator;
  constructor(props: SearchDateCustomField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export class StringDimensionRef extends DimensionRef {
  value: string;
  constructor(props: StringDimensionRef) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.value = props.value;
  }
}

export class GetPostingTransactionSummaryResult extends SoapTypes.Base {
  status: Status;
  totalRecords?: number;
  pageSize?: number;
  totalPages?: number;
  pageIndex?: number;
  operationId?: string;
  postingTransactionSummaryList?: PostingTransactionSummaryList;
  constructor(props: GetPostingTransactionSummaryResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.value = props.value;
  }
}

export class SearchColumnStringCustomField extends SearchColumnCustomField {
  searchValue?: string;
  constructor(props: SearchColumnStringCustomField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class GetAllRecord extends SoapTypes.Base {
  recordType?: PlatformCoreTypes.GetAllRecordType;
  constructor(props: GetAllRecord) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.recordType = props.recordType;
  }
}

export class SearchStringField extends SoapTypes.Base {
  searchValue?: string;
  operator?: PlatformCoreTypes.SearchStringFieldOperator;
  constructor(props: SearchStringField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export class InitializeRefList extends SoapTypes.Base {
  initializeRef?: InitializeRef[];
  constructor(props: InitializeRefList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.initializeRef = props.initializeRef;
  }
}

export class ChangePassword extends SoapTypes.Base {
  currentPassword: string;
  newPassword?: string;
  newPassword2?: string;
  constructor(props: ChangePassword) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.currentPassword = props.currentPassword;
    this.newPassword = props.newPassword;
    this.newPassword2 = props.newPassword2;
  }
}

export class SearchColumnEnumMultiSelectCustomField extends SearchColumnCustomField {
  searchValue?: string[];
  constructor(props: SearchColumnEnumMultiSelectCustomField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class UpdateInviteeStatusReference extends SoapTypes.Base {
  eventId: RecordRef;
  responseCode: PlatformCoreTypes.CalendarEventAttendeeResponse;
  constructor(props: UpdateInviteeStatusReference) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.eventId = props.eventId;
    this.responseCode = props.responseCode;
  }
}

export class GetServerTimeResult extends SoapTypes.Base {
  status: Status;
  serverTime: SoapTypes.Dateish;
  constructor(props: GetServerTimeResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.typeId = props.typeId;
    this.scriptId = props.scriptId;
  }
}

export class BudgetExchangeRateList extends SoapTypes.Base {
  budgetExchangeRate: BudgetExchangeRate[];
  constructor(props: BudgetExchangeRateList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.budgetExchangeRate = props.budgetExchangeRate;
  }
}

export class InitializeRecord extends SoapTypes.Base {
  type: PlatformCoreTypes.InitializeType;
  reference?: InitializeRef;
  auxReference?: InitializeAuxRef;
  referenceList?: InitializeRefList;
  constructor(props: InitializeRecord) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.type = props.type;
    this.reference = props.reference;
    this.auxReference = props.auxReference;
    this.referenceList = props.referenceList;
  }
}

export class SearchColumnEnumSelectField extends SearchColumnField {
  searchValue?: string;
  constructor(props: SearchColumnEnumSelectField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class SearchColumnDoubleField extends SearchColumnField {
  searchValue?: number;
  constructor(props: SearchColumnDoubleField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class GetBudgetExchangeRateResult extends SoapTypes.Base {
  status: Status;
  budgetExchangeRateList?: BudgetExchangeRateList;
  constructor(props: GetBudgetExchangeRateResult) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.status = props.status;
    this.budgetExchangeRateList = props.budgetExchangeRateList;
  }
}

export class SearchLongCustomField extends SearchCustomField {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchLongFieldOperator;
  constructor(props: SearchLongCustomField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export class TokenPassportSignature extends SoapTypes.Base {
  value?: string;
  algorithm: string;
  constructor(props: TokenPassportSignature) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.value = props.value;
    this.algorithm = props.algorithm;
  }
}

export class ItemAvailabilityFilter extends SoapTypes.Base {
  item: RecordRefList;
  lastQtyAvailableChange?: SoapTypes.Dateish;
  constructor(props: ItemAvailabilityFilter) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.lastQtyAvailableChange = props.lastQtyAvailableChange;
  }
}

export class SearchColumnDateField extends SearchColumnField {
  searchValue?: SoapTypes.Dateish;
  constructor(props: SearchColumnDateField) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.searchValue = props.searchValue;
  }
}

export class SearchColumnCustomFieldList extends SoapTypes.Base {
  customField?: SearchColumnCustomField[];
  constructor(props: SearchColumnCustomFieldList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customField = props.customField;
  }
}
