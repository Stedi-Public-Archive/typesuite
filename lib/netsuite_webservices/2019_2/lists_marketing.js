"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignSubscription = exports.CampaignResponse = exports.PromotionCodeSearch = exports.CampaignSearchAdvanced = exports.CampaignEventList = exports.Campaign = exports.CampaignSearchRow = exports.CampaignFamily = exports.CampaignVertical = exports.PromotionCode = exports.PromotionCodePartners = exports.CampaignEvent = exports.CouponCodeSearchAdvanced = exports.CouponCodeSearchRow = exports.PromotionCodePartnersList = exports.PromotionCodeItemsList = exports.CampaignOffer = exports.CampaignSearchEngine = exports.PromotionCodeCurrency = exports.CampaignChannel = exports.CouponCode = exports.CampaignAudience = exports.CampaignSearch = exports.CampaignEventResponseList = exports.CampaignResponseResponsesList = exports.CampaignEmailList = exports.PromotionCodeCurrencyList = exports.PromotionCodeSearchRow = exports.CampaignDirectMail = exports.CampaignResponseResponses = exports.CampaignDirectMailList = exports.PromotionCodeSearchAdvanced = exports.CampaignCategory = exports.PromotionCodeItems = exports.CouponCodeSearch = exports.CampaignEventResponse = exports.CampaignEmail = void 0;
const PlatformCore = __importStar(require("./platform_core"));
const soap_types_1 = require("../../soap-types");
const MAPPINGS_NAME = "com_netsuite_webservices_lists_marketing_2019_2";
class CampaignEmail extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.CampaignEmail = CampaignEmail;
class CampaignEventResponse extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.CampaignEventResponse = CampaignEventResponse;
class CouponCodeSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.CouponCodeSearch = CouponCodeSearch;
class PromotionCodeItems extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.item = props.item;
    }
}
exports.PromotionCodeItems = PromotionCodeItems;
class CampaignCategory extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.CampaignCategory = CampaignCategory;
class PromotionCodeSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchScriptId = props.savedSearchScriptId;
        this.savedSearchId = props.savedSearchId;
    }
}
exports.PromotionCodeSearchAdvanced = PromotionCodeSearchAdvanced;
class CampaignDirectMailList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.campaignDirectMail = props.campaignDirectMail;
        this.replaceAll = props.replaceAll;
    }
}
exports.CampaignDirectMailList = CampaignDirectMailList;
class CampaignResponseResponses extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.response = props.response;
        this.responseDate = props.responseDate;
        this.author = props.author;
        this.note = props.note;
    }
}
exports.CampaignResponseResponses = CampaignResponseResponses;
class CampaignDirectMail extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.CampaignDirectMail = CampaignDirectMail;
class PromotionCodeSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.PromotionCodeSearchRow = PromotionCodeSearchRow;
class PromotionCodeCurrencyList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.currency = props.currency;
        this.replaceAll = props.replaceAll;
    }
}
exports.PromotionCodeCurrencyList = PromotionCodeCurrencyList;
class CampaignEmailList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.campaignEmail = props.campaignEmail;
        this.replaceAll = props.replaceAll;
    }
}
exports.CampaignEmailList = CampaignEmailList;
class CampaignResponseResponsesList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.responses = props.responses;
        this.replaceAll = props.replaceAll;
    }
}
exports.CampaignResponseResponsesList = CampaignResponseResponsesList;
class CampaignEventResponseList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.eventResponse = props.eventResponse;
        this.replaceAll = props.replaceAll;
    }
}
exports.CampaignEventResponseList = CampaignEventResponseList;
class CampaignSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.CampaignSearch = CampaignSearch;
class CampaignAudience extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.description = props.description;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.CampaignAudience = CampaignAudience;
class CouponCode extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.CouponCode = CouponCode;
class CampaignChannel extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.eventType = props.eventType;
        this.description = props.description;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.CampaignChannel = CampaignChannel;
class PromotionCodeCurrency extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.currency = props.currency;
        this.minimumOrderAmount = props.minimumOrderAmount;
    }
}
exports.PromotionCodeCurrency = PromotionCodeCurrency;
class CampaignSearchEngine extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.description = props.description;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.CampaignSearchEngine = CampaignSearchEngine;
class CampaignOffer extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.description = props.description;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.CampaignOffer = CampaignOffer;
class PromotionCodeItemsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.items = props.items;
        this.replaceAll = props.replaceAll;
    }
}
exports.PromotionCodeItemsList = PromotionCodeItemsList;
class PromotionCodePartnersList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.partners = props.partners;
        this.replaceAll = props.replaceAll;
    }
}
exports.PromotionCodePartnersList = PromotionCodePartnersList;
class CouponCodeSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
    }
}
exports.CouponCodeSearchRow = CouponCodeSearchRow;
class CouponCodeSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchScriptId = props.savedSearchScriptId;
        this.savedSearchId = props.savedSearchId;
    }
}
exports.CouponCodeSearchAdvanced = CouponCodeSearchAdvanced;
class CampaignEvent extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.CampaignEvent = CampaignEvent;
class PromotionCodePartners extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.partner = props.partner;
        this.code = props.code;
    }
}
exports.PromotionCodePartners = PromotionCodePartners;
class PromotionCode extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.PromotionCode = PromotionCode;
class CampaignVertical extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.description = props.description;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.CampaignVertical = CampaignVertical;
class CampaignFamily extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.description = props.description;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.CampaignFamily = CampaignFamily;
class CampaignSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.CampaignSearchRow = CampaignSearchRow;
class Campaign extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.Campaign = Campaign;
class CampaignEventList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.campaignEvent = props.campaignEvent;
        this.replaceAll = props.replaceAll;
    }
}
exports.CampaignEventList = CampaignEventList;
class CampaignSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.CampaignSearchAdvanced = CampaignSearchAdvanced;
class PromotionCodeSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.userJoin = props.userJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.PromotionCodeSearch = PromotionCodeSearch;
class CampaignResponse extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.CampaignResponse = CampaignResponse;
class CampaignSubscription extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.CampaignSubscription = CampaignSubscription;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHNfbWFya2V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25ldHN1aXRlX3dlYnNlcnZpY2VzLzIwMTlfMi9saXN0c19tYXJrZXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUFnRDtBQUdoRCxpREFBMEU7QUFDMUUsTUFBTSxhQUFhLEdBQUcsaURBQWlELENBQUM7QUFleEUsTUFBYSxhQUFjLFNBQVEsNEJBQWU7SUFZaEQsWUFBWSxLQUF5QjtRQUNuQyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztJQUMvQyxDQUFDO0NBQ0Y7QUExQkQsc0NBMEJDO0FBbUJELE1BQWEscUJBQXNCLFNBQVEsNEJBQWU7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bUIsR0FBRyxLQUFLLENBQUMsbUJBQW1CLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQ3JDLENBQUM7Q0FDRjtBQXRCRCxvREFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQbGF0Zm9ybUNvcmUgZnJvbSBcIi4vcGxhdGZvcm1fY29yZVwiO1xuaW1wb3J0ICogYXMgUGxhdGZvcm1Db21tb24gZnJvbSBcIi4vcGxhdGZvcm1fY29tbW9uXCI7XG5pbXBvcnQgKiBhcyBMaXN0c01hcmtldGluZ1R5cGVzIGZyb20gXCIuL2xpc3RzX21hcmtldGluZ190eXBlc1wiO1xuaW1wb3J0IHsgU29hcE1hcHBpbmdCYXNlLCBwcm9wc1dpdGhNYXBwaW5nc05hbWUgfSBmcm9tIFwiLi4vLi4vc29hcC10eXBlc1wiO1xuY29uc3QgTUFQUElOR1NfTkFNRSA9IFwiY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2xpc3RzX21hcmtldGluZ18yMDE5XzJcIjtcbmV4cG9ydCB0eXBlIENhbXBhaWduRW1haWxQcm9wcyA9IHtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgY2FtcGFpZ25Hcm91cD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHRlbXBsYXRlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHN1YnNjcmlwdGlvbj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGNoYW5uZWw/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjb3N0PzogbnVtYmVyO1xuICBzdGF0dXM/OiBMaXN0c01hcmtldGluZ1R5cGVzLkNhbXBhaWduQ2FtcGFpZ25FbWFpbFN0YXR1cztcbiAgZGF0ZVNjaGVkdWxlZD86IHN0cmluZztcbiAgcHJvbW9Db2RlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgY3VzdG9tRmllbGRMaXN0PzogUGxhdGZvcm1Db3JlLkN1c3RvbUZpZWxkTGlzdDtcbn07XG5cbmV4cG9ydCBjbGFzcyBDYW1wYWlnbkVtYWlsIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgY2FtcGFpZ25Hcm91cD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHRlbXBsYXRlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHN1YnNjcmlwdGlvbj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGNoYW5uZWw/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjb3N0PzogbnVtYmVyO1xuICBzdGF0dXM/OiBMaXN0c01hcmtldGluZ1R5cGVzLkNhbXBhaWduQ2FtcGFpZ25FbWFpbFN0YXR1cztcbiAgZGF0ZVNjaGVkdWxlZD86IHN0cmluZztcbiAgcHJvbW9Db2RlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgY3VzdG9tRmllbGRMaXN0PzogUGxhdGZvcm1Db3JlLkN1c3RvbUZpZWxkTGlzdDtcbiAgY29uc3RydWN0b3IocHJvcHM6IENhbXBhaWduRW1haWxQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuaW50ZXJuYWxJZCA9IHByb3BzLmludGVybmFsSWQ7XG4gICAgdGhpcy5jYW1wYWlnbkdyb3VwID0gcHJvcHMuY2FtcGFpZ25Hcm91cDtcbiAgICB0aGlzLnRlbXBsYXRlID0gcHJvcHMudGVtcGxhdGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gcHJvcHMuc3Vic2NyaXB0aW9uO1xuICAgIHRoaXMuY2hhbm5lbCA9IHByb3BzLmNoYW5uZWw7XG4gICAgdGhpcy5jb3N0ID0gcHJvcHMuY29zdDtcbiAgICB0aGlzLnN0YXR1cyA9IHByb3BzLnN0YXR1cztcbiAgICB0aGlzLmRhdGVTY2hlZHVsZWQgPSBwcm9wcy5kYXRlU2NoZWR1bGVkO1xuICAgIHRoaXMucHJvbW9Db2RlID0gcHJvcHMucHJvbW9Db2RlO1xuICAgIHRoaXMuY3VzdG9tRmllbGRMaXN0ID0gcHJvcHMuY3VzdG9tRmllbGRMaXN0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENhbXBhaWduRXZlbnRSZXNwb25zZVByb3BzID0ge1xuICBuYW1lPzogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICBkYXRlU2VudD86IHN0cmluZztcbiAgc2VudD86IG51bWJlcjtcbiAgb3BlbmVkPzogbnVtYmVyO1xuICBvcGVuZWRSYXRpbz86IG51bWJlcjtcbiAgY2xpY2tlZFRocnU/OiBudW1iZXI7XG4gIGNsaWNrZWRUaHJ1UmF0aW8/OiBudW1iZXI7XG4gIHJlc3BvbmRlZD86IG51bWJlcjtcbiAgcmVzcG9uZGVkUmF0aW8/OiBudW1iZXI7XG4gIHVuc3Vic2NyaWJlZD86IG51bWJlcjtcbiAgdW5zdWJzY3JpYmVkUmF0aW8/OiBudW1iZXI7XG4gIGJvdW5jZWQ/OiBudW1iZXI7XG4gIGJvdW5jZWRSYXRpbz86IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjbGFzcyBDYW1wYWlnbkV2ZW50UmVzcG9uc2UgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBuYW1lPzogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICBkYXRlU2VudD86IHN0cmluZztcbiAgc2VudD86IG51bWJlcjtcbiAgb3BlbmVkPzogbnVtYmVyO1xuICBvcGVuZWRSYXRpbz86IG51bWJlcjtcbiAgY2xpY2tlZFRocnU/OiBudW1iZXI7XG4gIGNsaWNrZWRUaHJ1UmF0aW8/OiBudW1iZXI7XG4gIHJlc3BvbmRlZD86IG51bWJlcjtcbiAgcmVzcG9uZGVkUmF0aW8/OiBudW1iZXI7XG4gIHVuc3Vic2NyaWJlZD86IG51bWJlcjtcbiAgdW5zdWJzY3JpYmVkUmF0aW8/OiBudW1iZXI7XG4gIGJvdW5jZWQ/OiBudW1iZXI7XG4gIGJvdW5jZWRSYXRpbz86IG51bWJlcjtcbiAgY29uc3RydWN0b3IocHJvcHM6IENhbXBhaWduRXZlbnRSZXNwb25zZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICB0aGlzLnR5cGUgPSBwcm9wcy50eXBlO1xuICAgIHRoaXMuZGF0ZVNlbnQgPSBwcm9wcy5kYXRlU2VudDtcbiAgICB0aGlzLnNlbnQgPSBwcm9wcy5zZW50O1xuICAgIHRoaXMub3BlbmVkID0gcHJvcHMub3BlbmVkO1xuICAgIHRoaXMub3BlbmVkUmF0aW8gPSBwcm9wcy5vcGVuZWRSYXRpbztcbiAgICB0aGlzLmNsaWNrZWRUaHJ1ID0gcHJvcHMuY2xpY2tlZFRocnU7XG4gICAgdGhpcy5jbGlja2VkVGhydVJhdGlvID0gcHJvcHMuY2xpY2tlZFRocnVSYXRpbztcbiAgICB0aGlzLnJlc3BvbmRlZCA9IHByb3BzLnJlc3BvbmRlZDtcbiAgICB0aGlzLnJlc3BvbmRlZFJhdGlvID0gcHJvcHMucmVzcG9uZGVkUmF0aW87XG4gICAgdGhpcy51bnN1YnNjcmliZWQgPSBwcm9wcy51bnN1YnNjcmliZWQ7XG4gICAgdGhpcy51bnN1YnNjcmliZWRSYXRpbyA9IHByb3BzLnVuc3Vic2NyaWJlZFJhdGlvO1xuICAgIHRoaXMuYm91bmNlZCA9IHByb3BzLmJvdW5jZWQ7XG4gICAgdGhpcy5ib3VuY2VkUmF0aW8gPSBwcm9wcy5ib3VuY2VkUmF0aW87XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ291cG9uQ29kZVNlYXJjaFByb3BzID0ge1xuICBiYXNpYz86IFBsYXRmb3JtQ29tbW9uLkNvdXBvbkNvZGVTZWFyY2hCYXNpYztcbiAgdXNlckpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaEJhc2ljO1xufTtcblxuZXhwb3J0IGNsYXNzIENvdXBvbkNvZGVTZWFyY2ggZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuU2VhcmNoUmVjb3JkIHtcbiAgYmFzaWM/OiBQbGF0Zm9ybUNvbW1vbi5Db3Vwb25Db2RlU2VhcmNoQmFzaWM7XG4gIHVzZXJKb2luPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hCYXNpYztcbiAgY29uc3RydWN0b3IocHJvcHM6IENvdXBvbkNvZGVTZWFyY2hQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuYmFzaWMgPSBwcm9wcy5iYXNpYztcbiAgICB0aGlzLnVzZXJKb2luID0gcHJvcHMudXNlckpvaW47XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUHJvbW90aW9uQ29kZUl0ZW1zUHJvcHMgPSB7XG4gIGl0ZW0/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xufTtcblxuZXhwb3J0IGNsYXNzIFByb21vdGlvbkNvZGVJdGVtcyBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGl0ZW0/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvbW90aW9uQ29kZUl0ZW1zUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLml0ZW0gPSBwcm9wcy5pdGVtO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENhbXBhaWduQ2F0ZWdvcnlQcm9wcyA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgcGFyZW50PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgbGVhZFNvdXJjZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBpc2V4dGVybmFsPzogYm9vbGVhbjtcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG59ICYgUGxhdGZvcm1Db3JlLlJlY29yZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgQ2FtcGFpZ25DYXRlZ29yeSBleHRlbmRzIFBsYXRmb3JtQ29yZS5SZWNvcmQge1xuICBuYW1lPzogc3RyaW5nO1xuICBwYXJlbnQ/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBsZWFkU291cmNlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGlzZXh0ZXJuYWw/OiBib29sZWFuO1xuICBpc0luYWN0aXZlPzogYm9vbGVhbjtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgZXh0ZXJuYWxJZD86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IENhbXBhaWduQ2F0ZWdvcnlQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgdGhpcy5wYXJlbnQgPSBwcm9wcy5wYXJlbnQ7XG4gICAgdGhpcy5sZWFkU291cmNlID0gcHJvcHMubGVhZFNvdXJjZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgdGhpcy5pc2V4dGVybmFsID0gcHJvcHMuaXNleHRlcm5hbDtcbiAgICB0aGlzLmlzSW5hY3RpdmUgPSBwcm9wcy5pc0luYWN0aXZlO1xuICAgIHRoaXMuaW50ZXJuYWxJZCA9IHByb3BzLmludGVybmFsSWQ7XG4gICAgdGhpcy5leHRlcm5hbElkID0gcHJvcHMuZXh0ZXJuYWxJZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBQcm9tb3Rpb25Db2RlU2VhcmNoQWR2YW5jZWRQcm9wcyA9IHtcbiAgY3JpdGVyaWE/OiBQcm9tb3Rpb25Db2RlU2VhcmNoO1xuICBjb2x1bW5zPzogUHJvbW90aW9uQ29kZVNlYXJjaFJvdztcbiAgc2F2ZWRTZWFyY2hTY3JpcHRJZD86IHN0cmluZztcbiAgc2F2ZWRTZWFyY2hJZD86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBQcm9tb3Rpb25Db2RlU2VhcmNoQWR2YW5jZWQgZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuU2VhcmNoUmVjb3JkIHtcbiAgY3JpdGVyaWE/OiBQcm9tb3Rpb25Db2RlU2VhcmNoO1xuICBjb2x1bW5zPzogUHJvbW90aW9uQ29kZVNlYXJjaFJvdztcbiAgc2F2ZWRTZWFyY2hTY3JpcHRJZD86IHN0cmluZztcbiAgc2F2ZWRTZWFyY2hJZD86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb21vdGlvbkNvZGVTZWFyY2hBZHZhbmNlZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5jcml0ZXJpYSA9IHByb3BzLmNyaXRlcmlhO1xuICAgIHRoaXMuY29sdW1ucyA9IHByb3BzLmNvbHVtbnM7XG4gICAgdGhpcy5zYXZlZFNlYXJjaFNjcmlwdElkID0gcHJvcHMuc2F2ZWRTZWFyY2hTY3JpcHRJZDtcbiAgICB0aGlzLnNhdmVkU2VhcmNoSWQgPSBwcm9wcy5zYXZlZFNlYXJjaElkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENhbXBhaWduRGlyZWN0TWFpbExpc3RQcm9wcyA9IHtcbiAgY2FtcGFpZ25EaXJlY3RNYWlsPzogQ2FtcGFpZ25EaXJlY3RNYWlsW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIENhbXBhaWduRGlyZWN0TWFpbExpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBjYW1wYWlnbkRpcmVjdE1haWw/OiBDYW1wYWlnbkRpcmVjdE1haWxbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDYW1wYWlnbkRpcmVjdE1haWxMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmNhbXBhaWduRGlyZWN0TWFpbCA9IHByb3BzLmNhbXBhaWduRGlyZWN0TWFpbDtcbiAgICB0aGlzLnJlcGxhY2VBbGwgPSBwcm9wcy5yZXBsYWNlQWxsO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENhbXBhaWduUmVzcG9uc2VSZXNwb25zZXNQcm9wcyA9IHtcbiAgcmVzcG9uc2U/OiBzdHJpbmc7XG4gIHJlc3BvbnNlRGF0ZT86IHN0cmluZztcbiAgYXV0aG9yPzogc3RyaW5nO1xuICBub3RlPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIENhbXBhaWduUmVzcG9uc2VSZXNwb25zZXMgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICByZXNwb25zZT86IHN0cmluZztcbiAgcmVzcG9uc2VEYXRlPzogc3RyaW5nO1xuICBhdXRob3I/OiBzdHJpbmc7XG4gIG5vdGU/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDYW1wYWlnblJlc3BvbnNlUmVzcG9uc2VzUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnJlc3BvbnNlID0gcHJvcHMucmVzcG9uc2U7XG4gICAgdGhpcy5yZXNwb25zZURhdGUgPSBwcm9wcy5yZXNwb25zZURhdGU7XG4gICAgdGhpcy5hdXRob3IgPSBwcm9wcy5hdXRob3I7XG4gICAgdGhpcy5ub3RlID0gcHJvcHMubm90ZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDYW1wYWlnbkRpcmVjdE1haWxQcm9wcyA9IHtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgY2FtcGFpZ25Hcm91cD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHRlbXBsYXRlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHN1YnNjcmlwdGlvbj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGNoYW5uZWw/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjb3N0PzogbnVtYmVyO1xuICBzdGF0dXM/OiBMaXN0c01hcmtldGluZ1R5cGVzLkNhbXBhaWduQ2FtcGFpZ25EaXJlY3RNYWlsU3RhdHVzO1xuICBkYXRlU2NoZWR1bGVkPzogc3RyaW5nO1xuICBwcm9tb0NvZGU/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjdXN0b21GaWVsZExpc3Q/OiBQbGF0Zm9ybUNvcmUuQ3VzdG9tRmllbGRMaXN0O1xufTtcblxuZXhwb3J0IGNsYXNzIENhbXBhaWduRGlyZWN0TWFpbCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGNhbXBhaWduR3JvdXA/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICB0ZW1wbGF0ZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBzdWJzY3JpcHRpb24/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjaGFubmVsPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgY29zdD86IG51bWJlcjtcbiAgc3RhdHVzPzogTGlzdHNNYXJrZXRpbmdUeXBlcy5DYW1wYWlnbkNhbXBhaWduRGlyZWN0TWFpbFN0YXR1cztcbiAgZGF0ZVNjaGVkdWxlZD86IHN0cmluZztcbiAgcHJvbW9Db2RlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgY3VzdG9tRmllbGRMaXN0PzogUGxhdGZvcm1Db3JlLkN1c3RvbUZpZWxkTGlzdDtcbiAgY29uc3RydWN0b3IocHJvcHM6IENhbXBhaWduRGlyZWN0TWFpbFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5pbnRlcm5hbElkID0gcHJvcHMuaW50ZXJuYWxJZDtcbiAgICB0aGlzLmNhbXBhaWduR3JvdXAgPSBwcm9wcy5jYW1wYWlnbkdyb3VwO1xuICAgIHRoaXMudGVtcGxhdGUgPSBwcm9wcy50ZW1wbGF0ZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBwcm9wcy5zdWJzY3JpcHRpb247XG4gICAgdGhpcy5jaGFubmVsID0gcHJvcHMuY2hhbm5lbDtcbiAgICB0aGlzLmNvc3QgPSBwcm9wcy5jb3N0O1xuICAgIHRoaXMuc3RhdHVzID0gcHJvcHMuc3RhdHVzO1xuICAgIHRoaXMuZGF0ZVNjaGVkdWxlZCA9IHByb3BzLmRhdGVTY2hlZHVsZWQ7XG4gICAgdGhpcy5wcm9tb0NvZGUgPSBwcm9wcy5wcm9tb0NvZGU7XG4gICAgdGhpcy5jdXN0b21GaWVsZExpc3QgPSBwcm9wcy5jdXN0b21GaWVsZExpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUHJvbW90aW9uQ29kZVNlYXJjaFJvd1Byb3BzID0ge1xuICBiYXNpYz86IFBsYXRmb3JtQ29tbW9uLlByb21vdGlvbkNvZGVTZWFyY2hSb3dCYXNpYztcbiAgdXNlckpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaFJvd0Jhc2ljO1xuICBjdXN0b21TZWFyY2hKb2luPzogUGxhdGZvcm1Db21tb24uQ3VzdG9tU2VhcmNoUm93QmFzaWNbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBQcm9tb3Rpb25Db2RlU2VhcmNoUm93IGV4dGVuZHMgUGxhdGZvcm1Db3JlLlNlYXJjaFJvdyB7XG4gIGJhc2ljPzogUGxhdGZvcm1Db21tb24uUHJvbW90aW9uQ29kZVNlYXJjaFJvd0Jhc2ljO1xuICB1c2VySm9pbj86IFBsYXRmb3JtQ29tbW9uLkVtcGxveWVlU2VhcmNoUm93QmFzaWM7XG4gIGN1c3RvbVNlYXJjaEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5DdXN0b21TZWFyY2hSb3dCYXNpY1tdO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvbW90aW9uQ29kZVNlYXJjaFJvd1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5iYXNpYyA9IHByb3BzLmJhc2ljO1xuICAgIHRoaXMudXNlckpvaW4gPSBwcm9wcy51c2VySm9pbjtcbiAgICB0aGlzLmN1c3RvbVNlYXJjaEpvaW4gPSBwcm9wcy5jdXN0b21TZWFyY2hKb2luO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFByb21vdGlvbkNvZGVDdXJyZW5jeUxpc3RQcm9wcyA9IHtcbiAgY3VycmVuY3k/OiBQcm9tb3Rpb25Db2RlQ3VycmVuY3lbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgUHJvbW90aW9uQ29kZUN1cnJlbmN5TGlzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGN1cnJlbmN5PzogUHJvbW90aW9uQ29kZUN1cnJlbmN5W107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvbW90aW9uQ29kZUN1cnJlbmN5TGlzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5jdXJyZW5jeSA9IHByb3BzLmN1cnJlbmN5O1xuICAgIHRoaXMucmVwbGFjZUFsbCA9IHByb3BzLnJlcGxhY2VBbGw7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2FtcGFpZ25FbWFpbExpc3RQcm9wcyA9IHtcbiAgY2FtcGFpZ25FbWFpbD86IENhbXBhaWduRW1haWxbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgQ2FtcGFpZ25FbWFpbExpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBjYW1wYWlnbkVtYWlsPzogQ2FtcGFpZ25FbWFpbFtdO1xuICByZXBsYWNlQWxsPzogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IocHJvcHM6IENhbXBhaWduRW1haWxMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmNhbXBhaWduRW1haWwgPSBwcm9wcy5jYW1wYWlnbkVtYWlsO1xuICAgIHRoaXMucmVwbGFjZUFsbCA9IHByb3BzLnJlcGxhY2VBbGw7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2FtcGFpZ25SZXNwb25zZVJlc3BvbnNlc0xpc3RQcm9wcyA9IHtcbiAgcmVzcG9uc2VzPzogQ2FtcGFpZ25SZXNwb25zZVJlc3BvbnNlc1tdO1xuICByZXBsYWNlQWxsPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjbGFzcyBDYW1wYWlnblJlc3BvbnNlUmVzcG9uc2VzTGlzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHJlc3BvbnNlcz86IENhbXBhaWduUmVzcG9uc2VSZXNwb25zZXNbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDYW1wYWlnblJlc3BvbnNlUmVzcG9uc2VzTGlzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5yZXNwb25zZXMgPSBwcm9wcy5yZXNwb25zZXM7XG4gICAgdGhpcy5yZXBsYWNlQWxsID0gcHJvcHMucmVwbGFjZUFsbDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDYW1wYWlnbkV2ZW50UmVzcG9uc2VMaXN0UHJvcHMgPSB7XG4gIGV2ZW50UmVzcG9uc2U/OiBDYW1wYWlnbkV2ZW50UmVzcG9uc2VbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgQ2FtcGFpZ25FdmVudFJlc3BvbnNlTGlzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGV2ZW50UmVzcG9uc2U/OiBDYW1wYWlnbkV2ZW50UmVzcG9uc2VbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDYW1wYWlnbkV2ZW50UmVzcG9uc2VMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmV2ZW50UmVzcG9uc2UgPSBwcm9wcy5ldmVudFJlc3BvbnNlO1xuICAgIHRoaXMucmVwbGFjZUFsbCA9IHByb3BzLnJlcGxhY2VBbGw7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2FtcGFpZ25TZWFyY2hQcm9wcyA9IHtcbiAgYmFzaWM/OiBQbGF0Zm9ybUNvbW1vbi5DYW1wYWlnblNlYXJjaEJhc2ljO1xuICBjYW1wYWlnblJlY2lwaWVudEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbnRpdHlTZWFyY2hCYXNpYztcbiAgZmlsZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5GaWxlU2VhcmNoQmFzaWM7XG4gIG1lc3NhZ2VzSm9pbj86IFBsYXRmb3JtQ29tbW9uLk1lc3NhZ2VTZWFyY2hCYXNpYztcbiAgb3JpZ2luYXRpbmdMZWFkSm9pbj86IFBsYXRmb3JtQ29tbW9uLk9yaWdpbmF0aW5nTGVhZFNlYXJjaEJhc2ljO1xuICBwcm9tb3Rpb25Db2RlSm9pbj86IFBsYXRmb3JtQ29tbW9uLlByb21vdGlvbkNvZGVTZWFyY2hCYXNpYztcbiAgdHJhbnNhY3Rpb25Kb2luPzogUGxhdGZvcm1Db21tb24uVHJhbnNhY3Rpb25TZWFyY2hCYXNpYztcbiAgdXNlckpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaEJhc2ljO1xuICB1c2VyTm90ZXNKb2luPzogUGxhdGZvcm1Db21tb24uTm90ZVNlYXJjaEJhc2ljO1xuICBjdXN0b21TZWFyY2hKb2luPzogUGxhdGZvcm1Db21tb24uQ3VzdG9tU2VhcmNoSm9pbltdO1xufTtcblxuZXhwb3J0IGNsYXNzIENhbXBhaWduU2VhcmNoIGV4dGVuZHMgUGxhdGZvcm1Db3JlLlNlYXJjaFJlY29yZCB7XG4gIGJhc2ljPzogUGxhdGZvcm1Db21tb24uQ2FtcGFpZ25TZWFyY2hCYXNpYztcbiAgY2FtcGFpZ25SZWNpcGllbnRKb2luPzogUGxhdGZvcm1Db21tb24uRW50aXR5U2VhcmNoQmFzaWM7XG4gIGZpbGVKb2luPzogUGxhdGZvcm1Db21tb24uRmlsZVNlYXJjaEJhc2ljO1xuICBtZXNzYWdlc0pvaW4/OiBQbGF0Zm9ybUNvbW1vbi5NZXNzYWdlU2VhcmNoQmFzaWM7XG4gIG9yaWdpbmF0aW5nTGVhZEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5PcmlnaW5hdGluZ0xlYWRTZWFyY2hCYXNpYztcbiAgcHJvbW90aW9uQ29kZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5Qcm9tb3Rpb25Db2RlU2VhcmNoQmFzaWM7XG4gIHRyYW5zYWN0aW9uSm9pbj86IFBsYXRmb3JtQ29tbW9uLlRyYW5zYWN0aW9uU2VhcmNoQmFzaWM7XG4gIHVzZXJKb2luPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hCYXNpYztcbiAgdXNlck5vdGVzSm9pbj86IFBsYXRmb3JtQ29tbW9uLk5vdGVTZWFyY2hCYXNpYztcbiAgY3VzdG9tU2VhcmNoSm9pbj86IFBsYXRmb3JtQ29tbW9uLkN1c3RvbVNlYXJjaEpvaW5bXTtcbiAgY29uc3RydWN0b3IocHJvcHM6IENhbXBhaWduU2VhcmNoUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmJhc2ljID0gcHJvcHMuYmFzaWM7XG4gICAgdGhpcy5jYW1wYWlnblJlY2lwaWVudEpvaW4gPSBwcm9wcy5jYW1wYWlnblJlY2lwaWVudEpvaW47XG4gICAgdGhpcy5maWxlSm9pbiA9IHByb3BzLmZpbGVKb2luO1xuICAgIHRoaXMubWVzc2FnZXNKb2luID0gcHJvcHMubWVzc2FnZXNKb2luO1xuICAgIHRoaXMub3JpZ2luYXRpbmdMZWFkSm9pbiA9IHByb3BzLm9yaWdpbmF0aW5nTGVhZEpvaW47XG4gICAgdGhpcy5wcm9tb3Rpb25Db2RlSm9pbiA9IHByb3BzLnByb21vdGlvbkNvZGVKb2luO1xuICAgIHRoaXMudHJhbnNhY3Rpb25Kb2luID0gcHJvcHMudHJhbnNhY3Rpb25Kb2luO1xuICAgIHRoaXMudXNlckpvaW4gPSBwcm9wcy51c2VySm9pbjtcbiAgICB0aGlzLnVzZXJOb3Rlc0pvaW4gPSBwcm9wcy51c2VyTm90ZXNKb2luO1xuICAgIHRoaXMuY3VzdG9tU2VhcmNoSm9pbiA9IHByb3BzLmN1c3RvbVNlYXJjaEpvaW47XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2FtcGFpZ25BdWRpZW5jZVByb3BzID0ge1xuICBuYW1lPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG59ICYgUGxhdGZvcm1Db3JlLlJlY29yZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgQ2FtcGFpZ25BdWRpZW5jZSBleHRlbmRzIFBsYXRmb3JtQ29yZS5SZWNvcmQge1xuICBuYW1lPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDYW1wYWlnbkF1ZGllbmNlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLmlzSW5hY3RpdmUgPSBwcm9wcy5pc0luYWN0aXZlO1xuICAgIHRoaXMuaW50ZXJuYWxJZCA9IHByb3BzLmludGVybmFsSWQ7XG4gICAgdGhpcy5leHRlcm5hbElkID0gcHJvcHMuZXh0ZXJuYWxJZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDb3Vwb25Db2RlUHJvcHMgPSB7XG4gIHByb21vdGlvbjogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgY29kZTogc3RyaW5nO1xuICByZWNpcGllbnQ/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBkYXRlU2VudD86IHN0cmluZztcbiAgdXNlZD86IGJvb2xlYW47XG4gIHVzZUNvdW50PzogbnVtYmVyO1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xufSAmIFBsYXRmb3JtQ29yZS5SZWNvcmRQcm9wcztcblxuZXhwb3J0IGNsYXNzIENvdXBvbkNvZGUgZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuUmVjb3JkIHtcbiAgcHJvbW90aW9uOiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjb2RlOiBzdHJpbmc7XG4gIHJlY2lwaWVudD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGRhdGVTZW50Pzogc3RyaW5nO1xuICB1c2VkPzogYm9vbGVhbjtcbiAgdXNlQ291bnQ/OiBudW1iZXI7XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDb3Vwb25Db2RlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnByb21vdGlvbiA9IHByb3BzLnByb21vdGlvbjtcbiAgICB0aGlzLmNvZGUgPSBwcm9wcy5jb2RlO1xuICAgIHRoaXMucmVjaXBpZW50ID0gcHJvcHMucmVjaXBpZW50O1xuICAgIHRoaXMuZGF0ZVNlbnQgPSBwcm9wcy5kYXRlU2VudDtcbiAgICB0aGlzLnVzZWQgPSBwcm9wcy51c2VkO1xuICAgIHRoaXMudXNlQ291bnQgPSBwcm9wcy51c2VDb3VudDtcbiAgICB0aGlzLmludGVybmFsSWQgPSBwcm9wcy5pbnRlcm5hbElkO1xuICAgIHRoaXMuZXh0ZXJuYWxJZCA9IHByb3BzLmV4dGVybmFsSWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2FtcGFpZ25DaGFubmVsUHJvcHMgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGV2ZW50VHlwZT86IExpc3RzTWFya2V0aW5nVHlwZXMuQ2FtcGFpZ25DaGFubmVsRXZlbnRUeXBlO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG59ICYgUGxhdGZvcm1Db3JlLlJlY29yZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgQ2FtcGFpZ25DaGFubmVsIGV4dGVuZHMgUGxhdGZvcm1Db3JlLlJlY29yZCB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGV2ZW50VHlwZT86IExpc3RzTWFya2V0aW5nVHlwZXMuQ2FtcGFpZ25DaGFubmVsRXZlbnRUeXBlO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDYW1wYWlnbkNoYW5uZWxQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgdGhpcy5ldmVudFR5cGUgPSBwcm9wcy5ldmVudFR5cGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaXNJbmFjdGl2ZSA9IHByb3BzLmlzSW5hY3RpdmU7XG4gICAgdGhpcy5pbnRlcm5hbElkID0gcHJvcHMuaW50ZXJuYWxJZDtcbiAgICB0aGlzLmV4dGVybmFsSWQgPSBwcm9wcy5leHRlcm5hbElkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFByb21vdGlvbkNvZGVDdXJyZW5jeVByb3BzID0ge1xuICBjdXJyZW5jeT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIG1pbmltdW1PcmRlckFtb3VudD86IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjbGFzcyBQcm9tb3Rpb25Db2RlQ3VycmVuY3kgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBjdXJyZW5jeT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIG1pbmltdW1PcmRlckFtb3VudD86IG51bWJlcjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb21vdGlvbkNvZGVDdXJyZW5jeVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5jdXJyZW5jeSA9IHByb3BzLmN1cnJlbmN5O1xuICAgIHRoaXMubWluaW11bU9yZGVyQW1vdW50ID0gcHJvcHMubWluaW11bU9yZGVyQW1vdW50O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENhbXBhaWduU2VhcmNoRW5naW5lUHJvcHMgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBpc0luYWN0aXZlPzogYm9vbGVhbjtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgZXh0ZXJuYWxJZD86IHN0cmluZztcbn0gJiBQbGF0Zm9ybUNvcmUuUmVjb3JkUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBDYW1wYWlnblNlYXJjaEVuZ2luZSBleHRlbmRzIFBsYXRmb3JtQ29yZS5SZWNvcmQge1xuICBuYW1lPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDYW1wYWlnblNlYXJjaEVuZ2luZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgdGhpcy5pc0luYWN0aXZlID0gcHJvcHMuaXNJbmFjdGl2ZTtcbiAgICB0aGlzLmludGVybmFsSWQgPSBwcm9wcy5pbnRlcm5hbElkO1xuICAgIHRoaXMuZXh0ZXJuYWxJZCA9IHByb3BzLmV4dGVybmFsSWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2FtcGFpZ25PZmZlclByb3BzID0ge1xuICBuYW1lPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG59ICYgUGxhdGZvcm1Db3JlLlJlY29yZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgQ2FtcGFpZ25PZmZlciBleHRlbmRzIFBsYXRmb3JtQ29yZS5SZWNvcmQge1xuICBuYW1lPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDYW1wYWlnbk9mZmVyUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLmlzSW5hY3RpdmUgPSBwcm9wcy5pc0luYWN0aXZlO1xuICAgIHRoaXMuaW50ZXJuYWxJZCA9IHByb3BzLmludGVybmFsSWQ7XG4gICAgdGhpcy5leHRlcm5hbElkID0gcHJvcHMuZXh0ZXJuYWxJZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBQcm9tb3Rpb25Db2RlSXRlbXNMaXN0UHJvcHMgPSB7XG4gIGl0ZW1zPzogUHJvbW90aW9uQ29kZUl0ZW1zW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIFByb21vdGlvbkNvZGVJdGVtc0xpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBpdGVtcz86IFByb21vdGlvbkNvZGVJdGVtc1tdO1xuICByZXBsYWNlQWxsPzogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb21vdGlvbkNvZGVJdGVtc0xpc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuaXRlbXMgPSBwcm9wcy5pdGVtcztcbiAgICB0aGlzLnJlcGxhY2VBbGwgPSBwcm9wcy5yZXBsYWNlQWxsO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFByb21vdGlvbkNvZGVQYXJ0bmVyc0xpc3RQcm9wcyA9IHtcbiAgcGFydG5lcnM/OiBQcm9tb3Rpb25Db2RlUGFydG5lcnNbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgUHJvbW90aW9uQ29kZVBhcnRuZXJzTGlzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHBhcnRuZXJzPzogUHJvbW90aW9uQ29kZVBhcnRuZXJzW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvbW90aW9uQ29kZVBhcnRuZXJzTGlzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5wYXJ0bmVycyA9IHByb3BzLnBhcnRuZXJzO1xuICAgIHRoaXMucmVwbGFjZUFsbCA9IHByb3BzLnJlcGxhY2VBbGw7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ291cG9uQ29kZVNlYXJjaFJvd1Byb3BzID0ge1xuICBiYXNpYz86IFBsYXRmb3JtQ29tbW9uLkNvdXBvbkNvZGVTZWFyY2hSb3dCYXNpYztcbiAgdXNlckpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaFJvd0Jhc2ljO1xufTtcblxuZXhwb3J0IGNsYXNzIENvdXBvbkNvZGVTZWFyY2hSb3cgZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuU2VhcmNoUm93IHtcbiAgYmFzaWM/OiBQbGF0Zm9ybUNvbW1vbi5Db3Vwb25Db2RlU2VhcmNoUm93QmFzaWM7XG4gIHVzZXJKb2luPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hSb3dCYXNpYztcbiAgY29uc3RydWN0b3IocHJvcHM6IENvdXBvbkNvZGVTZWFyY2hSb3dQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuYmFzaWMgPSBwcm9wcy5iYXNpYztcbiAgICB0aGlzLnVzZXJKb2luID0gcHJvcHMudXNlckpvaW47XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ291cG9uQ29kZVNlYXJjaEFkdmFuY2VkUHJvcHMgPSB7XG4gIGNyaXRlcmlhPzogQ291cG9uQ29kZVNlYXJjaDtcbiAgY29sdW1ucz86IENvdXBvbkNvZGVTZWFyY2hSb3c7XG4gIHNhdmVkU2VhcmNoU2NyaXB0SWQ/OiBzdHJpbmc7XG4gIHNhdmVkU2VhcmNoSWQ/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgQ291cG9uQ29kZVNlYXJjaEFkdmFuY2VkIGV4dGVuZHMgUGxhdGZvcm1Db3JlLlNlYXJjaFJlY29yZCB7XG4gIGNyaXRlcmlhPzogQ291cG9uQ29kZVNlYXJjaDtcbiAgY29sdW1ucz86IENvdXBvbkNvZGVTZWFyY2hSb3c7XG4gIHNhdmVkU2VhcmNoU2NyaXB0SWQ/OiBzdHJpbmc7XG4gIHNhdmVkU2VhcmNoSWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDb3Vwb25Db2RlU2VhcmNoQWR2YW5jZWRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuY3JpdGVyaWEgPSBwcm9wcy5jcml0ZXJpYTtcbiAgICB0aGlzLmNvbHVtbnMgPSBwcm9wcy5jb2x1bW5zO1xuICAgIHRoaXMuc2F2ZWRTZWFyY2hTY3JpcHRJZCA9IHByb3BzLnNhdmVkU2VhcmNoU2NyaXB0SWQ7XG4gICAgdGhpcy5zYXZlZFNlYXJjaElkID0gcHJvcHMuc2F2ZWRTZWFyY2hJZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDYW1wYWlnbkV2ZW50UHJvcHMgPSB7XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGNhbXBhaWduR3JvdXA/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgc3Vic2NyaXB0aW9uPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgY2hhbm5lbD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGNvc3Q/OiBudW1iZXI7XG4gIHN0YXR1cz86IExpc3RzTWFya2V0aW5nVHlwZXMuQ2FtcGFpZ25DYW1wYWlnbkV2ZW50U3RhdHVzO1xuICBkYXRlU2NoZWR1bGVkPzogc3RyaW5nO1xuICBwcm9tb0NvZGU/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjdXN0b21GaWVsZExpc3Q/OiBQbGF0Zm9ybUNvcmUuQ3VzdG9tRmllbGRMaXN0O1xufTtcblxuZXhwb3J0IGNsYXNzIENhbXBhaWduRXZlbnQgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBjYW1wYWlnbkdyb3VwPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHN1YnNjcmlwdGlvbj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGNoYW5uZWw/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjb3N0PzogbnVtYmVyO1xuICBzdGF0dXM/OiBMaXN0c01hcmtldGluZ1R5cGVzLkNhbXBhaWduQ2FtcGFpZ25FdmVudFN0YXR1cztcbiAgZGF0ZVNjaGVkdWxlZD86IHN0cmluZztcbiAgcHJvbW9Db2RlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgY3VzdG9tRmllbGRMaXN0PzogUGxhdGZvcm1Db3JlLkN1c3RvbUZpZWxkTGlzdDtcbiAgY29uc3RydWN0b3IocHJvcHM6IENhbXBhaWduRXZlbnRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuaW50ZXJuYWxJZCA9IHByb3BzLmludGVybmFsSWQ7XG4gICAgdGhpcy5jYW1wYWlnbkdyb3VwID0gcHJvcHMuY2FtcGFpZ25Hcm91cDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBwcm9wcy5zdWJzY3JpcHRpb247XG4gICAgdGhpcy5jaGFubmVsID0gcHJvcHMuY2hhbm5lbDtcbiAgICB0aGlzLmNvc3QgPSBwcm9wcy5jb3N0O1xuICAgIHRoaXMuc3RhdHVzID0gcHJvcHMuc3RhdHVzO1xuICAgIHRoaXMuZGF0ZVNjaGVkdWxlZCA9IHByb3BzLmRhdGVTY2hlZHVsZWQ7XG4gICAgdGhpcy5wcm9tb0NvZGUgPSBwcm9wcy5wcm9tb0NvZGU7XG4gICAgdGhpcy5jdXN0b21GaWVsZExpc3QgPSBwcm9wcy5jdXN0b21GaWVsZExpc3Q7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUHJvbW90aW9uQ29kZVBhcnRuZXJzUHJvcHMgPSB7XG4gIHBhcnRuZXI/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjb2RlPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIFByb21vdGlvbkNvZGVQYXJ0bmVycyBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHBhcnRuZXI/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjb2RlPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvbW90aW9uQ29kZVBhcnRuZXJzUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnBhcnRuZXIgPSBwcm9wcy5wYXJ0bmVyO1xuICAgIHRoaXMuY29kZSA9IHByb3BzLmNvZGU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUHJvbW90aW9uQ29kZVByb3BzID0ge1xuICBpbXBsZW1lbnRhdGlvbj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGN1c3RvbUZvcm0/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICB1c2VUeXBlPzogTGlzdHNNYXJrZXRpbmdUeXBlcy5Qcm9tb3Rpb25Db2RlVXNlVHlwZTtcbiAgZGlzcGxheUxpbmVEaXNjb3VudHM/OiBib29sZWFuO1xuICBjb2RlPzogc3RyaW5nO1xuICBjb2RlUGF0dGVybj86IHN0cmluZztcbiAgbnVtYmVyVG9HZW5lcmF0ZT86IG51bWJlcjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGxvY2F0aW9uTGlzdD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWZMaXN0O1xuICBpc0luYWN0aXZlPzogYm9vbGVhbjtcbiAgZGlzY291bnQ/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICByYXRlPzogc3RyaW5nO1xuICBkaXNjb3VudFR5cGU/OiBib29sZWFuO1xuICBhcHBseURpc2NvdW50VG8/OiBMaXN0c01hcmtldGluZ1R5cGVzLlByb21vdGlvbkNvZGVBcHBseURpc2NvdW50VG87XG4gIGZyZWVTaGlwTWV0aG9kPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgbWluaW11bU9yZGVyQW1vdW50PzogbnVtYmVyO1xuICBzdGFydERhdGU/OiBzdHJpbmc7XG4gIGVuZERhdGU/OiBzdHJpbmc7XG4gIGlzUHVibGljPzogYm9vbGVhbjtcbiAgY3VycmVuY3lMaXN0PzogUHJvbW90aW9uQ29kZUN1cnJlbmN5TGlzdDtcbiAgZXhjbHVkZUl0ZW1zPzogYm9vbGVhbjtcbiAgbmFtZT86IHN0cmluZztcbiAgaXRlbXNMaXN0PzogUHJvbW90aW9uQ29kZUl0ZW1zTGlzdDtcbiAgcGFydG5lcnNMaXN0PzogUHJvbW90aW9uQ29kZVBhcnRuZXJzTGlzdDtcbiAgY3VzdG9tRmllbGRMaXN0PzogUGxhdGZvcm1Db3JlLkN1c3RvbUZpZWxkTGlzdDtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgZXh0ZXJuYWxJZD86IHN0cmluZztcbn0gJiBQbGF0Zm9ybUNvcmUuUmVjb3JkUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBQcm9tb3Rpb25Db2RlIGV4dGVuZHMgUGxhdGZvcm1Db3JlLlJlY29yZCB7XG4gIGltcGxlbWVudGF0aW9uPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgY3VzdG9tRm9ybT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHVzZVR5cGU/OiBMaXN0c01hcmtldGluZ1R5cGVzLlByb21vdGlvbkNvZGVVc2VUeXBlO1xuICBkaXNwbGF5TGluZURpc2NvdW50cz86IGJvb2xlYW47XG4gIGNvZGU/OiBzdHJpbmc7XG4gIGNvZGVQYXR0ZXJuPzogc3RyaW5nO1xuICBudW1iZXJUb0dlbmVyYXRlPzogbnVtYmVyO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgbG9jYXRpb25MaXN0PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZkxpc3Q7XG4gIGlzSW5hY3RpdmU/OiBib29sZWFuO1xuICBkaXNjb3VudD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHJhdGU/OiBzdHJpbmc7XG4gIGRpc2NvdW50VHlwZT86IGJvb2xlYW47XG4gIGFwcGx5RGlzY291bnRUbz86IExpc3RzTWFya2V0aW5nVHlwZXMuUHJvbW90aW9uQ29kZUFwcGx5RGlzY291bnRUbztcbiAgZnJlZVNoaXBNZXRob2Q/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBtaW5pbXVtT3JkZXJBbW91bnQ/OiBudW1iZXI7XG4gIHN0YXJ0RGF0ZT86IHN0cmluZztcbiAgZW5kRGF0ZT86IHN0cmluZztcbiAgaXNQdWJsaWM/OiBib29sZWFuO1xuICBjdXJyZW5jeUxpc3Q/OiBQcm9tb3Rpb25Db2RlQ3VycmVuY3lMaXN0O1xuICBleGNsdWRlSXRlbXM/OiBib29sZWFuO1xuICBuYW1lPzogc3RyaW5nO1xuICBpdGVtc0xpc3Q/OiBQcm9tb3Rpb25Db2RlSXRlbXNMaXN0O1xuICBwYXJ0bmVyc0xpc3Q/OiBQcm9tb3Rpb25Db2RlUGFydG5lcnNMaXN0O1xuICBjdXN0b21GaWVsZExpc3Q/OiBQbGF0Zm9ybUNvcmUuQ3VzdG9tRmllbGRMaXN0O1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvbW90aW9uQ29kZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5pbXBsZW1lbnRhdGlvbiA9IHByb3BzLmltcGxlbWVudGF0aW9uO1xuICAgIHRoaXMuY3VzdG9tRm9ybSA9IHByb3BzLmN1c3RvbUZvcm07XG4gICAgdGhpcy51c2VUeXBlID0gcHJvcHMudXNlVHlwZTtcbiAgICB0aGlzLmRpc3BsYXlMaW5lRGlzY291bnRzID0gcHJvcHMuZGlzcGxheUxpbmVEaXNjb3VudHM7XG4gICAgdGhpcy5jb2RlID0gcHJvcHMuY29kZTtcbiAgICB0aGlzLmNvZGVQYXR0ZXJuID0gcHJvcHMuY29kZVBhdHRlcm47XG4gICAgdGhpcy5udW1iZXJUb0dlbmVyYXRlID0gcHJvcHMubnVtYmVyVG9HZW5lcmF0ZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgdGhpcy5sb2NhdGlvbkxpc3QgPSBwcm9wcy5sb2NhdGlvbkxpc3Q7XG4gICAgdGhpcy5pc0luYWN0aXZlID0gcHJvcHMuaXNJbmFjdGl2ZTtcbiAgICB0aGlzLmRpc2NvdW50ID0gcHJvcHMuZGlzY291bnQ7XG4gICAgdGhpcy5yYXRlID0gcHJvcHMucmF0ZTtcbiAgICB0aGlzLmRpc2NvdW50VHlwZSA9IHByb3BzLmRpc2NvdW50VHlwZTtcbiAgICB0aGlzLmFwcGx5RGlzY291bnRUbyA9IHByb3BzLmFwcGx5RGlzY291bnRUbztcbiAgICB0aGlzLmZyZWVTaGlwTWV0aG9kID0gcHJvcHMuZnJlZVNoaXBNZXRob2Q7XG4gICAgdGhpcy5taW5pbXVtT3JkZXJBbW91bnQgPSBwcm9wcy5taW5pbXVtT3JkZXJBbW91bnQ7XG4gICAgdGhpcy5zdGFydERhdGUgPSBwcm9wcy5zdGFydERhdGU7XG4gICAgdGhpcy5lbmREYXRlID0gcHJvcHMuZW5kRGF0ZTtcbiAgICB0aGlzLmlzUHVibGljID0gcHJvcHMuaXNQdWJsaWM7XG4gICAgdGhpcy5jdXJyZW5jeUxpc3QgPSBwcm9wcy5jdXJyZW5jeUxpc3Q7XG4gICAgdGhpcy5leGNsdWRlSXRlbXMgPSBwcm9wcy5leGNsdWRlSXRlbXM7XG4gICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICB0aGlzLml0ZW1zTGlzdCA9IHByb3BzLml0ZW1zTGlzdDtcbiAgICB0aGlzLnBhcnRuZXJzTGlzdCA9IHByb3BzLnBhcnRuZXJzTGlzdDtcbiAgICB0aGlzLmN1c3RvbUZpZWxkTGlzdCA9IHByb3BzLmN1c3RvbUZpZWxkTGlzdDtcbiAgICB0aGlzLmludGVybmFsSWQgPSBwcm9wcy5pbnRlcm5hbElkO1xuICAgIHRoaXMuZXh0ZXJuYWxJZCA9IHByb3BzLmV4dGVybmFsSWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2FtcGFpZ25WZXJ0aWNhbFByb3BzID0ge1xuICBuYW1lPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG59ICYgUGxhdGZvcm1Db3JlLlJlY29yZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgQ2FtcGFpZ25WZXJ0aWNhbCBleHRlbmRzIFBsYXRmb3JtQ29yZS5SZWNvcmQge1xuICBuYW1lPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDYW1wYWlnblZlcnRpY2FsUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLmlzSW5hY3RpdmUgPSBwcm9wcy5pc0luYWN0aXZlO1xuICAgIHRoaXMuaW50ZXJuYWxJZCA9IHByb3BzLmludGVybmFsSWQ7XG4gICAgdGhpcy5leHRlcm5hbElkID0gcHJvcHMuZXh0ZXJuYWxJZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDYW1wYWlnbkZhbWlseVByb3BzID0ge1xuICBuYW1lPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG59ICYgUGxhdGZvcm1Db3JlLlJlY29yZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgQ2FtcGFpZ25GYW1pbHkgZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuUmVjb3JkIHtcbiAgbmFtZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGlzSW5hY3RpdmU/OiBib29sZWFuO1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQ2FtcGFpZ25GYW1pbHlQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaXNJbmFjdGl2ZSA9IHByb3BzLmlzSW5hY3RpdmU7XG4gICAgdGhpcy5pbnRlcm5hbElkID0gcHJvcHMuaW50ZXJuYWxJZDtcbiAgICB0aGlzLmV4dGVybmFsSWQgPSBwcm9wcy5leHRlcm5hbElkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENhbXBhaWduU2VhcmNoUm93UHJvcHMgPSB7XG4gIGJhc2ljPzogUGxhdGZvcm1Db21tb24uQ2FtcGFpZ25TZWFyY2hSb3dCYXNpYztcbiAgY2FtcGFpZ25SZWNpcGllbnRKb2luPzogUGxhdGZvcm1Db21tb24uRW50aXR5U2VhcmNoUm93QmFzaWM7XG4gIGZpbGVKb2luPzogUGxhdGZvcm1Db21tb24uRmlsZVNlYXJjaFJvd0Jhc2ljO1xuICBtZXNzYWdlc0pvaW4/OiBQbGF0Zm9ybUNvbW1vbi5NZXNzYWdlU2VhcmNoUm93QmFzaWM7XG4gIG9yaWdpbmF0aW5nTGVhZEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5PcmlnaW5hdGluZ0xlYWRTZWFyY2hSb3dCYXNpYztcbiAgcHJvbW90aW9uQ29kZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5Qcm9tb3Rpb25Db2RlU2VhcmNoUm93QmFzaWM7XG4gIHRyYW5zYWN0aW9uSm9pbj86IFBsYXRmb3JtQ29tbW9uLlRyYW5zYWN0aW9uU2VhcmNoUm93QmFzaWM7XG4gIHVzZXJKb2luPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hSb3dCYXNpYztcbiAgdXNlck5vdGVzSm9pbj86IFBsYXRmb3JtQ29tbW9uLk5vdGVTZWFyY2hSb3dCYXNpYztcbiAgY3VzdG9tU2VhcmNoSm9pbj86IFBsYXRmb3JtQ29tbW9uLkN1c3RvbVNlYXJjaFJvd0Jhc2ljW107XG59O1xuXG5leHBvcnQgY2xhc3MgQ2FtcGFpZ25TZWFyY2hSb3cgZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuU2VhcmNoUm93IHtcbiAgYmFzaWM/OiBQbGF0Zm9ybUNvbW1vbi5DYW1wYWlnblNlYXJjaFJvd0Jhc2ljO1xuICBjYW1wYWlnblJlY2lwaWVudEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbnRpdHlTZWFyY2hSb3dCYXNpYztcbiAgZmlsZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5GaWxlU2VhcmNoUm93QmFzaWM7XG4gIG1lc3NhZ2VzSm9pbj86IFBsYXRmb3JtQ29tbW9uLk1lc3NhZ2VTZWFyY2hSb3dCYXNpYztcbiAgb3JpZ2luYXRpbmdMZWFkSm9pbj86IFBsYXRmb3JtQ29tbW9uLk9yaWdpbmF0aW5nTGVhZFNlYXJjaFJvd0Jhc2ljO1xuICBwcm9tb3Rpb25Db2RlSm9pbj86IFBsYXRmb3JtQ29tbW9uLlByb21vdGlvbkNvZGVTZWFyY2hSb3dCYXNpYztcbiAgdHJhbnNhY3Rpb25Kb2luPzogUGxhdGZvcm1Db21tb24uVHJhbnNhY3Rpb25TZWFyY2hSb3dCYXNpYztcbiAgdXNlckpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaFJvd0Jhc2ljO1xuICB1c2VyTm90ZXNKb2luPzogUGxhdGZvcm1Db21tb24uTm90ZVNlYXJjaFJvd0Jhc2ljO1xuICBjdXN0b21TZWFyY2hKb2luPzogUGxhdGZvcm1Db21tb24uQ3VzdG9tU2VhcmNoUm93QmFzaWNbXTtcbiAgY29uc3RydWN0b3IocHJvcHM6IENhbXBhaWduU2VhcmNoUm93UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmJhc2ljID0gcHJvcHMuYmFzaWM7XG4gICAgdGhpcy5jYW1wYWlnblJlY2lwaWVudEpvaW4gPSBwcm9wcy5jYW1wYWlnblJlY2lwaWVudEpvaW47XG4gICAgdGhpcy5maWxlSm9pbiA9IHByb3BzLmZpbGVKb2luO1xuICAgIHRoaXMubWVzc2FnZXNKb2luID0gcHJvcHMubWVzc2FnZXNKb2luO1xuICAgIHRoaXMub3JpZ2luYXRpbmdMZWFkSm9pbiA9IHByb3BzLm9yaWdpbmF0aW5nTGVhZEpvaW47XG4gICAgdGhpcy5wcm9tb3Rpb25Db2RlSm9pbiA9IHByb3BzLnByb21vdGlvbkNvZGVKb2luO1xuICAgIHRoaXMudHJhbnNhY3Rpb25Kb2luID0gcHJvcHMudHJhbnNhY3Rpb25Kb2luO1xuICAgIHRoaXMudXNlckpvaW4gPSBwcm9wcy51c2VySm9pbjtcbiAgICB0aGlzLnVzZXJOb3Rlc0pvaW4gPSBwcm9wcy51c2VyTm90ZXNKb2luO1xuICAgIHRoaXMuY3VzdG9tU2VhcmNoSm9pbiA9IHByb3BzLmN1c3RvbVNlYXJjaEpvaW47XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2FtcGFpZ25Qcm9wcyA9IHtcbiAgY3VzdG9tRm9ybT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGNhbXBhaWduSWQ/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjYXRlZ29yeT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIG93bmVyPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgc3RhcnREYXRlPzogc3RyaW5nO1xuICBlbmREYXRlPzogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG4gIGJhc2VDb3N0PzogbnVtYmVyO1xuICBjb3N0PzogbnVtYmVyO1xuICBleHBlY3RlZFJldmVudWU/OiBudW1iZXI7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIGlzSW5hY3RpdmU/OiBib29sZWFuO1xuICBsb2NhbD86IGJvb2xlYW47XG4gIHRvdGFsUmV2ZW51ZT86IG51bWJlcjtcbiAgcm9pPzogbnVtYmVyO1xuICBwcm9maXQ/OiBudW1iZXI7XG4gIGNvc3RQZXJDdXN0b21lcj86IG51bWJlcjtcbiAgY29udkNvc3RQZXJDdXN0b21lcj86IG51bWJlcjtcbiAgY29udmVyc2lvbnM/OiBudW1iZXI7XG4gIGxlYWRzR2VuZXJhdGVkPzogbnVtYmVyO1xuICB1bmlxdWVWaXNpdG9ycz86IG51bWJlcjtcbiAgdmVydGljYWw/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBhdWRpZW5jZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIG9mZmVyPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgcHJvbW90aW9uQ29kZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGl0ZW1MaXN0PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZkxpc3Q7XG4gIGZhbWlseT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHNlYXJjaEVuZ2luZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGtleXdvcmQ/OiBzdHJpbmc7XG4gIGNhbXBhaWduRW1haWxMaXN0PzogQ2FtcGFpZ25FbWFpbExpc3Q7XG4gIGNhbXBhaWduRGlyZWN0TWFpbExpc3Q/OiBDYW1wYWlnbkRpcmVjdE1haWxMaXN0O1xuICBjYW1wYWlnbkV2ZW50TGlzdD86IENhbXBhaWduRXZlbnRMaXN0O1xuICBldmVudFJlc3BvbnNlTGlzdD86IENhbXBhaWduRXZlbnRSZXNwb25zZUxpc3Q7XG4gIGN1c3RvbUZpZWxkTGlzdD86IFBsYXRmb3JtQ29yZS5DdXN0b21GaWVsZExpc3Q7XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG59ICYgUGxhdGZvcm1Db3JlLlJlY29yZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgQ2FtcGFpZ24gZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuUmVjb3JkIHtcbiAgY3VzdG9tRm9ybT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGNhbXBhaWduSWQ/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjYXRlZ29yeT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIG93bmVyPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgc3RhcnREYXRlPzogc3RyaW5nO1xuICBlbmREYXRlPzogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG4gIGJhc2VDb3N0PzogbnVtYmVyO1xuICBjb3N0PzogbnVtYmVyO1xuICBleHBlY3RlZFJldmVudWU/OiBudW1iZXI7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIGlzSW5hY3RpdmU/OiBib29sZWFuO1xuICBsb2NhbD86IGJvb2xlYW47XG4gIHRvdGFsUmV2ZW51ZT86IG51bWJlcjtcbiAgcm9pPzogbnVtYmVyO1xuICBwcm9maXQ/OiBudW1iZXI7XG4gIGNvc3RQZXJDdXN0b21lcj86IG51bWJlcjtcbiAgY29udkNvc3RQZXJDdXN0b21lcj86IG51bWJlcjtcbiAgY29udmVyc2lvbnM/OiBudW1iZXI7XG4gIGxlYWRzR2VuZXJhdGVkPzogbnVtYmVyO1xuICB1bmlxdWVWaXNpdG9ycz86IG51bWJlcjtcbiAgdmVydGljYWw/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBhdWRpZW5jZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIG9mZmVyPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgcHJvbW90aW9uQ29kZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGl0ZW1MaXN0PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZkxpc3Q7XG4gIGZhbWlseT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHNlYXJjaEVuZ2luZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGtleXdvcmQ/OiBzdHJpbmc7XG4gIGNhbXBhaWduRW1haWxMaXN0PzogQ2FtcGFpZ25FbWFpbExpc3Q7XG4gIGNhbXBhaWduRGlyZWN0TWFpbExpc3Q/OiBDYW1wYWlnbkRpcmVjdE1haWxMaXN0O1xuICBjYW1wYWlnbkV2ZW50TGlzdD86IENhbXBhaWduRXZlbnRMaXN0O1xuICBldmVudFJlc3BvbnNlTGlzdD86IENhbXBhaWduRXZlbnRSZXNwb25zZUxpc3Q7XG4gIGN1c3RvbUZpZWxkTGlzdD86IFBsYXRmb3JtQ29yZS5DdXN0b21GaWVsZExpc3Q7XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDYW1wYWlnblByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5jdXN0b21Gb3JtID0gcHJvcHMuY3VzdG9tRm9ybTtcbiAgICB0aGlzLmNhbXBhaWduSWQgPSBwcm9wcy5jYW1wYWlnbklkO1xuICAgIHRoaXMudGl0bGUgPSBwcm9wcy50aXRsZTtcbiAgICB0aGlzLmNhdGVnb3J5ID0gcHJvcHMuY2F0ZWdvcnk7XG4gICAgdGhpcy5vd25lciA9IHByb3BzLm93bmVyO1xuICAgIHRoaXMuc3RhcnREYXRlID0gcHJvcHMuc3RhcnREYXRlO1xuICAgIHRoaXMuZW5kRGF0ZSA9IHByb3BzLmVuZERhdGU7XG4gICAgdGhpcy51cmwgPSBwcm9wcy51cmw7XG4gICAgdGhpcy5iYXNlQ29zdCA9IHByb3BzLmJhc2VDb3N0O1xuICAgIHRoaXMuY29zdCA9IHByb3BzLmNvc3Q7XG4gICAgdGhpcy5leHBlY3RlZFJldmVudWUgPSBwcm9wcy5leHBlY3RlZFJldmVudWU7XG4gICAgdGhpcy5tZXNzYWdlID0gcHJvcHMubWVzc2FnZTtcbiAgICB0aGlzLmlzSW5hY3RpdmUgPSBwcm9wcy5pc0luYWN0aXZlO1xuICAgIHRoaXMubG9jYWwgPSBwcm9wcy5sb2NhbDtcbiAgICB0aGlzLnRvdGFsUmV2ZW51ZSA9IHByb3BzLnRvdGFsUmV2ZW51ZTtcbiAgICB0aGlzLnJvaSA9IHByb3BzLnJvaTtcbiAgICB0aGlzLnByb2ZpdCA9IHByb3BzLnByb2ZpdDtcbiAgICB0aGlzLmNvc3RQZXJDdXN0b21lciA9IHByb3BzLmNvc3RQZXJDdXN0b21lcjtcbiAgICB0aGlzLmNvbnZDb3N0UGVyQ3VzdG9tZXIgPSBwcm9wcy5jb252Q29zdFBlckN1c3RvbWVyO1xuICAgIHRoaXMuY29udmVyc2lvbnMgPSBwcm9wcy5jb252ZXJzaW9ucztcbiAgICB0aGlzLmxlYWRzR2VuZXJhdGVkID0gcHJvcHMubGVhZHNHZW5lcmF0ZWQ7XG4gICAgdGhpcy51bmlxdWVWaXNpdG9ycyA9IHByb3BzLnVuaXF1ZVZpc2l0b3JzO1xuICAgIHRoaXMudmVydGljYWwgPSBwcm9wcy52ZXJ0aWNhbDtcbiAgICB0aGlzLmF1ZGllbmNlID0gcHJvcHMuYXVkaWVuY2U7XG4gICAgdGhpcy5vZmZlciA9IHByb3BzLm9mZmVyO1xuICAgIHRoaXMucHJvbW90aW9uQ29kZSA9IHByb3BzLnByb21vdGlvbkNvZGU7XG4gICAgdGhpcy5pdGVtTGlzdCA9IHByb3BzLml0ZW1MaXN0O1xuICAgIHRoaXMuZmFtaWx5ID0gcHJvcHMuZmFtaWx5O1xuICAgIHRoaXMuc2VhcmNoRW5naW5lID0gcHJvcHMuc2VhcmNoRW5naW5lO1xuICAgIHRoaXMua2V5d29yZCA9IHByb3BzLmtleXdvcmQ7XG4gICAgdGhpcy5jYW1wYWlnbkVtYWlsTGlzdCA9IHByb3BzLmNhbXBhaWduRW1haWxMaXN0O1xuICAgIHRoaXMuY2FtcGFpZ25EaXJlY3RNYWlsTGlzdCA9IHByb3BzLmNhbXBhaWduRGlyZWN0TWFpbExpc3Q7XG4gICAgdGhpcy5jYW1wYWlnbkV2ZW50TGlzdCA9IHByb3BzLmNhbXBhaWduRXZlbnRMaXN0O1xuICAgIHRoaXMuZXZlbnRSZXNwb25zZUxpc3QgPSBwcm9wcy5ldmVudFJlc3BvbnNlTGlzdDtcbiAgICB0aGlzLmN1c3RvbUZpZWxkTGlzdCA9IHByb3BzLmN1c3RvbUZpZWxkTGlzdDtcbiAgICB0aGlzLmludGVybmFsSWQgPSBwcm9wcy5pbnRlcm5hbElkO1xuICAgIHRoaXMuZXh0ZXJuYWxJZCA9IHByb3BzLmV4dGVybmFsSWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2FtcGFpZ25FdmVudExpc3RQcm9wcyA9IHtcbiAgY2FtcGFpZ25FdmVudD86IENhbXBhaWduRXZlbnRbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgQ2FtcGFpZ25FdmVudExpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBjYW1wYWlnbkV2ZW50PzogQ2FtcGFpZ25FdmVudFtdO1xuICByZXBsYWNlQWxsPzogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IocHJvcHM6IENhbXBhaWduRXZlbnRMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmNhbXBhaWduRXZlbnQgPSBwcm9wcy5jYW1wYWlnbkV2ZW50O1xuICAgIHRoaXMucmVwbGFjZUFsbCA9IHByb3BzLnJlcGxhY2VBbGw7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2FtcGFpZ25TZWFyY2hBZHZhbmNlZFByb3BzID0ge1xuICBjcml0ZXJpYT86IENhbXBhaWduU2VhcmNoO1xuICBjb2x1bW5zPzogQ2FtcGFpZ25TZWFyY2hSb3c7XG4gIHNhdmVkU2VhcmNoSWQ/OiBzdHJpbmc7XG4gIHNhdmVkU2VhcmNoU2NyaXB0SWQ/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgQ2FtcGFpZ25TZWFyY2hBZHZhbmNlZCBleHRlbmRzIFBsYXRmb3JtQ29yZS5TZWFyY2hSZWNvcmQge1xuICBjcml0ZXJpYT86IENhbXBhaWduU2VhcmNoO1xuICBjb2x1bW5zPzogQ2FtcGFpZ25TZWFyY2hSb3c7XG4gIHNhdmVkU2VhcmNoSWQ/OiBzdHJpbmc7XG4gIHNhdmVkU2VhcmNoU2NyaXB0SWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDYW1wYWlnblNlYXJjaEFkdmFuY2VkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmNyaXRlcmlhID0gcHJvcHMuY3JpdGVyaWE7XG4gICAgdGhpcy5jb2x1bW5zID0gcHJvcHMuY29sdW1ucztcbiAgICB0aGlzLnNhdmVkU2VhcmNoSWQgPSBwcm9wcy5zYXZlZFNlYXJjaElkO1xuICAgIHRoaXMuc2F2ZWRTZWFyY2hTY3JpcHRJZCA9IHByb3BzLnNhdmVkU2VhcmNoU2NyaXB0SWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUHJvbW90aW9uQ29kZVNlYXJjaFByb3BzID0ge1xuICBiYXNpYz86IFBsYXRmb3JtQ29tbW9uLlByb21vdGlvbkNvZGVTZWFyY2hCYXNpYztcbiAgdXNlckpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaEJhc2ljO1xuICBjdXN0b21TZWFyY2hKb2luPzogUGxhdGZvcm1Db21tb24uQ3VzdG9tU2VhcmNoSm9pbltdO1xufTtcblxuZXhwb3J0IGNsYXNzIFByb21vdGlvbkNvZGVTZWFyY2ggZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuU2VhcmNoUmVjb3JkIHtcbiAgYmFzaWM/OiBQbGF0Zm9ybUNvbW1vbi5Qcm9tb3Rpb25Db2RlU2VhcmNoQmFzaWM7XG4gIHVzZXJKb2luPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hCYXNpYztcbiAgY3VzdG9tU2VhcmNoSm9pbj86IFBsYXRmb3JtQ29tbW9uLkN1c3RvbVNlYXJjaEpvaW5bXTtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb21vdGlvbkNvZGVTZWFyY2hQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuYmFzaWMgPSBwcm9wcy5iYXNpYztcbiAgICB0aGlzLnVzZXJKb2luID0gcHJvcHMudXNlckpvaW47XG4gICAgdGhpcy5jdXN0b21TZWFyY2hKb2luID0gcHJvcHMuY3VzdG9tU2VhcmNoSm9pbjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDYW1wYWlnblJlc3BvbnNlUHJvcHMgPSB7XG4gIGVudGl0eT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGxlYWRTb3VyY2U/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjYW1wYWlnbkV2ZW50PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgY2FtcGFpZ25SZXNwb25zZURhdGU/OiBzdHJpbmc7XG4gIGNoYW5uZWw/OiBzdHJpbmc7XG4gIHJlc3BvbnNlPzogTGlzdHNNYXJrZXRpbmdUeXBlcy5DYW1wYWlnblJlc3BvbnNlUmVzcG9uc2U7XG4gIG5vdGU/OiBzdHJpbmc7XG4gIHJlc3BvbnNlc0xpc3Q/OiBDYW1wYWlnblJlc3BvbnNlUmVzcG9uc2VzTGlzdDtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgZXh0ZXJuYWxJZD86IHN0cmluZztcbn0gJiBQbGF0Zm9ybUNvcmUuUmVjb3JkUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBDYW1wYWlnblJlc3BvbnNlIGV4dGVuZHMgUGxhdGZvcm1Db3JlLlJlY29yZCB7XG4gIGVudGl0eT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGxlYWRTb3VyY2U/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjYW1wYWlnbkV2ZW50PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgY2FtcGFpZ25SZXNwb25zZURhdGU/OiBzdHJpbmc7XG4gIGNoYW5uZWw/OiBzdHJpbmc7XG4gIHJlc3BvbnNlPzogTGlzdHNNYXJrZXRpbmdUeXBlcy5DYW1wYWlnblJlc3BvbnNlUmVzcG9uc2U7XG4gIG5vdGU/OiBzdHJpbmc7XG4gIHJlc3BvbnNlc0xpc3Q/OiBDYW1wYWlnblJlc3BvbnNlUmVzcG9uc2VzTGlzdDtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgZXh0ZXJuYWxJZD86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IENhbXBhaWduUmVzcG9uc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZW50aXR5ID0gcHJvcHMuZW50aXR5O1xuICAgIHRoaXMubGVhZFNvdXJjZSA9IHByb3BzLmxlYWRTb3VyY2U7XG4gICAgdGhpcy5jYW1wYWlnbkV2ZW50ID0gcHJvcHMuY2FtcGFpZ25FdmVudDtcbiAgICB0aGlzLmNhbXBhaWduUmVzcG9uc2VEYXRlID0gcHJvcHMuY2FtcGFpZ25SZXNwb25zZURhdGU7XG4gICAgdGhpcy5jaGFubmVsID0gcHJvcHMuY2hhbm5lbDtcbiAgICB0aGlzLnJlc3BvbnNlID0gcHJvcHMucmVzcG9uc2U7XG4gICAgdGhpcy5ub3RlID0gcHJvcHMubm90ZTtcbiAgICB0aGlzLnJlc3BvbnNlc0xpc3QgPSBwcm9wcy5yZXNwb25zZXNMaXN0O1xuICAgIHRoaXMuaW50ZXJuYWxJZCA9IHByb3BzLmludGVybmFsSWQ7XG4gICAgdGhpcy5leHRlcm5hbElkID0gcHJvcHMuZXh0ZXJuYWxJZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDYW1wYWlnblN1YnNjcmlwdGlvblByb3BzID0ge1xuICBuYW1lPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgc3Vic2NyaWJlZEJ5RGVmYXVsdD86IGJvb2xlYW47XG4gIHVuc3Vic2NyaWJlZD86IGJvb2xlYW47XG4gIGV4dGVybmFsTmFtZT86IHN0cmluZztcbiAgZXh0ZXJuYWxEZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG59ICYgUGxhdGZvcm1Db3JlLlJlY29yZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgQ2FtcGFpZ25TdWJzY3JpcHRpb24gZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuUmVjb3JkIHtcbiAgbmFtZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHN1YnNjcmliZWRCeURlZmF1bHQ/OiBib29sZWFuO1xuICB1bnN1YnNjcmliZWQ/OiBib29sZWFuO1xuICBleHRlcm5hbE5hbWU/OiBzdHJpbmc7XG4gIGV4dGVybmFsRGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGlzSW5hY3RpdmU/OiBib29sZWFuO1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQ2FtcGFpZ25TdWJzY3JpcHRpb25Qcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuc3Vic2NyaWJlZEJ5RGVmYXVsdCA9IHByb3BzLnN1YnNjcmliZWRCeURlZmF1bHQ7XG4gICAgdGhpcy51bnN1YnNjcmliZWQgPSBwcm9wcy51bnN1YnNjcmliZWQ7XG4gICAgdGhpcy5leHRlcm5hbE5hbWUgPSBwcm9wcy5leHRlcm5hbE5hbWU7XG4gICAgdGhpcy5leHRlcm5hbERlc2NyaXB0aW9uID0gcHJvcHMuZXh0ZXJuYWxEZXNjcmlwdGlvbjtcbiAgICB0aGlzLmlzSW5hY3RpdmUgPSBwcm9wcy5pc0luYWN0aXZlO1xuICAgIHRoaXMuaW50ZXJuYWxJZCA9IHByb3BzLmludGVybmFsSWQ7XG4gICAgdGhpcy5leHRlcm5hbElkID0gcHJvcHMuZXh0ZXJuYWxJZDtcbiAgfVxufVxuIl19