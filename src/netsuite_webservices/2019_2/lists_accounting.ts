import * as ListsAccountingTypes from "./lists_accounting_types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as PlatformCommonTypes from "./platform_common_types";
import { SoapMappingBase, propsWithMappingsName } from "../../soap-types";
const MAPPINGS_NAME = "com_netsuite_webservices_lists_accounting_2019_2";
export type PaymentCardProps = {
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
  expirationDate?: string;
  cardBrand?: ListsAccountingTypes.PaymentCardBrand;
  cardType?: ListsAccountingTypes.PaymentCardType;
  nameOnCard?: string;
  street?: string;
  zipCode?: string;
  validFromDate?: string;
  issueNumber?: string;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

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
  expirationDate?: string;
  cardBrand?: ListsAccountingTypes.PaymentCardBrand;
  cardType?: ListsAccountingTypes.PaymentCardType;
  nameOnCard?: string;
  street?: string;
  zipCode?: string;
  validFromDate?: string;
  issueNumber?: string;
  internalId?: string;
  externalId?: string;
  constructor(props: PaymentCardProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type InventoryNumberLocationsProps = {
  location?: string;
  quantityOnHand?: number;
  quantityAvailable?: number;
  quantityOnOrder?: number;
  quantityInTransit?: number;
};

export class InventoryNumberLocations extends SoapMappingBase {
  location?: string;
  quantityOnHand?: number;
  quantityAvailable?: number;
  quantityOnOrder?: number;
  quantityInTransit?: number;
  constructor(props: InventoryNumberLocationsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.location = props.location;
    this.quantityOnHand = props.quantityOnHand;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityOnOrder = props.quantityOnOrder;
    this.quantityInTransit = props.quantityInTransit;
  }
}

export type OtherNameCategoryProps = {
  name?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class OtherNameCategory extends PlatformCore.Record {
  name?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: OtherNameCategoryProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type SalesRoleSearchProps = {
  basic?: PlatformCommon.SalesRoleSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class SalesRoleSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.SalesRoleSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: SalesRoleSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type MatrixOptionListProps = {
  matrixOption?: PlatformCore.SelectCustomFieldRef[];
};

export class MatrixOptionList extends SoapMappingBase {
  matrixOption?: PlatformCore.SelectCustomFieldRef[];
  constructor(props: MatrixOptionListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.matrixOption = props.matrixOption;
  }
}

export type FairValuePriceSearchProps = {
  basic?: PlatformCommon.FairValuePriceSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class FairValuePriceSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.FairValuePriceSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: FairValuePriceSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type AccountLocalizationsProps = {
  accountingContext?: PlatformCore.RecordRef;
  acctNumber?: string;
  acctName?: string;
  legalName?: string;
  locale?: PlatformCommonTypes.Language;
};

export class AccountLocalizations extends SoapMappingBase {
  accountingContext?: PlatformCore.RecordRef;
  acctNumber?: string;
  acctName?: string;
  legalName?: string;
  locale?: PlatformCommonTypes.Language;
  constructor(props: AccountLocalizationsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.accountingContext = props.accountingContext;
    this.acctNumber = props.acctNumber;
    this.acctName = props.acctName;
    this.legalName = props.legalName;
    this.locale = props.locale;
  }
}

export type LotNumberedInventoryItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
  expirationDate?: string;
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
} & PlatformCore.RecordProps;

export class LotNumberedInventoryItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  expirationDate?: string;
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
  constructor(props: LotNumberedInventoryItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PricingMatrixProps = {
  pricing?: Pricing[];
  replaceAll?: boolean;
};

export class PricingMatrix extends SoapMappingBase {
  pricing?: Pricing[];
  replaceAll?: boolean;
  constructor(props: PricingMatrixProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.pricing = props.pricing;
    this.replaceAll = props.replaceAll;
  }
}

export type UnitsTypeProps = {
  name?: string;
  isInactive?: boolean;
  uomList?: UnitsTypeUomList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class UnitsType extends PlatformCore.Record {
  name?: string;
  isInactive?: boolean;
  uomList?: UnitsTypeUomList;
  internalId?: string;
  externalId?: string;
  constructor(props: UnitsTypeProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.isInactive = props.isInactive;
    this.uomList = props.uomList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type ItemRevisionProps = {
  item?: PlatformCore.RecordRef;
  name?: string;
  effectiveDate?: string;
  obsoleteDate?: string;
  memo?: string;
  inactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class ItemRevision extends PlatformCore.Record {
  item?: PlatformCore.RecordRef;
  name?: string;
  effectiveDate?: string;
  obsoleteDate?: string;
  memo?: string;
  inactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: ItemRevisionProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type OtherChargePurchaseItemHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class OtherChargePurchaseItemHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: OtherChargePurchaseItemHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type SerializedAssemblyItemBillOfMaterialsListProps = {
  serializedAssemblyItemBillOfMaterials?: SerializedAssemblyItemBillOfMaterials[];
  replaceAll?: boolean;
};

export class SerializedAssemblyItemBillOfMaterialsList extends SoapMappingBase {
  serializedAssemblyItemBillOfMaterials?: SerializedAssemblyItemBillOfMaterials[];
  replaceAll?: boolean;
  constructor(props: SerializedAssemblyItemBillOfMaterialsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.serializedAssemblyItemBillOfMaterials =
      props.serializedAssemblyItemBillOfMaterials;
    this.replaceAll = props.replaceAll;
  }
}

export type LocationSearchAdvancedProps = {
  criteria?: LocationSearch;
  columns?: LocationSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class LocationSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: LocationSearch;
  columns?: LocationSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: LocationSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type BomSearchProps = {
  basic?: PlatformCommon.BomSearchBasic;
  assemblyItemJoin?: PlatformCommon.AssemblyItemBomSearchBasic;
  revisionJoin?: PlatformCommon.BomRevisionSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class BomSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.BomSearchBasic;
  assemblyItemJoin?: PlatformCommon.AssemblyItemBomSearchBasic;
  revisionJoin?: PlatformCommon.BomRevisionSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: BomSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.assemblyItemJoin = props.assemblyItemJoin;
    this.revisionJoin = props.revisionJoin;
    this.transactionJoin = props.transactionJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type RevRecTemplateSearchAdvancedProps = {
  criteria?: RevRecTemplateSearch;
  columns?: RevRecTemplateSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class RevRecTemplateSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: RevRecTemplateSearch;
  columns?: RevRecTemplateSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: RevRecTemplateSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type AccountingPeriodFiscalCalendarsListProps = {
  accountingPeriodFiscalCalendars?: AccountingPeriodFiscalCalendars[];
  replaceAll?: boolean;
};

export class AccountingPeriodFiscalCalendarsList extends SoapMappingBase {
  accountingPeriodFiscalCalendars?: AccountingPeriodFiscalCalendars[];
  replaceAll?: boolean;
  constructor(props: AccountingPeriodFiscalCalendarsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.accountingPeriodFiscalCalendars =
      props.accountingPeriodFiscalCalendars;
    this.replaceAll = props.replaceAll;
  }
}

export type LocationProps = {
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
  nextPickupCutOffTime?: string;
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
} & PlatformCore.RecordProps;

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
  nextPickupCutOffTime?: string;
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
  constructor(props: LocationProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type NexusProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: NexusProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type ExpenseCategoryRatesListProps = {
  expenseCategoryRates?: ExpenseCategoryRates[];
  replaceAll?: boolean;
};

export class ExpenseCategoryRatesList extends SoapMappingBase {
  expenseCategoryRates?: ExpenseCategoryRates[];
  replaceAll?: boolean;
  constructor(props: ExpenseCategoryRatesListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.expenseCategoryRates = props.expenseCategoryRates;
    this.replaceAll = props.replaceAll;
  }
}

export type TermSearchProps = {
  basic?: PlatformCommon.TermSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class TermSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.TermSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: TermSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type AssemblyItemBillOfMaterialsListProps = {
  assemblyItemBillOfMaterials?: AssemblyItemBillOfMaterials[];
  replaceAll?: boolean;
};

export class AssemblyItemBillOfMaterialsList extends SoapMappingBase {
  assemblyItemBillOfMaterials?: AssemblyItemBillOfMaterials[];
  replaceAll?: boolean;
  constructor(props: AssemblyItemBillOfMaterialsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.assemblyItemBillOfMaterials = props.assemblyItemBillOfMaterials;
    this.replaceAll = props.replaceAll;
  }
}

export type TaxTypeSearchAdvancedProps = {
  criteria?: TaxTypeSearch;
  columns?: TaxTypeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class TaxTypeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: TaxTypeSearch;
  columns?: TaxTypeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: TaxTypeSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type RevRecScheduleProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: RevRecScheduleProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CustomerCategorySearchRowProps = {
  basic?: PlatformCommon.CustomerCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class CustomerCategorySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CustomerCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: CustomerCategorySearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type PaymentMethodVisualsProps = {
  flags?: string;
  location?: string;
};

export class PaymentMethodVisuals extends SoapMappingBase {
  flags?: string;
  location?: string;
  constructor(props: PaymentMethodVisualsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.flags = props.flags;
    this.location = props.location;
  }
}

export type OtherNameCategorySearchAdvancedProps = {
  criteria?: OtherNameCategorySearch;
  columns?: OtherNameCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class OtherNameCategorySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: OtherNameCategorySearch;
  columns?: OtherNameCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: OtherNameCategorySearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type BillingScheduleRecurrenceListProps = {
  billingScheduleRecurrence?: BillingScheduleRecurrence[];
  replaceAll?: boolean;
};

export class BillingScheduleRecurrenceList extends SoapMappingBase {
  billingScheduleRecurrence?: BillingScheduleRecurrence[];
  replaceAll?: boolean;
  constructor(props: BillingScheduleRecurrenceListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.billingScheduleRecurrence = props.billingScheduleRecurrence;
    this.replaceAll = props.replaceAll;
  }
}

export type GiftCertificateSearchAdvancedProps = {
  criteria?: GiftCertificateSearch;
  columns?: GiftCertificateSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class GiftCertificateSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: GiftCertificateSearch;
  columns?: GiftCertificateSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: GiftCertificateSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type SubtotalItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class SubtotalItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: SubtotalItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type TaxGroupProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: TaxGroupProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PartnerCategoryProps = {
  name?: string;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class PartnerCategory extends PlatformCore.Record {
  name?: string;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: PartnerCategoryProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.parent = props.parent;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type RevRecScheduleSearchProps = {
  basic?: PlatformCommon.RevRecScheduleSearchBasic;
  appliedToTransactionJoin?: PlatformCommon.TransactionSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class RevRecScheduleSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.RevRecScheduleSearchBasic;
  appliedToTransactionJoin?: PlatformCommon.TransactionSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: RevRecScheduleSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.appliedToTransactionJoin = props.appliedToTransactionJoin;
    this.customerJoin = props.customerJoin;
    this.itemJoin = props.itemJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
  }
}

export type WinLossReasonSearchAdvancedProps = {
  criteria?: WinLossReasonSearch;
  columns?: WinLossReasonSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class WinLossReasonSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: WinLossReasonSearch;
  columns?: WinLossReasonSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: WinLossReasonSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type InventoryItemBinNumberListProps = {
  binNumber?: InventoryItemBinNumber[];
  replaceAll?: boolean;
};

export class InventoryItemBinNumberList extends SoapMappingBase {
  binNumber?: InventoryItemBinNumber[];
  replaceAll?: boolean;
  constructor(props: InventoryItemBinNumberListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.binNumber = props.binNumber;
    this.replaceAll = props.replaceAll;
  }
}

export type PaymentMethodSearchRowProps = {
  basic?: PlatformCommon.PaymentMethodSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class PaymentMethodSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.PaymentMethodSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: PaymentMethodSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type LocationBusinessHoursListProps = {
  locationBusinessHours?: LocationBusinessHours[];
  replaceAll?: boolean;
};

export class LocationBusinessHoursList extends SoapMappingBase {
  locationBusinessHours?: LocationBusinessHours[];
  replaceAll?: boolean;
  constructor(props: LocationBusinessHoursListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.locationBusinessHours = props.locationBusinessHours;
    this.replaceAll = props.replaceAll;
  }
}

export type OtherChargePurchaseItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class OtherChargePurchaseItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: OtherChargePurchaseItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type ItemGroupHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class ItemGroupHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: ItemGroupHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type ClassTranslationProps = {
  locale?: string;
  language?: string;
  name?: string;
};

export class ClassTranslation extends SoapMappingBase {
  locale?: string;
  language?: string;
  name?: string;
  constructor(props: ClassTranslationProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.locale = props.locale;
    this.language = props.language;
    this.name = props.name;
  }
}

export type CustomerMessageProps = {
  name?: string;
  description?: string;
  preferred?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class CustomerMessage extends PlatformCore.Record {
  name?: string;
  description?: string;
  preferred?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CustomerMessageProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.description = props.description;
    this.preferred = props.preferred;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type ExpenseCategorySearchRowProps = {
  basic?: PlatformCommon.ExpenseCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class ExpenseCategorySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ExpenseCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: ExpenseCategorySearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type AssemblyItemHierarchyVersionsListProps = {
  assemblyItemHierarchyVersions?: AssemblyItemHierarchyVersions[];
  replaceAll?: boolean;
};

export class AssemblyItemHierarchyVersionsList extends SoapMappingBase {
  assemblyItemHierarchyVersions?: AssemblyItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: AssemblyItemHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.assemblyItemHierarchyVersions = props.assemblyItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type CustomerCategoryProps = {
  name?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class CustomerCategory extends PlatformCore.Record {
  name?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CustomerCategoryProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type BudgetCategoryProps = {
  name?: string;
  budgetType?: boolean;
  isInactive?: boolean;
  internalId?: string;
} & PlatformCore.RecordProps;

export class BudgetCategory extends PlatformCore.Record {
  name?: string;
  budgetType?: boolean;
  isInactive?: boolean;
  internalId?: string;
  constructor(props: BudgetCategoryProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.budgetType = props.budgetType;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
  }
}

export type BillingScheduleSearchRowProps = {
  basic?: PlatformCommon.BillingScheduleSearchRowBasic;
};

export class BillingScheduleSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.BillingScheduleSearchRowBasic;
  constructor(props: BillingScheduleSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
  }
}

export type SubsidiaryProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: SubsidiaryProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type UnitsTypeSearchRowProps = {
  basic?: PlatformCommon.UnitsTypeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class UnitsTypeSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.UnitsTypeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: UnitsTypeSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type PricingGroupSearchProps = {
  basic?: PlatformCommon.PricingGroupSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class PricingGroupSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.PricingGroupSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: PricingGroupSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type BillingRatesMatrixProps = {
  billingRates?: BillingRates[];
  replaceAll?: boolean;
};

export class BillingRatesMatrix extends SoapMappingBase {
  billingRates?: BillingRates[];
  replaceAll?: boolean;
  constructor(props: BillingRatesMatrixProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.billingRates = props.billingRates;
    this.replaceAll = props.replaceAll;
  }
}

export type BomRevisionComponentProps = {
  item?: PlatformCore.RecordRef;
  description?: string;
  componentYield?: number;
  bomQuantity?: number;
  itemSource?: PlatformCommonTypes.ItemSource;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  internalId?: string;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class BomRevisionComponent extends SoapMappingBase {
  item?: PlatformCore.RecordRef;
  description?: string;
  componentYield?: number;
  bomQuantity?: number;
  itemSource?: PlatformCommonTypes.ItemSource;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  internalId?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: BomRevisionComponentProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type SerializedInventoryItemNumbersListProps = {
  numbers?: SerializedInventoryItemNumbers[];
  replaceAll?: boolean;
};

export class SerializedInventoryItemNumbersList extends SoapMappingBase {
  numbers?: SerializedInventoryItemNumbers[];
  replaceAll?: boolean;
  constructor(props: SerializedInventoryItemNumbersListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.numbers = props.numbers;
    this.replaceAll = props.replaceAll;
  }
}

export type PriceLevelSearchAdvancedProps = {
  criteria?: PriceLevelSearch;
  columns?: PriceLevelSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class PriceLevelSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PriceLevelSearch;
  columns?: PriceLevelSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: PriceLevelSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type ItemAccountMappingSearchAdvancedProps = {
  criteria?: ItemAccountMappingSearch;
  columns?: ItemAccountMappingSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class ItemAccountMappingSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ItemAccountMappingSearch;
  columns?: ItemAccountMappingSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ItemAccountMappingSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type SalesRoleSearchAdvancedProps = {
  criteria?: SalesRoleSearch;
  columns?: SalesRoleSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class SalesRoleSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: SalesRoleSearch;
  columns?: SalesRoleSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: SalesRoleSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type ItemMemberProps = {
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
  effectiveDate?: string;
  obsoleteDate?: string;
  effectiveRevision?: PlatformCore.RecordRef;
  obsoleteRevision?: PlatformCore.RecordRef;
  lineNumber?: number;
  memberKey?: string;
};

export class ItemMember extends SoapMappingBase {
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
  effectiveDate?: string;
  obsoleteDate?: string;
  effectiveRevision?: PlatformCore.RecordRef;
  obsoleteRevision?: PlatformCore.RecordRef;
  lineNumber?: number;
  memberKey?: string;
  constructor(props: ItemMemberProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PriceLevelSearchProps = {
  basic?: PlatformCommon.PriceLevelSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class PriceLevelSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.PriceLevelSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: PriceLevelSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type ItemGroupHierarchyVersionsListProps = {
  itemGroupHierarchyVersions?: ItemGroupHierarchyVersions[];
  replaceAll?: boolean;
};

export class ItemGroupHierarchyVersionsList extends SoapMappingBase {
  itemGroupHierarchyVersions?: ItemGroupHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: ItemGroupHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.itemGroupHierarchyVersions = props.itemGroupHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type ItemSearchProps = {
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
};

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
  constructor(props: ItemSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.accountingBookRevRecScheduleJoin =
      props.accountingBookRevRecScheduleJoin;
    this.assemblyItemBillOfMaterialsJoin =
      props.assemblyItemBillOfMaterialsJoin;
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

export type NexusSearchAdvancedProps = {
  criteria?: NexusSearch;
  columns?: NexusSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class NexusSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: NexusSearch;
  columns?: NexusSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: NexusSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type CostCategorySearchAdvancedProps = {
  criteria?: CostCategorySearch;
  columns?: CostCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class CostCategorySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CostCategorySearch;
  columns?: CostCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CostCategorySearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type NonInventoryPurchaseItemHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class NonInventoryPurchaseItemHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: NonInventoryPurchaseItemHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type DepartmentSearchRowProps = {
  basic?: PlatformCommon.DepartmentSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class DepartmentSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.DepartmentSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: DepartmentSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type CostCategorySearchProps = {
  basic?: PlatformCommon.CostCategorySearchBasic;
  accountJoin?: PlatformCommon.AccountSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
};

export class CostCategorySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CostCategorySearchBasic;
  accountJoin?: PlatformCommon.AccountSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  constructor(props: CostCategorySearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.accountJoin = props.accountJoin;
    this.transactionJoin = props.transactionJoin;
  }
}

export type LotNumberedInventoryItemNumbersProps = {
  serialNumber?: PlatformCore.RecordRef;
  quantityOnHand?: number;
  expirationDate?: string;
};

export class LotNumberedInventoryItemNumbers extends SoapMappingBase {
  serialNumber?: PlatformCore.RecordRef;
  quantityOnHand?: number;
  expirationDate?: string;
  constructor(props: LotNumberedInventoryItemNumbersProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.serialNumber = props.serialNumber;
    this.quantityOnHand = props.quantityOnHand;
    this.expirationDate = props.expirationDate;
  }
}

export type ExpenseCategorySearchProps = {
  basic?: PlatformCommon.ExpenseCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class ExpenseCategorySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ExpenseCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: ExpenseCategorySearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type CurrencyRateSearchAdvancedProps = {
  criteria?: CurrencyRateSearch;
  columns?: CurrencyRateSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class CurrencyRateSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CurrencyRateSearch;
  columns?: CurrencyRateSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CurrencyRateSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type BinProps = {
  binNumber?: string;
  location?: PlatformCore.RecordRef;
  memo?: string;
  isInactive?: boolean;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class Bin extends PlatformCore.Record {
  binNumber?: string;
  location?: PlatformCore.RecordRef;
  memo?: string;
  isInactive?: boolean;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: BinProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.binNumber = props.binNumber;
    this.location = props.location;
    this.memo = props.memo;
    this.isInactive = props.isInactive;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type CurrencyRateSearchProps = {
  basic?: PlatformCommon.CurrencyRateSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class CurrencyRateSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CurrencyRateSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: CurrencyRateSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type GlobalAccountMappingSearchRowProps = {
  basic?: PlatformCommon.GlobalAccountMappingSearchRowBasic;
  classJoin?: PlatformCommon.ClassificationSearchRowBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchRowBasic;
  destinationAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  sourceAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class GlobalAccountMappingSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.GlobalAccountMappingSearchRowBasic;
  classJoin?: PlatformCommon.ClassificationSearchRowBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchRowBasic;
  destinationAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  sourceAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: GlobalAccountMappingSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type InventoryNumberProps = {
  inventoryNumber?: string;
  item?: PlatformCore.RecordRef;
  status?: string;
  units?: string;
  expirationDate?: string;
  memo?: string;
  locationsList?: InventoryNumberLocationsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class InventoryNumber extends PlatformCore.Record {
  inventoryNumber?: string;
  item?: PlatformCore.RecordRef;
  status?: string;
  units?: string;
  expirationDate?: string;
  memo?: string;
  locationsList?: InventoryNumberLocationsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: InventoryNumberProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type TaxAcctProps = {
  name?: string;
  description?: string;
  nexus?: PlatformCore.RecordRef;
  country?: PlatformCommonTypes.Country;
  taxAcctType?: ListsAccountingTypes.TaxAcctType;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class TaxAcct extends PlatformCore.Record {
  name?: string;
  description?: string;
  nexus?: PlatformCore.RecordRef;
  country?: PlatformCommonTypes.Country;
  taxAcctType?: ListsAccountingTypes.TaxAcctType;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: TaxAcctProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CostCategoryProps = {
  name?: string;
  account?: PlatformCore.RecordRef;
  itemCostType?: ListsAccountingTypes.CostCategoryItemCostType;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class CostCategory extends PlatformCore.Record {
  name?: string;
  account?: PlatformCore.RecordRef;
  itemCostType?: ListsAccountingTypes.CostCategoryItemCostType;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CostCategoryProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.account = props.account;
    this.itemCostType = props.itemCostType;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type CurrencyRateProps = {
  baseCurrency?: PlatformCore.RecordRef;
  transactionCurrency?: PlatformCore.RecordRef;
  exchangeRate?: number;
  effectiveDate?: string;
  internalId?: string;
} & PlatformCore.RecordProps;

export class CurrencyRate extends PlatformCore.Record {
  baseCurrency?: PlatformCore.RecordRef;
  transactionCurrency?: PlatformCore.RecordRef;
  exchangeRate?: number;
  effectiveDate?: string;
  internalId?: string;
  constructor(props: CurrencyRateProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.baseCurrency = props.baseCurrency;
    this.transactionCurrency = props.transactionCurrency;
    this.exchangeRate = props.exchangeRate;
    this.effectiveDate = props.effectiveDate;
    this.internalId = props.internalId;
  }
}

export type InventoryNumberSearchAdvancedProps = {
  criteria?: InventoryNumberSearch;
  columns?: InventoryNumberSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class InventoryNumberSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: InventoryNumberSearch;
  columns?: InventoryNumberSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: InventoryNumberSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type ItemSearchAdvancedProps = {
  criteria?: ItemSearch;
  columns?: ItemSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class ItemSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ItemSearch;
  columns?: ItemSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ItemSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type InventoryItemLocationsListProps = {
  locations?: InventoryItemLocations[];
  replaceAll?: boolean;
};

export class InventoryItemLocationsList extends SoapMappingBase {
  locations?: InventoryItemLocations[];
  replaceAll?: boolean;
  constructor(props: InventoryItemLocationsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.locations = props.locations;
    this.replaceAll = props.replaceAll;
  }
}

export type ClassificationSearchAdvancedProps = {
  criteria?: ClassificationSearch;
  columns?: ClassificationSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class ClassificationSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ClassificationSearch;
  columns?: ClassificationSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ClassificationSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type ServiceItemTaskTemplatesProps = {
  taskName?: string;
  taskStartOffset?: number;
  taskDuration?: PlatformCore.Duration;
};

export class ServiceItemTaskTemplates extends SoapMappingBase {
  taskName?: string;
  taskStartOffset?: number;
  taskDuration?: PlatformCore.Duration;
  constructor(props: ServiceItemTaskTemplatesProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.taskName = props.taskName;
    this.taskStartOffset = props.taskStartOffset;
    this.taskDuration = props.taskDuration;
  }
}

export type ServiceItemTaskTemplatesListProps = {
  taskTemplates?: ServiceItemTaskTemplates[];
  replaceAll?: boolean;
};

export class ServiceItemTaskTemplatesList extends SoapMappingBase {
  taskTemplates?: ServiceItemTaskTemplates[];
  replaceAll?: boolean;
  constructor(props: ServiceItemTaskTemplatesListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.taskTemplates = props.taskTemplates;
    this.replaceAll = props.replaceAll;
  }
}

export type LotNumberedAssemblyItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
  expirationDate?: string;
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
} & PlatformCore.RecordProps;

export class LotNumberedAssemblyItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  expirationDate?: string;
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
  constructor(props: LotNumberedAssemblyItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type ConsolidatedExchangeRateSearchAdvancedProps = {
  criteria?: ConsolidatedExchangeRateSearch;
  columns?: ConsolidatedExchangeRateSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class ConsolidatedExchangeRateSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ConsolidatedExchangeRateSearch;
  columns?: ConsolidatedExchangeRateSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ConsolidatedExchangeRateSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type WinLossReasonSearchRowProps = {
  basic?: PlatformCommon.WinLossReasonSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class WinLossReasonSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.WinLossReasonSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: WinLossReasonSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type InventoryItemHierarchyVersionsListProps = {
  inventoryItemHierarchyVersions?: InventoryItemHierarchyVersions[];
  replaceAll?: boolean;
};

export class InventoryItemHierarchyVersionsList extends SoapMappingBase {
  inventoryItemHierarchyVersions?: InventoryItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: InventoryItemHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.inventoryItemHierarchyVersions = props.inventoryItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type MerchandiseHierarchyNodeHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyLevel?: PlatformCore.RecordRef;
  parentNode?: PlatformCore.RecordRef;
};

export class MerchandiseHierarchyNodeHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyLevel?: PlatformCore.RecordRef;
  parentNode?: PlatformCore.RecordRef;
  constructor(props: MerchandiseHierarchyNodeHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyLevel = props.hierarchyLevel;
    this.parentNode = props.parentNode;
  }
}

export type SerializedInventoryItemNumbersProps = {
  serialNumber?: PlatformCore.RecordRef;
};

export class SerializedInventoryItemNumbers extends SoapMappingBase {
  serialNumber?: PlatformCore.RecordRef;
  constructor(props: SerializedInventoryItemNumbersProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.serialNumber = props.serialNumber;
  }
}

export type RevRecScheduleSearchAdvancedProps = {
  criteria?: RevRecScheduleSearch;
  columns?: RevRecScheduleSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class RevRecScheduleSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: RevRecScheduleSearch;
  columns?: RevRecScheduleSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: RevRecScheduleSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type NonInventoryPurchaseItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class NonInventoryPurchaseItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: NonInventoryPurchaseItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type SubsidiaryAccountingBookDetailListProps = {
  subsidiaryAccountingBookDetail?: SubsidiaryAccountingBookDetail[];
  replaceAll?: boolean;
};

export class SubsidiaryAccountingBookDetailList extends SoapMappingBase {
  subsidiaryAccountingBookDetail?: SubsidiaryAccountingBookDetail[];
  replaceAll?: boolean;
  constructor(props: SubsidiaryAccountingBookDetailListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.subsidiaryAccountingBookDetail = props.subsidiaryAccountingBookDetail;
    this.replaceAll = props.replaceAll;
  }
}

export type OtherChargeResaleItemHierarchyVersionsListProps = {
  otherChargeResaleItemHierarchyVersions?: OtherChargeResaleItemHierarchyVersions[];
  replaceAll?: boolean;
};

export class OtherChargeResaleItemHierarchyVersionsList extends SoapMappingBase {
  otherChargeResaleItemHierarchyVersions?: OtherChargeResaleItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: OtherChargeResaleItemHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.otherChargeResaleItemHierarchyVersions =
      props.otherChargeResaleItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type NonInventoryPurchaseItemHierarchyVersionsListProps = {
  nonInventoryPurchaseItemHierarchyVersions?: NonInventoryPurchaseItemHierarchyVersions[];
  replaceAll?: boolean;
};

export class NonInventoryPurchaseItemHierarchyVersionsList extends SoapMappingBase {
  nonInventoryPurchaseItemHierarchyVersions?: NonInventoryPurchaseItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: NonInventoryPurchaseItemHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.nonInventoryPurchaseItemHierarchyVersions =
      props.nonInventoryPurchaseItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type OtherChargeResaleItemHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class OtherChargeResaleItemHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: OtherChargeResaleItemHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type BomRevisionProps = {
  customForm?: PlatformCore.RecordRef;
  name?: string;
  createdDate?: string;
  billOfMaterials?: PlatformCore.RecordRef;
  memo?: string;
  isInactive?: boolean;
  effectiveStartDate?: string;
  effectiveEndDate?: string;
  componentList?: BomRevisionComponentList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class BomRevision extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  name?: string;
  createdDate?: string;
  billOfMaterials?: PlatformCore.RecordRef;
  memo?: string;
  isInactive?: boolean;
  effectiveStartDate?: string;
  effectiveEndDate?: string;
  componentList?: BomRevisionComponentList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: BomRevisionProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type MerchandiseHierarchyNodeSearchProps = {
  basic?: PlatformCommon.MerchandiseHierarchyNodeSearchBasic;
  parentNodeJoin?: PlatformCommon.MerchandiseHierarchyNodeSearchBasic;
};

export class MerchandiseHierarchyNodeSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.MerchandiseHierarchyNodeSearchBasic;
  parentNodeJoin?: PlatformCommon.MerchandiseHierarchyNodeSearchBasic;
  constructor(props: MerchandiseHierarchyNodeSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.parentNodeJoin = props.parentNodeJoin;
  }
}

export type AccountLocalizationsListProps = {
  accountLocalizations?: AccountLocalizations[];
  replaceAll?: boolean;
};

export class AccountLocalizationsList extends SoapMappingBase {
  accountLocalizations?: AccountLocalizations[];
  replaceAll?: boolean;
  constructor(props: AccountLocalizationsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.accountLocalizations = props.accountLocalizations;
    this.replaceAll = props.replaceAll;
  }
}

export type AccountProps = {
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
  tranDate?: string;
  revalue?: boolean;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

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
  tranDate?: string;
  revalue?: boolean;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: AccountProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type LeadSourceProps = {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class LeadSource extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: LeadSourceProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type PartnerCategorySearchAdvancedProps = {
  criteria?: PartnerCategorySearch;
  columns?: PartnerCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class PartnerCategorySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PartnerCategorySearch;
  columns?: PartnerCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: PartnerCategorySearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type TaxGroupTaxItemProps = {
  taxName?: PlatformCore.RecordRef;
  rate?: number;
  basis?: number;
  taxType?: string;
};

export class TaxGroupTaxItem extends SoapMappingBase {
  taxName?: PlatformCore.RecordRef;
  rate?: number;
  basis?: number;
  taxType?: string;
  constructor(props: TaxGroupTaxItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.taxName = props.taxName;
    this.rate = props.rate;
    this.basis = props.basis;
    this.taxType = props.taxType;
  }
}

export type VendorCategorySearchProps = {
  basic?: PlatformCommon.VendorCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class VendorCategorySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.VendorCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: VendorCategorySearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type TermPercentagesListProps = {
  termPercentages?: TermPercentages[];
  replaceAll?: boolean;
};

export class TermPercentagesList extends SoapMappingBase {
  termPercentages?: TermPercentages[];
  replaceAll?: boolean;
  constructor(props: TermPercentagesListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.termPercentages = props.termPercentages;
    this.replaceAll = props.replaceAll;
  }
}

export type AccountingPeriodSearchRowProps = {
  basic?: PlatformCommon.AccountingPeriodSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
};

export class AccountingPeriodSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.AccountingPeriodSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
  constructor(props: AccountingPeriodSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
  }
}

export type StateProps = {
  country?: PlatformCommonTypes.Country;
  fullName?: string;
  shortname?: string;
  internalId?: string;
} & PlatformCore.RecordProps;

export class State extends PlatformCore.Record {
  country?: PlatformCommonTypes.Country;
  fullName?: string;
  shortname?: string;
  internalId?: string;
  constructor(props: StateProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.country = props.country;
    this.fullName = props.fullName;
    this.shortname = props.shortname;
    this.internalId = props.internalId;
  }
}

export type SalesTaxItemProps = {
  itemId?: string;
  displayName?: string;
  description?: string;
  rate?: string;
  taxType?: PlatformCore.RecordRef;
  taxAgency?: PlatformCore.RecordRef;
  purchaseAccount?: PlatformCore.RecordRef;
  saleAccount?: PlatformCore.RecordRef;
  isInactive?: boolean;
  effectiveFrom?: string;
  validUntil?: string;
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
} & PlatformCore.RecordProps;

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
  effectiveFrom?: string;
  validUntil?: string;
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
  constructor(props: SalesTaxItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type OtherNameCategorySearchProps = {
  basic?: PlatformCommon.OtherNameCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class OtherNameCategorySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.OtherNameCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: OtherNameCategorySearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type PartnerCategorySearchProps = {
  basic?: PlatformCommon.PartnerCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class PartnerCategorySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.PartnerCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: PartnerCategorySearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type RevRecTemplateRecurrenceListProps = {
  revRecTemplateRecurrence?: RevRecTemplateRecurrence[];
  replaceAll?: boolean;
};

export class RevRecTemplateRecurrenceList extends SoapMappingBase {
  revRecTemplateRecurrence?: RevRecTemplateRecurrence[];
  replaceAll?: boolean;
  constructor(props: RevRecTemplateRecurrenceListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.revRecTemplateRecurrence = props.revRecTemplateRecurrence;
    this.replaceAll = props.replaceAll;
  }
}

export type TaxGroupSearchRowProps = {
  basic?: PlatformCommon.TaxGroupSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class TaxGroupSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.TaxGroupSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: TaxGroupSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type KitItemHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class KitItemHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: KitItemHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type LotNumberedInventoryItemLocationsProps = {
  location?: string;
  quantityOnHand?: number;
  onHandValueMli?: number;
  serialNumbers?: string;
  expirationDate?: string;
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
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
};

export class LotNumberedInventoryItemLocations extends SoapMappingBase {
  location?: string;
  quantityOnHand?: number;
  onHandValueMli?: number;
  serialNumbers?: string;
  expirationDate?: string;
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
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
  constructor(props: LotNumberedInventoryItemLocationsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type WinLossReasonProps = {
  name?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class WinLossReason extends PlatformCore.Record {
  name?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: WinLossReasonProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type AssemblyItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
} & PlatformCore.RecordProps;

export class AssemblyItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
  constructor(props: AssemblyItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type TranslationListProps = {
  translation?: Translation[];
  replaceAll?: boolean;
};

export class TranslationList extends SoapMappingBase {
  translation?: Translation[];
  replaceAll?: boolean;
  constructor(props: TranslationListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.translation = props.translation;
    this.replaceAll = props.replaceAll;
  }
}

export type ServiceResaleItemHierarchyVersionsListProps = {
  serviceResaleItemHierarchyVersions?: ServiceResaleItemHierarchyVersions[];
  replaceAll?: boolean;
};

export class ServiceResaleItemHierarchyVersionsList extends SoapMappingBase {
  serviceResaleItemHierarchyVersions?: ServiceResaleItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: ServiceResaleItemHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.serviceResaleItemHierarchyVersions =
      props.serviceResaleItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type ServiceSaleItemHierarchyVersionsListProps = {
  serviceSaleItemHierarchyVersions?: ServiceSaleItemHierarchyVersions[];
  replaceAll?: boolean;
};

export class ServiceSaleItemHierarchyVersionsList extends SoapMappingBase {
  serviceSaleItemHierarchyVersions?: ServiceSaleItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: ServiceSaleItemHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.serviceSaleItemHierarchyVersions =
      props.serviceSaleItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type GiftCertificateSearchRowProps = {
  basic?: PlatformCommon.GiftCertificateSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class GiftCertificateSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.GiftCertificateSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: GiftCertificateSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type PriceProps = {
  value?: number;
  quantity?: number;
};

export class Price extends SoapMappingBase {
  value?: number;
  quantity?: number;
  constructor(props: PriceProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.value = props.value;
    this.quantity = props.quantity;
  }
}

export type NoteTypeSearchRowProps = {
  basic?: PlatformCommon.NoteTypeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class NoteTypeSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.NoteTypeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: NoteTypeSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type ItemGroupProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class ItemGroup extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: ItemGroupProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PresentationItemListProps = {
  presentationItem?: PlatformCommon.PresentationItem[];
  replaceAll?: boolean;
};

export class PresentationItemList extends SoapMappingBase {
  presentationItem?: PlatformCommon.PresentationItem[];
  replaceAll?: boolean;
  constructor(props: PresentationItemListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.presentationItem = props.presentationItem;
    this.replaceAll = props.replaceAll;
  }
}

export type RevRecTemplateSearchProps = {
  basic?: PlatformCommon.RevRecTemplateSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class RevRecTemplateSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.RevRecTemplateSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: RevRecTemplateSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type LotNumberedInventoryItemHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class LotNumberedInventoryItemHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: LotNumberedInventoryItemHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type MarkupItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class MarkupItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: MarkupItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type SubsidiarySearchRowProps = {
  basic?: PlatformCommon.SubsidiarySearchRowBasic;
  addressJoin?: PlatformCommon.AddressSearchRowBasic;
  defaultAdvanceToApplyAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  returnAddressJoin?: PlatformCommon.AddressSearchRowBasic;
  shippingAddressJoin?: PlatformCommon.AddressSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class SubsidiarySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.SubsidiarySearchRowBasic;
  addressJoin?: PlatformCommon.AddressSearchRowBasic;
  defaultAdvanceToApplyAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  returnAddressJoin?: PlatformCommon.AddressSearchRowBasic;
  shippingAddressJoin?: PlatformCommon.AddressSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: SubsidiarySearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.addressJoin = props.addressJoin;
    this.defaultAdvanceToApplyAccountJoin =
      props.defaultAdvanceToApplyAccountJoin;
    this.returnAddressJoin = props.returnAddressJoin;
    this.shippingAddressJoin = props.shippingAddressJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type NonInventorySaleItemHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class NonInventorySaleItemHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: NonInventorySaleItemHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type PaymentMethodSearchProps = {
  basic?: PlatformCommon.PaymentMethodSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class PaymentMethodSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.PaymentMethodSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: PaymentMethodSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type OtherNameCategorySearchRowProps = {
  basic?: PlatformCommon.OtherNameCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class OtherNameCategorySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.OtherNameCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: OtherNameCategorySearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type BillingScheduleRecurrenceProps = {
  recurrenceId?: number;
  count?: number;
  units?: ListsAccountingTypes.BillingScheduleRecurrenceRecurrenceUnits;
  relativeToPrevious?: boolean;
  recurrenceDate?: string;
  amount?: number;
  paymentTerms?: PlatformCore.RecordRef;
};

export class BillingScheduleRecurrence extends SoapMappingBase {
  recurrenceId?: number;
  count?: number;
  units?: ListsAccountingTypes.BillingScheduleRecurrenceRecurrenceUnits;
  relativeToPrevious?: boolean;
  recurrenceDate?: string;
  amount?: number;
  paymentTerms?: PlatformCore.RecordRef;
  constructor(props: BillingScheduleRecurrenceProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.recurrenceId = props.recurrenceId;
    this.count = props.count;
    this.units = props.units;
    this.relativeToPrevious = props.relativeToPrevious;
    this.recurrenceDate = props.recurrenceDate;
    this.amount = props.amount;
    this.paymentTerms = props.paymentTerms;
  }
}

export type ItemVendorListProps = {
  itemVendor?: ItemVendor[];
  replaceAll?: boolean;
};

export class ItemVendorList extends SoapMappingBase {
  itemVendor?: ItemVendor[];
  replaceAll?: boolean;
  constructor(props: ItemVendorListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.itemVendor = props.itemVendor;
    this.replaceAll = props.replaceAll;
  }
}

export type ClassificationSearchProps = {
  basic?: PlatformCommon.ClassificationSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class ClassificationSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ClassificationSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: ClassificationSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type CurrencyProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: CurrencyProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type SerializedInventoryItemLocationsProps = {
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
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
};

export class SerializedInventoryItemLocations extends SoapMappingBase {
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
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
  constructor(props: SerializedInventoryItemLocationsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type RevRecScheduleRecurrenceProps = {
  incomeaccount?: PlatformCore.RecordRef;
  periodOffset?: number;
  recamount?: string;
};

export class RevRecScheduleRecurrence extends SoapMappingBase {
  incomeaccount?: PlatformCore.RecordRef;
  periodOffset?: number;
  recamount?: string;
  constructor(props: RevRecScheduleRecurrenceProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.incomeaccount = props.incomeaccount;
    this.periodOffset = props.periodOffset;
    this.recamount = props.recamount;
  }
}

export type LocationSearchProps = {
  basic?: PlatformCommon.LocationSearchBasic;
  addressJoin?: PlatformCommon.AddressSearchBasic;
  returnAddressJoin?: PlatformCommon.AddressSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class LocationSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.LocationSearchBasic;
  addressJoin?: PlatformCommon.AddressSearchBasic;
  returnAddressJoin?: PlatformCommon.AddressSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: LocationSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.addressJoin = props.addressJoin;
    this.returnAddressJoin = props.returnAddressJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type AssemblyItemHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class AssemblyItemHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: AssemblyItemHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type GiftCertificateItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class GiftCertificateItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: GiftCertificateItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type GlobalAccountMappingSearchProps = {
  basic?: PlatformCommon.GlobalAccountMappingSearchBasic;
  classJoin?: PlatformCommon.ClassificationSearchBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchBasic;
  destinationAccountJoin?: PlatformCommon.AccountSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  sourceAccountJoin?: PlatformCommon.AccountSearchBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class GlobalAccountMappingSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.GlobalAccountMappingSearchBasic;
  classJoin?: PlatformCommon.ClassificationSearchBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchBasic;
  destinationAccountJoin?: PlatformCommon.AccountSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  sourceAccountJoin?: PlatformCommon.AccountSearchBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: GlobalAccountMappingSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type NoteTypeSearchAdvancedProps = {
  criteria?: NoteTypeSearch;
  columns?: NoteTypeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class NoteTypeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: NoteTypeSearch;
  columns?: NoteTypeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: NoteTypeSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type RevRecScheduleSearchRowProps = {
  basic?: PlatformCommon.RevRecScheduleSearchRowBasic;
  appliedToTransactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class RevRecScheduleSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.RevRecScheduleSearchRowBasic;
  appliedToTransactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: RevRecScheduleSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.appliedToTransactionJoin = props.appliedToTransactionJoin;
    this.customerJoin = props.customerJoin;
    this.itemJoin = props.itemJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
  }
}

export type ServicePurchaseItemHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class ServicePurchaseItemHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: ServicePurchaseItemHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type ClassificationProps = {
  name?: string;
  includeChildren?: boolean;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  classTranslationList?: ClassTranslationList;
  subsidiaryList?: PlatformCore.RecordRefList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

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
  constructor(props: ClassificationProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type ContactRoleSearchAdvancedProps = {
  criteria?: ContactRoleSearch;
  columns?: ContactRoleSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class ContactRoleSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ContactRoleSearch;
  columns?: ContactRoleSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ContactRoleSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type BomSearchRowProps = {
  basic?: PlatformCommon.BomSearchRowBasic;
  assemblyItemJoin?: PlatformCommon.AssemblyItemBomSearchRowBasic;
  revisionJoin?: PlatformCommon.BomRevisionSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class BomSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.BomSearchRowBasic;
  assemblyItemJoin?: PlatformCommon.AssemblyItemBomSearchRowBasic;
  revisionJoin?: PlatformCommon.BomRevisionSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: BomSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.assemblyItemJoin = props.assemblyItemJoin;
    this.revisionJoin = props.revisionJoin;
    this.transactionJoin = props.transactionJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type UnitsTypeUomProps = {
  internalId?: string;
  unitName?: string;
  pluralName?: string;
  abbreviation?: string;
  pluralAbbreviation?: string;
  conversionRate?: number;
  baseUnit?: boolean;
};

export class UnitsTypeUom extends SoapMappingBase {
  internalId?: string;
  unitName?: string;
  pluralName?: string;
  abbreviation?: string;
  pluralAbbreviation?: string;
  conversionRate?: number;
  baseUnit?: boolean;
  constructor(props: UnitsTypeUomProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.internalId = props.internalId;
    this.unitName = props.unitName;
    this.pluralName = props.pluralName;
    this.abbreviation = props.abbreviation;
    this.pluralAbbreviation = props.pluralAbbreviation;
    this.conversionRate = props.conversionRate;
    this.baseUnit = props.baseUnit;
  }
}

export type AssemblyItemBillOfMaterialsProps = {
  billOfMaterials?: PlatformCore.RecordRef;
  currentRevision?: string;
  masterDefault?: boolean;
  defaultForLocationList?: PlatformCore.RecordRefList;
  inactive?: string;
  memo?: string;
};

export class AssemblyItemBillOfMaterials extends SoapMappingBase {
  billOfMaterials?: PlatformCore.RecordRef;
  currentRevision?: string;
  masterDefault?: boolean;
  defaultForLocationList?: PlatformCore.RecordRefList;
  inactive?: string;
  memo?: string;
  constructor(props: AssemblyItemBillOfMaterialsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.billOfMaterials = props.billOfMaterials;
    this.currentRevision = props.currentRevision;
    this.masterDefault = props.masterDefault;
    this.defaultForLocationList = props.defaultForLocationList;
    this.inactive = props.inactive;
    this.memo = props.memo;
  }
}

export type FairValuePriceSearchRowProps = {
  basic?: PlatformCommon.FairValuePriceSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class FairValuePriceSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.FairValuePriceSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: FairValuePriceSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type DescriptionItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class DescriptionItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: DescriptionItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type SubsidiaryTaxRegistrationProps = {
  id?: number;
  nexusCountry?: PlatformCommonTypes.Country;
  nexus?: PlatformCore.RecordRef;
  taxAgency?: PlatformCore.RecordRef;
  taxRegistrationNumber?: string;
  taxEngine?: PlatformCore.RecordRef;
  effectiveFrom?: string;
  validUntil?: string;
};

export class SubsidiaryTaxRegistration extends SoapMappingBase {
  id?: number;
  nexusCountry?: PlatformCommonTypes.Country;
  nexus?: PlatformCore.RecordRef;
  taxAgency?: PlatformCore.RecordRef;
  taxRegistrationNumber?: string;
  taxEngine?: PlatformCore.RecordRef;
  effectiveFrom?: string;
  validUntil?: string;
  constructor(props: SubsidiaryTaxRegistrationProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type GiftCertificateProps = {
  giftCertCode?: string;
  sender?: string;
  name?: string;
  email?: string;
  message?: string;
  expirationDate?: string;
  createdDate?: string;
  lastModifiedDate?: string;
  originalAmount?: number;
  amountRemaining?: number;
  internalId?: string;
} & PlatformCore.RecordProps;

export class GiftCertificate extends PlatformCore.Record {
  giftCertCode?: string;
  sender?: string;
  name?: string;
  email?: string;
  message?: string;
  expirationDate?: string;
  createdDate?: string;
  lastModifiedDate?: string;
  originalAmount?: number;
  amountRemaining?: number;
  internalId?: string;
  constructor(props: GiftCertificateProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type SerializedInventoryItemLocationsListProps = {
  locations?: SerializedInventoryItemLocations[];
  replaceAll?: boolean;
};

export class SerializedInventoryItemLocationsList extends SoapMappingBase {
  locations?: SerializedInventoryItemLocations[];
  replaceAll?: boolean;
  constructor(props: SerializedInventoryItemLocationsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.locations = props.locations;
    this.replaceAll = props.replaceAll;
  }
}

export type SalesRoleProps = {
  name?: string;
  description?: string;
  isSalesRep?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class SalesRole extends PlatformCore.Record {
  name?: string;
  description?: string;
  isSalesRep?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: SalesRoleProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.description = props.description;
    this.isSalesRep = props.isSalesRep;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type PaymentItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class PaymentItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: PaymentItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type RevRecTemplateRecurrenceProps = {
  incomeaccount?: PlatformCore.RecordRef;
  periodOffset?: number;
  recamount?: string;
};

export class RevRecTemplateRecurrence extends SoapMappingBase {
  incomeaccount?: PlatformCore.RecordRef;
  periodOffset?: number;
  recamount?: string;
  constructor(props: RevRecTemplateRecurrenceProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.incomeaccount = props.incomeaccount;
    this.periodOffset = props.periodOffset;
    this.recamount = props.recamount;
  }
}

export type KitItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class KitItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: KitItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type DepartmentSearchProps = {
  basic?: PlatformCommon.DepartmentSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class DepartmentSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.DepartmentSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: DepartmentSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type SubsidiarySearchAdvancedProps = {
  criteria?: SubsidiarySearch;
  columns?: SubsidiarySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class SubsidiarySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: SubsidiarySearch;
  columns?: SubsidiarySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: SubsidiarySearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type RateProps = {
  value?: number;
  priceLevel?: PlatformCore.RecordRef;
};

export class Rate extends SoapMappingBase {
  value?: number;
  priceLevel?: PlatformCore.RecordRef;
  constructor(props: RateProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.value = props.value;
    this.priceLevel = props.priceLevel;
  }
}

export type TermPercentagesProps = {
  percentage?: number;
};

export class TermPercentages extends SoapMappingBase {
  percentage?: number;
  constructor(props: TermPercentagesProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.percentage = props.percentage;
  }
}

export type InventoryNumberSearchProps = {
  basic?: PlatformCommon.InventoryNumberSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class InventoryNumberSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.InventoryNumberSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: InventoryNumberSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type DiscountItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class DiscountItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: DiscountItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type OtherChargeSaleItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class OtherChargeSaleItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: OtherChargeSaleItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type TaxTypeSearchProps = {
  basic?: PlatformCommon.TaxTypeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class TaxTypeSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.TaxTypeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: TaxTypeSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type BinSearchAdvancedProps = {
  criteria?: BinSearch;
  columns?: BinSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class BinSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: BinSearch;
  columns?: BinSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: BinSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type AccountSearchAdvancedProps = {
  criteria?: AccountSearch;
  columns?: AccountSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class AccountSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: AccountSearch;
  columns?: AccountSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: AccountSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type CustomerMessageSearchRowProps = {
  basic?: PlatformCommon.CustomerMessageSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class CustomerMessageSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CustomerMessageSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: CustomerMessageSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type ProductFeedListProps = {
  productFeed: ListsAccountingTypes.ItemProductFeed[];
};

export class ProductFeedList extends SoapMappingBase {
  productFeed: ListsAccountingTypes.ItemProductFeed[];
  constructor(props: ProductFeedListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.productFeed = props.productFeed;
  }
}

export type SubsidiaryNexusListProps = {
  nexus?: SubsidiaryNexus[];
  replaceAll?: boolean;
};

export class SubsidiaryNexusList extends SoapMappingBase {
  nexus?: SubsidiaryNexus[];
  replaceAll?: boolean;
  constructor(props: SubsidiaryNexusListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.nexus = props.nexus;
    this.replaceAll = props.replaceAll;
  }
}

export type BomSearchAdvancedProps = {
  criteria?: BomSearch;
  columns?: BomSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class BomSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: BomSearch;
  columns?: BomSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: BomSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type PaymentMethodVisualsListProps = {
  paymentMethodVisuals?: PaymentMethodVisuals[];
  replaceAll?: boolean;
};

export class PaymentMethodVisualsList extends SoapMappingBase {
  paymentMethodVisuals?: PaymentMethodVisuals[];
  replaceAll?: boolean;
  constructor(props: PaymentMethodVisualsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.paymentMethodVisuals = props.paymentMethodVisuals;
    this.replaceAll = props.replaceAll;
  }
}

export type LocationRegionsProps = {
  region?: PlatformCore.RecordRef;
};

export class LocationRegions extends SoapMappingBase {
  region?: PlatformCore.RecordRef;
  constructor(props: LocationRegionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.region = props.region;
  }
}

export type ClassTranslationListProps = {
  classTranslation?: ClassTranslation[];
  replaceAll?: boolean;
};

export class ClassTranslationList extends SoapMappingBase {
  classTranslation?: ClassTranslation[];
  replaceAll?: boolean;
  constructor(props: ClassTranslationListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.classTranslation = props.classTranslation;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorCategoryProps = {
  name?: string;
  isTaxAgency?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class VendorCategory extends PlatformCore.Record {
  name?: string;
  isTaxAgency?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: VendorCategoryProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.isTaxAgency = props.isTaxAgency;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type ItemOptionsListProps = {
  itemOptions: PlatformCore.RecordRef[];
};

export class ItemOptionsList extends SoapMappingBase {
  itemOptions: PlatformCore.RecordRef[];
  constructor(props: ItemOptionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.itemOptions = props.itemOptions;
  }
}

export type MerchandiseHierarchyNodeSearchRowProps = {
  basic?: PlatformCommon.MerchandiseHierarchyNodeSearchRowBasic;
  parentNodeJoin?: PlatformCommon.MerchandiseHierarchyNodeSearchRowBasic;
};

export class MerchandiseHierarchyNodeSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.MerchandiseHierarchyNodeSearchRowBasic;
  parentNodeJoin?: PlatformCommon.MerchandiseHierarchyNodeSearchRowBasic;
  constructor(props: MerchandiseHierarchyNodeSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.parentNodeJoin = props.parentNodeJoin;
  }
}

export type TaxGroupSearchProps = {
  basic?: PlatformCommon.TaxGroupSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class TaxGroupSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.TaxGroupSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: TaxGroupSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type NonInventoryResaleItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class NonInventoryResaleItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: NonInventoryResaleItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type LotNumberedInventoryItemHierarchyVersionsListProps = {
  lotNumberedInventoryItemHierarchyVersions?: LotNumberedInventoryItemHierarchyVersions[];
  replaceAll?: boolean;
};

export class LotNumberedInventoryItemHierarchyVersionsList extends SoapMappingBase {
  lotNumberedInventoryItemHierarchyVersions?: LotNumberedInventoryItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: LotNumberedInventoryItemHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.lotNumberedInventoryItemHierarchyVersions =
      props.lotNumberedInventoryItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type BomRevisionComponentListProps = {
  bomRevisionComponent?: BomRevisionComponent[];
  replaceAll?: boolean;
};

export class BomRevisionComponentList extends SoapMappingBase {
  bomRevisionComponent?: BomRevisionComponent[];
  replaceAll?: boolean;
  constructor(props: BomRevisionComponentListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.bomRevisionComponent = props.bomRevisionComponent;
    this.replaceAll = props.replaceAll;
  }
}

export type MerchandiseHierarchyNodeProps = {
  name?: string;
  description?: string;
  hierarchyVersionsList?: MerchandiseHierarchyNodeHierarchyVersionsList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class MerchandiseHierarchyNode extends PlatformCore.Record {
  name?: string;
  description?: string;
  hierarchyVersionsList?: MerchandiseHierarchyNodeHierarchyVersionsList;
  internalId?: string;
  externalId?: string;
  constructor(props: MerchandiseHierarchyNodeProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.description = props.description;
    this.hierarchyVersionsList = props.hierarchyVersionsList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type PricingProps = {
  currency?: PlatformCore.RecordRef;
  priceLevel?: PlatformCore.RecordRef;
  discount?: number;
  priceList?: PriceList;
};

export class Pricing extends SoapMappingBase {
  currency?: PlatformCore.RecordRef;
  priceLevel?: PlatformCore.RecordRef;
  discount?: number;
  priceList?: PriceList;
  constructor(props: PricingProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.currency = props.currency;
    this.priceLevel = props.priceLevel;
    this.discount = props.discount;
    this.priceList = props.priceList;
  }
}

export type PaymentMethodProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: PaymentMethodProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type ConsolidatedExchangeRateSearchRowProps = {
  basic?: PlatformCommon.ConsolidatedExchangeRateSearchRowBasic;
  fromSubsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  periodJoin?: PlatformCommon.AccountingPeriodSearchRowBasic;
  toSubsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class ConsolidatedExchangeRateSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ConsolidatedExchangeRateSearchRowBasic;
  fromSubsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  periodJoin?: PlatformCommon.AccountingPeriodSearchRowBasic;
  toSubsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: ConsolidatedExchangeRateSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.fromSubsidiaryJoin = props.fromSubsidiaryJoin;
    this.periodJoin = props.periodJoin;
    this.toSubsidiaryJoin = props.toSubsidiaryJoin;
    this.userJoin = props.userJoin;
  }
}

export type ServiceSaleItemHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class ServiceSaleItemHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: ServiceSaleItemHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type ItemRevisionSearchRowProps = {
  basic?: PlatformCommon.ItemRevisionSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class ItemRevisionSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ItemRevisionSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: ItemRevisionSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.userJoin = props.userJoin;
  }
}

export type SalesTaxItemSearchRowProps = {
  basic?: PlatformCommon.SalesTaxItemSearchRowBasic;
  taxTypeJoin?: PlatformCommon.TaxTypeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class SalesTaxItemSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.SalesTaxItemSearchRowBasic;
  taxTypeJoin?: PlatformCommon.TaxTypeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: SalesTaxItemSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.taxTypeJoin = props.taxTypeJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type UnitsTypeSearchProps = {
  basic?: PlatformCommon.UnitsTypeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class UnitsTypeSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.UnitsTypeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: UnitsTypeSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type InventoryItemLocationsProps = {
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
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
};

export class InventoryItemLocations extends SoapMappingBase {
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
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
  constructor(props: InventoryItemLocationsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CostCategorySearchRowProps = {
  basic?: PlatformCommon.CostCategorySearchRowBasic;
  accountJoin?: PlatformCommon.AccountSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
};

export class CostCategorySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CostCategorySearchRowBasic;
  accountJoin?: PlatformCommon.AccountSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  constructor(props: CostCategorySearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.accountJoin = props.accountJoin;
    this.transactionJoin = props.transactionJoin;
  }
}

export type ItemAccountMappingSearchProps = {
  basic?: PlatformCommon.ItemAccountMappingSearchBasic;
  classJoin?: PlatformCommon.ClassificationSearchBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchBasic;
  destinationAccountJoin?: PlatformCommon.AccountSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  sourceAccountJoin?: PlatformCommon.AccountSearchBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class ItemAccountMappingSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ItemAccountMappingSearchBasic;
  classJoin?: PlatformCommon.ClassificationSearchBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchBasic;
  destinationAccountJoin?: PlatformCommon.AccountSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  sourceAccountJoin?: PlatformCommon.AccountSearchBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: ItemAccountMappingSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type UnitsTypeSearchAdvancedProps = {
  criteria?: UnitsTypeSearch;
  columns?: UnitsTypeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class UnitsTypeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: UnitsTypeSearch;
  columns?: UnitsTypeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: UnitsTypeSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type VendorCategorySearchAdvancedProps = {
  criteria?: VendorCategorySearch;
  columns?: VendorCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class VendorCategorySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: VendorCategorySearch;
  columns?: VendorCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: VendorCategorySearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type NonInventorySaleItemHierarchyVersionsListProps = {
  nonInventorySaleItemHierarchyVersions?: NonInventorySaleItemHierarchyVersions[];
  replaceAll?: boolean;
};

export class NonInventorySaleItemHierarchyVersionsList extends SoapMappingBase {
  nonInventorySaleItemHierarchyVersions?: NonInventorySaleItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: NonInventorySaleItemHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.nonInventorySaleItemHierarchyVersions =
      props.nonInventorySaleItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type CustomerMessageSearchAdvancedProps = {
  criteria?: CustomerMessageSearch;
  columns?: CustomerMessageSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class CustomerMessageSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CustomerMessageSearch;
  columns?: CustomerMessageSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CustomerMessageSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type PaymentCardTokenProps = {
  entity?: PlatformCore.RecordRef;
  mask?: string;
  paymentMethod?: PlatformCore.RecordRef;
  memo?: string;
  state?: ListsAccountingTypes.PaymentInstrumentState;
  isInactive?: boolean;
  preserveOnFile?: boolean;
  isDefault?: boolean;
  token?: string;
  tokenExpirationDate?: string;
  tokenFamily?: ListsAccountingTypes.TokenFamily;
  tokenNamespace?: string;
  cardIssuerIdNumber?: string;
  cardBrand?: ListsAccountingTypes.PaymentCardBrand;
  cardType?: ListsAccountingTypes.PaymentCardType;
  cardNameOnCard?: string;
  cardLastFourDigits?: string;
  cardExpirationDate?: string;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

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
  tokenExpirationDate?: string;
  tokenFamily?: ListsAccountingTypes.TokenFamily;
  tokenNamespace?: string;
  cardIssuerIdNumber?: string;
  cardBrand?: ListsAccountingTypes.PaymentCardBrand;
  cardType?: ListsAccountingTypes.PaymentCardType;
  cardNameOnCard?: string;
  cardLastFourDigits?: string;
  cardExpirationDate?: string;
  internalId?: string;
  externalId?: string;
  constructor(props: PaymentCardTokenProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type GiftCertificateItemAuthCodesProps = {
  authCode?: string;
  used?: boolean;
};

export class GiftCertificateItemAuthCodes extends SoapMappingBase {
  authCode?: string;
  used?: boolean;
  constructor(props: GiftCertificateItemAuthCodesProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.authCode = props.authCode;
    this.used = props.used;
  }
}

export type SerializedAssemblyItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  vendorName?: string;
  parent?: PlatformCore.RecordRef;
  printItems?: boolean;
  isOnline?: boolean;
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
} & PlatformCore.RecordProps;

export class SerializedAssemblyItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
  customForm?: PlatformCore.RecordRef;
  itemId?: string;
  upcCode?: string;
  displayName?: string;
  vendorName?: string;
  parent?: PlatformCore.RecordRef;
  printItems?: boolean;
  isOnline?: boolean;
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
  constructor(props: SerializedAssemblyItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PriceListProps = {
  price?: Price[];
};

export class PriceList extends SoapMappingBase {
  price?: Price[];
  constructor(props: PriceListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.price = props.price;
  }
}

export type GiftCertificateSearchProps = {
  basic?: PlatformCommon.GiftCertificateSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class GiftCertificateSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.GiftCertificateSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: GiftCertificateSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type BillingScheduleMilestoneProps = {
  milestoneId?: number;
  milestoneAmount?: number;
  milestoneTerms?: PlatformCore.RecordRef;
  projectTask?: PlatformCore.RecordRef;
  milestoneDate?: string;
  milestoneCompleted?: boolean;
  milestoneActualCompletionDate?: string;
  comments?: string;
};

export class BillingScheduleMilestone extends SoapMappingBase {
  milestoneId?: number;
  milestoneAmount?: number;
  milestoneTerms?: PlatformCore.RecordRef;
  projectTask?: PlatformCore.RecordRef;
  milestoneDate?: string;
  milestoneCompleted?: boolean;
  milestoneActualCompletionDate?: string;
  comments?: string;
  constructor(props: BillingScheduleMilestoneProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type LotNumberedInventoryItemNumbersListProps = {
  numbers?: LotNumberedInventoryItemNumbers[];
  replaceAll?: boolean;
};

export class LotNumberedInventoryItemNumbersList extends SoapMappingBase {
  numbers?: LotNumberedInventoryItemNumbers[];
  replaceAll?: boolean;
  constructor(props: LotNumberedInventoryItemNumbersListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.numbers = props.numbers;
    this.replaceAll = props.replaceAll;
  }
}

export type BomRevisionSearchRowProps = {
  basic?: PlatformCommon.BomRevisionSearchRowBasic;
  billOfMaterialsJoin?: PlatformCommon.BomSearchRowBasic;
  componentJoin?: PlatformCommon.BomRevisionComponentSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class BomRevisionSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.BomRevisionSearchRowBasic;
  billOfMaterialsJoin?: PlatformCommon.BomSearchRowBasic;
  componentJoin?: PlatformCommon.BomRevisionComponentSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: BomRevisionSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.billOfMaterialsJoin = props.billOfMaterialsJoin;
    this.componentJoin = props.componentJoin;
    this.transactionJoin = props.transactionJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type NonInventoryResaleItemHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class NonInventoryResaleItemHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: NonInventoryResaleItemHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type CustomerMessageSearchProps = {
  basic?: PlatformCommon.CustomerMessageSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class CustomerMessageSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CustomerMessageSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: CustomerMessageSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type LotNumberedAssemblyItemBillOfMaterialsProps = {
  billOfMaterials?: PlatformCore.RecordRef;
  currentRevision?: string;
  masterDefault?: boolean;
  defaultForLocationList?: PlatformCore.RecordRefList;
  inactive?: string;
  memo?: string;
};

export class LotNumberedAssemblyItemBillOfMaterials extends SoapMappingBase {
  billOfMaterials?: PlatformCore.RecordRef;
  currentRevision?: string;
  masterDefault?: boolean;
  defaultForLocationList?: PlatformCore.RecordRefList;
  inactive?: string;
  memo?: string;
  constructor(props: LotNumberedAssemblyItemBillOfMaterialsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.billOfMaterials = props.billOfMaterials;
    this.currentRevision = props.currentRevision;
    this.masterDefault = props.masterDefault;
    this.defaultForLocationList = props.defaultForLocationList;
    this.inactive = props.inactive;
    this.memo = props.memo;
  }
}

export type AccountingPeriodSearchProps = {
  basic?: PlatformCommon.AccountingPeriodSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
};

export class AccountingPeriodSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.AccountingPeriodSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
  constructor(props: AccountingPeriodSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
  }
}

export type TaxGroupTaxItemListProps = {
  taxItem?: TaxGroupTaxItem[];
  replaceAll?: boolean;
};

export class TaxGroupTaxItemList extends SoapMappingBase {
  taxItem?: TaxGroupTaxItem[];
  replaceAll?: boolean;
  constructor(props: TaxGroupTaxItemListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.taxItem = props.taxItem;
    this.replaceAll = props.replaceAll;
  }
}

export type SerializedInventoryItemHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class SerializedInventoryItemHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: SerializedInventoryItemHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type ItemAccountingBookDetailListProps = {
  itemAccountingBookDetail?: ItemAccountingBookDetail[];
  replaceAll?: boolean;
};

export class ItemAccountingBookDetailList extends SoapMappingBase {
  itemAccountingBookDetail?: ItemAccountingBookDetail[];
  replaceAll?: boolean;
  constructor(props: ItemAccountingBookDetailListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.itemAccountingBookDetail = props.itemAccountingBookDetail;
    this.replaceAll = props.replaceAll;
  }
}

export type TaxTypeNexusesTaxProps = {
  nexus?: PlatformCore.RecordRef;
  description?: string;
  saleTaxAcct?: PlatformCore.RecordRef;
  purchTaxAcct?: PlatformCore.RecordRef;
};

export class TaxTypeNexusesTax extends SoapMappingBase {
  nexus?: PlatformCore.RecordRef;
  description?: string;
  saleTaxAcct?: PlatformCore.RecordRef;
  purchTaxAcct?: PlatformCore.RecordRef;
  constructor(props: TaxTypeNexusesTaxProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.nexus = props.nexus;
    this.description = props.description;
    this.saleTaxAcct = props.saleTaxAcct;
    this.purchTaxAcct = props.purchTaxAcct;
  }
}

export type PricingGroupProps = {
  name?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class PricingGroup extends PlatformCore.Record {
  name?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: PricingGroupProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type DepartmentProps = {
  name?: string;
  includeChildren?: boolean;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  classTranslationList?: ClassTranslationList;
  subsidiaryList?: PlatformCore.RecordRefList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

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
  constructor(props: DepartmentProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type SerializedInventoryItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
} & PlatformCore.RecordProps;

export class SerializedInventoryItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
  constructor(props: SerializedInventoryItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type BillingScheduleMilestoneListProps = {
  billingScheduleMilestone?: BillingScheduleMilestone[];
  replaceAll?: boolean;
};

export class BillingScheduleMilestoneList extends SoapMappingBase {
  billingScheduleMilestone?: BillingScheduleMilestone[];
  replaceAll?: boolean;
  constructor(props: BillingScheduleMilestoneListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.billingScheduleMilestone = props.billingScheduleMilestone;
    this.replaceAll = props.replaceAll;
  }
}

export type ContactRoleSearchRowProps = {
  basic?: PlatformCommon.ContactRoleSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class ContactRoleSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ContactRoleSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: ContactRoleSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type ServiceResaleItemHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class ServiceResaleItemHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: ServiceResaleItemHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type PricingGroupSearchAdvancedProps = {
  criteria?: PricingGroupSearch;
  columns?: PricingGroupSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class PricingGroupSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PricingGroupSearch;
  columns?: PricingGroupSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: PricingGroupSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type RateListProps = {
  rate?: Rate[];
};

export class RateList extends SoapMappingBase {
  rate?: Rate[];
  constructor(props: RateListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.rate = props.rate;
  }
}

export type MerchandiseHierarchyNodeHierarchyVersionsListProps = {
  merchandiseHierarchyNodeHierarchyVersions?: MerchandiseHierarchyNodeHierarchyVersions[];
  replaceAll?: boolean;
};

export class MerchandiseHierarchyNodeHierarchyVersionsList extends SoapMappingBase {
  merchandiseHierarchyNodeHierarchyVersions?: MerchandiseHierarchyNodeHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: MerchandiseHierarchyNodeHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.merchandiseHierarchyNodeHierarchyVersions =
      props.merchandiseHierarchyNodeHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type TaxGroupSearchAdvancedProps = {
  criteria?: TaxGroupSearch;
  columns?: TaxGroupSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class TaxGroupSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: TaxGroupSearch;
  columns?: TaxGroupSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: TaxGroupSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type TaxTypeNexusesTaxListProps = {
  nexusesTax?: TaxTypeNexusesTax[];
  replaceAll?: boolean;
};

export class TaxTypeNexusesTaxList extends SoapMappingBase {
  nexusesTax?: TaxTypeNexusesTax[];
  replaceAll?: boolean;
  constructor(props: TaxTypeNexusesTaxListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.nexusesTax = props.nexusesTax;
    this.replaceAll = props.replaceAll;
  }
}

export type SubsidiaryAccountingBookDetailProps = {
  accountingBook?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  bookStatus?: ListsAccountingTypes.AccountingBookStatus;
};

export class SubsidiaryAccountingBookDetail extends SoapMappingBase {
  accountingBook?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  bookStatus?: ListsAccountingTypes.AccountingBookStatus;
  constructor(props: SubsidiaryAccountingBookDetailProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.accountingBook = props.accountingBook;
    this.currency = props.currency;
    this.bookStatus = props.bookStatus;
  }
}

export type BinSearchRowProps = {
  basic?: PlatformCommon.BinSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class BinSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.BinSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: BinSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type MerchandiseHierarchyNodeSearchAdvancedProps = {
  criteria?: MerchandiseHierarchyNodeSearch;
  columns?: MerchandiseHierarchyNodeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class MerchandiseHierarchyNodeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: MerchandiseHierarchyNodeSearch;
  columns?: MerchandiseHierarchyNodeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: MerchandiseHierarchyNodeSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type BomRevisionSearchProps = {
  basic?: PlatformCommon.BomRevisionSearchBasic;
  billOfMaterialsJoin?: PlatformCommon.BomSearchBasic;
  componentJoin?: PlatformCommon.BomRevisionComponentSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class BomRevisionSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.BomRevisionSearchBasic;
  billOfMaterialsJoin?: PlatformCommon.BomSearchBasic;
  componentJoin?: PlatformCommon.BomRevisionComponentSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: BomRevisionSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.billOfMaterialsJoin = props.billOfMaterialsJoin;
    this.componentJoin = props.componentJoin;
    this.transactionJoin = props.transactionJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type TaxTypeSearchRowProps = {
  basic?: PlatformCommon.TaxTypeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class TaxTypeSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.TaxTypeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: TaxTypeSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type NexusSearchProps = {
  basic?: PlatformCommon.NexusSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class NexusSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.NexusSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: NexusSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type ConsolidatedExchangeRateSearchProps = {
  basic?: PlatformCommon.ConsolidatedExchangeRateSearchBasic;
  fromSubsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  periodJoin?: PlatformCommon.AccountingPeriodSearchBasic;
  toSubsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class ConsolidatedExchangeRateSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ConsolidatedExchangeRateSearchBasic;
  fromSubsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  periodJoin?: PlatformCommon.AccountingPeriodSearchBasic;
  toSubsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: ConsolidatedExchangeRateSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.fromSubsidiaryJoin = props.fromSubsidiaryJoin;
    this.periodJoin = props.periodJoin;
    this.toSubsidiaryJoin = props.toSubsidiaryJoin;
    this.userJoin = props.userJoin;
  }
}

export type SerializedInventoryItemHierarchyVersionsListProps = {
  serializedInventoryItemHierarchyVersions?: SerializedInventoryItemHierarchyVersions[];
  replaceAll?: boolean;
};

export class SerializedInventoryItemHierarchyVersionsList extends SoapMappingBase {
  serializedInventoryItemHierarchyVersions?: SerializedInventoryItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: SerializedInventoryItemHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.serializedInventoryItemHierarchyVersions =
      props.serializedInventoryItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type KitItemHierarchyVersionsListProps = {
  kitItemHierarchyVersions?: KitItemHierarchyVersions[];
  replaceAll?: boolean;
};

export class KitItemHierarchyVersionsList extends SoapMappingBase {
  kitItemHierarchyVersions?: KitItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: KitItemHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.kitItemHierarchyVersions = props.kitItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type ContactRoleSearchProps = {
  basic?: PlatformCommon.ContactRoleSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class ContactRoleSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ContactRoleSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: ContactRoleSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type ItemMemberListProps = {
  itemMember?: ItemMember[];
  replaceAll?: boolean;
};

export class ItemMemberList extends SoapMappingBase {
  itemMember?: ItemMember[];
  replaceAll?: boolean;
  constructor(props: ItemMemberListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.itemMember = props.itemMember;
    this.replaceAll = props.replaceAll;
  }
}

export type PaymentMethodSearchAdvancedProps = {
  criteria?: PaymentMethodSearch;
  columns?: PaymentMethodSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class PaymentMethodSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PaymentMethodSearch;
  columns?: PaymentMethodSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: PaymentMethodSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type ContactCategoryProps = {
  name?: string;
  _private?: boolean;
  sync?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class ContactCategory extends PlatformCore.Record {
  name?: string;
  _private?: boolean;
  sync?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: ContactCategoryProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this._private = props._private;
    this.sync = props.sync;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type TermSearchRowProps = {
  basic?: PlatformCommon.TermSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class TermSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.TermSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: TermSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type AccountingPeriodFiscalCalendarsProps = {
  fiscalCalendar?: PlatformCore.RecordRef;
  parent?: PlatformCore.RecordRef;
};

export class AccountingPeriodFiscalCalendars extends SoapMappingBase {
  fiscalCalendar?: PlatformCore.RecordRef;
  parent?: PlatformCore.RecordRef;
  constructor(props: AccountingPeriodFiscalCalendarsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.fiscalCalendar = props.fiscalCalendar;
    this.parent = props.parent;
  }
}

export type BillingScheduleSearchAdvancedProps = {
  criteria?: BillingScheduleSearch;
  columns?: BillingScheduleSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class BillingScheduleSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: BillingScheduleSearch;
  columns?: BillingScheduleSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: BillingScheduleSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type ExpenseCategoryProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: ExpenseCategoryProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type ExpenseCategoryRatesProps = {
  subsidiary?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  defaultRate?: number;
};

export class ExpenseCategoryRates extends SoapMappingBase {
  subsidiary?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  defaultRate?: number;
  constructor(props: ExpenseCategoryRatesProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.subsidiary = props.subsidiary;
    this.currency = props.currency;
    this.defaultRate = props.defaultRate;
  }
}

export type GiftCertificateItemAuthCodesListProps = {
  authCodes?: GiftCertificateItemAuthCodes[];
  replaceAll?: boolean;
};

export class GiftCertificateItemAuthCodesList extends SoapMappingBase {
  authCodes?: GiftCertificateItemAuthCodes[];
  replaceAll?: boolean;
  constructor(props: GiftCertificateItemAuthCodesListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.authCodes = props.authCodes;
    this.replaceAll = props.replaceAll;
  }
}

export type SiteCategoryProps = {
  website?: PlatformCore.RecordRef;
  category?: PlatformCore.RecordRef;
  isDefault?: boolean;
  categoryDescription?: string;
};

export class SiteCategory extends SoapMappingBase {
  website?: PlatformCore.RecordRef;
  category?: PlatformCore.RecordRef;
  isDefault?: boolean;
  categoryDescription?: string;
  constructor(props: SiteCategoryProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.website = props.website;
    this.category = props.category;
    this.isDefault = props.isDefault;
    this.categoryDescription = props.categoryDescription;
  }
}

export type ContactCategorySearchProps = {
  basic?: PlatformCommon.ContactCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class ContactCategorySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ContactCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: ContactCategorySearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type TermSearchAdvancedProps = {
  criteria?: TermSearch;
  columns?: TermSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class TermSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: TermSearch;
  columns?: TermSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: TermSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type NonInventorySaleItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class NonInventorySaleItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: NonInventorySaleItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type SerializedAssemblyItemHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class SerializedAssemblyItemHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: SerializedAssemblyItemHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type ItemAccountMappingProps = {
  customForm?: PlatformCore.RecordRef;
  effectiveDate?: string;
  endDate?: string;
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
} & PlatformCore.RecordProps;

export class ItemAccountMapping extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  effectiveDate?: string;
  endDate?: string;
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
  constructor(props: ItemAccountMappingProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type AccountSearchRowProps = {
  basic?: PlatformCommon.AccountSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class AccountSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.AccountSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: AccountSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type WinLossReasonSearchProps = {
  basic?: PlatformCommon.WinLossReasonSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class WinLossReasonSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.WinLossReasonSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: WinLossReasonSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type PartnerCategorySearchRowProps = {
  basic?: PlatformCommon.PartnerCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class PartnerCategorySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.PartnerCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: PartnerCategorySearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type ServiceSaleItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class ServiceSaleItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: ServiceSaleItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type ContactCategorySearchRowProps = {
  basic?: PlatformCommon.ContactCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class ContactCategorySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ContactCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: ContactCategorySearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type LocationBusinessHoursProps = {
  startTime?: string;
  endTime?: string;
  isSunday?: boolean;
  isMonday?: boolean;
  isTuesday?: boolean;
  isWednesday?: boolean;
  isThursday?: boolean;
  isFriday?: boolean;
  isSaturday?: boolean;
  sameDayPickupCutOffTime?: string;
};

export class LocationBusinessHours extends SoapMappingBase {
  startTime?: string;
  endTime?: string;
  isSunday?: boolean;
  isMonday?: boolean;
  isTuesday?: boolean;
  isWednesday?: boolean;
  isThursday?: boolean;
  isFriday?: boolean;
  isSaturday?: boolean;
  sameDayPickupCutOffTime?: string;
  constructor(props: LocationBusinessHoursProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type TranslationProps = {
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
};

export class Translation extends SoapMappingBase {
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
  constructor(props: TranslationProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type SerializedAssemblyItemHierarchyVersionsListProps = {
  serializedAssemblyItemHierarchyVersions?: SerializedAssemblyItemHierarchyVersions[];
  replaceAll?: boolean;
};

export class SerializedAssemblyItemHierarchyVersionsList extends SoapMappingBase {
  serializedAssemblyItemHierarchyVersions?: SerializedAssemblyItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: SerializedAssemblyItemHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.serializedAssemblyItemHierarchyVersions =
      props.serializedAssemblyItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type ItemRevisionSearchProps = {
  basic?: PlatformCommon.ItemRevisionSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class ItemRevisionSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ItemRevisionSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: ItemRevisionSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.userJoin = props.userJoin;
  }
}

export type ServicePurchaseItemHierarchyVersionsListProps = {
  servicePurchaseItemHierarchyVersions?: ServicePurchaseItemHierarchyVersions[];
  replaceAll?: boolean;
};

export class ServicePurchaseItemHierarchyVersionsList extends SoapMappingBase {
  servicePurchaseItemHierarchyVersions?: ServicePurchaseItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: ServicePurchaseItemHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.servicePurchaseItemHierarchyVersions =
      props.servicePurchaseItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type FairValuePriceProps = {
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
  startDate?: string;
  endDate?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  dimensionList?: PlatformCore.DimensionList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

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
  startDate?: string;
  endDate?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  dimensionList?: PlatformCore.DimensionList;
  internalId?: string;
  externalId?: string;
  constructor(props: FairValuePriceProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type InventoryItemHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class InventoryItemHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: InventoryItemHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type ServicePurchaseItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class ServicePurchaseItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: ServicePurchaseItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type ClassificationSearchRowProps = {
  basic?: PlatformCommon.ClassificationSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class ClassificationSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ClassificationSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: ClassificationSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type InventoryItemBinNumberProps = {
  binNumber?: PlatformCore.RecordRef;
  onHand?: string;
  onHandAvail?: string;
  location?: string;
  preferredBin?: boolean;
};

export class InventoryItemBinNumber extends SoapMappingBase {
  binNumber?: PlatformCore.RecordRef;
  onHand?: string;
  onHandAvail?: string;
  location?: string;
  preferredBin?: boolean;
  constructor(props: InventoryItemBinNumberProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.binNumber = props.binNumber;
    this.onHand = props.onHand;
    this.onHandAvail = props.onHandAvail;
    this.location = props.location;
    this.preferredBin = props.preferredBin;
  }
}

export type DownloadItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class DownloadItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: DownloadItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type InventoryNumberLocationsListProps = {
  locations?: InventoryNumberLocations[];
  replaceAll?: boolean;
};

export class InventoryNumberLocationsList extends SoapMappingBase {
  locations?: InventoryNumberLocations[];
  replaceAll?: boolean;
  constructor(props: InventoryNumberLocationsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.locations = props.locations;
    this.replaceAll = props.replaceAll;
  }
}

export type RevRecTemplateSearchRowProps = {
  basic?: PlatformCommon.RevRecTemplateSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class RevRecTemplateSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.RevRecTemplateSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: RevRecTemplateSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type OtherChargePurchaseItemHierarchyVersionsListProps = {
  otherChargePurchaseItemHierarchyVersions?: OtherChargePurchaseItemHierarchyVersions[];
  replaceAll?: boolean;
};

export class OtherChargePurchaseItemHierarchyVersionsList extends SoapMappingBase {
  otherChargePurchaseItemHierarchyVersions?: OtherChargePurchaseItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: OtherChargePurchaseItemHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.otherChargePurchaseItemHierarchyVersions =
      props.otherChargePurchaseItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type RevRecTemplateProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: RevRecTemplateProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type BillingScheduleProps = {
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
  seriesStartDate?: string;
  recurrenceList?: BillingScheduleRecurrenceList;
  milestoneList?: BillingScheduleMilestoneList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

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
  seriesStartDate?: string;
  recurrenceList?: BillingScheduleRecurrenceList;
  milestoneList?: BillingScheduleMilestoneList;
  internalId?: string;
  externalId?: string;
  constructor(props: BillingScheduleProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type OtherChargeSaleItemHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class OtherChargeSaleItemHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: OtherChargeSaleItemHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type FairValuePriceSearchAdvancedProps = {
  criteria?: FairValuePriceSearch;
  columns?: FairValuePriceSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class FairValuePriceSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: FairValuePriceSearch;
  columns?: FairValuePriceSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: FairValuePriceSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type GeneralTokenProps = {
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
  tokenExpirationDate?: string;
  tokenFamily?: ListsAccountingTypes.TokenFamily;
  tokenNamespace?: string;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

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
  tokenExpirationDate?: string;
  tokenFamily?: ListsAccountingTypes.TokenFamily;
  tokenNamespace?: string;
  internalId?: string;
  externalId?: string;
  constructor(props: GeneralTokenProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type ContactCategorySearchAdvancedProps = {
  criteria?: ContactCategorySearch;
  columns?: ContactCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class ContactCategorySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ContactCategorySearch;
  columns?: ContactCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ContactCategorySearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type SalesRoleSearchRowProps = {
  basic?: PlatformCommon.SalesRoleSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class SalesRoleSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.SalesRoleSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: SalesRoleSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type TermProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: TermProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type LotNumberedInventoryItemLocationsListProps = {
  locations?: LotNumberedInventoryItemLocations[];
  replaceAll?: boolean;
};

export class LotNumberedInventoryItemLocationsList extends SoapMappingBase {
  locations?: LotNumberedInventoryItemLocations[];
  replaceAll?: boolean;
  constructor(props: LotNumberedInventoryItemLocationsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.locations = props.locations;
    this.replaceAll = props.replaceAll;
  }
}

export type TaxTypeNexusAccountsProps = {
  nexus?: PlatformCore.RecordRef;
  payablesAccount?: PlatformCore.RecordRef;
  receivablesAccount?: PlatformCore.RecordRef;
};

export class TaxTypeNexusAccounts extends SoapMappingBase {
  nexus?: PlatformCore.RecordRef;
  payablesAccount?: PlatformCore.RecordRef;
  receivablesAccount?: PlatformCore.RecordRef;
  constructor(props: TaxTypeNexusAccountsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.nexus = props.nexus;
    this.payablesAccount = props.payablesAccount;
    this.receivablesAccount = props.receivablesAccount;
  }
}

export type GlobalAccountMappingSearchAdvancedProps = {
  criteria?: GlobalAccountMappingSearch;
  columns?: GlobalAccountMappingSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class GlobalAccountMappingSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: GlobalAccountMappingSearch;
  columns?: GlobalAccountMappingSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: GlobalAccountMappingSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type UnitsTypeUomListProps = {
  uom?: UnitsTypeUom[];
  replaceAll?: boolean;
};

export class UnitsTypeUomList extends SoapMappingBase {
  uom?: UnitsTypeUom[];
  replaceAll?: boolean;
  constructor(props: UnitsTypeUomListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.uom = props.uom;
    this.replaceAll = props.replaceAll;
  }
}

export type NoteTypeProps = {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class NoteType extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: NoteTypeProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type RevRecScheduleRecurrenceListProps = {
  revRecScheduleRecurrence?: RevRecScheduleRecurrence[];
  replaceAll?: boolean;
};

export class RevRecScheduleRecurrenceList extends SoapMappingBase {
  revRecScheduleRecurrence?: RevRecScheduleRecurrence[];
  replaceAll?: boolean;
  constructor(props: RevRecScheduleRecurrenceListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.revRecScheduleRecurrence = props.revRecScheduleRecurrence;
    this.replaceAll = props.replaceAll;
  }
}

export type NoteTypeSearchProps = {
  basic?: PlatformCommon.NoteTypeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class NoteTypeSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.NoteTypeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: NoteTypeSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type PriceLevelSearchRowProps = {
  basic?: PlatformCommon.PriceLevelSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class PriceLevelSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.PriceLevelSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: PriceLevelSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type ItemRevisionSearchAdvancedProps = {
  criteria?: ItemRevisionSearch;
  columns?: ItemRevisionSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class ItemRevisionSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ItemRevisionSearch;
  columns?: ItemRevisionSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ItemRevisionSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type LotNumberedAssemblyItemBillOfMaterialsListProps = {
  lotNumberedAssemblyItemBillOfMaterials?: LotNumberedAssemblyItemBillOfMaterials[];
  replaceAll?: boolean;
};

export class LotNumberedAssemblyItemBillOfMaterialsList extends SoapMappingBase {
  lotNumberedAssemblyItemBillOfMaterials?: LotNumberedAssemblyItemBillOfMaterials[];
  replaceAll?: boolean;
  constructor(props: LotNumberedAssemblyItemBillOfMaterialsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.lotNumberedAssemblyItemBillOfMaterials =
      props.lotNumberedAssemblyItemBillOfMaterials;
    this.replaceAll = props.replaceAll;
  }
}

export type CurrencyRateSearchRowProps = {
  basic?: PlatformCommon.CurrencyRateSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class CurrencyRateSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CurrencyRateSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: CurrencyRateSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type InventoryNumberSearchRowProps = {
  basic?: PlatformCommon.InventoryNumberSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class InventoryNumberSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.InventoryNumberSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: InventoryNumberSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type LocationRegionsListProps = {
  locationRegions?: LocationRegions[];
  replaceAll?: boolean;
};

export class LocationRegionsList extends SoapMappingBase {
  locationRegions?: LocationRegions[];
  replaceAll?: boolean;
  constructor(props: LocationRegionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.locationRegions = props.locationRegions;
    this.replaceAll = props.replaceAll;
  }
}

export type InventoryItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
  purchaseDescription?: string;
  copyDescription?: boolean;
  expenseAccount?: PlatformCore.RecordRef;
  dateConvertedToInv?: string;
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
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
} & PlatformCore.RecordProps;

export class InventoryItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
  purchaseDescription?: string;
  copyDescription?: boolean;
  expenseAccount?: PlatformCore.RecordRef;
  dateConvertedToInv?: string;
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
  lastInvtCountDate?: string;
  nextInvtCountDate?: string;
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
  constructor(props: InventoryItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type SalesTaxItemSearchProps = {
  basic?: PlatformCommon.SalesTaxItemSearchBasic;
  taxTypeJoin?: PlatformCommon.TaxTypeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class SalesTaxItemSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.SalesTaxItemSearchBasic;
  taxTypeJoin?: PlatformCommon.TaxTypeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: SalesTaxItemSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.taxTypeJoin = props.taxTypeJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type VendorCategorySearchRowProps = {
  basic?: PlatformCommon.VendorCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class VendorCategorySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.VendorCategorySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: VendorCategorySearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type ServiceResaleItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class ServiceResaleItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: ServiceResaleItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type TaxTypeProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: TaxTypeProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type ExpenseCategorySearchAdvancedProps = {
  criteria?: ExpenseCategorySearch;
  columns?: ExpenseCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class ExpenseCategorySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ExpenseCategorySearch;
  columns?: ExpenseCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ExpenseCategorySearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type CustomerCategorySearchProps = {
  basic?: PlatformCommon.CustomerCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class CustomerCategorySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CustomerCategorySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: CustomerCategorySearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type PricingGroupSearchRowProps = {
  basic?: PlatformCommon.PricingGroupSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class PricingGroupSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.PricingGroupSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: PricingGroupSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type ConsolidatedExchangeRateProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: ConsolidatedExchangeRateProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CustomerCategorySearchAdvancedProps = {
  criteria?: CustomerCategorySearch;
  columns?: CustomerCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class CustomerCategorySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CustomerCategorySearch;
  columns?: CustomerCategorySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CustomerCategorySearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type BillingScheduleSearchProps = {
  basic?: PlatformCommon.BillingScheduleSearchBasic;
};

export class BillingScheduleSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.BillingScheduleSearchBasic;
  constructor(props: BillingScheduleSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
  }
}

export type OtherChargeResaleItemProps = {
  createdDate?: string;
  lastModifiedDate?: string;
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
} & PlatformCore.RecordProps;

export class OtherChargeResaleItem extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
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
  constructor(props: OtherChargeResaleItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type LocationSearchRowProps = {
  basic?: PlatformCommon.LocationSearchRowBasic;
  addressJoin?: PlatformCommon.AddressSearchRowBasic;
  returnAddressJoin?: PlatformCommon.AddressSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class LocationSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.LocationSearchRowBasic;
  addressJoin?: PlatformCommon.AddressSearchRowBasic;
  returnAddressJoin?: PlatformCommon.AddressSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: LocationSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.addressJoin = props.addressJoin;
    this.returnAddressJoin = props.returnAddressJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type DepartmentSearchAdvancedProps = {
  criteria?: DepartmentSearch;
  columns?: DepartmentSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class DepartmentSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: DepartmentSearch;
  columns?: DepartmentSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: DepartmentSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type ContactRoleProps = {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class ContactRole extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: ContactRoleProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type SerializedAssemblyItemBillOfMaterialsProps = {
  billOfMaterials?: PlatformCore.RecordRef;
  currentRevision?: string;
  masterDefault?: boolean;
  defaultForLocationList?: PlatformCore.RecordRefList;
  inactive?: string;
  memo?: string;
};

export class SerializedAssemblyItemBillOfMaterials extends SoapMappingBase {
  billOfMaterials?: PlatformCore.RecordRef;
  currentRevision?: string;
  masterDefault?: boolean;
  defaultForLocationList?: PlatformCore.RecordRefList;
  inactive?: string;
  memo?: string;
  constructor(props: SerializedAssemblyItemBillOfMaterialsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.billOfMaterials = props.billOfMaterials;
    this.currentRevision = props.currentRevision;
    this.masterDefault = props.masterDefault;
    this.defaultForLocationList = props.defaultForLocationList;
    this.inactive = props.inactive;
    this.memo = props.memo;
  }
}

export type ItemVendorProps = {
  vendor?: PlatformCore.RecordRef;
  vendorCode?: string;
  vendorCurrencyName?: string;
  vendorCurrency?: PlatformCore.RecordRef;
  purchasePrice?: number;
  preferredVendor?: boolean;
  schedule?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
};

export class ItemVendor extends SoapMappingBase {
  vendor?: PlatformCore.RecordRef;
  vendorCode?: string;
  vendorCurrencyName?: string;
  vendorCurrency?: PlatformCore.RecordRef;
  purchasePrice?: number;
  preferredVendor?: boolean;
  schedule?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  constructor(props: ItemVendorProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type AccountingPeriodProps = {
  periodName?: string;
  parent?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  fiscalCalendar?: PlatformCore.RecordRef;
  closedOnDate?: string;
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
} & PlatformCore.RecordProps;

export class AccountingPeriod extends PlatformCore.Record {
  periodName?: string;
  parent?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  fiscalCalendar?: PlatformCore.RecordRef;
  closedOnDate?: string;
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
  constructor(props: AccountingPeriodProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type BomProps = {
  customForm?: PlatformCore.RecordRef;
  name?: string;
  usedOnAssembly?: boolean;
  createdDate?: string;
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
} & PlatformCore.RecordProps;

export class Bom extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  name?: string;
  usedOnAssembly?: boolean;
  createdDate?: string;
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
  constructor(props: BomProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type SalesTaxItemSearchAdvancedProps = {
  criteria?: SalesTaxItemSearch;
  columns?: SalesTaxItemSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class SalesTaxItemSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: SalesTaxItemSearch;
  columns?: SalesTaxItemSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: SalesTaxItemSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type BomRevisionSearchAdvancedProps = {
  criteria?: BomRevisionSearch;
  columns?: BomRevisionSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class BomRevisionSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: BomRevisionSearch;
  columns?: BomRevisionSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: BomRevisionSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type TaxTypeNexusAccountsListProps = {
  taxTypeNexusAccounts?: TaxTypeNexusAccounts[];
  replaceAll?: boolean;
};

export class TaxTypeNexusAccountsList extends SoapMappingBase {
  taxTypeNexusAccounts?: TaxTypeNexusAccounts[];
  replaceAll?: boolean;
  constructor(props: TaxTypeNexusAccountsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.taxTypeNexusAccounts = props.taxTypeNexusAccounts;
    this.replaceAll = props.replaceAll;
  }
}

export type ItemAccountMappingSearchRowProps = {
  basic?: PlatformCommon.ItemAccountMappingSearchRowBasic;
  classJoin?: PlatformCommon.ClassificationSearchRowBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchRowBasic;
  destinationAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  sourceAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class ItemAccountMappingSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ItemAccountMappingSearchRowBasic;
  classJoin?: PlatformCommon.ClassificationSearchRowBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchRowBasic;
  destinationAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  sourceAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: ItemAccountMappingSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PriceLevelProps = {
  name?: string;
  discountpct?: number;
  updateExistingPrices?: boolean;
  isOnline?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class PriceLevel extends PlatformCore.Record {
  name?: string;
  discountpct?: number;
  updateExistingPrices?: boolean;
  isOnline?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: PriceLevelProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.discountpct = props.discountpct;
    this.updateExistingPrices = props.updateExistingPrices;
    this.isOnline = props.isOnline;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type SiteCategoryListProps = {
  siteCategory?: SiteCategory[];
  replaceAll?: boolean;
};

export class SiteCategoryList extends SoapMappingBase {
  siteCategory?: SiteCategory[];
  replaceAll?: boolean;
  constructor(props: SiteCategoryListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.siteCategory = props.siteCategory;
    this.replaceAll = props.replaceAll;
  }
}

export type LotNumberedAssemblyItemHierarchyVersionsListProps = {
  lotNumberedAssemblyItemHierarchyVersions?: LotNumberedAssemblyItemHierarchyVersions[];
  replaceAll?: boolean;
};

export class LotNumberedAssemblyItemHierarchyVersionsList extends SoapMappingBase {
  lotNumberedAssemblyItemHierarchyVersions?: LotNumberedAssemblyItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: LotNumberedAssemblyItemHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.lotNumberedAssemblyItemHierarchyVersions =
      props.lotNumberedAssemblyItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type BinSearchProps = {
  basic?: PlatformCommon.BinSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class BinSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.BinSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: BinSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type OtherChargeSaleItemHierarchyVersionsListProps = {
  otherChargeSaleItemHierarchyVersions?: OtherChargeSaleItemHierarchyVersions[];
  replaceAll?: boolean;
};

export class OtherChargeSaleItemHierarchyVersionsList extends SoapMappingBase {
  otherChargeSaleItemHierarchyVersions?: OtherChargeSaleItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: OtherChargeSaleItemHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.otherChargeSaleItemHierarchyVersions =
      props.otherChargeSaleItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type ItemSearchRowProps = {
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
};

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
  constructor(props: ItemSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.accountingBookRevRecScheduleJoin =
      props.accountingBookRevRecScheduleJoin;
    this.assemblyItemBillOfMaterialsJoin =
      props.assemblyItemBillOfMaterialsJoin;
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

export type AccountingPeriodSearchAdvancedProps = {
  criteria?: AccountingPeriodSearch;
  columns?: AccountingPeriodSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class AccountingPeriodSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: AccountingPeriodSearch;
  columns?: AccountingPeriodSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: AccountingPeriodSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type GeneralTokenSupportedOperationsListListProps = {
  generalTokenSupportedOperationsList?: ListsAccountingTypes.PaymentInstrumentSupportedOperation[];
};

export class GeneralTokenSupportedOperationsListList extends SoapMappingBase {
  generalTokenSupportedOperationsList?: ListsAccountingTypes.PaymentInstrumentSupportedOperation[];
  constructor(props: GeneralTokenSupportedOperationsListListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.generalTokenSupportedOperationsList =
      props.generalTokenSupportedOperationsList;
  }
}

export type NexusSearchRowProps = {
  basic?: PlatformCommon.NexusSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class NexusSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.NexusSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: NexusSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type BillingRatesProps = {
  currency?: PlatformCore.RecordRef;
  billingClass?: PlatformCore.RecordRef;
  rateList?: RateList;
};

export class BillingRates extends SoapMappingBase {
  currency?: PlatformCore.RecordRef;
  billingClass?: PlatformCore.RecordRef;
  rateList?: RateList;
  constructor(props: BillingRatesProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.currency = props.currency;
    this.billingClass = props.billingClass;
    this.rateList = props.rateList;
  }
}

export type GlobalAccountMappingProps = {
  customForm?: PlatformCore.RecordRef;
  effectiveDate?: string;
  endDate?: string;
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
} & PlatformCore.RecordProps;

export class GlobalAccountMapping extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  effectiveDate?: string;
  endDate?: string;
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
  constructor(props: GlobalAccountMappingProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type AccountSearchProps = {
  basic?: PlatformCommon.AccountSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class AccountSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.AccountSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: AccountSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type LotNumberedAssemblyItemHierarchyVersionsProps = {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
};

export class LotNumberedAssemblyItemHierarchyVersions extends SoapMappingBase {
  isIncluded?: boolean;
  hierarchyVersion?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  hierarchyNode?: PlatformCore.RecordRef;
  constructor(props: LotNumberedAssemblyItemHierarchyVersionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.isIncluded = props.isIncluded;
    this.hierarchyVersion = props.hierarchyVersion;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.hierarchyNode = props.hierarchyNode;
  }
}

export type ItemAccountingBookDetailProps = {
  accountingBook?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  sameAsPrimaryRevRec?: boolean;
  amortizationTemplate?: PlatformCore.RecordRef;
  sameAsPrimaryAmortization?: boolean;
};

export class ItemAccountingBookDetail extends SoapMappingBase {
  accountingBook?: PlatformCore.RecordRef;
  createRevenuePlansOn?: PlatformCore.RecordRef;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  sameAsPrimaryRevRec?: boolean;
  amortizationTemplate?: PlatformCore.RecordRef;
  sameAsPrimaryAmortization?: boolean;
  constructor(props: ItemAccountingBookDetailProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type NonInventoryResaleItemHierarchyVersionsListProps = {
  nonInventoryResaleItemHierarchyVersions?: NonInventoryResaleItemHierarchyVersions[];
  replaceAll?: boolean;
};

export class NonInventoryResaleItemHierarchyVersionsList extends SoapMappingBase {
  nonInventoryResaleItemHierarchyVersions?: NonInventoryResaleItemHierarchyVersions[];
  replaceAll?: boolean;
  constructor(props: NonInventoryResaleItemHierarchyVersionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.nonInventoryResaleItemHierarchyVersions =
      props.nonInventoryResaleItemHierarchyVersions;
    this.replaceAll = props.replaceAll;
  }
}

export type SubsidiaryTaxRegistrationListProps = {
  subsidiaryTaxRegistration?: SubsidiaryTaxRegistration[];
  replaceAll?: boolean;
};

export class SubsidiaryTaxRegistrationList extends SoapMappingBase {
  subsidiaryTaxRegistration?: SubsidiaryTaxRegistration[];
  replaceAll?: boolean;
  constructor(props: SubsidiaryTaxRegistrationListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.subsidiaryTaxRegistration = props.subsidiaryTaxRegistration;
    this.replaceAll = props.replaceAll;
  }
}

export type SubsidiaryNexusProps = {
  nexusId?: PlatformCore.RecordRef;
  country?: string;
};

export class SubsidiaryNexus extends SoapMappingBase {
  nexusId?: PlatformCore.RecordRef;
  country?: string;
  constructor(props: SubsidiaryNexusProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.nexusId = props.nexusId;
    this.country = props.country;
  }
}

export type SubsidiarySearchProps = {
  basic?: PlatformCommon.SubsidiarySearchBasic;
  addressJoin?: PlatformCommon.AddressSearchBasic;
  defaultAdvanceToApplyAccountJoin?: PlatformCommon.AccountSearchBasic;
  returnAddressJoin?: PlatformCommon.AddressSearchBasic;
  shippingAddressJoin?: PlatformCommon.AddressSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class SubsidiarySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.SubsidiarySearchBasic;
  addressJoin?: PlatformCommon.AddressSearchBasic;
  defaultAdvanceToApplyAccountJoin?: PlatformCommon.AccountSearchBasic;
  returnAddressJoin?: PlatformCommon.AddressSearchBasic;
  shippingAddressJoin?: PlatformCommon.AddressSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: SubsidiarySearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.addressJoin = props.addressJoin;
    this.defaultAdvanceToApplyAccountJoin =
      props.defaultAdvanceToApplyAccountJoin;
    this.returnAddressJoin = props.returnAddressJoin;
    this.shippingAddressJoin = props.shippingAddressJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}
