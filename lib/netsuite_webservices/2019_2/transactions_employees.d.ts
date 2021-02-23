import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as TransactionsEmployeesTypes from "./transactions_employees_types";
import { SoapMappingBase } from "../../soap-types";
export declare type PaycheckJournalCompanyContributionProps = {
    id?: number;
    payrollItem?: PlatformCore.RecordRef;
    amount?: number;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
};
export declare class PaycheckJournalCompanyContribution extends SoapMappingBase {
    id?: number;
    payrollItem?: PlatformCore.RecordRef;
    amount?: number;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
    constructor(props: PaycheckJournalCompanyContributionProps);
}
export declare type PaycheckSearchRowProps = {
    basic?: PlatformCommon.PaycheckSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    payrollItemJoin?: PlatformCommon.PayrollItemSearchRowBasic;
};
export declare class PaycheckSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.PaycheckSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    payrollItemJoin?: PlatformCommon.PayrollItemSearchRowBasic;
    constructor(props: PaycheckSearchRowProps);
}
export declare type TimeBillProps = {
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
export declare class TimeBill extends PlatformCore.Record {
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
    constructor(props: TimeBillProps);
}
export declare type PaycheckJournalDeductionListProps = {
    paycheckJournalDeduction?: PaycheckJournalDeduction[];
    replaceAll?: boolean;
};
export declare class PaycheckJournalDeductionList extends SoapMappingBase {
    paycheckJournalDeduction?: PaycheckJournalDeduction[];
    replaceAll?: boolean;
    constructor(props: PaycheckJournalDeductionListProps);
}
export declare type TimeEntrySearchProps = {
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
export declare class TimeEntrySearch extends PlatformCore.SearchRecord {
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
    constructor(props: TimeEntrySearchProps);
}
export declare type PaycheckJournalEarningProps = {
    id?: number;
    payrollItem?: PlatformCore.RecordRef;
    hours?: number;
    amount?: number;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
};
export declare class PaycheckJournalEarning extends SoapMappingBase {
    id?: number;
    payrollItem?: PlatformCore.RecordRef;
    hours?: number;
    amount?: number;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
    constructor(props: PaycheckJournalEarningProps);
}
export declare type ExpenseReportProps = {
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
export declare class ExpenseReport extends PlatformCore.Record {
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
    constructor(props: ExpenseReportProps);
}
export declare type PaycheckPayContribListProps = {
    paycheckPayContrib?: PaycheckPayContrib[];
    replaceAll?: boolean;
};
export declare class PaycheckPayContribList extends SoapMappingBase {
    paycheckPayContrib?: PaycheckPayContrib[];
    replaceAll?: boolean;
    constructor(props: PaycheckPayContribListProps);
}
export declare type PaycheckPayExpListProps = {
    paycheckPayExp?: PaycheckPayExp[];
    replaceAll?: boolean;
};
export declare class PaycheckPayExpList extends SoapMappingBase {
    paycheckPayExp?: PaycheckPayExp[];
    replaceAll?: boolean;
    constructor(props: PaycheckPayExpListProps);
}
export declare type PaycheckPayDisburseProps = {
    method?: string;
    bankName?: string;
    bankAccountDecrypt?: string;
    statusName?: string;
    amount?: number;
};
export declare class PaycheckPayDisburse extends SoapMappingBase {
    method?: string;
    bankName?: string;
    bankAccountDecrypt?: string;
    statusName?: string;
    amount?: number;
    constructor(props: PaycheckPayDisburseProps);
}
export declare type TimeSheetProps = {
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
export declare class TimeSheet extends PlatformCore.Record {
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
    constructor(props: TimeSheetProps);
}
export declare type PaycheckJournalEmployeeTaxListProps = {
    paycheckJournalEmployeeTax?: PaycheckJournalEmployeeTax[];
    replaceAll?: boolean;
};
export declare class PaycheckJournalEmployeeTaxList extends SoapMappingBase {
    paycheckJournalEmployeeTax?: PaycheckJournalEmployeeTax[];
    replaceAll?: boolean;
    constructor(props: PaycheckJournalEmployeeTaxListProps);
}
export declare type PaycheckPayTimeProps = {
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
export declare class PaycheckPayTime extends SoapMappingBase {
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
    constructor(props: PaycheckPayTimeProps);
}
export declare type PaycheckPayDeductListProps = {
    paycheckPayDeduct?: PaycheckPayDeduct[];
    replaceAll?: boolean;
};
export declare class PaycheckPayDeductList extends SoapMappingBase {
    paycheckPayDeduct?: PaycheckPayDeduct[];
    replaceAll?: boolean;
    constructor(props: PaycheckPayDeductListProps);
}
export declare type PaycheckSearchProps = {
    basic?: PlatformCommon.PaycheckSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    payrollItemJoin?: PlatformCommon.PayrollItemSearchBasic;
};
export declare class PaycheckSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.PaycheckSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    payrollItemJoin?: PlatformCommon.PayrollItemSearchBasic;
    constructor(props: PaycheckSearchProps);
}
export declare type TimeBillSearchProps = {
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
export declare class TimeBillSearch extends PlatformCore.SearchRecord {
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
    constructor(props: TimeBillSearchProps);
}
export declare type PaycheckJournalProps = {
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
export declare class PaycheckJournal extends PlatformCore.Record {
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
    constructor(props: PaycheckJournalProps);
}
export declare type PaycheckJournalEmployeeTaxProps = {
    id?: number;
    payrollItem?: PlatformCore.RecordRef;
    amount?: number;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
};
export declare class PaycheckJournalEmployeeTax extends SoapMappingBase {
    id?: number;
    payrollItem?: PlatformCore.RecordRef;
    amount?: number;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
    constructor(props: PaycheckJournalEmployeeTaxProps);
}
export declare type PaycheckPayEarnProps = {
    payItem?: PlatformCore.RecordRef;
    line?: number;
    count?: number;
    rate?: string;
    serviceItem?: PlatformCore.RecordRef;
    grossAmount?: number;
    manualEntry?: boolean;
};
export declare class PaycheckPayEarn extends SoapMappingBase {
    payItem?: PlatformCore.RecordRef;
    line?: number;
    count?: number;
    rate?: string;
    serviceItem?: PlatformCore.RecordRef;
    grossAmount?: number;
    manualEntry?: boolean;
    constructor(props: PaycheckPayEarnProps);
}
export declare type PaycheckPayPtoProps = {
    payItem?: number;
    payItemName?: string;
    hoursAccrued?: number;
    hoursUsed?: number;
    hoursBalance?: number;
};
export declare class PaycheckPayPto extends SoapMappingBase {
    payItem?: number;
    payItemName?: string;
    hoursAccrued?: number;
    hoursUsed?: number;
    hoursBalance?: number;
    constructor(props: PaycheckPayPtoProps);
}
export declare type PaycheckJournalDeductionProps = {
    id?: number;
    payrollItem?: PlatformCore.RecordRef;
    amount?: number;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
};
export declare class PaycheckJournalDeduction extends SoapMappingBase {
    id?: number;
    payrollItem?: PlatformCore.RecordRef;
    amount?: number;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
    constructor(props: PaycheckJournalDeductionProps);
}
export declare type PaycheckJournalEarningListProps = {
    paycheckJournalEarning?: PaycheckJournalEarning[];
    replaceAll?: boolean;
};
export declare class PaycheckJournalEarningList extends SoapMappingBase {
    paycheckJournalEarning?: PaycheckJournalEarning[];
    replaceAll?: boolean;
    constructor(props: PaycheckJournalEarningListProps);
}
export declare type PaycheckJournalCompanyTaxProps = {
    id?: number;
    payrollItem?: PlatformCore.RecordRef;
    amount?: number;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
};
export declare class PaycheckJournalCompanyTax extends SoapMappingBase {
    id?: number;
    payrollItem?: PlatformCore.RecordRef;
    amount?: number;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
    constructor(props: PaycheckJournalCompanyTaxProps);
}
export declare type PaycheckJournalCompanyContributionListProps = {
    paycheckJournalCompanyContribution?: PaycheckJournalCompanyContribution[];
    replaceAll?: boolean;
};
export declare class PaycheckJournalCompanyContributionList extends SoapMappingBase {
    paycheckJournalCompanyContribution?: PaycheckJournalCompanyContribution[];
    replaceAll?: boolean;
    constructor(props: PaycheckJournalCompanyContributionListProps);
}
export declare type TimeBillSearchAdvancedProps = {
    criteria?: TimeBillSearch;
    columns?: TimeBillSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class TimeBillSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: TimeBillSearch;
    columns?: TimeBillSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: TimeBillSearchAdvancedProps);
}
export declare type PaycheckPayDisburseListProps = {
    paycheckPayDisburse?: PaycheckPayDisburse[];
    replaceAll?: boolean;
};
export declare class PaycheckPayDisburseList extends SoapMappingBase {
    paycheckPayDisburse?: PaycheckPayDisburse[];
    replaceAll?: boolean;
    constructor(props: PaycheckPayDisburseListProps);
}
export declare type TimeBillSearchRowProps = {
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
export declare class TimeBillSearchRow extends PlatformCore.SearchRow {
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
    constructor(props: TimeBillSearchRowProps);
}
export declare type ExpenseReportExpenseListProps = {
    expense?: ExpenseReportExpense[];
    replaceAll?: boolean;
};
export declare class ExpenseReportExpenseList extends SoapMappingBase {
    expense?: ExpenseReportExpense[];
    replaceAll?: boolean;
    constructor(props: ExpenseReportExpenseListProps);
}
export declare type PaycheckPaySummaryListProps = {
    paycheckPaySummary?: PaycheckPaySummary[];
    replaceAll?: boolean;
};
export declare class PaycheckPaySummaryList extends SoapMappingBase {
    paycheckPaySummary?: PaycheckPaySummary[];
    replaceAll?: boolean;
    constructor(props: PaycheckPaySummaryListProps);
}
export declare type PaycheckPayDeductProps = {
    payItem?: PlatformCore.RecordRef;
    line?: number;
    wageBase?: number;
    amount?: number;
    manualEntry?: boolean;
};
export declare class PaycheckPayDeduct extends SoapMappingBase {
    payItem?: PlatformCore.RecordRef;
    line?: number;
    wageBase?: number;
    amount?: number;
    manualEntry?: boolean;
    constructor(props: PaycheckPayDeductProps);
}
export declare type TimeEntrySearchRowProps = {
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
export declare class TimeEntrySearchRow extends PlatformCore.SearchRow {
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
    constructor(props: TimeEntrySearchRowProps);
}
export declare type PaycheckPayPtoListProps = {
    paycheckPayPto?: PaycheckPayPto[];
    replaceAll?: boolean;
};
export declare class PaycheckPayPtoList extends SoapMappingBase {
    paycheckPayPto?: PaycheckPayPto[];
    replaceAll?: boolean;
    constructor(props: PaycheckPayPtoListProps);
}
export declare type TimeSheetTimeGridProps = {
    sunday?: TimeEntry;
    monday?: TimeEntry;
    tuesday?: TimeEntry;
    wednesday?: TimeEntry;
    thursday?: TimeEntry;
    friday?: TimeEntry;
    saturday?: TimeEntry;
};
export declare class TimeSheetTimeGrid extends SoapMappingBase {
    sunday?: TimeEntry;
    monday?: TimeEntry;
    tuesday?: TimeEntry;
    wednesday?: TimeEntry;
    thursday?: TimeEntry;
    friday?: TimeEntry;
    saturday?: TimeEntry;
    constructor(props: TimeSheetTimeGridProps);
}
export declare type TimeSheetSearchRowProps = {
    basic?: PlatformCommon.TimeSheetSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    timeBillJoin?: PlatformCommon.TimeBillSearchRowBasic;
    timeEntryJoin?: PlatformCommon.TimeEntrySearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class TimeSheetSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.TimeSheetSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    timeBillJoin?: PlatformCommon.TimeBillSearchRowBasic;
    timeEntryJoin?: PlatformCommon.TimeEntrySearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: TimeSheetSearchRowProps);
}
export declare type PaycheckPayTaxProps = {
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
export declare class PaycheckPayTax extends SoapMappingBase {
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
    constructor(props: PaycheckPayTaxProps);
}
export declare type PaycheckJournalCompanyTaxListProps = {
    paycheckJournalCompanyTax?: PaycheckJournalCompanyTax[];
    replaceAll?: boolean;
};
export declare class PaycheckJournalCompanyTaxList extends SoapMappingBase {
    paycheckJournalCompanyTax?: PaycheckJournalCompanyTax[];
    replaceAll?: boolean;
    constructor(props: PaycheckJournalCompanyTaxListProps);
}
export declare type TimeSheetSearchProps = {
    basic?: PlatformCommon.TimeSheetSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    timeBillJoin?: PlatformCommon.TimeBillSearchBasic;
    timeEntryJoin?: PlatformCommon.TimeEntrySearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class TimeSheetSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.TimeSheetSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    timeBillJoin?: PlatformCommon.TimeBillSearchBasic;
    timeEntryJoin?: PlatformCommon.TimeEntrySearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: TimeSheetSearchProps);
}
export declare type ExpenseReportExpenseProps = {
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
export declare class ExpenseReportExpense extends SoapMappingBase {
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
    constructor(props: ExpenseReportExpenseProps);
}
export declare type PaycheckPayTaxListProps = {
    paycheckPayTax?: PaycheckPayTax[];
    replaceAll?: boolean;
};
export declare class PaycheckPayTaxList extends SoapMappingBase {
    paycheckPayTax?: PaycheckPayTax[];
    replaceAll?: boolean;
    constructor(props: PaycheckPayTaxListProps);
}
export declare type PaycheckPayExpProps = {
    apply?: boolean;
    line?: number;
    origDoc?: number;
    transaction?: string;
    amount?: number;
};
export declare class PaycheckPayExp extends SoapMappingBase {
    apply?: boolean;
    line?: number;
    origDoc?: number;
    transaction?: string;
    amount?: number;
    constructor(props: PaycheckPayExpProps);
}
export declare type PaycheckSearchAdvancedProps = {
    criteria?: PaycheckSearch;
    columns?: PaycheckSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class PaycheckSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: PaycheckSearch;
    columns?: PaycheckSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: PaycheckSearchAdvancedProps);
}
export declare type TimeSheetTimeGridListProps = {
    timeSheetTimeGrid?: TimeSheetTimeGrid[];
    replaceAll?: boolean;
};
export declare class TimeSheetTimeGridList extends SoapMappingBase {
    timeSheetTimeGrid?: TimeSheetTimeGrid[];
    replaceAll?: boolean;
    constructor(props: TimeSheetTimeGridListProps);
}
export declare type PaycheckProps = {
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
export declare class Paycheck extends PlatformCore.Record {
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
    constructor(props: PaycheckProps);
}
export declare type PaycheckPayContribProps = {
    payItem?: PlatformCore.RecordRef;
    line?: number;
    wageBase?: number;
    amount?: number;
    manualEntry?: boolean;
};
export declare class PaycheckPayContrib extends SoapMappingBase {
    payItem?: PlatformCore.RecordRef;
    line?: number;
    wageBase?: number;
    amount?: number;
    manualEntry?: boolean;
    constructor(props: PaycheckPayContribProps);
}
export declare type PaycheckPaySummaryProps = {
    payItem?: string;
    payItemType?: string;
    amount?: number;
    ytdAmount?: number;
};
export declare class PaycheckPaySummary extends SoapMappingBase {
    payItem?: string;
    payItemType?: string;
    amount?: number;
    ytdAmount?: number;
    constructor(props: PaycheckPaySummaryProps);
}
export declare type TimeEntrySearchAdvancedProps = {
    criteria?: TimeEntrySearch;
    columns?: TimeEntrySearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class TimeEntrySearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: TimeEntrySearch;
    columns?: TimeEntrySearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: TimeEntrySearchAdvancedProps);
}
export declare type TimeEntryProps = {
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
export declare class TimeEntry extends PlatformCore.Record {
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
    constructor(props: TimeEntryProps);
}
export declare type PaycheckPayTimeListProps = {
    paycheckPayTime?: PaycheckPayTime[];
    replaceAll?: boolean;
};
export declare class PaycheckPayTimeList extends SoapMappingBase {
    paycheckPayTime?: PaycheckPayTime[];
    replaceAll?: boolean;
    constructor(props: PaycheckPayTimeListProps);
}
export declare type PaycheckPayEarnListProps = {
    paycheckPayEarn?: PaycheckPayEarn[];
    replaceAll?: boolean;
};
export declare class PaycheckPayEarnList extends SoapMappingBase {
    paycheckPayEarn?: PaycheckPayEarn[];
    replaceAll?: boolean;
    constructor(props: PaycheckPayEarnListProps);
}
export declare type TimeSheetSearchAdvancedProps = {
    criteria?: TimeSheetSearch;
    columns?: TimeSheetSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class TimeSheetSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: TimeSheetSearch;
    columns?: TimeSheetSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: TimeSheetSearchAdvancedProps);
}
