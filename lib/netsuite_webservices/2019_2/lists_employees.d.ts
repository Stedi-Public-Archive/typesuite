import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as PlatformCommonTypes from "./platform_common_types";
import * as ListsEmployeesTypes from "./lists_employees_types";
import { SoapMappingBase } from "../../soap-types";
export declare type EmployeeRolesListProps = {
    roles?: EmployeeRoles[];
    replaceAll?: boolean;
};
export declare class EmployeeRolesList extends SoapMappingBase {
    roles?: EmployeeRoles[];
    replaceAll?: boolean;
    constructor(props: EmployeeRolesListProps);
}
export declare type EmployeeProps = {
    customForm?: PlatformCore.RecordRef;
    template?: PlatformCore.RecordRef;
    entityId?: string;
    salutation?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    altName?: string;
    phone?: string;
    fax?: string;
    email?: string;
    defaultAddress?: string;
    isInactive?: boolean;
    phoneticName?: string;
    lastModifiedDate?: string;
    dateCreated?: string;
    initials?: string;
    officePhone?: string;
    homePhone?: string;
    mobilePhone?: string;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    billingClass?: PlatformCore.RecordRef;
    accountNumber?: string;
    compensationCurrency?: ListsEmployeesTypes.EmployeeCompensationCurrency;
    baseWageType?: ListsEmployeesTypes.EmployeeBaseWageType;
    baseWage?: number;
    comments?: string;
    globalSubscriptionStatus?: PlatformCommonTypes.GlobalSubscriptionStatus;
    image?: PlatformCore.RecordRef;
    payFrequency?: ListsEmployeesTypes.EmployeePayFrequency;
    lastPaidDate?: string;
    currency?: PlatformCore.RecordRef;
    useTimeData?: ListsEmployeesTypes.EmployeeUseTimeData;
    usePerquest?: boolean;
    workplace?: PlatformCore.RecordRef;
    adpId?: string;
    directDeposit?: boolean;
    expenseLimit?: number;
    purchaseOrderLimit?: number;
    purchaseOrderApprovalLimit?: number;
    socialSecurityNumber?: string;
    supervisor?: PlatformCore.RecordRef;
    approver?: PlatformCore.RecordRef;
    approvalLimit?: number;
    timeApprover?: PlatformCore.RecordRef;
    employeeType?: PlatformCore.RecordRef;
    isSalesRep?: boolean;
    salesRole?: PlatformCore.RecordRef;
    isSupportRep?: boolean;
    isJobResource?: boolean;
    laborCost?: number;
    birthDate?: string;
    hireDate?: string;
    releaseDate?: string;
    terminationDetails?: string;
    terminationReason?: PlatformCore.RecordRef;
    terminationRegretted?: ListsEmployeesTypes.EmployeeTerminationRegretted;
    terminationCategory?: ListsEmployeesTypes.EmployeeTerminationCategory;
    timeOffPlan?: PlatformCore.RecordRef;
    lastReviewDate?: string;
    nextReviewDate?: string;
    title?: string;
    employeeStatus?: PlatformCore.RecordRef;
    jobDescription?: string;
    workAssignment?: ListsEmployeesTypes.EmployeeWorkAssignment;
    job?: PlatformCore.RecordRef;
    maritalStatus?: PlatformCore.RecordRef;
    ethnicity?: PlatformCore.RecordRef;
    gender?: ListsEmployeesTypes.Gender;
    purchaseOrderApprover?: PlatformCore.RecordRef;
    workCalendar?: PlatformCore.RecordRef;
    giveAccess?: boolean;
    defaultExpenseReportCurrency?: PlatformCore.RecordRef;
    concurrentWebServicesUser?: boolean;
    sendEmail?: boolean;
    hasOfflineAccess?: boolean;
    password?: string;
    password2?: string;
    requirePwdChange?: boolean;
    inheritIPRules?: boolean;
    ipAddressRule?: string;
    startDateTimeOffCalc?: string;
    commissionPaymentPreference?: ListsEmployeesTypes.EmployeeCommissionPaymentPreference;
    billPay?: boolean;
    defaultAcctCorpCardExp?: PlatformCore.RecordRef;
    eligibleForCommission?: boolean;
    subscriptionsList?: EmployeeSubscriptionsList;
    ratesList?: EmployeeRatesList;
    addressbookList?: EmployeeAddressbookList;
    rolesList?: EmployeeRolesList;
    hrEducationList?: EmployeeHrEducationList;
    accruedTimeList?: EmployeeAccruedTimeList;
    directDepositList?: EmployeeDirectDepositList;
    currencyList?: EmployeeCurrencyList;
    companyContributionList?: EmployeeCompanyContributionList;
    earningList?: EmployeeEarningList;
    emergencyContactList?: EmployeeEmergencyContactList;
    hcmPositionList?: EmployeeHcmPositionList;
    deductionList?: EmployeeDeductionList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class Employee extends PlatformCore.Record {
    customForm?: PlatformCore.RecordRef;
    template?: PlatformCore.RecordRef;
    entityId?: string;
    salutation?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    altName?: string;
    phone?: string;
    fax?: string;
    email?: string;
    defaultAddress?: string;
    isInactive?: boolean;
    phoneticName?: string;
    lastModifiedDate?: string;
    dateCreated?: string;
    initials?: string;
    officePhone?: string;
    homePhone?: string;
    mobilePhone?: string;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    billingClass?: PlatformCore.RecordRef;
    accountNumber?: string;
    compensationCurrency?: ListsEmployeesTypes.EmployeeCompensationCurrency;
    baseWageType?: ListsEmployeesTypes.EmployeeBaseWageType;
    baseWage?: number;
    comments?: string;
    globalSubscriptionStatus?: PlatformCommonTypes.GlobalSubscriptionStatus;
    image?: PlatformCore.RecordRef;
    payFrequency?: ListsEmployeesTypes.EmployeePayFrequency;
    lastPaidDate?: string;
    currency?: PlatformCore.RecordRef;
    useTimeData?: ListsEmployeesTypes.EmployeeUseTimeData;
    usePerquest?: boolean;
    workplace?: PlatformCore.RecordRef;
    adpId?: string;
    directDeposit?: boolean;
    expenseLimit?: number;
    purchaseOrderLimit?: number;
    purchaseOrderApprovalLimit?: number;
    socialSecurityNumber?: string;
    supervisor?: PlatformCore.RecordRef;
    approver?: PlatformCore.RecordRef;
    approvalLimit?: number;
    timeApprover?: PlatformCore.RecordRef;
    employeeType?: PlatformCore.RecordRef;
    isSalesRep?: boolean;
    salesRole?: PlatformCore.RecordRef;
    isSupportRep?: boolean;
    isJobResource?: boolean;
    laborCost?: number;
    birthDate?: string;
    hireDate?: string;
    releaseDate?: string;
    terminationDetails?: string;
    terminationReason?: PlatformCore.RecordRef;
    terminationRegretted?: ListsEmployeesTypes.EmployeeTerminationRegretted;
    terminationCategory?: ListsEmployeesTypes.EmployeeTerminationCategory;
    timeOffPlan?: PlatformCore.RecordRef;
    lastReviewDate?: string;
    nextReviewDate?: string;
    title?: string;
    employeeStatus?: PlatformCore.RecordRef;
    jobDescription?: string;
    workAssignment?: ListsEmployeesTypes.EmployeeWorkAssignment;
    job?: PlatformCore.RecordRef;
    maritalStatus?: PlatformCore.RecordRef;
    ethnicity?: PlatformCore.RecordRef;
    gender?: ListsEmployeesTypes.Gender;
    purchaseOrderApprover?: PlatformCore.RecordRef;
    workCalendar?: PlatformCore.RecordRef;
    giveAccess?: boolean;
    defaultExpenseReportCurrency?: PlatformCore.RecordRef;
    concurrentWebServicesUser?: boolean;
    sendEmail?: boolean;
    hasOfflineAccess?: boolean;
    password?: string;
    password2?: string;
    requirePwdChange?: boolean;
    inheritIPRules?: boolean;
    ipAddressRule?: string;
    startDateTimeOffCalc?: string;
    commissionPaymentPreference?: ListsEmployeesTypes.EmployeeCommissionPaymentPreference;
    billPay?: boolean;
    defaultAcctCorpCardExp?: PlatformCore.RecordRef;
    eligibleForCommission?: boolean;
    subscriptionsList?: EmployeeSubscriptionsList;
    ratesList?: EmployeeRatesList;
    addressbookList?: EmployeeAddressbookList;
    rolesList?: EmployeeRolesList;
    hrEducationList?: EmployeeHrEducationList;
    accruedTimeList?: EmployeeAccruedTimeList;
    directDepositList?: EmployeeDirectDepositList;
    currencyList?: EmployeeCurrencyList;
    companyContributionList?: EmployeeCompanyContributionList;
    earningList?: EmployeeEarningList;
    emergencyContactList?: EmployeeEmergencyContactList;
    hcmPositionList?: EmployeeHcmPositionList;
    deductionList?: EmployeeDeductionList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: EmployeeProps);
}
export declare type EmployeeDirectDepositProps = {
    id?: number;
    netAccount?: boolean;
    savingsAccount?: boolean;
    accountPrenoted?: boolean;
    accountStatus?: ListsEmployeesTypes.EmployeeDirectDepositAccountStatus;
    bankName?: string;
    bankId?: string;
    bankNumber?: string;
    bankRoutingNumber?: string;
    bankAccountNumber?: string;
    amount?: number;
    inactive?: boolean;
};
export declare class EmployeeDirectDeposit extends SoapMappingBase {
    id?: number;
    netAccount?: boolean;
    savingsAccount?: boolean;
    accountPrenoted?: boolean;
    accountStatus?: ListsEmployeesTypes.EmployeeDirectDepositAccountStatus;
    bankName?: string;
    bankId?: string;
    bankNumber?: string;
    bankRoutingNumber?: string;
    bankAccountNumber?: string;
    amount?: number;
    inactive?: boolean;
    constructor(props: EmployeeDirectDepositProps);
}
export declare type EmployeeSearchRowProps = {
    basic?: PlatformCommon.EmployeeSearchRowBasic;
    campaignResponseJoin?: PlatformCommon.CampaignSearchRowBasic;
    chargeJoin?: PlatformCommon.ChargeSearchRowBasic;
    departmentJoin?: PlatformCommon.DepartmentSearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    hcmJobJoin?: PlatformCommon.HcmJobSearchRowBasic;
    locationJoin?: PlatformCommon.LocationSearchRowBasic;
    managedJobJoin?: PlatformCommon.JobSearchRowBasic;
    messagesJoin?: PlatformCommon.MessageSearchRowBasic;
    messagesFromJoin?: PlatformCommon.MessageSearchRowBasic;
    messagesToJoin?: PlatformCommon.MessageSearchRowBasic;
    resourceAllocationJoin?: PlatformCommon.ResourceAllocationSearchRowBasic;
    subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
    timeJoin?: PlatformCommon.TimeBillSearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class EmployeeSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.EmployeeSearchRowBasic;
    campaignResponseJoin?: PlatformCommon.CampaignSearchRowBasic;
    chargeJoin?: PlatformCommon.ChargeSearchRowBasic;
    departmentJoin?: PlatformCommon.DepartmentSearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    hcmJobJoin?: PlatformCommon.HcmJobSearchRowBasic;
    locationJoin?: PlatformCommon.LocationSearchRowBasic;
    managedJobJoin?: PlatformCommon.JobSearchRowBasic;
    messagesJoin?: PlatformCommon.MessageSearchRowBasic;
    messagesFromJoin?: PlatformCommon.MessageSearchRowBasic;
    messagesToJoin?: PlatformCommon.MessageSearchRowBasic;
    resourceAllocationJoin?: PlatformCommon.ResourceAllocationSearchRowBasic;
    subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
    timeJoin?: PlatformCommon.TimeBillSearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: EmployeeSearchRowProps);
}
export declare type EmployeeRatesProps = {
    entityCurrency?: PlatformCore.RecordRef;
    rate?: number;
};
export declare class EmployeeRates extends SoapMappingBase {
    entityCurrency?: PlatformCore.RecordRef;
    rate?: number;
    constructor(props: EmployeeRatesProps);
}
export declare type EmployeeEarningProps = {
    payrollItem?: PlatformCore.RecordRef;
    payRate?: string;
    primaryEarning?: boolean;
    defaultHours?: number;
    inactive?: boolean;
    defaultEarning?: boolean;
    effectiveDate?: string;
    expirationDate?: string;
};
export declare class EmployeeEarning extends SoapMappingBase {
    payrollItem?: PlatformCore.RecordRef;
    payRate?: string;
    primaryEarning?: boolean;
    defaultHours?: number;
    inactive?: boolean;
    defaultEarning?: boolean;
    effectiveDate?: string;
    expirationDate?: string;
    constructor(props: EmployeeEarningProps);
}
export declare type PayrollItemSearchAdvancedProps = {
    criteria?: PayrollItemSearch;
    columns?: PayrollItemSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class PayrollItemSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: PayrollItemSearch;
    columns?: PayrollItemSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: PayrollItemSearchAdvancedProps);
}
export declare type EmployeeCompanyContributionProps = {
    payrollItem?: PlatformCore.RecordRef;
    rate?: string;
    limit?: number;
    inactive?: boolean;
    effectiveDate?: string;
    expirationDate?: string;
};
export declare class EmployeeCompanyContribution extends SoapMappingBase {
    payrollItem?: PlatformCore.RecordRef;
    rate?: string;
    limit?: number;
    inactive?: boolean;
    effectiveDate?: string;
    expirationDate?: string;
    constructor(props: EmployeeCompanyContributionProps);
}
export declare type EmployeeSearchAdvancedProps = {
    criteria?: EmployeeSearch;
    columns?: EmployeeSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class EmployeeSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: EmployeeSearch;
    columns?: EmployeeSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: EmployeeSearchAdvancedProps);
}
export declare type EmployeeRolesProps = {
    selectedRole?: PlatformCore.RecordRef;
};
export declare class EmployeeRoles extends SoapMappingBase {
    selectedRole?: PlatformCore.RecordRef;
    constructor(props: EmployeeRolesProps);
}
export declare type EmployeeHrEducationListProps = {
    employeeHrEducation?: EmployeeHrEducation[];
    replaceAll?: boolean;
};
export declare class EmployeeHrEducationList extends SoapMappingBase {
    employeeHrEducation?: EmployeeHrEducation[];
    replaceAll?: boolean;
    constructor(props: EmployeeHrEducationListProps);
}
export declare type EmployeeSearchProps = {
    basic?: PlatformCommon.EmployeeSearchBasic;
    campaignResponseJoin?: PlatformCommon.CampaignSearchBasic;
    chargeJoin?: PlatformCommon.ChargeSearchBasic;
    departmentJoin?: PlatformCommon.DepartmentSearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    hcmJobJoin?: PlatformCommon.HcmJobSearchBasic;
    locationJoin?: PlatformCommon.LocationSearchBasic;
    managedJobJoin?: PlatformCommon.JobSearchBasic;
    messagesJoin?: PlatformCommon.MessageSearchBasic;
    messagesFromJoin?: PlatformCommon.MessageSearchBasic;
    messagesToJoin?: PlatformCommon.MessageSearchBasic;
    resourceAllocationJoin?: PlatformCommon.ResourceAllocationSearchBasic;
    subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
    timeJoin?: PlatformCommon.TimeBillSearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class EmployeeSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.EmployeeSearchBasic;
    campaignResponseJoin?: PlatformCommon.CampaignSearchBasic;
    chargeJoin?: PlatformCommon.ChargeSearchBasic;
    departmentJoin?: PlatformCommon.DepartmentSearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    hcmJobJoin?: PlatformCommon.HcmJobSearchBasic;
    locationJoin?: PlatformCommon.LocationSearchBasic;
    managedJobJoin?: PlatformCommon.JobSearchBasic;
    messagesJoin?: PlatformCommon.MessageSearchBasic;
    messagesFromJoin?: PlatformCommon.MessageSearchBasic;
    messagesToJoin?: PlatformCommon.MessageSearchBasic;
    resourceAllocationJoin?: PlatformCommon.ResourceAllocationSearchBasic;
    subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
    timeJoin?: PlatformCommon.TimeBillSearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: EmployeeSearchProps);
}
export declare type EmployeeAddressbookListProps = {
    addressbook?: EmployeeAddressbook[];
    replaceAll?: boolean;
};
export declare class EmployeeAddressbookList extends SoapMappingBase {
    addressbook?: EmployeeAddressbook[];
    replaceAll?: boolean;
    constructor(props: EmployeeAddressbookListProps);
}
export declare type PayrollItemSearchRowProps = {
    basic?: PlatformCommon.PayrollItemSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class PayrollItemSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.PayrollItemSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: PayrollItemSearchRowProps);
}
export declare type EmployeeAccruedTimeProps = {
    payrollItem?: PlatformCore.RecordRef;
    accruedHours?: number;
    accrualRate?: number;
    monetaryRate?: number;
    resetAccruedHoursAtYearEnd?: boolean;
    accrualMethod?: ListsEmployeesTypes.EmployeeAccruedTimeAccrualMethod;
    maximumAccruedHours?: number;
    inactive?: boolean;
    effectiveDate?: string;
    expirationDate?: string;
};
export declare class EmployeeAccruedTime extends SoapMappingBase {
    payrollItem?: PlatformCore.RecordRef;
    accruedHours?: number;
    accrualRate?: number;
    monetaryRate?: number;
    resetAccruedHoursAtYearEnd?: boolean;
    accrualMethod?: ListsEmployeesTypes.EmployeeAccruedTimeAccrualMethod;
    maximumAccruedHours?: number;
    inactive?: boolean;
    effectiveDate?: string;
    expirationDate?: string;
    constructor(props: EmployeeAccruedTimeProps);
}
export declare type EmployeeEmergencyContactProps = {
    id?: number;
    contact?: string;
    relationship?: string;
    address?: string;
    phone?: string;
};
export declare class EmployeeEmergencyContact extends SoapMappingBase {
    id?: number;
    contact?: string;
    relationship?: string;
    address?: string;
    phone?: string;
    constructor(props: EmployeeEmergencyContactProps);
}
export declare type HcmJobProps = {
    title?: string;
    isInactive?: boolean;
    employmentCategory?: PlatformCore.RecordRef;
    jobId?: string;
    description?: string;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class HcmJob extends PlatformCore.Record {
    title?: string;
    isInactive?: boolean;
    employmentCategory?: PlatformCore.RecordRef;
    jobId?: string;
    description?: string;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: HcmJobProps);
}
export declare type EmployeeCompanyContributionListProps = {
    employeeCompanyContribution?: EmployeeCompanyContribution[];
    replaceAll?: boolean;
};
export declare class EmployeeCompanyContributionList extends SoapMappingBase {
    employeeCompanyContribution?: EmployeeCompanyContribution[];
    replaceAll?: boolean;
    constructor(props: EmployeeCompanyContributionListProps);
}
export declare type EmployeeDirectDepositListProps = {
    employeeDirectDeposit?: EmployeeDirectDeposit[];
    replaceAll?: boolean;
};
export declare class EmployeeDirectDepositList extends SoapMappingBase {
    employeeDirectDeposit?: EmployeeDirectDeposit[];
    replaceAll?: boolean;
    constructor(props: EmployeeDirectDepositListProps);
}
export declare type EmployeeHcmPositionProps = {
    position?: PlatformCore.RecordRef;
    primaryPosition?: boolean;
    positionId?: string;
    positionAllocation?: number;
    fullTimeEquivalent?: number;
    employmentCategory?: PlatformCore.RecordRef;
    reportsTo?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
};
export declare class EmployeeHcmPosition extends SoapMappingBase {
    position?: PlatformCore.RecordRef;
    primaryPosition?: boolean;
    positionId?: string;
    positionAllocation?: number;
    fullTimeEquivalent?: number;
    employmentCategory?: PlatformCore.RecordRef;
    reportsTo?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    constructor(props: EmployeeHcmPositionProps);
}
export declare type EmployeeDeductionProps = {
    payrollItem?: PlatformCore.RecordRef;
    rate?: string;
    limit?: number;
    inactive?: boolean;
    effectiveDate?: string;
    expirationDate?: string;
};
export declare class EmployeeDeduction extends SoapMappingBase {
    payrollItem?: PlatformCore.RecordRef;
    rate?: string;
    limit?: number;
    inactive?: boolean;
    effectiveDate?: string;
    expirationDate?: string;
    constructor(props: EmployeeDeductionProps);
}
export declare type EmployeeSubscriptionsProps = {
    subscribed?: string;
    subscription?: string;
    lastModifiedDate?: string;
};
export declare class EmployeeSubscriptions extends SoapMappingBase {
    subscribed?: string;
    subscription?: string;
    lastModifiedDate?: string;
    constructor(props: EmployeeSubscriptionsProps);
}
export declare type EmployeeSubscriptionsListProps = {
    subscriptions?: EmployeeSubscriptions[];
    replaceAll?: boolean;
};
export declare class EmployeeSubscriptionsList extends SoapMappingBase {
    subscriptions?: EmployeeSubscriptions[];
    replaceAll?: boolean;
    constructor(props: EmployeeSubscriptionsListProps);
}
export declare type EmployeeHrEducationProps = {
    education?: PlatformCore.RecordRef;
    degree?: string;
    degreeDate?: string;
};
export declare class EmployeeHrEducation extends SoapMappingBase {
    education?: PlatformCore.RecordRef;
    degree?: string;
    degreeDate?: string;
    constructor(props: EmployeeHrEducationProps);
}
export declare type HcmJobSearchAdvancedProps = {
    criteria?: HcmJobSearch;
    columns?: HcmJobSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class HcmJobSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: HcmJobSearch;
    columns?: HcmJobSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: HcmJobSearchAdvancedProps);
}
export declare type EmployeeCurrencyProps = {
    currency?: PlatformCore.RecordRef;
};
export declare class EmployeeCurrency extends SoapMappingBase {
    currency?: PlatformCore.RecordRef;
    constructor(props: EmployeeCurrencyProps);
}
export declare type EmployeeRatesListProps = {
    employeeRates?: EmployeeRates[];
    replaceAll?: boolean;
};
export declare class EmployeeRatesList extends SoapMappingBase {
    employeeRates?: EmployeeRates[];
    replaceAll?: boolean;
    constructor(props: EmployeeRatesListProps);
}
export declare type PayrollItemProps = {
    subsidiary?: PlatformCore.RecordRef;
    itemType?: PlatformCore.RecordRef;
    name?: string;
    vendor?: PlatformCore.RecordRef;
    expenseAccount?: PlatformCore.RecordRef;
    liabilityAccount?: PlatformCore.RecordRef;
    employeePaid?: boolean;
    accountCategory?: ListsEmployeesTypes.PayrollItemAccountCategory;
    inactive?: boolean;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class PayrollItem extends PlatformCore.Record {
    subsidiary?: PlatformCore.RecordRef;
    itemType?: PlatformCore.RecordRef;
    name?: string;
    vendor?: PlatformCore.RecordRef;
    expenseAccount?: PlatformCore.RecordRef;
    liabilityAccount?: PlatformCore.RecordRef;
    employeePaid?: boolean;
    accountCategory?: ListsEmployeesTypes.PayrollItemAccountCategory;
    inactive?: boolean;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: PayrollItemProps);
}
export declare type HcmJobSearchProps = {
    basic?: PlatformCommon.HcmJobSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class HcmJobSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.HcmJobSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: HcmJobSearchProps);
}
export declare type EmployeeAccruedTimeListProps = {
    employeeAccruedTime?: EmployeeAccruedTime[];
    replaceAll?: boolean;
};
export declare class EmployeeAccruedTimeList extends SoapMappingBase {
    employeeAccruedTime?: EmployeeAccruedTime[];
    replaceAll?: boolean;
    constructor(props: EmployeeAccruedTimeListProps);
}
export declare type EmployeeDeductionListProps = {
    employeeDeduction?: EmployeeDeduction[];
    replaceAll?: boolean;
};
export declare class EmployeeDeductionList extends SoapMappingBase {
    employeeDeduction?: EmployeeDeduction[];
    replaceAll?: boolean;
    constructor(props: EmployeeDeductionListProps);
}
export declare type PayrollItemSearchProps = {
    basic?: PlatformCommon.PayrollItemSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class PayrollItemSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.PayrollItemSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: PayrollItemSearchProps);
}
export declare type EmployeeAddressbookProps = {
    defaultShipping?: boolean;
    defaultBilling?: boolean;
    label?: string;
    addressbookAddress?: PlatformCommon.Address;
    internalId?: string;
};
export declare class EmployeeAddressbook extends SoapMappingBase {
    defaultShipping?: boolean;
    defaultBilling?: boolean;
    label?: string;
    addressbookAddress?: PlatformCommon.Address;
    internalId?: string;
    constructor(props: EmployeeAddressbookProps);
}
export declare type EmployeeCurrencyListProps = {
    employeeCurrency?: EmployeeCurrency[];
    replaceAll?: boolean;
};
export declare class EmployeeCurrencyList extends SoapMappingBase {
    employeeCurrency?: EmployeeCurrency[];
    replaceAll?: boolean;
    constructor(props: EmployeeCurrencyListProps);
}
export declare type EmployeeEarningListProps = {
    employeeEarning?: EmployeeEarning[];
    replaceAll?: boolean;
};
export declare class EmployeeEarningList extends SoapMappingBase {
    employeeEarning?: EmployeeEarning[];
    replaceAll?: boolean;
    constructor(props: EmployeeEarningListProps);
}
export declare type HcmJobSearchRowProps = {
    basic?: PlatformCommon.HcmJobSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class HcmJobSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.HcmJobSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: HcmJobSearchRowProps);
}
export declare type EmployeeEmergencyContactListProps = {
    employeeEmergencyContact?: EmployeeEmergencyContact[];
    replaceAll?: boolean;
};
export declare class EmployeeEmergencyContactList extends SoapMappingBase {
    employeeEmergencyContact?: EmployeeEmergencyContact[];
    replaceAll?: boolean;
    constructor(props: EmployeeEmergencyContactListProps);
}
export declare type EmployeeHcmPositionListProps = {
    employeeHcmPosition?: EmployeeHcmPosition[];
    replaceAll?: boolean;
};
export declare class EmployeeHcmPositionList extends SoapMappingBase {
    employeeHcmPosition?: EmployeeHcmPosition[];
    replaceAll?: boolean;
    constructor(props: EmployeeHcmPositionListProps);
}
