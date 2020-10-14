import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as TransactionsEmployeesTypes from "./transactions_employees_types";
import { SoapMappingBase, propsWithMappingsName } from "../../soap-types";
const MAPPINGS_NAME = "com_netsuite_webservices_transactions_employees_2019_2";
export type PaycheckJournalCompanyContributionProps = {
  id?: number;
  payrollItem?: PlatformCore.RecordRef;
  amount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class PaycheckJournalCompanyContribution extends SoapMappingBase {
  id?: number;
  payrollItem?: PlatformCore.RecordRef;
  amount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: PaycheckJournalCompanyContributionProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.id = props.id;
    this.payrollItem = props.payrollItem;
    this.amount = props.amount;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customFieldList = props.customFieldList;
  }
}

export type PaycheckSearchRowProps = {
  basic?: PlatformCommon.PaycheckSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  payrollItemJoin?: PlatformCommon.PayrollItemSearchRowBasic;
};

export class PaycheckSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.PaycheckSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  payrollItemJoin?: PlatformCommon.PayrollItemSearchRowBasic;
  constructor(props: PaycheckSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.employeeJoin = props.employeeJoin;
    this.payrollItemJoin = props.payrollItemJoin;
  }
}

export type TimeBillProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: TimeBillProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PaycheckJournalDeductionListProps = {
  paycheckJournalDeduction?: PaycheckJournalDeduction[];
  replaceAll?: boolean;
};

export class PaycheckJournalDeductionList extends SoapMappingBase {
  paycheckJournalDeduction?: PaycheckJournalDeduction[];
  replaceAll?: boolean;
  constructor(props: PaycheckJournalDeductionListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.paycheckJournalDeduction = props.paycheckJournalDeduction;
    this.replaceAll = props.replaceAll;
  }
}

export type TimeEntrySearchProps = {
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
};

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
  constructor(props: TimeEntrySearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PaycheckJournalEarningProps = {
  id?: number;
  payrollItem?: PlatformCore.RecordRef;
  hours?: number;
  amount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class PaycheckJournalEarning extends SoapMappingBase {
  id?: number;
  payrollItem?: PlatformCore.RecordRef;
  hours?: number;
  amount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: PaycheckJournalEarningProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type ExpenseReportProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: ExpenseReportProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PaycheckPayContribListProps = {
  paycheckPayContrib?: PaycheckPayContrib[];
  replaceAll?: boolean;
};

export class PaycheckPayContribList extends SoapMappingBase {
  paycheckPayContrib?: PaycheckPayContrib[];
  replaceAll?: boolean;
  constructor(props: PaycheckPayContribListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.paycheckPayContrib = props.paycheckPayContrib;
    this.replaceAll = props.replaceAll;
  }
}

export type PaycheckPayExpListProps = {
  paycheckPayExp?: PaycheckPayExp[];
  replaceAll?: boolean;
};

export class PaycheckPayExpList extends SoapMappingBase {
  paycheckPayExp?: PaycheckPayExp[];
  replaceAll?: boolean;
  constructor(props: PaycheckPayExpListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.paycheckPayExp = props.paycheckPayExp;
    this.replaceAll = props.replaceAll;
  }
}

export type PaycheckPayDisburseProps = {
  method?: string;
  bankName?: string;
  bankAccountDecrypt?: string;
  statusName?: string;
  amount?: number;
};

export class PaycheckPayDisburse extends SoapMappingBase {
  method?: string;
  bankName?: string;
  bankAccountDecrypt?: string;
  statusName?: string;
  amount?: number;
  constructor(props: PaycheckPayDisburseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.method = props.method;
    this.bankName = props.bankName;
    this.bankAccountDecrypt = props.bankAccountDecrypt;
    this.statusName = props.statusName;
    this.amount = props.amount;
  }
}

export type TimeSheetProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: TimeSheetProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PaycheckJournalEmployeeTaxListProps = {
  paycheckJournalEmployeeTax?: PaycheckJournalEmployeeTax[];
  replaceAll?: boolean;
};

export class PaycheckJournalEmployeeTaxList extends SoapMappingBase {
  paycheckJournalEmployeeTax?: PaycheckJournalEmployeeTax[];
  replaceAll?: boolean;
  constructor(props: PaycheckJournalEmployeeTaxListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.paycheckJournalEmployeeTax = props.paycheckJournalEmployeeTax;
    this.replaceAll = props.replaceAll;
  }
}

export type PaycheckPayTimeProps = {
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
};

export class PaycheckPayTime extends SoapMappingBase {
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
  constructor(props: PaycheckPayTimeProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PaycheckPayDeductListProps = {
  paycheckPayDeduct?: PaycheckPayDeduct[];
  replaceAll?: boolean;
};

export class PaycheckPayDeductList extends SoapMappingBase {
  paycheckPayDeduct?: PaycheckPayDeduct[];
  replaceAll?: boolean;
  constructor(props: PaycheckPayDeductListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.paycheckPayDeduct = props.paycheckPayDeduct;
    this.replaceAll = props.replaceAll;
  }
}

export type PaycheckSearchProps = {
  basic?: PlatformCommon.PaycheckSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  payrollItemJoin?: PlatformCommon.PayrollItemSearchBasic;
};

export class PaycheckSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.PaycheckSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  payrollItemJoin?: PlatformCommon.PayrollItemSearchBasic;
  constructor(props: PaycheckSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.employeeJoin = props.employeeJoin;
    this.payrollItemJoin = props.payrollItemJoin;
  }
}

export type TimeBillSearchProps = {
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
};

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
  constructor(props: TimeBillSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PaycheckJournalProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: PaycheckJournalProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PaycheckJournalEmployeeTaxProps = {
  id?: number;
  payrollItem?: PlatformCore.RecordRef;
  amount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class PaycheckJournalEmployeeTax extends SoapMappingBase {
  id?: number;
  payrollItem?: PlatformCore.RecordRef;
  amount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: PaycheckJournalEmployeeTaxProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.id = props.id;
    this.payrollItem = props.payrollItem;
    this.amount = props.amount;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customFieldList = props.customFieldList;
  }
}

export type PaycheckPayEarnProps = {
  payItem?: PlatformCore.RecordRef;
  line?: number;
  count?: number;
  rate?: string;
  serviceItem?: PlatformCore.RecordRef;
  grossAmount?: number;
  manualEntry?: boolean;
};

export class PaycheckPayEarn extends SoapMappingBase {
  payItem?: PlatformCore.RecordRef;
  line?: number;
  count?: number;
  rate?: string;
  serviceItem?: PlatformCore.RecordRef;
  grossAmount?: number;
  manualEntry?: boolean;
  constructor(props: PaycheckPayEarnProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.payItem = props.payItem;
    this.line = props.line;
    this.count = props.count;
    this.rate = props.rate;
    this.serviceItem = props.serviceItem;
    this.grossAmount = props.grossAmount;
    this.manualEntry = props.manualEntry;
  }
}

export type PaycheckPayPtoProps = {
  payItem?: number;
  payItemName?: string;
  hoursAccrued?: number;
  hoursUsed?: number;
  hoursBalance?: number;
};

export class PaycheckPayPto extends SoapMappingBase {
  payItem?: number;
  payItemName?: string;
  hoursAccrued?: number;
  hoursUsed?: number;
  hoursBalance?: number;
  constructor(props: PaycheckPayPtoProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.payItem = props.payItem;
    this.payItemName = props.payItemName;
    this.hoursAccrued = props.hoursAccrued;
    this.hoursUsed = props.hoursUsed;
    this.hoursBalance = props.hoursBalance;
  }
}

export type PaycheckJournalDeductionProps = {
  id?: number;
  payrollItem?: PlatformCore.RecordRef;
  amount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class PaycheckJournalDeduction extends SoapMappingBase {
  id?: number;
  payrollItem?: PlatformCore.RecordRef;
  amount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: PaycheckJournalDeductionProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.id = props.id;
    this.payrollItem = props.payrollItem;
    this.amount = props.amount;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customFieldList = props.customFieldList;
  }
}

export type PaycheckJournalEarningListProps = {
  paycheckJournalEarning?: PaycheckJournalEarning[];
  replaceAll?: boolean;
};

export class PaycheckJournalEarningList extends SoapMappingBase {
  paycheckJournalEarning?: PaycheckJournalEarning[];
  replaceAll?: boolean;
  constructor(props: PaycheckJournalEarningListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.paycheckJournalEarning = props.paycheckJournalEarning;
    this.replaceAll = props.replaceAll;
  }
}

export type PaycheckJournalCompanyTaxProps = {
  id?: number;
  payrollItem?: PlatformCore.RecordRef;
  amount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
};

export class PaycheckJournalCompanyTax extends SoapMappingBase {
  id?: number;
  payrollItem?: PlatformCore.RecordRef;
  amount?: number;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: PaycheckJournalCompanyTaxProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.id = props.id;
    this.payrollItem = props.payrollItem;
    this.amount = props.amount;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customFieldList = props.customFieldList;
  }
}

export type PaycheckJournalCompanyContributionListProps = {
  paycheckJournalCompanyContribution?: PaycheckJournalCompanyContribution[];
  replaceAll?: boolean;
};

export class PaycheckJournalCompanyContributionList extends SoapMappingBase {
  paycheckJournalCompanyContribution?: PaycheckJournalCompanyContribution[];
  replaceAll?: boolean;
  constructor(props: PaycheckJournalCompanyContributionListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.paycheckJournalCompanyContribution =
      props.paycheckJournalCompanyContribution;
    this.replaceAll = props.replaceAll;
  }
}

export type TimeBillSearchAdvancedProps = {
  criteria?: TimeBillSearch;
  columns?: TimeBillSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class TimeBillSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: TimeBillSearch;
  columns?: TimeBillSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: TimeBillSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type PaycheckPayDisburseListProps = {
  paycheckPayDisburse?: PaycheckPayDisburse[];
  replaceAll?: boolean;
};

export class PaycheckPayDisburseList extends SoapMappingBase {
  paycheckPayDisburse?: PaycheckPayDisburse[];
  replaceAll?: boolean;
  constructor(props: PaycheckPayDisburseListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.paycheckPayDisburse = props.paycheckPayDisburse;
    this.replaceAll = props.replaceAll;
  }
}

export type TimeBillSearchRowProps = {
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
};

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
  constructor(props: TimeBillSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type ExpenseReportExpenseListProps = {
  expense?: ExpenseReportExpense[];
  replaceAll?: boolean;
};

export class ExpenseReportExpenseList extends SoapMappingBase {
  expense?: ExpenseReportExpense[];
  replaceAll?: boolean;
  constructor(props: ExpenseReportExpenseListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.expense = props.expense;
    this.replaceAll = props.replaceAll;
  }
}

export type PaycheckPaySummaryListProps = {
  paycheckPaySummary?: PaycheckPaySummary[];
  replaceAll?: boolean;
};

export class PaycheckPaySummaryList extends SoapMappingBase {
  paycheckPaySummary?: PaycheckPaySummary[];
  replaceAll?: boolean;
  constructor(props: PaycheckPaySummaryListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.paycheckPaySummary = props.paycheckPaySummary;
    this.replaceAll = props.replaceAll;
  }
}

export type PaycheckPayDeductProps = {
  payItem?: PlatformCore.RecordRef;
  line?: number;
  wageBase?: number;
  amount?: number;
  manualEntry?: boolean;
};

export class PaycheckPayDeduct extends SoapMappingBase {
  payItem?: PlatformCore.RecordRef;
  line?: number;
  wageBase?: number;
  amount?: number;
  manualEntry?: boolean;
  constructor(props: PaycheckPayDeductProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.payItem = props.payItem;
    this.line = props.line;
    this.wageBase = props.wageBase;
    this.amount = props.amount;
    this.manualEntry = props.manualEntry;
  }
}

export type TimeEntrySearchRowProps = {
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
};

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
  constructor(props: TimeEntrySearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PaycheckPayPtoListProps = {
  paycheckPayPto?: PaycheckPayPto[];
  replaceAll?: boolean;
};

export class PaycheckPayPtoList extends SoapMappingBase {
  paycheckPayPto?: PaycheckPayPto[];
  replaceAll?: boolean;
  constructor(props: PaycheckPayPtoListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.paycheckPayPto = props.paycheckPayPto;
    this.replaceAll = props.replaceAll;
  }
}

export type TimeSheetTimeGridProps = {
  sunday?: TimeEntry;
  monday?: TimeEntry;
  tuesday?: TimeEntry;
  wednesday?: TimeEntry;
  thursday?: TimeEntry;
  friday?: TimeEntry;
  saturday?: TimeEntry;
};

export class TimeSheetTimeGrid extends SoapMappingBase {
  sunday?: TimeEntry;
  monday?: TimeEntry;
  tuesday?: TimeEntry;
  wednesday?: TimeEntry;
  thursday?: TimeEntry;
  friday?: TimeEntry;
  saturday?: TimeEntry;
  constructor(props: TimeSheetTimeGridProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.sunday = props.sunday;
    this.monday = props.monday;
    this.tuesday = props.tuesday;
    this.wednesday = props.wednesday;
    this.thursday = props.thursday;
    this.friday = props.friday;
    this.saturday = props.saturday;
  }
}

export type TimeSheetSearchRowProps = {
  basic?: PlatformCommon.TimeSheetSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  timeBillJoin?: PlatformCommon.TimeBillSearchRowBasic;
  timeEntryJoin?: PlatformCommon.TimeEntrySearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class TimeSheetSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.TimeSheetSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  timeBillJoin?: PlatformCommon.TimeBillSearchRowBasic;
  timeEntryJoin?: PlatformCommon.TimeEntrySearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: TimeSheetSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.employeeJoin = props.employeeJoin;
    this.timeBillJoin = props.timeBillJoin;
    this.timeEntryJoin = props.timeEntryJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type PaycheckPayTaxProps = {
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
};

export class PaycheckPayTax extends SoapMappingBase {
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
  constructor(props: PaycheckPayTaxProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PaycheckJournalCompanyTaxListProps = {
  paycheckJournalCompanyTax?: PaycheckJournalCompanyTax[];
  replaceAll?: boolean;
};

export class PaycheckJournalCompanyTaxList extends SoapMappingBase {
  paycheckJournalCompanyTax?: PaycheckJournalCompanyTax[];
  replaceAll?: boolean;
  constructor(props: PaycheckJournalCompanyTaxListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.paycheckJournalCompanyTax = props.paycheckJournalCompanyTax;
    this.replaceAll = props.replaceAll;
  }
}

export type TimeSheetSearchProps = {
  basic?: PlatformCommon.TimeSheetSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  timeBillJoin?: PlatformCommon.TimeBillSearchBasic;
  timeEntryJoin?: PlatformCommon.TimeEntrySearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class TimeSheetSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.TimeSheetSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  timeBillJoin?: PlatformCommon.TimeBillSearchBasic;
  timeEntryJoin?: PlatformCommon.TimeEntrySearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: TimeSheetSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.employeeJoin = props.employeeJoin;
    this.timeBillJoin = props.timeBillJoin;
    this.timeEntryJoin = props.timeEntryJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type ExpenseReportExpenseProps = {
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
};

export class ExpenseReportExpense extends SoapMappingBase {
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
  constructor(props: ExpenseReportExpenseProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PaycheckPayTaxListProps = {
  paycheckPayTax?: PaycheckPayTax[];
  replaceAll?: boolean;
};

export class PaycheckPayTaxList extends SoapMappingBase {
  paycheckPayTax?: PaycheckPayTax[];
  replaceAll?: boolean;
  constructor(props: PaycheckPayTaxListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.paycheckPayTax = props.paycheckPayTax;
    this.replaceAll = props.replaceAll;
  }
}

export type PaycheckPayExpProps = {
  apply?: boolean;
  line?: number;
  origDoc?: number;
  transaction?: string;
  amount?: number;
};

export class PaycheckPayExp extends SoapMappingBase {
  apply?: boolean;
  line?: number;
  origDoc?: number;
  transaction?: string;
  amount?: number;
  constructor(props: PaycheckPayExpProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.apply = props.apply;
    this.line = props.line;
    this.origDoc = props.origDoc;
    this.transaction = props.transaction;
    this.amount = props.amount;
  }
}

export type PaycheckSearchAdvancedProps = {
  criteria?: PaycheckSearch;
  columns?: PaycheckSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class PaycheckSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PaycheckSearch;
  columns?: PaycheckSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: PaycheckSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type TimeSheetTimeGridListProps = {
  timeSheetTimeGrid?: TimeSheetTimeGrid[];
  replaceAll?: boolean;
};

export class TimeSheetTimeGridList extends SoapMappingBase {
  timeSheetTimeGrid?: TimeSheetTimeGrid[];
  replaceAll?: boolean;
  constructor(props: TimeSheetTimeGridListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.timeSheetTimeGrid = props.timeSheetTimeGrid;
    this.replaceAll = props.replaceAll;
  }
}

export type PaycheckProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: PaycheckProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PaycheckPayContribProps = {
  payItem?: PlatformCore.RecordRef;
  line?: number;
  wageBase?: number;
  amount?: number;
  manualEntry?: boolean;
};

export class PaycheckPayContrib extends SoapMappingBase {
  payItem?: PlatformCore.RecordRef;
  line?: number;
  wageBase?: number;
  amount?: number;
  manualEntry?: boolean;
  constructor(props: PaycheckPayContribProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.payItem = props.payItem;
    this.line = props.line;
    this.wageBase = props.wageBase;
    this.amount = props.amount;
    this.manualEntry = props.manualEntry;
  }
}

export type PaycheckPaySummaryProps = {
  payItem?: string;
  payItemType?: string;
  amount?: number;
  ytdAmount?: number;
};

export class PaycheckPaySummary extends SoapMappingBase {
  payItem?: string;
  payItemType?: string;
  amount?: number;
  ytdAmount?: number;
  constructor(props: PaycheckPaySummaryProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.payItem = props.payItem;
    this.payItemType = props.payItemType;
    this.amount = props.amount;
    this.ytdAmount = props.ytdAmount;
  }
}

export type TimeEntrySearchAdvancedProps = {
  criteria?: TimeEntrySearch;
  columns?: TimeEntrySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class TimeEntrySearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: TimeEntrySearch;
  columns?: TimeEntrySearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: TimeEntrySearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type TimeEntryProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: TimeEntryProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PaycheckPayTimeListProps = {
  paycheckPayTime?: PaycheckPayTime[];
  replaceAll?: boolean;
};

export class PaycheckPayTimeList extends SoapMappingBase {
  paycheckPayTime?: PaycheckPayTime[];
  replaceAll?: boolean;
  constructor(props: PaycheckPayTimeListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.paycheckPayTime = props.paycheckPayTime;
    this.replaceAll = props.replaceAll;
  }
}

export type PaycheckPayEarnListProps = {
  paycheckPayEarn?: PaycheckPayEarn[];
  replaceAll?: boolean;
};

export class PaycheckPayEarnList extends SoapMappingBase {
  paycheckPayEarn?: PaycheckPayEarn[];
  replaceAll?: boolean;
  constructor(props: PaycheckPayEarnListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.paycheckPayEarn = props.paycheckPayEarn;
    this.replaceAll = props.replaceAll;
  }
}

export type TimeSheetSearchAdvancedProps = {
  criteria?: TimeSheetSearch;
  columns?: TimeSheetSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class TimeSheetSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: TimeSheetSearch;
  columns?: TimeSheetSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: TimeSheetSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}
