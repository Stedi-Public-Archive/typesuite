import * as PlatformFaultsTypes from "./platform_faults_types";
import * as PlatformCoreTypes from "./platform_core_types";
import { SoapMappingBase, propsWithMappingsName } from "../../soap-types";
const MAPPINGS_NAME = "com_netsuite_webservices_platform_core_2019_2";
export type SearchColumnCustomFieldProps = {
  customLabel?: string;
  internalId?: string;
  scriptId?: string;
};

export class SearchColumnCustomField extends SoapMappingBase {
  customLabel?: string;
  internalId?: string;
  scriptId?: string;
  constructor(props: SearchColumnCustomFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.customLabel = props.customLabel;
    this.internalId = props.internalId;
    this.scriptId = props.scriptId;
  }
}

export type CustomFieldListProps = {
  customField?: CustomFieldRef[];
};

export class CustomFieldList extends SoapMappingBase {
  customField?: CustomFieldRef[];
  constructor(props: CustomFieldListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.customField = props.customField;
  }
}

export type SearchEnumMultiSelectFieldProps = {
  searchValue?: string[];
  operator?: PlatformCoreTypes.SearchEnumMultiSelectFieldOperator;
};

export class SearchEnumMultiSelectField extends SoapMappingBase {
  searchValue?: string[];
  operator?: PlatformCoreTypes.SearchEnumMultiSelectFieldOperator;
  constructor(props: SearchEnumMultiSelectFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export type BaseRefListProps = {
  baseRef?: BaseRef[];
};

export class BaseRefList extends SoapMappingBase {
  baseRef?: BaseRef[];
  constructor(props: BaseRefListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.baseRef = props.baseRef;
  }
}

export type DeletedRecordListProps = {
  deletedRecord?: DeletedRecord[];
};

export class DeletedRecordList extends SoapMappingBase {
  deletedRecord?: DeletedRecord[];
  constructor(props: DeletedRecordListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.deletedRecord = props.deletedRecord;
  }
}

export type WsRoleListProps = {
  wsRole?: WsRole[];
};

export class WsRoleList extends SoapMappingBase {
  wsRole?: WsRole[];
  constructor(props: WsRoleListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.wsRole = props.wsRole;
  }
}

export type SearchCustomFieldProps = {
  internalId?: string;
  scriptId?: string;
};

export class SearchCustomField extends SoapMappingBase {
  internalId?: string;
  scriptId?: string;
  constructor(props: SearchCustomFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
  }
}

export type SearchColumnFieldProps = {
  customLabel?: string;
};

export class SearchColumnField extends SoapMappingBase {
  customLabel?: string;
  constructor(props: SearchColumnFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.customLabel = props.customLabel;
  }
}

export type BudgetExchangeRateFilterProps = {
  period: RecordRef;
  fromSubsidiary?: RecordRef;
  toSubsidiary?: RecordRef;
};

export class BudgetExchangeRateFilter extends SoapMappingBase {
  period: RecordRef;
  fromSubsidiary?: RecordRef;
  toSubsidiary?: RecordRef;
  constructor(props: BudgetExchangeRateFilterProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.period = props.period;
    this.fromSubsidiary = props.fromSubsidiary;
    this.toSubsidiary = props.toSubsidiary;
  }
}

export type GetSelectFilterByFieldValueListProps = {
  filterBy: GetSelectFilterByFieldValue[];
};

export class GetSelectFilterByFieldValueList extends SoapMappingBase {
  filterBy: GetSelectFilterByFieldValue[];
  constructor(props: GetSelectFilterByFieldValueListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.filterBy = props.filterBy;
  }
}

export type GetSavedSearchResultProps = {
  status: Status;
  totalRecords?: number;
  recordRefList?: RecordRefList;
};

export class GetSavedSearchResult extends SoapMappingBase {
  status: Status;
  totalRecords?: number;
  recordRefList?: RecordRefList;
  constructor(props: GetSavedSearchResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class PostingTransactionSummaryField extends SoapMappingBase {
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
  }
}

export type DetachReferenceProps = {
  detachFrom: BaseRef;
};

export class DetachReference extends SoapMappingBase {
  detachFrom: BaseRef;
  constructor(props: DetachReferenceProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.detachFrom = props.detachFrom;
  }
}

export type DetachBasicReferenceProps = {
  detachedRecord: BaseRef;
} & DetachReferenceProps;

export class DetachBasicReference extends DetachReference {
  detachedRecord: BaseRef;
  constructor(props: DetachBasicReferenceProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export type BaseRefProps = {
  name?: string;
};

export class BaseRef extends SoapMappingBase {
  name?: string;
  constructor(props: BaseRefProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.scriptId = props.scriptId;
  }
}

export type CustomFieldRefProps = {
  internalId?: string;
  scriptId?: string;
};

export class CustomFieldRef extends SoapMappingBase {
  internalId?: string;
  scriptId?: string;
  constructor(props: CustomFieldRefProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.value = props.value;
  }
}

export type SearchTextNumberFieldProps = {
  searchValue?: string;
  searchValue2?: string;
  operator?: PlatformCoreTypes.SearchTextNumberFieldOperator;
};

export class SearchTextNumberField extends SoapMappingBase {
  searchValue?: string;
  searchValue2?: string;
  operator?: PlatformCoreTypes.SearchTextNumberFieldOperator;
  constructor(props: SearchTextNumberFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export type SearchMultiSelectFieldProps = {
  searchValue?: RecordRef[];
  operator?: PlatformCoreTypes.SearchMultiSelectFieldOperator;
};

export class SearchMultiSelectField extends SoapMappingBase {
  searchValue?: RecordRef[];
  operator?: PlatformCoreTypes.SearchMultiSelectFieldOperator;
  constructor(props: SearchMultiSelectFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export type DimensionListProps = {
  dimension?: DimensionRef[];
};

export class DimensionList extends SoapMappingBase {
  dimension?: DimensionRef[];
  constructor(props: DimensionListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.dimension = props.dimension;
  }
}

export type StatusDetailProps = {
  code?: PlatformFaultsTypes.StatusDetailCodeType;
  message?: string;
  afterSubmitFailed?: boolean;
  type?: PlatformFaultsTypes.StatusDetailType;
};

export class StatusDetail extends SoapMappingBase {
  code?: PlatformFaultsTypes.StatusDetailCodeType;
  message?: string;
  afterSubmitFailed?: boolean;
  type?: PlatformFaultsTypes.StatusDetailType;
  constructor(props: StatusDetailProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class GetSelectValueResult extends SoapMappingBase {
  status: Status;
  totalRecords?: number;
  totalPages?: number;
  baseRefList?: BaseRefList;
  constructor(props: GetSelectValueResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.totalPages = props.totalPages;
    this.baseRefList = props.baseRefList;
  }
}

export class SearchRow extends SoapMappingBase {}

export type SearchColumnMultiSelectCustomFieldProps = {
  searchValue?: ListOrRecordRef[];
} & SearchColumnCustomFieldProps;

export class SearchColumnMultiSelectCustomField extends SearchColumnCustomField {
  searchValue?: ListOrRecordRef[];
  constructor(props: SearchColumnMultiSelectCustomFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class SsoCredentials extends SoapMappingBase {
  email: string;
  password: string;
  account: string;
  role?: RecordRef;
  authenticationToken: string;
  partnerId: string;
  constructor(props: SsoCredentialsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
  }
}

export type GetAllResultProps = {
  status: Status;
  totalRecords?: number;
  recordList?: RecordList;
};

export class GetAllResult extends SoapMappingBase {
  status: Status;
  totalRecords?: number;
  recordList?: RecordList;
  constructor(props: GetAllResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.typeId = props.typeId;
    this.scriptId = props.scriptId;
  }
}

export type CurrencyRateListProps = {
  currencyRate?: CurrencyRate[];
};

export class CurrencyRateList extends SoapMappingBase {
  currencyRate?: CurrencyRate[];
  constructor(props: CurrencyRateListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.currencyRate = props.currencyRate;
  }
}

export type DataCenterUrlsProps = {
  restDomain: string;
  webservicesDomain: string;
  systemDomain: string;
};

export class DataCenterUrls extends SoapMappingBase {
  restDomain: string;
  webservicesDomain: string;
  systemDomain: string;
  constructor(props: DataCenterUrlsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class SsoPassport extends SoapMappingBase {
  authenticationToken: string;
  partnerId: string;
  partnerAccount: string;
  partnerUserId: string;
  constructor(props: SsoPassportProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class PostingTransactionSummary extends SoapMappingBase {
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class PostingTransactionSummaryFilter extends SoapMappingBase {
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class SearchResult extends SoapMappingBase {
  status: Status;
  totalRecords?: number;
  pageSize?: number;
  totalPages?: number;
  pageIndex?: number;
  searchId?: string;
  recordList?: RecordList;
  searchRowList?: SearchRowList;
  constructor(props: SearchResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class GetCurrencyRateResult extends SoapMappingBase {
  status: Status;
  currencyRateList?: CurrencyRateList;
  constructor(props: GetCurrencyRateResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.value = props.value;
  }
}

export type RecordRefListProps = {
  recordRef?: RecordRef[];
};

export class RecordRefList extends SoapMappingBase {
  recordRef?: RecordRef[];
  constructor(props: RecordRefListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.recordRef = props.recordRef;
  }
}

export type SearchDoubleFieldProps = {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchDoubleFieldOperator;
};

export class SearchDoubleField extends SoapMappingBase {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchDoubleFieldOperator;
  constructor(props: SearchDoubleFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export type SearchRowListProps = {
  searchRow?: SearchRow[];
};

export class SearchRowList extends SoapMappingBase {
  searchRow?: SearchRow[];
  constructor(props: SearchRowListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchRow = props.searchRow;
  }
}

export type AsyncStatusResultProps = {
  jobId: string;
  status: PlatformCoreTypes.AsyncStatusType;
  percentCompleted: number;
  estRemainingDuration: number;
};

export class AsyncStatusResult extends SoapMappingBase {
  jobId: string;
  status: PlatformCoreTypes.AsyncStatusType;
  percentCompleted: number;
  estRemainingDuration: number;
  constructor(props: AsyncStatusResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class ChangeEmail extends SoapMappingBase {
  currentPassword: string;
  newEmail: string;
  newEmail2: string;
  justThisAccount?: boolean;
  constructor(props: ChangeEmailProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.currentPassword = props.currentPassword;
    this.newEmail = props.newEmail;
    this.newEmail2 = props.newEmail2;
    this.justThisAccount = props.justThisAccount;
  }
}

export class SearchRecord extends SoapMappingBase {}

export class SearchRecordBasic extends SearchRecord {}

export type SearchCustomFieldListProps = {
  customField?: SearchCustomField[];
};

export class SearchCustomFieldList extends SoapMappingBase {
  customField?: SearchCustomField[];
  constructor(props: SearchCustomFieldListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.customField = props.customField;
  }
}

export type DeletionReasonProps = {
  deletionReasonCode: RecordRef;
  deletionReasonMemo?: string;
};

export class DeletionReason extends SoapMappingBase {
  deletionReasonCode: RecordRef;
  deletionReasonMemo?: string;
  constructor(props: DeletionReasonProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.type = props.type;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type AttachReferenceProps = {
  attachTo: BaseRef;
};

export class AttachReference extends SoapMappingBase {
  attachTo: BaseRef;
  constructor(props: AttachReferenceProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
  }
}

export type RecordProps = {
  nullFieldList?: NullField;
};

export class Record extends SoapMappingBase {
  nullFieldList?: NullField;
  constructor(props: RecordProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.nullFieldList = props.nullFieldList;
  }
}

export type AttachBasicReferenceProps = {
  attachedRecord: BaseRef;
} & AttachReferenceProps;

export class AttachBasicReference extends AttachReference {
  attachedRecord: BaseRef;
  constructor(props: AttachBasicReferenceProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.attachedRecord = props.attachedRecord;
  }
}

export type SearchBooleanField = boolean | { searchValue?: boolean };

export type NullFieldProps = {
  name?: string[];
};

export class NullField extends SoapMappingBase {
  name?: string[];
  constructor(props: NullFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
  }
}

export type GetItemAvailabilityResultProps = {
  status: Status;
  itemAvailabilityList?: ItemAvailabilityList;
};

export class GetItemAvailabilityResult extends SoapMappingBase {
  status: Status;
  itemAvailabilityList?: ItemAvailabilityList;
  constructor(props: GetItemAvailabilityResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class ItemAvailability extends SoapMappingBase {
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class CurrencyRateFilter extends SoapMappingBase {
  baseCurrency?: RecordRef;
  fromCurrency?: RecordRef;
  effectiveDate?: string;
  constructor(props: CurrencyRateFilterProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.baseCurrency = props.baseCurrency;
    this.fromCurrency = props.fromCurrency;
    this.effectiveDate = props.effectiveDate;
  }
}

export type RecordListProps = {
  record?: Record[];
};

export class RecordList extends SoapMappingBase {
  record?: Record[];
  constructor(props: RecordListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class GetSelectValueFieldDescription extends SoapMappingBase {
  recordType?: PlatformCoreTypes.RecordType;
  customRecordType?: RecordRef;
  customTransactionType?: RecordRef;
  sublist?: string;
  field: string;
  customForm?: RecordRef;
  filter?: GetSelectValueFilter;
  filterByValueList?: GetSelectFilterByFieldValueList;
  constructor(props: GetSelectValueFieldDescriptionProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.value = props.value;
  }
}

export type SearchColumnSelectFieldProps = {
  searchValue?: RecordRef;
} & SearchColumnFieldProps;

export class SearchColumnSelectField extends SearchColumnField {
  searchValue?: RecordRef;
  constructor(props: SearchColumnSelectFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
  }
}

export type DeletedRecordProps = {
  deletedDate?: string;
  record?: BaseRef;
};

export class DeletedRecord extends SoapMappingBase {
  deletedDate?: string;
  record?: BaseRef;
  constructor(props: DeletedRecordProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class WsRole extends SoapMappingBase {
  role?: RecordRef;
  isDefault?: boolean;
  isInactive?: boolean;
  isLoggedInRole?: boolean;
  constructor(props: WsRoleProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class GetDeletedResult extends SoapMappingBase {
  status: Status;
  totalRecords?: number;
  pageSize?: number;
  totalPages?: number;
  pageIndex?: number;
  deletedRecordList?: DeletedRecordList;
  constructor(props: GetDeletedResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.value = props.value;
  }
}

export type SearchColumnLongFieldProps = {
  searchValue?: number;
} & SearchColumnFieldProps;

export class SearchColumnLongField extends SearchColumnField {
  searchValue?: number;
  constructor(props: SearchColumnLongFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
  }
}

export type GetSelectFilterByFieldValueProps = {
  sublist?: string;
  field: string;
  internalId: string;
};

export class GetSelectFilterByFieldValue extends SoapMappingBase {
  sublist?: string;
  field: string;
  internalId: string;
  constructor(props: GetSelectFilterByFieldValueProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class GetDeletedFilter extends SoapMappingBase {
  deletedDate?: SearchDateField;
  type?: SearchEnumMultiSelectField;
  scriptId?: SearchStringField;
  constructor(props: GetDeletedFilterProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.deletedDate = props.deletedDate;
    this.type = props.type;
    this.scriptId = props.scriptId;
  }
}

export type ItemAvailabilityListProps = {
  itemAvailability: ItemAvailability[];
};

export class ItemAvailabilityList extends SoapMappingBase {
  itemAvailability: ItemAvailability[];
  constructor(props: ItemAvailabilityListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.itemAvailability = props.itemAvailability;
  }
}

export type SearchDateFieldProps = {
  predefinedSearchValue?: PlatformCoreTypes.SearchDate;
  searchValue?: string;
  searchValue2?: string;
  operator?: PlatformCoreTypes.SearchDateFieldOperator;
};

export class SearchDateField extends SoapMappingBase {
  predefinedSearchValue?: PlatformCoreTypes.SearchDate;
  searchValue?: string;
  searchValue2?: string;
  operator?: PlatformCoreTypes.SearchDateFieldOperator;
  constructor(props: SearchDateFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
  }
}

export type GetDataCenterUrlsResultProps = {
  status: Status;
  dataCenterUrls?: DataCenterUrls;
};

export class GetDataCenterUrlsResult extends SoapMappingBase {
  status: Status;
  dataCenterUrls?: DataCenterUrls;
  constructor(props: GetDataCenterUrlsResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.status = props.status;
    this.dataCenterUrls = props.dataCenterUrls;
  }
}

export type PostingTransactionSummaryListProps = {
  postingTransactionSummary: PostingTransactionSummary[];
};

export class PostingTransactionSummaryList extends SoapMappingBase {
  postingTransactionSummary: PostingTransactionSummary[];
  constructor(props: PostingTransactionSummaryListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.postingTransactionSummary = props.postingTransactionSummary;
  }
}

export type DimensionRefProps = {
  scriptId?: string;
};

export class DimensionRef extends SoapMappingBase {
  scriptId?: string;
  constructor(props: DimensionRefProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.scriptId = props.scriptId;
  }
}

export type SearchLongFieldProps = {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchLongFieldOperator;
};

export class SearchLongField extends SoapMappingBase {
  searchValue?: number;
  searchValue2?: number;
  operator?: PlatformCoreTypes.SearchLongFieldOperator;
  constructor(props: SearchLongFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export type CustomizationRefListProps = {
  customizationRef?: CustomizationRef[];
};

export class CustomizationRefList extends SoapMappingBase {
  customizationRef?: CustomizationRef[];
  constructor(props: CustomizationRefListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.customizationRef = props.customizationRef;
  }
}

export type GetSavedSearchRecordProps = {
  searchType?: PlatformCoreTypes.SearchRecordType;
};

export class GetSavedSearchRecord extends SoapMappingBase {
  searchType?: PlatformCoreTypes.SearchRecordType;
  constructor(props: GetSavedSearchRecordProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchType = props.searchType;
  }
}

export type CurrencyRateProps = {
  baseCurrency: RecordRef;
  fromCurrency: RecordRef;
  exchangeRate: number;
  effectiveDate: string;
};

export class CurrencyRate extends SoapMappingBase {
  baseCurrency: RecordRef;
  fromCurrency: RecordRef;
  exchangeRate: number;
  effectiveDate: string;
  constructor(props: CurrencyRateProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class Duration extends SoapMappingBase {
  timeSpan: number;
  unit: PlatformCoreTypes.DurationUnit;
  constructor(props: DurationProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.timeSpan = props.timeSpan;
    this.unit = props.unit;
  }
}

export type CustomizationTypeProps = {
  getCustomizationType?: PlatformCoreTypes.GetCustomizationType;
};

export class CustomizationType extends SoapMappingBase {
  getCustomizationType?: PlatformCoreTypes.GetCustomizationType;
  constructor(props: CustomizationTypeProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.getCustomizationType = props.getCustomizationType;
  }
}

export type SearchColumnDoubleCustomFieldProps = {
  searchValue?: number;
} & SearchColumnCustomFieldProps;

export class SearchColumnDoubleCustomField extends SearchColumnCustomField {
  searchValue?: number;
  constructor(props: SearchColumnDoubleCustomFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
  }
}

export type ListOrRecordRefProps = {
  name?: string;
  internalId?: string;
  externalId?: string;
  typeId?: string;
};

export class ListOrRecordRef extends SoapMappingBase {
  name?: string;
  internalId?: string;
  externalId?: string;
  typeId?: string;
  constructor(props: ListOrRecordRefProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class TokenPassport extends SoapMappingBase {
  account: string;
  consumerKey: string;
  token: string;
  nonce: string;
  timestamp: number;
  signature: TokenPassportSignature;
  constructor(props: TokenPassportProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.value = props.value;
  }
}

export type GetCustomizationIdResultProps = {
  status: Status;
  totalRecords?: number;
  customizationRefList?: CustomizationRefList;
};

export class GetCustomizationIdResult extends SoapMappingBase {
  status: Status;
  totalRecords?: number;
  customizationRefList?: CustomizationRefList;
  constructor(props: GetCustomizationIdResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.status = props.status;
    this.totalRecords = props.totalRecords;
    this.customizationRefList = props.customizationRefList;
  }
}

export type GetSelectValueFilterProps = {
  filterValue: string;
  operator: PlatformCoreTypes.GetSelectValueFilterOperator;
};

export class GetSelectValueFilter extends SoapMappingBase {
  filterValue: string;
  operator: PlatformCoreTypes.GetSelectValueFilterOperator;
  constructor(props: GetSelectValueFilterProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class Passport extends SoapMappingBase {
  email: string;
  password: string;
  account: string;
  role?: RecordRef;
  constructor(props: PassportProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class BudgetExchangeRate extends SoapMappingBase {
  period: RecordRef;
  fromSubsidiary: RecordRef;
  toSubsidiary: RecordRef;
  currentRate?: number;
  averageRate?: number;
  historicalRate?: number;
  constructor(props: BudgetExchangeRateProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class Status extends SoapMappingBase {
  statusDetail?: StatusDetail[];
  isSuccess?: boolean;
  constructor(props: StatusProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export class GetPostingTransactionSummaryResult extends SoapMappingBase {
  status: Status;
  totalRecords?: number;
  pageSize?: number;
  totalPages?: number;
  pageIndex?: number;
  operationId?: string;
  postingTransactionSummaryList?: PostingTransactionSummaryList;
  constructor(props: GetPostingTransactionSummaryResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.value = props.value;
  }
}

export type SearchColumnStringCustomFieldProps = {
  searchValue?: string;
} & SearchColumnCustomFieldProps;

export class SearchColumnStringCustomField extends SearchColumnCustomField {
  searchValue?: string;
  constructor(props: SearchColumnStringCustomFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
  }
}

export type GetAllRecordProps = {
  recordType?: PlatformCoreTypes.GetAllRecordType;
};

export class GetAllRecord extends SoapMappingBase {
  recordType?: PlatformCoreTypes.GetAllRecordType;
  constructor(props: GetAllRecordProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.recordType = props.recordType;
  }
}

export type SearchStringFieldProps = {
  searchValue?: string;
  operator?: PlatformCoreTypes.SearchStringFieldOperator;
};

export class SearchStringField extends SoapMappingBase {
  searchValue?: string;
  operator?: PlatformCoreTypes.SearchStringFieldOperator;
  constructor(props: SearchStringFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
    this.operator = props.operator;
  }
}

export type InitializeRefListProps = {
  initializeRef?: InitializeRef[];
};

export class InitializeRefList extends SoapMappingBase {
  initializeRef?: InitializeRef[];
  constructor(props: InitializeRefListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.initializeRef = props.initializeRef;
  }
}

export type ChangePasswordProps = {
  currentPassword: string;
  newPassword?: string;
  newPassword2?: string;
};

export class ChangePassword extends SoapMappingBase {
  currentPassword: string;
  newPassword?: string;
  newPassword2?: string;
  constructor(props: ChangePasswordProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
  }
}

export type UpdateInviteeStatusReferenceProps = {
  eventId: RecordRef;
  responseCode: PlatformCoreTypes.CalendarEventAttendeeResponse;
};

export class UpdateInviteeStatusReference extends SoapMappingBase {
  eventId: RecordRef;
  responseCode: PlatformCoreTypes.CalendarEventAttendeeResponse;
  constructor(props: UpdateInviteeStatusReferenceProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.eventId = props.eventId;
    this.responseCode = props.responseCode;
  }
}

export type GetServerTimeResultProps = {
  status: Status;
  serverTime: string;
};

export class GetServerTimeResult extends SoapMappingBase {
  status: Status;
  serverTime: string;
  constructor(props: GetServerTimeResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.internalId = props.internalId;
    this.externalId = props.externalId;
    this.typeId = props.typeId;
    this.scriptId = props.scriptId;
  }
}

export type BudgetExchangeRateListProps = {
  budgetExchangeRate: BudgetExchangeRate[];
};

export class BudgetExchangeRateList extends SoapMappingBase {
  budgetExchangeRate: BudgetExchangeRate[];
  constructor(props: BudgetExchangeRateListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.budgetExchangeRate = props.budgetExchangeRate;
  }
}

export type InitializeRecordProps = {
  type: PlatformCoreTypes.InitializeType;
  reference?: InitializeRef;
  auxReference?: InitializeAuxRef;
  referenceList?: InitializeRefList;
};

export class InitializeRecord extends SoapMappingBase {
  type: PlatformCoreTypes.InitializeType;
  reference?: InitializeRef;
  auxReference?: InitializeAuxRef;
  referenceList?: InitializeRefList;
  constructor(props: InitializeRecordProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
  }
}

export type SearchColumnDoubleFieldProps = {
  searchValue?: number;
} & SearchColumnFieldProps;

export class SearchColumnDoubleField extends SearchColumnField {
  searchValue?: number;
  constructor(props: SearchColumnDoubleFieldProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
  }
}

export type GetBudgetExchangeRateResultProps = {
  status: Status;
  budgetExchangeRateList?: BudgetExchangeRateList;
};

export class GetBudgetExchangeRateResult extends SoapMappingBase {
  status: Status;
  budgetExchangeRateList?: BudgetExchangeRateList;
  constructor(props: GetBudgetExchangeRateResultProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
    this.searchValue2 = props.searchValue2;
    this.operator = props.operator;
  }
}

export type TokenPassportSignatureProps = {
  value?: string;
  algorithm: string;
};

export class TokenPassportSignature extends SoapMappingBase {
  value?: string;
  algorithm: string;
  constructor(props: TokenPassportSignatureProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.value = props.value;
    this.algorithm = props.algorithm;
  }
}

export type ItemAvailabilityFilterProps = {
  item: RecordRefList;
  lastQtyAvailableChange?: string;
};

export class ItemAvailabilityFilter extends SoapMappingBase {
  item: RecordRefList;
  lastQtyAvailableChange?: string;
  constructor(props: ItemAvailabilityFilterProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.searchValue = props.searchValue;
  }
}

export type SearchColumnCustomFieldListProps = {
  customField?: SearchColumnCustomField[];
};

export class SearchColumnCustomFieldList extends SoapMappingBase {
  customField?: SearchColumnCustomField[];
  constructor(props: SearchColumnCustomFieldListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.customField = props.customField;
  }
}
