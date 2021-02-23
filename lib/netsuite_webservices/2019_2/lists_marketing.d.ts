import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as ListsMarketingTypes from "./lists_marketing_types";
import { SoapMappingBase } from "../../soap-types";
export declare type CampaignEmailProps = {
    internalId?: string;
    campaignGroup?: PlatformCore.RecordRef;
    template?: PlatformCore.RecordRef;
    description?: string;
    subscription?: PlatformCore.RecordRef;
    channel?: PlatformCore.RecordRef;
    cost?: number;
    status?: ListsMarketingTypes.CampaignCampaignEmailStatus;
    dateScheduled?: string;
    promoCode?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
};
export declare class CampaignEmail extends SoapMappingBase {
    internalId?: string;
    campaignGroup?: PlatformCore.RecordRef;
    template?: PlatformCore.RecordRef;
    description?: string;
    subscription?: PlatformCore.RecordRef;
    channel?: PlatformCore.RecordRef;
    cost?: number;
    status?: ListsMarketingTypes.CampaignCampaignEmailStatus;
    dateScheduled?: string;
    promoCode?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
    constructor(props: CampaignEmailProps);
}
export declare type CampaignEventResponseProps = {
    name?: string;
    type?: string;
    dateSent?: string;
    sent?: number;
    opened?: number;
    openedRatio?: number;
    clickedThru?: number;
    clickedThruRatio?: number;
    responded?: number;
    respondedRatio?: number;
    unsubscribed?: number;
    unsubscribedRatio?: number;
    bounced?: number;
    bouncedRatio?: number;
};
export declare class CampaignEventResponse extends SoapMappingBase {
    name?: string;
    type?: string;
    dateSent?: string;
    sent?: number;
    opened?: number;
    openedRatio?: number;
    clickedThru?: number;
    clickedThruRatio?: number;
    responded?: number;
    respondedRatio?: number;
    unsubscribed?: number;
    unsubscribedRatio?: number;
    bounced?: number;
    bouncedRatio?: number;
    constructor(props: CampaignEventResponseProps);
}
export declare type CouponCodeSearchProps = {
    basic?: PlatformCommon.CouponCodeSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
};
export declare class CouponCodeSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.CouponCodeSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    constructor(props: CouponCodeSearchProps);
}
export declare type PromotionCodeItemsProps = {
    item?: PlatformCore.RecordRef;
};
export declare class PromotionCodeItems extends SoapMappingBase {
    item?: PlatformCore.RecordRef;
    constructor(props: PromotionCodeItemsProps);
}
export declare type CampaignCategoryProps = {
    name?: string;
    parent?: PlatformCore.RecordRef;
    leadSource?: PlatformCore.RecordRef;
    description?: string;
    isexternal?: boolean;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CampaignCategory extends PlatformCore.Record {
    name?: string;
    parent?: PlatformCore.RecordRef;
    leadSource?: PlatformCore.RecordRef;
    description?: string;
    isexternal?: boolean;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
    constructor(props: CampaignCategoryProps);
}
export declare type PromotionCodeSearchAdvancedProps = {
    criteria?: PromotionCodeSearch;
    columns?: PromotionCodeSearchRow;
    savedSearchScriptId?: string;
    savedSearchId?: string;
};
export declare class PromotionCodeSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: PromotionCodeSearch;
    columns?: PromotionCodeSearchRow;
    savedSearchScriptId?: string;
    savedSearchId?: string;
    constructor(props: PromotionCodeSearchAdvancedProps);
}
export declare type CampaignDirectMailListProps = {
    campaignDirectMail?: CampaignDirectMail[];
    replaceAll?: boolean;
};
export declare class CampaignDirectMailList extends SoapMappingBase {
    campaignDirectMail?: CampaignDirectMail[];
    replaceAll?: boolean;
    constructor(props: CampaignDirectMailListProps);
}
export declare type CampaignResponseResponsesProps = {
    response?: string;
    responseDate?: string;
    author?: string;
    note?: string;
};
export declare class CampaignResponseResponses extends SoapMappingBase {
    response?: string;
    responseDate?: string;
    author?: string;
    note?: string;
    constructor(props: CampaignResponseResponsesProps);
}
export declare type CampaignDirectMailProps = {
    internalId?: string;
    campaignGroup?: PlatformCore.RecordRef;
    template?: PlatformCore.RecordRef;
    description?: string;
    subscription?: PlatformCore.RecordRef;
    channel?: PlatformCore.RecordRef;
    cost?: number;
    status?: ListsMarketingTypes.CampaignCampaignDirectMailStatus;
    dateScheduled?: string;
    promoCode?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
};
export declare class CampaignDirectMail extends SoapMappingBase {
    internalId?: string;
    campaignGroup?: PlatformCore.RecordRef;
    template?: PlatformCore.RecordRef;
    description?: string;
    subscription?: PlatformCore.RecordRef;
    channel?: PlatformCore.RecordRef;
    cost?: number;
    status?: ListsMarketingTypes.CampaignCampaignDirectMailStatus;
    dateScheduled?: string;
    promoCode?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
    constructor(props: CampaignDirectMailProps);
}
export declare type PromotionCodeSearchRowProps = {
    basic?: PlatformCommon.PromotionCodeSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class PromotionCodeSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.PromotionCodeSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: PromotionCodeSearchRowProps);
}
export declare type PromotionCodeCurrencyListProps = {
    currency?: PromotionCodeCurrency[];
    replaceAll?: boolean;
};
export declare class PromotionCodeCurrencyList extends SoapMappingBase {
    currency?: PromotionCodeCurrency[];
    replaceAll?: boolean;
    constructor(props: PromotionCodeCurrencyListProps);
}
export declare type CampaignEmailListProps = {
    campaignEmail?: CampaignEmail[];
    replaceAll?: boolean;
};
export declare class CampaignEmailList extends SoapMappingBase {
    campaignEmail?: CampaignEmail[];
    replaceAll?: boolean;
    constructor(props: CampaignEmailListProps);
}
export declare type CampaignResponseResponsesListProps = {
    responses?: CampaignResponseResponses[];
    replaceAll?: boolean;
};
export declare class CampaignResponseResponsesList extends SoapMappingBase {
    responses?: CampaignResponseResponses[];
    replaceAll?: boolean;
    constructor(props: CampaignResponseResponsesListProps);
}
export declare type CampaignEventResponseListProps = {
    eventResponse?: CampaignEventResponse[];
    replaceAll?: boolean;
};
export declare class CampaignEventResponseList extends SoapMappingBase {
    eventResponse?: CampaignEventResponse[];
    replaceAll?: boolean;
    constructor(props: CampaignEventResponseListProps);
}
export declare type CampaignSearchProps = {
    basic?: PlatformCommon.CampaignSearchBasic;
    campaignRecipientJoin?: PlatformCommon.EntitySearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    messagesJoin?: PlatformCommon.MessageSearchBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchBasic;
    promotionCodeJoin?: PlatformCommon.PromotionCodeSearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class CampaignSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.CampaignSearchBasic;
    campaignRecipientJoin?: PlatformCommon.EntitySearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    messagesJoin?: PlatformCommon.MessageSearchBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchBasic;
    promotionCodeJoin?: PlatformCommon.PromotionCodeSearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: CampaignSearchProps);
}
export declare type CampaignAudienceProps = {
    name?: string;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CampaignAudience extends PlatformCore.Record {
    name?: string;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
    constructor(props: CampaignAudienceProps);
}
export declare type CouponCodeProps = {
    promotion: PlatformCore.RecordRef;
    code: string;
    recipient?: PlatformCore.RecordRef;
    dateSent?: string;
    used?: boolean;
    useCount?: number;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CouponCode extends PlatformCore.Record {
    promotion: PlatformCore.RecordRef;
    code: string;
    recipient?: PlatformCore.RecordRef;
    dateSent?: string;
    used?: boolean;
    useCount?: number;
    internalId?: string;
    externalId?: string;
    constructor(props: CouponCodeProps);
}
export declare type CampaignChannelProps = {
    name?: string;
    eventType?: ListsMarketingTypes.CampaignChannelEventType;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CampaignChannel extends PlatformCore.Record {
    name?: string;
    eventType?: ListsMarketingTypes.CampaignChannelEventType;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
    constructor(props: CampaignChannelProps);
}
export declare type PromotionCodeCurrencyProps = {
    currency?: PlatformCore.RecordRef;
    minimumOrderAmount?: number;
};
export declare class PromotionCodeCurrency extends SoapMappingBase {
    currency?: PlatformCore.RecordRef;
    minimumOrderAmount?: number;
    constructor(props: PromotionCodeCurrencyProps);
}
export declare type CampaignSearchEngineProps = {
    name?: string;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CampaignSearchEngine extends PlatformCore.Record {
    name?: string;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
    constructor(props: CampaignSearchEngineProps);
}
export declare type CampaignOfferProps = {
    name?: string;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CampaignOffer extends PlatformCore.Record {
    name?: string;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
    constructor(props: CampaignOfferProps);
}
export declare type PromotionCodeItemsListProps = {
    items?: PromotionCodeItems[];
    replaceAll?: boolean;
};
export declare class PromotionCodeItemsList extends SoapMappingBase {
    items?: PromotionCodeItems[];
    replaceAll?: boolean;
    constructor(props: PromotionCodeItemsListProps);
}
export declare type PromotionCodePartnersListProps = {
    partners?: PromotionCodePartners[];
    replaceAll?: boolean;
};
export declare class PromotionCodePartnersList extends SoapMappingBase {
    partners?: PromotionCodePartners[];
    replaceAll?: boolean;
    constructor(props: PromotionCodePartnersListProps);
}
export declare type CouponCodeSearchRowProps = {
    basic?: PlatformCommon.CouponCodeSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};
export declare class CouponCodeSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.CouponCodeSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    constructor(props: CouponCodeSearchRowProps);
}
export declare type CouponCodeSearchAdvancedProps = {
    criteria?: CouponCodeSearch;
    columns?: CouponCodeSearchRow;
    savedSearchScriptId?: string;
    savedSearchId?: string;
};
export declare class CouponCodeSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: CouponCodeSearch;
    columns?: CouponCodeSearchRow;
    savedSearchScriptId?: string;
    savedSearchId?: string;
    constructor(props: CouponCodeSearchAdvancedProps);
}
export declare type CampaignEventProps = {
    internalId?: string;
    campaignGroup?: PlatformCore.RecordRef;
    description?: string;
    subscription?: PlatformCore.RecordRef;
    channel?: PlatformCore.RecordRef;
    cost?: number;
    status?: ListsMarketingTypes.CampaignCampaignEventStatus;
    dateScheduled?: string;
    promoCode?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
};
export declare class CampaignEvent extends SoapMappingBase {
    internalId?: string;
    campaignGroup?: PlatformCore.RecordRef;
    description?: string;
    subscription?: PlatformCore.RecordRef;
    channel?: PlatformCore.RecordRef;
    cost?: number;
    status?: ListsMarketingTypes.CampaignCampaignEventStatus;
    dateScheduled?: string;
    promoCode?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
    constructor(props: CampaignEventProps);
}
export declare type PromotionCodePartnersProps = {
    partner?: PlatformCore.RecordRef;
    code?: string;
};
export declare class PromotionCodePartners extends SoapMappingBase {
    partner?: PlatformCore.RecordRef;
    code?: string;
    constructor(props: PromotionCodePartnersProps);
}
export declare type PromotionCodeProps = {
    implementation?: PlatformCore.RecordRef;
    customForm?: PlatformCore.RecordRef;
    useType?: ListsMarketingTypes.PromotionCodeUseType;
    displayLineDiscounts?: boolean;
    code?: string;
    codePattern?: string;
    numberToGenerate?: number;
    description?: string;
    locationList?: PlatformCore.RecordRefList;
    isInactive?: boolean;
    discount?: PlatformCore.RecordRef;
    rate?: string;
    discountType?: boolean;
    applyDiscountTo?: ListsMarketingTypes.PromotionCodeApplyDiscountTo;
    freeShipMethod?: PlatformCore.RecordRef;
    minimumOrderAmount?: number;
    startDate?: string;
    endDate?: string;
    isPublic?: boolean;
    currencyList?: PromotionCodeCurrencyList;
    excludeItems?: boolean;
    name?: string;
    itemsList?: PromotionCodeItemsList;
    partnersList?: PromotionCodePartnersList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class PromotionCode extends PlatformCore.Record {
    implementation?: PlatformCore.RecordRef;
    customForm?: PlatformCore.RecordRef;
    useType?: ListsMarketingTypes.PromotionCodeUseType;
    displayLineDiscounts?: boolean;
    code?: string;
    codePattern?: string;
    numberToGenerate?: number;
    description?: string;
    locationList?: PlatformCore.RecordRefList;
    isInactive?: boolean;
    discount?: PlatformCore.RecordRef;
    rate?: string;
    discountType?: boolean;
    applyDiscountTo?: ListsMarketingTypes.PromotionCodeApplyDiscountTo;
    freeShipMethod?: PlatformCore.RecordRef;
    minimumOrderAmount?: number;
    startDate?: string;
    endDate?: string;
    isPublic?: boolean;
    currencyList?: PromotionCodeCurrencyList;
    excludeItems?: boolean;
    name?: string;
    itemsList?: PromotionCodeItemsList;
    partnersList?: PromotionCodePartnersList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: PromotionCodeProps);
}
export declare type CampaignVerticalProps = {
    name?: string;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CampaignVertical extends PlatformCore.Record {
    name?: string;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
    constructor(props: CampaignVerticalProps);
}
export declare type CampaignFamilyProps = {
    name?: string;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CampaignFamily extends PlatformCore.Record {
    name?: string;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
    constructor(props: CampaignFamilyProps);
}
export declare type CampaignSearchRowProps = {
    basic?: PlatformCommon.CampaignSearchRowBasic;
    campaignRecipientJoin?: PlatformCommon.EntitySearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    messagesJoin?: PlatformCommon.MessageSearchRowBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchRowBasic;
    promotionCodeJoin?: PlatformCommon.PromotionCodeSearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class CampaignSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.CampaignSearchRowBasic;
    campaignRecipientJoin?: PlatformCommon.EntitySearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    messagesJoin?: PlatformCommon.MessageSearchRowBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchRowBasic;
    promotionCodeJoin?: PlatformCommon.PromotionCodeSearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: CampaignSearchRowProps);
}
export declare type CampaignProps = {
    customForm?: PlatformCore.RecordRef;
    campaignId?: string;
    title?: string;
    category?: PlatformCore.RecordRef;
    owner?: PlatformCore.RecordRef;
    startDate?: string;
    endDate?: string;
    url?: string;
    baseCost?: number;
    cost?: number;
    expectedRevenue?: number;
    message?: string;
    isInactive?: boolean;
    local?: boolean;
    totalRevenue?: number;
    roi?: number;
    profit?: number;
    costPerCustomer?: number;
    convCostPerCustomer?: number;
    conversions?: number;
    leadsGenerated?: number;
    uniqueVisitors?: number;
    vertical?: PlatformCore.RecordRef;
    audience?: PlatformCore.RecordRef;
    offer?: PlatformCore.RecordRef;
    promotionCode?: PlatformCore.RecordRef;
    itemList?: PlatformCore.RecordRefList;
    family?: PlatformCore.RecordRef;
    searchEngine?: PlatformCore.RecordRef;
    keyword?: string;
    campaignEmailList?: CampaignEmailList;
    campaignDirectMailList?: CampaignDirectMailList;
    campaignEventList?: CampaignEventList;
    eventResponseList?: CampaignEventResponseList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class Campaign extends PlatformCore.Record {
    customForm?: PlatformCore.RecordRef;
    campaignId?: string;
    title?: string;
    category?: PlatformCore.RecordRef;
    owner?: PlatformCore.RecordRef;
    startDate?: string;
    endDate?: string;
    url?: string;
    baseCost?: number;
    cost?: number;
    expectedRevenue?: number;
    message?: string;
    isInactive?: boolean;
    local?: boolean;
    totalRevenue?: number;
    roi?: number;
    profit?: number;
    costPerCustomer?: number;
    convCostPerCustomer?: number;
    conversions?: number;
    leadsGenerated?: number;
    uniqueVisitors?: number;
    vertical?: PlatformCore.RecordRef;
    audience?: PlatformCore.RecordRef;
    offer?: PlatformCore.RecordRef;
    promotionCode?: PlatformCore.RecordRef;
    itemList?: PlatformCore.RecordRefList;
    family?: PlatformCore.RecordRef;
    searchEngine?: PlatformCore.RecordRef;
    keyword?: string;
    campaignEmailList?: CampaignEmailList;
    campaignDirectMailList?: CampaignDirectMailList;
    campaignEventList?: CampaignEventList;
    eventResponseList?: CampaignEventResponseList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: CampaignProps);
}
export declare type CampaignEventListProps = {
    campaignEvent?: CampaignEvent[];
    replaceAll?: boolean;
};
export declare class CampaignEventList extends SoapMappingBase {
    campaignEvent?: CampaignEvent[];
    replaceAll?: boolean;
    constructor(props: CampaignEventListProps);
}
export declare type CampaignSearchAdvancedProps = {
    criteria?: CampaignSearch;
    columns?: CampaignSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class CampaignSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: CampaignSearch;
    columns?: CampaignSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: CampaignSearchAdvancedProps);
}
export declare type PromotionCodeSearchProps = {
    basic?: PlatformCommon.PromotionCodeSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class PromotionCodeSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.PromotionCodeSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: PromotionCodeSearchProps);
}
export declare type CampaignResponseProps = {
    entity?: PlatformCore.RecordRef;
    leadSource?: PlatformCore.RecordRef;
    campaignEvent?: PlatformCore.RecordRef;
    campaignResponseDate?: string;
    channel?: string;
    response?: ListsMarketingTypes.CampaignResponseResponse;
    note?: string;
    responsesList?: CampaignResponseResponsesList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CampaignResponse extends PlatformCore.Record {
    entity?: PlatformCore.RecordRef;
    leadSource?: PlatformCore.RecordRef;
    campaignEvent?: PlatformCore.RecordRef;
    campaignResponseDate?: string;
    channel?: string;
    response?: ListsMarketingTypes.CampaignResponseResponse;
    note?: string;
    responsesList?: CampaignResponseResponsesList;
    internalId?: string;
    externalId?: string;
    constructor(props: CampaignResponseProps);
}
export declare type CampaignSubscriptionProps = {
    name?: string;
    description?: string;
    subscribedByDefault?: boolean;
    unsubscribed?: boolean;
    externalName?: string;
    externalDescription?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CampaignSubscription extends PlatformCore.Record {
    name?: string;
    description?: string;
    subscribedByDefault?: boolean;
    unsubscribed?: boolean;
    externalName?: string;
    externalDescription?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
    constructor(props: CampaignSubscriptionProps);
}
