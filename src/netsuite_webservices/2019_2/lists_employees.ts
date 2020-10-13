import * as SoapTypes from "../../util/soap-types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as PlatformCommonTypes from "./platform_common_types";
import * as ListsEmployeesTypes from "./lists_employees_types";

const mappingsName = "com_netsuite_webservices_lists_employees_2019_2";

export class EmployeeRolesList extends SoapTypes.Base {
  roles?: EmployeeRoles[];
  replaceAll?: boolean;
  constructor(props: EmployeeRolesList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
  lastModifiedDate?: SoapTypes.Dateish;
  dateCreated?: SoapTypes.Dateish;
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
  lastPaidDate?: SoapTypes.Dateish;
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
  birthDate?: SoapTypes.Dateish;
  hireDate?: SoapTypes.Dateish;
  releaseDate?: SoapTypes.Dateish;
  terminationDetails?: string;
  terminationReason?: PlatformCore.RecordRef;
  terminationRegretted?: ListsEmployeesTypes.EmployeeTerminationRegretted;
  terminationCategory?: ListsEmployeesTypes.EmployeeTerminationCategory;
  timeOffPlan?: PlatformCore.RecordRef;
  lastReviewDate?: SoapTypes.Dateish;
  nextReviewDate?: SoapTypes.Dateish;
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
  startDateTimeOffCalc?: SoapTypes.Dateish;
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
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

export class EmployeeDirectDeposit extends SoapTypes.Base {
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
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

export class EmployeeRates extends SoapTypes.Base {
  entityCurrency?: PlatformCore.RecordRef;
  rate?: number;
  constructor(props: EmployeeRates) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.entityCurrency = props.entityCurrency;
    this.rate = props.rate;
  }
}

export class EmployeeEarning extends SoapTypes.Base {
  payrollItem?: PlatformCore.RecordRef;
  payRate?: string;
  primaryEarning?: boolean;
  defaultHours?: number;
  inactive?: boolean;
  defaultEarning?: boolean;
  effectiveDate?: SoapTypes.Dateish;
  expirationDate?: SoapTypes.Dateish;
  constructor(props: EmployeeEarning) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class EmployeeCompanyContribution extends SoapTypes.Base {
  payrollItem?: PlatformCore.RecordRef;
  rate?: string;
  limit?: number;
  inactive?: boolean;
  effectiveDate?: SoapTypes.Dateish;
  expirationDate?: SoapTypes.Dateish;
  constructor(props: EmployeeCompanyContribution) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class EmployeeRoles extends SoapTypes.Base {
  selectedRole?: PlatformCore.RecordRef;
  constructor(props: EmployeeRoles) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.selectedRole = props.selectedRole;
  }
}

export class EmployeeHrEducationList extends SoapTypes.Base {
  employeeHrEducation?: EmployeeHrEducation[];
  replaceAll?: boolean;
  constructor(props: EmployeeHrEducationList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
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

export class EmployeeAddressbookList extends SoapTypes.Base {
  addressbook?: EmployeeAddressbook[];
  replaceAll?: boolean;
  constructor(props: EmployeeAddressbookList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.addressbook = props.addressbook;
    this.replaceAll = props.replaceAll;
  }
}

export class PayrollItemSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.PayrollItemSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: PayrollItemSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class EmployeeAccruedTime extends SoapTypes.Base {
  payrollItem?: PlatformCore.RecordRef;
  accruedHours?: number;
  accrualRate?: number;
  monetaryRate?: number;
  resetAccruedHoursAtYearEnd?: boolean;
  accrualMethod?: ListsEmployeesTypes.EmployeeAccruedTimeAccrualMethod;
  maximumAccruedHours?: number;
  inactive?: boolean;
  effectiveDate?: SoapTypes.Dateish;
  expirationDate?: SoapTypes.Dateish;
  constructor(props: EmployeeAccruedTime) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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

export class EmployeeEmergencyContact extends SoapTypes.Base {
  id?: number;
  contact?: string;
  relationship?: string;
  address?: string;
  phone?: string;
  constructor(props: EmployeeEmergencyContact) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
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

export class EmployeeCompanyContributionList extends SoapTypes.Base {
  employeeCompanyContribution?: EmployeeCompanyContribution[];
  replaceAll?: boolean;
  constructor(props: EmployeeCompanyContributionList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employeeCompanyContribution = props.employeeCompanyContribution;
    this.replaceAll = props.replaceAll;
  }
}

export class EmployeeDirectDepositList extends SoapTypes.Base {
  employeeDirectDeposit?: EmployeeDirectDeposit[];
  replaceAll?: boolean;
  constructor(props: EmployeeDirectDepositList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employeeDirectDeposit = props.employeeDirectDeposit;
    this.replaceAll = props.replaceAll;
  }
}

export class EmployeeHcmPosition extends SoapTypes.Base {
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
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

export class EmployeeDeduction extends SoapTypes.Base {
  payrollItem?: PlatformCore.RecordRef;
  rate?: string;
  limit?: number;
  inactive?: boolean;
  effectiveDate?: SoapTypes.Dateish;
  expirationDate?: SoapTypes.Dateish;
  constructor(props: EmployeeDeduction) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.payrollItem = props.payrollItem;
    this.rate = props.rate;
    this.limit = props.limit;
    this.inactive = props.inactive;
    this.effectiveDate = props.effectiveDate;
    this.expirationDate = props.expirationDate;
  }
}

export class EmployeeSubscriptions extends SoapTypes.Base {
  subscribed?: string;
  subscription?: string;
  lastModifiedDate?: SoapTypes.Dateish;
  constructor(props: EmployeeSubscriptions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.subscribed = props.subscribed;
    this.subscription = props.subscription;
    this.lastModifiedDate = props.lastModifiedDate;
  }
}

export class EmployeeSubscriptionsList extends SoapTypes.Base {
  subscriptions?: EmployeeSubscriptions[];
  replaceAll?: boolean;
  constructor(props: EmployeeSubscriptionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.subscriptions = props.subscriptions;
    this.replaceAll = props.replaceAll;
  }
}

export class EmployeeHrEducation extends SoapTypes.Base {
  education?: PlatformCore.RecordRef;
  degree?: string;
  degreeDate?: SoapTypes.Dateish;
  constructor(props: EmployeeHrEducation) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class EmployeeCurrency extends SoapTypes.Base {
  currency?: PlatformCore.RecordRef;
  constructor(props: EmployeeCurrency) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.currency = props.currency;
  }
}

export class EmployeeRatesList extends SoapTypes.Base {
  employeeRates?: EmployeeRates[];
  replaceAll?: boolean;
  constructor(props: EmployeeRatesList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.employeeJoin = props.employeeJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class EmployeeAccruedTimeList extends SoapTypes.Base {
  employeeAccruedTime?: EmployeeAccruedTime[];
  replaceAll?: boolean;
  constructor(props: EmployeeAccruedTimeList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employeeAccruedTime = props.employeeAccruedTime;
    this.replaceAll = props.replaceAll;
  }
}

export class EmployeeDeductionList extends SoapTypes.Base {
  employeeDeduction?: EmployeeDeduction[];
  replaceAll?: boolean;
  constructor(props: EmployeeDeductionList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employeeDeduction = props.employeeDeduction;
    this.replaceAll = props.replaceAll;
  }
}

export class PayrollItemSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.PayrollItemSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: PayrollItemSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class EmployeeAddressbook extends SoapTypes.Base {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  label?: string;
  addressbookAddress?: PlatformCommon.Address;
  internalId?: string;
  constructor(props: EmployeeAddressbook) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.defaultShipping = props.defaultShipping;
    this.defaultBilling = props.defaultBilling;
    this.label = props.label;
    this.addressbookAddress = props.addressbookAddress;
    this.internalId = props.internalId;
  }
}

export class EmployeeCurrencyList extends SoapTypes.Base {
  employeeCurrency?: EmployeeCurrency[];
  replaceAll?: boolean;
  constructor(props: EmployeeCurrencyList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employeeCurrency = props.employeeCurrency;
    this.replaceAll = props.replaceAll;
  }
}

export class EmployeeEarningList extends SoapTypes.Base {
  employeeEarning?: EmployeeEarning[];
  replaceAll?: boolean;
  constructor(props: EmployeeEarningList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employeeEarning = props.employeeEarning;
    this.replaceAll = props.replaceAll;
  }
}

export class HcmJobSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.HcmJobSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: HcmJobSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.employeeJoin = props.employeeJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class EmployeeEmergencyContactList extends SoapTypes.Base {
  employeeEmergencyContact?: EmployeeEmergencyContact[];
  replaceAll?: boolean;
  constructor(props: EmployeeEmergencyContactList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employeeEmergencyContact = props.employeeEmergencyContact;
    this.replaceAll = props.replaceAll;
  }
}

export class EmployeeHcmPositionList extends SoapTypes.Base {
  employeeHcmPosition?: EmployeeHcmPosition[];
  replaceAll?: boolean;
  constructor(props: EmployeeHcmPositionList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employeeHcmPosition = props.employeeHcmPosition;
    this.replaceAll = props.replaceAll;
  }
}
