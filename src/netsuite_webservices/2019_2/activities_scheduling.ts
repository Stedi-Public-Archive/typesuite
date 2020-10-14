import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as ActivitiesSchedulingTypes from "./activities_scheduling_types";
import * as PlatformCommonTypes from "./platform_common_types";
import * as PlatformCoreTypes from "./platform_core_types";
import { SoapMappingBase, propsWithMappingsName } from "../../soap-types";
const MAPPINGS_NAME = "com_netsuite_webservices_activities_scheduling_2019_2";
export type TaskContactListProps = {
  contact?: TaskContact[];
  replaceAll?: boolean;
};

export class TaskContactList extends SoapMappingBase {
  contact?: TaskContact[];
  replaceAll?: boolean;
  constructor(props: TaskContactListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.contact = props.contact;
    this.replaceAll = props.replaceAll;
  }
}

export type ProjectTaskSearchAdvancedProps = {
  criteria?: ProjectTaskSearch;
  columns?: ProjectTaskSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class ProjectTaskSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ProjectTaskSearch;
  columns?: ProjectTaskSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ProjectTaskSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type CalendarEventAttendeeListProps = {
  attendee?: CalendarEventAttendee[];
  replaceAll?: boolean;
};

export class CalendarEventAttendeeList extends SoapMappingBase {
  attendee?: CalendarEventAttendee[];
  replaceAll?: boolean;
  constructor(props: CalendarEventAttendeeListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.attendee = props.attendee;
    this.replaceAll = props.replaceAll;
  }
}

export type TaskSearchProps = {
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

export class TaskSearch extends PlatformCore.SearchRecord {
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
  constructor(props: TaskSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.assignedJoin = props.assignedJoin;
    this.caseJoin = props.caseJoin;
    this.companyCustomerJoin = props.companyCustomerJoin;
    this.contactJoin = props.contactJoin;
    this.employeeJoin = props.employeeJoin;
    this.fileJoin = props.fileJoin;
    this.jobJoin = props.jobJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.originatingLeadJoin = props.originatingLeadJoin;
    this.timeJoin = props.timeJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type PhoneCallTimeItemListProps = {
  timeItem?: PlatformCommon.TimeItem[];
  replaceAll?: boolean;
};

export class PhoneCallTimeItemList extends SoapMappingBase {
  timeItem?: PlatformCommon.TimeItem[];
  replaceAll?: boolean;
  constructor(props: PhoneCallTimeItemListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.timeItem = props.timeItem;
    this.replaceAll = props.replaceAll;
  }
}

export type CalendarEventSearchAdvancedProps = {
  criteria?: CalendarEventSearch;
  columns?: CalendarEventSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class CalendarEventSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CalendarEventSearch;
  columns?: CalendarEventSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CalendarEventSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type ResourceAllocationSearchRowProps = {
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

export class ResourceAllocationSearchRow extends PlatformCore.SearchRow {
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
  constructor(props: ResourceAllocationSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.customerJoin = props.customerJoin;
    this.employeeJoin = props.employeeJoin;
    this.jobJoin = props.jobJoin;
    this.projectTaskJoin = props.projectTaskJoin;
    this.requestedByJoin = props.requestedByJoin;
    this.resourceJoin = props.resourceJoin;
    this.userJoin = props.userJoin;
    this.vendorJoin = props.vendorJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type ProjectTaskPredecessorProps = {
  task?: PlatformCore.RecordRef;
  type?: ActivitiesSchedulingTypes.ProjectTaskPredecessorPredecessorType;
  lagDays?: number;
  startDate?: string;
  endDate?: string;
};

export class ProjectTaskPredecessor extends SoapMappingBase {
  task?: PlatformCore.RecordRef;
  type?: ActivitiesSchedulingTypes.ProjectTaskPredecessorPredecessorType;
  lagDays?: number;
  startDate?: string;
  endDate?: string;
  constructor(props: ProjectTaskPredecessorProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.task = props.task;
    this.type = props.type;
    this.lagDays = props.lagDays;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
  }
}

export type ResourceAllocationSearchProps = {
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

export class ResourceAllocationSearch extends PlatformCore.SearchRecord {
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
  constructor(props: ResourceAllocationSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.customerJoin = props.customerJoin;
    this.employeeJoin = props.employeeJoin;
    this.jobJoin = props.jobJoin;
    this.projectTaskJoin = props.projectTaskJoin;
    this.requestedByJoin = props.requestedByJoin;
    this.resourceJoin = props.resourceJoin;
    this.userJoin = props.userJoin;
    this.vendorJoin = props.vendorJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type CalendarEventResourceListProps = {
  resource?: CalendarEventResource[];
  replaceAll?: boolean;
};

export class CalendarEventResourceList extends SoapMappingBase {
  resource?: CalendarEventResource[];
  replaceAll?: boolean;
  constructor(props: CalendarEventResourceListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.resource = props.resource;
    this.replaceAll = props.replaceAll;
  }
}

export type ExclusionDateListProps = {
  exclusionDate: string[];
};

export class ExclusionDateList extends SoapMappingBase {
  exclusionDate: string[];
  constructor(props: ExclusionDateListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.exclusionDate = props.exclusionDate;
  }
}

export type PhoneCallContactListProps = {
  contact?: PhoneCallContact[];
  replaceAll?: boolean;
};

export class PhoneCallContactList extends SoapMappingBase {
  contact?: PhoneCallContact[];
  replaceAll?: boolean;
  constructor(props: PhoneCallContactListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.contact = props.contact;
    this.replaceAll = props.replaceAll;
  }
}

export type CalendarEventTimeItemListProps = {
  timeItem?: PlatformCommon.TimeItem[];
  replaceAll?: boolean;
};

export class CalendarEventTimeItemList extends SoapMappingBase {
  timeItem?: PlatformCommon.TimeItem[];
  replaceAll?: boolean;
  constructor(props: CalendarEventTimeItemListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.timeItem = props.timeItem;
    this.replaceAll = props.replaceAll;
  }
}

export type CalendarEventResourceProps = {
  resource?: PlatformCore.RecordRef;
  location?: string;
};

export class CalendarEventResource extends SoapMappingBase {
  resource?: PlatformCore.RecordRef;
  location?: string;
  constructor(props: CalendarEventResourceProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.resource = props.resource;
    this.location = props.location;
  }
}

export type ResourceAllocationSearchAdvancedProps = {
  criteria?: ResourceAllocationSearch;
  columns?: ResourceAllocationSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class ResourceAllocationSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ResourceAllocationSearch;
  columns?: ResourceAllocationSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ResourceAllocationSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type ProjectTaskPredecessorListProps = {
  projectTaskPredecessor?: ProjectTaskPredecessor[];
  replaceAll?: boolean;
};

export class ProjectTaskPredecessorList extends SoapMappingBase {
  projectTaskPredecessor?: ProjectTaskPredecessor[];
  replaceAll?: boolean;
  constructor(props: ProjectTaskPredecessorListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.projectTaskPredecessor = props.projectTaskPredecessor;
    this.replaceAll = props.replaceAll;
  }
}

export type CalendarEventSearchProps = {
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

export class CalendarEventSearch extends PlatformCore.SearchRecord {
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
  constructor(props: CalendarEventSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.attendeeJoin = props.attendeeJoin;
    this.attendeeContactJoin = props.attendeeContactJoin;
    this.attendeeCustomerJoin = props.attendeeCustomerJoin;
    this.caseJoin = props.caseJoin;
    this.fileJoin = props.fileJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.originatingLeadJoin = props.originatingLeadJoin;
    this.timeJoin = props.timeJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type TaskTimeItemListProps = {
  timeItem?: PlatformCommon.TimeItem[];
  replaceAll?: boolean;
};

export class TaskTimeItemList extends SoapMappingBase {
  timeItem?: PlatformCommon.TimeItem[];
  replaceAll?: boolean;
  constructor(props: TaskTimeItemListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.timeItem = props.timeItem;
    this.replaceAll = props.replaceAll;
  }
}

export type CalendarEventProps = {
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

export class CalendarEvent extends PlatformCore.Record {
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
  constructor(props: CalendarEventProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.company = props.company;
    this.contact = props.contact;
    this.supportCase = props.supportCase;
    this.transaction = props.transaction;
    this.period = props.period;
    this.frequency = props.frequency;
    this.recurrenceDowMaskList = props.recurrenceDowMaskList;
    this.recurrenceDow = props.recurrenceDow;
    this.recurrenceDowim = props.recurrenceDowim;
    this.seriesStartDate = props.seriesStartDate;
    this.endByDate = props.endByDate;
    this.noEndDate = props.noEndDate;
    this.sendEmail = props.sendEmail;
    this.customForm = props.customForm;
    this.title = props.title;
    this.recurrence = props.recurrence;
    this.location = props.location;
    this.startDate = props.startDate;
    this.allDayEvent = props.allDayEvent;
    this.timedEvent = props.timedEvent;
    this.reminderType = props.reminderType;
    this.reminderMinutes = props.reminderMinutes;
    this.status = props.status;
    this.accessLevel = props.accessLevel;
    this.organizer = props.organizer;
    this.message = props.message;
    this.createdDate = props.createdDate;
    this.endDate = props.endDate;
    this.exclusionDateList = props.exclusionDateList;
    this.lastModifiedDate = props.lastModifiedDate;
    this.owner = props.owner;
    this.attendeeList = props.attendeeList;
    this.resourceList = props.resourceList;
    this.timeItemList = props.timeItemList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type ProjectTaskSearchRowProps = {
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

export class ProjectTaskSearchRow extends PlatformCore.SearchRow {
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
  constructor(props: ProjectTaskSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.jobJoin = props.jobJoin;
    this.predecessorJoin = props.predecessorJoin;
    this.projectTaskAssignmentJoin = props.projectTaskAssignmentJoin;
    this.resourceAllocationJoin = props.resourceAllocationJoin;
    this.successorJoin = props.successorJoin;
    this.timeJoin = props.timeJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type PhoneCallProps = {
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

export class PhoneCall extends PlatformCore.Record {
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
  constructor(props: PhoneCallProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.message = props.message;
    this.company = props.company;
    this.contact = props.contact;
    this.supportCase = props.supportCase;
    this.transaction = props.transaction;
    this.milestone = props.milestone;
    this.customForm = props.customForm;
    this.title = props.title;
    this.owner = props.owner;
    this.assigned = props.assigned;
    this.sendEmail = props.sendEmail;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.timedEvent = props.timedEvent;
    this.completedDate = props.completedDate;
    this.phone = props.phone;
    this.status = props.status;
    this.priority = props.priority;
    this.accessLevel = props.accessLevel;
    this.reminderType = props.reminderType;
    this.reminderMinutes = props.reminderMinutes;
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.contactList = props.contactList;
    this.timeItemList = props.timeItemList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type ProjectTaskProps = {
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

export class ProjectTask extends PlatformCore.Record {
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
  constructor(props: ProjectTaskProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.customForm = props.customForm;
    this.eventId = props.eventId;
    this.percentTimeComplete = props.percentTimeComplete;
    this.title = props.title;
    this.company = props.company;
    this.contact = props.contact;
    this.order = props.order;
    this.owner = props.owner;
    this.parent = props.parent;
    this.priority = props.priority;
    this.estimatedWork = props.estimatedWork;
    this.estimatedWorkBaseline = props.estimatedWorkBaseline;
    this.constraintType = props.constraintType;
    this.startDate = props.startDate;
    this.startDateBaseline = props.startDateBaseline;
    this.endDate = props.endDate;
    this.finishByDate = props.finishByDate;
    this.endDateBaseline = props.endDateBaseline;
    this.actualWork = props.actualWork;
    this.remainingWork = props.remainingWork;
    this.message = props.message;
    this.isMilestone = props.isMilestone;
    this.isOnCriticalPath = props.isOnCriticalPath;
    this.slackMinutes = props.slackMinutes;
    this.lateEnd = props.lateEnd;
    this.lateStart = props.lateStart;
    this.status = props.status;
    this.nonBillableTask = props.nonBillableTask;
    this.assigneeList = props.assigneeList;
    this.predecessorList = props.predecessorList;
    this.timeItemList = props.timeItemList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type TaskSearchAdvancedProps = {
  criteria?: TaskSearch;
  columns?: TaskSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class TaskSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: TaskSearch;
  columns?: TaskSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: TaskSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type PhoneCallSearchAdvancedProps = {
  criteria?: PhoneCallSearch;
  columns?: PhoneCallSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class PhoneCallSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: PhoneCallSearch;
  columns?: PhoneCallSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: PhoneCallSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type ProjectTaskAssigneeProps = {
  resource?: PlatformCore.RecordRef;
  units?: number;
  serviceItem?: PlatformCore.RecordRef;
  estimatedWork?: number;
  unitCost?: number;
  unitPrice?: number;
  cost?: number;
  price?: number;
};

export class ProjectTaskAssignee extends SoapMappingBase {
  resource?: PlatformCore.RecordRef;
  units?: number;
  serviceItem?: PlatformCore.RecordRef;
  estimatedWork?: number;
  unitCost?: number;
  unitPrice?: number;
  cost?: number;
  price?: number;
  constructor(props: ProjectTaskAssigneeProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.resource = props.resource;
    this.units = props.units;
    this.serviceItem = props.serviceItem;
    this.estimatedWork = props.estimatedWork;
    this.unitCost = props.unitCost;
    this.unitPrice = props.unitPrice;
    this.cost = props.cost;
    this.price = props.price;
  }
}

export type CalendarEventSearchRowProps = {
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

export class CalendarEventSearchRow extends PlatformCore.SearchRow {
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
  constructor(props: CalendarEventSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.attendeeJoin = props.attendeeJoin;
    this.attendeeContactJoin = props.attendeeContactJoin;
    this.attendeeCustomerJoin = props.attendeeCustomerJoin;
    this.caseJoin = props.caseJoin;
    this.fileJoin = props.fileJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.originatingLeadJoin = props.originatingLeadJoin;
    this.timeJoin = props.timeJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type PhoneCallContactProps = {
  company?: PlatformCore.RecordRef;
  contact?: PlatformCore.RecordRef;
  phone?: string;
  email?: string;
};

export class PhoneCallContact extends SoapMappingBase {
  company?: PlatformCore.RecordRef;
  contact?: PlatformCore.RecordRef;
  phone?: string;
  email?: string;
  constructor(props: PhoneCallContactProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.company = props.company;
    this.contact = props.contact;
    this.phone = props.phone;
    this.email = props.email;
  }
}

export type CalendarEventAttendeeProps = {
  sendEmail?: boolean;
  attendee?: PlatformCore.RecordRef;
  response?: PlatformCoreTypes.CalendarEventAttendeeResponse;
  attendance?: ActivitiesSchedulingTypes.CalendarEventAttendeeAttendance;
};

export class CalendarEventAttendee extends SoapMappingBase {
  sendEmail?: boolean;
  attendee?: PlatformCore.RecordRef;
  response?: PlatformCoreTypes.CalendarEventAttendeeResponse;
  attendance?: ActivitiesSchedulingTypes.CalendarEventAttendeeAttendance;
  constructor(props: CalendarEventAttendeeProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.sendEmail = props.sendEmail;
    this.attendee = props.attendee;
    this.response = props.response;
    this.attendance = props.attendance;
  }
}

export type TaskSearchRowProps = {
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

export class TaskSearchRow extends PlatformCore.SearchRow {
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
  constructor(props: TaskSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.assignedJoin = props.assignedJoin;
    this.caseJoin = props.caseJoin;
    this.companyCustomerJoin = props.companyCustomerJoin;
    this.contactJoin = props.contactJoin;
    this.employeeJoin = props.employeeJoin;
    this.fileJoin = props.fileJoin;
    this.jobJoin = props.jobJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.originatingLeadJoin = props.originatingLeadJoin;
    this.timeJoin = props.timeJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type ProjectTaskAssigneeListProps = {
  projectTaskAssignee?: ProjectTaskAssignee[];
  replaceAll?: boolean;
};

export class ProjectTaskAssigneeList extends SoapMappingBase {
  projectTaskAssignee?: ProjectTaskAssignee[];
  replaceAll?: boolean;
  constructor(props: ProjectTaskAssigneeListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.projectTaskAssignee = props.projectTaskAssignee;
    this.replaceAll = props.replaceAll;
  }
}

export type PhoneCallSearchRowProps = {
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

export class PhoneCallSearchRow extends PlatformCore.SearchRow {
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
  constructor(props: PhoneCallSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.caseJoin = props.caseJoin;
    this.companyCustomerJoin = props.companyCustomerJoin;
    this.contactJoin = props.contactJoin;
    this.employeeJoin = props.employeeJoin;
    this.fileJoin = props.fileJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.originatingLeadJoin = props.originatingLeadJoin;
    this.participantJoin = props.participantJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type TaskProps = {
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

export class Task extends PlatformCore.Record {
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
  constructor(props: TaskProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.company = props.company;
    this.contact = props.contact;
    this.supportCase = props.supportCase;
    this.transaction = props.transaction;
    this.milestone = props.milestone;
    this.customForm = props.customForm;
    this.title = props.title;
    this.assigned = props.assigned;
    this.sendEmail = props.sendEmail;
    this.timedEvent = props.timedEvent;
    this.estimatedTime = props.estimatedTime;
    this.estimatedTimeOverride = props.estimatedTimeOverride;
    this.actualTime = props.actualTime;
    this.timeRemaining = props.timeRemaining;
    this.percentTimeComplete = props.percentTimeComplete;
    this.percentComplete = props.percentComplete;
    this.parent = props.parent;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.dueDate = props.dueDate;
    this.completedDate = props.completedDate;
    this.priority = props.priority;
    this.status = props.status;
    this.message = props.message;
    this.accessLevel = props.accessLevel;
    this.reminderType = props.reminderType;
    this.reminderMinutes = props.reminderMinutes;
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.owner = props.owner;
    this.contactList = props.contactList;
    this.timeItemList = props.timeItemList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type TaskContactProps = {
  company?: PlatformCore.RecordRef;
  contact?: PlatformCore.RecordRef;
};

export class TaskContact extends SoapMappingBase {
  company?: PlatformCore.RecordRef;
  contact?: PlatformCore.RecordRef;
  constructor(props: TaskContactProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.company = props.company;
    this.contact = props.contact;
  }
}

export type PhoneCallSearchProps = {
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

export class PhoneCallSearch extends PlatformCore.SearchRecord {
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
  constructor(props: PhoneCallSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.caseJoin = props.caseJoin;
    this.companyCustomerJoin = props.companyCustomerJoin;
    this.contactJoin = props.contactJoin;
    this.employeeJoin = props.employeeJoin;
    this.fileJoin = props.fileJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.originatingLeadJoin = props.originatingLeadJoin;
    this.participantJoin = props.participantJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type ResourceAllocationProps = {
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

export class ResourceAllocation extends PlatformCore.Record {
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
  constructor(props: ResourceAllocationProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.requestedby = props.requestedby;
    this.approvalStatus = props.approvalStatus;
    this.nextApprover = props.nextApprover;
    this.allocationResource = props.allocationResource;
    this.project = props.project;
    this.notes = props.notes;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.allocationAmount = props.allocationAmount;
    this.allocationUnit = props.allocationUnit;
    this.numberHours = props.numberHours;
    this.percentOfTime = props.percentOfTime;
    this.allocationType = props.allocationType;
    this.customForm = props.customForm;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type ProjectTaskTimeItemListProps = {
  timeItem?: PlatformCommon.TimeItem[];
  replaceAll?: boolean;
};

export class ProjectTaskTimeItemList extends SoapMappingBase {
  timeItem?: PlatformCommon.TimeItem[];
  replaceAll?: boolean;
  constructor(props: ProjectTaskTimeItemListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.timeItem = props.timeItem;
    this.replaceAll = props.replaceAll;
  }
}

export type ProjectTaskSearchProps = {
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

export class ProjectTaskSearch extends PlatformCore.SearchRecord {
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
  constructor(props: ProjectTaskSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.jobJoin = props.jobJoin;
    this.predecessorJoin = props.predecessorJoin;
    this.projectTaskAssignmentJoin = props.projectTaskAssignmentJoin;
    this.resourceAllocationJoin = props.resourceAllocationJoin;
    this.successorJoin = props.successorJoin;
    this.timeJoin = props.timeJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}
