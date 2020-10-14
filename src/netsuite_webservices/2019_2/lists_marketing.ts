import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as ListsMarketingTypes from "./lists_marketing_types";
import { SoapMappingBase, propsWithMappingsName } from "../../soap-types";
const MAPPINGS_NAME = "com_netsuite_webservices_lists_marketing_2019_2";
export type CampaignEmailProps = {
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

export class CampaignEmail extends SoapMappingBase {
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
  constructor(props: CampaignEmailProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CampaignEventResponseProps = {
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

export class CampaignEventResponse extends SoapMappingBase {
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
  constructor(props: CampaignEventResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CouponCodeSearchProps = {
  basic?: PlatformCommon.CouponCodeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class CouponCodeSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CouponCodeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: CouponCodeSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type PromotionCodeItemsProps = {
  item?: PlatformCore.RecordRef;
};

export class PromotionCodeItems extends SoapMappingBase {
  item?: PlatformCore.RecordRef;
  constructor(props: PromotionCodeItemsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.item = props.item;
  }
}

export type CampaignCategoryProps = {
  name?: string;
  parent?: PlatformCore.RecordRef;
  leadSource?: PlatformCore.RecordRef;
  description?: string;
  isexternal?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class CampaignCategory extends PlatformCore.Record {
  name?: string;
  parent?: PlatformCore.RecordRef;
  leadSource?: PlatformCore.RecordRef;
  description?: string;
  isexternal?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CampaignCategoryProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PromotionCodeSearchAdvancedProps = {
  criteria?: PromotionCodeSearch;
  columns?: PromotionCodeSearchRow;
  savedSearchScriptId?: string;
  savedSearchId?: string;
};

export class PromotionCodeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PromotionCodeSearch;
  columns?: PromotionCodeSearchRow;
  savedSearchScriptId?: string;
  savedSearchId?: string;
  constructor(props: PromotionCodeSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchScriptId = props.savedSearchScriptId;
    this.savedSearchId = props.savedSearchId;
  }
}

export type CampaignDirectMailListProps = {
  campaignDirectMail?: CampaignDirectMail[];
  replaceAll?: boolean;
};

export class CampaignDirectMailList extends SoapMappingBase {
  campaignDirectMail?: CampaignDirectMail[];
  replaceAll?: boolean;
  constructor(props: CampaignDirectMailListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.campaignDirectMail = props.campaignDirectMail;
    this.replaceAll = props.replaceAll;
  }
}

export type CampaignResponseResponsesProps = {
  response?: string;
  responseDate?: string;
  author?: string;
  note?: string;
};

export class CampaignResponseResponses extends SoapMappingBase {
  response?: string;
  responseDate?: string;
  author?: string;
  note?: string;
  constructor(props: CampaignResponseResponsesProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.response = props.response;
    this.responseDate = props.responseDate;
    this.author = props.author;
    this.note = props.note;
  }
}

export type CampaignDirectMailProps = {
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

export class CampaignDirectMail extends SoapMappingBase {
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
  constructor(props: CampaignDirectMailProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PromotionCodeSearchRowProps = {
  basic?: PlatformCommon.PromotionCodeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class PromotionCodeSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.PromotionCodeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: PromotionCodeSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type PromotionCodeCurrencyListProps = {
  currency?: PromotionCodeCurrency[];
  replaceAll?: boolean;
};

export class PromotionCodeCurrencyList extends SoapMappingBase {
  currency?: PromotionCodeCurrency[];
  replaceAll?: boolean;
  constructor(props: PromotionCodeCurrencyListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.currency = props.currency;
    this.replaceAll = props.replaceAll;
  }
}

export type CampaignEmailListProps = {
  campaignEmail?: CampaignEmail[];
  replaceAll?: boolean;
};

export class CampaignEmailList extends SoapMappingBase {
  campaignEmail?: CampaignEmail[];
  replaceAll?: boolean;
  constructor(props: CampaignEmailListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.campaignEmail = props.campaignEmail;
    this.replaceAll = props.replaceAll;
  }
}

export type CampaignResponseResponsesListProps = {
  responses?: CampaignResponseResponses[];
  replaceAll?: boolean;
};

export class CampaignResponseResponsesList extends SoapMappingBase {
  responses?: CampaignResponseResponses[];
  replaceAll?: boolean;
  constructor(props: CampaignResponseResponsesListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.responses = props.responses;
    this.replaceAll = props.replaceAll;
  }
}

export type CampaignEventResponseListProps = {
  eventResponse?: CampaignEventResponse[];
  replaceAll?: boolean;
};

export class CampaignEventResponseList extends SoapMappingBase {
  eventResponse?: CampaignEventResponse[];
  replaceAll?: boolean;
  constructor(props: CampaignEventResponseListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.eventResponse = props.eventResponse;
    this.replaceAll = props.replaceAll;
  }
}

export type CampaignSearchProps = {
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
  constructor(props: CampaignSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CampaignAudienceProps = {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class CampaignAudience extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CampaignAudienceProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type CouponCodeProps = {
  promotion: PlatformCore.RecordRef;
  code: string;
  recipient?: PlatformCore.RecordRef;
  dateSent?: string;
  used?: boolean;
  useCount?: number;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class CouponCode extends PlatformCore.Record {
  promotion: PlatformCore.RecordRef;
  code: string;
  recipient?: PlatformCore.RecordRef;
  dateSent?: string;
  used?: boolean;
  useCount?: number;
  internalId?: string;
  externalId?: string;
  constructor(props: CouponCodeProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CampaignChannelProps = {
  name?: string;
  eventType?: ListsMarketingTypes.CampaignChannelEventType;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class CampaignChannel extends PlatformCore.Record {
  name?: string;
  eventType?: ListsMarketingTypes.CampaignChannelEventType;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CampaignChannelProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.eventType = props.eventType;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type PromotionCodeCurrencyProps = {
  currency?: PlatformCore.RecordRef;
  minimumOrderAmount?: number;
};

export class PromotionCodeCurrency extends SoapMappingBase {
  currency?: PlatformCore.RecordRef;
  minimumOrderAmount?: number;
  constructor(props: PromotionCodeCurrencyProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.currency = props.currency;
    this.minimumOrderAmount = props.minimumOrderAmount;
  }
}

export type CampaignSearchEngineProps = {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class CampaignSearchEngine extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CampaignSearchEngineProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type CampaignOfferProps = {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class CampaignOffer extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CampaignOfferProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type PromotionCodeItemsListProps = {
  items?: PromotionCodeItems[];
  replaceAll?: boolean;
};

export class PromotionCodeItemsList extends SoapMappingBase {
  items?: PromotionCodeItems[];
  replaceAll?: boolean;
  constructor(props: PromotionCodeItemsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.items = props.items;
    this.replaceAll = props.replaceAll;
  }
}

export type PromotionCodePartnersListProps = {
  partners?: PromotionCodePartners[];
  replaceAll?: boolean;
};

export class PromotionCodePartnersList extends SoapMappingBase {
  partners?: PromotionCodePartners[];
  replaceAll?: boolean;
  constructor(props: PromotionCodePartnersListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.partners = props.partners;
    this.replaceAll = props.replaceAll;
  }
}

export type CouponCodeSearchRowProps = {
  basic?: PlatformCommon.CouponCodeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class CouponCodeSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CouponCodeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: CouponCodeSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type CouponCodeSearchAdvancedProps = {
  criteria?: CouponCodeSearch;
  columns?: CouponCodeSearchRow;
  savedSearchScriptId?: string;
  savedSearchId?: string;
};

export class CouponCodeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CouponCodeSearch;
  columns?: CouponCodeSearchRow;
  savedSearchScriptId?: string;
  savedSearchId?: string;
  constructor(props: CouponCodeSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchScriptId = props.savedSearchScriptId;
    this.savedSearchId = props.savedSearchId;
  }
}

export type CampaignEventProps = {
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

export class CampaignEvent extends SoapMappingBase {
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
  constructor(props: CampaignEventProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PromotionCodePartnersProps = {
  partner?: PlatformCore.RecordRef;
  code?: string;
};

export class PromotionCodePartners extends SoapMappingBase {
  partner?: PlatformCore.RecordRef;
  code?: string;
  constructor(props: PromotionCodePartnersProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.partner = props.partner;
    this.code = props.code;
  }
}

export type PromotionCodeProps = {
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
  constructor(props: PromotionCodeProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CampaignVerticalProps = {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class CampaignVertical extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CampaignVerticalProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type CampaignFamilyProps = {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class CampaignFamily extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CampaignFamilyProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type CampaignSearchRowProps = {
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
  constructor(props: CampaignSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CampaignProps = {
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

export class Campaign extends PlatformCore.Record {
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
  constructor(props: CampaignProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CampaignEventListProps = {
  campaignEvent?: CampaignEvent[];
  replaceAll?: boolean;
};

export class CampaignEventList extends SoapMappingBase {
  campaignEvent?: CampaignEvent[];
  replaceAll?: boolean;
  constructor(props: CampaignEventListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.campaignEvent = props.campaignEvent;
    this.replaceAll = props.replaceAll;
  }
}

export type CampaignSearchAdvancedProps = {
  criteria?: CampaignSearch;
  columns?: CampaignSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class CampaignSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CampaignSearch;
  columns?: CampaignSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CampaignSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type PromotionCodeSearchProps = {
  basic?: PlatformCommon.PromotionCodeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class PromotionCodeSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.PromotionCodeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: PromotionCodeSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type CampaignResponseProps = {
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

export class CampaignResponse extends PlatformCore.Record {
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
  constructor(props: CampaignResponseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CampaignSubscriptionProps = {
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
  constructor(props: CampaignSubscriptionProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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
