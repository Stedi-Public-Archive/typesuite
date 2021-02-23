import * as PlatformFaultsTypes from "./platform_faults_types";
import * as PlatformCoreTypes from "./platform_core_types";
import { SoapMappingBase } from "../../soap-types";
export declare type SearchColumnCustomFieldProps = {
    customLabel?: string;
    internalId?: string;
    scriptId?: string;
};
export declare class SearchColumnCustomField extends SoapMappingBase {
    customLabel?: string;
    internalId?: string;
    scriptId?: string;
    constructor(props: SearchColumnCustomFieldProps);
}
export declare type CustomFieldListProps = {
    customField?: CustomFieldRef[];
};
export declare class CustomFieldList extends SoapMappingBase {
    customField?: CustomFieldRef[];
    constructor(props: CustomFieldListProps);
}
export declare type SearchEnumMultiSelectFieldProps = {
    searchValue?: string[];
    operator?: PlatformCoreTypes.SearchEnumMultiSelectFieldOperator;
};
export declare class SearchEnumMultiSelectField extends SoapMappingBase {
    searchValue?: string[];
    operator?: PlatformCoreTypes.SearchEnumMultiSelectFieldOperator;
    constructor(props: SearchEnumMultiSelectFieldProps);
}
export declare type BaseRefListProps = {
    baseRef?: BaseRef[];
};
export declare class BaseRefList extends SoapMappingBase {
    baseRef?: BaseRef[];
    constructor(props: BaseRefListProps);
}
export declare type DeletedRecordListProps = {
    deletedRecord?: DeletedRecord[];
};
export declare class DeletedRecordList extends SoapMappingBase {
    deletedRecord?: DeletedRecord[];
    constructor(props: DeletedRecordListProps);
}
export declare type WsRoleListProps = {
    wsRole?: WsRole[];
};
export declare class WsRoleList extends SoapMappingBase {
    wsRole?: WsRole[];
    constructor(props: WsRoleListProps);
}
export declare type SearchCustomFieldProps = {
    internalId?: string;
    scriptId?: string;
};
export declare class SearchCustomField extends SoapMappingBase {
    internalId?: string;
    scriptId?: string;
    constructor(props: SearchCustomFieldProps);
}
export declare type SearchBooleanCustomFieldProps = {
    searchValue?: boolean;
} & SearchCustomFieldProps;
export declare class SearchBooleanCustomField extends SearchCustomField {
    searchValue?: boolean;
    constructor(props: SearchBooleanCustomFieldProps);
}
export declare type SearchColumnFieldProps = {
    customLabel?: string;
};
export declare class SearchColumnField extends SoapMappingBase {
    customLabel?: string;
    constructor(props: SearchColumnFieldProps);
}
export declare type BudgetExchangeRateFilterProps = {
    period: RecordRef;
    fromSubsidiary?: RecordRef;
    toSubsidiary?: RecordRef;
};
export declare class BudgetExchangeRateFilter extends SoapMappingBase {
    period: RecordRef;
    fromSubsidiary?: RecordRef;
    toSubsidiary?: RecordRef;
    constructor(props: BudgetExchangeRateFilterProps);
}
export declare type GetSelectFilterByFieldValueListProps = {
    filterBy: GetSelectFilterByFieldValue[];
};
export declare class GetSelectFilterByFieldValueList extends SoapMappingBase {
    filterBy: GetSelectFilterByFieldValue[];
    constructor(props: GetSelectFilterByFieldValueListProps);
}
export declare type GetSavedSearchResultProps = {
    status: Status;
    totalRecords?: number;
    recordRefList?: RecordRefList;
};
export declare class GetSavedSearchResult extends SoapMappingBase {
    status: Status;
    totalRecords?: number;
    recordRefList?: RecordRefList;
    constructor(props: GetSavedSearchResultProps);
}
export declare type PostingTransactionSummaryFieldProps = {
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
export declare class PostingTransactionSummaryField extends SoapMappingBase {
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
    constructor(props: PostingTransactionSummaryFieldProps);
}
export declare type SearchColumnLongCustomFieldProps = {
    searchValue?: number;
} & SearchColumnCustomFieldProps;
export declare class SearchColumnLongCustomField extends SearchColumnCustomField {
    searchValue?: number;
    constructor(props: SearchColumnLongCustomFieldProps);
}
export declare type DetachReferenceProps = {
    detachFrom: BaseRef;
};
export declare class DetachReference extends SoapMappingBase {
    detachFrom: BaseRef;
    constructor(props: DetachReferenceProps);
}
export declare type DetachBasicReferenceProps = {
    detachedRecord: BaseRef;
} & DetachReferenceProps;
export declare class DetachBasicReference extends DetachReference {
    detachedRecord: BaseRef;
    constructor(props: DetachBasicReferenceProps);
}
export declare type SearchDoubleCustomFieldProps = {
    searchValue?: number;
    searchValue2?: number;
    operator?: PlatformCoreTypes.SearchDoubleFieldOperator;
} & SearchCustomFieldProps;
export declare class SearchDoubleCustomField extends SearchCustomField {
    searchValue?: number;
    searchValue2?: number;
    operator?: PlatformCoreTypes.SearchDoubleFieldOperator;
    constructor(props: SearchDoubleCustomFieldProps);
}
export declare type BaseRefProps = {
    name?: string;
};
export declare class BaseRef extends SoapMappingBase {
    name?: string;
    constructor(props: BaseRefProps);
}
export declare type RecordRefProps = {
    internalId?: string;
    externalId?: string;
    type?: PlatformCoreTypes.RecordType;
} & BaseRefProps;
export declare class RecordRef extends BaseRef {
    internalId?: string;
    externalId?: string;
    type?: PlatformCoreTypes.RecordType;
    constructor(props: RecordRefProps);
}
export declare type CustomizationRefProps = {
    scriptId?: string;
} & RecordRefProps;
export declare class CustomizationRef extends RecordRef {
    scriptId?: string;
    constructor(props: CustomizationRefProps);
}
export declare type CustomFieldRefProps = {
    internalId?: string;
    scriptId?: string;
};
export declare class CustomFieldRef extends SoapMappingBase {
    internalId?: string;
    scriptId?: string;
    constructor(props: CustomFieldRefProps);
}
export declare type DateCustomFieldRefProps = {
    value: string;
} & CustomFieldRefProps;
export declare class DateCustomFieldRef extends CustomFieldRef {
    value: string;
    constructor(props: DateCustomFieldRefProps);
}
export declare type SearchTextNumberFieldProps = {
    searchValue?: string;
    searchValue2?: string;
    operator?: PlatformCoreTypes.SearchTextNumberFieldOperator;
};
export declare class SearchTextNumberField extends SoapMappingBase {
    searchValue?: string;
    searchValue2?: string;
    operator?: PlatformCoreTypes.SearchTextNumberFieldOperator;
    constructor(props: SearchTextNumberFieldProps);
}
export declare type SearchMultiSelectFieldProps = {
    searchValue?: RecordRef[];
    operator?: PlatformCoreTypes.SearchMultiSelectFieldOperator;
};
export declare class SearchMultiSelectField extends SoapMappingBase {
    searchValue?: RecordRef[];
    operator?: PlatformCoreTypes.SearchMultiSelectFieldOperator;
    constructor(props: SearchMultiSelectFieldProps);
}
export declare type DimensionListProps = {
    dimension?: DimensionRef[];
};
export declare class DimensionList extends SoapMappingBase {
    dimension?: DimensionRef[];
    constructor(props: DimensionListProps);
}
export declare type StatusDetailProps = {
    code?: PlatformFaultsTypes.StatusDetailCodeType;
    message?: string;
    afterSubmitFailed?: boolean;
    type?: PlatformFaultsTypes.StatusDetailType;
};
export declare class StatusDetail extends SoapMappingBase {
    code?: PlatformFaultsTypes.StatusDetailCodeType;
    message?: string;
    afterSubmitFailed?: boolean;
    type?: PlatformFaultsTypes.StatusDetailType;
    constructor(props: StatusDetailProps);
}
export declare type StringCustomFieldRefProps = {
    value: string;
} & CustomFieldRefProps;
export declare class StringCustomFieldRef extends CustomFieldRef {
    value: string;
    constructor(props: StringCustomFieldRefProps);
}
export declare type InitializeAuxRefProps = {
    type?: PlatformCoreTypes.InitializeAuxRefType;
    internalId?: string;
    externalId?: string;
    scriptId?: string;
} & BaseRefProps;
export declare class InitializeAuxRef extends BaseRef {
    type?: PlatformCoreTypes.InitializeAuxRefType;
    internalId?: string;
    externalId?: string;
    scriptId?: string;
    constructor(props: InitializeAuxRefProps);
}
export declare type GetSelectValueResultProps = {
    status: Status;
    totalRecords?: number;
    totalPages?: number;
    baseRefList?: BaseRefList;
};
export declare class GetSelectValueResult extends SoapMappingBase {
    status: Status;
    totalRecords?: number;
    totalPages?: number;
    baseRefList?: BaseRefList;
    constructor(props: GetSelectValueResultProps);
}
export declare class SearchRow extends SoapMappingBase {
}
export declare type SearchColumnMultiSelectCustomFieldProps = {
    searchValue?: ListOrRecordRef[];
} & SearchColumnCustomFieldProps;
export declare class SearchColumnMultiSelectCustomField extends SearchColumnCustomField {
    searchValue?: ListOrRecordRef[];
    constructor(props: SearchColumnMultiSelectCustomFieldProps);
}
export declare type SsoCredentialsProps = {
    email: string;
    password: string;
    account: string;
    role?: RecordRef;
    authenticationToken: string;
    partnerId: string;
};
export declare class SsoCredentials extends SoapMappingBase {
    email: string;
    password: string;
    account: string;
    role?: RecordRef;
    authenticationToken: string;
    partnerId: string;
    constructor(props: SsoCredentialsProps);
}
export declare type SearchColumnDateCustomFieldProps = {
    searchValue?: string;
} & SearchColumnCustomFieldProps;
export declare class SearchColumnDateCustomField extends SearchColumnCustomField {
    searchValue?: string;
    constructor(props: SearchColumnDateCustomFieldProps);
}
export declare type SearchStringCustomFieldProps = {
    searchValue?: string;
    operator?: PlatformCoreTypes.SearchStringFieldOperator;
} & SearchCustomFieldProps;
export declare class SearchStringCustomField extends SearchCustomField {
    searchValue?: string;
    operator?: PlatformCoreTypes.SearchStringFieldOperator;
    constructor(props: SearchStringCustomFieldProps);
}
export declare type SearchColumnStringFieldProps = {
    searchValue?: string;
} & SearchColumnFieldProps;
export declare class SearchColumnStringField extends SearchColumnField {
    searchValue?: string;
    constructor(props: SearchColumnStringFieldProps);
}
export declare type GetAllResultProps = {
    status: Status;
    totalRecords?: number;
    recordList?: RecordList;
};
export declare class GetAllResult extends SoapMappingBase {
    status: Status;
    totalRecords?: number;
    recordList?: RecordList;
    constructor(props: GetAllResultProps);
}
export declare type CustomTransactionRefProps = {
    internalId?: string;
    externalId?: string;
    typeId?: string;
    scriptId?: string;
} & BaseRefProps;
export declare class CustomTransactionRef extends BaseRef {
    internalId?: string;
    externalId?: string;
    typeId?: string;
    scriptId?: string;
    constructor(props: CustomTransactionRefProps);
}
export declare type CurrencyRateListProps = {
    currencyRate?: CurrencyRate[];
};
export declare class CurrencyRateList extends SoapMappingBase {
    currencyRate?: CurrencyRate[];
    constructor(props: CurrencyRateListProps);
}
export declare type DataCenterUrlsProps = {
    restDomain: string;
    webservicesDomain: string;
    systemDomain: string;
};
export declare class DataCenterUrls extends SoapMappingBase {
    restDomain: string;
    webservicesDomain: string;
    systemDomain: string;
    constructor(props: DataCenterUrlsProps);
}
export declare type SsoPassportProps = {
    authenticationToken: string;
    partnerId: string;
    partnerAccount: string;
    partnerUserId: string;
};
export declare class SsoPassport extends SoapMappingBase {
    authenticationToken: string;
    partnerId: string;
    partnerAccount: string;
    partnerUserId: string;
    constructor(props: SsoPassportProps);
}
export declare type PostingTransactionSummaryProps = {
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
export declare class PostingTransactionSummary extends SoapMappingBase {
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
    constructor(props: PostingTransactionSummaryProps);
}
export declare type PostingTransactionSummaryFilterProps = {
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
export declare class PostingTransactionSummaryFilter extends SoapMappingBase {
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
    constructor(props: PostingTransactionSummaryFilterProps);
}
export declare type SearchColumnBooleanCustomFieldProps = {
    searchValue?: boolean;
} & SearchColumnCustomFieldProps;
export declare class SearchColumnBooleanCustomField extends SearchColumnCustomField {
    searchValue?: boolean;
    constructor(props: SearchColumnBooleanCustomFieldProps);
}
export declare type SearchEnumMultiSelectCustomFieldProps = {
    searchValue?: string[];
    operator?: PlatformCoreTypes.SearchEnumMultiSelectFieldOperator;
} & SearchCustomFieldProps;
export declare class SearchEnumMultiSelectCustomField extends SearchCustomField {
    searchValue?: string[];
    operator?: PlatformCoreTypes.SearchEnumMultiSelectFieldOperator;
    constructor(props: SearchEnumMultiSelectCustomFieldProps);
}
export declare type SearchResultProps = {
    status: Status;
    totalRecords?: number;
    pageSize?: number;
    totalPages?: number;
    pageIndex?: number;
    searchId?: string;
    recordList?: RecordList;
    searchRowList?: SearchRowList;
};
export declare class SearchResult extends SoapMappingBase {
    status: Status;
    totalRecords?: number;
    pageSize?: number;
    totalPages?: number;
    pageIndex?: number;
    searchId?: string;
    recordList?: RecordList;
    searchRowList?: SearchRowList;
    constructor(props: SearchResultProps);
}
export declare type GetCurrencyRateResultProps = {
    status: Status;
    currencyRateList?: CurrencyRateList;
};
export declare class GetCurrencyRateResult extends SoapMappingBase {
    status: Status;
    currencyRateList?: CurrencyRateList;
    constructor(props: GetCurrencyRateResultProps);
}
export declare type SelectCustomFieldRefProps = {
    value: ListOrRecordRef;
} & CustomFieldRefProps;
export declare class SelectCustomFieldRef extends CustomFieldRef {
    value: ListOrRecordRef;
    constructor(props: SelectCustomFieldRefProps);
}
export declare type RecordRefListProps = {
    recordRef?: RecordRef[];
};
export declare class RecordRefList extends SoapMappingBase {
    recordRef?: RecordRef[];
    constructor(props: RecordRefListProps);
}
export declare type SearchDoubleFieldProps = {
    searchValue?: number;
    searchValue2?: number;
    operator?: PlatformCoreTypes.SearchDoubleFieldOperator;
};
export declare class SearchDoubleField extends SoapMappingBase {
    searchValue?: number;
    searchValue2?: number;
    operator?: PlatformCoreTypes.SearchDoubleFieldOperator;
    constructor(props: SearchDoubleFieldProps);
}
export declare type SearchRowListProps = {
    searchRow?: SearchRow[];
};
export declare class SearchRowList extends SoapMappingBase {
    searchRow?: SearchRow[];
    constructor(props: SearchRowListProps);
}
export declare type AsyncStatusResultProps = {
    jobId: string;
    status: PlatformCoreTypes.AsyncStatusType;
    percentCompleted: number;
    estRemainingDuration: number;
};
export declare class AsyncStatusResult extends SoapMappingBase {
    jobId: string;
    status: PlatformCoreTypes.AsyncStatusType;
    percentCompleted: number;
    estRemainingDuration: number;
    constructor(props: AsyncStatusResultProps);
}
export declare class SearchRowBasic extends SearchRow {
}
export declare type ChangeEmailProps = {
    currentPassword: string;
    newEmail: string;
    newEmail2: string;
    justThisAccount?: boolean;
};
export declare class ChangeEmail extends SoapMappingBase {
    currentPassword: string;
    newEmail: string;
    newEmail2: string;
    justThisAccount?: boolean;
    constructor(props: ChangeEmailProps);
}
export declare class SearchRecord extends SoapMappingBase {
}
export declare class SearchRecordBasic extends SearchRecord {
}
export declare type SearchCustomFieldListProps = {
    customField?: SearchCustomField[];
};
export declare class SearchCustomFieldList extends SoapMappingBase {
    customField?: SearchCustomField[];
    constructor(props: SearchCustomFieldListProps);
}
export declare type DeletionReasonProps = {
    deletionReasonCode: RecordRef;
    deletionReasonMemo?: string;
};
export declare class DeletionReason extends SoapMappingBase {
    deletionReasonCode: RecordRef;
    deletionReasonMemo?: string;
    constructor(props: DeletionReasonProps);
}
export declare type InitializeRefProps = {
    type?: PlatformCoreTypes.InitializeRefType;
    internalId?: string;
    externalId?: string;
} & BaseRefProps;
export declare class InitializeRef extends BaseRef {
    type?: PlatformCoreTypes.InitializeRefType;
    internalId?: string;
    externalId?: string;
    constructor(props: InitializeRefProps);
}
export declare type AttachReferenceProps = {
    attachTo: BaseRef;
};
export declare class AttachReference extends SoapMappingBase {
    attachTo: BaseRef;
    constructor(props: AttachReferenceProps);
}
export declare type AttachContactReferenceProps = {
    contact: RecordRef;
    contactRole?: RecordRef;
} & AttachReferenceProps;
export declare class AttachContactReference extends AttachReference {
    contact: RecordRef;
    contactRole?: RecordRef;
    constructor(props: AttachContactReferenceProps);
}
export declare type SearchColumnBooleanFieldProps = {
    searchValue?: boolean;
} & SearchColumnFieldProps;
export declare class SearchColumnBooleanField extends SearchColumnField {
    searchValue?: boolean;
    constructor(props: SearchColumnBooleanFieldProps);
}
export declare type RecordProps = {
    nullFieldList?: NullField;
};
export declare class Record extends SoapMappingBase {
    nullFieldList?: NullField;
    constructor(props: RecordProps);
}
export declare type AttachBasicReferenceProps = {
    attachedRecord: BaseRef;
} & AttachReferenceProps;
export declare class AttachBasicReference extends AttachReference {
    attachedRecord: BaseRef;
    constructor(props: AttachBasicReferenceProps);
}
export declare type SearchBooleanField = boolean | {
    searchValue?: boolean;
};
export declare type NullFieldProps = {
    name?: string[];
};
export declare class NullField extends SoapMappingBase {
    name?: string[];
    constructor(props: NullFieldProps);
}
export declare type GetItemAvailabilityResultProps = {
    status: Status;
    itemAvailabilityList?: ItemAvailabilityList;
};
export declare class GetItemAvailabilityResult extends SoapMappingBase {
    status: Status;
    itemAvailabilityList?: ItemAvailabilityList;
    constructor(props: GetItemAvailabilityResultProps);
}
export declare type SearchColumnTextNumberFieldProps = {
    searchValue?: string;
} & SearchColumnFieldProps;
export declare class SearchColumnTextNumberField extends SearchColumnField {
    searchValue?: string;
    constructor(props: SearchColumnTextNumberFieldProps);
}
export declare type ItemAvailabilityProps = {
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
export declare class ItemAvailability extends SoapMappingBase {
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
    constructor(props: ItemAvailabilityProps);
}
export declare type CurrencyRateFilterProps = {
    baseCurrency?: RecordRef;
    fromCurrency?: RecordRef;
    effectiveDate?: string;
};
export declare class CurrencyRateFilter extends SoapMappingBase {
    baseCurrency?: RecordRef;
    fromCurrency?: RecordRef;
    effectiveDate?: string;
    constructor(props: CurrencyRateFilterProps);
}
export declare type RecordListProps = {
    record?: Record[];
};
export declare class RecordList extends SoapMappingBase {
    record?: Record[];
    constructor(props: RecordListProps);
}
export declare type GetSelectValueFieldDescriptionProps = {
    recordType?: PlatformCoreTypes.RecordType;
    customRecordType?: RecordRef;
    customTransactionType?: RecordRef;
    sublist?: string;
    field: string;
    customForm?: RecordRef;
    filter?: GetSelectValueFilter;
    filterByValueList?: GetSelectFilterByFieldValueList;
};
export declare class GetSelectValueFieldDescription extends SoapMappingBase {
    recordType?: PlatformCoreTypes.RecordType;
    customRecordType?: RecordRef;
    customTransactionType?: RecordRef;
    sublist?: string;
    field: string;
    customForm?: RecordRef;
    filter?: GetSelectValueFilter;
    filterByValueList?: GetSelectFilterByFieldValueList;
    constructor(props: GetSelectValueFieldDescriptionProps);
}
export declare type BooleanCustomFieldRefProps = {
    value: boolean;
} & CustomFieldRefProps;
export declare class BooleanCustomFieldRef extends CustomFieldRef {
    value: boolean;
    constructor(props: BooleanCustomFieldRefProps);
}
export declare type SearchColumnSelectFieldProps = {
    searchValue?: RecordRef;
} & SearchColumnFieldProps;
export declare class SearchColumnSelectField extends SearchColumnField {
    searchValue?: RecordRef;
    constructor(props: SearchColumnSelectFieldProps);
}
export declare type DeletedRecordProps = {
    deletedDate?: string;
    record?: BaseRef;
};
export declare class DeletedRecord extends SoapMappingBase {
    deletedDate?: string;
    record?: BaseRef;
    constructor(props: DeletedRecordProps);
}
export declare type WsRoleProps = {
    role?: RecordRef;
    isDefault?: boolean;
    isInactive?: boolean;
    isLoggedInRole?: boolean;
};
export declare class WsRole extends SoapMappingBase {
    role?: RecordRef;
    isDefault?: boolean;
    isInactive?: boolean;
    isLoggedInRole?: boolean;
    constructor(props: WsRoleProps);
}
export declare type GetDeletedResultProps = {
    status: Status;
    totalRecords?: number;
    pageSize?: number;
    totalPages?: number;
    pageIndex?: number;
    deletedRecordList?: DeletedRecordList;
};
export declare class GetDeletedResult extends SoapMappingBase {
    status: Status;
    totalRecords?: number;
    pageSize?: number;
    totalPages?: number;
    pageIndex?: number;
    deletedRecordList?: DeletedRecordList;
    constructor(props: GetDeletedResultProps);
}
export declare type MultiSelectCustomFieldRefProps = {
    value: ListOrRecordRef[];
} & CustomFieldRefProps;
export declare class MultiSelectCustomFieldRef extends CustomFieldRef {
    value: ListOrRecordRef[];
    constructor(props: MultiSelectCustomFieldRefProps);
}
export declare type SearchColumnLongFieldProps = {
    searchValue?: number;
} & SearchColumnFieldProps;
export declare class SearchColumnLongField extends SearchColumnField {
    searchValue?: number;
    constructor(props: SearchColumnLongFieldProps);
}
export declare type GetSelectFilterByFieldValueProps = {
    sublist?: string;
    field: string;
    internalId: string;
};
export declare class GetSelectFilterByFieldValue extends SoapMappingBase {
    sublist?: string;
    field: string;
    internalId: string;
    constructor(props: GetSelectFilterByFieldValueProps);
}
export declare type GetDeletedFilterProps = {
    deletedDate?: SearchDateField;
    type?: SearchEnumMultiSelectField;
    scriptId?: SearchStringField;
};
export declare class GetDeletedFilter extends SoapMappingBase {
    deletedDate?: SearchDateField;
    type?: SearchEnumMultiSelectField;
    scriptId?: SearchStringField;
    constructor(props: GetDeletedFilterProps);
}
export declare type ItemAvailabilityListProps = {
    itemAvailability: ItemAvailability[];
};
export declare class ItemAvailabilityList extends SoapMappingBase {
    itemAvailability: ItemAvailability[];
    constructor(props: ItemAvailabilityListProps);
}
export declare type SearchDateFieldProps = {
    predefinedSearchValue?: PlatformCoreTypes.SearchDate;
    searchValue?: string;
    searchValue2?: string;
    operator?: PlatformCoreTypes.SearchDateFieldOperator;
};
export declare class SearchDateField extends SoapMappingBase {
    predefinedSearchValue?: PlatformCoreTypes.SearchDate;
    searchValue?: string;
    searchValue2?: string;
    operator?: PlatformCoreTypes.SearchDateFieldOperator;
    constructor(props: SearchDateFieldProps);
}
export declare type SearchColumnSelectCustomFieldProps = {
    searchValue?: ListOrRecordRef;
} & SearchColumnCustomFieldProps;
export declare class SearchColumnSelectCustomField extends SearchColumnCustomField {
    searchValue?: ListOrRecordRef;
    constructor(props: SearchColumnSelectCustomFieldProps);
}
export declare type GetDataCenterUrlsResultProps = {
    status: Status;
    dataCenterUrls?: DataCenterUrls;
};
export declare class GetDataCenterUrlsResult extends SoapMappingBase {
    status: Status;
    dataCenterUrls?: DataCenterUrls;
    constructor(props: GetDataCenterUrlsResultProps);
}
export declare type PostingTransactionSummaryListProps = {
    postingTransactionSummary: PostingTransactionSummary[];
};
export declare class PostingTransactionSummaryList extends SoapMappingBase {
    postingTransactionSummary: PostingTransactionSummary[];
    constructor(props: PostingTransactionSummaryListProps);
}
export declare type DimensionRefProps = {
    scriptId?: string;
};
export declare class DimensionRef extends SoapMappingBase {
    scriptId?: string;
    constructor(props: DimensionRefProps);
}
export declare type SearchLongFieldProps = {
    searchValue?: number;
    searchValue2?: number;
    operator?: PlatformCoreTypes.SearchLongFieldOperator;
};
export declare class SearchLongField extends SoapMappingBase {
    searchValue?: number;
    searchValue2?: number;
    operator?: PlatformCoreTypes.SearchLongFieldOperator;
    constructor(props: SearchLongFieldProps);
}
export declare type CustomizationRefListProps = {
    customizationRef?: CustomizationRef[];
};
export declare class CustomizationRefList extends SoapMappingBase {
    customizationRef?: CustomizationRef[];
    constructor(props: CustomizationRefListProps);
}
export declare type GetSavedSearchRecordProps = {
    searchType?: PlatformCoreTypes.SearchRecordType;
};
export declare class GetSavedSearchRecord extends SoapMappingBase {
    searchType?: PlatformCoreTypes.SearchRecordType;
    constructor(props: GetSavedSearchRecordProps);
}
export declare type CurrencyRateProps = {
    baseCurrency: RecordRef;
    fromCurrency: RecordRef;
    exchangeRate: number;
    effectiveDate: string;
};
export declare class CurrencyRate extends SoapMappingBase {
    baseCurrency: RecordRef;
    fromCurrency: RecordRef;
    exchangeRate: number;
    effectiveDate: string;
    constructor(props: CurrencyRateProps);
}
export declare type DurationProps = {
    timeSpan: number;
    unit: PlatformCoreTypes.DurationUnit;
};
export declare class Duration extends SoapMappingBase {
    timeSpan: number;
    unit: PlatformCoreTypes.DurationUnit;
    constructor(props: DurationProps);
}
export declare type CustomizationTypeProps = {
    getCustomizationType?: PlatformCoreTypes.GetCustomizationType;
};
export declare class CustomizationType extends SoapMappingBase {
    getCustomizationType?: PlatformCoreTypes.GetCustomizationType;
    constructor(props: CustomizationTypeProps);
}
export declare type SearchColumnDoubleCustomFieldProps = {
    searchValue?: number;
} & SearchColumnCustomFieldProps;
export declare class SearchColumnDoubleCustomField extends SearchColumnCustomField {
    searchValue?: number;
    constructor(props: SearchColumnDoubleCustomFieldProps);
}
export declare type ListOrRecordRefProps = {
    name?: string;
    internalId?: string;
    externalId?: string;
    typeId?: string;
};
export declare class ListOrRecordRef extends SoapMappingBase {
    name?: string;
    internalId?: string;
    externalId?: string;
    typeId?: string;
    constructor(props: ListOrRecordRefProps);
}
export declare type LongCustomFieldRefProps = {
    value: number;
} & CustomFieldRefProps;
export declare class LongCustomFieldRef extends CustomFieldRef {
    value: number;
    constructor(props: LongCustomFieldRefProps);
}
export declare type TokenPassportProps = {
    account: string;
    consumerKey: string;
    token: string;
    nonce: string;
    timestamp: number;
    signature: TokenPassportSignature;
};
export declare class TokenPassport extends SoapMappingBase {
    account: string;
    consumerKey: string;
    token: string;
    nonce: string;
    timestamp: number;
    signature: TokenPassportSignature;
    constructor(props: TokenPassportProps);
}
export declare type DoubleCustomFieldRefProps = {
    value: number;
} & CustomFieldRefProps;
export declare class DoubleCustomFieldRef extends CustomFieldRef {
    value: number;
    constructor(props: DoubleCustomFieldRefProps);
}
export declare type GetCustomizationIdResultProps = {
    status: Status;
    totalRecords?: number;
    customizationRefList?: CustomizationRefList;
};
export declare class GetCustomizationIdResult extends SoapMappingBase {
    status: Status;
    totalRecords?: number;
    customizationRefList?: CustomizationRefList;
    constructor(props: GetCustomizationIdResultProps);
}
export declare type GetSelectValueFilterProps = {
    filterValue: string;
    operator: PlatformCoreTypes.GetSelectValueFilterOperator;
};
export declare class GetSelectValueFilter extends SoapMappingBase {
    filterValue: string;
    operator: PlatformCoreTypes.GetSelectValueFilterOperator;
    constructor(props: GetSelectValueFilterProps);
}
export declare type PassportProps = {
    email: string;
    password: string;
    account: string;
    role?: RecordRef;
};
export declare class Passport extends SoapMappingBase {
    email: string;
    password: string;
    account: string;
    role?: RecordRef;
    constructor(props: PassportProps);
}
export declare type BudgetExchangeRateProps = {
    period: RecordRef;
    fromSubsidiary: RecordRef;
    toSubsidiary: RecordRef;
    currentRate?: number;
    averageRate?: number;
    historicalRate?: number;
};
export declare class BudgetExchangeRate extends SoapMappingBase {
    period: RecordRef;
    fromSubsidiary: RecordRef;
    toSubsidiary: RecordRef;
    currentRate?: number;
    averageRate?: number;
    historicalRate?: number;
    constructor(props: BudgetExchangeRateProps);
}
export declare type StatusProps = {
    statusDetail?: StatusDetail[];
    isSuccess?: boolean;
};
export declare class Status extends SoapMappingBase {
    statusDetail?: StatusDetail[];
    isSuccess?: boolean;
    constructor(props: StatusProps);
}
export declare type SearchDateCustomFieldProps = {
    predefinedSearchValue?: PlatformCoreTypes.SearchDate;
    searchValue?: string;
    searchValue2?: string;
    operator?: PlatformCoreTypes.SearchDateFieldOperator;
} & SearchCustomFieldProps;
export declare class SearchDateCustomField extends SearchCustomField {
    predefinedSearchValue?: PlatformCoreTypes.SearchDate;
    searchValue?: string;
    searchValue2?: string;
    operator?: PlatformCoreTypes.SearchDateFieldOperator;
    constructor(props: SearchDateCustomFieldProps);
}
export declare type SearchMultiSelectCustomFieldProps = {
    searchValue?: ListOrRecordRef[];
    operator?: PlatformCoreTypes.SearchMultiSelectFieldOperator;
} & SearchCustomFieldProps;
export declare class SearchMultiSelectCustomField extends SearchCustomField {
    searchValue?: ListOrRecordRef[];
    operator?: PlatformCoreTypes.SearchMultiSelectFieldOperator;
    constructor(props: SearchMultiSelectCustomFieldProps);
}
export declare type StringDimensionRefProps = {
    value: string;
} & DimensionRefProps;
export declare class StringDimensionRef extends DimensionRef {
    value: string;
    constructor(props: StringDimensionRefProps);
}
export declare type GetPostingTransactionSummaryResultProps = {
    status: Status;
    totalRecords?: number;
    pageSize?: number;
    totalPages?: number;
    pageIndex?: number;
    operationId?: string;
    postingTransactionSummaryList?: PostingTransactionSummaryList;
};
export declare class GetPostingTransactionSummaryResult extends SoapMappingBase {
    status: Status;
    totalRecords?: number;
    pageSize?: number;
    totalPages?: number;
    pageIndex?: number;
    operationId?: string;
    postingTransactionSummaryList?: PostingTransactionSummaryList;
    constructor(props: GetPostingTransactionSummaryResultProps);
}
export declare type SelectDimensionRefProps = {
    value: ListOrRecordRef;
} & DimensionRefProps;
export declare class SelectDimensionRef extends DimensionRef {
    value: ListOrRecordRef;
    constructor(props: SelectDimensionRefProps);
}
export declare type SearchColumnStringCustomFieldProps = {
    searchValue?: string;
} & SearchColumnCustomFieldProps;
export declare class SearchColumnStringCustomField extends SearchColumnCustomField {
    searchValue?: string;
    constructor(props: SearchColumnStringCustomFieldProps);
}
export declare type GetAllRecordProps = {
    recordType?: PlatformCoreTypes.GetAllRecordType;
};
export declare class GetAllRecord extends SoapMappingBase {
    recordType?: PlatformCoreTypes.GetAllRecordType;
    constructor(props: GetAllRecordProps);
}
export declare type SearchStringFieldProps = {
    searchValue?: string;
    operator?: PlatformCoreTypes.SearchStringFieldOperator;
};
export declare class SearchStringField extends SoapMappingBase {
    searchValue?: string;
    operator?: PlatformCoreTypes.SearchStringFieldOperator;
    constructor(props: SearchStringFieldProps);
}
export declare type InitializeRefListProps = {
    initializeRef?: InitializeRef[];
};
export declare class InitializeRefList extends SoapMappingBase {
    initializeRef?: InitializeRef[];
    constructor(props: InitializeRefListProps);
}
export declare type ChangePasswordProps = {
    currentPassword: string;
    newPassword?: string;
    newPassword2?: string;
};
export declare class ChangePassword extends SoapMappingBase {
    currentPassword: string;
    newPassword?: string;
    newPassword2?: string;
    constructor(props: ChangePasswordProps);
}
export declare type SearchColumnEnumMultiSelectCustomFieldProps = {
    searchValue?: string[];
} & SearchColumnCustomFieldProps;
export declare class SearchColumnEnumMultiSelectCustomField extends SearchColumnCustomField {
    searchValue?: string[];
    constructor(props: SearchColumnEnumMultiSelectCustomFieldProps);
}
export declare type UpdateInviteeStatusReferenceProps = {
    eventId: RecordRef;
    responseCode: PlatformCoreTypes.CalendarEventAttendeeResponse;
};
export declare class UpdateInviteeStatusReference extends SoapMappingBase {
    eventId: RecordRef;
    responseCode: PlatformCoreTypes.CalendarEventAttendeeResponse;
    constructor(props: UpdateInviteeStatusReferenceProps);
}
export declare type GetServerTimeResultProps = {
    status: Status;
    serverTime: string;
};
export declare class GetServerTimeResult extends SoapMappingBase {
    status: Status;
    serverTime: string;
    constructor(props: GetServerTimeResultProps);
}
export declare type CustomRecordRefProps = {
    internalId?: string;
    externalId?: string;
    typeId?: string;
    scriptId?: string;
} & BaseRefProps;
export declare class CustomRecordRef extends BaseRef {
    internalId?: string;
    externalId?: string;
    typeId?: string;
    scriptId?: string;
    constructor(props: CustomRecordRefProps);
}
export declare type BudgetExchangeRateListProps = {
    budgetExchangeRate: BudgetExchangeRate[];
};
export declare class BudgetExchangeRateList extends SoapMappingBase {
    budgetExchangeRate: BudgetExchangeRate[];
    constructor(props: BudgetExchangeRateListProps);
}
export declare type InitializeRecordProps = {
    type: PlatformCoreTypes.InitializeType;
    reference?: InitializeRef;
    auxReference?: InitializeAuxRef;
    referenceList?: InitializeRefList;
};
export declare class InitializeRecord extends SoapMappingBase {
    type: PlatformCoreTypes.InitializeType;
    reference?: InitializeRef;
    auxReference?: InitializeAuxRef;
    referenceList?: InitializeRefList;
    constructor(props: InitializeRecordProps);
}
export declare type SearchColumnEnumSelectFieldProps = {
    searchValue?: string;
} & SearchColumnFieldProps;
export declare class SearchColumnEnumSelectField extends SearchColumnField {
    searchValue?: string;
    constructor(props: SearchColumnEnumSelectFieldProps);
}
export declare type SearchColumnDoubleFieldProps = {
    searchValue?: number;
} & SearchColumnFieldProps;
export declare class SearchColumnDoubleField extends SearchColumnField {
    searchValue?: number;
    constructor(props: SearchColumnDoubleFieldProps);
}
export declare type GetBudgetExchangeRateResultProps = {
    status: Status;
    budgetExchangeRateList?: BudgetExchangeRateList;
};
export declare class GetBudgetExchangeRateResult extends SoapMappingBase {
    status: Status;
    budgetExchangeRateList?: BudgetExchangeRateList;
    constructor(props: GetBudgetExchangeRateResultProps);
}
export declare type SearchLongCustomFieldProps = {
    searchValue?: number;
    searchValue2?: number;
    operator?: PlatformCoreTypes.SearchLongFieldOperator;
} & SearchCustomFieldProps;
export declare class SearchLongCustomField extends SearchCustomField {
    searchValue?: number;
    searchValue2?: number;
    operator?: PlatformCoreTypes.SearchLongFieldOperator;
    constructor(props: SearchLongCustomFieldProps);
}
export declare type TokenPassportSignatureProps = {
    value?: string;
    algorithm: string;
};
export declare class TokenPassportSignature extends SoapMappingBase {
    value?: string;
    algorithm: string;
    constructor(props: TokenPassportSignatureProps);
}
export declare type ItemAvailabilityFilterProps = {
    item: RecordRefList;
    lastQtyAvailableChange?: string;
};
export declare class ItemAvailabilityFilter extends SoapMappingBase {
    item: RecordRefList;
    lastQtyAvailableChange?: string;
    constructor(props: ItemAvailabilityFilterProps);
}
export declare type SearchColumnDateFieldProps = {
    searchValue?: string;
} & SearchColumnFieldProps;
export declare class SearchColumnDateField extends SearchColumnField {
    searchValue?: string;
    constructor(props: SearchColumnDateFieldProps);
}
export declare type SearchColumnCustomFieldListProps = {
    customField?: SearchColumnCustomField[];
};
export declare class SearchColumnCustomFieldList extends SoapMappingBase {
    customField?: SearchColumnCustomField[];
    constructor(props: SearchColumnCustomFieldListProps);
}
