import * as ListsRelationshipsTypes from "./lists_relationships_types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as PlatformCommonTypes from "./platform_common_types";
import { SoapMappingBase, propsWithMappingsName } from "../../soap-types";
const MAPPINGS_NAME = "com_netsuite_webservices_lists_relationships_2019_2";
export type JobPlStatementProps = {
  costCategory?: string;
  revenue?: number;
  cost?: number;
  profit?: number;
  margin?: number;
};

export class JobPlStatement extends SoapMappingBase {
  costCategory?: string;
  revenue?: number;
  cost?: number;
  profit?: number;
  margin?: number;
  constructor(props: JobPlStatementProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.costCategory = props.costCategory;
    this.revenue = props.revenue;
    this.cost = props.cost;
    this.profit = props.profit;
    this.margin = props.margin;
  }
}

export type CategoryListProps = {
  category: PlatformCore.RecordRef[];
};

export class CategoryList extends SoapMappingBase {
  category: PlatformCore.RecordRef[];
  constructor(props: CategoryListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.category = props.category;
  }
}

export type VendorRolesListProps = {
  roles?: VendorRoles[];
  replaceAll?: boolean;
};

export class VendorRolesList extends SoapMappingBase {
  roles?: VendorRoles[];
  replaceAll?: boolean;
  constructor(props: VendorRolesListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.roles = props.roles;
    this.replaceAll = props.replaceAll;
  }
}

export type OriginatingLeadSearchProps = {
  basic?: PlatformCommon.OriginatingLeadSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class OriginatingLeadSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.OriginatingLeadSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: OriginatingLeadSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type JobSearchRowProps = {
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
};

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
  constructor(props: JobSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type JobTypeSearchRowProps = {
  basic?: PlatformCommon.JobTypeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class JobTypeSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.JobTypeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: JobTypeSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type JobSearchAdvancedProps = {
  criteria?: JobSearch;
  columns?: JobSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class JobSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: JobSearch;
  columns?: JobSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: JobSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type VendorAddressbookListProps = {
  addressbook?: VendorAddressbook[];
  replaceAll?: boolean;
};

export class VendorAddressbookList extends SoapMappingBase {
  addressbook?: VendorAddressbook[];
  replaceAll?: boolean;
  constructor(props: VendorAddressbookListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.addressbook = props.addressbook;
    this.replaceAll = props.replaceAll;
  }
}

export type CustomerPartnersListProps = {
  partners?: PlatformCommon.Partners[];
  replaceAll?: boolean;
};

export class CustomerPartnersList extends SoapMappingBase {
  partners?: PlatformCommon.Partners[];
  replaceAll?: boolean;
  constructor(props: CustomerPartnersListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.partners = props.partners;
    this.replaceAll = props.replaceAll;
  }
}

export type ContactSearchProps = {
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
};

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
  constructor(props: ContactSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type VendorTaxRegistrationProps = {
  nexusCountry?: PlatformCommonTypes.Country;
  nexus?: PlatformCore.RecordRef;
  address?: PlatformCore.RecordRef;
  taxRegistrationNumber?: string;
  id?: number;
};

export class VendorTaxRegistration extends SoapMappingBase {
  nexusCountry?: PlatformCommonTypes.Country;
  nexus?: PlatformCore.RecordRef;
  address?: PlatformCore.RecordRef;
  taxRegistrationNumber?: string;
  id?: number;
  constructor(props: VendorTaxRegistrationProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.nexusCountry = props.nexusCountry;
    this.nexus = props.nexus;
    this.address = props.address;
    this.taxRegistrationNumber = props.taxRegistrationNumber;
    this.id = props.id;
  }
}

export type BillingAccountProps = {
  customForm?: PlatformCore.RecordRef;
  idNumber?: string;
  customerDefault?: boolean;
  customer?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  name?: string;
  inactive?: boolean;
  memo?: string;
  createdDate?: string;
  createdBy?: string;
  currency?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  billingSchedule?: PlatformCore.RecordRef;
  frequency?: ListsRelationshipsTypes.BillingAccountFrequency;
  startDate?: string;
  lastBillDate?: string;
  lastBillCycleDate?: string;
  nextBillCycleDate?: string;
  invoiceForm?: PlatformCore.RecordRef;
  cashSaleForm?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class BillingAccount extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  idNumber?: string;
  customerDefault?: boolean;
  customer?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  name?: string;
  inactive?: boolean;
  memo?: string;
  createdDate?: string;
  createdBy?: string;
  currency?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  billingSchedule?: PlatformCore.RecordRef;
  frequency?: ListsRelationshipsTypes.BillingAccountFrequency;
  startDate?: string;
  lastBillDate?: string;
  lastBillCycleDate?: string;
  nextBillCycleDate?: string;
  invoiceForm?: PlatformCore.RecordRef;
  cashSaleForm?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: BillingAccountProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CustomerStatusProps = {
  name?: string;
  stage?: ListsRelationshipsTypes.CustomerStatusStage;
  probability?: number;
  description?: string;
  includeInLeadReports?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class CustomerStatus extends PlatformCore.Record {
  name?: string;
  stage?: ListsRelationshipsTypes.CustomerStatusStage;
  probability?: number;
  description?: string;
  includeInLeadReports?: boolean;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: CustomerStatusProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CustomerAddressbookProps = {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  isResidential?: boolean;
  label?: string;
  addressbookAddress?: PlatformCommon.Address;
  internalId?: string;
};

export class CustomerAddressbook extends SoapMappingBase {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  isResidential?: boolean;
  label?: string;
  addressbookAddress?: PlatformCommon.Address;
  internalId?: string;
  constructor(props: CustomerAddressbookProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.defaultShipping = props.defaultShipping;
    this.defaultBilling = props.defaultBilling;
    this.isResidential = props.isResidential;
    this.label = props.label;
    this.addressbookAddress = props.addressbookAddress;
    this.internalId = props.internalId;
  }
}

export type VendorSubsidiaryRelationshipSearchAdvancedProps = {
  criteria?: VendorSubsidiaryRelationshipSearch;
  columns?: VendorSubsidiaryRelationshipSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class VendorSubsidiaryRelationshipSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: VendorSubsidiaryRelationshipSearch;
  columns?: VendorSubsidiaryRelationshipSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: VendorSubsidiaryRelationshipSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type CustomerCurrencyProps = {
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
};

export class CustomerCurrency extends SoapMappingBase {
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
  constructor(props: CustomerCurrencyProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PartnerPromoCodeListProps = {
  promoCode?: PartnerPromoCode[];
  replaceAll?: boolean;
};

export class PartnerPromoCodeList extends SoapMappingBase {
  promoCode?: PartnerPromoCode[];
  replaceAll?: boolean;
  constructor(props: PartnerPromoCodeListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.promoCode = props.promoCode;
    this.replaceAll = props.replaceAll;
  }
}

export type CustomerSubsidiaryRelationshipProps = {
  entity?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  isPrimarySub?: boolean;
  primaryCurrency?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class CustomerSubsidiaryRelationship extends PlatformCore.Record {
  entity?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  isPrimarySub?: boolean;
  primaryCurrency?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: CustomerSubsidiaryRelationshipProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.entity = props.entity;
    this.subsidiary = props.subsidiary;
    this.isPrimarySub = props.isPrimarySub;
    this.primaryCurrency = props.primaryCurrency;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type JobStatusSearchRowProps = {
  basic?: PlatformCommon.JobStatusSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class JobStatusSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.JobStatusSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: JobStatusSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type PartnerAddressbookProps = {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  label?: string;
  internalId?: string;
  addressbookAddress?: PlatformCommon.Address;
};

export class PartnerAddressbook extends SoapMappingBase {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  label?: string;
  internalId?: string;
  addressbookAddress?: PlatformCommon.Address;
  constructor(props: PartnerAddressbookProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.defaultShipping = props.defaultShipping;
    this.defaultBilling = props.defaultBilling;
    this.label = props.label;
    this.internalId = props.internalId;
    this.addressbookAddress = props.addressbookAddress;
  }
}

export type PartnerSearchRowProps = {
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
};

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
  constructor(props: PartnerSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type ContactSearchRowProps = {
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
};

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
  constructor(props: ContactSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type BillingAccountSearchRowProps = {
  basic?: PlatformCommon.BillingAccountSearchRowBasic;
  jobJoin?: PlatformCommon.JobSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class BillingAccountSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.BillingAccountSearchRowBasic;
  jobJoin?: PlatformCommon.JobSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: BillingAccountSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.jobJoin = props.jobJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type JobCreditCardsProps = {
  internalId?: string;
  ccNumber?: string;
  ccExpireDate?: string;
  ccName?: string;
  paymentMethod?: PlatformCore.RecordRef;
  ccMemo?: string;
  ccDefault?: boolean;
  debitCardIssueNo?: string;
  validFrom?: string;
};

export class JobCreditCards extends SoapMappingBase {
  internalId?: string;
  ccNumber?: string;
  ccExpireDate?: string;
  ccName?: string;
  paymentMethod?: PlatformCore.RecordRef;
  ccMemo?: string;
  ccDefault?: boolean;
  debitCardIssueNo?: string;
  validFrom?: string;
  constructor(props: JobCreditCardsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type PartnerTaxRegistrationProps = {
  nexusCountry?: PlatformCommonTypes.Country;
  nexus?: PlatformCore.RecordRef;
  address?: PlatformCore.RecordRef;
  taxRegistrationNumber?: string;
  id?: number;
};

export class PartnerTaxRegistration extends SoapMappingBase {
  nexusCountry?: PlatformCommonTypes.Country;
  nexus?: PlatformCore.RecordRef;
  address?: PlatformCore.RecordRef;
  taxRegistrationNumber?: string;
  id?: number;
  constructor(props: PartnerTaxRegistrationProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.nexusCountry = props.nexusCountry;
    this.nexus = props.nexus;
    this.address = props.address;
    this.taxRegistrationNumber = props.taxRegistrationNumber;
    this.id = props.id;
  }
}

export type VendorPricingScheduleListProps = {
  pricingSchedule?: VendorPricingSchedule[];
  replaceAll?: boolean;
};

export class VendorPricingScheduleList extends SoapMappingBase {
  pricingSchedule?: VendorPricingSchedule[];
  replaceAll?: boolean;
  constructor(props: VendorPricingScheduleListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.pricingSchedule = props.pricingSchedule;
    this.replaceAll = props.replaceAll;
  }
}

export type CustomerSalesTeamProps = {
  employee?: PlatformCore.RecordRef;
  salesRole?: PlatformCore.RecordRef;
  isPrimary?: boolean;
  contribution?: number;
};

export class CustomerSalesTeam extends SoapMappingBase {
  employee?: PlatformCore.RecordRef;
  salesRole?: PlatformCore.RecordRef;
  isPrimary?: boolean;
  contribution?: number;
  constructor(props: CustomerSalesTeamProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.employee = props.employee;
    this.salesRole = props.salesRole;
    this.isPrimary = props.isPrimary;
    this.contribution = props.contribution;
  }
}

export type CustomerStatusSearchRowProps = {
  basic?: PlatformCommon.CustomerStatusSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class CustomerStatusSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CustomerStatusSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: CustomerStatusSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type PartnerAddressbookListProps = {
  addressbook?: PartnerAddressbook[];
  replaceAll?: boolean;
};

export class PartnerAddressbookList extends SoapMappingBase {
  addressbook?: PartnerAddressbook[];
  replaceAll?: boolean;
  constructor(props: PartnerAddressbookListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.addressbook = props.addressbook;
    this.replaceAll = props.replaceAll;
  }
}

export type JobMilestonesListProps = {
  milestones?: JobMilestones[];
  replaceAll?: boolean;
};

export class JobMilestonesList extends SoapMappingBase {
  milestones?: JobMilestones[];
  replaceAll?: boolean;
  constructor(props: JobMilestonesListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.milestones = props.milestones;
    this.replaceAll = props.replaceAll;
  }
}

export type CustomerDownloadProps = {
  file?: PlatformCore.RecordRef;
  licenseCode?: string;
  remainingDownloads?: number;
  expiration?: string;
};

export class CustomerDownload extends SoapMappingBase {
  file?: PlatformCore.RecordRef;
  licenseCode?: string;
  remainingDownloads?: number;
  expiration?: string;
  constructor(props: CustomerDownloadProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.file = props.file;
    this.licenseCode = props.licenseCode;
    this.remainingDownloads = props.remainingDownloads;
    this.expiration = props.expiration;
  }
}

export type CustomerTaxRegistrationProps = {
  nexusCountry?: PlatformCommonTypes.Country;
  nexus?: PlatformCore.RecordRef;
  address?: PlatformCore.RecordRef;
  taxRegistrationNumber?: string;
  id?: number;
};

export class CustomerTaxRegistration extends SoapMappingBase {
  nexusCountry?: PlatformCommonTypes.Country;
  nexus?: PlatformCore.RecordRef;
  address?: PlatformCore.RecordRef;
  taxRegistrationNumber?: string;
  id?: number;
  constructor(props: CustomerTaxRegistrationProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.nexusCountry = props.nexusCountry;
    this.nexus = props.nexus;
    this.address = props.address;
    this.taxRegistrationNumber = props.taxRegistrationNumber;
    this.id = props.id;
  }
}

export type BillingAccountSearchProps = {
  basic?: PlatformCommon.BillingAccountSearchBasic;
  jobJoin?: PlatformCommon.JobSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class BillingAccountSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.BillingAccountSearchBasic;
  jobJoin?: PlatformCommon.JobSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: BillingAccountSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.jobJoin = props.jobJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type JobPlStatementListProps = {
  jobPlStatement?: JobPlStatement[];
  replaceAll?: boolean;
};

export class JobPlStatementList extends SoapMappingBase {
  jobPlStatement?: JobPlStatement[];
  replaceAll?: boolean;
  constructor(props: JobPlStatementListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.jobPlStatement = props.jobPlStatement;
    this.replaceAll = props.replaceAll;
  }
}

export type SubscriptionsProps = {
  subscribed?: boolean;
  subscription?: PlatformCore.RecordRef;
  lastModifiedDate?: string;
};

export class Subscriptions extends SoapMappingBase {
  subscribed?: boolean;
  subscription?: PlatformCore.RecordRef;
  lastModifiedDate?: string;
  constructor(props: SubscriptionsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.subscribed = props.subscribed;
    this.subscription = props.subscription;
    this.lastModifiedDate = props.lastModifiedDate;
  }
}

export type EntityGroupSearchRowProps = {
  basic?: PlatformCommon.EntityGroupSearchRowBasic;
  groupMemberJoin?: PlatformCommon.EntitySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class EntityGroupSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.EntityGroupSearchRowBasic;
  groupMemberJoin?: PlatformCommon.EntitySearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: EntityGroupSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.groupMemberJoin = props.groupMemberJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type ContactAddressbookProps = {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  label?: string;
  addressbookAddress?: PlatformCommon.Address;
  internalId?: string;
};

export class ContactAddressbook extends SoapMappingBase {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  label?: string;
  addressbookAddress?: PlatformCommon.Address;
  internalId?: string;
  constructor(props: ContactAddressbookProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.defaultShipping = props.defaultShipping;
    this.defaultBilling = props.defaultBilling;
    this.label = props.label;
    this.addressbookAddress = props.addressbookAddress;
    this.internalId = props.internalId;
  }
}

export type CustomerCreditCardsProps = {
  internalId?: string;
  ccNumber?: string;
  ccExpireDate?: string;
  ccName?: string;
  paymentMethod?: PlatformCore.RecordRef;
  cardState?: PlatformCore.RecordRef;
  stateFrom?: string;
  debitcardIssueNo?: string;
  ccMemo?: string;
  validfrom?: string;
  ccDefault?: boolean;
};

export class CustomerCreditCards extends SoapMappingBase {
  internalId?: string;
  ccNumber?: string;
  ccExpireDate?: string;
  ccName?: string;
  paymentMethod?: PlatformCore.RecordRef;
  cardState?: PlatformCore.RecordRef;
  stateFrom?: string;
  debitcardIssueNo?: string;
  ccMemo?: string;
  validfrom?: string;
  ccDefault?: boolean;
  constructor(props: CustomerCreditCardsProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type JobAddressbookProps = {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  isResidential?: boolean;
  label?: string;
  internalId?: string;
  addressbookAddress?: PlatformCommon.Address;
};

export class JobAddressbook extends SoapMappingBase {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  isResidential?: boolean;
  label?: string;
  internalId?: string;
  addressbookAddress?: PlatformCommon.Address;
  constructor(props: JobAddressbookProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.defaultShipping = props.defaultShipping;
    this.defaultBilling = props.defaultBilling;
    this.isResidential = props.isResidential;
    this.label = props.label;
    this.internalId = props.internalId;
    this.addressbookAddress = props.addressbookAddress;
  }
}

export type JobTypeSearchAdvancedProps = {
  criteria?: JobTypeSearch;
  columns?: JobTypeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class JobTypeSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: JobTypeSearch;
  columns?: JobTypeSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: JobTypeSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type VendorSubsidiaryRelationshipProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: VendorSubsidiaryRelationshipProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type JobCreditCardsListProps = {
  creditCards?: JobCreditCards[];
  replaceAll?: boolean;
};

export class JobCreditCardsList extends SoapMappingBase {
  creditCards?: JobCreditCards[];
  replaceAll?: boolean;
  constructor(props: JobCreditCardsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.creditCards = props.creditCards;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorPricingScheduleProps = {
  scheduleName?: string;
  scheduleDiscount?: number;
};

export class VendorPricingSchedule extends SoapMappingBase {
  scheduleName?: string;
  scheduleDiscount?: number;
  constructor(props: VendorPricingScheduleProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.scheduleName = props.scheduleName;
    this.scheduleDiscount = props.scheduleDiscount;
  }
}

export type OriginatingLeadSearchRowProps = {
  basic?: PlatformCommon.OriginatingLeadSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class OriginatingLeadSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.OriginatingLeadSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: OriginatingLeadSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type SubscriptionsListProps = {
  subscriptions?: Subscriptions[];
  replaceAll?: boolean;
};

export class SubscriptionsList extends SoapMappingBase {
  subscriptions?: Subscriptions[];
  replaceAll?: boolean;
  constructor(props: SubscriptionsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.subscriptions = props.subscriptions;
    this.replaceAll = props.replaceAll;
  }
}

export type CustomerSearchProps = {
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
};

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
  constructor(props: CustomerSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CustomerItemPricingProps = {
  item?: PlatformCore.RecordRef;
  level?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  price?: number;
};

export class CustomerItemPricing extends SoapMappingBase {
  item?: PlatformCore.RecordRef;
  level?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  price?: number;
  constructor(props: CustomerItemPricingProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.item = props.item;
    this.level = props.level;
    this.currency = props.currency;
    this.price = props.price;
  }
}

export type PartnerTaxRegistrationListProps = {
  partnerTaxRegistration?: PartnerTaxRegistration[];
  replaceAll?: boolean;
};

export class PartnerTaxRegistrationList extends SoapMappingBase {
  partnerTaxRegistration?: PartnerTaxRegistration[];
  replaceAll?: boolean;
  constructor(props: PartnerTaxRegistrationListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.partnerTaxRegistration = props.partnerTaxRegistration;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorProps = {
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
  lastModifiedDate?: string;
  dateCreated?: string;
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
  openingBalanceDate?: string;
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
} & PlatformCore.RecordProps;

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
  lastModifiedDate?: string;
  dateCreated?: string;
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
  openingBalanceDate?: string;
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
  constructor(props: VendorProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type JobResourcesProps = {
  jobResource?: PlatformCore.RecordRef;
  email?: string;
  role?: PlatformCore.RecordRef;
};

export class JobResources extends SoapMappingBase {
  jobResource?: PlatformCore.RecordRef;
  email?: string;
  role?: PlatformCore.RecordRef;
  constructor(props: JobResourcesProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.jobResource = props.jobResource;
    this.email = props.email;
    this.role = props.role;
  }
}

export type JobTypeSearchProps = {
  basic?: PlatformCommon.JobTypeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class JobTypeSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.JobTypeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: JobTypeSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type BillingAccountSearchAdvancedProps = {
  criteria?: BillingAccountSearch;
  columns?: BillingAccountSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class BillingAccountSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: BillingAccountSearch;
  columns?: BillingAccountSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: BillingAccountSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type CustomerSearchRowProps = {
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
};

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
  constructor(props: CustomerSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type ContactAccessRolesProps = {
  giveAccess?: boolean;
  contact?: PlatformCore.RecordRef;
  email?: string;
  role?: PlatformCore.RecordRef;
  password?: string;
  password2?: string;
  sendEmail?: boolean;
};

export class ContactAccessRoles extends SoapMappingBase {
  giveAccess?: boolean;
  contact?: PlatformCore.RecordRef;
  email?: string;
  role?: PlatformCore.RecordRef;
  password?: string;
  password2?: string;
  sendEmail?: boolean;
  constructor(props: ContactAccessRolesProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.giveAccess = props.giveAccess;
    this.contact = props.contact;
    this.email = props.email;
    this.role = props.role;
    this.password = props.password;
    this.password2 = props.password2;
    this.sendEmail = props.sendEmail;
  }
}

export type PartnerSearchProps = {
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
};

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
  constructor(props: PartnerSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type JobStatusProps = {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class JobStatus extends PlatformCore.Record {
  name?: string;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: JobStatusProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type JobMilestonesProps = {
  milestoneName?: string;
  milestoneOrder?: string;
  milestoneEstComplete?: string;
  milestoneCompleted?: boolean;
  milestoneComments?: string;
};

export class JobMilestones extends SoapMappingBase {
  milestoneName?: string;
  milestoneOrder?: string;
  milestoneEstComplete?: string;
  milestoneCompleted?: boolean;
  milestoneComments?: string;
  constructor(props: JobMilestonesProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.milestoneName = props.milestoneName;
    this.milestoneOrder = props.milestoneOrder;
    this.milestoneEstComplete = props.milestoneEstComplete;
    this.milestoneCompleted = props.milestoneCompleted;
    this.milestoneComments = props.milestoneComments;
  }
}

export type JobResourcesListProps = {
  jobResources?: JobResources[];
  replaceAll?: boolean;
};

export class JobResourcesList extends SoapMappingBase {
  jobResources?: JobResources[];
  replaceAll?: boolean;
  constructor(props: JobResourcesListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.jobResources = props.jobResources;
    this.replaceAll = props.replaceAll;
  }
}

export type CustomerSearchAdvancedProps = {
  criteria?: CustomerSearch;
  columns?: CustomerSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class CustomerSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CustomerSearch;
  columns?: CustomerSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CustomerSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type PartnerSearchAdvancedProps = {
  criteria?: PartnerSearch;
  columns?: PartnerSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class PartnerSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PartnerSearch;
  columns?: PartnerSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: PartnerSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type VendorSearchAdvancedProps = {
  criteria?: VendorSearch;
  columns?: VendorSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class VendorSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: VendorSearch;
  columns?: VendorSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: VendorSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type VendorSearchRowProps = {
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
};

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
  constructor(props: VendorSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type JobPercentCompleteOverrideListProps = {
  jobPercentCompleteOverride?: JobPercentCompleteOverride[];
  replaceAll?: boolean;
};

export class JobPercentCompleteOverrideList extends SoapMappingBase {
  jobPercentCompleteOverride?: JobPercentCompleteOverride[];
  replaceAll?: boolean;
  constructor(props: JobPercentCompleteOverrideListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.jobPercentCompleteOverride = props.jobPercentCompleteOverride;
    this.replaceAll = props.replaceAll;
  }
}

export type JobStatusSearchAdvancedProps = {
  criteria?: JobStatusSearch;
  columns?: JobStatusSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class JobStatusSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: JobStatusSearch;
  columns?: JobStatusSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: JobStatusSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type PartnerProps = {
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
  lastModifiedDate?: string;
  dateCreated?: string;
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
} & PlatformCore.RecordProps;

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
  lastModifiedDate?: string;
  dateCreated?: string;
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
  constructor(props: PartnerProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type JobTypeProps = {
  name?: string;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class JobType extends PlatformCore.Record {
  name?: string;
  parent?: PlatformCore.RecordRef;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: JobTypeProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.name = props.name;
    this.parent = props.parent;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type CustomerCurrencyListProps = {
  currency?: CustomerCurrency[];
  replaceAll?: boolean;
};

export class CustomerCurrencyList extends SoapMappingBase {
  currency?: CustomerCurrency[];
  replaceAll?: boolean;
  constructor(props: CustomerCurrencyListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.currency = props.currency;
    this.replaceAll = props.replaceAll;
  }
}

export type EntityGroupSearchProps = {
  basic?: PlatformCommon.EntityGroupSearchBasic;
  groupMemberJoin?: PlatformCommon.EntitySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class EntityGroupSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.EntityGroupSearchBasic;
  groupMemberJoin?: PlatformCommon.EntitySearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: EntityGroupSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.groupMemberJoin = props.groupMemberJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type VendorSubsidiaryRelationshipSearchRowProps = {
  basic?: PlatformCommon.VendorSubsidiaryRelationshipSearchRowBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  vendorJoin?: PlatformCommon.VendorSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class VendorSubsidiaryRelationshipSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.VendorSubsidiaryRelationshipSearchRowBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  vendorJoin?: PlatformCommon.VendorSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: VendorSubsidiaryRelationshipSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.subsidiaryJoin = props.subsidiaryJoin;
    this.vendorJoin = props.vendorJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type CustomerAddressbookListProps = {
  addressbook?: CustomerAddressbook[];
  replaceAll?: boolean;
};

export class CustomerAddressbookList extends SoapMappingBase {
  addressbook?: CustomerAddressbook[];
  replaceAll?: boolean;
  constructor(props: CustomerAddressbookListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.addressbook = props.addressbook;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorSubsidiaryRelationshipSearchProps = {
  basic?: PlatformCommon.VendorSubsidiaryRelationshipSearchBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  vendorJoin?: PlatformCommon.VendorSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class VendorSubsidiaryRelationshipSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.VendorSubsidiaryRelationshipSearchBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  vendorJoin?: PlatformCommon.VendorSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: VendorSubsidiaryRelationshipSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.subsidiaryJoin = props.subsidiaryJoin;
    this.vendorJoin = props.vendorJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type ContactSearchAdvancedProps = {
  criteria?: ContactSearch;
  columns?: ContactSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class ContactSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ContactSearch;
  columns?: ContactSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ContactSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type CustomerGroupPricingListProps = {
  groupPricing?: CustomerGroupPricing[];
  replaceAll?: boolean;
};

export class CustomerGroupPricingList extends SoapMappingBase {
  groupPricing?: CustomerGroupPricing[];
  replaceAll?: boolean;
  constructor(props: CustomerGroupPricingListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.groupPricing = props.groupPricing;
    this.replaceAll = props.replaceAll;
  }
}

export type EntityGroupSearchAdvancedProps = {
  criteria?: EntityGroupSearch;
  columns?: EntityGroupSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class EntityGroupSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: EntityGroupSearch;
  columns?: EntityGroupSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: EntityGroupSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type CustomerDownloadListProps = {
  download?: CustomerDownload[];
  replaceAll?: boolean;
};

export class CustomerDownloadList extends SoapMappingBase {
  download?: CustomerDownload[];
  replaceAll?: boolean;
  constructor(props: CustomerDownloadListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.download = props.download;
    this.replaceAll = props.replaceAll;
  }
}

export type JobPercentCompleteOverrideProps = {
  period?: PlatformCore.RecordRef;
  percent?: number;
  comments?: string;
};

export class JobPercentCompleteOverride extends SoapMappingBase {
  period?: PlatformCore.RecordRef;
  percent?: number;
  comments?: string;
  constructor(props: JobPercentCompleteOverrideProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.period = props.period;
    this.percent = props.percent;
    this.comments = props.comments;
  }
}

export type VendorRolesProps = {
  selectedRole?: PlatformCore.RecordRef;
};

export class VendorRoles extends SoapMappingBase {
  selectedRole?: PlatformCore.RecordRef;
  constructor(props: VendorRolesProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.selectedRole = props.selectedRole;
  }
}

export type CustomerStatusSearchAdvancedProps = {
  criteria?: CustomerStatusSearch;
  columns?: CustomerStatusSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class CustomerStatusSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CustomerStatusSearch;
  columns?: CustomerStatusSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CustomerStatusSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type CustomerSubsidiaryRelationshipSearchProps = {
  basic?: PlatformCommon.CustomerSubsidiaryRelationshipSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class CustomerSubsidiaryRelationshipSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CustomerSubsidiaryRelationshipSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: CustomerSubsidiaryRelationshipSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.customerJoin = props.customerJoin;
    this.subsidiaryJoin = props.subsidiaryJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type CustomerCreditCardsListProps = {
  creditCards?: CustomerCreditCards[];
  replaceAll?: boolean;
};

export class CustomerCreditCardsList extends SoapMappingBase {
  creditCards?: CustomerCreditCards[];
  replaceAll?: boolean;
  constructor(props: CustomerCreditCardsListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.creditCards = props.creditCards;
    this.replaceAll = props.replaceAll;
  }
}

export type CustomerSubsidiaryRelationshipSearchRowProps = {
  basic?: PlatformCommon.CustomerSubsidiaryRelationshipSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class CustomerSubsidiaryRelationshipSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CustomerSubsidiaryRelationshipSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: CustomerSubsidiaryRelationshipSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.customerJoin = props.customerJoin;
    this.subsidiaryJoin = props.subsidiaryJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type JobAddressbookListProps = {
  addressbook?: JobAddressbook[];
  replaceAll?: boolean;
};

export class JobAddressbookList extends SoapMappingBase {
  addressbook?: JobAddressbook[];
  replaceAll?: boolean;
  constructor(props: JobAddressbookListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.addressbook = props.addressbook;
    this.replaceAll = props.replaceAll;
  }
}

export type CustomerGroupPricingProps = {
  group?: PlatformCore.RecordRef;
  level?: PlatformCore.RecordRef;
};

export class CustomerGroupPricing extends SoapMappingBase {
  group?: PlatformCore.RecordRef;
  level?: PlatformCore.RecordRef;
  constructor(props: CustomerGroupPricingProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.group = props.group;
    this.level = props.level;
  }
}

export type PartnerPromoCodeProps = {
  promoCode?: PlatformCore.RecordRef;
  discount?: string;
  endDate?: string;
};

export class PartnerPromoCode extends SoapMappingBase {
  promoCode?: PlatformCore.RecordRef;
  discount?: string;
  endDate?: string;
  constructor(props: PartnerPromoCodeProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.promoCode = props.promoCode;
    this.discount = props.discount;
    this.endDate = props.endDate;
  }
}

export type JobProps = {
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
  lastModifiedDate?: string;
  billPay?: boolean;
  dateCreated?: string;
  category?: PlatformCore.RecordRef;
  workplace?: PlatformCore.RecordRef;
  language?: PlatformCore.RecordRef;
  comments?: string;
  accountNumber?: string;
  currency?: PlatformCore.RecordRef;
  fxRate?: number;
  startDate?: string;
  endDate?: string;
  phone?: string;
  altPhone?: string;
  calculatedEndDate?: string;
  calculatedEndDateBaseline?: string;
  startDateBaseline?: string;
  projectedEndDate?: string;
  projectedEndDateBaseline?: string;
  lastBaselineDate?: string;
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
  openingBalanceDate?: string;
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
} & PlatformCore.RecordProps;

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
  lastModifiedDate?: string;
  billPay?: boolean;
  dateCreated?: string;
  category?: PlatformCore.RecordRef;
  workplace?: PlatformCore.RecordRef;
  language?: PlatformCore.RecordRef;
  comments?: string;
  accountNumber?: string;
  currency?: PlatformCore.RecordRef;
  fxRate?: number;
  startDate?: string;
  endDate?: string;
  phone?: string;
  altPhone?: string;
  calculatedEndDate?: string;
  calculatedEndDateBaseline?: string;
  startDateBaseline?: string;
  projectedEndDate?: string;
  projectedEndDateBaseline?: string;
  lastBaselineDate?: string;
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
  openingBalanceDate?: string;
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
  constructor(props: JobProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type VendorSearchProps = {
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
};

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
  constructor(props: VendorSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CustomerItemPricingListProps = {
  itemPricing?: CustomerItemPricing[];
  replaceAll?: boolean;
};

export class CustomerItemPricingList extends SoapMappingBase {
  itemPricing?: CustomerItemPricing[];
  replaceAll?: boolean;
  constructor(props: CustomerItemPricingListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.itemPricing = props.itemPricing;
    this.replaceAll = props.replaceAll;
  }
}

export type CustomerTaxRegistrationListProps = {
  customerTaxRegistration?: CustomerTaxRegistration[];
  replaceAll?: boolean;
};

export class CustomerTaxRegistrationList extends SoapMappingBase {
  customerTaxRegistration?: CustomerTaxRegistration[];
  replaceAll?: boolean;
  constructor(props: CustomerTaxRegistrationListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.customerTaxRegistration = props.customerTaxRegistration;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorAddressbookProps = {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  label?: string;
  internalId?: string;
  addressbookAddress?: PlatformCommon.Address;
};

export class VendorAddressbook extends SoapMappingBase {
  defaultShipping?: boolean;
  defaultBilling?: boolean;
  label?: string;
  internalId?: string;
  addressbookAddress?: PlatformCommon.Address;
  constructor(props: VendorAddressbookProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.defaultShipping = props.defaultShipping;
    this.defaultBilling = props.defaultBilling;
    this.label = props.label;
    this.internalId = props.internalId;
    this.addressbookAddress = props.addressbookAddress;
  }
}

export type JobStatusSearchProps = {
  basic?: PlatformCommon.JobStatusSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class JobStatusSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.JobStatusSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: JobStatusSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type VendorTaxRegistrationListProps = {
  vendorTaxRegistration?: VendorTaxRegistration[];
  replaceAll?: boolean;
};

export class VendorTaxRegistrationList extends SoapMappingBase {
  vendorTaxRegistration?: VendorTaxRegistration[];
  replaceAll?: boolean;
  constructor(props: VendorTaxRegistrationListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.vendorTaxRegistration = props.vendorTaxRegistration;
    this.replaceAll = props.replaceAll;
  }
}

export type ContactProps = {
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
  dateCreated?: string;
  lastModifiedDate?: string;
  addressbookList?: ContactAddressbookList;
  subscriptionsList?: SubscriptionsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

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
  dateCreated?: string;
  lastModifiedDate?: string;
  addressbookList?: ContactAddressbookList;
  subscriptionsList?: SubscriptionsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: ContactProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type VendorCurrencyListProps = {
  vendorCurrency?: VendorCurrency[];
  replaceAll?: boolean;
};

export class VendorCurrencyList extends SoapMappingBase {
  vendorCurrency?: VendorCurrency[];
  replaceAll?: boolean;
  constructor(props: VendorCurrencyListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.vendorCurrency = props.vendorCurrency;
    this.replaceAll = props.replaceAll;
  }
}

export type VendorCurrencyProps = {
  currency?: PlatformCore.RecordRef;
  balance?: number;
  unbilledOrders?: number;
};

export class VendorCurrency extends SoapMappingBase {
  currency?: PlatformCore.RecordRef;
  balance?: number;
  unbilledOrders?: number;
  constructor(props: VendorCurrencyProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.currency = props.currency;
    this.balance = props.balance;
    this.unbilledOrders = props.unbilledOrders;
  }
}

export type ContactAccessRolesListProps = {
  contactRoles?: ContactAccessRoles[];
  replaceAll?: boolean;
};

export class ContactAccessRolesList extends SoapMappingBase {
  contactRoles?: ContactAccessRoles[];
  replaceAll?: boolean;
  constructor(props: ContactAccessRolesListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.contactRoles = props.contactRoles;
    this.replaceAll = props.replaceAll;
  }
}

export type CustomerStatusSearchProps = {
  basic?: PlatformCommon.CustomerStatusSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class CustomerStatusSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CustomerStatusSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: CustomerStatusSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export type JobSearchProps = {
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
};

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
  constructor(props: JobSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CustomerSalesTeamListProps = {
  salesTeam?: CustomerSalesTeam[];
  replaceAll?: boolean;
};

export class CustomerSalesTeamList extends SoapMappingBase {
  salesTeam?: CustomerSalesTeam[];
  replaceAll?: boolean;
  constructor(props: CustomerSalesTeamListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.salesTeam = props.salesTeam;
    this.replaceAll = props.replaceAll;
  }
}

export type CustomerProps = {
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
  dateCreated?: string;
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
  startDate?: string;
  alcoholRecipientType?: PlatformCommonTypes.AlcoholRecipientType;
  endDate?: string;
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
  firstVisit?: string;
  lastVisit?: string;
  billPay?: boolean;
  openingBalance?: number;
  lastModifiedDate?: string;
  openingBalanceDate?: string;
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
} & PlatformCore.RecordProps;

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
  dateCreated?: string;
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
  startDate?: string;
  alcoholRecipientType?: PlatformCommonTypes.AlcoholRecipientType;
  endDate?: string;
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
  firstVisit?: string;
  lastVisit?: string;
  billPay?: boolean;
  openingBalance?: number;
  lastModifiedDate?: string;
  openingBalanceDate?: string;
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
  constructor(props: CustomerProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type ContactAddressbookListProps = {
  addressbook?: ContactAddressbook[];
  replaceAll?: boolean;
};

export class ContactAddressbookList extends SoapMappingBase {
  addressbook?: ContactAddressbook[];
  replaceAll?: boolean;
  constructor(props: ContactAddressbookListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.addressbook = props.addressbook;
    this.replaceAll = props.replaceAll;
  }
}

export type EntityGroupProps = {
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
} & PlatformCore.RecordProps;

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
  constructor(props: EntityGroupProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
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

export type CustomerSubsidiaryRelationshipSearchAdvancedProps = {
  criteria?: CustomerSubsidiaryRelationshipSearch;
  columns?: CustomerSubsidiaryRelationshipSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class CustomerSubsidiaryRelationshipSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CustomerSubsidiaryRelationshipSearch;
  columns?: CustomerSubsidiaryRelationshipSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CustomerSubsidiaryRelationshipSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}
