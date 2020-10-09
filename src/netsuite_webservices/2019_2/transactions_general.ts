import * as SoapTypes from "../../util/soap-types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";

const mappingsName = "com_netsuite_webservices_transactions_general_2019_2";

export class InterCompanyJournalEntryAccountingBookDetailList extends SoapTypes.Base {
  interCompanyJournalEntryAccountingBookDetail?: InterCompanyJournalEntryAccountingBookDetail[];
  replaceAll?: boolean;
  constructor(props: InterCompanyJournalEntryAccountingBookDetailList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.interCompanyJournalEntryAccountingBookDetail = props.interCompanyJournalEntryAccountingBookDetail;
    this.replaceAll = props.replaceAll;
  }
}

export class StatisticalJournalEntryLineList extends SoapTypes.Base {
  statisticalJournalEntryLine?: StatisticalJournalEntryLine[];
  replaceAll?: boolean;
  constructor(props: StatisticalJournalEntryLineList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.statisticalJournalEntryLine = props.statisticalJournalEntryLine;
    this.replaceAll = props.replaceAll;
  }
}

export class JournalEntryLine extends SoapTypes.Base {
  account?: PlatformCore.RecordRef;
  line?: number;
  debit?: number;
  credit?: number;
  taxAccount?: PlatformCore.RecordRef;
  lineTaxCode?: PlatformCore.RecordRef;
  lineTaxRate?: number;
  debitTax?: number;
  creditTax?: number;
  taxBasis?: number;
  totalAmount?: number;
  taxCode?: PlatformCore.RecordRef;
  memo?: string;
  taxRate1?: number;
  entity?: PlatformCore.RecordRef;
  grossAmt?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  eliminate?: boolean;
  schedule?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  residual?: string;
  scheduleNum?: PlatformCore.RecordRef;
  tax1Amt?: number;
  tax1Acct?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: JournalEntryLine) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.account = props.account;
    this.line = props.line;
    this.debit = props.debit;
    this.credit = props.credit;
    this.taxAccount = props.taxAccount;
    this.lineTaxCode = props.lineTaxCode;
    this.lineTaxRate = props.lineTaxRate;
    this.debitTax = props.debitTax;
    this.creditTax = props.creditTax;
    this.taxBasis = props.taxBasis;
    this.totalAmount = props.totalAmount;
    this.taxCode = props.taxCode;
    this.memo = props.memo;
    this.taxRate1 = props.taxRate1;
    this.entity = props.entity;
    this.grossAmt = props.grossAmt;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.eliminate = props.eliminate;
    this.schedule = props.schedule;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.residual = props.residual;
    this.scheduleNum = props.scheduleNum;
    this.tax1Amt = props.tax1Amt;
    this.tax1Acct = props.tax1Acct;
    this.customFieldList = props.customFieldList;
  }
}

export class AdvInterCompanyJournalEntryAccountingBookDetail extends SoapTypes.Base {
  accountingBook?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  exchangeRate?: number;
  constructor(props: AdvInterCompanyJournalEntryAccountingBookDetail) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.accountingBook = props.accountingBook;
    this.currency = props.currency;
    this.subsidiary = props.subsidiary;
    this.exchangeRate = props.exchangeRate;
  }
}

export class AdvInterCompanyJournalEntryAccountingBookDetailList extends SoapTypes.Base {
  interCompanyJournalEntryAccountingBookDetail?: AdvInterCompanyJournalEntryAccountingBookDetail[];
  replaceAll?: boolean;
  constructor(props: AdvInterCompanyJournalEntryAccountingBookDetailList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.interCompanyJournalEntryAccountingBookDetail = props.interCompanyJournalEntryAccountingBookDetail;
    this.replaceAll = props.replaceAll;
  }
}

export class JournalEntry extends PlatformCore.Record {
  postingPeriod?: PlatformCore.RecordRef;
  tranDate?: SoapTypes.Dateish;
  currency?: PlatformCore.RecordRef;
  exchangeRate?: number;
  tranId?: string;
  reversalDate?: SoapTypes.Dateish;
  reversalDefer?: boolean;
  parentExpenseAlloc?: PlatformCore.RecordRef;
  isBookSpecific?: boolean;
  accountingBook?: PlatformCore.RecordRef;
  reversalEntry?: string;
  createdFrom?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxPointDate?: SoapTypes.Dateish;
  memo?: string;
  toSubsidiary?: PlatformCore.RecordRef;
  approved?: boolean;
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  lineList?: JournalEntryLineList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: JournalEntry) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.postingPeriod = props.postingPeriod;
    this.tranDate = props.tranDate;
    this.currency = props.currency;
    this.exchangeRate = props.exchangeRate;
    this.tranId = props.tranId;
    this.reversalDate = props.reversalDate;
    this.reversalDefer = props.reversalDefer;
    this.parentExpenseAlloc = props.parentExpenseAlloc;
    this.isBookSpecific = props.isBookSpecific;
    this.accountingBook = props.accountingBook;
    this.reversalEntry = props.reversalEntry;
    this.createdFrom = props.createdFrom;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiary = props.subsidiary;
    this.nexus = props.nexus;
    this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
    this.taxPointDate = props.taxPointDate;
    this.memo = props.memo;
    this.toSubsidiary = props.toSubsidiary;
    this.approved = props.approved;
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.lineList = props.lineList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class AdvInterCompanyJournalEntryLineList extends SoapTypes.Base {
  line?: AdvInterCompanyJournalEntryLine[];
  replaceAll?: boolean;
  constructor(props: AdvInterCompanyJournalEntryLineList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.line = props.line;
    this.replaceAll = props.replaceAll;
  }
}

export class PeriodEndJournal extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  transactionNumber?: string;
  accountingBook?: PlatformCore.RecordRef;
  customForm?: PlatformCore.RecordRef;
  tranId?: string;
  trandate?: SoapTypes.Dateish;
  postingPeriod?: PlatformCore.RecordRef;
  memo?: string;
  subsidiary?: PlatformCore.RecordRef;
  sourceSubsidiary?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  mainAccount?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  creditTotal?: number;
  debitTotal?: number;
  lineList?: PeriodEndJournalLineList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: PeriodEndJournal) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.transactionNumber = props.transactionNumber;
    this.accountingBook = props.accountingBook;
    this.customForm = props.customForm;
    this.tranId = props.tranId;
    this.trandate = props.trandate;
    this.postingPeriod = props.postingPeriod;
    this.memo = props.memo;
    this.subsidiary = props.subsidiary;
    this.sourceSubsidiary = props.sourceSubsidiary;
    this.clazz = props.clazz;
    this.department = props.department;
    this.location = props.location;
    this.mainAccount = props.mainAccount;
    this.currency = props.currency;
    this.creditTotal = props.creditTotal;
    this.debitTotal = props.debitTotal;
    this.lineList = props.lineList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class AdvInterCompanyJournalEntry extends PlatformCore.Record {
  postingPeriod?: PlatformCore.RecordRef;
  customForm?: PlatformCore.RecordRef;
  tranDate?: SoapTypes.Dateish;
  currency?: PlatformCore.RecordRef;
  tranId?: string;
  reversalDate?: SoapTypes.Dateish;
  reversalDefer?: boolean;
  parentExpenseAlloc?: PlatformCore.RecordRef;
  isBookSpecific?: boolean;
  accountingBook?: PlatformCore.RecordRef;
  reversalEntry?: string;
  createdFrom?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  memo?: string;
  approved?: boolean;
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  performAutoBalance?: boolean;
  lineList?: AdvInterCompanyJournalEntryLineList;
  accountingBookDetailList?: AdvInterCompanyJournalEntryAccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: AdvInterCompanyJournalEntry) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.postingPeriod = props.postingPeriod;
    this.customForm = props.customForm;
    this.tranDate = props.tranDate;
    this.currency = props.currency;
    this.tranId = props.tranId;
    this.reversalDate = props.reversalDate;
    this.reversalDefer = props.reversalDefer;
    this.parentExpenseAlloc = props.parentExpenseAlloc;
    this.isBookSpecific = props.isBookSpecific;
    this.accountingBook = props.accountingBook;
    this.reversalEntry = props.reversalEntry;
    this.createdFrom = props.createdFrom;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiary = props.subsidiary;
    this.memo = props.memo;
    this.approved = props.approved;
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.performAutoBalance = props.performAutoBalance;
    this.lineList = props.lineList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class InterCompanyJournalEntryLineList extends SoapTypes.Base {
  line?: InterCompanyJournalEntryLine[];
  replaceAll?: boolean;
  constructor(props: InterCompanyJournalEntryLineList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.line = props.line;
    this.replaceAll = props.replaceAll;
  }
}

export class StatisticalJournalEntryLine extends SoapTypes.Base {
  account?: PlatformCore.RecordRef;
  line?: number;
  location?: PlatformCore.RecordRef;
  scheduleNum?: PlatformCore.RecordRef;
  debit?: number;
  memo?: string;
  entity?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  lineUnit?: PlatformCore.RecordRef;
  previewDebit?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: StatisticalJournalEntryLine) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.account = props.account;
    this.line = props.line;
    this.location = props.location;
    this.scheduleNum = props.scheduleNum;
    this.debit = props.debit;
    this.memo = props.memo;
    this.entity = props.entity;
    this.department = props.department;
    this.clazz = props.clazz;
    this.lineUnit = props.lineUnit;
    this.previewDebit = props.previewDebit;
    this.customFieldList = props.customFieldList;
  }
}

export class InterCompanyJournalEntryAccountingBookDetail extends SoapTypes.Base {
  accountingBook?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  exchangeRate?: number;
  constructor(props: InterCompanyJournalEntryAccountingBookDetail) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.accountingBook = props.accountingBook;
    this.currency = props.currency;
    this.subsidiary = props.subsidiary;
    this.exchangeRate = props.exchangeRate;
  }
}

export class InterCompanyJournalEntry extends PlatformCore.Record {
  postingPeriod?: PlatformCore.RecordRef;
  customForm?: PlatformCore.RecordRef;
  tranDate?: SoapTypes.Dateish;
  currency?: PlatformCore.RecordRef;
  exchangeRate?: number;
  tranId?: string;
  reversalDate?: SoapTypes.Dateish;
  reversalDefer?: boolean;
  parentExpenseAlloc?: PlatformCore.RecordRef;
  isBookSpecific?: boolean;
  accountingBook?: PlatformCore.RecordRef;
  reversalEntry?: string;
  createdFrom?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  memo?: string;
  toSubsidiary?: PlatformCore.RecordRef;
  approved?: boolean;
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  lineList?: InterCompanyJournalEntryLineList;
  accountingBookDetailList?: InterCompanyJournalEntryAccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: InterCompanyJournalEntry) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.postingPeriod = props.postingPeriod;
    this.customForm = props.customForm;
    this.tranDate = props.tranDate;
    this.currency = props.currency;
    this.exchangeRate = props.exchangeRate;
    this.tranId = props.tranId;
    this.reversalDate = props.reversalDate;
    this.reversalDefer = props.reversalDefer;
    this.parentExpenseAlloc = props.parentExpenseAlloc;
    this.isBookSpecific = props.isBookSpecific;
    this.accountingBook = props.accountingBook;
    this.reversalEntry = props.reversalEntry;
    this.createdFrom = props.createdFrom;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiary = props.subsidiary;
    this.memo = props.memo;
    this.toSubsidiary = props.toSubsidiary;
    this.approved = props.approved;
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.lineList = props.lineList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class InterCompanyJournalEntryLine extends SoapTypes.Base {
  lineSubsidiary?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  line?: number;
  debit?: number;
  credit?: number;
  taxCode?: PlatformCore.RecordRef;
  memo?: string;
  taxRate1?: number;
  entity?: PlatformCore.RecordRef;
  grossAmt?: number;
  schedule?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  clazz?: PlatformCore.RecordRef;
  endDate?: SoapTypes.Dateish;
  location?: PlatformCore.RecordRef;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  eliminate?: boolean;
  residual?: string;
  amortizationSched?: PlatformCore.RecordRef;
  scheduleNum?: PlatformCore.RecordRef;
  amortizStartDate?: SoapTypes.Dateish;
  amortizationEndDate?: SoapTypes.Dateish;
  amortizationResidual?: string;
  tax1Amt?: number;
  tax1Acct?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: InterCompanyJournalEntryLine) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.lineSubsidiary = props.lineSubsidiary;
    this.account = props.account;
    this.line = props.line;
    this.debit = props.debit;
    this.credit = props.credit;
    this.taxCode = props.taxCode;
    this.memo = props.memo;
    this.taxRate1 = props.taxRate1;
    this.entity = props.entity;
    this.grossAmt = props.grossAmt;
    this.schedule = props.schedule;
    this.department = props.department;
    this.startDate = props.startDate;
    this.clazz = props.clazz;
    this.endDate = props.endDate;
    this.location = props.location;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.eliminate = props.eliminate;
    this.residual = props.residual;
    this.amortizationSched = props.amortizationSched;
    this.scheduleNum = props.scheduleNum;
    this.amortizStartDate = props.amortizStartDate;
    this.amortizationEndDate = props.amortizationEndDate;
    this.amortizationResidual = props.amortizationResidual;
    this.tax1Amt = props.tax1Amt;
    this.tax1Acct = props.tax1Acct;
    this.customFieldList = props.customFieldList;
  }
}

export class AdvInterCompanyJournalEntryLine extends SoapTypes.Base {
  lineSubsidiary?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  line?: number;
  debit?: number;
  credit?: number;
  taxCode?: PlatformCore.RecordRef;
  memo?: string;
  taxRate1?: number;
  entity?: PlatformCore.RecordRef;
  dueToFromSubsidiary?: PlatformCore.RecordRef;
  grossAmt?: number;
  schedule?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  startDate?: SoapTypes.Dateish;
  clazz?: PlatformCore.RecordRef;
  endDate?: SoapTypes.Dateish;
  location?: PlatformCore.RecordRef;
  revenueRecognitionRule?: PlatformCore.RecordRef;
  eliminate?: boolean;
  residual?: string;
  amortizationSched?: PlatformCore.RecordRef;
  scheduleNum?: PlatformCore.RecordRef;
  amortizStartDate?: SoapTypes.Dateish;
  amortizationEndDate?: SoapTypes.Dateish;
  amortizationResidual?: string;
  tax1Amt?: number;
  tax1Acct?: PlatformCore.RecordRef;
  lineFxRate?: number;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: AdvInterCompanyJournalEntryLine) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.lineSubsidiary = props.lineSubsidiary;
    this.account = props.account;
    this.line = props.line;
    this.debit = props.debit;
    this.credit = props.credit;
    this.taxCode = props.taxCode;
    this.memo = props.memo;
    this.taxRate1 = props.taxRate1;
    this.entity = props.entity;
    this.dueToFromSubsidiary = props.dueToFromSubsidiary;
    this.grossAmt = props.grossAmt;
    this.schedule = props.schedule;
    this.department = props.department;
    this.startDate = props.startDate;
    this.clazz = props.clazz;
    this.endDate = props.endDate;
    this.location = props.location;
    this.revenueRecognitionRule = props.revenueRecognitionRule;
    this.eliminate = props.eliminate;
    this.residual = props.residual;
    this.amortizationSched = props.amortizationSched;
    this.scheduleNum = props.scheduleNum;
    this.amortizStartDate = props.amortizStartDate;
    this.amortizationEndDate = props.amortizationEndDate;
    this.amortizationResidual = props.amortizationResidual;
    this.tax1Amt = props.tax1Amt;
    this.tax1Acct = props.tax1Acct;
    this.lineFxRate = props.lineFxRate;
    this.customFieldList = props.customFieldList;
  }
}

export class JournalEntryLineList extends SoapTypes.Base {
  line?: JournalEntryLine[];
  replaceAll?: boolean;
  constructor(props: JournalEntryLineList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.line = props.line;
    this.replaceAll = props.replaceAll;
  }
}

export class StatisticalJournalEntry extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  tranId?: string;
  parentExpenseAlloc?: PlatformCore.RecordRef;
  approved?: boolean;
  tranDate?: SoapTypes.Dateish;
  postingPeriod?: PlatformCore.RecordRef;
  reversalDate?: SoapTypes.Dateish;
  memo?: string;
  reversalDefer?: boolean;
  subsidiary?: PlatformCore.RecordRef;
  unitsType?: PlatformCore.RecordRef;
  lineList?: StatisticalJournalEntryLineList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: StatisticalJournalEntry) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.tranId = props.tranId;
    this.parentExpenseAlloc = props.parentExpenseAlloc;
    this.approved = props.approved;
    this.tranDate = props.tranDate;
    this.postingPeriod = props.postingPeriod;
    this.reversalDate = props.reversalDate;
    this.memo = props.memo;
    this.reversalDefer = props.reversalDefer;
    this.subsidiary = props.subsidiary;
    this.unitsType = props.unitsType;
    this.lineList = props.lineList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class PeriodEndJournalLine extends SoapTypes.Base {
  account?: PlatformCore.RecordRef;
  debit?: number;
  credit?: number;
  memo?: string;
  line?: number;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: PeriodEndJournalLine) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.account = props.account;
    this.debit = props.debit;
    this.credit = props.credit;
    this.memo = props.memo;
    this.line = props.line;
    this.customFieldList = props.customFieldList;
  }
}

export class PeriodEndJournalLineList extends SoapTypes.Base {
  periodEndJournalLine?: PeriodEndJournalLine[];
  replaceAll?: boolean;
  constructor(props: PeriodEndJournalLineList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.periodEndJournalLine = props.periodEndJournalLine;
    this.replaceAll = props.replaceAll;
  }
}
