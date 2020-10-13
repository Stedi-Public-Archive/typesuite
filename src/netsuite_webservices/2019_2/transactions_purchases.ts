import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as TransactionsPurchasesTypes from "./transactions_purchases_types";
import * as PlatformCommonTypes from "./platform_common_types";

export type VendorBillItemProps = {
  item?: PlatformCore.RecordRef;
  vendorName?: string;
  line?: number;
  orderDoc?: number;
  orderLine?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  description?: string;
  serialNumbers?: string;
  binNumbers?: string;
  expirationDate?: string;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  grossAmt?: number;
  tax1Amt?: number;
  rate?: string;
  amount?: number;
  options?: PlatformCore.CustomFieldList;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  landedCostCategory?: PlatformCore.RecordRef;
  isBillable?: boolean;
  billVarianceStatus?: PlatformCommonTypes.TransactionBillVarianceStatus;
  billreceiptsList?: PlatformCore.RecordRefList;
  amortizationSched?: PlatformCore.RecordRef;
  amortizStartDate?: string;
  amortizationEndDate?: string;
  amortizationResidual?: string;
  taxAmount?: number;
  taxDetailsReference?: string;
  landedCost?: PlatformCommon.LandedCost;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class VendorBillItem {
  item?: PlatformCore.RecordRef;
  vendorName?: string;
  line?: number;
  orderDoc?: number;
  orderLine?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  description?: string;
  serialNumbers?: string;
  binNumbers?: string;
  expirationDate?: string;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  grossAmt?: number;
  tax1Amt?: number;
  rate?: string;
  amount?: number;
  options?: PlatformCore.CustomFieldList;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  landedCostCategory?: PlatformCore.RecordRef;
  isBillable?: boolean;
  billVarianceStatus?: PlatformCommonTypes.TransactionBillVarianceStatus;
  billreceiptsList?: PlatformCore.RecordRefList;
  amortizationSched?: PlatformCore.RecordRef;
  amortizStartDate?: string;
  amortizationEndDate?: string;
  amortizationResidual?: string;
  taxAmount?: number;
  taxDetailsReference?: string;
  landedCost?: PlatformCommon.LandedCost;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: VendorBillItemProps) {
    this.item = props.item;
    this.vendorName = props.vendorName;
    this.line = props.line;
    this.orderDoc = props.orderDoc;
    this.orderLine = props.orderLine;
    this.quantity = props.quantity;
    this.units = props.units;
    this.inventoryDetail = props.inventoryDetail;
    this.description = props.description;
    this.serialNumbers = props.serialNumbers;
    this.binNumbers = props.binNumbers;
    this.expirationDate = props.expirationDate;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.grossAmt = props.grossAmt;
    this.tax1Amt = props.tax1Amt;
    this.rate = props.rate;
    this.amount = props.amount;
    this.options = props.options;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customer = props.customer;
    this.landedCostCategory = props.landedCostCategory;
    this.isBillable = props.isBillable;
    this.billVarianceStatus = props.billVarianceStatus;
    this.billreceiptsList = props.billreceiptsList;
    this.amortizationSched = props.amortizationSched;
    this.amortizStartDate = props.amortizStartDate;
    this.amortizationEndDate = props.amortizationEndDate;
    this.amortizationResidual = props.amortizationResidual;
    this.taxAmount = props.taxAmount;
    this.taxDetailsReference = props.taxDetailsReference;
    this.landedCost = props.landedCost;
    this.customFieldList = props.customFieldList;
  }
}

export type InboundShipmentSearchRowProps = {
  basic?: PlatformCommon.InboundShipmentSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  itemReceiptJoin?: PlatformCommon.TransactionSearchRowBasic;
  purchaseOrderJoin?: PlatformCommon.TransactionSearchRowBasic;
  vendorJoin?: PlatformCommon.VendorSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class InboundShipmentSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.InboundShipmentSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  itemReceiptJoin?: PlatformCommon.TransactionSearchRowBasic;
  purchaseOrderJoin?: PlatformCommon.TransactionSearchRowBasic;
  vendorJoin?: PlatformCommon.VendorSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: InboundShipmentSearchRowProps) {
    super();
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.itemReceiptJoin = props.itemReceiptJoin;
    this.purchaseOrderJoin = props.purchaseOrderJoin;
    this.vendorJoin = props.vendorJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type VendorBillInstallmentProps = {
  amount?: number;
  dueDate?: string;
  amountDue?: number;
  seqNum?: number;
  status?: string;
};

export class VendorBillInstallment {
  amount?: number;
  dueDate?: string;
  amountDue?: number;
  seqNum?: number;
  status?: string;
  constructor(props: VendorBillInstallmentProps) {
    this.amount = props.amount;
    this.dueDate = props.dueDate;
    this.amountDue = props.amountDue;
    this.seqNum = props.seqNum;
    this.status = props.status;
  }
}

export type VendorPaymentCreditProps = {
  apply?: boolean;
  doc?: number;
  line?: number;
  creditDate?: string;
  type?: string;
  refNum?: string;
  appliedTo?: string;
  total?: number;
  due?: number;
  currency?: string;
  amount?: number;
};

export class VendorPaymentCredit {
  apply?: boolean;
  doc?: number;
  line?: number;
  creditDate?: string;
  type?: string;
  refNum?: string;
  appliedTo?: string;
  total?: number;
  due?: number;
  currency?: string;
  amount?: number;
  constructor(props: VendorPaymentCreditProps) {
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

export type PurchaseRequisitionItemListProps = {
  purchaseRequisitionItem?: PurchaseRequisitionItem[];
  replaceAll?: boolean;
};

export class PurchaseRequisitionItemList {
  purchaseRequisitionItem?: PurchaseRequisitionItem[];
  replaceAll?: boolean;
  constructor(props: PurchaseRequisitionItemListProps) {
    this.purchaseRequisitionItem = props.purchaseRequisitionItem;
    this.replaceAll = props.replaceAll;
  }
}

export type ItemReceiptExpenseListProps = {
  expense?: ItemReceiptExpense[];
  replaceAll?: boolean;
};

export class ItemReceiptExpenseList {
  expense?: ItemReceiptExpense[];
  replaceAll?: boolean;
  constructor(props: ItemReceiptExpenseListProps) {
    this.expense = props.expense;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorCreditApplyProps = {
  apply?: boolean;
  applyDate?: string;
  doc?: number;
  line?: number;
  type?: string;
  refNum?: string;
  total?: number;
  due?: number;
  currency?: string;
  amount?: number;
};

export class VendorCreditApply {
  apply?: boolean;
  applyDate?: string;
  doc?: number;
  line?: number;
  type?: string;
  refNum?: string;
  total?: number;
  due?: number;
  currency?: string;
  amount?: number;
  constructor(props: VendorCreditApplyProps) {
    this.apply = props.apply;
    this.applyDate = props.applyDate;
    this.doc = props.doc;
    this.line = props.line;
    this.type = props.type;
    this.refNum = props.refNum;
    this.total = props.total;
    this.due = props.due;
    this.currency = props.currency;
    this.amount = props.amount;
  }
}

export type PurchaseOrderItemListProps = {
  item?: PurchaseOrderItem[];
  replaceAll?: boolean;
};

export class PurchaseOrderItemList {
  item?: PurchaseOrderItem[];
  replaceAll?: boolean;
  constructor(props: PurchaseOrderItemListProps) {
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export type ItemReceiptItemListProps = {
  item?: ItemReceiptItem[];
  replaceAll?: boolean;
};

export class ItemReceiptItemList {
  item?: ItemReceiptItem[];
  replaceAll?: boolean;
  constructor(props: ItemReceiptItemListProps) {
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorBillInstallmentListProps = {
  vendorBillInstallment?: VendorBillInstallment[];
  replaceAll?: boolean;
};

export class VendorBillInstallmentList {
  vendorBillInstallment?: VendorBillInstallment[];
  replaceAll?: boolean;
  constructor(props: VendorBillInstallmentListProps) {
    this.vendorBillInstallment = props.vendorBillInstallment;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorPaymentApplyProps = {
  apply?: boolean;
  doc?: number;
  line?: number;
  job?: string;
  applyDate?: string;
  type?: string;
  refNum?: string;
  total?: number;
  due?: number;
  currency?: string;
  discDate?: string;
  discAmt?: number;
  disc?: number;
  amount?: number;
};

export class VendorPaymentApply {
  apply?: boolean;
  doc?: number;
  line?: number;
  job?: string;
  applyDate?: string;
  type?: string;
  refNum?: string;
  total?: number;
  due?: number;
  currency?: string;
  discDate?: string;
  discAmt?: number;
  disc?: number;
  amount?: number;
  constructor(props: VendorPaymentApplyProps) {
    this.apply = props.apply;
    this.doc = props.doc;
    this.line = props.line;
    this.job = props.job;
    this.applyDate = props.applyDate;
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

export type VendorPaymentProps = {
  createdDate?: string;
  lastModifiedDate?: string;
  customForm?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  balance?: number;
  apAcct?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  address?: string;
  tranDate?: string;
  voidJournal?: PlatformCore.RecordRef;
  postingPeriod?: PlatformCore.RecordRef;
  currencyName?: string;
  exchangeRate?: number;
  toAch?: boolean;
  toBePrinted?: boolean;
  printVoucher?: boolean;
  tranId?: string;
  total?: number;
  currency?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  memo?: string;
  subsidiary?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  status?: string;
  transactionNumber?: string;
  applyList?: VendorPaymentApplyList;
  creditList?: VendorPaymentCreditList;
  billPay?: boolean;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  availableBalance?: number;
  isInTransitPayment?: boolean;
  approvalStatus?: PlatformCore.RecordRef;
  nextApprover?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class VendorPayment extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
  customForm?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  balance?: number;
  apAcct?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  address?: string;
  tranDate?: string;
  voidJournal?: PlatformCore.RecordRef;
  postingPeriod?: PlatformCore.RecordRef;
  currencyName?: string;
  exchangeRate?: number;
  toAch?: boolean;
  toBePrinted?: boolean;
  printVoucher?: boolean;
  tranId?: string;
  total?: number;
  currency?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  memo?: string;
  subsidiary?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  status?: string;
  transactionNumber?: string;
  applyList?: VendorPaymentApplyList;
  creditList?: VendorPaymentCreditList;
  billPay?: boolean;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  availableBalance?: number;
  isInTransitPayment?: boolean;
  approvalStatus?: PlatformCore.RecordRef;
  nextApprover?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: VendorPaymentProps) {
    super(props);
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.account = props.account;
    this.balance = props.balance;
    this.apAcct = props.apAcct;
    this.entity = props.entity;
    this.address = props.address;
    this.tranDate = props.tranDate;
    this.voidJournal = props.voidJournal;
    this.postingPeriod = props.postingPeriod;
    this.currencyName = props.currencyName;
    this.exchangeRate = props.exchangeRate;
    this.toAch = props.toAch;
    this.toBePrinted = props.toBePrinted;
    this.printVoucher = props.printVoucher;
    this.tranId = props.tranId;
    this.total = props.total;
    this.currency = props.currency;
    this.department = props.department;
    this.memo = props.memo;
    this.subsidiary = props.subsidiary;
    this.clazz = props.clazz;
    this.location = props.location;
    this.status = props.status;
    this.transactionNumber = props.transactionNumber;
    this.applyList = props.applyList;
    this.creditList = props.creditList;
    this.billPay = props.billPay;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.availableBalance = props.availableBalance;
    this.isInTransitPayment = props.isInTransitPayment;
    this.approvalStatus = props.approvalStatus;
    this.nextApprover = props.nextApprover;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type VendorCreditExpenseListProps = {
  expense?: VendorCreditExpense[];
  replaceAll?: boolean;
};

export class VendorCreditExpenseList {
  expense?: VendorCreditExpense[];
  replaceAll?: boolean;
  constructor(props: VendorCreditExpenseListProps) {
    this.expense = props.expense;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorReturnAuthorizationExpenseProps = {
  orderLine?: number;
  line?: number;
  category?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  amount?: number;
  taxAmount?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  tax1Amt?: number;
  grossAmt?: number;
  taxDetailsReference?: string;
  memo?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  amortizationSched?: PlatformCore.RecordRef;
  amortizStartDate?: string;
  amortizationEndDate?: string;
  amortizationResidual?: string;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class VendorReturnAuthorizationExpense {
  orderLine?: number;
  line?: number;
  category?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  amount?: number;
  taxAmount?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  tax1Amt?: number;
  grossAmt?: number;
  taxDetailsReference?: string;
  memo?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  amortizationSched?: PlatformCore.RecordRef;
  amortizStartDate?: string;
  amortizationEndDate?: string;
  amortizationResidual?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: VendorReturnAuthorizationExpenseProps) {
    this.orderLine = props.orderLine;
    this.line = props.line;
    this.category = props.category;
    this.account = props.account;
    this.amount = props.amount;
    this.taxAmount = props.taxAmount;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.tax1Amt = props.tax1Amt;
    this.grossAmt = props.grossAmt;
    this.taxDetailsReference = props.taxDetailsReference;
    this.memo = props.memo;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customer = props.customer;
    this.isBillable = props.isBillable;
    this.amortizationSched = props.amortizationSched;
    this.amortizStartDate = props.amortizStartDate;
    this.amortizationEndDate = props.amortizationEndDate;
    this.amortizationResidual = props.amortizationResidual;
    this.customFieldList = props.customFieldList;
  }
}

export type VendorReturnAuthorizationItemProps = {
  item?: PlatformCore.RecordRef;
  vendorName?: string;
  line?: number;
  orderLine?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  serialNumbersList?: PlatformCore.RecordRefList;
  description?: string;
  binNumbers?: string;
  rate?: string;
  amount?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  grossAmt?: number;
  tax1Amt?: number;
  options?: PlatformCore.CustomFieldList;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  isClosed?: boolean;
  amortizationSched?: PlatformCore.RecordRef;
  isDropShipment?: boolean;
  taxAmount?: number;
  taxDetailsReference?: string;
  amortizStartDate?: string;
  amortizationEndDate?: string;
  amortizationResidual?: string;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class VendorReturnAuthorizationItem {
  item?: PlatformCore.RecordRef;
  vendorName?: string;
  line?: number;
  orderLine?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  serialNumbersList?: PlatformCore.RecordRefList;
  description?: string;
  binNumbers?: string;
  rate?: string;
  amount?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  grossAmt?: number;
  tax1Amt?: number;
  options?: PlatformCore.CustomFieldList;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  isClosed?: boolean;
  amortizationSched?: PlatformCore.RecordRef;
  isDropShipment?: boolean;
  taxAmount?: number;
  taxDetailsReference?: string;
  amortizStartDate?: string;
  amortizationEndDate?: string;
  amortizationResidual?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: VendorReturnAuthorizationItemProps) {
    this.item = props.item;
    this.vendorName = props.vendorName;
    this.line = props.line;
    this.orderLine = props.orderLine;
    this.quantity = props.quantity;
    this.units = props.units;
    this.inventoryDetail = props.inventoryDetail;
    this.serialNumbersList = props.serialNumbersList;
    this.description = props.description;
    this.binNumbers = props.binNumbers;
    this.rate = props.rate;
    this.amount = props.amount;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.grossAmt = props.grossAmt;
    this.tax1Amt = props.tax1Amt;
    this.options = props.options;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customer = props.customer;
    this.isBillable = props.isBillable;
    this.isClosed = props.isClosed;
    this.amortizationSched = props.amortizationSched;
    this.isDropShipment = props.isDropShipment;
    this.taxAmount = props.taxAmount;
    this.taxDetailsReference = props.taxDetailsReference;
    this.amortizStartDate = props.amortizStartDate;
    this.amortizationEndDate = props.amortizationEndDate;
    this.amortizationResidual = props.amortizationResidual;
    this.customFieldList = props.customFieldList;
  }
}

export type InboundShipmentLandedCostProps = {
  landedCostCostCategory?: PlatformCore.RecordRef;
  landedCostAmount?: number;
  landedCostCurrency?: PlatformCore.RecordRef;
  landedCostExchangeRate?: number;
  landedCostEffectiveDate?: string;
  landedCostAllocationMethod?: TransactionsPurchasesTypes.InboundShipmentLandedCostAllocationMethod;
  landedCostShipmentItemsList?: PlatformCore.RecordRefList;
};

export class InboundShipmentLandedCost {
  landedCostCostCategory?: PlatformCore.RecordRef;
  landedCostAmount?: number;
  landedCostCurrency?: PlatformCore.RecordRef;
  landedCostExchangeRate?: number;
  landedCostEffectiveDate?: string;
  landedCostAllocationMethod?: TransactionsPurchasesTypes.InboundShipmentLandedCostAllocationMethod;
  landedCostShipmentItemsList?: PlatformCore.RecordRefList;
  constructor(props: InboundShipmentLandedCostProps) {
    this.landedCostCostCategory = props.landedCostCostCategory;
    this.landedCostAmount = props.landedCostAmount;
    this.landedCostCurrency = props.landedCostCurrency;
    this.landedCostExchangeRate = props.landedCostExchangeRate;
    this.landedCostEffectiveDate = props.landedCostEffectiveDate;
    this.landedCostAllocationMethod = props.landedCostAllocationMethod;
    this.landedCostShipmentItemsList = props.landedCostShipmentItemsList;
  }
}

export type ItemReceiptItemProps = {
  itemReceive?: boolean;
  jobName?: string;
  item?: PlatformCore.RecordRef;
  orderLine?: number;
  line?: number;
  itemName?: string;
  description?: string;
  location?: PlatformCore.RecordRef;
  onHand?: number;
  quantityRemaining?: number;
  quantity?: number;
  unitsDisplay?: string;
  unitCostOverride?: number;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  serialNumbers?: string;
  binNumbers?: string;
  expirationDate?: string;
  rate?: string;
  currency?: string;
  restock?: boolean;
  billVarianceStatus?: PlatformCommonTypes.TransactionBillVarianceStatus;
  isDropShipment?: boolean;
  options?: PlatformCore.CustomFieldList;
  landedCost?: PlatformCommon.LandedCost;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class ItemReceiptItem {
  itemReceive?: boolean;
  jobName?: string;
  item?: PlatformCore.RecordRef;
  orderLine?: number;
  line?: number;
  itemName?: string;
  description?: string;
  location?: PlatformCore.RecordRef;
  onHand?: number;
  quantityRemaining?: number;
  quantity?: number;
  unitsDisplay?: string;
  unitCostOverride?: number;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  serialNumbers?: string;
  binNumbers?: string;
  expirationDate?: string;
  rate?: string;
  currency?: string;
  restock?: boolean;
  billVarianceStatus?: PlatformCommonTypes.TransactionBillVarianceStatus;
  isDropShipment?: boolean;
  options?: PlatformCore.CustomFieldList;
  landedCost?: PlatformCommon.LandedCost;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: ItemReceiptItemProps) {
    this.itemReceive = props.itemReceive;
    this.jobName = props.jobName;
    this.item = props.item;
    this.orderLine = props.orderLine;
    this.line = props.line;
    this.itemName = props.itemName;
    this.description = props.description;
    this.location = props.location;
    this.onHand = props.onHand;
    this.quantityRemaining = props.quantityRemaining;
    this.quantity = props.quantity;
    this.unitsDisplay = props.unitsDisplay;
    this.unitCostOverride = props.unitCostOverride;
    this.inventoryDetail = props.inventoryDetail;
    this.serialNumbers = props.serialNumbers;
    this.binNumbers = props.binNumbers;
    this.expirationDate = props.expirationDate;
    this.rate = props.rate;
    this.currency = props.currency;
    this.restock = props.restock;
    this.billVarianceStatus = props.billVarianceStatus;
    this.isDropShipment = props.isDropShipment;
    this.options = props.options;
    this.landedCost = props.landedCost;
    this.customFieldList = props.customFieldList;
  }
}

export type InboundShipmentLandedCostListProps = {
  inboundShipmentLandedCost?: InboundShipmentLandedCost[];
  replaceAll?: boolean;
};

export class InboundShipmentLandedCostList {
  inboundShipmentLandedCost?: InboundShipmentLandedCost[];
  replaceAll?: boolean;
  constructor(props: InboundShipmentLandedCostListProps) {
    this.inboundShipmentLandedCost = props.inboundShipmentLandedCost;
    this.replaceAll = props.replaceAll;
  }
}

export type PurchaseOrderExpenseListProps = {
  expense?: PurchaseOrderExpense[];
  replaceAll?: boolean;
};

export class PurchaseOrderExpenseList {
  expense?: PurchaseOrderExpense[];
  replaceAll?: boolean;
  constructor(props: PurchaseOrderExpenseListProps) {
    this.expense = props.expense;
    this.replaceAll = props.replaceAll;
  }
}

export type InboundShipmentSearchAdvancedProps = {
  criteria?: InboundShipmentSearch;
  columns?: InboundShipmentSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class InboundShipmentSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: InboundShipmentSearch;
  columns?: InboundShipmentSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: InboundShipmentSearchAdvancedProps) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type InboundShipmentSearchProps = {
  basic?: PlatformCommon.InboundShipmentSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  itemReceiptJoin?: PlatformCommon.TransactionSearchBasic;
  purchaseOrderJoin?: PlatformCommon.TransactionSearchBasic;
  vendorJoin?: PlatformCommon.VendorSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class InboundShipmentSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.InboundShipmentSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  itemReceiptJoin?: PlatformCommon.TransactionSearchBasic;
  purchaseOrderJoin?: PlatformCommon.TransactionSearchBasic;
  vendorJoin?: PlatformCommon.VendorSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: InboundShipmentSearchProps) {
    super();
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.itemReceiptJoin = props.itemReceiptJoin;
    this.purchaseOrderJoin = props.purchaseOrderJoin;
    this.vendorJoin = props.vendorJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type InboundShipmentItemsProps = {
  id?: number;
  purchaseOrder?: PlatformCore.RecordRef;
  shipmentItem?: PlatformCore.RecordRef;
  shipmentItemDescription?: string;
  poVendor?: string;
  receivingLocation?: PlatformCore.RecordRef;
  quantityReceived?: number;
  quantityExpected?: number;
  quantityRemaining?: number;
  unit?: PlatformCore.RecordRef;
  poRate?: number;
  expectedRate?: number;
  shipmentItemExchangeRate?: number;
  shipmentItemEffectiveDate?: string;
  unitLandedCost?: number;
  totalUnitCost?: number;
  shipmentItemAmount?: number;
  poCurrency?: PlatformCore.RecordRef;
  incoterm?: PlatformCore.RecordRef;
};

export class InboundShipmentItems {
  id?: number;
  purchaseOrder?: PlatformCore.RecordRef;
  shipmentItem?: PlatformCore.RecordRef;
  shipmentItemDescription?: string;
  poVendor?: string;
  receivingLocation?: PlatformCore.RecordRef;
  quantityReceived?: number;
  quantityExpected?: number;
  quantityRemaining?: number;
  unit?: PlatformCore.RecordRef;
  poRate?: number;
  expectedRate?: number;
  shipmentItemExchangeRate?: number;
  shipmentItemEffectiveDate?: string;
  unitLandedCost?: number;
  totalUnitCost?: number;
  shipmentItemAmount?: number;
  poCurrency?: PlatformCore.RecordRef;
  incoterm?: PlatformCore.RecordRef;
  constructor(props: InboundShipmentItemsProps) {
    this.id = props.id;
    this.purchaseOrder = props.purchaseOrder;
    this.shipmentItem = props.shipmentItem;
    this.shipmentItemDescription = props.shipmentItemDescription;
    this.poVendor = props.poVendor;
    this.receivingLocation = props.receivingLocation;
    this.quantityReceived = props.quantityReceived;
    this.quantityExpected = props.quantityExpected;
    this.quantityRemaining = props.quantityRemaining;
    this.unit = props.unit;
    this.poRate = props.poRate;
    this.expectedRate = props.expectedRate;
    this.shipmentItemExchangeRate = props.shipmentItemExchangeRate;
    this.shipmentItemEffectiveDate = props.shipmentItemEffectiveDate;
    this.unitLandedCost = props.unitLandedCost;
    this.totalUnitCost = props.totalUnitCost;
    this.shipmentItemAmount = props.shipmentItemAmount;
    this.poCurrency = props.poCurrency;
    this.incoterm = props.incoterm;
  }
}

export type ItemReceiptProps = {
  createdDate?: string;
  lastModifiedDate?: string;
  customForm?: PlatformCore.RecordRef;
  exchangeRate?: number;
  entity?: PlatformCore.RecordRef;
  currencyName?: string;
  subsidiary?: PlatformCore.RecordRef;
  createdFrom?: PlatformCore.RecordRef;
  tranDate?: string;
  partner?: PlatformCore.RecordRef;
  postingPeriod?: PlatformCore.RecordRef;
  tranId?: string;
  inboundShipment?: PlatformCore.RecordRef;
  memo?: string;
  itemFulfillment?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  landedCostMethod?: PlatformCommonTypes.LandedCostMethod;
  landedCostPerLine?: boolean;
  itemList?: ItemReceiptItemList;
  expenseList?: ItemReceiptExpenseList;
  landedCostsList?: PurchLandedCostList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class ItemReceipt extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
  customForm?: PlatformCore.RecordRef;
  exchangeRate?: number;
  entity?: PlatformCore.RecordRef;
  currencyName?: string;
  subsidiary?: PlatformCore.RecordRef;
  createdFrom?: PlatformCore.RecordRef;
  tranDate?: string;
  partner?: PlatformCore.RecordRef;
  postingPeriod?: PlatformCore.RecordRef;
  tranId?: string;
  inboundShipment?: PlatformCore.RecordRef;
  memo?: string;
  itemFulfillment?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  landedCostMethod?: PlatformCommonTypes.LandedCostMethod;
  landedCostPerLine?: boolean;
  itemList?: ItemReceiptItemList;
  expenseList?: ItemReceiptExpenseList;
  landedCostsList?: PurchLandedCostList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: ItemReceiptProps) {
    super(props);
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.exchangeRate = props.exchangeRate;
    this.entity = props.entity;
    this.currencyName = props.currencyName;
    this.subsidiary = props.subsidiary;
    this.createdFrom = props.createdFrom;
    this.tranDate = props.tranDate;
    this.partner = props.partner;
    this.postingPeriod = props.postingPeriod;
    this.tranId = props.tranId;
    this.inboundShipment = props.inboundShipment;
    this.memo = props.memo;
    this.itemFulfillment = props.itemFulfillment;
    this.currency = props.currency;
    this.landedCostMethod = props.landedCostMethod;
    this.landedCostPerLine = props.landedCostPerLine;
    this.itemList = props.itemList;
    this.expenseList = props.expenseList;
    this.landedCostsList = props.landedCostsList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type VendorPaymentCreditListProps = {
  credit?: VendorPaymentCredit[];
  replaceAll?: boolean;
};

export class VendorPaymentCreditList {
  credit?: VendorPaymentCredit[];
  replaceAll?: boolean;
  constructor(props: VendorPaymentCreditListProps) {
    this.credit = props.credit;
    this.replaceAll = props.replaceAll;
  }
}

export type PurchaseOrderItemProps = {
  item?: PlatformCore.RecordRef;
  line?: number;
  quantityOnShipments?: number;
  vendorName?: string;
  quantityReceived?: number;
  quantityBilled?: number;
  quantityAvailable?: number;
  quantityOnHand?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  quantity?: number;
  tax1Amt?: number;
  grossAmt?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  serialNumbers?: string;
  description?: string;
  purchaseContract?: PlatformCore.RecordRef;
  rate?: string;
  amount?: number;
  options?: PlatformCore.CustomFieldList;
  taxAmount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  landedCostCategory?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  billVarianceStatus?: PlatformCommonTypes.TransactionBillVarianceStatus;
  matchBillToReceipt?: boolean;
  expectedReceiptDate?: string;
  isClosed?: boolean;
  taxDetailsReference?: string;
  createdFrom?: PlatformCore.RecordRef;
  linkedOrderList?: PlatformCore.RecordRefList;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class PurchaseOrderItem {
  item?: PlatformCore.RecordRef;
  line?: number;
  quantityOnShipments?: number;
  vendorName?: string;
  quantityReceived?: number;
  quantityBilled?: number;
  quantityAvailable?: number;
  quantityOnHand?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  quantity?: number;
  tax1Amt?: number;
  grossAmt?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  serialNumbers?: string;
  description?: string;
  purchaseContract?: PlatformCore.RecordRef;
  rate?: string;
  amount?: number;
  options?: PlatformCore.CustomFieldList;
  taxAmount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  landedCostCategory?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  billVarianceStatus?: PlatformCommonTypes.TransactionBillVarianceStatus;
  matchBillToReceipt?: boolean;
  expectedReceiptDate?: string;
  isClosed?: boolean;
  taxDetailsReference?: string;
  createdFrom?: PlatformCore.RecordRef;
  linkedOrderList?: PlatformCore.RecordRefList;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: PurchaseOrderItemProps) {
    this.item = props.item;
    this.line = props.line;
    this.quantityOnShipments = props.quantityOnShipments;
    this.vendorName = props.vendorName;
    this.quantityReceived = props.quantityReceived;
    this.quantityBilled = props.quantityBilled;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityOnHand = props.quantityOnHand;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.quantity = props.quantity;
    this.tax1Amt = props.tax1Amt;
    this.grossAmt = props.grossAmt;
    this.units = props.units;
    this.inventoryDetail = props.inventoryDetail;
    this.serialNumbers = props.serialNumbers;
    this.description = props.description;
    this.purchaseContract = props.purchaseContract;
    this.rate = props.rate;
    this.amount = props.amount;
    this.options = props.options;
    this.taxAmount = props.taxAmount;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.landedCostCategory = props.landedCostCategory;
    this.customer = props.customer;
    this.isBillable = props.isBillable;
    this.billVarianceStatus = props.billVarianceStatus;
    this.matchBillToReceipt = props.matchBillToReceipt;
    this.expectedReceiptDate = props.expectedReceiptDate;
    this.isClosed = props.isClosed;
    this.taxDetailsReference = props.taxDetailsReference;
    this.createdFrom = props.createdFrom;
    this.linkedOrderList = props.linkedOrderList;
    this.customFieldList = props.customFieldList;
  }
}

export type InboundShipmentItemsListProps = {
  inboundShipmentItems?: InboundShipmentItems[];
  replaceAll?: boolean;
};

export class InboundShipmentItemsList {
  inboundShipmentItems?: InboundShipmentItems[];
  replaceAll?: boolean;
  constructor(props: InboundShipmentItemsListProps) {
    this.inboundShipmentItems = props.inboundShipmentItems;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorReturnAuthorizationExpenseListProps = {
  expense?: VendorReturnAuthorizationExpense[];
  replaceAll?: boolean;
};

export class VendorReturnAuthorizationExpenseList {
  expense?: VendorReturnAuthorizationExpense[];
  replaceAll?: boolean;
  constructor(props: VendorReturnAuthorizationExpenseListProps) {
    this.expense = props.expense;
    this.replaceAll = props.replaceAll;
  }
}

export type PurchaseRequisitionExpenseProps = {
  line?: number;
  category?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  isClosed?: boolean;
  account?: PlatformCore.RecordRef;
  poVendor?: PlatformCore.RecordRef;
  estimatedAmount?: number;
  amount?: number;
  memo?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  linkedOrderList?: PlatformCore.RecordRefList;
  linkedOrderStatus?: string;
  isBillable?: boolean;
};

export class PurchaseRequisitionExpense {
  line?: number;
  category?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  isClosed?: boolean;
  account?: PlatformCore.RecordRef;
  poVendor?: PlatformCore.RecordRef;
  estimatedAmount?: number;
  amount?: number;
  memo?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  linkedOrderList?: PlatformCore.RecordRefList;
  linkedOrderStatus?: string;
  isBillable?: boolean;
  constructor(props: PurchaseRequisitionExpenseProps) {
    this.line = props.line;
    this.category = props.category;
    this.location = props.location;
    this.isClosed = props.isClosed;
    this.account = props.account;
    this.poVendor = props.poVendor;
    this.estimatedAmount = props.estimatedAmount;
    this.amount = props.amount;
    this.memo = props.memo;
    this.department = props.department;
    this.clazz = props.clazz;
    this.customer = props.customer;
    this.linkedOrderList = props.linkedOrderList;
    this.linkedOrderStatus = props.linkedOrderStatus;
    this.isBillable = props.isBillable;
  }
}

export type VendorCreditApplyListProps = {
  apply?: VendorCreditApply[];
  replaceAll?: boolean;
};

export class VendorCreditApplyList {
  apply?: VendorCreditApply[];
  replaceAll?: boolean;
  constructor(props: VendorCreditApplyListProps) {
    this.apply = props.apply;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorBillExpenseProps = {
  orderDoc?: number;
  orderLine?: number;
  line?: number;
  category?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  amount?: number;
  taxAmount?: number;
  tax1Amt?: number;
  memo?: string;
  grossAmt?: number;
  taxDetailsReference?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  projectTask?: PlatformCore.RecordRef;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  amortizationSched?: PlatformCore.RecordRef;
  amortizStartDate?: string;
  amortizationEndDate?: string;
  amortizationResidual?: string;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class VendorBillExpense {
  orderDoc?: number;
  orderLine?: number;
  line?: number;
  category?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  amount?: number;
  taxAmount?: number;
  tax1Amt?: number;
  memo?: string;
  grossAmt?: number;
  taxDetailsReference?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  projectTask?: PlatformCore.RecordRef;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  amortizationSched?: PlatformCore.RecordRef;
  amortizStartDate?: string;
  amortizationEndDate?: string;
  amortizationResidual?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: VendorBillExpenseProps) {
    this.orderDoc = props.orderDoc;
    this.orderLine = props.orderLine;
    this.line = props.line;
    this.category = props.category;
    this.account = props.account;
    this.amount = props.amount;
    this.taxAmount = props.taxAmount;
    this.tax1Amt = props.tax1Amt;
    this.memo = props.memo;
    this.grossAmt = props.grossAmt;
    this.taxDetailsReference = props.taxDetailsReference;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customer = props.customer;
    this.isBillable = props.isBillable;
    this.projectTask = props.projectTask;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.amortizationSched = props.amortizationSched;
    this.amortizStartDate = props.amortizStartDate;
    this.amortizationEndDate = props.amortizationEndDate;
    this.amortizationResidual = props.amortizationResidual;
    this.customFieldList = props.customFieldList;
  }
}

export type VendorBillExpenseListProps = {
  expense?: VendorBillExpense[];
  replaceAll?: boolean;
};

export class VendorBillExpenseList {
  expense?: VendorBillExpense[];
  replaceAll?: boolean;
  constructor(props: VendorBillExpenseListProps) {
    this.expense = props.expense;
    this.replaceAll = props.replaceAll;
  }
}

export type PurchaseRequisitionProps = {
  createdDate?: string;
  lastModifiedDate?: string;
  customForm?: PlatformCore.RecordRef;
  source?: string;
  subTotal?: number;
  currencyName?: string;
  exchangeRate?: number;
  vatRegNum?: string;
  nexus?: PlatformCore.RecordRef;
  taxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  estimatedTotal?: number;
  status?: string;
  currency?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  dueDate?: string;
  tranDate?: string;
  tranId?: string;
  memo?: string;
  approvalStatus?: PlatformCore.RecordRef;
  nextApprover?: PlatformCore.RecordRef;
  taxTotal?: number;
  tax2Total?: number;
  subsidiary?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  total?: number;
  itemList?: PurchaseRequisitionItemList;
  expenseList?: PurchaseRequisitionExpenseList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class PurchaseRequisition extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
  customForm?: PlatformCore.RecordRef;
  source?: string;
  subTotal?: number;
  currencyName?: string;
  exchangeRate?: number;
  vatRegNum?: string;
  nexus?: PlatformCore.RecordRef;
  taxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  estimatedTotal?: number;
  status?: string;
  currency?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  dueDate?: string;
  tranDate?: string;
  tranId?: string;
  memo?: string;
  approvalStatus?: PlatformCore.RecordRef;
  nextApprover?: PlatformCore.RecordRef;
  taxTotal?: number;
  tax2Total?: number;
  subsidiary?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  total?: number;
  itemList?: PurchaseRequisitionItemList;
  expenseList?: PurchaseRequisitionExpenseList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: PurchaseRequisitionProps) {
    super(props);
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.source = props.source;
    this.subTotal = props.subTotal;
    this.currencyName = props.currencyName;
    this.exchangeRate = props.exchangeRate;
    this.vatRegNum = props.vatRegNum;
    this.nexus = props.nexus;
    this.taxRegNum = props.taxRegNum;
    this.taxRegOverride = props.taxRegOverride;
    this.estimatedTotal = props.estimatedTotal;
    this.status = props.status;
    this.currency = props.currency;
    this.entity = props.entity;
    this.dueDate = props.dueDate;
    this.tranDate = props.tranDate;
    this.tranId = props.tranId;
    this.memo = props.memo;
    this.approvalStatus = props.approvalStatus;
    this.nextApprover = props.nextApprover;
    this.taxTotal = props.taxTotal;
    this.tax2Total = props.tax2Total;
    this.subsidiary = props.subsidiary;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.total = props.total;
    this.itemList = props.itemList;
    this.expenseList = props.expenseList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type InboundShipmentProps = {
  customForm?: PlatformCore.RecordRef;
  shipmentNumber?: string;
  externalDocumentNumber?: string;
  shipmentStatus?: TransactionsPurchasesTypes.InboundShipmentShipmentStatus;
  expectedShippingDate?: string;
  actualShippingDate?: string;
  expectedDeliveryDate?: string;
  actualDeliveryDate?: string;
  shipmentMemo?: string;
  vesselNumber?: string;
  billOfLading?: string;
  landedCostList?: InboundShipmentLandedCostList;
  itemsList?: InboundShipmentItemsList;
  shipmentBaseCurrency?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class InboundShipment extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  shipmentNumber?: string;
  externalDocumentNumber?: string;
  shipmentStatus?: TransactionsPurchasesTypes.InboundShipmentShipmentStatus;
  expectedShippingDate?: string;
  actualShippingDate?: string;
  expectedDeliveryDate?: string;
  actualDeliveryDate?: string;
  shipmentMemo?: string;
  vesselNumber?: string;
  billOfLading?: string;
  landedCostList?: InboundShipmentLandedCostList;
  itemsList?: InboundShipmentItemsList;
  shipmentBaseCurrency?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: InboundShipmentProps) {
    super(props);
    this.customForm = props.customForm;
    this.shipmentNumber = props.shipmentNumber;
    this.externalDocumentNumber = props.externalDocumentNumber;
    this.shipmentStatus = props.shipmentStatus;
    this.expectedShippingDate = props.expectedShippingDate;
    this.actualShippingDate = props.actualShippingDate;
    this.expectedDeliveryDate = props.expectedDeliveryDate;
    this.actualDeliveryDate = props.actualDeliveryDate;
    this.shipmentMemo = props.shipmentMemo;
    this.vesselNumber = props.vesselNumber;
    this.billOfLading = props.billOfLading;
    this.landedCostList = props.landedCostList;
    this.itemsList = props.itemsList;
    this.shipmentBaseCurrency = props.shipmentBaseCurrency;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type VendorBillProps = {
  createdDate?: string;
  lastModifiedDate?: string;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  customForm?: PlatformCore.RecordRef;
  billAddressList?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  approvalStatus?: PlatformCore.RecordRef;
  nextApprover?: PlatformCore.RecordRef;
  vatRegNum?: string;
  postingPeriod?: PlatformCore.RecordRef;
  tranDate?: string;
  currencyName?: string;
  billingAddress?: PlatformCommon.Address;
  exchangeRate?: number;
  entityTaxRegNum?: PlatformCore.RecordRef;
  taxPointDate?: string;
  terms?: PlatformCore.RecordRef;
  dueDate?: string;
  discountDate?: string;
  tranId?: string;
  userTotal?: number;
  discountAmount?: number;
  taxTotal?: number;
  paymentHold?: boolean;
  memo?: string;
  tax2Total?: number;
  creditLimit?: number;
  availableVendorCredit?: number;
  currency?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  status?: string;
  landedCostMethod?: PlatformCommonTypes.LandedCostMethod;
  landedCostPerLine?: boolean;
  transactionNumber?: string;
  expenseList?: VendorBillExpenseList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  itemList?: VendorBillItemList;
  installmentList?: VendorBillInstallmentList;
  landedCostsList?: PurchLandedCostList;
  purchaseOrderList?: PlatformCore.RecordRefList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  overrideInstallments?: boolean;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class VendorBill extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  customForm?: PlatformCore.RecordRef;
  billAddressList?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  approvalStatus?: PlatformCore.RecordRef;
  nextApprover?: PlatformCore.RecordRef;
  vatRegNum?: string;
  postingPeriod?: PlatformCore.RecordRef;
  tranDate?: string;
  currencyName?: string;
  billingAddress?: PlatformCommon.Address;
  exchangeRate?: number;
  entityTaxRegNum?: PlatformCore.RecordRef;
  taxPointDate?: string;
  terms?: PlatformCore.RecordRef;
  dueDate?: string;
  discountDate?: string;
  tranId?: string;
  userTotal?: number;
  discountAmount?: number;
  taxTotal?: number;
  paymentHold?: boolean;
  memo?: string;
  tax2Total?: number;
  creditLimit?: number;
  availableVendorCredit?: number;
  currency?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  status?: string;
  landedCostMethod?: PlatformCommonTypes.LandedCostMethod;
  landedCostPerLine?: boolean;
  transactionNumber?: string;
  expenseList?: VendorBillExpenseList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  itemList?: VendorBillItemList;
  installmentList?: VendorBillInstallmentList;
  landedCostsList?: PurchLandedCostList;
  purchaseOrderList?: PlatformCore.RecordRefList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  overrideInstallments?: boolean;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: VendorBillProps) {
    super(props);
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.nexus = props.nexus;
    this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
    this.taxRegOverride = props.taxRegOverride;
    this.taxDetailsOverride = props.taxDetailsOverride;
    this.customForm = props.customForm;
    this.billAddressList = props.billAddressList;
    this.account = props.account;
    this.entity = props.entity;
    this.subsidiary = props.subsidiary;
    this.approvalStatus = props.approvalStatus;
    this.nextApprover = props.nextApprover;
    this.vatRegNum = props.vatRegNum;
    this.postingPeriod = props.postingPeriod;
    this.tranDate = props.tranDate;
    this.currencyName = props.currencyName;
    this.billingAddress = props.billingAddress;
    this.exchangeRate = props.exchangeRate;
    this.entityTaxRegNum = props.entityTaxRegNum;
    this.taxPointDate = props.taxPointDate;
    this.terms = props.terms;
    this.dueDate = props.dueDate;
    this.discountDate = props.discountDate;
    this.tranId = props.tranId;
    this.userTotal = props.userTotal;
    this.discountAmount = props.discountAmount;
    this.taxTotal = props.taxTotal;
    this.paymentHold = props.paymentHold;
    this.memo = props.memo;
    this.tax2Total = props.tax2Total;
    this.creditLimit = props.creditLimit;
    this.availableVendorCredit = props.availableVendorCredit;
    this.currency = props.currency;
    this.clazz = props.clazz;
    this.department = props.department;
    this.location = props.location;
    this.status = props.status;
    this.landedCostMethod = props.landedCostMethod;
    this.landedCostPerLine = props.landedCostPerLine;
    this.transactionNumber = props.transactionNumber;
    this.expenseList = props.expenseList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.itemList = props.itemList;
    this.installmentList = props.installmentList;
    this.landedCostsList = props.landedCostsList;
    this.purchaseOrderList = props.purchaseOrderList;
    this.taxDetailsList = props.taxDetailsList;
    this.overrideInstallments = props.overrideInstallments;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type ItemReceiptExpenseProps = {
  markReceived?: boolean;
  orderLine?: number;
  line?: number;
  account?: string;
  memo?: string;
  amount?: number;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class ItemReceiptExpense {
  markReceived?: boolean;
  orderLine?: number;
  line?: number;
  account?: string;
  memo?: string;
  amount?: number;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: ItemReceiptExpenseProps) {
    this.markReceived = props.markReceived;
    this.orderLine = props.orderLine;
    this.line = props.line;
    this.account = props.account;
    this.memo = props.memo;
    this.amount = props.amount;
    this.customFieldList = props.customFieldList;
  }
}

export type VendorBillItemListProps = {
  item?: VendorBillItem[];
  replaceAll?: boolean;
};

export class VendorBillItemList {
  item?: VendorBillItem[];
  replaceAll?: boolean;
  constructor(props: VendorBillItemListProps) {
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorCreditExpenseProps = {
  orderLine?: number;
  line?: number;
  category?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  amount?: number;
  taxAmount?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  tax1Amt?: number;
  grossAmt?: number;
  taxDetailsReference?: string;
  memo?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  amortizationSched?: PlatformCore.RecordRef;
  amortizStartDate?: string;
  amortizationEndDate?: string;
  amortizationResidual?: string;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class VendorCreditExpense {
  orderLine?: number;
  line?: number;
  category?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  amount?: number;
  taxAmount?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  tax1Amt?: number;
  grossAmt?: number;
  taxDetailsReference?: string;
  memo?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  amortizationSched?: PlatformCore.RecordRef;
  amortizStartDate?: string;
  amortizationEndDate?: string;
  amortizationResidual?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: VendorCreditExpenseProps) {
    this.orderLine = props.orderLine;
    this.line = props.line;
    this.category = props.category;
    this.account = props.account;
    this.amount = props.amount;
    this.taxAmount = props.taxAmount;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.tax1Amt = props.tax1Amt;
    this.grossAmt = props.grossAmt;
    this.taxDetailsReference = props.taxDetailsReference;
    this.memo = props.memo;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customer = props.customer;
    this.isBillable = props.isBillable;
    this.amortizationSched = props.amortizationSched;
    this.amortizStartDate = props.amortizStartDate;
    this.amortizationEndDate = props.amortizationEndDate;
    this.amortizationResidual = props.amortizationResidual;
    this.customFieldList = props.customFieldList;
  }
}

export type PurchaseOrderProps = {
  createdDate?: string;
  lastModifiedDate?: string;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  customForm?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  purchaseContract?: PlatformCore.RecordRef;
  vatRegNum?: string;
  employee?: PlatformCore.RecordRef;
  supervisorApproval?: boolean;
  tranDate?: string;
  tranId?: string;
  entityTaxRegNum?: PlatformCore.RecordRef;
  taxPointDate?: string;
  createdFrom?: PlatformCore.RecordRef;
  terms?: PlatformCore.RecordRef;
  dueDate?: string;
  otherRefNum?: string;
  availableVendorCredit?: number;
  memo?: string;
  approvalStatus?: PlatformCore.RecordRef;
  exchangeRate?: number;
  nextApprover?: PlatformCore.RecordRef;
  source?: string;
  currencyName?: string;
  toBePrinted?: boolean;
  toBeEmailed?: boolean;
  email?: string;
  toBeFaxed?: boolean;
  fax?: string;
  message?: string;
  billingAddress?: PlatformCommon.Address;
  billAddressList?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  shipTo?: PlatformCore.RecordRef;
  subTotal?: number;
  taxTotal?: number;
  tax2Total?: number;
  shippingAddress?: PlatformCommon.Address;
  shipIsResidential?: boolean;
  shipAddressList?: PlatformCore.RecordRef;
  fob?: string;
  shipDate?: string;
  shipMethod?: PlatformCore.RecordRef;
  incoterm?: PlatformCore.RecordRef;
  trackingNumbers?: string;
  linkedTrackingNumbers?: string;
  total?: number;
  clazz?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  intercoTransaction?: PlatformCore.RecordRef;
  intercoStatus?: PlatformCommonTypes.IntercoStatus;
  status?: string;
  orderStatus?: TransactionsPurchasesTypes.PurchaseOrderOrderStatus;
  itemList?: PurchaseOrderItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  expenseList?: PurchaseOrderExpenseList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class PurchaseOrder extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  customForm?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  purchaseContract?: PlatformCore.RecordRef;
  vatRegNum?: string;
  employee?: PlatformCore.RecordRef;
  supervisorApproval?: boolean;
  tranDate?: string;
  tranId?: string;
  entityTaxRegNum?: PlatformCore.RecordRef;
  taxPointDate?: string;
  createdFrom?: PlatformCore.RecordRef;
  terms?: PlatformCore.RecordRef;
  dueDate?: string;
  otherRefNum?: string;
  availableVendorCredit?: number;
  memo?: string;
  approvalStatus?: PlatformCore.RecordRef;
  exchangeRate?: number;
  nextApprover?: PlatformCore.RecordRef;
  source?: string;
  currencyName?: string;
  toBePrinted?: boolean;
  toBeEmailed?: boolean;
  email?: string;
  toBeFaxed?: boolean;
  fax?: string;
  message?: string;
  billingAddress?: PlatformCommon.Address;
  billAddressList?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  shipTo?: PlatformCore.RecordRef;
  subTotal?: number;
  taxTotal?: number;
  tax2Total?: number;
  shippingAddress?: PlatformCommon.Address;
  shipIsResidential?: boolean;
  shipAddressList?: PlatformCore.RecordRef;
  fob?: string;
  shipDate?: string;
  shipMethod?: PlatformCore.RecordRef;
  incoterm?: PlatformCore.RecordRef;
  trackingNumbers?: string;
  linkedTrackingNumbers?: string;
  total?: number;
  clazz?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  intercoTransaction?: PlatformCore.RecordRef;
  intercoStatus?: PlatformCommonTypes.IntercoStatus;
  status?: string;
  orderStatus?: TransactionsPurchasesTypes.PurchaseOrderOrderStatus;
  itemList?: PurchaseOrderItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  expenseList?: PurchaseOrderExpenseList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: PurchaseOrderProps) {
    super(props);
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.nexus = props.nexus;
    this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
    this.taxRegOverride = props.taxRegOverride;
    this.taxDetailsOverride = props.taxDetailsOverride;
    this.customForm = props.customForm;
    this.entity = props.entity;
    this.purchaseContract = props.purchaseContract;
    this.vatRegNum = props.vatRegNum;
    this.employee = props.employee;
    this.supervisorApproval = props.supervisorApproval;
    this.tranDate = props.tranDate;
    this.tranId = props.tranId;
    this.entityTaxRegNum = props.entityTaxRegNum;
    this.taxPointDate = props.taxPointDate;
    this.createdFrom = props.createdFrom;
    this.terms = props.terms;
    this.dueDate = props.dueDate;
    this.otherRefNum = props.otherRefNum;
    this.availableVendorCredit = props.availableVendorCredit;
    this.memo = props.memo;
    this.approvalStatus = props.approvalStatus;
    this.exchangeRate = props.exchangeRate;
    this.nextApprover = props.nextApprover;
    this.source = props.source;
    this.currencyName = props.currencyName;
    this.toBePrinted = props.toBePrinted;
    this.toBeEmailed = props.toBeEmailed;
    this.email = props.email;
    this.toBeFaxed = props.toBeFaxed;
    this.fax = props.fax;
    this.message = props.message;
    this.billingAddress = props.billingAddress;
    this.billAddressList = props.billAddressList;
    this.currency = props.currency;
    this.shipTo = props.shipTo;
    this.subTotal = props.subTotal;
    this.taxTotal = props.taxTotal;
    this.tax2Total = props.tax2Total;
    this.shippingAddress = props.shippingAddress;
    this.shipIsResidential = props.shipIsResidential;
    this.shipAddressList = props.shipAddressList;
    this.fob = props.fob;
    this.shipDate = props.shipDate;
    this.shipMethod = props.shipMethod;
    this.incoterm = props.incoterm;
    this.trackingNumbers = props.trackingNumbers;
    this.linkedTrackingNumbers = props.linkedTrackingNumbers;
    this.total = props.total;
    this.clazz = props.clazz;
    this.department = props.department;
    this.location = props.location;
    this.subsidiary = props.subsidiary;
    this.intercoTransaction = props.intercoTransaction;
    this.intercoStatus = props.intercoStatus;
    this.status = props.status;
    this.orderStatus = props.orderStatus;
    this.itemList = props.itemList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.expenseList = props.expenseList;
    this.taxDetailsList = props.taxDetailsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type PurchaseRequisitionItemProps = {
  line?: number;
  item?: PlatformCore.RecordRef;
  vendorName?: string;
  poVendor?: PlatformCore.RecordRef;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  serialNumbers?: string;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  description?: string;
  estimatedRate?: number;
  estimatedAmount?: number;
  rate?: string;
  amount?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  grossAmt?: number;
  options?: PlatformCore.CustomFieldList;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  linkedOrderList?: PlatformCore.RecordRefList;
  linkedOrderStatus?: string;
  expectedReceiptDate?: string;
  isClosed?: boolean;
  expandItemGroup?: boolean;
};

export class PurchaseRequisitionItem {
  line?: number;
  item?: PlatformCore.RecordRef;
  vendorName?: string;
  poVendor?: PlatformCore.RecordRef;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  serialNumbers?: string;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  description?: string;
  estimatedRate?: number;
  estimatedAmount?: number;
  rate?: string;
  amount?: number;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  grossAmt?: number;
  options?: PlatformCore.CustomFieldList;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  linkedOrderList?: PlatformCore.RecordRefList;
  linkedOrderStatus?: string;
  expectedReceiptDate?: string;
  isClosed?: boolean;
  expandItemGroup?: boolean;
  constructor(props: PurchaseRequisitionItemProps) {
    this.line = props.line;
    this.item = props.item;
    this.vendorName = props.vendorName;
    this.poVendor = props.poVendor;
    this.quantity = props.quantity;
    this.units = props.units;
    this.serialNumbers = props.serialNumbers;
    this.inventoryDetail = props.inventoryDetail;
    this.description = props.description;
    this.estimatedRate = props.estimatedRate;
    this.estimatedAmount = props.estimatedAmount;
    this.rate = props.rate;
    this.amount = props.amount;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.grossAmt = props.grossAmt;
    this.options = props.options;
    this.department = props.department;
    this.clazz = props.clazz;
    this.customer = props.customer;
    this.isBillable = props.isBillable;
    this.linkedOrderList = props.linkedOrderList;
    this.linkedOrderStatus = props.linkedOrderStatus;
    this.expectedReceiptDate = props.expectedReceiptDate;
    this.isClosed = props.isClosed;
    this.expandItemGroup = props.expandItemGroup;
  }
}

export type PurchaseOrderExpenseProps = {
  line?: number;
  category?: PlatformCore.RecordRef;
  linkedOrderList?: PlatformCore.RecordRefList;
  account?: PlatformCore.RecordRef;
  amount?: number;
  taxAmount?: number;
  memo?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isClosed?: boolean;
  isBillable?: boolean;
  createdFrom?: PlatformCore.RecordRef;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  tax1Amt?: number;
  grossAmt?: number;
  taxDetailsReference?: string;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class PurchaseOrderExpense {
  line?: number;
  category?: PlatformCore.RecordRef;
  linkedOrderList?: PlatformCore.RecordRefList;
  account?: PlatformCore.RecordRef;
  amount?: number;
  taxAmount?: number;
  memo?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isClosed?: boolean;
  isBillable?: boolean;
  createdFrom?: PlatformCore.RecordRef;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  tax1Amt?: number;
  grossAmt?: number;
  taxDetailsReference?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: PurchaseOrderExpenseProps) {
    this.line = props.line;
    this.category = props.category;
    this.linkedOrderList = props.linkedOrderList;
    this.account = props.account;
    this.amount = props.amount;
    this.taxAmount = props.taxAmount;
    this.memo = props.memo;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customer = props.customer;
    this.isClosed = props.isClosed;
    this.isBillable = props.isBillable;
    this.createdFrom = props.createdFrom;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.tax1Amt = props.tax1Amt;
    this.grossAmt = props.grossAmt;
    this.taxDetailsReference = props.taxDetailsReference;
    this.customFieldList = props.customFieldList;
  }
}

export type VendorCreditProps = {
  createdDate?: string;
  lastModifiedDate?: string;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  customForm?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  unApplied?: number;
  billAddressList?: PlatformCore.RecordRef;
  autoApply?: boolean;
  applied?: number;
  transactionNumber?: string;
  tranId?: string;
  createdFrom?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  total?: number;
  userTotal?: number;
  currency?: PlatformCore.RecordRef;
  currencyName?: string;
  billingAddress?: PlatformCommon.Address;
  tranDate?: string;
  exchangeRate?: number;
  entityTaxRegNum?: PlatformCore.RecordRef;
  taxPointDate?: string;
  userTaxTotal?: number;
  postingPeriod?: PlatformCore.RecordRef;
  memo?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  expenseList?: VendorCreditExpenseList;
  itemList?: VendorCreditItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  applyList?: VendorCreditApplyList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class VendorCredit extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  customForm?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  unApplied?: number;
  billAddressList?: PlatformCore.RecordRef;
  autoApply?: boolean;
  applied?: number;
  transactionNumber?: string;
  tranId?: string;
  createdFrom?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  total?: number;
  userTotal?: number;
  currency?: PlatformCore.RecordRef;
  currencyName?: string;
  billingAddress?: PlatformCommon.Address;
  tranDate?: string;
  exchangeRate?: number;
  entityTaxRegNum?: PlatformCore.RecordRef;
  taxPointDate?: string;
  userTaxTotal?: number;
  postingPeriod?: PlatformCore.RecordRef;
  memo?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  expenseList?: VendorCreditExpenseList;
  itemList?: VendorCreditItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  applyList?: VendorCreditApplyList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: VendorCreditProps) {
    super(props);
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.nexus = props.nexus;
    this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
    this.taxRegOverride = props.taxRegOverride;
    this.taxDetailsOverride = props.taxDetailsOverride;
    this.customForm = props.customForm;
    this.account = props.account;
    this.unApplied = props.unApplied;
    this.billAddressList = props.billAddressList;
    this.autoApply = props.autoApply;
    this.applied = props.applied;
    this.transactionNumber = props.transactionNumber;
    this.tranId = props.tranId;
    this.createdFrom = props.createdFrom;
    this.entity = props.entity;
    this.total = props.total;
    this.userTotal = props.userTotal;
    this.currency = props.currency;
    this.currencyName = props.currencyName;
    this.billingAddress = props.billingAddress;
    this.tranDate = props.tranDate;
    this.exchangeRate = props.exchangeRate;
    this.entityTaxRegNum = props.entityTaxRegNum;
    this.taxPointDate = props.taxPointDate;
    this.userTaxTotal = props.userTaxTotal;
    this.postingPeriod = props.postingPeriod;
    this.memo = props.memo;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiary = props.subsidiary;
    this.expenseList = props.expenseList;
    this.itemList = props.itemList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.applyList = props.applyList;
    this.taxDetailsList = props.taxDetailsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type VendorCreditItemListProps = {
  item?: VendorCreditItem[];
  replaceAll?: boolean;
};

export class VendorCreditItemList {
  item?: VendorCreditItem[];
  replaceAll?: boolean;
  constructor(props: VendorCreditItemListProps) {
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorPaymentApplyListProps = {
  apply?: VendorPaymentApply[];
  replaceAll?: boolean;
};

export class VendorPaymentApplyList {
  apply?: VendorPaymentApply[];
  replaceAll?: boolean;
  constructor(props: VendorPaymentApplyListProps) {
    this.apply = props.apply;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorReturnAuthorizationItemListProps = {
  item?: VendorReturnAuthorizationItem[];
  replaceAll?: boolean;
};

export class VendorReturnAuthorizationItemList {
  item?: VendorReturnAuthorizationItem[];
  replaceAll?: boolean;
  constructor(props: VendorReturnAuthorizationItemListProps) {
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorReturnAuthorizationProps = {
  createdDate?: string;
  lastModifiedDate?: string;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  customForm?: PlatformCore.RecordRef;
  tranId?: string;
  createdFrom?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  orderStatus?: TransactionsPurchasesTypes.VendorReturnAuthorizationOrderStatus;
  tranDate?: string;
  userTotal?: number;
  currency?: PlatformCore.RecordRef;
  currencyName?: string;
  billingAddress?: PlatformCommon.Address;
  billAddressList?: PlatformCore.RecordRef;
  memo?: string;
  exchangeRate?: number;
  entityTaxRegNum?: PlatformCore.RecordRef;
  taxPointDate?: string;
  userTaxTotal?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  intercoTransaction?: PlatformCore.RecordRef;
  intercoStatus?: PlatformCommonTypes.IntercoStatus;
  expenseList?: VendorReturnAuthorizationExpenseList;
  itemList?: VendorReturnAuthorizationItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class VendorReturnAuthorization extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  customForm?: PlatformCore.RecordRef;
  tranId?: string;
  createdFrom?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  orderStatus?: TransactionsPurchasesTypes.VendorReturnAuthorizationOrderStatus;
  tranDate?: string;
  userTotal?: number;
  currency?: PlatformCore.RecordRef;
  currencyName?: string;
  billingAddress?: PlatformCommon.Address;
  billAddressList?: PlatformCore.RecordRef;
  memo?: string;
  exchangeRate?: number;
  entityTaxRegNum?: PlatformCore.RecordRef;
  taxPointDate?: string;
  userTaxTotal?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  intercoTransaction?: PlatformCore.RecordRef;
  intercoStatus?: PlatformCommonTypes.IntercoStatus;
  expenseList?: VendorReturnAuthorizationExpenseList;
  itemList?: VendorReturnAuthorizationItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: VendorReturnAuthorizationProps) {
    super(props);
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.nexus = props.nexus;
    this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
    this.taxRegOverride = props.taxRegOverride;
    this.taxDetailsOverride = props.taxDetailsOverride;
    this.customForm = props.customForm;
    this.tranId = props.tranId;
    this.createdFrom = props.createdFrom;
    this.entity = props.entity;
    this.orderStatus = props.orderStatus;
    this.tranDate = props.tranDate;
    this.userTotal = props.userTotal;
    this.currency = props.currency;
    this.currencyName = props.currencyName;
    this.billingAddress = props.billingAddress;
    this.billAddressList = props.billAddressList;
    this.memo = props.memo;
    this.exchangeRate = props.exchangeRate;
    this.entityTaxRegNum = props.entityTaxRegNum;
    this.taxPointDate = props.taxPointDate;
    this.userTaxTotal = props.userTaxTotal;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiary = props.subsidiary;
    this.intercoTransaction = props.intercoTransaction;
    this.intercoStatus = props.intercoStatus;
    this.expenseList = props.expenseList;
    this.itemList = props.itemList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.taxDetailsList = props.taxDetailsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type PurchaseRequisitionExpenseListProps = {
  purchaseRequisitionExpense?: PurchaseRequisitionExpense[];
  replaceAll?: boolean;
};

export class PurchaseRequisitionExpenseList {
  purchaseRequisitionExpense?: PurchaseRequisitionExpense[];
  replaceAll?: boolean;
  constructor(props: PurchaseRequisitionExpenseListProps) {
    this.purchaseRequisitionExpense = props.purchaseRequisitionExpense;
    this.replaceAll = props.replaceAll;
  }
}

export type PurchLandedCostListProps = {
  landedCost?: PlatformCommon.LandedCostSummary[];
  replaceAll?: boolean;
};

export class PurchLandedCostList {
  landedCost?: PlatformCommon.LandedCostSummary[];
  replaceAll?: boolean;
  constructor(props: PurchLandedCostListProps) {
    this.landedCost = props.landedCost;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorCreditItemProps = {
  item?: PlatformCore.RecordRef;
  vendorName?: string;
  line?: number;
  orderLine?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  serialNumbersList?: PlatformCore.RecordRefList;
  description?: string;
  rate?: string;
  amount?: number;
  binNumbers?: string;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  grossAmt?: number;
  tax1Amt?: number;
  options?: PlatformCore.CustomFieldList;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  amortizationSched?: PlatformCore.RecordRef;
  amortizStartDate?: string;
  amortizationEndDate?: string;
  amortizationResidual?: string;
  taxAmount?: number;
  taxDetailsReference?: string;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class VendorCreditItem {
  item?: PlatformCore.RecordRef;
  vendorName?: string;
  line?: number;
  orderLine?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  serialNumbersList?: PlatformCore.RecordRefList;
  description?: string;
  rate?: string;
  amount?: number;
  binNumbers?: string;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  taxRate2?: number;
  grossAmt?: number;
  tax1Amt?: number;
  options?: PlatformCore.CustomFieldList;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  amortizationSched?: PlatformCore.RecordRef;
  amortizStartDate?: string;
  amortizationEndDate?: string;
  amortizationResidual?: string;
  taxAmount?: number;
  taxDetailsReference?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: VendorCreditItemProps) {
    this.item = props.item;
    this.vendorName = props.vendorName;
    this.line = props.line;
    this.orderLine = props.orderLine;
    this.quantity = props.quantity;
    this.units = props.units;
    this.inventoryDetail = props.inventoryDetail;
    this.serialNumbersList = props.serialNumbersList;
    this.description = props.description;
    this.rate = props.rate;
    this.amount = props.amount;
    this.binNumbers = props.binNumbers;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.grossAmt = props.grossAmt;
    this.tax1Amt = props.tax1Amt;
    this.options = props.options;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customer = props.customer;
    this.isBillable = props.isBillable;
    this.amortizationSched = props.amortizationSched;
    this.amortizStartDate = props.amortizStartDate;
    this.amortizationEndDate = props.amortizationEndDate;
    this.amortizationResidual = props.amortizationResidual;
    this.taxAmount = props.taxAmount;
    this.taxDetailsReference = props.taxDetailsReference;
    this.customFieldList = props.customFieldList;
  }
}
