import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as PlatformCommonTypes from "./platform_common_types";
import * as ListsEmployeesTypes from "./lists_employees_types";

export class EmployeeRolesList {
  roles?: EmployeeRoles[];
  replaceAll?: boolean;
  constructor(props: EmployeeRolesList) {
    this.roles = props.roles;
    this.replaceAll = props.replaceAll;
  }
}

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
  constructor(props: Employee) {
    super(props);
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

export class EmployeeDirectDeposit {
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
  constructor(props: EmployeeDirectDeposit) {
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
  constructor(props: EmployeeSearchRow) {
    super();
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

export class EmployeeRates {
  entityCurrency?: PlatformCore.RecordRef;
  rate?: number;
  constructor(props: EmployeeRates) {
    this.entityCurrency = props.entityCurrency;
    this.rate = props.rate;
  }
}

export class EmployeeEarning {
  payrollItem?: PlatformCore.RecordRef;
  payRate?: string;
  primaryEarning?: boolean;
  defaultHours?: number;
  inactive?: boolean;
  defaultEarning?: boolean;
  effectiveDate?: string;
  expirationDate?: string;
  constructor(props: EmployeeEarning) {
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

export class PayrollItemSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PayrollItemSearch;
  columns?: PayrollItemSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: PayrollItemSearchAdvanced) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class EmployeeCompanyContribution {
  payrollItem?: PlatformCore.RecordRef;
  rate?: string;
  limit?: number;
  inactive?: boolean;
  effectiveDate?: string;
  expirationDate?: string;
  constructor(props: EmployeeCompanyContribution) {
    this.payrollItem = props.payrollItem;
    this.rate = props.rate;
    this.limit = props.limit;
    this.inactive = props.inactive;
    this.effectiveDate = props.effectiveDate;
    this.expirationDate = props.expirationDate;
  }
}

export class EmployeeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: EmployeeSearch;
  columns?: EmployeeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: EmployeeSearchAdvanced) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class EmployeeRoles {
  selectedRole?: PlatformCore.RecordRef;
  constructor(props: EmployeeRoles) {
    this.selectedRole = props.selectedRole;
  }
}

export class EmployeeHrEducationList {
  employeeHrEducation?: EmployeeHrEducation[];
  replaceAll?: boolean;
  constructor(props: EmployeeHrEducationList) {
    this.employeeHrEducation = props.employeeHrEducation;
    this.replaceAll = props.replaceAll;
  }
}

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
  constructor(props: EmployeeSearch) {
    super();
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

export class EmployeeAddressbookList {
  addressbook?: EmployeeAddressbook[];
  replaceAll?: boolean;
  constructor(props: EmployeeAddressbookList) {
    this.addressbook = props.addressbook;
    this.replaceAll = props.replaceAll;
  }
}

export class PayrollItemSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.PayrollItemSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: PayrollItemSearchRow) {
    super();
    this.basic = props.basic;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class EmployeeAccruedTime {
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
  constructor(props: EmployeeAccruedTime) {
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

export class EmployeeEmergencyContact {
  id?: number;
  contact?: string;
  relationship?: string;
  address?: string;
  phone?: string;
  constructor(props: EmployeeEmergencyContact) {
    this.id = props.id;
    this.contact = props.contact;
    this.relationship = props.relationship;
    this.address = props.address;
    this.phone = props.phone;
  }
}

export class HcmJob extends PlatformCore.Record {
  title?: string;
  isInactive?: boolean;
  employmentCategory?: PlatformCore.RecordRef;
  jobId?: string;
  description?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: HcmJob) {
    super(props);
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

export class EmployeeCompanyContributionList {
  employeeCompanyContribution?: EmployeeCompanyContribution[];
  replaceAll?: boolean;
  constructor(props: EmployeeCompanyContributionList) {
    this.employeeCompanyContribution = props.employeeCompanyContribution;
    this.replaceAll = props.replaceAll;
  }
}

export class EmployeeDirectDepositList {
  employeeDirectDeposit?: EmployeeDirectDeposit[];
  replaceAll?: boolean;
  constructor(props: EmployeeDirectDepositList) {
    this.employeeDirectDeposit = props.employeeDirectDeposit;
    this.replaceAll = props.replaceAll;
  }
}

export class EmployeeHcmPosition {
  position?: PlatformCore.RecordRef;
  primaryPosition?: boolean;
  positionId?: string;
  positionAllocation?: number;
  fullTimeEquivalent?: number;
  employmentCategory?: PlatformCore.RecordRef;
  reportsTo?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  constructor(props: EmployeeHcmPosition) {
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

export class EmployeeDeduction {
  payrollItem?: PlatformCore.RecordRef;
  rate?: string;
  limit?: number;
  inactive?: boolean;
  effectiveDate?: string;
  expirationDate?: string;
  constructor(props: EmployeeDeduction) {
    this.payrollItem = props.payrollItem;
    this.rate = props.rate;
    this.limit = props.limit;
    this.inactive = props.inactive;
    this.effectiveDate = props.effectiveDate;
    this.expirationDate = props.expirationDate;
  }
}

export class EmployeeSubscriptions {
  subscribed?: string;
  subscription?: string;
  lastModifiedDate?: string;
  constructor(props: EmployeeSubscriptions) {
    this.subscribed = props.subscribed;
    this.subscription = props.subscription;
    this.lastModifiedDate = props.lastModifiedDate;
  }
}

export class EmployeeSubscriptionsList {
  subscriptions?: EmployeeSubscriptions[];
  replaceAll?: boolean;
  constructor(props: EmployeeSubscriptionsList) {
    this.subscriptions = props.subscriptions;
    this.replaceAll = props.replaceAll;
  }
}

export class EmployeeHrEducation {
  education?: PlatformCore.RecordRef;
  degree?: string;
  degreeDate?: string;
  constructor(props: EmployeeHrEducation) {
    this.education = props.education;
    this.degree = props.degree;
    this.degreeDate = props.degreeDate;
  }
}

export class HcmJobSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: HcmJobSearch;
  columns?: HcmJobSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: HcmJobSearchAdvanced) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class EmployeeCurrency {
  currency?: PlatformCore.RecordRef;
  constructor(props: EmployeeCurrency) {
    this.currency = props.currency;
  }
}

export class EmployeeRatesList {
  employeeRates?: EmployeeRates[];
  replaceAll?: boolean;
  constructor(props: EmployeeRatesList) {
    this.employeeRates = props.employeeRates;
    this.replaceAll = props.replaceAll;
  }
}

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
  constructor(props: PayrollItem) {
    super(props);
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

export class HcmJobSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.HcmJobSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: HcmJobSearch) {
    super();
    this.basic = props.basic;
    this.employeeJoin = props.employeeJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class EmployeeAccruedTimeList {
  employeeAccruedTime?: EmployeeAccruedTime[];
  replaceAll?: boolean;
  constructor(props: EmployeeAccruedTimeList) {
    this.employeeAccruedTime = props.employeeAccruedTime;
    this.replaceAll = props.replaceAll;
  }
}

export class EmployeeDeductionList {
  employeeDeduction?: EmployeeDeduction[];
  replaceAll?: boolean;
  constructor(props: EmployeeDeductionList) {
    this.employeeDeduction = props.employeeDeduction;
    this.replaceAll = props.replaceAll;
  }
}

export class PayrollItemSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.PayrollItemSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: PayrollItemSearch) {
    super();
    this.basic = props.basic;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class EmployeeAddressbook {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  label?: string;
  addressbookAddress?: PlatformCommon.Address;
  internalId?: string;
  constructor(props: EmployeeAddressbook) {
    this.defaultShipping = props.defaultShipping;
    this.defaultBilling = props.defaultBilling;
    this.label = props.label;
    this.addressbookAddress = props.addressbookAddress;
    this.internalId = props.internalId;
  }
}

export class EmployeeCurrencyList {
  employeeCurrency?: EmployeeCurrency[];
  replaceAll?: boolean;
  constructor(props: EmployeeCurrencyList) {
    this.employeeCurrency = props.employeeCurrency;
    this.replaceAll = props.replaceAll;
  }
}

export class EmployeeEarningList {
  employeeEarning?: EmployeeEarning[];
  replaceAll?: boolean;
  constructor(props: EmployeeEarningList) {
    this.employeeEarning = props.employeeEarning;
    this.replaceAll = props.replaceAll;
  }
}

export class HcmJobSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.HcmJobSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: HcmJobSearchRow) {
    super();
    this.basic = props.basic;
    this.employeeJoin = props.employeeJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class EmployeeEmergencyContactList {
  employeeEmergencyContact?: EmployeeEmergencyContact[];
  replaceAll?: boolean;
  constructor(props: EmployeeEmergencyContactList) {
    this.employeeEmergencyContact = props.employeeEmergencyContact;
    this.replaceAll = props.replaceAll;
  }
}

export class EmployeeHcmPositionList {
  employeeHcmPosition?: EmployeeHcmPosition[];
  replaceAll?: boolean;
  constructor(props: EmployeeHcmPositionList) {
    this.employeeHcmPosition = props.employeeHcmPosition;
    this.replaceAll = props.replaceAll;
  }
}
