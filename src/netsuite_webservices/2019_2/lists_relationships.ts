import * as SoapTypes from "../../util/soap-types";
import * as ListsRelationshipsTypes from "./lists_relationships_types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as PlatformCommonTypes from "./platform_common_types";

const mappingsName = "com_netsuite_webservices_lists_relationships_2019_2";

export class JobPlStatement extends SoapTypes.Base {
  costCategory?: string;
  revenue?: number;
  cost?: number;
  profit?: number;
  margin?: number;
  constructor(props: JobPlStatement) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.costCategory = props.costCategory;
    this.revenue = props.revenue;
    this.cost = props.cost;
    this.profit = props.profit;
    this.margin = props.margin;
  }
}

export class CategoryList extends SoapTypes.Base {
  category: PlatformCore.RecordRef[];
  constructor(props: CategoryList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.category = props.category;
  }
}

export class VendorRolesList extends SoapTypes.Base {
  roles?: VendorRoles[];
  replaceAll?: boolean;
  constructor(props: VendorRolesList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.roles = props.roles;
    this.replaceAll = props.replaceAll;
  }
}

export class OriginatingLeadSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.OriginatingLeadSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: OriginatingLeadSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class JobSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.JobSearchRowBasic;
  billingAccountJoin?: PlatformCommon.BillingAccountSearchRowBasic;
  billingScheduleJoin?: PlatformCommon.BillingScheduleSearchRowBasic;
  contactPrimaryJoin?: PlatformCommon.ContactSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  projectTaskJoin?: PlatformCommon.ProjectTaskSearchRowBasic;
  resourceAllocationJoin?: PlatformCommon.ResourceAllocationSearchRowBasic;
  taskJoin?: PlatformCommon.TaskSearchRowBasic;
  timeJoin?: PlatformCommon.TimeBillSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: JobSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.billingAccountJoin = props.billingAccountJoin;
    this.billingScheduleJoin = props.billingScheduleJoin;
    this.contactPrimaryJoin = props.contactPrimaryJoin;
    this.customerJoin = props.customerJoin;
    this.projectTaskJoin = props.projectTaskJoin;
    this.resourceAllocationJoin = props.resourceAllocationJoin;
    this.taskJoin = props.taskJoin;
    this.timeJoin = props.timeJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class JobTypeSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.JobTypeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: JobTypeSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class JobSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: JobSearch;
  columns?: JobSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: JobSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class VendorAddressbookList extends SoapTypes.Base {
  addressbook?: VendorAddressbook[];
  replaceAll?: boolean;
  constructor(props: VendorAddressbookList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.addressbook = props.addressbook;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomerPartnersList extends SoapTypes.Base {
  partners?: PlatformCommon.Partners[];
  replaceAll?: boolean;
  constructor(props: CustomerPartnersList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.partners = props.partners;
    this.replaceAll = props.replaceAll;
  }
}

export class ContactSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ContactSearchBasic;
  callJoin?: PlatformCommon.PhoneCallSearchBasic;
  campaignResponseJoin?: PlatformCommon.CampaignSearchBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  customerPrimaryJoin?: PlatformCommon.CustomerSearchBasic;
  eventJoin?: PlatformCommon.CalendarEventSearchBasic;
  fileJoin?: PlatformCommon.FileSearchBasic;
  jobJoin?: PlatformCommon.JobSearchBasic;
  jobPrimaryJoin?: PlatformCommon.JobSearchBasic;
  messagesJoin?: PlatformCommon.MessageSearchBasic;
  messagesFromJoin?: PlatformCommon.MessageSearchBasic;
  messagesToJoin?: PlatformCommon.MessageSearchBasic;
  opportunityJoin?: PlatformCommon.OpportunitySearchBasic;
  parentCustomerJoin?: PlatformCommon.CustomerSearchBasic;
  parentJobJoin?: PlatformCommon.JobSearchBasic;
  parentPartnerJoin?: PlatformCommon.PartnerSearchBasic;
  parentVendorJoin?: PlatformCommon.VendorSearchBasic;
  partnerJoin?: PlatformCommon.PartnerSearchBasic;
  partnerPrimaryJoin?: PlatformCommon.PartnerSearchBasic;
  purchasedItemJoin?: PlatformCommon.ItemSearchBasic;
  taskJoin?: PlatformCommon.TaskSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  upsellItemJoin?: PlatformCommon.ItemSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
  vendorJoin?: PlatformCommon.VendorSearchBasic;
  vendorPrimaryJoin?: PlatformCommon.VendorSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: ContactSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.callJoin = props.callJoin;
    this.campaignResponseJoin = props.campaignResponseJoin;
    this.caseJoin = props.caseJoin;
    this.customerJoin = props.customerJoin;
    this.customerPrimaryJoin = props.customerPrimaryJoin;
    this.eventJoin = props.eventJoin;
    this.fileJoin = props.fileJoin;
    this.jobJoin = props.jobJoin;
    this.jobPrimaryJoin = props.jobPrimaryJoin;
    this.messagesJoin = props.messagesJoin;
    this.messagesFromJoin = props.messagesFromJoin;
    this.messagesToJoin = props.messagesToJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.parentCustomerJoin = props.parentCustomerJoin;
    this.parentJobJoin = props.parentJobJoin;
    this.parentPartnerJoin = props.parentPartnerJoin;
    this.parentVendorJoin = props.parentVendorJoin;
    this.partnerJoin = props.partnerJoin;
    this.partnerPrimaryJoin = props.partnerPrimaryJoin;
    this.purchasedItemJoin = props.purchasedItemJoin;
    this.taskJoin = props.taskJoin;
    this.transactionJoin = props.transactionJoin;
    this.upsellItemJoin = props.upsellItemJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.vendorJoin = props.vendorJoin;
    this.vendorPrimaryJoin = props.vendorPrimaryJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class VendorTaxRegistration extends SoapTypes.Base {
  nexusCountry?: PlatformCommonTypes.Country;
  nexus?: PlatformCore.RecordRef;
  address?: PlatformCore.RecordRef;
  taxRegistrationNumber?: string;
  id?: number;
  constructor(props: VendorTaxRegistration) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.nexusCountry = props.nexusCountry;
    this.nexus = props.nexus;
    this.address = props.address;
    this.taxRegistrationNumber = props.taxRegistrationNumber;
    this.id = props.id;
  }
}

export class BillingAccount extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  idNumber?: string;
  customerDefault?: boolean;
  customer?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  name?: string;
  inactive?: boolean;
  memo?: string;
  createdDate?: SoapTypes.Dateish;
  createdBy?: string;
  currency?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  billingSchedule?: PlatformCore.RecordRef;
  frequency?: ListsRelationshipsTypes.BillingAccountFrequency;
  startDate?: SoapTypes.Dateish;
  lastBillDate?: SoapTypes.Dateish;
  lastBillCycleDate?: SoapTypes.Dateish;
  nextBillCycleDate?: SoapTypes.Dateish;
  invoiceForm?: PlatformCore.RecordRef;
  cashSaleForm?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: BillingAccount) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customForm = props.customForm;
    this.idNumber = props.idNumber;
    this.customerDefault = props.customerDefault;
    this.customer = props.customer;
    this.subsidiary = props.subsidiary;
    this.name = props.name;
    this.inactive = props.inactive;
    this.memo = props.memo;
    this.createdDate = props.createdDate;
    this.createdBy = props.createdBy;
    this.currency = props.currency;
    this.clazz = props.clazz;
    this.department = props.department;
    this.location = props.location;
    this.billingSchedule = props.billingSchedule;
    this.frequency = props.frequency;
    this.startDate = props.startDate;
    this.lastBillDate = props.lastBillDate;
    this.lastBillCycleDate = props.lastBillCycleDate;
    this.nextBillCycleDate = props.nextBillCycleDate;
    this.invoiceForm = props.invoiceForm;
    this.cashSaleForm = props.cashSaleForm;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CustomerStatus extends PlatformCore.Record {
  name?: string;
  stage?: ListsRelationshipsTypes.CustomerStatusStage;
  probability?: number;
  description?: string;
  includeInLeadReports?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CustomerStatus) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.stage = props.stage;
    this.probability = props.probability;
    this.description = props.description;
    this.includeInLeadReports = props.includeInLeadReports;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CustomerAddressbook extends SoapTypes.Base {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  isResidential?: boolean;
  label?: string;
  addressbookAddress?: PlatformCommon.Address;
  internalId?: string;
  constructor(props: CustomerAddressbook) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.defaultShipping = props.defaultShipping;
    this.defaultBilling = props.defaultBilling;
    this.isResidential = props.isResidential;
    this.label = props.label;
    this.addressbookAddress = props.addressbookAddress;
    this.internalId = props.internalId;
  }
}

export class VendorSubsidiaryRelationshipSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: VendorSubsidiaryRelationshipSearch;
  columns?: VendorSubsidiaryRelationshipSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: VendorSubsidiaryRelationshipSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class CustomerCurrency extends SoapTypes.Base {
  currency?: PlatformCore.RecordRef;
  balance?: number;
  consolBalance?: number;
  depositBalance?: number;
  consolDepositBalance?: number;
  overdueBalance?: number;
  consolOverdueBalance?: number;
  unbilledOrders?: number;
  consolUnbilledOrders?: number;
  overrideCurrencyFormat?: boolean;
  displaySymbol?: string;
  symbolPlacement?: PlatformCommonTypes.CurrencySymbolPlacement;
  constructor(props: CustomerCurrency) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.currency = props.currency;
    this.balance = props.balance;
    this.consolBalance = props.consolBalance;
    this.depositBalance = props.depositBalance;
    this.consolDepositBalance = props.consolDepositBalance;
    this.overdueBalance = props.overdueBalance;
    this.consolOverdueBalance = props.consolOverdueBalance;
    this.unbilledOrders = props.unbilledOrders;
    this.consolUnbilledOrders = props.consolUnbilledOrders;
    this.overrideCurrencyFormat = props.overrideCurrencyFormat;
    this.displaySymbol = props.displaySymbol;
    this.symbolPlacement = props.symbolPlacement;
  }
}

export class PartnerPromoCodeList extends SoapTypes.Base {
  promoCode?: PartnerPromoCode[];
  replaceAll?: boolean;
  constructor(props: PartnerPromoCodeList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.promoCode = props.promoCode;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomerSubsidiaryRelationship extends PlatformCore.Record {
  entity?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  isPrimarySub?: boolean;
  primaryCurrency?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: CustomerSubsidiaryRelationship) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.entity = props.entity;
    this.subsidiary = props.subsidiary;
    this.isPrimarySub = props.isPrimarySub;
    this.primaryCurrency = props.primaryCurrency;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class JobStatusSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.JobStatusSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: JobStatusSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class PartnerAddressbook extends SoapTypes.Base {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  label?: string;
  internalId?: string;
  addressbookAddress?: PlatformCommon.Address;
  constructor(props: PartnerAddressbook) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.defaultShipping = props.defaultShipping;
    this.defaultBilling = props.defaultBilling;
    this.label = props.label;
    this.internalId = props.internalId;
    this.addressbookAddress = props.addressbookAddress;
  }
}

export class PartnerSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.PartnerSearchRowBasic;
  campaignResponseJoin?: PlatformCommon.CampaignSearchRowBasic;
  contactJoin?: PlatformCommon.ContactSearchRowBasic;
  contactPrimaryJoin?: PlatformCommon.ContactSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  fileJoin?: PlatformCommon.FileSearchRowBasic;
  messagesJoin?: PlatformCommon.MessageSearchRowBasic;
  messagesFromJoin?: PlatformCommon.MessageSearchRowBasic;
  messagesToJoin?: PlatformCommon.MessageSearchRowBasic;
  opportunityJoin?: PlatformCommon.OpportunitySearchRowBasic;
  taxRegistrationJoin?: PlatformCommon.EntityTaxRegistrationSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: PartnerSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.campaignResponseJoin = props.campaignResponseJoin;
    this.contactJoin = props.contactJoin;
    this.contactPrimaryJoin = props.contactPrimaryJoin;
    this.customerJoin = props.customerJoin;
    this.fileJoin = props.fileJoin;
    this.messagesJoin = props.messagesJoin;
    this.messagesFromJoin = props.messagesFromJoin;
    this.messagesToJoin = props.messagesToJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.taxRegistrationJoin = props.taxRegistrationJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class ContactSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ContactSearchRowBasic;
  callJoin?: PlatformCommon.PhoneCallSearchRowBasic;
  campaignResponseJoin?: PlatformCommon.CampaignSearchRowBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  customerPrimaryJoin?: PlatformCommon.CustomerSearchRowBasic;
  eventJoin?: PlatformCommon.CalendarEventSearchRowBasic;
  fileJoin?: PlatformCommon.FileSearchRowBasic;
  jobJoin?: PlatformCommon.JobSearchRowBasic;
  jobPrimaryJoin?: PlatformCommon.JobSearchRowBasic;
  messagesJoin?: PlatformCommon.MessageSearchRowBasic;
  messagesFromJoin?: PlatformCommon.MessageSearchRowBasic;
  messagesToJoin?: PlatformCommon.MessageSearchRowBasic;
  opportunityJoin?: PlatformCommon.OpportunitySearchRowBasic;
  parentCustomerJoin?: PlatformCommon.CustomerSearchRowBasic;
  parentJobJoin?: PlatformCommon.JobSearchRowBasic;
  parentPartnerJoin?: PlatformCommon.PartnerSearchRowBasic;
  parentVendorJoin?: PlatformCommon.VendorSearchRowBasic;
  partnerJoin?: PlatformCommon.PartnerSearchRowBasic;
  partnerPrimaryJoin?: PlatformCommon.PartnerSearchRowBasic;
  purchasedItemJoin?: PlatformCommon.ItemSearchRowBasic;
  taskJoin?: PlatformCommon.TaskSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  upsellItemJoin?: PlatformCommon.ItemSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
  vendorJoin?: PlatformCommon.VendorSearchRowBasic;
  vendorPrimaryJoin?: PlatformCommon.VendorSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: ContactSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.callJoin = props.callJoin;
    this.campaignResponseJoin = props.campaignResponseJoin;
    this.caseJoin = props.caseJoin;
    this.customerJoin = props.customerJoin;
    this.customerPrimaryJoin = props.customerPrimaryJoin;
    this.eventJoin = props.eventJoin;
    this.fileJoin = props.fileJoin;
    this.jobJoin = props.jobJoin;
    this.jobPrimaryJoin = props.jobPrimaryJoin;
    this.messagesJoin = props.messagesJoin;
    this.messagesFromJoin = props.messagesFromJoin;
    this.messagesToJoin = props.messagesToJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.parentCustomerJoin = props.parentCustomerJoin;
    this.parentJobJoin = props.parentJobJoin;
    this.parentPartnerJoin = props.parentPartnerJoin;
    this.parentVendorJoin = props.parentVendorJoin;
    this.partnerJoin = props.partnerJoin;
    this.partnerPrimaryJoin = props.partnerPrimaryJoin;
    this.purchasedItemJoin = props.purchasedItemJoin;
    this.taskJoin = props.taskJoin;
    this.transactionJoin = props.transactionJoin;
    this.upsellItemJoin = props.upsellItemJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.vendorJoin = props.vendorJoin;
    this.vendorPrimaryJoin = props.vendorPrimaryJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class BillingAccountSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.BillingAccountSearchRowBasic;
  jobJoin?: PlatformCommon.JobSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: BillingAccountSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.jobJoin = props.jobJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class JobCreditCards extends SoapTypes.Base {
  internalId?: string;
  ccNumber?: string;
  ccExpireDate?: SoapTypes.Dateish;
  ccName?: string;
  paymentMethod?: PlatformCore.RecordRef;
  ccMemo?: string;
  ccDefault?: boolean;
  debitCardIssueNo?: string;
  validFrom?: SoapTypes.Dateish;
  constructor(props: JobCreditCards) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.internalId = props.internalId;
    this.ccNumber = props.ccNumber;
    this.ccExpireDate = props.ccExpireDate;
    this.ccName = props.ccName;
    this.paymentMethod = props.paymentMethod;
    this.ccMemo = props.ccMemo;
    this.ccDefault = props.ccDefault;
    this.debitCardIssueNo = props.debitCardIssueNo;
    this.validFrom = props.validFrom;
  }
}

export class PartnerTaxRegistration extends SoapTypes.Base {
  nexusCountry?: PlatformCommonTypes.Country;
  nexus?: PlatformCore.RecordRef;
  address?: PlatformCore.RecordRef;
  taxRegistrationNumber?: string;
  id?: number;
  constructor(props: PartnerTaxRegistration) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.nexusCountry = props.nexusCountry;
    this.nexus = props.nexus;
    this.address = props.address;
    this.taxRegistrationNumber = props.taxRegistrationNumber;
    this.id = props.id;
  }
}

export class VendorPricingScheduleList extends SoapTypes.Base {
  pricingSchedule?: VendorPricingSchedule[];
  replaceAll?: boolean;
  constructor(props: VendorPricingScheduleList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.pricingSchedule = props.pricingSchedule;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomerSalesTeam extends SoapTypes.Base {
  employee?: PlatformCore.RecordRef;
  salesRole?: PlatformCore.RecordRef;
  isPrimary?: boolean;
  contribution?: number;
  constructor(props: CustomerSalesTeam) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.employee = props.employee;
    this.salesRole = props.salesRole;
    this.isPrimary = props.isPrimary;
    this.contribution = props.contribution;
  }
}

export class CustomerStatusSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CustomerStatusSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: CustomerStatusSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class PartnerAddressbookList extends SoapTypes.Base {
  addressbook?: PartnerAddressbook[];
  replaceAll?: boolean;
  constructor(props: PartnerAddressbookList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.addressbook = props.addressbook;
    this.replaceAll = props.replaceAll;
  }
}

export class JobMilestonesList extends SoapTypes.Base {
  milestones?: JobMilestones[];
  replaceAll?: boolean;
  constructor(props: JobMilestonesList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.milestones = props.milestones;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomerDownload extends SoapTypes.Base {
  file?: PlatformCore.RecordRef;
  licenseCode?: string;
  remainingDownloads?: number;
  expiration?: SoapTypes.Dateish;
  constructor(props: CustomerDownload) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.file = props.file;
    this.licenseCode = props.licenseCode;
    this.remainingDownloads = props.remainingDownloads;
    this.expiration = props.expiration;
  }
}

export class CustomerTaxRegistration extends SoapTypes.Base {
  nexusCountry?: PlatformCommonTypes.Country;
  nexus?: PlatformCore.RecordRef;
  address?: PlatformCore.RecordRef;
  taxRegistrationNumber?: string;
  id?: number;
  constructor(props: CustomerTaxRegistration) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.nexusCountry = props.nexusCountry;
    this.nexus = props.nexus;
    this.address = props.address;
    this.taxRegistrationNumber = props.taxRegistrationNumber;
    this.id = props.id;
  }
}

export class BillingAccountSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.BillingAccountSearchBasic;
  jobJoin?: PlatformCommon.JobSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: BillingAccountSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.jobJoin = props.jobJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class JobPlStatementList extends SoapTypes.Base {
  jobPlStatement?: JobPlStatement[];
  replaceAll?: boolean;
  constructor(props: JobPlStatementList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.jobPlStatement = props.jobPlStatement;
    this.replaceAll = props.replaceAll;
  }
}

export class Subscriptions extends SoapTypes.Base {
  subscribed?: boolean;
  subscription?: PlatformCore.RecordRef;
  lastModifiedDate?: SoapTypes.Dateish;
  constructor(props: Subscriptions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.subscribed = props.subscribed;
    this.subscription = props.subscription;
    this.lastModifiedDate = props.lastModifiedDate;
  }
}

export class EntityGroupSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.EntityGroupSearchRowBasic;
  groupMemberJoin?: PlatformCommon.EntitySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: EntityGroupSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.groupMemberJoin = props.groupMemberJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class ContactAddressbook extends SoapTypes.Base {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  label?: string;
  addressbookAddress?: PlatformCommon.Address;
  internalId?: string;
  constructor(props: ContactAddressbook) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.defaultShipping = props.defaultShipping;
    this.defaultBilling = props.defaultBilling;
    this.label = props.label;
    this.addressbookAddress = props.addressbookAddress;
    this.internalId = props.internalId;
  }
}

export class CustomerCreditCards extends SoapTypes.Base {
  internalId?: string;
  ccNumber?: string;
  ccExpireDate?: SoapTypes.Dateish;
  ccName?: string;
  paymentMethod?: PlatformCore.RecordRef;
  cardState?: PlatformCore.RecordRef;
  stateFrom?: SoapTypes.Dateish;
  debitcardIssueNo?: string;
  ccMemo?: string;
  validfrom?: SoapTypes.Dateish;
  ccDefault?: boolean;
  constructor(props: CustomerCreditCards) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.internalId = props.internalId;
    this.ccNumber = props.ccNumber;
    this.ccExpireDate = props.ccExpireDate;
    this.ccName = props.ccName;
    this.paymentMethod = props.paymentMethod;
    this.cardState = props.cardState;
    this.stateFrom = props.stateFrom;
    this.debitcardIssueNo = props.debitcardIssueNo;
    this.ccMemo = props.ccMemo;
    this.validfrom = props.validfrom;
    this.ccDefault = props.ccDefault;
  }
}

export class JobAddressbook extends SoapTypes.Base {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  isResidential?: boolean;
  label?: string;
  internalId?: string;
  addressbookAddress?: PlatformCommon.Address;
  constructor(props: JobAddressbook) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.defaultShipping = props.defaultShipping;
    this.defaultBilling = props.defaultBilling;
    this.isResidential = props.isResidential;
    this.label = props.label;
    this.internalId = props.internalId;
    this.addressbookAddress = props.addressbookAddress;
  }
}

export class JobTypeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: JobTypeSearch;
  columns?: JobTypeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: JobTypeSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class VendorSubsidiaryRelationship extends PlatformCore.Record {
  baseCurrency?: PlatformCore.RecordRef;
  creditLimit?: number;
  entity?: PlatformCore.RecordRef;
  isPrimarySub?: boolean;
  primaryCurrency?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  taxItem?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: VendorSubsidiaryRelationship) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.baseCurrency = props.baseCurrency;
    this.creditLimit = props.creditLimit;
    this.entity = props.entity;
    this.isPrimarySub = props.isPrimarySub;
    this.primaryCurrency = props.primaryCurrency;
    this.subsidiary = props.subsidiary;
    this.taxItem = props.taxItem;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class JobCreditCardsList extends SoapTypes.Base {
  creditCards?: JobCreditCards[];
  replaceAll?: boolean;
  constructor(props: JobCreditCardsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.creditCards = props.creditCards;
    this.replaceAll = props.replaceAll;
  }
}

export class VendorPricingSchedule extends SoapTypes.Base {
  scheduleName?: string;
  scheduleDiscount?: number;
  constructor(props: VendorPricingSchedule) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.scheduleName = props.scheduleName;
    this.scheduleDiscount = props.scheduleDiscount;
  }
}

export class OriginatingLeadSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.OriginatingLeadSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: OriginatingLeadSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class SubscriptionsList extends SoapTypes.Base {
  subscriptions?: Subscriptions[];
  replaceAll?: boolean;
  constructor(props: SubscriptionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.subscriptions = props.subscriptions;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomerSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CustomerSearchBasic;
  billingAccountJoin?: PlatformCommon.BillingAccountSearchBasic;
  billingScheduleJoin?: PlatformCommon.BillingScheduleSearchBasic;
  callJoin?: PlatformCommon.PhoneCallSearchBasic;
  campaignResponseJoin?: PlatformCommon.CampaignSearchBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchBasic;
  contactJoin?: PlatformCommon.ContactSearchBasic;
  contactPrimaryJoin?: PlatformCommon.ContactSearchBasic;
  eventJoin?: PlatformCommon.CalendarEventSearchBasic;
  fileJoin?: PlatformCommon.FileSearchBasic;
  hostedPageJoin?: PlatformCommon.FileSearchBasic;
  jobJoin?: PlatformCommon.JobSearchBasic;
  leadSourceJoin?: PlatformCommon.CampaignSearchBasic;
  messagesJoin?: PlatformCommon.MessageSearchBasic;
  messagesFromJoin?: PlatformCommon.MessageSearchBasic;
  messagesToJoin?: PlatformCommon.MessageSearchBasic;
  mseSubsidiaryJoin?: PlatformCommon.MseSubsidiarySearchBasic;
  opportunityJoin?: PlatformCommon.OpportunitySearchBasic;
  originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchBasic;
  parentCustomerJoin?: PlatformCommon.CustomerSearchBasic;
  partnerJoin?: PlatformCommon.PartnerSearchBasic;
  pricingJoin?: PlatformCommon.PricingSearchBasic;
  purchasedItemJoin?: PlatformCommon.ItemSearchBasic;
  resourceAllocationJoin?: PlatformCommon.ResourceAllocationSearchBasic;
  salesRepJoin?: PlatformCommon.EmployeeSearchBasic;
  subCustomerJoin?: PlatformCommon.CustomerSearchBasic;
  taskJoin?: PlatformCommon.TaskSearchBasic;
  taxRegistrationJoin?: PlatformCommon.EntityTaxRegistrationSearchBasic;
  timeJoin?: PlatformCommon.TimeBillSearchBasic;
  topLevelParentJoin?: PlatformCommon.CustomerSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  upsellItemJoin?: PlatformCommon.ItemSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
  webSiteCategoryJoin?: PlatformCommon.SiteCategorySearchBasic;
  webSiteItemJoin?: PlatformCommon.ItemSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: CustomerSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.billingAccountJoin = props.billingAccountJoin;
    this.billingScheduleJoin = props.billingScheduleJoin;
    this.callJoin = props.callJoin;
    this.campaignResponseJoin = props.campaignResponseJoin;
    this.caseJoin = props.caseJoin;
    this.contactJoin = props.contactJoin;
    this.contactPrimaryJoin = props.contactPrimaryJoin;
    this.eventJoin = props.eventJoin;
    this.fileJoin = props.fileJoin;
    this.hostedPageJoin = props.hostedPageJoin;
    this.jobJoin = props.jobJoin;
    this.leadSourceJoin = props.leadSourceJoin;
    this.messagesJoin = props.messagesJoin;
    this.messagesFromJoin = props.messagesFromJoin;
    this.messagesToJoin = props.messagesToJoin;
    this.mseSubsidiaryJoin = props.mseSubsidiaryJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.originatingLeadJoin = props.originatingLeadJoin;
    this.parentCustomerJoin = props.parentCustomerJoin;
    this.partnerJoin = props.partnerJoin;
    this.pricingJoin = props.pricingJoin;
    this.purchasedItemJoin = props.purchasedItemJoin;
    this.resourceAllocationJoin = props.resourceAllocationJoin;
    this.salesRepJoin = props.salesRepJoin;
    this.subCustomerJoin = props.subCustomerJoin;
    this.taskJoin = props.taskJoin;
    this.taxRegistrationJoin = props.taxRegistrationJoin;
    this.timeJoin = props.timeJoin;
    this.topLevelParentJoin = props.topLevelParentJoin;
    this.transactionJoin = props.transactionJoin;
    this.upsellItemJoin = props.upsellItemJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.webSiteCategoryJoin = props.webSiteCategoryJoin;
    this.webSiteItemJoin = props.webSiteItemJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class CustomerItemPricing extends SoapTypes.Base {
  item?: PlatformCore.RecordRef;
  level?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  price?: number;
  constructor(props: CustomerItemPricing) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.level = props.level;
    this.currency = props.currency;
    this.price = props.price;
  }
}

export class PartnerTaxRegistrationList extends SoapTypes.Base {
  partnerTaxRegistration?: PartnerTaxRegistration[];
  replaceAll?: boolean;
  constructor(props: PartnerTaxRegistrationList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.partnerTaxRegistration = props.partnerTaxRegistration;
    this.replaceAll = props.replaceAll;
  }
}

export class Vendor extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  entityId?: string;
  altName?: string;
  isPerson?: boolean;
  phoneticName?: string;
  salutation?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  companyName?: string;
  phone?: string;
  fax?: string;
  email?: string;
  url?: string;
  defaultAddress?: string;
  isInactive?: boolean;
  lastModifiedDate?: SoapTypes.Dateish;
  dateCreated?: SoapTypes.Dateish;
  category?: PlatformCore.RecordRef;
  title?: string;
  printOnCheckAs?: string;
  altPhone?: string;
  homePhone?: string;
  mobilePhone?: string;
  altEmail?: string;
  comments?: string;
  globalSubscriptionStatus?: PlatformCommonTypes.GlobalSubscriptionStatus;
  image?: PlatformCore.RecordRef;
  emailPreference?: ListsRelationshipsTypes.EmailPreference;
  subsidiary?: PlatformCore.RecordRef;
  representingSubsidiary?: PlatformCore.RecordRef;
  accountNumber?: string;
  legalName?: string;
  vatRegNumber?: string;
  expenseAccount?: PlatformCore.RecordRef;
  payablesAccount?: PlatformCore.RecordRef;
  terms?: PlatformCore.RecordRef;
  incoterm?: PlatformCore.RecordRef;
  creditLimit?: number;
  balancePrimary?: number;
  openingBalance?: number;
  openingBalanceDate?: SoapTypes.Dateish;
  openingBalanceAccount?: PlatformCore.RecordRef;
  balance?: number;
  unbilledOrdersPrimary?: number;
  bcn?: string;
  unbilledOrders?: number;
  currency?: PlatformCore.RecordRef;
  is1099Eligible?: boolean;
  isJobResourceVend?: boolean;
  laborCost?: number;
  purchaseOrderQuantity?: number;
  purchaseOrderAmount?: number;
  purchaseOrderQuantityDiff?: number;
  receiptQuantity?: number;
  receiptAmount?: number;
  receiptQuantityDiff?: number;
  workCalendar?: PlatformCore.RecordRef;
  taxIdNum?: string;
  taxItem?: PlatformCore.RecordRef;
  giveAccess?: boolean;
  sendEmail?: boolean;
  billPay?: boolean;
  isAccountant?: boolean;
  password?: string;
  password2?: string;
  requirePwdChange?: boolean;
  eligibleForCommission?: boolean;
  emailTransactions?: boolean;
  printTransactions?: boolean;
  faxTransactions?: boolean;
  defaultTaxReg?: PlatformCore.RecordRef;
  pricingScheduleList?: VendorPricingScheduleList;
  subscriptionsList?: SubscriptionsList;
  addressbookList?: VendorAddressbookList;
  currencyList?: VendorCurrencyList;
  rolesList?: VendorRolesList;
  taxRegistrationList?: VendorTaxRegistrationList;
  predictedDays?: number;
  predConfidence?: number;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Vendor) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customForm = props.customForm;
    this.entityId = props.entityId;
    this.altName = props.altName;
    this.isPerson = props.isPerson;
    this.phoneticName = props.phoneticName;
    this.salutation = props.salutation;
    this.firstName = props.firstName;
    this.middleName = props.middleName;
    this.lastName = props.lastName;
    this.companyName = props.companyName;
    this.phone = props.phone;
    this.fax = props.fax;
    this.email = props.email;
    this.url = props.url;
    this.defaultAddress = props.defaultAddress;
    this.isInactive = props.isInactive;
    this.lastModifiedDate = props.lastModifiedDate;
    this.dateCreated = props.dateCreated;
    this.category = props.category;
    this.title = props.title;
    this.printOnCheckAs = props.printOnCheckAs;
    this.altPhone = props.altPhone;
    this.homePhone = props.homePhone;
    this.mobilePhone = props.mobilePhone;
    this.altEmail = props.altEmail;
    this.comments = props.comments;
    this.globalSubscriptionStatus = props.globalSubscriptionStatus;
    this.image = props.image;
    this.emailPreference = props.emailPreference;
    this.subsidiary = props.subsidiary;
    this.representingSubsidiary = props.representingSubsidiary;
    this.accountNumber = props.accountNumber;
    this.legalName = props.legalName;
    this.vatRegNumber = props.vatRegNumber;
    this.expenseAccount = props.expenseAccount;
    this.payablesAccount = props.payablesAccount;
    this.terms = props.terms;
    this.incoterm = props.incoterm;
    this.creditLimit = props.creditLimit;
    this.balancePrimary = props.balancePrimary;
    this.openingBalance = props.openingBalance;
    this.openingBalanceDate = props.openingBalanceDate;
    this.openingBalanceAccount = props.openingBalanceAccount;
    this.balance = props.balance;
    this.unbilledOrdersPrimary = props.unbilledOrdersPrimary;
    this.bcn = props.bcn;
    this.unbilledOrders = props.unbilledOrders;
    this.currency = props.currency;
    this.is1099Eligible = props.is1099Eligible;
    this.isJobResourceVend = props.isJobResourceVend;
    this.laborCost = props.laborCost;
    this.purchaseOrderQuantity = props.purchaseOrderQuantity;
    this.purchaseOrderAmount = props.purchaseOrderAmount;
    this.purchaseOrderQuantityDiff = props.purchaseOrderQuantityDiff;
    this.receiptQuantity = props.receiptQuantity;
    this.receiptAmount = props.receiptAmount;
    this.receiptQuantityDiff = props.receiptQuantityDiff;
    this.workCalendar = props.workCalendar;
    this.taxIdNum = props.taxIdNum;
    this.taxItem = props.taxItem;
    this.giveAccess = props.giveAccess;
    this.sendEmail = props.sendEmail;
    this.billPay = props.billPay;
    this.isAccountant = props.isAccountant;
    this.password = props.password;
    this.password2 = props.password2;
    this.requirePwdChange = props.requirePwdChange;
    this.eligibleForCommission = props.eligibleForCommission;
    this.emailTransactions = props.emailTransactions;
    this.printTransactions = props.printTransactions;
    this.faxTransactions = props.faxTransactions;
    this.defaultTaxReg = props.defaultTaxReg;
    this.pricingScheduleList = props.pricingScheduleList;
    this.subscriptionsList = props.subscriptionsList;
    this.addressbookList = props.addressbookList;
    this.currencyList = props.currencyList;
    this.rolesList = props.rolesList;
    this.taxRegistrationList = props.taxRegistrationList;
    this.predictedDays = props.predictedDays;
    this.predConfidence = props.predConfidence;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class JobResources extends SoapTypes.Base {
  jobResource?: PlatformCore.RecordRef;
  email?: string;
  role?: PlatformCore.RecordRef;
  constructor(props: JobResources) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.jobResource = props.jobResource;
    this.email = props.email;
    this.role = props.role;
  }
}

export class JobTypeSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.JobTypeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: JobTypeSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class BillingAccountSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: BillingAccountSearch;
  columns?: BillingAccountSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: BillingAccountSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class CustomerSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CustomerSearchRowBasic;
  billingAccountJoin?: PlatformCommon.BillingAccountSearchRowBasic;
  billingScheduleJoin?: PlatformCommon.BillingScheduleSearchRowBasic;
  callJoin?: PlatformCommon.PhoneCallSearchRowBasic;
  campaignResponseJoin?: PlatformCommon.CampaignSearchRowBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
  contactJoin?: PlatformCommon.ContactSearchRowBasic;
  contactPrimaryJoin?: PlatformCommon.ContactSearchRowBasic;
  eventJoin?: PlatformCommon.CalendarEventSearchRowBasic;
  fileJoin?: PlatformCommon.FileSearchRowBasic;
  hostedPageJoin?: PlatformCommon.FileSearchRowBasic;
  jobJoin?: PlatformCommon.JobSearchRowBasic;
  leadSourceJoin?: PlatformCommon.CampaignSearchRowBasic;
  messagesJoin?: PlatformCommon.MessageSearchRowBasic;
  messagesFromJoin?: PlatformCommon.MessageSearchRowBasic;
  messagesToJoin?: PlatformCommon.MessageSearchRowBasic;
  mseSubsidiaryJoin?: PlatformCommon.MseSubsidiarySearchRowBasic;
  opportunityJoin?: PlatformCommon.OpportunitySearchRowBasic;
  originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchRowBasic;
  parentCustomerJoin?: PlatformCommon.CustomerSearchRowBasic;
  partnerJoin?: PlatformCommon.PartnerSearchRowBasic;
  pricingJoin?: PlatformCommon.PricingSearchRowBasic;
  purchasedItemJoin?: PlatformCommon.ItemSearchRowBasic;
  resourceAllocationJoin?: PlatformCommon.ResourceAllocationSearchRowBasic;
  salesRepJoin?: PlatformCommon.EmployeeSearchRowBasic;
  subCustomerJoin?: PlatformCommon.CustomerSearchRowBasic;
  taskJoin?: PlatformCommon.TaskSearchRowBasic;
  taxRegistrationJoin?: PlatformCommon.EntityTaxRegistrationSearchRowBasic;
  timeJoin?: PlatformCommon.TimeBillSearchRowBasic;
  topLevelParentJoin?: PlatformCommon.CustomerSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  upsellItemJoin?: PlatformCommon.ItemSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
  webSiteCategoryJoin?: PlatformCommon.SiteCategorySearchRowBasic;
  webSiteItemJoin?: PlatformCommon.ItemSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: CustomerSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.billingAccountJoin = props.billingAccountJoin;
    this.billingScheduleJoin = props.billingScheduleJoin;
    this.callJoin = props.callJoin;
    this.campaignResponseJoin = props.campaignResponseJoin;
    this.caseJoin = props.caseJoin;
    this.contactJoin = props.contactJoin;
    this.contactPrimaryJoin = props.contactPrimaryJoin;
    this.eventJoin = props.eventJoin;
    this.fileJoin = props.fileJoin;
    this.hostedPageJoin = props.hostedPageJoin;
    this.jobJoin = props.jobJoin;
    this.leadSourceJoin = props.leadSourceJoin;
    this.messagesJoin = props.messagesJoin;
    this.messagesFromJoin = props.messagesFromJoin;
    this.messagesToJoin = props.messagesToJoin;
    this.mseSubsidiaryJoin = props.mseSubsidiaryJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.originatingLeadJoin = props.originatingLeadJoin;
    this.parentCustomerJoin = props.parentCustomerJoin;
    this.partnerJoin = props.partnerJoin;
    this.pricingJoin = props.pricingJoin;
    this.purchasedItemJoin = props.purchasedItemJoin;
    this.resourceAllocationJoin = props.resourceAllocationJoin;
    this.salesRepJoin = props.salesRepJoin;
    this.subCustomerJoin = props.subCustomerJoin;
    this.taskJoin = props.taskJoin;
    this.taxRegistrationJoin = props.taxRegistrationJoin;
    this.timeJoin = props.timeJoin;
    this.topLevelParentJoin = props.topLevelParentJoin;
    this.transactionJoin = props.transactionJoin;
    this.upsellItemJoin = props.upsellItemJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.webSiteCategoryJoin = props.webSiteCategoryJoin;
    this.webSiteItemJoin = props.webSiteItemJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class ContactAccessRoles extends SoapTypes.Base {
  giveAccess?: boolean;
  contact?: PlatformCore.RecordRef;
  email?: string;
  role?: PlatformCore.RecordRef;
  password?: string;
  password2?: string;
  sendEmail?: boolean;
  constructor(props: ContactAccessRoles) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.giveAccess = props.giveAccess;
    this.contact = props.contact;
    this.email = props.email;
    this.role = props.role;
    this.password = props.password;
    this.password2 = props.password2;
    this.sendEmail = props.sendEmail;
  }
}

export class PartnerSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.PartnerSearchBasic;
  campaignResponseJoin?: PlatformCommon.CampaignSearchBasic;
  contactJoin?: PlatformCommon.ContactSearchBasic;
  contactPrimaryJoin?: PlatformCommon.ContactSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  fileJoin?: PlatformCommon.FileSearchBasic;
  messagesJoin?: PlatformCommon.MessageSearchBasic;
  messagesFromJoin?: PlatformCommon.MessageSearchBasic;
  messagesToJoin?: PlatformCommon.MessageSearchBasic;
  opportunityJoin?: PlatformCommon.OpportunitySearchBasic;
  taxRegistrationJoin?: PlatformCommon.EntityTaxRegistrationSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: PartnerSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.campaignResponseJoin = props.campaignResponseJoin;
    this.contactJoin = props.contactJoin;
    this.contactPrimaryJoin = props.contactPrimaryJoin;
    this.customerJoin = props.customerJoin;
    this.fileJoin = props.fileJoin;
    this.messagesJoin = props.messagesJoin;
    this.messagesFromJoin = props.messagesFromJoin;
    this.messagesToJoin = props.messagesToJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.taxRegistrationJoin = props.taxRegistrationJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class JobStatus extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: JobStatus) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class JobMilestones extends SoapTypes.Base {
  milestoneName?: string;
  milestoneOrder?: string;
  milestoneEstComplete?: SoapTypes.Dateish;
  milestoneCompleted?: boolean;
  milestoneComments?: string;
  constructor(props: JobMilestones) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.milestoneName = props.milestoneName;
    this.milestoneOrder = props.milestoneOrder;
    this.milestoneEstComplete = props.milestoneEstComplete;
    this.milestoneCompleted = props.milestoneCompleted;
    this.milestoneComments = props.milestoneComments;
  }
}

export class JobResourcesList extends SoapTypes.Base {
  jobResources?: JobResources[];
  replaceAll?: boolean;
  constructor(props: JobResourcesList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.jobResources = props.jobResources;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomerSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CustomerSearch;
  columns?: CustomerSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CustomerSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class PartnerSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PartnerSearch;
  columns?: PartnerSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: PartnerSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class VendorSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: VendorSearch;
  columns?: VendorSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: VendorSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class VendorSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.VendorSearchRowBasic;
  accountJoin?: PlatformCommon.AccountSearchRowBasic;
  campaignResponseJoin?: PlatformCommon.CampaignSearchRowBasic;
  contactJoin?: PlatformCommon.ContactSearchRowBasic;
  contactPrimaryJoin?: PlatformCommon.ContactSearchRowBasic;
  expAccountJoin?: PlatformCommon.AccountSearchRowBasic;
  fileJoin?: PlatformCommon.FileSearchRowBasic;
  messagesJoin?: PlatformCommon.MessageSearchRowBasic;
  mseSubsidiaryJoin?: PlatformCommon.MseSubsidiarySearchRowBasic;
  messagesFromJoin?: PlatformCommon.MessageSearchRowBasic;
  messagesToJoin?: PlatformCommon.MessageSearchRowBasic;
  taxRegistrationJoin?: PlatformCommon.EntityTaxRegistrationSearchRowBasic;
  timeApproverJoin?: PlatformCommon.EmployeeSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: VendorSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.accountJoin = props.accountJoin;
    this.campaignResponseJoin = props.campaignResponseJoin;
    this.contactJoin = props.contactJoin;
    this.contactPrimaryJoin = props.contactPrimaryJoin;
    this.expAccountJoin = props.expAccountJoin;
    this.fileJoin = props.fileJoin;
    this.messagesJoin = props.messagesJoin;
    this.mseSubsidiaryJoin = props.mseSubsidiaryJoin;
    this.messagesFromJoin = props.messagesFromJoin;
    this.messagesToJoin = props.messagesToJoin;
    this.taxRegistrationJoin = props.taxRegistrationJoin;
    this.timeApproverJoin = props.timeApproverJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class JobPercentCompleteOverrideList extends SoapTypes.Base {
  jobPercentCompleteOverride?: JobPercentCompleteOverride[];
  replaceAll?: boolean;
  constructor(props: JobPercentCompleteOverrideList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.jobPercentCompleteOverride = props.jobPercentCompleteOverride;
    this.replaceAll = props.replaceAll;
  }
}

export class JobStatusSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: JobStatusSearch;
  columns?: JobStatusSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: JobStatusSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class Partner extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  entityId?: string;
  altName?: string;
  partnerCode?: string;
  isPerson?: boolean;
  phoneticName?: string;
  salutation?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  companyName?: string;
  parent?: PlatformCore.RecordRef;
  phone?: string;
  fax?: string;
  email?: string;
  url?: string;
  defaultAddress?: string;
  isInactive?: boolean;
  lastModifiedDate?: SoapTypes.Dateish;
  dateCreated?: SoapTypes.Dateish;
  taxRegistrationList?: PartnerTaxRegistrationList;
  globalSubscriptionStatus?: PlatformCommonTypes.GlobalSubscriptionStatus;
  referringUrl?: string;
  roleList?: PlatformCore.RecordRefList;
  categoryList?: CategoryList;
  title?: string;
  printOnCheckAs?: string;
  taxIdNum?: string;
  vatRegNumber?: string;
  comments?: string;
  bcn?: string;
  image?: PlatformCore.RecordRef;
  taxFractionUnit?: string;
  emailPreference?: ListsRelationshipsTypes.EmailPreference;
  defaultTaxReg?: PlatformCore.RecordRef;
  taxRounding?: ListsRelationshipsTypes.TaxRounding;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  homePhone?: string;
  mobilePhone?: string;
  altEmail?: string;
  giveAccess?: boolean;
  accessRole?: PlatformCore.RecordRef;
  sendEmail?: boolean;
  password?: string;
  password2?: string;
  requirePwdChange?: boolean;
  subPartnerLogin?: boolean;
  loginAs?: string;
  eligibleForCommission?: boolean;
  contactRolesList?: ContactAccessRolesList;
  promoCodeList?: PartnerPromoCodeList;
  addressbookList?: PartnerAddressbookList;
  subscriptionsList?: SubscriptionsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Partner) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customForm = props.customForm;
    this.entityId = props.entityId;
    this.altName = props.altName;
    this.partnerCode = props.partnerCode;
    this.isPerson = props.isPerson;
    this.phoneticName = props.phoneticName;
    this.salutation = props.salutation;
    this.firstName = props.firstName;
    this.middleName = props.middleName;
    this.lastName = props.lastName;
    this.companyName = props.companyName;
    this.parent = props.parent;
    this.phone = props.phone;
    this.fax = props.fax;
    this.email = props.email;
    this.url = props.url;
    this.defaultAddress = props.defaultAddress;
    this.isInactive = props.isInactive;
    this.lastModifiedDate = props.lastModifiedDate;
    this.dateCreated = props.dateCreated;
    this.taxRegistrationList = props.taxRegistrationList;
    this.globalSubscriptionStatus = props.globalSubscriptionStatus;
    this.referringUrl = props.referringUrl;
    this.roleList = props.roleList;
    this.categoryList = props.categoryList;
    this.title = props.title;
    this.printOnCheckAs = props.printOnCheckAs;
    this.taxIdNum = props.taxIdNum;
    this.vatRegNumber = props.vatRegNumber;
    this.comments = props.comments;
    this.bcn = props.bcn;
    this.image = props.image;
    this.taxFractionUnit = props.taxFractionUnit;
    this.emailPreference = props.emailPreference;
    this.defaultTaxReg = props.defaultTaxReg;
    this.taxRounding = props.taxRounding;
    this.department = props.department;
    this.location = props.location;
    this.clazz = props.clazz;
    this.subsidiary = props.subsidiary;
    this.homePhone = props.homePhone;
    this.mobilePhone = props.mobilePhone;
    this.altEmail = props.altEmail;
    this.giveAccess = props.giveAccess;
    this.accessRole = props.accessRole;
    this.sendEmail = props.sendEmail;
    this.password = props.password;
    this.password2 = props.password2;
    this.requirePwdChange = props.requirePwdChange;
    this.subPartnerLogin = props.subPartnerLogin;
    this.loginAs = props.loginAs;
    this.eligibleForCommission = props.eligibleForCommission;
    this.contactRolesList = props.contactRolesList;
    this.promoCodeList = props.promoCodeList;
    this.addressbookList = props.addressbookList;
    this.subscriptionsList = props.subscriptionsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class JobType extends PlatformCore.Record {
  name?: string;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: JobType) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.parent = props.parent;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CustomerCurrencyList extends SoapTypes.Base {
  currency?: CustomerCurrency[];
  replaceAll?: boolean;
  constructor(props: CustomerCurrencyList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.currency = props.currency;
    this.replaceAll = props.replaceAll;
  }
}

export class EntityGroupSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.EntityGroupSearchBasic;
  groupMemberJoin?: PlatformCommon.EntitySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: EntityGroupSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.groupMemberJoin = props.groupMemberJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class VendorSubsidiaryRelationshipSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.VendorSubsidiaryRelationshipSearchRowBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  vendorJoin?: PlatformCommon.VendorSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: VendorSubsidiaryRelationshipSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.subsidiaryJoin = props.subsidiaryJoin;
    this.vendorJoin = props.vendorJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class CustomerAddressbookList extends SoapTypes.Base {
  addressbook?: CustomerAddressbook[];
  replaceAll?: boolean;
  constructor(props: CustomerAddressbookList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.addressbook = props.addressbook;
    this.replaceAll = props.replaceAll;
  }
}

export class VendorSubsidiaryRelationshipSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.VendorSubsidiaryRelationshipSearchBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  vendorJoin?: PlatformCommon.VendorSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: VendorSubsidiaryRelationshipSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.subsidiaryJoin = props.subsidiaryJoin;
    this.vendorJoin = props.vendorJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class ContactSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ContactSearch;
  columns?: ContactSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ContactSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class CustomerGroupPricingList extends SoapTypes.Base {
  groupPricing?: CustomerGroupPricing[];
  replaceAll?: boolean;
  constructor(props: CustomerGroupPricingList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.groupPricing = props.groupPricing;
    this.replaceAll = props.replaceAll;
  }
}

export class EntityGroupSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: EntityGroupSearch;
  columns?: EntityGroupSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: EntityGroupSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class CustomerDownloadList extends SoapTypes.Base {
  download?: CustomerDownload[];
  replaceAll?: boolean;
  constructor(props: CustomerDownloadList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.download = props.download;
    this.replaceAll = props.replaceAll;
  }
}

export class JobPercentCompleteOverride extends SoapTypes.Base {
  period?: PlatformCore.RecordRef;
  percent?: number;
  comments?: string;
  constructor(props: JobPercentCompleteOverride) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.period = props.period;
    this.percent = props.percent;
    this.comments = props.comments;
  }
}

export class VendorRoles extends SoapTypes.Base {
  selectedRole?: PlatformCore.RecordRef;
  constructor(props: VendorRoles) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.selectedRole = props.selectedRole;
  }
}

export class CustomerStatusSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CustomerStatusSearch;
  columns?: CustomerStatusSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CustomerStatusSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class CustomerSubsidiaryRelationshipSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CustomerSubsidiaryRelationshipSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: CustomerSubsidiaryRelationshipSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.customerJoin = props.customerJoin;
    this.subsidiaryJoin = props.subsidiaryJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class CustomerCreditCardsList extends SoapTypes.Base {
  creditCards?: CustomerCreditCards[];
  replaceAll?: boolean;
  constructor(props: CustomerCreditCardsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.creditCards = props.creditCards;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomerSubsidiaryRelationshipSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CustomerSubsidiaryRelationshipSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: CustomerSubsidiaryRelationshipSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.customerJoin = props.customerJoin;
    this.subsidiaryJoin = props.subsidiaryJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class JobAddressbookList extends SoapTypes.Base {
  addressbook?: JobAddressbook[];
  replaceAll?: boolean;
  constructor(props: JobAddressbookList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.addressbook = props.addressbook;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomerGroupPricing extends SoapTypes.Base {
  group?: PlatformCore.RecordRef;
  level?: PlatformCore.RecordRef;
  constructor(props: CustomerGroupPricing) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.group = props.group;
    this.level = props.level;
  }
}

export class PartnerPromoCode extends SoapTypes.Base {
  promoCode?: PlatformCore.RecordRef;
  discount?: string;
  endDate?: SoapTypes.Dateish;
  constructor(props: PartnerPromoCode) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.promoCode = props.promoCode;
    this.discount = props.discount;
    this.endDate = props.endDate;
  }
}

export class Job extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  entityId?: string;
  altName?: string;
  companyName?: string;
  phoneticName?: string;
  entityStatus?: PlatformCore.RecordRef;
  defaultAddress?: string;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  percentCompleteOverrideList?: JobPercentCompleteOverrideList;
  lastModifiedDate?: SoapTypes.Dateish;
  billPay?: boolean;
  dateCreated?: SoapTypes.Dateish;
  category?: PlatformCore.RecordRef;
  workplace?: PlatformCore.RecordRef;
  language?: PlatformCore.RecordRef;
  comments?: string;
  accountNumber?: string;
  currency?: PlatformCore.RecordRef;
  fxRate?: number;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  phone?: string;
  altPhone?: string;
  calculatedEndDate?: SoapTypes.Dateish;
  calculatedEndDateBaseline?: SoapTypes.Dateish;
  startDateBaseline?: SoapTypes.Dateish;
  projectedEndDate?: SoapTypes.Dateish;
  projectedEndDateBaseline?: SoapTypes.Dateish;
  lastBaselineDate?: SoapTypes.Dateish;
  jobType?: PlatformCore.RecordRef;
  percentComplete?: number;
  estimatedCost?: number;
  estimatedRevenue?: number;
  estimatedTime?: PlatformCore.Duration;
  estimatedTimeOverride?: PlatformCore.Duration;
  fax?: string;
  email?: string;
  emailPreference?: ListsRelationshipsTypes.EmailPreference;
  openingBalance?: number;
  openingBalanceDate?: SoapTypes.Dateish;
  openingBalanceAccount?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  jobBillingType?: ListsRelationshipsTypes.JobBillingType;
  billingSchedule?: PlatformCore.RecordRef;
  jobItem?: PlatformCore.RecordRef;
  percentTimeComplete?: number;
  actualTime?: PlatformCore.Duration;
  allowTime?: boolean;
  timeRemaining?: PlatformCore.Duration;
  limitTimeToAssignees?: boolean;
  estimatedLaborCost?: number;
  estimatedLaborCostBaseline?: number;
  estimateRevRecTemplate?: PlatformCore.RecordRef;
  revRecForecastRule?: PlatformCore.RecordRef;
  usePercentCompleteOverride?: boolean;
  estimatedLaborRevenue?: number;
  estimatedGrossProfit?: number;
  estimatedGrossProfitPercent?: number;
  projectExpenseType?: PlatformCore.RecordRef;
  applyProjectExpenseTypeToAll?: boolean;
  allowAllResourcesForTasks?: boolean;
  jobPrice?: number;
  isUtilizedTime?: boolean;
  isProductiveTime?: boolean;
  isExemptTime?: boolean;
  materializeTime?: boolean;
  allowExpenses?: boolean;
  allocatePayrollExpenses?: boolean;
  includeCrmTasksInTotals?: boolean;
  globalSubscriptionStatus?: PlatformCommonTypes.GlobalSubscriptionStatus;
  jobResourcesList?: JobResourcesList;
  plStatementList?: JobPlStatementList;
  addressbookList?: JobAddressbookList;
  milestonesList?: JobMilestonesList;
  creditCardsList?: JobCreditCardsList;
  timeApproval?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Job) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customForm = props.customForm;
    this.entityId = props.entityId;
    this.altName = props.altName;
    this.companyName = props.companyName;
    this.phoneticName = props.phoneticName;
    this.entityStatus = props.entityStatus;
    this.defaultAddress = props.defaultAddress;
    this.parent = props.parent;
    this.isInactive = props.isInactive;
    this.percentCompleteOverrideList = props.percentCompleteOverrideList;
    this.lastModifiedDate = props.lastModifiedDate;
    this.billPay = props.billPay;
    this.dateCreated = props.dateCreated;
    this.category = props.category;
    this.workplace = props.workplace;
    this.language = props.language;
    this.comments = props.comments;
    this.accountNumber = props.accountNumber;
    this.currency = props.currency;
    this.fxRate = props.fxRate;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.phone = props.phone;
    this.altPhone = props.altPhone;
    this.calculatedEndDate = props.calculatedEndDate;
    this.calculatedEndDateBaseline = props.calculatedEndDateBaseline;
    this.startDateBaseline = props.startDateBaseline;
    this.projectedEndDate = props.projectedEndDate;
    this.projectedEndDateBaseline = props.projectedEndDateBaseline;
    this.lastBaselineDate = props.lastBaselineDate;
    this.jobType = props.jobType;
    this.percentComplete = props.percentComplete;
    this.estimatedCost = props.estimatedCost;
    this.estimatedRevenue = props.estimatedRevenue;
    this.estimatedTime = props.estimatedTime;
    this.estimatedTimeOverride = props.estimatedTimeOverride;
    this.fax = props.fax;
    this.email = props.email;
    this.emailPreference = props.emailPreference;
    this.openingBalance = props.openingBalance;
    this.openingBalanceDate = props.openingBalanceDate;
    this.openingBalanceAccount = props.openingBalanceAccount;
    this.subsidiary = props.subsidiary;
    this.jobBillingType = props.jobBillingType;
    this.billingSchedule = props.billingSchedule;
    this.jobItem = props.jobItem;
    this.percentTimeComplete = props.percentTimeComplete;
    this.actualTime = props.actualTime;
    this.allowTime = props.allowTime;
    this.timeRemaining = props.timeRemaining;
    this.limitTimeToAssignees = props.limitTimeToAssignees;
    this.estimatedLaborCost = props.estimatedLaborCost;
    this.estimatedLaborCostBaseline = props.estimatedLaborCostBaseline;
    this.estimateRevRecTemplate = props.estimateRevRecTemplate;
    this.revRecForecastRule = props.revRecForecastRule;
    this.usePercentCompleteOverride = props.usePercentCompleteOverride;
    this.estimatedLaborRevenue = props.estimatedLaborRevenue;
    this.estimatedGrossProfit = props.estimatedGrossProfit;
    this.estimatedGrossProfitPercent = props.estimatedGrossProfitPercent;
    this.projectExpenseType = props.projectExpenseType;
    this.applyProjectExpenseTypeToAll = props.applyProjectExpenseTypeToAll;
    this.allowAllResourcesForTasks = props.allowAllResourcesForTasks;
    this.jobPrice = props.jobPrice;
    this.isUtilizedTime = props.isUtilizedTime;
    this.isProductiveTime = props.isProductiveTime;
    this.isExemptTime = props.isExemptTime;
    this.materializeTime = props.materializeTime;
    this.allowExpenses = props.allowExpenses;
    this.allocatePayrollExpenses = props.allocatePayrollExpenses;
    this.includeCrmTasksInTotals = props.includeCrmTasksInTotals;
    this.globalSubscriptionStatus = props.globalSubscriptionStatus;
    this.jobResourcesList = props.jobResourcesList;
    this.plStatementList = props.plStatementList;
    this.addressbookList = props.addressbookList;
    this.milestonesList = props.milestonesList;
    this.creditCardsList = props.creditCardsList;
    this.timeApproval = props.timeApproval;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class VendorSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.VendorSearchBasic;
  accountJoin?: PlatformCommon.AccountSearchBasic;
  campaignResponseJoin?: PlatformCommon.CampaignSearchBasic;
  contactJoin?: PlatformCommon.ContactSearchBasic;
  contactPrimaryJoin?: PlatformCommon.ContactSearchBasic;
  expAccountJoin?: PlatformCommon.AccountSearchBasic;
  fileJoin?: PlatformCommon.FileSearchBasic;
  messagesJoin?: PlatformCommon.MessageSearchBasic;
  mseSubsidiaryJoin?: PlatformCommon.MseSubsidiarySearchBasic;
  messagesFromJoin?: PlatformCommon.MessageSearchBasic;
  messagesToJoin?: PlatformCommon.MessageSearchBasic;
  taxRegistrationJoin?: PlatformCommon.EntityTaxRegistrationSearchBasic;
  timeApproverJoin?: PlatformCommon.EmployeeSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: VendorSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.accountJoin = props.accountJoin;
    this.campaignResponseJoin = props.campaignResponseJoin;
    this.contactJoin = props.contactJoin;
    this.contactPrimaryJoin = props.contactPrimaryJoin;
    this.expAccountJoin = props.expAccountJoin;
    this.fileJoin = props.fileJoin;
    this.messagesJoin = props.messagesJoin;
    this.mseSubsidiaryJoin = props.mseSubsidiaryJoin;
    this.messagesFromJoin = props.messagesFromJoin;
    this.messagesToJoin = props.messagesToJoin;
    this.taxRegistrationJoin = props.taxRegistrationJoin;
    this.timeApproverJoin = props.timeApproverJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class CustomerItemPricingList extends SoapTypes.Base {
  itemPricing?: CustomerItemPricing[];
  replaceAll?: boolean;
  constructor(props: CustomerItemPricingList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.itemPricing = props.itemPricing;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomerTaxRegistrationList extends SoapTypes.Base {
  customerTaxRegistration?: CustomerTaxRegistration[];
  replaceAll?: boolean;
  constructor(props: CustomerTaxRegistrationList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customerTaxRegistration = props.customerTaxRegistration;
    this.replaceAll = props.replaceAll;
  }
}

export class VendorAddressbook extends SoapTypes.Base {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  label?: string;
  internalId?: string;
  addressbookAddress?: PlatformCommon.Address;
  constructor(props: VendorAddressbook) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.defaultShipping = props.defaultShipping;
    this.defaultBilling = props.defaultBilling;
    this.label = props.label;
    this.internalId = props.internalId;
    this.addressbookAddress = props.addressbookAddress;
  }
}

export class JobStatusSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.JobStatusSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: JobStatusSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class VendorTaxRegistrationList extends SoapTypes.Base {
  vendorTaxRegistration?: VendorTaxRegistration[];
  replaceAll?: boolean;
  constructor(props: VendorTaxRegistrationList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.vendorTaxRegistration = props.vendorTaxRegistration;
    this.replaceAll = props.replaceAll;
  }
}

export class Contact extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  entityId?: string;
  contactSource?: PlatformCore.RecordRef;
  company?: PlatformCore.RecordRef;
  salutation?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  title?: string;
  phone?: string;
  fax?: string;
  email?: string;
  defaultAddress?: string;
  isPrivate?: boolean;
  isInactive?: boolean;
  subsidiary?: PlatformCore.RecordRef;
  phoneticName?: string;
  categoryList?: CategoryList;
  altEmail?: string;
  officePhone?: string;
  homePhone?: string;
  mobilePhone?: string;
  supervisor?: PlatformCore.RecordRef;
  supervisorPhone?: string;
  assistant?: PlatformCore.RecordRef;
  assistantPhone?: string;
  comments?: string;
  globalSubscriptionStatus?: PlatformCommonTypes.GlobalSubscriptionStatus;
  image?: PlatformCore.RecordRef;
  billPay?: boolean;
  dateCreated?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  addressbookList?: ContactAddressbookList;
  subscriptionsList?: SubscriptionsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Contact) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customForm = props.customForm;
    this.entityId = props.entityId;
    this.contactSource = props.contactSource;
    this.company = props.company;
    this.salutation = props.salutation;
    this.firstName = props.firstName;
    this.middleName = props.middleName;
    this.lastName = props.lastName;
    this.title = props.title;
    this.phone = props.phone;
    this.fax = props.fax;
    this.email = props.email;
    this.defaultAddress = props.defaultAddress;
    this.isPrivate = props.isPrivate;
    this.isInactive = props.isInactive;
    this.subsidiary = props.subsidiary;
    this.phoneticName = props.phoneticName;
    this.categoryList = props.categoryList;
    this.altEmail = props.altEmail;
    this.officePhone = props.officePhone;
    this.homePhone = props.homePhone;
    this.mobilePhone = props.mobilePhone;
    this.supervisor = props.supervisor;
    this.supervisorPhone = props.supervisorPhone;
    this.assistant = props.assistant;
    this.assistantPhone = props.assistantPhone;
    this.comments = props.comments;
    this.globalSubscriptionStatus = props.globalSubscriptionStatus;
    this.image = props.image;
    this.billPay = props.billPay;
    this.dateCreated = props.dateCreated;
    this.lastModifiedDate = props.lastModifiedDate;
    this.addressbookList = props.addressbookList;
    this.subscriptionsList = props.subscriptionsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class VendorCurrencyList extends SoapTypes.Base {
  vendorCurrency?: VendorCurrency[];
  replaceAll?: boolean;
  constructor(props: VendorCurrencyList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.vendorCurrency = props.vendorCurrency;
    this.replaceAll = props.replaceAll;
  }
}

export class VendorCurrency extends SoapTypes.Base {
  currency?: PlatformCore.RecordRef;
  balance?: number;
  unbilledOrders?: number;
  constructor(props: VendorCurrency) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.currency = props.currency;
    this.balance = props.balance;
    this.unbilledOrders = props.unbilledOrders;
  }
}

export class ContactAccessRolesList extends SoapTypes.Base {
  contactRoles?: ContactAccessRoles[];
  replaceAll?: boolean;
  constructor(props: ContactAccessRolesList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.contactRoles = props.contactRoles;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomerStatusSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CustomerStatusSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: CustomerStatusSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class JobSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.JobSearchBasic;
  billingAccountJoin?: PlatformCommon.BillingAccountSearchBasic;
  billingScheduleJoin?: PlatformCommon.BillingScheduleSearchBasic;
  contactPrimaryJoin?: PlatformCommon.ContactSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  projectTaskJoin?: PlatformCommon.ProjectTaskSearchBasic;
  resourceAllocationJoin?: PlatformCommon.ResourceAllocationSearchBasic;
  taskJoin?: PlatformCommon.TaskSearchBasic;
  timeJoin?: PlatformCommon.TimeBillSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: JobSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.billingAccountJoin = props.billingAccountJoin;
    this.billingScheduleJoin = props.billingScheduleJoin;
    this.contactPrimaryJoin = props.contactPrimaryJoin;
    this.customerJoin = props.customerJoin;
    this.projectTaskJoin = props.projectTaskJoin;
    this.resourceAllocationJoin = props.resourceAllocationJoin;
    this.taskJoin = props.taskJoin;
    this.timeJoin = props.timeJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class CustomerSalesTeamList extends SoapTypes.Base {
  salesTeam?: CustomerSalesTeam[];
  replaceAll?: boolean;
  constructor(props: CustomerSalesTeamList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.salesTeam = props.salesTeam;
    this.replaceAll = props.replaceAll;
  }
}

export class Customer extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  entityId?: string;
  altName?: string;
  isPerson?: boolean;
  phoneticName?: string;
  salutation?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  companyName?: string;
  entityStatus?: PlatformCore.RecordRef;
  parent?: PlatformCore.RecordRef;
  phone?: string;
  fax?: string;
  email?: string;
  url?: string;
  defaultAddress?: string;
  isInactive?: boolean;
  category?: PlatformCore.RecordRef;
  title?: string;
  printOnCheckAs?: string;
  altPhone?: string;
  homePhone?: string;
  mobilePhone?: string;
  altEmail?: string;
  language?: PlatformCommonTypes.Language;
  comments?: string;
  numberFormat?: ListsRelationshipsTypes.CustomerNumberFormat;
  negativeNumberFormat?: ListsRelationshipsTypes.CustomerNegativeNumberFormat;
  dateCreated?: SoapTypes.Dateish;
  image?: PlatformCore.RecordRef;
  emailPreference?: ListsRelationshipsTypes.EmailPreference;
  subsidiary?: PlatformCore.RecordRef;
  representingSubsidiary?: PlatformCore.RecordRef;
  salesRep?: PlatformCore.RecordRef;
  territory?: PlatformCore.RecordRef;
  contribPct?: string;
  partner?: PlatformCore.RecordRef;
  salesGroup?: PlatformCore.RecordRef;
  vatRegNumber?: string;
  accountNumber?: string;
  taxExempt?: boolean;
  terms?: PlatformCore.RecordRef;
  creditLimit?: number;
  creditHoldOverride?: ListsRelationshipsTypes.CustomerCreditHoldOverride;
  monthlyClosing?: ListsRelationshipsTypes.CustomerMonthlyClosing;
  overrideCurrencyFormat?: boolean;
  displaySymbol?: string;
  symbolPlacement?: PlatformCommonTypes.CurrencySymbolPlacement;
  balance?: number;
  overdueBalance?: number;
  daysOverdue?: number;
  unbilledOrders?: number;
  consolUnbilledOrders?: number;
  consolOverdueBalance?: number;
  consolDepositBalance?: number;
  consolBalance?: number;
  consolAging?: number;
  consolAging1?: number;
  consolAging2?: number;
  consolAging3?: number;
  consolAging4?: number;
  consolDaysOverdue?: number;
  priceLevel?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  prefCCProcessor?: PlatformCore.RecordRef;
  depositBalance?: number;
  shipComplete?: boolean;
  taxable?: boolean;
  taxItem?: PlatformCore.RecordRef;
  resaleNumber?: string;
  aging?: number;
  aging1?: number;
  aging2?: number;
  aging3?: number;
  aging4?: number;
  startDate?: SoapTypes.Dateish;
  alcoholRecipientType?: PlatformCommonTypes.AlcoholRecipientType;
  endDate?: SoapTypes.Dateish;
  reminderDays?: number;
  shippingItem?: PlatformCore.RecordRef;
  thirdPartyAcct?: string;
  thirdPartyZipcode?: string;
  thirdPartyCountry?: PlatformCommonTypes.Country;
  giveAccess?: boolean;
  estimatedBudget?: number;
  accessRole?: PlatformCore.RecordRef;
  sendEmail?: boolean;
  assignedWebSite?: PlatformCore.RecordRef;
  password?: string;
  password2?: string;
  requirePwdChange?: boolean;
  campaignCategory?: PlatformCore.RecordRef;
  sourceWebSite?: PlatformCore.RecordRef;
  leadSource?: PlatformCore.RecordRef;
  receivablesAccount?: PlatformCore.RecordRef;
  drAccount?: PlatformCore.RecordRef;
  fxAccount?: PlatformCore.RecordRef;
  defaultOrderPriority?: number;
  webLead?: string;
  referrer?: string;
  keywords?: string;
  clickStream?: string;
  lastPageVisited?: string;
  visits?: number;
  firstVisit?: SoapTypes.Dateish;
  lastVisit?: SoapTypes.Dateish;
  billPay?: boolean;
  openingBalance?: number;
  lastModifiedDate?: SoapTypes.Dateish;
  openingBalanceDate?: SoapTypes.Dateish;
  openingBalanceAccount?: PlatformCore.RecordRef;
  stage?: ListsRelationshipsTypes.CustomerStage;
  emailTransactions?: boolean;
  printTransactions?: boolean;
  faxTransactions?: boolean;
  defaultTaxReg?: PlatformCore.RecordRef;
  syncPartnerTeams?: boolean;
  isBudgetApproved?: boolean;
  globalSubscriptionStatus?: PlatformCommonTypes.GlobalSubscriptionStatus;
  salesReadiness?: PlatformCore.RecordRef;
  salesTeamList?: CustomerSalesTeamList;
  buyingReason?: PlatformCore.RecordRef;
  downloadList?: CustomerDownloadList;
  buyingTimeFrame?: PlatformCore.RecordRef;
  addressbookList?: CustomerAddressbookList;
  subscriptionsList?: SubscriptionsList;
  contactRolesList?: ContactAccessRolesList;
  currencyList?: CustomerCurrencyList;
  creditCardsList?: CustomerCreditCardsList;
  partnersList?: CustomerPartnersList;
  groupPricingList?: CustomerGroupPricingList;
  itemPricingList?: CustomerItemPricingList;
  taxRegistrationList?: CustomerTaxRegistrationList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Customer) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.customForm = props.customForm;
    this.entityId = props.entityId;
    this.altName = props.altName;
    this.isPerson = props.isPerson;
    this.phoneticName = props.phoneticName;
    this.salutation = props.salutation;
    this.firstName = props.firstName;
    this.middleName = props.middleName;
    this.lastName = props.lastName;
    this.companyName = props.companyName;
    this.entityStatus = props.entityStatus;
    this.parent = props.parent;
    this.phone = props.phone;
    this.fax = props.fax;
    this.email = props.email;
    this.url = props.url;
    this.defaultAddress = props.defaultAddress;
    this.isInactive = props.isInactive;
    this.category = props.category;
    this.title = props.title;
    this.printOnCheckAs = props.printOnCheckAs;
    this.altPhone = props.altPhone;
    this.homePhone = props.homePhone;
    this.mobilePhone = props.mobilePhone;
    this.altEmail = props.altEmail;
    this.language = props.language;
    this.comments = props.comments;
    this.numberFormat = props.numberFormat;
    this.negativeNumberFormat = props.negativeNumberFormat;
    this.dateCreated = props.dateCreated;
    this.image = props.image;
    this.emailPreference = props.emailPreference;
    this.subsidiary = props.subsidiary;
    this.representingSubsidiary = props.representingSubsidiary;
    this.salesRep = props.salesRep;
    this.territory = props.territory;
    this.contribPct = props.contribPct;
    this.partner = props.partner;
    this.salesGroup = props.salesGroup;
    this.vatRegNumber = props.vatRegNumber;
    this.accountNumber = props.accountNumber;
    this.taxExempt = props.taxExempt;
    this.terms = props.terms;
    this.creditLimit = props.creditLimit;
    this.creditHoldOverride = props.creditHoldOverride;
    this.monthlyClosing = props.monthlyClosing;
    this.overrideCurrencyFormat = props.overrideCurrencyFormat;
    this.displaySymbol = props.displaySymbol;
    this.symbolPlacement = props.symbolPlacement;
    this.balance = props.balance;
    this.overdueBalance = props.overdueBalance;
    this.daysOverdue = props.daysOverdue;
    this.unbilledOrders = props.unbilledOrders;
    this.consolUnbilledOrders = props.consolUnbilledOrders;
    this.consolOverdueBalance = props.consolOverdueBalance;
    this.consolDepositBalance = props.consolDepositBalance;
    this.consolBalance = props.consolBalance;
    this.consolAging = props.consolAging;
    this.consolAging1 = props.consolAging1;
    this.consolAging2 = props.consolAging2;
    this.consolAging3 = props.consolAging3;
    this.consolAging4 = props.consolAging4;
    this.consolDaysOverdue = props.consolDaysOverdue;
    this.priceLevel = props.priceLevel;
    this.currency = props.currency;
    this.prefCCProcessor = props.prefCCProcessor;
    this.depositBalance = props.depositBalance;
    this.shipComplete = props.shipComplete;
    this.taxable = props.taxable;
    this.taxItem = props.taxItem;
    this.resaleNumber = props.resaleNumber;
    this.aging = props.aging;
    this.aging1 = props.aging1;
    this.aging2 = props.aging2;
    this.aging3 = props.aging3;
    this.aging4 = props.aging4;
    this.startDate = props.startDate;
    this.alcoholRecipientType = props.alcoholRecipientType;
    this.endDate = props.endDate;
    this.reminderDays = props.reminderDays;
    this.shippingItem = props.shippingItem;
    this.thirdPartyAcct = props.thirdPartyAcct;
    this.thirdPartyZipcode = props.thirdPartyZipcode;
    this.thirdPartyCountry = props.thirdPartyCountry;
    this.giveAccess = props.giveAccess;
    this.estimatedBudget = props.estimatedBudget;
    this.accessRole = props.accessRole;
    this.sendEmail = props.sendEmail;
    this.assignedWebSite = props.assignedWebSite;
    this.password = props.password;
    this.password2 = props.password2;
    this.requirePwdChange = props.requirePwdChange;
    this.campaignCategory = props.campaignCategory;
    this.sourceWebSite = props.sourceWebSite;
    this.leadSource = props.leadSource;
    this.receivablesAccount = props.receivablesAccount;
    this.drAccount = props.drAccount;
    this.fxAccount = props.fxAccount;
    this.defaultOrderPriority = props.defaultOrderPriority;
    this.webLead = props.webLead;
    this.referrer = props.referrer;
    this.keywords = props.keywords;
    this.clickStream = props.clickStream;
    this.lastPageVisited = props.lastPageVisited;
    this.visits = props.visits;
    this.firstVisit = props.firstVisit;
    this.lastVisit = props.lastVisit;
    this.billPay = props.billPay;
    this.openingBalance = props.openingBalance;
    this.lastModifiedDate = props.lastModifiedDate;
    this.openingBalanceDate = props.openingBalanceDate;
    this.openingBalanceAccount = props.openingBalanceAccount;
    this.stage = props.stage;
    this.emailTransactions = props.emailTransactions;
    this.printTransactions = props.printTransactions;
    this.faxTransactions = props.faxTransactions;
    this.defaultTaxReg = props.defaultTaxReg;
    this.syncPartnerTeams = props.syncPartnerTeams;
    this.isBudgetApproved = props.isBudgetApproved;
    this.globalSubscriptionStatus = props.globalSubscriptionStatus;
    this.salesReadiness = props.salesReadiness;
    this.salesTeamList = props.salesTeamList;
    this.buyingReason = props.buyingReason;
    this.downloadList = props.downloadList;
    this.buyingTimeFrame = props.buyingTimeFrame;
    this.addressbookList = props.addressbookList;
    this.subscriptionsList = props.subscriptionsList;
    this.contactRolesList = props.contactRolesList;
    this.currencyList = props.currencyList;
    this.creditCardsList = props.creditCardsList;
    this.partnersList = props.partnersList;
    this.groupPricingList = props.groupPricingList;
    this.itemPricingList = props.itemPricingList;
    this.taxRegistrationList = props.taxRegistrationList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class ContactAddressbookList extends SoapTypes.Base {
  addressbook?: ContactAddressbook[];
  replaceAll?: boolean;
  constructor(props: ContactAddressbookList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.addressbook = props.addressbook;
    this.replaceAll = props.replaceAll;
  }
}

export class EntityGroup extends PlatformCore.Record {
  groupName?: string;
  groupType?: ListsRelationshipsTypes.EntityGroupType;
  email?: string;
  groupOwner?: PlatformCore.RecordRef;
  isSavedSearch?: boolean;
  parentGroupType?: ListsRelationshipsTypes.EntityGroupType;
  savedSearch?: PlatformCore.RecordRef;
  isSalesTeam?: boolean;
  comments?: string;
  isPrivate?: boolean;
  restrictionGroup?: PlatformCore.RecordRef;
  isInactive?: boolean;
  isSalesRep?: boolean;
  isSupportRep?: boolean;
  isProductTeam?: boolean;
  isFunctionalTeam?: boolean;
  issueRole?: PlatformCore.RecordRef;
  isManufacturingWorkCenter?: boolean;
  subsidiary?: PlatformCore.RecordRef;
  machineResources?: number;
  laborResources?: number;
  workCalendar?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: EntityGroup) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.groupName = props.groupName;
    this.groupType = props.groupType;
    this.email = props.email;
    this.groupOwner = props.groupOwner;
    this.isSavedSearch = props.isSavedSearch;
    this.parentGroupType = props.parentGroupType;
    this.savedSearch = props.savedSearch;
    this.isSalesTeam = props.isSalesTeam;
    this.comments = props.comments;
    this.isPrivate = props.isPrivate;
    this.restrictionGroup = props.restrictionGroup;
    this.isInactive = props.isInactive;
    this.isSalesRep = props.isSalesRep;
    this.isSupportRep = props.isSupportRep;
    this.isProductTeam = props.isProductTeam;
    this.isFunctionalTeam = props.isFunctionalTeam;
    this.issueRole = props.issueRole;
    this.isManufacturingWorkCenter = props.isManufacturingWorkCenter;
    this.subsidiary = props.subsidiary;
    this.machineResources = props.machineResources;
    this.laborResources = props.laborResources;
    this.workCalendar = props.workCalendar;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CustomerSubsidiaryRelationshipSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CustomerSubsidiaryRelationshipSearch;
  columns?: CustomerSubsidiaryRelationshipSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CustomerSubsidiaryRelationshipSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}
