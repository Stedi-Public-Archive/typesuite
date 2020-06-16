import * as SoapTypes from "../soap-types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as TransactionsSalesTypes from "./transactions_sales_types";
import * as PlatformCommonTypes from "./platform_common_types";

const mappingsName = "com_netsuite_webservices_transactions_sales_2019_2";

export class OpportunityCompetitorsList extends SoapTypes.Base {
  competitors?: OpportunityCompetitors[];
  replaceAll?: boolean;
  constructor(props: OpportunityCompetitorsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.competitors = props.competitors;
    this.replaceAll = props.replaceAll;
  }
}

export class OpportunityPartnersList extends SoapTypes.Base {
  partners?: PlatformCommon.Partners[];
  replaceAll?: boolean;
  constructor(props: OpportunityPartnersList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.partners = props.partners;
    this.replaceAll = props.replaceAll;
  }
}

export class SalesOrderItemList extends SoapTypes.Base {
  item?: SalesOrderItem[];
  replaceAll?: boolean;
  constructor(props: SalesOrderItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export class Usage extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  memo?: string;
  item?: PlatformCore.RecordRef;
  subscriptionPlan?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  usageSubscription?: PlatformCore.RecordRef;
  usageSubscriptionLine?: PlatformCore.RecordRef;
  usageQuantity?: number;
  usageDate?: SoapTypes.Dateish;
  internalId?: string;
  externalId?: string;
  constructor(props: Usage) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customForm = props.customForm;
    this.memo = props.memo;
    this.item = props.item;
    this.subscriptionPlan = props.subscriptionPlan;
    this.customer = props.customer;
    this.usageSubscription = props.usageSubscription;
    this.usageSubscriptionLine = props.usageSubscriptionLine;
    this.usageQuantity = props.usageQuantity;
    this.usageDate = props.usageDate;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class UsageSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.UsageSearchRowBasic;
  chargeJoin?: PlatformCommon.ChargeSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  subscriptionPlanJoin?: PlatformCommon.ItemSearchRowBasic;
  constructor(props: UsageSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.chargeJoin = props.chargeJoin;
    this.customerJoin = props.customerJoin;
    this.itemJoin = props.itemJoin;
    this.subscriptionPlanJoin = props.subscriptionPlanJoin;
  }
}

export class ItemFulfillmentItem extends SoapTypes.Base {
  jobName?: string;
  itemReceive?: boolean;
  itemName?: string;
  description?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  onHand?: number;
  quantity?: number;
  unitsDisplay?: string;
  createPo?: string;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  binNumbers?: string;
  serialNumbers?: string;
  poNum?: string;
  item?: PlatformCore.RecordRef;
  orderLine?: number;
  quantityRemaining?: number;
  options?: PlatformCore.CustomFieldList;
  shipGroup?: number;
  itemIsFulfilled?: boolean;
  shipAddress?: PlatformCore.RecordRef;
  shipMethod?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: ItemFulfillmentItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.jobName = props.jobName;
    this.itemReceive = props.itemReceive;
    this.itemName = props.itemName;
    this.description = props.description;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.onHand = props.onHand;
    this.quantity = props.quantity;
    this.unitsDisplay = props.unitsDisplay;
    this.createPo = props.createPo;
    this.inventoryDetail = props.inventoryDetail;
    this.binNumbers = props.binNumbers;
    this.serialNumbers = props.serialNumbers;
    this.poNum = props.poNum;
    this.item = props.item;
    this.orderLine = props.orderLine;
    this.quantityRemaining = props.quantityRemaining;
    this.options = props.options;
    this.shipGroup = props.shipGroup;
    this.itemIsFulfilled = props.itemIsFulfilled;
    this.shipAddress = props.shipAddress;
    this.shipMethod = props.shipMethod;
    this.customFieldList = props.customFieldList;
  }
}

export class ItemFulfillmentPackage extends SoapTypes.Base {
  packageWeight?: number;
  packageDescr?: string;
  packageTrackingNumber?: string;
  constructor(props: ItemFulfillmentPackage) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.packageWeight = props.packageWeight;
    this.packageDescr = props.packageDescr;
    this.packageTrackingNumber = props.packageTrackingNumber;
  }
}

export class OpportunitySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.OpportunitySearchBasic;
  actualJoin?: PlatformCommon.TransactionSearchBasic;
  callJoin?: PlatformCommon.PhoneCallSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  decisionMakerJoin?: PlatformCommon.ContactSearchBasic;
  estimateJoin?: PlatformCommon.TransactionSearchBasic;
  eventJoin?: PlatformCommon.CalendarEventSearchBasic;
  fileJoin?: PlatformCommon.FileSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  leadSourceJoin?: PlatformCommon.CampaignSearchBasic;
  messagesJoin?: PlatformCommon.MessageSearchBasic;
  orderJoin?: PlatformCommon.TransactionSearchBasic;
  originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchBasic;
  partnerJoin?: PlatformCommon.PartnerSearchBasic;
  salesRepJoin?: PlatformCommon.EmployeeSearchBasic;
  taskJoin?: PlatformCommon.TaskSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: OpportunitySearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.actualJoin = props.actualJoin;
    this.callJoin = props.callJoin;
    this.customerJoin = props.customerJoin;
    this.decisionMakerJoin = props.decisionMakerJoin;
    this.estimateJoin = props.estimateJoin;
    this.eventJoin = props.eventJoin;
    this.fileJoin = props.fileJoin;
    this.itemJoin = props.itemJoin;
    this.leadSourceJoin = props.leadSourceJoin;
    this.messagesJoin = props.messagesJoin;
    this.orderJoin = props.orderJoin;
    this.originatingLeadJoin = props.originatingLeadJoin;
    this.partnerJoin = props.partnerJoin;
    this.salesRepJoin = props.salesRepJoin;
    this.taskJoin = props.taskJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class ItemFulfillmentItemList extends SoapTypes.Base {
  item?: ItemFulfillmentItem[];
  replaceAll?: boolean;
  constructor(props: ItemFulfillmentItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export class UsageSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.UsageSearchBasic;
  chargeJoin?: PlatformCommon.ChargeSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  subscriptionPlanJoin?: PlatformCommon.ItemSearchBasic;
  constructor(props: UsageSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.chargeJoin = props.chargeJoin;
    this.customerJoin = props.customerJoin;
    this.itemJoin = props.itemJoin;
    this.subscriptionPlanJoin = props.subscriptionPlanJoin;
  }
}

export class CashSaleItem extends SoapTypes.Base {
  job?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  line?: number;
  quantityAvailable?: number;
  quantityOnHand?: number;
  quantityFulfilled?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  serialNumbers?: string;
  binNumbers?: string;
  description?: string;
  price?: PlatformCore.RecordRef;
  rate?: string;
  amount?: number;
  orderLine?: number;
  licenseCode?: string;
  isTaxable?: boolean;
  options?: PlatformCore.CustomFieldList;
  deferRevRec?: boolean;
  currentPercent?: number;
  department?: PlatformCore.RecordRef;
  percentComplete?: number;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  revRecStartDate?: SoapTypes.Dateish;
  revRecEndDate?: SoapTypes.Dateish;
  subscriptionLine?: PlatformCore.RecordRef;
  grossAmt?: number;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  excludeFromRateRequest?: boolean;
  catchUpPeriod?: PlatformCore.RecordRef;
  costEstimate?: number;
  taxDetailsReference?: string;
  amountOrdered?: number;
  tax1Amt?: number;
  quantityOrdered?: number;
  quantityRemaining?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  giftCertFrom?: string;
  giftCertRecipientName?: string;
  giftCertRecipientEmail?: string;
  giftCertMessage?: string;
  taxAmount?: number;
  giftCertNumber?: string;
  shipGroup?: number;
  itemIsFulfilled?: boolean;
  shipAddress?: PlatformCore.RecordRef;
  shipMethod?: PlatformCore.RecordRef;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeIsEstimate?: boolean;
  vsoePrice?: number;
  vsoeAmount?: number;
  vsoeAllocation?: number;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  chargeType?: PlatformCore.RecordRef;
  chargesList?: PlatformCore.RecordRefList;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: CashSaleItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.job = props.job;
    this.item = props.item;
    this.line = props.line;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityOnHand = props.quantityOnHand;
    this.quantityFulfilled = props.quantityFulfilled;
    this.quantity = props.quantity;
    this.units = props.units;
    this.inventoryDetail = props.inventoryDetail;
    this.serialNumbers = props.serialNumbers;
    this.binNumbers = props.binNumbers;
    this.description = props.description;
    this.price = props.price;
    this.rate = props.rate;
    this.amount = props.amount;
    this.orderLine = props.orderLine;
    this.licenseCode = props.licenseCode;
    this.isTaxable = props.isTaxable;
    this.options = props.options;
    this.deferRevRec = props.deferRevRec;
    this.currentPercent = props.currentPercent;
    this.department = props.department;
    this.percentComplete = props.percentComplete;
    this.clazz = props.clazz;
    this.location = props.location;
    this.revRecSchedule = props.revRecSchedule;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecEndDate = props.revRecEndDate;
    this.subscriptionLine = props.subscriptionLine;
    this.grossAmt = props.grossAmt;
    this.costEstimateType = props.costEstimateType;
    this.excludeFromRateRequest = props.excludeFromRateRequest;
    this.catchUpPeriod = props.catchUpPeriod;
    this.costEstimate = props.costEstimate;
    this.taxDetailsReference = props.taxDetailsReference;
    this.amountOrdered = props.amountOrdered;
    this.tax1Amt = props.tax1Amt;
    this.quantityOrdered = props.quantityOrdered;
    this.quantityRemaining = props.quantityRemaining;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.giftCertFrom = props.giftCertFrom;
    this.giftCertRecipientName = props.giftCertRecipientName;
    this.giftCertRecipientEmail = props.giftCertRecipientEmail;
    this.giftCertMessage = props.giftCertMessage;
    this.taxAmount = props.taxAmount;
    this.giftCertNumber = props.giftCertNumber;
    this.shipGroup = props.shipGroup;
    this.itemIsFulfilled = props.itemIsFulfilled;
    this.shipAddress = props.shipAddress;
    this.shipMethod = props.shipMethod;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeIsEstimate = props.vsoeIsEstimate;
    this.vsoePrice = props.vsoePrice;
    this.vsoeAmount = props.vsoeAmount;
    this.vsoeAllocation = props.vsoeAllocation;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.chargeType = props.chargeType;
    this.chargesList = props.chargesList;
    this.customFieldList = props.customFieldList;
  }
}

export class InvoiceTimeList extends SoapTypes.Base {
  time?: InvoiceTime[];
  replaceAll?: boolean;
  constructor(props: InvoiceTimeList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.time = props.time;
    this.replaceAll = props.replaceAll;
  }
}

export class TransactionSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: TransactionSearch;
  columns?: TransactionSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: TransactionSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class CashSaleExpCostList extends SoapTypes.Base {
  expCost?: CashSaleExpCost[];
  replaceAll?: boolean;
  constructor(props: CashSaleExpCostList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.expCost = props.expCost;
    this.replaceAll = props.replaceAll;
  }
}

export class ItemFulfillmentPackageUpsList extends SoapTypes.Base {
  packageUps?: ItemFulfillmentPackageUps[];
  replaceAll?: boolean;
  constructor(props: ItemFulfillmentPackageUpsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.packageUps = props.packageUps;
    this.replaceAll = props.replaceAll;
  }
}

export class InvoiceItemCostList extends SoapTypes.Base {
  itemCost?: InvoiceItemCost[];
  replaceAll?: boolean;
  constructor(props: InvoiceItemCostList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.itemCost = props.itemCost;
    this.replaceAll = props.replaceAll;
  }
}

export class ItemFulfillment extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  postingPeriod?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  createdFrom?: PlatformCore.RecordRef;
  requestedBy?: PlatformCore.RecordRef;
  createdFromShipGroup?: number;
  partner?: PlatformCore.RecordRef;
  shippingAddress?: PlatformCommon.Address;
  pickedDate?: SoapTypes.Dateish;
  packedDate?: SoapTypes.Dateish;
  shippedDate?: SoapTypes.Dateish;
  shipIsResidential?: boolean;
  shipAddressList?: PlatformCore.RecordRef;
  shipStatus?: TransactionsSalesTypes.ItemFulfillmentShipStatus;
  saturdayDeliveryUps?: boolean;
  sendShipNotifyEmailUps?: boolean;
  sendBackupEmailUps?: boolean;
  shipNotifyEmailAddressUps?: string;
  shipNotifyEmailAddress2Ups?: string;
  backupEmailAddressUps?: string;
  shipNotifyEmailMessageUps?: string;
  thirdPartyAcctUps?: string;
  thirdPartyZipcodeUps?: string;
  thirdPartyCountryUps?: PlatformCommonTypes.Country;
  thirdPartyTypeUps?: TransactionsSalesTypes.ItemFulfillmentThirdPartyTypeUps;
  partiesToTransactionUps?: boolean;
  exportTypeUps?: TransactionsSalesTypes.ItemFulfillmentExportTypeUps;
  methodOfTransportUps?: TransactionsSalesTypes.ItemFulfillmentMethodOfTransportUps;
  carrierIdUps?: string;
  entryNumberUps?: string;
  inbondCodeUps?: string;
  isRoutedExportTransactionUps?: boolean;
  licenseNumberUps?: string;
  licenseDateUps?: SoapTypes.Dateish;
  licenseExceptionUps?: TransactionsSalesTypes.ItemFulfillmentLicenseExceptionUps;
  eccNumberUps?: string;
  recipientTaxIdUps?: string;
  blanketStartDateUps?: SoapTypes.Dateish;
  blanketEndDateUps?: SoapTypes.Dateish;
  shipmentWeightUps?: number;
  saturdayDeliveryFedEx?: boolean;
  saturdayPickupFedex?: boolean;
  sendShipNotifyEmailFedEx?: boolean;
  sendBackupEmailFedEx?: boolean;
  signatureHomeDeliveryFedEx?: boolean;
  shipNotifyEmailAddressFedEx?: string;
  backupEmailAddressFedEx?: string;
  shipDateFedEx?: SoapTypes.Dateish;
  homeDeliveryTypeFedEx?: TransactionsSalesTypes.ItemFulfillmentHomeDeliveryTypeFedEx;
  homeDeliveryDateFedEx?: SoapTypes.Dateish;
  bookingConfirmationNumFedEx?: string;
  intlExemptionNumFedEx?: string;
  b13AFilingOptionFedEx?: TransactionsSalesTypes.ItemFulfillmentB13AFilingOptionFedEx;
  b13AStatementDataFedEx?: string;
  thirdPartyAcctFedEx?: string;
  thirdPartyCountryFedEx?: PlatformCommonTypes.Country;
  thirdPartyTypeFedEx?: TransactionsSalesTypes.ItemFulfillmentThirdPartyTypeFedEx;
  shipmentWeightFedEx?: number;
  termsOfSaleFedEx?: TransactionsSalesTypes.ItemFulfillmentTermsOfSaleFedEx;
  termsFreightChargeFedEx?: number;
  termsInsuranceChargeFedEx?: number;
  insideDeliveryFedEx?: boolean;
  insidePickupFedEx?: boolean;
  ancillaryEndorsementFedEx?: TransactionsSalesTypes.ItemFulfillmentAncillaryEndorsementFedEx;
  holdAtLocationFedEx?: boolean;
  halPhoneFedEx?: string;
  halAddr1FedEx?: string;
  halAddr2FedEx?: string;
  halAddr3FedEx?: string;
  halCityFedEx?: string;
  halZipFedEx?: string;
  halStateFedEx?: string;
  halCountryFedEx?: string;
  hazmatTypeFedEx?: TransactionsSalesTypes.ItemFulfillmentHazmatTypeFedEx;
  accessibilityTypeFedEx?: TransactionsSalesTypes.ItemFulfillmentAccessibilityTypeFedEx;
  isCargoAircraftOnlyFedEx?: boolean;
  tranDate?: SoapTypes.Dateish;
  tranId?: string;
  shipMethod?: PlatformCore.RecordRef;
  generateIntegratedShipperLabel?: boolean;
  shippingCost?: number;
  handlingCost?: number;
  memo?: string;
  transferLocation?: PlatformCore.RecordRef;
  packageList?: ItemFulfillmentPackageList;
  packageUpsList?: ItemFulfillmentPackageUpsList;
  packageUspsList?: ItemFulfillmentPackageUspsList;
  packageFedExList?: ItemFulfillmentPackageFedExList;
  itemList?: ItemFulfillmentItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: ItemFulfillment) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.postingPeriod = props.postingPeriod;
    this.entity = props.entity;
    this.createdFrom = props.createdFrom;
    this.requestedBy = props.requestedBy;
    this.createdFromShipGroup = props.createdFromShipGroup;
    this.partner = props.partner;
    this.shippingAddress = props.shippingAddress;
    this.pickedDate = props.pickedDate;
    this.packedDate = props.packedDate;
    this.shippedDate = props.shippedDate;
    this.shipIsResidential = props.shipIsResidential;
    this.shipAddressList = props.shipAddressList;
    this.shipStatus = props.shipStatus;
    this.saturdayDeliveryUps = props.saturdayDeliveryUps;
    this.sendShipNotifyEmailUps = props.sendShipNotifyEmailUps;
    this.sendBackupEmailUps = props.sendBackupEmailUps;
    this.shipNotifyEmailAddressUps = props.shipNotifyEmailAddressUps;
    this.shipNotifyEmailAddress2Ups = props.shipNotifyEmailAddress2Ups;
    this.backupEmailAddressUps = props.backupEmailAddressUps;
    this.shipNotifyEmailMessageUps = props.shipNotifyEmailMessageUps;
    this.thirdPartyAcctUps = props.thirdPartyAcctUps;
    this.thirdPartyZipcodeUps = props.thirdPartyZipcodeUps;
    this.thirdPartyCountryUps = props.thirdPartyCountryUps;
    this.thirdPartyTypeUps = props.thirdPartyTypeUps;
    this.partiesToTransactionUps = props.partiesToTransactionUps;
    this.exportTypeUps = props.exportTypeUps;
    this.methodOfTransportUps = props.methodOfTransportUps;
    this.carrierIdUps = props.carrierIdUps;
    this.entryNumberUps = props.entryNumberUps;
    this.inbondCodeUps = props.inbondCodeUps;
    this.isRoutedExportTransactionUps = props.isRoutedExportTransactionUps;
    this.licenseNumberUps = props.licenseNumberUps;
    this.licenseDateUps = props.licenseDateUps;
    this.licenseExceptionUps = props.licenseExceptionUps;
    this.eccNumberUps = props.eccNumberUps;
    this.recipientTaxIdUps = props.recipientTaxIdUps;
    this.blanketStartDateUps = props.blanketStartDateUps;
    this.blanketEndDateUps = props.blanketEndDateUps;
    this.shipmentWeightUps = props.shipmentWeightUps;
    this.saturdayDeliveryFedEx = props.saturdayDeliveryFedEx;
    this.saturdayPickupFedex = props.saturdayPickupFedex;
    this.sendShipNotifyEmailFedEx = props.sendShipNotifyEmailFedEx;
    this.sendBackupEmailFedEx = props.sendBackupEmailFedEx;
    this.signatureHomeDeliveryFedEx = props.signatureHomeDeliveryFedEx;
    this.shipNotifyEmailAddressFedEx = props.shipNotifyEmailAddressFedEx;
    this.backupEmailAddressFedEx = props.backupEmailAddressFedEx;
    this.shipDateFedEx = props.shipDateFedEx;
    this.homeDeliveryTypeFedEx = props.homeDeliveryTypeFedEx;
    this.homeDeliveryDateFedEx = props.homeDeliveryDateFedEx;
    this.bookingConfirmationNumFedEx = props.bookingConfirmationNumFedEx;
    this.intlExemptionNumFedEx = props.intlExemptionNumFedEx;
    this.b13AFilingOptionFedEx = props.b13AFilingOptionFedEx;
    this.b13AStatementDataFedEx = props.b13AStatementDataFedEx;
    this.thirdPartyAcctFedEx = props.thirdPartyAcctFedEx;
    this.thirdPartyCountryFedEx = props.thirdPartyCountryFedEx;
    this.thirdPartyTypeFedEx = props.thirdPartyTypeFedEx;
    this.shipmentWeightFedEx = props.shipmentWeightFedEx;
    this.termsOfSaleFedEx = props.termsOfSaleFedEx;
    this.termsFreightChargeFedEx = props.termsFreightChargeFedEx;
    this.termsInsuranceChargeFedEx = props.termsInsuranceChargeFedEx;
    this.insideDeliveryFedEx = props.insideDeliveryFedEx;
    this.insidePickupFedEx = props.insidePickupFedEx;
    this.ancillaryEndorsementFedEx = props.ancillaryEndorsementFedEx;
    this.holdAtLocationFedEx = props.holdAtLocationFedEx;
    this.halPhoneFedEx = props.halPhoneFedEx;
    this.halAddr1FedEx = props.halAddr1FedEx;
    this.halAddr2FedEx = props.halAddr2FedEx;
    this.halAddr3FedEx = props.halAddr3FedEx;
    this.halCityFedEx = props.halCityFedEx;
    this.halZipFedEx = props.halZipFedEx;
    this.halStateFedEx = props.halStateFedEx;
    this.halCountryFedEx = props.halCountryFedEx;
    this.hazmatTypeFedEx = props.hazmatTypeFedEx;
    this.accessibilityTypeFedEx = props.accessibilityTypeFedEx;
    this.isCargoAircraftOnlyFedEx = props.isCargoAircraftOnlyFedEx;
    this.tranDate = props.tranDate;
    this.tranId = props.tranId;
    this.shipMethod = props.shipMethod;
    this.generateIntegratedShipperLabel = props.generateIntegratedShipperLabel;
    this.shippingCost = props.shippingCost;
    this.handlingCost = props.handlingCost;
    this.memo = props.memo;
    this.transferLocation = props.transferLocation;
    this.packageList = props.packageList;
    this.packageUpsList = props.packageUpsList;
    this.packageUspsList = props.packageUspsList;
    this.packageFedExList = props.packageFedExList;
    this.itemList = props.itemList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class OpportunitySalesTeam extends SoapTypes.Base {
  employee?: PlatformCore.RecordRef;
  salesRole?: PlatformCore.RecordRef;
  isPrimary?: boolean;
  contribution?: number;
  constructor(props: OpportunitySalesTeam) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employee = props.employee;
    this.salesRole = props.salesRole;
    this.isPrimary = props.isPrimary;
    this.contribution = props.contribution;
  }
}

export class ItemFulfillmentPackageUsps extends SoapTypes.Base {
  packageWeightUsps?: number;
  packageDescrUsps?: string;
  packageTrackingNumberUsps?: string;
  packagingUsps?: TransactionsSalesTypes.ItemFulfillmentPackageUspsPackagingUsps;
  useInsuredValueUsps?: boolean;
  insuredValueUsps?: number;
  reference1Usps?: string;
  reference2Usps?: string;
  packageLengthUsps?: number;
  packageWidthUsps?: number;
  packageHeightUsps?: number;
  deliveryConfUsps?: TransactionsSalesTypes.ItemFulfillmentPackageUspsDeliveryConfUsps;
  constructor(props: ItemFulfillmentPackageUsps) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.packageWeightUsps = props.packageWeightUsps;
    this.packageDescrUsps = props.packageDescrUsps;
    this.packageTrackingNumberUsps = props.packageTrackingNumberUsps;
    this.packagingUsps = props.packagingUsps;
    this.useInsuredValueUsps = props.useInsuredValueUsps;
    this.insuredValueUsps = props.insuredValueUsps;
    this.reference1Usps = props.reference1Usps;
    this.reference2Usps = props.reference2Usps;
    this.packageLengthUsps = props.packageLengthUsps;
    this.packageWidthUsps = props.packageWidthUsps;
    this.packageHeightUsps = props.packageHeightUsps;
    this.deliveryConfUsps = props.deliveryConfUsps;
  }
}

export class InvoiceTime extends SoapTypes.Base {
  apply?: boolean;
  doc?: number;
  line?: number;
  billedDate?: SoapTypes.Dateish;
  employeeDisp?: string;
  itemDisp?: string;
  jobDisp?: string;
  department?: string;
  clazz?: string;
  location?: string;
  quantity?: string;
  rate?: number;
  unitDisp?: string;
  amount?: number;
  memo?: string;
  taxAmount?: number;
  revRecSchedule?: PlatformCore.RecordRef;
  revRecStartDate?: SoapTypes.Dateish;
  revRecEndDate?: SoapTypes.Dateish;
  grossAmt?: number;
  taxDetailsReference?: string;
  tax1Amt?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  constructor(props: InvoiceTime) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.apply = props.apply;
    this.doc = props.doc;
    this.line = props.line;
    this.billedDate = props.billedDate;
    this.employeeDisp = props.employeeDisp;
    this.itemDisp = props.itemDisp;
    this.jobDisp = props.jobDisp;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.quantity = props.quantity;
    this.rate = props.rate;
    this.unitDisp = props.unitDisp;
    this.amount = props.amount;
    this.memo = props.memo;
    this.taxAmount = props.taxAmount;
    this.revRecSchedule = props.revRecSchedule;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecEndDate = props.revRecEndDate;
    this.grossAmt = props.grossAmt;
    this.taxDetailsReference = props.taxDetailsReference;
    this.tax1Amt = props.tax1Amt;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
  }
}

export class EstimateItem extends SoapTypes.Base {
  job?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  line?: number;
  expandItemGroup?: boolean;
  quantityAvailable?: number;
  quantityOnHand?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  description?: string;
  serialNumbers?: string;
  price?: PlatformCore.RecordRef;
  rate?: string;
  amount?: number;
  options?: PlatformCore.CustomFieldList;
  revRecTermInMonths?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  isTaxable?: boolean;
  altSalesAmt?: number;
  taxAmount?: number;
  fromJob?: boolean;
  grossAmt?: number;
  isEstimate?: boolean;
  subscription?: PlatformCore.RecordRef;
  tax1Amt?: number;
  taxCode?: PlatformCore.RecordRef;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  excludeFromRateRequest?: boolean;
  taxDetailsReference?: string;
  taxRate1?: number;
  taxRate2?: number;
  shipGroup?: number;
  itemIsFulfilled?: boolean;
  shipAddress?: PlatformCore.RecordRef;
  shipMethod?: PlatformCore.RecordRef;
  expectedShipDate?: SoapTypes.Dateish;
  chargeType?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: EstimateItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.job = props.job;
    this.item = props.item;
    this.line = props.line;
    this.expandItemGroup = props.expandItemGroup;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityOnHand = props.quantityOnHand;
    this.quantity = props.quantity;
    this.units = props.units;
    this.description = props.description;
    this.serialNumbers = props.serialNumbers;
    this.price = props.price;
    this.rate = props.rate;
    this.amount = props.amount;
    this.options = props.options;
    this.revRecTermInMonths = props.revRecTermInMonths;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.isTaxable = props.isTaxable;
    this.altSalesAmt = props.altSalesAmt;
    this.taxAmount = props.taxAmount;
    this.fromJob = props.fromJob;
    this.grossAmt = props.grossAmt;
    this.isEstimate = props.isEstimate;
    this.subscription = props.subscription;
    this.tax1Amt = props.tax1Amt;
    this.taxCode = props.taxCode;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.excludeFromRateRequest = props.excludeFromRateRequest;
    this.taxDetailsReference = props.taxDetailsReference;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.shipGroup = props.shipGroup;
    this.itemIsFulfilled = props.itemIsFulfilled;
    this.shipAddress = props.shipAddress;
    this.shipMethod = props.shipMethod;
    this.expectedShipDate = props.expectedShipDate;
    this.chargeType = props.chargeType;
    this.customFieldList = props.customFieldList;
  }
}

export class ItemFulfillmentPackageList extends SoapTypes.Base {
  _package?: ItemFulfillmentPackage[];
  replaceAll?: boolean;
  constructor(props: ItemFulfillmentPackageList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this._package = props._package;
    this.replaceAll = props.replaceAll;
  }
}

export class SalesOrder extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  job?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  drAccount?: PlatformCore.RecordRef;
  fxAccount?: PlatformCore.RecordRef;
  tranDate?: SoapTypes.Dateish;
  tranId?: string;
  entityTaxRegNum?: PlatformCore.RecordRef;
  source?: string;
  createdFrom?: PlatformCore.RecordRef;
  orderStatus?: TransactionsSalesTypes.SalesOrderOrderStatus;
  nextBill?: SoapTypes.Dateish;
  opportunity?: PlatformCore.RecordRef;
  salesRep?: PlatformCore.RecordRef;
  contribPct?: string;
  partner?: PlatformCore.RecordRef;
  salesGroup?: PlatformCore.RecordRef;
  syncSalesTeams?: boolean;
  leadSource?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  otherRefNum?: string;
  memo?: string;
  salesEffectiveDate?: SoapTypes.Dateish;
  excludeCommission?: boolean;
  totalCostEstimate?: number;
  estGrossProfit?: number;
  estGrossProfitPercent?: number;
  exchangeRate?: number;
  promoCode?: PlatformCore.RecordRef;
  currencyName?: string;
  discountItem?: PlatformCore.RecordRef;
  discountRate?: string;
  isTaxable?: boolean;
  taxItem?: PlatformCore.RecordRef;
  taxRate?: number;
  toBePrinted?: boolean;
  toBeEmailed?: boolean;
  email?: string;
  toBeFaxed?: boolean;
  fax?: string;
  messageSel?: PlatformCore.RecordRef;
  message?: string;
  paymentOption?: PlatformCore.RecordRef;
  inputAuthCode?: string;
  inputReferenceCode?: string;
  checkNumber?: string;
  paymentCardCsc?: string;
  paymentProcessingProfile?: PlatformCore.RecordRef;
  handlingMode?: TransactionsSalesTypes.SalesOrderHandlingMode;
  outputAuthCode?: string;
  outputReferenceCode?: string;
  paymentOperation?: TransactionsSalesTypes.SalesOrderPaymentOperation;
  dynamicDescriptor?: string;
  billingAddress?: PlatformCommon.Address;
  billAddressList?: PlatformCore.RecordRef;
  shippingAddress?: PlatformCommon.Address;
  shipIsResidential?: boolean;
  shipAddressList?: PlatformCore.RecordRef;
  fob?: string;
  shipDate?: SoapTypes.Dateish;
  actualShipDate?: SoapTypes.Dateish;
  shipMethod?: PlatformCore.RecordRef;
  shippingCost?: number;
  shippingTax1Rate?: number;
  isMultiShipTo?: boolean;
  shippingTax2Rate?: string;
  shippingTaxCode?: PlatformCore.RecordRef;
  handlingTaxCode?: PlatformCore.RecordRef;
  handlingTax1Rate?: number;
  handlingTax2Rate?: string;
  handlingCost?: number;
  trackingNumbers?: string;
  linkedTrackingNumbers?: string;
  shipComplete?: boolean;
  paymentMethod?: PlatformCore.RecordRef;
  shopperIpAddress?: string;
  saveOnAuthDecline?: boolean;
  canHaveStackable?: boolean;
  creditCard?: PlatformCore.RecordRef;
  revenueStatus?: PlatformCommonTypes.RevenueStatus;
  recognizedRevenue?: number;
  deferredRevenue?: number;
  revRecOnRevCommitment?: boolean;
  revCommitStatus?: PlatformCommonTypes.RevenueCommitStatus;
  ccNumber?: string;
  ccExpireDate?: SoapTypes.Dateish;
  ccName?: string;
  ccStreet?: string;
  ccZipCode?: string;
  payPalStatus?: string;
  creditCardProcessor?: PlatformCore.RecordRef;
  payPalTranId?: string;
  ccApproved?: boolean;
  getAuth?: boolean;
  authCode?: string;
  ccAvsStreetMatch?: PlatformCommonTypes.AvsMatchCode;
  ccAvsZipMatch?: PlatformCommonTypes.AvsMatchCode;
  isRecurringPayment?: boolean;
  ccSecurityCodeMatch?: PlatformCommonTypes.AvsMatchCode;
  altSalesTotal?: number;
  ignoreAvs?: boolean;
  paymentEventResult?: TransactionsSalesTypes.TransactionPaymentEventResult;
  paymentEventHoldReason?: TransactionsSalesTypes.TransactionPaymentEventHoldReason;
  paymentEventType?: TransactionsSalesTypes.TransactionPaymentEventType;
  paymentEventDate?: SoapTypes.Dateish;
  paymentEventUpdatedBy?: string;
  subTotal?: number;
  discountTotal?: number;
  taxTotal?: number;
  altShippingCost?: number;
  altHandlingCost?: number;
  total?: number;
  revRecSchedule?: PlatformCore.RecordRef;
  revRecStartDate?: SoapTypes.Dateish;
  revRecEndDate?: SoapTypes.Dateish;
  paypalAuthId?: string;
  balance?: number;
  paypalProcess?: boolean;
  billingSchedule?: PlatformCore.RecordRef;
  ccSecurityCode?: string;
  threeDStatusCode?: string;
  clazz?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  intercoTransaction?: PlatformCore.RecordRef;
  intercoStatus?: PlatformCommonTypes.IntercoStatus;
  debitCardIssueNo?: string;
  lastModifiedDate?: SoapTypes.Dateish;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxPointDate?: SoapTypes.Dateish;
  taxDetailsOverride?: boolean;
  location?: PlatformCore.RecordRef;
  pnRefNum?: string;
  status?: string;
  tax2Total?: number;
  terms?: PlatformCore.RecordRef;
  validFrom?: SoapTypes.Dateish;
  vatRegNum?: string;
  giftCertApplied?: number;
  oneTime?: number;
  recurWeekly?: number;
  recurMonthly?: number;
  recurQuarterly?: number;
  recurAnnually?: number;
  tranIsVsoeBundle?: boolean;
  vsoeAutoCalc?: boolean;
  syncPartnerTeams?: boolean;
  salesTeamList?: SalesOrderSalesTeamList;
  partnersList?: SalesOrderPartnersList;
  giftCertRedemptionList?: PlatformCommon.GiftCertRedemptionList;
  promotionsList?: PromotionsList;
  itemList?: SalesOrderItemList;
  shipGroupList?: SalesOrderShipGroupList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: SalesOrder) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.customForm = props.customForm;
    this.entity = props.entity;
    this.job = props.job;
    this.currency = props.currency;
    this.drAccount = props.drAccount;
    this.fxAccount = props.fxAccount;
    this.tranDate = props.tranDate;
    this.tranId = props.tranId;
    this.entityTaxRegNum = props.entityTaxRegNum;
    this.source = props.source;
    this.createdFrom = props.createdFrom;
    this.orderStatus = props.orderStatus;
    this.nextBill = props.nextBill;
    this.opportunity = props.opportunity;
    this.salesRep = props.salesRep;
    this.contribPct = props.contribPct;
    this.partner = props.partner;
    this.salesGroup = props.salesGroup;
    this.syncSalesTeams = props.syncSalesTeams;
    this.leadSource = props.leadSource;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.otherRefNum = props.otherRefNum;
    this.memo = props.memo;
    this.salesEffectiveDate = props.salesEffectiveDate;
    this.excludeCommission = props.excludeCommission;
    this.totalCostEstimate = props.totalCostEstimate;
    this.estGrossProfit = props.estGrossProfit;
    this.estGrossProfitPercent = props.estGrossProfitPercent;
    this.exchangeRate = props.exchangeRate;
    this.promoCode = props.promoCode;
    this.currencyName = props.currencyName;
    this.discountItem = props.discountItem;
    this.discountRate = props.discountRate;
    this.isTaxable = props.isTaxable;
    this.taxItem = props.taxItem;
    this.taxRate = props.taxRate;
    this.toBePrinted = props.toBePrinted;
    this.toBeEmailed = props.toBeEmailed;
    this.email = props.email;
    this.toBeFaxed = props.toBeFaxed;
    this.fax = props.fax;
    this.messageSel = props.messageSel;
    this.message = props.message;
    this.paymentOption = props.paymentOption;
    this.inputAuthCode = props.inputAuthCode;
    this.inputReferenceCode = props.inputReferenceCode;
    this.checkNumber = props.checkNumber;
    this.paymentCardCsc = props.paymentCardCsc;
    this.paymentProcessingProfile = props.paymentProcessingProfile;
    this.handlingMode = props.handlingMode;
    this.outputAuthCode = props.outputAuthCode;
    this.outputReferenceCode = props.outputReferenceCode;
    this.paymentOperation = props.paymentOperation;
    this.dynamicDescriptor = props.dynamicDescriptor;
    this.billingAddress = props.billingAddress;
    this.billAddressList = props.billAddressList;
    this.shippingAddress = props.shippingAddress;
    this.shipIsResidential = props.shipIsResidential;
    this.shipAddressList = props.shipAddressList;
    this.fob = props.fob;
    this.shipDate = props.shipDate;
    this.actualShipDate = props.actualShipDate;
    this.shipMethod = props.shipMethod;
    this.shippingCost = props.shippingCost;
    this.shippingTax1Rate = props.shippingTax1Rate;
    this.isMultiShipTo = props.isMultiShipTo;
    this.shippingTax2Rate = props.shippingTax2Rate;
    this.shippingTaxCode = props.shippingTaxCode;
    this.handlingTaxCode = props.handlingTaxCode;
    this.handlingTax1Rate = props.handlingTax1Rate;
    this.handlingTax2Rate = props.handlingTax2Rate;
    this.handlingCost = props.handlingCost;
    this.trackingNumbers = props.trackingNumbers;
    this.linkedTrackingNumbers = props.linkedTrackingNumbers;
    this.shipComplete = props.shipComplete;
    this.paymentMethod = props.paymentMethod;
    this.shopperIpAddress = props.shopperIpAddress;
    this.saveOnAuthDecline = props.saveOnAuthDecline;
    this.canHaveStackable = props.canHaveStackable;
    this.creditCard = props.creditCard;
    this.revenueStatus = props.revenueStatus;
    this.recognizedRevenue = props.recognizedRevenue;
    this.deferredRevenue = props.deferredRevenue;
    this.revRecOnRevCommitment = props.revRecOnRevCommitment;
    this.revCommitStatus = props.revCommitStatus;
    this.ccNumber = props.ccNumber;
    this.ccExpireDate = props.ccExpireDate;
    this.ccName = props.ccName;
    this.ccStreet = props.ccStreet;
    this.ccZipCode = props.ccZipCode;
    this.payPalStatus = props.payPalStatus;
    this.creditCardProcessor = props.creditCardProcessor;
    this.payPalTranId = props.payPalTranId;
    this.ccApproved = props.ccApproved;
    this.getAuth = props.getAuth;
    this.authCode = props.authCode;
    this.ccAvsStreetMatch = props.ccAvsStreetMatch;
    this.ccAvsZipMatch = props.ccAvsZipMatch;
    this.isRecurringPayment = props.isRecurringPayment;
    this.ccSecurityCodeMatch = props.ccSecurityCodeMatch;
    this.altSalesTotal = props.altSalesTotal;
    this.ignoreAvs = props.ignoreAvs;
    this.paymentEventResult = props.paymentEventResult;
    this.paymentEventHoldReason = props.paymentEventHoldReason;
    this.paymentEventType = props.paymentEventType;
    this.paymentEventDate = props.paymentEventDate;
    this.paymentEventUpdatedBy = props.paymentEventUpdatedBy;
    this.subTotal = props.subTotal;
    this.discountTotal = props.discountTotal;
    this.taxTotal = props.taxTotal;
    this.altShippingCost = props.altShippingCost;
    this.altHandlingCost = props.altHandlingCost;
    this.total = props.total;
    this.revRecSchedule = props.revRecSchedule;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecEndDate = props.revRecEndDate;
    this.paypalAuthId = props.paypalAuthId;
    this.balance = props.balance;
    this.paypalProcess = props.paypalProcess;
    this.billingSchedule = props.billingSchedule;
    this.ccSecurityCode = props.ccSecurityCode;
    this.threeDStatusCode = props.threeDStatusCode;
    this.clazz = props.clazz;
    this.department = props.department;
    this.subsidiary = props.subsidiary;
    this.intercoTransaction = props.intercoTransaction;
    this.intercoStatus = props.intercoStatus;
    this.debitCardIssueNo = props.debitCardIssueNo;
    this.lastModifiedDate = props.lastModifiedDate;
    this.nexus = props.nexus;
    this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
    this.taxRegOverride = props.taxRegOverride;
    this.taxPointDate = props.taxPointDate;
    this.taxDetailsOverride = props.taxDetailsOverride;
    this.location = props.location;
    this.pnRefNum = props.pnRefNum;
    this.status = props.status;
    this.tax2Total = props.tax2Total;
    this.terms = props.terms;
    this.validFrom = props.validFrom;
    this.vatRegNum = props.vatRegNum;
    this.giftCertApplied = props.giftCertApplied;
    this.oneTime = props.oneTime;
    this.recurWeekly = props.recurWeekly;
    this.recurMonthly = props.recurMonthly;
    this.recurQuarterly = props.recurQuarterly;
    this.recurAnnually = props.recurAnnually;
    this.tranIsVsoeBundle = props.tranIsVsoeBundle;
    this.vsoeAutoCalc = props.vsoeAutoCalc;
    this.syncPartnerTeams = props.syncPartnerTeams;
    this.salesTeamList = props.salesTeamList;
    this.partnersList = props.partnersList;
    this.giftCertRedemptionList = props.giftCertRedemptionList;
    this.promotionsList = props.promotionsList;
    this.itemList = props.itemList;
    this.shipGroupList = props.shipGroupList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.taxDetailsList = props.taxDetailsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ItemFulfillmentPackageFedExList extends SoapTypes.Base {
  packageFedEx?: ItemFulfillmentPackageFedEx[];
  replaceAll?: boolean;
  constructor(props: ItemFulfillmentPackageFedExList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.packageFedEx = props.packageFedEx;
    this.replaceAll = props.replaceAll;
  }
}

export class InvoiceSalesTeamList extends SoapTypes.Base {
  salesTeam?: InvoiceSalesTeam[];
  replaceAll?: boolean;
  constructor(props: InvoiceSalesTeamList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.salesTeam = props.salesTeam;
    this.replaceAll = props.replaceAll;
  }
}

export class EstimateSalesTeam extends SoapTypes.Base {
  employee?: PlatformCore.RecordRef;
  salesRole?: PlatformCore.RecordRef;
  isPrimary?: boolean;
  contribution?: number;
  constructor(props: EstimateSalesTeam) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employee = props.employee;
    this.salesRole = props.salesRole;
    this.isPrimary = props.isPrimary;
    this.contribution = props.contribution;
  }
}

export class InvoiceExpCostList extends SoapTypes.Base {
  expCost?: InvoiceExpCost[];
  replaceAll?: boolean;
  constructor(props: InvoiceExpCostList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.expCost = props.expCost;
    this.replaceAll = props.replaceAll;
  }
}

export class CashSaleTime extends SoapTypes.Base {
  apply?: boolean;
  doc?: number;
  line?: number;
  billedDate?: SoapTypes.Dateish;
  employeeDisp?: string;
  itemDisp?: string;
  jobDisp?: string;
  department?: string;
  clazz?: string;
  location?: string;
  quantity?: string;
  rate?: number;
  unitDisp?: string;
  amount?: number;
  memo?: string;
  taxAmount?: number;
  revRecSchedule?: PlatformCore.RecordRef;
  revRecStartDate?: SoapTypes.Dateish;
  revRecEndDate?: SoapTypes.Dateish;
  grossAmt?: number;
  taxDetailsReference?: string;
  tax1Amt?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  constructor(props: CashSaleTime) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.apply = props.apply;
    this.doc = props.doc;
    this.line = props.line;
    this.billedDate = props.billedDate;
    this.employeeDisp = props.employeeDisp;
    this.itemDisp = props.itemDisp;
    this.jobDisp = props.jobDisp;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.quantity = props.quantity;
    this.rate = props.rate;
    this.unitDisp = props.unitDisp;
    this.amount = props.amount;
    this.memo = props.memo;
    this.taxAmount = props.taxAmount;
    this.revRecSchedule = props.revRecSchedule;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecEndDate = props.revRecEndDate;
    this.grossAmt = props.grossAmt;
    this.taxDetailsReference = props.taxDetailsReference;
    this.tax1Amt = props.tax1Amt;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
  }
}

export class OpportunityItem extends SoapTypes.Base {
  job?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  line?: number;
  quantityAvailable?: number;
  quantityOnHand?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  description?: string;
  price?: PlatformCore.RecordRef;
  rate?: string;
  amount?: number;
  altSalesAmt?: number;
  revRecTermInMonths?: number;
  options?: PlatformCore.CustomFieldList;
  fromJob?: boolean;
  department?: PlatformCore.RecordRef;
  isEstimate?: boolean;
  location?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  taxAmount?: number;
  taxDetailsReference?: string;
  grossAmt?: number;
  tax1Amt?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  expectedShipDate?: SoapTypes.Dateish;
  subscription?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: OpportunityItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.job = props.job;
    this.item = props.item;
    this.line = props.line;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityOnHand = props.quantityOnHand;
    this.quantity = props.quantity;
    this.units = props.units;
    this.description = props.description;
    this.price = props.price;
    this.rate = props.rate;
    this.amount = props.amount;
    this.altSalesAmt = props.altSalesAmt;
    this.revRecTermInMonths = props.revRecTermInMonths;
    this.options = props.options;
    this.fromJob = props.fromJob;
    this.department = props.department;
    this.isEstimate = props.isEstimate;
    this.location = props.location;
    this.clazz = props.clazz;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.taxAmount = props.taxAmount;
    this.taxDetailsReference = props.taxDetailsReference;
    this.grossAmt = props.grossAmt;
    this.tax1Amt = props.tax1Amt;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.expectedShipDate = props.expectedShipDate;
    this.subscription = props.subscription;
    this.customFieldList = props.customFieldList;
  }
}

export class InvoiceItem extends SoapTypes.Base {
  job?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  line?: number;
  description?: string;
  amount?: number;
  isTaxable?: boolean;
  options?: PlatformCore.CustomFieldList;
  subscriptionLine?: PlatformCore.RecordRef;
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
  quantityOrdered?: number;
  quantityRemaining?: number;
  quantityFulfilled?: number;
  amountOrdered?: number;
  department?: PlatformCore.RecordRef;
  orderLine?: number;
  licenseCode?: string;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  revRecStartDate?: SoapTypes.Dateish;
  revRecEndDate?: SoapTypes.Dateish;
  grossAmt?: number;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  taxDetailsReference?: string;
  excludeFromRateRequest?: boolean;
  catchUpPeriod?: PlatformCore.RecordRef;
  tax1Amt?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  giftCertFrom?: string;
  giftCertRecipientName?: string;
  giftCertRecipientEmail?: string;
  giftCertMessage?: string;
  taxAmount?: number;
  giftCertNumber?: string;
  shipGroup?: number;
  itemIsFulfilled?: boolean;
  shipAddress?: PlatformCore.RecordRef;
  shipMethod?: PlatformCore.RecordRef;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeIsEstimate?: boolean;
  vsoePrice?: number;
  vsoeAmount?: number;
  vsoeAllocation?: number;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  chargeType?: PlatformCore.RecordRef;
  chargesList?: PlatformCore.RecordRefList;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: InvoiceItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.job = props.job;
    this.item = props.item;
    this.line = props.line;
    this.description = props.description;
    this.amount = props.amount;
    this.isTaxable = props.isTaxable;
    this.options = props.options;
    this.subscriptionLine = props.subscriptionLine;
    this.deferRevRec = props.deferRevRec;
    this.quantity = props.quantity;
    this.currentPercent = props.currentPercent;
    this.units = props.units;
    this.inventoryDetail = props.inventoryDetail;
    this.serialNumbers = props.serialNumbers;
    this.binNumbers = props.binNumbers;
    this.price = props.price;
    this.rate = props.rate;
    this.percentComplete = props.percentComplete;
    this.quantityOnHand = props.quantityOnHand;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityOrdered = props.quantityOrdered;
    this.quantityRemaining = props.quantityRemaining;
    this.quantityFulfilled = props.quantityFulfilled;
    this.amountOrdered = props.amountOrdered;
    this.department = props.department;
    this.orderLine = props.orderLine;
    this.licenseCode = props.licenseCode;
    this.clazz = props.clazz;
    this.location = props.location;
    this.revRecSchedule = props.revRecSchedule;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecEndDate = props.revRecEndDate;
    this.grossAmt = props.grossAmt;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.taxDetailsReference = props.taxDetailsReference;
    this.excludeFromRateRequest = props.excludeFromRateRequest;
    this.catchUpPeriod = props.catchUpPeriod;
    this.tax1Amt = props.tax1Amt;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.giftCertFrom = props.giftCertFrom;
    this.giftCertRecipientName = props.giftCertRecipientName;
    this.giftCertRecipientEmail = props.giftCertRecipientEmail;
    this.giftCertMessage = props.giftCertMessage;
    this.taxAmount = props.taxAmount;
    this.giftCertNumber = props.giftCertNumber;
    this.shipGroup = props.shipGroup;
    this.itemIsFulfilled = props.itemIsFulfilled;
    this.shipAddress = props.shipAddress;
    this.shipMethod = props.shipMethod;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeIsEstimate = props.vsoeIsEstimate;
    this.vsoePrice = props.vsoePrice;
    this.vsoeAmount = props.vsoeAmount;
    this.vsoeAllocation = props.vsoeAllocation;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.chargeType = props.chargeType;
    this.chargesList = props.chargesList;
    this.customFieldList = props.customFieldList;
  }
}

export class AccountingTransactionSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.AccountingTransactionSearchBasic;
  accountJoin?: PlatformCommon.AccountSearchBasic;
  revRecScheduleJoin?: PlatformCommon.RevRecScheduleSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  constructor(props: AccountingTransactionSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.accountJoin = props.accountJoin;
    this.revRecScheduleJoin = props.revRecScheduleJoin;
    this.transactionJoin = props.transactionJoin;
  }
}

export class SalesOrderShipGroupList extends SoapTypes.Base {
  shipGroup?: TransactionShipGroup[];
  replaceAll?: boolean;
  constructor(props: SalesOrderShipGroupList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.shipGroup = props.shipGroup;
    this.replaceAll = props.replaceAll;
  }
}

export class CashSaleItemCost extends SoapTypes.Base {
  apply?: boolean;
  doc?: number;
  line?: number;
  taxDetailsReference?: string;
  billedDate?: SoapTypes.Dateish;
  itemDisp?: string;
  memo?: string;
  jobDisp?: string;
  department?: string;
  clazz?: string;
  location?: string;
  unitDisp?: string;
  options?: PlatformCore.CustomFieldList;
  itemCostCount?: string;
  quantity?: string;
  serialNumbers?: string;
  cost?: number;
  amount?: number;
  taxAmount?: number;
  revRecSchedule?: PlatformCore.RecordRef;
  revRecStartDate?: SoapTypes.Dateish;
  revRecEndDate?: SoapTypes.Dateish;
  grossAmt?: number;
  tax1Amt?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  constructor(props: CashSaleItemCost) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.apply = props.apply;
    this.doc = props.doc;
    this.line = props.line;
    this.taxDetailsReference = props.taxDetailsReference;
    this.billedDate = props.billedDate;
    this.itemDisp = props.itemDisp;
    this.memo = props.memo;
    this.jobDisp = props.jobDisp;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.unitDisp = props.unitDisp;
    this.options = props.options;
    this.itemCostCount = props.itemCostCount;
    this.quantity = props.quantity;
    this.serialNumbers = props.serialNumbers;
    this.cost = props.cost;
    this.amount = props.amount;
    this.taxAmount = props.taxAmount;
    this.revRecSchedule = props.revRecSchedule;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecEndDate = props.revRecEndDate;
    this.grossAmt = props.grossAmt;
    this.tax1Amt = props.tax1Amt;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
  }
}

export class EstimateItemList extends SoapTypes.Base {
  item?: EstimateItem[];
  replaceAll?: boolean;
  constructor(props: EstimateItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export class InvoiceShipGroupList extends SoapTypes.Base {
  shipGroup?: TransactionShipGroup[];
  replaceAll?: boolean;
  constructor(props: InvoiceShipGroupList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.shipGroup = props.shipGroup;
    this.replaceAll = props.replaceAll;
  }
}

export class InvoiceSalesTeam extends SoapTypes.Base {
  employee?: PlatformCore.RecordRef;
  salesRole?: PlatformCore.RecordRef;
  isPrimary?: boolean;
  contribution?: number;
  constructor(props: InvoiceSalesTeam) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employee = props.employee;
    this.salesRole = props.salesRole;
    this.isPrimary = props.isPrimary;
    this.contribution = props.contribution;
  }
}

export class OpportunitySalesTeamList extends SoapTypes.Base {
  salesTeam?: OpportunitySalesTeam[];
  replaceAll?: boolean;
  constructor(props: OpportunitySalesTeamList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.salesTeam = props.salesTeam;
    this.replaceAll = props.replaceAll;
  }
}

export class Opportunity extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  estimatedBudget?: number;
  entity?: PlatformCore.RecordRef;
  job?: PlatformCore.RecordRef;
  title?: string;
  tranId?: string;
  entityTaxRegNum?: PlatformCore.RecordRef;
  taxPointDate?: SoapTypes.Dateish;
  oneTime?: number;
  recurWeekly?: number;
  recurMonthly?: number;
  recurQuarterly?: number;
  recurAnnually?: number;
  source?: string;
  salesRep?: PlatformCore.RecordRef;
  contribPct?: string;
  partner?: PlatformCore.RecordRef;
  salesGroup?: PlatformCore.RecordRef;
  syncSalesTeams?: boolean;
  leadSource?: PlatformCore.RecordRef;
  entityStatus?: PlatformCore.RecordRef;
  probability?: number;
  tranDate?: SoapTypes.Dateish;
  expectedCloseDate?: SoapTypes.Dateish;
  daysOpen?: number;
  forecastType?: PlatformCore.RecordRef;
  currencyName?: string;
  exchangeRate?: number;
  projectedTotal?: number;
  rangeLow?: number;
  rangeHigh?: number;
  projAltSalesAmt?: number;
  altSalesRangeLow?: number;
  altSalesRangeHigh?: number;
  weightedTotal?: number;
  actionItem?: string;
  winLossReason?: PlatformCore.RecordRef;
  memo?: string;
  taxTotal?: number;
  isBudgetApproved?: boolean;
  tax2Total?: number;
  salesReadiness?: PlatformCore.RecordRef;
  totalCostEstimate?: number;
  buyingTimeFrame?: PlatformCore.RecordRef;
  estGrossProfit?: number;
  buyingReason?: PlatformCore.RecordRef;
  estGrossProfitPercent?: number;
  billingAddress?: PlatformCommon.Address;
  billAddressList?: PlatformCore.RecordRef;
  shippingAddress?: PlatformCommon.Address;
  shipIsResidential?: boolean;
  shipAddressList?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  closeDate?: SoapTypes.Dateish;
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  status?: string;
  vatRegNum?: string;
  syncPartnerTeams?: boolean;
  salesTeamList?: OpportunitySalesTeamList;
  partnersList?: OpportunityPartnersList;
  itemList?: OpportunityItemList;
  competitorsList?: OpportunityCompetitorsList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Opportunity) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customForm = props.customForm;
    this.currency = props.currency;
    this.estimatedBudget = props.estimatedBudget;
    this.entity = props.entity;
    this.job = props.job;
    this.title = props.title;
    this.tranId = props.tranId;
    this.entityTaxRegNum = props.entityTaxRegNum;
    this.taxPointDate = props.taxPointDate;
    this.oneTime = props.oneTime;
    this.recurWeekly = props.recurWeekly;
    this.recurMonthly = props.recurMonthly;
    this.recurQuarterly = props.recurQuarterly;
    this.recurAnnually = props.recurAnnually;
    this.source = props.source;
    this.salesRep = props.salesRep;
    this.contribPct = props.contribPct;
    this.partner = props.partner;
    this.salesGroup = props.salesGroup;
    this.syncSalesTeams = props.syncSalesTeams;
    this.leadSource = props.leadSource;
    this.entityStatus = props.entityStatus;
    this.probability = props.probability;
    this.tranDate = props.tranDate;
    this.expectedCloseDate = props.expectedCloseDate;
    this.daysOpen = props.daysOpen;
    this.forecastType = props.forecastType;
    this.currencyName = props.currencyName;
    this.exchangeRate = props.exchangeRate;
    this.projectedTotal = props.projectedTotal;
    this.rangeLow = props.rangeLow;
    this.rangeHigh = props.rangeHigh;
    this.projAltSalesAmt = props.projAltSalesAmt;
    this.altSalesRangeLow = props.altSalesRangeLow;
    this.altSalesRangeHigh = props.altSalesRangeHigh;
    this.weightedTotal = props.weightedTotal;
    this.actionItem = props.actionItem;
    this.winLossReason = props.winLossReason;
    this.memo = props.memo;
    this.taxTotal = props.taxTotal;
    this.isBudgetApproved = props.isBudgetApproved;
    this.tax2Total = props.tax2Total;
    this.salesReadiness = props.salesReadiness;
    this.totalCostEstimate = props.totalCostEstimate;
    this.buyingTimeFrame = props.buyingTimeFrame;
    this.estGrossProfit = props.estGrossProfit;
    this.buyingReason = props.buyingReason;
    this.estGrossProfitPercent = props.estGrossProfitPercent;
    this.billingAddress = props.billingAddress;
    this.billAddressList = props.billAddressList;
    this.shippingAddress = props.shippingAddress;
    this.shipIsResidential = props.shipIsResidential;
    this.shipAddressList = props.shipAddressList;
    this.clazz = props.clazz;
    this.closeDate = props.closeDate;
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.nexus = props.nexus;
    this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
    this.taxRegOverride = props.taxRegOverride;
    this.taxDetailsOverride = props.taxDetailsOverride;
    this.department = props.department;
    this.location = props.location;
    this.subsidiary = props.subsidiary;
    this.status = props.status;
    this.vatRegNum = props.vatRegNum;
    this.syncPartnerTeams = props.syncPartnerTeams;
    this.salesTeamList = props.salesTeamList;
    this.partnersList = props.partnersList;
    this.itemList = props.itemList;
    this.competitorsList = props.competitorsList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.taxDetailsList = props.taxDetailsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class SalesOrderItem extends SoapTypes.Base {
  job?: PlatformCore.RecordRef;
  subscription?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  quantityAvailable?: number;
  expandItemGroup?: boolean;
  lineUniqueKey?: number;
  quantityOnHand?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  description?: string;
  price?: PlatformCore.RecordRef;
  rate?: string;
  serialNumbers?: string;
  amount?: number;
  isTaxable?: boolean;
  commitInventory?: TransactionsSalesTypes.SalesOrderItemCommitInventory;
  orderPriority?: number;
  licenseCode?: string;
  options?: PlatformCore.CustomFieldList;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  createPo?: TransactionsSalesTypes.SalesOrderItemCreatePo;
  createdPo?: PlatformCore.RecordRef;
  altSalesAmt?: number;
  createWo?: boolean;
  poVendor?: PlatformCore.RecordRef;
  poCurrency?: string;
  poRate?: number;
  revRecSchedule?: PlatformCore.RecordRef;
  revRecStartDate?: SoapTypes.Dateish;
  revRecTermInMonths?: number;
  revRecEndDate?: SoapTypes.Dateish;
  deferRevRec?: boolean;
  isClosed?: boolean;
  itemFulfillmentChoice?: TransactionsSalesTypes.SalesOrderItemFulfillmentChoice;
  catchUpPeriod?: PlatformCore.RecordRef;
  billingSchedule?: PlatformCore.RecordRef;
  fromJob?: boolean;
  grossAmt?: number;
  taxAmount?: number;
  excludeFromRateRequest?: boolean;
  isEstimate?: boolean;
  inventoryLocation?: PlatformCore.RecordRef;
  inventorySubsidiary?: PlatformCore.RecordRef;
  line?: number;
  percentComplete?: number;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  quantityBackOrdered?: number;
  quantityBilled?: number;
  quantityCommitted?: number;
  quantityFulfilled?: number;
  quantityPacked?: number;
  quantityPicked?: number;
  tax1Amt?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  giftCertFrom?: string;
  giftCertRecipientName?: string;
  giftCertRecipientEmail?: string;
  giftCertMessage?: string;
  giftCertNumber?: string;
  shipGroup?: number;
  itemIsFulfilled?: boolean;
  shipAddress?: PlatformCore.RecordRef;
  shipMethod?: PlatformCore.RecordRef;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeIsEstimate?: boolean;
  vsoePrice?: number;
  vsoeAmount?: number;
  vsoeAllocation?: number;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  expectedShipDate?: SoapTypes.Dateish;
  noAutoAssignLocation?: boolean;
  locationAutoAssigned?: boolean;
  taxDetailsReference?: string;
  chargeType?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: SalesOrderItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.job = props.job;
    this.subscription = props.subscription;
    this.item = props.item;
    this.quantityAvailable = props.quantityAvailable;
    this.expandItemGroup = props.expandItemGroup;
    this.lineUniqueKey = props.lineUniqueKey;
    this.quantityOnHand = props.quantityOnHand;
    this.quantity = props.quantity;
    this.units = props.units;
    this.inventoryDetail = props.inventoryDetail;
    this.description = props.description;
    this.price = props.price;
    this.rate = props.rate;
    this.serialNumbers = props.serialNumbers;
    this.amount = props.amount;
    this.isTaxable = props.isTaxable;
    this.commitInventory = props.commitInventory;
    this.orderPriority = props.orderPriority;
    this.licenseCode = props.licenseCode;
    this.options = props.options;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.createPo = props.createPo;
    this.createdPo = props.createdPo;
    this.altSalesAmt = props.altSalesAmt;
    this.createWo = props.createWo;
    this.poVendor = props.poVendor;
    this.poCurrency = props.poCurrency;
    this.poRate = props.poRate;
    this.revRecSchedule = props.revRecSchedule;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecTermInMonths = props.revRecTermInMonths;
    this.revRecEndDate = props.revRecEndDate;
    this.deferRevRec = props.deferRevRec;
    this.isClosed = props.isClosed;
    this.itemFulfillmentChoice = props.itemFulfillmentChoice;
    this.catchUpPeriod = props.catchUpPeriod;
    this.billingSchedule = props.billingSchedule;
    this.fromJob = props.fromJob;
    this.grossAmt = props.grossAmt;
    this.taxAmount = props.taxAmount;
    this.excludeFromRateRequest = props.excludeFromRateRequest;
    this.isEstimate = props.isEstimate;
    this.inventoryLocation = props.inventoryLocation;
    this.inventorySubsidiary = props.inventorySubsidiary;
    this.line = props.line;
    this.percentComplete = props.percentComplete;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.quantityBackOrdered = props.quantityBackOrdered;
    this.quantityBilled = props.quantityBilled;
    this.quantityCommitted = props.quantityCommitted;
    this.quantityFulfilled = props.quantityFulfilled;
    this.quantityPacked = props.quantityPacked;
    this.quantityPicked = props.quantityPicked;
    this.tax1Amt = props.tax1Amt;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.giftCertFrom = props.giftCertFrom;
    this.giftCertRecipientName = props.giftCertRecipientName;
    this.giftCertRecipientEmail = props.giftCertRecipientEmail;
    this.giftCertMessage = props.giftCertMessage;
    this.giftCertNumber = props.giftCertNumber;
    this.shipGroup = props.shipGroup;
    this.itemIsFulfilled = props.itemIsFulfilled;
    this.shipAddress = props.shipAddress;
    this.shipMethod = props.shipMethod;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeIsEstimate = props.vsoeIsEstimate;
    this.vsoePrice = props.vsoePrice;
    this.vsoeAmount = props.vsoeAmount;
    this.vsoeAllocation = props.vsoeAllocation;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.expectedShipDate = props.expectedShipDate;
    this.noAutoAssignLocation = props.noAutoAssignLocation;
    this.locationAutoAssigned = props.locationAutoAssigned;
    this.taxDetailsReference = props.taxDetailsReference;
    this.chargeType = props.chargeType;
    this.customFieldList = props.customFieldList;
  }
}

export class CashSaleTimeList extends SoapTypes.Base {
  time?: CashSaleTime[];
  replaceAll?: boolean;
  constructor(props: CashSaleTimeList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.time = props.time;
    this.replaceAll = props.replaceAll;
  }
}

export class PromotionsList extends SoapTypes.Base {
  promotions?: Promotions[];
  replaceAll?: boolean;
  constructor(props: PromotionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.promotions = props.promotions;
    this.replaceAll = props.replaceAll;
  }
}

export class TransactionSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.TransactionSearchRowBasic;
  accountJoin?: PlatformCommon.AccountSearchRowBasic;
  accountingPeriodJoin?: PlatformCommon.AccountingPeriodSearchRowBasic;
  accountingTransactionJoin?: PlatformCommon.AccountingTransactionSearchRowBasic;
  advanceToApplyAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  appliedToTransactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  applyingTransactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  billingAddressJoin?: PlatformCommon.AddressSearchRowBasic;
  billingTransactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  binNumberJoin?: PlatformCommon.BinSearchRowBasic;
  bomJoin?: PlatformCommon.BomSearchRowBasic;
  bomRevisionJoin?: PlatformCommon.BomRevisionSearchRowBasic;
  callJoin?: PlatformCommon.PhoneCallSearchRowBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
  classJoin?: PlatformCommon.ClassificationSearchRowBasic;
  cogsPurchaseJoin?: PlatformCommon.TransactionSearchRowBasic;
  cogsSaleJoin?: PlatformCommon.TransactionSearchRowBasic;
  contactPrimaryJoin?: PlatformCommon.ContactSearchRowBasic;
  createdFromJoin?: PlatformCommon.TransactionSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  customerMainJoin?: PlatformCommon.CustomerSearchRowBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchRowBasic;
  depositTransactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  eventJoin?: PlatformCommon.CalendarEventSearchRowBasic;
  expenseCategoryJoin?: PlatformCommon.ExpenseCategorySearchRowBasic;
  fileJoin?: PlatformCommon.FileSearchRowBasic;
  fromLocationJoin?: PlatformCommon.LocationSearchRowBasic;
  fulfillingTransactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  headerBillingAccountJoin?: PlatformCommon.BillingAccountSearchRowBasic;
  installmentJoin?: PlatformCommon.InstallmentSearchRowBasic;
  inventoryDetailJoin?: PlatformCommon.InventoryDetailSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  itemNumberJoin?: PlatformCommon.InventoryNumberSearchRowBasic;
  jobJoin?: PlatformCommon.JobSearchRowBasic;
  jobMainJoin?: PlatformCommon.JobSearchRowBasic;
  leadSourceJoin?: PlatformCommon.CampaignSearchRowBasic;
  lineBillingAccountJoin?: PlatformCommon.BillingAccountSearchRowBasic;
  lineFileJoin?: PlatformCommon.FileSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  manufacturingOperationTaskJoin?: PlatformCommon.ManufacturingOperationTaskSearchRowBasic;
  messagesJoin?: PlatformCommon.MessageSearchRowBasic;
  nextApproverJoin?: PlatformCommon.EntitySearchRowBasic;
  opportunityJoin?: PlatformCommon.OpportunitySearchRowBasic;
  paidTransactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  partnerJoin?: PlatformCommon.PartnerSearchRowBasic;
  payingTransactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  payrollItemJoin?: PlatformCommon.PayrollItemSearchRowBasic;
  projectTaskJoin?: PlatformCommon.ProjectTaskSearchRowBasic;
  purchaseOrderJoin?: PlatformCommon.TransactionSearchRowBasic;
  requestorJoin?: PlatformCommon.EmployeeSearchRowBasic;
  revCommittingTransactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  revisionJoin?: PlatformCommon.ItemRevisionSearchRowBasic;
  revRecScheduleJoin?: PlatformCommon.RevRecScheduleSearchRowBasic;
  rgPostingTransactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  salesOrderJoin?: PlatformCommon.TransactionSearchRowBasic;
  salesRepJoin?: PlatformCommon.EmployeeSearchRowBasic;
  shippingAddressJoin?: PlatformCommon.AddressSearchRowBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  taskJoin?: PlatformCommon.TaskSearchRowBasic;
  taxCodeJoin?: PlatformCommon.SalesTaxItemSearchRowBasic;
  taxDetailJoin?: PlatformCommon.TaxDetailSearchRowBasic;
  taxItemJoin?: PlatformCommon.SalesTaxItemSearchRowBasic;
  timeJoin?: PlatformCommon.TimeBillSearchRowBasic;
  toLocationJoin?: PlatformCommon.LocationSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
  vendorJoin?: PlatformCommon.VendorSearchRowBasic;
  vendorLineJoin?: PlatformCommon.VendorSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: TransactionSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.accountJoin = props.accountJoin;
    this.accountingPeriodJoin = props.accountingPeriodJoin;
    this.accountingTransactionJoin = props.accountingTransactionJoin;
    this.advanceToApplyAccountJoin = props.advanceToApplyAccountJoin;
    this.appliedToTransactionJoin = props.appliedToTransactionJoin;
    this.applyingTransactionJoin = props.applyingTransactionJoin;
    this.billingAddressJoin = props.billingAddressJoin;
    this.billingTransactionJoin = props.billingTransactionJoin;
    this.binNumberJoin = props.binNumberJoin;
    this.bomJoin = props.bomJoin;
    this.bomRevisionJoin = props.bomRevisionJoin;
    this.callJoin = props.callJoin;
    this.caseJoin = props.caseJoin;
    this.classJoin = props.classJoin;
    this.cogsPurchaseJoin = props.cogsPurchaseJoin;
    this.cogsSaleJoin = props.cogsSaleJoin;
    this.contactPrimaryJoin = props.contactPrimaryJoin;
    this.createdFromJoin = props.createdFromJoin;
    this.customerJoin = props.customerJoin;
    this.customerMainJoin = props.customerMainJoin;
    this.departmentJoin = props.departmentJoin;
    this.depositTransactionJoin = props.depositTransactionJoin;
    this.employeeJoin = props.employeeJoin;
    this.eventJoin = props.eventJoin;
    this.expenseCategoryJoin = props.expenseCategoryJoin;
    this.fileJoin = props.fileJoin;
    this.fromLocationJoin = props.fromLocationJoin;
    this.fulfillingTransactionJoin = props.fulfillingTransactionJoin;
    this.headerBillingAccountJoin = props.headerBillingAccountJoin;
    this.installmentJoin = props.installmentJoin;
    this.inventoryDetailJoin = props.inventoryDetailJoin;
    this.itemJoin = props.itemJoin;
    this.itemNumberJoin = props.itemNumberJoin;
    this.jobJoin = props.jobJoin;
    this.jobMainJoin = props.jobMainJoin;
    this.leadSourceJoin = props.leadSourceJoin;
    this.lineBillingAccountJoin = props.lineBillingAccountJoin;
    this.lineFileJoin = props.lineFileJoin;
    this.locationJoin = props.locationJoin;
    this.manufacturingOperationTaskJoin = props.manufacturingOperationTaskJoin;
    this.messagesJoin = props.messagesJoin;
    this.nextApproverJoin = props.nextApproverJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.paidTransactionJoin = props.paidTransactionJoin;
    this.partnerJoin = props.partnerJoin;
    this.payingTransactionJoin = props.payingTransactionJoin;
    this.payrollItemJoin = props.payrollItemJoin;
    this.projectTaskJoin = props.projectTaskJoin;
    this.purchaseOrderJoin = props.purchaseOrderJoin;
    this.requestorJoin = props.requestorJoin;
    this.revCommittingTransactionJoin = props.revCommittingTransactionJoin;
    this.revisionJoin = props.revisionJoin;
    this.revRecScheduleJoin = props.revRecScheduleJoin;
    this.rgPostingTransactionJoin = props.rgPostingTransactionJoin;
    this.salesOrderJoin = props.salesOrderJoin;
    this.salesRepJoin = props.salesRepJoin;
    this.shippingAddressJoin = props.shippingAddressJoin;
    this.subsidiaryJoin = props.subsidiaryJoin;
    this.taskJoin = props.taskJoin;
    this.taxCodeJoin = props.taxCodeJoin;
    this.taxDetailJoin = props.taxDetailJoin;
    this.taxItemJoin = props.taxItemJoin;
    this.timeJoin = props.timeJoin;
    this.toLocationJoin = props.toLocationJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.vendorJoin = props.vendorJoin;
    this.vendorLineJoin = props.vendorLineJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class OpportunityCompetitors extends SoapTypes.Base {
  competitor?: PlatformCore.RecordRef;
  url?: string;
  notes?: string;
  strategy?: string;
  winner?: boolean;
  constructor(props: OpportunityCompetitors) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.competitor = props.competitor;
    this.url = props.url;
    this.notes = props.notes;
    this.strategy = props.strategy;
    this.winner = props.winner;
  }
}

export class CashSaleItemCostList extends SoapTypes.Base {
  itemCost?: CashSaleItemCost[];
  replaceAll?: boolean;
  constructor(props: CashSaleItemCostList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.itemCost = props.itemCost;
    this.replaceAll = props.replaceAll;
  }
}

export class SalesOrderSalesTeamList extends SoapTypes.Base {
  salesTeam?: SalesOrderSalesTeam[];
  replaceAll?: boolean;
  constructor(props: SalesOrderSalesTeamList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.salesTeam = props.salesTeam;
    this.replaceAll = props.replaceAll;
  }
}

export class SalesOrderPartnersList extends SoapTypes.Base {
  partners?: PlatformCommon.Partners[];
  replaceAll?: boolean;
  constructor(props: SalesOrderPartnersList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.partners = props.partners;
    this.replaceAll = props.replaceAll;
  }
}

export class AccountingTransactionSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: AccountingTransactionSearch;
  columns?: AccountingTransactionSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: AccountingTransactionSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class OpportunityItemList extends SoapTypes.Base {
  item?: OpportunityItem[];
  replaceAll?: boolean;
  constructor(props: OpportunityItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export class TransactionSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.TransactionSearchBasic;
  accountJoin?: PlatformCommon.AccountSearchBasic;
  accountingPeriodJoin?: PlatformCommon.AccountingPeriodSearchBasic;
  accountingTransactionJoin?: PlatformCommon.AccountingTransactionSearchBasic;
  advanceToApplyAccountJoin?: PlatformCommon.AccountSearchBasic;
  appliedToTransactionJoin?: PlatformCommon.TransactionSearchBasic;
  applyingTransactionJoin?: PlatformCommon.TransactionSearchBasic;
  billingAddressJoin?: PlatformCommon.AddressSearchBasic;
  billingTransactionJoin?: PlatformCommon.TransactionSearchBasic;
  binNumberJoin?: PlatformCommon.BinSearchBasic;
  bomJoin?: PlatformCommon.BomSearchBasic;
  bomRevisionJoin?: PlatformCommon.BomRevisionSearchBasic;
  callJoin?: PlatformCommon.PhoneCallSearchBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchBasic;
  classJoin?: PlatformCommon.ClassificationSearchBasic;
  cogsPurchaseJoin?: PlatformCommon.TransactionSearchBasic;
  cogsSaleJoin?: PlatformCommon.TransactionSearchBasic;
  contactPrimaryJoin?: PlatformCommon.ContactSearchBasic;
  createdFromJoin?: PlatformCommon.TransactionSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  customerMainJoin?: PlatformCommon.CustomerSearchBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchBasic;
  depositTransactionJoin?: PlatformCommon.TransactionSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  eventJoin?: PlatformCommon.CalendarEventSearchBasic;
  expenseCategoryJoin?: PlatformCommon.ExpenseCategorySearchBasic;
  fileJoin?: PlatformCommon.FileSearchBasic;
  fromLocationJoin?: PlatformCommon.LocationSearchBasic;
  fulfillingTransactionJoin?: PlatformCommon.TransactionSearchBasic;
  headerBillingAccountJoin?: PlatformCommon.BillingAccountSearchBasic;
  installmentJoin?: PlatformCommon.InstallmentSearchBasic;
  inventoryDetailJoin?: PlatformCommon.InventoryDetailSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  itemNumberJoin?: PlatformCommon.InventoryNumberSearchBasic;
  jobJoin?: PlatformCommon.JobSearchBasic;
  jobMainJoin?: PlatformCommon.JobSearchBasic;
  leadSourceJoin?: PlatformCommon.CampaignSearchBasic;
  lineBillingAccountJoin?: PlatformCommon.BillingAccountSearchBasic;
  lineFileJoin?: PlatformCommon.FileSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  manufacturingOperationTaskJoin?: PlatformCommon.ManufacturingOperationTaskSearchBasic;
  messagesJoin?: PlatformCommon.MessageSearchBasic;
  nextApproverJoin?: PlatformCommon.EntitySearchBasic;
  opportunityJoin?: PlatformCommon.OpportunitySearchBasic;
  paidTransactionJoin?: PlatformCommon.TransactionSearchBasic;
  partnerJoin?: PlatformCommon.PartnerSearchBasic;
  payingTransactionJoin?: PlatformCommon.TransactionSearchBasic;
  payrollItemJoin?: PlatformCommon.PayrollItemSearchBasic;
  projectTaskJoin?: PlatformCommon.ProjectTaskSearchBasic;
  purchaseOrderJoin?: PlatformCommon.TransactionSearchBasic;
  requestorJoin?: PlatformCommon.EmployeeSearchBasic;
  revCommittingTransactionJoin?: PlatformCommon.TransactionSearchBasic;
  revisionJoin?: PlatformCommon.ItemRevisionSearchBasic;
  revRecScheduleJoin?: PlatformCommon.RevRecScheduleSearchBasic;
  rgPostingTransactionJoin?: PlatformCommon.TransactionSearchBasic;
  salesOrderJoin?: PlatformCommon.TransactionSearchBasic;
  salesRepJoin?: PlatformCommon.EmployeeSearchBasic;
  shippingAddressJoin?: PlatformCommon.AddressSearchBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  taskJoin?: PlatformCommon.TaskSearchBasic;
  taxCodeJoin?: PlatformCommon.SalesTaxItemSearchBasic;
  taxDetailJoin?: PlatformCommon.TaxDetailSearchBasic;
  taxItemJoin?: PlatformCommon.SalesTaxItemSearchBasic;
  timeJoin?: PlatformCommon.TimeBillSearchBasic;
  toLocationJoin?: PlatformCommon.LocationSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
  vendorJoin?: PlatformCommon.VendorSearchBasic;
  vendorLineJoin?: PlatformCommon.VendorSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: TransactionSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.accountJoin = props.accountJoin;
    this.accountingPeriodJoin = props.accountingPeriodJoin;
    this.accountingTransactionJoin = props.accountingTransactionJoin;
    this.advanceToApplyAccountJoin = props.advanceToApplyAccountJoin;
    this.appliedToTransactionJoin = props.appliedToTransactionJoin;
    this.applyingTransactionJoin = props.applyingTransactionJoin;
    this.billingAddressJoin = props.billingAddressJoin;
    this.billingTransactionJoin = props.billingTransactionJoin;
    this.binNumberJoin = props.binNumberJoin;
    this.bomJoin = props.bomJoin;
    this.bomRevisionJoin = props.bomRevisionJoin;
    this.callJoin = props.callJoin;
    this.caseJoin = props.caseJoin;
    this.classJoin = props.classJoin;
    this.cogsPurchaseJoin = props.cogsPurchaseJoin;
    this.cogsSaleJoin = props.cogsSaleJoin;
    this.contactPrimaryJoin = props.contactPrimaryJoin;
    this.createdFromJoin = props.createdFromJoin;
    this.customerJoin = props.customerJoin;
    this.customerMainJoin = props.customerMainJoin;
    this.departmentJoin = props.departmentJoin;
    this.depositTransactionJoin = props.depositTransactionJoin;
    this.employeeJoin = props.employeeJoin;
    this.eventJoin = props.eventJoin;
    this.expenseCategoryJoin = props.expenseCategoryJoin;
    this.fileJoin = props.fileJoin;
    this.fromLocationJoin = props.fromLocationJoin;
    this.fulfillingTransactionJoin = props.fulfillingTransactionJoin;
    this.headerBillingAccountJoin = props.headerBillingAccountJoin;
    this.installmentJoin = props.installmentJoin;
    this.inventoryDetailJoin = props.inventoryDetailJoin;
    this.itemJoin = props.itemJoin;
    this.itemNumberJoin = props.itemNumberJoin;
    this.jobJoin = props.jobJoin;
    this.jobMainJoin = props.jobMainJoin;
    this.leadSourceJoin = props.leadSourceJoin;
    this.lineBillingAccountJoin = props.lineBillingAccountJoin;
    this.lineFileJoin = props.lineFileJoin;
    this.locationJoin = props.locationJoin;
    this.manufacturingOperationTaskJoin = props.manufacturingOperationTaskJoin;
    this.messagesJoin = props.messagesJoin;
    this.nextApproverJoin = props.nextApproverJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.paidTransactionJoin = props.paidTransactionJoin;
    this.partnerJoin = props.partnerJoin;
    this.payingTransactionJoin = props.payingTransactionJoin;
    this.payrollItemJoin = props.payrollItemJoin;
    this.projectTaskJoin = props.projectTaskJoin;
    this.purchaseOrderJoin = props.purchaseOrderJoin;
    this.requestorJoin = props.requestorJoin;
    this.revCommittingTransactionJoin = props.revCommittingTransactionJoin;
    this.revisionJoin = props.revisionJoin;
    this.revRecScheduleJoin = props.revRecScheduleJoin;
    this.rgPostingTransactionJoin = props.rgPostingTransactionJoin;
    this.salesOrderJoin = props.salesOrderJoin;
    this.salesRepJoin = props.salesRepJoin;
    this.shippingAddressJoin = props.shippingAddressJoin;
    this.subsidiaryJoin = props.subsidiaryJoin;
    this.taskJoin = props.taskJoin;
    this.taxCodeJoin = props.taxCodeJoin;
    this.taxDetailJoin = props.taxDetailJoin;
    this.taxItemJoin = props.taxItemJoin;
    this.timeJoin = props.timeJoin;
    this.toLocationJoin = props.toLocationJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.vendorJoin = props.vendorJoin;
    this.vendorLineJoin = props.vendorLineJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class CashSale extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  customForm?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  billingAccount?: PlatformCore.RecordRef;
  recurringBill?: boolean;
  tranDate?: SoapTypes.Dateish;
  tranId?: string;
  entityTaxRegNum?: PlatformCore.RecordRef;
  taxPointDate?: SoapTypes.Dateish;
  source?: string;
  postingPeriod?: PlatformCore.RecordRef;
  createdFrom?: PlatformCore.RecordRef;
  opportunity?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  salesRep?: PlatformCore.RecordRef;
  contribPct?: string;
  partner?: PlatformCore.RecordRef;
  leadSource?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  otherRefNum?: string;
  memo?: string;
  salesEffectiveDate?: SoapTypes.Dateish;
  excludeCommission?: boolean;
  revRecSchedule?: PlatformCore.RecordRef;
  undepFunds?: boolean;
  canHaveStackable?: boolean;
  currency?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  revRecStartDate?: SoapTypes.Dateish;
  revRecEndDate?: SoapTypes.Dateish;
  totalCostEstimate?: number;
  estGrossProfit?: number;
  estGrossProfitPercent?: number;
  exchangeRate?: number;
  currencyName?: string;
  promoCode?: PlatformCore.RecordRef;
  discountItem?: PlatformCore.RecordRef;
  discountRate?: string;
  isTaxable?: boolean;
  taxItem?: PlatformCore.RecordRef;
  taxRate?: number;
  toBePrinted?: boolean;
  toBeEmailed?: boolean;
  toBeFaxed?: boolean;
  fax?: string;
  messageSel?: PlatformCore.RecordRef;
  message?: string;
  paymentOption?: PlatformCore.RecordRef;
  inputAuthCode?: string;
  inputReferenceCode?: string;
  checkNumber?: string;
  paymentCardCsc?: string;
  paymentProcessingProfile?: PlatformCore.RecordRef;
  handlingMode?: TransactionsSalesTypes.CashSaleHandlingMode;
  outputAuthCode?: string;
  outputReferenceCode?: string;
  paymentOperation?: TransactionsSalesTypes.CashSalePaymentOperation;
  dynamicDescriptor?: string;
  billingAddress?: PlatformCommon.Address;
  billAddressList?: PlatformCore.RecordRef;
  shippingAddress?: PlatformCommon.Address;
  shipIsResidential?: boolean;
  shipAddressList?: PlatformCore.RecordRef;
  fob?: string;
  shipDate?: SoapTypes.Dateish;
  shipMethod?: PlatformCore.RecordRef;
  shippingCost?: number;
  shippingTax1Rate?: number;
  shippingTax2Rate?: string;
  shippingTaxCode?: PlatformCore.RecordRef;
  handlingTaxCode?: PlatformCore.RecordRef;
  handlingTax1Rate?: number;
  handlingCost?: number;
  handlingTax2Rate?: string;
  linkedTrackingNumbers?: string;
  trackingNumbers?: string;
  salesGroup?: PlatformCore.RecordRef;
  revenueStatus?: PlatformCommonTypes.RevenueStatus;
  recognizedRevenue?: number;
  deferredRevenue?: number;
  revRecOnRevCommitment?: boolean;
  syncSalesTeams?: boolean;
  paymentMethod?: PlatformCore.RecordRef;
  payPalStatus?: string;
  creditCard?: PlatformCore.RecordRef;
  ccNumber?: string;
  ccExpireDate?: SoapTypes.Dateish;
  ccName?: string;
  ccStreet?: string;
  ccZipCode?: string;
  creditCardProcessor?: PlatformCore.RecordRef;
  ccApproved?: boolean;
  authCode?: string;
  ccAvsStreetMatch?: PlatformCommonTypes.AvsMatchCode;
  ccAvsZipMatch?: PlatformCommonTypes.AvsMatchCode;
  isRecurringPayment?: boolean;
  payPalTranId?: string;
  subTotal?: number;
  ccIsPurchaseCardBin?: boolean;
  ignoreAvs?: boolean;
  ccProcessAsPurchaseCard?: boolean;
  itemCostDiscount?: PlatformCore.RecordRef;
  itemCostDiscRate?: string;
  itemCostDiscAmount?: number;
  itemCostTaxRate1?: number;
  itemCostTaxRate2?: number;
  itemCostDiscTaxable?: boolean;
  itemCostTaxCode?: PlatformCore.RecordRef;
  itemCostDiscTax1Amt?: number;
  itemCostDiscPrint?: boolean;
  expCostDiscount?: PlatformCore.RecordRef;
  expCostDiscRate?: string;
  expCostDiscAmount?: number;
  expCostDiscTaxable?: boolean;
  expCostDiscprint?: boolean;
  expCostTaxRate1?: number;
  timeDiscount?: PlatformCore.RecordRef;
  expCostTaxCode?: PlatformCore.RecordRef;
  timeDiscRate?: string;
  expCostTaxRate2?: number;
  expCostDiscTax1Amt?: number;
  timeDiscAmount?: number;
  timeDiscTaxable?: boolean;
  timeDiscPrint?: boolean;
  discountTotal?: number;
  taxTotal?: number;
  timeTaxRate1?: number;
  altShippingCost?: number;
  timeTaxCode?: PlatformCore.RecordRef;
  altHandlingCost?: number;
  total?: number;
  timeDiscTax1Amt?: number;
  ccSecurityCode?: string;
  timeTaxRate2?: number;
  ccSecurityCodeMatch?: PlatformCommonTypes.AvsMatchCode;
  chargeIt?: boolean;
  debitCardIssueNo?: string;
  threeDStatusCode?: string;
  pnRefNum?: string;
  paypalAuthId?: string;
  status?: string;
  paypalProcess?: boolean;
  job?: PlatformCore.RecordRef;
  billingSchedule?: PlatformCore.RecordRef;
  email?: string;
  tax2Total?: number;
  validFrom?: SoapTypes.Dateish;
  vatRegNum?: string;
  giftCertApplied?: number;
  tranIsVsoeBundle?: boolean;
  vsoeAutoCalc?: boolean;
  syncPartnerTeams?: boolean;
  salesTeamList?: CashSaleSalesTeamList;
  partnersList?: CashSalePartnersList;
  itemList?: CashSaleItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  itemCostList?: CashSaleItemCostList;
  giftCertRedemptionList?: PlatformCommon.GiftCertRedemptionList;
  promotionsList?: PromotionsList;
  expCostList?: CashSaleExpCostList;
  timeList?: CashSaleTimeList;
  shipGroupList?: CashSaleShipGroupList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: CashSale) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.nexus = props.nexus;
    this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
    this.taxRegOverride = props.taxRegOverride;
    this.taxDetailsOverride = props.taxDetailsOverride;
    this.customForm = props.customForm;
    this.entity = props.entity;
    this.billingAccount = props.billingAccount;
    this.recurringBill = props.recurringBill;
    this.tranDate = props.tranDate;
    this.tranId = props.tranId;
    this.entityTaxRegNum = props.entityTaxRegNum;
    this.taxPointDate = props.taxPointDate;
    this.source = props.source;
    this.postingPeriod = props.postingPeriod;
    this.createdFrom = props.createdFrom;
    this.opportunity = props.opportunity;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiary = props.subsidiary;
    this.salesRep = props.salesRep;
    this.contribPct = props.contribPct;
    this.partner = props.partner;
    this.leadSource = props.leadSource;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.otherRefNum = props.otherRefNum;
    this.memo = props.memo;
    this.salesEffectiveDate = props.salesEffectiveDate;
    this.excludeCommission = props.excludeCommission;
    this.revRecSchedule = props.revRecSchedule;
    this.undepFunds = props.undepFunds;
    this.canHaveStackable = props.canHaveStackable;
    this.currency = props.currency;
    this.account = props.account;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecEndDate = props.revRecEndDate;
    this.totalCostEstimate = props.totalCostEstimate;
    this.estGrossProfit = props.estGrossProfit;
    this.estGrossProfitPercent = props.estGrossProfitPercent;
    this.exchangeRate = props.exchangeRate;
    this.currencyName = props.currencyName;
    this.promoCode = props.promoCode;
    this.discountItem = props.discountItem;
    this.discountRate = props.discountRate;
    this.isTaxable = props.isTaxable;
    this.taxItem = props.taxItem;
    this.taxRate = props.taxRate;
    this.toBePrinted = props.toBePrinted;
    this.toBeEmailed = props.toBeEmailed;
    this.toBeFaxed = props.toBeFaxed;
    this.fax = props.fax;
    this.messageSel = props.messageSel;
    this.message = props.message;
    this.paymentOption = props.paymentOption;
    this.inputAuthCode = props.inputAuthCode;
    this.inputReferenceCode = props.inputReferenceCode;
    this.checkNumber = props.checkNumber;
    this.paymentCardCsc = props.paymentCardCsc;
    this.paymentProcessingProfile = props.paymentProcessingProfile;
    this.handlingMode = props.handlingMode;
    this.outputAuthCode = props.outputAuthCode;
    this.outputReferenceCode = props.outputReferenceCode;
    this.paymentOperation = props.paymentOperation;
    this.dynamicDescriptor = props.dynamicDescriptor;
    this.billingAddress = props.billingAddress;
    this.billAddressList = props.billAddressList;
    this.shippingAddress = props.shippingAddress;
    this.shipIsResidential = props.shipIsResidential;
    this.shipAddressList = props.shipAddressList;
    this.fob = props.fob;
    this.shipDate = props.shipDate;
    this.shipMethod = props.shipMethod;
    this.shippingCost = props.shippingCost;
    this.shippingTax1Rate = props.shippingTax1Rate;
    this.shippingTax2Rate = props.shippingTax2Rate;
    this.shippingTaxCode = props.shippingTaxCode;
    this.handlingTaxCode = props.handlingTaxCode;
    this.handlingTax1Rate = props.handlingTax1Rate;
    this.handlingCost = props.handlingCost;
    this.handlingTax2Rate = props.handlingTax2Rate;
    this.linkedTrackingNumbers = props.linkedTrackingNumbers;
    this.trackingNumbers = props.trackingNumbers;
    this.salesGroup = props.salesGroup;
    this.revenueStatus = props.revenueStatus;
    this.recognizedRevenue = props.recognizedRevenue;
    this.deferredRevenue = props.deferredRevenue;
    this.revRecOnRevCommitment = props.revRecOnRevCommitment;
    this.syncSalesTeams = props.syncSalesTeams;
    this.paymentMethod = props.paymentMethod;
    this.payPalStatus = props.payPalStatus;
    this.creditCard = props.creditCard;
    this.ccNumber = props.ccNumber;
    this.ccExpireDate = props.ccExpireDate;
    this.ccName = props.ccName;
    this.ccStreet = props.ccStreet;
    this.ccZipCode = props.ccZipCode;
    this.creditCardProcessor = props.creditCardProcessor;
    this.ccApproved = props.ccApproved;
    this.authCode = props.authCode;
    this.ccAvsStreetMatch = props.ccAvsStreetMatch;
    this.ccAvsZipMatch = props.ccAvsZipMatch;
    this.isRecurringPayment = props.isRecurringPayment;
    this.payPalTranId = props.payPalTranId;
    this.subTotal = props.subTotal;
    this.ccIsPurchaseCardBin = props.ccIsPurchaseCardBin;
    this.ignoreAvs = props.ignoreAvs;
    this.ccProcessAsPurchaseCard = props.ccProcessAsPurchaseCard;
    this.itemCostDiscount = props.itemCostDiscount;
    this.itemCostDiscRate = props.itemCostDiscRate;
    this.itemCostDiscAmount = props.itemCostDiscAmount;
    this.itemCostTaxRate1 = props.itemCostTaxRate1;
    this.itemCostTaxRate2 = props.itemCostTaxRate2;
    this.itemCostDiscTaxable = props.itemCostDiscTaxable;
    this.itemCostTaxCode = props.itemCostTaxCode;
    this.itemCostDiscTax1Amt = props.itemCostDiscTax1Amt;
    this.itemCostDiscPrint = props.itemCostDiscPrint;
    this.expCostDiscount = props.expCostDiscount;
    this.expCostDiscRate = props.expCostDiscRate;
    this.expCostDiscAmount = props.expCostDiscAmount;
    this.expCostDiscTaxable = props.expCostDiscTaxable;
    this.expCostDiscprint = props.expCostDiscprint;
    this.expCostTaxRate1 = props.expCostTaxRate1;
    this.timeDiscount = props.timeDiscount;
    this.expCostTaxCode = props.expCostTaxCode;
    this.timeDiscRate = props.timeDiscRate;
    this.expCostTaxRate2 = props.expCostTaxRate2;
    this.expCostDiscTax1Amt = props.expCostDiscTax1Amt;
    this.timeDiscAmount = props.timeDiscAmount;
    this.timeDiscTaxable = props.timeDiscTaxable;
    this.timeDiscPrint = props.timeDiscPrint;
    this.discountTotal = props.discountTotal;
    this.taxTotal = props.taxTotal;
    this.timeTaxRate1 = props.timeTaxRate1;
    this.altShippingCost = props.altShippingCost;
    this.timeTaxCode = props.timeTaxCode;
    this.altHandlingCost = props.altHandlingCost;
    this.total = props.total;
    this.timeDiscTax1Amt = props.timeDiscTax1Amt;
    this.ccSecurityCode = props.ccSecurityCode;
    this.timeTaxRate2 = props.timeTaxRate2;
    this.ccSecurityCodeMatch = props.ccSecurityCodeMatch;
    this.chargeIt = props.chargeIt;
    this.debitCardIssueNo = props.debitCardIssueNo;
    this.threeDStatusCode = props.threeDStatusCode;
    this.pnRefNum = props.pnRefNum;
    this.paypalAuthId = props.paypalAuthId;
    this.status = props.status;
    this.paypalProcess = props.paypalProcess;
    this.job = props.job;
    this.billingSchedule = props.billingSchedule;
    this.email = props.email;
    this.tax2Total = props.tax2Total;
    this.validFrom = props.validFrom;
    this.vatRegNum = props.vatRegNum;
    this.giftCertApplied = props.giftCertApplied;
    this.tranIsVsoeBundle = props.tranIsVsoeBundle;
    this.vsoeAutoCalc = props.vsoeAutoCalc;
    this.syncPartnerTeams = props.syncPartnerTeams;
    this.salesTeamList = props.salesTeamList;
    this.partnersList = props.partnersList;
    this.itemList = props.itemList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.itemCostList = props.itemCostList;
    this.giftCertRedemptionList = props.giftCertRedemptionList;
    this.promotionsList = props.promotionsList;
    this.expCostList = props.expCostList;
    this.timeList = props.timeList;
    this.shipGroupList = props.shipGroupList;
    this.taxDetailsList = props.taxDetailsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class Promotions extends SoapTypes.Base {
  promoCode?: PlatformCore.RecordRef;
  couponCode?: PlatformCore.RecordRef;
  constructor(props: Promotions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.promoCode = props.promoCode;
    this.couponCode = props.couponCode;
  }
}

export class CashSaleSalesTeamList extends SoapTypes.Base {
  salesTeam?: CashSaleSalesTeam[];
  replaceAll?: boolean;
  constructor(props: CashSaleSalesTeamList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.salesTeam = props.salesTeam;
    this.replaceAll = props.replaceAll;
  }
}

export class ItemFulfillmentPackageFedEx extends SoapTypes.Base {
  packageWeightFedEx?: number;
  dryIceWeightFedEx?: number;
  packageTrackingNumberFedEx?: string;
  packagingFedEx?: TransactionsSalesTypes.ItemFulfillmentPackageFedExPackagingFedEx;
  admPackageTypeFedEx?: TransactionsSalesTypes.ItemFulfillmentPackageFedExAdmPackageTypeFedEx;
  isNonStandardContainerFedEx?: boolean;
  isAlcoholFedEx?: boolean;
  alcoholRecipientTypeFedEx?: PlatformCommonTypes.AlcoholRecipientType;
  isNonHazLithiumFedEx?: boolean;
  insuredValueFedEx?: number;
  useInsuredValueFedEx?: boolean;
  reference1FedEx?: string;
  priorityAlertTypeFedEx?: TransactionsSalesTypes.ItemFulfillmentPackageFedExPriorityAlertTypeFedEx;
  priorityAlertContentFedEx?: string;
  packageLengthFedEx?: number;
  packageWidthFedEx?: number;
  packageHeightFedEx?: number;
  useCodFedEx?: boolean;
  codAmountFedEx?: number;
  codMethodFedEx?: TransactionsSalesTypes.ItemFulfillmentPackageFedExCodMethodFedEx;
  codFreightTypeFedEx?: TransactionsSalesTypes.ItemFulfillmentPackageFedExCodFreightTypeFedEx;
  deliveryConfFedEx?: TransactionsSalesTypes.ItemFulfillmentPackageFedExDeliveryConfFedEx;
  signatureOptionsFedEx?: TransactionsSalesTypes.ItemFulfillmentPackageFedExSignatureOptionsFedEx;
  signatureReleaseFedEx?: string;
  authorizationNumberFedEx?: string;
  constructor(props: ItemFulfillmentPackageFedEx) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.packageWeightFedEx = props.packageWeightFedEx;
    this.dryIceWeightFedEx = props.dryIceWeightFedEx;
    this.packageTrackingNumberFedEx = props.packageTrackingNumberFedEx;
    this.packagingFedEx = props.packagingFedEx;
    this.admPackageTypeFedEx = props.admPackageTypeFedEx;
    this.isNonStandardContainerFedEx = props.isNonStandardContainerFedEx;
    this.isAlcoholFedEx = props.isAlcoholFedEx;
    this.alcoholRecipientTypeFedEx = props.alcoholRecipientTypeFedEx;
    this.isNonHazLithiumFedEx = props.isNonHazLithiumFedEx;
    this.insuredValueFedEx = props.insuredValueFedEx;
    this.useInsuredValueFedEx = props.useInsuredValueFedEx;
    this.reference1FedEx = props.reference1FedEx;
    this.priorityAlertTypeFedEx = props.priorityAlertTypeFedEx;
    this.priorityAlertContentFedEx = props.priorityAlertContentFedEx;
    this.packageLengthFedEx = props.packageLengthFedEx;
    this.packageWidthFedEx = props.packageWidthFedEx;
    this.packageHeightFedEx = props.packageHeightFedEx;
    this.useCodFedEx = props.useCodFedEx;
    this.codAmountFedEx = props.codAmountFedEx;
    this.codMethodFedEx = props.codMethodFedEx;
    this.codFreightTypeFedEx = props.codFreightTypeFedEx;
    this.deliveryConfFedEx = props.deliveryConfFedEx;
    this.signatureOptionsFedEx = props.signatureOptionsFedEx;
    this.signatureReleaseFedEx = props.signatureReleaseFedEx;
    this.authorizationNumberFedEx = props.authorizationNumberFedEx;
  }
}

export class SalesOrderSalesTeam extends SoapTypes.Base {
  employee?: PlatformCore.RecordRef;
  salesRole?: PlatformCore.RecordRef;
  isPrimary?: boolean;
  contribution?: number;
  constructor(props: SalesOrderSalesTeam) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employee = props.employee;
    this.salesRole = props.salesRole;
    this.isPrimary = props.isPrimary;
    this.contribution = props.contribution;
  }
}

export class CashSaleShipGroupList extends SoapTypes.Base {
  shipGroup?: TransactionShipGroup[];
  replaceAll?: boolean;
  constructor(props: CashSaleShipGroupList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.shipGroup = props.shipGroup;
    this.replaceAll = props.replaceAll;
  }
}

export class EstimateShipGroupList extends SoapTypes.Base {
  shipGroup?: TransactionShipGroup[];
  replaceAll?: boolean;
  constructor(props: EstimateShipGroupList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.shipGroup = props.shipGroup;
    this.replaceAll = props.replaceAll;
  }
}

export class UsageSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: UsageSearch;
  columns?: UsageSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: UsageSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class ItemFulfillmentPackageUspsList extends SoapTypes.Base {
  packageUsps?: ItemFulfillmentPackageUsps[];
  replaceAll?: boolean;
  constructor(props: ItemFulfillmentPackageUspsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.packageUsps = props.packageUsps;
    this.replaceAll = props.replaceAll;
  }
}

export class OpportunitySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.OpportunitySearchRowBasic;
  actualJoin?: PlatformCommon.TransactionSearchRowBasic;
  callJoin?: PlatformCommon.PhoneCallSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  decisionMakerJoin?: PlatformCommon.ContactSearchRowBasic;
  estimateJoin?: PlatformCommon.TransactionSearchRowBasic;
  eventJoin?: PlatformCommon.CalendarEventSearchRowBasic;
  fileJoin?: PlatformCommon.FileSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  leadSourceJoin?: PlatformCommon.CampaignSearchRowBasic;
  messagesJoin?: PlatformCommon.MessageSearchRowBasic;
  orderJoin?: PlatformCommon.TransactionSearchRowBasic;
  originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchRowBasic;
  partnerJoin?: PlatformCommon.PartnerSearchRowBasic;
  salesRepJoin?: PlatformCommon.EmployeeSearchRowBasic;
  taskJoin?: PlatformCommon.TaskSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: OpportunitySearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.actualJoin = props.actualJoin;
    this.callJoin = props.callJoin;
    this.customerJoin = props.customerJoin;
    this.decisionMakerJoin = props.decisionMakerJoin;
    this.estimateJoin = props.estimateJoin;
    this.eventJoin = props.eventJoin;
    this.fileJoin = props.fileJoin;
    this.itemJoin = props.itemJoin;
    this.leadSourceJoin = props.leadSourceJoin;
    this.messagesJoin = props.messagesJoin;
    this.orderJoin = props.orderJoin;
    this.originatingLeadJoin = props.originatingLeadJoin;
    this.partnerJoin = props.partnerJoin;
    this.salesRepJoin = props.salesRepJoin;
    this.taskJoin = props.taskJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class CashSaleExpCost extends SoapTypes.Base {
  apply?: boolean;
  doc?: number;
  line?: number;
  taxDetailsReference?: string;
  billedDate?: SoapTypes.Dateish;
  jobDisp?: string;
  employeeDisp?: string;
  categoryDisp?: string;
  memo?: string;
  department?: string;
  clazz?: string;
  location?: string;
  originalAmount?: number;
  amount?: number;
  taxAmount?: number;
  taxableDisp?: string;
  revRecSchedule?: PlatformCore.RecordRef;
  revRecStartDate?: SoapTypes.Dateish;
  revRecEndDate?: SoapTypes.Dateish;
  grossAmt?: number;
  tax1Amt?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  constructor(props: CashSaleExpCost) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.apply = props.apply;
    this.doc = props.doc;
    this.line = props.line;
    this.taxDetailsReference = props.taxDetailsReference;
    this.billedDate = props.billedDate;
    this.jobDisp = props.jobDisp;
    this.employeeDisp = props.employeeDisp;
    this.categoryDisp = props.categoryDisp;
    this.memo = props.memo;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.originalAmount = props.originalAmount;
    this.amount = props.amount;
    this.taxAmount = props.taxAmount;
    this.taxableDisp = props.taxableDisp;
    this.revRecSchedule = props.revRecSchedule;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecEndDate = props.revRecEndDate;
    this.grossAmt = props.grossAmt;
    this.tax1Amt = props.tax1Amt;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
  }
}

export class EstimateSalesTeamList extends SoapTypes.Base {
  salesTeam?: EstimateSalesTeam[];
  replaceAll?: boolean;
  constructor(props: EstimateSalesTeamList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.salesTeam = props.salesTeam;
    this.replaceAll = props.replaceAll;
  }
}

export class CashSalePartnersList extends SoapTypes.Base {
  partners?: PlatformCommon.Partners[];
  replaceAll?: boolean;
  constructor(props: CashSalePartnersList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.partners = props.partners;
    this.replaceAll = props.replaceAll;
  }
}

export class Invoice extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  customForm?: PlatformCore.RecordRef;
  nextApprover?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  billingAccount?: PlatformCore.RecordRef;
  recurringBill?: boolean;
  tranDate?: SoapTypes.Dateish;
  tranId?: string;
  entityTaxRegNum?: PlatformCore.RecordRef;
  taxPointDate?: SoapTypes.Dateish;
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
  dueDate?: SoapTypes.Dateish;
  discountDate?: SoapTypes.Dateish;
  discountAmount?: number;
  salesRep?: PlatformCore.RecordRef;
  contribPct?: string;
  partner?: PlatformCore.RecordRef;
  leadSource?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  otherRefNum?: string;
  memo?: string;
  salesEffectiveDate?: SoapTypes.Dateish;
  excludeCommission?: boolean;
  totalCostEstimate?: number;
  estGrossProfit?: number;
  estGrossProfitPercent?: number;
  revRecSchedule?: PlatformCore.RecordRef;
  revRecStartDate?: SoapTypes.Dateish;
  revRecEndDate?: SoapTypes.Dateish;
  amountPaid?: number;
  amountRemaining?: number;
  balance?: number;
  account?: PlatformCore.RecordRef;
  onCreditHold?: string;
  exchangeRate?: number;
  currencyName?: string;
  promoCode?: PlatformCore.RecordRef;
  discountItem?: PlatformCore.RecordRef;
  discountRate?: string;
  isTaxable?: boolean;
  taxItem?: PlatformCore.RecordRef;
  taxRate?: number;
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
  shipDate?: SoapTypes.Dateish;
  shipMethod?: PlatformCore.RecordRef;
  shippingCost?: number;
  shippingTax1Rate?: number;
  shippingTax2Rate?: string;
  shippingTaxCode?: PlatformCore.RecordRef;
  handlingTaxCode?: PlatformCore.RecordRef;
  handlingTax1Rate?: number;
  handlingCost?: number;
  handlingTax2Rate?: string;
  trackingNumbers?: string;
  linkedTrackingNumbers?: string;
  salesGroup?: PlatformCore.RecordRef;
  subTotal?: number;
  canHaveStackable?: boolean;
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
  billingSchedule?: PlatformCore.RecordRef;
  email?: string;
  tax2Total?: number;
  vatRegNum?: string;
  expCostDiscount?: PlatformCore.RecordRef;
  itemCostDiscount?: PlatformCore.RecordRef;
  timeDiscount?: PlatformCore.RecordRef;
  expCostDiscRate?: string;
  itemCostDiscRate?: string;
  timeDiscRate?: string;
  expCostDiscAmount?: number;
  expCostTaxRate1?: number;
  expCostTaxRate2?: number;
  itemCostDiscAmount?: number;
  expCostTaxCode?: PlatformCore.RecordRef;
  expCostDiscTax1Amt?: number;
  itemCostTaxRate1?: number;
  timeDiscAmount?: number;
  itemCostTaxCode?: PlatformCore.RecordRef;
  expCostDiscTaxable?: boolean;
  itemCostDiscTaxable?: boolean;
  itemCostTaxRate2?: number;
  itemCostDiscTax1Amt?: number;
  itemCostDiscPrint?: boolean;
  timeDiscTaxable?: boolean;
  timeTaxRate1?: number;
  expCostDiscPrint?: boolean;
  timeTaxCode?: PlatformCore.RecordRef;
  timeDiscPrint?: boolean;
  giftCertApplied?: number;
  timeDiscTax1Amt?: number;
  tranIsVsoeBundle?: boolean;
  timeTaxRate2?: number;
  vsoeAutoCalc?: boolean;
  syncPartnerTeams?: boolean;
  salesTeamList?: InvoiceSalesTeamList;
  partnersList?: InvoicePartnersList;
  itemList?: InvoiceItemList;
  itemCostList?: InvoiceItemCostList;
  giftCertRedemptionList?: PlatformCommon.GiftCertRedemptionList;
  promotionsList?: PromotionsList;
  expCostList?: InvoiceExpCostList;
  timeList?: InvoiceTimeList;
  shipGroupList?: InvoiceShipGroupList;
  approvalStatus?: PlatformCore.RecordRef;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Invoice) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.nexus = props.nexus;
    this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
    this.taxRegOverride = props.taxRegOverride;
    this.taxDetailsOverride = props.taxDetailsOverride;
    this.customForm = props.customForm;
    this.nextApprover = props.nextApprover;
    this.entity = props.entity;
    this.billingAccount = props.billingAccount;
    this.recurringBill = props.recurringBill;
    this.tranDate = props.tranDate;
    this.tranId = props.tranId;
    this.entityTaxRegNum = props.entityTaxRegNum;
    this.taxPointDate = props.taxPointDate;
    this.source = props.source;
    this.createdFrom = props.createdFrom;
    this.postingPeriod = props.postingPeriod;
    this.opportunity = props.opportunity;
    this.department = props.department;
    this.clazz = props.clazz;
    this.terms = props.terms;
    this.location = props.location;
    this.subsidiary = props.subsidiary;
    this.currency = props.currency;
    this.dueDate = props.dueDate;
    this.discountDate = props.discountDate;
    this.discountAmount = props.discountAmount;
    this.salesRep = props.salesRep;
    this.contribPct = props.contribPct;
    this.partner = props.partner;
    this.leadSource = props.leadSource;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.otherRefNum = props.otherRefNum;
    this.memo = props.memo;
    this.salesEffectiveDate = props.salesEffectiveDate;
    this.excludeCommission = props.excludeCommission;
    this.totalCostEstimate = props.totalCostEstimate;
    this.estGrossProfit = props.estGrossProfit;
    this.estGrossProfitPercent = props.estGrossProfitPercent;
    this.revRecSchedule = props.revRecSchedule;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecEndDate = props.revRecEndDate;
    this.amountPaid = props.amountPaid;
    this.amountRemaining = props.amountRemaining;
    this.balance = props.balance;
    this.account = props.account;
    this.onCreditHold = props.onCreditHold;
    this.exchangeRate = props.exchangeRate;
    this.currencyName = props.currencyName;
    this.promoCode = props.promoCode;
    this.discountItem = props.discountItem;
    this.discountRate = props.discountRate;
    this.isTaxable = props.isTaxable;
    this.taxItem = props.taxItem;
    this.taxRate = props.taxRate;
    this.toBePrinted = props.toBePrinted;
    this.toBeEmailed = props.toBeEmailed;
    this.toBeFaxed = props.toBeFaxed;
    this.fax = props.fax;
    this.messageSel = props.messageSel;
    this.message = props.message;
    this.billingAddress = props.billingAddress;
    this.billAddressList = props.billAddressList;
    this.shippingAddress = props.shippingAddress;
    this.shipIsResidential = props.shipIsResidential;
    this.shipAddressList = props.shipAddressList;
    this.fob = props.fob;
    this.shipDate = props.shipDate;
    this.shipMethod = props.shipMethod;
    this.shippingCost = props.shippingCost;
    this.shippingTax1Rate = props.shippingTax1Rate;
    this.shippingTax2Rate = props.shippingTax2Rate;
    this.shippingTaxCode = props.shippingTaxCode;
    this.handlingTaxCode = props.handlingTaxCode;
    this.handlingTax1Rate = props.handlingTax1Rate;
    this.handlingCost = props.handlingCost;
    this.handlingTax2Rate = props.handlingTax2Rate;
    this.trackingNumbers = props.trackingNumbers;
    this.linkedTrackingNumbers = props.linkedTrackingNumbers;
    this.salesGroup = props.salesGroup;
    this.subTotal = props.subTotal;
    this.canHaveStackable = props.canHaveStackable;
    this.revenueStatus = props.revenueStatus;
    this.recognizedRevenue = props.recognizedRevenue;
    this.deferredRevenue = props.deferredRevenue;
    this.revRecOnRevCommitment = props.revRecOnRevCommitment;
    this.syncSalesTeams = props.syncSalesTeams;
    this.discountTotal = props.discountTotal;
    this.taxTotal = props.taxTotal;
    this.altShippingCost = props.altShippingCost;
    this.altHandlingCost = props.altHandlingCost;
    this.total = props.total;
    this.status = props.status;
    this.job = props.job;
    this.billingSchedule = props.billingSchedule;
    this.email = props.email;
    this.tax2Total = props.tax2Total;
    this.vatRegNum = props.vatRegNum;
    this.expCostDiscount = props.expCostDiscount;
    this.itemCostDiscount = props.itemCostDiscount;
    this.timeDiscount = props.timeDiscount;
    this.expCostDiscRate = props.expCostDiscRate;
    this.itemCostDiscRate = props.itemCostDiscRate;
    this.timeDiscRate = props.timeDiscRate;
    this.expCostDiscAmount = props.expCostDiscAmount;
    this.expCostTaxRate1 = props.expCostTaxRate1;
    this.expCostTaxRate2 = props.expCostTaxRate2;
    this.itemCostDiscAmount = props.itemCostDiscAmount;
    this.expCostTaxCode = props.expCostTaxCode;
    this.expCostDiscTax1Amt = props.expCostDiscTax1Amt;
    this.itemCostTaxRate1 = props.itemCostTaxRate1;
    this.timeDiscAmount = props.timeDiscAmount;
    this.itemCostTaxCode = props.itemCostTaxCode;
    this.expCostDiscTaxable = props.expCostDiscTaxable;
    this.itemCostDiscTaxable = props.itemCostDiscTaxable;
    this.itemCostTaxRate2 = props.itemCostTaxRate2;
    this.itemCostDiscTax1Amt = props.itemCostDiscTax1Amt;
    this.itemCostDiscPrint = props.itemCostDiscPrint;
    this.timeDiscTaxable = props.timeDiscTaxable;
    this.timeTaxRate1 = props.timeTaxRate1;
    this.expCostDiscPrint = props.expCostDiscPrint;
    this.timeTaxCode = props.timeTaxCode;
    this.timeDiscPrint = props.timeDiscPrint;
    this.giftCertApplied = props.giftCertApplied;
    this.timeDiscTax1Amt = props.timeDiscTax1Amt;
    this.tranIsVsoeBundle = props.tranIsVsoeBundle;
    this.timeTaxRate2 = props.timeTaxRate2;
    this.vsoeAutoCalc = props.vsoeAutoCalc;
    this.syncPartnerTeams = props.syncPartnerTeams;
    this.salesTeamList = props.salesTeamList;
    this.partnersList = props.partnersList;
    this.itemList = props.itemList;
    this.itemCostList = props.itemCostList;
    this.giftCertRedemptionList = props.giftCertRedemptionList;
    this.promotionsList = props.promotionsList;
    this.expCostList = props.expCostList;
    this.timeList = props.timeList;
    this.shipGroupList = props.shipGroupList;
    this.approvalStatus = props.approvalStatus;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.taxDetailsList = props.taxDetailsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class InvoiceItemList extends SoapTypes.Base {
  item?: InvoiceItem[];
  replaceAll?: boolean;
  constructor(props: InvoiceItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export class Estimate extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  entity?: PlatformCore.RecordRef;
  job?: PlatformCore.RecordRef;
  tranDate?: SoapTypes.Dateish;
  tranId?: string;
  entityTaxRegNum?: PlatformCore.RecordRef;
  taxPointDate?: SoapTypes.Dateish;
  source?: string;
  customForm?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  title?: string;
  entityStatus?: PlatformCore.RecordRef;
  probability?: number;
  includeInForecast?: boolean;
  forecastType?: PlatformCore.RecordRef;
  opportunity?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  terms?: PlatformCore.RecordRef;
  dueDate?: SoapTypes.Dateish;
  location?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  billingSchedule?: PlatformCore.RecordRef;
  status?: string;
  salesRep?: PlatformCore.RecordRef;
  partner?: PlatformCore.RecordRef;
  contribPct?: string;
  leadSource?: PlatformCore.RecordRef;
  expectedCloseDate?: SoapTypes.Dateish;
  otherRefNum?: string;
  memo?: string;
  endDate?: SoapTypes.Dateish;
  startDate?: SoapTypes.Dateish;
  totalCostEstimate?: number;
  estGrossProfit?: number;
  estGrossProfitPercent?: number;
  createdFrom?: PlatformCore.RecordRef;
  exchangeRate?: number;
  currencyName?: string;
  promoCode?: PlatformCore.RecordRef;
  discountItem?: PlatformCore.RecordRef;
  discountRate?: string;
  isTaxable?: boolean;
  taxItem?: PlatformCore.RecordRef;
  taxRate?: number;
  vatRegNum?: string;
  toBePrinted?: boolean;
  toBeEmailed?: boolean;
  email?: string;
  toBeFaxed?: boolean;
  fax?: string;
  visibleToCustomer?: boolean;
  messageSel?: PlatformCore.RecordRef;
  message?: string;
  billingAddress?: PlatformCommon.Address;
  billAddressList?: PlatformCore.RecordRef;
  shippingAddress?: PlatformCommon.Address;
  shipIsResidential?: boolean;
  shipAddressList?: PlatformCore.RecordRef;
  fob?: string;
  shipDate?: SoapTypes.Dateish;
  shipMethod?: PlatformCore.RecordRef;
  shippingCost?: number;
  shippingTax1Rate?: number;
  shippingTaxCode?: PlatformCore.RecordRef;
  shippingTax2Rate?: string;
  handlingTaxCode?: PlatformCore.RecordRef;
  handlingTax1Rate?: number;
  handlingCost?: number;
  trackingNumbers?: string;
  handlingTax2Rate?: string;
  linkedTrackingNumbers?: string;
  salesGroup?: PlatformCore.RecordRef;
  syncSalesTeams?: boolean;
  altSalesTotal?: number;
  canHaveStackable?: boolean;
  oneTime?: number;
  recurWeekly?: number;
  recurMonthly?: number;
  recurQuarterly?: number;
  recurAnnually?: number;
  subTotal?: number;
  discountTotal?: number;
  taxTotal?: number;
  altShippingCost?: number;
  altHandlingCost?: number;
  total?: number;
  tax2Total?: number;
  itemList?: EstimateItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  salesTeamList?: EstimateSalesTeamList;
  syncPartnerTeams?: boolean;
  partnersList?: EstimatePartnersList;
  promotionsList?: PromotionsList;
  shipGroupList?: EstimateShipGroupList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Estimate) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.nexus = props.nexus;
    this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
    this.taxRegOverride = props.taxRegOverride;
    this.taxDetailsOverride = props.taxDetailsOverride;
    this.entity = props.entity;
    this.job = props.job;
    this.tranDate = props.tranDate;
    this.tranId = props.tranId;
    this.entityTaxRegNum = props.entityTaxRegNum;
    this.taxPointDate = props.taxPointDate;
    this.source = props.source;
    this.customForm = props.customForm;
    this.currency = props.currency;
    this.title = props.title;
    this.entityStatus = props.entityStatus;
    this.probability = props.probability;
    this.includeInForecast = props.includeInForecast;
    this.forecastType = props.forecastType;
    this.opportunity = props.opportunity;
    this.department = props.department;
    this.clazz = props.clazz;
    this.terms = props.terms;
    this.dueDate = props.dueDate;
    this.location = props.location;
    this.subsidiary = props.subsidiary;
    this.billingSchedule = props.billingSchedule;
    this.status = props.status;
    this.salesRep = props.salesRep;
    this.partner = props.partner;
    this.contribPct = props.contribPct;
    this.leadSource = props.leadSource;
    this.expectedCloseDate = props.expectedCloseDate;
    this.otherRefNum = props.otherRefNum;
    this.memo = props.memo;
    this.endDate = props.endDate;
    this.startDate = props.startDate;
    this.totalCostEstimate = props.totalCostEstimate;
    this.estGrossProfit = props.estGrossProfit;
    this.estGrossProfitPercent = props.estGrossProfitPercent;
    this.createdFrom = props.createdFrom;
    this.exchangeRate = props.exchangeRate;
    this.currencyName = props.currencyName;
    this.promoCode = props.promoCode;
    this.discountItem = props.discountItem;
    this.discountRate = props.discountRate;
    this.isTaxable = props.isTaxable;
    this.taxItem = props.taxItem;
    this.taxRate = props.taxRate;
    this.vatRegNum = props.vatRegNum;
    this.toBePrinted = props.toBePrinted;
    this.toBeEmailed = props.toBeEmailed;
    this.email = props.email;
    this.toBeFaxed = props.toBeFaxed;
    this.fax = props.fax;
    this.visibleToCustomer = props.visibleToCustomer;
    this.messageSel = props.messageSel;
    this.message = props.message;
    this.billingAddress = props.billingAddress;
    this.billAddressList = props.billAddressList;
    this.shippingAddress = props.shippingAddress;
    this.shipIsResidential = props.shipIsResidential;
    this.shipAddressList = props.shipAddressList;
    this.fob = props.fob;
    this.shipDate = props.shipDate;
    this.shipMethod = props.shipMethod;
    this.shippingCost = props.shippingCost;
    this.shippingTax1Rate = props.shippingTax1Rate;
    this.shippingTaxCode = props.shippingTaxCode;
    this.shippingTax2Rate = props.shippingTax2Rate;
    this.handlingTaxCode = props.handlingTaxCode;
    this.handlingTax1Rate = props.handlingTax1Rate;
    this.handlingCost = props.handlingCost;
    this.trackingNumbers = props.trackingNumbers;
    this.handlingTax2Rate = props.handlingTax2Rate;
    this.linkedTrackingNumbers = props.linkedTrackingNumbers;
    this.salesGroup = props.salesGroup;
    this.syncSalesTeams = props.syncSalesTeams;
    this.altSalesTotal = props.altSalesTotal;
    this.canHaveStackable = props.canHaveStackable;
    this.oneTime = props.oneTime;
    this.recurWeekly = props.recurWeekly;
    this.recurMonthly = props.recurMonthly;
    this.recurQuarterly = props.recurQuarterly;
    this.recurAnnually = props.recurAnnually;
    this.subTotal = props.subTotal;
    this.discountTotal = props.discountTotal;
    this.taxTotal = props.taxTotal;
    this.altShippingCost = props.altShippingCost;
    this.altHandlingCost = props.altHandlingCost;
    this.total = props.total;
    this.tax2Total = props.tax2Total;
    this.itemList = props.itemList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.salesTeamList = props.salesTeamList;
    this.syncPartnerTeams = props.syncPartnerTeams;
    this.partnersList = props.partnersList;
    this.promotionsList = props.promotionsList;
    this.shipGroupList = props.shipGroupList;
    this.taxDetailsList = props.taxDetailsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class TransactionShipGroup extends SoapTypes.Base {
  id?: number;
  isFulfilled?: boolean;
  weight?: number;
  sourceAddressRef?: PlatformCore.RecordRef;
  sourceAddress?: string;
  destinationAddressRef?: PlatformCore.RecordRef;
  destinationAddress?: string;
  shippingMethodRef?: PlatformCore.RecordRef;
  shippingMethod?: string;
  isHandlingTaxable?: boolean;
  handlingTaxCode?: PlatformCore.RecordRef;
  handlingTaxRate?: string;
  handlingTax2Rate?: string;
  handlingRate?: number;
  handlingTaxAmt?: number;
  handlingTax2Amt?: number;
  isShippingTaxable?: boolean;
  shippingTaxCode?: PlatformCore.RecordRef;
  shippingTaxRate?: string;
  shippingTax2Rate?: string;
  shippingRate?: number;
  shippingTaxAmt?: number;
  shippingTax2Amt?: number;
  constructor(props: TransactionShipGroup) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.id = props.id;
    this.isFulfilled = props.isFulfilled;
    this.weight = props.weight;
    this.sourceAddressRef = props.sourceAddressRef;
    this.sourceAddress = props.sourceAddress;
    this.destinationAddressRef = props.destinationAddressRef;
    this.destinationAddress = props.destinationAddress;
    this.shippingMethodRef = props.shippingMethodRef;
    this.shippingMethod = props.shippingMethod;
    this.isHandlingTaxable = props.isHandlingTaxable;
    this.handlingTaxCode = props.handlingTaxCode;
    this.handlingTaxRate = props.handlingTaxRate;
    this.handlingTax2Rate = props.handlingTax2Rate;
    this.handlingRate = props.handlingRate;
    this.handlingTaxAmt = props.handlingTaxAmt;
    this.handlingTax2Amt = props.handlingTax2Amt;
    this.isShippingTaxable = props.isShippingTaxable;
    this.shippingTaxCode = props.shippingTaxCode;
    this.shippingTaxRate = props.shippingTaxRate;
    this.shippingTax2Rate = props.shippingTax2Rate;
    this.shippingRate = props.shippingRate;
    this.shippingTaxAmt = props.shippingTaxAmt;
    this.shippingTax2Amt = props.shippingTax2Amt;
  }
}

export class InvoicePartnersList extends SoapTypes.Base {
  partners?: PlatformCommon.Partners[];
  replaceAll?: boolean;
  constructor(props: InvoicePartnersList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.partners = props.partners;
    this.replaceAll = props.replaceAll;
  }
}

export class EstimatePartnersList extends SoapTypes.Base {
  partners?: PlatformCommon.Partners[];
  replaceAll?: boolean;
  constructor(props: EstimatePartnersList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.partners = props.partners;
    this.replaceAll = props.replaceAll;
  }
}

export class OpportunitySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: OpportunitySearch;
  columns?: OpportunitySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: OpportunitySearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class CashSaleSalesTeam extends SoapTypes.Base {
  employee?: PlatformCore.RecordRef;
  salesRole?: PlatformCore.RecordRef;
  isPrimary?: boolean;
  contribution?: number;
  constructor(props: CashSaleSalesTeam) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employee = props.employee;
    this.salesRole = props.salesRole;
    this.isPrimary = props.isPrimary;
    this.contribution = props.contribution;
  }
}

export class CashSaleItemList extends SoapTypes.Base {
  item?: CashSaleItem[];
  replaceAll?: boolean;
  constructor(props: CashSaleItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export class InvoiceExpCost extends SoapTypes.Base {
  apply?: boolean;
  doc?: number;
  line?: number;
  taxDetailsReference?: string;
  billedDate?: SoapTypes.Dateish;
  jobDisp?: string;
  employeeDisp?: string;
  categoryDisp?: string;
  memo?: string;
  department?: string;
  clazz?: string;
  location?: string;
  originalAmount?: number;
  amount?: number;
  taxAmount?: number;
  taxableDisp?: string;
  revRecSchedule?: PlatformCore.RecordRef;
  revRecStartDate?: SoapTypes.Dateish;
  revRecEndDate?: SoapTypes.Dateish;
  grossAmt?: number;
  tax1Amt?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  constructor(props: InvoiceExpCost) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.apply = props.apply;
    this.doc = props.doc;
    this.line = props.line;
    this.taxDetailsReference = props.taxDetailsReference;
    this.billedDate = props.billedDate;
    this.jobDisp = props.jobDisp;
    this.employeeDisp = props.employeeDisp;
    this.categoryDisp = props.categoryDisp;
    this.memo = props.memo;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.originalAmount = props.originalAmount;
    this.amount = props.amount;
    this.taxAmount = props.taxAmount;
    this.taxableDisp = props.taxableDisp;
    this.revRecSchedule = props.revRecSchedule;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecEndDate = props.revRecEndDate;
    this.grossAmt = props.grossAmt;
    this.tax1Amt = props.tax1Amt;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
  }
}

export class AccountingTransactionSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.AccountingTransactionSearchRowBasic;
  accountJoin?: PlatformCommon.AccountSearchRowBasic;
  revRecScheduleJoin?: PlatformCommon.RevRecScheduleSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  constructor(props: AccountingTransactionSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.accountJoin = props.accountJoin;
    this.revRecScheduleJoin = props.revRecScheduleJoin;
    this.transactionJoin = props.transactionJoin;
  }
}

export class InvoiceItemCost extends SoapTypes.Base {
  apply?: boolean;
  doc?: number;
  line?: number;
  taxDetailsReference?: string;
  billedDate?: SoapTypes.Dateish;
  itemDisp?: string;
  memo?: string;
  jobDisp?: string;
  department?: string;
  clazz?: string;
  location?: string;
  unitDisp?: string;
  options?: PlatformCore.CustomFieldList;
  itemCostCount?: string;
  quantity?: string;
  serialNumbers?: string;
  cost?: number;
  amount?: number;
  taxAmount?: number;
  revRecSchedule?: PlatformCore.RecordRef;
  revRecStartDate?: SoapTypes.Dateish;
  revRecEndDate?: SoapTypes.Dateish;
  grossAmt?: number;
  tax1Amt?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  constructor(props: InvoiceItemCost) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.apply = props.apply;
    this.doc = props.doc;
    this.line = props.line;
    this.taxDetailsReference = props.taxDetailsReference;
    this.billedDate = props.billedDate;
    this.itemDisp = props.itemDisp;
    this.memo = props.memo;
    this.jobDisp = props.jobDisp;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.unitDisp = props.unitDisp;
    this.options = props.options;
    this.itemCostCount = props.itemCostCount;
    this.quantity = props.quantity;
    this.serialNumbers = props.serialNumbers;
    this.cost = props.cost;
    this.amount = props.amount;
    this.taxAmount = props.taxAmount;
    this.revRecSchedule = props.revRecSchedule;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecEndDate = props.revRecEndDate;
    this.grossAmt = props.grossAmt;
    this.tax1Amt = props.tax1Amt;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
  }
}

export class ItemFulfillmentPackageUps extends SoapTypes.Base {
  packageWeightUps?: number;
  packageDescrUps?: string;
  packageTrackingNumberUps?: string;
  packagingUps?: TransactionsSalesTypes.ItemFulfillmentPackageUpsPackagingUps;
  useInsuredValueUps?: boolean;
  insuredValueUps?: number;
  reference1Ups?: string;
  reference2Ups?: string;
  packageLengthUps?: number;
  packageWidthUps?: number;
  packageHeightUps?: number;
  additionalHandlingUps?: boolean;
  useCodUps?: boolean;
  codAmountUps?: number;
  codMethodUps?: TransactionsSalesTypes.ItemFulfillmentPackageUpsCodMethodUps;
  deliveryConfUps?: TransactionsSalesTypes.ItemFulfillmentPackageUpsDeliveryConfUps;
  constructor(props: ItemFulfillmentPackageUps) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.packageWeightUps = props.packageWeightUps;
    this.packageDescrUps = props.packageDescrUps;
    this.packageTrackingNumberUps = props.packageTrackingNumberUps;
    this.packagingUps = props.packagingUps;
    this.useInsuredValueUps = props.useInsuredValueUps;
    this.insuredValueUps = props.insuredValueUps;
    this.reference1Ups = props.reference1Ups;
    this.reference2Ups = props.reference2Ups;
    this.packageLengthUps = props.packageLengthUps;
    this.packageWidthUps = props.packageWidthUps;
    this.packageHeightUps = props.packageHeightUps;
    this.additionalHandlingUps = props.additionalHandlingUps;
    this.useCodUps = props.useCodUps;
    this.codAmountUps = props.codAmountUps;
    this.codMethodUps = props.codMethodUps;
    this.deliveryConfUps = props.deliveryConfUps;
  }
}
