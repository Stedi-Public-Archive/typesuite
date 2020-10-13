import * as SoapTypes from "../../util/soap-types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as TransactionsCustomersTypes from "./transactions_customers_types";
import * as PlatformCommonTypes from "./platform_common_types";

const mappingsName = "com_netsuite_webservices_transactions_customers_2019_2";

export class ReturnAuthorizationSalesTeamList extends SoapTypes.Base {
  salesTeam?: ReturnAuthorizationSalesTeam[];
  replaceAll?: boolean;
  constructor(props: ReturnAuthorizationSalesTeamList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.salesTeam = props.salesTeam;
    this.replaceAll = props.replaceAll;
  }
}

export class CreditMemoApply extends SoapTypes.Base {
  apply?: boolean;
  doc?: number;
  applyDate?: SoapTypes.Dateish;
  job?: string;
  type?: string;
  refNum?: string;
  total?: number;
  due?: number;
  currency?: string;
  amount?: number;
  line?: number;
  constructor(props: CreditMemoApply) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.apply = props.apply;
    this.doc = props.doc;
    this.applyDate = props.applyDate;
    this.job = props.job;
    this.type = props.type;
    this.refNum = props.refNum;
    this.total = props.total;
    this.due = props.due;
    this.currency = props.currency;
    this.amount = props.amount;
    this.line = props.line;
  }
}

export class CustomerPaymentDepositList extends SoapTypes.Base {
  deposit?: CustomerPaymentDeposit[];
  replaceAll?: boolean;
  constructor(props: CustomerPaymentDepositList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.deposit = props.deposit;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomerRefundApply extends SoapTypes.Base {
  apply?: boolean;
  doc?: number;
  line?: number;
  applyDate?: SoapTypes.Dateish;
  type?: string;
  refNum?: string;
  total?: number;
  due?: number;
  currency?: string;
  amount?: number;
  constructor(props: CustomerRefundApply) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.apply = props.apply;
    this.doc = props.doc;
    this.line = props.line;
    this.applyDate = props.applyDate;
    this.type = props.type;
    this.refNum = props.refNum;
    this.total = props.total;
    this.due = props.due;
    this.currency = props.currency;
    this.amount = props.amount;
  }
}

export class ReturnAuthorization extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  customForm?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  vatRegNum?: string;
  tranDate?: SoapTypes.Dateish;
  tranId?: string;
  entityTaxRegNum?: PlatformCore.RecordRef;
  taxPointDate?: SoapTypes.Dateish;
  source?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  intercoTransaction?: PlatformCore.RecordRef;
  intercoStatus?: PlatformCommonTypes.IntercoStatus;
  job?: PlatformCore.RecordRef;
  partner?: PlatformCore.RecordRef;
  otherRefNum?: string;
  leadSource?: PlatformCore.RecordRef;
  memo?: string;
  drAccount?: PlatformCore.RecordRef;
  fxAccount?: PlatformCore.RecordRef;
  salesEffectiveDate?: SoapTypes.Dateish;
  createdFrom?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  totalCostEstimate?: number;
  estGrossProfit?: number;
  estGrossProfitPercent?: number;
  revRecStartDate?: SoapTypes.Dateish;
  revRecEndDate?: SoapTypes.Dateish;
  excludeCommission?: boolean;
  exchangeRate?: number;
  currencyName?: string;
  discountItem?: PlatformCore.RecordRef;
  discountRate?: string;
  taxItem?: PlatformCore.RecordRef;
  taxRate?: number;
  toBePrinted?: boolean;
  toBeEmailed?: boolean;
  toBeFaxed?: boolean;
  messageSel?: PlatformCore.RecordRef;
  message?: string;
  billingAddress?: PlatformCommon.Address;
  billAddressList?: PlatformCore.RecordRef;
  shipAddressList?: PlatformCore.RecordRef;
  shipAddress?: string;
  salesGroup?: PlatformCore.RecordRef;
  syncSalesTeams?: boolean;
  revenueStatus?: PlatformCommonTypes.RevenueStatus;
  recognizedRevenue?: number;
  deferredRevenue?: number;
  revRecOnRevCommitment?: boolean;
  revCommitStatus?: PlatformCommonTypes.RevenueCommitStatus;
  paymentMethod?: PlatformCore.RecordRef;
  creditCard?: PlatformCore.RecordRef;
  ccNumber?: string;
  altSalesTotal?: number;
  ccExpireDate?: SoapTypes.Dateish;
  ccName?: string;
  ccStreet?: string;
  ccZipCode?: string;
  ccApproved?: boolean;
  pnRefNum?: string;
  subTotal?: number;
  discountTotal?: number;
  total?: number;
  creditCardProcessor?: PlatformCore.RecordRef;
  payPalAuthId?: string;
  payPalProcess?: boolean;
  email?: string;
  fax?: string;
  debitCardIssueNo?: string;
  isTaxable?: boolean;
  promoCode?: PlatformCore.RecordRef;
  status?: string;
  taxTotal?: number;
  tax2Total?: number;
  validFrom?: SoapTypes.Dateish;
  orderStatus?: TransactionsCustomersTypes.ReturnAuthorizationOrderStatus;
  salesRep?: PlatformCore.RecordRef;
  giftCert?: PlatformCore.RecordRef;
  contribPct?: string;
  giftCertTotal?: number;
  giftCertApplied?: number;
  giftCertAvailable?: number;
  tranIsVsoeBundle?: boolean;
  vsoeAutoCalc?: boolean;
  syncPartnerTeams?: boolean;
  itemList?: ReturnAuthorizationItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  salesTeamList?: ReturnAuthorizationSalesTeamList;
  partnersList?: ReturnAuthorizationPartnersList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: ReturnAuthorization) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.nexus = props.nexus;
    this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
    this.taxRegOverride = props.taxRegOverride;
    this.taxDetailsOverride = props.taxDetailsOverride;
    this.customForm = props.customForm;
    this.currency = props.currency;
    this.entity = props.entity;
    this.vatRegNum = props.vatRegNum;
    this.tranDate = props.tranDate;
    this.tranId = props.tranId;
    this.entityTaxRegNum = props.entityTaxRegNum;
    this.taxPointDate = props.taxPointDate;
    this.source = props.source;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiary = props.subsidiary;
    this.intercoTransaction = props.intercoTransaction;
    this.intercoStatus = props.intercoStatus;
    this.job = props.job;
    this.partner = props.partner;
    this.otherRefNum = props.otherRefNum;
    this.leadSource = props.leadSource;
    this.memo = props.memo;
    this.drAccount = props.drAccount;
    this.fxAccount = props.fxAccount;
    this.salesEffectiveDate = props.salesEffectiveDate;
    this.createdFrom = props.createdFrom;
    this.revRecSchedule = props.revRecSchedule;
    this.totalCostEstimate = props.totalCostEstimate;
    this.estGrossProfit = props.estGrossProfit;
    this.estGrossProfitPercent = props.estGrossProfitPercent;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecEndDate = props.revRecEndDate;
    this.excludeCommission = props.excludeCommission;
    this.exchangeRate = props.exchangeRate;
    this.currencyName = props.currencyName;
    this.discountItem = props.discountItem;
    this.discountRate = props.discountRate;
    this.taxItem = props.taxItem;
    this.taxRate = props.taxRate;
    this.toBePrinted = props.toBePrinted;
    this.toBeEmailed = props.toBeEmailed;
    this.toBeFaxed = props.toBeFaxed;
    this.messageSel = props.messageSel;
    this.message = props.message;
    this.billingAddress = props.billingAddress;
    this.billAddressList = props.billAddressList;
    this.shipAddressList = props.shipAddressList;
    this.shipAddress = props.shipAddress;
    this.salesGroup = props.salesGroup;
    this.syncSalesTeams = props.syncSalesTeams;
    this.revenueStatus = props.revenueStatus;
    this.recognizedRevenue = props.recognizedRevenue;
    this.deferredRevenue = props.deferredRevenue;
    this.revRecOnRevCommitment = props.revRecOnRevCommitment;
    this.revCommitStatus = props.revCommitStatus;
    this.paymentMethod = props.paymentMethod;
    this.creditCard = props.creditCard;
    this.ccNumber = props.ccNumber;
    this.altSalesTotal = props.altSalesTotal;
    this.ccExpireDate = props.ccExpireDate;
    this.ccName = props.ccName;
    this.ccStreet = props.ccStreet;
    this.ccZipCode = props.ccZipCode;
    this.ccApproved = props.ccApproved;
    this.pnRefNum = props.pnRefNum;
    this.subTotal = props.subTotal;
    this.discountTotal = props.discountTotal;
    this.total = props.total;
    this.creditCardProcessor = props.creditCardProcessor;
    this.payPalAuthId = props.payPalAuthId;
    this.payPalProcess = props.payPalProcess;
    this.email = props.email;
    this.fax = props.fax;
    this.debitCardIssueNo = props.debitCardIssueNo;
    this.isTaxable = props.isTaxable;
    this.promoCode = props.promoCode;
    this.status = props.status;
    this.taxTotal = props.taxTotal;
    this.tax2Total = props.tax2Total;
    this.validFrom = props.validFrom;
    this.orderStatus = props.orderStatus;
    this.salesRep = props.salesRep;
    this.giftCert = props.giftCert;
    this.contribPct = props.contribPct;
    this.giftCertTotal = props.giftCertTotal;
    this.giftCertApplied = props.giftCertApplied;
    this.giftCertAvailable = props.giftCertAvailable;
    this.tranIsVsoeBundle = props.tranIsVsoeBundle;
    this.vsoeAutoCalc = props.vsoeAutoCalc;
    this.syncPartnerTeams = props.syncPartnerTeams;
    this.itemList = props.itemList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.salesTeamList = props.salesTeamList;
    this.partnersList = props.partnersList;
    this.taxDetailsList = props.taxDetailsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CustomerRefundApplyList extends SoapTypes.Base {
  apply?: CustomerRefundApply[];
  replaceAll?: boolean;
  constructor(props: CustomerRefundApplyList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.apply = props.apply;
    this.replaceAll = props.replaceAll;
  }
}

export class DepositApplication extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  arAcct?: PlatformCore.RecordRef;
  status?: string;
  customer?: PlatformCore.RecordRef;
  tranDate?: SoapTypes.Dateish;
  postingPeriod?: PlatformCore.RecordRef;
  deposit?: PlatformCore.RecordRef;
  depDate?: SoapTypes.Dateish;
  currency?: PlatformCore.RecordRef;
  exchangeRate?: number;
  memo?: string;
  subsidiary?: PlatformCore.RecordRef;
  total?: number;
  department?: PlatformCore.RecordRef;
  applied?: number;
  clazz?: PlatformCore.RecordRef;
  unapplied?: number;
  location?: PlatformCore.RecordRef;
  tranId?: string;
  applyList?: DepositApplicationApplyList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: DepositApplication) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.arAcct = props.arAcct;
    this.status = props.status;
    this.customer = props.customer;
    this.tranDate = props.tranDate;
    this.postingPeriod = props.postingPeriod;
    this.deposit = props.deposit;
    this.depDate = props.depDate;
    this.currency = props.currency;
    this.exchangeRate = props.exchangeRate;
    this.memo = props.memo;
    this.subsidiary = props.subsidiary;
    this.total = props.total;
    this.department = props.department;
    this.applied = props.applied;
    this.clazz = props.clazz;
    this.unapplied = props.unapplied;
    this.location = props.location;
    this.tranId = props.tranId;
    this.applyList = props.applyList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CustomerPaymentApplyList extends SoapTypes.Base {
  apply?: CustomerPaymentApply[];
  replaceAll?: boolean;
  constructor(props: CustomerPaymentApplyList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.apply = props.apply;
    this.replaceAll = props.replaceAll;
  }
}

export class ChargeSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ChargeSearchBasic;
  billingAccountJoin?: PlatformCommon.BillingAccountSearchBasic;
  billingScheduleJoin?: PlatformCommon.BillingScheduleSearchBasic;
  chargeEmployeeJoin?: PlatformCommon.EmployeeSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  invoiceJoin?: PlatformCommon.TransactionSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  jobJoin?: PlatformCommon.JobSearchBasic;
  salesOrderJoin?: PlatformCommon.TransactionSearchBasic;
  timeJoin?: PlatformCommon.TimeBillSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  usageJoin?: PlatformCommon.UsageSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: ChargeSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.billingAccountJoin = props.billingAccountJoin;
    this.billingScheduleJoin = props.billingScheduleJoin;
    this.chargeEmployeeJoin = props.chargeEmployeeJoin;
    this.customerJoin = props.customerJoin;
    this.invoiceJoin = props.invoiceJoin;
    this.itemJoin = props.itemJoin;
    this.jobJoin = props.jobJoin;
    this.salesOrderJoin = props.salesOrderJoin;
    this.timeJoin = props.timeJoin;
    this.transactionJoin = props.transactionJoin;
    this.usageJoin = props.usageJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class CreditMemo extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  customForm?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  vatRegNum?: string;
  tranDate?: SoapTypes.Dateish;
  tranId?: string;
  entityTaxRegNum?: PlatformCore.RecordRef;
  taxPointDate?: SoapTypes.Dateish;
  createdFrom?: PlatformCore.RecordRef;
  postingPeriod?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  job?: PlatformCore.RecordRef;
  salesRep?: PlatformCore.RecordRef;
  partner?: PlatformCore.RecordRef;
  contribPct?: string;
  otherRefNum?: string;
  memo?: string;
  excludeCommission?: boolean;
  leadSource?: PlatformCore.RecordRef;
  balance?: number;
  account?: PlatformCore.RecordRef;
  exchangeRate?: number;
  onCreditHold?: string;
  amountPaid?: number;
  salesEffectiveDate?: SoapTypes.Dateish;
  totalCostEstimate?: number;
  estGrossProfit?: number;
  estGrossProfitPercent?: number;
  currencyName?: string;
  promoCode?: PlatformCore.RecordRef;
  amountRemaining?: number;
  discountItem?: PlatformCore.RecordRef;
  source?: string;
  discountRate?: string;
  isTaxable?: boolean;
  taxItem?: PlatformCore.RecordRef;
  taxRate?: number;
  unapplied?: number;
  autoApply?: boolean;
  applied?: number;
  toBePrinted?: boolean;
  toBeEmailed?: boolean;
  email?: string;
  toBeFaxed?: boolean;
  fax?: string;
  messageSel?: PlatformCore.RecordRef;
  message?: string;
  billingAddress?: PlatformCommon.Address;
  billAddressList?: PlatformCore.RecordRef;
  shipMethod?: PlatformCore.RecordRef;
  shippingCost?: number;
  shippingTax1Rate?: number;
  shippingTaxCode?: PlatformCore.RecordRef;
  handlingTaxCode?: PlatformCore.RecordRef;
  shippingTax2Rate?: string;
  handlingTax1Rate?: number;
  handlingTax2Rate?: string;
  handlingCost?: number;
  subTotal?: number;
  discountTotal?: number;
  revenueStatus?: PlatformCommonTypes.RevenueStatus;
  recognizedRevenue?: number;
  deferredRevenue?: number;
  revRecOnRevCommitment?: boolean;
  taxTotal?: number;
  tax2Total?: number;
  altShippingCost?: number;
  altHandlingCost?: number;
  isMultiShipTo?: boolean;
  total?: number;
  salesGroup?: PlatformCore.RecordRef;
  syncSalesTeams?: boolean;
  status?: string;
  giftCert?: PlatformCore.RecordRef;
  giftCertTotal?: number;
  giftCertApplied?: number;
  giftCertAvailable?: number;
  tranIsVsoeBundle?: boolean;
  vsoeAutoCalc?: boolean;
  syncPartnerTeams?: boolean;
  salesTeamList?: CreditMemoSalesTeamList;
  itemList?: CreditMemoItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  partnersList?: CreditMemoPartnersList;
  applyList?: CreditMemoApplyList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: CreditMemo) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.nexus = props.nexus;
    this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
    this.taxRegOverride = props.taxRegOverride;
    this.taxDetailsOverride = props.taxDetailsOverride;
    this.customForm = props.customForm;
    this.currency = props.currency;
    this.entity = props.entity;
    this.vatRegNum = props.vatRegNum;
    this.tranDate = props.tranDate;
    this.tranId = props.tranId;
    this.entityTaxRegNum = props.entityTaxRegNum;
    this.taxPointDate = props.taxPointDate;
    this.createdFrom = props.createdFrom;
    this.postingPeriod = props.postingPeriod;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiary = props.subsidiary;
    this.job = props.job;
    this.salesRep = props.salesRep;
    this.partner = props.partner;
    this.contribPct = props.contribPct;
    this.otherRefNum = props.otherRefNum;
    this.memo = props.memo;
    this.excludeCommission = props.excludeCommission;
    this.leadSource = props.leadSource;
    this.balance = props.balance;
    this.account = props.account;
    this.exchangeRate = props.exchangeRate;
    this.onCreditHold = props.onCreditHold;
    this.amountPaid = props.amountPaid;
    this.salesEffectiveDate = props.salesEffectiveDate;
    this.totalCostEstimate = props.totalCostEstimate;
    this.estGrossProfit = props.estGrossProfit;
    this.estGrossProfitPercent = props.estGrossProfitPercent;
    this.currencyName = props.currencyName;
    this.promoCode = props.promoCode;
    this.amountRemaining = props.amountRemaining;
    this.discountItem = props.discountItem;
    this.source = props.source;
    this.discountRate = props.discountRate;
    this.isTaxable = props.isTaxable;
    this.taxItem = props.taxItem;
    this.taxRate = props.taxRate;
    this.unapplied = props.unapplied;
    this.autoApply = props.autoApply;
    this.applied = props.applied;
    this.toBePrinted = props.toBePrinted;
    this.toBeEmailed = props.toBeEmailed;
    this.email = props.email;
    this.toBeFaxed = props.toBeFaxed;
    this.fax = props.fax;
    this.messageSel = props.messageSel;
    this.message = props.message;
    this.billingAddress = props.billingAddress;
    this.billAddressList = props.billAddressList;
    this.shipMethod = props.shipMethod;
    this.shippingCost = props.shippingCost;
    this.shippingTax1Rate = props.shippingTax1Rate;
    this.shippingTaxCode = props.shippingTaxCode;
    this.handlingTaxCode = props.handlingTaxCode;
    this.shippingTax2Rate = props.shippingTax2Rate;
    this.handlingTax1Rate = props.handlingTax1Rate;
    this.handlingTax2Rate = props.handlingTax2Rate;
    this.handlingCost = props.handlingCost;
    this.subTotal = props.subTotal;
    this.discountTotal = props.discountTotal;
    this.revenueStatus = props.revenueStatus;
    this.recognizedRevenue = props.recognizedRevenue;
    this.deferredRevenue = props.deferredRevenue;
    this.revRecOnRevCommitment = props.revRecOnRevCommitment;
    this.taxTotal = props.taxTotal;
    this.tax2Total = props.tax2Total;
    this.altShippingCost = props.altShippingCost;
    this.altHandlingCost = props.altHandlingCost;
    this.isMultiShipTo = props.isMultiShipTo;
    this.total = props.total;
    this.salesGroup = props.salesGroup;
    this.syncSalesTeams = props.syncSalesTeams;
    this.status = props.status;
    this.giftCert = props.giftCert;
    this.giftCertTotal = props.giftCertTotal;
    this.giftCertApplied = props.giftCertApplied;
    this.giftCertAvailable = props.giftCertAvailable;
    this.tranIsVsoeBundle = props.tranIsVsoeBundle;
    this.vsoeAutoCalc = props.vsoeAutoCalc;
    this.syncPartnerTeams = props.syncPartnerTeams;
    this.salesTeamList = props.salesTeamList;
    this.itemList = props.itemList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.partnersList = props.partnersList;
    this.applyList = props.applyList;
    this.taxDetailsList = props.taxDetailsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ChargeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ChargeSearch;
  columns?: ChargeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ChargeSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class ReturnAuthorizationItemList extends SoapTypes.Base {
  item?: ReturnAuthorizationItem[];
  replaceAll?: boolean;
  constructor(props: ReturnAuthorizationItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export class CashRefundItem extends SoapTypes.Base {
  job?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  line?: number;
  orderLine?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  binNumbers?: string;
  serialNumbers?: string;
  description?: string;
  price?: PlatformCore.RecordRef;
  rate?: string;
  amount?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: string;
  taxRate2?: string;
  tax1Amt?: number;
  grossAmt?: number;
  isTaxable?: boolean;
  options?: PlatformCore.CustomFieldList;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  revRecStartDate?: SoapTypes.Dateish;
  revRecEndDate?: SoapTypes.Dateish;
  catchUpPeriod?: PlatformCore.RecordRef;
  deferRevRec?: boolean;
  giftCertFrom?: string;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  taxDetailsReference?: string;
  giftCertRecipientName?: string;
  giftCertRecipientEmail?: string;
  giftCertMessage?: string;
  taxAmount?: number;
  giftCertNumber?: string;
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
  constructor(props: CashRefundItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.job = props.job;
    this.item = props.item;
    this.line = props.line;
    this.orderLine = props.orderLine;
    this.quantity = props.quantity;
    this.units = props.units;
    this.inventoryDetail = props.inventoryDetail;
    this.binNumbers = props.binNumbers;
    this.serialNumbers = props.serialNumbers;
    this.description = props.description;
    this.price = props.price;
    this.rate = props.rate;
    this.amount = props.amount;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.tax1Amt = props.tax1Amt;
    this.grossAmt = props.grossAmt;
    this.isTaxable = props.isTaxable;
    this.options = props.options;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.revRecSchedule = props.revRecSchedule;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecEndDate = props.revRecEndDate;
    this.catchUpPeriod = props.catchUpPeriod;
    this.deferRevRec = props.deferRevRec;
    this.giftCertFrom = props.giftCertFrom;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.taxDetailsReference = props.taxDetailsReference;
    this.giftCertRecipientName = props.giftCertRecipientName;
    this.giftCertRecipientEmail = props.giftCertRecipientEmail;
    this.giftCertMessage = props.giftCertMessage;
    this.taxAmount = props.taxAmount;
    this.giftCertNumber = props.giftCertNumber;
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

export class CustomerRefund extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  status?: string;
  transactionNumber?: string;
  customer?: PlatformCore.RecordRef;
  customForm?: PlatformCore.RecordRef;
  balance?: number;
  arAcct?: PlatformCore.RecordRef;
  currencyName?: string;
  exchangeRate?: number;
  address?: string;
  total?: number;
  currency?: PlatformCore.RecordRef;
  tranDate?: SoapTypes.Dateish;
  voidJournal?: PlatformCore.RecordRef;
  postingPeriod?: PlatformCore.RecordRef;
  memo?: string;
  paymentMethod?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  toBePrinted?: boolean;
  tranId?: string;
  debitCardIssueNo?: string;
  creditCardProcessor?: PlatformCore.RecordRef;
  chargeIt?: boolean;
  pnRefNum?: string;
  validFrom?: SoapTypes.Dateish;
  subsidiary?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  paymentOption?: PlatformCore.RecordRef;
  inputAuthCode?: string;
  inputReferenceCode?: string;
  checkNumber?: string;
  paymentCardCsc?: string;
  paymentProcessingProfile?: PlatformCore.RecordRef;
  handlingMode?: TransactionsCustomersTypes.CustomerRefundHandlingMode;
  outputAuthCode?: string;
  outputReferenceCode?: string;
  paymentOperation?: TransactionsCustomersTypes.CustomerRefundPaymentOperation;
  dynamicDescriptor?: string;
  creditCard?: PlatformCore.RecordRef;
  ccIsPurchaseCardBin?: boolean;
  ccNumber?: string;
  ccProcessAsPurchaseCard?: boolean;
  ccExpireDate?: SoapTypes.Dateish;
  ccName?: string;
  ccStreet?: string;
  ccZipCode?: string;
  ccApproved?: boolean;
  applyList?: CustomerRefundApplyList;
  depositList?: CustomerRefundDepositList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: CustomerRefund) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.status = props.status;
    this.transactionNumber = props.transactionNumber;
    this.customer = props.customer;
    this.customForm = props.customForm;
    this.balance = props.balance;
    this.arAcct = props.arAcct;
    this.currencyName = props.currencyName;
    this.exchangeRate = props.exchangeRate;
    this.address = props.address;
    this.total = props.total;
    this.currency = props.currency;
    this.tranDate = props.tranDate;
    this.voidJournal = props.voidJournal;
    this.postingPeriod = props.postingPeriod;
    this.memo = props.memo;
    this.paymentMethod = props.paymentMethod;
    this.account = props.account;
    this.toBePrinted = props.toBePrinted;
    this.tranId = props.tranId;
    this.debitCardIssueNo = props.debitCardIssueNo;
    this.creditCardProcessor = props.creditCardProcessor;
    this.chargeIt = props.chargeIt;
    this.pnRefNum = props.pnRefNum;
    this.validFrom = props.validFrom;
    this.subsidiary = props.subsidiary;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
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
    this.creditCard = props.creditCard;
    this.ccIsPurchaseCardBin = props.ccIsPurchaseCardBin;
    this.ccNumber = props.ccNumber;
    this.ccProcessAsPurchaseCard = props.ccProcessAsPurchaseCard;
    this.ccExpireDate = props.ccExpireDate;
    this.ccName = props.ccName;
    this.ccStreet = props.ccStreet;
    this.ccZipCode = props.ccZipCode;
    this.ccApproved = props.ccApproved;
    this.applyList = props.applyList;
    this.depositList = props.depositList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ReturnAuthorizationItem extends SoapTypes.Base {
  job?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  orderLine?: number;
  line?: number;
  quantity?: number;
  quantityReceived?: number;
  quantityBilled?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  description?: string;
  serialNumbers?: string;
  price?: PlatformCore.RecordRef;
  rate?: string;
  amount?: number;
  options?: PlatformCore.CustomFieldList;
  revRecTermInMonths?: number;
  deferRevRec?: boolean;
  isClosed?: boolean;
  isDropShipment?: boolean;
  inventoryLocation?: PlatformCore.RecordRef;
  inventorySubsidiary?: PlatformCore.RecordRef;
  catchUpPeriod?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  taxDetailsReference?: string;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  revRecStartDate?: SoapTypes.Dateish;
  revRecEndDate?: SoapTypes.Dateish;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  tax1Amt?: number;
  grossAmt?: number;
  isTaxable?: boolean;
  giftCertFrom?: string;
  giftCertRecipientName?: string;
  giftCertRecipientEmail?: string;
  giftCertMessage?: string;
  giftCertNumber?: string;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeIsEstimate?: boolean;
  vsoePrice?: number;
  vsoeAmount?: number;
  altSalesAmt?: number;
  taxAmount?: number;
  vsoeAllocation?: number;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: ReturnAuthorizationItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.job = props.job;
    this.item = props.item;
    this.orderLine = props.orderLine;
    this.line = props.line;
    this.quantity = props.quantity;
    this.quantityReceived = props.quantityReceived;
    this.quantityBilled = props.quantityBilled;
    this.units = props.units;
    this.inventoryDetail = props.inventoryDetail;
    this.description = props.description;
    this.serialNumbers = props.serialNumbers;
    this.price = props.price;
    this.rate = props.rate;
    this.amount = props.amount;
    this.options = props.options;
    this.revRecTermInMonths = props.revRecTermInMonths;
    this.deferRevRec = props.deferRevRec;
    this.isClosed = props.isClosed;
    this.isDropShipment = props.isDropShipment;
    this.inventoryLocation = props.inventoryLocation;
    this.inventorySubsidiary = props.inventorySubsidiary;
    this.catchUpPeriod = props.catchUpPeriod;
    this.department = props.department;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.taxDetailsReference = props.taxDetailsReference;
    this.clazz = props.clazz;
    this.location = props.location;
    this.revRecSchedule = props.revRecSchedule;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecEndDate = props.revRecEndDate;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.tax1Amt = props.tax1Amt;
    this.grossAmt = props.grossAmt;
    this.isTaxable = props.isTaxable;
    this.giftCertFrom = props.giftCertFrom;
    this.giftCertRecipientName = props.giftCertRecipientName;
    this.giftCertRecipientEmail = props.giftCertRecipientEmail;
    this.giftCertMessage = props.giftCertMessage;
    this.giftCertNumber = props.giftCertNumber;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeIsEstimate = props.vsoeIsEstimate;
    this.vsoePrice = props.vsoePrice;
    this.vsoeAmount = props.vsoeAmount;
    this.altSalesAmt = props.altSalesAmt;
    this.taxAmount = props.taxAmount;
    this.vsoeAllocation = props.vsoeAllocation;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.customFieldList = props.customFieldList;
  }
}

export class CustomerPaymentDeposit extends SoapTypes.Base {
  apply?: boolean;
  doc?: number;
  line?: number;
  depositDate?: SoapTypes.Dateish;
  refNum?: string;
  total?: number;
  remaining?: number;
  currency?: string;
  amount?: number;
  constructor(props: CustomerPaymentDeposit) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.apply = props.apply;
    this.doc = props.doc;
    this.line = props.line;
    this.depositDate = props.depositDate;
    this.refNum = props.refNum;
    this.total = props.total;
    this.remaining = props.remaining;
    this.currency = props.currency;
    this.amount = props.amount;
  }
}

export class CustomerPayment extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  arAcct?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  balance?: number;
  pending?: number;
  currency?: PlatformCore.RecordRef;
  payment?: number;
  autoApply?: boolean;
  tranDate?: SoapTypes.Dateish;
  tranId?: string;
  postingPeriod?: PlatformCore.RecordRef;
  paymentMethod?: PlatformCore.RecordRef;
  ccIsPurchaseCardBin?: boolean;
  memo?: string;
  ccProcessAsPurchaseCard?: boolean;
  checkNum?: string;
  currencyName?: string;
  exchangeRate?: number;
  creditCard?: PlatformCore.RecordRef;
  chargeIt?: boolean;
  ccNumber?: string;
  ccExpireDate?: SoapTypes.Dateish;
  ccName?: string;
  ccStreet?: string;
  ccZipCode?: string;
  ccApproved?: boolean;
  authCode?: string;
  ccAvsStreetMatch?: PlatformCommonTypes.AvsMatchCode;
  ccAvsZipMatch?: PlatformCommonTypes.AvsMatchCode;
  isRecurringPayment?: boolean;
  ccSecurityCode?: string;
  ignoreAvs?: boolean;
  ccSecurityCodeMatch?: PlatformCommonTypes.AvsMatchCode;
  threeDStatusCode?: string;
  pnRefNum?: string;
  creditCardProcessor?: PlatformCore.RecordRef;
  debitCardIssueNo?: string;
  validFrom?: SoapTypes.Dateish;
  undepFunds?: boolean;
  account?: PlatformCore.RecordRef;
  total?: number;
  subsidiary?: PlatformCore.RecordRef;
  applied?: number;
  unapplied?: number;
  clazz?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  paymentOption?: PlatformCore.RecordRef;
  inputAuthCode?: string;
  inputReferenceCode?: string;
  checkNumber?: string;
  paymentCardCsc?: string;
  paymentProcessingProfile?: PlatformCore.RecordRef;
  handlingMode?: TransactionsCustomersTypes.CustomerPaymentHandlingMode;
  outputAuthCode?: string;
  outputReferenceCode?: string;
  paymentOperation?: TransactionsCustomersTypes.CustomerPaymentPaymentOperation;
  dynamicDescriptor?: string;
  status?: string;
  applyList?: CustomerPaymentApplyList;
  creditList?: CustomerPaymentCreditList;
  depositList?: CustomerPaymentDepositList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: CustomerPayment) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.arAcct = props.arAcct;
    this.customer = props.customer;
    this.balance = props.balance;
    this.pending = props.pending;
    this.currency = props.currency;
    this.payment = props.payment;
    this.autoApply = props.autoApply;
    this.tranDate = props.tranDate;
    this.tranId = props.tranId;
    this.postingPeriod = props.postingPeriod;
    this.paymentMethod = props.paymentMethod;
    this.ccIsPurchaseCardBin = props.ccIsPurchaseCardBin;
    this.memo = props.memo;
    this.ccProcessAsPurchaseCard = props.ccProcessAsPurchaseCard;
    this.checkNum = props.checkNum;
    this.currencyName = props.currencyName;
    this.exchangeRate = props.exchangeRate;
    this.creditCard = props.creditCard;
    this.chargeIt = props.chargeIt;
    this.ccNumber = props.ccNumber;
    this.ccExpireDate = props.ccExpireDate;
    this.ccName = props.ccName;
    this.ccStreet = props.ccStreet;
    this.ccZipCode = props.ccZipCode;
    this.ccApproved = props.ccApproved;
    this.authCode = props.authCode;
    this.ccAvsStreetMatch = props.ccAvsStreetMatch;
    this.ccAvsZipMatch = props.ccAvsZipMatch;
    this.isRecurringPayment = props.isRecurringPayment;
    this.ccSecurityCode = props.ccSecurityCode;
    this.ignoreAvs = props.ignoreAvs;
    this.ccSecurityCodeMatch = props.ccSecurityCodeMatch;
    this.threeDStatusCode = props.threeDStatusCode;
    this.pnRefNum = props.pnRefNum;
    this.creditCardProcessor = props.creditCardProcessor;
    this.debitCardIssueNo = props.debitCardIssueNo;
    this.validFrom = props.validFrom;
    this.undepFunds = props.undepFunds;
    this.account = props.account;
    this.total = props.total;
    this.subsidiary = props.subsidiary;
    this.applied = props.applied;
    this.unapplied = props.unapplied;
    this.clazz = props.clazz;
    this.department = props.department;
    this.location = props.location;
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
    this.status = props.status;
    this.applyList = props.applyList;
    this.creditList = props.creditList;
    this.depositList = props.depositList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CreditMemoApplyList extends SoapTypes.Base {
  apply?: CreditMemoApply[];
  replaceAll?: boolean;
  constructor(props: CreditMemoApplyList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.apply = props.apply;
    this.replaceAll = props.replaceAll;
  }
}

export class CashRefundSalesTeam extends SoapTypes.Base {
  employee?: PlatformCore.RecordRef;
  salesRole?: PlatformCore.RecordRef;
  isPrimary?: boolean;
  contribution?: number;
  constructor(props: CashRefundSalesTeam) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employee = props.employee;
    this.salesRole = props.salesRole;
    this.isPrimary = props.isPrimary;
    this.contribution = props.contribution;
  }
}

export class CustomerPaymentCredit extends SoapTypes.Base {
  apply?: boolean;
  doc?: number;
  line?: number;
  creditDate?: SoapTypes.Dateish;
  type?: string;
  refNum?: string;
  appliedTo?: string;
  total?: number;
  due?: number;
  currency?: string;
  amount?: number;
  constructor(props: CustomerPaymentCredit) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.apply = props.apply;
    this.doc = props.doc;
    this.line = props.line;
    this.creditDate = props.creditDate;
    this.type = props.type;
    this.refNum = props.refNum;
    this.appliedTo = props.appliedTo;
    this.total = props.total;
    this.due = props.due;
    this.currency = props.currency;
    this.amount = props.amount;
  }
}

export class CustomerDeposit extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  status?: string;
  customer?: PlatformCore.RecordRef;
  salesOrder?: PlatformCore.RecordRef;
  customForm?: PlatformCore.RecordRef;
  payment?: number;
  currency?: PlatformCore.RecordRef;
  tranDate?: SoapTypes.Dateish;
  postingPeriod?: PlatformCore.RecordRef;
  paymentMethod?: PlatformCore.RecordRef;
  ccIsPurchaseCardBin?: boolean;
  memo?: string;
  ccProcessAsPurchaseCard?: boolean;
  currencyName?: string;
  exchangeRate?: number;
  checkNum?: string;
  creditCardProcessor?: PlatformCore.RecordRef;
  creditCard?: PlatformCore.RecordRef;
  ccSecurityCode?: string;
  ccNumber?: string;
  subsidiary?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  paymentOption?: PlatformCore.RecordRef;
  inputAuthCode?: string;
  inputReferenceCode?: string;
  checkNumber?: string;
  paymentCardCsc?: string;
  paymentProcessingProfile?: PlatformCore.RecordRef;
  handlingMode?: TransactionsCustomersTypes.CustomerDepositHandlingMode;
  outputAuthCode?: string;
  outputReferenceCode?: string;
  paymentOperation?: TransactionsCustomersTypes.CustomerDepositPaymentOperation;
  dynamicDescriptor?: string;
  ccExpireDate?: SoapTypes.Dateish;
  debitCardIssueNo?: string;
  validFrom?: SoapTypes.Dateish;
  ccName?: string;
  ccStreet?: string;
  ccZipCode?: string;
  chargeIt?: boolean;
  ccApproved?: boolean;
  pnRefNum?: string;
  authCode?: string;
  ccAvsStreetMatch?: PlatformCommonTypes.AvsMatchCode;
  softDescriptor?: string;
  ccAvsZipMatch?: PlatformCommonTypes.AvsMatchCode;
  isRecurringPayment?: boolean;
  ccSecurityCodeMatch?: PlatformCommonTypes.AvsMatchCode;
  threeDStatusCode?: string;
  ignoreAvs?: boolean;
  account?: PlatformCore.RecordRef;
  undepFunds?: boolean;
  tranId?: string;
  applyList?: CustomerDepositApplyList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: CustomerDeposit) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.status = props.status;
    this.customer = props.customer;
    this.salesOrder = props.salesOrder;
    this.customForm = props.customForm;
    this.payment = props.payment;
    this.currency = props.currency;
    this.tranDate = props.tranDate;
    this.postingPeriod = props.postingPeriod;
    this.paymentMethod = props.paymentMethod;
    this.ccIsPurchaseCardBin = props.ccIsPurchaseCardBin;
    this.memo = props.memo;
    this.ccProcessAsPurchaseCard = props.ccProcessAsPurchaseCard;
    this.currencyName = props.currencyName;
    this.exchangeRate = props.exchangeRate;
    this.checkNum = props.checkNum;
    this.creditCardProcessor = props.creditCardProcessor;
    this.creditCard = props.creditCard;
    this.ccSecurityCode = props.ccSecurityCode;
    this.ccNumber = props.ccNumber;
    this.subsidiary = props.subsidiary;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
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
    this.ccExpireDate = props.ccExpireDate;
    this.debitCardIssueNo = props.debitCardIssueNo;
    this.validFrom = props.validFrom;
    this.ccName = props.ccName;
    this.ccStreet = props.ccStreet;
    this.ccZipCode = props.ccZipCode;
    this.chargeIt = props.chargeIt;
    this.ccApproved = props.ccApproved;
    this.pnRefNum = props.pnRefNum;
    this.authCode = props.authCode;
    this.ccAvsStreetMatch = props.ccAvsStreetMatch;
    this.softDescriptor = props.softDescriptor;
    this.ccAvsZipMatch = props.ccAvsZipMatch;
    this.isRecurringPayment = props.isRecurringPayment;
    this.ccSecurityCodeMatch = props.ccSecurityCodeMatch;
    this.threeDStatusCode = props.threeDStatusCode;
    this.ignoreAvs = props.ignoreAvs;
    this.account = props.account;
    this.undepFunds = props.undepFunds;
    this.tranId = props.tranId;
    this.applyList = props.applyList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CustomerDepositApplyList extends SoapTypes.Base {
  customerDepositApply?: CustomerDepositApply[];
  replaceAll?: boolean;
  constructor(props: CustomerDepositApplyList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customerDepositApply = props.customerDepositApply;
    this.replaceAll = props.replaceAll;
  }
}

export class DepositApplicationApplyList extends SoapTypes.Base {
  apply?: DepositApplicationApply[];
  replaceAll?: boolean;
  constructor(props: DepositApplicationApplyList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.apply = props.apply;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomerPaymentApply extends SoapTypes.Base {
  apply?: boolean;
  doc?: number;
  line?: number;
  applyDate?: SoapTypes.Dateish;
  job?: string;
  type?: string;
  refNum?: string;
  total?: number;
  due?: number;
  currency?: string;
  discDate?: SoapTypes.Dateish;
  discAmt?: number;
  disc?: number;
  amount?: number;
  constructor(props: CustomerPaymentApply) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.apply = props.apply;
    this.doc = props.doc;
    this.line = props.line;
    this.applyDate = props.applyDate;
    this.job = props.job;
    this.type = props.type;
    this.refNum = props.refNum;
    this.total = props.total;
    this.due = props.due;
    this.currency = props.currency;
    this.discDate = props.discDate;
    this.discAmt = props.discAmt;
    this.disc = props.disc;
    this.amount = props.amount;
  }
}

export class ReturnAuthorizationPartnersList extends SoapTypes.Base {
  partners?: PlatformCommon.Partners[];
  replaceAll?: boolean;
  constructor(props: ReturnAuthorizationPartnersList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.partners = props.partners;
    this.replaceAll = props.replaceAll;
  }
}

export class CashRefundSalesTeamList extends SoapTypes.Base {
  salesTeam?: CashRefundSalesTeam[];
  replaceAll?: boolean;
  constructor(props: CashRefundSalesTeamList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.salesTeam = props.salesTeam;
    this.replaceAll = props.replaceAll;
  }
}

export class CreditMemoItem extends SoapTypes.Base {
  job?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  orderLine?: number;
  line?: number;
  quantity?: number;
  description?: string;
  binNumbers?: string;
  price?: PlatformCore.RecordRef;
  rate?: string;
  amount?: number;
  isTaxable?: boolean;
  options?: PlatformCore.CustomFieldList;
  shipAddress?: PlatformCore.RecordRef;
  shipCarrier?: PlatformCommonTypes.ShippingCarrier;
  shipMethod?: PlatformCore.RecordRef;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  tax1Amt?: number;
  grossAmt?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  taxDetailsReference?: string;
  revRecSchedule?: PlatformCore.RecordRef;
  revRecStartDate?: SoapTypes.Dateish;
  revRecTermInMonths?: number;
  revRecEndDate?: SoapTypes.Dateish;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  serialNumbers?: string;
  deferRevRec?: boolean;
  giftCertFrom?: string;
  giftCertRecipientName?: string;
  giftCertRecipientEmail?: string;
  giftCertMessage?: string;
  taxAmount?: number;
  giftCertNumber?: string;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeIsEstimate?: boolean;
  vsoePrice?: number;
  vsoeAmount?: number;
  vsoeAllocation?: number;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  catchUpPeriod?: PlatformCore.RecordRef;
  chargeType?: PlatformCore.RecordRef;
  subscriptionLine?: PlatformCore.RecordRef;
  chargesList?: PlatformCore.RecordRefList;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: CreditMemoItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.job = props.job;
    this.item = props.item;
    this.orderLine = props.orderLine;
    this.line = props.line;
    this.quantity = props.quantity;
    this.description = props.description;
    this.binNumbers = props.binNumbers;
    this.price = props.price;
    this.rate = props.rate;
    this.amount = props.amount;
    this.isTaxable = props.isTaxable;
    this.options = props.options;
    this.shipAddress = props.shipAddress;
    this.shipCarrier = props.shipCarrier;
    this.shipMethod = props.shipMethod;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.tax1Amt = props.tax1Amt;
    this.grossAmt = props.grossAmt;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.taxDetailsReference = props.taxDetailsReference;
    this.revRecSchedule = props.revRecSchedule;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecTermInMonths = props.revRecTermInMonths;
    this.revRecEndDate = props.revRecEndDate;
    this.units = props.units;
    this.inventoryDetail = props.inventoryDetail;
    this.serialNumbers = props.serialNumbers;
    this.deferRevRec = props.deferRevRec;
    this.giftCertFrom = props.giftCertFrom;
    this.giftCertRecipientName = props.giftCertRecipientName;
    this.giftCertRecipientEmail = props.giftCertRecipientEmail;
    this.giftCertMessage = props.giftCertMessage;
    this.taxAmount = props.taxAmount;
    this.giftCertNumber = props.giftCertNumber;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeIsEstimate = props.vsoeIsEstimate;
    this.vsoePrice = props.vsoePrice;
    this.vsoeAmount = props.vsoeAmount;
    this.vsoeAllocation = props.vsoeAllocation;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.catchUpPeriod = props.catchUpPeriod;
    this.chargeType = props.chargeType;
    this.subscriptionLine = props.subscriptionLine;
    this.chargesList = props.chargesList;
    this.customFieldList = props.customFieldList;
  }
}

export class CashRefundItemList extends SoapTypes.Base {
  item?: CashRefundItem[];
  replaceAll?: boolean;
  constructor(props: CashRefundItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export class CashRefundPartnersList extends SoapTypes.Base {
  partners?: PlatformCommon.Partners[];
  replaceAll?: boolean;
  constructor(props: CashRefundPartnersList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.partners = props.partners;
    this.replaceAll = props.replaceAll;
  }
}

export class CreditMemoSalesTeam extends SoapTypes.Base {
  employee?: PlatformCore.RecordRef;
  salesRole?: PlatformCore.RecordRef;
  isPrimary?: boolean;
  contribution?: number;
  constructor(props: CreditMemoSalesTeam) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employee = props.employee;
    this.salesRole = props.salesRole;
    this.isPrimary = props.isPrimary;
    this.contribution = props.contribution;
  }
}

export class CashRefund extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  customForm?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  vatRegNum?: string;
  tranDate?: SoapTypes.Dateish;
  tranId?: string;
  entityTaxRegNum?: PlatformCore.RecordRef;
  taxPointDate?: SoapTypes.Dateish;
  source?: string;
  createdFrom?: PlatformCore.RecordRef;
  postingPeriod?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  leadSource?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  salesRep?: PlatformCore.RecordRef;
  partner?: PlatformCore.RecordRef;
  contribPct?: string;
  otherRefNum?: string;
  memo?: string;
  salesEffectiveDate?: SoapTypes.Dateish;
  refundCheck?: boolean;
  toPrint2?: boolean;
  excludeCommission?: boolean;
  totalCostEstimate?: number;
  estGrossProfit?: number;
  estGrossProfitPercent?: number;
  account?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
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
  handlingMode?: TransactionsCustomersTypes.CashRefundHandlingMode;
  outputAuthCode?: string;
  outputReferenceCode?: string;
  paymentOperation?: TransactionsCustomersTypes.CashRefundPaymentOperation;
  dynamicDescriptor?: string;
  billingAddress?: PlatformCommon.Address;
  billAddressList?: PlatformCore.RecordRef;
  shipMethod?: PlatformCore.RecordRef;
  shippingTaxCode?: PlatformCore.RecordRef;
  shippingTax1Rate?: number;
  shippingTax2Rate?: string;
  shippingCost?: number;
  handlingTaxCode?: PlatformCore.RecordRef;
  handlingTax1Rate?: number;
  handlingTax2Rate?: string;
  handlingCost?: number;
  salesGroup?: PlatformCore.RecordRef;
  syncSalesTeams?: boolean;
  paymentMethod?: PlatformCore.RecordRef;
  revenueStatus?: PlatformCommonTypes.RevenueStatus;
  recognizedRevenue?: number;
  deferredRevenue?: number;
  revRecOnRevCommitment?: boolean;
  creditCard?: PlatformCore.RecordRef;
  chargeIt?: boolean;
  ccNumber?: string;
  ccExpireDate?: SoapTypes.Dateish;
  ccName?: string;
  ccStreet?: string;
  ccZipCode?: string;
  ccApproved?: boolean;
  creditCardProcessor?: PlatformCore.RecordRef;
  debitCardIssueNo?: string;
  pnRefNum?: string;
  validFrom?: SoapTypes.Dateish;
  payPalTranId?: string;
  subTotal?: number;
  ccIsPurchaseCardBin?: boolean;
  discountTotal?: number;
  ccProcessAsPurchaseCard?: boolean;
  taxTotal?: number;
  tax2Total?: number;
  altShippingCost?: number;
  payPalStatus?: string;
  altHandlingCost?: number;
  total?: number;
  payPalAuthId?: string;
  status?: string;
  job?: PlatformCore.RecordRef;
  giftCert?: PlatformCore.RecordRef;
  giftCertTotal?: number;
  giftCertApplied?: number;
  giftCertAvailable?: number;
  tranIsVsoeBundle?: boolean;
  payPalProcess?: boolean;
  vsoeAutoCalc?: boolean;
  syncPartnerTeams?: boolean;
  itemList?: CashRefundItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  salesTeamList?: CashRefundSalesTeamList;
  partnersList?: CashRefundPartnersList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: CashRefund) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.nexus = props.nexus;
    this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
    this.taxRegOverride = props.taxRegOverride;
    this.taxDetailsOverride = props.taxDetailsOverride;
    this.customForm = props.customForm;
    this.entity = props.entity;
    this.vatRegNum = props.vatRegNum;
    this.tranDate = props.tranDate;
    this.tranId = props.tranId;
    this.entityTaxRegNum = props.entityTaxRegNum;
    this.taxPointDate = props.taxPointDate;
    this.source = props.source;
    this.createdFrom = props.createdFrom;
    this.postingPeriod = props.postingPeriod;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.leadSource = props.leadSource;
    this.subsidiary = props.subsidiary;
    this.salesRep = props.salesRep;
    this.partner = props.partner;
    this.contribPct = props.contribPct;
    this.otherRefNum = props.otherRefNum;
    this.memo = props.memo;
    this.salesEffectiveDate = props.salesEffectiveDate;
    this.refundCheck = props.refundCheck;
    this.toPrint2 = props.toPrint2;
    this.excludeCommission = props.excludeCommission;
    this.totalCostEstimate = props.totalCostEstimate;
    this.estGrossProfit = props.estGrossProfit;
    this.estGrossProfitPercent = props.estGrossProfitPercent;
    this.account = props.account;
    this.currency = props.currency;
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
    this.shipMethod = props.shipMethod;
    this.shippingTaxCode = props.shippingTaxCode;
    this.shippingTax1Rate = props.shippingTax1Rate;
    this.shippingTax2Rate = props.shippingTax2Rate;
    this.shippingCost = props.shippingCost;
    this.handlingTaxCode = props.handlingTaxCode;
    this.handlingTax1Rate = props.handlingTax1Rate;
    this.handlingTax2Rate = props.handlingTax2Rate;
    this.handlingCost = props.handlingCost;
    this.salesGroup = props.salesGroup;
    this.syncSalesTeams = props.syncSalesTeams;
    this.paymentMethod = props.paymentMethod;
    this.revenueStatus = props.revenueStatus;
    this.recognizedRevenue = props.recognizedRevenue;
    this.deferredRevenue = props.deferredRevenue;
    this.revRecOnRevCommitment = props.revRecOnRevCommitment;
    this.creditCard = props.creditCard;
    this.chargeIt = props.chargeIt;
    this.ccNumber = props.ccNumber;
    this.ccExpireDate = props.ccExpireDate;
    this.ccName = props.ccName;
    this.ccStreet = props.ccStreet;
    this.ccZipCode = props.ccZipCode;
    this.ccApproved = props.ccApproved;
    this.creditCardProcessor = props.creditCardProcessor;
    this.debitCardIssueNo = props.debitCardIssueNo;
    this.pnRefNum = props.pnRefNum;
    this.validFrom = props.validFrom;
    this.payPalTranId = props.payPalTranId;
    this.subTotal = props.subTotal;
    this.ccIsPurchaseCardBin = props.ccIsPurchaseCardBin;
    this.discountTotal = props.discountTotal;
    this.ccProcessAsPurchaseCard = props.ccProcessAsPurchaseCard;
    this.taxTotal = props.taxTotal;
    this.tax2Total = props.tax2Total;
    this.altShippingCost = props.altShippingCost;
    this.payPalStatus = props.payPalStatus;
    this.altHandlingCost = props.altHandlingCost;
    this.total = props.total;
    this.payPalAuthId = props.payPalAuthId;
    this.status = props.status;
    this.job = props.job;
    this.giftCert = props.giftCert;
    this.giftCertTotal = props.giftCertTotal;
    this.giftCertApplied = props.giftCertApplied;
    this.giftCertAvailable = props.giftCertAvailable;
    this.tranIsVsoeBundle = props.tranIsVsoeBundle;
    this.payPalProcess = props.payPalProcess;
    this.vsoeAutoCalc = props.vsoeAutoCalc;
    this.syncPartnerTeams = props.syncPartnerTeams;
    this.itemList = props.itemList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.salesTeamList = props.salesTeamList;
    this.partnersList = props.partnersList;
    this.taxDetailsList = props.taxDetailsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CustomerDepositApply extends SoapTypes.Base {
  doc?: number;
  line?: number;
  apply?: boolean;
  applyDate?: SoapTypes.Dateish;
  type?: string;
  refNum?: string;
  total?: number;
  amount?: number;
  job?: string;
  constructor(props: CustomerDepositApply) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.doc = props.doc;
    this.line = props.line;
    this.apply = props.apply;
    this.applyDate = props.applyDate;
    this.type = props.type;
    this.refNum = props.refNum;
    this.total = props.total;
    this.amount = props.amount;
    this.job = props.job;
  }
}

export class ChargeSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ChargeSearchRowBasic;
  billingAccountJoin?: PlatformCommon.BillingAccountSearchRowBasic;
  billingScheduleJoin?: PlatformCommon.BillingScheduleSearchRowBasic;
  chargeEmployeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  invoiceJoin?: PlatformCommon.TransactionSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  jobJoin?: PlatformCommon.JobSearchRowBasic;
  salesOrderJoin?: PlatformCommon.TransactionSearchRowBasic;
  timeJoin?: PlatformCommon.TimeBillSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  usageJoin?: PlatformCommon.UsageSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: ChargeSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.billingAccountJoin = props.billingAccountJoin;
    this.billingScheduleJoin = props.billingScheduleJoin;
    this.chargeEmployeeJoin = props.chargeEmployeeJoin;
    this.customerJoin = props.customerJoin;
    this.invoiceJoin = props.invoiceJoin;
    this.itemJoin = props.itemJoin;
    this.jobJoin = props.jobJoin;
    this.salesOrderJoin = props.salesOrderJoin;
    this.timeJoin = props.timeJoin;
    this.transactionJoin = props.transactionJoin;
    this.usageJoin = props.usageJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class CreditMemoSalesTeamList extends SoapTypes.Base {
  salesTeam?: CreditMemoSalesTeam[];
  replaceAll?: boolean;
  constructor(props: CreditMemoSalesTeamList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.salesTeam = props.salesTeam;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomerPaymentCreditList extends SoapTypes.Base {
  credit?: CustomerPaymentCredit[];
  replaceAll?: boolean;
  constructor(props: CustomerPaymentCreditList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.credit = props.credit;
    this.replaceAll = props.replaceAll;
  }
}

export class ReturnAuthorizationSalesTeam extends SoapTypes.Base {
  employee?: PlatformCore.RecordRef;
  salesRole?: PlatformCore.RecordRef;
  isPrimary?: boolean;
  contribution?: number;
  constructor(props: ReturnAuthorizationSalesTeam) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employee = props.employee;
    this.salesRole = props.salesRole;
    this.isPrimary = props.isPrimary;
    this.contribution = props.contribution;
  }
}

export class CreditMemoPartnersList extends SoapTypes.Base {
  partners?: PlatformCommon.Partners[];
  replaceAll?: boolean;
  constructor(props: CreditMemoPartnersList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.partners = props.partners;
    this.replaceAll = props.replaceAll;
  }
}

export class CreditMemoItemList extends SoapTypes.Base {
  item?: CreditMemoItem[];
  replaceAll?: boolean;
  constructor(props: CreditMemoItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomerRefundDeposit extends SoapTypes.Base {
  apply?: boolean;
  doc?: number;
  line?: number;
  depositDate?: SoapTypes.Dateish;
  refNum?: string;
  total?: number;
  remaining?: number;
  currency?: string;
  amount?: number;
  constructor(props: CustomerRefundDeposit) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.apply = props.apply;
    this.doc = props.doc;
    this.line = props.line;
    this.depositDate = props.depositDate;
    this.refNum = props.refNum;
    this.total = props.total;
    this.remaining = props.remaining;
    this.currency = props.currency;
    this.amount = props.amount;
  }
}

export class CustomerRefundDepositList extends SoapTypes.Base {
  customerRefundDeposit?: CustomerRefundDeposit[];
  replaceAll?: boolean;
  constructor(props: CustomerRefundDepositList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customerRefundDeposit = props.customerRefundDeposit;
    this.replaceAll = props.replaceAll;
  }
}

export class Charge extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  salesOrder?: PlatformCore.RecordRef;
  billTo?: PlatformCore.RecordRef;
  billingAccount?: PlatformCore.RecordRef;
  stage?: TransactionsCustomersTypes.ChargeStage;
  chargeDate?: SoapTypes.Dateish;
  use?: TransactionsCustomersTypes.ChargeUse;
  chargeType?: PlatformCore.RecordRef;
  projectTask?: PlatformCore.RecordRef;
  description?: string;
  createdDate?: SoapTypes.Dateish;
  timeRecord?: PlatformCore.RecordRef;
  rate?: string;
  quantity?: number;
  amount?: number;
  billingItem?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  transaction?: PlatformCore.RecordRef;
  transactionLine?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  salesOrderLine?: PlatformCore.RecordRef;
  subscriptionLine?: PlatformCore.RecordRef;
  invoice?: PlatformCore.RecordRef;
  invoiceLine?: PlatformCore.RecordRef;
  rule?: PlatformCore.RecordRef;
  runId?: string;
  internalId?: string;
  externalId?: string;
  constructor(props: Charge) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customForm = props.customForm;
    this.salesOrder = props.salesOrder;
    this.billTo = props.billTo;
    this.billingAccount = props.billingAccount;
    this.stage = props.stage;
    this.chargeDate = props.chargeDate;
    this.use = props.use;
    this.chargeType = props.chargeType;
    this.projectTask = props.projectTask;
    this.description = props.description;
    this.createdDate = props.createdDate;
    this.timeRecord = props.timeRecord;
    this.rate = props.rate;
    this.quantity = props.quantity;
    this.amount = props.amount;
    this.billingItem = props.billingItem;
    this.currency = props.currency;
    this.transaction = props.transaction;
    this.transactionLine = props.transactionLine;
    this.clazz = props.clazz;
    this.department = props.department;
    this.location = props.location;
    this.salesOrderLine = props.salesOrderLine;
    this.subscriptionLine = props.subscriptionLine;
    this.invoice = props.invoice;
    this.invoiceLine = props.invoiceLine;
    this.rule = props.rule;
    this.runId = props.runId;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class DepositApplicationApply extends SoapTypes.Base {
  doc?: number;
  line?: number;
  apply?: boolean;
  applyDate?: SoapTypes.Dateish;
  job?: string;
  type?: string;
  refNum?: string;
  total?: number;
  due?: number;
  currency?: string;
  amount?: number;
  constructor(props: DepositApplicationApply) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.doc = props.doc;
    this.line = props.line;
    this.apply = props.apply;
    this.applyDate = props.applyDate;
    this.job = props.job;
    this.type = props.type;
    this.refNum = props.refNum;
    this.total = props.total;
    this.due = props.due;
    this.currency = props.currency;
    this.amount = props.amount;
  }
}
