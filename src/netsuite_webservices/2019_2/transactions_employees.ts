import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as TransactionsEmployeesTypes from "./transactions_employees_types";

export class PaycheckJournalCompanyContribution {
  id?: number;
  payrollItem?: PlatformCore.RecordRef;
  amount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: PaycheckJournalCompanyContribution) {
    this.id = props.id;
    this.payrollItem = props.payrollItem;
    this.amount = props.amount;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customFieldList = props.customFieldList;
  }
}

export class PaycheckSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.PaycheckSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  payrollItemJoin?: PlatformCommon.PayrollItemSearchRowBasic;
  constructor(props: PaycheckSearchRow) {
    super();
    this.basic = props.basic;
    this.employeeJoin = props.employeeJoin;
    this.payrollItemJoin = props.payrollItemJoin;
  }
}

export class TimeBill extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  employee?: PlatformCore.RecordRef;
  tranDate?: string;
  approvalStatus?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  caseTaskEvent?: PlatformCore.RecordRef;
  isBillable?: boolean;
  payrollItem?: PlatformCore.RecordRef;
  paidExternally?: boolean;
  workplace?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  hours?: PlatformCore.Duration;
  price?: PlatformCore.RecordRef;
  timeType?: TransactionsEmployeesTypes.TimeBillTimeType;
  rate?: number;
  overrideRate?: boolean;
  temporaryLocalJurisdiction?: PlatformCore.RecordRef;
  temporaryStateJurisdiction?: PlatformCore.RecordRef;
  memo?: string;
  rejectionNote?: string;
  subsidiary?: PlatformCore.RecordRef;
  supervisorApproval?: boolean;
  createdDate?: string;
  lastModifiedDate?: string;
  timeSheet?: PlatformCore.RecordRef;
  status?: string;
  timeModified?: boolean;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: TimeBill) {
    super(props);
    this.customForm = props.customForm;
    this.employee = props.employee;
    this.tranDate = props.tranDate;
    this.approvalStatus = props.approvalStatus;
    this.customer = props.customer;
    this.caseTaskEvent = props.caseTaskEvent;
    this.isBillable = props.isBillable;
    this.payrollItem = props.payrollItem;
    this.paidExternally = props.paidExternally;
    this.workplace = props.workplace;
    this.item = props.item;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.hours = props.hours;
    this.price = props.price;
    this.timeType = props.timeType;
    this.rate = props.rate;
    this.overrideRate = props.overrideRate;
    this.temporaryLocalJurisdiction = props.temporaryLocalJurisdiction;
    this.temporaryStateJurisdiction = props.temporaryStateJurisdiction;
    this.memo = props.memo;
    this.rejectionNote = props.rejectionNote;
    this.subsidiary = props.subsidiary;
    this.supervisorApproval = props.supervisorApproval;
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.timeSheet = props.timeSheet;
    this.status = props.status;
    this.timeModified = props.timeModified;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class PaycheckJournalDeductionList {
  paycheckJournalDeduction?: PaycheckJournalDeduction[];
  replaceAll?: boolean;
  constructor(props: PaycheckJournalDeductionList) {
    this.paycheckJournalDeduction = props.paycheckJournalDeduction;
    this.replaceAll = props.replaceAll;
  }
}

export class TimeEntrySearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.TimeEntrySearchBasic;
  callJoin?: PlatformCommon.PhoneCallSearchBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchBasic;
  classJoin?: PlatformCommon.ClassificationSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  eventJoin?: PlatformCommon.CalendarEventSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  jobJoin?: PlatformCommon.JobSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  projectTaskJoin?: PlatformCommon.ProjectTaskSearchBasic;
  projectTaskAssignmentJoin?: PlatformCommon.ProjectTaskAssignmentSearchBasic;
  resourceAllocationJoin?: PlatformCommon.ResourceAllocationSearchBasic;
  taskJoin?: PlatformCommon.TaskSearchBasic;
  timeSheetJoin?: PlatformCommon.TimeSheetSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  vendorJoin?: PlatformCommon.VendorSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: TimeEntrySearch) {
    super();
    this.basic = props.basic;
    this.callJoin = props.callJoin;
    this.caseJoin = props.caseJoin;
    this.classJoin = props.classJoin;
    this.customerJoin = props.customerJoin;
    this.departmentJoin = props.departmentJoin;
    this.employeeJoin = props.employeeJoin;
    this.eventJoin = props.eventJoin;
    this.itemJoin = props.itemJoin;
    this.jobJoin = props.jobJoin;
    this.locationJoin = props.locationJoin;
    this.projectTaskJoin = props.projectTaskJoin;
    this.projectTaskAssignmentJoin = props.projectTaskAssignmentJoin;
    this.resourceAllocationJoin = props.resourceAllocationJoin;
    this.taskJoin = props.taskJoin;
    this.timeSheetJoin = props.timeSheetJoin;
    this.userJoin = props.userJoin;
    this.vendorJoin = props.vendorJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class PaycheckJournalEarning {
  id?: number;
  payrollItem?: PlatformCore.RecordRef;
  hours?: number;
  amount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: PaycheckJournalEarning) {
    this.id = props.id;
    this.payrollItem = props.payrollItem;
    this.hours = props.hours;
    this.amount = props.amount;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customFieldList = props.customFieldList;
  }
}

export class ExpenseReport extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
  status?: string;
  customForm?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  expenseReportCurrency?: PlatformCore.RecordRef;
  expenseReportExchangeRate?: number;
  subsidiary?: PlatformCore.RecordRef;
  taxPointDate?: string;
  tranId?: string;
  acctCorpCardExp?: PlatformCore.RecordRef;
  postingPeriod?: PlatformCore.RecordRef;
  tranDate?: string;
  dueDate?: string;
  approvalStatus?: PlatformCore.RecordRef;
  total?: number;
  nextApprover?: PlatformCore.RecordRef;
  advance?: number;
  tax1Amt?: number;
  amount?: number;
  memo?: string;
  complete?: boolean;
  supervisorApproval?: boolean;
  accountingApproval?: boolean;
  useMultiCurrency?: boolean;
  tax2Amt?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  expenseList?: ExpenseReportExpenseList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: ExpenseReport) {
    super(props);
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.status = props.status;
    this.customForm = props.customForm;
    this.account = props.account;
    this.entity = props.entity;
    this.expenseReportCurrency = props.expenseReportCurrency;
    this.expenseReportExchangeRate = props.expenseReportExchangeRate;
    this.subsidiary = props.subsidiary;
    this.taxPointDate = props.taxPointDate;
    this.tranId = props.tranId;
    this.acctCorpCardExp = props.acctCorpCardExp;
    this.postingPeriod = props.postingPeriod;
    this.tranDate = props.tranDate;
    this.dueDate = props.dueDate;
    this.approvalStatus = props.approvalStatus;
    this.total = props.total;
    this.nextApprover = props.nextApprover;
    this.advance = props.advance;
    this.tax1Amt = props.tax1Amt;
    this.amount = props.amount;
    this.memo = props.memo;
    this.complete = props.complete;
    this.supervisorApproval = props.supervisorApproval;
    this.accountingApproval = props.accountingApproval;
    this.useMultiCurrency = props.useMultiCurrency;
    this.tax2Amt = props.tax2Amt;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.expenseList = props.expenseList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.taxDetailsList = props.taxDetailsList;
    this.nexus = props.nexus;
    this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class PaycheckPayContribList {
  paycheckPayContrib?: PaycheckPayContrib[];
  replaceAll?: boolean;
  constructor(props: PaycheckPayContribList) {
    this.paycheckPayContrib = props.paycheckPayContrib;
    this.replaceAll = props.replaceAll;
  }
}

export class PaycheckPayExpList {
  paycheckPayExp?: PaycheckPayExp[];
  replaceAll?: boolean;
  constructor(props: PaycheckPayExpList) {
    this.paycheckPayExp = props.paycheckPayExp;
    this.replaceAll = props.replaceAll;
  }
}

export class PaycheckPayDisburse {
  method?: string;
  bankName?: string;
  bankAccountDecrypt?: string;
  statusName?: string;
  amount?: number;
  constructor(props: PaycheckPayDisburse) {
    this.method = props.method;
    this.bankName = props.bankName;
    this.bankAccountDecrypt = props.bankAccountDecrypt;
    this.statusName = props.statusName;
    this.amount = props.amount;
  }
}

export class TimeSheet extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  employee?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  totalHours?: PlatformCore.Duration;
  approvalStatus?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  timeGridList?: TimeSheetTimeGridList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: TimeSheet) {
    super(props);
    this.customForm = props.customForm;
    this.employee = props.employee;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.totalHours = props.totalHours;
    this.approvalStatus = props.approvalStatus;
    this.subsidiary = props.subsidiary;
    this.timeGridList = props.timeGridList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class PaycheckJournalEmployeeTaxList {
  paycheckJournalEmployeeTax?: PaycheckJournalEmployeeTax[];
  replaceAll?: boolean;
  constructor(props: PaycheckJournalEmployeeTaxList) {
    this.paycheckJournalEmployeeTax = props.paycheckJournalEmployeeTax;
    this.replaceAll = props.replaceAll;
  }
}

export class PaycheckPayTime {
  apply?: boolean;
  line?: number;
  payItem?: number;
  payItemName?: string;
  ddate?: string;
  custJob?: string;
  serviceItem?: string;
  count?: number;
  rate?: number;
  amount?: number;
  constructor(props: PaycheckPayTime) {
    this.apply = props.apply;
    this.line = props.line;
    this.payItem = props.payItem;
    this.payItemName = props.payItemName;
    this.ddate = props.ddate;
    this.custJob = props.custJob;
    this.serviceItem = props.serviceItem;
    this.count = props.count;
    this.rate = props.rate;
    this.amount = props.amount;
  }
}

export class PaycheckPayDeductList {
  paycheckPayDeduct?: PaycheckPayDeduct[];
  replaceAll?: boolean;
  constructor(props: PaycheckPayDeductList) {
    this.paycheckPayDeduct = props.paycheckPayDeduct;
    this.replaceAll = props.replaceAll;
  }
}

export class PaycheckSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.PaycheckSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  payrollItemJoin?: PlatformCommon.PayrollItemSearchBasic;
  constructor(props: PaycheckSearch) {
    super();
    this.basic = props.basic;
    this.employeeJoin = props.employeeJoin;
    this.payrollItemJoin = props.payrollItemJoin;
  }
}

export class TimeBillSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.TimeBillSearchBasic;
  callJoin?: PlatformCommon.PhoneCallSearchBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchBasic;
  chargeJoin?: PlatformCommon.ChargeSearchBasic;
  classJoin?: PlatformCommon.ClassificationSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  eventJoin?: PlatformCommon.CalendarEventSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  jobJoin?: PlatformCommon.JobSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  projectTaskJoin?: PlatformCommon.ProjectTaskSearchBasic;
  projectTaskAssignmentJoin?: PlatformCommon.ProjectTaskAssignmentSearchBasic;
  resourceAllocationJoin?: PlatformCommon.ResourceAllocationSearchBasic;
  taskJoin?: PlatformCommon.TaskSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  vendorJoin?: PlatformCommon.VendorSearchBasic;
  timeSheetJoin?: PlatformCommon.TimeSheetSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: TimeBillSearch) {
    super();
    this.basic = props.basic;
    this.callJoin = props.callJoin;
    this.caseJoin = props.caseJoin;
    this.chargeJoin = props.chargeJoin;
    this.classJoin = props.classJoin;
    this.customerJoin = props.customerJoin;
    this.departmentJoin = props.departmentJoin;
    this.employeeJoin = props.employeeJoin;
    this.eventJoin = props.eventJoin;
    this.itemJoin = props.itemJoin;
    this.jobJoin = props.jobJoin;
    this.locationJoin = props.locationJoin;
    this.projectTaskJoin = props.projectTaskJoin;
    this.projectTaskAssignmentJoin = props.projectTaskAssignmentJoin;
    this.resourceAllocationJoin = props.resourceAllocationJoin;
    this.taskJoin = props.taskJoin;
    this.userJoin = props.userJoin;
    this.vendorJoin = props.vendorJoin;
    this.timeSheetJoin = props.timeSheetJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class PaycheckJournal extends PlatformCore.Record {
  subsidiary?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  exchangeRate?: number;
  createdDate?: string;
  lastModifiedDate?: string;
  customForm?: PlatformCore.RecordRef;
  tranId?: string;
  employee?: PlatformCore.RecordRef;
  tranDate?: string;
  postingPeriod?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  companyContributionList?: PaycheckJournalCompanyContributionList;
  deductionList?: PaycheckJournalDeductionList;
  employeeTaxList?: PaycheckJournalEmployeeTaxList;
  companyTaxList?: PaycheckJournalCompanyTaxList;
  earningList?: PaycheckJournalEarningList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: PaycheckJournal) {
    super(props);
    this.subsidiary = props.subsidiary;
    this.currency = props.currency;
    this.exchangeRate = props.exchangeRate;
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.tranId = props.tranId;
    this.employee = props.employee;
    this.tranDate = props.tranDate;
    this.postingPeriod = props.postingPeriod;
    this.account = props.account;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.companyContributionList = props.companyContributionList;
    this.deductionList = props.deductionList;
    this.employeeTaxList = props.employeeTaxList;
    this.companyTaxList = props.companyTaxList;
    this.earningList = props.earningList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class PaycheckJournalEmployeeTax {
  id?: number;
  payrollItem?: PlatformCore.RecordRef;
  amount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: PaycheckJournalEmployeeTax) {
    this.id = props.id;
    this.payrollItem = props.payrollItem;
    this.amount = props.amount;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customFieldList = props.customFieldList;
  }
}

export class PaycheckPayEarn {
  payItem?: PlatformCore.RecordRef;
  line?: number;
  count?: number;
  rate?: string;
  serviceItem?: PlatformCore.RecordRef;
  grossAmount?: number;
  manualEntry?: boolean;
  constructor(props: PaycheckPayEarn) {
    this.payItem = props.payItem;
    this.line = props.line;
    this.count = props.count;
    this.rate = props.rate;
    this.serviceItem = props.serviceItem;
    this.grossAmount = props.grossAmount;
    this.manualEntry = props.manualEntry;
  }
}

export class PaycheckPayPto {
  payItem?: number;
  payItemName?: string;
  hoursAccrued?: number;
  hoursUsed?: number;
  hoursBalance?: number;
  constructor(props: PaycheckPayPto) {
    this.payItem = props.payItem;
    this.payItemName = props.payItemName;
    this.hoursAccrued = props.hoursAccrued;
    this.hoursUsed = props.hoursUsed;
    this.hoursBalance = props.hoursBalance;
  }
}

export class PaycheckJournalDeduction {
  id?: number;
  payrollItem?: PlatformCore.RecordRef;
  amount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: PaycheckJournalDeduction) {
    this.id = props.id;
    this.payrollItem = props.payrollItem;
    this.amount = props.amount;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customFieldList = props.customFieldList;
  }
}

export class PaycheckJournalEarningList {
  paycheckJournalEarning?: PaycheckJournalEarning[];
  replaceAll?: boolean;
  constructor(props: PaycheckJournalEarningList) {
    this.paycheckJournalEarning = props.paycheckJournalEarning;
    this.replaceAll = props.replaceAll;
  }
}

export class PaycheckJournalCompanyTax {
  id?: number;
  payrollItem?: PlatformCore.RecordRef;
  amount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: PaycheckJournalCompanyTax) {
    this.id = props.id;
    this.payrollItem = props.payrollItem;
    this.amount = props.amount;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customFieldList = props.customFieldList;
  }
}

export class PaycheckJournalCompanyContributionList {
  paycheckJournalCompanyContribution?: PaycheckJournalCompanyContribution[];
  replaceAll?: boolean;
  constructor(props: PaycheckJournalCompanyContributionList) {
    this.paycheckJournalCompanyContribution =
      props.paycheckJournalCompanyContribution;
    this.replaceAll = props.replaceAll;
  }
}

export class TimeBillSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: TimeBillSearch;
  columns?: TimeBillSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: TimeBillSearchAdvanced) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class PaycheckPayDisburseList {
  paycheckPayDisburse?: PaycheckPayDisburse[];
  replaceAll?: boolean;
  constructor(props: PaycheckPayDisburseList) {
    this.paycheckPayDisburse = props.paycheckPayDisburse;
    this.replaceAll = props.replaceAll;
  }
}

export class TimeBillSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.TimeBillSearchRowBasic;
  callJoin?: PlatformCommon.PhoneCallSearchRowBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
  chargeJoin?: PlatformCommon.ChargeSearchRowBasic;
  classJoin?: PlatformCommon.ClassificationSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  eventJoin?: PlatformCommon.CalendarEventSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  jobJoin?: PlatformCommon.JobSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  projectTaskJoin?: PlatformCommon.ProjectTaskSearchRowBasic;
  projectTaskAssignmentJoin?: PlatformCommon.ProjectTaskAssignmentSearchRowBasic;
  resourceAllocationJoin?: PlatformCommon.ResourceAllocationSearchRowBasic;
  taskJoin?: PlatformCommon.TaskSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  vendorJoin?: PlatformCommon.VendorSearchRowBasic;
  timeSheetJoin?: PlatformCommon.TimeSheetSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: TimeBillSearchRow) {
    super();
    this.basic = props.basic;
    this.callJoin = props.callJoin;
    this.caseJoin = props.caseJoin;
    this.chargeJoin = props.chargeJoin;
    this.classJoin = props.classJoin;
    this.customerJoin = props.customerJoin;
    this.departmentJoin = props.departmentJoin;
    this.employeeJoin = props.employeeJoin;
    this.eventJoin = props.eventJoin;
    this.itemJoin = props.itemJoin;
    this.jobJoin = props.jobJoin;
    this.locationJoin = props.locationJoin;
    this.projectTaskJoin = props.projectTaskJoin;
    this.projectTaskAssignmentJoin = props.projectTaskAssignmentJoin;
    this.resourceAllocationJoin = props.resourceAllocationJoin;
    this.taskJoin = props.taskJoin;
    this.userJoin = props.userJoin;
    this.vendorJoin = props.vendorJoin;
    this.timeSheetJoin = props.timeSheetJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class ExpenseReportExpenseList {
  expense?: ExpenseReportExpense[];
  replaceAll?: boolean;
  constructor(props: ExpenseReportExpenseList) {
    this.expense = props.expense;
    this.replaceAll = props.replaceAll;
  }
}

export class PaycheckPaySummaryList {
  paycheckPaySummary?: PaycheckPaySummary[];
  replaceAll?: boolean;
  constructor(props: PaycheckPaySummaryList) {
    this.paycheckPaySummary = props.paycheckPaySummary;
    this.replaceAll = props.replaceAll;
  }
}

export class PaycheckPayDeduct {
  payItem?: PlatformCore.RecordRef;
  line?: number;
  wageBase?: number;
  amount?: number;
  manualEntry?: boolean;
  constructor(props: PaycheckPayDeduct) {
    this.payItem = props.payItem;
    this.line = props.line;
    this.wageBase = props.wageBase;
    this.amount = props.amount;
    this.manualEntry = props.manualEntry;
  }
}

export class TimeEntrySearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.TimeEntrySearchRowBasic;
  callJoin?: PlatformCommon.PhoneCallSearchRowBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
  classJoin?: PlatformCommon.ClassificationSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  departmentJoin?: PlatformCommon.DepartmentSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  eventJoin?: PlatformCommon.CalendarEventSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  jobJoin?: PlatformCommon.JobSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  projectTaskJoin?: PlatformCommon.ProjectTaskSearchRowBasic;
  projectTaskAssignmentJoin?: PlatformCommon.ProjectTaskAssignmentSearchRowBasic;
  resourceAllocationJoin?: PlatformCommon.ResourceAllocationSearchRowBasic;
  taskJoin?: PlatformCommon.TaskSearchRowBasic;
  timeSheetJoin?: PlatformCommon.TimeSheetSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  vendorJoin?: PlatformCommon.VendorSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: TimeEntrySearchRow) {
    super();
    this.basic = props.basic;
    this.callJoin = props.callJoin;
    this.caseJoin = props.caseJoin;
    this.classJoin = props.classJoin;
    this.customerJoin = props.customerJoin;
    this.departmentJoin = props.departmentJoin;
    this.employeeJoin = props.employeeJoin;
    this.eventJoin = props.eventJoin;
    this.itemJoin = props.itemJoin;
    this.jobJoin = props.jobJoin;
    this.locationJoin = props.locationJoin;
    this.projectTaskJoin = props.projectTaskJoin;
    this.projectTaskAssignmentJoin = props.projectTaskAssignmentJoin;
    this.resourceAllocationJoin = props.resourceAllocationJoin;
    this.taskJoin = props.taskJoin;
    this.timeSheetJoin = props.timeSheetJoin;
    this.userJoin = props.userJoin;
    this.vendorJoin = props.vendorJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class PaycheckPayPtoList {
  paycheckPayPto?: PaycheckPayPto[];
  replaceAll?: boolean;
  constructor(props: PaycheckPayPtoList) {
    this.paycheckPayPto = props.paycheckPayPto;
    this.replaceAll = props.replaceAll;
  }
}

export class TimeSheetTimeGrid {
  sunday?: TimeEntry;
  monday?: TimeEntry;
  tuesday?: TimeEntry;
  wednesday?: TimeEntry;
  thursday?: TimeEntry;
  friday?: TimeEntry;
  saturday?: TimeEntry;
  constructor(props: TimeSheetTimeGrid) {
    this.sunday = props.sunday;
    this.monday = props.monday;
    this.tuesday = props.tuesday;
    this.wednesday = props.wednesday;
    this.thursday = props.thursday;
    this.friday = props.friday;
    this.saturday = props.saturday;
  }
}

export class TimeSheetSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.TimeSheetSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  timeBillJoin?: PlatformCommon.TimeBillSearchRowBasic;
  timeEntryJoin?: PlatformCommon.TimeEntrySearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: TimeSheetSearchRow) {
    super();
    this.basic = props.basic;
    this.employeeJoin = props.employeeJoin;
    this.timeBillJoin = props.timeBillJoin;
    this.timeEntryJoin = props.timeEntryJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class PaycheckPayTax {
  line?: number;
  apply?: boolean;
  payTax?: string;
  payItem?: number;
  taxableWageBase?: number;
  taxedWageBase?: number;
  reportableWageBase?: number;
  isExempt?: boolean;
  isResidentTax?: boolean;
  amount?: number;
  constructor(props: PaycheckPayTax) {
    this.line = props.line;
    this.apply = props.apply;
    this.payTax = props.payTax;
    this.payItem = props.payItem;
    this.taxableWageBase = props.taxableWageBase;
    this.taxedWageBase = props.taxedWageBase;
    this.reportableWageBase = props.reportableWageBase;
    this.isExempt = props.isExempt;
    this.isResidentTax = props.isResidentTax;
    this.amount = props.amount;
  }
}

export class PaycheckJournalCompanyTaxList {
  paycheckJournalCompanyTax?: PaycheckJournalCompanyTax[];
  replaceAll?: boolean;
  constructor(props: PaycheckJournalCompanyTaxList) {
    this.paycheckJournalCompanyTax = props.paycheckJournalCompanyTax;
    this.replaceAll = props.replaceAll;
  }
}

export class TimeSheetSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.TimeSheetSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  timeBillJoin?: PlatformCommon.TimeBillSearchBasic;
  timeEntryJoin?: PlatformCommon.TimeEntrySearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: TimeSheetSearch) {
    super();
    this.basic = props.basic;
    this.employeeJoin = props.employeeJoin;
    this.timeBillJoin = props.timeBillJoin;
    this.timeEntryJoin = props.timeEntryJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class ExpenseReportExpense {
  line?: number;
  expenseDate?: string;
  category?: PlatformCore.RecordRef;
  quantity?: number;
  rate?: number;
  foreignAmount?: number;
  currency?: PlatformCore.RecordRef;
  exchangeRate?: number;
  amount?: number;
  taxCode?: PlatformCore.RecordRef;
  memo?: string;
  taxRate1?: number;
  tax1Amt?: number;
  department?: PlatformCore.RecordRef;
  grossAmt?: number;
  taxRate2?: number;
  clazz?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  isBillable?: boolean;
  expMediaItem?: PlatformCore.RecordRef;
  isNonReimbursable?: boolean;
  corporateCreditCard?: boolean;
  receipt?: boolean;
  refNumber?: number;
  taxDetailsReference?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: ExpenseReportExpense) {
    this.line = props.line;
    this.expenseDate = props.expenseDate;
    this.category = props.category;
    this.quantity = props.quantity;
    this.rate = props.rate;
    this.foreignAmount = props.foreignAmount;
    this.currency = props.currency;
    this.exchangeRate = props.exchangeRate;
    this.amount = props.amount;
    this.taxCode = props.taxCode;
    this.memo = props.memo;
    this.taxRate1 = props.taxRate1;
    this.tax1Amt = props.tax1Amt;
    this.department = props.department;
    this.grossAmt = props.grossAmt;
    this.taxRate2 = props.taxRate2;
    this.clazz = props.clazz;
    this.customer = props.customer;
    this.location = props.location;
    this.isBillable = props.isBillable;
    this.expMediaItem = props.expMediaItem;
    this.isNonReimbursable = props.isNonReimbursable;
    this.corporateCreditCard = props.corporateCreditCard;
    this.receipt = props.receipt;
    this.refNumber = props.refNumber;
    this.taxDetailsReference = props.taxDetailsReference;
    this.customFieldList = props.customFieldList;
  }
}

export class PaycheckPayTaxList {
  paycheckPayTax?: PaycheckPayTax[];
  replaceAll?: boolean;
  constructor(props: PaycheckPayTaxList) {
    this.paycheckPayTax = props.paycheckPayTax;
    this.replaceAll = props.replaceAll;
  }
}

export class PaycheckPayExp {
  apply?: boolean;
  line?: number;
  origDoc?: number;
  transaction?: string;
  amount?: number;
  constructor(props: PaycheckPayExp) {
    this.apply = props.apply;
    this.line = props.line;
    this.origDoc = props.origDoc;
    this.transaction = props.transaction;
    this.amount = props.amount;
  }
}

export class PaycheckSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PaycheckSearch;
  columns?: PaycheckSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: PaycheckSearchAdvanced) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class TimeSheetTimeGridList {
  timeSheetTimeGrid?: TimeSheetTimeGrid[];
  replaceAll?: boolean;
  constructor(props: TimeSheetTimeGridList) {
    this.timeSheetTimeGrid = props.timeSheetTimeGrid;
    this.replaceAll = props.replaceAll;
  }
}

export class Paycheck extends PlatformCore.Record {
  batchNumber?: string;
  createdDate?: string;
  lastModifiedDate?: string;
  status?: string;
  entity?: PlatformCore.RecordRef;
  address?: string;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  workplace?: PlatformCore.RecordRef;
  tranId?: string;
  userAmount?: number;
  memo?: string;
  account?: PlatformCore.RecordRef;
  payFrequency?: string;
  balance?: number;
  tranDate?: string;
  postingPeriod?: PlatformCore.RecordRef;
  periodEnding?: string;
  payEarnList?: PaycheckPayEarnList;
  payTimeList?: PaycheckPayTimeList;
  payExpList?: PaycheckPayExpList;
  payPtoList?: PaycheckPayPtoList;
  payDeductList?: PaycheckPayDeductList;
  payContribList?: PaycheckPayContribList;
  payTaxList?: PaycheckPayTaxList;
  paySummaryList?: PaycheckPaySummaryList;
  payDisburseList?: PaycheckPayDisburseList;
  internalId?: string;
  externalId?: string;
  constructor(props: Paycheck) {
    super(props);
    this.batchNumber = props.batchNumber;
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.status = props.status;
    this.entity = props.entity;
    this.address = props.address;
    this.department = props.department;
    this.location = props.location;
    this.clazz = props.clazz;
    this.workplace = props.workplace;
    this.tranId = props.tranId;
    this.userAmount = props.userAmount;
    this.memo = props.memo;
    this.account = props.account;
    this.payFrequency = props.payFrequency;
    this.balance = props.balance;
    this.tranDate = props.tranDate;
    this.postingPeriod = props.postingPeriod;
    this.periodEnding = props.periodEnding;
    this.payEarnList = props.payEarnList;
    this.payTimeList = props.payTimeList;
    this.payExpList = props.payExpList;
    this.payPtoList = props.payPtoList;
    this.payDeductList = props.payDeductList;
    this.payContribList = props.payContribList;
    this.payTaxList = props.payTaxList;
    this.paySummaryList = props.paySummaryList;
    this.payDisburseList = props.payDisburseList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class PaycheckPayContrib {
  payItem?: PlatformCore.RecordRef;
  line?: number;
  wageBase?: number;
  amount?: number;
  manualEntry?: boolean;
  constructor(props: PaycheckPayContrib) {
    this.payItem = props.payItem;
    this.line = props.line;
    this.wageBase = props.wageBase;
    this.amount = props.amount;
    this.manualEntry = props.manualEntry;
  }
}

export class PaycheckPaySummary {
  payItem?: string;
  payItemType?: string;
  amount?: number;
  ytdAmount?: number;
  constructor(props: PaycheckPaySummary) {
    this.payItem = props.payItem;
    this.payItemType = props.payItemType;
    this.amount = props.amount;
    this.ytdAmount = props.ytdAmount;
  }
}

export class TimeEntrySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: TimeEntrySearch;
  columns?: TimeEntrySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: TimeEntrySearchAdvanced) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class TimeEntry extends PlatformCore.Record {
  hours?: PlatformCore.Duration;
  createdDate?: string;
  lastModifiedDate?: string;
  customer?: PlatformCore.RecordRef;
  caseTaskEvent?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  isBillable?: boolean;
  payrollItem?: PlatformCore.RecordRef;
  paidExternally?: boolean;
  price?: PlatformCore.RecordRef;
  rate?: number;
  overrideRate?: boolean;
  memo?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  billingClass?: string;
  subsidiary?: PlatformCore.RecordRef;
  approvalStatus?: PlatformCore.RecordRef;
  timeType?: TransactionsEmployeesTypes.TimeBillTimeType;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: TimeEntry) {
    super(props);
    this.hours = props.hours;
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customer = props.customer;
    this.caseTaskEvent = props.caseTaskEvent;
    this.item = props.item;
    this.isBillable = props.isBillable;
    this.payrollItem = props.payrollItem;
    this.paidExternally = props.paidExternally;
    this.price = props.price;
    this.rate = props.rate;
    this.overrideRate = props.overrideRate;
    this.memo = props.memo;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.billingClass = props.billingClass;
    this.subsidiary = props.subsidiary;
    this.approvalStatus = props.approvalStatus;
    this.timeType = props.timeType;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class PaycheckPayTimeList {
  paycheckPayTime?: PaycheckPayTime[];
  replaceAll?: boolean;
  constructor(props: PaycheckPayTimeList) {
    this.paycheckPayTime = props.paycheckPayTime;
    this.replaceAll = props.replaceAll;
  }
}

export class PaycheckPayEarnList {
  paycheckPayEarn?: PaycheckPayEarn[];
  replaceAll?: boolean;
  constructor(props: PaycheckPayEarnList) {
    this.paycheckPayEarn = props.paycheckPayEarn;
    this.replaceAll = props.replaceAll;
  }
}

export class TimeSheetSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: TimeSheetSearch;
  columns?: TimeSheetSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: TimeSheetSearchAdvanced) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}
