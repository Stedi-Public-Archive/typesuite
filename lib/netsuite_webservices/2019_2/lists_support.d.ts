import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as ListsSupportTypes from "./lists_support_types";
import { SoapMappingBase } from "../../soap-types";
export declare type SolutionProps = {
    customForm?: PlatformCore.RecordRef;
    solutionCode?: string;
    title?: string;
    message?: string;
    status?: ListsSupportTypes.SolutionStatus;
    displayOnline?: boolean;
    assigned?: PlatformCore.RecordRef;
    isInactive?: boolean;
    longDescription?: string;
    topicsList?: SolutionTopicsList;
    createdDate?: string;
    lastModifiedDate?: string;
    solutionsList?: SolutionsList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class Solution extends PlatformCore.Record {
    customForm?: PlatformCore.RecordRef;
    solutionCode?: string;
    title?: string;
    message?: string;
    status?: ListsSupportTypes.SolutionStatus;
    displayOnline?: boolean;
    assigned?: PlatformCore.RecordRef;
    isInactive?: boolean;
    longDescription?: string;
    topicsList?: SolutionTopicsList;
    createdDate?: string;
    lastModifiedDate?: string;
    solutionsList?: SolutionsList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: SolutionProps);
}
export declare type SupportCaseStatusProps = {
    name?: string;
    insertBefore?: PlatformCore.RecordRef;
    stage?: ListsSupportTypes.SupportCaseStatusStage;
    caseOnHold?: boolean;
    autoCloseCase?: boolean;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class SupportCaseStatus extends PlatformCore.Record {
    name?: string;
    insertBefore?: PlatformCore.RecordRef;
    stage?: ListsSupportTypes.SupportCaseStatusStage;
    caseOnHold?: boolean;
    autoCloseCase?: boolean;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
    constructor(props: SupportCaseStatusProps);
}
export declare type IssueProps = {
    customForm?: PlatformCore.RecordRef;
    issueNumber?: string;
    createdDate?: string;
    issueType?: PlatformCore.RecordRef;
    product?: PlatformCore.RecordRef;
    module?: PlatformCore.RecordRef;
    item?: PlatformCore.RecordRef;
    productTeam?: PlatformCore.RecordRef;
    source?: PlatformCore.RecordRef;
    reportedBy?: PlatformCore.RecordRef;
    reproduce?: PlatformCore.RecordRef;
    versionBroken?: PlatformCore.RecordRef;
    buildBroken?: PlatformCore.RecordRef;
    versionTarget?: PlatformCore.RecordRef;
    buildTarget?: PlatformCore.RecordRef;
    versionFixed?: PlatformCore.RecordRef;
    buildFixed?: PlatformCore.RecordRef;
    severity?: PlatformCore.RecordRef;
    priority?: PlatformCore.RecordRef;
    isShowStopper?: boolean;
    assigned?: PlatformCore.RecordRef;
    reviewer?: PlatformCore.RecordRef;
    isReviewed?: boolean;
    issueStatus?: PlatformCore.RecordRef;
    lastModifiedDate?: string;
    issueTagsList?: PlatformCore.RecordRefList;
    issueAbstract?: string;
    newDetails?: string;
    isOwner?: boolean;
    trackCode?: ListsSupportTypes.IssueTrackCode;
    emailAssignee?: boolean;
    emailEmployeesList?: EmailEmployeesList;
    emailCellsList?: PlatformCore.RecordRefList;
    externalAbstract?: string;
    externalDetails?: string;
    brokenInVersionList?: IssueVersionList;
    targetVersionList?: IssueVersionList;
    fixedInVersionList?: IssueVersionList;
    relatedIssuesList?: IssueRelatedIssuesList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class Issue extends PlatformCore.Record {
    customForm?: PlatformCore.RecordRef;
    issueNumber?: string;
    createdDate?: string;
    issueType?: PlatformCore.RecordRef;
    product?: PlatformCore.RecordRef;
    module?: PlatformCore.RecordRef;
    item?: PlatformCore.RecordRef;
    productTeam?: PlatformCore.RecordRef;
    source?: PlatformCore.RecordRef;
    reportedBy?: PlatformCore.RecordRef;
    reproduce?: PlatformCore.RecordRef;
    versionBroken?: PlatformCore.RecordRef;
    buildBroken?: PlatformCore.RecordRef;
    versionTarget?: PlatformCore.RecordRef;
    buildTarget?: PlatformCore.RecordRef;
    versionFixed?: PlatformCore.RecordRef;
    buildFixed?: PlatformCore.RecordRef;
    severity?: PlatformCore.RecordRef;
    priority?: PlatformCore.RecordRef;
    isShowStopper?: boolean;
    assigned?: PlatformCore.RecordRef;
    reviewer?: PlatformCore.RecordRef;
    isReviewed?: boolean;
    issueStatus?: PlatformCore.RecordRef;
    lastModifiedDate?: string;
    issueTagsList?: PlatformCore.RecordRefList;
    issueAbstract?: string;
    newDetails?: string;
    isOwner?: boolean;
    trackCode?: ListsSupportTypes.IssueTrackCode;
    emailAssignee?: boolean;
    emailEmployeesList?: EmailEmployeesList;
    emailCellsList?: PlatformCore.RecordRefList;
    externalAbstract?: string;
    externalDetails?: string;
    brokenInVersionList?: IssueVersionList;
    targetVersionList?: IssueVersionList;
    fixedInVersionList?: IssueVersionList;
    relatedIssuesList?: IssueRelatedIssuesList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: IssueProps);
}
export declare type IssueSearchRowProps = {
    basic?: PlatformCommon.IssueSearchRowBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    productTeamJoin?: PlatformCommon.EntityGroupSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class IssueSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.IssueSearchRowBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    productTeamJoin?: PlatformCommon.EntityGroupSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: IssueSearchRowProps);
}
export declare type SupportCaseEscalateToListProps = {
    escalateTo?: SupportCaseEscalateTo[];
    replaceAll?: boolean;
};
export declare class SupportCaseEscalateToList extends SoapMappingBase {
    escalateTo?: SupportCaseEscalateTo[];
    replaceAll?: boolean;
    constructor(props: SupportCaseEscalateToListProps);
}
export declare type SupportCaseOriginProps = {
    name?: string;
    insertBefore?: PlatformCore.RecordRef;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class SupportCaseOrigin extends PlatformCore.Record {
    name?: string;
    insertBefore?: PlatformCore.RecordRef;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
    constructor(props: SupportCaseOriginProps);
}
export declare type IssueRelatedIssuesProps = {
    relationship?: ListsSupportTypes.IssueRelationship;
    issueNumber?: PlatformCore.RecordRef;
    relationshipComment?: string;
};
export declare class IssueRelatedIssues extends SoapMappingBase {
    relationship?: ListsSupportTypes.IssueRelationship;
    issueNumber?: PlatformCore.RecordRef;
    relationshipComment?: string;
    constructor(props: IssueRelatedIssuesProps);
}
export declare type IssueSearchAdvancedProps = {
    criteria?: IssueSearch;
    columns?: IssueSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class IssueSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: IssueSearch;
    columns?: IssueSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: IssueSearchAdvancedProps);
}
export declare type TopicSolutionProps = {
    solution?: PlatformCore.RecordRef;
    message?: string;
};
export declare class TopicSolution extends SoapMappingBase {
    solution?: PlatformCore.RecordRef;
    message?: string;
    constructor(props: TopicSolutionProps);
}
export declare type IssueRelatedIssuesListProps = {
    issueRelatedIssues?: IssueRelatedIssues[];
    replaceAll?: boolean;
};
export declare class IssueRelatedIssuesList extends SoapMappingBase {
    issueRelatedIssues?: IssueRelatedIssues[];
    replaceAll?: boolean;
    constructor(props: IssueRelatedIssuesListProps);
}
export declare type TopicSearchAdvancedProps = {
    criteria?: TopicSearch;
    columns?: TopicSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class TopicSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: TopicSearch;
    columns?: TopicSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: TopicSearchAdvancedProps);
}
export declare type IssueVersionListProps = {
    issueVersion?: IssueVersion[];
    replaceAll?: boolean;
};
export declare class IssueVersionList extends SoapMappingBase {
    issueVersion?: IssueVersion[];
    replaceAll?: boolean;
    constructor(props: IssueVersionListProps);
}
export declare type SupportCaseTypeProps = {
    name?: string;
    insertBefore?: PlatformCore.RecordRef;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class SupportCaseType extends PlatformCore.Record {
    name?: string;
    insertBefore?: PlatformCore.RecordRef;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
    constructor(props: SupportCaseTypeProps);
}
export declare type SupportCaseSolutionsProps = {
    solution?: PlatformCore.RecordRef;
    message?: string;
    dateApplied?: string;
};
export declare class SupportCaseSolutions extends SoapMappingBase {
    solution?: PlatformCore.RecordRef;
    message?: string;
    dateApplied?: string;
    constructor(props: SupportCaseSolutionsProps);
}
export declare type SolutionTopicsProps = {
    topic?: PlatformCore.RecordRef;
};
export declare class SolutionTopics extends SoapMappingBase {
    topic?: PlatformCore.RecordRef;
    constructor(props: SolutionTopicsProps);
}
export declare type SupportCaseEscalateToProps = {
    escalatee?: PlatformCore.RecordRef;
    email?: string;
    phone?: string;
};
export declare class SupportCaseEscalateTo extends SoapMappingBase {
    escalatee?: PlatformCore.RecordRef;
    email?: string;
    phone?: string;
    constructor(props: SupportCaseEscalateToProps);
}
export declare type SolutionTopicsListProps = {
    topics?: SolutionTopics[];
    replaceAll?: boolean;
};
export declare class SolutionTopicsList extends SoapMappingBase {
    topics?: SolutionTopics[];
    replaceAll?: boolean;
    constructor(props: SolutionTopicsListProps);
}
export declare type TopicSearchRowProps = {
    basic?: PlatformCommon.TopicSearchRowBasic;
    solutionJoin?: PlatformCommon.SolutionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};
export declare class TopicSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.TopicSearchRowBasic;
    solutionJoin?: PlatformCommon.SolutionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    constructor(props: TopicSearchRowProps);
}
export declare type SolutionsProps = {
    solution?: PlatformCore.RecordRef;
    message?: string;
};
export declare class Solutions extends SoapMappingBase {
    solution?: PlatformCore.RecordRef;
    message?: string;
    constructor(props: SolutionsProps);
}
export declare type EmailEmployeesListProps = {
    emailEmployees: PlatformCore.RecordRef[];
};
export declare class EmailEmployeesList extends SoapMappingBase {
    emailEmployees: PlatformCore.RecordRef[];
    constructor(props: EmailEmployeesListProps);
}
export declare type SupportCaseSearchRowProps = {
    basic?: PlatformCommon.SupportCaseSearchRowBasic;
    companyJoin?: PlatformCommon.EntitySearchRowBasic;
    contactJoin?: PlatformCommon.ContactSearchRowBasic;
    customerJoin?: PlatformCommon.CustomerSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    issueJoin?: PlatformCommon.IssueSearchRowBasic;
    itemJoin?: PlatformCommon.ItemSearchRowBasic;
    messagesJoin?: PlatformCommon.MessageSearchRowBasic;
    timeJoin?: PlatformCommon.TimeBillSearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class SupportCaseSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.SupportCaseSearchRowBasic;
    companyJoin?: PlatformCommon.EntitySearchRowBasic;
    contactJoin?: PlatformCommon.ContactSearchRowBasic;
    customerJoin?: PlatformCommon.CustomerSearchRowBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    issueJoin?: PlatformCommon.IssueSearchRowBasic;
    itemJoin?: PlatformCommon.ItemSearchRowBasic;
    messagesJoin?: PlatformCommon.MessageSearchRowBasic;
    timeJoin?: PlatformCommon.TimeBillSearchRowBasic;
    transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: SupportCaseSearchRowProps);
}
export declare type TopicSearchProps = {
    basic?: PlatformCommon.TopicSearchBasic;
    solutionJoin?: PlatformCommon.SolutionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
};
export declare class TopicSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.TopicSearchBasic;
    solutionJoin?: PlatformCommon.SolutionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    constructor(props: TopicSearchProps);
}
export declare type SolutionSearchRowProps = {
    basic?: PlatformCommon.SolutionSearchRowBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
    relatedSolutionJoin?: PlatformCommon.SolutionSearchRowBasic;
    topicJoin?: PlatformCommon.TopicSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class SolutionSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.SolutionSearchRowBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
    relatedSolutionJoin?: PlatformCommon.SolutionSearchRowBasic;
    topicJoin?: PlatformCommon.TopicSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: SolutionSearchRowProps);
}
export declare type SupportCaseSolutionsListProps = {
    solutions?: SupportCaseSolutions[];
    replaceAll?: boolean;
};
export declare class SupportCaseSolutionsList extends SoapMappingBase {
    solutions?: SupportCaseSolutions[];
    replaceAll?: boolean;
    constructor(props: SupportCaseSolutionsListProps);
}
export declare type SupportCasePriorityProps = {
    name?: string;
    insertBefore?: PlatformCore.RecordRef;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class SupportCasePriority extends PlatformCore.Record {
    name?: string;
    insertBefore?: PlatformCore.RecordRef;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
    constructor(props: SupportCasePriorityProps);
}
export declare type SolutionsListProps = {
    solutions?: Solutions[];
    replaceAll?: boolean;
};
export declare class SolutionsList extends SoapMappingBase {
    solutions?: Solutions[];
    replaceAll?: boolean;
    constructor(props: SolutionsListProps);
}
export declare type SupportCaseSearchAdvancedProps = {
    criteria?: SupportCaseSearch;
    columns?: SupportCaseSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class SupportCaseSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: SupportCaseSearch;
    columns?: SupportCaseSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: SupportCaseSearchAdvancedProps);
}
export declare type SupportCaseTimeItemListProps = {
    timeItem?: PlatformCommon.TimeItem[];
    replaceAll?: boolean;
};
export declare class SupportCaseTimeItemList extends SoapMappingBase {
    timeItem?: PlatformCommon.TimeItem[];
    replaceAll?: boolean;
    constructor(props: SupportCaseTimeItemListProps);
}
export declare type IssueVersionProps = {
    primary?: boolean;
    version?: PlatformCore.RecordRef;
    build?: PlatformCore.RecordRef;
};
export declare class IssueVersion extends SoapMappingBase {
    primary?: boolean;
    version?: PlatformCore.RecordRef;
    build?: PlatformCore.RecordRef;
    constructor(props: IssueVersionProps);
}
export declare type SolutionSearchProps = {
    basic?: PlatformCommon.SolutionSearchBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchBasic;
    relatedSolutionJoin?: PlatformCommon.SolutionSearchBasic;
    topicJoin?: PlatformCommon.TopicSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class SolutionSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.SolutionSearchBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchBasic;
    relatedSolutionJoin?: PlatformCommon.SolutionSearchBasic;
    topicJoin?: PlatformCommon.TopicSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: SolutionSearchProps);
}
export declare type SupportCaseProps = {
    escalationMessage?: string;
    lastReopenedDate?: string;
    endDate?: string;
    incomingMessage?: string;
    insertSolution?: PlatformCore.RecordRef;
    outgoingMessage?: string;
    searchSolution?: string;
    emailForm?: boolean;
    newSolutionFromMsg?: string;
    internalOnly?: boolean;
    customForm?: PlatformCore.RecordRef;
    title?: string;
    caseNumber?: string;
    startDate?: string;
    createdDate?: string;
    lastModifiedDate?: string;
    lastMessageDate?: string;
    company?: PlatformCore.RecordRef;
    profile?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    contact?: PlatformCore.RecordRef;
    email?: string;
    phone?: string;
    product?: PlatformCore.RecordRef;
    module?: PlatformCore.RecordRef;
    item?: PlatformCore.RecordRef;
    serialNumber?: PlatformCore.RecordRef;
    inboundEmail?: string;
    issue?: PlatformCore.RecordRef;
    status?: PlatformCore.RecordRef;
    isInactive?: boolean;
    priority?: PlatformCore.RecordRef;
    origin?: PlatformCore.RecordRef;
    category?: PlatformCore.RecordRef;
    assigned?: PlatformCore.RecordRef;
    helpDesk?: boolean;
    emailEmployeesList?: EmailEmployeesList;
    escalateToList?: SupportCaseEscalateToList;
    timeItemList?: SupportCaseTimeItemList;
    solutionsList?: SupportCaseSolutionsList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class SupportCase extends PlatformCore.Record {
    escalationMessage?: string;
    lastReopenedDate?: string;
    endDate?: string;
    incomingMessage?: string;
    insertSolution?: PlatformCore.RecordRef;
    outgoingMessage?: string;
    searchSolution?: string;
    emailForm?: boolean;
    newSolutionFromMsg?: string;
    internalOnly?: boolean;
    customForm?: PlatformCore.RecordRef;
    title?: string;
    caseNumber?: string;
    startDate?: string;
    createdDate?: string;
    lastModifiedDate?: string;
    lastMessageDate?: string;
    company?: PlatformCore.RecordRef;
    profile?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    contact?: PlatformCore.RecordRef;
    email?: string;
    phone?: string;
    product?: PlatformCore.RecordRef;
    module?: PlatformCore.RecordRef;
    item?: PlatformCore.RecordRef;
    serialNumber?: PlatformCore.RecordRef;
    inboundEmail?: string;
    issue?: PlatformCore.RecordRef;
    status?: PlatformCore.RecordRef;
    isInactive?: boolean;
    priority?: PlatformCore.RecordRef;
    origin?: PlatformCore.RecordRef;
    category?: PlatformCore.RecordRef;
    assigned?: PlatformCore.RecordRef;
    helpDesk?: boolean;
    emailEmployeesList?: EmailEmployeesList;
    escalateToList?: SupportCaseEscalateToList;
    timeItemList?: SupportCaseTimeItemList;
    solutionsList?: SupportCaseSolutionsList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: SupportCaseProps);
}
export declare type TopicProps = {
    title?: string;
    parentTopic?: PlatformCore.RecordRef;
    description?: string;
    isInactive?: boolean;
    longDescription?: string;
    solutionList?: TopicSolutionList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class Topic extends PlatformCore.Record {
    title?: string;
    parentTopic?: PlatformCore.RecordRef;
    description?: string;
    isInactive?: boolean;
    longDescription?: string;
    solutionList?: TopicSolutionList;
    internalId?: string;
    externalId?: string;
    constructor(props: TopicProps);
}
export declare type SolutionSearchAdvancedProps = {
    criteria?: SolutionSearch;
    columns?: SolutionSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class SolutionSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: SolutionSearch;
    columns?: SolutionSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: SolutionSearchAdvancedProps);
}
export declare type SupportCaseIssueProps = {
    name?: string;
    insertBefore?: PlatformCore.RecordRef;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class SupportCaseIssue extends PlatformCore.Record {
    name?: string;
    insertBefore?: PlatformCore.RecordRef;
    description?: string;
    isInactive?: boolean;
    internalId?: string;
    externalId?: string;
    constructor(props: SupportCaseIssueProps);
}
export declare type IssueSearchProps = {
    basic?: PlatformCommon.IssueSearchBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    productTeamJoin?: PlatformCommon.EntityGroupSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class IssueSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.IssueSearchBasic;
    caseJoin?: PlatformCommon.SupportCaseSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    productTeamJoin?: PlatformCommon.EntityGroupSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: IssueSearchProps);
}
export declare type SupportCaseSearchProps = {
    basic?: PlatformCommon.SupportCaseSearchBasic;
    companyJoin?: PlatformCommon.EntitySearchBasic;
    contactJoin?: PlatformCommon.ContactSearchBasic;
    customerJoin?: PlatformCommon.CustomerSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    issueJoin?: PlatformCommon.IssueSearchBasic;
    itemJoin?: PlatformCommon.ItemSearchBasic;
    messagesJoin?: PlatformCommon.MessageSearchBasic;
    timeJoin?: PlatformCommon.TimeBillSearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class SupportCaseSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.SupportCaseSearchBasic;
    companyJoin?: PlatformCommon.EntitySearchBasic;
    contactJoin?: PlatformCommon.ContactSearchBasic;
    customerJoin?: PlatformCommon.CustomerSearchBasic;
    employeeJoin?: PlatformCommon.EmployeeSearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    issueJoin?: PlatformCommon.IssueSearchBasic;
    itemJoin?: PlatformCommon.ItemSearchBasic;
    messagesJoin?: PlatformCommon.MessageSearchBasic;
    timeJoin?: PlatformCommon.TimeBillSearchBasic;
    transactionJoin?: PlatformCommon.TransactionSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    userNotesJoin?: PlatformCommon.NoteSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: SupportCaseSearchProps);
}
export declare type TopicSolutionListProps = {
    solution?: TopicSolution[];
    replaceAll?: boolean;
};
export declare class TopicSolutionList extends SoapMappingBase {
    solution?: TopicSolution[];
    replaceAll?: boolean;
    constructor(props: TopicSolutionListProps);
}
