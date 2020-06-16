import * as SoapTypes from "../soap-types";
import * as ListsAccountingTypes from "./lists_accounting_types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as PlatformCommonTypes from "./platform_common_types";

const mappingsName = "com_netsuite_webservices_lists_accounting_2019_2";

export class PaymentCard extends PlatformCore.Record {
  lastFourDigits?: string;
  issuerIdNumber?: string;
  entity?: PlatformCore.RecordRef;
  mask?: string;
  paymentMethod?: PlatformCore.RecordRef;
  memo?: string;
  state?: ListsAccountingTypes.PaymentInstrumentState;
  isInactive?: boolean;
  preserveOnFile?: boolean;
  isDefault?: boolean;
  cardNumber?: string;
  expirationDate?: SoapTypes.Dateish;
  cardBrand?: ListsAccountingTypes.PaymentCardBrand;
  cardType?: ListsAccountingTypes.PaymentCardType;
  nameOnCard?: string;
  street?: string;
  zipCode?: string;
  validFromDate?: SoapTypes.Dateish;
  issueNumber?: string;
  internalId?: string;
  externalId?: string;
  constructor(props: PaymentCard) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.lastFourDigits = props.lastFourDigits;
    this.issuerIdNumber = props.issuerIdNumber;
    this.entity = props.entity;
    this.mask = props.mask;
    this.paymentMethod = props.paymentMethod;
    this.memo = props.memo;
    this.state = props.state;
    this.isInactive = props.isInactive;
    this.preserveOnFile = props.preserveOnFile;
    this.isDefault = props.isDefault;
    this.cardNumber = props.cardNumber;
    this.expirationDate = props.expirationDate;
    this.cardBrand = props.cardBrand;
    this.cardType = props.cardType;
    this.nameOnCard = props.nameOnCard;
    this.street = props.street;
    this.zipCode = props.zipCode;
    this.validFromDate = props.validFromDate;
    this.issueNumber = props.issueNumber;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class InventoryNumberLocations extends SoapTypes.Base {
  location?: string;
  quantityOnHand?: number;
  quantityAvailable?: number;
  quantityOnOrder?: number;
  quantityInTransit?: number;
  constructor(props: InventoryNumberLocations) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.location = props.location;
    this.quantityOnHand = props.quantityOnHand;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityOnOrder = props.quantityOnOrder;
    this.quantityInTransit = props.quantityInTransit;
  }
}

export class OtherNameCategory extends PlatformCore.Record {
  name?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: OtherNameCategory) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class SalesRoleSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.SalesRoleSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: SalesRoleSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class MatrixOptionList extends SoapTypes.Base {
  matrixOption?: PlatformCore.SelectCustomFieldRef[];
  constructor(props: MatrixOptionList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.matrixOption = props.matrixOption;
  }
}

export class FairValuePriceSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.FairValuePriceSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: FairValuePriceSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class AccountLocalizations extends SoapTypes.Base {
  accountingContext?: PlatformCore.RecordRef;
  acctNumber?: string;
  acctName?: string;
  legalName?: string;
  locale?: PlatformCommonTypes.Language;
  constructor(props: AccountLocalizations) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.accountingContext = props.accountingContext;
    this.acctNumber = props.acctNumber;
    this.acctName = props.acctName;
    this.legalName = props.legalName;
    this.locale = props.locale;
  }
}

export class LotNumberedInventoryItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  matrixType?: ListsAccountingTypes.ItemMatrixType;
  includeChildren?: boolean;
  vendorName?: string;
  parent?: PlatformCore.RecordRef;
  isOnline?: boolean;
  isHazmatItem?: boolean;
  hazmatId?: string;
  hazmatShippingName?: string;
  hazmatHazardClass?: string;
  hazmatPackingGroup?: ListsAccountingTypes.HazmatPackingGroup;
  hazmatItemUnits?: string;
  hazmatItemUnitsQty?: number;
  isGcoCompliant?: boolean;
  offerSupport?: boolean;
  isInactive?: boolean;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  costingMethod?: ListsAccountingTypes.ItemCostingMethod;
  subsidiaryList?: PlatformCore.RecordRefList;
  purchaseDescription?: string;
  copyDescription?: boolean;
  currency?: string;
  cogsAccount?: PlatformCore.RecordRef;
  intercoCogsAccount?: PlatformCore.RecordRef;
  vendor?: PlatformCore.RecordRef;
  salesDescription?: string;
  incomeAccount?: PlatformCore.RecordRef;
  intercoIncomeAccount?: PlatformCore.RecordRef;
  issueProduct?: PlatformCore.RecordRef;
  taxSchedule?: PlatformCore.RecordRef;
  dropshipExpenseAccount?: PlatformCore.RecordRef;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revenueAllocationGroup?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  directRevenuePosting?: boolean;
  isTaxable?: boolean;
  assetAccount?: PlatformCore.RecordRef;
  matchBillToReceipt?: boolean;
  billQtyVarianceAcct?: PlatformCore.RecordRef;
  billPriceVarianceAcct?: PlatformCore.RecordRef;
  billExchRateVarianceAcct?: PlatformCore.RecordRef;
  gainLossAccount?: PlatformCore.RecordRef;
  shippingCost?: number;
  handlingCost?: number;
  weight?: number;
  costingMethodDisplay?: string;
  shippingCostUnits?: string;
  handlingCostUnits?: string;
  unitsType?: PlatformCore.RecordRef;
  stockUnit?: PlatformCore.RecordRef;
  purchaseUnit?: PlatformCore.RecordRef;
  saleUnit?: PlatformCore.RecordRef;
  minimumQuantityUnits?: string;
  safetyStockLevelUnits?: string;
  billingSchedule?: PlatformCore.RecordRef;
  trackLandedCost?: boolean;
  matrixItemNameTemplate?: string;
  isDropShipItem?: boolean;
  isSpecialOrderItem?: boolean;
  stockDescription?: string;
  deferredRevenueAccount?: PlatformCore.RecordRef;
  producer?: boolean;
  manufacturer?: string;
  revRecSchedule?: PlatformCore.RecordRef;
  mpn?: string;
  multManufactureAddr?: boolean;
  manufacturerAddr1?: string;
  manufacturerCity?: string;
  manufacturerState?: string;
  manufacturerZip?: string;
  countryOfManufacture?: PlatformCommonTypes.Country;
  defaultItemShipMethod?: PlatformCore.RecordRef;
  itemCarrier?: PlatformCommonTypes.ShippingCarrier;
  roundUpAsComponent?: boolean;
  purchaseOrderQuantity?: number;
  purchaseOrderAmount?: number;
  purchaseOrderQuantityDiff?: number;
  receiptQuantity?: number;
  receiptAmount?: number;
  receiptQuantityDiff?: number;
  itemShipMethodList?: PlatformCore.RecordRefList;
  manufacturerTaxId?: string;
  scheduleBNumber?: string;
  scheduleBQuantity?: number;
  scheduleBCode?: string;
  manufacturerTariff?: string;
  preferenceCriterion?: ListsAccountingTypes.ItemPreferenceCriterion;
  minimumQuantity?: number;
  enforceMinQtyInternally?: boolean;
  maximumQuantity?: number;
  shipPackage?: PlatformCore.RecordRef;
  shipIndividually?: boolean;
  softDescriptor?: PlatformCore.RecordRef;
  costCategory?: PlatformCore.RecordRef;
  pricesIncludeTax?: boolean;
  purchasePriceVarianceAcct?: PlatformCore.RecordRef;
  quantityPricingSchedule?: PlatformCore.RecordRef;
  useMarginalRates?: boolean;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  transferPrice?: number;
  overallQuantityPricingType?: ListsAccountingTypes.ItemOverallQuantityPricingType;
  pricingGroup?: PlatformCore.RecordRef;
  preferredLocation?: PlatformCore.RecordRef;
  isStorePickupAllowed?: boolean;
  vsoePrice?: number;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  itemRevenueCategory?: PlatformCore.RecordRef;
  cost?: number;
  costUnits?: string;
  reorderMultiple?: number;
  quantityReorderUnits?: string;
  totalValue?: number;
  useBins?: boolean;
  averageCost?: number;
  leadTime?: number;
  autoLeadTime?: boolean;
  lastPurchasePrice?: number;
  autoReorderPoint?: boolean;
  autoPreferredStockLevel?: boolean;
  preferredStockLevelDays?: number;
  safetyStockLevel?: number;
  safetyStockLevelDays?: number;
  backwardConsumptionDays?: number;
  seasonalDemand?: boolean;
  demandModifier?: number;
  storeDisplayName?: string;
  storeDisplayThumbnail?: PlatformCore.RecordRef;
  weightUnit?: ListsAccountingTypes.ItemWeightUnit;
  weightUnits?: string;
  storeDisplayImage?: PlatformCore.RecordRef;
  storeDescription?: string;
  storeDetailedDescription?: string;
  storeItemTemplate?: PlatformCore.RecordRef;
  pageTitle?: string;
  metaTagHtml?: string;
  excludeFromSitemap?: boolean;
  sitemapPriority?: string;
  searchKeywords?: string;
  isDonationItem?: boolean;
  showDefaultDonationAmount?: boolean;
  maxDonationAmount?: number;
  shoppingDotComCategory?: string;
  shopzillaCategoryId?: number;
  nexTagCategory?: string;
  quantityOnHand?: number;
  quantityOnHandUnits?: string;
  expirationDate?: SoapTypes.Dateish;
  lastInvtCountDate?: SoapTypes.Dateish;
  nextInvtCountDate?: SoapTypes.Dateish;
  invtCountInterval?: number;
  invtClassification?: ListsAccountingTypes.ItemInvtClassification;
  onHandValueMli?: number;
  serialNumbers?: string;
  reorderPoint?: number;
  preferredStockLevel?: number;
  reorderPointUnits?: string;
  defaultReturnCost?: number;
  supplyReplenishmentMethod?: PlatformCore.RecordRef;
  alternateDemandSourceItem?: PlatformCore.RecordRef;
  fixedLotSize?: number;
  periodicLotSizeType?: ListsAccountingTypes.PeriodicLotSizeType;
  supplyType?: PlatformCore.RecordRef;
  demandTimeFence?: number;
  supplyTimeFence?: number;
  rescheduleInDays?: number;
  rescheduleOutDays?: number;
  periodicLotSizeDays?: number;
  supplyLotSizingMethod?: PlatformCore.RecordRef;
  forwardConsumptionDays?: number;
  demandSource?: PlatformCore.RecordRef;
  quantityOnOrder?: number;
  preferredStockLevelUnits?: string;
  quantityCommitted?: number;
  quantityAvailable?: number;
  quantityBackOrdered?: number;
  purchaseTaxCode?: PlatformCore.RecordRef;
  rate?: number;
  salesTaxCode?: PlatformCore.RecordRef;
  dontShowPrice?: boolean;
  noPriceMessage?: string;
  outOfStockMessage?: string;
  onSpecial?: boolean;
  outOfStockBehavior?: ListsAccountingTypes.ItemOutOfStockBehavior;
  specialsDescription?: string;
  relatedItemsDescription?: string;
  featuredDescription?: string;
  productFeedList?: ProductFeedList;
  urlComponent?: string;
  itemOptionsList?: ItemOptionsList;
  matrixOptionList?: MatrixOptionList;
  itemVendorList?: ItemVendorList;
  pricingMatrix?: PricingMatrix;
  hierarchyVersionsList?: LotNumberedInventoryItemHierarchyVersionsList;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  itemNumberOptionsList?: PlatformCore.RecordRefList;
  numbersList?: LotNumberedInventoryItemNumbersList;
  binNumberList?: InventoryItemBinNumberList;
  siteCategoryList?: SiteCategoryList;
  locationsList?: LotNumberedInventoryItemLocationsList;
  translationsList?: TranslationList;
  presentationItemList?: PresentationItemList;
  futureHorizon?: number;
  consumptionUnit?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: LotNumberedInventoryItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.matrixType = props.matrixType;
    this.includeChildren = props.includeChildren;
    this.vendorName = props.vendorName;
    this.parent = props.parent;
    this.isOnline = props.isOnline;
    this.isHazmatItem = props.isHazmatItem;
    this.hazmatId = props.hazmatId;
    this.hazmatShippingName = props.hazmatShippingName;
    this.hazmatHazardClass = props.hazmatHazardClass;
    this.hazmatPackingGroup = props.hazmatPackingGroup;
    this.hazmatItemUnits = props.hazmatItemUnits;
    this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
    this.isGcoCompliant = props.isGcoCompliant;
    this.offerSupport = props.offerSupport;
    this.isInactive = props.isInactive;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.costingMethod = props.costingMethod;
    this.subsidiaryList = props.subsidiaryList;
    this.purchaseDescription = props.purchaseDescription;
    this.copyDescription = props.copyDescription;
    this.currency = props.currency;
    this.cogsAccount = props.cogsAccount;
    this.intercoCogsAccount = props.intercoCogsAccount;
    this.vendor = props.vendor;
    this.salesDescription = props.salesDescription;
    this.incomeAccount = props.incomeAccount;
    this.intercoIncomeAccount = props.intercoIncomeAccount;
    this.issueProduct = props.issueProduct;
    this.taxSchedule = props.taxSchedule;
    this.dropshipExpenseAccount = props.dropshipExpenseAccount;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.revRecForecastRule = props.revRecForecastRule;
    this.revenueAllocationGroup = props.revenueAllocationGroup;
    this.createRevenuePlansOn = props.createRevenuePlansOn;
    this.directRevenuePosting = props.directRevenuePosting;
    this.isTaxable = props.isTaxable;
    this.assetAccount = props.assetAccount;
    this.matchBillToReceipt = props.matchBillToReceipt;
    this.billQtyVarianceAcct = props.billQtyVarianceAcct;
    this.billPriceVarianceAcct = props.billPriceVarianceAcct;
    this.billExchRateVarianceAcct = props.billExchRateVarianceAcct;
    this.gainLossAccount = props.gainLossAccount;
    this.shippingCost = props.shippingCost;
    this.handlingCost = props.handlingCost;
    this.weight = props.weight;
    this.costingMethodDisplay = props.costingMethodDisplay;
    this.shippingCostUnits = props.shippingCostUnits;
    this.handlingCostUnits = props.handlingCostUnits;
    this.unitsType = props.unitsType;
    this.stockUnit = props.stockUnit;
    this.purchaseUnit = props.purchaseUnit;
    this.saleUnit = props.saleUnit;
    this.minimumQuantityUnits = props.minimumQuantityUnits;
    this.safetyStockLevelUnits = props.safetyStockLevelUnits;
    this.billingSchedule = props.billingSchedule;
    this.trackLandedCost = props.trackLandedCost;
    this.matrixItemNameTemplate = props.matrixItemNameTemplate;
    this.isDropShipItem = props.isDropShipItem;
    this.isSpecialOrderItem = props.isSpecialOrderItem;
    this.stockDescription = props.stockDescription;
    this.deferredRevenueAccount = props.deferredRevenueAccount;
    this.producer = props.producer;
    this.manufacturer = props.manufacturer;
    this.revRecSchedule = props.revRecSchedule;
    this.mpn = props.mpn;
    this.multManufactureAddr = props.multManufactureAddr;
    this.manufacturerAddr1 = props.manufacturerAddr1;
    this.manufacturerCity = props.manufacturerCity;
    this.manufacturerState = props.manufacturerState;
    this.manufacturerZip = props.manufacturerZip;
    this.countryOfManufacture = props.countryOfManufacture;
    this.defaultItemShipMethod = props.defaultItemShipMethod;
    this.itemCarrier = props.itemCarrier;
    this.roundUpAsComponent = props.roundUpAsComponent;
    this.purchaseOrderQuantity = props.purchaseOrderQuantity;
    this.purchaseOrderAmount = props.purchaseOrderAmount;
    this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
    this.receiptQuantity = props.receiptQuantity;
    this.receiptAmount = props.receiptAmount;
    this.receiptQuantityDiff = props.receiptQuantityDiff;
    this.itemShipMethodList = props.itemShipMethodList;
    this.manufacturerTaxId = props.manufacturerTaxId;
    this.scheduleBNumber = props.scheduleBNumber;
    this.scheduleBQuantity = props.scheduleBQuantity;
    this.scheduleBCode = props.scheduleBCode;
    this.manufacturerTariff = props.manufacturerTariff;
    this.preferenceCriterion = props.preferenceCriterion;
    this.minimumQuantity = props.minimumQuantity;
    this.enforceMinQtyInternally = props.enforceMinQtyInternally;
    this.maximumQuantity = props.maximumQuantity;
    this.shipPackage = props.shipPackage;
    this.shipIndividually = props.shipIndividually;
    this.softDescriptor = props.softDescriptor;
    this.costCategory = props.costCategory;
    this.pricesIncludeTax = props.pricesIncludeTax;
    this.purchasePriceVarianceAcct = props.purchasePriceVarianceAcct;
    this.quantityPricingSchedule = props.quantityPricingSchedule;
    this.useMarginalRates = props.useMarginalRates;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.transferPrice = props.transferPrice;
    this.overallQuantityPricingType = props.overallQuantityPricingType;
    this.pricingGroup = props.pricingGroup;
    this.preferredLocation = props.preferredLocation;
    this.isStorePickupAllowed = props.isStorePickupAllowed;
    this.vsoePrice = props.vsoePrice;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.itemRevenueCategory = props.itemRevenueCategory;
    this.cost = props.cost;
    this.costUnits = props.costUnits;
    this.reorderMultiple = props.reorderMultiple;
    this.quantityReorderUnits = props.quantityReorderUnits;
    this.totalValue = props.totalValue;
    this.useBins = props.useBins;
    this.averageCost = props.averageCost;
    this.leadTime = props.leadTime;
    this.autoLeadTime = props.autoLeadTime;
    this.lastPurchasePrice = props.lastPurchasePrice;
    this.autoReorderPoint = props.autoReorderPoint;
    this.autoPreferredStockLevel = props.autoPreferredStockLevel;
    this.preferredStockLevelDays = props.preferredStockLevelDays;
    this.safetyStockLevel = props.safetyStockLevel;
    this.safetyStockLevelDays = props.safetyStockLevelDays;
    this.backwardConsumptionDays = props.backwardConsumptionDays;
    this.seasonalDemand = props.seasonalDemand;
    this.demandModifier = props.demandModifier;
    this.storeDisplayName = props.storeDisplayName;
    this.storeDisplayThumbnail = props.storeDisplayThumbnail;
    this.weightUnit = props.weightUnit;
    this.weightUnits = props.weightUnits;
    this.storeDisplayImage = props.storeDisplayImage;
    this.storeDescription = props.storeDescription;
    this.storeDetailedDescription = props.storeDetailedDescription;
    this.storeItemTemplate = props.storeItemTemplate;
    this.pageTitle = props.pageTitle;
    this.metaTagHtml = props.metaTagHtml;
    this.excludeFromSitemap = props.excludeFromSitemap;
    this.sitemapPriority = props.sitemapPriority;
    this.searchKeywords = props.searchKeywords;
    this.isDonationItem = props.isDonationItem;
    this.showDefaultDonationAmount = props.showDefaultDonationAmount;
    this.maxDonationAmount = props.maxDonationAmount;
    this.shoppingDotComCategory = props.shoppingDotComCategory;
    this.shopzillaCategoryId = props.shopzillaCategoryId;
    this.nexTagCategory = props.nexTagCategory;
    this.quantityOnHand = props.quantityOnHand;
    this.quantityOnHandUnits = props.quantityOnHandUnits;
    this.expirationDate = props.expirationDate;
    this.lastInvtCountDate = props.lastInvtCountDate;
    this.nextInvtCountDate = props.nextInvtCountDate;
    this.invtCountInterval = props.invtCountInterval;
    this.invtClassification = props.invtClassification;
    this.onHandValueMli = props.onHandValueMli;
    this.serialNumbers = props.serialNumbers;
    this.reorderPoint = props.reorderPoint;
    this.preferredStockLevel = props.preferredStockLevel;
    this.reorderPointUnits = props.reorderPointUnits;
    this.defaultReturnCost = props.defaultReturnCost;
    this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
    this.alternateDemandSourceItem = props.alternateDemandSourceItem;
    this.fixedLotSize = props.fixedLotSize;
    this.periodicLotSizeType = props.periodicLotSizeType;
    this.supplyType = props.supplyType;
    this.demandTimeFence = props.demandTimeFence;
    this.supplyTimeFence = props.supplyTimeFence;
    this.rescheduleInDays = props.rescheduleInDays;
    this.rescheduleOutDays = props.rescheduleOutDays;
    this.periodicLotSizeDays = props.periodicLotSizeDays;
    this.supplyLotSizingMethod = props.supplyLotSizingMethod;
    this.forwardConsumptionDays = props.forwardConsumptionDays;
    this.demandSource = props.demandSource;
    this.quantityOnOrder = props.quantityOnOrder;
    this.preferredStockLevelUnits = props.preferredStockLevelUnits;
    this.quantityCommitted = props.quantityCommitted;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityBackOrdered = props.quantityBackOrdered;
    this.purchaseTaxCode = props.purchaseTaxCode;
    this.rate = props.rate;
    this.salesTaxCode = props.salesTaxCode;
    this.dontShowPrice = props.dontShowPrice;
    this.noPriceMessage = props.noPriceMessage;
    this.outOfStockMessage = props.outOfStockMessage;
    this.onSpecial = props.onSpecial;
    this.outOfStockBehavior = props.outOfStockBehavior;
    this.specialsDescription = props.specialsDescription;
    this.relatedItemsDescription = props.relatedItemsDescription;
    this.featuredDescription = props.featuredDescription;
    this.productFeedList = props.productFeedList;
    this.urlComponent = props.urlComponent;
    this.itemOptionsList = props.itemOptionsList;
    this.matrixOptionList = props.matrixOptionList;
    this.itemVendorList = props.itemVendorList;
    this.pricingMatrix = props.pricingMatrix;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.itemNumberOptionsList = props.itemNumberOptionsList;
    this.numbersList = props.numbersList;
    this.binNumberList = props.binNumberList;
    this.siteCategoryList = props.siteCategoryList;
    this.locationsList = props.locationsList;
    this.translationsList = props.translationsList;
    this.presentationItemList = props.presentationItemList;
    this.futureHorizon = props.futureHorizon;
    this.consumptionUnit = props.consumptionUnit;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class PricingMatrix extends SoapTypes.Base {
  pricing?: Pricing[];
  replaceAll?: boolean;
  constructor(props: PricingMatrix) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.pricing = props.pricing;
    this.replaceAll = props.replaceAll;
  }
}

export class UnitsType extends PlatformCore.Record {
  name?: string;
  isInactive?: boolean;
  uomList?: UnitsTypeUomList;
  internalId?: string;
  externalId?: string;
  constructor(props: UnitsType) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.isInactive = props.isInactive;
    this.uomList = props.uomList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ItemRevision extends PlatformCore.Record {
  item?: PlatformCore.RecordRef;
  name?: string;
  effectiveDate?: SoapTypes.Dateish;
  obsoleteDate?: SoapTypes.Dateish;
  memo?: string;
  inactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: ItemRevision) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.name = props.name;
    this.effectiveDate = props.effectiveDate;
    this.obsoleteDate = props.obsoleteDate;
    this.memo = props.memo;
    this.inactive = props.inactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class OtherChargePurchaseItemHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: OtherChargePurchaseItemHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class SerializedAssemblyItemBillOfMaterialsList extends SoapTypes.Base {
  serializedAssemblyItemBillOfMaterials?: SerializedAssemblyItemBillOfMaterials[];
  replaceAll?: boolean;
  constructor(props: SerializedAssemblyItemBillOfMaterialsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.serializedAssemblyItemBillOfMaterials = props.serializedAssemblyItemBillOfMaterials;
    this.replaceAll = props.replaceAll;
  }
}

export class LocationSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: LocationSearch;
  columns?: LocationSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: LocationSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class BomSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.BomSearchBasic;
  assemblyItemJoin?: PlatformCommon.AssemblyItemBomSearchBasic;
  revisionJoin?: PlatformCommon.BomRevisionSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: BomSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.assemblyItemJoin = props.assemblyItemJoin;
    this.revisionJoin = props.revisionJoin;
    this.transactionJoin = props.transactionJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class RevRecTemplateSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: RevRecTemplateSearch;
  columns?: RevRecTemplateSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: RevRecTemplateSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class AccountingPeriodFiscalCalendarsList extends SoapTypes.Base {
  accountingPeriodFiscalCalendars?: AccountingPeriodFiscalCalendars[];
  replaceAll?: boolean;
  constructor(props: AccountingPeriodFiscalCalendarsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.accountingPeriodFiscalCalendars = props.accountingPeriodFiscalCalendars;
    this.replaceAll = props.replaceAll;
  }
}

export class Location extends PlatformCore.Record {
  name?: string;
  parent?: PlatformCore.RecordRef;
  includeChildren?: boolean;
  subsidiaryList?: PlatformCore.RecordRefList;
  isInactive?: boolean;
  tranPrefix?: string;
  mainAddress?: PlatformCommon.Address;
  returnAddress?: PlatformCommon.Address;
  locationType?: ListsAccountingTypes.LocationType;
  timeZone?: ListsAccountingTypes.LocationTimeZone;
  latitude?: number;
  longitude?: number;
  logo?: PlatformCore.RecordRef;
  useBins?: boolean;
  makeInventoryAvailable?: boolean;
  makeInventoryAvailableStore?: boolean;
  geolocationMethod?: ListsAccountingTypes.LocationGeolocationMethod;
  autoAssignmentRegionSetting?: ListsAccountingTypes.LocationAutoAssignmentRegionSetting;
  nextPickupCutOffTime?: SoapTypes.Dateish;
  bufferStock?: number;
  allowStorePickup?: boolean;
  storePickupBufferStock?: number;
  dailyShippingCapacity?: number;
  totalShippingCapacity?: number;
  includeLocationRegionsList?: LocationRegionsList;
  excludeLocationRegionsList?: LocationRegionsList;
  businessHoursList?: LocationBusinessHoursList;
  classTranslationList?: ClassTranslationList;
  includeInControlTower?: boolean;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Location) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.parent = props.parent;
    this.includeChildren = props.includeChildren;
    this.subsidiaryList = props.subsidiaryList;
    this.isInactive = props.isInactive;
    this.tranPrefix = props.tranPrefix;
    this.mainAddress = props.mainAddress;
    this.returnAddress = props.returnAddress;
    this.locationType = props.locationType;
    this.timeZone = props.timeZone;
    this.latitude = props.latitude;
    this.longitude = props.longitude;
    this.logo = props.logo;
    this.useBins = props.useBins;
    this.makeInventoryAvailable = props.makeInventoryAvailable;
    this.makeInventoryAvailableStore = props.makeInventoryAvailableStore;
    this.geolocationMethod = props.geolocationMethod;
    this.autoAssignmentRegionSetting = props.autoAssignmentRegionSetting;
    this.nextPickupCutOffTime = props.nextPickupCutOffTime;
    this.bufferStock = props.bufferStock;
    this.allowStorePickup = props.allowStorePickup;
    this.storePickupBufferStock = props.storePickupBufferStock;
    this.dailyShippingCapacity = props.dailyShippingCapacity;
    this.totalShippingCapacity = props.totalShippingCapacity;
    this.includeLocationRegionsList = props.includeLocationRegionsList;
    this.excludeLocationRegionsList = props.excludeLocationRegionsList;
    this.businessHoursList = props.businessHoursList;
    this.classTranslationList = props.classTranslationList;
    this.includeInControlTower = props.includeInControlTower;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class Nexus extends PlatformCore.Record {
  country?: PlatformCommonTypes.Country;
  state?: PlatformCore.RecordRef;
  taxAgency?: PlatformCore.RecordRef;
  taxAgencyPst?: PlatformCore.RecordRef;
  taxCode?: PlatformCore.RecordRef;
  description?: string;
  parentNexus?: PlatformCore.RecordRef;
  isInactive?: boolean;
  taxDateFromFulfillment?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: Nexus) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.country = props.country;
    this.state = props.state;
    this.taxAgency = props.taxAgency;
    this.taxAgencyPst = props.taxAgencyPst;
    this.taxCode = props.taxCode;
    this.description = props.description;
    this.parentNexus = props.parentNexus;
    this.isInactive = props.isInactive;
    this.taxDateFromFulfillment = props.taxDateFromFulfillment;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ExpenseCategoryRatesList extends SoapTypes.Base {
  expenseCategoryRates?: ExpenseCategoryRates[];
  replaceAll?: boolean;
  constructor(props: ExpenseCategoryRatesList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.expenseCategoryRates = props.expenseCategoryRates;
    this.replaceAll = props.replaceAll;
  }
}

export class TermSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.TermSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: TermSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class AssemblyItemBillOfMaterialsList extends SoapTypes.Base {
  assemblyItemBillOfMaterials?: AssemblyItemBillOfMaterials[];
  replaceAll?: boolean;
  constructor(props: AssemblyItemBillOfMaterialsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.assemblyItemBillOfMaterials = props.assemblyItemBillOfMaterials;
    this.replaceAll = props.replaceAll;
  }
}

export class TaxTypeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: TaxTypeSearch;
  columns?: TaxTypeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: TaxTypeSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class RevRecSchedule extends PlatformCore.Record {
  name?: string;
  amortizationType?: ListsAccountingTypes.RevRecScheduleAmortizationType;
  recurrenceType?: ListsAccountingTypes.RevRecScheduleRecurrenceType;
  recogIntervalSrc?: ListsAccountingTypes.RevRecScheduleRecogIntervalSrc;
  amortizationPeriod?: number;
  periodOffset?: number;
  revRecOffset?: number;
  initialAmount?: number;
  isInactive?: boolean;
  recurrenceList?: RevRecScheduleRecurrenceList;
  internalId?: string;
  externalId?: string;
  constructor(props: RevRecSchedule) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.amortizationType = props.amortizationType;
    this.recurrenceType = props.recurrenceType;
    this.recogIntervalSrc = props.recogIntervalSrc;
    this.amortizationPeriod = props.amortizationPeriod;
    this.periodOffset = props.periodOffset;
    this.revRecOffset = props.revRecOffset;
    this.initialAmount = props.initialAmount;
    this.isInactive = props.isInactive;
    this.recurrenceList = props.recurrenceList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CustomerCategorySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CustomerCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: CustomerCategorySearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class PaymentMethodVisuals extends SoapTypes.Base {
  flags?: string;
  location?: string;
  constructor(props: PaymentMethodVisuals) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.flags = props.flags;
    this.location = props.location;
  }
}

export class OtherNameCategorySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: OtherNameCategorySearch;
  columns?: OtherNameCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: OtherNameCategorySearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class BillingScheduleRecurrenceList extends SoapTypes.Base {
  billingScheduleRecurrence?: BillingScheduleRecurrence[];
  replaceAll?: boolean;
  constructor(props: BillingScheduleRecurrenceList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.billingScheduleRecurrence = props.billingScheduleRecurrence;
    this.replaceAll = props.replaceAll;
  }
}

export class GiftCertificateSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: GiftCertificateSearch;
  columns?: GiftCertificateSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: GiftCertificateSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class SubtotalItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  displayName?: string;
  issueProduct?: PlatformCore.RecordRef;
  description?: string;
  includeChildren?: boolean;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  isInactive?: boolean;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiaryList?: PlatformCore.RecordRefList;
  translationsList?: TranslationList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: SubtotalItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.displayName = props.displayName;
    this.issueProduct = props.issueProduct;
    this.description = props.description;
    this.includeChildren = props.includeChildren;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.isInactive = props.isInactive;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiaryList = props.subsidiaryList;
    this.translationsList = props.translationsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class TaxGroup extends PlatformCore.Record {
  itemId?: string;
  description?: string;
  state?: string;
  subsidiaryList?: PlatformCore.RecordRefList;
  taxitem1?: PlatformCore.RecordRef;
  unitprice1?: string;
  taxitem2?: PlatformCore.RecordRef;
  unitprice2?: string;
  piggyback?: boolean;
  isInactive?: boolean;
  rate?: number;
  taxType?: PlatformCore.RecordRef;
  includeChildren?: boolean;
  county?: string;
  city?: string;
  zip?: string;
  nexusCountry?: PlatformCore.RecordRef;
  isDefault?: boolean;
  taxItemList?: TaxGroupTaxItemList;
  internalId?: string;
  externalId?: string;
  constructor(props: TaxGroup) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.itemId = props.itemId;
    this.description = props.description;
    this.state = props.state;
    this.subsidiaryList = props.subsidiaryList;
    this.taxitem1 = props.taxitem1;
    this.unitprice1 = props.unitprice1;
    this.taxitem2 = props.taxitem2;
    this.unitprice2 = props.unitprice2;
    this.piggyback = props.piggyback;
    this.isInactive = props.isInactive;
    this.rate = props.rate;
    this.taxType = props.taxType;
    this.includeChildren = props.includeChildren;
    this.county = props.county;
    this.city = props.city;
    this.zip = props.zip;
    this.nexusCountry = props.nexusCountry;
    this.isDefault = props.isDefault;
    this.taxItemList = props.taxItemList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class PartnerCategory extends PlatformCore.Record {
  name?: string;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: PartnerCategory) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.parent = props.parent;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class RevRecScheduleSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.RevRecScheduleSearchBasic;
  appliedToTransactionJoin?: PlatformCommon.TransactionSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: RevRecScheduleSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.appliedToTransactionJoin = props.appliedToTransactionJoin;
    this.customerJoin = props.customerJoin;
    this.itemJoin = props.itemJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
  }
}

export class WinLossReasonSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: WinLossReasonSearch;
  columns?: WinLossReasonSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: WinLossReasonSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class InventoryItemBinNumberList extends SoapTypes.Base {
  binNumber?: InventoryItemBinNumber[];
  replaceAll?: boolean;
  constructor(props: InventoryItemBinNumberList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.binNumber = props.binNumber;
    this.replaceAll = props.replaceAll;
  }
}

export class PaymentMethodSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.PaymentMethodSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: PaymentMethodSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class LocationBusinessHoursList extends SoapTypes.Base {
  locationBusinessHours?: LocationBusinessHours[];
  replaceAll?: boolean;
  constructor(props: LocationBusinessHoursList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.locationBusinessHours = props.locationBusinessHours;
    this.replaceAll = props.replaceAll;
  }
}

export class OtherChargePurchaseItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  purchaseDescription?: string;
  manufacturingChargeItem?: boolean;
  cost?: number;
  costUnits?: string;
  expenseAccount?: PlatformCore.RecordRef;
  isTaxable?: boolean;
  matrixType?: ListsAccountingTypes.ItemMatrixType;
  unitsType?: PlatformCore.RecordRef;
  purchaseUnit?: PlatformCore.RecordRef;
  includeChildren?: boolean;
  issueProduct?: PlatformCore.RecordRef;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  vendorName?: string;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  matrixItemNameTemplate?: string;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  subsidiaryList?: PlatformCore.RecordRefList;
  location?: PlatformCore.RecordRef;
  taxSchedule?: PlatformCore.RecordRef;
  deferralAccount?: PlatformCore.RecordRef;
  amortizationTemplate?: PlatformCore.RecordRef;
  residual?: string;
  amortizationPeriod?: number;
  isFulfillable?: boolean;
  generateAccruals?: boolean;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  costCategory?: PlatformCore.RecordRef;
  overheadType?: ListsAccountingTypes.ItemOverheadType;
  purchaseOrderQuantity?: number;
  purchaseOrderAmount?: number;
  purchaseOrderQuantityDiff?: number;
  receiptQuantity?: number;
  receiptAmount?: number;
  receiptQuantityDiff?: number;
  currency?: string;
  itemOptionsList?: ItemOptionsList;
  matrixOptionList?: MatrixOptionList;
  itemVendorList?: ItemVendorList;
  purchaseTaxCode?: PlatformCore.RecordRef;
  salesTaxCode?: PlatformCore.RecordRef;
  translationsList?: TranslationList;
  vendor?: PlatformCore.RecordRef;
  hierarchyVersionsList?: OtherChargePurchaseItemHierarchyVersionsList;
  consumptionUnit?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: OtherChargePurchaseItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.purchaseDescription = props.purchaseDescription;
    this.manufacturingChargeItem = props.manufacturingChargeItem;
    this.cost = props.cost;
    this.costUnits = props.costUnits;
    this.expenseAccount = props.expenseAccount;
    this.isTaxable = props.isTaxable;
    this.matrixType = props.matrixType;
    this.unitsType = props.unitsType;
    this.purchaseUnit = props.purchaseUnit;
    this.includeChildren = props.includeChildren;
    this.issueProduct = props.issueProduct;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.vendorName = props.vendorName;
    this.parent = props.parent;
    this.isInactive = props.isInactive;
    this.matrixItemNameTemplate = props.matrixItemNameTemplate;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.subsidiaryList = props.subsidiaryList;
    this.location = props.location;
    this.taxSchedule = props.taxSchedule;
    this.deferralAccount = props.deferralAccount;
    this.amortizationTemplate = props.amortizationTemplate;
    this.residual = props.residual;
    this.amortizationPeriod = props.amortizationPeriod;
    this.isFulfillable = props.isFulfillable;
    this.generateAccruals = props.generateAccruals;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.costCategory = props.costCategory;
    this.overheadType = props.overheadType;
    this.purchaseOrderQuantity = props.purchaseOrderQuantity;
    this.purchaseOrderAmount = props.purchaseOrderAmount;
    this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
    this.receiptQuantity = props.receiptQuantity;
    this.receiptAmount = props.receiptAmount;
    this.receiptQuantityDiff = props.receiptQuantityDiff;
    this.currency = props.currency;
    this.itemOptionsList = props.itemOptionsList;
    this.matrixOptionList = props.matrixOptionList;
    this.itemVendorList = props.itemVendorList;
    this.purchaseTaxCode = props.purchaseTaxCode;
    this.salesTaxCode = props.salesTaxCode;
    this.translationsList = props.translationsList;
    this.vendor = props.vendor;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.consumptionUnit = props.consumptionUnit;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ItemGroupHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: ItemGroupHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class ClassTranslation extends SoapTypes.Base {
  locale?: string;
  language?: string;
  name?: string;
  constructor(props: ClassTranslation) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.locale = props.locale;
    this.language = props.language;
    this.name = props.name;
  }
}

export class CustomerMessage extends PlatformCore.Record {
  name?: string;
  description?: string;
  preferred?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CustomerMessage) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.description = props.description;
    this.preferred = props.preferred;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ExpenseCategorySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ExpenseCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: ExpenseCategorySearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class AssemblyItemHierarchyVersionsList extends SoapTypes.Base {
  assemblyItemHierarchyVersions?: AssemblyItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: AssemblyItemHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.assemblyItemHierarchyVersions = props.assemblyItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomerCategory extends PlatformCore.Record {
  name?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CustomerCategory) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class BudgetCategory extends PlatformCore.Record {
  name?: string;
  budgetType?: boolean;
  isInactive?: boolean;
  internalId?: string;
  constructor(props: BudgetCategory) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.budgetType = props.budgetType;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
  }
}

export class BillingScheduleSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.BillingScheduleSearchRowBasic;
  constructor(props: BillingScheduleSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
  }
}

export class Subsidiary extends PlatformCore.Record {
  name?: string;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  showSubsidiaryName?: boolean;
  url?: string;
  logo?: PlatformCore.RecordRef;
  tranPrefix?: string;
  pageLogo?: PlatformCore.RecordRef;
  state?: string;
  country?: PlatformCommonTypes.Country;
  mainAddress?: PlatformCommon.Address;
  shippingAddress?: PlatformCommon.Address;
  returnAddress?: PlatformCommon.Address;
  legalName?: string;
  isElimination?: boolean;
  fiscalCalendar?: PlatformCore.RecordRef;
  taxFiscalCalendar?: PlatformCore.RecordRef;
  allowPayroll?: boolean;
  email?: string;
  currency?: PlatformCore.RecordRef;
  purchaseOrderQuantity?: number;
  purchaseOrderAmount?: number;
  purchaseOrderQuantityDiff?: number;
  receiptQuantity?: number;
  receiptAmount?: number;
  receiptQuantityDiff?: number;
  fax?: string;
  edition?: string;
  federalIdNumber?: string;
  addrLanguage?: string;
  nonConsol?: string;
  consol?: string;
  state1TaxNumber?: string;
  taxRegistrationList?: SubsidiaryTaxRegistrationList;
  ssnOrTin?: string;
  interCoAccount?: PlatformCore.RecordRef;
  nexusList?: SubsidiaryNexusList;
  accountingBookDetailList?: SubsidiaryAccountingBookDetailList;
  checkLayout?: PlatformCore.RecordRef;
  inboundEmail?: string;
  classTranslationList?: ClassTranslationList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Subsidiary) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.parent = props.parent;
    this.isInactive = props.isInactive;
    this.showSubsidiaryName = props.showSubsidiaryName;
    this.url = props.url;
    this.logo = props.logo;
    this.tranPrefix = props.tranPrefix;
    this.pageLogo = props.pageLogo;
    this.state = props.state;
    this.country = props.country;
    this.mainAddress = props.mainAddress;
    this.shippingAddress = props.shippingAddress;
    this.returnAddress = props.returnAddress;
    this.legalName = props.legalName;
    this.isElimination = props.isElimination;
    this.fiscalCalendar = props.fiscalCalendar;
    this.taxFiscalCalendar = props.taxFiscalCalendar;
    this.allowPayroll = props.allowPayroll;
    this.email = props.email;
    this.currency = props.currency;
    this.purchaseOrderQuantity = props.purchaseOrderQuantity;
    this.purchaseOrderAmount = props.purchaseOrderAmount;
    this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
    this.receiptQuantity = props.receiptQuantity;
    this.receiptAmount = props.receiptAmount;
    this.receiptQuantityDiff = props.receiptQuantityDiff;
    this.fax = props.fax;
    this.edition = props.edition;
    this.federalIdNumber = props.federalIdNumber;
    this.addrLanguage = props.addrLanguage;
    this.nonConsol = props.nonConsol;
    this.consol = props.consol;
    this.state1TaxNumber = props.state1TaxNumber;
    this.taxRegistrationList = props.taxRegistrationList;
    this.ssnOrTin = props.ssnOrTin;
    this.interCoAccount = props.interCoAccount;
    this.nexusList = props.nexusList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.checkLayout = props.checkLayout;
    this.inboundEmail = props.inboundEmail;
    this.classTranslationList = props.classTranslationList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class UnitsTypeSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.UnitsTypeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: UnitsTypeSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class PricingGroupSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.PricingGroupSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: PricingGroupSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class BillingRatesMatrix extends SoapTypes.Base {
  billingRates?: BillingRates[];
  replaceAll?: boolean;
  constructor(props: BillingRatesMatrix) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.billingRates = props.billingRates;
    this.replaceAll = props.replaceAll;
  }
}

export class BomRevisionComponent extends SoapTypes.Base {
  item?: PlatformCore.RecordRef;
  description?: string;
  componentYield?: number;
  bomQuantity?: number;
  itemSource?: PlatformCommonTypes.ItemSource;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  internalId?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: BomRevisionComponent) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.description = props.description;
    this.componentYield = props.componentYield;
    this.bomQuantity = props.bomQuantity;
    this.itemSource = props.itemSource;
    this.quantity = props.quantity;
    this.units = props.units;
    this.internalId = props.internalId;
    this.customFieldList = props.customFieldList;
  }
}

export class SerializedInventoryItemNumbersList extends SoapTypes.Base {
  numbers?: SerializedInventoryItemNumbers[];
  replaceAll?: boolean;
  constructor(props: SerializedInventoryItemNumbersList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.numbers = props.numbers;
    this.replaceAll = props.replaceAll;
  }
}

export class PriceLevelSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PriceLevelSearch;
  columns?: PriceLevelSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: PriceLevelSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class ItemAccountMappingSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ItemAccountMappingSearch;
  columns?: ItemAccountMappingSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ItemAccountMappingSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class SalesRoleSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: SalesRoleSearch;
  columns?: SalesRoleSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: SalesRoleSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class ItemMember extends SoapTypes.Base {
  memberDescr?: string;
  componentYield?: number;
  bomQuantity?: number;
  itemSource?: PlatformCommonTypes.ItemSource;
  quantity?: number;
  memberUnit?: PlatformCore.RecordRef;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  taxSchedule?: PlatformCore.RecordRef;
  taxcode?: string;
  item?: PlatformCore.RecordRef;
  taxrate?: number;
  effectiveDate?: SoapTypes.Dateish;
  obsoleteDate?: SoapTypes.Dateish;
  effectiveRevision?: PlatformCore.RecordRef;
  obsoleteRevision?: PlatformCore.RecordRef;
  lineNumber?: number;
  memberKey?: string;
  constructor(props: ItemMember) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.memberDescr = props.memberDescr;
    this.componentYield = props.componentYield;
    this.bomQuantity = props.bomQuantity;
    this.itemSource = props.itemSource;
    this.quantity = props.quantity;
    this.memberUnit = props.memberUnit;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.taxSchedule = props.taxSchedule;
    this.taxcode = props.taxcode;
    this.item = props.item;
    this.taxrate = props.taxrate;
    this.effectiveDate = props.effectiveDate;
    this.obsoleteDate = props.obsoleteDate;
    this.effectiveRevision = props.effectiveRevision;
    this.obsoleteRevision = props.obsoleteRevision;
    this.lineNumber = props.lineNumber;
    this.memberKey = props.memberKey;
  }
}

export class PriceLevelSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.PriceLevelSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: PriceLevelSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class ItemGroupHierarchyVersionsList extends SoapTypes.Base {
  itemGroupHierarchyVersions?: ItemGroupHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: ItemGroupHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.itemGroupHierarchyVersions = props.itemGroupHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class ItemSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ItemSearchBasic;
  accountingBookRevRecScheduleJoin?: PlatformCommon.RevRecTemplateSearchBasic;
  assemblyItemBillOfMaterialsJoin?: PlatformCommon.AssemblyItemBomSearchBasic;
  binNumberJoin?: PlatformCommon.BinSearchBasic;
  binOnHandJoin?: PlatformCommon.ItemBinNumberSearchBasic;
  correlatedItemJoin?: PlatformCommon.ItemSearchBasic;
  effectiveRevisionJoin?: PlatformCommon.ItemRevisionSearchBasic;
  fileJoin?: PlatformCommon.FileSearchBasic;
  inventoryDetailJoin?: PlatformCommon.InventoryDetailSearchBasic;
  inventoryLocationJoin?: PlatformCommon.LocationSearchBasic;
  inventoryNumberJoin?: PlatformCommon.InventoryNumberSearchBasic;
  inventoryNumberBinOnHandJoin?: PlatformCommon.InventoryNumberBinSearchBasic;
  memberItemJoin?: PlatformCommon.ItemSearchBasic;
  obsoleteRevisionJoin?: PlatformCommon.ItemRevisionSearchBasic;
  parentJoin?: PlatformCommon.ItemSearchBasic;
  preferredLocationJoin?: PlatformCommon.LocationSearchBasic;
  preferredVendorJoin?: PlatformCommon.VendorSearchBasic;
  pricingJoin?: PlatformCommon.PricingSearchBasic;
  shopperJoin?: PlatformCommon.CustomerSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
  vendorJoin?: PlatformCommon.VendorSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: ItemSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.accountingBookRevRecScheduleJoin = props.accountingBookRevRecScheduleJoin;
    this.assemblyItemBillOfMaterialsJoin = props.assemblyItemBillOfMaterialsJoin;
    this.binNumberJoin = props.binNumberJoin;
    this.binOnHandJoin = props.binOnHandJoin;
    this.correlatedItemJoin = props.correlatedItemJoin;
    this.effectiveRevisionJoin = props.effectiveRevisionJoin;
    this.fileJoin = props.fileJoin;
    this.inventoryDetailJoin = props.inventoryDetailJoin;
    this.inventoryLocationJoin = props.inventoryLocationJoin;
    this.inventoryNumberJoin = props.inventoryNumberJoin;
    this.inventoryNumberBinOnHandJoin = props.inventoryNumberBinOnHandJoin;
    this.memberItemJoin = props.memberItemJoin;
    this.obsoleteRevisionJoin = props.obsoleteRevisionJoin;
    this.parentJoin = props.parentJoin;
    this.preferredLocationJoin = props.preferredLocationJoin;
    this.preferredVendorJoin = props.preferredVendorJoin;
    this.pricingJoin = props.pricingJoin;
    this.shopperJoin = props.shopperJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.vendorJoin = props.vendorJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class NexusSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: NexusSearch;
  columns?: NexusSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: NexusSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class CostCategorySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CostCategorySearch;
  columns?: CostCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CostCategorySearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class NonInventoryPurchaseItemHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: NonInventoryPurchaseItemHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class DepartmentSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.DepartmentSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: DepartmentSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class CostCategorySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CostCategorySearchBasic;
  accountJoin?: PlatformCommon.AccountSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  constructor(props: CostCategorySearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.accountJoin = props.accountJoin;
    this.transactionJoin = props.transactionJoin;
  }
}

export class LotNumberedInventoryItemNumbers extends SoapTypes.Base {
  serialNumber?: PlatformCore.RecordRef;
  quantityOnHand?: number;
  expirationDate?: SoapTypes.Dateish;
  constructor(props: LotNumberedInventoryItemNumbers) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.serialNumber = props.serialNumber;
    this.quantityOnHand = props.quantityOnHand;
    this.expirationDate = props.expirationDate;
  }
}

export class ExpenseCategorySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ExpenseCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: ExpenseCategorySearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class CurrencyRateSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CurrencyRateSearch;
  columns?: CurrencyRateSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CurrencyRateSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class Bin extends PlatformCore.Record {
  binNumber?: string;
  location?: PlatformCore.RecordRef;
  memo?: string;
  isInactive?: boolean;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Bin) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.binNumber = props.binNumber;
    this.location = props.location;
    this.memo = props.memo;
    this.isInactive = props.isInactive;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CurrencyRateSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CurrencyRateSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: CurrencyRateSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class GlobalAccountMappingSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.GlobalAccountMappingSearchRowBasic;
  classJoin?: PlatformCommon.ClassificationSearchRowBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchRowBasic;
  destinationAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  sourceAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: GlobalAccountMappingSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.classJoin = props.classJoin;
    this.departmentJoin = props.departmentJoin;
    this.destinationAccountJoin = props.destinationAccountJoin;
    this.locationJoin = props.locationJoin;
    this.sourceAccountJoin = props.sourceAccountJoin;
    this.subsidiaryJoin = props.subsidiaryJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class InventoryNumber extends PlatformCore.Record {
  inventoryNumber?: string;
  item?: PlatformCore.RecordRef;
  status?: string;
  units?: string;
  expirationDate?: SoapTypes.Dateish;
  memo?: string;
  locationsList?: InventoryNumberLocationsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: InventoryNumber) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.inventoryNumber = props.inventoryNumber;
    this.item = props.item;
    this.status = props.status;
    this.units = props.units;
    this.expirationDate = props.expirationDate;
    this.memo = props.memo;
    this.locationsList = props.locationsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class TaxAcct extends PlatformCore.Record {
  name?: string;
  description?: string;
  nexus?: PlatformCore.RecordRef;
  country?: PlatformCommonTypes.Country;
  taxAcctType?: ListsAccountingTypes.TaxAcctType;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: TaxAcct) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.description = props.description;
    this.nexus = props.nexus;
    this.country = props.country;
    this.taxAcctType = props.taxAcctType;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CostCategory extends PlatformCore.Record {
  name?: string;
  account?: PlatformCore.RecordRef;
  itemCostType?: ListsAccountingTypes.CostCategoryItemCostType;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CostCategory) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.account = props.account;
    this.itemCostType = props.itemCostType;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CurrencyRate extends PlatformCore.Record {
  baseCurrency?: PlatformCore.RecordRef;
  transactionCurrency?: PlatformCore.RecordRef;
  exchangeRate?: number;
  effectiveDate?: SoapTypes.Dateish;
  internalId?: string;
  constructor(props: CurrencyRate) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.baseCurrency = props.baseCurrency;
    this.transactionCurrency = props.transactionCurrency;
    this.exchangeRate = props.exchangeRate;
    this.effectiveDate = props.effectiveDate;
    this.internalId = props.internalId;
  }
}

export class InventoryNumberSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: InventoryNumberSearch;
  columns?: InventoryNumberSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: InventoryNumberSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class ItemSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ItemSearch;
  columns?: ItemSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ItemSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class InventoryItemLocationsList extends SoapTypes.Base {
  locations?: InventoryItemLocations[];
  replaceAll?: boolean;
  constructor(props: InventoryItemLocationsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.locations = props.locations;
    this.replaceAll = props.replaceAll;
  }
}

export class ClassificationSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ClassificationSearch;
  columns?: ClassificationSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ClassificationSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class ServiceItemTaskTemplates extends SoapTypes.Base {
  taskName?: string;
  taskStartOffset?: number;
  taskDuration?: PlatformCore.Duration;
  constructor(props: ServiceItemTaskTemplates) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.taskName = props.taskName;
    this.taskStartOffset = props.taskStartOffset;
    this.taskDuration = props.taskDuration;
  }
}

export class ServiceItemTaskTemplatesList extends SoapTypes.Base {
  taskTemplates?: ServiceItemTaskTemplates[];
  replaceAll?: boolean;
  constructor(props: ServiceItemTaskTemplatesList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.taskTemplates = props.taskTemplates;
    this.replaceAll = props.replaceAll;
  }
}

export class LotNumberedAssemblyItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  vendorName?: string;
  parent?: PlatformCore.RecordRef;
  printItems?: boolean;
  isOnline?: boolean;
  isGcoCompliant?: boolean;
  offerSupport?: boolean;
  useComponentYield?: boolean;
  isInactive?: boolean;
  availableToPartners?: boolean;
  subsidiaryList?: PlatformCore.RecordRefList;
  department?: PlatformCore.RecordRef;
  includeChildren?: boolean;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  costCategory?: PlatformCore.RecordRef;
  description?: string;
  cogsAccount?: PlatformCore.RecordRef;
  vendor?: PlatformCore.RecordRef;
  incomeAccount?: PlatformCore.RecordRef;
  intercoIncomeAccount?: PlatformCore.RecordRef;
  assetAccount?: PlatformCore.RecordRef;
  matchBillToReceipt?: boolean;
  billQtyVarianceAcct?: PlatformCore.RecordRef;
  billPriceVarianceAcct?: PlatformCore.RecordRef;
  billExchRateVarianceAcct?: PlatformCore.RecordRef;
  gainLossAccount?: PlatformCore.RecordRef;
  salesTaxCode?: PlatformCore.RecordRef;
  purchaseTaxCode?: PlatformCore.RecordRef;
  prodQtyVarianceAcct?: PlatformCore.RecordRef;
  prodPriceVarianceAcct?: PlatformCore.RecordRef;
  purchasePriceVarianceAcct?: PlatformCore.RecordRef;
  wipVarianceAcct?: PlatformCore.RecordRef;
  taxSchedule?: PlatformCore.RecordRef;
  scrapAcct?: PlatformCore.RecordRef;
  shippingCost?: number;
  wipAcct?: PlatformCore.RecordRef;
  handlingCost?: number;
  weight?: number;
  weightUnit?: ListsAccountingTypes.ItemWeightUnit;
  costingMethod?: ListsAccountingTypes.ItemCostingMethod;
  isTaxable?: boolean;
  costingMethodDisplay?: string;
  rate?: number;
  unitsType?: PlatformCore.RecordRef;
  stockUnit?: PlatformCore.RecordRef;
  purchaseUnit?: PlatformCore.RecordRef;
  saleUnit?: PlatformCore.RecordRef;
  trackLandedCost?: boolean;
  matrixItemNameTemplate?: string;
  billingSchedule?: PlatformCore.RecordRef;
  deferredRevenueAccount?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  stockDescription?: string;
  producer?: boolean;
  manufacturer?: string;
  mpn?: string;
  multManufactureAddr?: boolean;
  manufactureraddr1?: string;
  manufacturerCity?: string;
  manufacturerState?: string;
  manufacturerZip?: string;
  countryOfManufacture?: PlatformCommonTypes.Country;
  effectiveBomControl?: ListsAccountingTypes.AssemblyItemEffectiveBomControl;
  manufacturerTaxId?: string;
  defaultRevision?: string;
  defaultItemShipMethod?: PlatformCore.RecordRef;
  itemCarrier?: PlatformCommonTypes.ShippingCarrier;
  roundUpAsComponent?: boolean;
  purchaseOrderQuantity?: number;
  purchaseOrderAmount?: number;
  purchaseOrderQuantityDiff?: number;
  receiptQuantity?: number;
  receiptAmount?: number;
  receiptQuantityDiff?: number;
  isDropShipItem?: boolean;
  isPhantom?: boolean;
  itemShipMethodList?: PlatformCore.RecordRefList;
  scheduleBNumber?: string;
  scheduleBQuantity?: number;
  scheduleBCode?: PlatformCore.RecordRef;
  manufacturerTariff?: string;
  preferenceCriterion?: ListsAccountingTypes.ItemPreferenceCriterion;
  issueProduct?: PlatformCore.RecordRef;
  minimumQuantity?: number;
  enforceMinQtyInternally?: boolean;
  maximumQuantity?: number;
  softDescriptor?: PlatformCore.RecordRef;
  isSpecialWorkOrderItem?: boolean;
  pricesIncludeTax?: boolean;
  quantityPricingSchedule?: PlatformCore.RecordRef;
  buildEntireAssembly?: boolean;
  quantityOnHand?: number;
  useMarginalRates?: boolean;
  reorderMultiple?: number;
  cost?: number;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  isHazmatItem?: boolean;
  hazmatId?: string;
  hazmatShippingName?: string;
  hazmatHazardClass?: string;
  hazmatPackingGroup?: ListsAccountingTypes.HazmatPackingGroup;
  hazmatItemUnits?: string;
  hazmatItemUnitsQty?: number;
  costEstimate?: number;
  transferPrice?: number;
  overallQuantityPricingType?: ListsAccountingTypes.ItemOverallQuantityPricingType;
  pricingGroup?: PlatformCore.RecordRef;
  intercoCogsAccount?: PlatformCore.RecordRef;
  vsoePrice?: number;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  itemRevenueCategory?: PlatformCore.RecordRef;
  unbuildVarianceAccount?: PlatformCore.RecordRef;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revenueAllocationGroup?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  directRevenuePosting?: boolean;
  dropshipExpenseAccount?: PlatformCore.RecordRef;
  preferredLocation?: PlatformCore.RecordRef;
  isStorePickupAllowed?: boolean;
  totalValue?: number;
  useBins?: boolean;
  averageCost?: number;
  lastPurchasePrice?: number;
  purchaseDescription?: string;
  leadTime?: number;
  autoLeadTime?: boolean;
  buildTime?: number;
  safetyStockLevel?: number;
  safetyStockLevelDays?: number;
  seasonalDemand?: boolean;
  serialNumbers?: string;
  reorderPoint?: number;
  preferredStockLevel?: number;
  expirationDate?: SoapTypes.Dateish;
  lastInvtCountDate?: SoapTypes.Dateish;
  nextInvtCountDate?: SoapTypes.Dateish;
  invtCountInterval?: number;
  invtClassification?: ListsAccountingTypes.ItemInvtClassification;
  demandModifier?: number;
  autoReorderPoint?: boolean;
  autoPreferredStockLevel?: boolean;
  preferredStockLevelDays?: number;
  shipIndividually?: boolean;
  shipPackage?: PlatformCore.RecordRef;
  defaultReturnCost?: number;
  supplyReplenishmentMethod?: PlatformCore.RecordRef;
  alternateDemandSourceItem?: PlatformCore.RecordRef;
  fixedLotSize?: number;
  supplyType?: PlatformCore.RecordRef;
  demandTimeFence?: number;
  supplyTimeFence?: number;
  rescheduleInDays?: number;
  rescheduleOutDays?: number;
  supplyLotSizingMethod?: PlatformCore.RecordRef;
  demandSource?: PlatformCore.RecordRef;
  quantityCommitted?: number;
  quantityAvailable?: number;
  quantityBackOrdered?: number;
  quantityOnOrder?: number;
  storeDisplayName?: string;
  storeDisplayThumbnail?: PlatformCore.RecordRef;
  storeDisplayImage?: PlatformCore.RecordRef;
  storeDescription?: string;
  storeDetailedDescription?: string;
  storeItemTemplate?: PlatformCore.RecordRef;
  pageTitle?: string;
  metaTagHtml?: string;
  excludeFromSitemap?: boolean;
  sitemapPriority?: string;
  urlComponent?: string;
  searchKeywords?: string;
  isDonationItem?: boolean;
  showDefaultDonationAmount?: boolean;
  maxDonationAmount?: number;
  dontShowPrice?: boolean;
  noPriceMessage?: string;
  outOfStockMessage?: string;
  shoppingDotComCategory?: string;
  outOfStockBehavior?: ListsAccountingTypes.ItemOutOfStockBehavior;
  shopzillaCategoryId?: number;
  nexTagCategory?: string;
  productFeedList?: ProductFeedList;
  relatedItemsDescription?: string;
  onSpecial?: boolean;
  specialsDescription?: string;
  featuredDescription?: string;
  itemOptionsList?: ItemOptionsList;
  itemNumberOptionsList?: PlatformCore.RecordRefList;
  itemVendorList?: ItemVendorList;
  pricingMatrix?: PricingMatrix;
  billOfMaterialsList?: LotNumberedAssemblyItemBillOfMaterialsList;
  memberList?: ItemMemberList;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  locationsList?: LotNumberedInventoryItemLocationsList;
  siteCategoryList?: SiteCategoryList;
  binNumberList?: InventoryItemBinNumberList;
  numbersList?: LotNumberedInventoryItemNumbersList;
  translationsList?: TranslationList;
  presentationItemList?: PresentationItemList;
  hierarchyVersionsList?: LotNumberedAssemblyItemHierarchyVersionsList;
  futureHorizon?: number;
  consumptionUnit?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: LotNumberedAssemblyItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.vendorName = props.vendorName;
    this.parent = props.parent;
    this.printItems = props.printItems;
    this.isOnline = props.isOnline;
    this.isGcoCompliant = props.isGcoCompliant;
    this.offerSupport = props.offerSupport;
    this.useComponentYield = props.useComponentYield;
    this.isInactive = props.isInactive;
    this.availableToPartners = props.availableToPartners;
    this.subsidiaryList = props.subsidiaryList;
    this.department = props.department;
    this.includeChildren = props.includeChildren;
    this.clazz = props.clazz;
    this.location = props.location;
    this.costCategory = props.costCategory;
    this.description = props.description;
    this.cogsAccount = props.cogsAccount;
    this.vendor = props.vendor;
    this.incomeAccount = props.incomeAccount;
    this.intercoIncomeAccount = props.intercoIncomeAccount;
    this.assetAccount = props.assetAccount;
    this.matchBillToReceipt = props.matchBillToReceipt;
    this.billQtyVarianceAcct = props.billQtyVarianceAcct;
    this.billPriceVarianceAcct = props.billPriceVarianceAcct;
    this.billExchRateVarianceAcct = props.billExchRateVarianceAcct;
    this.gainLossAccount = props.gainLossAccount;
    this.salesTaxCode = props.salesTaxCode;
    this.purchaseTaxCode = props.purchaseTaxCode;
    this.prodQtyVarianceAcct = props.prodQtyVarianceAcct;
    this.prodPriceVarianceAcct = props.prodPriceVarianceAcct;
    this.purchasePriceVarianceAcct = props.purchasePriceVarianceAcct;
    this.wipVarianceAcct = props.wipVarianceAcct;
    this.taxSchedule = props.taxSchedule;
    this.scrapAcct = props.scrapAcct;
    this.shippingCost = props.shippingCost;
    this.wipAcct = props.wipAcct;
    this.handlingCost = props.handlingCost;
    this.weight = props.weight;
    this.weightUnit = props.weightUnit;
    this.costingMethod = props.costingMethod;
    this.isTaxable = props.isTaxable;
    this.costingMethodDisplay = props.costingMethodDisplay;
    this.rate = props.rate;
    this.unitsType = props.unitsType;
    this.stockUnit = props.stockUnit;
    this.purchaseUnit = props.purchaseUnit;
    this.saleUnit = props.saleUnit;
    this.trackLandedCost = props.trackLandedCost;
    this.matrixItemNameTemplate = props.matrixItemNameTemplate;
    this.billingSchedule = props.billingSchedule;
    this.deferredRevenueAccount = props.deferredRevenueAccount;
    this.revRecSchedule = props.revRecSchedule;
    this.stockDescription = props.stockDescription;
    this.producer = props.producer;
    this.manufacturer = props.manufacturer;
    this.mpn = props.mpn;
    this.multManufactureAddr = props.multManufactureAddr;
    this.manufactureraddr1 = props.manufactureraddr1;
    this.manufacturerCity = props.manufacturerCity;
    this.manufacturerState = props.manufacturerState;
    this.manufacturerZip = props.manufacturerZip;
    this.countryOfManufacture = props.countryOfManufacture;
    this.effectiveBomControl = props.effectiveBomControl;
    this.manufacturerTaxId = props.manufacturerTaxId;
    this.defaultRevision = props.defaultRevision;
    this.defaultItemShipMethod = props.defaultItemShipMethod;
    this.itemCarrier = props.itemCarrier;
    this.roundUpAsComponent = props.roundUpAsComponent;
    this.purchaseOrderQuantity = props.purchaseOrderQuantity;
    this.purchaseOrderAmount = props.purchaseOrderAmount;
    this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
    this.receiptQuantity = props.receiptQuantity;
    this.receiptAmount = props.receiptAmount;
    this.receiptQuantityDiff = props.receiptQuantityDiff;
    this.isDropShipItem = props.isDropShipItem;
    this.isPhantom = props.isPhantom;
    this.itemShipMethodList = props.itemShipMethodList;
    this.scheduleBNumber = props.scheduleBNumber;
    this.scheduleBQuantity = props.scheduleBQuantity;
    this.scheduleBCode = props.scheduleBCode;
    this.manufacturerTariff = props.manufacturerTariff;
    this.preferenceCriterion = props.preferenceCriterion;
    this.issueProduct = props.issueProduct;
    this.minimumQuantity = props.minimumQuantity;
    this.enforceMinQtyInternally = props.enforceMinQtyInternally;
    this.maximumQuantity = props.maximumQuantity;
    this.softDescriptor = props.softDescriptor;
    this.isSpecialWorkOrderItem = props.isSpecialWorkOrderItem;
    this.pricesIncludeTax = props.pricesIncludeTax;
    this.quantityPricingSchedule = props.quantityPricingSchedule;
    this.buildEntireAssembly = props.buildEntireAssembly;
    this.quantityOnHand = props.quantityOnHand;
    this.useMarginalRates = props.useMarginalRates;
    this.reorderMultiple = props.reorderMultiple;
    this.cost = props.cost;
    this.costEstimateType = props.costEstimateType;
    this.isHazmatItem = props.isHazmatItem;
    this.hazmatId = props.hazmatId;
    this.hazmatShippingName = props.hazmatShippingName;
    this.hazmatHazardClass = props.hazmatHazardClass;
    this.hazmatPackingGroup = props.hazmatPackingGroup;
    this.hazmatItemUnits = props.hazmatItemUnits;
    this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
    this.costEstimate = props.costEstimate;
    this.transferPrice = props.transferPrice;
    this.overallQuantityPricingType = props.overallQuantityPricingType;
    this.pricingGroup = props.pricingGroup;
    this.intercoCogsAccount = props.intercoCogsAccount;
    this.vsoePrice = props.vsoePrice;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.itemRevenueCategory = props.itemRevenueCategory;
    this.unbuildVarianceAccount = props.unbuildVarianceAccount;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.revRecForecastRule = props.revRecForecastRule;
    this.revenueAllocationGroup = props.revenueAllocationGroup;
    this.createRevenuePlansOn = props.createRevenuePlansOn;
    this.directRevenuePosting = props.directRevenuePosting;
    this.dropshipExpenseAccount = props.dropshipExpenseAccount;
    this.preferredLocation = props.preferredLocation;
    this.isStorePickupAllowed = props.isStorePickupAllowed;
    this.totalValue = props.totalValue;
    this.useBins = props.useBins;
    this.averageCost = props.averageCost;
    this.lastPurchasePrice = props.lastPurchasePrice;
    this.purchaseDescription = props.purchaseDescription;
    this.leadTime = props.leadTime;
    this.autoLeadTime = props.autoLeadTime;
    this.buildTime = props.buildTime;
    this.safetyStockLevel = props.safetyStockLevel;
    this.safetyStockLevelDays = props.safetyStockLevelDays;
    this.seasonalDemand = props.seasonalDemand;
    this.serialNumbers = props.serialNumbers;
    this.reorderPoint = props.reorderPoint;
    this.preferredStockLevel = props.preferredStockLevel;
    this.expirationDate = props.expirationDate;
    this.lastInvtCountDate = props.lastInvtCountDate;
    this.nextInvtCountDate = props.nextInvtCountDate;
    this.invtCountInterval = props.invtCountInterval;
    this.invtClassification = props.invtClassification;
    this.demandModifier = props.demandModifier;
    this.autoReorderPoint = props.autoReorderPoint;
    this.autoPreferredStockLevel = props.autoPreferredStockLevel;
    this.preferredStockLevelDays = props.preferredStockLevelDays;
    this.shipIndividually = props.shipIndividually;
    this.shipPackage = props.shipPackage;
    this.defaultReturnCost = props.defaultReturnCost;
    this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
    this.alternateDemandSourceItem = props.alternateDemandSourceItem;
    this.fixedLotSize = props.fixedLotSize;
    this.supplyType = props.supplyType;
    this.demandTimeFence = props.demandTimeFence;
    this.supplyTimeFence = props.supplyTimeFence;
    this.rescheduleInDays = props.rescheduleInDays;
    this.rescheduleOutDays = props.rescheduleOutDays;
    this.supplyLotSizingMethod = props.supplyLotSizingMethod;
    this.demandSource = props.demandSource;
    this.quantityCommitted = props.quantityCommitted;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityBackOrdered = props.quantityBackOrdered;
    this.quantityOnOrder = props.quantityOnOrder;
    this.storeDisplayName = props.storeDisplayName;
    this.storeDisplayThumbnail = props.storeDisplayThumbnail;
    this.storeDisplayImage = props.storeDisplayImage;
    this.storeDescription = props.storeDescription;
    this.storeDetailedDescription = props.storeDetailedDescription;
    this.storeItemTemplate = props.storeItemTemplate;
    this.pageTitle = props.pageTitle;
    this.metaTagHtml = props.metaTagHtml;
    this.excludeFromSitemap = props.excludeFromSitemap;
    this.sitemapPriority = props.sitemapPriority;
    this.urlComponent = props.urlComponent;
    this.searchKeywords = props.searchKeywords;
    this.isDonationItem = props.isDonationItem;
    this.showDefaultDonationAmount = props.showDefaultDonationAmount;
    this.maxDonationAmount = props.maxDonationAmount;
    this.dontShowPrice = props.dontShowPrice;
    this.noPriceMessage = props.noPriceMessage;
    this.outOfStockMessage = props.outOfStockMessage;
    this.shoppingDotComCategory = props.shoppingDotComCategory;
    this.outOfStockBehavior = props.outOfStockBehavior;
    this.shopzillaCategoryId = props.shopzillaCategoryId;
    this.nexTagCategory = props.nexTagCategory;
    this.productFeedList = props.productFeedList;
    this.relatedItemsDescription = props.relatedItemsDescription;
    this.onSpecial = props.onSpecial;
    this.specialsDescription = props.specialsDescription;
    this.featuredDescription = props.featuredDescription;
    this.itemOptionsList = props.itemOptionsList;
    this.itemNumberOptionsList = props.itemNumberOptionsList;
    this.itemVendorList = props.itemVendorList;
    this.pricingMatrix = props.pricingMatrix;
    this.billOfMaterialsList = props.billOfMaterialsList;
    this.memberList = props.memberList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.locationsList = props.locationsList;
    this.siteCategoryList = props.siteCategoryList;
    this.binNumberList = props.binNumberList;
    this.numbersList = props.numbersList;
    this.translationsList = props.translationsList;
    this.presentationItemList = props.presentationItemList;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.futureHorizon = props.futureHorizon;
    this.consumptionUnit = props.consumptionUnit;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ConsolidatedExchangeRateSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ConsolidatedExchangeRateSearch;
  columns?: ConsolidatedExchangeRateSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ConsolidatedExchangeRateSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class WinLossReasonSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.WinLossReasonSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: WinLossReasonSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class InventoryItemHierarchyVersionsList extends SoapTypes.Base {
  inventoryItemHierarchyVersions?: InventoryItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: InventoryItemHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.inventoryItemHierarchyVersions = props.inventoryItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class MerchandiseHierarchyNodeHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyLevel?: PlatformCore.RecordRef;
  parentNode?: PlatformCore.RecordRef;
  constructor(props: MerchandiseHierarchyNodeHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyLevel = props.hierarchyLevel;
    this.parentNode = props.parentNode;
  }
}

export class SerializedInventoryItemNumbers extends SoapTypes.Base {
  serialNumber?: PlatformCore.RecordRef;
  constructor(props: SerializedInventoryItemNumbers) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.serialNumber = props.serialNumber;
  }
}

export class RevRecScheduleSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: RevRecScheduleSearch;
  columns?: RevRecScheduleSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: RevRecScheduleSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class NonInventoryPurchaseItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  purchaseDescription?: string;
  cost?: number;
  costUnits?: string;
  expenseAccount?: PlatformCore.RecordRef;
  issueProduct?: PlatformCore.RecordRef;
  isTaxable?: boolean;
  matrixType?: ListsAccountingTypes.ItemMatrixType;
  unitsType?: PlatformCore.RecordRef;
  purchaseUnit?: PlatformCore.RecordRef;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  includeChildren?: boolean;
  vendorName?: string;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  matrixItemNameTemplate?: string;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiaryList?: PlatformCore.RecordRefList;
  taxSchedule?: PlatformCore.RecordRef;
  deferralAccount?: PlatformCore.RecordRef;
  amortizationTemplate?: PlatformCore.RecordRef;
  residual?: string;
  amortizationPeriod?: number;
  isFulfillable?: boolean;
  generateAccruals?: boolean;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  costCategory?: PlatformCore.RecordRef;
  purchaseOrderQuantity?: number;
  purchaseOrderAmount?: number;
  purchaseOrderQuantityDiff?: number;
  receiptQuantity?: number;
  receiptAmount?: number;
  receiptQuantityDiff?: number;
  currency?: string;
  itemOptionsList?: ItemOptionsList;
  matrixOptionList?: MatrixOptionList;
  itemVendorList?: ItemVendorList;
  purchaseTaxCode?: PlatformCore.RecordRef;
  salesTaxCode?: PlatformCore.RecordRef;
  translationsList?: TranslationList;
  vendor?: PlatformCore.RecordRef;
  hierarchyVersionsList?: NonInventoryPurchaseItemHierarchyVersionsList;
  consumptionUnit?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: NonInventoryPurchaseItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.purchaseDescription = props.purchaseDescription;
    this.cost = props.cost;
    this.costUnits = props.costUnits;
    this.expenseAccount = props.expenseAccount;
    this.issueProduct = props.issueProduct;
    this.isTaxable = props.isTaxable;
    this.matrixType = props.matrixType;
    this.unitsType = props.unitsType;
    this.purchaseUnit = props.purchaseUnit;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.includeChildren = props.includeChildren;
    this.vendorName = props.vendorName;
    this.parent = props.parent;
    this.isInactive = props.isInactive;
    this.matrixItemNameTemplate = props.matrixItemNameTemplate;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiaryList = props.subsidiaryList;
    this.taxSchedule = props.taxSchedule;
    this.deferralAccount = props.deferralAccount;
    this.amortizationTemplate = props.amortizationTemplate;
    this.residual = props.residual;
    this.amortizationPeriod = props.amortizationPeriod;
    this.isFulfillable = props.isFulfillable;
    this.generateAccruals = props.generateAccruals;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.costCategory = props.costCategory;
    this.purchaseOrderQuantity = props.purchaseOrderQuantity;
    this.purchaseOrderAmount = props.purchaseOrderAmount;
    this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
    this.receiptQuantity = props.receiptQuantity;
    this.receiptAmount = props.receiptAmount;
    this.receiptQuantityDiff = props.receiptQuantityDiff;
    this.currency = props.currency;
    this.itemOptionsList = props.itemOptionsList;
    this.matrixOptionList = props.matrixOptionList;
    this.itemVendorList = props.itemVendorList;
    this.purchaseTaxCode = props.purchaseTaxCode;
    this.salesTaxCode = props.salesTaxCode;
    this.translationsList = props.translationsList;
    this.vendor = props.vendor;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.consumptionUnit = props.consumptionUnit;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class SubsidiaryAccountingBookDetailList extends SoapTypes.Base {
  subsidiaryAccountingBookDetail?: SubsidiaryAccountingBookDetail[];
  replaceAll?: boolean;
  constructor(props: SubsidiaryAccountingBookDetailList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.subsidiaryAccountingBookDetail = props.subsidiaryAccountingBookDetail;
    this.replaceAll = props.replaceAll;
  }
}

export class OtherChargeResaleItemHierarchyVersionsList extends SoapTypes.Base {
  otherChargeResaleItemHierarchyVersions?: OtherChargeResaleItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: OtherChargeResaleItemHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.otherChargeResaleItemHierarchyVersions = props.otherChargeResaleItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class NonInventoryPurchaseItemHierarchyVersionsList extends SoapTypes.Base {
  nonInventoryPurchaseItemHierarchyVersions?: NonInventoryPurchaseItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: NonInventoryPurchaseItemHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.nonInventoryPurchaseItemHierarchyVersions = props.nonInventoryPurchaseItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class OtherChargeResaleItemHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: OtherChargeResaleItemHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class BomRevision extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  name?: string;
  createdDate?: SoapTypes.Dateish;
  billOfMaterials?: PlatformCore.RecordRef;
  memo?: string;
  isInactive?: boolean;
  effectiveStartDate?: SoapTypes.Dateish;
  effectiveEndDate?: SoapTypes.Dateish;
  componentList?: BomRevisionComponentList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: BomRevision) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customForm = props.customForm;
    this.name = props.name;
    this.createdDate = props.createdDate;
    this.billOfMaterials = props.billOfMaterials;
    this.memo = props.memo;
    this.isInactive = props.isInactive;
    this.effectiveStartDate = props.effectiveStartDate;
    this.effectiveEndDate = props.effectiveEndDate;
    this.componentList = props.componentList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class MerchandiseHierarchyNodeSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.MerchandiseHierarchyNodeSearchBasic;
  parentNodeJoin?: PlatformCommon.MerchandiseHierarchyNodeSearchBasic;
  constructor(props: MerchandiseHierarchyNodeSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.parentNodeJoin = props.parentNodeJoin;
  }
}

export class AccountLocalizationsList extends SoapTypes.Base {
  accountLocalizations?: AccountLocalizations[];
  replaceAll?: boolean;
  constructor(props: AccountLocalizationsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.accountLocalizations = props.accountLocalizations;
    this.replaceAll = props.replaceAll;
  }
}

export class Account extends PlatformCore.Record {
  acctType?: ListsAccountingTypes.AccountType;
  unitsType?: PlatformCore.RecordRef;
  unit?: PlatformCore.RecordRef;
  acctNumber?: string;
  acctName?: string;
  legalName?: string;
  includeChildren?: boolean;
  currency?: PlatformCore.RecordRef;
  exchangeRate?: string;
  generalRate?: ListsAccountingTypes.ConsolidatedRate;
  parent?: PlatformCore.RecordRef;
  cashFlowRate?: ListsAccountingTypes.ConsolidatedRate;
  billableExpensesAcct?: PlatformCore.RecordRef;
  deferralAcct?: PlatformCore.RecordRef;
  description?: string;
  curDocNum?: number;
  isInactive?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  restrictToAccountingBookList?: PlatformCore.RecordRefList;
  inventory?: boolean;
  eliminate?: boolean;
  subsidiaryList?: PlatformCore.RecordRefList;
  category1099Misc?: PlatformCore.RecordRef;
  localizationsList?: AccountLocalizationsList;
  openingBalance?: number;
  tranDate?: SoapTypes.Dateish;
  revalue?: boolean;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Account) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.acctType = props.acctType;
    this.unitsType = props.unitsType;
    this.unit = props.unit;
    this.acctNumber = props.acctNumber;
    this.acctName = props.acctName;
    this.legalName = props.legalName;
    this.includeChildren = props.includeChildren;
    this.currency = props.currency;
    this.exchangeRate = props.exchangeRate;
    this.generalRate = props.generalRate;
    this.parent = props.parent;
    this.cashFlowRate = props.cashFlowRate;
    this.billableExpensesAcct = props.billableExpensesAcct;
    this.deferralAcct = props.deferralAcct;
    this.description = props.description;
    this.curDocNum = props.curDocNum;
    this.isInactive = props.isInactive;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.restrictToAccountingBookList = props.restrictToAccountingBookList;
    this.inventory = props.inventory;
    this.eliminate = props.eliminate;
    this.subsidiaryList = props.subsidiaryList;
    this.category1099Misc = props.category1099Misc;
    this.localizationsList = props.localizationsList;
    this.openingBalance = props.openingBalance;
    this.tranDate = props.tranDate;
    this.revalue = props.revalue;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class LeadSource extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: LeadSource) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class PartnerCategorySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PartnerCategorySearch;
  columns?: PartnerCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: PartnerCategorySearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class TaxGroupTaxItem extends SoapTypes.Base {
  taxName?: PlatformCore.RecordRef;
  rate?: number;
  basis?: number;
  taxType?: string;
  constructor(props: TaxGroupTaxItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.taxName = props.taxName;
    this.rate = props.rate;
    this.basis = props.basis;
    this.taxType = props.taxType;
  }
}

export class VendorCategorySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.VendorCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: VendorCategorySearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class TermPercentagesList extends SoapTypes.Base {
  termPercentages?: TermPercentages[];
  replaceAll?: boolean;
  constructor(props: TermPercentagesList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.termPercentages = props.termPercentages;
    this.replaceAll = props.replaceAll;
  }
}

export class AccountingPeriodSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.AccountingPeriodSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
  constructor(props: AccountingPeriodSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
  }
}

export class State extends PlatformCore.Record {
  country?: PlatformCommonTypes.Country;
  fullName?: string;
  shortname?: string;
  internalId?: string;
  constructor(props: State) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.country = props.country;
    this.fullName = props.fullName;
    this.shortname = props.shortname;
    this.internalId = props.internalId;
  }
}

export class SalesTaxItem extends PlatformCore.Record {
  itemId?: string;
  displayName?: string;
  description?: string;
  rate?: string;
  taxType?: PlatformCore.RecordRef;
  taxAgency?: PlatformCore.RecordRef;
  purchaseAccount?: PlatformCore.RecordRef;
  saleAccount?: PlatformCore.RecordRef;
  isInactive?: boolean;
  effectiveFrom?: SoapTypes.Dateish;
  validUntil?: SoapTypes.Dateish;
  subsidiaryList?: PlatformCore.RecordRefList;
  includeChildren?: boolean;
  eccode?: boolean;
  reverseCharge?: boolean;
  parent?: PlatformCore.RecordRef;
  service?: boolean;
  exempt?: boolean;
  isDefault?: boolean;
  excludeFromTaxReports?: boolean;
  available?: ListsAccountingTypes.SalesTaxItemAvailable;
  export?: boolean;
  taxAccount?: PlatformCore.RecordRef;
  county?: string;
  city?: string;
  state?: string;
  zip?: string;
  nexusCountry?: PlatformCore.RecordRef;
  name?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: SalesTaxItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.itemId = props.itemId;
    this.displayName = props.displayName;
    this.description = props.description;
    this.rate = props.rate;
    this.taxType = props.taxType;
    this.taxAgency = props.taxAgency;
    this.purchaseAccount = props.purchaseAccount;
    this.saleAccount = props.saleAccount;
    this.isInactive = props.isInactive;
    this.effectiveFrom = props.effectiveFrom;
    this.validUntil = props.validUntil;
    this.subsidiaryList = props.subsidiaryList;
    this.includeChildren = props.includeChildren;
    this.eccode = props.eccode;
    this.reverseCharge = props.reverseCharge;
    this.parent = props.parent;
    this.service = props.service;
    this.exempt = props.exempt;
    this.isDefault = props.isDefault;
    this.excludeFromTaxReports = props.excludeFromTaxReports;
    this.available = props.available;
    this.export = props.export;
    this.taxAccount = props.taxAccount;
    this.county = props.county;
    this.city = props.city;
    this.state = props.state;
    this.zip = props.zip;
    this.nexusCountry = props.nexusCountry;
    this.name = props.name;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class OtherNameCategorySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.OtherNameCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: OtherNameCategorySearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class PartnerCategorySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.PartnerCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: PartnerCategorySearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class RevRecTemplateRecurrenceList extends SoapTypes.Base {
  revRecTemplateRecurrence?: RevRecTemplateRecurrence[];
  replaceAll?: boolean;
  constructor(props: RevRecTemplateRecurrenceList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.revRecTemplateRecurrence = props.revRecTemplateRecurrence;
    this.replaceAll = props.replaceAll;
  }
}

export class TaxGroupSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.TaxGroupSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: TaxGroupSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class KitItemHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: KitItemHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class LotNumberedInventoryItemLocations extends SoapTypes.Base {
  location?: string;
  quantityOnHand?: number;
  onHandValueMli?: number;
  serialNumbers?: string;
  expirationDate?: SoapTypes.Dateish;
  averageCostMli?: number;
  lastPurchasePriceMli?: number;
  reorderPoint?: number;
  locationAllowStorePickup?: boolean;
  locationStorePickupBufferStock?: number;
  locationQtyAvailForStorePickup?: number;
  preferredStockLevel?: number;
  leadTime?: number;
  defaultReturnCost?: number;
  safetyStockLevel?: number;
  cost?: number;
  inventoryCostTemplate?: PlatformCore.RecordRef;
  buildTime?: number;
  lastInvtCountDate?: SoapTypes.Dateish;
  nextInvtCountDate?: SoapTypes.Dateish;
  isWip?: boolean;
  invtCountInterval?: number;
  invtClassification?: ListsAccountingTypes.ItemInvtClassification;
  costingLotSize?: number;
  quantityOnOrder?: number;
  quantityCommitted?: number;
  quantityAvailable?: number;
  quantityBackOrdered?: number;
  locationId?: PlatformCore.RecordRef;
  locationlookup?: PlatformCore.RecordRef;
  locationDisplay?: string;
  supplyReplenishmentMethod?: PlatformCore.RecordRef;
  alternateDemandSourceItem?: PlatformCore.RecordRef;
  fixedLotSize?: number;
  periodicLotSizeType?: ListsAccountingTypes.PeriodicLotSizeType;
  periodicLotSizeDays?: number;
  supplyType?: PlatformCore.RecordRef;
  supplyLotSizingMethod?: PlatformCore.RecordRef;
  demandSource?: PlatformCore.RecordRef;
  backwardConsumptionDays?: number;
  forwardConsumptionDays?: number;
  demandTimeFence?: number;
  supplyTimeFence?: number;
  rescheduleInDays?: number;
  rescheduleOutDays?: number;
  constructor(props: LotNumberedInventoryItemLocations) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.location = props.location;
    this.quantityOnHand = props.quantityOnHand;
    this.onHandValueMli = props.onHandValueMli;
    this.serialNumbers = props.serialNumbers;
    this.expirationDate = props.expirationDate;
    this.averageCostMli = props.averageCostMli;
    this.lastPurchasePriceMli = props.lastPurchasePriceMli;
    this.reorderPoint = props.reorderPoint;
    this.locationAllowStorePickup = props.locationAllowStorePickup;
    this.locationStorePickupBufferStock = props.locationStorePickupBufferStock;
    this.locationQtyAvailForStorePickup = props.locationQtyAvailForStorePickup;
    this.preferredStockLevel = props.preferredStockLevel;
    this.leadTime = props.leadTime;
    this.defaultReturnCost = props.defaultReturnCost;
    this.safetyStockLevel = props.safetyStockLevel;
    this.cost = props.cost;
    this.inventoryCostTemplate = props.inventoryCostTemplate;
    this.buildTime = props.buildTime;
    this.lastInvtCountDate = props.lastInvtCountDate;
    this.nextInvtCountDate = props.nextInvtCountDate;
    this.isWip = props.isWip;
    this.invtCountInterval = props.invtCountInterval;
    this.invtClassification = props.invtClassification;
    this.costingLotSize = props.costingLotSize;
    this.quantityOnOrder = props.quantityOnOrder;
    this.quantityCommitted = props.quantityCommitted;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityBackOrdered = props.quantityBackOrdered;
    this.locationId = props.locationId;
    this.locationlookup = props.locationlookup;
    this.locationDisplay = props.locationDisplay;
    this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
    this.alternateDemandSourceItem = props.alternateDemandSourceItem;
    this.fixedLotSize = props.fixedLotSize;
    this.periodicLotSizeType = props.periodicLotSizeType;
    this.periodicLotSizeDays = props.periodicLotSizeDays;
    this.supplyType = props.supplyType;
    this.supplyLotSizingMethod = props.supplyLotSizingMethod;
    this.demandSource = props.demandSource;
    this.backwardConsumptionDays = props.backwardConsumptionDays;
    this.forwardConsumptionDays = props.forwardConsumptionDays;
    this.demandTimeFence = props.demandTimeFence;
    this.supplyTimeFence = props.supplyTimeFence;
    this.rescheduleInDays = props.rescheduleInDays;
    this.rescheduleOutDays = props.rescheduleOutDays;
  }
}

export class WinLossReason extends PlatformCore.Record {
  name?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: WinLossReason) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class AssemblyItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  vendorName?: string;
  parent?: PlatformCore.RecordRef;
  printItems?: boolean;
  vendor?: PlatformCore.RecordRef;
  isOnline?: boolean;
  isGcoCompliant?: boolean;
  offerSupport?: boolean;
  isInactive?: boolean;
  availableToPartners?: boolean;
  subsidiaryList?: PlatformCore.RecordRefList;
  department?: PlatformCore.RecordRef;
  includeChildren?: boolean;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  description?: string;
  cogsAccount?: PlatformCore.RecordRef;
  incomeAccount?: PlatformCore.RecordRef;
  intercoIncomeAccount?: PlatformCore.RecordRef;
  assetAccount?: PlatformCore.RecordRef;
  matchBillToReceipt?: boolean;
  billQtyVarianceAcct?: PlatformCore.RecordRef;
  billPriceVarianceAcct?: PlatformCore.RecordRef;
  billExchRateVarianceAcct?: PlatformCore.RecordRef;
  gainLossAccount?: PlatformCore.RecordRef;
  salesTaxCode?: PlatformCore.RecordRef;
  useComponentYield?: boolean;
  wipVarianceAcct?: PlatformCore.RecordRef;
  purchaseTaxCode?: PlatformCore.RecordRef;
  scrapAcct?: PlatformCore.RecordRef;
  taxSchedule?: PlatformCore.RecordRef;
  wipAcct?: PlatformCore.RecordRef;
  shippingCost?: number;
  handlingCost?: number;
  weight?: number;
  weightUnit?: ListsAccountingTypes.ItemWeightUnit;
  isTaxable?: boolean;
  costingMethod?: ListsAccountingTypes.ItemCostingMethod;
  rate?: number;
  costingMethodDisplay?: string;
  unitsType?: PlatformCore.RecordRef;
  stockUnit?: PlatformCore.RecordRef;
  purchaseUnit?: PlatformCore.RecordRef;
  saleUnit?: PlatformCore.RecordRef;
  trackLandedCost?: boolean;
  matrixItemNameTemplate?: string;
  billingSchedule?: PlatformCore.RecordRef;
  deferredRevenueAccount?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  stockDescription?: string;
  producer?: boolean;
  manufacturer?: string;
  mpn?: string;
  multManufactureAddr?: boolean;
  manufactureraddr1?: string;
  manufacturerCity?: string;
  manufacturerState?: string;
  manufacturerZip?: string;
  countryOfManufacture?: PlatformCommonTypes.Country;
  effectiveBomControl?: ListsAccountingTypes.AssemblyItemEffectiveBomControl;
  defaultRevision?: string;
  roundUpAsComponent?: boolean;
  purchaseOrderQuantity?: number;
  purchaseOrderAmount?: number;
  purchaseOrderQuantityDiff?: number;
  receiptQuantity?: number;
  receiptAmount?: number;
  receiptQuantityDiff?: number;
  isDropShipItem?: boolean;
  isPhantom?: boolean;
  defaultItemShipMethod?: PlatformCore.RecordRef;
  itemCarrier?: PlatformCommonTypes.ShippingCarrier;
  itemShipMethodList?: PlatformCore.RecordRefList;
  manufacturerTaxId?: string;
  scheduleBNumber?: string;
  scheduleBQuantity?: number;
  scheduleBCode?: PlatformCore.RecordRef;
  manufacturerTariff?: string;
  preferenceCriterion?: ListsAccountingTypes.ItemPreferenceCriterion;
  issueProduct?: PlatformCore.RecordRef;
  minimumQuantity?: number;
  lastInvtCountDate?: SoapTypes.Dateish;
  nextInvtCountDate?: SoapTypes.Dateish;
  invtCountInterval?: number;
  invtClassification?: ListsAccountingTypes.ItemInvtClassification;
  enforceMinQtyInternally?: boolean;
  maximumQuantity?: number;
  softDescriptor?: PlatformCore.RecordRef;
  isSpecialWorkOrderItem?: boolean;
  costCategory?: PlatformCore.RecordRef;
  pricesIncludeTax?: boolean;
  prodQtyVarianceAcct?: PlatformCore.RecordRef;
  prodPriceVarianceAcct?: PlatformCore.RecordRef;
  purchasePriceVarianceAcct?: PlatformCore.RecordRef;
  quantityPricingSchedule?: PlatformCore.RecordRef;
  buildEntireAssembly?: boolean;
  quantityOnHand?: number;
  useMarginalRates?: boolean;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  isHazmatItem?: boolean;
  hazmatId?: string;
  hazmatShippingName?: string;
  hazmatHazardClass?: string;
  hazmatPackingGroup?: ListsAccountingTypes.HazmatPackingGroup;
  hazmatItemUnits?: string;
  hazmatItemUnitsQty?: number;
  costEstimate?: number;
  transferPrice?: number;
  overallQuantityPricingType?: ListsAccountingTypes.ItemOverallQuantityPricingType;
  pricingGroup?: PlatformCore.RecordRef;
  intercoCogsAccount?: PlatformCore.RecordRef;
  vsoePrice?: number;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  itemRevenueCategory?: PlatformCore.RecordRef;
  unbuildVarianceAccount?: PlatformCore.RecordRef;
  deferRevRec?: boolean;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revenueAllocationGroup?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  directRevenuePosting?: boolean;
  dropshipExpenseAccount?: PlatformCore.RecordRef;
  preferredLocation?: PlatformCore.RecordRef;
  isStorePickupAllowed?: boolean;
  totalValue?: number;
  useBins?: boolean;
  averageCost?: number;
  leadTime?: number;
  autoLeadTime?: boolean;
  buildTime?: number;
  lastPurchasePrice?: number;
  purchaseDescription?: string;
  safetyStockLevel?: number;
  safetyStockLevelDays?: number;
  seasonalDemand?: boolean;
  reorderMultiple?: number;
  cost?: number;
  reorderPoint?: number;
  demandModifier?: number;
  distributionNetwork?: PlatformCore.RecordRef;
  distributionCategory?: PlatformCore.RecordRef;
  preferredStockLevel?: number;
  autoReorderPoint?: boolean;
  autoPreferredStockLevel?: boolean;
  preferredStockLevelDays?: number;
  quantityCommitted?: number;
  shipIndividually?: boolean;
  quantityAvailable?: number;
  shipPackage?: PlatformCore.RecordRef;
  quantityBackOrdered?: number;
  storeDisplayName?: string;
  defaultReturnCost?: number;
  supplyReplenishmentMethod?: PlatformCore.RecordRef;
  alternateDemandSourceItem?: PlatformCore.RecordRef;
  fixedLotSize?: number;
  supplyType?: PlatformCore.RecordRef;
  demandTimeFence?: number;
  supplyTimeFence?: number;
  rescheduleInDays?: number;
  rescheduleOutDays?: number;
  supplyLotSizingMethod?: PlatformCore.RecordRef;
  demandSource?: PlatformCore.RecordRef;
  quantityOnOrder?: number;
  storeDisplayThumbnail?: PlatformCore.RecordRef;
  storeDisplayImage?: PlatformCore.RecordRef;
  storeDescription?: string;
  storeDetailedDescription?: string;
  storeItemTemplate?: PlatformCore.RecordRef;
  pageTitle?: string;
  urlComponent?: string;
  metaTagHtml?: string;
  excludeFromSitemap?: boolean;
  sitemapPriority?: string;
  searchKeywords?: string;
  isDonationItem?: boolean;
  showDefaultDonationAmount?: boolean;
  maxDonationAmount?: number;
  dontShowPrice?: boolean;
  noPriceMessage?: string;
  outOfStockMessage?: string;
  shoppingDotComCategory?: string;
  outOfStockBehavior?: ListsAccountingTypes.ItemOutOfStockBehavior;
  shopzillaCategoryId?: number;
  nexTagCategory?: string;
  productFeedList?: ProductFeedList;
  relatedItemsDescription?: string;
  onSpecial?: boolean;
  specialsDescription?: string;
  featuredDescription?: string;
  itemOptionsList?: ItemOptionsList;
  itemNumberOptionsList?: PlatformCore.RecordRefList;
  itemVendorList?: ItemVendorList;
  pricingMatrix?: PricingMatrix;
  memberList?: ItemMemberList;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  billOfMaterialsList?: AssemblyItemBillOfMaterialsList;
  locationsList?: InventoryItemLocationsList;
  siteCategoryList?: SiteCategoryList;
  binNumberList?: InventoryItemBinNumberList;
  translationsList?: TranslationList;
  presentationItemList?: PresentationItemList;
  hierarchyVersionsList?: AssemblyItemHierarchyVersionsList;
  futureHorizon?: number;
  consumptionUnit?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: AssemblyItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.vendorName = props.vendorName;
    this.parent = props.parent;
    this.printItems = props.printItems;
    this.vendor = props.vendor;
    this.isOnline = props.isOnline;
    this.isGcoCompliant = props.isGcoCompliant;
    this.offerSupport = props.offerSupport;
    this.isInactive = props.isInactive;
    this.availableToPartners = props.availableToPartners;
    this.subsidiaryList = props.subsidiaryList;
    this.department = props.department;
    this.includeChildren = props.includeChildren;
    this.clazz = props.clazz;
    this.location = props.location;
    this.description = props.description;
    this.cogsAccount = props.cogsAccount;
    this.incomeAccount = props.incomeAccount;
    this.intercoIncomeAccount = props.intercoIncomeAccount;
    this.assetAccount = props.assetAccount;
    this.matchBillToReceipt = props.matchBillToReceipt;
    this.billQtyVarianceAcct = props.billQtyVarianceAcct;
    this.billPriceVarianceAcct = props.billPriceVarianceAcct;
    this.billExchRateVarianceAcct = props.billExchRateVarianceAcct;
    this.gainLossAccount = props.gainLossAccount;
    this.salesTaxCode = props.salesTaxCode;
    this.useComponentYield = props.useComponentYield;
    this.wipVarianceAcct = props.wipVarianceAcct;
    this.purchaseTaxCode = props.purchaseTaxCode;
    this.scrapAcct = props.scrapAcct;
    this.taxSchedule = props.taxSchedule;
    this.wipAcct = props.wipAcct;
    this.shippingCost = props.shippingCost;
    this.handlingCost = props.handlingCost;
    this.weight = props.weight;
    this.weightUnit = props.weightUnit;
    this.isTaxable = props.isTaxable;
    this.costingMethod = props.costingMethod;
    this.rate = props.rate;
    this.costingMethodDisplay = props.costingMethodDisplay;
    this.unitsType = props.unitsType;
    this.stockUnit = props.stockUnit;
    this.purchaseUnit = props.purchaseUnit;
    this.saleUnit = props.saleUnit;
    this.trackLandedCost = props.trackLandedCost;
    this.matrixItemNameTemplate = props.matrixItemNameTemplate;
    this.billingSchedule = props.billingSchedule;
    this.deferredRevenueAccount = props.deferredRevenueAccount;
    this.revRecSchedule = props.revRecSchedule;
    this.stockDescription = props.stockDescription;
    this.producer = props.producer;
    this.manufacturer = props.manufacturer;
    this.mpn = props.mpn;
    this.multManufactureAddr = props.multManufactureAddr;
    this.manufactureraddr1 = props.manufactureraddr1;
    this.manufacturerCity = props.manufacturerCity;
    this.manufacturerState = props.manufacturerState;
    this.manufacturerZip = props.manufacturerZip;
    this.countryOfManufacture = props.countryOfManufacture;
    this.effectiveBomControl = props.effectiveBomControl;
    this.defaultRevision = props.defaultRevision;
    this.roundUpAsComponent = props.roundUpAsComponent;
    this.purchaseOrderQuantity = props.purchaseOrderQuantity;
    this.purchaseOrderAmount = props.purchaseOrderAmount;
    this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
    this.receiptQuantity = props.receiptQuantity;
    this.receiptAmount = props.receiptAmount;
    this.receiptQuantityDiff = props.receiptQuantityDiff;
    this.isDropShipItem = props.isDropShipItem;
    this.isPhantom = props.isPhantom;
    this.defaultItemShipMethod = props.defaultItemShipMethod;
    this.itemCarrier = props.itemCarrier;
    this.itemShipMethodList = props.itemShipMethodList;
    this.manufacturerTaxId = props.manufacturerTaxId;
    this.scheduleBNumber = props.scheduleBNumber;
    this.scheduleBQuantity = props.scheduleBQuantity;
    this.scheduleBCode = props.scheduleBCode;
    this.manufacturerTariff = props.manufacturerTariff;
    this.preferenceCriterion = props.preferenceCriterion;
    this.issueProduct = props.issueProduct;
    this.minimumQuantity = props.minimumQuantity;
    this.lastInvtCountDate = props.lastInvtCountDate;
    this.nextInvtCountDate = props.nextInvtCountDate;
    this.invtCountInterval = props.invtCountInterval;
    this.invtClassification = props.invtClassification;
    this.enforceMinQtyInternally = props.enforceMinQtyInternally;
    this.maximumQuantity = props.maximumQuantity;
    this.softDescriptor = props.softDescriptor;
    this.isSpecialWorkOrderItem = props.isSpecialWorkOrderItem;
    this.costCategory = props.costCategory;
    this.pricesIncludeTax = props.pricesIncludeTax;
    this.prodQtyVarianceAcct = props.prodQtyVarianceAcct;
    this.prodPriceVarianceAcct = props.prodPriceVarianceAcct;
    this.purchasePriceVarianceAcct = props.purchasePriceVarianceAcct;
    this.quantityPricingSchedule = props.quantityPricingSchedule;
    this.buildEntireAssembly = props.buildEntireAssembly;
    this.quantityOnHand = props.quantityOnHand;
    this.useMarginalRates = props.useMarginalRates;
    this.costEstimateType = props.costEstimateType;
    this.isHazmatItem = props.isHazmatItem;
    this.hazmatId = props.hazmatId;
    this.hazmatShippingName = props.hazmatShippingName;
    this.hazmatHazardClass = props.hazmatHazardClass;
    this.hazmatPackingGroup = props.hazmatPackingGroup;
    this.hazmatItemUnits = props.hazmatItemUnits;
    this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
    this.costEstimate = props.costEstimate;
    this.transferPrice = props.transferPrice;
    this.overallQuantityPricingType = props.overallQuantityPricingType;
    this.pricingGroup = props.pricingGroup;
    this.intercoCogsAccount = props.intercoCogsAccount;
    this.vsoePrice = props.vsoePrice;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.itemRevenueCategory = props.itemRevenueCategory;
    this.unbuildVarianceAccount = props.unbuildVarianceAccount;
    this.deferRevRec = props.deferRevRec;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.revRecForecastRule = props.revRecForecastRule;
    this.revenueAllocationGroup = props.revenueAllocationGroup;
    this.createRevenuePlansOn = props.createRevenuePlansOn;
    this.directRevenuePosting = props.directRevenuePosting;
    this.dropshipExpenseAccount = props.dropshipExpenseAccount;
    this.preferredLocation = props.preferredLocation;
    this.isStorePickupAllowed = props.isStorePickupAllowed;
    this.totalValue = props.totalValue;
    this.useBins = props.useBins;
    this.averageCost = props.averageCost;
    this.leadTime = props.leadTime;
    this.autoLeadTime = props.autoLeadTime;
    this.buildTime = props.buildTime;
    this.lastPurchasePrice = props.lastPurchasePrice;
    this.purchaseDescription = props.purchaseDescription;
    this.safetyStockLevel = props.safetyStockLevel;
    this.safetyStockLevelDays = props.safetyStockLevelDays;
    this.seasonalDemand = props.seasonalDemand;
    this.reorderMultiple = props.reorderMultiple;
    this.cost = props.cost;
    this.reorderPoint = props.reorderPoint;
    this.demandModifier = props.demandModifier;
    this.distributionNetwork = props.distributionNetwork;
    this.distributionCategory = props.distributionCategory;
    this.preferredStockLevel = props.preferredStockLevel;
    this.autoReorderPoint = props.autoReorderPoint;
    this.autoPreferredStockLevel = props.autoPreferredStockLevel;
    this.preferredStockLevelDays = props.preferredStockLevelDays;
    this.quantityCommitted = props.quantityCommitted;
    this.shipIndividually = props.shipIndividually;
    this.quantityAvailable = props.quantityAvailable;
    this.shipPackage = props.shipPackage;
    this.quantityBackOrdered = props.quantityBackOrdered;
    this.storeDisplayName = props.storeDisplayName;
    this.defaultReturnCost = props.defaultReturnCost;
    this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
    this.alternateDemandSourceItem = props.alternateDemandSourceItem;
    this.fixedLotSize = props.fixedLotSize;
    this.supplyType = props.supplyType;
    this.demandTimeFence = props.demandTimeFence;
    this.supplyTimeFence = props.supplyTimeFence;
    this.rescheduleInDays = props.rescheduleInDays;
    this.rescheduleOutDays = props.rescheduleOutDays;
    this.supplyLotSizingMethod = props.supplyLotSizingMethod;
    this.demandSource = props.demandSource;
    this.quantityOnOrder = props.quantityOnOrder;
    this.storeDisplayThumbnail = props.storeDisplayThumbnail;
    this.storeDisplayImage = props.storeDisplayImage;
    this.storeDescription = props.storeDescription;
    this.storeDetailedDescription = props.storeDetailedDescription;
    this.storeItemTemplate = props.storeItemTemplate;
    this.pageTitle = props.pageTitle;
    this.urlComponent = props.urlComponent;
    this.metaTagHtml = props.metaTagHtml;
    this.excludeFromSitemap = props.excludeFromSitemap;
    this.sitemapPriority = props.sitemapPriority;
    this.searchKeywords = props.searchKeywords;
    this.isDonationItem = props.isDonationItem;
    this.showDefaultDonationAmount = props.showDefaultDonationAmount;
    this.maxDonationAmount = props.maxDonationAmount;
    this.dontShowPrice = props.dontShowPrice;
    this.noPriceMessage = props.noPriceMessage;
    this.outOfStockMessage = props.outOfStockMessage;
    this.shoppingDotComCategory = props.shoppingDotComCategory;
    this.outOfStockBehavior = props.outOfStockBehavior;
    this.shopzillaCategoryId = props.shopzillaCategoryId;
    this.nexTagCategory = props.nexTagCategory;
    this.productFeedList = props.productFeedList;
    this.relatedItemsDescription = props.relatedItemsDescription;
    this.onSpecial = props.onSpecial;
    this.specialsDescription = props.specialsDescription;
    this.featuredDescription = props.featuredDescription;
    this.itemOptionsList = props.itemOptionsList;
    this.itemNumberOptionsList = props.itemNumberOptionsList;
    this.itemVendorList = props.itemVendorList;
    this.pricingMatrix = props.pricingMatrix;
    this.memberList = props.memberList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.billOfMaterialsList = props.billOfMaterialsList;
    this.locationsList = props.locationsList;
    this.siteCategoryList = props.siteCategoryList;
    this.binNumberList = props.binNumberList;
    this.translationsList = props.translationsList;
    this.presentationItemList = props.presentationItemList;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.futureHorizon = props.futureHorizon;
    this.consumptionUnit = props.consumptionUnit;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class TranslationList extends SoapTypes.Base {
  translation?: Translation[];
  replaceAll?: boolean;
  constructor(props: TranslationList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.translation = props.translation;
    this.replaceAll = props.replaceAll;
  }
}

export class ServiceResaleItemHierarchyVersionsList extends SoapTypes.Base {
  serviceResaleItemHierarchyVersions?: ServiceResaleItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: ServiceResaleItemHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.serviceResaleItemHierarchyVersions = props.serviceResaleItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class ServiceSaleItemHierarchyVersionsList extends SoapTypes.Base {
  serviceSaleItemHierarchyVersions?: ServiceSaleItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: ServiceSaleItemHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.serviceSaleItemHierarchyVersions = props.serviceSaleItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class GiftCertificateSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.GiftCertificateSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: GiftCertificateSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class Price extends SoapTypes.Base {
  value?: number;
  quantity?: number;
  constructor(props: Price) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.value = props.value;
    this.quantity = props.quantity;
  }
}

export class NoteTypeSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.NoteTypeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: NoteTypeSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class ItemGroup extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  includeStartEndLines?: boolean;
  isVsoeBundle?: boolean;
  defaultItemShipMethod?: PlatformCore.RecordRef;
  availableToPartners?: boolean;
  isInactive?: boolean;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  vendorName?: string;
  issueProduct?: PlatformCore.RecordRef;
  parent?: PlatformCore.RecordRef;
  description?: string;
  subsidiaryList?: PlatformCore.RecordRefList;
  includeChildren?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  itemCarrier?: PlatformCommonTypes.ShippingCarrier;
  itemShipMethodList?: PlatformCore.RecordRefList;
  printItems?: boolean;
  memberList?: ItemMemberList;
  translationsList?: TranslationList;
  hierarchyVersionsList?: ItemGroupHierarchyVersionsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: ItemGroup) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.includeStartEndLines = props.includeStartEndLines;
    this.isVsoeBundle = props.isVsoeBundle;
    this.defaultItemShipMethod = props.defaultItemShipMethod;
    this.availableToPartners = props.availableToPartners;
    this.isInactive = props.isInactive;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.vendorName = props.vendorName;
    this.issueProduct = props.issueProduct;
    this.parent = props.parent;
    this.description = props.description;
    this.subsidiaryList = props.subsidiaryList;
    this.includeChildren = props.includeChildren;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.itemCarrier = props.itemCarrier;
    this.itemShipMethodList = props.itemShipMethodList;
    this.printItems = props.printItems;
    this.memberList = props.memberList;
    this.translationsList = props.translationsList;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class PresentationItemList extends SoapTypes.Base {
  presentationItem?: PlatformCommon.PresentationItem[];
  replaceAll?: boolean;
  constructor(props: PresentationItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.presentationItem = props.presentationItem;
    this.replaceAll = props.replaceAll;
  }
}

export class RevRecTemplateSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.RevRecTemplateSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: RevRecTemplateSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class LotNumberedInventoryItemHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: LotNumberedInventoryItemHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class MarkupItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  description?: string;
  nonPosting?: boolean;
  account?: PlatformCore.RecordRef;
  includeChildren?: boolean;
  rate?: string;
  isPreTax?: boolean;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  issueProduct?: PlatformCore.RecordRef;
  upcCode?: string;
  displayName?: string;
  vendorName?: string;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiaryList?: PlatformCore.RecordRefList;
  taxSchedule?: PlatformCore.RecordRef;
  deferredRevenueAccount?: PlatformCore.RecordRef;
  expenseAccount?: PlatformCore.RecordRef;
  incomeAccount?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  salesTaxCode?: PlatformCore.RecordRef;
  translationsList?: TranslationList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: MarkupItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.description = props.description;
    this.nonPosting = props.nonPosting;
    this.account = props.account;
    this.includeChildren = props.includeChildren;
    this.rate = props.rate;
    this.isPreTax = props.isPreTax;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.issueProduct = props.issueProduct;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.vendorName = props.vendorName;
    this.parent = props.parent;
    this.isInactive = props.isInactive;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiaryList = props.subsidiaryList;
    this.taxSchedule = props.taxSchedule;
    this.deferredRevenueAccount = props.deferredRevenueAccount;
    this.expenseAccount = props.expenseAccount;
    this.incomeAccount = props.incomeAccount;
    this.revRecSchedule = props.revRecSchedule;
    this.salesTaxCode = props.salesTaxCode;
    this.translationsList = props.translationsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class SubsidiarySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.SubsidiarySearchRowBasic;
  addressJoin?: PlatformCommon.AddressSearchRowBasic;
  defaultAdvanceToApplyAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  returnAddressJoin?: PlatformCommon.AddressSearchRowBasic;
  shippingAddressJoin?: PlatformCommon.AddressSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: SubsidiarySearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.addressJoin = props.addressJoin;
    this.defaultAdvanceToApplyAccountJoin = props.defaultAdvanceToApplyAccountJoin;
    this.returnAddressJoin = props.returnAddressJoin;
    this.shippingAddressJoin = props.shippingAddressJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class NonInventorySaleItemHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: NonInventorySaleItemHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class PaymentMethodSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.PaymentMethodSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: PaymentMethodSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class OtherNameCategorySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.OtherNameCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: OtherNameCategorySearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class BillingScheduleRecurrence extends SoapTypes.Base {
  recurrenceId?: number;
  count?: number;
  units?: ListsAccountingTypes.BillingScheduleRecurrenceRecurrenceUnits;
  relativeToPrevious?: boolean;
  recurrenceDate?: SoapTypes.Dateish;
  amount?: number;
  paymentTerms?: PlatformCore.RecordRef;
  constructor(props: BillingScheduleRecurrence) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.recurrenceId = props.recurrenceId;
    this.count = props.count;
    this.units = props.units;
    this.relativeToPrevious = props.relativeToPrevious;
    this.recurrenceDate = props.recurrenceDate;
    this.amount = props.amount;
    this.paymentTerms = props.paymentTerms;
  }
}

export class ItemVendorList extends SoapTypes.Base {
  itemVendor?: ItemVendor[];
  replaceAll?: boolean;
  constructor(props: ItemVendorList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.itemVendor = props.itemVendor;
    this.replaceAll = props.replaceAll;
  }
}

export class ClassificationSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ClassificationSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: ClassificationSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class Currency extends PlatformCore.Record {
  name?: string;
  symbol?: string;
  isBaseCurrency?: boolean;
  isInactive?: boolean;
  overrideCurrencyFormat?: boolean;
  displaySymbol?: string;
  symbolPlacement?: PlatformCommonTypes.CurrencySymbolPlacement;
  locale?: ListsAccountingTypes.CurrencyLocale;
  formatSample?: string;
  exchangeRate?: number;
  fxRateUpdateTimezone?: ListsAccountingTypes.CurrencyFxRateUpdateTimezone;
  inclInFxRateUpdates?: boolean;
  currencyPrecision?: ListsAccountingTypes.CurrencyCurrencyPrecision;
  internalId?: string;
  externalId?: string;
  constructor(props: Currency) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.symbol = props.symbol;
    this.isBaseCurrency = props.isBaseCurrency;
    this.isInactive = props.isInactive;
    this.overrideCurrencyFormat = props.overrideCurrencyFormat;
    this.displaySymbol = props.displaySymbol;
    this.symbolPlacement = props.symbolPlacement;
    this.locale = props.locale;
    this.formatSample = props.formatSample;
    this.exchangeRate = props.exchangeRate;
    this.fxRateUpdateTimezone = props.fxRateUpdateTimezone;
    this.inclInFxRateUpdates = props.inclInFxRateUpdates;
    this.currencyPrecision = props.currencyPrecision;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class SerializedInventoryItemLocations extends SoapTypes.Base {
  location?: string;
  quantityOnHand?: number;
  onHandValueMli?: number;
  serialNumbers?: string;
  averageCostMli?: number;
  lastPurchasePriceMli?: number;
  reorderPoint?: number;
  locationAllowStorePickup?: boolean;
  locationStorePickupBufferStock?: number;
  locationQtyAvailForStorePickup?: number;
  preferredStockLevel?: number;
  leadTime?: number;
  defaultReturnCost?: number;
  isWip?: boolean;
  safetyStockLevel?: number;
  cost?: number;
  inventoryCostTemplate?: PlatformCore.RecordRef;
  buildTime?: number;
  lastInvtCountDate?: SoapTypes.Dateish;
  nextInvtCountDate?: SoapTypes.Dateish;
  invtCountInterval?: number;
  invtClassification?: ListsAccountingTypes.ItemInvtClassification;
  costingLotSize?: number;
  quantityOnOrder?: number;
  quantityCommitted?: number;
  quantityAvailable?: number;
  quantityBackOrdered?: number;
  locationId?: PlatformCore.RecordRef;
  supplyReplenishmentMethod?: PlatformCore.RecordRef;
  alternateDemandSourceItem?: PlatformCore.RecordRef;
  fixedLotSize?: number;
  periodicLotSizeType?: ListsAccountingTypes.PeriodicLotSizeType;
  periodicLotSizeDays?: number;
  supplyType?: PlatformCore.RecordRef;
  supplyLotSizingMethod?: PlatformCore.RecordRef;
  demandSource?: PlatformCore.RecordRef;
  backwardConsumptionDays?: number;
  forwardConsumptionDays?: number;
  demandTimeFence?: number;
  supplyTimeFence?: number;
  rescheduleInDays?: number;
  rescheduleOutDays?: number;
  constructor(props: SerializedInventoryItemLocations) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.location = props.location;
    this.quantityOnHand = props.quantityOnHand;
    this.onHandValueMli = props.onHandValueMli;
    this.serialNumbers = props.serialNumbers;
    this.averageCostMli = props.averageCostMli;
    this.lastPurchasePriceMli = props.lastPurchasePriceMli;
    this.reorderPoint = props.reorderPoint;
    this.locationAllowStorePickup = props.locationAllowStorePickup;
    this.locationStorePickupBufferStock = props.locationStorePickupBufferStock;
    this.locationQtyAvailForStorePickup = props.locationQtyAvailForStorePickup;
    this.preferredStockLevel = props.preferredStockLevel;
    this.leadTime = props.leadTime;
    this.defaultReturnCost = props.defaultReturnCost;
    this.isWip = props.isWip;
    this.safetyStockLevel = props.safetyStockLevel;
    this.cost = props.cost;
    this.inventoryCostTemplate = props.inventoryCostTemplate;
    this.buildTime = props.buildTime;
    this.lastInvtCountDate = props.lastInvtCountDate;
    this.nextInvtCountDate = props.nextInvtCountDate;
    this.invtCountInterval = props.invtCountInterval;
    this.invtClassification = props.invtClassification;
    this.costingLotSize = props.costingLotSize;
    this.quantityOnOrder = props.quantityOnOrder;
    this.quantityCommitted = props.quantityCommitted;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityBackOrdered = props.quantityBackOrdered;
    this.locationId = props.locationId;
    this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
    this.alternateDemandSourceItem = props.alternateDemandSourceItem;
    this.fixedLotSize = props.fixedLotSize;
    this.periodicLotSizeType = props.periodicLotSizeType;
    this.periodicLotSizeDays = props.periodicLotSizeDays;
    this.supplyType = props.supplyType;
    this.supplyLotSizingMethod = props.supplyLotSizingMethod;
    this.demandSource = props.demandSource;
    this.backwardConsumptionDays = props.backwardConsumptionDays;
    this.forwardConsumptionDays = props.forwardConsumptionDays;
    this.demandTimeFence = props.demandTimeFence;
    this.supplyTimeFence = props.supplyTimeFence;
    this.rescheduleInDays = props.rescheduleInDays;
    this.rescheduleOutDays = props.rescheduleOutDays;
  }
}

export class RevRecScheduleRecurrence extends SoapTypes.Base {
  incomeaccount?: PlatformCore.RecordRef;
  periodOffset?: number;
  recamount?: string;
  constructor(props: RevRecScheduleRecurrence) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.incomeaccount = props.incomeaccount;
    this.periodOffset = props.periodOffset;
    this.recamount = props.recamount;
  }
}

export class LocationSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.LocationSearchBasic;
  addressJoin?: PlatformCommon.AddressSearchBasic;
  returnAddressJoin?: PlatformCommon.AddressSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: LocationSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.addressJoin = props.addressJoin;
    this.returnAddressJoin = props.returnAddressJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class AssemblyItemHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: AssemblyItemHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class GiftCertificateItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  includeChildren?: boolean;
  parent?: PlatformCore.RecordRef;
  isOnline?: boolean;
  isGcoCompliant?: boolean;
  offerSupport?: boolean;
  isInactive?: boolean;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiaryList?: PlatformCore.RecordRefList;
  salesDescription?: string;
  incomeAccount?: PlatformCore.RecordRef;
  liabilityAccount?: PlatformCore.RecordRef;
  daysBeforeExpiration?: number;
  isTaxable?: boolean;
  rate?: number;
  urlComponent?: string;
  salesTaxCode?: PlatformCore.RecordRef;
  pricesIncludeTax?: boolean;
  taxSchedule?: PlatformCore.RecordRef;
  costEstimate?: number;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  billingSchedule?: PlatformCore.RecordRef;
  issueProduct?: PlatformCore.RecordRef;
  isFulfillable?: boolean;
  storeDisplayName?: string;
  storeDisplayThumbnail?: PlatformCore.RecordRef;
  storeDisplayImage?: PlatformCore.RecordRef;
  storeDescription?: string;
  storeDetailedDescription?: string;
  storeItemTemplate?: PlatformCore.RecordRef;
  pageTitle?: string;
  metaTagHtml?: string;
  excludeFromSitemap?: boolean;
  sitemapPriority?: string;
  searchKeywords?: string;
  isDonationItem?: boolean;
  showDefaultDonationAmount?: boolean;
  maxDonationAmount?: number;
  dontShowPrice?: boolean;
  noPriceMessage?: string;
  outOfStockMessage?: string;
  onSpecial?: boolean;
  outOfStockBehavior?: ListsAccountingTypes.ItemOutOfStockBehavior;
  specialsDescription?: string;
  featuredDescription?: string;
  relatedItemsDescription?: string;
  pricingMatrix?: PricingMatrix;
  authCodesList?: GiftCertificateItemAuthCodesList;
  siteCategoryList?: SiteCategoryList;
  translationsList?: TranslationList;
  itemOptionsList?: ItemOptionsList;
  presentationItemList?: PresentationItemList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: GiftCertificateItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.includeChildren = props.includeChildren;
    this.parent = props.parent;
    this.isOnline = props.isOnline;
    this.isGcoCompliant = props.isGcoCompliant;
    this.offerSupport = props.offerSupport;
    this.isInactive = props.isInactive;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiaryList = props.subsidiaryList;
    this.salesDescription = props.salesDescription;
    this.incomeAccount = props.incomeAccount;
    this.liabilityAccount = props.liabilityAccount;
    this.daysBeforeExpiration = props.daysBeforeExpiration;
    this.isTaxable = props.isTaxable;
    this.rate = props.rate;
    this.urlComponent = props.urlComponent;
    this.salesTaxCode = props.salesTaxCode;
    this.pricesIncludeTax = props.pricesIncludeTax;
    this.taxSchedule = props.taxSchedule;
    this.costEstimate = props.costEstimate;
    this.costEstimateType = props.costEstimateType;
    this.billingSchedule = props.billingSchedule;
    this.issueProduct = props.issueProduct;
    this.isFulfillable = props.isFulfillable;
    this.storeDisplayName = props.storeDisplayName;
    this.storeDisplayThumbnail = props.storeDisplayThumbnail;
    this.storeDisplayImage = props.storeDisplayImage;
    this.storeDescription = props.storeDescription;
    this.storeDetailedDescription = props.storeDetailedDescription;
    this.storeItemTemplate = props.storeItemTemplate;
    this.pageTitle = props.pageTitle;
    this.metaTagHtml = props.metaTagHtml;
    this.excludeFromSitemap = props.excludeFromSitemap;
    this.sitemapPriority = props.sitemapPriority;
    this.searchKeywords = props.searchKeywords;
    this.isDonationItem = props.isDonationItem;
    this.showDefaultDonationAmount = props.showDefaultDonationAmount;
    this.maxDonationAmount = props.maxDonationAmount;
    this.dontShowPrice = props.dontShowPrice;
    this.noPriceMessage = props.noPriceMessage;
    this.outOfStockMessage = props.outOfStockMessage;
    this.onSpecial = props.onSpecial;
    this.outOfStockBehavior = props.outOfStockBehavior;
    this.specialsDescription = props.specialsDescription;
    this.featuredDescription = props.featuredDescription;
    this.relatedItemsDescription = props.relatedItemsDescription;
    this.pricingMatrix = props.pricingMatrix;
    this.authCodesList = props.authCodesList;
    this.siteCategoryList = props.siteCategoryList;
    this.translationsList = props.translationsList;
    this.itemOptionsList = props.itemOptionsList;
    this.presentationItemList = props.presentationItemList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class GlobalAccountMappingSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.GlobalAccountMappingSearchBasic;
  classJoin?: PlatformCommon.ClassificationSearchBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchBasic;
  destinationAccountJoin?: PlatformCommon.AccountSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  sourceAccountJoin?: PlatformCommon.AccountSearchBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: GlobalAccountMappingSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.classJoin = props.classJoin;
    this.departmentJoin = props.departmentJoin;
    this.destinationAccountJoin = props.destinationAccountJoin;
    this.locationJoin = props.locationJoin;
    this.sourceAccountJoin = props.sourceAccountJoin;
    this.subsidiaryJoin = props.subsidiaryJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class NoteTypeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: NoteTypeSearch;
  columns?: NoteTypeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: NoteTypeSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class RevRecScheduleSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.RevRecScheduleSearchRowBasic;
  appliedToTransactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: RevRecScheduleSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.appliedToTransactionJoin = props.appliedToTransactionJoin;
    this.customerJoin = props.customerJoin;
    this.itemJoin = props.itemJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
  }
}

export class ServicePurchaseItemHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: ServicePurchaseItemHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class Classification extends PlatformCore.Record {
  name?: string;
  includeChildren?: boolean;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  classTranslationList?: ClassTranslationList;
  subsidiaryList?: PlatformCore.RecordRefList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Classification) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.includeChildren = props.includeChildren;
    this.parent = props.parent;
    this.isInactive = props.isInactive;
    this.classTranslationList = props.classTranslationList;
    this.subsidiaryList = props.subsidiaryList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ContactRoleSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ContactRoleSearch;
  columns?: ContactRoleSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ContactRoleSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class BomSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.BomSearchRowBasic;
  assemblyItemJoin?: PlatformCommon.AssemblyItemBomSearchRowBasic;
  revisionJoin?: PlatformCommon.BomRevisionSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: BomSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.assemblyItemJoin = props.assemblyItemJoin;
    this.revisionJoin = props.revisionJoin;
    this.transactionJoin = props.transactionJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class UnitsTypeUom extends SoapTypes.Base {
  internalId?: string;
  unitName?: string;
  pluralName?: string;
  abbreviation?: string;
  pluralAbbreviation?: string;
  conversionRate?: number;
  baseUnit?: boolean;
  constructor(props: UnitsTypeUom) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.internalId = props.internalId;
    this.unitName = props.unitName;
    this.pluralName = props.pluralName;
    this.abbreviation = props.abbreviation;
    this.pluralAbbreviation = props.pluralAbbreviation;
    this.conversionRate = props.conversionRate;
    this.baseUnit = props.baseUnit;
  }
}

export class AssemblyItemBillOfMaterials extends SoapTypes.Base {
  billOfMaterials?: PlatformCore.RecordRef;
  currentRevision?: string;
  masterDefault?: boolean;
  defaultForLocationList?: PlatformCore.RecordRefList;
  inactive?: string;
  memo?: string;
  constructor(props: AssemblyItemBillOfMaterials) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.billOfMaterials = props.billOfMaterials;
    this.currentRevision = props.currentRevision;
    this.masterDefault = props.masterDefault;
    this.defaultForLocationList = props.defaultForLocationList;
    this.inactive = props.inactive;
    this.memo = props.memo;
  }
}

export class FairValuePriceSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.FairValuePriceSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: FairValuePriceSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class DescriptionItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  description?: string;
  includeChildren?: boolean;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  issueProduct?: PlatformCore.RecordRef;
  isInactive?: boolean;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiaryList?: PlatformCore.RecordRefList;
  translationsList?: TranslationList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: DescriptionItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.description = props.description;
    this.includeChildren = props.includeChildren;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.issueProduct = props.issueProduct;
    this.isInactive = props.isInactive;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiaryList = props.subsidiaryList;
    this.translationsList = props.translationsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class SubsidiaryTaxRegistration extends SoapTypes.Base {
  id?: number;
  nexusCountry?: PlatformCommonTypes.Country;
  nexus?: PlatformCore.RecordRef;
  taxAgency?: PlatformCore.RecordRef;
  taxRegistrationNumber?: string;
  taxEngine?: PlatformCore.RecordRef;
  effectiveFrom?: SoapTypes.Dateish;
  validUntil?: SoapTypes.Dateish;
  constructor(props: SubsidiaryTaxRegistration) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.id = props.id;
    this.nexusCountry = props.nexusCountry;
    this.nexus = props.nexus;
    this.taxAgency = props.taxAgency;
    this.taxRegistrationNumber = props.taxRegistrationNumber;
    this.taxEngine = props.taxEngine;
    this.effectiveFrom = props.effectiveFrom;
    this.validUntil = props.validUntil;
  }
}

export class GiftCertificate extends PlatformCore.Record {
  giftCertCode?: string;
  sender?: string;
  name?: string;
  email?: string;
  message?: string;
  expirationDate?: SoapTypes.Dateish;
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  originalAmount?: number;
  amountRemaining?: number;
  internalId?: string;
  constructor(props: GiftCertificate) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.giftCertCode = props.giftCertCode;
    this.sender = props.sender;
    this.name = props.name;
    this.email = props.email;
    this.message = props.message;
    this.expirationDate = props.expirationDate;
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.originalAmount = props.originalAmount;
    this.amountRemaining = props.amountRemaining;
    this.internalId = props.internalId;
  }
}

export class SerializedInventoryItemLocationsList extends SoapTypes.Base {
  locations?: SerializedInventoryItemLocations[];
  replaceAll?: boolean;
  constructor(props: SerializedInventoryItemLocationsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.locations = props.locations;
    this.replaceAll = props.replaceAll;
  }
}

export class SalesRole extends PlatformCore.Record {
  name?: string;
  description?: string;
  isSalesRep?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: SalesRole) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.description = props.description;
    this.isSalesRep = props.isSalesRep;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class PaymentItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  description?: string;
  paymentMethod?: PlatformCore.RecordRef;
  undepFunds?: boolean;
  includeChildren?: boolean;
  issueProduct?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  displayName?: string;
  isInactive?: boolean;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiaryList?: PlatformCore.RecordRefList;
  translationsList?: TranslationList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: PaymentItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.description = props.description;
    this.paymentMethod = props.paymentMethod;
    this.undepFunds = props.undepFunds;
    this.includeChildren = props.includeChildren;
    this.issueProduct = props.issueProduct;
    this.account = props.account;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.displayName = props.displayName;
    this.isInactive = props.isInactive;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiaryList = props.subsidiaryList;
    this.translationsList = props.translationsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class RevRecTemplateRecurrence extends SoapTypes.Base {
  incomeaccount?: PlatformCore.RecordRef;
  periodOffset?: number;
  recamount?: string;
  constructor(props: RevRecTemplateRecurrence) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.incomeaccount = props.incomeaccount;
    this.periodOffset = props.periodOffset;
    this.recamount = props.recamount;
  }
}

export class KitItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  parent?: PlatformCore.RecordRef;
  printItems?: boolean;
  isOnline?: boolean;
  isGcoCompliant?: boolean;
  offerSupport?: boolean;
  isInactive?: boolean;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  subsidiaryList?: PlatformCore.RecordRefList;
  clazz?: PlatformCore.RecordRef;
  includeChildren?: boolean;
  location?: PlatformCore.RecordRef;
  description?: string;
  incomeAccount?: PlatformCore.RecordRef;
  taxSchedule?: PlatformCore.RecordRef;
  shippingCost?: number;
  handlingCost?: number;
  isTaxable?: boolean;
  deferRevRec?: boolean;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revenueAllocationGroup?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  directRevenuePosting?: boolean;
  contingentRevenueHandling?: boolean;
  revReclassFXAccount?: PlatformCore.RecordRef;
  salesTaxCode?: PlatformCore.RecordRef;
  weight?: number;
  weightUnit?: PlatformCore.RecordRef;
  rate?: number;
  billingSchedule?: PlatformCore.RecordRef;
  deferredRevenueAccount?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  stockDescription?: string;
  producer?: boolean;
  manufacturer?: string;
  mpn?: string;
  multManufactureAddr?: boolean;
  manufactureraddr1?: string;
  manufacturerCity?: string;
  manufacturerState?: string;
  manufacturerZip?: string;
  countryOfManufacture?: PlatformCommonTypes.Country;
  defaultItemShipMethod?: PlatformCore.RecordRef;
  itemCarrier?: PlatformCommonTypes.ShippingCarrier;
  itemShipMethodList?: PlatformCore.RecordRefList;
  manufacturerTaxId?: string;
  scheduleBNumber?: string;
  scheduleBQuantity?: number;
  scheduleBCode?: PlatformCore.RecordRef;
  manufacturerTariff?: string;
  preferenceCriterion?: ListsAccountingTypes.ItemPreferenceCriterion;
  issueProduct?: PlatformCore.RecordRef;
  minimumQuantity?: number;
  enforceMinQtyInternally?: boolean;
  maximumQuantity?: number;
  softDescriptor?: PlatformCore.RecordRef;
  isFulfillable?: boolean;
  pricesIncludeTax?: boolean;
  quantityPricingSchedule?: PlatformCore.RecordRef;
  useMarginalRates?: boolean;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  isHazmatItem?: boolean;
  hazmatId?: string;
  hazmatShippingName?: string;
  hazmatHazardClass?: string;
  hazmatPackingGroup?: ListsAccountingTypes.HazmatPackingGroup;
  hazmatItemUnits?: string;
  hazmatItemUnitsQty?: number;
  costEstimate?: number;
  overallQuantityPricingType?: ListsAccountingTypes.ItemOverallQuantityPricingType;
  pricingGroup?: PlatformCore.RecordRef;
  vsoePrice?: number;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  itemRevenueCategory?: PlatformCore.RecordRef;
  shipIndividually?: boolean;
  shipPackage?: PlatformCore.RecordRef;
  storeDisplayName?: string;
  storeDisplayThumbnail?: PlatformCore.RecordRef;
  outOfStockMessage?: string;
  storeDisplayImage?: PlatformCore.RecordRef;
  storeDescription?: string;
  storeDetailedDescription?: string;
  storeItemTemplate?: PlatformCore.RecordRef;
  pageTitle?: string;
  urlComponent?: string;
  metaTagHtml?: string;
  excludeFromSitemap?: boolean;
  sitemapPriority?: string;
  searchKeywords?: string;
  itemOptionsList?: ItemOptionsList;
  isDonationItem?: boolean;
  showDefaultDonationAmount?: boolean;
  maxDonationAmount?: number;
  dontShowPrice?: boolean;
  noPriceMessage?: string;
  shoppingDotComCategory?: string;
  shopzillaCategoryId?: number;
  outOfStockBehavior?: ListsAccountingTypes.ItemOutOfStockBehavior;
  nexTagCategory?: string;
  productFeedList?: ProductFeedList;
  relatedItemsDescription?: string;
  onSpecial?: boolean;
  specialsDescription?: string;
  featuredDescription?: string;
  pricingMatrix?: PricingMatrix;
  siteCategoryList?: SiteCategoryList;
  memberList?: ItemMemberList;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  translationsList?: TranslationList;
  presentationItemList?: PresentationItemList;
  hierarchyVersionsList?: KitItemHierarchyVersionsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: KitItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.parent = props.parent;
    this.printItems = props.printItems;
    this.isOnline = props.isOnline;
    this.isGcoCompliant = props.isGcoCompliant;
    this.offerSupport = props.offerSupport;
    this.isInactive = props.isInactive;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.subsidiaryList = props.subsidiaryList;
    this.clazz = props.clazz;
    this.includeChildren = props.includeChildren;
    this.location = props.location;
    this.description = props.description;
    this.incomeAccount = props.incomeAccount;
    this.taxSchedule = props.taxSchedule;
    this.shippingCost = props.shippingCost;
    this.handlingCost = props.handlingCost;
    this.isTaxable = props.isTaxable;
    this.deferRevRec = props.deferRevRec;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.revRecForecastRule = props.revRecForecastRule;
    this.revenueAllocationGroup = props.revenueAllocationGroup;
    this.createRevenuePlansOn = props.createRevenuePlansOn;
    this.directRevenuePosting = props.directRevenuePosting;
    this.contingentRevenueHandling = props.contingentRevenueHandling;
    this.revReclassFXAccount = props.revReclassFXAccount;
    this.salesTaxCode = props.salesTaxCode;
    this.weight = props.weight;
    this.weightUnit = props.weightUnit;
    this.rate = props.rate;
    this.billingSchedule = props.billingSchedule;
    this.deferredRevenueAccount = props.deferredRevenueAccount;
    this.revRecSchedule = props.revRecSchedule;
    this.stockDescription = props.stockDescription;
    this.producer = props.producer;
    this.manufacturer = props.manufacturer;
    this.mpn = props.mpn;
    this.multManufactureAddr = props.multManufactureAddr;
    this.manufactureraddr1 = props.manufactureraddr1;
    this.manufacturerCity = props.manufacturerCity;
    this.manufacturerState = props.manufacturerState;
    this.manufacturerZip = props.manufacturerZip;
    this.countryOfManufacture = props.countryOfManufacture;
    this.defaultItemShipMethod = props.defaultItemShipMethod;
    this.itemCarrier = props.itemCarrier;
    this.itemShipMethodList = props.itemShipMethodList;
    this.manufacturerTaxId = props.manufacturerTaxId;
    this.scheduleBNumber = props.scheduleBNumber;
    this.scheduleBQuantity = props.scheduleBQuantity;
    this.scheduleBCode = props.scheduleBCode;
    this.manufacturerTariff = props.manufacturerTariff;
    this.preferenceCriterion = props.preferenceCriterion;
    this.issueProduct = props.issueProduct;
    this.minimumQuantity = props.minimumQuantity;
    this.enforceMinQtyInternally = props.enforceMinQtyInternally;
    this.maximumQuantity = props.maximumQuantity;
    this.softDescriptor = props.softDescriptor;
    this.isFulfillable = props.isFulfillable;
    this.pricesIncludeTax = props.pricesIncludeTax;
    this.quantityPricingSchedule = props.quantityPricingSchedule;
    this.useMarginalRates = props.useMarginalRates;
    this.costEstimateType = props.costEstimateType;
    this.isHazmatItem = props.isHazmatItem;
    this.hazmatId = props.hazmatId;
    this.hazmatShippingName = props.hazmatShippingName;
    this.hazmatHazardClass = props.hazmatHazardClass;
    this.hazmatPackingGroup = props.hazmatPackingGroup;
    this.hazmatItemUnits = props.hazmatItemUnits;
    this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
    this.costEstimate = props.costEstimate;
    this.overallQuantityPricingType = props.overallQuantityPricingType;
    this.pricingGroup = props.pricingGroup;
    this.vsoePrice = props.vsoePrice;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.itemRevenueCategory = props.itemRevenueCategory;
    this.shipIndividually = props.shipIndividually;
    this.shipPackage = props.shipPackage;
    this.storeDisplayName = props.storeDisplayName;
    this.storeDisplayThumbnail = props.storeDisplayThumbnail;
    this.outOfStockMessage = props.outOfStockMessage;
    this.storeDisplayImage = props.storeDisplayImage;
    this.storeDescription = props.storeDescription;
    this.storeDetailedDescription = props.storeDetailedDescription;
    this.storeItemTemplate = props.storeItemTemplate;
    this.pageTitle = props.pageTitle;
    this.urlComponent = props.urlComponent;
    this.metaTagHtml = props.metaTagHtml;
    this.excludeFromSitemap = props.excludeFromSitemap;
    this.sitemapPriority = props.sitemapPriority;
    this.searchKeywords = props.searchKeywords;
    this.itemOptionsList = props.itemOptionsList;
    this.isDonationItem = props.isDonationItem;
    this.showDefaultDonationAmount = props.showDefaultDonationAmount;
    this.maxDonationAmount = props.maxDonationAmount;
    this.dontShowPrice = props.dontShowPrice;
    this.noPriceMessage = props.noPriceMessage;
    this.shoppingDotComCategory = props.shoppingDotComCategory;
    this.shopzillaCategoryId = props.shopzillaCategoryId;
    this.outOfStockBehavior = props.outOfStockBehavior;
    this.nexTagCategory = props.nexTagCategory;
    this.productFeedList = props.productFeedList;
    this.relatedItemsDescription = props.relatedItemsDescription;
    this.onSpecial = props.onSpecial;
    this.specialsDescription = props.specialsDescription;
    this.featuredDescription = props.featuredDescription;
    this.pricingMatrix = props.pricingMatrix;
    this.siteCategoryList = props.siteCategoryList;
    this.memberList = props.memberList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.translationsList = props.translationsList;
    this.presentationItemList = props.presentationItemList;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class DepartmentSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.DepartmentSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: DepartmentSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class SubsidiarySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: SubsidiarySearch;
  columns?: SubsidiarySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: SubsidiarySearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class Rate extends SoapTypes.Base {
  value?: number;
  priceLevel?: PlatformCore.RecordRef;
  constructor(props: Rate) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.value = props.value;
    this.priceLevel = props.priceLevel;
  }
}

export class TermPercentages extends SoapTypes.Base {
  percentage?: number;
  constructor(props: TermPercentages) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.percentage = props.percentage;
  }
}

export class InventoryNumberSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.InventoryNumberSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: InventoryNumberSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class DiscountItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  description?: string;
  nonPosting?: boolean;
  account?: PlatformCore.RecordRef;
  includeChildren?: boolean;
  rate?: string;
  isPreTax?: boolean;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  issueProduct?: PlatformCore.RecordRef;
  upcCode?: string;
  displayName?: string;
  vendorName?: string;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiaryList?: PlatformCore.RecordRefList;
  taxSchedule?: PlatformCore.RecordRef;
  deferredRevenueAccount?: PlatformCore.RecordRef;
  expenseAccount?: PlatformCore.RecordRef;
  incomeAccount?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  salesTaxCode?: PlatformCore.RecordRef;
  translationsList?: TranslationList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: DiscountItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.description = props.description;
    this.nonPosting = props.nonPosting;
    this.account = props.account;
    this.includeChildren = props.includeChildren;
    this.rate = props.rate;
    this.isPreTax = props.isPreTax;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.issueProduct = props.issueProduct;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.vendorName = props.vendorName;
    this.parent = props.parent;
    this.isInactive = props.isInactive;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiaryList = props.subsidiaryList;
    this.taxSchedule = props.taxSchedule;
    this.deferredRevenueAccount = props.deferredRevenueAccount;
    this.expenseAccount = props.expenseAccount;
    this.incomeAccount = props.incomeAccount;
    this.revRecSchedule = props.revRecSchedule;
    this.salesTaxCode = props.salesTaxCode;
    this.translationsList = props.translationsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class OtherChargeSaleItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  salesDescription?: string;
  includeChildren?: boolean;
  incomeAccount?: PlatformCore.RecordRef;
  isTaxable?: boolean;
  matrixType?: ListsAccountingTypes.ItemMatrixType;
  taxSchedule?: PlatformCore.RecordRef;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  unitsType?: PlatformCore.RecordRef;
  saleUnit?: PlatformCore.RecordRef;
  issueProduct?: PlatformCore.RecordRef;
  costEstimateUnits?: string;
  billingSchedule?: PlatformCore.RecordRef;
  deferredRevenueAccount?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  minimumQuantity?: number;
  minimumQuantityUnits?: string;
  enforceMinQtyInternally?: boolean;
  maximumQuantity?: number;
  softDescriptor?: string;
  isFulfillable?: boolean;
  costCategory?: PlatformCore.RecordRef;
  pricesIncludeTax?: boolean;
  quantityPricingSchedule?: PlatformCore.RecordRef;
  useMarginalRates?: boolean;
  overallQuantityPricingType?: ListsAccountingTypes.ItemOverallQuantityPricingType;
  pricingGroup?: PlatformCore.RecordRef;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  parent?: PlatformCore.RecordRef;
  isOnline?: boolean;
  isGcoCompliant?: boolean;
  offerSupport?: boolean;
  isInactive?: boolean;
  matrixItemNameTemplate?: string;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  vsoePrice?: number;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  itemRevenueCategory?: PlatformCore.RecordRef;
  deferRevRec?: boolean;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revenueAllocationGroup?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  directRevenuePosting?: boolean;
  contingentRevenueHandling?: boolean;
  revReclassFXAccount?: PlatformCore.RecordRef;
  subsidiaryList?: PlatformCore.RecordRefList;
  itemOptionsList?: ItemOptionsList;
  matrixOptionList?: MatrixOptionList;
  pricingMatrix?: PricingMatrix;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  purchaseTaxCode?: PlatformCore.RecordRef;
  rate?: number;
  salesTaxCode?: PlatformCore.RecordRef;
  translationsList?: TranslationList;
  hierarchyVersionsList?: OtherChargeSaleItemHierarchyVersionsList;
  consumptionUnit?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: OtherChargeSaleItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.salesDescription = props.salesDescription;
    this.includeChildren = props.includeChildren;
    this.incomeAccount = props.incomeAccount;
    this.isTaxable = props.isTaxable;
    this.matrixType = props.matrixType;
    this.taxSchedule = props.taxSchedule;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.unitsType = props.unitsType;
    this.saleUnit = props.saleUnit;
    this.issueProduct = props.issueProduct;
    this.costEstimateUnits = props.costEstimateUnits;
    this.billingSchedule = props.billingSchedule;
    this.deferredRevenueAccount = props.deferredRevenueAccount;
    this.revRecSchedule = props.revRecSchedule;
    this.minimumQuantity = props.minimumQuantity;
    this.minimumQuantityUnits = props.minimumQuantityUnits;
    this.enforceMinQtyInternally = props.enforceMinQtyInternally;
    this.maximumQuantity = props.maximumQuantity;
    this.softDescriptor = props.softDescriptor;
    this.isFulfillable = props.isFulfillable;
    this.costCategory = props.costCategory;
    this.pricesIncludeTax = props.pricesIncludeTax;
    this.quantityPricingSchedule = props.quantityPricingSchedule;
    this.useMarginalRates = props.useMarginalRates;
    this.overallQuantityPricingType = props.overallQuantityPricingType;
    this.pricingGroup = props.pricingGroup;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.parent = props.parent;
    this.isOnline = props.isOnline;
    this.isGcoCompliant = props.isGcoCompliant;
    this.offerSupport = props.offerSupport;
    this.isInactive = props.isInactive;
    this.matrixItemNameTemplate = props.matrixItemNameTemplate;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.vsoePrice = props.vsoePrice;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.itemRevenueCategory = props.itemRevenueCategory;
    this.deferRevRec = props.deferRevRec;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.revRecForecastRule = props.revRecForecastRule;
    this.revenueAllocationGroup = props.revenueAllocationGroup;
    this.createRevenuePlansOn = props.createRevenuePlansOn;
    this.directRevenuePosting = props.directRevenuePosting;
    this.contingentRevenueHandling = props.contingentRevenueHandling;
    this.revReclassFXAccount = props.revReclassFXAccount;
    this.subsidiaryList = props.subsidiaryList;
    this.itemOptionsList = props.itemOptionsList;
    this.matrixOptionList = props.matrixOptionList;
    this.pricingMatrix = props.pricingMatrix;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.purchaseTaxCode = props.purchaseTaxCode;
    this.rate = props.rate;
    this.salesTaxCode = props.salesTaxCode;
    this.translationsList = props.translationsList;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.consumptionUnit = props.consumptionUnit;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class TaxTypeSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.TaxTypeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: TaxTypeSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class BinSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: BinSearch;
  columns?: BinSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: BinSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class AccountSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: AccountSearch;
  columns?: AccountSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: AccountSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class CustomerMessageSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CustomerMessageSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: CustomerMessageSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class ProductFeedList extends SoapTypes.Base {
  productFeed: ListsAccountingTypes.ItemProductFeed[];
  constructor(props: ProductFeedList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.productFeed = props.productFeed;
  }
}

export class SubsidiaryNexusList extends SoapTypes.Base {
  nexus?: SubsidiaryNexus[];
  replaceAll?: boolean;
  constructor(props: SubsidiaryNexusList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.nexus = props.nexus;
    this.replaceAll = props.replaceAll;
  }
}

export class BomSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: BomSearch;
  columns?: BomSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: BomSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class PaymentMethodVisualsList extends SoapTypes.Base {
  paymentMethodVisuals?: PaymentMethodVisuals[];
  replaceAll?: boolean;
  constructor(props: PaymentMethodVisualsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.paymentMethodVisuals = props.paymentMethodVisuals;
    this.replaceAll = props.replaceAll;
  }
}

export class LocationRegions extends SoapTypes.Base {
  region?: PlatformCore.RecordRef;
  constructor(props: LocationRegions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.region = props.region;
  }
}

export class ClassTranslationList extends SoapTypes.Base {
  classTranslation?: ClassTranslation[];
  replaceAll?: boolean;
  constructor(props: ClassTranslationList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.classTranslation = props.classTranslation;
    this.replaceAll = props.replaceAll;
  }
}

export class VendorCategory extends PlatformCore.Record {
  name?: string;
  isTaxAgency?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: VendorCategory) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.isTaxAgency = props.isTaxAgency;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ItemOptionsList extends SoapTypes.Base {
  itemOptions: PlatformCore.RecordRef[];
  constructor(props: ItemOptionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.itemOptions = props.itemOptions;
  }
}

export class MerchandiseHierarchyNodeSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.MerchandiseHierarchyNodeSearchRowBasic;
  parentNodeJoin?: PlatformCommon.MerchandiseHierarchyNodeSearchRowBasic;
  constructor(props: MerchandiseHierarchyNodeSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.parentNodeJoin = props.parentNodeJoin;
  }
}

export class TaxGroupSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.TaxGroupSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: TaxGroupSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class NonInventoryResaleItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  purchaseDescription?: string;
  copyDescription?: boolean;
  cost?: number;
  costUnits?: string;
  expenseAccount?: PlatformCore.RecordRef;
  intercoExpenseAccount?: PlatformCore.RecordRef;
  salesDescription?: string;
  includeChildren?: boolean;
  incomeAccount?: PlatformCore.RecordRef;
  intercoIncomeAccount?: PlatformCore.RecordRef;
  isTaxable?: boolean;
  matrixType?: ListsAccountingTypes.ItemMatrixType;
  taxSchedule?: PlatformCore.RecordRef;
  dropshipExpenseAccount?: PlatformCore.RecordRef;
  deferRevRec?: boolean;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revenueAllocationGroup?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  directRevenuePosting?: boolean;
  isDropShipItem?: boolean;
  isSpecialOrderItem?: boolean;
  shippingCost?: number;
  shippingCostUnits?: string;
  handlingCost?: number;
  handlingCostUnits?: string;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  weight?: number;
  weightUnit?: ListsAccountingTypes.ItemWeightUnit;
  weightUnits?: string;
  costEstimateUnits?: string;
  unitsType?: PlatformCore.RecordRef;
  purchaseUnit?: PlatformCore.RecordRef;
  saleUnit?: PlatformCore.RecordRef;
  issueProduct?: PlatformCore.RecordRef;
  billingSchedule?: PlatformCore.RecordRef;
  deferredRevenueAccount?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  deferralAccount?: PlatformCore.RecordRef;
  amortizationTemplate?: PlatformCore.RecordRef;
  residual?: string;
  amortizationPeriod?: number;
  stockDescription?: string;
  producer?: boolean;
  manufacturer?: string;
  mpn?: string;
  multManufactureAddr?: boolean;
  manufacturerAddr1?: string;
  manufacturerCity?: string;
  manufacturerState?: string;
  manufacturerZip?: string;
  countryOfManufacture?: PlatformCommonTypes.Country;
  purchaseOrderQuantity?: number;
  purchaseOrderAmount?: number;
  purchaseOrderQuantityDiff?: number;
  receiptQuantity?: number;
  receiptAmount?: number;
  receiptQuantityDiff?: number;
  manufacturerTaxId?: string;
  scheduleBNumber?: string;
  scheduleBQuantity?: number;
  scheduleBCode?: string;
  manufacturerTariff?: string;
  preferenceCriterion?: ListsAccountingTypes.ItemPreferenceCriterion;
  minimumQuantity?: number;
  enforceMinQtyInternally?: boolean;
  maximumQuantity?: number;
  softDescriptor?: string;
  shipPackage?: PlatformCore.RecordRef;
  shipIndividually?: boolean;
  isFulfillable?: boolean;
  generateAccruals?: boolean;
  costCategory?: PlatformCore.RecordRef;
  pricesIncludeTax?: boolean;
  quantityPricingSchedule?: PlatformCore.RecordRef;
  useMarginalRates?: boolean;
  overallQuantityPricingType?: ListsAccountingTypes.ItemOverallQuantityPricingType;
  pricingGroup?: PlatformCore.RecordRef;
  minimumQuantityUnits?: string;
  vsoePrice?: number;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  itemRevenueCategory?: PlatformCore.RecordRef;
  storeDisplayName?: string;
  storeDisplayThumbnail?: PlatformCore.RecordRef;
  storeDisplayImage?: PlatformCore.RecordRef;
  storeDescription?: string;
  storeDetailedDescription?: string;
  storeItemTemplate?: PlatformCore.RecordRef;
  pageTitle?: string;
  metaTagHtml?: string;
  excludeFromSitemap?: boolean;
  sitemapPriority?: string;
  searchKeywords?: string;
  isDonationItem?: boolean;
  showDefaultDonationAmount?: boolean;
  maxDonationAmount?: number;
  dontShowPrice?: boolean;
  noPriceMessage?: string;
  outOfStockMessage?: string;
  onSpecial?: boolean;
  outOfStockBehavior?: ListsAccountingTypes.ItemOutOfStockBehavior;
  relatedItemsDescription?: string;
  specialsDescription?: string;
  featuredDescription?: string;
  shoppingDotComCategory?: string;
  shopzillaCategoryId?: number;
  nexTagCategory?: string;
  productFeedList?: ProductFeedList;
  urlComponent?: string;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  vendorName?: string;
  parent?: PlatformCore.RecordRef;
  isOnline?: boolean;
  isHazmatItem?: boolean;
  hazmatId?: string;
  hazmatShippingName?: string;
  hazmatHazardClass?: string;
  hazmatPackingGroup?: ListsAccountingTypes.HazmatPackingGroup;
  hazmatItemUnits?: string;
  hazmatItemUnitsQty?: number;
  isGcoCompliant?: boolean;
  offerSupport?: boolean;
  isInactive?: boolean;
  matrixItemNameTemplate?: string;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  defaultItemShipMethod?: PlatformCore.RecordRef;
  itemCarrier?: PlatformCommonTypes.ShippingCarrier;
  itemShipMethodList?: PlatformCore.RecordRefList;
  subsidiaryList?: PlatformCore.RecordRefList;
  currency?: string;
  itemOptionsList?: ItemOptionsList;
  matrixOptionList?: MatrixOptionList;
  itemVendorList?: ItemVendorList;
  pricingMatrix?: PricingMatrix;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  purchaseTaxCode?: PlatformCore.RecordRef;
  rate?: number;
  salesTaxCode?: PlatformCore.RecordRef;
  siteCategoryList?: SiteCategoryList;
  translationsList?: TranslationList;
  vendor?: PlatformCore.RecordRef;
  presentationItemList?: PresentationItemList;
  hierarchyVersionsList?: NonInventoryResaleItemHierarchyVersionsList;
  consumptionUnit?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: NonInventoryResaleItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.purchaseDescription = props.purchaseDescription;
    this.copyDescription = props.copyDescription;
    this.cost = props.cost;
    this.costUnits = props.costUnits;
    this.expenseAccount = props.expenseAccount;
    this.intercoExpenseAccount = props.intercoExpenseAccount;
    this.salesDescription = props.salesDescription;
    this.includeChildren = props.includeChildren;
    this.incomeAccount = props.incomeAccount;
    this.intercoIncomeAccount = props.intercoIncomeAccount;
    this.isTaxable = props.isTaxable;
    this.matrixType = props.matrixType;
    this.taxSchedule = props.taxSchedule;
    this.dropshipExpenseAccount = props.dropshipExpenseAccount;
    this.deferRevRec = props.deferRevRec;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.revRecForecastRule = props.revRecForecastRule;
    this.revenueAllocationGroup = props.revenueAllocationGroup;
    this.createRevenuePlansOn = props.createRevenuePlansOn;
    this.directRevenuePosting = props.directRevenuePosting;
    this.isDropShipItem = props.isDropShipItem;
    this.isSpecialOrderItem = props.isSpecialOrderItem;
    this.shippingCost = props.shippingCost;
    this.shippingCostUnits = props.shippingCostUnits;
    this.handlingCost = props.handlingCost;
    this.handlingCostUnits = props.handlingCostUnits;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.weight = props.weight;
    this.weightUnit = props.weightUnit;
    this.weightUnits = props.weightUnits;
    this.costEstimateUnits = props.costEstimateUnits;
    this.unitsType = props.unitsType;
    this.purchaseUnit = props.purchaseUnit;
    this.saleUnit = props.saleUnit;
    this.issueProduct = props.issueProduct;
    this.billingSchedule = props.billingSchedule;
    this.deferredRevenueAccount = props.deferredRevenueAccount;
    this.revRecSchedule = props.revRecSchedule;
    this.deferralAccount = props.deferralAccount;
    this.amortizationTemplate = props.amortizationTemplate;
    this.residual = props.residual;
    this.amortizationPeriod = props.amortizationPeriod;
    this.stockDescription = props.stockDescription;
    this.producer = props.producer;
    this.manufacturer = props.manufacturer;
    this.mpn = props.mpn;
    this.multManufactureAddr = props.multManufactureAddr;
    this.manufacturerAddr1 = props.manufacturerAddr1;
    this.manufacturerCity = props.manufacturerCity;
    this.manufacturerState = props.manufacturerState;
    this.manufacturerZip = props.manufacturerZip;
    this.countryOfManufacture = props.countryOfManufacture;
    this.purchaseOrderQuantity = props.purchaseOrderQuantity;
    this.purchaseOrderAmount = props.purchaseOrderAmount;
    this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
    this.receiptQuantity = props.receiptQuantity;
    this.receiptAmount = props.receiptAmount;
    this.receiptQuantityDiff = props.receiptQuantityDiff;
    this.manufacturerTaxId = props.manufacturerTaxId;
    this.scheduleBNumber = props.scheduleBNumber;
    this.scheduleBQuantity = props.scheduleBQuantity;
    this.scheduleBCode = props.scheduleBCode;
    this.manufacturerTariff = props.manufacturerTariff;
    this.preferenceCriterion = props.preferenceCriterion;
    this.minimumQuantity = props.minimumQuantity;
    this.enforceMinQtyInternally = props.enforceMinQtyInternally;
    this.maximumQuantity = props.maximumQuantity;
    this.softDescriptor = props.softDescriptor;
    this.shipPackage = props.shipPackage;
    this.shipIndividually = props.shipIndividually;
    this.isFulfillable = props.isFulfillable;
    this.generateAccruals = props.generateAccruals;
    this.costCategory = props.costCategory;
    this.pricesIncludeTax = props.pricesIncludeTax;
    this.quantityPricingSchedule = props.quantityPricingSchedule;
    this.useMarginalRates = props.useMarginalRates;
    this.overallQuantityPricingType = props.overallQuantityPricingType;
    this.pricingGroup = props.pricingGroup;
    this.minimumQuantityUnits = props.minimumQuantityUnits;
    this.vsoePrice = props.vsoePrice;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.itemRevenueCategory = props.itemRevenueCategory;
    this.storeDisplayName = props.storeDisplayName;
    this.storeDisplayThumbnail = props.storeDisplayThumbnail;
    this.storeDisplayImage = props.storeDisplayImage;
    this.storeDescription = props.storeDescription;
    this.storeDetailedDescription = props.storeDetailedDescription;
    this.storeItemTemplate = props.storeItemTemplate;
    this.pageTitle = props.pageTitle;
    this.metaTagHtml = props.metaTagHtml;
    this.excludeFromSitemap = props.excludeFromSitemap;
    this.sitemapPriority = props.sitemapPriority;
    this.searchKeywords = props.searchKeywords;
    this.isDonationItem = props.isDonationItem;
    this.showDefaultDonationAmount = props.showDefaultDonationAmount;
    this.maxDonationAmount = props.maxDonationAmount;
    this.dontShowPrice = props.dontShowPrice;
    this.noPriceMessage = props.noPriceMessage;
    this.outOfStockMessage = props.outOfStockMessage;
    this.onSpecial = props.onSpecial;
    this.outOfStockBehavior = props.outOfStockBehavior;
    this.relatedItemsDescription = props.relatedItemsDescription;
    this.specialsDescription = props.specialsDescription;
    this.featuredDescription = props.featuredDescription;
    this.shoppingDotComCategory = props.shoppingDotComCategory;
    this.shopzillaCategoryId = props.shopzillaCategoryId;
    this.nexTagCategory = props.nexTagCategory;
    this.productFeedList = props.productFeedList;
    this.urlComponent = props.urlComponent;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.vendorName = props.vendorName;
    this.parent = props.parent;
    this.isOnline = props.isOnline;
    this.isHazmatItem = props.isHazmatItem;
    this.hazmatId = props.hazmatId;
    this.hazmatShippingName = props.hazmatShippingName;
    this.hazmatHazardClass = props.hazmatHazardClass;
    this.hazmatPackingGroup = props.hazmatPackingGroup;
    this.hazmatItemUnits = props.hazmatItemUnits;
    this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
    this.isGcoCompliant = props.isGcoCompliant;
    this.offerSupport = props.offerSupport;
    this.isInactive = props.isInactive;
    this.matrixItemNameTemplate = props.matrixItemNameTemplate;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.defaultItemShipMethod = props.defaultItemShipMethod;
    this.itemCarrier = props.itemCarrier;
    this.itemShipMethodList = props.itemShipMethodList;
    this.subsidiaryList = props.subsidiaryList;
    this.currency = props.currency;
    this.itemOptionsList = props.itemOptionsList;
    this.matrixOptionList = props.matrixOptionList;
    this.itemVendorList = props.itemVendorList;
    this.pricingMatrix = props.pricingMatrix;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.purchaseTaxCode = props.purchaseTaxCode;
    this.rate = props.rate;
    this.salesTaxCode = props.salesTaxCode;
    this.siteCategoryList = props.siteCategoryList;
    this.translationsList = props.translationsList;
    this.vendor = props.vendor;
    this.presentationItemList = props.presentationItemList;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.consumptionUnit = props.consumptionUnit;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class LotNumberedInventoryItemHierarchyVersionsList extends SoapTypes.Base {
  lotNumberedInventoryItemHierarchyVersions?: LotNumberedInventoryItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: LotNumberedInventoryItemHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.lotNumberedInventoryItemHierarchyVersions = props.lotNumberedInventoryItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class BomRevisionComponentList extends SoapTypes.Base {
  bomRevisionComponent?: BomRevisionComponent[];
  replaceAll?: boolean;
  constructor(props: BomRevisionComponentList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.bomRevisionComponent = props.bomRevisionComponent;
    this.replaceAll = props.replaceAll;
  }
}

export class MerchandiseHierarchyNode extends PlatformCore.Record {
  name?: string;
  description?: string;
  hierarchyVersionsList?: MerchandiseHierarchyNodeHierarchyVersionsList;
  internalId?: string;
  externalId?: string;
  constructor(props: MerchandiseHierarchyNode) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.description = props.description;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class Pricing extends SoapTypes.Base {
  currency?: PlatformCore.RecordRef;
  priceLevel?: PlatformCore.RecordRef;
  discount?: number;
  priceList?: PriceList;
  constructor(props: Pricing) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.currency = props.currency;
    this.priceLevel = props.priceLevel;
    this.discount = props.discount;
    this.priceList = props.priceList;
  }
}

export class PaymentMethod extends PlatformCore.Record {
  name?: string;
  creditCard?: boolean;
  undepFunds?: boolean;
  account?: PlatformCore.RecordRef;
  isInactive?: boolean;
  isOnline?: boolean;
  visualsList?: PaymentMethodVisualsList;
  isDebitCard?: boolean;
  merchantAccountsList?: PlatformCore.RecordRefList;
  payPalEmailAddress?: string;
  expressCheckoutArrangement?: string;
  useExpressCheckout?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: PaymentMethod) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.creditCard = props.creditCard;
    this.undepFunds = props.undepFunds;
    this.account = props.account;
    this.isInactive = props.isInactive;
    this.isOnline = props.isOnline;
    this.visualsList = props.visualsList;
    this.isDebitCard = props.isDebitCard;
    this.merchantAccountsList = props.merchantAccountsList;
    this.payPalEmailAddress = props.payPalEmailAddress;
    this.expressCheckoutArrangement = props.expressCheckoutArrangement;
    this.useExpressCheckout = props.useExpressCheckout;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ConsolidatedExchangeRateSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ConsolidatedExchangeRateSearchRowBasic;
  fromSubsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  periodJoin?: PlatformCommon.AccountingPeriodSearchRowBasic;
  toSubsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: ConsolidatedExchangeRateSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.fromSubsidiaryJoin = props.fromSubsidiaryJoin;
    this.periodJoin = props.periodJoin;
    this.toSubsidiaryJoin = props.toSubsidiaryJoin;
    this.userJoin = props.userJoin;
  }
}

export class ServiceSaleItemHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: ServiceSaleItemHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class ItemRevisionSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ItemRevisionSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: ItemRevisionSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.userJoin = props.userJoin;
  }
}

export class SalesTaxItemSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.SalesTaxItemSearchRowBasic;
  taxTypeJoin?: PlatformCommon.TaxTypeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: SalesTaxItemSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.taxTypeJoin = props.taxTypeJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class UnitsTypeSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.UnitsTypeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: UnitsTypeSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class InventoryItemLocations extends SoapTypes.Base {
  location?: string;
  quantityOnHand?: number;
  onHandValueMli?: number;
  averageCostMli?: number;
  lastPurchasePriceMli?: number;
  reorderPoint?: number;
  locationAllowStorePickup?: boolean;
  locationStorePickupBufferStock?: number;
  locationQtyAvailForStorePickup?: number;
  preferredStockLevel?: number;
  leadTime?: number;
  defaultReturnCost?: number;
  safetyStockLevel?: number;
  cost?: number;
  inventoryCostTemplate?: PlatformCore.RecordRef;
  buildTime?: number;
  lastInvtCountDate?: SoapTypes.Dateish;
  nextInvtCountDate?: SoapTypes.Dateish;
  isWip?: boolean;
  invtCountInterval?: number;
  invtClassification?: ListsAccountingTypes.ItemInvtClassification;
  costingLotSize?: number;
  quantityOnOrder?: number;
  quantityCommitted?: number;
  quantityAvailable?: number;
  quantityBackOrdered?: number;
  locationId?: PlatformCore.RecordRef;
  supplyReplenishmentMethod?: PlatformCore.RecordRef;
  alternateDemandSourceItem?: PlatformCore.RecordRef;
  fixedLotSize?: number;
  periodicLotSizeType?: ListsAccountingTypes.PeriodicLotSizeType;
  periodicLotSizeDays?: number;
  supplyType?: PlatformCore.RecordRef;
  supplyLotSizingMethod?: PlatformCore.RecordRef;
  demandSource?: PlatformCore.RecordRef;
  backwardConsumptionDays?: number;
  forwardConsumptionDays?: number;
  demandTimeFence?: number;
  supplyTimeFence?: number;
  rescheduleInDays?: number;
  rescheduleOutDays?: number;
  constructor(props: InventoryItemLocations) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.location = props.location;
    this.quantityOnHand = props.quantityOnHand;
    this.onHandValueMli = props.onHandValueMli;
    this.averageCostMli = props.averageCostMli;
    this.lastPurchasePriceMli = props.lastPurchasePriceMli;
    this.reorderPoint = props.reorderPoint;
    this.locationAllowStorePickup = props.locationAllowStorePickup;
    this.locationStorePickupBufferStock = props.locationStorePickupBufferStock;
    this.locationQtyAvailForStorePickup = props.locationQtyAvailForStorePickup;
    this.preferredStockLevel = props.preferredStockLevel;
    this.leadTime = props.leadTime;
    this.defaultReturnCost = props.defaultReturnCost;
    this.safetyStockLevel = props.safetyStockLevel;
    this.cost = props.cost;
    this.inventoryCostTemplate = props.inventoryCostTemplate;
    this.buildTime = props.buildTime;
    this.lastInvtCountDate = props.lastInvtCountDate;
    this.nextInvtCountDate = props.nextInvtCountDate;
    this.isWip = props.isWip;
    this.invtCountInterval = props.invtCountInterval;
    this.invtClassification = props.invtClassification;
    this.costingLotSize = props.costingLotSize;
    this.quantityOnOrder = props.quantityOnOrder;
    this.quantityCommitted = props.quantityCommitted;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityBackOrdered = props.quantityBackOrdered;
    this.locationId = props.locationId;
    this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
    this.alternateDemandSourceItem = props.alternateDemandSourceItem;
    this.fixedLotSize = props.fixedLotSize;
    this.periodicLotSizeType = props.periodicLotSizeType;
    this.periodicLotSizeDays = props.periodicLotSizeDays;
    this.supplyType = props.supplyType;
    this.supplyLotSizingMethod = props.supplyLotSizingMethod;
    this.demandSource = props.demandSource;
    this.backwardConsumptionDays = props.backwardConsumptionDays;
    this.forwardConsumptionDays = props.forwardConsumptionDays;
    this.demandTimeFence = props.demandTimeFence;
    this.supplyTimeFence = props.supplyTimeFence;
    this.rescheduleInDays = props.rescheduleInDays;
    this.rescheduleOutDays = props.rescheduleOutDays;
  }
}

export class CostCategorySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CostCategorySearchRowBasic;
  accountJoin?: PlatformCommon.AccountSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  constructor(props: CostCategorySearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.accountJoin = props.accountJoin;
    this.transactionJoin = props.transactionJoin;
  }
}

export class ItemAccountMappingSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ItemAccountMappingSearchBasic;
  classJoin?: PlatformCommon.ClassificationSearchBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchBasic;
  destinationAccountJoin?: PlatformCommon.AccountSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  sourceAccountJoin?: PlatformCommon.AccountSearchBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: ItemAccountMappingSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.classJoin = props.classJoin;
    this.departmentJoin = props.departmentJoin;
    this.destinationAccountJoin = props.destinationAccountJoin;
    this.locationJoin = props.locationJoin;
    this.sourceAccountJoin = props.sourceAccountJoin;
    this.subsidiaryJoin = props.subsidiaryJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class UnitsTypeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: UnitsTypeSearch;
  columns?: UnitsTypeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: UnitsTypeSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class VendorCategorySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: VendorCategorySearch;
  columns?: VendorCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: VendorCategorySearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class NonInventorySaleItemHierarchyVersionsList extends SoapTypes.Base {
  nonInventorySaleItemHierarchyVersions?: NonInventorySaleItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: NonInventorySaleItemHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.nonInventorySaleItemHierarchyVersions = props.nonInventorySaleItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomerMessageSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CustomerMessageSearch;
  columns?: CustomerMessageSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CustomerMessageSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class PaymentCardToken extends PlatformCore.Record {
  entity?: PlatformCore.RecordRef;
  mask?: string;
  paymentMethod?: PlatformCore.RecordRef;
  memo?: string;
  state?: ListsAccountingTypes.PaymentInstrumentState;
  isInactive?: boolean;
  preserveOnFile?: boolean;
  isDefault?: boolean;
  token?: string;
  tokenExpirationDate?: SoapTypes.Dateish;
  tokenFamily?: ListsAccountingTypes.TokenFamily;
  tokenNamespace?: string;
  cardIssuerIdNumber?: string;
  cardBrand?: ListsAccountingTypes.PaymentCardBrand;
  cardType?: ListsAccountingTypes.PaymentCardType;
  cardNameOnCard?: string;
  cardLastFourDigits?: string;
  cardExpirationDate?: SoapTypes.Dateish;
  internalId?: string;
  externalId?: string;
  constructor(props: PaymentCardToken) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.entity = props.entity;
    this.mask = props.mask;
    this.paymentMethod = props.paymentMethod;
    this.memo = props.memo;
    this.state = props.state;
    this.isInactive = props.isInactive;
    this.preserveOnFile = props.preserveOnFile;
    this.isDefault = props.isDefault;
    this.token = props.token;
    this.tokenExpirationDate = props.tokenExpirationDate;
    this.tokenFamily = props.tokenFamily;
    this.tokenNamespace = props.tokenNamespace;
    this.cardIssuerIdNumber = props.cardIssuerIdNumber;
    this.cardBrand = props.cardBrand;
    this.cardType = props.cardType;
    this.cardNameOnCard = props.cardNameOnCard;
    this.cardLastFourDigits = props.cardLastFourDigits;
    this.cardExpirationDate = props.cardExpirationDate;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class GiftCertificateItemAuthCodes extends SoapTypes.Base {
  authCode?: string;
  used?: boolean;
  constructor(props: GiftCertificateItemAuthCodes) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.authCode = props.authCode;
    this.used = props.used;
  }
}

export class SerializedAssemblyItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  vendorName?: string;
  parent?: PlatformCore.RecordRef;
  printItems?: boolean;
  isOnline?: boolean;
  lastInvtCountDate?: SoapTypes.Dateish;
  nextInvtCountDate?: SoapTypes.Dateish;
  invtCountInterval?: number;
  invtClassification?: ListsAccountingTypes.ItemInvtClassification;
  isGcoCompliant?: boolean;
  offerSupport?: boolean;
  useComponentYield?: boolean;
  isInactive?: boolean;
  subsidiaryList?: PlatformCore.RecordRefList;
  availableToPartners?: boolean;
  includeChildren?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  description?: string;
  cogsAccount?: PlatformCore.RecordRef;
  vendor?: PlatformCore.RecordRef;
  incomeAccount?: PlatformCore.RecordRef;
  intercoIncomeAccount?: PlatformCore.RecordRef;
  assetAccount?: PlatformCore.RecordRef;
  matchBillToReceipt?: boolean;
  billQtyVarianceAcct?: PlatformCore.RecordRef;
  billPriceVarianceAcct?: PlatformCore.RecordRef;
  billExchRateVarianceAcct?: PlatformCore.RecordRef;
  gainLossAccount?: PlatformCore.RecordRef;
  salesTaxCode?: PlatformCore.RecordRef;
  costCategory?: PlatformCore.RecordRef;
  purchaseTaxCode?: PlatformCore.RecordRef;
  prodQtyVarianceAcct?: PlatformCore.RecordRef;
  prodPriceVarianceAcct?: PlatformCore.RecordRef;
  purchasePriceVarianceAcct?: PlatformCore.RecordRef;
  wipVarianceAcct?: PlatformCore.RecordRef;
  taxSchedule?: PlatformCore.RecordRef;
  scrapAcct?: PlatformCore.RecordRef;
  shippingCost?: number;
  wipAcct?: PlatformCore.RecordRef;
  shippingCostUnits?: string;
  handlingCost?: number;
  weight?: number;
  handlingCostUnits?: string;
  weightUnit?: ListsAccountingTypes.ItemWeightUnit;
  weightUnits?: string;
  costingMethod?: ListsAccountingTypes.ItemCostingMethod;
  isTaxable?: boolean;
  costingMethodDisplay?: string;
  rate?: number;
  unitsType?: PlatformCore.RecordRef;
  stockUnit?: PlatformCore.RecordRef;
  purchaseUnit?: PlatformCore.RecordRef;
  saleUnit?: PlatformCore.RecordRef;
  trackLandedCost?: boolean;
  matrixItemNameTemplate?: string;
  billingSchedule?: PlatformCore.RecordRef;
  deferredRevenueAccount?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  stockDescription?: string;
  producer?: boolean;
  manufacturer?: string;
  mpn?: string;
  multManufactureAddr?: boolean;
  manufactureraddr1?: string;
  manufacturerCity?: string;
  manufacturerState?: string;
  manufacturerZip?: string;
  countryOfManufacture?: PlatformCommonTypes.Country;
  effectiveBomControl?: ListsAccountingTypes.AssemblyItemEffectiveBomControl;
  minimumQuantityUnits?: string;
  defaultRevision?: string;
  defaultItemShipMethod?: PlatformCore.RecordRef;
  itemCarrier?: PlatformCommonTypes.ShippingCarrier;
  roundUpAsComponent?: boolean;
  purchaseOrderQuantity?: number;
  purchaseOrderAmount?: number;
  purchaseOrderQuantityDiff?: number;
  receiptQuantity?: number;
  receiptAmount?: number;
  receiptQuantityDiff?: number;
  isDropShipItem?: boolean;
  isPhantom?: boolean;
  itemShipMethodList?: PlatformCore.RecordRefList;
  manufacturerTaxId?: string;
  scheduleBNumber?: string;
  scheduleBQuantity?: number;
  scheduleBCode?: PlatformCore.RecordRef;
  manufacturerTariff?: string;
  preferenceCriterion?: ListsAccountingTypes.ItemPreferenceCriterion;
  issueProduct?: PlatformCore.RecordRef;
  minimumQuantity?: number;
  enforceMinQtyInternally?: boolean;
  maximumQuantity?: number;
  softDescriptor?: PlatformCore.RecordRef;
  isSpecialWorkOrderItem?: boolean;
  pricesIncludeTax?: boolean;
  quantityPricingSchedule?: PlatformCore.RecordRef;
  buildEntireAssembly?: boolean;
  quantityOnHand?: number;
  quantityOnHandUnits?: string;
  useMarginalRates?: boolean;
  reorderMultiple?: number;
  cost?: number;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  isHazmatItem?: boolean;
  hazmatId?: string;
  hazmatShippingName?: string;
  hazmatHazardClass?: string;
  hazmatPackingGroup?: ListsAccountingTypes.HazmatPackingGroup;
  hazmatItemUnits?: string;
  hazmatItemUnitsQty?: number;
  costEstimate?: number;
  transferPrice?: number;
  overallQuantityPricingType?: ListsAccountingTypes.ItemOverallQuantityPricingType;
  pricingGroup?: PlatformCore.RecordRef;
  intercoCogsAccount?: PlatformCore.RecordRef;
  vsoePrice?: number;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  itemRevenueCategory?: PlatformCore.RecordRef;
  unbuildVarianceAccount?: PlatformCore.RecordRef;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revenueAllocationGroup?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  directRevenuePosting?: boolean;
  dropshipExpenseAccount?: PlatformCore.RecordRef;
  preferredLocation?: PlatformCore.RecordRef;
  isStorePickupAllowed?: boolean;
  totalValue?: number;
  useBins?: boolean;
  averageCost?: number;
  lastPurchasePrice?: number;
  purchaseDescription?: string;
  leadTime?: number;
  autoLeadTime?: boolean;
  buildTime?: number;
  safetyStockLevel?: number;
  safetyStockLevelUnits?: string;
  safetyStockLevelDays?: number;
  seasonalDemand?: boolean;
  serialNumbers?: string;
  reorderPoint?: number;
  reorderPointUnits?: string;
  preferredStockLevel?: number;
  preferredStockLevelUnits?: string;
  demandModifier?: number;
  autoReorderPoint?: boolean;
  autoPreferredStockLevel?: boolean;
  preferredStockLevelDays?: number;
  defaultReturnCost?: number;
  supplyReplenishmentMethod?: PlatformCore.RecordRef;
  alternateDemandSourceItem?: PlatformCore.RecordRef;
  fixedLotSize?: number;
  supplyType?: PlatformCore.RecordRef;
  demandTimeFence?: number;
  supplyTimeFence?: number;
  rescheduleInDays?: number;
  rescheduleOutDays?: number;
  supplyLotSizingMethod?: PlatformCore.RecordRef;
  demandSource?: PlatformCore.RecordRef;
  shipIndividually?: boolean;
  quantityCommitted?: number;
  quantityAvailable?: number;
  quantityBackOrdered?: number;
  quantityOnOrder?: number;
  shipPackage?: PlatformCore.RecordRef;
  storeDisplayName?: string;
  storeDisplayThumbnail?: PlatformCore.RecordRef;
  storeDisplayImage?: PlatformCore.RecordRef;
  storeDescription?: string;
  storeDetailedDescription?: string;
  storeItemTemplate?: PlatformCore.RecordRef;
  pageTitle?: string;
  metaTagHtml?: string;
  excludeFromSitemap?: boolean;
  sitemapPriority?: string;
  urlComponent?: string;
  searchKeywords?: string;
  isDonationItem?: boolean;
  showDefaultDonationAmount?: boolean;
  maxDonationAmount?: number;
  dontShowPrice?: boolean;
  noPriceMessage?: string;
  shoppingDotComCategory?: string;
  shopzillaCategoryId?: number;
  outOfStockMessage?: string;
  nexTagCategory?: string;
  outOfStockBehavior?: ListsAccountingTypes.ItemOutOfStockBehavior;
  productFeedList?: ProductFeedList;
  relatedItemsDescription?: string;
  onSpecial?: boolean;
  specialsDescription?: string;
  featuredDescription?: string;
  itemOptionsList?: ItemOptionsList;
  itemNumberOptionsList?: PlatformCore.RecordRefList;
  itemVendorList?: ItemVendorList;
  pricingMatrix?: PricingMatrix;
  billOfMaterialsList?: SerializedAssemblyItemBillOfMaterialsList;
  memberList?: ItemMemberList;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  locationsList?: SerializedInventoryItemLocationsList;
  siteCategoryList?: SiteCategoryList;
  binNumberList?: InventoryItemBinNumberList;
  numbersList?: SerializedInventoryItemNumbersList;
  translationsList?: TranslationList;
  presentationItemList?: PresentationItemList;
  hierarchyVersionsList?: SerializedAssemblyItemHierarchyVersionsList;
  futureHorizon?: number;
  consumptionUnit?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: SerializedAssemblyItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.vendorName = props.vendorName;
    this.parent = props.parent;
    this.printItems = props.printItems;
    this.isOnline = props.isOnline;
    this.lastInvtCountDate = props.lastInvtCountDate;
    this.nextInvtCountDate = props.nextInvtCountDate;
    this.invtCountInterval = props.invtCountInterval;
    this.invtClassification = props.invtClassification;
    this.isGcoCompliant = props.isGcoCompliant;
    this.offerSupport = props.offerSupport;
    this.useComponentYield = props.useComponentYield;
    this.isInactive = props.isInactive;
    this.subsidiaryList = props.subsidiaryList;
    this.availableToPartners = props.availableToPartners;
    this.includeChildren = props.includeChildren;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.description = props.description;
    this.cogsAccount = props.cogsAccount;
    this.vendor = props.vendor;
    this.incomeAccount = props.incomeAccount;
    this.intercoIncomeAccount = props.intercoIncomeAccount;
    this.assetAccount = props.assetAccount;
    this.matchBillToReceipt = props.matchBillToReceipt;
    this.billQtyVarianceAcct = props.billQtyVarianceAcct;
    this.billPriceVarianceAcct = props.billPriceVarianceAcct;
    this.billExchRateVarianceAcct = props.billExchRateVarianceAcct;
    this.gainLossAccount = props.gainLossAccount;
    this.salesTaxCode = props.salesTaxCode;
    this.costCategory = props.costCategory;
    this.purchaseTaxCode = props.purchaseTaxCode;
    this.prodQtyVarianceAcct = props.prodQtyVarianceAcct;
    this.prodPriceVarianceAcct = props.prodPriceVarianceAcct;
    this.purchasePriceVarianceAcct = props.purchasePriceVarianceAcct;
    this.wipVarianceAcct = props.wipVarianceAcct;
    this.taxSchedule = props.taxSchedule;
    this.scrapAcct = props.scrapAcct;
    this.shippingCost = props.shippingCost;
    this.wipAcct = props.wipAcct;
    this.shippingCostUnits = props.shippingCostUnits;
    this.handlingCost = props.handlingCost;
    this.weight = props.weight;
    this.handlingCostUnits = props.handlingCostUnits;
    this.weightUnit = props.weightUnit;
    this.weightUnits = props.weightUnits;
    this.costingMethod = props.costingMethod;
    this.isTaxable = props.isTaxable;
    this.costingMethodDisplay = props.costingMethodDisplay;
    this.rate = props.rate;
    this.unitsType = props.unitsType;
    this.stockUnit = props.stockUnit;
    this.purchaseUnit = props.purchaseUnit;
    this.saleUnit = props.saleUnit;
    this.trackLandedCost = props.trackLandedCost;
    this.matrixItemNameTemplate = props.matrixItemNameTemplate;
    this.billingSchedule = props.billingSchedule;
    this.deferredRevenueAccount = props.deferredRevenueAccount;
    this.revRecSchedule = props.revRecSchedule;
    this.stockDescription = props.stockDescription;
    this.producer = props.producer;
    this.manufacturer = props.manufacturer;
    this.mpn = props.mpn;
    this.multManufactureAddr = props.multManufactureAddr;
    this.manufactureraddr1 = props.manufactureraddr1;
    this.manufacturerCity = props.manufacturerCity;
    this.manufacturerState = props.manufacturerState;
    this.manufacturerZip = props.manufacturerZip;
    this.countryOfManufacture = props.countryOfManufacture;
    this.effectiveBomControl = props.effectiveBomControl;
    this.minimumQuantityUnits = props.minimumQuantityUnits;
    this.defaultRevision = props.defaultRevision;
    this.defaultItemShipMethod = props.defaultItemShipMethod;
    this.itemCarrier = props.itemCarrier;
    this.roundUpAsComponent = props.roundUpAsComponent;
    this.purchaseOrderQuantity = props.purchaseOrderQuantity;
    this.purchaseOrderAmount = props.purchaseOrderAmount;
    this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
    this.receiptQuantity = props.receiptQuantity;
    this.receiptAmount = props.receiptAmount;
    this.receiptQuantityDiff = props.receiptQuantityDiff;
    this.isDropShipItem = props.isDropShipItem;
    this.isPhantom = props.isPhantom;
    this.itemShipMethodList = props.itemShipMethodList;
    this.manufacturerTaxId = props.manufacturerTaxId;
    this.scheduleBNumber = props.scheduleBNumber;
    this.scheduleBQuantity = props.scheduleBQuantity;
    this.scheduleBCode = props.scheduleBCode;
    this.manufacturerTariff = props.manufacturerTariff;
    this.preferenceCriterion = props.preferenceCriterion;
    this.issueProduct = props.issueProduct;
    this.minimumQuantity = props.minimumQuantity;
    this.enforceMinQtyInternally = props.enforceMinQtyInternally;
    this.maximumQuantity = props.maximumQuantity;
    this.softDescriptor = props.softDescriptor;
    this.isSpecialWorkOrderItem = props.isSpecialWorkOrderItem;
    this.pricesIncludeTax = props.pricesIncludeTax;
    this.quantityPricingSchedule = props.quantityPricingSchedule;
    this.buildEntireAssembly = props.buildEntireAssembly;
    this.quantityOnHand = props.quantityOnHand;
    this.quantityOnHandUnits = props.quantityOnHandUnits;
    this.useMarginalRates = props.useMarginalRates;
    this.reorderMultiple = props.reorderMultiple;
    this.cost = props.cost;
    this.costEstimateType = props.costEstimateType;
    this.isHazmatItem = props.isHazmatItem;
    this.hazmatId = props.hazmatId;
    this.hazmatShippingName = props.hazmatShippingName;
    this.hazmatHazardClass = props.hazmatHazardClass;
    this.hazmatPackingGroup = props.hazmatPackingGroup;
    this.hazmatItemUnits = props.hazmatItemUnits;
    this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
    this.costEstimate = props.costEstimate;
    this.transferPrice = props.transferPrice;
    this.overallQuantityPricingType = props.overallQuantityPricingType;
    this.pricingGroup = props.pricingGroup;
    this.intercoCogsAccount = props.intercoCogsAccount;
    this.vsoePrice = props.vsoePrice;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.itemRevenueCategory = props.itemRevenueCategory;
    this.unbuildVarianceAccount = props.unbuildVarianceAccount;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.revRecForecastRule = props.revRecForecastRule;
    this.revenueAllocationGroup = props.revenueAllocationGroup;
    this.createRevenuePlansOn = props.createRevenuePlansOn;
    this.directRevenuePosting = props.directRevenuePosting;
    this.dropshipExpenseAccount = props.dropshipExpenseAccount;
    this.preferredLocation = props.preferredLocation;
    this.isStorePickupAllowed = props.isStorePickupAllowed;
    this.totalValue = props.totalValue;
    this.useBins = props.useBins;
    this.averageCost = props.averageCost;
    this.lastPurchasePrice = props.lastPurchasePrice;
    this.purchaseDescription = props.purchaseDescription;
    this.leadTime = props.leadTime;
    this.autoLeadTime = props.autoLeadTime;
    this.buildTime = props.buildTime;
    this.safetyStockLevel = props.safetyStockLevel;
    this.safetyStockLevelUnits = props.safetyStockLevelUnits;
    this.safetyStockLevelDays = props.safetyStockLevelDays;
    this.seasonalDemand = props.seasonalDemand;
    this.serialNumbers = props.serialNumbers;
    this.reorderPoint = props.reorderPoint;
    this.reorderPointUnits = props.reorderPointUnits;
    this.preferredStockLevel = props.preferredStockLevel;
    this.preferredStockLevelUnits = props.preferredStockLevelUnits;
    this.demandModifier = props.demandModifier;
    this.autoReorderPoint = props.autoReorderPoint;
    this.autoPreferredStockLevel = props.autoPreferredStockLevel;
    this.preferredStockLevelDays = props.preferredStockLevelDays;
    this.defaultReturnCost = props.defaultReturnCost;
    this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
    this.alternateDemandSourceItem = props.alternateDemandSourceItem;
    this.fixedLotSize = props.fixedLotSize;
    this.supplyType = props.supplyType;
    this.demandTimeFence = props.demandTimeFence;
    this.supplyTimeFence = props.supplyTimeFence;
    this.rescheduleInDays = props.rescheduleInDays;
    this.rescheduleOutDays = props.rescheduleOutDays;
    this.supplyLotSizingMethod = props.supplyLotSizingMethod;
    this.demandSource = props.demandSource;
    this.shipIndividually = props.shipIndividually;
    this.quantityCommitted = props.quantityCommitted;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityBackOrdered = props.quantityBackOrdered;
    this.quantityOnOrder = props.quantityOnOrder;
    this.shipPackage = props.shipPackage;
    this.storeDisplayName = props.storeDisplayName;
    this.storeDisplayThumbnail = props.storeDisplayThumbnail;
    this.storeDisplayImage = props.storeDisplayImage;
    this.storeDescription = props.storeDescription;
    this.storeDetailedDescription = props.storeDetailedDescription;
    this.storeItemTemplate = props.storeItemTemplate;
    this.pageTitle = props.pageTitle;
    this.metaTagHtml = props.metaTagHtml;
    this.excludeFromSitemap = props.excludeFromSitemap;
    this.sitemapPriority = props.sitemapPriority;
    this.urlComponent = props.urlComponent;
    this.searchKeywords = props.searchKeywords;
    this.isDonationItem = props.isDonationItem;
    this.showDefaultDonationAmount = props.showDefaultDonationAmount;
    this.maxDonationAmount = props.maxDonationAmount;
    this.dontShowPrice = props.dontShowPrice;
    this.noPriceMessage = props.noPriceMessage;
    this.shoppingDotComCategory = props.shoppingDotComCategory;
    this.shopzillaCategoryId = props.shopzillaCategoryId;
    this.outOfStockMessage = props.outOfStockMessage;
    this.nexTagCategory = props.nexTagCategory;
    this.outOfStockBehavior = props.outOfStockBehavior;
    this.productFeedList = props.productFeedList;
    this.relatedItemsDescription = props.relatedItemsDescription;
    this.onSpecial = props.onSpecial;
    this.specialsDescription = props.specialsDescription;
    this.featuredDescription = props.featuredDescription;
    this.itemOptionsList = props.itemOptionsList;
    this.itemNumberOptionsList = props.itemNumberOptionsList;
    this.itemVendorList = props.itemVendorList;
    this.pricingMatrix = props.pricingMatrix;
    this.billOfMaterialsList = props.billOfMaterialsList;
    this.memberList = props.memberList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.locationsList = props.locationsList;
    this.siteCategoryList = props.siteCategoryList;
    this.binNumberList = props.binNumberList;
    this.numbersList = props.numbersList;
    this.translationsList = props.translationsList;
    this.presentationItemList = props.presentationItemList;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.futureHorizon = props.futureHorizon;
    this.consumptionUnit = props.consumptionUnit;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class PriceList extends SoapTypes.Base {
  price?: Price[];
  constructor(props: PriceList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.price = props.price;
  }
}

export class GiftCertificateSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.GiftCertificateSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: GiftCertificateSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class BillingScheduleMilestone extends SoapTypes.Base {
  milestoneId?: number;
  milestoneAmount?: number;
  milestoneTerms?: PlatformCore.RecordRef;
  projectTask?: PlatformCore.RecordRef;
  milestoneDate?: SoapTypes.Dateish;
  milestoneCompleted?: boolean;
  milestoneActualCompletionDate?: SoapTypes.Dateish;
  comments?: string;
  constructor(props: BillingScheduleMilestone) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.milestoneId = props.milestoneId;
    this.milestoneAmount = props.milestoneAmount;
    this.milestoneTerms = props.milestoneTerms;
    this.projectTask = props.projectTask;
    this.milestoneDate = props.milestoneDate;
    this.milestoneCompleted = props.milestoneCompleted;
    this.milestoneActualCompletionDate = props.milestoneActualCompletionDate;
    this.comments = props.comments;
  }
}

export class LotNumberedInventoryItemNumbersList extends SoapTypes.Base {
  numbers?: LotNumberedInventoryItemNumbers[];
  replaceAll?: boolean;
  constructor(props: LotNumberedInventoryItemNumbersList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.numbers = props.numbers;
    this.replaceAll = props.replaceAll;
  }
}

export class BomRevisionSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.BomRevisionSearchRowBasic;
  billOfMaterialsJoin?: PlatformCommon.BomSearchRowBasic;
  componentJoin?: PlatformCommon.BomRevisionComponentSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: BomRevisionSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.billOfMaterialsJoin = props.billOfMaterialsJoin;
    this.componentJoin = props.componentJoin;
    this.transactionJoin = props.transactionJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class NonInventoryResaleItemHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: NonInventoryResaleItemHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class CustomerMessageSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CustomerMessageSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: CustomerMessageSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class LotNumberedAssemblyItemBillOfMaterials extends SoapTypes.Base {
  billOfMaterials?: PlatformCore.RecordRef;
  currentRevision?: string;
  masterDefault?: boolean;
  defaultForLocationList?: PlatformCore.RecordRefList;
  inactive?: string;
  memo?: string;
  constructor(props: LotNumberedAssemblyItemBillOfMaterials) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.billOfMaterials = props.billOfMaterials;
    this.currentRevision = props.currentRevision;
    this.masterDefault = props.masterDefault;
    this.defaultForLocationList = props.defaultForLocationList;
    this.inactive = props.inactive;
    this.memo = props.memo;
  }
}

export class AccountingPeriodSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.AccountingPeriodSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
  constructor(props: AccountingPeriodSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
  }
}

export class TaxGroupTaxItemList extends SoapTypes.Base {
  taxItem?: TaxGroupTaxItem[];
  replaceAll?: boolean;
  constructor(props: TaxGroupTaxItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.taxItem = props.taxItem;
    this.replaceAll = props.replaceAll;
  }
}

export class SerializedInventoryItemHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: SerializedInventoryItemHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class ItemAccountingBookDetailList extends SoapTypes.Base {
  itemAccountingBookDetail?: ItemAccountingBookDetail[];
  replaceAll?: boolean;
  constructor(props: ItemAccountingBookDetailList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.itemAccountingBookDetail = props.itemAccountingBookDetail;
    this.replaceAll = props.replaceAll;
  }
}

export class TaxTypeNexusesTax extends SoapTypes.Base {
  nexus?: PlatformCore.RecordRef;
  description?: string;
  saleTaxAcct?: PlatformCore.RecordRef;
  purchTaxAcct?: PlatformCore.RecordRef;
  constructor(props: TaxTypeNexusesTax) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.nexus = props.nexus;
    this.description = props.description;
    this.saleTaxAcct = props.saleTaxAcct;
    this.purchTaxAcct = props.purchTaxAcct;
  }
}

export class PricingGroup extends PlatformCore.Record {
  name?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: PricingGroup) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class Department extends PlatformCore.Record {
  name?: string;
  includeChildren?: boolean;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  classTranslationList?: ClassTranslationList;
  subsidiaryList?: PlatformCore.RecordRefList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Department) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.includeChildren = props.includeChildren;
    this.parent = props.parent;
    this.isInactive = props.isInactive;
    this.classTranslationList = props.classTranslationList;
    this.subsidiaryList = props.subsidiaryList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class SerializedInventoryItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  matrixType?: ListsAccountingTypes.ItemMatrixType;
  includeChildren?: boolean;
  vendorName?: string;
  parent?: PlatformCore.RecordRef;
  isOnline?: boolean;
  isHazmatItem?: boolean;
  hazmatId?: string;
  hazmatShippingName?: string;
  hazmatHazardClass?: string;
  hazmatPackingGroup?: ListsAccountingTypes.HazmatPackingGroup;
  hazmatItemUnits?: string;
  hazmatItemUnitsQty?: number;
  isGcoCompliant?: boolean;
  offerSupport?: boolean;
  isInactive?: boolean;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  costingMethod?: ListsAccountingTypes.ItemCostingMethod;
  subsidiaryList?: PlatformCore.RecordRefList;
  purchaseDescription?: string;
  copyDescription?: boolean;
  issueProduct?: PlatformCore.RecordRef;
  currency?: string;
  cogsAccount?: PlatformCore.RecordRef;
  intercoCogsAccount?: PlatformCore.RecordRef;
  vendor?: PlatformCore.RecordRef;
  salesDescription?: string;
  lastInvtCountDate?: SoapTypes.Dateish;
  nextInvtCountDate?: SoapTypes.Dateish;
  invtCountInterval?: number;
  invtClassification?: ListsAccountingTypes.ItemInvtClassification;
  incomeAccount?: PlatformCore.RecordRef;
  intercoIncomeAccount?: PlatformCore.RecordRef;
  isTaxable?: boolean;
  taxSchedule?: PlatformCore.RecordRef;
  dropshipExpenseAccount?: PlatformCore.RecordRef;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revenueAllocationGroup?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  directRevenuePosting?: boolean;
  assetAccount?: PlatformCore.RecordRef;
  matchBillToReceipt?: boolean;
  billQtyVarianceAcct?: PlatformCore.RecordRef;
  billPriceVarianceAcct?: PlatformCore.RecordRef;
  billExchRateVarianceAcct?: PlatformCore.RecordRef;
  gainLossAccount?: PlatformCore.RecordRef;
  shippingCost?: number;
  handlingCost?: number;
  weight?: number;
  costingMethodDisplay?: string;
  shippingCostUnits?: string;
  handlingCostUnits?: string;
  unitsType?: PlatformCore.RecordRef;
  stockUnit?: PlatformCore.RecordRef;
  purchaseUnit?: PlatformCore.RecordRef;
  saleUnit?: PlatformCore.RecordRef;
  minimumQuantityUnits?: string;
  safetyStockLevelUnits?: string;
  billingSchedule?: PlatformCore.RecordRef;
  trackLandedCost?: boolean;
  matrixItemNameTemplate?: string;
  isDropShipItem?: boolean;
  isSpecialOrderItem?: boolean;
  stockDescription?: string;
  deferredRevenueAccount?: PlatformCore.RecordRef;
  producer?: boolean;
  manufacturer?: string;
  revRecSchedule?: PlatformCore.RecordRef;
  mpn?: string;
  multManufactureAddr?: boolean;
  manufacturerAddr1?: string;
  manufacturerCity?: string;
  manufacturerState?: string;
  manufacturerZip?: string;
  countryOfManufacture?: PlatformCommonTypes.Country;
  defaultItemShipMethod?: PlatformCore.RecordRef;
  itemCarrier?: PlatformCommonTypes.ShippingCarrier;
  roundUpAsComponent?: boolean;
  purchaseOrderQuantity?: number;
  purchaseOrderAmount?: number;
  purchaseOrderQuantityDiff?: number;
  receiptQuantity?: number;
  receiptAmount?: number;
  receiptQuantityDiff?: number;
  itemShipMethodList?: PlatformCore.RecordRefList;
  manufacturerTaxId?: string;
  scheduleBNumber?: string;
  scheduleBQuantity?: number;
  scheduleBCode?: string;
  manufacturerTariff?: string;
  preferenceCriterion?: ListsAccountingTypes.ItemPreferenceCriterion;
  minimumQuantity?: number;
  enforceMinQtyInternally?: boolean;
  maximumQuantity?: number;
  shipPackage?: PlatformCore.RecordRef;
  shipIndividually?: boolean;
  softDescriptor?: PlatformCore.RecordRef;
  costCategory?: PlatformCore.RecordRef;
  pricesIncludeTax?: boolean;
  quantityPricingSchedule?: PlatformCore.RecordRef;
  useMarginalRates?: boolean;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  transferPrice?: number;
  overallQuantityPricingType?: ListsAccountingTypes.ItemOverallQuantityPricingType;
  pricingGroup?: PlatformCore.RecordRef;
  preferredLocation?: PlatformCore.RecordRef;
  isStorePickupAllowed?: boolean;
  vsoePrice?: number;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  itemRevenueCategory?: PlatformCore.RecordRef;
  cost?: number;
  costUnits?: string;
  quantityReorderUnits?: string;
  reorderMultiple?: number;
  totalValue?: number;
  useBins?: boolean;
  leadTime?: number;
  autoLeadTime?: boolean;
  autoReorderPoint?: boolean;
  autoPreferredStockLevel?: boolean;
  preferredStockLevelDays?: number;
  averageCost?: number;
  safetyStockLevel?: number;
  lastPurchasePrice?: number;
  safetyStockLevelDays?: number;
  backwardConsumptionDays?: number;
  seasonalDemand?: boolean;
  demandModifier?: number;
  storeDisplayName?: string;
  storeDisplayThumbnail?: PlatformCore.RecordRef;
  weightUnit?: ListsAccountingTypes.ItemWeightUnit;
  weightUnits?: string;
  storeDisplayImage?: PlatformCore.RecordRef;
  storeDescription?: string;
  storeDetailedDescription?: string;
  storeItemTemplate?: PlatformCore.RecordRef;
  pageTitle?: string;
  metaTagHtml?: string;
  excludeFromSitemap?: boolean;
  sitemapPriority?: string;
  searchKeywords?: string;
  isDonationItem?: boolean;
  showDefaultDonationAmount?: boolean;
  maxDonationAmount?: number;
  shoppingDotComCategory?: string;
  shopzillaCategoryId?: number;
  nexTagCategory?: string;
  quantityOnHand?: number;
  quantityOnHandUnits?: string;
  onHandValueMli?: number;
  serialNumbers?: string;
  reorderPoint?: number;
  preferredStockLevel?: number;
  reorderPointUnits?: string;
  defaultReturnCost?: number;
  supplyReplenishmentMethod?: PlatformCore.RecordRef;
  alternateDemandSourceItem?: PlatformCore.RecordRef;
  fixedLotSize?: number;
  periodicLotSizeType?: ListsAccountingTypes.PeriodicLotSizeType;
  supplyType?: PlatformCore.RecordRef;
  demandTimeFence?: number;
  supplyTimeFence?: number;
  rescheduleInDays?: number;
  rescheduleOutDays?: number;
  periodicLotSizeDays?: number;
  supplyLotSizingMethod?: PlatformCore.RecordRef;
  forwardConsumptionDays?: number;
  demandSource?: PlatformCore.RecordRef;
  quantityOnOrder?: number;
  preferredStockLevelUnits?: string;
  quantityCommitted?: number;
  quantityAvailable?: number;
  quantityBackOrdered?: number;
  purchaseTaxCode?: PlatformCore.RecordRef;
  purchasePriceVarianceAcct?: PlatformCore.RecordRef;
  rate?: number;
  salesTaxCode?: PlatformCore.RecordRef;
  onSpecial?: boolean;
  dontShowPrice?: boolean;
  noPriceMessage?: string;
  outOfStockMessage?: string;
  specialsDescription?: string;
  outOfStockBehavior?: ListsAccountingTypes.ItemOutOfStockBehavior;
  relatedItemsDescription?: string;
  featuredDescription?: string;
  productFeedList?: ProductFeedList;
  urlComponent?: string;
  itemOptionsList?: ItemOptionsList;
  matrixOptionList?: MatrixOptionList;
  itemVendorList?: ItemVendorList;
  pricingMatrix?: PricingMatrix;
  hierarchyVersionsList?: SerializedInventoryItemHierarchyVersionsList;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  itemNumberOptionsList?: PlatformCore.RecordRefList;
  numbersList?: SerializedInventoryItemNumbersList;
  binNumberList?: InventoryItemBinNumberList;
  siteCategoryList?: SiteCategoryList;
  locationsList?: SerializedInventoryItemLocationsList;
  translationsList?: TranslationList;
  presentationItemList?: PresentationItemList;
  futureHorizon?: number;
  consumptionUnit?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: SerializedInventoryItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.matrixType = props.matrixType;
    this.includeChildren = props.includeChildren;
    this.vendorName = props.vendorName;
    this.parent = props.parent;
    this.isOnline = props.isOnline;
    this.isHazmatItem = props.isHazmatItem;
    this.hazmatId = props.hazmatId;
    this.hazmatShippingName = props.hazmatShippingName;
    this.hazmatHazardClass = props.hazmatHazardClass;
    this.hazmatPackingGroup = props.hazmatPackingGroup;
    this.hazmatItemUnits = props.hazmatItemUnits;
    this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
    this.isGcoCompliant = props.isGcoCompliant;
    this.offerSupport = props.offerSupport;
    this.isInactive = props.isInactive;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.costingMethod = props.costingMethod;
    this.subsidiaryList = props.subsidiaryList;
    this.purchaseDescription = props.purchaseDescription;
    this.copyDescription = props.copyDescription;
    this.issueProduct = props.issueProduct;
    this.currency = props.currency;
    this.cogsAccount = props.cogsAccount;
    this.intercoCogsAccount = props.intercoCogsAccount;
    this.vendor = props.vendor;
    this.salesDescription = props.salesDescription;
    this.lastInvtCountDate = props.lastInvtCountDate;
    this.nextInvtCountDate = props.nextInvtCountDate;
    this.invtCountInterval = props.invtCountInterval;
    this.invtClassification = props.invtClassification;
    this.incomeAccount = props.incomeAccount;
    this.intercoIncomeAccount = props.intercoIncomeAccount;
    this.isTaxable = props.isTaxable;
    this.taxSchedule = props.taxSchedule;
    this.dropshipExpenseAccount = props.dropshipExpenseAccount;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.revRecForecastRule = props.revRecForecastRule;
    this.revenueAllocationGroup = props.revenueAllocationGroup;
    this.createRevenuePlansOn = props.createRevenuePlansOn;
    this.directRevenuePosting = props.directRevenuePosting;
    this.assetAccount = props.assetAccount;
    this.matchBillToReceipt = props.matchBillToReceipt;
    this.billQtyVarianceAcct = props.billQtyVarianceAcct;
    this.billPriceVarianceAcct = props.billPriceVarianceAcct;
    this.billExchRateVarianceAcct = props.billExchRateVarianceAcct;
    this.gainLossAccount = props.gainLossAccount;
    this.shippingCost = props.shippingCost;
    this.handlingCost = props.handlingCost;
    this.weight = props.weight;
    this.costingMethodDisplay = props.costingMethodDisplay;
    this.shippingCostUnits = props.shippingCostUnits;
    this.handlingCostUnits = props.handlingCostUnits;
    this.unitsType = props.unitsType;
    this.stockUnit = props.stockUnit;
    this.purchaseUnit = props.purchaseUnit;
    this.saleUnit = props.saleUnit;
    this.minimumQuantityUnits = props.minimumQuantityUnits;
    this.safetyStockLevelUnits = props.safetyStockLevelUnits;
    this.billingSchedule = props.billingSchedule;
    this.trackLandedCost = props.trackLandedCost;
    this.matrixItemNameTemplate = props.matrixItemNameTemplate;
    this.isDropShipItem = props.isDropShipItem;
    this.isSpecialOrderItem = props.isSpecialOrderItem;
    this.stockDescription = props.stockDescription;
    this.deferredRevenueAccount = props.deferredRevenueAccount;
    this.producer = props.producer;
    this.manufacturer = props.manufacturer;
    this.revRecSchedule = props.revRecSchedule;
    this.mpn = props.mpn;
    this.multManufactureAddr = props.multManufactureAddr;
    this.manufacturerAddr1 = props.manufacturerAddr1;
    this.manufacturerCity = props.manufacturerCity;
    this.manufacturerState = props.manufacturerState;
    this.manufacturerZip = props.manufacturerZip;
    this.countryOfManufacture = props.countryOfManufacture;
    this.defaultItemShipMethod = props.defaultItemShipMethod;
    this.itemCarrier = props.itemCarrier;
    this.roundUpAsComponent = props.roundUpAsComponent;
    this.purchaseOrderQuantity = props.purchaseOrderQuantity;
    this.purchaseOrderAmount = props.purchaseOrderAmount;
    this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
    this.receiptQuantity = props.receiptQuantity;
    this.receiptAmount = props.receiptAmount;
    this.receiptQuantityDiff = props.receiptQuantityDiff;
    this.itemShipMethodList = props.itemShipMethodList;
    this.manufacturerTaxId = props.manufacturerTaxId;
    this.scheduleBNumber = props.scheduleBNumber;
    this.scheduleBQuantity = props.scheduleBQuantity;
    this.scheduleBCode = props.scheduleBCode;
    this.manufacturerTariff = props.manufacturerTariff;
    this.preferenceCriterion = props.preferenceCriterion;
    this.minimumQuantity = props.minimumQuantity;
    this.enforceMinQtyInternally = props.enforceMinQtyInternally;
    this.maximumQuantity = props.maximumQuantity;
    this.shipPackage = props.shipPackage;
    this.shipIndividually = props.shipIndividually;
    this.softDescriptor = props.softDescriptor;
    this.costCategory = props.costCategory;
    this.pricesIncludeTax = props.pricesIncludeTax;
    this.quantityPricingSchedule = props.quantityPricingSchedule;
    this.useMarginalRates = props.useMarginalRates;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.transferPrice = props.transferPrice;
    this.overallQuantityPricingType = props.overallQuantityPricingType;
    this.pricingGroup = props.pricingGroup;
    this.preferredLocation = props.preferredLocation;
    this.isStorePickupAllowed = props.isStorePickupAllowed;
    this.vsoePrice = props.vsoePrice;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.itemRevenueCategory = props.itemRevenueCategory;
    this.cost = props.cost;
    this.costUnits = props.costUnits;
    this.quantityReorderUnits = props.quantityReorderUnits;
    this.reorderMultiple = props.reorderMultiple;
    this.totalValue = props.totalValue;
    this.useBins = props.useBins;
    this.leadTime = props.leadTime;
    this.autoLeadTime = props.autoLeadTime;
    this.autoReorderPoint = props.autoReorderPoint;
    this.autoPreferredStockLevel = props.autoPreferredStockLevel;
    this.preferredStockLevelDays = props.preferredStockLevelDays;
    this.averageCost = props.averageCost;
    this.safetyStockLevel = props.safetyStockLevel;
    this.lastPurchasePrice = props.lastPurchasePrice;
    this.safetyStockLevelDays = props.safetyStockLevelDays;
    this.backwardConsumptionDays = props.backwardConsumptionDays;
    this.seasonalDemand = props.seasonalDemand;
    this.demandModifier = props.demandModifier;
    this.storeDisplayName = props.storeDisplayName;
    this.storeDisplayThumbnail = props.storeDisplayThumbnail;
    this.weightUnit = props.weightUnit;
    this.weightUnits = props.weightUnits;
    this.storeDisplayImage = props.storeDisplayImage;
    this.storeDescription = props.storeDescription;
    this.storeDetailedDescription = props.storeDetailedDescription;
    this.storeItemTemplate = props.storeItemTemplate;
    this.pageTitle = props.pageTitle;
    this.metaTagHtml = props.metaTagHtml;
    this.excludeFromSitemap = props.excludeFromSitemap;
    this.sitemapPriority = props.sitemapPriority;
    this.searchKeywords = props.searchKeywords;
    this.isDonationItem = props.isDonationItem;
    this.showDefaultDonationAmount = props.showDefaultDonationAmount;
    this.maxDonationAmount = props.maxDonationAmount;
    this.shoppingDotComCategory = props.shoppingDotComCategory;
    this.shopzillaCategoryId = props.shopzillaCategoryId;
    this.nexTagCategory = props.nexTagCategory;
    this.quantityOnHand = props.quantityOnHand;
    this.quantityOnHandUnits = props.quantityOnHandUnits;
    this.onHandValueMli = props.onHandValueMli;
    this.serialNumbers = props.serialNumbers;
    this.reorderPoint = props.reorderPoint;
    this.preferredStockLevel = props.preferredStockLevel;
    this.reorderPointUnits = props.reorderPointUnits;
    this.defaultReturnCost = props.defaultReturnCost;
    this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
    this.alternateDemandSourceItem = props.alternateDemandSourceItem;
    this.fixedLotSize = props.fixedLotSize;
    this.periodicLotSizeType = props.periodicLotSizeType;
    this.supplyType = props.supplyType;
    this.demandTimeFence = props.demandTimeFence;
    this.supplyTimeFence = props.supplyTimeFence;
    this.rescheduleInDays = props.rescheduleInDays;
    this.rescheduleOutDays = props.rescheduleOutDays;
    this.periodicLotSizeDays = props.periodicLotSizeDays;
    this.supplyLotSizingMethod = props.supplyLotSizingMethod;
    this.forwardConsumptionDays = props.forwardConsumptionDays;
    this.demandSource = props.demandSource;
    this.quantityOnOrder = props.quantityOnOrder;
    this.preferredStockLevelUnits = props.preferredStockLevelUnits;
    this.quantityCommitted = props.quantityCommitted;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityBackOrdered = props.quantityBackOrdered;
    this.purchaseTaxCode = props.purchaseTaxCode;
    this.purchasePriceVarianceAcct = props.purchasePriceVarianceAcct;
    this.rate = props.rate;
    this.salesTaxCode = props.salesTaxCode;
    this.onSpecial = props.onSpecial;
    this.dontShowPrice = props.dontShowPrice;
    this.noPriceMessage = props.noPriceMessage;
    this.outOfStockMessage = props.outOfStockMessage;
    this.specialsDescription = props.specialsDescription;
    this.outOfStockBehavior = props.outOfStockBehavior;
    this.relatedItemsDescription = props.relatedItemsDescription;
    this.featuredDescription = props.featuredDescription;
    this.productFeedList = props.productFeedList;
    this.urlComponent = props.urlComponent;
    this.itemOptionsList = props.itemOptionsList;
    this.matrixOptionList = props.matrixOptionList;
    this.itemVendorList = props.itemVendorList;
    this.pricingMatrix = props.pricingMatrix;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.itemNumberOptionsList = props.itemNumberOptionsList;
    this.numbersList = props.numbersList;
    this.binNumberList = props.binNumberList;
    this.siteCategoryList = props.siteCategoryList;
    this.locationsList = props.locationsList;
    this.translationsList = props.translationsList;
    this.presentationItemList = props.presentationItemList;
    this.futureHorizon = props.futureHorizon;
    this.consumptionUnit = props.consumptionUnit;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class BillingScheduleMilestoneList extends SoapTypes.Base {
  billingScheduleMilestone?: BillingScheduleMilestone[];
  replaceAll?: boolean;
  constructor(props: BillingScheduleMilestoneList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.billingScheduleMilestone = props.billingScheduleMilestone;
    this.replaceAll = props.replaceAll;
  }
}

export class ContactRoleSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ContactRoleSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: ContactRoleSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class ServiceResaleItemHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: ServiceResaleItemHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class PricingGroupSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PricingGroupSearch;
  columns?: PricingGroupSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: PricingGroupSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class RateList extends SoapTypes.Base {
  rate?: Rate[];
  constructor(props: RateList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.rate = props.rate;
  }
}

export class MerchandiseHierarchyNodeHierarchyVersionsList extends SoapTypes.Base {
  merchandiseHierarchyNodeHierarchyVersions?: MerchandiseHierarchyNodeHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: MerchandiseHierarchyNodeHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.merchandiseHierarchyNodeHierarchyVersions = props.merchandiseHierarchyNodeHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class TaxGroupSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: TaxGroupSearch;
  columns?: TaxGroupSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: TaxGroupSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class TaxTypeNexusesTaxList extends SoapTypes.Base {
  nexusesTax?: TaxTypeNexusesTax[];
  replaceAll?: boolean;
  constructor(props: TaxTypeNexusesTaxList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.nexusesTax = props.nexusesTax;
    this.replaceAll = props.replaceAll;
  }
}

export class SubsidiaryAccountingBookDetail extends SoapTypes.Base {
  accountingBook?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  bookStatus?: ListsAccountingTypes.AccountingBookStatus;
  constructor(props: SubsidiaryAccountingBookDetail) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.accountingBook = props.accountingBook;
    this.currency = props.currency;
    this.bookStatus = props.bookStatus;
  }
}

export class BinSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.BinSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: BinSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class MerchandiseHierarchyNodeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: MerchandiseHierarchyNodeSearch;
  columns?: MerchandiseHierarchyNodeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: MerchandiseHierarchyNodeSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class BomRevisionSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.BomRevisionSearchBasic;
  billOfMaterialsJoin?: PlatformCommon.BomSearchBasic;
  componentJoin?: PlatformCommon.BomRevisionComponentSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: BomRevisionSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.billOfMaterialsJoin = props.billOfMaterialsJoin;
    this.componentJoin = props.componentJoin;
    this.transactionJoin = props.transactionJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class TaxTypeSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.TaxTypeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: TaxTypeSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class NexusSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.NexusSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: NexusSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class ConsolidatedExchangeRateSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ConsolidatedExchangeRateSearchBasic;
  fromSubsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  periodJoin?: PlatformCommon.AccountingPeriodSearchBasic;
  toSubsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: ConsolidatedExchangeRateSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.fromSubsidiaryJoin = props.fromSubsidiaryJoin;
    this.periodJoin = props.periodJoin;
    this.toSubsidiaryJoin = props.toSubsidiaryJoin;
    this.userJoin = props.userJoin;
  }
}

export class SerializedInventoryItemHierarchyVersionsList extends SoapTypes.Base {
  serializedInventoryItemHierarchyVersions?: SerializedInventoryItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: SerializedInventoryItemHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.serializedInventoryItemHierarchyVersions = props.serializedInventoryItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class KitItemHierarchyVersionsList extends SoapTypes.Base {
  kitItemHierarchyVersions?: KitItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: KitItemHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.kitItemHierarchyVersions = props.kitItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class ContactRoleSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ContactRoleSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: ContactRoleSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class ItemMemberList extends SoapTypes.Base {
  itemMember?: ItemMember[];
  replaceAll?: boolean;
  constructor(props: ItemMemberList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.itemMember = props.itemMember;
    this.replaceAll = props.replaceAll;
  }
}

export class PaymentMethodSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PaymentMethodSearch;
  columns?: PaymentMethodSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: PaymentMethodSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class ContactCategory extends PlatformCore.Record {
  name?: string;
  _private?: boolean;
  sync?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: ContactCategory) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this._private = props._private;
    this.sync = props.sync;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class TermSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.TermSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: TermSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class AccountingPeriodFiscalCalendars extends SoapTypes.Base {
  fiscalCalendar?: PlatformCore.RecordRef;
  parent?: PlatformCore.RecordRef;
  constructor(props: AccountingPeriodFiscalCalendars) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.fiscalCalendar = props.fiscalCalendar;
    this.parent = props.parent;
  }
}

export class BillingScheduleSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: BillingScheduleSearch;
  columns?: BillingScheduleSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: BillingScheduleSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class ExpenseCategory extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  name?: string;
  description?: string;
  expenseAcct?: PlatformCore.RecordRef;
  isInactive?: boolean;
  rateRequired?: boolean;
  subsidiaryList?: PlatformCore.RecordRefList;
  defaultRate?: number;
  ratesList?: ExpenseCategoryRatesList;
  translationsList?: TranslationList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: ExpenseCategory) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customForm = props.customForm;
    this.name = props.name;
    this.description = props.description;
    this.expenseAcct = props.expenseAcct;
    this.isInactive = props.isInactive;
    this.rateRequired = props.rateRequired;
    this.subsidiaryList = props.subsidiaryList;
    this.defaultRate = props.defaultRate;
    this.ratesList = props.ratesList;
    this.translationsList = props.translationsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ExpenseCategoryRates extends SoapTypes.Base {
  subsidiary?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  defaultRate?: number;
  constructor(props: ExpenseCategoryRates) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.subsidiary = props.subsidiary;
    this.currency = props.currency;
    this.defaultRate = props.defaultRate;
  }
}

export class GiftCertificateItemAuthCodesList extends SoapTypes.Base {
  authCodes?: GiftCertificateItemAuthCodes[];
  replaceAll?: boolean;
  constructor(props: GiftCertificateItemAuthCodesList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.authCodes = props.authCodes;
    this.replaceAll = props.replaceAll;
  }
}

export class SiteCategory extends SoapTypes.Base {
  website?: PlatformCore.RecordRef;
  category?: PlatformCore.RecordRef;
  isDefault?: boolean;
  categoryDescription?: string;
  constructor(props: SiteCategory) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.website = props.website;
    this.category = props.category;
    this.isDefault = props.isDefault;
    this.categoryDescription = props.categoryDescription;
  }
}

export class ContactCategorySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ContactCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: ContactCategorySearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class TermSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: TermSearch;
  columns?: TermSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: TermSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class NonInventorySaleItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  salesDescription?: string;
  includeChildren?: boolean;
  incomeAccount?: PlatformCore.RecordRef;
  isTaxable?: boolean;
  matrixType?: ListsAccountingTypes.ItemMatrixType;
  taxSchedule?: PlatformCore.RecordRef;
  shippingCost?: number;
  shippingCostUnits?: string;
  handlingCost?: number;
  handlingCostUnits?: string;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  weight?: number;
  weightUnit?: ListsAccountingTypes.ItemWeightUnit;
  weightUnits?: string;
  costEstimateUnits?: string;
  unitsType?: PlatformCore.RecordRef;
  saleUnit?: PlatformCore.RecordRef;
  issueProduct?: PlatformCore.RecordRef;
  billingSchedule?: PlatformCore.RecordRef;
  deferredRevenueAccount?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  stockDescription?: string;
  isHazmatItem?: boolean;
  hazmatId?: string;
  hazmatShippingName?: string;
  hazmatHazardClass?: string;
  hazmatPackingGroup?: ListsAccountingTypes.HazmatPackingGroup;
  hazmatItemUnits?: string;
  hazmatItemUnitsQty?: number;
  producer?: boolean;
  manufacturer?: string;
  mpn?: string;
  multManufactureAddr?: boolean;
  manufacturerAddr1?: string;
  manufacturerCity?: string;
  manufacturerState?: string;
  manufacturerZip?: string;
  countryOfManufacture?: PlatformCommonTypes.Country;
  manufacturerTaxId?: string;
  scheduleBNumber?: string;
  scheduleBQuantity?: number;
  scheduleBCode?: string;
  manufacturerTariff?: string;
  preferenceCriterion?: ListsAccountingTypes.ItemPreferenceCriterion;
  minimumQuantity?: number;
  enforceMinQtyInternally?: boolean;
  maximumQuantity?: number;
  softDescriptor?: string;
  shipPackage?: PlatformCore.RecordRef;
  shipIndividually?: boolean;
  isFulfillable?: boolean;
  costCategory?: PlatformCore.RecordRef;
  pricesIncludeTax?: boolean;
  quantityPricingSchedule?: PlatformCore.RecordRef;
  useMarginalRates?: boolean;
  overallQuantityPricingType?: ListsAccountingTypes.ItemOverallQuantityPricingType;
  pricingGroup?: PlatformCore.RecordRef;
  minimumQuantityUnits?: string;
  vsoePrice?: number;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  itemRevenueCategory?: PlatformCore.RecordRef;
  deferRevRec?: boolean;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revenueAllocationGroup?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  directRevenuePosting?: boolean;
  contingentRevenueHandling?: boolean;
  revReclassFXAccount?: PlatformCore.RecordRef;
  storeDisplayName?: string;
  storeDisplayThumbnail?: PlatformCore.RecordRef;
  storeDisplayImage?: PlatformCore.RecordRef;
  storeDescription?: string;
  storeDetailedDescription?: string;
  storeItemTemplate?: PlatformCore.RecordRef;
  pageTitle?: string;
  metaTagHtml?: string;
  excludeFromSitemap?: boolean;
  sitemapPriority?: string;
  searchKeywords?: string;
  isDonationItem?: boolean;
  showDefaultDonationAmount?: boolean;
  maxDonationAmount?: number;
  dontShowPrice?: boolean;
  noPriceMessage?: string;
  outOfStockMessage?: string;
  onSpecial?: boolean;
  outOfStockBehavior?: ListsAccountingTypes.ItemOutOfStockBehavior;
  relatedItemsDescription?: string;
  specialsDescription?: string;
  featuredDescription?: string;
  shoppingDotComCategory?: string;
  shopzillaCategoryId?: number;
  nexTagCategory?: string;
  productFeedList?: ProductFeedList;
  urlComponent?: string;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  parent?: PlatformCore.RecordRef;
  isOnline?: boolean;
  isGcoCompliant?: boolean;
  offerSupport?: boolean;
  isInactive?: boolean;
  matrixItemNameTemplate?: string;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  defaultItemShipMethod?: PlatformCore.RecordRef;
  itemCarrier?: PlatformCommonTypes.ShippingCarrier;
  itemShipMethodList?: PlatformCore.RecordRefList;
  subsidiaryList?: PlatformCore.RecordRefList;
  itemOptionsList?: ItemOptionsList;
  matrixOptionList?: MatrixOptionList;
  pricingMatrix?: PricingMatrix;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  purchaseTaxCode?: PlatformCore.RecordRef;
  rate?: number;
  salesTaxCode?: PlatformCore.RecordRef;
  siteCategoryList?: SiteCategoryList;
  translationsList?: TranslationList;
  presentationItemList?: PresentationItemList;
  hierarchyVersionsList?: NonInventorySaleItemHierarchyVersionsList;
  consumptionUnit?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: NonInventorySaleItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.salesDescription = props.salesDescription;
    this.includeChildren = props.includeChildren;
    this.incomeAccount = props.incomeAccount;
    this.isTaxable = props.isTaxable;
    this.matrixType = props.matrixType;
    this.taxSchedule = props.taxSchedule;
    this.shippingCost = props.shippingCost;
    this.shippingCostUnits = props.shippingCostUnits;
    this.handlingCost = props.handlingCost;
    this.handlingCostUnits = props.handlingCostUnits;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.weight = props.weight;
    this.weightUnit = props.weightUnit;
    this.weightUnits = props.weightUnits;
    this.costEstimateUnits = props.costEstimateUnits;
    this.unitsType = props.unitsType;
    this.saleUnit = props.saleUnit;
    this.issueProduct = props.issueProduct;
    this.billingSchedule = props.billingSchedule;
    this.deferredRevenueAccount = props.deferredRevenueAccount;
    this.revRecSchedule = props.revRecSchedule;
    this.stockDescription = props.stockDescription;
    this.isHazmatItem = props.isHazmatItem;
    this.hazmatId = props.hazmatId;
    this.hazmatShippingName = props.hazmatShippingName;
    this.hazmatHazardClass = props.hazmatHazardClass;
    this.hazmatPackingGroup = props.hazmatPackingGroup;
    this.hazmatItemUnits = props.hazmatItemUnits;
    this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
    this.producer = props.producer;
    this.manufacturer = props.manufacturer;
    this.mpn = props.mpn;
    this.multManufactureAddr = props.multManufactureAddr;
    this.manufacturerAddr1 = props.manufacturerAddr1;
    this.manufacturerCity = props.manufacturerCity;
    this.manufacturerState = props.manufacturerState;
    this.manufacturerZip = props.manufacturerZip;
    this.countryOfManufacture = props.countryOfManufacture;
    this.manufacturerTaxId = props.manufacturerTaxId;
    this.scheduleBNumber = props.scheduleBNumber;
    this.scheduleBQuantity = props.scheduleBQuantity;
    this.scheduleBCode = props.scheduleBCode;
    this.manufacturerTariff = props.manufacturerTariff;
    this.preferenceCriterion = props.preferenceCriterion;
    this.minimumQuantity = props.minimumQuantity;
    this.enforceMinQtyInternally = props.enforceMinQtyInternally;
    this.maximumQuantity = props.maximumQuantity;
    this.softDescriptor = props.softDescriptor;
    this.shipPackage = props.shipPackage;
    this.shipIndividually = props.shipIndividually;
    this.isFulfillable = props.isFulfillable;
    this.costCategory = props.costCategory;
    this.pricesIncludeTax = props.pricesIncludeTax;
    this.quantityPricingSchedule = props.quantityPricingSchedule;
    this.useMarginalRates = props.useMarginalRates;
    this.overallQuantityPricingType = props.overallQuantityPricingType;
    this.pricingGroup = props.pricingGroup;
    this.minimumQuantityUnits = props.minimumQuantityUnits;
    this.vsoePrice = props.vsoePrice;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.itemRevenueCategory = props.itemRevenueCategory;
    this.deferRevRec = props.deferRevRec;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.revRecForecastRule = props.revRecForecastRule;
    this.revenueAllocationGroup = props.revenueAllocationGroup;
    this.createRevenuePlansOn = props.createRevenuePlansOn;
    this.directRevenuePosting = props.directRevenuePosting;
    this.contingentRevenueHandling = props.contingentRevenueHandling;
    this.revReclassFXAccount = props.revReclassFXAccount;
    this.storeDisplayName = props.storeDisplayName;
    this.storeDisplayThumbnail = props.storeDisplayThumbnail;
    this.storeDisplayImage = props.storeDisplayImage;
    this.storeDescription = props.storeDescription;
    this.storeDetailedDescription = props.storeDetailedDescription;
    this.storeItemTemplate = props.storeItemTemplate;
    this.pageTitle = props.pageTitle;
    this.metaTagHtml = props.metaTagHtml;
    this.excludeFromSitemap = props.excludeFromSitemap;
    this.sitemapPriority = props.sitemapPriority;
    this.searchKeywords = props.searchKeywords;
    this.isDonationItem = props.isDonationItem;
    this.showDefaultDonationAmount = props.showDefaultDonationAmount;
    this.maxDonationAmount = props.maxDonationAmount;
    this.dontShowPrice = props.dontShowPrice;
    this.noPriceMessage = props.noPriceMessage;
    this.outOfStockMessage = props.outOfStockMessage;
    this.onSpecial = props.onSpecial;
    this.outOfStockBehavior = props.outOfStockBehavior;
    this.relatedItemsDescription = props.relatedItemsDescription;
    this.specialsDescription = props.specialsDescription;
    this.featuredDescription = props.featuredDescription;
    this.shoppingDotComCategory = props.shoppingDotComCategory;
    this.shopzillaCategoryId = props.shopzillaCategoryId;
    this.nexTagCategory = props.nexTagCategory;
    this.productFeedList = props.productFeedList;
    this.urlComponent = props.urlComponent;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.parent = props.parent;
    this.isOnline = props.isOnline;
    this.isGcoCompliant = props.isGcoCompliant;
    this.offerSupport = props.offerSupport;
    this.isInactive = props.isInactive;
    this.matrixItemNameTemplate = props.matrixItemNameTemplate;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.defaultItemShipMethod = props.defaultItemShipMethod;
    this.itemCarrier = props.itemCarrier;
    this.itemShipMethodList = props.itemShipMethodList;
    this.subsidiaryList = props.subsidiaryList;
    this.itemOptionsList = props.itemOptionsList;
    this.matrixOptionList = props.matrixOptionList;
    this.pricingMatrix = props.pricingMatrix;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.purchaseTaxCode = props.purchaseTaxCode;
    this.rate = props.rate;
    this.salesTaxCode = props.salesTaxCode;
    this.siteCategoryList = props.siteCategoryList;
    this.translationsList = props.translationsList;
    this.presentationItemList = props.presentationItemList;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.consumptionUnit = props.consumptionUnit;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class SerializedAssemblyItemHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: SerializedAssemblyItemHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class ItemAccountMapping extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  effectiveDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  accountingBook?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  itemAccount?: ListsAccountingTypes.ItemAccountMappingItemAccount;
  sourceAccount?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  destinationAccount?: PlatformCore.RecordRef;
  customDimension?: PlatformCore.BaseRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: ItemAccountMapping) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customForm = props.customForm;
    this.effectiveDate = props.effectiveDate;
    this.endDate = props.endDate;
    this.accountingBook = props.accountingBook;
    this.subsidiary = props.subsidiary;
    this.itemAccount = props.itemAccount;
    this.sourceAccount = props.sourceAccount;
    this.clazz = props.clazz;
    this.department = props.department;
    this.location = props.location;
    this.destinationAccount = props.destinationAccount;
    this.customDimension = props.customDimension;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class AccountSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.AccountSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: AccountSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class WinLossReasonSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.WinLossReasonSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: WinLossReasonSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class PartnerCategorySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.PartnerCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: PartnerCategorySearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class ServiceSaleItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  salesDescription?: string;
  includeChildren?: boolean;
  incomeAccount?: PlatformCore.RecordRef;
  isTaxable?: boolean;
  matrixType?: ListsAccountingTypes.ItemMatrixType;
  taxSchedule?: PlatformCore.RecordRef;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  unitsType?: PlatformCore.RecordRef;
  saleUnit?: PlatformCore.RecordRef;
  issueProduct?: PlatformCore.RecordRef;
  costEstimateUnits?: string;
  billingSchedule?: PlatformCore.RecordRef;
  deferredRevenueAccount?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  minimumQuantity?: number;
  enforceMinQtyInternally?: boolean;
  maximumQuantity?: number;
  softDescriptor?: string;
  pricesIncludeTax?: boolean;
  quantityPricingSchedule?: PlatformCore.RecordRef;
  useMarginalRates?: boolean;
  overallQuantityPricingType?: ListsAccountingTypes.ItemOverallQuantityPricingType;
  isFulfillable?: boolean;
  costCategory?: PlatformCore.RecordRef;
  pricingGroup?: PlatformCore.RecordRef;
  minimumQuantityUnits?: string;
  vsoePrice?: number;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  itemRevenueCategory?: PlatformCore.RecordRef;
  deferRevRec?: boolean;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revenueAllocationGroup?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  directRevenuePosting?: boolean;
  contingentRevenueHandling?: boolean;
  revReclassFXAccount?: PlatformCore.RecordRef;
  createJob?: boolean;
  matrixItemNameTemplate?: string;
  storeDisplayName?: string;
  storeDisplayThumbnail?: PlatformCore.RecordRef;
  storeDisplayImage?: PlatformCore.RecordRef;
  storeDescription?: string;
  storeDetailedDescription?: string;
  storeItemTemplate?: PlatformCore.RecordRef;
  pageTitle?: string;
  urlComponent?: string;
  metaTagHtml?: string;
  excludeFromSitemap?: boolean;
  sitemapPriority?: string;
  searchKeywords?: string;
  isDonationItem?: boolean;
  showDefaultDonationAmount?: boolean;
  maxDonationAmount?: number;
  dontShowPrice?: boolean;
  noPriceMessage?: string;
  outOfStockMessage?: string;
  onSpecial?: boolean;
  outOfStockBehavior?: ListsAccountingTypes.ItemOutOfStockBehavior;
  relatedItemsDescription?: string;
  specialsDescription?: string;
  itemTaskTemplatesList?: ServiceItemTaskTemplatesList;
  featuredDescription?: string;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  parent?: PlatformCore.RecordRef;
  isOnline?: boolean;
  isGcoCompliant?: boolean;
  offerSupport?: boolean;
  isInactive?: boolean;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiaryList?: PlatformCore.RecordRefList;
  billingRatesMatrix?: BillingRatesMatrix;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  itemOptionsList?: ItemOptionsList;
  matrixOptionList?: MatrixOptionList;
  pricingMatrix?: PricingMatrix;
  purchaseTaxCode?: PlatformCore.RecordRef;
  rate?: number;
  salesTaxCode?: PlatformCore.RecordRef;
  siteCategoryList?: SiteCategoryList;
  translationsList?: TranslationList;
  presentationItemList?: PresentationItemList;
  hierarchyVersionsList?: ServiceSaleItemHierarchyVersionsList;
  consumptionUnit?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: ServiceSaleItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.salesDescription = props.salesDescription;
    this.includeChildren = props.includeChildren;
    this.incomeAccount = props.incomeAccount;
    this.isTaxable = props.isTaxable;
    this.matrixType = props.matrixType;
    this.taxSchedule = props.taxSchedule;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.unitsType = props.unitsType;
    this.saleUnit = props.saleUnit;
    this.issueProduct = props.issueProduct;
    this.costEstimateUnits = props.costEstimateUnits;
    this.billingSchedule = props.billingSchedule;
    this.deferredRevenueAccount = props.deferredRevenueAccount;
    this.revRecSchedule = props.revRecSchedule;
    this.minimumQuantity = props.minimumQuantity;
    this.enforceMinQtyInternally = props.enforceMinQtyInternally;
    this.maximumQuantity = props.maximumQuantity;
    this.softDescriptor = props.softDescriptor;
    this.pricesIncludeTax = props.pricesIncludeTax;
    this.quantityPricingSchedule = props.quantityPricingSchedule;
    this.useMarginalRates = props.useMarginalRates;
    this.overallQuantityPricingType = props.overallQuantityPricingType;
    this.isFulfillable = props.isFulfillable;
    this.costCategory = props.costCategory;
    this.pricingGroup = props.pricingGroup;
    this.minimumQuantityUnits = props.minimumQuantityUnits;
    this.vsoePrice = props.vsoePrice;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.itemRevenueCategory = props.itemRevenueCategory;
    this.deferRevRec = props.deferRevRec;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.revRecForecastRule = props.revRecForecastRule;
    this.revenueAllocationGroup = props.revenueAllocationGroup;
    this.createRevenuePlansOn = props.createRevenuePlansOn;
    this.directRevenuePosting = props.directRevenuePosting;
    this.contingentRevenueHandling = props.contingentRevenueHandling;
    this.revReclassFXAccount = props.revReclassFXAccount;
    this.createJob = props.createJob;
    this.matrixItemNameTemplate = props.matrixItemNameTemplate;
    this.storeDisplayName = props.storeDisplayName;
    this.storeDisplayThumbnail = props.storeDisplayThumbnail;
    this.storeDisplayImage = props.storeDisplayImage;
    this.storeDescription = props.storeDescription;
    this.storeDetailedDescription = props.storeDetailedDescription;
    this.storeItemTemplate = props.storeItemTemplate;
    this.pageTitle = props.pageTitle;
    this.urlComponent = props.urlComponent;
    this.metaTagHtml = props.metaTagHtml;
    this.excludeFromSitemap = props.excludeFromSitemap;
    this.sitemapPriority = props.sitemapPriority;
    this.searchKeywords = props.searchKeywords;
    this.isDonationItem = props.isDonationItem;
    this.showDefaultDonationAmount = props.showDefaultDonationAmount;
    this.maxDonationAmount = props.maxDonationAmount;
    this.dontShowPrice = props.dontShowPrice;
    this.noPriceMessage = props.noPriceMessage;
    this.outOfStockMessage = props.outOfStockMessage;
    this.onSpecial = props.onSpecial;
    this.outOfStockBehavior = props.outOfStockBehavior;
    this.relatedItemsDescription = props.relatedItemsDescription;
    this.specialsDescription = props.specialsDescription;
    this.itemTaskTemplatesList = props.itemTaskTemplatesList;
    this.featuredDescription = props.featuredDescription;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.parent = props.parent;
    this.isOnline = props.isOnline;
    this.isGcoCompliant = props.isGcoCompliant;
    this.offerSupport = props.offerSupport;
    this.isInactive = props.isInactive;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiaryList = props.subsidiaryList;
    this.billingRatesMatrix = props.billingRatesMatrix;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.itemOptionsList = props.itemOptionsList;
    this.matrixOptionList = props.matrixOptionList;
    this.pricingMatrix = props.pricingMatrix;
    this.purchaseTaxCode = props.purchaseTaxCode;
    this.rate = props.rate;
    this.salesTaxCode = props.salesTaxCode;
    this.siteCategoryList = props.siteCategoryList;
    this.translationsList = props.translationsList;
    this.presentationItemList = props.presentationItemList;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.consumptionUnit = props.consumptionUnit;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ContactCategorySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ContactCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: ContactCategorySearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class LocationBusinessHours extends SoapTypes.Base {
  startTime?: SoapTypes.Dateish;
  endTime?: SoapTypes.Dateish;
  isSunday?: boolean;
  isMonday?: boolean;
  isTuesday?: boolean;
  isWednesday?: boolean;
  isThursday?: boolean;
  isFriday?: boolean;
  isSaturday?: boolean;
  sameDayPickupCutOffTime?: SoapTypes.Dateish;
  constructor(props: LocationBusinessHours) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.startTime = props.startTime;
    this.endTime = props.endTime;
    this.isSunday = props.isSunday;
    this.isMonday = props.isMonday;
    this.isTuesday = props.isTuesday;
    this.isWednesday = props.isWednesday;
    this.isThursday = props.isThursday;
    this.isFriday = props.isFriday;
    this.isSaturday = props.isSaturday;
    this.sameDayPickupCutOffTime = props.sameDayPickupCutOffTime;
  }
}

export class Translation extends SoapTypes.Base {
  locale?: PlatformCommonTypes.Language;
  language?: string;
  displayName?: string;
  description?: string;
  salesDescription?: string;
  storeDisplayName?: string;
  storeDescription?: string;
  storeDetailedDescription?: string;
  featuredDescription?: string;
  specialsDescription?: string;
  pageTitle?: string;
  noPriceMessage?: string;
  outOfStockMessage?: string;
  constructor(props: Translation) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.locale = props.locale;
    this.language = props.language;
    this.displayName = props.displayName;
    this.description = props.description;
    this.salesDescription = props.salesDescription;
    this.storeDisplayName = props.storeDisplayName;
    this.storeDescription = props.storeDescription;
    this.storeDetailedDescription = props.storeDetailedDescription;
    this.featuredDescription = props.featuredDescription;
    this.specialsDescription = props.specialsDescription;
    this.pageTitle = props.pageTitle;
    this.noPriceMessage = props.noPriceMessage;
    this.outOfStockMessage = props.outOfStockMessage;
  }
}

export class SerializedAssemblyItemHierarchyVersionsList extends SoapTypes.Base {
  serializedAssemblyItemHierarchyVersions?: SerializedAssemblyItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: SerializedAssemblyItemHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.serializedAssemblyItemHierarchyVersions = props.serializedAssemblyItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class ItemRevisionSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ItemRevisionSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: ItemRevisionSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.userJoin = props.userJoin;
  }
}

export class ServicePurchaseItemHierarchyVersionsList extends SoapTypes.Base {
  servicePurchaseItemHierarchyVersions?: ServicePurchaseItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: ServicePurchaseItemHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.servicePurchaseItemHierarchyVersions = props.servicePurchaseItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class FairValuePrice extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  itemRevenueCategory?: PlatformCore.RecordRef;
  fairValue?: number;
  fairValueFormula?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  unitsType?: PlatformCore.RecordRef;
  units?: PlatformCore.RecordRef;
  fairValueRangePolicy?: ListsAccountingTypes.FairValuePriceFairValueRangePolicy;
  lowValue?: number;
  lowValuePercent?: number;
  highValue?: number;
  highValuePercent?: number;
  isVsoePrice?: boolean;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  customFieldList?: PlatformCore.CustomFieldList;
  dimensionList?: PlatformCore.DimensionList;
  internalId?: string;
  externalId?: string;
  constructor(props: FairValuePrice) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customForm = props.customForm;
    this.item = props.item;
    this.itemRevenueCategory = props.itemRevenueCategory;
    this.fairValue = props.fairValue;
    this.fairValueFormula = props.fairValueFormula;
    this.currency = props.currency;
    this.unitsType = props.unitsType;
    this.units = props.units;
    this.fairValueRangePolicy = props.fairValueRangePolicy;
    this.lowValue = props.lowValue;
    this.lowValuePercent = props.lowValuePercent;
    this.highValue = props.highValue;
    this.highValuePercent = props.highValuePercent;
    this.isVsoePrice = props.isVsoePrice;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.customFieldList = props.customFieldList;
    this.dimensionList = props.dimensionList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class InventoryItemHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: InventoryItemHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class ServicePurchaseItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  purchaseDescription?: string;
  manufacturingChargeItem?: boolean;
  cost?: number;
  costUnits?: string;
  issueProduct?: PlatformCore.RecordRef;
  includeChildren?: boolean;
  expenseAccount?: PlatformCore.RecordRef;
  isTaxable?: boolean;
  matrixType?: ListsAccountingTypes.ItemMatrixType;
  unitsType?: PlatformCore.RecordRef;
  purchaseUnit?: PlatformCore.RecordRef;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  vendorName?: string;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  matrixItemNameTemplate?: string;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiaryList?: PlatformCore.RecordRefList;
  taxSchedule?: PlatformCore.RecordRef;
  deferralAccount?: PlatformCore.RecordRef;
  amortizationTemplate?: PlatformCore.RecordRef;
  residual?: string;
  amortizationPeriod?: number;
  isFulfillable?: boolean;
  generateAccruals?: boolean;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  costCategory?: PlatformCore.RecordRef;
  purchaseOrderQuantity?: number;
  purchaseOrderAmount?: number;
  purchaseOrderQuantityDiff?: number;
  receiptQuantity?: number;
  receiptAmount?: number;
  receiptQuantityDiff?: number;
  currency?: string;
  itemOptionsList?: ItemOptionsList;
  matrixOptionList?: MatrixOptionList;
  itemVendorList?: ItemVendorList;
  purchaseTaxCode?: PlatformCore.RecordRef;
  salesTaxCode?: PlatformCore.RecordRef;
  translationsList?: TranslationList;
  vendor?: PlatformCore.RecordRef;
  hierarchyVersionsList?: ServicePurchaseItemHierarchyVersionsList;
  consumptionUnit?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: ServicePurchaseItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.purchaseDescription = props.purchaseDescription;
    this.manufacturingChargeItem = props.manufacturingChargeItem;
    this.cost = props.cost;
    this.costUnits = props.costUnits;
    this.issueProduct = props.issueProduct;
    this.includeChildren = props.includeChildren;
    this.expenseAccount = props.expenseAccount;
    this.isTaxable = props.isTaxable;
    this.matrixType = props.matrixType;
    this.unitsType = props.unitsType;
    this.purchaseUnit = props.purchaseUnit;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.vendorName = props.vendorName;
    this.parent = props.parent;
    this.isInactive = props.isInactive;
    this.matrixItemNameTemplate = props.matrixItemNameTemplate;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiaryList = props.subsidiaryList;
    this.taxSchedule = props.taxSchedule;
    this.deferralAccount = props.deferralAccount;
    this.amortizationTemplate = props.amortizationTemplate;
    this.residual = props.residual;
    this.amortizationPeriod = props.amortizationPeriod;
    this.isFulfillable = props.isFulfillable;
    this.generateAccruals = props.generateAccruals;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.costCategory = props.costCategory;
    this.purchaseOrderQuantity = props.purchaseOrderQuantity;
    this.purchaseOrderAmount = props.purchaseOrderAmount;
    this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
    this.receiptQuantity = props.receiptQuantity;
    this.receiptAmount = props.receiptAmount;
    this.receiptQuantityDiff = props.receiptQuantityDiff;
    this.currency = props.currency;
    this.itemOptionsList = props.itemOptionsList;
    this.matrixOptionList = props.matrixOptionList;
    this.itemVendorList = props.itemVendorList;
    this.purchaseTaxCode = props.purchaseTaxCode;
    this.salesTaxCode = props.salesTaxCode;
    this.translationsList = props.translationsList;
    this.vendor = props.vendor;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.consumptionUnit = props.consumptionUnit;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ClassificationSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ClassificationSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: ClassificationSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class InventoryItemBinNumber extends SoapTypes.Base {
  binNumber?: PlatformCore.RecordRef;
  onHand?: string;
  onHandAvail?: string;
  location?: string;
  preferredBin?: boolean;
  constructor(props: InventoryItemBinNumber) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.binNumber = props.binNumber;
    this.onHand = props.onHand;
    this.onHandAvail = props.onHandAvail;
    this.location = props.location;
    this.preferredBin = props.preferredBin;
  }
}

export class DownloadItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  salesDescription?: string;
  quantityPricingSchedule?: PlatformCore.RecordRef;
  deferredRevenueAccount?: PlatformCore.RecordRef;
  onSpecial?: boolean;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  parent?: PlatformCore.RecordRef;
  isOnline?: boolean;
  isGcoCompliant?: boolean;
  offerSupport?: boolean;
  isInactive?: boolean;
  availableToPartners?: boolean;
  subsidiaryList?: PlatformCore.RecordRefList;
  department?: PlatformCore.RecordRef;
  includeChildren?: boolean;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  incomeAccount?: PlatformCore.RecordRef;
  numOfAllowedDownloads?: number;
  daysBeforeExpiration?: number;
  immediateDownload?: boolean;
  isTaxable?: boolean;
  issueProduct?: PlatformCore.RecordRef;
  taxSchedule?: PlatformCore.RecordRef;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  billingSchedule?: PlatformCore.RecordRef;
  isFulfillable?: boolean;
  useMarginalRates?: boolean;
  overallQuantityPricingType?: ListsAccountingTypes.ItemOverallQuantityPricingType;
  pricingGroup?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  vsoePrice?: number;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  itemRevenueCategory?: PlatformCore.RecordRef;
  deferRevRec?: boolean;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revenueAllocationGroup?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  directRevenuePosting?: boolean;
  storeDisplayName?: string;
  storeDisplayThumbnail?: PlatformCore.RecordRef;
  storeDisplayImage?: PlatformCore.RecordRef;
  featuredDescription?: string;
  storeDescription?: string;
  storeDetailedDescription?: string;
  storeItemTemplate?: PlatformCore.RecordRef;
  pageTitle?: string;
  metaTagHtml?: string;
  excludeFromSitemap?: boolean;
  sitemapPriority?: string;
  searchKeywords?: string;
  isDonationItem?: boolean;
  showDefaultDonationAmount?: boolean;
  maxDonationAmount?: number;
  dontShowPrice?: boolean;
  noPriceMessage?: string;
  outOfStockMessage?: string;
  outOfStockBehavior?: ListsAccountingTypes.ItemOutOfStockBehavior;
  relatedItemsDescription?: string;
  specialsDescription?: string;
  pricingMatrix?: PricingMatrix;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  siteCategoryList?: SiteCategoryList;
  presentationItemList?: PresentationItemList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: DownloadItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.salesDescription = props.salesDescription;
    this.quantityPricingSchedule = props.quantityPricingSchedule;
    this.deferredRevenueAccount = props.deferredRevenueAccount;
    this.onSpecial = props.onSpecial;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.parent = props.parent;
    this.isOnline = props.isOnline;
    this.isGcoCompliant = props.isGcoCompliant;
    this.offerSupport = props.offerSupport;
    this.isInactive = props.isInactive;
    this.availableToPartners = props.availableToPartners;
    this.subsidiaryList = props.subsidiaryList;
    this.department = props.department;
    this.includeChildren = props.includeChildren;
    this.clazz = props.clazz;
    this.location = props.location;
    this.incomeAccount = props.incomeAccount;
    this.numOfAllowedDownloads = props.numOfAllowedDownloads;
    this.daysBeforeExpiration = props.daysBeforeExpiration;
    this.immediateDownload = props.immediateDownload;
    this.isTaxable = props.isTaxable;
    this.issueProduct = props.issueProduct;
    this.taxSchedule = props.taxSchedule;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.billingSchedule = props.billingSchedule;
    this.isFulfillable = props.isFulfillable;
    this.useMarginalRates = props.useMarginalRates;
    this.overallQuantityPricingType = props.overallQuantityPricingType;
    this.pricingGroup = props.pricingGroup;
    this.revRecSchedule = props.revRecSchedule;
    this.vsoePrice = props.vsoePrice;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.itemRevenueCategory = props.itemRevenueCategory;
    this.deferRevRec = props.deferRevRec;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.revRecForecastRule = props.revRecForecastRule;
    this.revenueAllocationGroup = props.revenueAllocationGroup;
    this.createRevenuePlansOn = props.createRevenuePlansOn;
    this.directRevenuePosting = props.directRevenuePosting;
    this.storeDisplayName = props.storeDisplayName;
    this.storeDisplayThumbnail = props.storeDisplayThumbnail;
    this.storeDisplayImage = props.storeDisplayImage;
    this.featuredDescription = props.featuredDescription;
    this.storeDescription = props.storeDescription;
    this.storeDetailedDescription = props.storeDetailedDescription;
    this.storeItemTemplate = props.storeItemTemplate;
    this.pageTitle = props.pageTitle;
    this.metaTagHtml = props.metaTagHtml;
    this.excludeFromSitemap = props.excludeFromSitemap;
    this.sitemapPriority = props.sitemapPriority;
    this.searchKeywords = props.searchKeywords;
    this.isDonationItem = props.isDonationItem;
    this.showDefaultDonationAmount = props.showDefaultDonationAmount;
    this.maxDonationAmount = props.maxDonationAmount;
    this.dontShowPrice = props.dontShowPrice;
    this.noPriceMessage = props.noPriceMessage;
    this.outOfStockMessage = props.outOfStockMessage;
    this.outOfStockBehavior = props.outOfStockBehavior;
    this.relatedItemsDescription = props.relatedItemsDescription;
    this.specialsDescription = props.specialsDescription;
    this.pricingMatrix = props.pricingMatrix;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.siteCategoryList = props.siteCategoryList;
    this.presentationItemList = props.presentationItemList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class InventoryNumberLocationsList extends SoapTypes.Base {
  locations?: InventoryNumberLocations[];
  replaceAll?: boolean;
  constructor(props: InventoryNumberLocationsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.locations = props.locations;
    this.replaceAll = props.replaceAll;
  }
}

export class RevRecTemplateSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.RevRecTemplateSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: RevRecTemplateSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class OtherChargePurchaseItemHierarchyVersionsList extends SoapTypes.Base {
  otherChargePurchaseItemHierarchyVersions?: OtherChargePurchaseItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: OtherChargePurchaseItemHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.otherChargePurchaseItemHierarchyVersions = props.otherChargePurchaseItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class RevRecTemplate extends PlatformCore.Record {
  name?: string;
  amortizationType?: ListsAccountingTypes.RevRecScheduleAmortizationType;
  recurrenceType?: ListsAccountingTypes.RevRecScheduleRecurrenceType;
  recogIntervalSrc?: ListsAccountingTypes.RevRecScheduleRecogIntervalSrc;
  amortizationPeriod?: number;
  periodOffset?: number;
  revRecOffset?: number;
  initialAmount?: number;
  isInactive?: boolean;
  recurrenceList?: RevRecTemplateRecurrenceList;
  internalId?: string;
  externalId?: string;
  constructor(props: RevRecTemplate) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.amortizationType = props.amortizationType;
    this.recurrenceType = props.recurrenceType;
    this.recogIntervalSrc = props.recogIntervalSrc;
    this.amortizationPeriod = props.amortizationPeriod;
    this.periodOffset = props.periodOffset;
    this.revRecOffset = props.revRecOffset;
    this.initialAmount = props.initialAmount;
    this.isInactive = props.isInactive;
    this.recurrenceList = props.recurrenceList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class BillingSchedule extends PlatformCore.Record {
  scheduleType?: ListsAccountingTypes.BillingScheduleType;
  name?: string;
  recurrencePattern?: ListsAccountingTypes.BillingScheduleRecurrencePattern;
  project?: PlatformCore.RecordRef;
  initialAmount?: string;
  initialTerms?: PlatformCore.RecordRef;
  frequency?: ListsAccountingTypes.BillingScheduleFrequency;
  recurrenceDowMaskList?: PlatformCommon.RecurrenceDowMaskList;
  yearMode?: ListsAccountingTypes.BillingScheduleRecurrenceMode;
  yearDowim?: ListsAccountingTypes.BillingScheduleYearDowim;
  yearDow?: ListsAccountingTypes.BillingScheduleYearDow;
  yearDowimMonth?: ListsAccountingTypes.BillingScheduleYearDowimMonth;
  yearMonth?: ListsAccountingTypes.BillingScheduleYearMonth;
  yearDom?: number;
  monthMode?: ListsAccountingTypes.BillingScheduleRecurrenceMode;
  monthDowim?: ListsAccountingTypes.BillingScheduleMonthDowim;
  monthDow?: ListsAccountingTypes.BillingScheduleMonthDow;
  monthDom?: number;
  dayPeriod?: number;
  repeatEvery?: string;
  billForActuals?: boolean;
  numberRemaining?: number;
  inArrears?: boolean;
  recurrenceTerms?: PlatformCore.RecordRef;
  isPublic?: boolean;
  applyToSubtotal?: boolean;
  transaction?: PlatformCore.RecordRef;
  isInactive?: boolean;
  seriesStartDate?: SoapTypes.Dateish;
  recurrenceList?: BillingScheduleRecurrenceList;
  milestoneList?: BillingScheduleMilestoneList;
  internalId?: string;
  externalId?: string;
  constructor(props: BillingSchedule) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.scheduleType = props.scheduleType;
    this.name = props.name;
    this.recurrencePattern = props.recurrencePattern;
    this.project = props.project;
    this.initialAmount = props.initialAmount;
    this.initialTerms = props.initialTerms;
    this.frequency = props.frequency;
    this.recurrenceDowMaskList = props.recurrenceDowMaskList;
    this.yearMode = props.yearMode;
    this.yearDowim = props.yearDowim;
    this.yearDow = props.yearDow;
    this.yearDowimMonth = props.yearDowimMonth;
    this.yearMonth = props.yearMonth;
    this.yearDom = props.yearDom;
    this.monthMode = props.monthMode;
    this.monthDowim = props.monthDowim;
    this.monthDow = props.monthDow;
    this.monthDom = props.monthDom;
    this.dayPeriod = props.dayPeriod;
    this.repeatEvery = props.repeatEvery;
    this.billForActuals = props.billForActuals;
    this.numberRemaining = props.numberRemaining;
    this.inArrears = props.inArrears;
    this.recurrenceTerms = props.recurrenceTerms;
    this.isPublic = props.isPublic;
    this.applyToSubtotal = props.applyToSubtotal;
    this.transaction = props.transaction;
    this.isInactive = props.isInactive;
    this.seriesStartDate = props.seriesStartDate;
    this.recurrenceList = props.recurrenceList;
    this.milestoneList = props.milestoneList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class OtherChargeSaleItemHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: OtherChargeSaleItemHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class FairValuePriceSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: FairValuePriceSearch;
  columns?: FairValuePriceSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: FairValuePriceSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class GeneralToken extends PlatformCore.Record {
  entity?: PlatformCore.RecordRef;
  mask?: string;
  supportedOperationsList?: GeneralTokenSupportedOperationsListList;
  paymentMethod?: PlatformCore.RecordRef;
  memo?: string;
  state?: ListsAccountingTypes.PaymentInstrumentState;
  isInactive?: boolean;
  preserveOnFile?: boolean;
  isDefault?: boolean;
  token?: string;
  tokenExpirationDate?: SoapTypes.Dateish;
  tokenFamily?: ListsAccountingTypes.TokenFamily;
  tokenNamespace?: string;
  internalId?: string;
  externalId?: string;
  constructor(props: GeneralToken) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.entity = props.entity;
    this.mask = props.mask;
    this.supportedOperationsList = props.supportedOperationsList;
    this.paymentMethod = props.paymentMethod;
    this.memo = props.memo;
    this.state = props.state;
    this.isInactive = props.isInactive;
    this.preserveOnFile = props.preserveOnFile;
    this.isDefault = props.isDefault;
    this.token = props.token;
    this.tokenExpirationDate = props.tokenExpirationDate;
    this.tokenFamily = props.tokenFamily;
    this.tokenNamespace = props.tokenNamespace;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ContactCategorySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ContactCategorySearch;
  columns?: ContactCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ContactCategorySearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class SalesRoleSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.SalesRoleSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: SalesRoleSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class Term extends PlatformCore.Record {
  name?: string;
  dateDriven?: boolean;
  daysUntilNetDue?: number;
  discountPercent?: number;
  daysUntilExpiry?: number;
  dayOfMonthNetDue?: number;
  dueNextMonthIfWithinDays?: number;
  discountPercentDateDriven?: number;
  dayDiscountExpires?: number;
  preferred?: boolean;
  isInactive?: boolean;
  installment?: boolean;
  recurrenceFrequency?: PlatformCommonTypes.TermRecurrenceFrequency;
  recurrenceCount?: number;
  repeatEvery?: number;
  splitEvenly?: boolean;
  percentagesList?: TermPercentagesList;
  internalId?: string;
  externalId?: string;
  constructor(props: Term) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.dateDriven = props.dateDriven;
    this.daysUntilNetDue = props.daysUntilNetDue;
    this.discountPercent = props.discountPercent;
    this.daysUntilExpiry = props.daysUntilExpiry;
    this.dayOfMonthNetDue = props.dayOfMonthNetDue;
    this.dueNextMonthIfWithinDays = props.dueNextMonthIfWithinDays;
    this.discountPercentDateDriven = props.discountPercentDateDriven;
    this.dayDiscountExpires = props.dayDiscountExpires;
    this.preferred = props.preferred;
    this.isInactive = props.isInactive;
    this.installment = props.installment;
    this.recurrenceFrequency = props.recurrenceFrequency;
    this.recurrenceCount = props.recurrenceCount;
    this.repeatEvery = props.repeatEvery;
    this.splitEvenly = props.splitEvenly;
    this.percentagesList = props.percentagesList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class LotNumberedInventoryItemLocationsList extends SoapTypes.Base {
  locations?: LotNumberedInventoryItemLocations[];
  replaceAll?: boolean;
  constructor(props: LotNumberedInventoryItemLocationsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.locations = props.locations;
    this.replaceAll = props.replaceAll;
  }
}

export class TaxTypeNexusAccounts extends SoapTypes.Base {
  nexus?: PlatformCore.RecordRef;
  payablesAccount?: PlatformCore.RecordRef;
  receivablesAccount?: PlatformCore.RecordRef;
  constructor(props: TaxTypeNexusAccounts) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.nexus = props.nexus;
    this.payablesAccount = props.payablesAccount;
    this.receivablesAccount = props.receivablesAccount;
  }
}

export class GlobalAccountMappingSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: GlobalAccountMappingSearch;
  columns?: GlobalAccountMappingSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: GlobalAccountMappingSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class UnitsTypeUomList extends SoapTypes.Base {
  uom?: UnitsTypeUom[];
  replaceAll?: boolean;
  constructor(props: UnitsTypeUomList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.uom = props.uom;
    this.replaceAll = props.replaceAll;
  }
}

export class NoteType extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: NoteType) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class RevRecScheduleRecurrenceList extends SoapTypes.Base {
  revRecScheduleRecurrence?: RevRecScheduleRecurrence[];
  replaceAll?: boolean;
  constructor(props: RevRecScheduleRecurrenceList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.revRecScheduleRecurrence = props.revRecScheduleRecurrence;
    this.replaceAll = props.replaceAll;
  }
}

export class NoteTypeSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.NoteTypeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: NoteTypeSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class PriceLevelSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.PriceLevelSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: PriceLevelSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class ItemRevisionSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ItemRevisionSearch;
  columns?: ItemRevisionSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ItemRevisionSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class LotNumberedAssemblyItemBillOfMaterialsList extends SoapTypes.Base {
  lotNumberedAssemblyItemBillOfMaterials?: LotNumberedAssemblyItemBillOfMaterials[];
  replaceAll?: boolean;
  constructor(props: LotNumberedAssemblyItemBillOfMaterialsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.lotNumberedAssemblyItemBillOfMaterials = props.lotNumberedAssemblyItemBillOfMaterials;
    this.replaceAll = props.replaceAll;
  }
}

export class CurrencyRateSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CurrencyRateSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: CurrencyRateSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class InventoryNumberSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.InventoryNumberSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: InventoryNumberSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class LocationRegionsList extends SoapTypes.Base {
  locationRegions?: LocationRegions[];
  replaceAll?: boolean;
  constructor(props: LocationRegionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.locationRegions = props.locationRegions;
    this.replaceAll = props.replaceAll;
  }
}

export class InventoryItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  purchaseDescription?: string;
  copyDescription?: boolean;
  expenseAccount?: PlatformCore.RecordRef;
  dateConvertedToInv?: SoapTypes.Dateish;
  originalItemType?: ListsAccountingTypes.ItemType;
  originalItemSubtype?: ListsAccountingTypes.ItemSubType;
  cogsAccount?: PlatformCore.RecordRef;
  intercoCogsAccount?: PlatformCore.RecordRef;
  salesDescription?: string;
  fraudRisk?: ListsAccountingTypes.InventoryItemFraudRisk;
  includeChildren?: boolean;
  incomeAccount?: PlatformCore.RecordRef;
  intercoIncomeAccount?: PlatformCore.RecordRef;
  taxSchedule?: PlatformCore.RecordRef;
  dropshipExpenseAccount?: PlatformCore.RecordRef;
  deferRevRec?: boolean;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revenueAllocationGroup?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  directRevenuePosting?: boolean;
  contingentRevenueHandling?: boolean;
  revReclassFXAccount?: PlatformCore.RecordRef;
  isTaxable?: boolean;
  matrixType?: ListsAccountingTypes.ItemMatrixType;
  assetAccount?: PlatformCore.RecordRef;
  matchBillToReceipt?: boolean;
  billQtyVarianceAcct?: PlatformCore.RecordRef;
  billPriceVarianceAcct?: PlatformCore.RecordRef;
  billExchRateVarianceAcct?: PlatformCore.RecordRef;
  gainLossAccount?: PlatformCore.RecordRef;
  shippingCost?: number;
  shippingCostUnits?: string;
  handlingCost?: number;
  handlingCostUnits?: string;
  weight?: number;
  weightUnit?: ListsAccountingTypes.ItemWeightUnit;
  weightUnits?: string;
  costingMethodDisplay?: string;
  unitsType?: PlatformCore.RecordRef;
  stockUnit?: PlatformCore.RecordRef;
  purchaseUnit?: PlatformCore.RecordRef;
  saleUnit?: PlatformCore.RecordRef;
  issueProduct?: PlatformCore.RecordRef;
  billingSchedule?: PlatformCore.RecordRef;
  trackLandedCost?: boolean;
  matrixItemNameTemplate?: string;
  isDropShipItem?: boolean;
  isSpecialOrderItem?: boolean;
  stockDescription?: string;
  deferredRevenueAccount?: PlatformCore.RecordRef;
  intercoDefRevAccount?: PlatformCore.RecordRef;
  producer?: boolean;
  manufacturer?: string;
  revRecSchedule?: PlatformCore.RecordRef;
  mpn?: string;
  multManufactureAddr?: boolean;
  manufacturerAddr1?: string;
  manufacturerCity?: string;
  manufacturerState?: string;
  manufacturerZip?: string;
  countryOfManufacture?: PlatformCommonTypes.Country;
  roundUpAsComponent?: boolean;
  purchaseOrderQuantity?: number;
  purchaseOrderAmount?: number;
  purchaseOrderQuantityDiff?: number;
  receiptQuantity?: number;
  receiptAmount?: number;
  receiptQuantityDiff?: number;
  defaultItemShipMethod?: PlatformCore.RecordRef;
  itemCarrier?: PlatformCommonTypes.ShippingCarrier;
  itemShipMethodList?: PlatformCore.RecordRefList;
  manufacturerTaxId?: string;
  scheduleBNumber?: string;
  scheduleBQuantity?: number;
  scheduleBCode?: string;
  manufacturerTariff?: string;
  preferenceCriterion?: ListsAccountingTypes.ItemPreferenceCriterion;
  minimumQuantity?: number;
  enforceMinQtyInternally?: boolean;
  maximumQuantity?: number;
  minimumQuantityUnits?: string;
  softDescriptor?: PlatformCore.RecordRef;
  shipPackage?: PlatformCore.RecordRef;
  shipIndividually?: boolean;
  costCategory?: PlatformCore.RecordRef;
  pricesIncludeTax?: boolean;
  purchasePriceVarianceAcct?: PlatformCore.RecordRef;
  quantityPricingSchedule?: PlatformCore.RecordRef;
  reorderPointUnits?: string;
  useMarginalRates?: boolean;
  preferredStockLevelUnits?: string;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  transferPrice?: number;
  overallQuantityPricingType?: ListsAccountingTypes.ItemOverallQuantityPricingType;
  pricingGroup?: PlatformCore.RecordRef;
  vsoePrice?: number;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  costEstimateUnits?: string;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  itemRevenueCategory?: PlatformCore.RecordRef;
  preferredLocation?: PlatformCore.RecordRef;
  isStorePickupAllowed?: boolean;
  reorderMultiple?: number;
  cost?: number;
  lastInvtCountDate?: SoapTypes.Dateish;
  nextInvtCountDate?: SoapTypes.Dateish;
  invtCountInterval?: number;
  invtClassification?: ListsAccountingTypes.ItemInvtClassification;
  costUnits?: string;
  totalValue?: number;
  averageCost?: number;
  useBins?: boolean;
  quantityReorderUnits?: string;
  leadTime?: number;
  autoLeadTime?: boolean;
  lastPurchasePrice?: number;
  autoPreferredStockLevel?: boolean;
  preferredStockLevelDays?: number;
  safetyStockLevel?: number;
  safetyStockLevelDays?: number;
  backwardConsumptionDays?: number;
  seasonalDemand?: boolean;
  safetyStockLevelUnits?: string;
  demandModifier?: number;
  distributionNetwork?: PlatformCore.RecordRef;
  distributionCategory?: PlatformCore.RecordRef;
  autoReorderPoint?: boolean;
  storeDisplayName?: string;
  storeDisplayThumbnail?: PlatformCore.RecordRef;
  storeDisplayImage?: PlatformCore.RecordRef;
  storeDescription?: string;
  storeDetailedDescription?: string;
  storeItemTemplate?: PlatformCore.RecordRef;
  pageTitle?: string;
  metaTagHtml?: string;
  excludeFromSitemap?: boolean;
  sitemapPriority?: string;
  searchKeywords?: string;
  isDonationItem?: boolean;
  showDefaultDonationAmount?: boolean;
  maxDonationAmount?: number;
  dontShowPrice?: boolean;
  noPriceMessage?: string;
  outOfStockMessage?: string;
  onSpecial?: boolean;
  outOfStockBehavior?: ListsAccountingTypes.ItemOutOfStockBehavior;
  relatedItemsDescription?: string;
  specialsDescription?: string;
  featuredDescription?: string;
  shoppingDotComCategory?: string;
  shopzillaCategoryId?: number;
  nexTagCategory?: string;
  urlComponent?: string;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  vendorName?: string;
  parent?: PlatformCore.RecordRef;
  isOnline?: boolean;
  isHazmatItem?: boolean;
  hazmatId?: string;
  hazmatShippingName?: string;
  hazmatHazardClass?: string;
  hazmatPackingGroup?: ListsAccountingTypes.HazmatPackingGroup;
  hazmatItemUnits?: string;
  hazmatItemUnitsQty?: number;
  isGcoCompliant?: boolean;
  offerSupport?: boolean;
  isInactive?: boolean;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  costingMethod?: ListsAccountingTypes.ItemCostingMethod;
  currency?: string;
  preferredStockLevel?: number;
  pricingMatrix?: PricingMatrix;
  hierarchyVersionsList?: InventoryItemHierarchyVersionsList;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  purchaseTaxCode?: PlatformCore.RecordRef;
  defaultReturnCost?: number;
  supplyReplenishmentMethod?: PlatformCore.RecordRef;
  alternateDemandSourceItem?: PlatformCore.RecordRef;
  fixedLotSize?: number;
  periodicLotSizeType?: ListsAccountingTypes.PeriodicLotSizeType;
  supplyType?: PlatformCore.RecordRef;
  demandTimeFence?: number;
  supplyTimeFence?: number;
  rescheduleInDays?: number;
  rescheduleOutDays?: number;
  periodicLotSizeDays?: number;
  supplyLotSizingMethod?: PlatformCore.RecordRef;
  forwardConsumptionDays?: number;
  demandSource?: PlatformCore.RecordRef;
  quantityBackOrdered?: number;
  quantityCommitted?: number;
  quantityAvailable?: number;
  quantityOnHand?: number;
  onHandValueMli?: number;
  quantityOnOrder?: number;
  rate?: number;
  reorderPoint?: number;
  quantityCommittedUnits?: string;
  salesTaxCode?: PlatformCore.RecordRef;
  quantityAvailableUnits?: string;
  quantityOnHandUnits?: string;
  vendor?: PlatformCore.RecordRef;
  quantityOnOrderUnits?: string;
  productFeedList?: ProductFeedList;
  subsidiaryList?: PlatformCore.RecordRefList;
  itemOptionsList?: ItemOptionsList;
  itemVendorList?: ItemVendorList;
  siteCategoryList?: SiteCategoryList;
  translationsList?: TranslationList;
  binNumberList?: InventoryItemBinNumberList;
  locationsList?: InventoryItemLocationsList;
  matrixOptionList?: MatrixOptionList;
  presentationItemList?: PresentationItemList;
  futureHorizon?: number;
  consumptionUnit?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: InventoryItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.purchaseDescription = props.purchaseDescription;
    this.copyDescription = props.copyDescription;
    this.expenseAccount = props.expenseAccount;
    this.dateConvertedToInv = props.dateConvertedToInv;
    this.originalItemType = props.originalItemType;
    this.originalItemSubtype = props.originalItemSubtype;
    this.cogsAccount = props.cogsAccount;
    this.intercoCogsAccount = props.intercoCogsAccount;
    this.salesDescription = props.salesDescription;
    this.fraudRisk = props.fraudRisk;
    this.includeChildren = props.includeChildren;
    this.incomeAccount = props.incomeAccount;
    this.intercoIncomeAccount = props.intercoIncomeAccount;
    this.taxSchedule = props.taxSchedule;
    this.dropshipExpenseAccount = props.dropshipExpenseAccount;
    this.deferRevRec = props.deferRevRec;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.revRecForecastRule = props.revRecForecastRule;
    this.revenueAllocationGroup = props.revenueAllocationGroup;
    this.createRevenuePlansOn = props.createRevenuePlansOn;
    this.directRevenuePosting = props.directRevenuePosting;
    this.contingentRevenueHandling = props.contingentRevenueHandling;
    this.revReclassFXAccount = props.revReclassFXAccount;
    this.isTaxable = props.isTaxable;
    this.matrixType = props.matrixType;
    this.assetAccount = props.assetAccount;
    this.matchBillToReceipt = props.matchBillToReceipt;
    this.billQtyVarianceAcct = props.billQtyVarianceAcct;
    this.billPriceVarianceAcct = props.billPriceVarianceAcct;
    this.billExchRateVarianceAcct = props.billExchRateVarianceAcct;
    this.gainLossAccount = props.gainLossAccount;
    this.shippingCost = props.shippingCost;
    this.shippingCostUnits = props.shippingCostUnits;
    this.handlingCost = props.handlingCost;
    this.handlingCostUnits = props.handlingCostUnits;
    this.weight = props.weight;
    this.weightUnit = props.weightUnit;
    this.weightUnits = props.weightUnits;
    this.costingMethodDisplay = props.costingMethodDisplay;
    this.unitsType = props.unitsType;
    this.stockUnit = props.stockUnit;
    this.purchaseUnit = props.purchaseUnit;
    this.saleUnit = props.saleUnit;
    this.issueProduct = props.issueProduct;
    this.billingSchedule = props.billingSchedule;
    this.trackLandedCost = props.trackLandedCost;
    this.matrixItemNameTemplate = props.matrixItemNameTemplate;
    this.isDropShipItem = props.isDropShipItem;
    this.isSpecialOrderItem = props.isSpecialOrderItem;
    this.stockDescription = props.stockDescription;
    this.deferredRevenueAccount = props.deferredRevenueAccount;
    this.intercoDefRevAccount = props.intercoDefRevAccount;
    this.producer = props.producer;
    this.manufacturer = props.manufacturer;
    this.revRecSchedule = props.revRecSchedule;
    this.mpn = props.mpn;
    this.multManufactureAddr = props.multManufactureAddr;
    this.manufacturerAddr1 = props.manufacturerAddr1;
    this.manufacturerCity = props.manufacturerCity;
    this.manufacturerState = props.manufacturerState;
    this.manufacturerZip = props.manufacturerZip;
    this.countryOfManufacture = props.countryOfManufacture;
    this.roundUpAsComponent = props.roundUpAsComponent;
    this.purchaseOrderQuantity = props.purchaseOrderQuantity;
    this.purchaseOrderAmount = props.purchaseOrderAmount;
    this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
    this.receiptQuantity = props.receiptQuantity;
    this.receiptAmount = props.receiptAmount;
    this.receiptQuantityDiff = props.receiptQuantityDiff;
    this.defaultItemShipMethod = props.defaultItemShipMethod;
    this.itemCarrier = props.itemCarrier;
    this.itemShipMethodList = props.itemShipMethodList;
    this.manufacturerTaxId = props.manufacturerTaxId;
    this.scheduleBNumber = props.scheduleBNumber;
    this.scheduleBQuantity = props.scheduleBQuantity;
    this.scheduleBCode = props.scheduleBCode;
    this.manufacturerTariff = props.manufacturerTariff;
    this.preferenceCriterion = props.preferenceCriterion;
    this.minimumQuantity = props.minimumQuantity;
    this.enforceMinQtyInternally = props.enforceMinQtyInternally;
    this.maximumQuantity = props.maximumQuantity;
    this.minimumQuantityUnits = props.minimumQuantityUnits;
    this.softDescriptor = props.softDescriptor;
    this.shipPackage = props.shipPackage;
    this.shipIndividually = props.shipIndividually;
    this.costCategory = props.costCategory;
    this.pricesIncludeTax = props.pricesIncludeTax;
    this.purchasePriceVarianceAcct = props.purchasePriceVarianceAcct;
    this.quantityPricingSchedule = props.quantityPricingSchedule;
    this.reorderPointUnits = props.reorderPointUnits;
    this.useMarginalRates = props.useMarginalRates;
    this.preferredStockLevelUnits = props.preferredStockLevelUnits;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.transferPrice = props.transferPrice;
    this.overallQuantityPricingType = props.overallQuantityPricingType;
    this.pricingGroup = props.pricingGroup;
    this.vsoePrice = props.vsoePrice;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.costEstimateUnits = props.costEstimateUnits;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.itemRevenueCategory = props.itemRevenueCategory;
    this.preferredLocation = props.preferredLocation;
    this.isStorePickupAllowed = props.isStorePickupAllowed;
    this.reorderMultiple = props.reorderMultiple;
    this.cost = props.cost;
    this.lastInvtCountDate = props.lastInvtCountDate;
    this.nextInvtCountDate = props.nextInvtCountDate;
    this.invtCountInterval = props.invtCountInterval;
    this.invtClassification = props.invtClassification;
    this.costUnits = props.costUnits;
    this.totalValue = props.totalValue;
    this.averageCost = props.averageCost;
    this.useBins = props.useBins;
    this.quantityReorderUnits = props.quantityReorderUnits;
    this.leadTime = props.leadTime;
    this.autoLeadTime = props.autoLeadTime;
    this.lastPurchasePrice = props.lastPurchasePrice;
    this.autoPreferredStockLevel = props.autoPreferredStockLevel;
    this.preferredStockLevelDays = props.preferredStockLevelDays;
    this.safetyStockLevel = props.safetyStockLevel;
    this.safetyStockLevelDays = props.safetyStockLevelDays;
    this.backwardConsumptionDays = props.backwardConsumptionDays;
    this.seasonalDemand = props.seasonalDemand;
    this.safetyStockLevelUnits = props.safetyStockLevelUnits;
    this.demandModifier = props.demandModifier;
    this.distributionNetwork = props.distributionNetwork;
    this.distributionCategory = props.distributionCategory;
    this.autoReorderPoint = props.autoReorderPoint;
    this.storeDisplayName = props.storeDisplayName;
    this.storeDisplayThumbnail = props.storeDisplayThumbnail;
    this.storeDisplayImage = props.storeDisplayImage;
    this.storeDescription = props.storeDescription;
    this.storeDetailedDescription = props.storeDetailedDescription;
    this.storeItemTemplate = props.storeItemTemplate;
    this.pageTitle = props.pageTitle;
    this.metaTagHtml = props.metaTagHtml;
    this.excludeFromSitemap = props.excludeFromSitemap;
    this.sitemapPriority = props.sitemapPriority;
    this.searchKeywords = props.searchKeywords;
    this.isDonationItem = props.isDonationItem;
    this.showDefaultDonationAmount = props.showDefaultDonationAmount;
    this.maxDonationAmount = props.maxDonationAmount;
    this.dontShowPrice = props.dontShowPrice;
    this.noPriceMessage = props.noPriceMessage;
    this.outOfStockMessage = props.outOfStockMessage;
    this.onSpecial = props.onSpecial;
    this.outOfStockBehavior = props.outOfStockBehavior;
    this.relatedItemsDescription = props.relatedItemsDescription;
    this.specialsDescription = props.specialsDescription;
    this.featuredDescription = props.featuredDescription;
    this.shoppingDotComCategory = props.shoppingDotComCategory;
    this.shopzillaCategoryId = props.shopzillaCategoryId;
    this.nexTagCategory = props.nexTagCategory;
    this.urlComponent = props.urlComponent;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.vendorName = props.vendorName;
    this.parent = props.parent;
    this.isOnline = props.isOnline;
    this.isHazmatItem = props.isHazmatItem;
    this.hazmatId = props.hazmatId;
    this.hazmatShippingName = props.hazmatShippingName;
    this.hazmatHazardClass = props.hazmatHazardClass;
    this.hazmatPackingGroup = props.hazmatPackingGroup;
    this.hazmatItemUnits = props.hazmatItemUnits;
    this.hazmatItemUnitsQty = props.hazmatItemUnitsQty;
    this.isGcoCompliant = props.isGcoCompliant;
    this.offerSupport = props.offerSupport;
    this.isInactive = props.isInactive;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.costingMethod = props.costingMethod;
    this.currency = props.currency;
    this.preferredStockLevel = props.preferredStockLevel;
    this.pricingMatrix = props.pricingMatrix;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.purchaseTaxCode = props.purchaseTaxCode;
    this.defaultReturnCost = props.defaultReturnCost;
    this.supplyReplenishmentMethod = props.supplyReplenishmentMethod;
    this.alternateDemandSourceItem = props.alternateDemandSourceItem;
    this.fixedLotSize = props.fixedLotSize;
    this.periodicLotSizeType = props.periodicLotSizeType;
    this.supplyType = props.supplyType;
    this.demandTimeFence = props.demandTimeFence;
    this.supplyTimeFence = props.supplyTimeFence;
    this.rescheduleInDays = props.rescheduleInDays;
    this.rescheduleOutDays = props.rescheduleOutDays;
    this.periodicLotSizeDays = props.periodicLotSizeDays;
    this.supplyLotSizingMethod = props.supplyLotSizingMethod;
    this.forwardConsumptionDays = props.forwardConsumptionDays;
    this.demandSource = props.demandSource;
    this.quantityBackOrdered = props.quantityBackOrdered;
    this.quantityCommitted = props.quantityCommitted;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityOnHand = props.quantityOnHand;
    this.onHandValueMli = props.onHandValueMli;
    this.quantityOnOrder = props.quantityOnOrder;
    this.rate = props.rate;
    this.reorderPoint = props.reorderPoint;
    this.quantityCommittedUnits = props.quantityCommittedUnits;
    this.salesTaxCode = props.salesTaxCode;
    this.quantityAvailableUnits = props.quantityAvailableUnits;
    this.quantityOnHandUnits = props.quantityOnHandUnits;
    this.vendor = props.vendor;
    this.quantityOnOrderUnits = props.quantityOnOrderUnits;
    this.productFeedList = props.productFeedList;
    this.subsidiaryList = props.subsidiaryList;
    this.itemOptionsList = props.itemOptionsList;
    this.itemVendorList = props.itemVendorList;
    this.siteCategoryList = props.siteCategoryList;
    this.translationsList = props.translationsList;
    this.binNumberList = props.binNumberList;
    this.locationsList = props.locationsList;
    this.matrixOptionList = props.matrixOptionList;
    this.presentationItemList = props.presentationItemList;
    this.futureHorizon = props.futureHorizon;
    this.consumptionUnit = props.consumptionUnit;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class SalesTaxItemSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.SalesTaxItemSearchBasic;
  taxTypeJoin?: PlatformCommon.TaxTypeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: SalesTaxItemSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.taxTypeJoin = props.taxTypeJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class VendorCategorySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.VendorCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: VendorCategorySearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class ServiceResaleItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  purchaseDescription?: string;
  manufacturingChargeItem?: boolean;
  cost?: number;
  costUnits?: string;
  expenseAccount?: PlatformCore.RecordRef;
  intercoExpenseAccount?: PlatformCore.RecordRef;
  salesDescription?: string;
  includeChildren?: boolean;
  incomeAccount?: PlatformCore.RecordRef;
  intercoIncomeAccount?: PlatformCore.RecordRef;
  taxSchedule?: PlatformCore.RecordRef;
  matrixType?: ListsAccountingTypes.ItemMatrixType;
  isTaxable?: boolean;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  unitsType?: PlatformCore.RecordRef;
  purchaseUnit?: PlatformCore.RecordRef;
  saleUnit?: PlatformCore.RecordRef;
  costEstimateUnits?: string;
  issueProduct?: PlatformCore.RecordRef;
  billingSchedule?: PlatformCore.RecordRef;
  deferredRevenueAccount?: PlatformCore.RecordRef;
  intercoDefRevAccount?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  deferralAccount?: PlatformCore.RecordRef;
  amortizationTemplate?: PlatformCore.RecordRef;
  residual?: string;
  deferRevRec?: boolean;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revenueAllocationGroup?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  directRevenuePosting?: boolean;
  contingentRevenueHandling?: boolean;
  revReclassFXAccount?: PlatformCore.RecordRef;
  amortizationPeriod?: number;
  minimumQuantity?: number;
  enforceMinQtyInternally?: boolean;
  maximumQuantity?: number;
  softDescriptor?: string;
  pricesIncludeTax?: boolean;
  quantityPricingSchedule?: PlatformCore.RecordRef;
  useMarginalRates?: boolean;
  overallQuantityPricingType?: ListsAccountingTypes.ItemOverallQuantityPricingType;
  isFulfillable?: boolean;
  generateAccruals?: boolean;
  costCategory?: PlatformCore.RecordRef;
  purchaseOrderQuantity?: number;
  purchaseOrderAmount?: number;
  purchaseOrderQuantityDiff?: number;
  receiptQuantity?: number;
  receiptAmount?: number;
  receiptQuantityDiff?: number;
  pricingGroup?: PlatformCore.RecordRef;
  minimumQuantityUnits?: string;
  vsoePrice?: number;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  itemRevenueCategory?: PlatformCore.RecordRef;
  createJob?: boolean;
  matrixItemNameTemplate?: string;
  storeDisplayName?: string;
  storeDisplayThumbnail?: PlatformCore.RecordRef;
  storeDisplayImage?: PlatformCore.RecordRef;
  storeDescription?: string;
  storeDetailedDescription?: string;
  storeItemTemplate?: PlatformCore.RecordRef;
  pageTitle?: string;
  urlComponent?: string;
  metaTagHtml?: string;
  excludeFromSitemap?: boolean;
  sitemapPriority?: string;
  searchKeywords?: string;
  isDonationItem?: boolean;
  showDefaultDonationAmount?: boolean;
  maxDonationAmount?: number;
  dontShowPrice?: boolean;
  noPriceMessage?: string;
  outOfStockMessage?: string;
  onSpecial?: boolean;
  outOfStockBehavior?: ListsAccountingTypes.ItemOutOfStockBehavior;
  relatedItemsDescription?: string;
  specialsDescription?: string;
  itemTaskTemplatesList?: ServiceItemTaskTemplatesList;
  featuredDescription?: string;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  vendorName?: string;
  parent?: PlatformCore.RecordRef;
  isOnline?: boolean;
  isGcoCompliant?: boolean;
  offerSupport?: boolean;
  isInactive?: boolean;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiaryList?: PlatformCore.RecordRefList;
  currency?: string;
  billingRatesMatrix?: BillingRatesMatrix;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  itemOptionsList?: ItemOptionsList;
  matrixOptionList?: MatrixOptionList;
  itemVendorList?: ItemVendorList;
  pricingMatrix?: PricingMatrix;
  purchaseTaxCode?: PlatformCore.RecordRef;
  rate?: number;
  salesTaxCode?: PlatformCore.RecordRef;
  siteCategoryList?: SiteCategoryList;
  translationsList?: TranslationList;
  vendor?: PlatformCore.RecordRef;
  presentationItemList?: PresentationItemList;
  hierarchyVersionsList?: ServiceResaleItemHierarchyVersionsList;
  consumptionUnit?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: ServiceResaleItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.purchaseDescription = props.purchaseDescription;
    this.manufacturingChargeItem = props.manufacturingChargeItem;
    this.cost = props.cost;
    this.costUnits = props.costUnits;
    this.expenseAccount = props.expenseAccount;
    this.intercoExpenseAccount = props.intercoExpenseAccount;
    this.salesDescription = props.salesDescription;
    this.includeChildren = props.includeChildren;
    this.incomeAccount = props.incomeAccount;
    this.intercoIncomeAccount = props.intercoIncomeAccount;
    this.taxSchedule = props.taxSchedule;
    this.matrixType = props.matrixType;
    this.isTaxable = props.isTaxable;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.unitsType = props.unitsType;
    this.purchaseUnit = props.purchaseUnit;
    this.saleUnit = props.saleUnit;
    this.costEstimateUnits = props.costEstimateUnits;
    this.issueProduct = props.issueProduct;
    this.billingSchedule = props.billingSchedule;
    this.deferredRevenueAccount = props.deferredRevenueAccount;
    this.intercoDefRevAccount = props.intercoDefRevAccount;
    this.revRecSchedule = props.revRecSchedule;
    this.deferralAccount = props.deferralAccount;
    this.amortizationTemplate = props.amortizationTemplate;
    this.residual = props.residual;
    this.deferRevRec = props.deferRevRec;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.revRecForecastRule = props.revRecForecastRule;
    this.revenueAllocationGroup = props.revenueAllocationGroup;
    this.createRevenuePlansOn = props.createRevenuePlansOn;
    this.directRevenuePosting = props.directRevenuePosting;
    this.contingentRevenueHandling = props.contingentRevenueHandling;
    this.revReclassFXAccount = props.revReclassFXAccount;
    this.amortizationPeriod = props.amortizationPeriod;
    this.minimumQuantity = props.minimumQuantity;
    this.enforceMinQtyInternally = props.enforceMinQtyInternally;
    this.maximumQuantity = props.maximumQuantity;
    this.softDescriptor = props.softDescriptor;
    this.pricesIncludeTax = props.pricesIncludeTax;
    this.quantityPricingSchedule = props.quantityPricingSchedule;
    this.useMarginalRates = props.useMarginalRates;
    this.overallQuantityPricingType = props.overallQuantityPricingType;
    this.isFulfillable = props.isFulfillable;
    this.generateAccruals = props.generateAccruals;
    this.costCategory = props.costCategory;
    this.purchaseOrderQuantity = props.purchaseOrderQuantity;
    this.purchaseOrderAmount = props.purchaseOrderAmount;
    this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
    this.receiptQuantity = props.receiptQuantity;
    this.receiptAmount = props.receiptAmount;
    this.receiptQuantityDiff = props.receiptQuantityDiff;
    this.pricingGroup = props.pricingGroup;
    this.minimumQuantityUnits = props.minimumQuantityUnits;
    this.vsoePrice = props.vsoePrice;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.itemRevenueCategory = props.itemRevenueCategory;
    this.createJob = props.createJob;
    this.matrixItemNameTemplate = props.matrixItemNameTemplate;
    this.storeDisplayName = props.storeDisplayName;
    this.storeDisplayThumbnail = props.storeDisplayThumbnail;
    this.storeDisplayImage = props.storeDisplayImage;
    this.storeDescription = props.storeDescription;
    this.storeDetailedDescription = props.storeDetailedDescription;
    this.storeItemTemplate = props.storeItemTemplate;
    this.pageTitle = props.pageTitle;
    this.urlComponent = props.urlComponent;
    this.metaTagHtml = props.metaTagHtml;
    this.excludeFromSitemap = props.excludeFromSitemap;
    this.sitemapPriority = props.sitemapPriority;
    this.searchKeywords = props.searchKeywords;
    this.isDonationItem = props.isDonationItem;
    this.showDefaultDonationAmount = props.showDefaultDonationAmount;
    this.maxDonationAmount = props.maxDonationAmount;
    this.dontShowPrice = props.dontShowPrice;
    this.noPriceMessage = props.noPriceMessage;
    this.outOfStockMessage = props.outOfStockMessage;
    this.onSpecial = props.onSpecial;
    this.outOfStockBehavior = props.outOfStockBehavior;
    this.relatedItemsDescription = props.relatedItemsDescription;
    this.specialsDescription = props.specialsDescription;
    this.itemTaskTemplatesList = props.itemTaskTemplatesList;
    this.featuredDescription = props.featuredDescription;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.vendorName = props.vendorName;
    this.parent = props.parent;
    this.isOnline = props.isOnline;
    this.isGcoCompliant = props.isGcoCompliant;
    this.offerSupport = props.offerSupport;
    this.isInactive = props.isInactive;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiaryList = props.subsidiaryList;
    this.currency = props.currency;
    this.billingRatesMatrix = props.billingRatesMatrix;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.itemOptionsList = props.itemOptionsList;
    this.matrixOptionList = props.matrixOptionList;
    this.itemVendorList = props.itemVendorList;
    this.pricingMatrix = props.pricingMatrix;
    this.purchaseTaxCode = props.purchaseTaxCode;
    this.rate = props.rate;
    this.salesTaxCode = props.salesTaxCode;
    this.siteCategoryList = props.siteCategoryList;
    this.translationsList = props.translationsList;
    this.vendor = props.vendor;
    this.presentationItemList = props.presentationItemList;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.consumptionUnit = props.consumptionUnit;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class TaxType extends PlatformCore.Record {
  name?: string;
  description?: string;
  doesNotAddToTotal?: boolean;
  postToItemCost?: boolean;
  taxInNetAmount?: boolean;
  reverseCharge?: boolean;
  isInactive?: boolean;
  nexusAccountsList?: TaxTypeNexusAccountsList;
  nexusesTaxList?: TaxTypeNexusesTaxList;
  country?: PlatformCommonTypes.Country;
  internalId?: string;
  externalId?: string;
  constructor(props: TaxType) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.description = props.description;
    this.doesNotAddToTotal = props.doesNotAddToTotal;
    this.postToItemCost = props.postToItemCost;
    this.taxInNetAmount = props.taxInNetAmount;
    this.reverseCharge = props.reverseCharge;
    this.isInactive = props.isInactive;
    this.nexusAccountsList = props.nexusAccountsList;
    this.nexusesTaxList = props.nexusesTaxList;
    this.country = props.country;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ExpenseCategorySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ExpenseCategorySearch;
  columns?: ExpenseCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ExpenseCategorySearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class CustomerCategorySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CustomerCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: CustomerCategorySearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class PricingGroupSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.PricingGroupSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: PricingGroupSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class ConsolidatedExchangeRate extends PlatformCore.Record {
  postingPeriod?: string;
  fromSubsidiary?: string;
  fromCurrency?: string;
  toSubsidiary?: string;
  toCurrency?: string;
  averageRate?: number;
  currentRate?: number;
  historicalRate?: number;
  accountingBook?: string;
  isPeriodClosed?: boolean;
  isDerived?: boolean;
  isEliminationSubsidiary?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: ConsolidatedExchangeRate) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.postingPeriod = props.postingPeriod;
    this.fromSubsidiary = props.fromSubsidiary;
    this.fromCurrency = props.fromCurrency;
    this.toSubsidiary = props.toSubsidiary;
    this.toCurrency = props.toCurrency;
    this.averageRate = props.averageRate;
    this.currentRate = props.currentRate;
    this.historicalRate = props.historicalRate;
    this.accountingBook = props.accountingBook;
    this.isPeriodClosed = props.isPeriodClosed;
    this.isDerived = props.isDerived;
    this.isEliminationSubsidiary = props.isEliminationSubsidiary;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CustomerCategorySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CustomerCategorySearch;
  columns?: CustomerCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CustomerCategorySearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class BillingScheduleSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.BillingScheduleSearchBasic;
  constructor(props: BillingScheduleSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
  }
}

export class OtherChargeResaleItem extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  purchaseDescription?: string;
  manufacturingChargeItem?: boolean;
  cost?: number;
  costUnits?: string;
  expenseAccount?: PlatformCore.RecordRef;
  intercoExpenseAccount?: PlatformCore.RecordRef;
  salesDescription?: string;
  includeChildren?: boolean;
  incomeAccount?: PlatformCore.RecordRef;
  intercoIncomeAccount?: PlatformCore.RecordRef;
  isTaxable?: boolean;
  matrixType?: ListsAccountingTypes.ItemMatrixType;
  taxSchedule?: PlatformCore.RecordRef;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  unitsType?: PlatformCore.RecordRef;
  purchaseUnit?: PlatformCore.RecordRef;
  saleUnit?: PlatformCore.RecordRef;
  costEstimateUnits?: string;
  issueProduct?: PlatformCore.RecordRef;
  billingSchedule?: PlatformCore.RecordRef;
  deferredRevenueAccount?: PlatformCore.RecordRef;
  intercoDefRevAccount?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  deferralAccount?: PlatformCore.RecordRef;
  amortizationTemplate?: PlatformCore.RecordRef;
  residual?: string;
  deferRevRec?: boolean;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revenueAllocationGroup?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  directRevenuePosting?: boolean;
  contingentRevenueHandling?: boolean;
  revReclassFXAccount?: PlatformCore.RecordRef;
  amortizationPeriod?: number;
  minimumQuantity?: number;
  minimumQuantityUnits?: string;
  enforceMinQtyInternally?: boolean;
  maximumQuantity?: number;
  softDescriptor?: string;
  isFulfillable?: boolean;
  generateAccruals?: boolean;
  costCategory?: PlatformCore.RecordRef;
  purchaseOrderQuantity?: number;
  purchaseOrderAmount?: number;
  purchaseOrderQuantityDiff?: number;
  receiptQuantity?: number;
  receiptAmount?: number;
  receiptQuantityDiff?: number;
  pricesIncludeTax?: boolean;
  quantityPricingSchedule?: PlatformCore.RecordRef;
  useMarginalRates?: boolean;
  overallQuantityPricingType?: ListsAccountingTypes.ItemOverallQuantityPricingType;
  pricingGroup?: PlatformCore.RecordRef;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  vendorName?: string;
  parent?: PlatformCore.RecordRef;
  isOnline?: boolean;
  isGcoCompliant?: boolean;
  offerSupport?: boolean;
  isInactive?: boolean;
  matrixItemNameTemplate?: string;
  availableToPartners?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiaryList?: PlatformCore.RecordRefList;
  vsoePrice?: number;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  itemRevenueCategory?: PlatformCore.RecordRef;
  currency?: string;
  itemOptionsList?: ItemOptionsList;
  matrixOptionList?: MatrixOptionList;
  itemVendorList?: ItemVendorList;
  pricingMatrix?: PricingMatrix;
  accountingBookDetailList?: ItemAccountingBookDetailList;
  purchaseTaxCode?: PlatformCore.RecordRef;
  rate?: number;
  salesTaxCode?: PlatformCore.RecordRef;
  translationsList?: TranslationList;
  vendor?: PlatformCore.RecordRef;
  hierarchyVersionsList?: OtherChargeResaleItemHierarchyVersionsList;
  consumptionUnit?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: OtherChargeResaleItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.purchaseDescription = props.purchaseDescription;
    this.manufacturingChargeItem = props.manufacturingChargeItem;
    this.cost = props.cost;
    this.costUnits = props.costUnits;
    this.expenseAccount = props.expenseAccount;
    this.intercoExpenseAccount = props.intercoExpenseAccount;
    this.salesDescription = props.salesDescription;
    this.includeChildren = props.includeChildren;
    this.incomeAccount = props.incomeAccount;
    this.intercoIncomeAccount = props.intercoIncomeAccount;
    this.isTaxable = props.isTaxable;
    this.matrixType = props.matrixType;
    this.taxSchedule = props.taxSchedule;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.unitsType = props.unitsType;
    this.purchaseUnit = props.purchaseUnit;
    this.saleUnit = props.saleUnit;
    this.costEstimateUnits = props.costEstimateUnits;
    this.issueProduct = props.issueProduct;
    this.billingSchedule = props.billingSchedule;
    this.deferredRevenueAccount = props.deferredRevenueAccount;
    this.intercoDefRevAccount = props.intercoDefRevAccount;
    this.revRecSchedule = props.revRecSchedule;
    this.deferralAccount = props.deferralAccount;
    this.amortizationTemplate = props.amortizationTemplate;
    this.residual = props.residual;
    this.deferRevRec = props.deferRevRec;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.revRecForecastRule = props.revRecForecastRule;
    this.revenueAllocationGroup = props.revenueAllocationGroup;
    this.createRevenuePlansOn = props.createRevenuePlansOn;
    this.directRevenuePosting = props.directRevenuePosting;
    this.contingentRevenueHandling = props.contingentRevenueHandling;
    this.revReclassFXAccount = props.revReclassFXAccount;
    this.amortizationPeriod = props.amortizationPeriod;
    this.minimumQuantity = props.minimumQuantity;
    this.minimumQuantityUnits = props.minimumQuantityUnits;
    this.enforceMinQtyInternally = props.enforceMinQtyInternally;
    this.maximumQuantity = props.maximumQuantity;
    this.softDescriptor = props.softDescriptor;
    this.isFulfillable = props.isFulfillable;
    this.generateAccruals = props.generateAccruals;
    this.costCategory = props.costCategory;
    this.purchaseOrderQuantity = props.purchaseOrderQuantity;
    this.purchaseOrderAmount = props.purchaseOrderAmount;
    this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
    this.receiptQuantity = props.receiptQuantity;
    this.receiptAmount = props.receiptAmount;
    this.receiptQuantityDiff = props.receiptQuantityDiff;
    this.pricesIncludeTax = props.pricesIncludeTax;
    this.quantityPricingSchedule = props.quantityPricingSchedule;
    this.useMarginalRates = props.useMarginalRates;
    this.overallQuantityPricingType = props.overallQuantityPricingType;
    this.pricingGroup = props.pricingGroup;
    this.customForm = props.customForm;
    this.itemId = props.itemId;
    this.upcCode = props.upcCode;
    this.displayName = props.displayName;
    this.vendorName = props.vendorName;
    this.parent = props.parent;
    this.isOnline = props.isOnline;
    this.isGcoCompliant = props.isGcoCompliant;
    this.offerSupport = props.offerSupport;
    this.isInactive = props.isInactive;
    this.matrixItemNameTemplate = props.matrixItemNameTemplate;
    this.availableToPartners = props.availableToPartners;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiaryList = props.subsidiaryList;
    this.vsoePrice = props.vsoePrice;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.itemRevenueCategory = props.itemRevenueCategory;
    this.currency = props.currency;
    this.itemOptionsList = props.itemOptionsList;
    this.matrixOptionList = props.matrixOptionList;
    this.itemVendorList = props.itemVendorList;
    this.pricingMatrix = props.pricingMatrix;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.purchaseTaxCode = props.purchaseTaxCode;
    this.rate = props.rate;
    this.salesTaxCode = props.salesTaxCode;
    this.translationsList = props.translationsList;
    this.vendor = props.vendor;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.consumptionUnit = props.consumptionUnit;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class LocationSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.LocationSearchRowBasic;
  addressJoin?: PlatformCommon.AddressSearchRowBasic;
  returnAddressJoin?: PlatformCommon.AddressSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: LocationSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.addressJoin = props.addressJoin;
    this.returnAddressJoin = props.returnAddressJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class DepartmentSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: DepartmentSearch;
  columns?: DepartmentSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: DepartmentSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class ContactRole extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: ContactRole) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class SerializedAssemblyItemBillOfMaterials extends SoapTypes.Base {
  billOfMaterials?: PlatformCore.RecordRef;
  currentRevision?: string;
  masterDefault?: boolean;
  defaultForLocationList?: PlatformCore.RecordRefList;
  inactive?: string;
  memo?: string;
  constructor(props: SerializedAssemblyItemBillOfMaterials) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.billOfMaterials = props.billOfMaterials;
    this.currentRevision = props.currentRevision;
    this.masterDefault = props.masterDefault;
    this.defaultForLocationList = props.defaultForLocationList;
    this.inactive = props.inactive;
    this.memo = props.memo;
  }
}

export class ItemVendor extends SoapTypes.Base {
  vendor?: PlatformCore.RecordRef;
  vendorCode?: string;
  vendorCurrencyName?: string;
  vendorCurrency?: PlatformCore.RecordRef;
  purchasePrice?: number;
  preferredVendor?: boolean;
  schedule?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  constructor(props: ItemVendor) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.vendor = props.vendor;
    this.vendorCode = props.vendorCode;
    this.vendorCurrencyName = props.vendorCurrencyName;
    this.vendorCurrency = props.vendorCurrency;
    this.purchasePrice = props.purchasePrice;
    this.preferredVendor = props.preferredVendor;
    this.schedule = props.schedule;
    this.subsidiary = props.subsidiary;
  }
}

export class AccountingPeriod extends PlatformCore.Record {
  periodName?: string;
  parent?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  fiscalCalendar?: PlatformCore.RecordRef;
  closedOnDate?: SoapTypes.Dateish;
  isAdjust?: boolean;
  fiscalCalendarsList?: AccountingPeriodFiscalCalendarsList;
  isQuarter?: boolean;
  isYear?: boolean;
  closed?: boolean;
  apLocked?: boolean;
  arLocked?: boolean;
  payrollLocked?: boolean;
  allLocked?: boolean;
  allowNonGLChanges?: boolean;
  internalId?: string;
  constructor(props: AccountingPeriod) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.periodName = props.periodName;
    this.parent = props.parent;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.fiscalCalendar = props.fiscalCalendar;
    this.closedOnDate = props.closedOnDate;
    this.isAdjust = props.isAdjust;
    this.fiscalCalendarsList = props.fiscalCalendarsList;
    this.isQuarter = props.isQuarter;
    this.isYear = props.isYear;
    this.closed = props.closed;
    this.apLocked = props.apLocked;
    this.arLocked = props.arLocked;
    this.payrollLocked = props.payrollLocked;
    this.allLocked = props.allLocked;
    this.allowNonGLChanges = props.allowNonGLChanges;
    this.internalId = props.internalId;
  }
}

export class Bom extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  name?: string;
  usedOnAssembly?: boolean;
  createdDate?: SoapTypes.Dateish;
  isInactive?: boolean;
  useComponentYield?: boolean;
  memo?: string;
  legacyBomForAssembly?: PlatformCore.RecordRef;
  availableForAllAssemblies?: boolean;
  restrictToAssembliesList?: PlatformCore.RecordRefList;
  availableForAllLocations?: boolean;
  restrictToLocationsList?: PlatformCore.RecordRefList;
  subsidiaryList?: PlatformCore.RecordRefList;
  includeChildren?: boolean;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Bom) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customForm = props.customForm;
    this.name = props.name;
    this.usedOnAssembly = props.usedOnAssembly;
    this.createdDate = props.createdDate;
    this.isInactive = props.isInactive;
    this.useComponentYield = props.useComponentYield;
    this.memo = props.memo;
    this.legacyBomForAssembly = props.legacyBomForAssembly;
    this.availableForAllAssemblies = props.availableForAllAssemblies;
    this.restrictToAssembliesList = props.restrictToAssembliesList;
    this.availableForAllLocations = props.availableForAllLocations;
    this.restrictToLocationsList = props.restrictToLocationsList;
    this.subsidiaryList = props.subsidiaryList;
    this.includeChildren = props.includeChildren;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class SalesTaxItemSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: SalesTaxItemSearch;
  columns?: SalesTaxItemSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: SalesTaxItemSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class BomRevisionSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: BomRevisionSearch;
  columns?: BomRevisionSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: BomRevisionSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class TaxTypeNexusAccountsList extends SoapTypes.Base {
  taxTypeNexusAccounts?: TaxTypeNexusAccounts[];
  replaceAll?: boolean;
  constructor(props: TaxTypeNexusAccountsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.taxTypeNexusAccounts = props.taxTypeNexusAccounts;
    this.replaceAll = props.replaceAll;
  }
}

export class ItemAccountMappingSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ItemAccountMappingSearchRowBasic;
  classJoin?: PlatformCommon.ClassificationSearchRowBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchRowBasic;
  destinationAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  sourceAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: ItemAccountMappingSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.classJoin = props.classJoin;
    this.departmentJoin = props.departmentJoin;
    this.destinationAccountJoin = props.destinationAccountJoin;
    this.locationJoin = props.locationJoin;
    this.sourceAccountJoin = props.sourceAccountJoin;
    this.subsidiaryJoin = props.subsidiaryJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class PriceLevel extends PlatformCore.Record {
  name?: string;
  discountpct?: number;
  updateExistingPrices?: boolean;
  isOnline?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: PriceLevel) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.discountpct = props.discountpct;
    this.updateExistingPrices = props.updateExistingPrices;
    this.isOnline = props.isOnline;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class SiteCategoryList extends SoapTypes.Base {
  siteCategory?: SiteCategory[];
  replaceAll?: boolean;
  constructor(props: SiteCategoryList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.siteCategory = props.siteCategory;
    this.replaceAll = props.replaceAll;
  }
}

export class LotNumberedAssemblyItemHierarchyVersionsList extends SoapTypes.Base {
  lotNumberedAssemblyItemHierarchyVersions?: LotNumberedAssemblyItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: LotNumberedAssemblyItemHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.lotNumberedAssemblyItemHierarchyVersions = props.lotNumberedAssemblyItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class BinSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.BinSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: BinSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class OtherChargeSaleItemHierarchyVersionsList extends SoapTypes.Base {
  otherChargeSaleItemHierarchyVersions?: OtherChargeSaleItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: OtherChargeSaleItemHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.otherChargeSaleItemHierarchyVersions = props.otherChargeSaleItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class ItemSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ItemSearchRowBasic;
  accountingBookRevRecScheduleJoin?: PlatformCommon.RevRecTemplateSearchRowBasic;
  assemblyItemBillOfMaterialsJoin?: PlatformCommon.AssemblyItemBomSearchRowBasic;
  binNumberJoin?: PlatformCommon.BinSearchRowBasic;
  binOnHandJoin?: PlatformCommon.ItemBinNumberSearchRowBasic;
  correlatedItemJoin?: PlatformCommon.ItemSearchRowBasic;
  effectiveRevisionJoin?: PlatformCommon.ItemRevisionSearchRowBasic;
  fileJoin?: PlatformCommon.FileSearchRowBasic;
  inventoryDetailJoin?: PlatformCommon.InventoryDetailSearchRowBasic;
  inventoryLocationJoin?: PlatformCommon.LocationSearchRowBasic;
  inventoryNumberJoin?: PlatformCommon.InventoryNumberSearchRowBasic;
  inventoryNumberBinOnHandJoin?: PlatformCommon.InventoryNumberBinSearchRowBasic;
  memberItemJoin?: PlatformCommon.ItemSearchRowBasic;
  obsoleteRevisionJoin?: PlatformCommon.ItemRevisionSearchRowBasic;
  parentJoin?: PlatformCommon.ItemSearchRowBasic;
  preferredLocationJoin?: PlatformCommon.LocationSearchRowBasic;
  preferredVendorJoin?: PlatformCommon.VendorSearchRowBasic;
  pricingJoin?: PlatformCommon.PricingSearchRowBasic;
  shopperJoin?: PlatformCommon.CustomerSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
  vendorJoin?: PlatformCommon.VendorSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: ItemSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.accountingBookRevRecScheduleJoin = props.accountingBookRevRecScheduleJoin;
    this.assemblyItemBillOfMaterialsJoin = props.assemblyItemBillOfMaterialsJoin;
    this.binNumberJoin = props.binNumberJoin;
    this.binOnHandJoin = props.binOnHandJoin;
    this.correlatedItemJoin = props.correlatedItemJoin;
    this.effectiveRevisionJoin = props.effectiveRevisionJoin;
    this.fileJoin = props.fileJoin;
    this.inventoryDetailJoin = props.inventoryDetailJoin;
    this.inventoryLocationJoin = props.inventoryLocationJoin;
    this.inventoryNumberJoin = props.inventoryNumberJoin;
    this.inventoryNumberBinOnHandJoin = props.inventoryNumberBinOnHandJoin;
    this.memberItemJoin = props.memberItemJoin;
    this.obsoleteRevisionJoin = props.obsoleteRevisionJoin;
    this.parentJoin = props.parentJoin;
    this.preferredLocationJoin = props.preferredLocationJoin;
    this.preferredVendorJoin = props.preferredVendorJoin;
    this.pricingJoin = props.pricingJoin;
    this.shopperJoin = props.shopperJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.vendorJoin = props.vendorJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class AccountingPeriodSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: AccountingPeriodSearch;
  columns?: AccountingPeriodSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: AccountingPeriodSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class GeneralTokenSupportedOperationsListList extends SoapTypes.Base {
  generalTokenSupportedOperationsList?: ListsAccountingTypes.PaymentInstrumentSupportedOperation[];
  constructor(props: GeneralTokenSupportedOperationsListList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.generalTokenSupportedOperationsList = props.generalTokenSupportedOperationsList;
  }
}

export class NexusSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.NexusSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: NexusSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class BillingRates extends SoapTypes.Base {
  currency?: PlatformCore.RecordRef;
  billingClass?: PlatformCore.RecordRef;
  rateList?: RateList;
  constructor(props: BillingRates) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.currency = props.currency;
    this.billingClass = props.billingClass;
    this.rateList = props.rateList;
  }
}

export class GlobalAccountMapping extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  effectiveDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  accountingBook?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  sourceAccount?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  destinationAccount?: PlatformCore.RecordRef;
  customDimension?: PlatformCore.BaseRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: GlobalAccountMapping) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customForm = props.customForm;
    this.effectiveDate = props.effectiveDate;
    this.endDate = props.endDate;
    this.accountingBook = props.accountingBook;
    this.subsidiary = props.subsidiary;
    this.sourceAccount = props.sourceAccount;
    this.clazz = props.clazz;
    this.department = props.department;
    this.location = props.location;
    this.destinationAccount = props.destinationAccount;
    this.customDimension = props.customDimension;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class AccountSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.AccountSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: AccountSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class LotNumberedAssemblyItemHierarchyVersions extends SoapTypes.Base {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: LotNumberedAssemblyItemHierarchyVersions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export class ItemAccountingBookDetail extends SoapTypes.Base {
  accountingBook?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  sameAsPrimaryRevRec?: boolean;
  amortizationTemplate?: PlatformCore.RecordRef;
  sameAsPrimaryAmortization?: boolean;
  constructor(props: ItemAccountingBookDetail) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.accountingBook = props.accountingBook;
    this.createRevenuePlansOn = props.createRevenuePlansOn;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.revRecForecastRule = props.revRecForecastRule;
    this.revRecSchedule = props.revRecSchedule;
    this.sameAsPrimaryRevRec = props.sameAsPrimaryRevRec;
    this.amortizationTemplate = props.amortizationTemplate;
    this.sameAsPrimaryAmortization = props.sameAsPrimaryAmortization;
  }
}

export class NonInventoryResaleItemHierarchyVersionsList extends SoapTypes.Base {
  nonInventoryResaleItemHierarchyVersions?: NonInventoryResaleItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: NonInventoryResaleItemHierarchyVersionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.nonInventoryResaleItemHierarchyVersions = props.nonInventoryResaleItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export class SubsidiaryTaxRegistrationList extends SoapTypes.Base {
  subsidiaryTaxRegistration?: SubsidiaryTaxRegistration[];
  replaceAll?: boolean;
  constructor(props: SubsidiaryTaxRegistrationList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.subsidiaryTaxRegistration = props.subsidiaryTaxRegistration;
    this.replaceAll = props.replaceAll;
  }
}

export class SubsidiaryNexus extends SoapTypes.Base {
  nexusId?: PlatformCore.RecordRef;
  country?: string;
  constructor(props: SubsidiaryNexus) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.nexusId = props.nexusId;
    this.country = props.country;
  }
}

export class SubsidiarySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.SubsidiarySearchBasic;
  addressJoin?: PlatformCommon.AddressSearchBasic;
  defaultAdvanceToApplyAccountJoin?: PlatformCommon.AccountSearchBasic;
  returnAddressJoin?: PlatformCommon.AddressSearchBasic;
  shippingAddressJoin?: PlatformCommon.AddressSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: SubsidiarySearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.addressJoin = props.addressJoin;
    this.defaultAdvanceToApplyAccountJoin = props.defaultAdvanceToApplyAccountJoin;
    this.returnAddressJoin = props.returnAddressJoin;
    this.shippingAddressJoin = props.shippingAddressJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}
