import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as PlatformCommonTypes from "./platform_common_types";
import * as ListsEmployeesTypes from "./lists_employees_types";
import { SoapMappingBase, propsWithMappingsName } from "../../soap-types";
const MAPPINGS_NAME = "com_netsuite_webservices_lists_employees_2019_2";
export type EmployeeRolesListProps = {
  roles?: EmployeeRoles[];
  replaceAll?: boolean;
};

export class EmployeeRolesList extends SoapMappingBase {
  roles?: EmployeeRoles[];
  replaceAll?: boolean;
  constructor(props: EmployeeRolesListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.roles = props.roles;
    this.replaceAll = props.replaceAll;
  }
}

export type EmployeeProps = {
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

export class Employee extends PlatformCore.Record {
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
  constructor(props: EmployeeProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.customForm = props.customForm;
    this.template = props.template;
    this.entityId = props.entityId;
    this.salutation = props.salutation;
    this.firstName = props.firstName;
    this.middleName = props.middleName;
    this.lastName = props.lastName;
    this.altName = props.altName;
    this.phone = props.phone;
    this.fax = props.fax;
    this.email = props.email;
    this.defaultAddress = props.defaultAddress;
    this.isInactive = props.isInactive;
    this.phoneticName = props.phoneticName;
    this.lastModifiedDate = props.lastModifiedDate;
    this.dateCreated = props.dateCreated;
    this.initials = props.initials;
    this.officePhone = props.officePhone;
    this.homePhone = props.homePhone;
    this.mobilePhone = props.mobilePhone;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiary = props.subsidiary;
    this.billingClass = props.billingClass;
    this.accountNumber = props.accountNumber;
    this.compensationCurrency = props.compensationCurrency;
    this.baseWageType = props.baseWageType;
    this.baseWage = props.baseWage;
    this.comments = props.comments;
    this.globalSubscriptionStatus = props.globalSubscriptionStatus;
    this.image = props.image;
    this.payFrequency = props.payFrequency;
    this.lastPaidDate = props.lastPaidDate;
    this.currency = props.currency;
    this.useTimeData = props.useTimeData;
    this.usePerquest = props.usePerquest;
    this.workplace = props.workplace;
    this.adpId = props.adpId;
    this.directDeposit = props.directDeposit;
    this.expenseLimit = props.expenseLimit;
    this.purchaseOrderLimit = props.purchaseOrderLimit;
    this.purchaseOrderApprovalLimit = props.purchaseOrderApprovalLimit;
    this.socialSecurityNumber = props.socialSecurityNumber;
    this.supervisor = props.supervisor;
    this.approver = props.approver;
    this.approvalLimit = props.approvalLimit;
    this.timeApprover = props.timeApprover;
    this.employeeType = props.employeeType;
    this.isSalesRep = props.isSalesRep;
    this.salesRole = props.salesRole;
    this.isSupportRep = props.isSupportRep;
    this.isJobResource = props.isJobResource;
    this.laborCost = props.laborCost;
    this.birthDate = props.birthDate;
    this.hireDate = props.hireDate;
    this.releaseDate = props.releaseDate;
    this.terminationDetails = props.terminationDetails;
    this.terminationReason = props.terminationReason;
    this.terminationRegretted = props.terminationRegretted;
    this.terminationCategory = props.terminationCategory;
    this.timeOffPlan = props.timeOffPlan;
    this.lastReviewDate = props.lastReviewDate;
    this.nextReviewDate = props.nextReviewDate;
    this.title = props.title;
    this.employeeStatus = props.employeeStatus;
    this.jobDescription = props.jobDescription;
    this.workAssignment = props.workAssignment;
    this.job = props.job;
    this.maritalStatus = props.maritalStatus;
    this.ethnicity = props.ethnicity;
    this.gender = props.gender;
    this.purchaseOrderApprover = props.purchaseOrderApprover;
    this.workCalendar = props.workCalendar;
    this.giveAccess = props.giveAccess;
    this.defaultExpenseReportCurrency = props.defaultExpenseReportCurrency;
    this.concurrentWebServicesUser = props.concurrentWebServicesUser;
    this.sendEmail = props.sendEmail;
    this.hasOfflineAccess = props.hasOfflineAccess;
    this.password = props.password;
    this.password2 = props.password2;
    this.requirePwdChange = props.requirePwdChange;
    this.inheritIPRules = props.inheritIPRules;
    this.ipAddressRule = props.ipAddressRule;
    this.startDateTimeOffCalc = props.startDateTimeOffCalc;
    this.commissionPaymentPreference = props.commissionPaymentPreference;
    this.billPay = props.billPay;
    this.defaultAcctCorpCardExp = props.defaultAcctCorpCardExp;
    this.eligibleForCommission = props.eligibleForCommission;
    this.subscriptionsList = props.subscriptionsList;
    this.ratesList = props.ratesList;
    this.addressbookList = props.addressbookList;
    this.rolesList = props.rolesList;
    this.hrEducationList = props.hrEducationList;
    this.accruedTimeList = props.accruedTimeList;
    this.directDepositList = props.directDepositList;
    this.currencyList = props.currencyList;
    this.companyContributionList = props.companyContributionList;
    this.earningList = props.earningList;
    this.emergencyContactList = props.emergencyContactList;
    this.hcmPositionList = props.hcmPositionList;
    this.deductionList = props.deductionList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type EmployeeDirectDepositProps = {
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

export class EmployeeDirectDeposit extends SoapMappingBase {
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
  constructor(props: EmployeeDirectDepositProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.id = props.id;
    this.netAccount = props.netAccount;
    this.savingsAccount = props.savingsAccount;
    this.accountPrenoted = props.accountPrenoted;
    this.accountStatus = props.accountStatus;
    this.bankName = props.bankName;
    this.bankId = props.bankId;
    this.bankNumber = props.bankNumber;
    this.bankRoutingNumber = props.bankRoutingNumber;
    this.bankAccountNumber = props.bankAccountNumber;
    this.amount = props.amount;
    this.inactive = props.inactive;
  }
}

export type EmployeeSearchRowProps = {
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

export class EmployeeSearchRow extends PlatformCore.SearchRow {
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
  constructor(props: EmployeeSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.campaignResponseJoin = props.campaignResponseJoin;
    this.chargeJoin = props.chargeJoin;
    this.departmentJoin = props.departmentJoin;
    this.fileJoin = props.fileJoin;
    this.hcmJobJoin = props.hcmJobJoin;
    this.locationJoin = props.locationJoin;
    this.managedJobJoin = props.managedJobJoin;
    this.messagesJoin = props.messagesJoin;
    this.messagesFromJoin = props.messagesFromJoin;
    this.messagesToJoin = props.messagesToJoin;
    this.resourceAllocationJoin = props.resourceAllocationJoin;
    this.subsidiaryJoin = props.subsidiaryJoin;
    this.timeJoin = props.timeJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type EmployeeRatesProps = {
  entityCurrency?: PlatformCore.RecordRef;
  rate?: number;
};

export class EmployeeRates extends SoapMappingBase {
  entityCurrency?: PlatformCore.RecordRef;
  rate?: number;
  constructor(props: EmployeeRatesProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.entityCurrency = props.entityCurrency;
    this.rate = props.rate;
  }
}

export type EmployeeEarningProps = {
  payrollItem?: PlatformCore.RecordRef;
  payRate?: string;
  primaryEarning?: boolean;
  defaultHours?: number;
  inactive?: boolean;
  defaultEarning?: boolean;
  effectiveDate?: string;
  expirationDate?: string;
};

export class EmployeeEarning extends SoapMappingBase {
  payrollItem?: PlatformCore.RecordRef;
  payRate?: string;
  primaryEarning?: boolean;
  defaultHours?: number;
  inactive?: boolean;
  defaultEarning?: boolean;
  effectiveDate?: string;
  expirationDate?: string;
  constructor(props: EmployeeEarningProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.payrollItem = props.payrollItem;
    this.payRate = props.payRate;
    this.primaryEarning = props.primaryEarning;
    this.defaultHours = props.defaultHours;
    this.inactive = props.inactive;
    this.defaultEarning = props.defaultEarning;
    this.effectiveDate = props.effectiveDate;
    this.expirationDate = props.expirationDate;
  }
}

export type PayrollItemSearchAdvancedProps = {
  criteria?: PayrollItemSearch;
  columns?: PayrollItemSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class PayrollItemSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PayrollItemSearch;
  columns?: PayrollItemSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: PayrollItemSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type EmployeeCompanyContributionProps = {
  payrollItem?: PlatformCore.RecordRef;
  rate?: string;
  limit?: number;
  inactive?: boolean;
  effectiveDate?: string;
  expirationDate?: string;
};

export class EmployeeCompanyContribution extends SoapMappingBase {
  payrollItem?: PlatformCore.RecordRef;
  rate?: string;
  limit?: number;
  inactive?: boolean;
  effectiveDate?: string;
  expirationDate?: string;
  constructor(props: EmployeeCompanyContributionProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.payrollItem = props.payrollItem;
    this.rate = props.rate;
    this.limit = props.limit;
    this.inactive = props.inactive;
    this.effectiveDate = props.effectiveDate;
    this.expirationDate = props.expirationDate;
  }
}

export type EmployeeSearchAdvancedProps = {
  criteria?: EmployeeSearch;
  columns?: EmployeeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class EmployeeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: EmployeeSearch;
  columns?: EmployeeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: EmployeeSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type EmployeeRolesProps = {
  selectedRole?: PlatformCore.RecordRef;
};

export class EmployeeRoles extends SoapMappingBase {
  selectedRole?: PlatformCore.RecordRef;
  constructor(props: EmployeeRolesProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.selectedRole = props.selectedRole;
  }
}

export type EmployeeHrEducationListProps = {
  employeeHrEducation?: EmployeeHrEducation[];
  replaceAll?: boolean;
};

export class EmployeeHrEducationList extends SoapMappingBase {
  employeeHrEducation?: EmployeeHrEducation[];
  replaceAll?: boolean;
  constructor(props: EmployeeHrEducationListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.employeeHrEducation = props.employeeHrEducation;
    this.replaceAll = props.replaceAll;
  }
}

export type EmployeeSearchProps = {
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

export class EmployeeSearch extends PlatformCore.SearchRecord {
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
  constructor(props: EmployeeSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.campaignResponseJoin = props.campaignResponseJoin;
    this.chargeJoin = props.chargeJoin;
    this.departmentJoin = props.departmentJoin;
    this.fileJoin = props.fileJoin;
    this.hcmJobJoin = props.hcmJobJoin;
    this.locationJoin = props.locationJoin;
    this.managedJobJoin = props.managedJobJoin;
    this.messagesJoin = props.messagesJoin;
    this.messagesFromJoin = props.messagesFromJoin;
    this.messagesToJoin = props.messagesToJoin;
    this.resourceAllocationJoin = props.resourceAllocationJoin;
    this.subsidiaryJoin = props.subsidiaryJoin;
    this.timeJoin = props.timeJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type EmployeeAddressbookListProps = {
  addressbook?: EmployeeAddressbook[];
  replaceAll?: boolean;
};

export class EmployeeAddressbookList extends SoapMappingBase {
  addressbook?: EmployeeAddressbook[];
  replaceAll?: boolean;
  constructor(props: EmployeeAddressbookListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.addressbook = props.addressbook;
    this.replaceAll = props.replaceAll;
  }
}

export type PayrollItemSearchRowProps = {
  basic?: PlatformCommon.PayrollItemSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class PayrollItemSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.PayrollItemSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: PayrollItemSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type EmployeeAccruedTimeProps = {
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

export class EmployeeAccruedTime extends SoapMappingBase {
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
  constructor(props: EmployeeAccruedTimeProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.payrollItem = props.payrollItem;
    this.accruedHours = props.accruedHours;
    this.accrualRate = props.accrualRate;
    this.monetaryRate = props.monetaryRate;
    this.resetAccruedHoursAtYearEnd = props.resetAccruedHoursAtYearEnd;
    this.accrualMethod = props.accrualMethod;
    this.maximumAccruedHours = props.maximumAccruedHours;
    this.inactive = props.inactive;
    this.effectiveDate = props.effectiveDate;
    this.expirationDate = props.expirationDate;
  }
}

export type EmployeeEmergencyContactProps = {
  id?: number;
  contact?: string;
  relationship?: string;
  address?: string;
  phone?: string;
};

export class EmployeeEmergencyContact extends SoapMappingBase {
  id?: number;
  contact?: string;
  relationship?: string;
  address?: string;
  phone?: string;
  constructor(props: EmployeeEmergencyContactProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.id = props.id;
    this.contact = props.contact;
    this.relationship = props.relationship;
    this.address = props.address;
    this.phone = props.phone;
  }
}

export type HcmJobProps = {
  title?: string;
  isInactive?: boolean;
  employmentCategory?: PlatformCore.RecordRef;
  jobId?: string;
  description?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class HcmJob extends PlatformCore.Record {
  title?: string;
  isInactive?: boolean;
  employmentCategory?: PlatformCore.RecordRef;
  jobId?: string;
  description?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: HcmJobProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.title = props.title;
    this.isInactive = props.isInactive;
    this.employmentCategory = props.employmentCategory;
    this.jobId = props.jobId;
    this.description = props.description;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type EmployeeCompanyContributionListProps = {
  employeeCompanyContribution?: EmployeeCompanyContribution[];
  replaceAll?: boolean;
};

export class EmployeeCompanyContributionList extends SoapMappingBase {
  employeeCompanyContribution?: EmployeeCompanyContribution[];
  replaceAll?: boolean;
  constructor(props: EmployeeCompanyContributionListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.employeeCompanyContribution = props.employeeCompanyContribution;
    this.replaceAll = props.replaceAll;
  }
}

export type EmployeeDirectDepositListProps = {
  employeeDirectDeposit?: EmployeeDirectDeposit[];
  replaceAll?: boolean;
};

export class EmployeeDirectDepositList extends SoapMappingBase {
  employeeDirectDeposit?: EmployeeDirectDeposit[];
  replaceAll?: boolean;
  constructor(props: EmployeeDirectDepositListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.employeeDirectDeposit = props.employeeDirectDeposit;
    this.replaceAll = props.replaceAll;
  }
}

export type EmployeeHcmPositionProps = {
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

export class EmployeeHcmPosition extends SoapMappingBase {
  position?: PlatformCore.RecordRef;
  primaryPosition?: boolean;
  positionId?: string;
  positionAllocation?: number;
  fullTimeEquivalent?: number;
  employmentCategory?: PlatformCore.RecordRef;
  reportsTo?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  constructor(props: EmployeeHcmPositionProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.position = props.position;
    this.primaryPosition = props.primaryPosition;
    this.positionId = props.positionId;
    this.positionAllocation = props.positionAllocation;
    this.fullTimeEquivalent = props.fullTimeEquivalent;
    this.employmentCategory = props.employmentCategory;
    this.reportsTo = props.reportsTo;
    this.subsidiary = props.subsidiary;
    this.location = props.location;
  }
}

export type EmployeeDeductionProps = {
  payrollItem?: PlatformCore.RecordRef;
  rate?: string;
  limit?: number;
  inactive?: boolean;
  effectiveDate?: string;
  expirationDate?: string;
};

export class EmployeeDeduction extends SoapMappingBase {
  payrollItem?: PlatformCore.RecordRef;
  rate?: string;
  limit?: number;
  inactive?: boolean;
  effectiveDate?: string;
  expirationDate?: string;
  constructor(props: EmployeeDeductionProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.payrollItem = props.payrollItem;
    this.rate = props.rate;
    this.limit = props.limit;
    this.inactive = props.inactive;
    this.effectiveDate = props.effectiveDate;
    this.expirationDate = props.expirationDate;
  }
}

export type EmployeeSubscriptionsProps = {
  subscribed?: string;
  subscription?: string;
  lastModifiedDate?: string;
};

export class EmployeeSubscriptions extends SoapMappingBase {
  subscribed?: string;
  subscription?: string;
  lastModifiedDate?: string;
  constructor(props: EmployeeSubscriptionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.subscribed = props.subscribed;
    this.subscription = props.subscription;
    this.lastModifiedDate = props.lastModifiedDate;
  }
}

export type EmployeeSubscriptionsListProps = {
  subscriptions?: EmployeeSubscriptions[];
  replaceAll?: boolean;
};

export class EmployeeSubscriptionsList extends SoapMappingBase {
  subscriptions?: EmployeeSubscriptions[];
  replaceAll?: boolean;
  constructor(props: EmployeeSubscriptionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.subscriptions = props.subscriptions;
    this.replaceAll = props.replaceAll;
  }
}

export type EmployeeHrEducationProps = {
  education?: PlatformCore.RecordRef;
  degree?: string;
  degreeDate?: string;
};

export class EmployeeHrEducation extends SoapMappingBase {
  education?: PlatformCore.RecordRef;
  degree?: string;
  degreeDate?: string;
  constructor(props: EmployeeHrEducationProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.education = props.education;
    this.degree = props.degree;
    this.degreeDate = props.degreeDate;
  }
}

export type HcmJobSearchAdvancedProps = {
  criteria?: HcmJobSearch;
  columns?: HcmJobSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class HcmJobSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: HcmJobSearch;
  columns?: HcmJobSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: HcmJobSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type EmployeeCurrencyProps = {
  currency?: PlatformCore.RecordRef;
};

export class EmployeeCurrency extends SoapMappingBase {
  currency?: PlatformCore.RecordRef;
  constructor(props: EmployeeCurrencyProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.currency = props.currency;
  }
}

export type EmployeeRatesListProps = {
  employeeRates?: EmployeeRates[];
  replaceAll?: boolean;
};

export class EmployeeRatesList extends SoapMappingBase {
  employeeRates?: EmployeeRates[];
  replaceAll?: boolean;
  constructor(props: EmployeeRatesListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.employeeRates = props.employeeRates;
    this.replaceAll = props.replaceAll;
  }
}

export type PayrollItemProps = {
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

export class PayrollItem extends PlatformCore.Record {
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
  constructor(props: PayrollItemProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.subsidiary = props.subsidiary;
    this.itemType = props.itemType;
    this.name = props.name;
    this.vendor = props.vendor;
    this.expenseAccount = props.expenseAccount;
    this.liabilityAccount = props.liabilityAccount;
    this.employeePaid = props.employeePaid;
    this.accountCategory = props.accountCategory;
    this.inactive = props.inactive;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type HcmJobSearchProps = {
  basic?: PlatformCommon.HcmJobSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class HcmJobSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.HcmJobSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: HcmJobSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.employeeJoin = props.employeeJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type EmployeeAccruedTimeListProps = {
  employeeAccruedTime?: EmployeeAccruedTime[];
  replaceAll?: boolean;
};

export class EmployeeAccruedTimeList extends SoapMappingBase {
  employeeAccruedTime?: EmployeeAccruedTime[];
  replaceAll?: boolean;
  constructor(props: EmployeeAccruedTimeListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.employeeAccruedTime = props.employeeAccruedTime;
    this.replaceAll = props.replaceAll;
  }
}

export type EmployeeDeductionListProps = {
  employeeDeduction?: EmployeeDeduction[];
  replaceAll?: boolean;
};

export class EmployeeDeductionList extends SoapMappingBase {
  employeeDeduction?: EmployeeDeduction[];
  replaceAll?: boolean;
  constructor(props: EmployeeDeductionListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.employeeDeduction = props.employeeDeduction;
    this.replaceAll = props.replaceAll;
  }
}

export type PayrollItemSearchProps = {
  basic?: PlatformCommon.PayrollItemSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class PayrollItemSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.PayrollItemSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: PayrollItemSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type EmployeeAddressbookProps = {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  label?: string;
  addressbookAddress?: PlatformCommon.Address;
  internalId?: string;
};

export class EmployeeAddressbook extends SoapMappingBase {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  label?: string;
  addressbookAddress?: PlatformCommon.Address;
  internalId?: string;
  constructor(props: EmployeeAddressbookProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.defaultShipping = props.defaultShipping;
    this.defaultBilling = props.defaultBilling;
    this.label = props.label;
    this.addressbookAddress = props.addressbookAddress;
    this.internalId = props.internalId;
  }
}

export type EmployeeCurrencyListProps = {
  employeeCurrency?: EmployeeCurrency[];
  replaceAll?: boolean;
};

export class EmployeeCurrencyList extends SoapMappingBase {
  employeeCurrency?: EmployeeCurrency[];
  replaceAll?: boolean;
  constructor(props: EmployeeCurrencyListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.employeeCurrency = props.employeeCurrency;
    this.replaceAll = props.replaceAll;
  }
}

export type EmployeeEarningListProps = {
  employeeEarning?: EmployeeEarning[];
  replaceAll?: boolean;
};

export class EmployeeEarningList extends SoapMappingBase {
  employeeEarning?: EmployeeEarning[];
  replaceAll?: boolean;
  constructor(props: EmployeeEarningListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.employeeEarning = props.employeeEarning;
    this.replaceAll = props.replaceAll;
  }
}

export type HcmJobSearchRowProps = {
  basic?: PlatformCommon.HcmJobSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class HcmJobSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.HcmJobSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: HcmJobSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.employeeJoin = props.employeeJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type EmployeeEmergencyContactListProps = {
  employeeEmergencyContact?: EmployeeEmergencyContact[];
  replaceAll?: boolean;
};

export class EmployeeEmergencyContactList extends SoapMappingBase {
  employeeEmergencyContact?: EmployeeEmergencyContact[];
  replaceAll?: boolean;
  constructor(props: EmployeeEmergencyContactListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.employeeEmergencyContact = props.employeeEmergencyContact;
    this.replaceAll = props.replaceAll;
  }
}

export type EmployeeHcmPositionListProps = {
  employeeHcmPosition?: EmployeeHcmPosition[];
  replaceAll?: boolean;
};

export class EmployeeHcmPositionList extends SoapMappingBase {
  employeeHcmPosition?: EmployeeHcmPosition[];
  replaceAll?: boolean;
  constructor(props: EmployeeHcmPositionListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.employeeHcmPosition = props.employeeHcmPosition;
    this.replaceAll = props.replaceAll;
  }
}
