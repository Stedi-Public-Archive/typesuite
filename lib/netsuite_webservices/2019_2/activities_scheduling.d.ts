import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as ActivitiesSchedulingTypes from "./activities_scheduling_types";
import * as PlatformCommonTypes from "./platform_common_types";
import * as PlatformCoreTypes from "./platform_core_types";
import { SoapMappingBase } from "../../soap-types";
export declare type TaskContactListProps = {
    contact?: TaskContact[];
    replaceAll?: boolean;
};
export declare class TaskContactList extends SoapMappingBase {
    contact?: TaskContact[];
    replaceAll?: boolean;
    constructor(props: TaskContactListProps);
}
export declare type ProjectTaskSearchAdvancedProps = {
    criteria?: ProjectTaskSearch;
    columns?: ProjectTaskSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class ProjectTaskSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: ProjectTaskSearch;
    columns?: ProjectTaskSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: ProjectTaskSearchAdvancedProps);
}
export declare type CalendarEventAttendeeListProps = {
    attendee?: CalendarEventAttendee[];
    replaceAll?: boolean;
};
export declare class CalendarEventAttendeeList extends SoapMappingBase {
    attendee?: CalendarEventAttendee[];
    replaceAll?: boolean;
    constructor(props: CalendarEventAttendeeListProps);
}
export declare type TaskSearchProps = {
    basic?: PlatformCommon.TaskSearchBasic;
    assignedJoin?: PlatformCommon.EmployeeSearchBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchBasic;
    companyCustomerJoin?: PlatformCommon.CustomerSearchBasic;
    contactJoin?: PlatformCommon.ContactSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    jobJoin?: PlatformCommon.JobSearchBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchBasic;
    timeJoin?: PlatformCommon.TimeBillSearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class TaskSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.TaskSearchBasic;
    assignedJoin?: PlatformCommon.EmployeeSearchBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchBasic;
    companyCustomerJoin?: PlatformCommon.CustomerSearchBasic;
    contactJoin?: PlatformCommon.ContactSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    jobJoin?: PlatformCommon.JobSearchBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchBasic;
    timeJoin?: PlatformCommon.TimeBillSearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: TaskSearchProps);
}
export declare type PhoneCallTimeItemListProps = {
    timeItem?: PlatformCommon.TimeItem[];
    replaceAll?: boolean;
};
export declare class PhoneCallTimeItemList extends SoapMappingBase {
    timeItem?: PlatformCommon.TimeItem[];
    replaceAll?: boolean;
    constructor(props: PhoneCallTimeItemListProps);
}
export declare type CalendarEventSearchAdvancedProps = {
    criteria?: CalendarEventSearch;
    columns?: CalendarEventSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class CalendarEventSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: CalendarEventSearch;
    columns?: CalendarEventSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: CalendarEventSearchAdvancedProps);
}
export declare type ResourceAllocationSearchRowProps = {
    basic?: PlatformCommon.ResourceAllocationSearchRowBasic;
    customerJoin?: PlatformCommon.CustomerSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    jobJoin?: PlatformCommon.JobSearchRowBasic;
    projectTaskJoin?: PlatformCommon.ProjectTaskSearchRowBasic;
    requestedByJoin?: PlatformCommon.EntitySearchRowBasic;
    resourceJoin?: PlatformCommon.EntitySearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    vendorJoin?: PlatformCommon.VendorSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class ResourceAllocationSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.ResourceAllocationSearchRowBasic;
    customerJoin?: PlatformCommon.CustomerSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    jobJoin?: PlatformCommon.JobSearchRowBasic;
    projectTaskJoin?: PlatformCommon.ProjectTaskSearchRowBasic;
    requestedByJoin?: PlatformCommon.EntitySearchRowBasic;
    resourceJoin?: PlatformCommon.EntitySearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    vendorJoin?: PlatformCommon.VendorSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: ResourceAllocationSearchRowProps);
}
export declare type ProjectTaskPredecessorProps = {
    task?: PlatformCore.RecordRef;
    type?: ActivitiesSchedulingTypes.ProjectTaskPredecessorPredecessorType;
    lagDays?: number;
    startDate?: string;
    endDate?: string;
};
export declare class ProjectTaskPredecessor extends SoapMappingBase {
    task?: PlatformCore.RecordRef;
    type?: ActivitiesSchedulingTypes.ProjectTaskPredecessorPredecessorType;
    lagDays?: number;
    startDate?: string;
    endDate?: string;
    constructor(props: ProjectTaskPredecessorProps);
}
export declare type ResourceAllocationSearchProps = {
    basic?: PlatformCommon.ResourceAllocationSearchBasic;
    customerJoin?: PlatformCommon.CustomerSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    jobJoin?: PlatformCommon.JobSearchBasic;
    projectTaskJoin?: PlatformCommon.ProjectTaskSearchBasic;
    requestedByJoin?: PlatformCommon.EntitySearchBasic;
    resourceJoin?: PlatformCommon.EntitySearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    vendorJoin?: PlatformCommon.VendorSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class ResourceAllocationSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.ResourceAllocationSearchBasic;
    customerJoin?: PlatformCommon.CustomerSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    jobJoin?: PlatformCommon.JobSearchBasic;
    projectTaskJoin?: PlatformCommon.ProjectTaskSearchBasic;
    requestedByJoin?: PlatformCommon.EntitySearchBasic;
    resourceJoin?: PlatformCommon.EntitySearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    vendorJoin?: PlatformCommon.VendorSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: ResourceAllocationSearchProps);
}
export declare type CalendarEventResourceListProps = {
    resource?: CalendarEventResource[];
    replaceAll?: boolean;
};
export declare class CalendarEventResourceList extends SoapMappingBase {
    resource?: CalendarEventResource[];
    replaceAll?: boolean;
    constructor(props: CalendarEventResourceListProps);
}
export declare type ExclusionDateListProps = {
    exclusionDate: string[];
};
export declare class ExclusionDateList extends SoapMappingBase {
    exclusionDate: string[];
    constructor(props: ExclusionDateListProps);
}
export declare type PhoneCallContactListProps = {
    contact?: PhoneCallContact[];
    replaceAll?: boolean;
};
export declare class PhoneCallContactList extends SoapMappingBase {
    contact?: PhoneCallContact[];
    replaceAll?: boolean;
    constructor(props: PhoneCallContactListProps);
}
export declare type CalendarEventTimeItemListProps = {
    timeItem?: PlatformCommon.TimeItem[];
    replaceAll?: boolean;
};
export declare class CalendarEventTimeItemList extends SoapMappingBase {
    timeItem?: PlatformCommon.TimeItem[];
    replaceAll?: boolean;
    constructor(props: CalendarEventTimeItemListProps);
}
export declare type CalendarEventResourceProps = {
    resource?: PlatformCore.RecordRef;
    location?: string;
};
export declare class CalendarEventResource extends SoapMappingBase {
    resource?: PlatformCore.RecordRef;
    location?: string;
    constructor(props: CalendarEventResourceProps);
}
export declare type ResourceAllocationSearchAdvancedProps = {
    criteria?: ResourceAllocationSearch;
    columns?: ResourceAllocationSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class ResourceAllocationSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: ResourceAllocationSearch;
    columns?: ResourceAllocationSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: ResourceAllocationSearchAdvancedProps);
}
export declare type ProjectTaskPredecessorListProps = {
    projectTaskPredecessor?: ProjectTaskPredecessor[];
    replaceAll?: boolean;
};
export declare class ProjectTaskPredecessorList extends SoapMappingBase {
    projectTaskPredecessor?: ProjectTaskPredecessor[];
    replaceAll?: boolean;
    constructor(props: ProjectTaskPredecessorListProps);
}
export declare type CalendarEventSearchProps = {
    basic?: PlatformCommon.CalendarEventSearchBasic;
    attendeeJoin?: PlatformCommon.EntitySearchBasic;
    attendeeContactJoin?: PlatformCommon.ContactSearchBasic;
    attendeeCustomerJoin?: PlatformCommon.CustomerSearchBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchBasic;
    timeJoin?: PlatformCommon.TimeBillSearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class CalendarEventSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.CalendarEventSearchBasic;
    attendeeJoin?: PlatformCommon.EntitySearchBasic;
    attendeeContactJoin?: PlatformCommon.ContactSearchBasic;
    attendeeCustomerJoin?: PlatformCommon.CustomerSearchBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchBasic;
    timeJoin?: PlatformCommon.TimeBillSearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: CalendarEventSearchProps);
}
export declare type TaskTimeItemListProps = {
    timeItem?: PlatformCommon.TimeItem[];
    replaceAll?: boolean;
};
export declare class TaskTimeItemList extends SoapMappingBase {
    timeItem?: PlatformCommon.TimeItem[];
    replaceAll?: boolean;
    constructor(props: TaskTimeItemListProps);
}
export declare type CalendarEventProps = {
    company?: PlatformCore.RecordRef;
    contact?: PlatformCore.RecordRef;
    supportCase?: PlatformCore.RecordRef;
    transaction?: PlatformCore.RecordRef;
    period?: number;
    frequency?: PlatformCommonTypes.RecurrenceFrequency;
    recurrenceDowMaskList?: PlatformCommon.RecurrenceDowMaskList;
    recurrenceDow?: PlatformCommonTypes.RecurrenceDow;
    recurrenceDowim?: PlatformCommonTypes.RecurrenceDowim;
    seriesStartDate?: string;
    endByDate?: string;
    noEndDate?: boolean;
    sendEmail?: boolean;
    customForm?: PlatformCore.RecordRef;
    title?: string;
    recurrence?: string;
    location?: string;
    startDate?: string;
    allDayEvent?: boolean;
    timedEvent?: boolean;
    reminderType?: ActivitiesSchedulingTypes.CalendarEventReminderType;
    reminderMinutes?: string;
    status?: ActivitiesSchedulingTypes.CalendarEventStatus;
    accessLevel?: ActivitiesSchedulingTypes.CalendarEventAccessLevel;
    organizer?: PlatformCore.RecordRef;
    message?: string;
    createdDate?: string;
    endDate?: string;
    exclusionDateList?: ExclusionDateList;
    lastModifiedDate?: string;
    owner?: PlatformCore.RecordRef;
    attendeeList?: CalendarEventAttendeeList;
    resourceList?: CalendarEventResourceList;
    timeItemList?: CalendarEventTimeItemList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class CalendarEvent extends PlatformCore.Record {
    company?: PlatformCore.RecordRef;
    contact?: PlatformCore.RecordRef;
    supportCase?: PlatformCore.RecordRef;
    transaction?: PlatformCore.RecordRef;
    period?: number;
    frequency?: PlatformCommonTypes.RecurrenceFrequency;
    recurrenceDowMaskList?: PlatformCommon.RecurrenceDowMaskList;
    recurrenceDow?: PlatformCommonTypes.RecurrenceDow;
    recurrenceDowim?: PlatformCommonTypes.RecurrenceDowim;
    seriesStartDate?: string;
    endByDate?: string;
    noEndDate?: boolean;
    sendEmail?: boolean;
    customForm?: PlatformCore.RecordRef;
    title?: string;
    recurrence?: string;
    location?: string;
    startDate?: string;
    allDayEvent?: boolean;
    timedEvent?: boolean;
    reminderType?: ActivitiesSchedulingTypes.CalendarEventReminderType;
    reminderMinutes?: string;
    status?: ActivitiesSchedulingTypes.CalendarEventStatus;
    accessLevel?: ActivitiesSchedulingTypes.CalendarEventAccessLevel;
    organizer?: PlatformCore.RecordRef;
    message?: string;
    createdDate?: string;
    endDate?: string;
    exclusionDateList?: ExclusionDateList;
    lastModifiedDate?: string;
    owner?: PlatformCore.RecordRef;
    attendeeList?: CalendarEventAttendeeList;
    resourceList?: CalendarEventResourceList;
    timeItemList?: CalendarEventTimeItemList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: CalendarEventProps);
}
export declare type ProjectTaskSearchRowProps = {
    basic?: PlatformCommon.ProjectTaskSearchRowBasic;
    jobJoin?: PlatformCommon.JobSearchRowBasic;
    predecessorJoin?: PlatformCommon.ProjectTaskSearchRowBasic;
    projectTaskAssignmentJoin?: PlatformCommon.ProjectTaskAssignmentSearchRowBasic;
    resourceAllocationJoin?: PlatformCommon.ResourceAllocationSearchRowBasic;
    successorJoin?: PlatformCommon.ProjectTaskSearchRowBasic;
    timeJoin?: PlatformCommon.TimeBillSearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class ProjectTaskSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.ProjectTaskSearchRowBasic;
    jobJoin?: PlatformCommon.JobSearchRowBasic;
    predecessorJoin?: PlatformCommon.ProjectTaskSearchRowBasic;
    projectTaskAssignmentJoin?: PlatformCommon.ProjectTaskAssignmentSearchRowBasic;
    resourceAllocationJoin?: PlatformCommon.ResourceAllocationSearchRowBasic;
    successorJoin?: PlatformCommon.ProjectTaskSearchRowBasic;
    timeJoin?: PlatformCommon.TimeBillSearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: ProjectTaskSearchRowProps);
}
export declare type PhoneCallProps = {
    message?: string;
    company?: PlatformCore.RecordRef;
    contact?: PlatformCore.RecordRef;
    supportCase?: PlatformCore.RecordRef;
    transaction?: PlatformCore.RecordRef;
    milestone?: PlatformCore.RecordRef;
    customForm?: PlatformCore.RecordRef;
    title?: string;
    owner?: PlatformCore.RecordRef;
    assigned?: PlatformCore.RecordRef;
    sendEmail?: boolean;
    startDate?: string;
    endDate?: string;
    timedEvent?: boolean;
    completedDate?: string;
    phone?: string;
    status?: ActivitiesSchedulingTypes.PhoneCallStatus;
    priority?: ActivitiesSchedulingTypes.PhoneCallPriority;
    accessLevel?: boolean;
    reminderType?: ActivitiesSchedulingTypes.PhoneCallReminderType;
    reminderMinutes?: string;
    createdDate?: string;
    lastModifiedDate?: string;
    contactList?: PhoneCallContactList;
    timeItemList?: PhoneCallTimeItemList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class PhoneCall extends PlatformCore.Record {
    message?: string;
    company?: PlatformCore.RecordRef;
    contact?: PlatformCore.RecordRef;
    supportCase?: PlatformCore.RecordRef;
    transaction?: PlatformCore.RecordRef;
    milestone?: PlatformCore.RecordRef;
    customForm?: PlatformCore.RecordRef;
    title?: string;
    owner?: PlatformCore.RecordRef;
    assigned?: PlatformCore.RecordRef;
    sendEmail?: boolean;
    startDate?: string;
    endDate?: string;
    timedEvent?: boolean;
    completedDate?: string;
    phone?: string;
    status?: ActivitiesSchedulingTypes.PhoneCallStatus;
    priority?: ActivitiesSchedulingTypes.PhoneCallPriority;
    accessLevel?: boolean;
    reminderType?: ActivitiesSchedulingTypes.PhoneCallReminderType;
    reminderMinutes?: string;
    createdDate?: string;
    lastModifiedDate?: string;
    contactList?: PhoneCallContactList;
    timeItemList?: PhoneCallTimeItemList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: PhoneCallProps);
}
export declare type ProjectTaskProps = {
    customForm?: PlatformCore.RecordRef;
    eventId?: PlatformCore.RecordRef;
    percentTimeComplete?: number;
    title?: string;
    company?: PlatformCore.RecordRef;
    contact?: PlatformCore.RecordRef;
    order?: PlatformCore.RecordRef;
    owner?: PlatformCore.RecordRef;
    parent?: PlatformCore.RecordRef;
    priority?: PlatformCore.RecordRef;
    estimatedWork?: number;
    estimatedWorkBaseline?: number;
    constraintType?: ActivitiesSchedulingTypes.ProjectTaskConstraintType;
    startDate?: string;
    startDateBaseline?: string;
    endDate?: string;
    finishByDate?: string;
    endDateBaseline?: string;
    actualWork?: number;
    remainingWork?: number;
    message?: string;
    isMilestone?: boolean;
    isOnCriticalPath?: string;
    slackMinutes?: number;
    lateEnd?: string;
    lateStart?: string;
    status?: ActivitiesSchedulingTypes.ProjectTaskStatus;
    nonBillableTask?: boolean;
    assigneeList?: ProjectTaskAssigneeList;
    predecessorList?: ProjectTaskPredecessorList;
    timeItemList?: ProjectTaskTimeItemList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class ProjectTask extends PlatformCore.Record {
    customForm?: PlatformCore.RecordRef;
    eventId?: PlatformCore.RecordRef;
    percentTimeComplete?: number;
    title?: string;
    company?: PlatformCore.RecordRef;
    contact?: PlatformCore.RecordRef;
    order?: PlatformCore.RecordRef;
    owner?: PlatformCore.RecordRef;
    parent?: PlatformCore.RecordRef;
    priority?: PlatformCore.RecordRef;
    estimatedWork?: number;
    estimatedWorkBaseline?: number;
    constraintType?: ActivitiesSchedulingTypes.ProjectTaskConstraintType;
    startDate?: string;
    startDateBaseline?: string;
    endDate?: string;
    finishByDate?: string;
    endDateBaseline?: string;
    actualWork?: number;
    remainingWork?: number;
    message?: string;
    isMilestone?: boolean;
    isOnCriticalPath?: string;
    slackMinutes?: number;
    lateEnd?: string;
    lateStart?: string;
    status?: ActivitiesSchedulingTypes.ProjectTaskStatus;
    nonBillableTask?: boolean;
    assigneeList?: ProjectTaskAssigneeList;
    predecessorList?: ProjectTaskPredecessorList;
    timeItemList?: ProjectTaskTimeItemList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: ProjectTaskProps);
}
export declare type TaskSearchAdvancedProps = {
    criteria?: TaskSearch;
    columns?: TaskSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class TaskSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: TaskSearch;
    columns?: TaskSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: TaskSearchAdvancedProps);
}
export declare type PhoneCallSearchAdvancedProps = {
    criteria?: PhoneCallSearch;
    columns?: PhoneCallSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class PhoneCallSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: PhoneCallSearch;
    columns?: PhoneCallSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: PhoneCallSearchAdvancedProps);
}
export declare type ProjectTaskAssigneeProps = {
    resource?: PlatformCore.RecordRef;
    units?: number;
    serviceItem?: PlatformCore.RecordRef;
    estimatedWork?: number;
    unitCost?: number;
    unitPrice?: number;
    cost?: number;
    price?: number;
};
export declare class ProjectTaskAssignee extends SoapMappingBase {
    resource?: PlatformCore.RecordRef;
    units?: number;
    serviceItem?: PlatformCore.RecordRef;
    estimatedWork?: number;
    unitCost?: number;
    unitPrice?: number;
    cost?: number;
    price?: number;
    constructor(props: ProjectTaskAssigneeProps);
}
export declare type CalendarEventSearchRowProps = {
    basic?: PlatformCommon.CalendarEventSearchRowBasic;
    attendeeJoin?: PlatformCommon.EntitySearchRowBasic;
    attendeeContactJoin?: PlatformCommon.ContactSearchRowBasic;
    attendeeCustomerJoin?: PlatformCommon.CustomerSearchRowBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchRowBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchRowBasic;
    timeJoin?: PlatformCommon.TimeBillSearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class CalendarEventSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.CalendarEventSearchRowBasic;
    attendeeJoin?: PlatformCommon.EntitySearchRowBasic;
    attendeeContactJoin?: PlatformCommon.ContactSearchRowBasic;
    attendeeCustomerJoin?: PlatformCommon.CustomerSearchRowBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchRowBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchRowBasic;
    timeJoin?: PlatformCommon.TimeBillSearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: CalendarEventSearchRowProps);
}
export declare type PhoneCallContactProps = {
    company?: PlatformCore.RecordRef;
    contact?: PlatformCore.RecordRef;
    phone?: string;
    email?: string;
};
export declare class PhoneCallContact extends SoapMappingBase {
    company?: PlatformCore.RecordRef;
    contact?: PlatformCore.RecordRef;
    phone?: string;
    email?: string;
    constructor(props: PhoneCallContactProps);
}
export declare type CalendarEventAttendeeProps = {
    sendEmail?: boolean;
    attendee?: PlatformCore.RecordRef;
    response?: PlatformCoreTypes.CalendarEventAttendeeResponse;
    attendance?: ActivitiesSchedulingTypes.CalendarEventAttendeeAttendance;
};
export declare class CalendarEventAttendee extends SoapMappingBase {
    sendEmail?: boolean;
    attendee?: PlatformCore.RecordRef;
    response?: PlatformCoreTypes.CalendarEventAttendeeResponse;
    attendance?: ActivitiesSchedulingTypes.CalendarEventAttendeeAttendance;
    constructor(props: CalendarEventAttendeeProps);
}
export declare type TaskSearchRowProps = {
    basic?: PlatformCommon.TaskSearchRowBasic;
    assignedJoin?: PlatformCommon.EmployeeSearchRowBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
    companyCustomerJoin?: PlatformCommon.CustomerSearchRowBasic;
    contactJoin?: PlatformCommon.ContactSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    jobJoin?: PlatformCommon.JobSearchRowBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchRowBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchRowBasic;
    timeJoin?: PlatformCommon.TimeBillSearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class TaskSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.TaskSearchRowBasic;
    assignedJoin?: PlatformCommon.EmployeeSearchRowBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
    companyCustomerJoin?: PlatformCommon.CustomerSearchRowBasic;
    contactJoin?: PlatformCommon.ContactSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    jobJoin?: PlatformCommon.JobSearchRowBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchRowBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchRowBasic;
    timeJoin?: PlatformCommon.TimeBillSearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: TaskSearchRowProps);
}
export declare type ProjectTaskAssigneeListProps = {
    projectTaskAssignee?: ProjectTaskAssignee[];
    replaceAll?: boolean;
};
export declare class ProjectTaskAssigneeList extends SoapMappingBase {
    projectTaskAssignee?: ProjectTaskAssignee[];
    replaceAll?: boolean;
    constructor(props: ProjectTaskAssigneeListProps);
}
export declare type PhoneCallSearchRowProps = {
    basic?: PlatformCommon.PhoneCallSearchRowBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
    companyCustomerJoin?: PlatformCommon.CustomerSearchRowBasic;
    contactJoin?: PlatformCommon.ContactSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchRowBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchRowBasic;
    participantJoin?: PlatformCommon.EntitySearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class PhoneCallSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.PhoneCallSearchRowBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
    companyCustomerJoin?: PlatformCommon.CustomerSearchRowBasic;
    contactJoin?: PlatformCommon.ContactSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchRowBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchRowBasic;
    participantJoin?: PlatformCommon.EntitySearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: PhoneCallSearchRowProps);
}
export declare type TaskProps = {
    company?: PlatformCore.RecordRef;
    contact?: PlatformCore.RecordRef;
    supportCase?: PlatformCore.RecordRef;
    transaction?: PlatformCore.RecordRef;
    milestone?: PlatformCore.RecordRef;
    customForm?: PlatformCore.RecordRef;
    title?: string;
    assigned?: PlatformCore.RecordRef;
    sendEmail?: boolean;
    timedEvent?: boolean;
    estimatedTime?: PlatformCore.Duration;
    estimatedTimeOverride?: PlatformCore.Duration;
    actualTime?: PlatformCore.Duration;
    timeRemaining?: PlatformCore.Duration;
    percentTimeComplete?: number;
    percentComplete?: number;
    parent?: PlatformCore.RecordRef;
    startDate?: string;
    endDate?: string;
    dueDate?: string;
    completedDate?: string;
    priority?: ActivitiesSchedulingTypes.TaskPriority;
    status?: ActivitiesSchedulingTypes.TaskStatus;
    message?: string;
    accessLevel?: boolean;
    reminderType?: ActivitiesSchedulingTypes.TaskReminderType;
    reminderMinutes?: string;
    createdDate?: string;
    lastModifiedDate?: string;
    owner?: PlatformCore.RecordRef;
    contactList?: TaskContactList;
    timeItemList?: TaskTimeItemList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class Task extends PlatformCore.Record {
    company?: PlatformCore.RecordRef;
    contact?: PlatformCore.RecordRef;
    supportCase?: PlatformCore.RecordRef;
    transaction?: PlatformCore.RecordRef;
    milestone?: PlatformCore.RecordRef;
    customForm?: PlatformCore.RecordRef;
    title?: string;
    assigned?: PlatformCore.RecordRef;
    sendEmail?: boolean;
    timedEvent?: boolean;
    estimatedTime?: PlatformCore.Duration;
    estimatedTimeOverride?: PlatformCore.Duration;
    actualTime?: PlatformCore.Duration;
    timeRemaining?: PlatformCore.Duration;
    percentTimeComplete?: number;
    percentComplete?: number;
    parent?: PlatformCore.RecordRef;
    startDate?: string;
    endDate?: string;
    dueDate?: string;
    completedDate?: string;
    priority?: ActivitiesSchedulingTypes.TaskPriority;
    status?: ActivitiesSchedulingTypes.TaskStatus;
    message?: string;
    accessLevel?: boolean;
    reminderType?: ActivitiesSchedulingTypes.TaskReminderType;
    reminderMinutes?: string;
    createdDate?: string;
    lastModifiedDate?: string;
    owner?: PlatformCore.RecordRef;
    contactList?: TaskContactList;
    timeItemList?: TaskTimeItemList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: TaskProps);
}
export declare type TaskContactProps = {
    company?: PlatformCore.RecordRef;
    contact?: PlatformCore.RecordRef;
};
export declare class TaskContact extends SoapMappingBase {
    company?: PlatformCore.RecordRef;
    contact?: PlatformCore.RecordRef;
    constructor(props: TaskContactProps);
}
export declare type PhoneCallSearchProps = {
    basic?: PlatformCommon.PhoneCallSearchBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchBasic;
    companyCustomerJoin?: PlatformCommon.CustomerSearchBasic;
    contactJoin?: PlatformCommon.ContactSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchBasic;
    participantJoin?: PlatformCommon.EntitySearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class PhoneCallSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.PhoneCallSearchBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchBasic;
    companyCustomerJoin?: PlatformCommon.CustomerSearchBasic;
    contactJoin?: PlatformCommon.ContactSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    opportunityJoin?: PlatformCommon.OpportunitySearchBasic;
    originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchBasic;
    participantJoin?: PlatformCommon.EntitySearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: PhoneCallSearchProps);
}
export declare type ResourceAllocationProps = {
    requestedby?: PlatformCore.RecordRef;
    approvalStatus?: ActivitiesSchedulingTypes.ResourceAllocationApprovalStatus;
    nextApprover?: PlatformCore.RecordRef;
    allocationResource?: PlatformCore.RecordRef;
    project?: PlatformCore.RecordRef;
    notes?: string;
    startDate?: string;
    endDate?: string;
    allocationAmount?: number;
    allocationUnit?: ActivitiesSchedulingTypes.ResourceAllocationAllocationUnit;
    numberHours?: number;
    percentOfTime?: number;
    allocationType?: PlatformCore.RecordRef;
    customForm?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class ResourceAllocation extends PlatformCore.Record {
    requestedby?: PlatformCore.RecordRef;
    approvalStatus?: ActivitiesSchedulingTypes.ResourceAllocationApprovalStatus;
    nextApprover?: PlatformCore.RecordRef;
    allocationResource?: PlatformCore.RecordRef;
    project?: PlatformCore.RecordRef;
    notes?: string;
    startDate?: string;
    endDate?: string;
    allocationAmount?: number;
    allocationUnit?: ActivitiesSchedulingTypes.ResourceAllocationAllocationUnit;
    numberHours?: number;
    percentOfTime?: number;
    allocationType?: PlatformCore.RecordRef;
    customForm?: PlatformCore.RecordRef;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: ResourceAllocationProps);
}
export declare type ProjectTaskTimeItemListProps = {
    timeItem?: PlatformCommon.TimeItem[];
    replaceAll?: boolean;
};
export declare class ProjectTaskTimeItemList extends SoapMappingBase {
    timeItem?: PlatformCommon.TimeItem[];
    replaceAll?: boolean;
    constructor(props: ProjectTaskTimeItemListProps);
}
export declare type ProjectTaskSearchProps = {
    basic?: PlatformCommon.ProjectTaskSearchBasic;
    jobJoin?: PlatformCommon.JobSearchBasic;
    predecessorJoin?: PlatformCommon.ProjectTaskSearchBasic;
    projectTaskAssignmentJoin?: PlatformCommon.ProjectTaskAssignmentSearchBasic;
    resourceAllocationJoin?: PlatformCommon.ResourceAllocationSearchBasic;
    successorJoin?: PlatformCommon.ProjectTaskSearchBasic;
    timeJoin?: PlatformCommon.TimeBillSearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class ProjectTaskSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.ProjectTaskSearchBasic;
    jobJoin?: PlatformCommon.JobSearchBasic;
    predecessorJoin?: PlatformCommon.ProjectTaskSearchBasic;
    projectTaskAssignmentJoin?: PlatformCommon.ProjectTaskAssignmentSearchBasic;
    resourceAllocationJoin?: PlatformCommon.ResourceAllocationSearchBasic;
    successorJoin?: PlatformCommon.ProjectTaskSearchBasic;
    timeJoin?: PlatformCommon.TimeBillSearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: ProjectTaskSearchProps);
}
