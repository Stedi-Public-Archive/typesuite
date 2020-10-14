import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as PlatformCommonTypes from "./platform_common_types";
import { SoapMappingBase, propsWithMappingsName } from "../../soap-types";
const MAPPINGS_NAME = "com_netsuite_webservices_transactions_bank_2019_2";
export type CheckItemListProps = {
  item?: CheckItem[];
  replaceAll?: boolean;
};

export class CheckItemList extends SoapMappingBase {
  item?: CheckItem[];
  replaceAll?: boolean;
  constructor(props: CheckItemListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export type DepositCashBackProps = {
  amount?: number;
  account?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  memo?: string;
};

export class DepositCashBack extends SoapMappingBase {
  amount?: number;
  account?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  memo?: string;
  constructor(props: DepositCashBackProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.amount = props.amount;
    this.account = props.account;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.memo = props.memo;
  }
}

export type CheckExpenseListProps = {
  expense?: CheckExpense[];
  replaceAll?: boolean;
};

export class CheckExpenseList extends SoapMappingBase {
  expense?: CheckExpense[];
  replaceAll?: boolean;
  constructor(props: CheckExpenseListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.expense = props.expense;
    this.replaceAll = props.replaceAll;
  }
}

export type DepositPaymentListProps = {
  depositPayment?: DepositPayment[];
  replaceAll?: boolean;
};

export class DepositPaymentList extends SoapMappingBase {
  depositPayment?: DepositPayment[];
  replaceAll?: boolean;
  constructor(props: DepositPaymentListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.depositPayment = props.depositPayment;
    this.replaceAll = props.replaceAll;
  }
}

export type DepositPaymentProps = {
  deposit?: boolean;
  id?: number;
  docDate?: string;
  type?: string;
  docNumber?: string;
  memo?: string;
  paymentMethod?: PlatformCore.RecordRef;
  refNum?: string;
  entity?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  transactionAmount?: number;
  paymentAmount?: number;
  lineId?: number;
};

export class DepositPayment extends SoapMappingBase {
  deposit?: boolean;
  id?: number;
  docDate?: string;
  type?: string;
  docNumber?: string;
  memo?: string;
  paymentMethod?: PlatformCore.RecordRef;
  refNum?: string;
  entity?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  transactionAmount?: number;
  paymentAmount?: number;
  lineId?: number;
  constructor(props: DepositPaymentProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.deposit = props.deposit;
    this.id = props.id;
    this.docDate = props.docDate;
    this.type = props.type;
    this.docNumber = props.docNumber;
    this.memo = props.memo;
    this.paymentMethod = props.paymentMethod;
    this.refNum = props.refNum;
    this.entity = props.entity;
    this.currency = props.currency;
    this.transactionAmount = props.transactionAmount;
    this.paymentAmount = props.paymentAmount;
    this.lineId = props.lineId;
  }
}

export type CheckItemProps = {
  item?: PlatformCore.RecordRef;
  vendorName?: string;
  line?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  description?: string;
  binNumbers?: string;
  serialNumbers?: string;
  expirationDate?: string;
  rate?: string;
  taxCode?: PlatformCore.RecordRef;
  amount?: number;
  options?: PlatformCore.CustomFieldList;
  taxRate1?: number;
  taxRate2?: number;
  department?: PlatformCore.RecordRef;
  grossAmt?: number;
  clazz?: PlatformCore.RecordRef;
  tax1Amt?: number;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  landedCost?: PlatformCommon.LandedCost;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class CheckItem extends SoapMappingBase {
  item?: PlatformCore.RecordRef;
  vendorName?: string;
  line?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  description?: string;
  binNumbers?: string;
  serialNumbers?: string;
  expirationDate?: string;
  rate?: string;
  taxCode?: PlatformCore.RecordRef;
  amount?: number;
  options?: PlatformCore.CustomFieldList;
  taxRate1?: number;
  taxRate2?: number;
  department?: PlatformCore.RecordRef;
  grossAmt?: number;
  clazz?: PlatformCore.RecordRef;
  tax1Amt?: number;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  landedCost?: PlatformCommon.LandedCost;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: CheckItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.item = props.item;
    this.vendorName = props.vendorName;
    this.line = props.line;
    this.quantity = props.quantity;
    this.units = props.units;
    this.inventoryDetail = props.inventoryDetail;
    this.description = props.description;
    this.binNumbers = props.binNumbers;
    this.serialNumbers = props.serialNumbers;
    this.expirationDate = props.expirationDate;
    this.rate = props.rate;
    this.taxCode = props.taxCode;
    this.amount = props.amount;
    this.options = props.options;
    this.taxRate1 = props.taxRate1;
    this.taxRate2 = props.taxRate2;
    this.department = props.department;
    this.grossAmt = props.grossAmt;
    this.clazz = props.clazz;
    this.tax1Amt = props.tax1Amt;
    this.location = props.location;
    this.customer = props.customer;
    this.isBillable = props.isBillable;
    this.landedCost = props.landedCost;
    this.customFieldList = props.customFieldList;
  }
}

export type CheckLandedCostListProps = {
  landedCost?: PlatformCommon.LandedCostSummary[];
  replaceAll?: boolean;
};

export class CheckLandedCostList extends SoapMappingBase {
  landedCost?: PlatformCommon.LandedCostSummary[];
  replaceAll?: boolean;
  constructor(props: CheckLandedCostListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.landedCost = props.landedCost;
    this.replaceAll = props.replaceAll;
  }
}

export type DepositCashBackListProps = {
  depositCashBack?: DepositCashBack[];
  replaceAll?: boolean;
};

export class DepositCashBackList extends SoapMappingBase {
  depositCashBack?: DepositCashBack[];
  replaceAll?: boolean;
  constructor(props: DepositCashBackListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.depositCashBack = props.depositCashBack;
    this.replaceAll = props.replaceAll;
  }
}

export type CheckExpenseProps = {
  line?: number;
  category?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  amount?: number;
  memo?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  tax1Amt?: number;
  taxRate2?: number;
  grossAmt?: number;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class CheckExpense extends SoapMappingBase {
  line?: number;
  category?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  amount?: number;
  memo?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  taxCode?: PlatformCore.RecordRef;
  taxRate1?: number;
  tax1Amt?: number;
  taxRate2?: number;
  grossAmt?: number;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: CheckExpenseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.line = props.line;
    this.category = props.category;
    this.account = props.account;
    this.amount = props.amount;
    this.memo = props.memo;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customer = props.customer;
    this.isBillable = props.isBillable;
    this.taxCode = props.taxCode;
    this.taxRate1 = props.taxRate1;
    this.tax1Amt = props.tax1Amt;
    this.taxRate2 = props.taxRate2;
    this.grossAmt = props.grossAmt;
    this.customFieldList = props.customFieldList;
  }
}

export type DepositProps = {
  createdDate?: string;
  lastModifiedDate?: string;
  customForm?: PlatformCore.RecordRef;
  currencyName?: string;
  tranId?: string;
  account?: PlatformCore.RecordRef;
  total?: number;
  exchangeRate?: number;
  tranDate?: string;
  postingPeriod?: PlatformCore.RecordRef;
  memo?: string;
  toBePrinted?: boolean;
  subsidiary?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  paymentList?: DepositPaymentList;
  otherList?: DepositOtherList;
  cashBackList?: DepositCashBackList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class Deposit extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
  customForm?: PlatformCore.RecordRef;
  currencyName?: string;
  tranId?: string;
  account?: PlatformCore.RecordRef;
  total?: number;
  exchangeRate?: number;
  tranDate?: string;
  postingPeriod?: PlatformCore.RecordRef;
  memo?: string;
  toBePrinted?: boolean;
  subsidiary?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  paymentList?: DepositPaymentList;
  otherList?: DepositOtherList;
  cashBackList?: DepositCashBackList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: DepositProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.currencyName = props.currencyName;
    this.tranId = props.tranId;
    this.account = props.account;
    this.total = props.total;
    this.exchangeRate = props.exchangeRate;
    this.tranDate = props.tranDate;
    this.postingPeriod = props.postingPeriod;
    this.memo = props.memo;
    this.toBePrinted = props.toBePrinted;
    this.subsidiary = props.subsidiary;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.paymentList = props.paymentList;
    this.otherList = props.otherList;
    this.cashBackList = props.cashBackList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type DepositOtherListProps = {
  depositOther?: DepositOther[];
  replaceAll?: boolean;
};

export class DepositOtherList extends SoapMappingBase {
  depositOther?: DepositOther[];
  replaceAll?: boolean;
  constructor(props: DepositOtherListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.depositOther = props.depositOther;
    this.replaceAll = props.replaceAll;
  }
}

export type CheckProps = {
  createdDate?: string;
  lastModifiedDate?: string;
  status?: string;
  customForm?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  balance?: number;
  entity?: PlatformCore.RecordRef;
  address?: string;
  subsidiary?: PlatformCore.RecordRef;
  postingPeriod?: PlatformCore.RecordRef;
  tranDate?: string;
  currency?: PlatformCore.RecordRef;
  voidJournal?: PlatformCore.RecordRef;
  exchangeRate?: number;
  toBePrinted?: boolean;
  tranId?: string;
  memo?: string;
  department?: PlatformCore.RecordRef;
  taxTotal?: number;
  clazz?: PlatformCore.RecordRef;
  tax2Total?: number;
  location?: PlatformCore.RecordRef;
  userTotal?: number;
  landedCostMethod?: PlatformCommonTypes.LandedCostMethod;
  landedCostPerLine?: boolean;
  transactionNumber?: string;
  expenseList?: CheckExpenseList;
  itemList?: CheckItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  landedCostsList?: CheckLandedCostList;
  billPay?: boolean;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class Check extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
  status?: string;
  customForm?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  balance?: number;
  entity?: PlatformCore.RecordRef;
  address?: string;
  subsidiary?: PlatformCore.RecordRef;
  postingPeriod?: PlatformCore.RecordRef;
  tranDate?: string;
  currency?: PlatformCore.RecordRef;
  voidJournal?: PlatformCore.RecordRef;
  exchangeRate?: number;
  toBePrinted?: boolean;
  tranId?: string;
  memo?: string;
  department?: PlatformCore.RecordRef;
  taxTotal?: number;
  clazz?: PlatformCore.RecordRef;
  tax2Total?: number;
  location?: PlatformCore.RecordRef;
  userTotal?: number;
  landedCostMethod?: PlatformCommonTypes.LandedCostMethod;
  landedCostPerLine?: boolean;
  transactionNumber?: string;
  expenseList?: CheckExpenseList;
  itemList?: CheckItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  landedCostsList?: CheckLandedCostList;
  billPay?: boolean;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: CheckProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.status = props.status;
    this.customForm = props.customForm;
    this.account = props.account;
    this.balance = props.balance;
    this.entity = props.entity;
    this.address = props.address;
    this.subsidiary = props.subsidiary;
    this.postingPeriod = props.postingPeriod;
    this.tranDate = props.tranDate;
    this.currency = props.currency;
    this.voidJournal = props.voidJournal;
    this.exchangeRate = props.exchangeRate;
    this.toBePrinted = props.toBePrinted;
    this.tranId = props.tranId;
    this.memo = props.memo;
    this.department = props.department;
    this.taxTotal = props.taxTotal;
    this.clazz = props.clazz;
    this.tax2Total = props.tax2Total;
    this.location = props.location;
    this.userTotal = props.userTotal;
    this.landedCostMethod = props.landedCostMethod;
    this.landedCostPerLine = props.landedCostPerLine;
    this.transactionNumber = props.transactionNumber;
    this.expenseList = props.expenseList;
    this.itemList = props.itemList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.landedCostsList = props.landedCostsList;
    this.billPay = props.billPay;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type DepositOtherProps = {
  entity?: PlatformCore.RecordRef;
  amount?: number;
  account?: PlatformCore.RecordRef;
  paymentMethod?: PlatformCore.RecordRef;
  refNum?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  memo?: string;
};

export class DepositOther extends SoapMappingBase {
  entity?: PlatformCore.RecordRef;
  amount?: number;
  account?: PlatformCore.RecordRef;
  paymentMethod?: PlatformCore.RecordRef;
  refNum?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  memo?: string;
  constructor(props: DepositOtherProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.entity = props.entity;
    this.amount = props.amount;
    this.account = props.account;
    this.paymentMethod = props.paymentMethod;
    this.refNum = props.refNum;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.memo = props.memo;
  }
}
