import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as PlatformCommonTypes from "./platform_common_types";
import { SoapMappingBase } from "../../soap-types";
export declare type SiteCategoryTranslationProps = {
    locale?: PlatformCommonTypes.Language;
    language?: string;
    displayName?: string;
    description?: string;
    storeDetailedDescription?: string;
    pageTitle?: string;
};
export declare class SiteCategoryTranslation extends SoapMappingBase {
    locale?: PlatformCommonTypes.Language;
    language?: string;
    displayName?: string;
    description?: string;
    storeDetailedDescription?: string;
    pageTitle?: string;
    constructor(props: SiteCategoryTranslationProps);
}
export declare type SiteCategoryProps = {
    website?: PlatformCore.RecordRef;
    itemId?: string;
    parentCategory?: PlatformCore.RecordRef;
    categoryListLayout?: PlatformCore.RecordRef;
    itemListLayout?: PlatformCore.RecordRef;
    relatedItemsListLayout?: PlatformCore.RecordRef;
    correlatedItemsListLayout?: PlatformCore.RecordRef;
    isOnline?: boolean;
    isInactive?: boolean;
    description?: string;
    storeDetailedDescription?: string;
    storeDisplayThumbnail?: PlatformCore.RecordRef;
    storeDisplayImage?: PlatformCore.RecordRef;
    pageTitle?: string;
    metaTagHtml?: string;
    excludeFromSitemap?: boolean;
    urlComponent?: string;
    sitemapPriority?: string;
    searchKeywords?: string;
    presentationItemList?: SiteCategoryPresentationItemList;
    translationsList?: SiteCategoryTranslationList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class SiteCategory extends PlatformCore.Record {
    website?: PlatformCore.RecordRef;
    itemId?: string;
    parentCategory?: PlatformCore.RecordRef;
    categoryListLayout?: PlatformCore.RecordRef;
    itemListLayout?: PlatformCore.RecordRef;
    relatedItemsListLayout?: PlatformCore.RecordRef;
    correlatedItemsListLayout?: PlatformCore.RecordRef;
    isOnline?: boolean;
    isInactive?: boolean;
    description?: string;
    storeDetailedDescription?: string;
    storeDisplayThumbnail?: PlatformCore.RecordRef;
    storeDisplayImage?: PlatformCore.RecordRef;
    pageTitle?: string;
    metaTagHtml?: string;
    excludeFromSitemap?: boolean;
    urlComponent?: string;
    sitemapPriority?: string;
    searchKeywords?: string;
    presentationItemList?: SiteCategoryPresentationItemList;
    translationsList?: SiteCategoryTranslationList;
    internalId?: string;
    externalId?: string;
    constructor(props: SiteCategoryProps);
}
export declare type SiteCategorySearchAdvancedProps = {
    criteria?: SiteCategorySearch;
    columns?: SiteCategorySearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class SiteCategorySearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: SiteCategorySearch;
    columns?: SiteCategorySearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: SiteCategorySearchAdvancedProps);
}
export declare type SiteCategorySearchProps = {
    basic?: PlatformCommon.SiteCategorySearchBasic;
    shopperJoin?: PlatformCommon.CustomerSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
};
export declare class SiteCategorySearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.SiteCategorySearchBasic;
    shopperJoin?: PlatformCommon.CustomerSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    constructor(props: SiteCategorySearchProps);
}
export declare type SiteCategorySearchRowProps = {
    basic?: PlatformCommon.SiteCategorySearchRowBasic;
    shopperJoin?: PlatformCommon.CustomerSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};
export declare class SiteCategorySearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.SiteCategorySearchRowBasic;
    shopperJoin?: PlatformCommon.CustomerSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    constructor(props: SiteCategorySearchRowProps);
}
export declare type SiteCategoryPresentationItemListProps = {
    presentationItem?: PlatformCommon.PresentationItem[];
    replaceAll?: boolean;
};
export declare class SiteCategoryPresentationItemList extends SoapMappingBase {
    presentationItem?: PlatformCommon.PresentationItem[];
    replaceAll?: boolean;
    constructor(props: SiteCategoryPresentationItemListProps);
}
export declare type SiteCategoryTranslationListProps = {
    translation?: SiteCategoryTranslation[];
    replaceAll?: boolean;
};
export declare class SiteCategoryTranslationList extends SoapMappingBase {
    translation?: SiteCategoryTranslation[];
    replaceAll?: boolean;
    constructor(props: SiteCategoryTranslationListProps);
}
