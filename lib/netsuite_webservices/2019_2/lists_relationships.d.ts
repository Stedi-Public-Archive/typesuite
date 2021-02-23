import * as ListsRelationshipsTypes from "./lists_relationships_types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as PlatformCommonTypes from "./platform_common_types";
import { SoapMappingBase } from "../../soap-types";
export declare type JobPlStatementProps = {
    costCategory?: string;
    revenue?: number;
    cost?: number;
    profit?: number;
    margin?: number;
};
export declare class JobPlStatement extends SoapMappingBase {
    costCategory?: string;
    revenue?: number;
    cost?: number;
    profit?: number;
    margin?: number;
    constructor(props: JobPlStatementProps);
}
export declare type CategoryListProps = {
    category: PlatformCore.RecordRef[];
};
export declare class CategoryList extends SoapMappingBase {
    category: PlatformCore.RecordRef[];
    constructor(props: CategoryListProps);
}
export declare type VendorRolesListProps = {
    roles?: VendorRoles[];
    replaceAll?: boolean;
};
export declare class VendorRolesList extends SoapMappingBase {
    roles?: VendorRoles[];
    replaceAll?: boolean;
    constructor(props: VendorRolesListProps);
}
export declare type OriginatingLeadSearchProps = {
    basic?: PlatformCommon.OriginatingLeadSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class OriginatingLeadSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.OriginatingLeadSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: OriginatingLeadSearchProps);
}
export declare type JobSearchRowProps = {
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
export declare class JobSearchRow extends PlatformCore.SearchRow {
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
    constructor(props: JobSearchRowProps);
}
export declare type JobTypeSearchRowProps = {
    basic?: PlatformCommon.JobTypeSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};
export declare class JobTypeSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.JobTypeSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    constructor(props: JobTypeSearchRowProps);
}
export declare type JobSearchAdvancedProps = {
    criteria?: JobSearch;
    columns?: JobSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class JobSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: JobSearch;
    columns?: JobSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: JobSearchAdvancedProps);
}
export declare type VendorAddressbookListProps = {
    addressbook?: VendorAddressbook[];
    replaceAll?: boolean;
};
export declare class VendorAddressbookList extends SoapMappingBase {
    addressbook?: VendorAddressbook[];
    replaceAll?: boolean;
    constructor(props: VendorAddressbookListProps);
}
export declare type CustomerPartnersListProps = {
    partners?: PlatformCommon.Partners[];
    replaceAll?: boolean;
};
export declare class CustomerPartnersList extends SoapMappingBase {
    partners?: PlatformCommon.Partners[];
    replaceAll?: boolean;
    constructor(props: CustomerPartnersListProps);
}
export declare type ContactSearchProps = {
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
export declare class ContactSearch extends PlatformCore.SearchRecord {
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
    constructor(props: ContactSearchProps);
}
export declare type VendorTaxRegistrationProps = {
    nexusCountry?: PlatformCommonTypes.Country;
    nexus?: PlatformCore.RecordRef;
    address?: PlatformCore.RecordRef;
    taxRegistrationNumber?: string;
    id?: number;
};
export declare class VendorTaxRegistration extends SoapMappingBase {
    nexusCountry?: PlatformCommonTypes.Country;
    nexus?: PlatformCore.RecordRef;
    address?: PlatformCore.RecordRef;
    taxRegistrationNumber?: string;
    id?: number;
    constructor(props: VendorTaxRegistrationProps);
}
export declare type BillingAccountProps = {
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
export declare class BillingAccount extends PlatformCore.Record {
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
    constructor(props: BillingAccountProps);
}
export declare type CustomerStatusProps = {
    name?: string;
    stage?: ListsRelationshipsTypes.CustomerStatusStage;
    probability?: number;
    description?: string;
    includeInLeadReports?: boolean;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CustomerStatus extends PlatformCore.Record {
    name?: string;
    stage?: ListsRelationshipsTypes.CustomerStatusStage;
    probability?: number;
    description?: string;
    includeInLeadReports?: boolean;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
    constructor(props: CustomerStatusProps);
}
export declare type CustomerAddressbookProps = {
    defaultShipping?: boolean;
    defaultBilling?: boolean;
    isResidential?: boolean;
    label?: string;
    addressbookAddress?: PlatformCommon.Address;
    internalId?: string;
};
export declare class CustomerAddressbook extends SoapMappingBase {
    defaultShipping?: boolean;
    defaultBilling?: boolean;
    isResidential?: boolean;
    label?: string;
    addressbookAddress?: PlatformCommon.Address;
    internalId?: string;
    constructor(props: CustomerAddressbookProps);
}
export declare type VendorSubsidiaryRelationshipSearchAdvancedProps = {
    criteria?: VendorSubsidiaryRelationshipSearch;
    columns?: VendorSubsidiaryRelationshipSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class VendorSubsidiaryRelationshipSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: VendorSubsidiaryRelationshipSearch;
    columns?: VendorSubsidiaryRelationshipSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: VendorSubsidiaryRelationshipSearchAdvancedProps);
}
export declare type CustomerCurrencyProps = {
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
export declare class CustomerCurrency extends SoapMappingBase {
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
    constructor(props: CustomerCurrencyProps);
}
export declare type PartnerPromoCodeListProps = {
    promoCode?: PartnerPromoCode[];
    replaceAll?: boolean;
};
export declare class PartnerPromoCodeList extends SoapMappingBase {
    promoCode?: PartnerPromoCode[];
    replaceAll?: boolean;
    constructor(props: PartnerPromoCodeListProps);
}
export declare type CustomerSubsidiaryRelationshipProps = {
    entity?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    isPrimarySub?: boolean;
    primaryCurrency?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CustomerSubsidiaryRelationship extends PlatformCore.Record {
    entity?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    isPrimarySub?: boolean;
    primaryCurrency?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: CustomerSubsidiaryRelationshipProps);
}
export declare type JobStatusSearchRowProps = {
    basic?: PlatformCommon.JobStatusSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};
export declare class JobStatusSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.JobStatusSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    constructor(props: JobStatusSearchRowProps);
}
export declare type PartnerAddressbookProps = {
    defaultShipping?: boolean;
    defaultBilling?: boolean;
    label?: string;
    internalId?: string;
    addressbookAddress?: PlatformCommon.Address;
};
export declare class PartnerAddressbook extends SoapMappingBase {
    defaultShipping?: boolean;
    defaultBilling?: boolean;
    label?: string;
    internalId?: string;
    addressbookAddress?: PlatformCommon.Address;
    constructor(props: PartnerAddressbookProps);
}
export declare type PartnerSearchRowProps = {
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
export declare class PartnerSearchRow extends PlatformCore.SearchRow {
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
    constructor(props: PartnerSearchRowProps);
}
export declare type ContactSearchRowProps = {
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
export declare class ContactSearchRow extends PlatformCore.SearchRow {
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
    constructor(props: ContactSearchRowProps);
}
export declare type BillingAccountSearchRowProps = {
    basic?: PlatformCommon.BillingAccountSearchRowBasic;
    jobJoin?: PlatformCommon.JobSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class BillingAccountSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.BillingAccountSearchRowBasic;
    jobJoin?: PlatformCommon.JobSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: BillingAccountSearchRowProps);
}
export declare type JobCreditCardsProps = {
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
export declare class JobCreditCards extends SoapMappingBase {
    internalId?: string;
    ccNumber?: string;
    ccExpireDate?: string;
    ccName?: string;
    paymentMethod?: PlatformCore.RecordRef;
    ccMemo?: string;
    ccDefault?: boolean;
    debitCardIssueNo?: string;
    validFrom?: string;
    constructor(props: JobCreditCardsProps);
}
export declare type PartnerTaxRegistrationProps = {
    nexusCountry?: PlatformCommonTypes.Country;
    nexus?: PlatformCore.RecordRef;
    address?: PlatformCore.RecordRef;
    taxRegistrationNumber?: string;
    id?: number;
};
export declare class PartnerTaxRegistration extends SoapMappingBase {
    nexusCountry?: PlatformCommonTypes.Country;
    nexus?: PlatformCore.RecordRef;
    address?: PlatformCore.RecordRef;
    taxRegistrationNumber?: string;
    id?: number;
    constructor(props: PartnerTaxRegistrationProps);
}
export declare type VendorPricingScheduleListProps = {
    pricingSchedule?: VendorPricingSchedule[];
    replaceAll?: boolean;
};
export declare class VendorPricingScheduleList extends SoapMappingBase {
    pricingSchedule?: VendorPricingSchedule[];
    replaceAll?: boolean;
    constructor(props: VendorPricingScheduleListProps);
}
export declare type CustomerSalesTeamProps = {
    employee?: PlatformCore.RecordRef;
    salesRole?: PlatformCore.RecordRef;
    isPrimary?: boolean;
    contribution?: number;
};
export declare class CustomerSalesTeam extends SoapMappingBase {
    employee?: PlatformCore.RecordRef;
    salesRole?: PlatformCore.RecordRef;
    isPrimary?: boolean;
    contribution?: number;
    constructor(props: CustomerSalesTeamProps);
}
export declare type CustomerStatusSearchRowProps = {
    basic?: PlatformCommon.CustomerStatusSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};
export declare class CustomerStatusSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.CustomerStatusSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    constructor(props: CustomerStatusSearchRowProps);
}
export declare type PartnerAddressbookListProps = {
    addressbook?: PartnerAddressbook[];
    replaceAll?: boolean;
};
export declare class PartnerAddressbookList extends SoapMappingBase {
    addressbook?: PartnerAddressbook[];
    replaceAll?: boolean;
    constructor(props: PartnerAddressbookListProps);
}
export declare type JobMilestonesListProps = {
    milestones?: JobMilestones[];
    replaceAll?: boolean;
};
export declare class JobMilestonesList extends SoapMappingBase {
    milestones?: JobMilestones[];
    replaceAll?: boolean;
    constructor(props: JobMilestonesListProps);
}
export declare type CustomerDownloadProps = {
    file?: PlatformCore.RecordRef;
    licenseCode?: string;
    remainingDownloads?: number;
    expiration?: string;
};
export declare class CustomerDownload extends SoapMappingBase {
    file?: PlatformCore.RecordRef;
    licenseCode?: string;
    remainingDownloads?: number;
    expiration?: string;
    constructor(props: CustomerDownloadProps);
}
export declare type CustomerTaxRegistrationProps = {
    nexusCountry?: PlatformCommonTypes.Country;
    nexus?: PlatformCore.RecordRef;
    address?: PlatformCore.RecordRef;
    taxRegistrationNumber?: string;
    id?: number;
};
export declare class CustomerTaxRegistration extends SoapMappingBase {
    nexusCountry?: PlatformCommonTypes.Country;
    nexus?: PlatformCore.RecordRef;
    address?: PlatformCore.RecordRef;
    taxRegistrationNumber?: string;
    id?: number;
    constructor(props: CustomerTaxRegistrationProps);
}
export declare type BillingAccountSearchProps = {
    basic?: PlatformCommon.BillingAccountSearchBasic;
    jobJoin?: PlatformCommon.JobSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class BillingAccountSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.BillingAccountSearchBasic;
    jobJoin?: PlatformCommon.JobSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: BillingAccountSearchProps);
}
export declare type JobPlStatementListProps = {
    jobPlStatement?: JobPlStatement[];
    replaceAll?: boolean;
};
export declare class JobPlStatementList extends SoapMappingBase {
    jobPlStatement?: JobPlStatement[];
    replaceAll?: boolean;
    constructor(props: JobPlStatementListProps);
}
export declare type SubscriptionsProps = {
    subscribed?: boolean;
    subscription?: PlatformCore.RecordRef;
    lastModifiedDate?: string;
};
export declare class Subscriptions extends SoapMappingBase {
    subscribed?: boolean;
    subscription?: PlatformCore.RecordRef;
    lastModifiedDate?: string;
    constructor(props: SubscriptionsProps);
}
export declare type EntityGroupSearchRowProps = {
    basic?: PlatformCommon.EntityGroupSearchRowBasic;
    groupMemberJoin?: PlatformCommon.EntitySearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class EntityGroupSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.EntityGroupSearchRowBasic;
    groupMemberJoin?: PlatformCommon.EntitySearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: EntityGroupSearchRowProps);
}
export declare type ContactAddressbookProps = {
    defaultShipping?: boolean;
    defaultBilling?: boolean;
    label?: string;
    addressbookAddress?: PlatformCommon.Address;
    internalId?: string;
};
export declare class ContactAddressbook extends SoapMappingBase {
    defaultShipping?: boolean;
    defaultBilling?: boolean;
    label?: string;
    addressbookAddress?: PlatformCommon.Address;
    internalId?: string;
    constructor(props: ContactAddressbookProps);
}
export declare type CustomerCreditCardsProps = {
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
export declare class CustomerCreditCards extends SoapMappingBase {
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
    constructor(props: CustomerCreditCardsProps);
}
export declare type JobAddressbookProps = {
    defaultShipping?: boolean;
    defaultBilling?: boolean;
    isResidential?: boolean;
    label?: string;
    internalId?: string;
    addressbookAddress?: PlatformCommon.Address;
};
export declare class JobAddressbook extends SoapMappingBase {
    defaultShipping?: boolean;
    defaultBilling?: boolean;
    isResidential?: boolean;
    label?: string;
    internalId?: string;
    addressbookAddress?: PlatformCommon.Address;
    constructor(props: JobAddressbookProps);
}
export declare type JobTypeSearchAdvancedProps = {
    criteria?: JobTypeSearch;
    columns?: JobTypeSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class JobTypeSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: JobTypeSearch;
    columns?: JobTypeSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: JobTypeSearchAdvancedProps);
}
export declare type VendorSubsidiaryRelationshipProps = {
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
export declare class VendorSubsidiaryRelationship extends PlatformCore.Record {
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
    constructor(props: VendorSubsidiaryRelationshipProps);
}
export declare type JobCreditCardsListProps = {
    creditCards?: JobCreditCards[];
    replaceAll?: boolean;
};
export declare class JobCreditCardsList extends SoapMappingBase {
    creditCards?: JobCreditCards[];
    replaceAll?: boolean;
    constructor(props: JobCreditCardsListProps);
}
export declare type VendorPricingScheduleProps = {
    scheduleName?: string;
    scheduleDiscount?: number;
};
export declare class VendorPricingSchedule extends SoapMappingBase {
    scheduleName?: string;
    scheduleDiscount?: number;
    constructor(props: VendorPricingScheduleProps);
}
export declare type OriginatingLeadSearchRowProps = {
    basic?: PlatformCommon.OriginatingLeadSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class OriginatingLeadSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.OriginatingLeadSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: OriginatingLeadSearchRowProps);
}
export declare type SubscriptionsListProps = {
    subscriptions?: Subscriptions[];
    replaceAll?: boolean;
};
export declare class SubscriptionsList extends SoapMappingBase {
    subscriptions?: Subscriptions[];
    replaceAll?: boolean;
    constructor(props: SubscriptionsListProps);
}
export declare type CustomerSearchProps = {
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
export declare class CustomerSearch extends PlatformCore.SearchRecord {
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
    constructor(props: CustomerSearchProps);
}
export declare type CustomerItemPricingProps = {
    item?: PlatformCore.RecordRef;
    level?: PlatformCore.RecordRef;
    currency?: PlatformCore.RecordRef;
    price?: number;
};
export declare class CustomerItemPricing extends SoapMappingBase {
    item?: PlatformCore.RecordRef;
    level?: PlatformCore.RecordRef;
    currency?: PlatformCore.RecordRef;
    price?: number;
    constructor(props: CustomerItemPricingProps);
}
export declare type PartnerTaxRegistrationListProps = {
    partnerTaxRegistration?: PartnerTaxRegistration[];
    replaceAll?: boolean;
};
export declare class PartnerTaxRegistrationList extends SoapMappingBase {
    partnerTaxRegistration?: PartnerTaxRegistration[];
    replaceAll?: boolean;
    constructor(props: PartnerTaxRegistrationListProps);
}
export declare type VendorProps = {
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
export declare class Vendor extends PlatformCore.Record {
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
    constructor(props: VendorProps);
}
export declare type JobResourcesProps = {
    jobResource?: PlatformCore.RecordRef;
    email?: string;
    role?: PlatformCore.RecordRef;
};
export declare class JobResources extends SoapMappingBase {
    jobResource?: PlatformCore.RecordRef;
    email?: string;
    role?: PlatformCore.RecordRef;
    constructor(props: JobResourcesProps);
}
export declare type JobTypeSearchProps = {
    basic?: PlatformCommon.JobTypeSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
};
export declare class JobTypeSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.JobTypeSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    constructor(props: JobTypeSearchProps);
}
export declare type BillingAccountSearchAdvancedProps = {
    criteria?: BillingAccountSearch;
    columns?: BillingAccountSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class BillingAccountSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: BillingAccountSearch;
    columns?: BillingAccountSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: BillingAccountSearchAdvancedProps);
}
export declare type CustomerSearchRowProps = {
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
export declare class CustomerSearchRow extends PlatformCore.SearchRow {
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
    constructor(props: CustomerSearchRowProps);
}
export declare type ContactAccessRolesProps = {
    giveAccess?: boolean;
    contact?: PlatformCore.RecordRef;
    email?: string;
    role?: PlatformCore.RecordRef;
    password?: string;
    password2?: string;
    sendEmail?: boolean;
};
export declare class ContactAccessRoles extends SoapMappingBase {
    giveAccess?: boolean;
    contact?: PlatformCore.RecordRef;
    email?: string;
    role?: PlatformCore.RecordRef;
    password?: string;
    password2?: string;
    sendEmail?: boolean;
    constructor(props: ContactAccessRolesProps);
}
export declare type PartnerSearchProps = {
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
export declare class PartnerSearch extends PlatformCore.SearchRecord {
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
    constructor(props: PartnerSearchProps);
}
export declare type JobStatusProps = {
    name?: string;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class JobStatus extends PlatformCore.Record {
    name?: string;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
    constructor(props: JobStatusProps);
}
export declare type JobMilestonesProps = {
    milestoneName?: string;
    milestoneOrder?: string;
    milestoneEstComplete?: string;
    milestoneCompleted?: boolean;
    milestoneComments?: string;
};
export declare class JobMilestones extends SoapMappingBase {
    milestoneName?: string;
    milestoneOrder?: string;
    milestoneEstComplete?: string;
    milestoneCompleted?: boolean;
    milestoneComments?: string;
    constructor(props: JobMilestonesProps);
}
export declare type JobResourcesListProps = {
    jobResources?: JobResources[];
    replaceAll?: boolean;
};
export declare class JobResourcesList extends SoapMappingBase {
    jobResources?: JobResources[];
    replaceAll?: boolean;
    constructor(props: JobResourcesListProps);
}
export declare type CustomerSearchAdvancedProps = {
    criteria?: CustomerSearch;
    columns?: CustomerSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class CustomerSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: CustomerSearch;
    columns?: CustomerSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: CustomerSearchAdvancedProps);
}
export declare type PartnerSearchAdvancedProps = {
    criteria?: PartnerSearch;
    columns?: PartnerSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class PartnerSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: PartnerSearch;
    columns?: PartnerSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: PartnerSearchAdvancedProps);
}
export declare type VendorSearchAdvancedProps = {
    criteria?: VendorSearch;
    columns?: VendorSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class VendorSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: VendorSearch;
    columns?: VendorSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: VendorSearchAdvancedProps);
}
export declare type VendorSearchRowProps = {
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
export declare class VendorSearchRow extends PlatformCore.SearchRow {
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
    constructor(props: VendorSearchRowProps);
}
export declare type JobPercentCompleteOverrideListProps = {
    jobPercentCompleteOverride?: JobPercentCompleteOverride[];
    replaceAll?: boolean;
};
export declare class JobPercentCompleteOverrideList extends SoapMappingBase {
    jobPercentCompleteOverride?: JobPercentCompleteOverride[];
    replaceAll?: boolean;
    constructor(props: JobPercentCompleteOverrideListProps);
}
export declare type JobStatusSearchAdvancedProps = {
    criteria?: JobStatusSearch;
    columns?: JobStatusSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class JobStatusSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: JobStatusSearch;
    columns?: JobStatusSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: JobStatusSearchAdvancedProps);
}
export declare type PartnerProps = {
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
export declare class Partner extends PlatformCore.Record {
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
    constructor(props: PartnerProps);
}
export declare type JobTypeProps = {
    name?: string;
    parent?: PlatformCore.RecordRef;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class JobType extends PlatformCore.Record {
    name?: string;
    parent?: PlatformCore.RecordRef;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
    constructor(props: JobTypeProps);
}
export declare type CustomerCurrencyListProps = {
    currency?: CustomerCurrency[];
    replaceAll?: boolean;
};
export declare class CustomerCurrencyList extends SoapMappingBase {
    currency?: CustomerCurrency[];
    replaceAll?: boolean;
    constructor(props: CustomerCurrencyListProps);
}
export declare type EntityGroupSearchProps = {
    basic?: PlatformCommon.EntityGroupSearchBasic;
    groupMemberJoin?: PlatformCommon.EntitySearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class EntityGroupSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.EntityGroupSearchBasic;
    groupMemberJoin?: PlatformCommon.EntitySearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: EntityGroupSearchProps);
}
export declare type VendorSubsidiaryRelationshipSearchRowProps = {
    basic?: PlatformCommon.VendorSubsidiaryRelationshipSearchRowBasic;
    subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
    vendorJoin?: PlatformCommon.VendorSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class VendorSubsidiaryRelationshipSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.VendorSubsidiaryRelationshipSearchRowBasic;
    subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
    vendorJoin?: PlatformCommon.VendorSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: VendorSubsidiaryRelationshipSearchRowProps);
}
export declare type CustomerAddressbookListProps = {
    addressbook?: CustomerAddressbook[];
    replaceAll?: boolean;
};
export declare class CustomerAddressbookList extends SoapMappingBase {
    addressbook?: CustomerAddressbook[];
    replaceAll?: boolean;
    constructor(props: CustomerAddressbookListProps);
}
export declare type VendorSubsidiaryRelationshipSearchProps = {
    basic?: PlatformCommon.VendorSubsidiaryRelationshipSearchBasic;
    subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
    vendorJoin?: PlatformCommon.VendorSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class VendorSubsidiaryRelationshipSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.VendorSubsidiaryRelationshipSearchBasic;
    subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
    vendorJoin?: PlatformCommon.VendorSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: VendorSubsidiaryRelationshipSearchProps);
}
export declare type ContactSearchAdvancedProps = {
    criteria?: ContactSearch;
    columns?: ContactSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class ContactSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: ContactSearch;
    columns?: ContactSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: ContactSearchAdvancedProps);
}
export declare type CustomerGroupPricingListProps = {
    groupPricing?: CustomerGroupPricing[];
    replaceAll?: boolean;
};
export declare class CustomerGroupPricingList extends SoapMappingBase {
    groupPricing?: CustomerGroupPricing[];
    replaceAll?: boolean;
    constructor(props: CustomerGroupPricingListProps);
}
export declare type EntityGroupSearchAdvancedProps = {
    criteria?: EntityGroupSearch;
    columns?: EntityGroupSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class EntityGroupSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: EntityGroupSearch;
    columns?: EntityGroupSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: EntityGroupSearchAdvancedProps);
}
export declare type CustomerDownloadListProps = {
    download?: CustomerDownload[];
    replaceAll?: boolean;
};
export declare class CustomerDownloadList extends SoapMappingBase {
    download?: CustomerDownload[];
    replaceAll?: boolean;
    constructor(props: CustomerDownloadListProps);
}
export declare type JobPercentCompleteOverrideProps = {
    period?: PlatformCore.RecordRef;
    percent?: number;
    comments?: string;
};
export declare class JobPercentCompleteOverride extends SoapMappingBase {
    period?: PlatformCore.RecordRef;
    percent?: number;
    comments?: string;
    constructor(props: JobPercentCompleteOverrideProps);
}
export declare type VendorRolesProps = {
    selectedRole?: PlatformCore.RecordRef;
};
export declare class VendorRoles extends SoapMappingBase {
    selectedRole?: PlatformCore.RecordRef;
    constructor(props: VendorRolesProps);
}
export declare type CustomerStatusSearchAdvancedProps = {
    criteria?: CustomerStatusSearch;
    columns?: CustomerStatusSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class CustomerStatusSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: CustomerStatusSearch;
    columns?: CustomerStatusSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: CustomerStatusSearchAdvancedProps);
}
export declare type CustomerSubsidiaryRelationshipSearchProps = {
    basic?: PlatformCommon.CustomerSubsidiaryRelationshipSearchBasic;
    customerJoin?: PlatformCommon.CustomerSearchBasic;
    subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class CustomerSubsidiaryRelationshipSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.CustomerSubsidiaryRelationshipSearchBasic;
    customerJoin?: PlatformCommon.CustomerSearchBasic;
    subsidiaryJoin?: PlatformCommon.SubsidiarySearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: CustomerSubsidiaryRelationshipSearchProps);
}
export declare type CustomerCreditCardsListProps = {
    creditCards?: CustomerCreditCards[];
    replaceAll?: boolean;
};
export declare class CustomerCreditCardsList extends SoapMappingBase {
    creditCards?: CustomerCreditCards[];
    replaceAll?: boolean;
    constructor(props: CustomerCreditCardsListProps);
}
export declare type CustomerSubsidiaryRelationshipSearchRowProps = {
    basic?: PlatformCommon.CustomerSubsidiaryRelationshipSearchRowBasic;
    customerJoin?: PlatformCommon.CustomerSearchRowBasic;
    subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class CustomerSubsidiaryRelationshipSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.CustomerSubsidiaryRelationshipSearchRowBasic;
    customerJoin?: PlatformCommon.CustomerSearchRowBasic;
    subsidiaryJoin?: PlatformCommon.SubsidiarySearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: CustomerSubsidiaryRelationshipSearchRowProps);
}
export declare type JobAddressbookListProps = {
    addressbook?: JobAddressbook[];
    replaceAll?: boolean;
};
export declare class JobAddressbookList extends SoapMappingBase {
    addressbook?: JobAddressbook[];
    replaceAll?: boolean;
    constructor(props: JobAddressbookListProps);
}
export declare type CustomerGroupPricingProps = {
    group?: PlatformCore.RecordRef;
    level?: PlatformCore.RecordRef;
};
export declare class CustomerGroupPricing extends SoapMappingBase {
    group?: PlatformCore.RecordRef;
    level?: PlatformCore.RecordRef;
    constructor(props: CustomerGroupPricingProps);
}
export declare type PartnerPromoCodeProps = {
    promoCode?: PlatformCore.RecordRef;
    discount?: string;
    endDate?: string;
};
export declare class PartnerPromoCode extends SoapMappingBase {
    promoCode?: PlatformCore.RecordRef;
    discount?: string;
    endDate?: string;
    constructor(props: PartnerPromoCodeProps);
}
export declare type JobProps = {
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
export declare class Job extends PlatformCore.Record {
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
    constructor(props: JobProps);
}
export declare type VendorSearchProps = {
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
export declare class VendorSearch extends PlatformCore.SearchRecord {
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
    constructor(props: VendorSearchProps);
}
export declare type CustomerItemPricingListProps = {
    itemPricing?: CustomerItemPricing[];
    replaceAll?: boolean;
};
export declare class CustomerItemPricingList extends SoapMappingBase {
    itemPricing?: CustomerItemPricing[];
    replaceAll?: boolean;
    constructor(props: CustomerItemPricingListProps);
}
export declare type CustomerTaxRegistrationListProps = {
    customerTaxRegistration?: CustomerTaxRegistration[];
    replaceAll?: boolean;
};
export declare class CustomerTaxRegistrationList extends SoapMappingBase {
    customerTaxRegistration?: CustomerTaxRegistration[];
    replaceAll?: boolean;
    constructor(props: CustomerTaxRegistrationListProps);
}
export declare type VendorAddressbookProps = {
    defaultShipping?: boolean;
    defaultBilling?: boolean;
    label?: string;
    internalId?: string;
    addressbookAddress?: PlatformCommon.Address;
};
export declare class VendorAddressbook extends SoapMappingBase {
    defaultShipping?: boolean;
    defaultBilling?: boolean;
    label?: string;
    internalId?: string;
    addressbookAddress?: PlatformCommon.Address;
    constructor(props: VendorAddressbookProps);
}
export declare type JobStatusSearchProps = {
    basic?: PlatformCommon.JobStatusSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
};
export declare class JobStatusSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.JobStatusSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    constructor(props: JobStatusSearchProps);
}
export declare type VendorTaxRegistrationListProps = {
    vendorTaxRegistration?: VendorTaxRegistration[];
    replaceAll?: boolean;
};
export declare class VendorTaxRegistrationList extends SoapMappingBase {
    vendorTaxRegistration?: VendorTaxRegistration[];
    replaceAll?: boolean;
    constructor(props: VendorTaxRegistrationListProps);
}
export declare type ContactProps = {
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
export declare class Contact extends PlatformCore.Record {
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
    constructor(props: ContactProps);
}
export declare type VendorCurrencyListProps = {
    vendorCurrency?: VendorCurrency[];
    replaceAll?: boolean;
};
export declare class VendorCurrencyList extends SoapMappingBase {
    vendorCurrency?: VendorCurrency[];
    replaceAll?: boolean;
    constructor(props: VendorCurrencyListProps);
}
export declare type VendorCurrencyProps = {
    currency?: PlatformCore.RecordRef;
    balance?: number;
    unbilledOrders?: number;
};
export declare class VendorCurrency extends SoapMappingBase {
    currency?: PlatformCore.RecordRef;
    balance?: number;
    unbilledOrders?: number;
    constructor(props: VendorCurrencyProps);
}
export declare type ContactAccessRolesListProps = {
    contactRoles?: ContactAccessRoles[];
    replaceAll?: boolean;
};
export declare class ContactAccessRolesList extends SoapMappingBase {
    contactRoles?: ContactAccessRoles[];
    replaceAll?: boolean;
    constructor(props: ContactAccessRolesListProps);
}
export declare type CustomerStatusSearchProps = {
    basic?: PlatformCommon.CustomerStatusSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
};
export declare class CustomerStatusSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.CustomerStatusSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    constructor(props: CustomerStatusSearchProps);
}
export declare type JobSearchProps = {
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
export declare class JobSearch extends PlatformCore.SearchRecord {
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
    constructor(props: JobSearchProps);
}
export declare type CustomerSalesTeamListProps = {
    salesTeam?: CustomerSalesTeam[];
    replaceAll?: boolean;
};
export declare class CustomerSalesTeamList extends SoapMappingBase {
    salesTeam?: CustomerSalesTeam[];
    replaceAll?: boolean;
    constructor(props: CustomerSalesTeamListProps);
}
export declare type CustomerProps = {
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
export declare class Customer extends PlatformCore.Record {
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
    constructor(props: CustomerProps);
}
export declare type ContactAddressbookListProps = {
    addressbook?: ContactAddressbook[];
    replaceAll?: boolean;
};
export declare class ContactAddressbookList extends SoapMappingBase {
    addressbook?: ContactAddressbook[];
    replaceAll?: boolean;
    constructor(props: ContactAddressbookListProps);
}
export declare type EntityGroupProps = {
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
export declare class EntityGroup extends PlatformCore.Record {
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
    constructor(props: EntityGroupProps);
}
export declare type CustomerSubsidiaryRelationshipSearchAdvancedProps = {
    criteria?: CustomerSubsidiaryRelationshipSearch;
    columns?: CustomerSubsidiaryRelationshipSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class CustomerSubsidiaryRelationshipSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: CustomerSubsidiaryRelationshipSearch;
    columns?: CustomerSubsidiaryRelationshipSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: CustomerSubsidiaryRelationshipSearchAdvancedProps);
}
