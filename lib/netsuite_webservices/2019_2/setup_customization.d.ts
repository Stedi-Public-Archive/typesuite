import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as SetupCustomizationTypes from "./setup_customization_types";
import * as PlatformCommonTypes from "./platform_common_types";
import { SoapMappingBase } from "../../soap-types";
export declare type CustomRecordTypeTabsProps = {
    tabTitle?: string;
    tabParent?: PlatformCore.RecordRef;
    tabTitleLanguageValueList?: LanguageValueList;
};
export declare class CustomRecordTypeTabs extends SoapMappingBase {
    tabTitle?: string;
    tabParent?: PlatformCore.RecordRef;
    tabTitleLanguageValueList?: LanguageValueList;
    constructor(props: CustomRecordTypeTabsProps);
}
export declare type CustomRecordProps = {
    customRecordId?: string;
    customForm?: PlatformCore.RecordRef;
    isInactive?: boolean;
    parent?: PlatformCore.RecordRef;
    disclaimer?: string;
    created?: string;
    lastModified?: string;
    name?: string;
    autoName?: boolean;
    altName?: string;
    owner?: PlatformCore.RecordRef;
    recType?: PlatformCore.RecordRef;
    enableNumbering?: boolean;
    numberingPrefix?: string;
    numberingSuffix?: string;
    numberingMinDigits?: number;
    description?: string;
    numberingInit?: number;
    numberingCurrentNumber?: number;
    allowNumberingOverride?: boolean;
    isNumberingUpdateable?: boolean;
    translationsList?: CustomRecordTranslationsList;
    includeName?: boolean;
    showId?: boolean;
    showCreationDate?: boolean;
    showCreationDateOnList?: boolean;
    showLastModified?: boolean;
    showLastModifiedOnList?: boolean;
    showOwner?: boolean;
    showOwnerOnList?: boolean;
    showOwnerAllowChange?: boolean;
    usePermissions?: boolean;
    allowAttachments?: boolean;
    showNotes?: boolean;
    enablEmailMerge?: boolean;
    isOrdered?: boolean;
    allowInlineEditing?: boolean;
    isAvailableOffline?: boolean;
    allowQuickSearch?: boolean;
    recordName?: string;
    scriptId?: string;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CustomRecord extends PlatformCore.Record {
    customRecordId?: string;
    customForm?: PlatformCore.RecordRef;
    isInactive?: boolean;
    parent?: PlatformCore.RecordRef;
    disclaimer?: string;
    created?: string;
    lastModified?: string;
    name?: string;
    autoName?: boolean;
    altName?: string;
    owner?: PlatformCore.RecordRef;
    recType?: PlatformCore.RecordRef;
    enableNumbering?: boolean;
    numberingPrefix?: string;
    numberingSuffix?: string;
    numberingMinDigits?: number;
    description?: string;
    numberingInit?: number;
    numberingCurrentNumber?: number;
    allowNumberingOverride?: boolean;
    isNumberingUpdateable?: boolean;
    translationsList?: CustomRecordTranslationsList;
    includeName?: boolean;
    showId?: boolean;
    showCreationDate?: boolean;
    showCreationDateOnList?: boolean;
    showLastModified?: boolean;
    showLastModifiedOnList?: boolean;
    showOwner?: boolean;
    showOwnerOnList?: boolean;
    showOwnerAllowChange?: boolean;
    usePermissions?: boolean;
    allowAttachments?: boolean;
    showNotes?: boolean;
    enablEmailMerge?: boolean;
    isOrdered?: boolean;
    allowInlineEditing?: boolean;
    isAvailableOffline?: boolean;
    allowQuickSearch?: boolean;
    recordName?: string;
    scriptId?: string;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: CustomRecordProps);
}
export declare type CustomRecordTypeTabsListProps = {
    tabs?: CustomRecordTypeTabs[];
    replaceAll?: boolean;
};
export declare class CustomRecordTypeTabsList extends SoapMappingBase {
    tabs?: CustomRecordTypeTabs[];
    replaceAll?: boolean;
    constructor(props: CustomRecordTypeTabsListProps);
}
export declare type CustomFieldTypeProps = {
    fieldType?: SetupCustomizationTypes.CustomizationFieldType;
    scriptId?: string;
} & PlatformCore.RecordProps;
export declare class CustomFieldType extends PlatformCore.Record {
    fieldType?: SetupCustomizationTypes.CustomizationFieldType;
    scriptId?: string;
    constructor(props: CustomFieldTypeProps);
}
export declare type OtherCustomFieldProps = {
    recType?: PlatformCore.RecordRef;
    label?: string;
    owner?: PlatformCore.RecordRef;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    showInList?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    linkText?: string;
    isMandatory?: boolean;
    checkSpelling?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    searchDefault?: PlatformCore.RecordRef;
    searchCompareField?: PlatformCore.RecordRef;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourceFilterBy?: PlatformCore.RecordRef;
    customSegment?: PlatformCore.RecordRef;
    filterList?: OtherCustomFieldFilterList;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    subAccessList?: CustomFieldSubAccessList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
} & CustomFieldTypeProps;
export declare class OtherCustomField extends CustomFieldType {
    recType?: PlatformCore.RecordRef;
    label?: string;
    owner?: PlatformCore.RecordRef;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    showInList?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    linkText?: string;
    isMandatory?: boolean;
    checkSpelling?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    searchDefault?: PlatformCore.RecordRef;
    searchCompareField?: PlatformCore.RecordRef;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourceFilterBy?: PlatformCore.RecordRef;
    customSegment?: PlatformCore.RecordRef;
    filterList?: OtherCustomFieldFilterList;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    subAccessList?: CustomFieldSubAccessList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
    constructor(props: OtherCustomFieldProps);
}
export declare type TransactionColumnCustomFieldFilterProps = {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterSelList?: FldFilterSelList;
    fldFilterNotNull?: boolean;
};
export declare class TransactionColumnCustomFieldFilter extends SoapMappingBase {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterSelList?: FldFilterSelList;
    fldFilterNotNull?: boolean;
    constructor(props: TransactionColumnCustomFieldFilterProps);
}
export declare type CustomSaleItemProps = {
    item?: PlatformCore.RecordRef;
    line?: number;
    description?: string;
    amount?: number;
    isTaxable?: boolean;
    options?: PlatformCore.CustomFieldList;
    deferRevRec?: boolean;
    quantity?: number;
    currentPercent?: number;
    units?: PlatformCore.RecordRef;
    inventoryDetail?: PlatformCommon.InventoryDetail;
    serialNumbers?: string;
    binNumbers?: string;
    price?: PlatformCore.RecordRef;
    rate?: string;
    percentComplete?: number;
    quantityOnHand?: number;
    quantityAvailable?: number;
    quantityRemaining?: number;
    department?: PlatformCore.RecordRef;
    licenseCode?: string;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    revRecSchedule?: PlatformCore.RecordRef;
    revRecStartDate?: string;
    revRecEndDate?: string;
    grossAmt?: number;
    costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
    costEstimate?: number;
    taxDetailsReference?: string;
    excludeFromRateRequest?: boolean;
    catchUpPeriod?: PlatformCore.RecordRef;
    giftCertFrom?: string;
    giftCertRecipientName?: string;
    giftCertRecipientEmail?: string;
    giftCertMessage?: string;
    taxAmount?: number;
    vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
    vsoeIsEstimate?: boolean;
    vsoePrice?: number;
    vsoeAmount?: number;
    vsoeAllocation?: number;
    vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
    vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
    vsoeDelivered?: boolean;
    customFieldList?: PlatformCore.CustomFieldList;
};
export declare class CustomSaleItem extends SoapMappingBase {
    item?: PlatformCore.RecordRef;
    line?: number;
    description?: string;
    amount?: number;
    isTaxable?: boolean;
    options?: PlatformCore.CustomFieldList;
    deferRevRec?: boolean;
    quantity?: number;
    currentPercent?: number;
    units?: PlatformCore.RecordRef;
    inventoryDetail?: PlatformCommon.InventoryDetail;
    serialNumbers?: string;
    binNumbers?: string;
    price?: PlatformCore.RecordRef;
    rate?: string;
    percentComplete?: number;
    quantityOnHand?: number;
    quantityAvailable?: number;
    quantityRemaining?: number;
    department?: PlatformCore.RecordRef;
    licenseCode?: string;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    revRecSchedule?: PlatformCore.RecordRef;
    revRecStartDate?: string;
    revRecEndDate?: string;
    grossAmt?: number;
    costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
    costEstimate?: number;
    taxDetailsReference?: string;
    excludeFromRateRequest?: boolean;
    catchUpPeriod?: PlatformCore.RecordRef;
    giftCertFrom?: string;
    giftCertRecipientName?: string;
    giftCertRecipientEmail?: string;
    giftCertMessage?: string;
    taxAmount?: number;
    vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
    vsoeIsEstimate?: boolean;
    vsoePrice?: number;
    vsoeAmount?: number;
    vsoeAllocation?: number;
    vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
    vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
    vsoeDelivered?: boolean;
    customFieldList?: PlatformCore.CustomFieldList;
    constructor(props: CustomSaleItemProps);
}
export declare type CustomListTranslationsProps = {
    locale?: PlatformCommonTypes.Language;
    localeDescription?: string;
    name?: string;
};
export declare class CustomListTranslations extends SoapMappingBase {
    locale?: PlatformCommonTypes.Language;
    localeDescription?: string;
    name?: string;
    constructor(props: CustomListTranslationsProps);
}
export declare type ItemOptionCustomFieldFilterProps = {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterSelList?: FldFilterSelList;
    fldFilterNotNull?: boolean;
};
export declare class ItemOptionCustomFieldFilter extends SoapMappingBase {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterSelList?: FldFilterSelList;
    fldFilterNotNull?: boolean;
    constructor(props: ItemOptionCustomFieldFilterProps);
}
export declare type CustomRecordTypeParentsListProps = {
    parents?: CustomRecordTypeParents[];
    replaceAll?: boolean;
};
export declare class CustomRecordTypeParentsList extends SoapMappingBase {
    parents?: CustomRecordTypeParents[];
    replaceAll?: boolean;
    constructor(props: CustomRecordTypeParentsListProps);
}
export declare type CrmCustomFieldFilterListProps = {
    filter?: CrmCustomFieldFilter[];
    replaceAll?: boolean;
};
export declare class CrmCustomFieldFilterList extends SoapMappingBase {
    filter?: CrmCustomFieldFilter[];
    replaceAll?: boolean;
    constructor(props: CrmCustomFieldFilterListProps);
}
export declare type CustomListSearchAdvancedProps = {
    criteria?: CustomListSearch;
    columns?: CustomListSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class CustomListSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: CustomListSearch;
    columns?: CustomListSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: CustomListSearchAdvancedProps);
}
export declare type TransactionColumnCustomFieldFilterListProps = {
    filter?: TransactionColumnCustomFieldFilter[];
    replaceAll?: boolean;
};
export declare class TransactionColumnCustomFieldFilterList extends SoapMappingBase {
    filter?: TransactionColumnCustomFieldFilter[];
    replaceAll?: boolean;
    constructor(props: TransactionColumnCustomFieldFilterListProps);
}
export declare type CustomRecordTranslationsListProps = {
    customRecordTranslations?: CustomRecordTranslations[];
    replaceAll?: boolean;
};
export declare class CustomRecordTranslationsList extends SoapMappingBase {
    customRecordTranslations?: CustomRecordTranslations[];
    replaceAll?: boolean;
    constructor(props: CustomRecordTranslationsListProps);
}
export declare type CustomListProps = {
    name?: string;
    owner?: PlatformCore.RecordRef;
    isOrdered?: boolean;
    description?: string;
    isMatrixOption?: boolean;
    scriptId?: string;
    convertToCustomRecord?: boolean;
    isInactive?: boolean;
    customValueList?: CustomListCustomValueList;
    translationsList?: CustomListTranslationsList;
    internalId?: string;
} & PlatformCore.RecordProps;
export declare class CustomList extends PlatformCore.Record {
    name?: string;
    owner?: PlatformCore.RecordRef;
    isOrdered?: boolean;
    description?: string;
    isMatrixOption?: boolean;
    scriptId?: string;
    convertToCustomRecord?: boolean;
    isInactive?: boolean;
    customValueList?: CustomListCustomValueList;
    translationsList?: CustomListTranslationsList;
    internalId?: string;
    constructor(props: CustomListProps);
}
export declare type ItemCustomFieldProps = {
    label?: string;
    owner?: PlatformCore.RecordRef;
    itemMatrix?: boolean;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    showInList?: boolean;
    globalSearch?: boolean;
    isParent?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    subtab?: PlatformCore.RecordRef;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    parentSubtab?: PlatformCore.RecordRef;
    linkText?: string;
    isMandatory?: boolean;
    checkSpelling?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    searchDefault?: PlatformCore.RecordRef;
    searchCompareField?: PlatformCore.RecordRef;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourceFilterBy?: PlatformCore.RecordRef;
    customSegment?: PlatformCore.RecordRef;
    appliesToInventory?: boolean;
    appliesToNonInventory?: boolean;
    appliesToService?: boolean;
    appliesToOtherCharge?: boolean;
    appliesToGroup?: boolean;
    appliesToKit?: boolean;
    appliesToItemAssembly?: boolean;
    availableToSso?: boolean;
    itemSubType?: SetupCustomizationTypes.ItemCustomFieldItemSubType;
    filterList?: ItemCustomFieldFilterList;
    appliesToPriceList?: boolean;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    subAccessList?: CustomFieldSubAccessList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
} & CustomFieldTypeProps;
export declare class ItemCustomField extends CustomFieldType {
    label?: string;
    owner?: PlatformCore.RecordRef;
    itemMatrix?: boolean;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    showInList?: boolean;
    globalSearch?: boolean;
    isParent?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    subtab?: PlatformCore.RecordRef;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    parentSubtab?: PlatformCore.RecordRef;
    linkText?: string;
    isMandatory?: boolean;
    checkSpelling?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    searchDefault?: PlatformCore.RecordRef;
    searchCompareField?: PlatformCore.RecordRef;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourceFilterBy?: PlatformCore.RecordRef;
    customSegment?: PlatformCore.RecordRef;
    appliesToInventory?: boolean;
    appliesToNonInventory?: boolean;
    appliesToService?: boolean;
    appliesToOtherCharge?: boolean;
    appliesToGroup?: boolean;
    appliesToKit?: boolean;
    appliesToItemAssembly?: boolean;
    availableToSso?: boolean;
    itemSubType?: SetupCustomizationTypes.ItemCustomFieldItemSubType;
    filterList?: ItemCustomFieldFilterList;
    appliesToPriceList?: boolean;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    subAccessList?: CustomFieldSubAccessList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
    constructor(props: ItemCustomFieldProps);
}
export declare type TransactionBodyCustomFieldFilterProps = {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterSelList?: FldFilterSelList;
    fldFilterNotNull?: boolean;
};
export declare class TransactionBodyCustomFieldFilter extends SoapMappingBase {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterSelList?: FldFilterSelList;
    fldFilterNotNull?: boolean;
    constructor(props: TransactionBodyCustomFieldFilterProps);
}
export declare type CustomPurchaseItemListProps = {
    item?: CustomPurchaseItem[];
    replaceAll?: boolean;
};
export declare class CustomPurchaseItemList extends SoapMappingBase {
    item?: CustomPurchaseItem[];
    replaceAll?: boolean;
    constructor(props: CustomPurchaseItemListProps);
}
export declare type CustomTransactionLineProps = {
    account?: PlatformCore.RecordRef;
    line?: number;
    debit?: number;
    credit?: number;
    amount?: number;
    memo?: string;
    entity?: PlatformCore.RecordRef;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
};
export declare class CustomTransactionLine extends SoapMappingBase {
    account?: PlatformCore.RecordRef;
    line?: number;
    debit?: number;
    credit?: number;
    amount?: number;
    memo?: string;
    entity?: PlatformCore.RecordRef;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
    constructor(props: CustomTransactionLineProps);
}
export declare type CustomRecordCustomFieldProps = {
    label?: string;
    owner?: PlatformCore.RecordRef;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    showInList?: boolean;
    globalSearch?: boolean;
    isParent?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    subtab?: PlatformCore.RecordRef;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    parentSubtab?: PlatformCore.RecordRef;
    linkText?: string;
    isMandatory?: boolean;
    checkSpelling?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    searchDefault?: PlatformCore.RecordRef;
    searchCompareField?: PlatformCore.RecordRef;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourcefilterby?: PlatformCore.RecordRef;
    customSegment?: PlatformCore.RecordRef;
    recType?: string;
    roleRestrict?: boolean;
    filterList?: CustomRecordCustomFieldFilterList;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    subAccessList?: CustomFieldSubAccessList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
} & CustomFieldTypeProps;
export declare class CustomRecordCustomField extends CustomFieldType {
    label?: string;
    owner?: PlatformCore.RecordRef;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    showInList?: boolean;
    globalSearch?: boolean;
    isParent?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    subtab?: PlatformCore.RecordRef;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    parentSubtab?: PlatformCore.RecordRef;
    linkText?: string;
    isMandatory?: boolean;
    checkSpelling?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    searchDefault?: PlatformCore.RecordRef;
    searchCompareField?: PlatformCore.RecordRef;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourcefilterby?: PlatformCore.RecordRef;
    customSegment?: PlatformCore.RecordRef;
    recType?: string;
    roleRestrict?: boolean;
    filterList?: CustomRecordCustomFieldFilterList;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    subAccessList?: CustomFieldSubAccessList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
    constructor(props: CustomRecordCustomFieldProps);
}
export declare type ItemOptionCustomFieldFilterListProps = {
    filter?: ItemOptionCustomFieldFilter[];
    replaceAll?: boolean;
};
export declare class ItemOptionCustomFieldFilterList extends SoapMappingBase {
    filter?: ItemOptionCustomFieldFilter[];
    replaceAll?: boolean;
    constructor(props: ItemOptionCustomFieldFilterListProps);
}
export declare type CustomRecordTypeSublistsListProps = {
    sublists?: CustomRecordTypeSublists[];
    replaceAll?: boolean;
};
export declare class CustomRecordTypeSublistsList extends SoapMappingBase {
    sublists?: CustomRecordTypeSublists[];
    replaceAll?: boolean;
    constructor(props: CustomRecordTypeSublistsListProps);
}
export declare type TransactionBodyCustomFieldProps = {
    label?: string;
    owner?: PlatformCore.RecordRef;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    showInList?: boolean;
    globalSearch?: boolean;
    isParent?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    subtab?: PlatformCore.RecordRef;
    availableToSso?: boolean;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    parentSubtab?: PlatformCore.RecordRef;
    linkText?: string;
    isMandatory?: boolean;
    checkSpelling?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    searchDefault?: PlatformCore.RecordRef;
    searchCompareField?: PlatformCore.RecordRef;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourceFilterBy?: PlatformCore.RecordRef;
    customSegment?: PlatformCore.RecordRef;
    bodyPurchase?: boolean;
    bodySale?: boolean;
    bodyOpportunity?: boolean;
    bodyJournal?: boolean;
    bodyExpenseReport?: boolean;
    bodyStore?: boolean;
    bodyTransferOrder?: boolean;
    bodyItemReceipt?: boolean;
    bodyItemReceiptOrder?: boolean;
    bodyItemFulfillment?: boolean;
    bodyItemFulfillmentOrder?: boolean;
    bodyInventoryAdjustment?: boolean;
    bodyBTegata?: boolean;
    bodyAssemblyBuild?: boolean;
    bodyPrintFlag?: boolean;
    bodyPickingTicket?: boolean;
    bodyOtherTransaction?: boolean;
    bodyPrintPackingSlip?: boolean;
    bodyCustomerPayment?: boolean;
    bodyVendorPayment?: boolean;
    bodyDeposit?: boolean;
    bodyBom?: boolean;
    bodyPrintStatement?: boolean;
    filterList?: TransactionBodyCustomFieldFilterList;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    subAccessList?: CustomFieldSubAccessList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
} & CustomFieldTypeProps;
export declare class TransactionBodyCustomField extends CustomFieldType {
    label?: string;
    owner?: PlatformCore.RecordRef;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    showInList?: boolean;
    globalSearch?: boolean;
    isParent?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    subtab?: PlatformCore.RecordRef;
    availableToSso?: boolean;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    parentSubtab?: PlatformCore.RecordRef;
    linkText?: string;
    isMandatory?: boolean;
    checkSpelling?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    searchDefault?: PlatformCore.RecordRef;
    searchCompareField?: PlatformCore.RecordRef;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourceFilterBy?: PlatformCore.RecordRef;
    customSegment?: PlatformCore.RecordRef;
    bodyPurchase?: boolean;
    bodySale?: boolean;
    bodyOpportunity?: boolean;
    bodyJournal?: boolean;
    bodyExpenseReport?: boolean;
    bodyStore?: boolean;
    bodyTransferOrder?: boolean;
    bodyItemReceipt?: boolean;
    bodyItemReceiptOrder?: boolean;
    bodyItemFulfillment?: boolean;
    bodyItemFulfillmentOrder?: boolean;
    bodyInventoryAdjustment?: boolean;
    bodyBTegata?: boolean;
    bodyAssemblyBuild?: boolean;
    bodyPrintFlag?: boolean;
    bodyPickingTicket?: boolean;
    bodyOtherTransaction?: boolean;
    bodyPrintPackingSlip?: boolean;
    bodyCustomerPayment?: boolean;
    bodyVendorPayment?: boolean;
    bodyDeposit?: boolean;
    bodyBom?: boolean;
    bodyPrintStatement?: boolean;
    filterList?: TransactionBodyCustomFieldFilterList;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    subAccessList?: CustomFieldSubAccessList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
    constructor(props: TransactionBodyCustomFieldProps);
}
export declare type TransactionBodyCustomFieldFilterListProps = {
    filter?: TransactionBodyCustomFieldFilter[];
    replaceAll?: boolean;
};
export declare class TransactionBodyCustomFieldFilterList extends SoapMappingBase {
    filter?: TransactionBodyCustomFieldFilter[];
    replaceAll?: boolean;
    constructor(props: TransactionBodyCustomFieldFilterListProps);
}
export declare type CustomFieldSubAccessProps = {
    sub?: PlatformCore.RecordRef;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
};
export declare class CustomFieldSubAccess extends SoapMappingBase {
    sub?: PlatformCore.RecordRef;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    constructor(props: CustomFieldSubAccessProps);
}
export declare type TransactionColumnCustomFieldProps = {
    label?: string;
    owner?: PlatformCore.RecordRef;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    availableToSso?: boolean;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    linkText?: string;
    isMandatory?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourceFilterBy?: PlatformCore.RecordRef;
    customSegment?: PlatformCore.RecordRef;
    colExpense?: boolean;
    colPurchase?: boolean;
    colSale?: boolean;
    colOpportunity?: boolean;
    colStore?: boolean;
    colStoreHidden?: boolean;
    colJournal?: boolean;
    colBuild?: boolean;
    colExpenseReport?: boolean;
    colTime?: boolean;
    colTransferOrder?: boolean;
    colTimeGroup?: boolean;
    colItemReceipt?: boolean;
    colItemReceiptOrder?: boolean;
    colItemFulfillment?: boolean;
    colItemFulfillmentOrder?: boolean;
    colPrintFlag?: boolean;
    colPickingTicket?: boolean;
    colPackingSlip?: boolean;
    colReturnForm?: boolean;
    colStoreWithGroups?: boolean;
    colGroupOnInvoices?: boolean;
    colKitItem?: boolean;
    filterList?: TransactionColumnCustomFieldFilterList;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    subAccessList?: CustomFieldSubAccessList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
} & CustomFieldTypeProps;
export declare class TransactionColumnCustomField extends CustomFieldType {
    label?: string;
    owner?: PlatformCore.RecordRef;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    availableToSso?: boolean;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    linkText?: string;
    isMandatory?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourceFilterBy?: PlatformCore.RecordRef;
    customSegment?: PlatformCore.RecordRef;
    colExpense?: boolean;
    colPurchase?: boolean;
    colSale?: boolean;
    colOpportunity?: boolean;
    colStore?: boolean;
    colStoreHidden?: boolean;
    colJournal?: boolean;
    colBuild?: boolean;
    colExpenseReport?: boolean;
    colTime?: boolean;
    colTransferOrder?: boolean;
    colTimeGroup?: boolean;
    colItemReceipt?: boolean;
    colItemReceiptOrder?: boolean;
    colItemFulfillment?: boolean;
    colItemFulfillmentOrder?: boolean;
    colPrintFlag?: boolean;
    colPickingTicket?: boolean;
    colPackingSlip?: boolean;
    colReturnForm?: boolean;
    colStoreWithGroups?: boolean;
    colGroupOnInvoices?: boolean;
    colKitItem?: boolean;
    filterList?: TransactionColumnCustomFieldFilterList;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    subAccessList?: CustomFieldSubAccessList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
    constructor(props: TransactionColumnCustomFieldProps);
}
export declare type CustomListSearchRowProps = {
    basic?: PlatformCommon.CustomListSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};
export declare class CustomListSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.CustomListSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    constructor(props: CustomListSearchRowProps);
}
export declare type CustomFieldTranslationsProps = {
    locale?: PlatformCommonTypes.Language;
    localeDescription?: string;
    label?: string;
    help?: string;
};
export declare class CustomFieldTranslations extends SoapMappingBase {
    locale?: PlatformCommonTypes.Language;
    localeDescription?: string;
    label?: string;
    help?: string;
    constructor(props: CustomFieldTranslationsProps);
}
export declare type ItemCustomFieldFilterProps = {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterSelList?: FldFilterSelList;
    fldFilterNotNull?: boolean;
};
export declare class ItemCustomFieldFilter extends SoapMappingBase {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterSelList?: FldFilterSelList;
    fldFilterNotNull?: boolean;
    constructor(props: ItemCustomFieldFilterProps);
}
export declare type CustomRecordTypeFieldListProps = {
    customField?: CustomRecordCustomField[];
    replaceAll?: boolean;
};
export declare class CustomRecordTypeFieldList extends SoapMappingBase {
    customField?: CustomRecordCustomField[];
    replaceAll?: boolean;
    constructor(props: CustomRecordTypeFieldListProps);
}
export declare type ItemsListProps = {
    items: PlatformCore.RecordRef[];
};
export declare class ItemsList extends SoapMappingBase {
    items: PlatformCore.RecordRef[];
    constructor(props: ItemsListProps);
}
export declare type LanguageValueListProps = {
    languageValue?: LanguageValue[];
    replaceAll?: boolean;
};
export declare class LanguageValueList extends SoapMappingBase {
    languageValue?: LanguageValue[];
    replaceAll?: boolean;
    constructor(props: LanguageValueListProps);
}
export declare type CustomSegmentProps = {
    label?: string;
    scriptId?: string;
    recordScriptId?: string;
    recordType?: PlatformCore.RecordRef;
    fieldType?: SetupCustomizationTypes.CustomizationFieldType;
    isInactive?: boolean;
    showInList?: boolean;
    filteredByList?: PlatformCore.RecordRefList;
    hasGLImpact?: boolean;
    help?: string;
    description?: string;
    isMandatory?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    internalId?: string;
} & PlatformCore.RecordProps;
export declare class CustomSegment extends PlatformCore.Record {
    label?: string;
    scriptId?: string;
    recordScriptId?: string;
    recordType?: PlatformCore.RecordRef;
    fieldType?: SetupCustomizationTypes.CustomizationFieldType;
    isInactive?: boolean;
    showInList?: boolean;
    filteredByList?: PlatformCore.RecordRefList;
    hasGLImpact?: boolean;
    help?: string;
    description?: string;
    isMandatory?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    internalId?: string;
    constructor(props: CustomSegmentProps);
}
export declare type CustomRecordTypePermissionsListProps = {
    permissions?: CustomRecordTypePermissions[];
    replaceAll?: boolean;
};
export declare class CustomRecordTypePermissionsList extends SoapMappingBase {
    permissions?: CustomRecordTypePermissions[];
    replaceAll?: boolean;
    constructor(props: CustomRecordTypePermissionsListProps);
}
export declare type CustomPurchaseExpenseListProps = {
    expense?: CustomPurchaseExpense[];
    replaceAll?: boolean;
};
export declare class CustomPurchaseExpenseList extends SoapMappingBase {
    expense?: CustomPurchaseExpense[];
    replaceAll?: boolean;
    constructor(props: CustomPurchaseExpenseListProps);
}
export declare type CustomRecordTypeChildrenListProps = {
    children?: CustomRecordTypeChildren[];
    replaceAll?: boolean;
};
export declare class CustomRecordTypeChildrenList extends SoapMappingBase {
    children?: CustomRecordTypeChildren[];
    replaceAll?: boolean;
    constructor(props: CustomRecordTypeChildrenListProps);
}
export declare type CustomListCustomValueProps = {
    value?: string;
    abbreviation?: string;
    isInactive?: boolean;
    valueId?: number;
    valueLanguageValueList?: LanguageValueList;
};
export declare class CustomListCustomValue extends SoapMappingBase {
    value?: string;
    abbreviation?: string;
    isInactive?: boolean;
    valueId?: number;
    valueLanguageValueList?: LanguageValueList;
    constructor(props: CustomListCustomValueProps);
}
export declare type CustomPurchaseProps = {
    createdDate?: string;
    lastModifiedDate?: string;
    tranType?: PlatformCore.RecordRef;
    nexus?: PlatformCore.RecordRef;
    subsidiaryTaxRegNum?: PlatformCore.RecordRef;
    taxRegOverride?: boolean;
    taxDetailsOverride?: boolean;
    customForm?: PlatformCore.RecordRef;
    billAddressList?: PlatformCore.RecordRef;
    account?: PlatformCore.RecordRef;
    entity?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    postingPeriod?: PlatformCore.RecordRef;
    tranDate?: string;
    currencyName?: string;
    billingAddress?: PlatformCommon.Address;
    exchangeRate?: number;
    entityTaxRegNum?: PlatformCore.RecordRef;
    terms?: PlatformCore.RecordRef;
    dueDate?: string;
    discountDate?: string;
    tranId?: string;
    createdFrom?: PlatformCore.RecordRef;
    userTotal?: number;
    discountAmount?: number;
    taxTotal?: number;
    paymentHold?: boolean;
    memo?: string;
    tranStatus?: PlatformCore.RecordRef;
    availableVendorCredit?: number;
    currency?: PlatformCore.RecordRef;
    incoterm?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    department?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    status?: string;
    transactionNumber?: string;
    expenseList?: CustomPurchaseExpenseList;
    accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
    itemList?: CustomPurchaseItemList;
    purchaseOrderList?: PlatformCore.RecordRefList;
    taxDetailsList?: PlatformCommon.TaxDetailsList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CustomPurchase extends PlatformCore.Record {
    createdDate?: string;
    lastModifiedDate?: string;
    tranType?: PlatformCore.RecordRef;
    nexus?: PlatformCore.RecordRef;
    subsidiaryTaxRegNum?: PlatformCore.RecordRef;
    taxRegOverride?: boolean;
    taxDetailsOverride?: boolean;
    customForm?: PlatformCore.RecordRef;
    billAddressList?: PlatformCore.RecordRef;
    account?: PlatformCore.RecordRef;
    entity?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    postingPeriod?: PlatformCore.RecordRef;
    tranDate?: string;
    currencyName?: string;
    billingAddress?: PlatformCommon.Address;
    exchangeRate?: number;
    entityTaxRegNum?: PlatformCore.RecordRef;
    terms?: PlatformCore.RecordRef;
    dueDate?: string;
    discountDate?: string;
    tranId?: string;
    createdFrom?: PlatformCore.RecordRef;
    userTotal?: number;
    discountAmount?: number;
    taxTotal?: number;
    paymentHold?: boolean;
    memo?: string;
    tranStatus?: PlatformCore.RecordRef;
    availableVendorCredit?: number;
    currency?: PlatformCore.RecordRef;
    incoterm?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    department?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    status?: string;
    transactionNumber?: string;
    expenseList?: CustomPurchaseExpenseList;
    accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
    itemList?: CustomPurchaseItemList;
    purchaseOrderList?: PlatformCore.RecordRefList;
    taxDetailsList?: PlatformCommon.TaxDetailsList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: CustomPurchaseProps);
}
export declare type CustomRecordTypeChildrenProps = {
    childDescr?: string;
    childTab?: PlatformCore.RecordRef;
};
export declare class CustomRecordTypeChildren extends SoapMappingBase {
    childDescr?: string;
    childTab?: PlatformCore.RecordRef;
    constructor(props: CustomRecordTypeChildrenProps);
}
export declare type CustomRecordTypeTranslationsProps = {
    locale?: PlatformCommonTypes.Language;
    localeDescription?: string;
    name?: string;
};
export declare class CustomRecordTypeTranslations extends SoapMappingBase {
    locale?: PlatformCommonTypes.Language;
    localeDescription?: string;
    name?: string;
    constructor(props: CustomRecordTypeTranslationsProps);
}
export declare type CustomFieldTranslationsListProps = {
    translations?: CustomFieldTranslations[];
    replaceAll?: boolean;
};
export declare class CustomFieldTranslationsList extends SoapMappingBase {
    translations?: CustomFieldTranslations[];
    replaceAll?: boolean;
    constructor(props: CustomFieldTranslationsListProps);
}
export declare type ItemCustomFieldFilterListProps = {
    filter?: ItemCustomFieldFilter[];
    replaceAll?: boolean;
};
export declare class ItemCustomFieldFilterList extends SoapMappingBase {
    filter?: ItemCustomFieldFilter[];
    replaceAll?: boolean;
    constructor(props: ItemCustomFieldFilterListProps);
}
export declare type CustomListCustomValueListProps = {
    customValue?: CustomListCustomValue[];
    replaceAll?: boolean;
};
export declare class CustomListCustomValueList extends SoapMappingBase {
    customValue?: CustomListCustomValue[];
    replaceAll?: boolean;
    constructor(props: CustomListCustomValueListProps);
}
export declare type CustomFieldDepartmentAccessListProps = {
    deptAccess?: CustomFieldDepartmentAccess[];
    replaceAll?: boolean;
};
export declare class CustomFieldDepartmentAccessList extends SoapMappingBase {
    deptAccess?: CustomFieldDepartmentAccess[];
    replaceAll?: boolean;
    constructor(props: CustomFieldDepartmentAccessListProps);
}
export declare type CustomTransactionLineListProps = {
    customTransactionLine?: CustomTransactionLine[];
    replaceAll?: boolean;
};
export declare class CustomTransactionLineList extends SoapMappingBase {
    customTransactionLine?: CustomTransactionLine[];
    replaceAll?: boolean;
    constructor(props: CustomTransactionLineListProps);
}
export declare type CustomSalePartnersListProps = {
    partners?: PlatformCommon.Partners[];
    replaceAll?: boolean;
};
export declare class CustomSalePartnersList extends SoapMappingBase {
    partners?: PlatformCommon.Partners[];
    replaceAll?: boolean;
    constructor(props: CustomSalePartnersListProps);
}
export declare type CustomSaleItemListProps = {
    item?: CustomSaleItem[];
    replaceAll?: boolean;
};
export declare class CustomSaleItemList extends SoapMappingBase {
    item?: CustomSaleItem[];
    replaceAll?: boolean;
    constructor(props: CustomSaleItemListProps);
}
export declare type CustomRecordTypeManagersProps = {
    managerEmp?: PlatformCore.RecordRef;
};
export declare class CustomRecordTypeManagers extends SoapMappingBase {
    managerEmp?: PlatformCore.RecordRef;
    constructor(props: CustomRecordTypeManagersProps);
}
export declare type CustomRecordCustomFieldFilterListProps = {
    filter?: CustomRecordCustomFieldFilter[];
    replaceAll?: boolean;
};
export declare class CustomRecordCustomFieldFilterList extends SoapMappingBase {
    filter?: CustomRecordCustomFieldFilter[];
    replaceAll?: boolean;
    constructor(props: CustomRecordCustomFieldFilterListProps);
}
export declare type CustomTransactionProps = {
    createdDate?: string;
    lastModifiedDate?: string;
    customForm?: PlatformCore.RecordRef;
    tranType?: PlatformCore.RecordRef;
    tranId?: string;
    total?: number;
    currency?: PlatformCore.RecordRef;
    voidJournal?: PlatformCore.RecordRef;
    exchangeRate?: number;
    tranDate?: string;
    postingPeriod?: PlatformCore.RecordRef;
    memo?: string;
    tranStatus?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    lineList?: CustomTransactionLineList;
    accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CustomTransaction extends PlatformCore.Record {
    createdDate?: string;
    lastModifiedDate?: string;
    customForm?: PlatformCore.RecordRef;
    tranType?: PlatformCore.RecordRef;
    tranId?: string;
    total?: number;
    currency?: PlatformCore.RecordRef;
    voidJournal?: PlatformCore.RecordRef;
    exchangeRate?: number;
    tranDate?: string;
    postingPeriod?: PlatformCore.RecordRef;
    memo?: string;
    tranStatus?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    lineList?: CustomTransactionLineList;
    accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: CustomTransactionProps);
}
export declare type CustomRecordTypeParentsProps = {
    childDescr?: string;
};
export declare class CustomRecordTypeParents extends SoapMappingBase {
    childDescr?: string;
    constructor(props: CustomRecordTypeParentsProps);
}
export declare type CustomFieldRoleAccessListProps = {
    roleAccess?: CustomFieldRoleAccess[];
    replaceAll?: boolean;
};
export declare class CustomFieldRoleAccessList extends SoapMappingBase {
    roleAccess?: CustomFieldRoleAccess[];
    replaceAll?: boolean;
    constructor(props: CustomFieldRoleAccessListProps);
}
export declare type LanguageValueProps = {
    locale?: PlatformCommonTypes.Language;
    value?: string;
};
export declare class LanguageValue extends SoapMappingBase {
    locale?: PlatformCommonTypes.Language;
    value?: string;
    constructor(props: LanguageValueProps);
}
export declare type CustomListTranslationsListProps = {
    translations?: CustomListTranslations[];
    replaceAll?: boolean;
};
export declare class CustomListTranslationsList extends SoapMappingBase {
    translations?: CustomListTranslations[];
    replaceAll?: boolean;
    constructor(props: CustomListTranslationsListProps);
}
export declare type CustomRecordTypeOnlineFormsProps = {
    onlineFormName?: string;
    isOnline?: string;
    templateName?: string;
};
export declare class CustomRecordTypeOnlineForms extends SoapMappingBase {
    onlineFormName?: string;
    isOnline?: string;
    templateName?: string;
    constructor(props: CustomRecordTypeOnlineFormsProps);
}
export declare type CustomRecordTypeFormsProps = {
    formEdit?: string;
    formName?: string;
    formPref?: boolean;
};
export declare class CustomRecordTypeForms extends SoapMappingBase {
    formEdit?: string;
    formName?: string;
    formPref?: boolean;
    constructor(props: CustomRecordTypeFormsProps);
}
export declare type CustomRecordTypeFormsListProps = {
    forms?: CustomRecordTypeForms[];
    replaceAll?: boolean;
};
export declare class CustomRecordTypeFormsList extends SoapMappingBase {
    forms?: CustomRecordTypeForms[];
    replaceAll?: boolean;
    constructor(props: CustomRecordTypeFormsListProps);
}
export declare type CustomRecordTypeSublistsProps = {
    recordSearch?: PlatformCore.RecordRef;
    recordDescr?: string;
    recordDescrLanguageValueList?: LanguageValueList;
    recordTab?: PlatformCore.RecordRef;
    recordId?: string;
};
export declare class CustomRecordTypeSublists extends SoapMappingBase {
    recordSearch?: PlatformCore.RecordRef;
    recordDescr?: string;
    recordDescrLanguageValueList?: LanguageValueList;
    recordTab?: PlatformCore.RecordRef;
    recordId?: string;
    constructor(props: CustomRecordTypeSublistsProps);
}
export declare type CustomRecordSearchAdvancedProps = {
    criteria?: CustomRecordSearch;
    columns?: CustomRecordSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class CustomRecordSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: CustomRecordSearch;
    columns?: CustomRecordSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: CustomRecordSearchAdvancedProps);
}
export declare type CrmCustomFieldFilterProps = {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterSelList?: FldFilterSelList;
    fldFilterNotNull?: boolean;
};
export declare class CrmCustomFieldFilter extends SoapMappingBase {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterSelList?: FldFilterSelList;
    fldFilterNotNull?: boolean;
    constructor(props: CrmCustomFieldFilterProps);
}
export declare type CustomSaleSalesTeamProps = {
    employee?: PlatformCore.RecordRef;
    salesRole?: PlatformCore.RecordRef;
    isPrimary?: boolean;
    contribution?: number;
};
export declare class CustomSaleSalesTeam extends SoapMappingBase {
    employee?: PlatformCore.RecordRef;
    salesRole?: PlatformCore.RecordRef;
    isPrimary?: boolean;
    contribution?: number;
    constructor(props: CustomSaleSalesTeamProps);
}
export declare type CustomRecordTypeLinksProps = {
    linkCenter?: PlatformCore.RecordRef;
    linkSection?: PlatformCore.RecordRef;
    linkLabel?: string;
};
export declare class CustomRecordTypeLinks extends SoapMappingBase {
    linkCenter?: PlatformCore.RecordRef;
    linkSection?: PlatformCore.RecordRef;
    linkLabel?: string;
    constructor(props: CustomRecordTypeLinksProps);
}
export declare type CustomPurchaseExpenseProps = {
    line?: number;
    category?: PlatformCore.RecordRef;
    account?: PlatformCore.RecordRef;
    amount?: number;
    taxAmount?: number;
    memo?: string;
    grossAmt?: number;
    taxDetailsReference?: string;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customer?: PlatformCore.RecordRef;
    isBillable?: boolean;
    projectTask?: PlatformCore.RecordRef;
    amortizationSched?: PlatformCore.RecordRef;
    amortizStartDate?: string;
    amortizationEndDate?: string;
    amortizationResidual?: string;
    customFieldList?: PlatformCore.CustomFieldList;
};
export declare class CustomPurchaseExpense extends SoapMappingBase {
    line?: number;
    category?: PlatformCore.RecordRef;
    account?: PlatformCore.RecordRef;
    amount?: number;
    taxAmount?: number;
    memo?: string;
    grossAmt?: number;
    taxDetailsReference?: string;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customer?: PlatformCore.RecordRef;
    isBillable?: boolean;
    projectTask?: PlatformCore.RecordRef;
    amortizationSched?: PlatformCore.RecordRef;
    amortizStartDate?: string;
    amortizationEndDate?: string;
    amortizationResidual?: string;
    customFieldList?: PlatformCore.CustomFieldList;
    constructor(props: CustomPurchaseExpenseProps);
}
export declare type CustomRecordTranslationsProps = {
    locale?: PlatformCommonTypes.Language;
    language?: string;
    label?: string;
};
export declare class CustomRecordTranslations extends SoapMappingBase {
    locale?: PlatformCommonTypes.Language;
    language?: string;
    label?: string;
    constructor(props: CustomRecordTranslationsProps);
}
export declare type CustomFieldSubAccessListProps = {
    subAccess?: CustomFieldSubAccess[];
    replaceAll?: boolean;
};
export declare class CustomFieldSubAccessList extends SoapMappingBase {
    subAccess?: CustomFieldSubAccess[];
    replaceAll?: boolean;
    constructor(props: CustomFieldSubAccessListProps);
}
export declare type CustomRecordTypeTranslationsListProps = {
    translations?: CustomRecordTypeTranslations[];
    replaceAll?: boolean;
};
export declare class CustomRecordTypeTranslationsList extends SoapMappingBase {
    translations?: CustomRecordTypeTranslations[];
    replaceAll?: boolean;
    constructor(props: CustomRecordTypeTranslationsListProps);
}
export declare type CrmCustomFieldProps = {
    label?: string;
    owner?: PlatformCore.RecordRef;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    showInList?: boolean;
    globalSearch?: boolean;
    isParent?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    subtab?: PlatformCore.RecordRef;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    parentSubtab?: PlatformCore.RecordRef;
    linkText?: string;
    isMandatory?: boolean;
    checkSpelling?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    searchDefault?: PlatformCore.RecordRef;
    searchCompareField?: PlatformCore.RecordRef;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourceFilterBy?: PlatformCore.RecordRef;
    customSegment?: PlatformCore.RecordRef;
    appliesToTask?: boolean;
    appliesToMfgProjectTask?: boolean;
    appliesToProjectTask?: boolean;
    appliesToPhoneCall?: boolean;
    appliesToEvent?: boolean;
    appliesToCase?: boolean;
    appliesToCampaign?: boolean;
    appliesPerKeyword?: boolean;
    appliesToSolution?: boolean;
    appliesToIssue?: boolean;
    availableExternally?: boolean;
    availableToSso?: boolean;
    showIssueChanges?: boolean;
    filterList?: CrmCustomFieldFilterList;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    subAccessList?: CustomFieldSubAccessList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
} & CustomFieldTypeProps;
export declare class CrmCustomField extends CustomFieldType {
    label?: string;
    owner?: PlatformCore.RecordRef;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    showInList?: boolean;
    globalSearch?: boolean;
    isParent?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    subtab?: PlatformCore.RecordRef;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    parentSubtab?: PlatformCore.RecordRef;
    linkText?: string;
    isMandatory?: boolean;
    checkSpelling?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    searchDefault?: PlatformCore.RecordRef;
    searchCompareField?: PlatformCore.RecordRef;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourceFilterBy?: PlatformCore.RecordRef;
    customSegment?: PlatformCore.RecordRef;
    appliesToTask?: boolean;
    appliesToMfgProjectTask?: boolean;
    appliesToProjectTask?: boolean;
    appliesToPhoneCall?: boolean;
    appliesToEvent?: boolean;
    appliesToCase?: boolean;
    appliesToCampaign?: boolean;
    appliesPerKeyword?: boolean;
    appliesToSolution?: boolean;
    appliesToIssue?: boolean;
    availableExternally?: boolean;
    availableToSso?: boolean;
    showIssueChanges?: boolean;
    filterList?: CrmCustomFieldFilterList;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    subAccessList?: CustomFieldSubAccessList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
    constructor(props: CrmCustomFieldProps);
}
export declare type CustomRecordTypeProps = {
    recordName?: string;
    includeName?: boolean;
    showId?: boolean;
    showCreationDate?: boolean;
    showCreationDateOnList?: boolean;
    showLastModified?: boolean;
    showLastModifiedOnList?: boolean;
    showOwner?: boolean;
    showOwnerOnList?: boolean;
    showOwnerAllowChange?: boolean;
    accessType?: SetupCustomizationTypes.CustomRecordTypeAccessType;
    allowAttachments?: boolean;
    showNotes?: boolean;
    enableMailMerge?: boolean;
    isOrdered?: boolean;
    isAvailableOffline?: boolean;
    allowQuickSearch?: boolean;
    hierarchical?: boolean;
    enableDle?: boolean;
    enableNameTranslation?: boolean;
    isInactive?: boolean;
    disclaimer?: string;
    enableNumbering?: boolean;
    numberingPrefix?: string;
    numberingSuffix?: string;
    numberingMinDigits?: number;
    numberingInit?: number;
    numberingCurrentNumber?: number;
    allowNumberingOverride?: boolean;
    isNumberingUpdateable?: boolean;
    owner?: PlatformCore.RecordRef;
    description?: string;
    tabsList?: CustomRecordTypeTabsList;
    sublistsList?: CustomRecordTypeSublistsList;
    formsList?: CustomRecordTypeFormsList;
    onlineFormsList?: CustomRecordTypeOnlineFormsList;
    permissionsList?: CustomRecordTypePermissionsList;
    linksList?: CustomRecordTypeLinksList;
    managersList?: CustomRecordTypeManagersList;
    childrenList?: CustomRecordTypeChildrenList;
    parentsList?: CustomRecordTypeParentsList;
    translationsList?: CustomRecordTypeTranslationsList;
    scriptId?: string;
    customFieldList?: CustomRecordTypeFieldList;
    internalId?: string;
} & PlatformCore.RecordProps;
export declare class CustomRecordType extends PlatformCore.Record {
    recordName?: string;
    includeName?: boolean;
    showId?: boolean;
    showCreationDate?: boolean;
    showCreationDateOnList?: boolean;
    showLastModified?: boolean;
    showLastModifiedOnList?: boolean;
    showOwner?: boolean;
    showOwnerOnList?: boolean;
    showOwnerAllowChange?: boolean;
    accessType?: SetupCustomizationTypes.CustomRecordTypeAccessType;
    allowAttachments?: boolean;
    showNotes?: boolean;
    enableMailMerge?: boolean;
    isOrdered?: boolean;
    isAvailableOffline?: boolean;
    allowQuickSearch?: boolean;
    hierarchical?: boolean;
    enableDle?: boolean;
    enableNameTranslation?: boolean;
    isInactive?: boolean;
    disclaimer?: string;
    enableNumbering?: boolean;
    numberingPrefix?: string;
    numberingSuffix?: string;
    numberingMinDigits?: number;
    numberingInit?: number;
    numberingCurrentNumber?: number;
    allowNumberingOverride?: boolean;
    isNumberingUpdateable?: boolean;
    owner?: PlatformCore.RecordRef;
    description?: string;
    tabsList?: CustomRecordTypeTabsList;
    sublistsList?: CustomRecordTypeSublistsList;
    formsList?: CustomRecordTypeFormsList;
    onlineFormsList?: CustomRecordTypeOnlineFormsList;
    permissionsList?: CustomRecordTypePermissionsList;
    linksList?: CustomRecordTypeLinksList;
    managersList?: CustomRecordTypeManagersList;
    childrenList?: CustomRecordTypeChildrenList;
    parentsList?: CustomRecordTypeParentsList;
    translationsList?: CustomRecordTypeTranslationsList;
    scriptId?: string;
    customFieldList?: CustomRecordTypeFieldList;
    internalId?: string;
    constructor(props: CustomRecordTypeProps);
}
export declare type FldFilterSelListProps = {
    fldFilterSel: PlatformCore.RecordRef[];
};
export declare class FldFilterSelList extends SoapMappingBase {
    fldFilterSel: PlatformCore.RecordRef[];
    constructor(props: FldFilterSelListProps);
}
export declare type EntityCustomFieldProps = {
    label?: string;
    owner?: PlatformCore.RecordRef;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    showInList?: boolean;
    globalSearch?: boolean;
    isParent?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    availableToSso?: boolean;
    subtab?: PlatformCore.RecordRef;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    parentSubtab?: PlatformCore.RecordRef;
    linkText?: string;
    isMandatory?: boolean;
    checkSpelling?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    searchDefault?: PlatformCore.RecordRef;
    searchCompareField?: PlatformCore.RecordRef;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourceFilterBy?: PlatformCore.RecordRef;
    customSegment?: PlatformCore.RecordRef;
    appliesToCustomer?: boolean;
    appliesToProject?: boolean;
    appliesToVendor?: boolean;
    appliesToEmployee?: boolean;
    appliesToOtherName?: boolean;
    appliesToContact?: boolean;
    appliesToPartner?: boolean;
    appliesToWebSite?: boolean;
    appliesToGroup?: boolean;
    availableExternally?: boolean;
    filterList?: EntityCustomFieldFilterList;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    appliesToStatement?: boolean;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    appliesToPriceList?: boolean;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    subAccessList?: CustomFieldSubAccessList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
} & CustomFieldTypeProps;
export declare class EntityCustomField extends CustomFieldType {
    label?: string;
    owner?: PlatformCore.RecordRef;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    showInList?: boolean;
    globalSearch?: boolean;
    isParent?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    availableToSso?: boolean;
    subtab?: PlatformCore.RecordRef;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    parentSubtab?: PlatformCore.RecordRef;
    linkText?: string;
    isMandatory?: boolean;
    checkSpelling?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    searchDefault?: PlatformCore.RecordRef;
    searchCompareField?: PlatformCore.RecordRef;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourceFilterBy?: PlatformCore.RecordRef;
    customSegment?: PlatformCore.RecordRef;
    appliesToCustomer?: boolean;
    appliesToProject?: boolean;
    appliesToVendor?: boolean;
    appliesToEmployee?: boolean;
    appliesToOtherName?: boolean;
    appliesToContact?: boolean;
    appliesToPartner?: boolean;
    appliesToWebSite?: boolean;
    appliesToGroup?: boolean;
    availableExternally?: boolean;
    filterList?: EntityCustomFieldFilterList;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    appliesToStatement?: boolean;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    appliesToPriceList?: boolean;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    subAccessList?: CustomFieldSubAccessList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
    constructor(props: EntityCustomFieldProps);
}
export declare type CustomFieldRoleAccessProps = {
    role?: PlatformCore.RecordRef;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
};
export declare class CustomFieldRoleAccess extends SoapMappingBase {
    role?: PlatformCore.RecordRef;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    constructor(props: CustomFieldRoleAccessProps);
}
export declare type CustomRecordSearchRowProps = {
    basic?: PlatformCommon.CustomRecordSearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    messagesJoin?: PlatformCommon.MessageSearchRowBasic;
    ownerJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class CustomRecordSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.CustomRecordSearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    messagesJoin?: PlatformCommon.MessageSearchRowBasic;
    ownerJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: CustomRecordSearchRowProps);
}
export declare type CustomPurchaseItemProps = {
    item?: PlatformCore.RecordRef;
    vendorName?: string;
    line?: number;
    quantity?: number;
    units?: PlatformCore.RecordRef;
    inventoryDetail?: PlatformCommon.InventoryDetail;
    description?: string;
    serialNumbers?: string;
    binNumbers?: string;
    grossAmt?: number;
    rate?: string;
    amount?: number;
    options?: PlatformCore.CustomFieldList;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customer?: PlatformCore.RecordRef;
    isBillable?: boolean;
    billVarianceStatus?: PlatformCommonTypes.TransactionBillVarianceStatus;
    amortizationSched?: PlatformCore.RecordRef;
    amortizStartDate?: string;
    amortizationEndDate?: string;
    amortizationResidual?: string;
    taxAmount?: number;
    taxDetailsReference?: string;
    customFieldList?: PlatformCore.CustomFieldList;
};
export declare class CustomPurchaseItem extends SoapMappingBase {
    item?: PlatformCore.RecordRef;
    vendorName?: string;
    line?: number;
    quantity?: number;
    units?: PlatformCore.RecordRef;
    inventoryDetail?: PlatformCommon.InventoryDetail;
    description?: string;
    serialNumbers?: string;
    binNumbers?: string;
    grossAmt?: number;
    rate?: string;
    amount?: number;
    options?: PlatformCore.CustomFieldList;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customer?: PlatformCore.RecordRef;
    isBillable?: boolean;
    billVarianceStatus?: PlatformCommonTypes.TransactionBillVarianceStatus;
    amortizationSched?: PlatformCore.RecordRef;
    amortizStartDate?: string;
    amortizationEndDate?: string;
    amortizationResidual?: string;
    taxAmount?: number;
    taxDetailsReference?: string;
    customFieldList?: PlatformCore.CustomFieldList;
    constructor(props: CustomPurchaseItemProps);
}
export declare type CustomRecordTypeLinksListProps = {
    links?: CustomRecordTypeLinks[];
    replaceAll?: boolean;
};
export declare class CustomRecordTypeLinksList extends SoapMappingBase {
    links?: CustomRecordTypeLinks[];
    replaceAll?: boolean;
    constructor(props: CustomRecordTypeLinksListProps);
}
export declare type ItemOptionCustomFieldProps = {
    label?: string;
    owner?: PlatformCore.RecordRef;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    linkText?: string;
    isMandatory?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    searchDefault?: PlatformCore.RecordRef;
    searchCompareField?: PlatformCore.RecordRef;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourceFilterBy?: PlatformCore.RecordRef;
    colPurchase?: boolean;
    colSale?: boolean;
    colOpportunity?: boolean;
    colStore?: boolean;
    colStoreHidden?: boolean;
    colTransferOrder?: boolean;
    colAllItems?: boolean;
    itemsList?: ItemsList;
    colKitItem?: boolean;
    filterList?: ItemOptionCustomFieldFilterList;
    colOptionLabel?: string;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    subAccessList?: CustomFieldSubAccessList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
} & CustomFieldTypeProps;
export declare class ItemOptionCustomField extends CustomFieldType {
    label?: string;
    owner?: PlatformCore.RecordRef;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    linkText?: string;
    isMandatory?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    searchDefault?: PlatformCore.RecordRef;
    searchCompareField?: PlatformCore.RecordRef;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourceFilterBy?: PlatformCore.RecordRef;
    colPurchase?: boolean;
    colSale?: boolean;
    colOpportunity?: boolean;
    colStore?: boolean;
    colStoreHidden?: boolean;
    colTransferOrder?: boolean;
    colAllItems?: boolean;
    itemsList?: ItemsList;
    colKitItem?: boolean;
    filterList?: ItemOptionCustomFieldFilterList;
    colOptionLabel?: string;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    subAccessList?: CustomFieldSubAccessList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
    constructor(props: ItemOptionCustomFieldProps);
}
export declare type CustomRecordSearchProps = {
    basic?: PlatformCommon.CustomRecordSearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    messagesJoin?: PlatformCommon.MessageSearchBasic;
    ownerJoin?: PlatformCommon.EmployeeSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class CustomRecordSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.CustomRecordSearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    messagesJoin?: PlatformCommon.MessageSearchBasic;
    ownerJoin?: PlatformCommon.EmployeeSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: CustomRecordSearchProps);
}
export declare type CustomFieldDepartmentAccessProps = {
    dept?: PlatformCore.RecordRef;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
};
export declare class CustomFieldDepartmentAccess extends SoapMappingBase {
    dept?: PlatformCore.RecordRef;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    constructor(props: CustomFieldDepartmentAccessProps);
}
export declare type EntityCustomFieldFilterProps = {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterSelList?: FldFilterSelList;
    fldFilterNotNull?: boolean;
};
export declare class EntityCustomFieldFilter extends SoapMappingBase {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterSelList?: FldFilterSelList;
    fldFilterNotNull?: boolean;
    constructor(props: EntityCustomFieldFilterProps);
}
export declare type ItemNumberCustomFieldProps = {
    label?: string;
    owner?: PlatformCore.RecordRef;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    showInList?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    linkText?: string;
    isMandatory?: boolean;
    checkSpelling?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    searchDefault?: PlatformCore.RecordRef;
    searchCompareField?: PlatformCore.RecordRef;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourceFilterBy?: PlatformCore.RecordRef;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    filterList?: ItemNumberCustomFieldFilterList;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    appliesToAllItems?: boolean;
    appliesToSerialized?: boolean;
    appliesToLots?: boolean;
    appliesToGiftCerts?: boolean;
    itemsList?: PlatformCore.RecordRefList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
} & CustomFieldTypeProps;
export declare class ItemNumberCustomField extends CustomFieldType {
    label?: string;
    owner?: PlatformCore.RecordRef;
    description?: string;
    selectRecordType?: PlatformCore.RecordRef;
    storeValue?: boolean;
    showInList?: boolean;
    insertBefore?: PlatformCore.RecordRef;
    displayType?: SetupCustomizationTypes.CustomizationDisplayType;
    displayWidth?: number;
    displayHeight?: number;
    help?: string;
    linkText?: string;
    isMandatory?: boolean;
    checkSpelling?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    defaultChecked?: boolean;
    defaultValue?: string;
    isFormula?: boolean;
    defaultSelection?: PlatformCore.RecordRef;
    dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
    searchDefault?: PlatformCore.RecordRef;
    searchCompareField?: PlatformCore.RecordRef;
    sourceList?: PlatformCore.RecordRef;
    sourceFrom?: PlatformCore.RecordRef;
    sourceFilterBy?: PlatformCore.RecordRef;
    accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
    searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
    filterList?: ItemNumberCustomFieldFilterList;
    roleAccessList?: CustomFieldRoleAccessList;
    deptAccessList?: CustomFieldDepartmentAccessList;
    appliesToAllItems?: boolean;
    appliesToSerialized?: boolean;
    appliesToLots?: boolean;
    appliesToGiftCerts?: boolean;
    itemsList?: PlatformCore.RecordRefList;
    translationsList?: CustomFieldTranslationsList;
    internalId?: string;
    constructor(props: ItemNumberCustomFieldProps);
}
export declare type CustomRecordTypeOnlineFormsListProps = {
    onlineForms?: CustomRecordTypeOnlineForms[];
    replaceAll?: boolean;
};
export declare class CustomRecordTypeOnlineFormsList extends SoapMappingBase {
    onlineForms?: CustomRecordTypeOnlineForms[];
    replaceAll?: boolean;
    constructor(props: CustomRecordTypeOnlineFormsListProps);
}
export declare type CustomRecordTypePermissionsProps = {
    permittedRole?: PlatformCore.RecordRef;
    permittedLevel?: SetupCustomizationTypes.CustomRecordTypePermissionsPermittedLevel;
    restriction?: SetupCustomizationTypes.CustomRecordTypePermissionsRestriction;
    defaultForm?: PlatformCore.RecordRef;
    restrictForm?: boolean;
    searchForm?: PlatformCore.RecordRef;
    searchResults?: PlatformCore.RecordRef;
    listView?: PlatformCore.RecordRef;
    listViewRestricted?: boolean;
    dashboardView?: PlatformCore.RecordRef;
    restrictDashboardView?: boolean;
    sublistView?: PlatformCore.RecordRef;
    restrictSublistView?: boolean;
};
export declare class CustomRecordTypePermissions extends SoapMappingBase {
    permittedRole?: PlatformCore.RecordRef;
    permittedLevel?: SetupCustomizationTypes.CustomRecordTypePermissionsPermittedLevel;
    restriction?: SetupCustomizationTypes.CustomRecordTypePermissionsRestriction;
    defaultForm?: PlatformCore.RecordRef;
    restrictForm?: boolean;
    searchForm?: PlatformCore.RecordRef;
    searchResults?: PlatformCore.RecordRef;
    listView?: PlatformCore.RecordRef;
    listViewRestricted?: boolean;
    dashboardView?: PlatformCore.RecordRef;
    restrictDashboardView?: boolean;
    sublistView?: PlatformCore.RecordRef;
    restrictSublistView?: boolean;
    constructor(props: CustomRecordTypePermissionsProps);
}
export declare type EntityCustomFieldFilterListProps = {
    filter?: EntityCustomFieldFilter[];
    replaceAll?: boolean;
};
export declare class EntityCustomFieldFilterList extends SoapMappingBase {
    filter?: EntityCustomFieldFilter[];
    replaceAll?: boolean;
    constructor(props: EntityCustomFieldFilterListProps);
}
export declare type OtherCustomFieldFilterListProps = {
    filter?: OtherCustomFieldFilter[];
    replaceAll?: boolean;
};
export declare class OtherCustomFieldFilterList extends SoapMappingBase {
    filter?: OtherCustomFieldFilter[];
    replaceAll?: boolean;
    constructor(props: OtherCustomFieldFilterListProps);
}
export declare type ItemNumberCustomFieldFilterProps = {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterNotNull?: boolean;
    fldfilterNull?: boolean;
    fldCompareField?: PlatformCore.RecordRef;
};
export declare class ItemNumberCustomFieldFilter extends SoapMappingBase {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterNotNull?: boolean;
    fldfilterNull?: boolean;
    fldCompareField?: PlatformCore.RecordRef;
    constructor(props: ItemNumberCustomFieldFilterProps);
}
export declare type OtherCustomFieldFilterProps = {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterSelList?: FldFilterSelList;
    fldFilterNotNull?: boolean;
};
export declare class OtherCustomFieldFilter extends SoapMappingBase {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterSelList?: FldFilterSelList;
    fldFilterNotNull?: boolean;
    constructor(props: OtherCustomFieldFilterProps);
}
export declare type CustomRecordCustomFieldFilterProps = {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterSelList?: FldFilterSelList;
    fldFilterNotNull?: boolean;
};
export declare class CustomRecordCustomFieldFilter extends SoapMappingBase {
    fldFilter?: PlatformCore.RecordRef;
    fldFilterChecked?: boolean;
    fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
    fldFilterVal?: string;
    fldFilterSelList?: FldFilterSelList;
    fldFilterNotNull?: boolean;
    constructor(props: CustomRecordCustomFieldFilterProps);
}
export declare type CustomSaleSalesTeamListProps = {
    salesTeam?: CustomSaleSalesTeam[];
    replaceAll?: boolean;
};
export declare class CustomSaleSalesTeamList extends SoapMappingBase {
    salesTeam?: CustomSaleSalesTeam[];
    replaceAll?: boolean;
    constructor(props: CustomSaleSalesTeamListProps);
}
export declare type ItemNumberCustomFieldFilterListProps = {
    filter?: ItemNumberCustomFieldFilter[];
    replaceAll?: boolean;
};
export declare class ItemNumberCustomFieldFilterList extends SoapMappingBase {
    filter?: ItemNumberCustomFieldFilter[];
    replaceAll?: boolean;
    constructor(props: ItemNumberCustomFieldFilterListProps);
}
export declare type CustomRecordTypeManagersListProps = {
    managers?: CustomRecordTypeManagers[];
    replaceAll?: boolean;
};
export declare class CustomRecordTypeManagersList extends SoapMappingBase {
    managers?: CustomRecordTypeManagers[];
    replaceAll?: boolean;
    constructor(props: CustomRecordTypeManagersListProps);
}
export declare type CustomListSearchProps = {
    basic?: PlatformCommon.CustomListSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
};
export declare class CustomListSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.CustomListSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    constructor(props: CustomListSearchProps);
}
export declare type CustomSaleProps = {
    createdDate?: string;
    lastModifiedDate?: string;
    tranType?: PlatformCore.RecordRef;
    nexus?: PlatformCore.RecordRef;
    subsidiaryTaxRegNum?: PlatformCore.RecordRef;
    taxRegOverride?: boolean;
    taxDetailsOverride?: boolean;
    customForm?: PlatformCore.RecordRef;
    entity?: PlatformCore.RecordRef;
    billingAccount?: PlatformCore.RecordRef;
    tranDate?: string;
    tranId?: string;
    entityTaxRegNum?: PlatformCore.RecordRef;
    source?: string;
    createdFrom?: PlatformCore.RecordRef;
    postingPeriod?: PlatformCore.RecordRef;
    opportunity?: PlatformCore.RecordRef;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    terms?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    currency?: PlatformCore.RecordRef;
    dueDate?: string;
    discountDate?: string;
    discountAmount?: number;
    salesRep?: PlatformCore.RecordRef;
    partner?: PlatformCore.RecordRef;
    leadSource?: PlatformCore.RecordRef;
    startDate?: string;
    endDate?: string;
    otherRefNum?: string;
    memo?: string;
    tranStatus?: PlatformCore.RecordRef;
    salesEffectiveDate?: string;
    excludeCommission?: boolean;
    totalCostEstimate?: number;
    estGrossProfit?: number;
    estGrossProfitPercent?: number;
    revRecSchedule?: PlatformCore.RecordRef;
    revRecStartDate?: string;
    revRecEndDate?: string;
    account?: PlatformCore.RecordRef;
    exchangeRate?: number;
    currencyName?: string;
    promoCode?: PlatformCore.RecordRef;
    discountItem?: PlatformCore.RecordRef;
    discountRate?: string;
    isTaxable?: boolean;
    toBePrinted?: boolean;
    toBeEmailed?: boolean;
    toBeFaxed?: boolean;
    fax?: string;
    messageSel?: PlatformCore.RecordRef;
    message?: string;
    billingAddress?: PlatformCommon.Address;
    billAddressList?: PlatformCore.RecordRef;
    shippingAddress?: PlatformCommon.Address;
    shipIsResidential?: boolean;
    shipAddressList?: PlatformCore.RecordRef;
    fob?: string;
    shipDate?: string;
    shipMethod?: PlatformCore.RecordRef;
    shippingCost?: number;
    handlingCost?: number;
    trackingNumbers?: string;
    linkedTrackingNumbers?: string;
    salesGroup?: PlatformCore.RecordRef;
    subTotal?: number;
    revenueStatus?: PlatformCommonTypes.RevenueStatus;
    recognizedRevenue?: number;
    deferredRevenue?: number;
    revRecOnRevCommitment?: boolean;
    syncSalesTeams?: boolean;
    discountTotal?: number;
    taxTotal?: number;
    altShippingCost?: number;
    altHandlingCost?: number;
    total?: number;
    status?: string;
    job?: PlatformCore.RecordRef;
    email?: string;
    giftCertApplied?: number;
    tranIsVsoeBundle?: boolean;
    vsoeAutoCalc?: boolean;
    syncPartnerTeams?: boolean;
    partnersList?: CustomSalePartnersList;
    itemList?: CustomSaleItemList;
    giftCertRedemptionList?: PlatformCommon.GiftCertRedemptionList;
    accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
    salesTeamList?: CustomSaleSalesTeamList;
    taxDetailsList?: PlatformCommon.TaxDetailsList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CustomSale extends PlatformCore.Record {
    createdDate?: string;
    lastModifiedDate?: string;
    tranType?: PlatformCore.RecordRef;
    nexus?: PlatformCore.RecordRef;
    subsidiaryTaxRegNum?: PlatformCore.RecordRef;
    taxRegOverride?: boolean;
    taxDetailsOverride?: boolean;
    customForm?: PlatformCore.RecordRef;
    entity?: PlatformCore.RecordRef;
    billingAccount?: PlatformCore.RecordRef;
    tranDate?: string;
    tranId?: string;
    entityTaxRegNum?: PlatformCore.RecordRef;
    source?: string;
    createdFrom?: PlatformCore.RecordRef;
    postingPeriod?: PlatformCore.RecordRef;
    opportunity?: PlatformCore.RecordRef;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    terms?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    currency?: PlatformCore.RecordRef;
    dueDate?: string;
    discountDate?: string;
    discountAmount?: number;
    salesRep?: PlatformCore.RecordRef;
    partner?: PlatformCore.RecordRef;
    leadSource?: PlatformCore.RecordRef;
    startDate?: string;
    endDate?: string;
    otherRefNum?: string;
    memo?: string;
    tranStatus?: PlatformCore.RecordRef;
    salesEffectiveDate?: string;
    excludeCommission?: boolean;
    totalCostEstimate?: number;
    estGrossProfit?: number;
    estGrossProfitPercent?: number;
    revRecSchedule?: PlatformCore.RecordRef;
    revRecStartDate?: string;
    revRecEndDate?: string;
    account?: PlatformCore.RecordRef;
    exchangeRate?: number;
    currencyName?: string;
    promoCode?: PlatformCore.RecordRef;
    discountItem?: PlatformCore.RecordRef;
    discountRate?: string;
    isTaxable?: boolean;
    toBePrinted?: boolean;
    toBeEmailed?: boolean;
    toBeFaxed?: boolean;
    fax?: string;
    messageSel?: PlatformCore.RecordRef;
    message?: string;
    billingAddress?: PlatformCommon.Address;
    billAddressList?: PlatformCore.RecordRef;
    shippingAddress?: PlatformCommon.Address;
    shipIsResidential?: boolean;
    shipAddressList?: PlatformCore.RecordRef;
    fob?: string;
    shipDate?: string;
    shipMethod?: PlatformCore.RecordRef;
    shippingCost?: number;
    handlingCost?: number;
    trackingNumbers?: string;
    linkedTrackingNumbers?: string;
    salesGroup?: PlatformCore.RecordRef;
    subTotal?: number;
    revenueStatus?: PlatformCommonTypes.RevenueStatus;
    recognizedRevenue?: number;
    deferredRevenue?: number;
    revRecOnRevCommitment?: boolean;
    syncSalesTeams?: boolean;
    discountTotal?: number;
    taxTotal?: number;
    altShippingCost?: number;
    altHandlingCost?: number;
    total?: number;
    status?: string;
    job?: PlatformCore.RecordRef;
    email?: string;
    giftCertApplied?: number;
    tranIsVsoeBundle?: boolean;
    vsoeAutoCalc?: boolean;
    syncPartnerTeams?: boolean;
    partnersList?: CustomSalePartnersList;
    itemList?: CustomSaleItemList;
    giftCertRedemptionList?: PlatformCommon.GiftCertRedemptionList;
    accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
    salesTeamList?: CustomSaleSalesTeamList;
    taxDetailsList?: PlatformCommon.TaxDetailsList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: CustomSaleProps);
}
