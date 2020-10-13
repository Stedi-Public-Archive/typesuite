import * as PlatformFaultsTypes from "./platform_faults_types";
import * as PlatformCoreTypes from "./platform_core_types";

export type SearchColumnCustomFieldProps = {
  customLabel?: string;
  internalId?: string;
  scriptId?: string;
};

export class SearchColumnCustomField {
  customLabel?: string;
  internalId?: string;
  scriptId?: string;
  constructor(props: SearchColumnCustomFieldProps) {
    this.customLabel = props.customLabel;
    this.internalId = props.internalId;
    this.scriptId = props.scriptId;
  }
}

export type CustomFieldListProps = {
  customField?: CustomFieldRef[];
};

export class CustomFieldList {
  customField?: CustomFieldRef[];
  constructor(props: CustomFieldListProps) {
    this.customField = props.customField;
  }
}

export type SearchEnumMultiSelectFieldProps = {
  searchValue?: string[];
  operator?: PlatformCoreTypes.SearchEnumMultiSelectFieldOperator;
};

export class SearchEnumMultiSelectField {
  searchValue?: string[];
  operator?: PlatformCoreTypes.SearchEnumMultiSelectFieldOperator;
  constructor(props: SearchEnumMultiSelectFieldProps) {
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export type BaseRefListProps = {
  baseRef?: BaseRef[];
};

export class BaseRefList {
  baseRef?: BaseRef[];
  constructor(props: BaseRefListProps) {
    this.baseRef = props.baseRef;
  }
}

export type DeletedRecordListProps = {
  deletedRecord?: DeletedRecord[];
};

export class DeletedRecordList {
  deletedRecord?: DeletedRecord[];
  constructor(props: DeletedRecordListProps) {
    this.deletedRecord = props.deletedRecord;
  }
}

export type WsRoleListProps = {
  wsRole?: WsRole[];
};

export class WsRoleList {
  wsRole?: WsRole[];
  constructor(props: WsRoleListProps) {
    this.wsRole = props.wsRole;
  }
}

export type SearchCustomFieldProps = {
  internalId?: string;
  scriptId?: string;
};

export class SearchCustomField {
  internalId?: string;
  scriptId?: string;
  constructor(props: SearchCustomFieldProps) {
    this.internalId = props.internalId;
    this.scriptId = props.scriptId;
  }
}

export type SearchBooleanCustomFieldProps = {
  searchValue?: boolean;
} & SearchCustomFieldProps;

export class SearchBooleanCustomField extends SearchCustomField {
  searchValue?: boolean;
  constructor(props: SearchBooleanCustomFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type SearchColumnFieldProps = {
  customLabel?: string;
};

export class SearchColumnField {
  customLabel?: string;
  constructor(props: SearchColumnFieldProps) {
    this.customLabel = props.customLabel;
  }
}

export type BudgetExchangeRateFilterProps = {
  period: RecordRef;
  fromSubsidiary?: RecordRef;
  toSubsidiary?: RecordRef;
};

export class BudgetExchangeRateFilter {
  period: RecordRef;
  fromSubsidiary?: RecordRef;
  toSubsidiary?: RecordRef;
  constructor(props: BudgetExchangeRateFilterProps) {
    this.period = props.period;
    this.fromSubsidiary = props.fromSubsidiary;
    this.toSubsidiary = props.toSubsidiary;
  }
}

export type GetSelectFilterByFieldValueListProps = {
  filterBy: GetSelectFilterByFieldValue[];
};

export class GetSelectFilterByFieldValueList {
  filterBy: GetSelectFilterByFieldValue[];
  constructor(props: GetSelectFilterByFieldValueListProps) {
    this.filterBy = props.filterBy;
  }
}

export type GetSavedSearchResultProps = {
  status: Status;
  totalRecords?: number;
  recordRefList?: RecordRefList;
};

export class GetSavedSearchResult {
  status: Status;
  totalRecords?: number;
  recordRefList?: RecordRefList;
  constructor(props: GetSavedSearchResultProps) {
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.recordRefList = props.recordRefList;
  }
}

export type PostingTransactionSummaryFieldProps = {
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
};

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
  constructor(props: PostingTransactionSummaryFieldProps) {
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

export type SearchColumnLongCustomFieldProps = {
  searchValue?: number;
} & SearchColumnCustomFieldProps;

export class SearchColumnLongCustomField extends SearchColumnCustomField {
  searchValue?: number;
  constructor(props: SearchColumnLongCustomFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type DetachReferenceProps = {
  detachFrom: BaseRef;
};

export class DetachReference {
  detachFrom: BaseRef;
  constructor(props: DetachReferenceProps) {
    this.detachFrom = props.detachFrom;
  }
}

export type DetachBasicReferenceProps = {
  detachedRecord: BaseRef;
} & DetachReferenceProps;

export class DetachBasicReference extends DetachReference {
  detachedRecord: BaseRef;
  constructor(props: DetachBasicReferenceProps) {
    super(props);
    this.detachedRecord = props.detachedRecord;
  }
}

export type SearchDoubleCustomFieldProps = {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchDoubleFieldOperator;
} & SearchCustomFieldProps;

export class SearchDoubleCustomField extends SearchCustomField {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchDoubleFieldOperator;
  constructor(props: SearchDoubleCustomFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export type BaseRefProps = {
  name?: string;
};

export class BaseRef {
  name?: string;
  constructor(props: BaseRefProps) {
    this.name = props.name;
  }
}

export type RecordRefProps = {
  internalId?: string;
  externalId?: string;
  type?: PlatformCoreTypes.RecordType;
} & BaseRefProps;

export class RecordRef extends BaseRef {
  internalId?: string;
  externalId?: string;
  type?: PlatformCoreTypes.RecordType;
  constructor(props: RecordRefProps) {
    super(props);
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.type = props.type;
  }
}

export type CustomizationRefProps = {
  scriptId?: string;
} & RecordRefProps;

export class CustomizationRef extends RecordRef {
  scriptId?: string;
  constructor(props: CustomizationRefProps) {
    super(props);
    this.scriptId = props.scriptId;
  }
}

export type CustomFieldRefProps = {
  internalId?: string;
  scriptId?: string;
};

export class CustomFieldRef {
  internalId?: string;
  scriptId?: string;
  constructor(props: CustomFieldRefProps) {
    this.internalId = props.internalId;
    this.scriptId = props.scriptId;
  }
}

export type DateCustomFieldRefProps = {
  value: string;
} & CustomFieldRefProps;

export class DateCustomFieldRef extends CustomFieldRef {
  value: string;
  constructor(props: DateCustomFieldRefProps) {
    super(props);
    this.value = props.value;
  }
}

export type SearchTextNumberFieldProps = {
  searchValue?: string;
  searchValue2?: string;
  operator?: PlatformCoreTypes.SearchTextNumberFieldOperator;
};

export class SearchTextNumberField {
  searchValue?: string;
  searchValue2?: string;
  operator?: PlatformCoreTypes.SearchTextNumberFieldOperator;
  constructor(props: SearchTextNumberFieldProps) {
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export type SearchMultiSelectFieldProps = {
  searchValue?: RecordRef[];
  operator?: PlatformCoreTypes.SearchMultiSelectFieldOperator;
};

export class SearchMultiSelectField {
  searchValue?: RecordRef[];
  operator?: PlatformCoreTypes.SearchMultiSelectFieldOperator;
  constructor(props: SearchMultiSelectFieldProps) {
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export type DimensionListProps = {
  dimension?: DimensionRef[];
};

export class DimensionList {
  dimension?: DimensionRef[];
  constructor(props: DimensionListProps) {
    this.dimension = props.dimension;
  }
}

export type StatusDetailProps = {
  code?: PlatformFaultsTypes.StatusDetailCodeType;
  message?: string;
  afterSubmitFailed?: boolean;
  type?: PlatformFaultsTypes.StatusDetailType;
};

export class StatusDetail {
  code?: PlatformFaultsTypes.StatusDetailCodeType;
  message?: string;
  afterSubmitFailed?: boolean;
  type?: PlatformFaultsTypes.StatusDetailType;
  constructor(props: StatusDetailProps) {
    this.code = props.code;
    this.message = props.message;
    this.afterSubmitFailed = props.afterSubmitFailed;
    this.type = props.type;
  }
}

export type StringCustomFieldRefProps = {
  value: string;
} & CustomFieldRefProps;

export class StringCustomFieldRef extends CustomFieldRef {
  value: string;
  constructor(props: StringCustomFieldRefProps) {
    super(props);
    this.value = props.value;
  }
}

export type InitializeAuxRefProps = {
  type?: PlatformCoreTypes.InitializeAuxRefType;
  internalId?: string;
  externalId?: string;
  scriptId?: string;
} & BaseRefProps;

export class InitializeAuxRef extends BaseRef {
  type?: PlatformCoreTypes.InitializeAuxRefType;
  internalId?: string;
  externalId?: string;
  scriptId?: string;
  constructor(props: InitializeAuxRefProps) {
    super(props);
    this.type = props.type;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.scriptId = props.scriptId;
  }
}

export type GetSelectValueResultProps = {
  status: Status;
  totalRecords?: number;
  totalPages?: number;
  baseRefList?: BaseRefList;
};

export class GetSelectValueResult {
  status: Status;
  totalRecords?: number;
  totalPages?: number;
  baseRefList?: BaseRefList;
  constructor(props: GetSelectValueResultProps) {
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.totalPages = props.totalPages;
    this.baseRefList = props.baseRefList;
  }
}

export class SearchRow {}

export type SearchColumnMultiSelectCustomFieldProps = {
  searchValue?: ListOrRecordRef[];
} & SearchColumnCustomFieldProps;

export class SearchColumnMultiSelectCustomField extends SearchColumnCustomField {
  searchValue?: ListOrRecordRef[];
  constructor(props: SearchColumnMultiSelectCustomFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type SsoCredentialsProps = {
  email: string;
  password: string;
  account: string;
  role?: RecordRef;
  authenticationToken: string;
  partnerId: string;
};

export class SsoCredentials {
  email: string;
  password: string;
  account: string;
  role?: RecordRef;
  authenticationToken: string;
  partnerId: string;
  constructor(props: SsoCredentialsProps) {
    this.email = props.email;
    this.password = props.password;
    this.account = props.account;
    this.role = props.role;
    this.authenticationToken = props.authenticationToken;
    this.partnerId = props.partnerId;
  }
}

export type SearchColumnDateCustomFieldProps = {
  searchValue?: string;
} & SearchColumnCustomFieldProps;

export class SearchColumnDateCustomField extends SearchColumnCustomField {
  searchValue?: string;
  constructor(props: SearchColumnDateCustomFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type SearchStringCustomFieldProps = {
  searchValue?: string;
  operator?: PlatformCoreTypes.SearchStringFieldOperator;
} & SearchCustomFieldProps;

export class SearchStringCustomField extends SearchCustomField {
  searchValue?: string;
  operator?: PlatformCoreTypes.SearchStringFieldOperator;
  constructor(props: SearchStringCustomFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export type SearchColumnStringFieldProps = {
  searchValue?: string;
} & SearchColumnFieldProps;

export class SearchColumnStringField extends SearchColumnField {
  searchValue?: string;
  constructor(props: SearchColumnStringFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type GetAllResultProps = {
  status: Status;
  totalRecords?: number;
  recordList?: RecordList;
};

export class GetAllResult {
  status: Status;
  totalRecords?: number;
  recordList?: RecordList;
  constructor(props: GetAllResultProps) {
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.recordList = props.recordList;
  }
}

export type CustomTransactionRefProps = {
  internalId?: string;
  externalId?: string;
  typeId?: string;
  scriptId?: string;
} & BaseRefProps;

export class CustomTransactionRef extends BaseRef {
  internalId?: string;
  externalId?: string;
  typeId?: string;
  scriptId?: string;
  constructor(props: CustomTransactionRefProps) {
    super(props);
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.typeId = props.typeId;
    this.scriptId = props.scriptId;
  }
}

export type CurrencyRateListProps = {
  currencyRate?: CurrencyRate[];
};

export class CurrencyRateList {
  currencyRate?: CurrencyRate[];
  constructor(props: CurrencyRateListProps) {
    this.currencyRate = props.currencyRate;
  }
}

export type DataCenterUrlsProps = {
  restDomain: string;
  webservicesDomain: string;
  systemDomain: string;
};

export class DataCenterUrls {
  restDomain: string;
  webservicesDomain: string;
  systemDomain: string;
  constructor(props: DataCenterUrlsProps) {
    this.restDomain = props.restDomain;
    this.webservicesDomain = props.webservicesDomain;
    this.systemDomain = props.systemDomain;
  }
}

export type SsoPassportProps = {
  authenticationToken: string;
  partnerId: string;
  partnerAccount: string;
  partnerUserId: string;
};

export class SsoPassport {
  authenticationToken: string;
  partnerId: string;
  partnerAccount: string;
  partnerUserId: string;
  constructor(props: SsoPassportProps) {
    this.authenticationToken = props.authenticationToken;
    this.partnerId = props.partnerId;
    this.partnerAccount = props.partnerAccount;
    this.partnerUserId = props.partnerUserId;
  }
}

export type PostingTransactionSummaryProps = {
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
};

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
  constructor(props: PostingTransactionSummaryProps) {
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

export type PostingTransactionSummaryFilterProps = {
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
};

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
  constructor(props: PostingTransactionSummaryFilterProps) {
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

export type SearchColumnBooleanCustomFieldProps = {
  searchValue?: boolean;
} & SearchColumnCustomFieldProps;

export class SearchColumnBooleanCustomField extends SearchColumnCustomField {
  searchValue?: boolean;
  constructor(props: SearchColumnBooleanCustomFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type SearchEnumMultiSelectCustomFieldProps = {
  searchValue?: string[];
  operator?: PlatformCoreTypes.SearchEnumMultiSelectFieldOperator;
} & SearchCustomFieldProps;

export class SearchEnumMultiSelectCustomField extends SearchCustomField {
  searchValue?: string[];
  operator?: PlatformCoreTypes.SearchEnumMultiSelectFieldOperator;
  constructor(props: SearchEnumMultiSelectCustomFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export type SearchResultProps = {
  status: Status;
  totalRecords?: number;
  pageSize?: number;
  totalPages?: number;
  pageIndex?: number;
  searchId?: string;
  recordList?: RecordList;
  searchRowList?: SearchRowList;
};

export class SearchResult {
  status: Status;
  totalRecords?: number;
  pageSize?: number;
  totalPages?: number;
  pageIndex?: number;
  searchId?: string;
  recordList?: RecordList;
  searchRowList?: SearchRowList;
  constructor(props: SearchResultProps) {
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

export type GetCurrencyRateResultProps = {
  status: Status;
  currencyRateList?: CurrencyRateList;
};

export class GetCurrencyRateResult {
  status: Status;
  currencyRateList?: CurrencyRateList;
  constructor(props: GetCurrencyRateResultProps) {
    this.status = props.status;
    this.currencyRateList = props.currencyRateList;
  }
}

export type SelectCustomFieldRefProps = {
  value: ListOrRecordRef;
} & CustomFieldRefProps;

export class SelectCustomFieldRef extends CustomFieldRef {
  value: ListOrRecordRef;
  constructor(props: SelectCustomFieldRefProps) {
    super(props);
    this.value = props.value;
  }
}

export type RecordRefListProps = {
  recordRef?: RecordRef[];
};

export class RecordRefList {
  recordRef?: RecordRef[];
  constructor(props: RecordRefListProps) {
    this.recordRef = props.recordRef;
  }
}

export type SearchDoubleFieldProps = {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchDoubleFieldOperator;
};

export class SearchDoubleField {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchDoubleFieldOperator;
  constructor(props: SearchDoubleFieldProps) {
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export type SearchRowListProps = {
  searchRow?: SearchRow[];
};

export class SearchRowList {
  searchRow?: SearchRow[];
  constructor(props: SearchRowListProps) {
    this.searchRow = props.searchRow;
  }
}

export type AsyncStatusResultProps = {
  jobId: string;
  status: PlatformCoreTypes.AsyncStatusType;
  percentCompleted: number;
  estRemainingDuration: number;
};

export class AsyncStatusResult {
  jobId: string;
  status: PlatformCoreTypes.AsyncStatusType;
  percentCompleted: number;
  estRemainingDuration: number;
  constructor(props: AsyncStatusResultProps) {
    this.jobId = props.jobId;
    this.status = props.status;
    this.percentCompleted = props.percentCompleted;
    this.estRemainingDuration = props.estRemainingDuration;
  }
}

export class SearchRowBasic extends SearchRow {}

export type ChangeEmailProps = {
  currentPassword: string;
  newEmail: string;
  newEmail2: string;
  justThisAccount?: boolean;
};

export class ChangeEmail {
  currentPassword: string;
  newEmail: string;
  newEmail2: string;
  justThisAccount?: boolean;
  constructor(props: ChangeEmailProps) {
    this.currentPassword = props.currentPassword;
    this.newEmail = props.newEmail;
    this.newEmail2 = props.newEmail2;
    this.justThisAccount = props.justThisAccount;
  }
}

export class SearchRecord {}

export class SearchRecordBasic extends SearchRecord {}

export type SearchCustomFieldListProps = {
  customField?: SearchCustomField[];
};

export class SearchCustomFieldList {
  customField?: SearchCustomField[];
  constructor(props: SearchCustomFieldListProps) {
    this.customField = props.customField;
  }
}

export type DeletionReasonProps = {
  deletionReasonCode: RecordRef;
  deletionReasonMemo?: string;
};

export class DeletionReason {
  deletionReasonCode: RecordRef;
  deletionReasonMemo?: string;
  constructor(props: DeletionReasonProps) {
    this.deletionReasonCode = props.deletionReasonCode;
    this.deletionReasonMemo = props.deletionReasonMemo;
  }
}

export type InitializeRefProps = {
  type?: PlatformCoreTypes.InitializeRefType;
  internalId?: string;
  externalId?: string;
} & BaseRefProps;

export class InitializeRef extends BaseRef {
  type?: PlatformCoreTypes.InitializeRefType;
  internalId?: string;
  externalId?: string;
  constructor(props: InitializeRefProps) {
    super(props);
    this.type = props.type;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type AttachReferenceProps = {
  attachTo: BaseRef;
};

export class AttachReference {
  attachTo: BaseRef;
  constructor(props: AttachReferenceProps) {
    this.attachTo = props.attachTo;
  }
}

export type AttachContactReferenceProps = {
  contact: RecordRef;
  contactRole?: RecordRef;
} & AttachReferenceProps;

export class AttachContactReference extends AttachReference {
  contact: RecordRef;
  contactRole?: RecordRef;
  constructor(props: AttachContactReferenceProps) {
    super(props);
    this.contact = props.contact;
    this.contactRole = props.contactRole;
  }
}

export type SearchColumnBooleanFieldProps = {
  searchValue?: boolean;
} & SearchColumnFieldProps;

export class SearchColumnBooleanField extends SearchColumnField {
  searchValue?: boolean;
  constructor(props: SearchColumnBooleanFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type RecordProps = {
  nullFieldList?: NullField;
};

export class Record {
  nullFieldList?: NullField;
  constructor(props: RecordProps) {
    this.nullFieldList = props.nullFieldList;
  }
}

export type AttachBasicReferenceProps = {
  attachedRecord: BaseRef;
} & AttachReferenceProps;

export class AttachBasicReference extends AttachReference {
  attachedRecord: BaseRef;
  constructor(props: AttachBasicReferenceProps) {
    super(props);
    this.attachedRecord = props.attachedRecord;
  }
}

export type SearchBooleanField = boolean | { searchValue?: boolean };

export type NullFieldProps = {
  name?: string[];
};

export class NullField {
  name?: string[];
  constructor(props: NullFieldProps) {
    this.name = props.name;
  }
}

export type GetItemAvailabilityResultProps = {
  status: Status;
  itemAvailabilityList?: ItemAvailabilityList;
};

export class GetItemAvailabilityResult {
  status: Status;
  itemAvailabilityList?: ItemAvailabilityList;
  constructor(props: GetItemAvailabilityResultProps) {
    this.status = props.status;
    this.itemAvailabilityList = props.itemAvailabilityList;
  }
}

export type SearchColumnTextNumberFieldProps = {
  searchValue?: string;
} & SearchColumnFieldProps;

export class SearchColumnTextNumberField extends SearchColumnField {
  searchValue?: string;
  constructor(props: SearchColumnTextNumberFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type ItemAvailabilityProps = {
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
};

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
  constructor(props: ItemAvailabilityProps) {
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

export type CurrencyRateFilterProps = {
  baseCurrency?: RecordRef;
  fromCurrency?: RecordRef;
  effectiveDate?: string;
};

export class CurrencyRateFilter {
  baseCurrency?: RecordRef;
  fromCurrency?: RecordRef;
  effectiveDate?: string;
  constructor(props: CurrencyRateFilterProps) {
    this.baseCurrency = props.baseCurrency;
    this.fromCurrency = props.fromCurrency;
    this.effectiveDate = props.effectiveDate;
  }
}

export type RecordListProps = {
  record?: Record[];
};

export class RecordList {
  record?: Record[];
  constructor(props: RecordListProps) {
    this.record = props.record;
  }
}

export type GetSelectValueFieldDescriptionProps = {
  recordType?: PlatformCoreTypes.RecordType;
  customRecordType?: RecordRef;
  customTransactionType?: RecordRef;
  sublist?: string;
  field: string;
  customForm?: RecordRef;
  filter?: GetSelectValueFilter;
  filterByValueList?: GetSelectFilterByFieldValueList;
};

export class GetSelectValueFieldDescription {
  recordType?: PlatformCoreTypes.RecordType;
  customRecordType?: RecordRef;
  customTransactionType?: RecordRef;
  sublist?: string;
  field: string;
  customForm?: RecordRef;
  filter?: GetSelectValueFilter;
  filterByValueList?: GetSelectFilterByFieldValueList;
  constructor(props: GetSelectValueFieldDescriptionProps) {
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

export type BooleanCustomFieldRefProps = {
  value: boolean;
} & CustomFieldRefProps;

export class BooleanCustomFieldRef extends CustomFieldRef {
  value: boolean;
  constructor(props: BooleanCustomFieldRefProps) {
    super(props);
    this.value = props.value;
  }
}

export type SearchColumnSelectFieldProps = {
  searchValue?: RecordRef;
} & SearchColumnFieldProps;

export class SearchColumnSelectField extends SearchColumnField {
  searchValue?: RecordRef;
  constructor(props: SearchColumnSelectFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type DeletedRecordProps = {
  deletedDate?: string;
  record?: BaseRef;
};

export class DeletedRecord {
  deletedDate?: string;
  record?: BaseRef;
  constructor(props: DeletedRecordProps) {
    this.deletedDate = props.deletedDate;
    this.record = props.record;
  }
}

export type WsRoleProps = {
  role?: RecordRef;
  isDefault?: boolean;
  isInactive?: boolean;
  isLoggedInRole?: boolean;
};

export class WsRole {
  role?: RecordRef;
  isDefault?: boolean;
  isInactive?: boolean;
  isLoggedInRole?: boolean;
  constructor(props: WsRoleProps) {
    this.role = props.role;
    this.isDefault = props.isDefault;
    this.isInactive = props.isInactive;
    this.isLoggedInRole = props.isLoggedInRole;
  }
}

export type GetDeletedResultProps = {
  status: Status;
  totalRecords?: number;
  pageSize?: number;
  totalPages?: number;
  pageIndex?: number;
  deletedRecordList?: DeletedRecordList;
};

export class GetDeletedResult {
  status: Status;
  totalRecords?: number;
  pageSize?: number;
  totalPages?: number;
  pageIndex?: number;
  deletedRecordList?: DeletedRecordList;
  constructor(props: GetDeletedResultProps) {
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.pageSize = props.pageSize;
    this.totalPages = props.totalPages;
    this.pageIndex = props.pageIndex;
    this.deletedRecordList = props.deletedRecordList;
  }
}

export type MultiSelectCustomFieldRefProps = {
  value: ListOrRecordRef[];
} & CustomFieldRefProps;

export class MultiSelectCustomFieldRef extends CustomFieldRef {
  value: ListOrRecordRef[];
  constructor(props: MultiSelectCustomFieldRefProps) {
    super(props);
    this.value = props.value;
  }
}

export type SearchColumnLongFieldProps = {
  searchValue?: number;
} & SearchColumnFieldProps;

export class SearchColumnLongField extends SearchColumnField {
  searchValue?: number;
  constructor(props: SearchColumnLongFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type GetSelectFilterByFieldValueProps = {
  sublist?: string;
  field: string;
  internalId: string;
};

export class GetSelectFilterByFieldValue {
  sublist?: string;
  field: string;
  internalId: string;
  constructor(props: GetSelectFilterByFieldValueProps) {
    this.sublist = props.sublist;
    this.field = props.field;
    this.internalId = props.internalId;
  }
}

export type GetDeletedFilterProps = {
  deletedDate?: SearchDateField;
  type?: SearchEnumMultiSelectField;
  scriptId?: SearchStringField;
};

export class GetDeletedFilter {
  deletedDate?: SearchDateField;
  type?: SearchEnumMultiSelectField;
  scriptId?: SearchStringField;
  constructor(props: GetDeletedFilterProps) {
    this.deletedDate = props.deletedDate;
    this.type = props.type;
    this.scriptId = props.scriptId;
  }
}

export type ItemAvailabilityListProps = {
  itemAvailability: ItemAvailability[];
};

export class ItemAvailabilityList {
  itemAvailability: ItemAvailability[];
  constructor(props: ItemAvailabilityListProps) {
    this.itemAvailability = props.itemAvailability;
  }
}

export type SearchDateFieldProps = {
  predefinedSearchValue?: PlatformCoreTypes.SearchDate;
  searchValue?: string;
  searchValue2?: string;
  operator?: PlatformCoreTypes.SearchDateFieldOperator;
};

export class SearchDateField {
  predefinedSearchValue?: PlatformCoreTypes.SearchDate;
  searchValue?: string;
  searchValue2?: string;
  operator?: PlatformCoreTypes.SearchDateFieldOperator;
  constructor(props: SearchDateFieldProps) {
    this.predefinedSearchValue = props.predefinedSearchValue;
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export type SearchColumnSelectCustomFieldProps = {
  searchValue?: ListOrRecordRef;
} & SearchColumnCustomFieldProps;

export class SearchColumnSelectCustomField extends SearchColumnCustomField {
  searchValue?: ListOrRecordRef;
  constructor(props: SearchColumnSelectCustomFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type GetDataCenterUrlsResultProps = {
  status: Status;
  dataCenterUrls?: DataCenterUrls;
};

export class GetDataCenterUrlsResult {
  status: Status;
  dataCenterUrls?: DataCenterUrls;
  constructor(props: GetDataCenterUrlsResultProps) {
    this.status = props.status;
    this.dataCenterUrls = props.dataCenterUrls;
  }
}

export type PostingTransactionSummaryListProps = {
  postingTransactionSummary: PostingTransactionSummary[];
};

export class PostingTransactionSummaryList {
  postingTransactionSummary: PostingTransactionSummary[];
  constructor(props: PostingTransactionSummaryListProps) {
    this.postingTransactionSummary = props.postingTransactionSummary;
  }
}

export type DimensionRefProps = {
  scriptId?: string;
};

export class DimensionRef {
  scriptId?: string;
  constructor(props: DimensionRefProps) {
    this.scriptId = props.scriptId;
  }
}

export type SearchLongFieldProps = {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchLongFieldOperator;
};

export class SearchLongField {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchLongFieldOperator;
  constructor(props: SearchLongFieldProps) {
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export type CustomizationRefListProps = {
  customizationRef?: CustomizationRef[];
};

export class CustomizationRefList {
  customizationRef?: CustomizationRef[];
  constructor(props: CustomizationRefListProps) {
    this.customizationRef = props.customizationRef;
  }
}

export type GetSavedSearchRecordProps = {
  searchType?: PlatformCoreTypes.SearchRecordType;
};

export class GetSavedSearchRecord {
  searchType?: PlatformCoreTypes.SearchRecordType;
  constructor(props: GetSavedSearchRecordProps) {
    this.searchType = props.searchType;
  }
}

export type CurrencyRateProps = {
  baseCurrency: RecordRef;
  fromCurrency: RecordRef;
  exchangeRate: number;
  effectiveDate: string;
};

export class CurrencyRate {
  baseCurrency: RecordRef;
  fromCurrency: RecordRef;
  exchangeRate: number;
  effectiveDate: string;
  constructor(props: CurrencyRateProps) {
    this.baseCurrency = props.baseCurrency;
    this.fromCurrency = props.fromCurrency;
    this.exchangeRate = props.exchangeRate;
    this.effectiveDate = props.effectiveDate;
  }
}

export type DurationProps = {
  timeSpan: number;
  unit: PlatformCoreTypes.DurationUnit;
};

export class Duration {
  timeSpan: number;
  unit: PlatformCoreTypes.DurationUnit;
  constructor(props: DurationProps) {
    this.timeSpan = props.timeSpan;
    this.unit = props.unit;
  }
}

export type CustomizationTypeProps = {
  getCustomizationType?: PlatformCoreTypes.GetCustomizationType;
};

export class CustomizationType {
  getCustomizationType?: PlatformCoreTypes.GetCustomizationType;
  constructor(props: CustomizationTypeProps) {
    this.getCustomizationType = props.getCustomizationType;
  }
}

export type SearchColumnDoubleCustomFieldProps = {
  searchValue?: number;
} & SearchColumnCustomFieldProps;

export class SearchColumnDoubleCustomField extends SearchColumnCustomField {
  searchValue?: number;
  constructor(props: SearchColumnDoubleCustomFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type ListOrRecordRefProps = {
  name?: string;
  internalId?: string;
  externalId?: string;
  typeId?: string;
};

export class ListOrRecordRef {
  name?: string;
  internalId?: string;
  externalId?: string;
  typeId?: string;
  constructor(props: ListOrRecordRefProps) {
    this.name = props.name;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.typeId = props.typeId;
  }
}

export type LongCustomFieldRefProps = {
  value: number;
} & CustomFieldRefProps;

export class LongCustomFieldRef extends CustomFieldRef {
  value: number;
  constructor(props: LongCustomFieldRefProps) {
    super(props);
    this.value = props.value;
  }
}

export type TokenPassportProps = {
  account: string;
  consumerKey: string;
  token: string;
  nonce: string;
  timestamp: number;
  signature: TokenPassportSignature;
};

export class TokenPassport {
  account: string;
  consumerKey: string;
  token: string;
  nonce: string;
  timestamp: number;
  signature: TokenPassportSignature;
  constructor(props: TokenPassportProps) {
    this.account = props.account;
    this.consumerKey = props.consumerKey;
    this.token = props.token;
    this.nonce = props.nonce;
    this.timestamp = props.timestamp;
    this.signature = props.signature;
  }
}

export type DoubleCustomFieldRefProps = {
  value: number;
} & CustomFieldRefProps;

export class DoubleCustomFieldRef extends CustomFieldRef {
  value: number;
  constructor(props: DoubleCustomFieldRefProps) {
    super(props);
    this.value = props.value;
  }
}

export type GetCustomizationIdResultProps = {
  status: Status;
  totalRecords?: number;
  customizationRefList?: CustomizationRefList;
};

export class GetCustomizationIdResult {
  status: Status;
  totalRecords?: number;
  customizationRefList?: CustomizationRefList;
  constructor(props: GetCustomizationIdResultProps) {
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.customizationRefList = props.customizationRefList;
  }
}

export type GetSelectValueFilterProps = {
  filterValue: string;
  operator: PlatformCoreTypes.GetSelectValueFilterOperator;
};

export class GetSelectValueFilter {
  filterValue: string;
  operator: PlatformCoreTypes.GetSelectValueFilterOperator;
  constructor(props: GetSelectValueFilterProps) {
    this.filterValue = props.filterValue;
    this.operator = props.operator;
  }
}

export type PassportProps = {
  email: string;
  password: string;
  account: string;
  role?: RecordRef;
};

export class Passport {
  email: string;
  password: string;
  account: string;
  role?: RecordRef;
  constructor(props: PassportProps) {
    this.email = props.email;
    this.password = props.password;
    this.account = props.account;
    this.role = props.role;
  }
}

export type BudgetExchangeRateProps = {
  period: RecordRef;
  fromSubsidiary: RecordRef;
  toSubsidiary: RecordRef;
  currentRate?: number;
  averageRate?: number;
  historicalRate?: number;
};

export class BudgetExchangeRate {
  period: RecordRef;
  fromSubsidiary: RecordRef;
  toSubsidiary: RecordRef;
  currentRate?: number;
  averageRate?: number;
  historicalRate?: number;
  constructor(props: BudgetExchangeRateProps) {
    this.period = props.period;
    this.fromSubsidiary = props.fromSubsidiary;
    this.toSubsidiary = props.toSubsidiary;
    this.currentRate = props.currentRate;
    this.averageRate = props.averageRate;
    this.historicalRate = props.historicalRate;
  }
}

export type StatusProps = {
  statusDetail?: StatusDetail[];
  isSuccess?: boolean;
};

export class Status {
  statusDetail?: StatusDetail[];
  isSuccess?: boolean;
  constructor(props: StatusProps) {
    this.statusDetail = props.statusDetail;
    this.isSuccess = props.isSuccess;
  }
}

export type SearchDateCustomFieldProps = {
  predefinedSearchValue?: PlatformCoreTypes.SearchDate;
  searchValue?: string;
  searchValue2?: string;
  operator?: PlatformCoreTypes.SearchDateFieldOperator;
} & SearchCustomFieldProps;

export class SearchDateCustomField extends SearchCustomField {
  predefinedSearchValue?: PlatformCoreTypes.SearchDate;
  searchValue?: string;
  searchValue2?: string;
  operator?: PlatformCoreTypes.SearchDateFieldOperator;
  constructor(props: SearchDateCustomFieldProps) {
    super(props);
    this.predefinedSearchValue = props.predefinedSearchValue;
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export type SearchMultiSelectCustomFieldProps = {
  searchValue?: ListOrRecordRef[];
  operator?: PlatformCoreTypes.SearchMultiSelectFieldOperator;
} & SearchCustomFieldProps;

export class SearchMultiSelectCustomField extends SearchCustomField {
  searchValue?: ListOrRecordRef[];
  operator?: PlatformCoreTypes.SearchMultiSelectFieldOperator;
  constructor(props: SearchMultiSelectCustomFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export type StringDimensionRefProps = {
  value: string;
} & DimensionRefProps;

export class StringDimensionRef extends DimensionRef {
  value: string;
  constructor(props: StringDimensionRefProps) {
    super(props);
    this.value = props.value;
  }
}

export type GetPostingTransactionSummaryResultProps = {
  status: Status;
  totalRecords?: number;
  pageSize?: number;
  totalPages?: number;
  pageIndex?: number;
  operationId?: string;
  postingTransactionSummaryList?: PostingTransactionSummaryList;
};

export class GetPostingTransactionSummaryResult {
  status: Status;
  totalRecords?: number;
  pageSize?: number;
  totalPages?: number;
  pageIndex?: number;
  operationId?: string;
  postingTransactionSummaryList?: PostingTransactionSummaryList;
  constructor(props: GetPostingTransactionSummaryResultProps) {
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.pageSize = props.pageSize;
    this.totalPages = props.totalPages;
    this.pageIndex = props.pageIndex;
    this.operationId = props.operationId;
    this.postingTransactionSummaryList = props.postingTransactionSummaryList;
  }
}

export type SelectDimensionRefProps = {
  value: ListOrRecordRef;
} & DimensionRefProps;

export class SelectDimensionRef extends DimensionRef {
  value: ListOrRecordRef;
  constructor(props: SelectDimensionRefProps) {
    super(props);
    this.value = props.value;
  }
}

export type SearchColumnStringCustomFieldProps = {
  searchValue?: string;
} & SearchColumnCustomFieldProps;

export class SearchColumnStringCustomField extends SearchColumnCustomField {
  searchValue?: string;
  constructor(props: SearchColumnStringCustomFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type GetAllRecordProps = {
  recordType?: PlatformCoreTypes.GetAllRecordType;
};

export class GetAllRecord {
  recordType?: PlatformCoreTypes.GetAllRecordType;
  constructor(props: GetAllRecordProps) {
    this.recordType = props.recordType;
  }
}

export type SearchStringFieldProps = {
  searchValue?: string;
  operator?: PlatformCoreTypes.SearchStringFieldOperator;
};

export class SearchStringField {
  searchValue?: string;
  operator?: PlatformCoreTypes.SearchStringFieldOperator;
  constructor(props: SearchStringFieldProps) {
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export type InitializeRefListProps = {
  initializeRef?: InitializeRef[];
};

export class InitializeRefList {
  initializeRef?: InitializeRef[];
  constructor(props: InitializeRefListProps) {
    this.initializeRef = props.initializeRef;
  }
}

export type ChangePasswordProps = {
  currentPassword: string;
  newPassword?: string;
  newPassword2?: string;
};

export class ChangePassword {
  currentPassword: string;
  newPassword?: string;
  newPassword2?: string;
  constructor(props: ChangePasswordProps) {
    this.currentPassword = props.currentPassword;
    this.newPassword = props.newPassword;
    this.newPassword2 = props.newPassword2;
  }
}

export type SearchColumnEnumMultiSelectCustomFieldProps = {
  searchValue?: string[];
} & SearchColumnCustomFieldProps;

export class SearchColumnEnumMultiSelectCustomField extends SearchColumnCustomField {
  searchValue?: string[];
  constructor(props: SearchColumnEnumMultiSelectCustomFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type UpdateInviteeStatusReferenceProps = {
  eventId: RecordRef;
  responseCode: PlatformCoreTypes.CalendarEventAttendeeResponse;
};

export class UpdateInviteeStatusReference {
  eventId: RecordRef;
  responseCode: PlatformCoreTypes.CalendarEventAttendeeResponse;
  constructor(props: UpdateInviteeStatusReferenceProps) {
    this.eventId = props.eventId;
    this.responseCode = props.responseCode;
  }
}

export type GetServerTimeResultProps = {
  status: Status;
  serverTime: string;
};

export class GetServerTimeResult {
  status: Status;
  serverTime: string;
  constructor(props: GetServerTimeResultProps) {
    this.status = props.status;
    this.serverTime = props.serverTime;
  }
}

export type CustomRecordRefProps = {
  internalId?: string;
  externalId?: string;
  typeId?: string;
  scriptId?: string;
} & BaseRefProps;

export class CustomRecordRef extends BaseRef {
  internalId?: string;
  externalId?: string;
  typeId?: string;
  scriptId?: string;
  constructor(props: CustomRecordRefProps) {
    super(props);
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.typeId = props.typeId;
    this.scriptId = props.scriptId;
  }
}

export type BudgetExchangeRateListProps = {
  budgetExchangeRate: BudgetExchangeRate[];
};

export class BudgetExchangeRateList {
  budgetExchangeRate: BudgetExchangeRate[];
  constructor(props: BudgetExchangeRateListProps) {
    this.budgetExchangeRate = props.budgetExchangeRate;
  }
}

export type InitializeRecordProps = {
  type: PlatformCoreTypes.InitializeType;
  reference?: InitializeRef;
  auxReference?: InitializeAuxRef;
  referenceList?: InitializeRefList;
};

export class InitializeRecord {
  type: PlatformCoreTypes.InitializeType;
  reference?: InitializeRef;
  auxReference?: InitializeAuxRef;
  referenceList?: InitializeRefList;
  constructor(props: InitializeRecordProps) {
    this.type = props.type;
    this.reference = props.reference;
    this.auxReference = props.auxReference;
    this.referenceList = props.referenceList;
  }
}

export type SearchColumnEnumSelectFieldProps = {
  searchValue?: string;
} & SearchColumnFieldProps;

export class SearchColumnEnumSelectField extends SearchColumnField {
  searchValue?: string;
  constructor(props: SearchColumnEnumSelectFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type SearchColumnDoubleFieldProps = {
  searchValue?: number;
} & SearchColumnFieldProps;

export class SearchColumnDoubleField extends SearchColumnField {
  searchValue?: number;
  constructor(props: SearchColumnDoubleFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type GetBudgetExchangeRateResultProps = {
  status: Status;
  budgetExchangeRateList?: BudgetExchangeRateList;
};

export class GetBudgetExchangeRateResult {
  status: Status;
  budgetExchangeRateList?: BudgetExchangeRateList;
  constructor(props: GetBudgetExchangeRateResultProps) {
    this.status = props.status;
    this.budgetExchangeRateList = props.budgetExchangeRateList;
  }
}

export type SearchLongCustomFieldProps = {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchLongFieldOperator;
} & SearchCustomFieldProps;

export class SearchLongCustomField extends SearchCustomField {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchLongFieldOperator;
  constructor(props: SearchLongCustomFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export type TokenPassportSignatureProps = {
  value?: string;
  algorithm: string;
};

export class TokenPassportSignature {
  value?: string;
  algorithm: string;
  constructor(props: TokenPassportSignatureProps) {
    this.value = props.value;
    this.algorithm = props.algorithm;
  }
}

export type ItemAvailabilityFilterProps = {
  item: RecordRefList;
  lastQtyAvailableChange?: string;
};

export class ItemAvailabilityFilter {
  item: RecordRefList;
  lastQtyAvailableChange?: string;
  constructor(props: ItemAvailabilityFilterProps) {
    this.item = props.item;
    this.lastQtyAvailableChange = props.lastQtyAvailableChange;
  }
}

export type SearchColumnDateFieldProps = {
  searchValue?: string;
} & SearchColumnFieldProps;

export class SearchColumnDateField extends SearchColumnField {
  searchValue?: string;
  constructor(props: SearchColumnDateFieldProps) {
    super(props);
    this.searchValue = props.searchValue;
  }
}

export type SearchColumnCustomFieldListProps = {
  customField?: SearchColumnCustomField[];
};

export class SearchColumnCustomFieldList {
  customField?: SearchColumnCustomField[];
  constructor(props: SearchColumnCustomFieldListProps) {
    this.customField = props.customField;
  }
}
