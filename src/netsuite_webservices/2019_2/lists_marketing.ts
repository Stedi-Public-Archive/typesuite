import * as SoapTypes from "../../util/soap-types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as ListsMarketingTypes from "./lists_marketing_types";

const mappingsName = "com_netsuite_webservices_lists_marketing_2019_2";

export class CampaignEmail extends SoapTypes.Base {
  internalId?: string;
  campaignGroup?: PlatformCore.RecordRef;
  template?: PlatformCore.RecordRef;
  description?: string;
  subscription?: PlatformCore.RecordRef;
  channel?: PlatformCore.RecordRef;
  cost?: number;
  status?: ListsMarketingTypes.CampaignCampaignEmailStatus;
  dateScheduled?: SoapTypes.Dateish;
  promoCode?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: CampaignEmail) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.internalId = props.internalId;
    this.campaignGroup = props.campaignGroup;
    this.template = props.template;
    this.description = props.description;
    this.subscription = props.subscription;
    this.channel = props.channel;
    this.cost = props.cost;
    this.status = props.status;
    this.dateScheduled = props.dateScheduled;
    this.promoCode = props.promoCode;
    this.customFieldList = props.customFieldList;
  }
}

export class CampaignEventResponse extends SoapTypes.Base {
  name?: string;
  type?: string;
  dateSent?: SoapTypes.Dateish;
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
  constructor(props: CampaignEventResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.type = props.type;
    this.dateSent = props.dateSent;
    this.sent = props.sent;
    this.opened = props.opened;
    this.openedRatio = props.openedRatio;
    this.clickedThru = props.clickedThru;
    this.clickedThruRatio = props.clickedThruRatio;
    this.responded = props.responded;
    this.respondedRatio = props.respondedRatio;
    this.unsubscribed = props.unsubscribed;
    this.unsubscribedRatio = props.unsubscribedRatio;
    this.bounced = props.bounced;
    this.bouncedRatio = props.bouncedRatio;
  }
}

export class CouponCodeSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CouponCodeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: CouponCodeSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class PromotionCodeItems extends SoapTypes.Base {
  item?: PlatformCore.RecordRef;
  constructor(props: PromotionCodeItems) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
  }
}

export class CampaignCategory extends PlatformCore.Record {
  name?: string;
  parent?: PlatformCore.RecordRef;
  leadSource?: PlatformCore.RecordRef;
  description?: string;
  isexternal?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CampaignCategory) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.parent = props.parent;
    this.leadSource = props.leadSource;
    this.description = props.description;
    this.isexternal = props.isexternal;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class PromotionCodeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PromotionCodeSearch;
  columns?: PromotionCodeSearchRow;
  savedSearchScriptId?: string;
  savedSearchId?: string;
  constructor(props: PromotionCodeSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchScriptId = props.savedSearchScriptId;
    this.savedSearchId = props.savedSearchId;
  }
}

export class CampaignDirectMailList extends SoapTypes.Base {
  campaignDirectMail?: CampaignDirectMail[];
  replaceAll?: boolean;
  constructor(props: CampaignDirectMailList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.campaignDirectMail = props.campaignDirectMail;
    this.replaceAll = props.replaceAll;
  }
}

export class CampaignResponseResponses extends SoapTypes.Base {
  response?: string;
  responseDate?: string;
  author?: string;
  note?: string;
  constructor(props: CampaignResponseResponses) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.response = props.response;
    this.responseDate = props.responseDate;
    this.author = props.author;
    this.note = props.note;
  }
}

export class CampaignDirectMail extends SoapTypes.Base {
  internalId?: string;
  campaignGroup?: PlatformCore.RecordRef;
  template?: PlatformCore.RecordRef;
  description?: string;
  subscription?: PlatformCore.RecordRef;
  channel?: PlatformCore.RecordRef;
  cost?: number;
  status?: ListsMarketingTypes.CampaignCampaignDirectMailStatus;
  dateScheduled?: SoapTypes.Dateish;
  promoCode?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: CampaignDirectMail) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.internalId = props.internalId;
    this.campaignGroup = props.campaignGroup;
    this.template = props.template;
    this.description = props.description;
    this.subscription = props.subscription;
    this.channel = props.channel;
    this.cost = props.cost;
    this.status = props.status;
    this.dateScheduled = props.dateScheduled;
    this.promoCode = props.promoCode;
    this.customFieldList = props.customFieldList;
  }
}

export class PromotionCodeSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.PromotionCodeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: PromotionCodeSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class PromotionCodeCurrencyList extends SoapTypes.Base {
  currency?: PromotionCodeCurrency[];
  replaceAll?: boolean;
  constructor(props: PromotionCodeCurrencyList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.currency = props.currency;
    this.replaceAll = props.replaceAll;
  }
}

export class CampaignEmailList extends SoapTypes.Base {
  campaignEmail?: CampaignEmail[];
  replaceAll?: boolean;
  constructor(props: CampaignEmailList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.campaignEmail = props.campaignEmail;
    this.replaceAll = props.replaceAll;
  }
}

export class CampaignResponseResponsesList extends SoapTypes.Base {
  responses?: CampaignResponseResponses[];
  replaceAll?: boolean;
  constructor(props: CampaignResponseResponsesList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.responses = props.responses;
    this.replaceAll = props.replaceAll;
  }
}

export class CampaignEventResponseList extends SoapTypes.Base {
  eventResponse?: CampaignEventResponse[];
  replaceAll?: boolean;
  constructor(props: CampaignEventResponseList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.eventResponse = props.eventResponse;
    this.replaceAll = props.replaceAll;
  }
}

export class CampaignSearch extends PlatformCore.SearchRecord {
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
  constructor(props: CampaignSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.campaignRecipientJoin = props.campaignRecipientJoin;
    this.fileJoin = props.fileJoin;
    this.messagesJoin = props.messagesJoin;
    this.originatingLeadJoin = props.originatingLeadJoin;
    this.promotionCodeJoin = props.promotionCodeJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class CampaignAudience extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CampaignAudience) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CouponCode extends PlatformCore.Record {
  promotion: PlatformCore.RecordRef;
  code: string;
  recipient?: PlatformCore.RecordRef;
  dateSent?: SoapTypes.Dateish;
  used?: boolean;
  useCount?: number;
  internalId?: string;
  externalId?: string;
  constructor(props: CouponCode) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.promotion = props.promotion;
    this.code = props.code;
    this.recipient = props.recipient;
    this.dateSent = props.dateSent;
    this.used = props.used;
    this.useCount = props.useCount;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CampaignChannel extends PlatformCore.Record {
  name?: string;
  eventType?: ListsMarketingTypes.CampaignChannelEventType;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CampaignChannel) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.eventType = props.eventType;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class PromotionCodeCurrency extends SoapTypes.Base {
  currency?: PlatformCore.RecordRef;
  minimumOrderAmount?: number;
  constructor(props: PromotionCodeCurrency) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.currency = props.currency;
    this.minimumOrderAmount = props.minimumOrderAmount;
  }
}

export class CampaignSearchEngine extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CampaignSearchEngine) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CampaignOffer extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CampaignOffer) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class PromotionCodeItemsList extends SoapTypes.Base {
  items?: PromotionCodeItems[];
  replaceAll?: boolean;
  constructor(props: PromotionCodeItemsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.items = props.items;
    this.replaceAll = props.replaceAll;
  }
}

export class PromotionCodePartnersList extends SoapTypes.Base {
  partners?: PromotionCodePartners[];
  replaceAll?: boolean;
  constructor(props: PromotionCodePartnersList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.partners = props.partners;
    this.replaceAll = props.replaceAll;
  }
}

export class CouponCodeSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CouponCodeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: CouponCodeSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class CouponCodeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CouponCodeSearch;
  columns?: CouponCodeSearchRow;
  savedSearchScriptId?: string;
  savedSearchId?: string;
  constructor(props: CouponCodeSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchScriptId = props.savedSearchScriptId;
    this.savedSearchId = props.savedSearchId;
  }
}

export class CampaignEvent extends SoapTypes.Base {
  internalId?: string;
  campaignGroup?: PlatformCore.RecordRef;
  description?: string;
  subscription?: PlatformCore.RecordRef;
  channel?: PlatformCore.RecordRef;
  cost?: number;
  status?: ListsMarketingTypes.CampaignCampaignEventStatus;
  dateScheduled?: SoapTypes.Dateish;
  promoCode?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: CampaignEvent) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.internalId = props.internalId;
    this.campaignGroup = props.campaignGroup;
    this.description = props.description;
    this.subscription = props.subscription;
    this.channel = props.channel;
    this.cost = props.cost;
    this.status = props.status;
    this.dateScheduled = props.dateScheduled;
    this.promoCode = props.promoCode;
    this.customFieldList = props.customFieldList;
  }
}

export class PromotionCodePartners extends SoapTypes.Base {
  partner?: PlatformCore.RecordRef;
  code?: string;
  constructor(props: PromotionCodePartners) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.partner = props.partner;
    this.code = props.code;
  }
}

export class PromotionCode extends PlatformCore.Record {
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
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  isPublic?: boolean;
  currencyList?: PromotionCodeCurrencyList;
  excludeItems?: boolean;
  name?: string;
  itemsList?: PromotionCodeItemsList;
  partnersList?: PromotionCodePartnersList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: PromotionCode) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.implementation = props.implementation;
    this.customForm = props.customForm;
    this.useType = props.useType;
    this.displayLineDiscounts = props.displayLineDiscounts;
    this.code = props.code;
    this.codePattern = props.codePattern;
    this.numberToGenerate = props.numberToGenerate;
    this.description = props.description;
    this.locationList = props.locationList;
    this.isInactive = props.isInactive;
    this.discount = props.discount;
    this.rate = props.rate;
    this.discountType = props.discountType;
    this.applyDiscountTo = props.applyDiscountTo;
    this.freeShipMethod = props.freeShipMethod;
    this.minimumOrderAmount = props.minimumOrderAmount;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.isPublic = props.isPublic;
    this.currencyList = props.currencyList;
    this.excludeItems = props.excludeItems;
    this.name = props.name;
    this.itemsList = props.itemsList;
    this.partnersList = props.partnersList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CampaignVertical extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CampaignVertical) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CampaignFamily extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CampaignFamily) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CampaignSearchRow extends PlatformCore.SearchRow {
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
  constructor(props: CampaignSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.campaignRecipientJoin = props.campaignRecipientJoin;
    this.fileJoin = props.fileJoin;
    this.messagesJoin = props.messagesJoin;
    this.originatingLeadJoin = props.originatingLeadJoin;
    this.promotionCodeJoin = props.promotionCodeJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class Campaign extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  campaignId?: string;
  title?: string;
  category?: PlatformCore.RecordRef;
  owner?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
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
  constructor(props: Campaign) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customForm = props.customForm;
    this.campaignId = props.campaignId;
    this.title = props.title;
    this.category = props.category;
    this.owner = props.owner;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.url = props.url;
    this.baseCost = props.baseCost;
    this.cost = props.cost;
    this.expectedRevenue = props.expectedRevenue;
    this.message = props.message;
    this.isInactive = props.isInactive;
    this.local = props.local;
    this.totalRevenue = props.totalRevenue;
    this.roi = props.roi;
    this.profit = props.profit;
    this.costPerCustomer = props.costPerCustomer;
    this.convCostPerCustomer = props.convCostPerCustomer;
    this.conversions = props.conversions;
    this.leadsGenerated = props.leadsGenerated;
    this.uniqueVisitors = props.uniqueVisitors;
    this.vertical = props.vertical;
    this.audience = props.audience;
    this.offer = props.offer;
    this.promotionCode = props.promotionCode;
    this.itemList = props.itemList;
    this.family = props.family;
    this.searchEngine = props.searchEngine;
    this.keyword = props.keyword;
    this.campaignEmailList = props.campaignEmailList;
    this.campaignDirectMailList = props.campaignDirectMailList;
    this.campaignEventList = props.campaignEventList;
    this.eventResponseList = props.eventResponseList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CampaignEventList extends SoapTypes.Base {
  campaignEvent?: CampaignEvent[];
  replaceAll?: boolean;
  constructor(props: CampaignEventList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.campaignEvent = props.campaignEvent;
    this.replaceAll = props.replaceAll;
  }
}

export class CampaignSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CampaignSearch;
  columns?: CampaignSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CampaignSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class PromotionCodeSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.PromotionCodeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: PromotionCodeSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class CampaignResponse extends PlatformCore.Record {
  entity?: PlatformCore.RecordRef;
  leadSource?: PlatformCore.RecordRef;
  campaignEvent?: PlatformCore.RecordRef;
  campaignResponseDate?: SoapTypes.Dateish;
  channel?: string;
  response?: ListsMarketingTypes.CampaignResponseResponse;
  note?: string;
  responsesList?: CampaignResponseResponsesList;
  internalId?: string;
  externalId?: string;
  constructor(props: CampaignResponse) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.entity = props.entity;
    this.leadSource = props.leadSource;
    this.campaignEvent = props.campaignEvent;
    this.campaignResponseDate = props.campaignResponseDate;
    this.channel = props.channel;
    this.response = props.response;
    this.note = props.note;
    this.responsesList = props.responsesList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CampaignSubscription extends PlatformCore.Record {
  name?: string;
  description?: string;
  subscribedByDefault?: boolean;
  unsubscribed?: boolean;
  externalName?: string;
  externalDescription?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CampaignSubscription) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.description = props.description;
    this.subscribedByDefault = props.subscribedByDefault;
    this.unsubscribed = props.unsubscribed;
    this.externalName = props.externalName;
    this.externalDescription = props.externalDescription;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}
