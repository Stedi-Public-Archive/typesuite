"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeHcmPositionList = exports.EmployeeEmergencyContactList = exports.HcmJobSearchRow = exports.EmployeeEarningList = exports.EmployeeCurrencyList = exports.EmployeeAddressbook = exports.PayrollItemSearch = exports.EmployeeDeductionList = exports.EmployeeAccruedTimeList = exports.HcmJobSearch = exports.PayrollItem = exports.EmployeeRatesList = exports.EmployeeCurrency = exports.HcmJobSearchAdvanced = exports.EmployeeHrEducation = exports.EmployeeSubscriptionsList = exports.EmployeeSubscriptions = exports.EmployeeDeduction = exports.EmployeeHcmPosition = exports.EmployeeDirectDepositList = exports.EmployeeCompanyContributionList = exports.HcmJob = exports.EmployeeEmergencyContact = exports.EmployeeAccruedTime = exports.PayrollItemSearchRow = exports.EmployeeAddressbookList = exports.EmployeeSearch = exports.EmployeeHrEducationList = exports.EmployeeRoles = exports.EmployeeSearchAdvanced = exports.EmployeeCompanyContribution = exports.PayrollItemSearchAdvanced = exports.EmployeeEarning = exports.EmployeeRates = exports.EmployeeSearchRow = exports.EmployeeDirectDeposit = exports.Employee = exports.EmployeeRolesList = void 0;
const PlatformCore = __importStar(require("./platform_core"));
const soap_types_1 = require("../../soap-types");
const MAPPINGS_NAME = "com_netsuite_webservices_lists_employees_2019_2";
class EmployeeRolesList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.roles = props.roles;
        this.replaceAll = props.replaceAll;
    }
}
exports.EmployeeRolesList = EmployeeRolesList;
class Employee extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.Employee = Employee;
class EmployeeDirectDeposit extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.EmployeeDirectDeposit = EmployeeDirectDeposit;
class EmployeeSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.EmployeeSearchRow = EmployeeSearchRow;
class EmployeeRates extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.entityCurrency = props.entityCurrency;
        this.rate = props.rate;
    }
}
exports.EmployeeRates = EmployeeRates;
class EmployeeEarning extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.EmployeeEarning = EmployeeEarning;
class PayrollItemSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.PayrollItemSearchAdvanced = PayrollItemSearchAdvanced;
class EmployeeCompanyContribution extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.payrollItem = props.payrollItem;
        this.rate = props.rate;
        this.limit = props.limit;
        this.inactive = props.inactive;
        this.effectiveDate = props.effectiveDate;
        this.expirationDate = props.expirationDate;
    }
}
exports.EmployeeCompanyContribution = EmployeeCompanyContribution;
class EmployeeSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.EmployeeSearchAdvanced = EmployeeSearchAdvanced;
class EmployeeRoles extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.selectedRole = props.selectedRole;
    }
}
exports.EmployeeRoles = EmployeeRoles;
class EmployeeHrEducationList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.employeeHrEducation = props.employeeHrEducation;
        this.replaceAll = props.replaceAll;
    }
}
exports.EmployeeHrEducationList = EmployeeHrEducationList;
class EmployeeSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.EmployeeSearch = EmployeeSearch;
class EmployeeAddressbookList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.addressbook = props.addressbook;
        this.replaceAll = props.replaceAll;
    }
}
exports.EmployeeAddressbookList = EmployeeAddressbookList;
class PayrollItemSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.PayrollItemSearchRow = PayrollItemSearchRow;
class EmployeeAccruedTime extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.EmployeeAccruedTime = EmployeeAccruedTime;
class EmployeeEmergencyContact extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.id = props.id;
        this.contact = props.contact;
        this.relationship = props.relationship;
        this.address = props.address;
        this.phone = props.phone;
    }
}
exports.EmployeeEmergencyContact = EmployeeEmergencyContact;
class HcmJob extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.HcmJob = HcmJob;
class EmployeeCompanyContributionList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.employeeCompanyContribution = props.employeeCompanyContribution;
        this.replaceAll = props.replaceAll;
    }
}
exports.EmployeeCompanyContributionList = EmployeeCompanyContributionList;
class EmployeeDirectDepositList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.employeeDirectDeposit = props.employeeDirectDeposit;
        this.replaceAll = props.replaceAll;
    }
}
exports.EmployeeDirectDepositList = EmployeeDirectDepositList;
class EmployeeHcmPosition extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.EmployeeHcmPosition = EmployeeHcmPosition;
class EmployeeDeduction extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.payrollItem = props.payrollItem;
        this.rate = props.rate;
        this.limit = props.limit;
        this.inactive = props.inactive;
        this.effectiveDate = props.effectiveDate;
        this.expirationDate = props.expirationDate;
    }
}
exports.EmployeeDeduction = EmployeeDeduction;
class EmployeeSubscriptions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.subscribed = props.subscribed;
        this.subscription = props.subscription;
        this.lastModifiedDate = props.lastModifiedDate;
    }
}
exports.EmployeeSubscriptions = EmployeeSubscriptions;
class EmployeeSubscriptionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.subscriptions = props.subscriptions;
        this.replaceAll = props.replaceAll;
    }
}
exports.EmployeeSubscriptionsList = EmployeeSubscriptionsList;
class EmployeeHrEducation extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.education = props.education;
        this.degree = props.degree;
        this.degreeDate = props.degreeDate;
    }
}
exports.EmployeeHrEducation = EmployeeHrEducation;
class HcmJobSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.HcmJobSearchAdvanced = HcmJobSearchAdvanced;
class EmployeeCurrency extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.currency = props.currency;
    }
}
exports.EmployeeCurrency = EmployeeCurrency;
class EmployeeRatesList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.employeeRates = props.employeeRates;
        this.replaceAll = props.replaceAll;
    }
}
exports.EmployeeRatesList = EmployeeRatesList;
class PayrollItem extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.PayrollItem = PayrollItem;
class HcmJobSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.employeeJoin = props.employeeJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.HcmJobSearch = HcmJobSearch;
class EmployeeAccruedTimeList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.employeeAccruedTime = props.employeeAccruedTime;
        this.replaceAll = props.replaceAll;
    }
}
exports.EmployeeAccruedTimeList = EmployeeAccruedTimeList;
class EmployeeDeductionList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.employeeDeduction = props.employeeDeduction;
        this.replaceAll = props.replaceAll;
    }
}
exports.EmployeeDeductionList = EmployeeDeductionList;
class PayrollItemSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.PayrollItemSearch = PayrollItemSearch;
class EmployeeAddressbook extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.defaultShipping = props.defaultShipping;
        this.defaultBilling = props.defaultBilling;
        this.label = props.label;
        this.addressbookAddress = props.addressbookAddress;
        this.internalId = props.internalId;
    }
}
exports.EmployeeAddressbook = EmployeeAddressbook;
class EmployeeCurrencyList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.employeeCurrency = props.employeeCurrency;
        this.replaceAll = props.replaceAll;
    }
}
exports.EmployeeCurrencyList = EmployeeCurrencyList;
class EmployeeEarningList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.employeeEarning = props.employeeEarning;
        this.replaceAll = props.replaceAll;
    }
}
exports.EmployeeEarningList = EmployeeEarningList;
class HcmJobSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.employeeJoin = props.employeeJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.HcmJobSearchRow = HcmJobSearchRow;
class EmployeeEmergencyContactList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.employeeEmergencyContact = props.employeeEmergencyContact;
        this.replaceAll = props.replaceAll;
    }
}
exports.EmployeeEmergencyContactList = EmployeeEmergencyContactList;
class EmployeeHcmPositionList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.employeeHcmPosition = props.employeeHcmPosition;
        this.replaceAll = props.replaceAll;
    }
}
exports.EmployeeHcmPositionList = EmployeeHcmPositionList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHNfZW1wbG95ZWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25ldHN1aXRlX3dlYnNlcnZpY2VzLzIwMTlfMi9saXN0c19lbXBsb3llZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUFnRDtBQUloRCxpREFBMEU7QUFDMUUsTUFBTSxhQUFhLEdBQUcsaURBQWlELENBQUM7QUFNeEUsTUFBYSxpQkFBa0IsU0FBUSw0QkFBZTtJQUdwRCxZQUFZLEtBQTZCO1FBQ3ZDLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQ3JDLENBQUM7Q0FDRjtBQVJELDhDQVFDO0FBOEdELE1BQWEsUUFBUyxTQUFRLFlBQVksQ0FBQyxNQUFNO0lBMEcvQyxZQUFZLEtBQW9CO1FBQzlCLEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFB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Q2xELEtBQUssQ0FBQyxrQ0FBcUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0NBQ0Y7QUFSRCxvRUFRQztBQU9ELE1BQWEsdUJBQXdCLFNBQVEsNEJBQWU7SUFHMUQsWUFBWSxLQUFtQztRQUM3QyxLQUFLLENBQUMsa0NBQXFCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDckMsQ0FBQztDQUNGO0FBUkQsMERBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQbGF0Zm9ybUNvcmUgZnJvbSBcIi4vcGxhdGZvcm1fY29yZVwiO1xuaW1wb3J0ICogYXMgUGxhdGZvcm1Db21tb24gZnJvbSBcIi4vcGxhdGZvcm1fY29tbW9uXCI7XG5pbXBvcnQgKiBhcyBQbGF0Zm9ybUNvbW1vblR5cGVzIGZyb20gXCIuL3BsYXRmb3JtX2NvbW1vbl90eXBlc1wiO1xuaW1wb3J0ICogYXMgTGlzdHNFbXBsb3llZXNUeXBlcyBmcm9tIFwiLi9saXN0c19lbXBsb3llZXNfdHlwZXNcIjtcbmltcG9ydCB7IFNvYXBNYXBwaW5nQmFzZSwgcHJvcHNXaXRoTWFwcGluZ3NOYW1lIH0gZnJvbSBcIi4uLy4uL3NvYXAtdHlwZXNcIjtcbmNvbnN0IE1BUFBJTkdTX05BTUUgPSBcImNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19saXN0c19lbXBsb3llZXNfMjAxOV8yXCI7XG5leHBvcnQgdHlwZSBFbXBsb3llZVJvbGVzTGlzdFByb3BzID0ge1xuICByb2xlcz86IEVtcGxveWVlUm9sZXNbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVSb2xlc0xpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICByb2xlcz86IEVtcGxveWVlUm9sZXNbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZVJvbGVzTGlzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5yb2xlcyA9IHByb3BzLnJvbGVzO1xuICAgIHRoaXMucmVwbGFjZUFsbCA9IHByb3BzLnJlcGxhY2VBbGw7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRW1wbG95ZWVQcm9wcyA9IHtcbiAgY3VzdG9tRm9ybT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHRlbXBsYXRlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgZW50aXR5SWQ/OiBzdHJpbmc7XG4gIHNhbHV0YXRpb24/OiBzdHJpbmc7XG4gIGZpcnN0TmFtZT86IHN0cmluZztcbiAgbWlkZGxlTmFtZT86IHN0cmluZztcbiAgbGFzdE5hbWU/OiBzdHJpbmc7XG4gIGFsdE5hbWU/OiBzdHJpbmc7XG4gIHBob25lPzogc3RyaW5nO1xuICBmYXg/OiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBkZWZhdWx0QWRkcmVzcz86IHN0cmluZztcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIHBob25ldGljTmFtZT86IHN0cmluZztcbiAgbGFzdE1vZGlmaWVkRGF0ZT86IHN0cmluZztcbiAgZGF0ZUNyZWF0ZWQ/OiBzdHJpbmc7XG4gIGluaXRpYWxzPzogc3RyaW5nO1xuICBvZmZpY2VQaG9uZT86IHN0cmluZztcbiAgaG9tZVBob25lPzogc3RyaW5nO1xuICBtb2JpbGVQaG9uZT86IHN0cmluZztcbiAgZGVwYXJ0bWVudD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGNsYXp6PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgbG9jYXRpb24/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBzdWJzaWRpYXJ5PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgYmlsbGluZ0NsYXNzPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgYWNjb3VudE51bWJlcj86IHN0cmluZztcbiAgY29tcGVuc2F0aW9uQ3VycmVuY3k/OiBMaXN0c0VtcGxveWVlc1R5cGVzLkVtcGxveWVlQ29tcGVuc2F0aW9uQ3VycmVuY3k7XG4gIGJhc2VXYWdlVHlwZT86IExpc3RzRW1wbG95ZWVzVHlwZXMuRW1wbG95ZWVCYXNlV2FnZVR5cGU7XG4gIGJhc2VXYWdlPzogbnVtYmVyO1xuICBjb21tZW50cz86IHN0cmluZztcbiAgZ2xvYmFsU3Vic2NyaXB0aW9uU3RhdHVzPzogUGxhdGZvcm1Db21tb25UeXBlcy5HbG9iYWxTdWJzY3JpcHRpb25TdGF0dXM7XG4gIGltYWdlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgcGF5RnJlcXVlbmN5PzogTGlzdHNFbXBsb3llZXNUeXBlcy5FbXBsb3llZVBheUZyZXF1ZW5jeTtcbiAgbGFzdFBhaWREYXRlPzogc3RyaW5nO1xuICBjdXJyZW5jeT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHVzZVRpbWVEYXRhPzogTGlzdHNFbXBsb3llZXNUeXBlcy5FbXBsb3llZVVzZVRpbWVEYXRhO1xuICB1c2VQZXJxdWVzdD86IGJvb2xlYW47XG4gIHdvcmtwbGFjZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGFkcElkPzogc3RyaW5nO1xuICBkaXJlY3REZXBvc2l0PzogYm9vbGVhbjtcbiAgZXhwZW5zZUxpbWl0PzogbnVtYmVyO1xuICBwdXJjaGFzZU9yZGVyTGltaXQ/OiBudW1iZXI7XG4gIHB1cmNoYXNlT3JkZXJBcHByb3ZhbExpbWl0PzogbnVtYmVyO1xuICBzb2NpYWxTZWN1cml0eU51bWJlcj86IHN0cmluZztcbiAgc3VwZXJ2aXNvcj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGFwcHJvdmVyPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgYXBwcm92YWxMaW1pdD86IG51bWJlcjtcbiAgdGltZUFwcHJvdmVyPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgZW1wbG95ZWVUeXBlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgaXNTYWxlc1JlcD86IGJvb2xlYW47XG4gIHNhbGVzUm9sZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGlzU3VwcG9ydFJlcD86IGJvb2xlYW47XG4gIGlzSm9iUmVzb3VyY2U/OiBib29sZWFuO1xuICBsYWJvckNvc3Q/OiBudW1iZXI7XG4gIGJpcnRoRGF0ZT86IHN0cmluZztcbiAgaGlyZURhdGU/OiBzdHJpbmc7XG4gIHJlbGVhc2VEYXRlPzogc3RyaW5nO1xuICB0ZXJtaW5hdGlvbkRldGFpbHM/OiBzdHJpbmc7XG4gIHRlcm1pbmF0aW9uUmVhc29uPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgdGVybWluYXRpb25SZWdyZXR0ZWQ/OiBMaXN0c0VtcGxveWVlc1R5cGVzLkVtcGxveWVlVGVybWluYXRpb25SZWdyZXR0ZWQ7XG4gIHRlcm1pbmF0aW9uQ2F0ZWdvcnk/OiBMaXN0c0VtcGxveWVlc1R5cGVzLkVtcGxveWVlVGVybWluYXRpb25DYXRlZ29yeTtcbiAgdGltZU9mZlBsYW4/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBsYXN0UmV2aWV3RGF0ZT86IHN0cmluZztcbiAgbmV4dFJldmlld0RhdGU/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBlbXBsb3llZVN0YXR1cz86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGpvYkRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICB3b3JrQXNzaWdubWVudD86IExpc3RzRW1wbG95ZWVzVHlwZXMuRW1wbG95ZWVXb3JrQXNzaWdubWVudDtcbiAgam9iPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgbWFyaXRhbFN0YXR1cz86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGV0aG5pY2l0eT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGdlbmRlcj86IExpc3RzRW1wbG95ZWVzVHlwZXMuR2VuZGVyO1xuICBwdXJjaGFzZU9yZGVyQXBwcm92ZXI/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICB3b3JrQ2FsZW5kYXI/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBnaXZlQWNjZXNzPzogYm9vbGVhbjtcbiAgZGVmYXVsdEV4cGVuc2VSZXBvcnRDdXJyZW5jeT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGNvbmN1cnJlbnRXZWJTZXJ2aWNlc1VzZXI/OiBib29sZWFuO1xuICBzZW5kRW1haWw/OiBib29sZWFuO1xuICBoYXNPZmZsaW5lQWNjZXNzPzogYm9vbGVhbjtcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIHBhc3N3b3JkMj86IHN0cmluZztcbiAgcmVxdWlyZVB3ZENoYW5nZT86IGJvb2xlYW47XG4gIGluaGVyaXRJUFJ1bGVzPzogYm9vbGVhbjtcbiAgaXBBZGRyZXNzUnVsZT86IHN0cmluZztcbiAgc3RhcnREYXRlVGltZU9mZkNhbGM/OiBzdHJpbmc7XG4gIGNvbW1pc3Npb25QYXltZW50UHJlZmVyZW5jZT86IExpc3RzRW1wbG95ZWVzVHlwZXMuRW1wbG95ZWVDb21taXNzaW9uUGF5bWVudFByZWZlcmVuY2U7XG4gIGJpbGxQYXk/OiBib29sZWFuO1xuICBkZWZhdWx0QWNjdENvcnBDYXJkRXhwPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgZWxpZ2libGVGb3JDb21taXNzaW9uPzogYm9vbGVhbjtcbiAgc3Vic2NyaXB0aW9uc0xpc3Q/OiBFbXBsb3llZVN1YnNjcmlwdGlvbnNMaXN0O1xuICByYXRlc0xpc3Q/OiBFbXBsb3llZVJhdGVzTGlzdDtcbiAgYWRkcmVzc2Jvb2tMaXN0PzogRW1wbG95ZWVBZGRyZXNzYm9va0xpc3Q7XG4gIHJvbGVzTGlzdD86IEVtcGxveWVlUm9sZXNMaXN0O1xuICBockVkdWNhdGlvbkxpc3Q/OiBFbXBsb3llZUhyRWR1Y2F0aW9uTGlzdDtcbiAgYWNjcnVlZFRpbWVMaXN0PzogRW1wbG95ZWVBY2NydWVkVGltZUxpc3Q7XG4gIGRpcmVjdERlcG9zaXRMaXN0PzogRW1wbG95ZWVEaXJlY3REZXBvc2l0TGlzdDtcbiAgY3VycmVuY3lMaXN0PzogRW1wbG95ZWVDdXJyZW5jeUxpc3Q7XG4gIGNvbXBhbnlDb250cmlidXRpb25MaXN0PzogRW1wbG95ZWVDb21wYW55Q29udHJpYnV0aW9uTGlzdDtcbiAgZWFybmluZ0xpc3Q/OiBFbXBsb3llZUVhcm5pbmdMaXN0O1xuICBlbWVyZ2VuY3lDb250YWN0TGlzdD86IEVtcGxveWVlRW1lcmdlbmN5Q29udGFjdExpc3Q7XG4gIGhjbVBvc2l0aW9uTGlzdD86IEVtcGxveWVlSGNtUG9zaXRpb25MaXN0O1xuICBkZWR1Y3Rpb25MaXN0PzogRW1wbG95ZWVEZWR1Y3Rpb25MaXN0O1xuICBjdXN0b21GaWVsZExpc3Q/OiBQbGF0Zm9ybUNvcmUuQ3VzdG9tRmllbGRMaXN0O1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xufSAmIFBsYXRmb3JtQ29yZS5SZWNvcmRQcm9wcztcblxuZXhwb3J0IGNsYXNzIEVtcGxveWVlIGV4dGVuZHMgUGxhdGZvcm1Db3JlLlJlY29yZCB7XG4gIGN1c3RvbUZvcm0/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICB0ZW1wbGF0ZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGVudGl0eUlkPzogc3RyaW5nO1xuICBzYWx1dGF0aW9uPzogc3RyaW5nO1xuICBmaXJzdE5hbWU/OiBzdHJpbmc7XG4gIG1pZGRsZU5hbWU/OiBzdHJpbmc7XG4gIGxhc3ROYW1lPzogc3RyaW5nO1xuICBhbHROYW1lPzogc3RyaW5nO1xuICBwaG9uZT86IHN0cmluZztcbiAgZmF4Pzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgZGVmYXVsdEFkZHJlc3M/OiBzdHJpbmc7XG4gIGlzSW5hY3RpdmU/OiBib29sZWFuO1xuICBwaG9uZXRpY05hbWU/OiBzdHJpbmc7XG4gIGxhc3RNb2RpZmllZERhdGU/OiBzdHJpbmc7XG4gIGRhdGVDcmVhdGVkPzogc3RyaW5nO1xuICBpbml0aWFscz86IHN0cmluZztcbiAgb2ZmaWNlUGhvbmU/OiBzdHJpbmc7XG4gIGhvbWVQaG9uZT86IHN0cmluZztcbiAgbW9iaWxlUGhvbmU/OiBzdHJpbmc7XG4gIGRlcGFydG1lbnQ/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjbGF6ej86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGxvY2F0aW9uPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgc3Vic2lkaWFyeT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGJpbGxpbmdDbGFzcz86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGFjY291bnROdW1iZXI/OiBzdHJpbmc7XG4gIGNvbXBlbnNhdGlvbkN1cnJlbmN5PzogTGlzdHNFbXBsb3llZXNUeXBlcy5FbXBsb3llZUNvbXBlbnNhdGlvbkN1cnJlbmN5O1xuICBiYXNlV2FnZVR5cGU/OiBMaXN0c0VtcGxveWVlc1R5cGVzLkVtcGxveWVlQmFzZVdhZ2VUeXBlO1xuICBiYXNlV2FnZT86IG51bWJlcjtcbiAgY29tbWVudHM/OiBzdHJpbmc7XG4gIGdsb2JhbFN1YnNjcmlwdGlvblN0YXR1cz86IFBsYXRmb3JtQ29tbW9uVHlwZXMuR2xvYmFsU3Vic2NyaXB0aW9uU3RhdHVzO1xuICBpbWFnZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHBheUZyZXF1ZW5jeT86IExpc3RzRW1wbG95ZWVzVHlwZXMuRW1wbG95ZWVQYXlGcmVxdWVuY3k7XG4gIGxhc3RQYWlkRGF0ZT86IHN0cmluZztcbiAgY3VycmVuY3k/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICB1c2VUaW1lRGF0YT86IExpc3RzRW1wbG95ZWVzVHlwZXMuRW1wbG95ZWVVc2VUaW1lRGF0YTtcbiAgdXNlUGVycXVlc3Q/OiBib29sZWFuO1xuICB3b3JrcGxhY2U/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBhZHBJZD86IHN0cmluZztcbiAgZGlyZWN0RGVwb3NpdD86IGJvb2xlYW47XG4gIGV4cGVuc2VMaW1pdD86IG51bWJlcjtcbiAgcHVyY2hhc2VPcmRlckxpbWl0PzogbnVtYmVyO1xuICBwdXJjaGFzZU9yZGVyQXBwcm92YWxMaW1pdD86IG51bWJlcjtcbiAgc29jaWFsU2VjdXJpdHlOdW1iZXI/OiBzdHJpbmc7XG4gIHN1cGVydmlzb3I/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBhcHByb3Zlcj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGFwcHJvdmFsTGltaXQ/OiBudW1iZXI7XG4gIHRpbWVBcHByb3Zlcj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGVtcGxveWVlVHlwZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGlzU2FsZXNSZXA/OiBib29sZWFuO1xuICBzYWxlc1JvbGU/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBpc1N1cHBvcnRSZXA/OiBib29sZWFuO1xuICBpc0pvYlJlc291cmNlPzogYm9vbGVhbjtcbiAgbGFib3JDb3N0PzogbnVtYmVyO1xuICBiaXJ0aERhdGU/OiBzdHJpbmc7XG4gIGhpcmVEYXRlPzogc3RyaW5nO1xuICByZWxlYXNlRGF0ZT86IHN0cmluZztcbiAgdGVybWluYXRpb25EZXRhaWxzPzogc3RyaW5nO1xuICB0ZXJtaW5hdGlvblJlYXNvbj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHRlcm1pbmF0aW9uUmVncmV0dGVkPzogTGlzdHNFbXBsb3llZXNUeXBlcy5FbXBsb3llZVRlcm1pbmF0aW9uUmVncmV0dGVkO1xuICB0ZXJtaW5hdGlvbkNhdGVnb3J5PzogTGlzdHNFbXBsb3llZXNUeXBlcy5FbXBsb3llZVRlcm1pbmF0aW9uQ2F0ZWdvcnk7XG4gIHRpbWVPZmZQbGFuPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgbGFzdFJldmlld0RhdGU/OiBzdHJpbmc7XG4gIG5leHRSZXZpZXdEYXRlPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgZW1wbG95ZWVTdGF0dXM/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBqb2JEZXNjcmlwdGlvbj86IHN0cmluZztcbiAgd29ya0Fzc2lnbm1lbnQ/OiBMaXN0c0VtcGxveWVlc1R5cGVzLkVtcGxveWVlV29ya0Fzc2lnbm1lbnQ7XG4gIGpvYj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIG1hcml0YWxTdGF0dXM/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBldGhuaWNpdHk/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBnZW5kZXI/OiBMaXN0c0VtcGxveWVlc1R5cGVzLkdlbmRlcjtcbiAgcHVyY2hhc2VPcmRlckFwcHJvdmVyPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgd29ya0NhbGVuZGFyPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgZ2l2ZUFjY2Vzcz86IGJvb2xlYW47XG4gIGRlZmF1bHRFeHBlbnNlUmVwb3J0Q3VycmVuY3k/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjb25jdXJyZW50V2ViU2VydmljZXNVc2VyPzogYm9vbGVhbjtcbiAgc2VuZEVtYWlsPzogYm9vbGVhbjtcbiAgaGFzT2ZmbGluZUFjY2Vzcz86IGJvb2xlYW47XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBwYXNzd29yZDI/OiBzdHJpbmc7XG4gIHJlcXVpcmVQd2RDaGFuZ2U/OiBib29sZWFuO1xuICBpbmhlcml0SVBSdWxlcz86IGJvb2xlYW47XG4gIGlwQWRkcmVzc1J1bGU/OiBzdHJpbmc7XG4gIHN0YXJ0RGF0ZVRpbWVPZmZDYWxjPzogc3RyaW5nO1xuICBjb21taXNzaW9uUGF5bWVudFByZWZlcmVuY2U/OiBMaXN0c0VtcGxveWVlc1R5cGVzLkVtcGxveWVlQ29tbWlzc2lvblBheW1lbnRQcmVmZXJlbmNlO1xuICBiaWxsUGF5PzogYm9vbGVhbjtcbiAgZGVmYXVsdEFjY3RDb3JwQ2FyZEV4cD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGVsaWdpYmxlRm9yQ29tbWlzc2lvbj86IGJvb2xlYW47XG4gIHN1YnNjcmlwdGlvbnNMaXN0PzogRW1wbG95ZWVTdWJzY3JpcHRpb25zTGlzdDtcbiAgcmF0ZXNMaXN0PzogRW1wbG95ZWVSYXRlc0xpc3Q7XG4gIGFkZHJlc3Nib29rTGlzdD86IEVtcGxveWVlQWRkcmVzc2Jvb2tMaXN0O1xuICByb2xlc0xpc3Q/OiBFbXBsb3llZVJvbGVzTGlzdDtcbiAgaHJFZHVjYXRpb25MaXN0PzogRW1wbG95ZWVIckVkdWNhdGlvbkxpc3Q7XG4gIGFjY3J1ZWRUaW1lTGlzdD86IEVtcGxveWVlQWNjcnVlZFRpbWVMaXN0O1xuICBkaXJlY3REZXBvc2l0TGlzdD86IEVtcGxveWVlRGlyZWN0RGVwb3NpdExpc3Q7XG4gIGN1cnJlbmN5TGlzdD86IEVtcGxveWVlQ3VycmVuY3lMaXN0O1xuICBjb21wYW55Q29udHJpYnV0aW9uTGlzdD86IEVtcGxveWVlQ29tcGFueUNvbnRyaWJ1dGlvbkxpc3Q7XG4gIGVhcm5pbmdMaXN0PzogRW1wbG95ZWVFYXJuaW5nTGlzdDtcbiAgZW1lcmdlbmN5Q29udGFjdExpc3Q/OiBFbXBsb3llZUVtZXJnZW5jeUNvbnRhY3RMaXN0O1xuICBoY21Qb3NpdGlvbkxpc3Q/OiBFbXBsb3llZUhjbVBvc2l0aW9uTGlzdDtcbiAgZGVkdWN0aW9uTGlzdD86IEVtcGxveWVlRGVkdWN0aW9uTGlzdDtcbiAgY3VzdG9tRmllbGRMaXN0PzogUGxhdGZvcm1Db3JlLkN1c3RvbUZpZWxkTGlzdDtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgZXh0ZXJuYWxJZD86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IEVtcGxveWVlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmN1c3RvbUZvcm0gPSBwcm9wcy5jdXN0b21Gb3JtO1xuICAgIHRoaXMudGVtcGxhdGUgPSBwcm9wcy50ZW1wbGF0ZTtcbiAgICB0aGlzLmVudGl0eUlkID0gcHJvcHMuZW50aXR5SWQ7XG4gICAgdGhpcy5zYWx1dGF0aW9uID0gcHJvcHMuc2FsdXRhdGlvbjtcbiAgICB0aGlzLmZpcnN0TmFtZSA9IHByb3BzLmZpcnN0TmFtZTtcbiAgICB0aGlzLm1pZGRsZU5hbWUgPSBwcm9wcy5taWRkbGVOYW1lO1xuICAgIHRoaXMubGFzdE5hbWUgPSBwcm9wcy5sYXN0TmFtZTtcbiAgICB0aGlzLmFsdE5hbWUgPSBwcm9wcy5hbHROYW1lO1xuICAgIHRoaXMucGhvbmUgPSBwcm9wcy5waG9uZTtcbiAgICB0aGlzLmZheCA9IHByb3BzLmZheDtcbiAgICB0aGlzLmVtYWlsID0gcHJvcHMuZW1haWw7XG4gICAgdGhpcy5kZWZhdWx0QWRkcmVzcyA9IHByb3BzLmRlZmF1bHRBZGRyZXNzO1xuICAgIHRoaXMuaXNJbmFjdGl2ZSA9IHByb3BzLmlzSW5hY3RpdmU7XG4gICAgdGhpcy5waG9uZXRpY05hbWUgPSBwcm9wcy5waG9uZXRpY05hbWU7XG4gICAgdGhpcy5sYXN0TW9kaWZpZWREYXRlID0gcHJvcHMubGFzdE1vZGlmaWVkRGF0ZTtcbiAgICB0aGlzLmRhdGVDcmVhdGVkID0gcHJvcHMuZGF0ZUNyZWF0ZWQ7XG4gICAgdGhpcy5pbml0aWFscyA9IHByb3BzLmluaXRpYWxzO1xuICAgIHRoaXMub2ZmaWNlUGhvbmUgPSBwcm9wcy5vZmZpY2VQaG9uZTtcbiAgICB0aGlzLmhvbWVQaG9uZSA9IHByb3BzLmhvbWVQaG9uZTtcbiAgICB0aGlzLm1vYmlsZVBob25lID0gcHJvcHMubW9iaWxlUGhvbmU7XG4gICAgdGhpcy5kZXBhcnRtZW50ID0gcHJvcHMuZGVwYXJ0bWVudDtcbiAgICB0aGlzLmNsYXp6ID0gcHJvcHMuY2xheno7XG4gICAgdGhpcy5sb2NhdGlvbiA9IHByb3BzLmxvY2F0aW9uO1xuICAgIHRoaXMuc3Vic2lkaWFyeSA9IHByb3BzLnN1YnNpZGlhcnk7XG4gICAgdGhpcy5iaWxsaW5nQ2xhc3MgPSBwcm9wcy5iaWxsaW5nQ2xhc3M7XG4gICAgdGhpcy5hY2NvdW50TnVtYmVyID0gcHJvcHMuYWNjb3VudE51bWJlcjtcbiAgICB0aGlzLmNvbXBlbnNhdGlvbkN1cnJlbmN5ID0gcHJvcHMuY29tcGVuc2F0aW9uQ3VycmVuY3k7XG4gICAgdGhpcy5iYXNlV2FnZVR5cGUgPSBwcm9wcy5iYXNlV2FnZVR5cGU7XG4gICAgdGhpcy5iYXNlV2FnZSA9IHByb3BzLmJhc2VXYWdlO1xuICAgIHRoaXMuY29tbWVudHMgPSBwcm9wcy5jb21tZW50cztcbiAgICB0aGlzLmdsb2JhbFN1YnNjcmlwdGlvblN0YXR1cyA9IHByb3BzLmdsb2JhbFN1YnNjcmlwdGlvblN0YXR1cztcbiAgICB0aGlzLmltYWdlID0gcHJvcHMuaW1hZ2U7XG4gICAgdGhpcy5wYXlGcmVxdWVuY3kgPSBwcm9wcy5wYXlGcmVxdWVuY3k7XG4gICAgdGhpcy5sYXN0UGFpZERhdGUgPSBwcm9wcy5sYXN0UGFpZERhdGU7XG4gICAgdGhpcy5jdXJyZW5jeSA9IHByb3BzLmN1cnJlbmN5O1xuICAgIHRoaXMudXNlVGltZURhdGEgPSBwcm9wcy51c2VUaW1lRGF0YTtcbiAgICB0aGlzLnVzZVBlcnF1ZXN0ID0gcHJvcHMudXNlUGVycXVlc3Q7XG4gICAgdGhpcy53b3JrcGxhY2UgPSBwcm9wcy53b3JrcGxhY2U7XG4gICAgdGhpcy5hZHBJZCA9IHByb3BzLmFkcElkO1xuICAgIHRoaXMuZGlyZWN0RGVwb3NpdCA9IHByb3BzLmRpcmVjdERlcG9zaXQ7XG4gICAgdGhpcy5leHBlbnNlTGltaXQgPSBwcm9wcy5leHBlbnNlTGltaXQ7XG4gICAgdGhpcy5wdXJjaGFzZU9yZGVyTGltaXQgPSBwcm9wcy5wdXJjaGFzZU9yZGVyTGltaXQ7XG4gICAgdGhpcy5wdXJjaGFzZU9yZGVyQXBwcm92YWxMaW1pdCA9IHByb3BzLnB1cmNoYXNlT3JkZXJBcHByb3ZhbExpbWl0O1xuICAgIHRoaXMuc29jaWFsU2VjdXJpdHlOdW1iZXIgPSBwcm9wcy5zb2NpYWxTZWN1cml0eU51bWJlcjtcbiAgICB0aGlzLnN1cGVydmlzb3IgPSBwcm9wcy5zdXBlcnZpc29yO1xuICAgIHRoaXMuYXBwcm92ZXIgPSBwcm9wcy5hcHByb3ZlcjtcbiAgICB0aGlzLmFwcHJvdmFsTGltaXQgPSBwcm9wcy5hcHByb3ZhbExpbWl0O1xuICAgIHRoaXMudGltZUFwcHJvdmVyID0gcHJvcHMudGltZUFwcHJvdmVyO1xuICAgIHRoaXMuZW1wbG95ZWVUeXBlID0gcHJvcHMuZW1wbG95ZWVUeXBlO1xuICAgIHRoaXMuaXNTYWxlc1JlcCA9IHByb3BzLmlzU2FsZXNSZXA7XG4gICAgdGhpcy5zYWxlc1JvbGUgPSBwcm9wcy5zYWxlc1JvbGU7XG4gICAgdGhpcy5pc1N1cHBvcnRSZXAgPSBwcm9wcy5pc1N1cHBvcnRSZXA7XG4gICAgdGhpcy5pc0pvYlJlc291cmNlID0gcHJvcHMuaXNKb2JSZXNvdXJjZTtcbiAgICB0aGlzLmxhYm9yQ29zdCA9IHByb3BzLmxhYm9yQ29zdDtcbiAgICB0aGlzLmJpcnRoRGF0ZSA9IHByb3BzLmJpcnRoRGF0ZTtcbiAgICB0aGlzLmhpcmVEYXRlID0gcHJvcHMuaGlyZURhdGU7XG4gICAgdGhpcy5yZWxlYXNlRGF0ZSA9IHByb3BzLnJlbGVhc2VEYXRlO1xuICAgIHRoaXMudGVybWluYXRpb25EZXRhaWxzID0gcHJvcHMudGVybWluYXRpb25EZXRhaWxzO1xuICAgIHRoaXMudGVybWluYXRpb25SZWFzb24gPSBwcm9wcy50ZXJtaW5hdGlvblJlYXNvbjtcbiAgICB0aGlzLnRlcm1pbmF0aW9uUmVncmV0dGVkID0gcHJvcHMudGVybWluYXRpb25SZWdyZXR0ZWQ7XG4gICAgdGhpcy50ZXJtaW5hdGlvbkNhdGVnb3J5ID0gcHJvcHMudGVybWluYXRpb25DYXRlZ29yeTtcbiAgICB0aGlzLnRpbWVPZmZQbGFuID0gcHJvcHMudGltZU9mZlBsYW47XG4gICAgdGhpcy5sYXN0UmV2aWV3RGF0ZSA9IHByb3BzLmxhc3RSZXZpZXdEYXRlO1xuICAgIHRoaXMubmV4dFJldmlld0RhdGUgPSBwcm9wcy5uZXh0UmV2aWV3RGF0ZTtcbiAgICB0aGlzLnRpdGxlID0gcHJvcHMudGl0bGU7XG4gICAgdGhpcy5lbXBsb3llZVN0YXR1cyA9IHByb3BzLmVtcGxveWVlU3RhdHVzO1xuICAgIHRoaXMuam9iRGVzY3JpcHRpb24gPSBwcm9wcy5qb2JEZXNjcmlwdGlvbjtcbiAgICB0aGlzLndvcmtBc3NpZ25tZW50ID0gcHJvcHMud29ya0Fzc2lnbm1lbnQ7XG4gICAgdGhpcy5qb2IgPSBwcm9wcy5qb2I7XG4gICAgdGhpcy5tYXJpdGFsU3RhdHVzID0gcHJvcHMubWFyaXRhbFN0YXR1cztcbiAgICB0aGlzLmV0aG5pY2l0eSA9IHByb3BzLmV0aG5pY2l0eTtcbiAgICB0aGlzLmdlbmRlciA9IHByb3BzLmdlbmRlcjtcbiAgICB0aGlzLnB1cmNoYXNlT3JkZXJBcHByb3ZlciA9IHByb3BzLnB1cmNoYXNlT3JkZXJBcHByb3ZlcjtcbiAgICB0aGlzLndvcmtDYWxlbmRhciA9IHByb3BzLndvcmtDYWxlbmRhcjtcbiAgICB0aGlzLmdpdmVBY2Nlc3MgPSBwcm9wcy5naXZlQWNjZXNzO1xuICAgIHRoaXMuZGVmYXVsdEV4cGVuc2VSZXBvcnRDdXJyZW5jeSA9IHByb3BzLmRlZmF1bHRFeHBlbnNlUmVwb3J0Q3VycmVuY3k7XG4gICAgdGhpcy5jb25jdXJyZW50V2ViU2VydmljZXNVc2VyID0gcHJvcHMuY29uY3VycmVudFdlYlNlcnZpY2VzVXNlcjtcbiAgICB0aGlzLnNlbmRFbWFpbCA9IHByb3BzLnNlbmRFbWFpbDtcbiAgICB0aGlzLmhhc09mZmxpbmVBY2Nlc3MgPSBwcm9wcy5oYXNPZmZsaW5lQWNjZXNzO1xuICAgIHRoaXMucGFzc3dvcmQgPSBwcm9wcy5wYXNzd29yZDtcbiAgICB0aGlzLnBhc3N3b3JkMiA9IHByb3BzLnBhc3N3b3JkMjtcbiAgICB0aGlzLnJlcXVpcmVQd2RDaGFuZ2UgPSBwcm9wcy5yZXF1aXJlUHdkQ2hhbmdlO1xuICAgIHRoaXMuaW5oZXJpdElQUnVsZXMgPSBwcm9wcy5pbmhlcml0SVBSdWxlcztcbiAgICB0aGlzLmlwQWRkcmVzc1J1bGUgPSBwcm9wcy5pcEFkZHJlc3NSdWxlO1xuICAgIHRoaXMuc3RhcnREYXRlVGltZU9mZkNhbGMgPSBwcm9wcy5zdGFydERhdGVUaW1lT2ZmQ2FsYztcbiAgICB0aGlzLmNvbW1pc3Npb25QYXltZW50UHJlZmVyZW5jZSA9IHByb3BzLmNvbW1pc3Npb25QYXltZW50UHJlZmVyZW5jZTtcbiAgICB0aGlzLmJpbGxQYXkgPSBwcm9wcy5iaWxsUGF5O1xuICAgIHRoaXMuZGVmYXVsdEFjY3RDb3JwQ2FyZEV4cCA9IHByb3BzLmRlZmF1bHRBY2N0Q29ycENhcmRFeHA7XG4gICAgdGhpcy5lbGlnaWJsZUZvckNvbW1pc3Npb24gPSBwcm9wcy5lbGlnaWJsZUZvckNvbW1pc3Npb247XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zTGlzdCA9IHByb3BzLnN1YnNjcmlwdGlvbnNMaXN0O1xuICAgIHRoaXMucmF0ZXNMaXN0ID0gcHJvcHMucmF0ZXNMaXN0O1xuICAgIHRoaXMuYWRkcmVzc2Jvb2tMaXN0ID0gcHJvcHMuYWRkcmVzc2Jvb2tMaXN0O1xuICAgIHRoaXMucm9sZXNMaXN0ID0gcHJvcHMucm9sZXNMaXN0O1xuICAgIHRoaXMuaHJFZHVjYXRpb25MaXN0ID0gcHJvcHMuaHJFZHVjYXRpb25MaXN0O1xuICAgIHRoaXMuYWNjcnVlZFRpbWVMaXN0ID0gcHJvcHMuYWNjcnVlZFRpbWVMaXN0O1xuICAgIHRoaXMuZGlyZWN0RGVwb3NpdExpc3QgPSBwcm9wcy5kaXJlY3REZXBvc2l0TGlzdDtcbiAgICB0aGlzLmN1cnJlbmN5TGlzdCA9IHByb3BzLmN1cnJlbmN5TGlzdDtcbiAgICB0aGlzLmNvbXBhbnlDb250cmlidXRpb25MaXN0ID0gcHJvcHMuY29tcGFueUNvbnRyaWJ1dGlvbkxpc3Q7XG4gICAgdGhpcy5lYXJuaW5nTGlzdCA9IHByb3BzLmVhcm5pbmdMaXN0O1xuICAgIHRoaXMuZW1lcmdlbmN5Q29udGFjdExpc3QgPSBwcm9wcy5lbWVyZ2VuY3lDb250YWN0TGlzdDtcbiAgICB0aGlzLmhjbVBvc2l0aW9uTGlzdCA9IHByb3BzLmhjbVBvc2l0aW9uTGlzdDtcbiAgICB0aGlzLmRlZHVjdGlvbkxpc3QgPSBwcm9wcy5kZWR1Y3Rpb25MaXN0O1xuICAgIHRoaXMuY3VzdG9tRmllbGRMaXN0ID0gcHJvcHMuY3VzdG9tRmllbGRMaXN0O1xuICAgIHRoaXMuaW50ZXJuYWxJZCA9IHByb3BzLmludGVybmFsSWQ7XG4gICAgdGhpcy5leHRlcm5hbElkID0gcHJvcHMuZXh0ZXJuYWxJZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBFbXBsb3llZURpcmVjdERlcG9zaXRQcm9wcyA9IHtcbiAgaWQ/OiBudW1iZXI7XG4gIG5ldEFjY291bnQ/OiBib29sZWFuO1xuICBzYXZpbmdzQWNjb3VudD86IGJvb2xlYW47XG4gIGFjY291bnRQcmVub3RlZD86IGJvb2xlYW47XG4gIGFjY291bnRTdGF0dXM/OiBMaXN0c0VtcGxveWVlc1R5cGVzLkVtcGxveWVlRGlyZWN0RGVwb3NpdEFjY291bnRTdGF0dXM7XG4gIGJhbmtOYW1lPzogc3RyaW5nO1xuICBiYW5rSWQ/OiBzdHJpbmc7XG4gIGJhbmtOdW1iZXI/OiBzdHJpbmc7XG4gIGJhbmtSb3V0aW5nTnVtYmVyPzogc3RyaW5nO1xuICBiYW5rQWNjb3VudE51bWJlcj86IHN0cmluZztcbiAgYW1vdW50PzogbnVtYmVyO1xuICBpbmFjdGl2ZT86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVEaXJlY3REZXBvc2l0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgaWQ/OiBudW1iZXI7XG4gIG5ldEFjY291bnQ/OiBib29sZWFuO1xuICBzYXZpbmdzQWNjb3VudD86IGJvb2xlYW47XG4gIGFjY291bnRQcmVub3RlZD86IGJvb2xlYW47XG4gIGFjY291bnRTdGF0dXM/OiBMaXN0c0VtcGxveWVlc1R5cGVzLkVtcGxveWVlRGlyZWN0RGVwb3NpdEFjY291bnRTdGF0dXM7XG4gIGJhbmtOYW1lPzogc3RyaW5nO1xuICBiYW5rSWQ/OiBzdHJpbmc7XG4gIGJhbmtOdW1iZXI/OiBzdHJpbmc7XG4gIGJhbmtSb3V0aW5nTnVtYmVyPzogc3RyaW5nO1xuICBiYW5rQWNjb3VudE51bWJlcj86IHN0cmluZztcbiAgYW1vdW50PzogbnVtYmVyO1xuICBpbmFjdGl2ZT86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZURpcmVjdERlcG9zaXRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuaWQgPSBwcm9wcy5pZDtcbiAgICB0aGlzLm5ldEFjY291bnQgPSBwcm9wcy5uZXRBY2NvdW50O1xuICAgIHRoaXMuc2F2aW5nc0FjY291bnQgPSBwcm9wcy5zYXZpbmdzQWNjb3VudDtcbiAgICB0aGlzLmFjY291bnRQcmVub3RlZCA9IHByb3BzLmFjY291bnRQcmVub3RlZDtcbiAgICB0aGlzLmFjY291bnRTdGF0dXMgPSBwcm9wcy5hY2NvdW50U3RhdHVzO1xuICAgIHRoaXMuYmFua05hbWUgPSBwcm9wcy5iYW5rTmFtZTtcbiAgICB0aGlzLmJhbmtJZCA9IHByb3BzLmJhbmtJZDtcbiAgICB0aGlzLmJhbmtOdW1iZXIgPSBwcm9wcy5iYW5rTnVtYmVyO1xuICAgIHRoaXMuYmFua1JvdXRpbmdOdW1iZXIgPSBwcm9wcy5iYW5rUm91dGluZ051bWJlcjtcbiAgICB0aGlzLmJhbmtBY2NvdW50TnVtYmVyID0gcHJvcHMuYmFua0FjY291bnROdW1iZXI7XG4gICAgdGhpcy5hbW91bnQgPSBwcm9wcy5hbW91bnQ7XG4gICAgdGhpcy5pbmFjdGl2ZSA9IHByb3BzLmluYWN0aXZlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEVtcGxveWVlU2VhcmNoUm93UHJvcHMgPSB7XG4gIGJhc2ljPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hSb3dCYXNpYztcbiAgY2FtcGFpZ25SZXNwb25zZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5DYW1wYWlnblNlYXJjaFJvd0Jhc2ljO1xuICBjaGFyZ2VKb2luPzogUGxhdGZvcm1Db21tb24uQ2hhcmdlU2VhcmNoUm93QmFzaWM7XG4gIGRlcGFydG1lbnRKb2luPzogUGxhdGZvcm1Db21tb24uRGVwYXJ0bWVudFNlYXJjaFJvd0Jhc2ljO1xuICBmaWxlSm9pbj86IFBsYXRmb3JtQ29tbW9uLkZpbGVTZWFyY2hSb3dCYXNpYztcbiAgaGNtSm9iSm9pbj86IFBsYXRmb3JtQ29tbW9uLkhjbUpvYlNlYXJjaFJvd0Jhc2ljO1xuICBsb2NhdGlvbkpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5Mb2NhdGlvblNlYXJjaFJvd0Jhc2ljO1xuICBtYW5hZ2VkSm9iSm9pbj86IFBsYXRmb3JtQ29tbW9uLkpvYlNlYXJjaFJvd0Jhc2ljO1xuICBtZXNzYWdlc0pvaW4/OiBQbGF0Zm9ybUNvbW1vbi5NZXNzYWdlU2VhcmNoUm93QmFzaWM7XG4gIG1lc3NhZ2VzRnJvbUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5NZXNzYWdlU2VhcmNoUm93QmFzaWM7XG4gIG1lc3NhZ2VzVG9Kb2luPzogUGxhdGZvcm1Db21tb24uTWVzc2FnZVNlYXJjaFJvd0Jhc2ljO1xuICByZXNvdXJjZUFsbG9jYXRpb25Kb2luPzogUGxhdGZvcm1Db21tb24uUmVzb3VyY2VBbGxvY2F0aW9uU2VhcmNoUm93QmFzaWM7XG4gIHN1YnNpZGlhcnlKb2luPzogUGxhdGZvcm1Db21tb24uU3Vic2lkaWFyeVNlYXJjaFJvd0Jhc2ljO1xuICB0aW1lSm9pbj86IFBsYXRmb3JtQ29tbW9uLlRpbWVCaWxsU2VhcmNoUm93QmFzaWM7XG4gIHRyYW5zYWN0aW9uSm9pbj86IFBsYXRmb3JtQ29tbW9uLlRyYW5zYWN0aW9uU2VhcmNoUm93QmFzaWM7XG4gIHVzZXJKb2luPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hSb3dCYXNpYztcbiAgdXNlck5vdGVzSm9pbj86IFBsYXRmb3JtQ29tbW9uLk5vdGVTZWFyY2hSb3dCYXNpYztcbiAgY3VzdG9tU2VhcmNoSm9pbj86IFBsYXRmb3JtQ29tbW9uLkN1c3RvbVNlYXJjaFJvd0Jhc2ljW107XG59O1xuXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVTZWFyY2hSb3cgZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuU2VhcmNoUm93IHtcbiAgYmFzaWM/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaFJvd0Jhc2ljO1xuICBjYW1wYWlnblJlc3BvbnNlSm9pbj86IFBsYXRmb3JtQ29tbW9uLkNhbXBhaWduU2VhcmNoUm93QmFzaWM7XG4gIGNoYXJnZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5DaGFyZ2VTZWFyY2hSb3dCYXNpYztcbiAgZGVwYXJ0bWVudEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5EZXBhcnRtZW50U2VhcmNoUm93QmFzaWM7XG4gIGZpbGVKb2luPzogUGxhdGZvcm1Db21tb24uRmlsZVNlYXJjaFJvd0Jhc2ljO1xuICBoY21Kb2JKb2luPzogUGxhdGZvcm1Db21tb24uSGNtSm9iU2VhcmNoUm93QmFzaWM7XG4gIGxvY2F0aW9uSm9pbj86IFBsYXRmb3JtQ29tbW9uLkxvY2F0aW9uU2VhcmNoUm93QmFzaWM7XG4gIG1hbmFnZWRKb2JKb2luPzogUGxhdGZvcm1Db21tb24uSm9iU2VhcmNoUm93QmFzaWM7XG4gIG1lc3NhZ2VzSm9pbj86IFBsYXRmb3JtQ29tbW9uLk1lc3NhZ2VTZWFyY2hSb3dCYXNpYztcbiAgbWVzc2FnZXNGcm9tSm9pbj86IFBsYXRmb3JtQ29tbW9uLk1lc3NhZ2VTZWFyY2hSb3dCYXNpYztcbiAgbWVzc2FnZXNUb0pvaW4/OiBQbGF0Zm9ybUNvbW1vbi5NZXNzYWdlU2VhcmNoUm93QmFzaWM7XG4gIHJlc291cmNlQWxsb2NhdGlvbkpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5SZXNvdXJjZUFsbG9jYXRpb25TZWFyY2hSb3dCYXNpYztcbiAgc3Vic2lkaWFyeUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5TdWJzaWRpYXJ5U2VhcmNoUm93QmFzaWM7XG4gIHRpbWVKb2luPzogUGxhdGZvcm1Db21tb24uVGltZUJpbGxTZWFyY2hSb3dCYXNpYztcbiAgdHJhbnNhY3Rpb25Kb2luPzogUGxhdGZvcm1Db21tb24uVHJhbnNhY3Rpb25TZWFyY2hSb3dCYXNpYztcbiAgdXNlckpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaFJvd0Jhc2ljO1xuICB1c2VyTm90ZXNKb2luPzogUGxhdGZvcm1Db21tb24uTm90ZVNlYXJjaFJvd0Jhc2ljO1xuICBjdXN0b21TZWFyY2hKb2luPzogUGxhdGZvcm1Db21tb24uQ3VzdG9tU2VhcmNoUm93QmFzaWNbXTtcbiAgY29uc3RydWN0b3IocHJvcHM6IEVtcGxveWVlU2VhcmNoUm93UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmJhc2ljID0gcHJvcHMuYmFzaWM7XG4gICAgdGhpcy5jYW1wYWlnblJlc3BvbnNlSm9pbiA9IHByb3BzLmNhbXBhaWduUmVzcG9uc2VKb2luO1xuICAgIHRoaXMuY2hhcmdlSm9pbiA9IHByb3BzLmNoYXJnZUpvaW47XG4gICAgdGhpcy5kZXBhcnRtZW50Sm9pbiA9IHByb3BzLmRlcGFydG1lbnRKb2luO1xuICAgIHRoaXMuZmlsZUpvaW4gPSBwcm9wcy5maWxlSm9pbjtcbiAgICB0aGlzLmhjbUpvYkpvaW4gPSBwcm9wcy5oY21Kb2JKb2luO1xuICAgIHRoaXMubG9jYXRpb25Kb2luID0gcHJvcHMubG9jYXRpb25Kb2luO1xuICAgIHRoaXMubWFuYWdlZEpvYkpvaW4gPSBwcm9wcy5tYW5hZ2VkSm9iSm9pbjtcbiAgICB0aGlzLm1lc3NhZ2VzSm9pbiA9IHByb3BzLm1lc3NhZ2VzSm9pbjtcbiAgICB0aGlzLm1lc3NhZ2VzRnJvbUpvaW4gPSBwcm9wcy5tZXNzYWdlc0Zyb21Kb2luO1xuICAgIHRoaXMubWVzc2FnZXNUb0pvaW4gPSBwcm9wcy5tZXNzYWdlc1RvSm9pbjtcbiAgICB0aGlzLnJlc291cmNlQWxsb2NhdGlvbkpvaW4gPSBwcm9wcy5yZXNvdXJjZUFsbG9jYXRpb25Kb2luO1xuICAgIHRoaXMuc3Vic2lkaWFyeUpvaW4gPSBwcm9wcy5zdWJzaWRpYXJ5Sm9pbjtcbiAgICB0aGlzLnRpbWVKb2luID0gcHJvcHMudGltZUpvaW47XG4gICAgdGhpcy50cmFuc2FjdGlvbkpvaW4gPSBwcm9wcy50cmFuc2FjdGlvbkpvaW47XG4gICAgdGhpcy51c2VySm9pbiA9IHByb3BzLnVzZXJKb2luO1xuICAgIHRoaXMudXNlck5vdGVzSm9pbiA9IHByb3BzLnVzZXJOb3Rlc0pvaW47XG4gICAgdGhpcy5jdXN0b21TZWFyY2hKb2luID0gcHJvcHMuY3VzdG9tU2VhcmNoSm9pbjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBFbXBsb3llZVJhdGVzUHJvcHMgPSB7XG4gIGVudGl0eUN1cnJlbmN5PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgcmF0ZT86IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjbGFzcyBFbXBsb3llZVJhdGVzIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgZW50aXR5Q3VycmVuY3k/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICByYXRlPzogbnVtYmVyO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogRW1wbG95ZWVSYXRlc1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5lbnRpdHlDdXJyZW5jeSA9IHByb3BzLmVudGl0eUN1cnJlbmN5O1xuICAgIHRoaXMucmF0ZSA9IHByb3BzLnJhdGU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRW1wbG95ZWVFYXJuaW5nUHJvcHMgPSB7XG4gIHBheXJvbGxJdGVtPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgcGF5UmF0ZT86IHN0cmluZztcbiAgcHJpbWFyeUVhcm5pbmc/OiBib29sZWFuO1xuICBkZWZhdWx0SG91cnM/OiBudW1iZXI7XG4gIGluYWN0aXZlPzogYm9vbGVhbjtcbiAgZGVmYXVsdEVhcm5pbmc/OiBib29sZWFuO1xuICBlZmZlY3RpdmVEYXRlPzogc3RyaW5nO1xuICBleHBpcmF0aW9uRGF0ZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBFbXBsb3llZUVhcm5pbmcgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBwYXlyb2xsSXRlbT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHBheVJhdGU/OiBzdHJpbmc7XG4gIHByaW1hcnlFYXJuaW5nPzogYm9vbGVhbjtcbiAgZGVmYXVsdEhvdXJzPzogbnVtYmVyO1xuICBpbmFjdGl2ZT86IGJvb2xlYW47XG4gIGRlZmF1bHRFYXJuaW5nPzogYm9vbGVhbjtcbiAgZWZmZWN0aXZlRGF0ZT86IHN0cmluZztcbiAgZXhwaXJhdGlvbkRhdGU/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZUVhcm5pbmdQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMucGF5cm9sbEl0ZW0gPSBwcm9wcy5wYXlyb2xsSXRlbTtcbiAgICB0aGlzLnBheVJhdGUgPSBwcm9wcy5wYXlSYXRlO1xuICAgIHRoaXMucHJpbWFyeUVhcm5pbmcgPSBwcm9wcy5wcmltYXJ5RWFybmluZztcbiAgICB0aGlzLmRlZmF1bHRIb3VycyA9IHByb3BzLmRlZmF1bHRIb3VycztcbiAgICB0aGlzLmluYWN0aXZlID0gcHJvcHMuaW5hY3RpdmU7XG4gICAgdGhpcy5kZWZhdWx0RWFybmluZyA9IHByb3BzLmRlZmF1bHRFYXJuaW5nO1xuICAgIHRoaXMuZWZmZWN0aXZlRGF0ZSA9IHByb3BzLmVmZmVjdGl2ZURhdGU7XG4gICAgdGhpcy5leHBpcmF0aW9uRGF0ZSA9IHByb3BzLmV4cGlyYXRpb25EYXRlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFBheXJvbGxJdGVtU2VhcmNoQWR2YW5jZWRQcm9wcyA9IHtcbiAgY3JpdGVyaWE/OiBQYXlyb2xsSXRlbVNlYXJjaDtcbiAgY29sdW1ucz86IFBheXJvbGxJdGVtU2VhcmNoUm93O1xuICBzYXZlZFNlYXJjaElkPzogc3RyaW5nO1xuICBzYXZlZFNlYXJjaFNjcmlwdElkPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIFBheXJvbGxJdGVtU2VhcmNoQWR2YW5jZWQgZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuU2VhcmNoUmVjb3JkIHtcbiAgY3JpdGVyaWE/OiBQYXlyb2xsSXRlbVNlYXJjaDtcbiAgY29sdW1ucz86IFBheXJvbGxJdGVtU2VhcmNoUm93O1xuICBzYXZlZFNlYXJjaElkPzogc3RyaW5nO1xuICBzYXZlZFNlYXJjaFNjcmlwdElkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUGF5cm9sbEl0ZW1TZWFyY2hBZHZhbmNlZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5jcml0ZXJpYSA9IHByb3BzLmNyaXRlcmlhO1xuICAgIHRoaXMuY29sdW1ucyA9IHByb3BzLmNvbHVtbnM7XG4gICAgdGhpcy5zYXZlZFNlYXJjaElkID0gcHJvcHMuc2F2ZWRTZWFyY2hJZDtcbiAgICB0aGlzLnNhdmVkU2VhcmNoU2NyaXB0SWQgPSBwcm9wcy5zYXZlZFNlYXJjaFNjcmlwdElkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEVtcGxveWVlQ29tcGFueUNvbnRyaWJ1dGlvblByb3BzID0ge1xuICBwYXlyb2xsSXRlbT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHJhdGU/OiBzdHJpbmc7XG4gIGxpbWl0PzogbnVtYmVyO1xuICBpbmFjdGl2ZT86IGJvb2xlYW47XG4gIGVmZmVjdGl2ZURhdGU/OiBzdHJpbmc7XG4gIGV4cGlyYXRpb25EYXRlPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIEVtcGxveWVlQ29tcGFueUNvbnRyaWJ1dGlvbiBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHBheXJvbGxJdGVtPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgcmF0ZT86IHN0cmluZztcbiAgbGltaXQ/OiBudW1iZXI7XG4gIGluYWN0aXZlPzogYm9vbGVhbjtcbiAgZWZmZWN0aXZlRGF0ZT86IHN0cmluZztcbiAgZXhwaXJhdGlvbkRhdGU/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZUNvbXBhbnlDb250cmlidXRpb25Qcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMucGF5cm9sbEl0ZW0gPSBwcm9wcy5wYXlyb2xsSXRlbTtcbiAgICB0aGlzLnJhdGUgPSBwcm9wcy5yYXRlO1xuICAgIHRoaXMubGltaXQgPSBwcm9wcy5saW1pdDtcbiAgICB0aGlzLmluYWN0aXZlID0gcHJvcHMuaW5hY3RpdmU7XG4gICAgdGhpcy5lZmZlY3RpdmVEYXRlID0gcHJvcHMuZWZmZWN0aXZlRGF0ZTtcbiAgICB0aGlzLmV4cGlyYXRpb25EYXRlID0gcHJvcHMuZXhwaXJhdGlvbkRhdGU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRW1wbG95ZWVTZWFyY2hBZHZhbmNlZFByb3BzID0ge1xuICBjcml0ZXJpYT86IEVtcGxveWVlU2VhcmNoO1xuICBjb2x1bW5zPzogRW1wbG95ZWVTZWFyY2hSb3c7XG4gIHNhdmVkU2VhcmNoSWQ/OiBzdHJpbmc7XG4gIHNhdmVkU2VhcmNoU2NyaXB0SWQ/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVTZWFyY2hBZHZhbmNlZCBleHRlbmRzIFBsYXRmb3JtQ29yZS5TZWFyY2hSZWNvcmQge1xuICBjcml0ZXJpYT86IEVtcGxveWVlU2VhcmNoO1xuICBjb2x1bW5zPzogRW1wbG95ZWVTZWFyY2hSb3c7XG4gIHNhdmVkU2VhcmNoSWQ/OiBzdHJpbmc7XG4gIHNhdmVkU2VhcmNoU2NyaXB0SWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZVNlYXJjaEFkdmFuY2VkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmNyaXRlcmlhID0gcHJvcHMuY3JpdGVyaWE7XG4gICAgdGhpcy5jb2x1bW5zID0gcHJvcHMuY29sdW1ucztcbiAgICB0aGlzLnNhdmVkU2VhcmNoSWQgPSBwcm9wcy5zYXZlZFNlYXJjaElkO1xuICAgIHRoaXMuc2F2ZWRTZWFyY2hTY3JpcHRJZCA9IHByb3BzLnNhdmVkU2VhcmNoU2NyaXB0SWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRW1wbG95ZWVSb2xlc1Byb3BzID0ge1xuICBzZWxlY3RlZFJvbGU/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xufTtcblxuZXhwb3J0IGNsYXNzIEVtcGxveWVlUm9sZXMgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBzZWxlY3RlZFJvbGU/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogRW1wbG95ZWVSb2xlc1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zZWxlY3RlZFJvbGUgPSBwcm9wcy5zZWxlY3RlZFJvbGU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRW1wbG95ZWVIckVkdWNhdGlvbkxpc3RQcm9wcyA9IHtcbiAgZW1wbG95ZWVIckVkdWNhdGlvbj86IEVtcGxveWVlSHJFZHVjYXRpb25bXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVIckVkdWNhdGlvbkxpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBlbXBsb3llZUhyRWR1Y2F0aW9uPzogRW1wbG95ZWVIckVkdWNhdGlvbltdO1xuICByZXBsYWNlQWxsPzogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IocHJvcHM6IEVtcGxveWVlSHJFZHVjYXRpb25MaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmVtcGxveWVlSHJFZHVjYXRpb24gPSBwcm9wcy5lbXBsb3llZUhyRWR1Y2F0aW9uO1xuICAgIHRoaXMucmVwbGFjZUFsbCA9IHByb3BzLnJlcGxhY2VBbGw7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRW1wbG95ZWVTZWFyY2hQcm9wcyA9IHtcbiAgYmFzaWM/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaEJhc2ljO1xuICBjYW1wYWlnblJlc3BvbnNlSm9pbj86IFBsYXRmb3JtQ29tbW9uLkNhbXBhaWduU2VhcmNoQmFzaWM7XG4gIGNoYXJnZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5DaGFyZ2VTZWFyY2hCYXNpYztcbiAgZGVwYXJ0bWVudEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5EZXBhcnRtZW50U2VhcmNoQmFzaWM7XG4gIGZpbGVKb2luPzogUGxhdGZvcm1Db21tb24uRmlsZVNlYXJjaEJhc2ljO1xuICBoY21Kb2JKb2luPzogUGxhdGZvcm1Db21tb24uSGNtSm9iU2VhcmNoQmFzaWM7XG4gIGxvY2F0aW9uSm9pbj86IFBsYXRmb3JtQ29tbW9uLkxvY2F0aW9uU2VhcmNoQmFzaWM7XG4gIG1hbmFnZWRKb2JKb2luPzogUGxhdGZvcm1Db21tb24uSm9iU2VhcmNoQmFzaWM7XG4gIG1lc3NhZ2VzSm9pbj86IFBsYXRmb3JtQ29tbW9uLk1lc3NhZ2VTZWFyY2hCYXNpYztcbiAgbWVzc2FnZXNGcm9tSm9pbj86IFBsYXRmb3JtQ29tbW9uLk1lc3NhZ2VTZWFyY2hCYXNpYztcbiAgbWVzc2FnZXNUb0pvaW4/OiBQbGF0Zm9ybUNvbW1vbi5NZXNzYWdlU2VhcmNoQmFzaWM7XG4gIHJlc291cmNlQWxsb2NhdGlvbkpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5SZXNvdXJjZUFsbG9jYXRpb25TZWFyY2hCYXNpYztcbiAgc3Vic2lkaWFyeUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5TdWJzaWRpYXJ5U2VhcmNoQmFzaWM7XG4gIHRpbWVKb2luPzogUGxhdGZvcm1Db21tb24uVGltZUJpbGxTZWFyY2hCYXNpYztcbiAgdHJhbnNhY3Rpb25Kb2luPzogUGxhdGZvcm1Db21tb24uVHJhbnNhY3Rpb25TZWFyY2hCYXNpYztcbiAgdXNlckpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaEJhc2ljO1xuICB1c2VyTm90ZXNKb2luPzogUGxhdGZvcm1Db21tb24uTm90ZVNlYXJjaEJhc2ljO1xuICBjdXN0b21TZWFyY2hKb2luPzogUGxhdGZvcm1Db21tb24uQ3VzdG9tU2VhcmNoSm9pbltdO1xufTtcblxuZXhwb3J0IGNsYXNzIEVtcGxveWVlU2VhcmNoIGV4dGVuZHMgUGxhdGZvcm1Db3JlLlNlYXJjaFJlY29yZCB7XG4gIGJhc2ljPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hCYXNpYztcbiAgY2FtcGFpZ25SZXNwb25zZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5DYW1wYWlnblNlYXJjaEJhc2ljO1xuICBjaGFyZ2VKb2luPzogUGxhdGZvcm1Db21tb24uQ2hhcmdlU2VhcmNoQmFzaWM7XG4gIGRlcGFydG1lbnRKb2luPzogUGxhdGZvcm1Db21tb24uRGVwYXJ0bWVudFNlYXJjaEJhc2ljO1xuICBmaWxlSm9pbj86IFBsYXRmb3JtQ29tbW9uLkZpbGVTZWFyY2hCYXNpYztcbiAgaGNtSm9iSm9pbj86IFBsYXRmb3JtQ29tbW9uLkhjbUpvYlNlYXJjaEJhc2ljO1xuICBsb2NhdGlvbkpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5Mb2NhdGlvblNlYXJjaEJhc2ljO1xuICBtYW5hZ2VkSm9iSm9pbj86IFBsYXRmb3JtQ29tbW9uLkpvYlNlYXJjaEJhc2ljO1xuICBtZXNzYWdlc0pvaW4/OiBQbGF0Zm9ybUNvbW1vbi5NZXNzYWdlU2VhcmNoQmFzaWM7XG4gIG1lc3NhZ2VzRnJvbUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5NZXNzYWdlU2VhcmNoQmFzaWM7XG4gIG1lc3NhZ2VzVG9Kb2luPzogUGxhdGZvcm1Db21tb24uTWVzc2FnZVNlYXJjaEJhc2ljO1xuICByZXNvdXJjZUFsbG9jYXRpb25Kb2luPzogUGxhdGZvcm1Db21tb24uUmVzb3VyY2VBbGxvY2F0aW9uU2VhcmNoQmFzaWM7XG4gIHN1YnNpZGlhcnlKb2luPzogUGxhdGZvcm1Db21tb24uU3Vic2lkaWFyeVNlYXJjaEJhc2ljO1xuICB0aW1lSm9pbj86IFBsYXRmb3JtQ29tbW9uLlRpbWVCaWxsU2VhcmNoQmFzaWM7XG4gIHRyYW5zYWN0aW9uSm9pbj86IFBsYXRmb3JtQ29tbW9uLlRyYW5zYWN0aW9uU2VhcmNoQmFzaWM7XG4gIHVzZXJKb2luPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hCYXNpYztcbiAgdXNlck5vdGVzSm9pbj86IFBsYXRmb3JtQ29tbW9uLk5vdGVTZWFyY2hCYXNpYztcbiAgY3VzdG9tU2VhcmNoSm9pbj86IFBsYXRmb3JtQ29tbW9uLkN1c3RvbVNlYXJjaEpvaW5bXTtcbiAgY29uc3RydWN0b3IocHJvcHM6IEVtcGxveWVlU2VhcmNoUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmJhc2ljID0gcHJvcHMuYmFzaWM7XG4gICAgdGhpcy5jYW1wYWlnblJlc3BvbnNlSm9pbiA9IHByb3BzLmNhbXBhaWduUmVzcG9uc2VKb2luO1xuICAgIHRoaXMuY2hhcmdlSm9pbiA9IHByb3BzLmNoYXJnZUpvaW47XG4gICAgdGhpcy5kZXBhcnRtZW50Sm9pbiA9IHByb3BzLmRlcGFydG1lbnRKb2luO1xuICAgIHRoaXMuZmlsZUpvaW4gPSBwcm9wcy5maWxlSm9pbjtcbiAgICB0aGlzLmhjbUpvYkpvaW4gPSBwcm9wcy5oY21Kb2JKb2luO1xuICAgIHRoaXMubG9jYXRpb25Kb2luID0gcHJvcHMubG9jYXRpb25Kb2luO1xuICAgIHRoaXMubWFuYWdlZEpvYkpvaW4gPSBwcm9wcy5tYW5hZ2VkSm9iSm9pbjtcbiAgICB0aGlzLm1lc3NhZ2VzSm9pbiA9IHByb3BzLm1lc3NhZ2VzSm9pbjtcbiAgICB0aGlzLm1lc3NhZ2VzRnJvbUpvaW4gPSBwcm9wcy5tZXNzYWdlc0Zyb21Kb2luO1xuICAgIHRoaXMubWVzc2FnZXNUb0pvaW4gPSBwcm9wcy5tZXNzYWdlc1RvSm9pbjtcbiAgICB0aGlzLnJlc291cmNlQWxsb2NhdGlvbkpvaW4gPSBwcm9wcy5yZXNvdXJjZUFsbG9jYXRpb25Kb2luO1xuICAgIHRoaXMuc3Vic2lkaWFyeUpvaW4gPSBwcm9wcy5zdWJzaWRpYXJ5Sm9pbjtcbiAgICB0aGlzLnRpbWVKb2luID0gcHJvcHMudGltZUpvaW47XG4gICAgdGhpcy50cmFuc2FjdGlvbkpvaW4gPSBwcm9wcy50cmFuc2FjdGlvbkpvaW47XG4gICAgdGhpcy51c2VySm9pbiA9IHByb3BzLnVzZXJKb2luO1xuICAgIHRoaXMudXNlck5vdGVzSm9pbiA9IHByb3BzLnVzZXJOb3Rlc0pvaW47XG4gICAgdGhpcy5jdXN0b21TZWFyY2hKb2luID0gcHJvcHMuY3VzdG9tU2VhcmNoSm9pbjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBFbXBsb3llZUFkZHJlc3Nib29rTGlzdFByb3BzID0ge1xuICBhZGRyZXNzYm9vaz86IEVtcGxveWVlQWRkcmVzc2Jvb2tbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVBZGRyZXNzYm9va0xpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBhZGRyZXNzYm9vaz86IEVtcGxveWVlQWRkcmVzc2Jvb2tbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZUFkZHJlc3Nib29rTGlzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5hZGRyZXNzYm9vayA9IHByb3BzLmFkZHJlc3Nib29rO1xuICAgIHRoaXMucmVwbGFjZUFsbCA9IHByb3BzLnJlcGxhY2VBbGw7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUGF5cm9sbEl0ZW1TZWFyY2hSb3dQcm9wcyA9IHtcbiAgYmFzaWM/OiBQbGF0Zm9ybUNvbW1vbi5QYXlyb2xsSXRlbVNlYXJjaFJvd0Jhc2ljO1xuICBjdXN0b21TZWFyY2hKb2luPzogUGxhdGZvcm1Db21tb24uQ3VzdG9tU2VhcmNoUm93QmFzaWNbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBQYXlyb2xsSXRlbVNlYXJjaFJvdyBleHRlbmRzIFBsYXRmb3JtQ29yZS5TZWFyY2hSb3cge1xuICBiYXNpYz86IFBsYXRmb3JtQ29tbW9uLlBheXJvbGxJdGVtU2VhcmNoUm93QmFzaWM7XG4gIGN1c3RvbVNlYXJjaEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5DdXN0b21TZWFyY2hSb3dCYXNpY1tdO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUGF5cm9sbEl0ZW1TZWFyY2hSb3dQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuYmFzaWMgPSBwcm9wcy5iYXNpYztcbiAgICB0aGlzLmN1c3RvbVNlYXJjaEpvaW4gPSBwcm9wcy5jdXN0b21TZWFyY2hKb2luO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEVtcGxveWVlQWNjcnVlZFRpbWVQcm9wcyA9IHtcbiAgcGF5cm9sbEl0ZW0/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBhY2NydWVkSG91cnM/OiBudW1iZXI7XG4gIGFjY3J1YWxSYXRlPzogbnVtYmVyO1xuICBtb25ldGFyeVJhdGU/OiBudW1iZXI7XG4gIHJlc2V0QWNjcnVlZEhvdXJzQXRZZWFyRW5kPzogYm9vbGVhbjtcbiAgYWNjcnVhbE1ldGhvZD86IExpc3RzRW1wbG95ZWVzVHlwZXMuRW1wbG95ZWVBY2NydWVkVGltZUFjY3J1YWxNZXRob2Q7XG4gIG1heGltdW1BY2NydWVkSG91cnM/OiBudW1iZXI7XG4gIGluYWN0aXZlPzogYm9vbGVhbjtcbiAgZWZmZWN0aXZlRGF0ZT86IHN0cmluZztcbiAgZXhwaXJhdGlvbkRhdGU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVBY2NydWVkVGltZSBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHBheXJvbGxJdGVtPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgYWNjcnVlZEhvdXJzPzogbnVtYmVyO1xuICBhY2NydWFsUmF0ZT86IG51bWJlcjtcbiAgbW9uZXRhcnlSYXRlPzogbnVtYmVyO1xuICByZXNldEFjY3J1ZWRIb3Vyc0F0WWVhckVuZD86IGJvb2xlYW47XG4gIGFjY3J1YWxNZXRob2Q/OiBMaXN0c0VtcGxveWVlc1R5cGVzLkVtcGxveWVlQWNjcnVlZFRpbWVBY2NydWFsTWV0aG9kO1xuICBtYXhpbXVtQWNjcnVlZEhvdXJzPzogbnVtYmVyO1xuICBpbmFjdGl2ZT86IGJvb2xlYW47XG4gIGVmZmVjdGl2ZURhdGU/OiBzdHJpbmc7XG4gIGV4cGlyYXRpb25EYXRlPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogRW1wbG95ZWVBY2NydWVkVGltZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5wYXlyb2xsSXRlbSA9IHByb3BzLnBheXJvbGxJdGVtO1xuICAgIHRoaXMuYWNjcnVlZEhvdXJzID0gcHJvcHMuYWNjcnVlZEhvdXJzO1xuICAgIHRoaXMuYWNjcnVhbFJhdGUgPSBwcm9wcy5hY2NydWFsUmF0ZTtcbiAgICB0aGlzLm1vbmV0YXJ5UmF0ZSA9IHByb3BzLm1vbmV0YXJ5UmF0ZTtcbiAgICB0aGlzLnJlc2V0QWNjcnVlZEhvdXJzQXRZZWFyRW5kID0gcHJvcHMucmVzZXRBY2NydWVkSG91cnNBdFllYXJFbmQ7XG4gICAgdGhpcy5hY2NydWFsTWV0aG9kID0gcHJvcHMuYWNjcnVhbE1ldGhvZDtcbiAgICB0aGlzLm1heGltdW1BY2NydWVkSG91cnMgPSBwcm9wcy5tYXhpbXVtQWNjcnVlZEhvdXJzO1xuICAgIHRoaXMuaW5hY3RpdmUgPSBwcm9wcy5pbmFjdGl2ZTtcbiAgICB0aGlzLmVmZmVjdGl2ZURhdGUgPSBwcm9wcy5lZmZlY3RpdmVEYXRlO1xuICAgIHRoaXMuZXhwaXJhdGlvbkRhdGUgPSBwcm9wcy5leHBpcmF0aW9uRGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBFbXBsb3llZUVtZXJnZW5jeUNvbnRhY3RQcm9wcyA9IHtcbiAgaWQ/OiBudW1iZXI7XG4gIGNvbnRhY3Q/OiBzdHJpbmc7XG4gIHJlbGF0aW9uc2hpcD86IHN0cmluZztcbiAgYWRkcmVzcz86IHN0cmluZztcbiAgcGhvbmU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVFbWVyZ2VuY3lDb250YWN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgaWQ/OiBudW1iZXI7XG4gIGNvbnRhY3Q/OiBzdHJpbmc7XG4gIHJlbGF0aW9uc2hpcD86IHN0cmluZztcbiAgYWRkcmVzcz86IHN0cmluZztcbiAgcGhvbmU/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZUVtZXJnZW5jeUNvbnRhY3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuaWQgPSBwcm9wcy5pZDtcbiAgICB0aGlzLmNvbnRhY3QgPSBwcm9wcy5jb250YWN0O1xuICAgIHRoaXMucmVsYXRpb25zaGlwID0gcHJvcHMucmVsYXRpb25zaGlwO1xuICAgIHRoaXMuYWRkcmVzcyA9IHByb3BzLmFkZHJlc3M7XG4gICAgdGhpcy5waG9uZSA9IHByb3BzLnBob25lO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEhjbUpvYlByb3BzID0ge1xuICB0aXRsZT86IHN0cmluZztcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGVtcGxveW1lbnRDYXRlZ29yeT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGpvYklkPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgY3VzdG9tRmllbGRMaXN0PzogUGxhdGZvcm1Db3JlLkN1c3RvbUZpZWxkTGlzdDtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgZXh0ZXJuYWxJZD86IHN0cmluZztcbn0gJiBQbGF0Zm9ybUNvcmUuUmVjb3JkUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBIY21Kb2IgZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuUmVjb3JkIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGlzSW5hY3RpdmU/OiBib29sZWFuO1xuICBlbXBsb3ltZW50Q2F0ZWdvcnk/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBqb2JJZD86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGN1c3RvbUZpZWxkTGlzdD86IFBsYXRmb3JtQ29yZS5DdXN0b21GaWVsZExpc3Q7XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBIY21Kb2JQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMudGl0bGUgPSBwcm9wcy50aXRsZTtcbiAgICB0aGlzLmlzSW5hY3RpdmUgPSBwcm9wcy5pc0luYWN0aXZlO1xuICAgIHRoaXMuZW1wbG95bWVudENhdGVnb3J5ID0gcHJvcHMuZW1wbG95bWVudENhdGVnb3J5O1xuICAgIHRoaXMuam9iSWQgPSBwcm9wcy5qb2JJZDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgdGhpcy5jdXN0b21GaWVsZExpc3QgPSBwcm9wcy5jdXN0b21GaWVsZExpc3Q7XG4gICAgdGhpcy5pbnRlcm5hbElkID0gcHJvcHMuaW50ZXJuYWxJZDtcbiAgICB0aGlzLmV4dGVybmFsSWQgPSBwcm9wcy5leHRlcm5hbElkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEVtcGxveWVlQ29tcGFueUNvbnRyaWJ1dGlvbkxpc3RQcm9wcyA9IHtcbiAgZW1wbG95ZWVDb21wYW55Q29udHJpYnV0aW9uPzogRW1wbG95ZWVDb21wYW55Q29udHJpYnV0aW9uW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIEVtcGxveWVlQ29tcGFueUNvbnRyaWJ1dGlvbkxpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBlbXBsb3llZUNvbXBhbnlDb250cmlidXRpb24/OiBFbXBsb3llZUNvbXBhbnlDb250cmlidXRpb25bXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZUNvbXBhbnlDb250cmlidXRpb25MaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmVtcGxveWVlQ29tcGFueUNvbnRyaWJ1dGlvbiA9IHByb3BzLmVtcGxveWVlQ29tcGFueUNvbnRyaWJ1dGlvbjtcbiAgICB0aGlzLnJlcGxhY2VBbGwgPSBwcm9wcy5yZXBsYWNlQWxsO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEVtcGxveWVlRGlyZWN0RGVwb3NpdExpc3RQcm9wcyA9IHtcbiAgZW1wbG95ZWVEaXJlY3REZXBvc2l0PzogRW1wbG95ZWVEaXJlY3REZXBvc2l0W107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIEVtcGxveWVlRGlyZWN0RGVwb3NpdExpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBlbXBsb3llZURpcmVjdERlcG9zaXQ/OiBFbXBsb3llZURpcmVjdERlcG9zaXRbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZURpcmVjdERlcG9zaXRMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmVtcGxveWVlRGlyZWN0RGVwb3NpdCA9IHByb3BzLmVtcGxveWVlRGlyZWN0RGVwb3NpdDtcbiAgICB0aGlzLnJlcGxhY2VBbGwgPSBwcm9wcy5yZXBsYWNlQWxsO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEVtcGxveWVlSGNtUG9zaXRpb25Qcm9wcyA9IHtcbiAgcG9zaXRpb24/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBwcmltYXJ5UG9zaXRpb24/OiBib29sZWFuO1xuICBwb3NpdGlvbklkPzogc3RyaW5nO1xuICBwb3NpdGlvbkFsbG9jYXRpb24/OiBudW1iZXI7XG4gIGZ1bGxUaW1lRXF1aXZhbGVudD86IG51bWJlcjtcbiAgZW1wbG95bWVudENhdGVnb3J5PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgcmVwb3J0c1RvPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgc3Vic2lkaWFyeT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGxvY2F0aW9uPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbn07XG5cbmV4cG9ydCBjbGFzcyBFbXBsb3llZUhjbVBvc2l0aW9uIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgcG9zaXRpb24/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBwcmltYXJ5UG9zaXRpb24/OiBib29sZWFuO1xuICBwb3NpdGlvbklkPzogc3RyaW5nO1xuICBwb3NpdGlvbkFsbG9jYXRpb24/OiBudW1iZXI7XG4gIGZ1bGxUaW1lRXF1aXZhbGVudD86IG51bWJlcjtcbiAgZW1wbG95bWVudENhdGVnb3J5PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgcmVwb3J0c1RvPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgc3Vic2lkaWFyeT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGxvY2F0aW9uPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgY29uc3RydWN0b3IocHJvcHM6IEVtcGxveWVlSGNtUG9zaXRpb25Qcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMucG9zaXRpb24gPSBwcm9wcy5wb3NpdGlvbjtcbiAgICB0aGlzLnByaW1hcnlQb3NpdGlvbiA9IHByb3BzLnByaW1hcnlQb3NpdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uSWQgPSBwcm9wcy5wb3NpdGlvbklkO1xuICAgIHRoaXMucG9zaXRpb25BbGxvY2F0aW9uID0gcHJvcHMucG9zaXRpb25BbGxvY2F0aW9uO1xuICAgIHRoaXMuZnVsbFRpbWVFcXVpdmFsZW50ID0gcHJvcHMuZnVsbFRpbWVFcXVpdmFsZW50O1xuICAgIHRoaXMuZW1wbG95bWVudENhdGVnb3J5ID0gcHJvcHMuZW1wbG95bWVudENhdGVnb3J5O1xuICAgIHRoaXMucmVwb3J0c1RvID0gcHJvcHMucmVwb3J0c1RvO1xuICAgIHRoaXMuc3Vic2lkaWFyeSA9IHByb3BzLnN1YnNpZGlhcnk7XG4gICAgdGhpcy5sb2NhdGlvbiA9IHByb3BzLmxvY2F0aW9uO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEVtcGxveWVlRGVkdWN0aW9uUHJvcHMgPSB7XG4gIHBheXJvbGxJdGVtPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgcmF0ZT86IHN0cmluZztcbiAgbGltaXQ/OiBudW1iZXI7XG4gIGluYWN0aXZlPzogYm9vbGVhbjtcbiAgZWZmZWN0aXZlRGF0ZT86IHN0cmluZztcbiAgZXhwaXJhdGlvbkRhdGU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVEZWR1Y3Rpb24gZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBwYXlyb2xsSXRlbT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHJhdGU/OiBzdHJpbmc7XG4gIGxpbWl0PzogbnVtYmVyO1xuICBpbmFjdGl2ZT86IGJvb2xlYW47XG4gIGVmZmVjdGl2ZURhdGU/OiBzdHJpbmc7XG4gIGV4cGlyYXRpb25EYXRlPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogRW1wbG95ZWVEZWR1Y3Rpb25Qcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMucGF5cm9sbEl0ZW0gPSBwcm9wcy5wYXlyb2xsSXRlbTtcbiAgICB0aGlzLnJhdGUgPSBwcm9wcy5yYXRlO1xuICAgIHRoaXMubGltaXQgPSBwcm9wcy5saW1pdDtcbiAgICB0aGlzLmluYWN0aXZlID0gcHJvcHMuaW5hY3RpdmU7XG4gICAgdGhpcy5lZmZlY3RpdmVEYXRlID0gcHJvcHMuZWZmZWN0aXZlRGF0ZTtcbiAgICB0aGlzLmV4cGlyYXRpb25EYXRlID0gcHJvcHMuZXhwaXJhdGlvbkRhdGU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRW1wbG95ZWVTdWJzY3JpcHRpb25zUHJvcHMgPSB7XG4gIHN1YnNjcmliZWQ/OiBzdHJpbmc7XG4gIHN1YnNjcmlwdGlvbj86IHN0cmluZztcbiAgbGFzdE1vZGlmaWVkRGF0ZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBFbXBsb3llZVN1YnNjcmlwdGlvbnMgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBzdWJzY3JpYmVkPzogc3RyaW5nO1xuICBzdWJzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGxhc3RNb2RpZmllZERhdGU/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZVN1YnNjcmlwdGlvbnNQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc3Vic2NyaWJlZCA9IHByb3BzLnN1YnNjcmliZWQ7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBwcm9wcy5zdWJzY3JpcHRpb247XG4gICAgdGhpcy5sYXN0TW9kaWZpZWREYXRlID0gcHJvcHMubGFzdE1vZGlmaWVkRGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBFbXBsb3llZVN1YnNjcmlwdGlvbnNMaXN0UHJvcHMgPSB7XG4gIHN1YnNjcmlwdGlvbnM/OiBFbXBsb3llZVN1YnNjcmlwdGlvbnNbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVTdWJzY3JpcHRpb25zTGlzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHN1YnNjcmlwdGlvbnM/OiBFbXBsb3llZVN1YnNjcmlwdGlvbnNbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZVN1YnNjcmlwdGlvbnNMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBwcm9wcy5zdWJzY3JpcHRpb25zO1xuICAgIHRoaXMucmVwbGFjZUFsbCA9IHByb3BzLnJlcGxhY2VBbGw7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRW1wbG95ZWVIckVkdWNhdGlvblByb3BzID0ge1xuICBlZHVjYXRpb24/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBkZWdyZWU/OiBzdHJpbmc7XG4gIGRlZ3JlZURhdGU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVIckVkdWNhdGlvbiBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGVkdWNhdGlvbj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGRlZ3JlZT86IHN0cmluZztcbiAgZGVncmVlRGF0ZT86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IEVtcGxveWVlSHJFZHVjYXRpb25Qcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZWR1Y2F0aW9uID0gcHJvcHMuZWR1Y2F0aW9uO1xuICAgIHRoaXMuZGVncmVlID0gcHJvcHMuZGVncmVlO1xuICAgIHRoaXMuZGVncmVlRGF0ZSA9IHByb3BzLmRlZ3JlZURhdGU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgSGNtSm9iU2VhcmNoQWR2YW5jZWRQcm9wcyA9IHtcbiAgY3JpdGVyaWE/OiBIY21Kb2JTZWFyY2g7XG4gIGNvbHVtbnM/OiBIY21Kb2JTZWFyY2hSb3c7XG4gIHNhdmVkU2VhcmNoSWQ/OiBzdHJpbmc7XG4gIHNhdmVkU2VhcmNoU2NyaXB0SWQ/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgSGNtSm9iU2VhcmNoQWR2YW5jZWQgZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuU2VhcmNoUmVjb3JkIHtcbiAgY3JpdGVyaWE/OiBIY21Kb2JTZWFyY2g7XG4gIGNvbHVtbnM/OiBIY21Kb2JTZWFyY2hSb3c7XG4gIHNhdmVkU2VhcmNoSWQ/OiBzdHJpbmc7XG4gIHNhdmVkU2VhcmNoU2NyaXB0SWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBIY21Kb2JTZWFyY2hBZHZhbmNlZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5jcml0ZXJpYSA9IHByb3BzLmNyaXRlcmlhO1xuICAgIHRoaXMuY29sdW1ucyA9IHByb3BzLmNvbHVtbnM7XG4gICAgdGhpcy5zYXZlZFNlYXJjaElkID0gcHJvcHMuc2F2ZWRTZWFyY2hJZDtcbiAgICB0aGlzLnNhdmVkU2VhcmNoU2NyaXB0SWQgPSBwcm9wcy5zYXZlZFNlYXJjaFNjcmlwdElkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEVtcGxveWVlQ3VycmVuY3lQcm9wcyA9IHtcbiAgY3VycmVuY3k/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xufTtcblxuZXhwb3J0IGNsYXNzIEVtcGxveWVlQ3VycmVuY3kgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBjdXJyZW5jeT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZUN1cnJlbmN5UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmN1cnJlbmN5ID0gcHJvcHMuY3VycmVuY3k7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRW1wbG95ZWVSYXRlc0xpc3RQcm9wcyA9IHtcbiAgZW1wbG95ZWVSYXRlcz86IEVtcGxveWVlUmF0ZXNbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVSYXRlc0xpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBlbXBsb3llZVJhdGVzPzogRW1wbG95ZWVSYXRlc1tdO1xuICByZXBsYWNlQWxsPzogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IocHJvcHM6IEVtcGxveWVlUmF0ZXNMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmVtcGxveWVlUmF0ZXMgPSBwcm9wcy5lbXBsb3llZVJhdGVzO1xuICAgIHRoaXMucmVwbGFjZUFsbCA9IHByb3BzLnJlcGxhY2VBbGw7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUGF5cm9sbEl0ZW1Qcm9wcyA9IHtcbiAgc3Vic2lkaWFyeT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGl0ZW1UeXBlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgbmFtZT86IHN0cmluZztcbiAgdmVuZG9yPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgZXhwZW5zZUFjY291bnQ/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBsaWFiaWxpdHlBY2NvdW50PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgZW1wbG95ZWVQYWlkPzogYm9vbGVhbjtcbiAgYWNjb3VudENhdGVnb3J5PzogTGlzdHNFbXBsb3llZXNUeXBlcy5QYXlyb2xsSXRlbUFjY291bnRDYXRlZ29yeTtcbiAgaW5hY3RpdmU/OiBib29sZWFuO1xuICBjdXN0b21GaWVsZExpc3Q/OiBQbGF0Zm9ybUNvcmUuQ3VzdG9tRmllbGRMaXN0O1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xufSAmIFBsYXRmb3JtQ29yZS5SZWNvcmRQcm9wcztcblxuZXhwb3J0IGNsYXNzIFBheXJvbGxJdGVtIGV4dGVuZHMgUGxhdGZvcm1Db3JlLlJlY29yZCB7XG4gIHN1YnNpZGlhcnk/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBpdGVtVHlwZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZlbmRvcj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGV4cGVuc2VBY2NvdW50PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgbGlhYmlsaXR5QWNjb3VudD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGVtcGxveWVlUGFpZD86IGJvb2xlYW47XG4gIGFjY291bnRDYXRlZ29yeT86IExpc3RzRW1wbG95ZWVzVHlwZXMuUGF5cm9sbEl0ZW1BY2NvdW50Q2F0ZWdvcnk7XG4gIGluYWN0aXZlPzogYm9vbGVhbjtcbiAgY3VzdG9tRmllbGRMaXN0PzogUGxhdGZvcm1Db3JlLkN1c3RvbUZpZWxkTGlzdDtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgZXh0ZXJuYWxJZD86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IFBheXJvbGxJdGVtUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnN1YnNpZGlhcnkgPSBwcm9wcy5zdWJzaWRpYXJ5O1xuICAgIHRoaXMuaXRlbVR5cGUgPSBwcm9wcy5pdGVtVHlwZTtcbiAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIHRoaXMudmVuZG9yID0gcHJvcHMudmVuZG9yO1xuICAgIHRoaXMuZXhwZW5zZUFjY291bnQgPSBwcm9wcy5leHBlbnNlQWNjb3VudDtcbiAgICB0aGlzLmxpYWJpbGl0eUFjY291bnQgPSBwcm9wcy5saWFiaWxpdHlBY2NvdW50O1xuICAgIHRoaXMuZW1wbG95ZWVQYWlkID0gcHJvcHMuZW1wbG95ZWVQYWlkO1xuICAgIHRoaXMuYWNjb3VudENhdGVnb3J5ID0gcHJvcHMuYWNjb3VudENhdGVnb3J5O1xuICAgIHRoaXMuaW5hY3RpdmUgPSBwcm9wcy5pbmFjdGl2ZTtcbiAgICB0aGlzLmN1c3RvbUZpZWxkTGlzdCA9IHByb3BzLmN1c3RvbUZpZWxkTGlzdDtcbiAgICB0aGlzLmludGVybmFsSWQgPSBwcm9wcy5pbnRlcm5hbElkO1xuICAgIHRoaXMuZXh0ZXJuYWxJZCA9IHByb3BzLmV4dGVybmFsSWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgSGNtSm9iU2VhcmNoUHJvcHMgPSB7XG4gIGJhc2ljPzogUGxhdGZvcm1Db21tb24uSGNtSm9iU2VhcmNoQmFzaWM7XG4gIGVtcGxveWVlSm9pbj86IFBsYXRmb3JtQ29tbW9uLkVtcGxveWVlU2VhcmNoQmFzaWM7XG4gIGN1c3RvbVNlYXJjaEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5DdXN0b21TZWFyY2hKb2luW107XG59O1xuXG5leHBvcnQgY2xhc3MgSGNtSm9iU2VhcmNoIGV4dGVuZHMgUGxhdGZvcm1Db3JlLlNlYXJjaFJlY29yZCB7XG4gIGJhc2ljPzogUGxhdGZvcm1Db21tb24uSGNtSm9iU2VhcmNoQmFzaWM7XG4gIGVtcGxveWVlSm9pbj86IFBsYXRmb3JtQ29tbW9uLkVtcGxveWVlU2VhcmNoQmFzaWM7XG4gIGN1c3RvbVNlYXJjaEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5DdXN0b21TZWFyY2hKb2luW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBIY21Kb2JTZWFyY2hQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuYmFzaWMgPSBwcm9wcy5iYXNpYztcbiAgICB0aGlzLmVtcGxveWVlSm9pbiA9IHByb3BzLmVtcGxveWVlSm9pbjtcbiAgICB0aGlzLmN1c3RvbVNlYXJjaEpvaW4gPSBwcm9wcy5jdXN0b21TZWFyY2hKb2luO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEVtcGxveWVlQWNjcnVlZFRpbWVMaXN0UHJvcHMgPSB7XG4gIGVtcGxveWVlQWNjcnVlZFRpbWU/OiBFbXBsb3llZUFjY3J1ZWRUaW1lW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIEVtcGxveWVlQWNjcnVlZFRpbWVMaXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgZW1wbG95ZWVBY2NydWVkVGltZT86IEVtcGxveWVlQWNjcnVlZFRpbWVbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZUFjY3J1ZWRUaW1lTGlzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5lbXBsb3llZUFjY3J1ZWRUaW1lID0gcHJvcHMuZW1wbG95ZWVBY2NydWVkVGltZTtcbiAgICB0aGlzLnJlcGxhY2VBbGwgPSBwcm9wcy5yZXBsYWNlQWxsO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEVtcGxveWVlRGVkdWN0aW9uTGlzdFByb3BzID0ge1xuICBlbXBsb3llZURlZHVjdGlvbj86IEVtcGxveWVlRGVkdWN0aW9uW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIEVtcGxveWVlRGVkdWN0aW9uTGlzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGVtcGxveWVlRGVkdWN0aW9uPzogRW1wbG95ZWVEZWR1Y3Rpb25bXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZURlZHVjdGlvbkxpc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZW1wbG95ZWVEZWR1Y3Rpb24gPSBwcm9wcy5lbXBsb3llZURlZHVjdGlvbjtcbiAgICB0aGlzLnJlcGxhY2VBbGwgPSBwcm9wcy5yZXBsYWNlQWxsO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFBheXJvbGxJdGVtU2VhcmNoUHJvcHMgPSB7XG4gIGJhc2ljPzogUGxhdGZvcm1Db21tb24uUGF5cm9sbEl0ZW1TZWFyY2hCYXNpYztcbiAgY3VzdG9tU2VhcmNoSm9pbj86IFBsYXRmb3JtQ29tbW9uLkN1c3RvbVNlYXJjaEpvaW5bXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBQYXlyb2xsSXRlbVNlYXJjaCBleHRlbmRzIFBsYXRmb3JtQ29yZS5TZWFyY2hSZWNvcmQge1xuICBiYXNpYz86IFBsYXRmb3JtQ29tbW9uLlBheXJvbGxJdGVtU2VhcmNoQmFzaWM7XG4gIGN1c3RvbVNlYXJjaEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5DdXN0b21TZWFyY2hKb2luW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQYXlyb2xsSXRlbVNlYXJjaFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5iYXNpYyA9IHByb3BzLmJhc2ljO1xuICAgIHRoaXMuY3VzdG9tU2VhcmNoSm9pbiA9IHByb3BzLmN1c3RvbVNlYXJjaEpvaW47XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRW1wbG95ZWVBZGRyZXNzYm9va1Byb3BzID0ge1xuICBkZWZhdWx0U2hpcHBpbmc/OiBib29sZWFuO1xuICBkZWZhdWx0QmlsbGluZz86IGJvb2xlYW47XG4gIGxhYmVsPzogc3RyaW5nO1xuICBhZGRyZXNzYm9va0FkZHJlc3M/OiBQbGF0Zm9ybUNvbW1vbi5BZGRyZXNzO1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIEVtcGxveWVlQWRkcmVzc2Jvb2sgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBkZWZhdWx0U2hpcHBpbmc/OiBib29sZWFuO1xuICBkZWZhdWx0QmlsbGluZz86IGJvb2xlYW47XG4gIGxhYmVsPzogc3RyaW5nO1xuICBhZGRyZXNzYm9va0FkZHJlc3M/OiBQbGF0Zm9ybUNvbW1vbi5BZGRyZXNzO1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogRW1wbG95ZWVBZGRyZXNzYm9va1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5kZWZhdWx0U2hpcHBpbmcgPSBwcm9wcy5kZWZhdWx0U2hpcHBpbmc7XG4gICAgdGhpcy5kZWZhdWx0QmlsbGluZyA9IHByb3BzLmRlZmF1bHRCaWxsaW5nO1xuICAgIHRoaXMubGFiZWwgPSBwcm9wcy5sYWJlbDtcbiAgICB0aGlzLmFkZHJlc3Nib29rQWRkcmVzcyA9IHByb3BzLmFkZHJlc3Nib29rQWRkcmVzcztcbiAgICB0aGlzLmludGVybmFsSWQgPSBwcm9wcy5pbnRlcm5hbElkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEVtcGxveWVlQ3VycmVuY3lMaXN0UHJvcHMgPSB7XG4gIGVtcGxveWVlQ3VycmVuY3k/OiBFbXBsb3llZUN1cnJlbmN5W107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIEVtcGxveWVlQ3VycmVuY3lMaXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgZW1wbG95ZWVDdXJyZW5jeT86IEVtcGxveWVlQ3VycmVuY3lbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZUN1cnJlbmN5TGlzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5lbXBsb3llZUN1cnJlbmN5ID0gcHJvcHMuZW1wbG95ZWVDdXJyZW5jeTtcbiAgICB0aGlzLnJlcGxhY2VBbGwgPSBwcm9wcy5yZXBsYWNlQWxsO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEVtcGxveWVlRWFybmluZ0xpc3RQcm9wcyA9IHtcbiAgZW1wbG95ZWVFYXJuaW5nPzogRW1wbG95ZWVFYXJuaW5nW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIEVtcGxveWVlRWFybmluZ0xpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBlbXBsb3llZUVhcm5pbmc/OiBFbXBsb3llZUVhcm5pbmdbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZUVhcm5pbmdMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmVtcGxveWVlRWFybmluZyA9IHByb3BzLmVtcGxveWVlRWFybmluZztcbiAgICB0aGlzLnJlcGxhY2VBbGwgPSBwcm9wcy5yZXBsYWNlQWxsO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEhjbUpvYlNlYXJjaFJvd1Byb3BzID0ge1xuICBiYXNpYz86IFBsYXRmb3JtQ29tbW9uLkhjbUpvYlNlYXJjaFJvd0Jhc2ljO1xuICBlbXBsb3llZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaFJvd0Jhc2ljO1xuICBjdXN0b21TZWFyY2hKb2luPzogUGxhdGZvcm1Db21tb24uQ3VzdG9tU2VhcmNoUm93QmFzaWNbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBIY21Kb2JTZWFyY2hSb3cgZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuU2VhcmNoUm93IHtcbiAgYmFzaWM/OiBQbGF0Zm9ybUNvbW1vbi5IY21Kb2JTZWFyY2hSb3dCYXNpYztcbiAgZW1wbG95ZWVKb2luPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hSb3dCYXNpYztcbiAgY3VzdG9tU2VhcmNoSm9pbj86IFBsYXRmb3JtQ29tbW9uLkN1c3RvbVNlYXJjaFJvd0Jhc2ljW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBIY21Kb2JTZWFyY2hSb3dQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuYmFzaWMgPSBwcm9wcy5iYXNpYztcbiAgICB0aGlzLmVtcGxveWVlSm9pbiA9IHByb3BzLmVtcGxveWVlSm9pbjtcbiAgICB0aGlzLmN1c3RvbVNlYXJjaEpvaW4gPSBwcm9wcy5jdXN0b21TZWFyY2hKb2luO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEVtcGxveWVlRW1lcmdlbmN5Q29udGFjdExpc3RQcm9wcyA9IHtcbiAgZW1wbG95ZWVFbWVyZ2VuY3lDb250YWN0PzogRW1wbG95ZWVFbWVyZ2VuY3lDb250YWN0W107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIEVtcGxveWVlRW1lcmdlbmN5Q29udGFjdExpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBlbXBsb3llZUVtZXJnZW5jeUNvbnRhY3Q/OiBFbXBsb3llZUVtZXJnZW5jeUNvbnRhY3RbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZUVtZXJnZW5jeUNvbnRhY3RMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmVtcGxveWVlRW1lcmdlbmN5Q29udGFjdCA9IHByb3BzLmVtcGxveWVlRW1lcmdlbmN5Q29udGFjdDtcbiAgICB0aGlzLnJlcGxhY2VBbGwgPSBwcm9wcy5yZXBsYWNlQWxsO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEVtcGxveWVlSGNtUG9zaXRpb25MaXN0UHJvcHMgPSB7XG4gIGVtcGxveWVlSGNtUG9zaXRpb24/OiBFbXBsb3llZUhjbVBvc2l0aW9uW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIEVtcGxveWVlSGNtUG9zaXRpb25MaXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgZW1wbG95ZWVIY21Qb3NpdGlvbj86IEVtcGxveWVlSGNtUG9zaXRpb25bXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbXBsb3llZUhjbVBvc2l0aW9uTGlzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5lbXBsb3llZUhjbVBvc2l0aW9uID0gcHJvcHMuZW1wbG95ZWVIY21Qb3NpdGlvbjtcbiAgICB0aGlzLnJlcGxhY2VBbGwgPSBwcm9wcy5yZXBsYWNlQWxsO1xuICB9XG59XG4iXX0=