import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as PlatformCommonTypes from "./platform_common_types";
import { SoapMappingBase, propsWithMappingsName } from "../../soap-types";
const MAPPINGS_NAME = "com_netsuite_webservices_lists_website_2019_2";
export type SiteCategoryTranslationProps = {
  locale?: PlatformCommonTypes.Language;
  language?: string;
  displayName?: string;
  description?: string;
  storeDetailedDescription?: string;
  pageTitle?: string;
};

export class SiteCategoryTranslation extends SoapMappingBase {
  locale?: PlatformCommonTypes.Language;
  language?: string;
  displayName?: string;
  description?: string;
  storeDetailedDescription?: string;
  pageTitle?: string;
  constructor(props: SiteCategoryTranslationProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.locale = props.locale;
    this.language = props.language;
    this.displayName = props.displayName;
    this.description = props.description;
    this.storeDetailedDescription = props.storeDetailedDescription;
    this.pageTitle = props.pageTitle;
  }
}

export type SiteCategoryProps = {
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

export class SiteCategory extends PlatformCore.Record {
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
  constructor(props: SiteCategoryProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.website = props.website;
    this.itemId = props.itemId;
    this.parentCategory = props.parentCategory;
    this.categoryListLayout = props.categoryListLayout;
    this.itemListLayout = props.itemListLayout;
    this.relatedItemsListLayout = props.relatedItemsListLayout;
    this.correlatedItemsListLayout = props.correlatedItemsListLayout;
    this.isOnline = props.isOnline;
    this.isInactive = props.isInactive;
    this.description = props.description;
    this.storeDetailedDescription = props.storeDetailedDescription;
    this.storeDisplayThumbnail = props.storeDisplayThumbnail;
    this.storeDisplayImage = props.storeDisplayImage;
    this.pageTitle = props.pageTitle;
    this.metaTagHtml = props.metaTagHtml;
    this.excludeFromSitemap = props.excludeFromSitemap;
    this.urlComponent = props.urlComponent;
    this.sitemapPriority = props.sitemapPriority;
    this.searchKeywords = props.searchKeywords;
    this.presentationItemList = props.presentationItemList;
    this.translationsList = props.translationsList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type SiteCategorySearchAdvancedProps = {
  criteria?: SiteCategorySearch;
  columns?: SiteCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class SiteCategorySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: SiteCategorySearch;
  columns?: SiteCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: SiteCategorySearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type SiteCategorySearchProps = {
  basic?: PlatformCommon.SiteCategorySearchBasic;
  shopperJoin?: PlatformCommon.CustomerSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class SiteCategorySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.SiteCategorySearchBasic;
  shopperJoin?: PlatformCommon.CustomerSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: SiteCategorySearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.shopperJoin = props.shopperJoin;
    this.userJoin = props.userJoin;
  }
}

export type SiteCategorySearchRowProps = {
  basic?: PlatformCommon.SiteCategorySearchRowBasic;
  shopperJoin?: PlatformCommon.CustomerSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class SiteCategorySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.SiteCategorySearchRowBasic;
  shopperJoin?: PlatformCommon.CustomerSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: SiteCategorySearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.shopperJoin = props.shopperJoin;
    this.userJoin = props.userJoin;
  }
}

export type SiteCategoryPresentationItemListProps = {
  presentationItem?: PlatformCommon.PresentationItem[];
  replaceAll?: boolean;
};

export class SiteCategoryPresentationItemList extends SoapMappingBase {
  presentationItem?: PlatformCommon.PresentationItem[];
  replaceAll?: boolean;
  constructor(props: SiteCategoryPresentationItemListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.presentationItem = props.presentationItem;
    this.replaceAll = props.replaceAll;
  }
}

export type SiteCategoryTranslationListProps = {
  translation?: SiteCategoryTranslation[];
  replaceAll?: boolean;
};

export class SiteCategoryTranslationList extends SoapMappingBase {
  translation?: SiteCategoryTranslation[];
  replaceAll?: boolean;
  constructor(props: SiteCategoryTranslationListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.translation = props.translation;
    this.replaceAll = props.replaceAll;
  }
}
