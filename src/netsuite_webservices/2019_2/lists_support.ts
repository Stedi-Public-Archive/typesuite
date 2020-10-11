import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as ListsSupportTypes from "./lists_support_types";

export type SolutionProps = {
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

export class Solution extends PlatformCore.Record {
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
  constructor(props: SolutionProps) {
    super(props);
    this.customForm = props.customForm;
    this.solutionCode = props.solutionCode;
    this.title = props.title;
    this.message = props.message;
    this.status = props.status;
    this.displayOnline = props.displayOnline;
    this.assigned = props.assigned;
    this.isInactive = props.isInactive;
    this.longDescription = props.longDescription;
    this.topicsList = props.topicsList;
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.solutionsList = props.solutionsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type SupportCaseStatusProps = {
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

export class SupportCaseStatus extends PlatformCore.Record {
  name?: string;
  insertBefore?: PlatformCore.RecordRef;
  stage?: ListsSupportTypes.SupportCaseStatusStage;
  caseOnHold?: boolean;
  autoCloseCase?: boolean;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: SupportCaseStatusProps) {
    super(props);
    this.name = props.name;
    this.insertBefore = props.insertBefore;
    this.stage = props.stage;
    this.caseOnHold = props.caseOnHold;
    this.autoCloseCase = props.autoCloseCase;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type IssueProps = {
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

export class Issue extends PlatformCore.Record {
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
  constructor(props: IssueProps) {
    super(props);
    this.customForm = props.customForm;
    this.issueNumber = props.issueNumber;
    this.createdDate = props.createdDate;
    this.issueType = props.issueType;
    this.product = props.product;
    this.module = props.module;
    this.item = props.item;
    this.productTeam = props.productTeam;
    this.source = props.source;
    this.reportedBy = props.reportedBy;
    this.reproduce = props.reproduce;
    this.versionBroken = props.versionBroken;
    this.buildBroken = props.buildBroken;
    this.versionTarget = props.versionTarget;
    this.buildTarget = props.buildTarget;
    this.versionFixed = props.versionFixed;
    this.buildFixed = props.buildFixed;
    this.severity = props.severity;
    this.priority = props.priority;
    this.isShowStopper = props.isShowStopper;
    this.assigned = props.assigned;
    this.reviewer = props.reviewer;
    this.isReviewed = props.isReviewed;
    this.issueStatus = props.issueStatus;
    this.lastModifiedDate = props.lastModifiedDate;
    this.issueTagsList = props.issueTagsList;
    this.issueAbstract = props.issueAbstract;
    this.newDetails = props.newDetails;
    this.isOwner = props.isOwner;
    this.trackCode = props.trackCode;
    this.emailAssignee = props.emailAssignee;
    this.emailEmployeesList = props.emailEmployeesList;
    this.emailCellsList = props.emailCellsList;
    this.externalAbstract = props.externalAbstract;
    this.externalDetails = props.externalDetails;
    this.brokenInVersionList = props.brokenInVersionList;
    this.targetVersionList = props.targetVersionList;
    this.fixedInVersionList = props.fixedInVersionList;
    this.relatedIssuesList = props.relatedIssuesList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type IssueSearchRowProps = {
  basic?: PlatformCommon.IssueSearchRowBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  fileJoin?: PlatformCommon.FileSearchRowBasic;
  productTeamJoin?: PlatformCommon.EntityGroupSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class IssueSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.IssueSearchRowBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  fileJoin?: PlatformCommon.FileSearchRowBasic;
  productTeamJoin?: PlatformCommon.EntityGroupSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: IssueSearchRowProps) {
    super();
    this.basic = props.basic;
    this.caseJoin = props.caseJoin;
    this.employeeJoin = props.employeeJoin;
    this.fileJoin = props.fileJoin;
    this.productTeamJoin = props.productTeamJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type SupportCaseEscalateToListProps = {
  escalateTo?: SupportCaseEscalateTo[];
  replaceAll?: boolean;
};

export class SupportCaseEscalateToList {
  escalateTo?: SupportCaseEscalateTo[];
  replaceAll?: boolean;
  constructor(props: SupportCaseEscalateToListProps) {
    this.escalateTo = props.escalateTo;
    this.replaceAll = props.replaceAll;
  }
}

export type SupportCaseOriginProps = {
  name?: string;
  insertBefore?: PlatformCore.RecordRef;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class SupportCaseOrigin extends PlatformCore.Record {
  name?: string;
  insertBefore?: PlatformCore.RecordRef;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: SupportCaseOriginProps) {
    super(props);
    this.name = props.name;
    this.insertBefore = props.insertBefore;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type IssueRelatedIssuesProps = {
  relationship?: ListsSupportTypes.IssueRelationship;
  issueNumber?: PlatformCore.RecordRef;
  relationshipComment?: string;
};

export class IssueRelatedIssues {
  relationship?: ListsSupportTypes.IssueRelationship;
  issueNumber?: PlatformCore.RecordRef;
  relationshipComment?: string;
  constructor(props: IssueRelatedIssuesProps) {
    this.relationship = props.relationship;
    this.issueNumber = props.issueNumber;
    this.relationshipComment = props.relationshipComment;
  }
}

export type IssueSearchAdvancedProps = {
  criteria?: IssueSearch;
  columns?: IssueSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class IssueSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: IssueSearch;
  columns?: IssueSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: IssueSearchAdvancedProps) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type TopicSolutionProps = {
  solution?: PlatformCore.RecordRef;
  message?: string;
};

export class TopicSolution {
  solution?: PlatformCore.RecordRef;
  message?: string;
  constructor(props: TopicSolutionProps) {
    this.solution = props.solution;
    this.message = props.message;
  }
}

export type IssueRelatedIssuesListProps = {
  issueRelatedIssues?: IssueRelatedIssues[];
  replaceAll?: boolean;
};

export class IssueRelatedIssuesList {
  issueRelatedIssues?: IssueRelatedIssues[];
  replaceAll?: boolean;
  constructor(props: IssueRelatedIssuesListProps) {
    this.issueRelatedIssues = props.issueRelatedIssues;
    this.replaceAll = props.replaceAll;
  }
}

export type TopicSearchAdvancedProps = {
  criteria?: TopicSearch;
  columns?: TopicSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class TopicSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: TopicSearch;
  columns?: TopicSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: TopicSearchAdvancedProps) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type IssueVersionListProps = {
  issueVersion?: IssueVersion[];
  replaceAll?: boolean;
};

export class IssueVersionList {
  issueVersion?: IssueVersion[];
  replaceAll?: boolean;
  constructor(props: IssueVersionListProps) {
    this.issueVersion = props.issueVersion;
    this.replaceAll = props.replaceAll;
  }
}

export type SupportCaseTypeProps = {
  name?: string;
  insertBefore?: PlatformCore.RecordRef;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class SupportCaseType extends PlatformCore.Record {
  name?: string;
  insertBefore?: PlatformCore.RecordRef;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: SupportCaseTypeProps) {
    super(props);
    this.name = props.name;
    this.insertBefore = props.insertBefore;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type SupportCaseSolutionsProps = {
  solution?: PlatformCore.RecordRef;
  message?: string;
  dateApplied?: string;
};

export class SupportCaseSolutions {
  solution?: PlatformCore.RecordRef;
  message?: string;
  dateApplied?: string;
  constructor(props: SupportCaseSolutionsProps) {
    this.solution = props.solution;
    this.message = props.message;
    this.dateApplied = props.dateApplied;
  }
}

export type SolutionTopicsProps = {
  topic?: PlatformCore.RecordRef;
};

export class SolutionTopics {
  topic?: PlatformCore.RecordRef;
  constructor(props: SolutionTopicsProps) {
    this.topic = props.topic;
  }
}

export type SupportCaseEscalateToProps = {
  escalatee?: PlatformCore.RecordRef;
  email?: string;
  phone?: string;
};

export class SupportCaseEscalateTo {
  escalatee?: PlatformCore.RecordRef;
  email?: string;
  phone?: string;
  constructor(props: SupportCaseEscalateToProps) {
    this.escalatee = props.escalatee;
    this.email = props.email;
    this.phone = props.phone;
  }
}

export type SolutionTopicsListProps = {
  topics?: SolutionTopics[];
  replaceAll?: boolean;
};

export class SolutionTopicsList {
  topics?: SolutionTopics[];
  replaceAll?: boolean;
  constructor(props: SolutionTopicsListProps) {
    this.topics = props.topics;
    this.replaceAll = props.replaceAll;
  }
}

export type TopicSearchRowProps = {
  basic?: PlatformCommon.TopicSearchRowBasic;
  solutionJoin?: PlatformCommon.SolutionSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};

export class TopicSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.TopicSearchRowBasic;
  solutionJoin?: PlatformCommon.SolutionSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: TopicSearchRowProps) {
    super();
    this.basic = props.basic;
    this.solutionJoin = props.solutionJoin;
    this.userJoin = props.userJoin;
  }
}

export type SolutionsProps = {
  solution?: PlatformCore.RecordRef;
  message?: string;
};

export class Solutions {
  solution?: PlatformCore.RecordRef;
  message?: string;
  constructor(props: SolutionsProps) {
    this.solution = props.solution;
    this.message = props.message;
  }
}

export type EmailEmployeesListProps = {
  emailEmployees: PlatformCore.RecordRef[];
};

export class EmailEmployeesList {
  emailEmployees: PlatformCore.RecordRef[];
  constructor(props: EmailEmployeesListProps) {
    this.emailEmployees = props.emailEmployees;
  }
}

export type SupportCaseSearchRowProps = {
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

export class SupportCaseSearchRow extends PlatformCore.SearchRow {
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
  constructor(props: SupportCaseSearchRowProps) {
    super();
    this.basic = props.basic;
    this.companyJoin = props.companyJoin;
    this.contactJoin = props.contactJoin;
    this.customerJoin = props.customerJoin;
    this.employeeJoin = props.employeeJoin;
    this.fileJoin = props.fileJoin;
    this.issueJoin = props.issueJoin;
    this.itemJoin = props.itemJoin;
    this.messagesJoin = props.messagesJoin;
    this.timeJoin = props.timeJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type TopicSearchProps = {
  basic?: PlatformCommon.TopicSearchBasic;
  solutionJoin?: PlatformCommon.SolutionSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
};

export class TopicSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.TopicSearchBasic;
  solutionJoin?: PlatformCommon.SolutionSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: TopicSearchProps) {
    super();
    this.basic = props.basic;
    this.solutionJoin = props.solutionJoin;
    this.userJoin = props.userJoin;
  }
}

export type SolutionSearchRowProps = {
  basic?: PlatformCommon.SolutionSearchRowBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
  relatedSolutionJoin?: PlatformCommon.SolutionSearchRowBasic;
  topicJoin?: PlatformCommon.TopicSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class SolutionSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.SolutionSearchRowBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
  relatedSolutionJoin?: PlatformCommon.SolutionSearchRowBasic;
  topicJoin?: PlatformCommon.TopicSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: SolutionSearchRowProps) {
    super();
    this.basic = props.basic;
    this.caseJoin = props.caseJoin;
    this.relatedSolutionJoin = props.relatedSolutionJoin;
    this.topicJoin = props.topicJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type SupportCaseSolutionsListProps = {
  solutions?: SupportCaseSolutions[];
  replaceAll?: boolean;
};

export class SupportCaseSolutionsList {
  solutions?: SupportCaseSolutions[];
  replaceAll?: boolean;
  constructor(props: SupportCaseSolutionsListProps) {
    this.solutions = props.solutions;
    this.replaceAll = props.replaceAll;
  }
}

export type SupportCasePriorityProps = {
  name?: string;
  insertBefore?: PlatformCore.RecordRef;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class SupportCasePriority extends PlatformCore.Record {
  name?: string;
  insertBefore?: PlatformCore.RecordRef;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: SupportCasePriorityProps) {
    super(props);
    this.name = props.name;
    this.insertBefore = props.insertBefore;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type SolutionsListProps = {
  solutions?: Solutions[];
  replaceAll?: boolean;
};

export class SolutionsList {
  solutions?: Solutions[];
  replaceAll?: boolean;
  constructor(props: SolutionsListProps) {
    this.solutions = props.solutions;
    this.replaceAll = props.replaceAll;
  }
}

export type SupportCaseSearchAdvancedProps = {
  criteria?: SupportCaseSearch;
  columns?: SupportCaseSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class SupportCaseSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: SupportCaseSearch;
  columns?: SupportCaseSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: SupportCaseSearchAdvancedProps) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type SupportCaseTimeItemListProps = {
  timeItem?: PlatformCommon.TimeItem[];
  replaceAll?: boolean;
};

export class SupportCaseTimeItemList {
  timeItem?: PlatformCommon.TimeItem[];
  replaceAll?: boolean;
  constructor(props: SupportCaseTimeItemListProps) {
    this.timeItem = props.timeItem;
    this.replaceAll = props.replaceAll;
  }
}

export type IssueVersionProps = {
  primary?: boolean;
  version?: PlatformCore.RecordRef;
  build?: PlatformCore.RecordRef;
};

export class IssueVersion {
  primary?: boolean;
  version?: PlatformCore.RecordRef;
  build?: PlatformCore.RecordRef;
  constructor(props: IssueVersionProps) {
    this.primary = props.primary;
    this.version = props.version;
    this.build = props.build;
  }
}

export type SolutionSearchProps = {
  basic?: PlatformCommon.SolutionSearchBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchBasic;
  relatedSolutionJoin?: PlatformCommon.SolutionSearchBasic;
  topicJoin?: PlatformCommon.TopicSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class SolutionSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.SolutionSearchBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchBasic;
  relatedSolutionJoin?: PlatformCommon.SolutionSearchBasic;
  topicJoin?: PlatformCommon.TopicSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: SolutionSearchProps) {
    super();
    this.basic = props.basic;
    this.caseJoin = props.caseJoin;
    this.relatedSolutionJoin = props.relatedSolutionJoin;
    this.topicJoin = props.topicJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type SupportCaseProps = {
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

export class SupportCase extends PlatformCore.Record {
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
  constructor(props: SupportCaseProps) {
    super(props);
    this.escalationMessage = props.escalationMessage;
    this.lastReopenedDate = props.lastReopenedDate;
    this.endDate = props.endDate;
    this.incomingMessage = props.incomingMessage;
    this.insertSolution = props.insertSolution;
    this.outgoingMessage = props.outgoingMessage;
    this.searchSolution = props.searchSolution;
    this.emailForm = props.emailForm;
    this.newSolutionFromMsg = props.newSolutionFromMsg;
    this.internalOnly = props.internalOnly;
    this.customForm = props.customForm;
    this.title = props.title;
    this.caseNumber = props.caseNumber;
    this.startDate = props.startDate;
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.lastMessageDate = props.lastMessageDate;
    this.company = props.company;
    this.profile = props.profile;
    this.subsidiary = props.subsidiary;
    this.contact = props.contact;
    this.email = props.email;
    this.phone = props.phone;
    this.product = props.product;
    this.module = props.module;
    this.item = props.item;
    this.serialNumber = props.serialNumber;
    this.inboundEmail = props.inboundEmail;
    this.issue = props.issue;
    this.status = props.status;
    this.isInactive = props.isInactive;
    this.priority = props.priority;
    this.origin = props.origin;
    this.category = props.category;
    this.assigned = props.assigned;
    this.helpDesk = props.helpDesk;
    this.emailEmployeesList = props.emailEmployeesList;
    this.escalateToList = props.escalateToList;
    this.timeItemList = props.timeItemList;
    this.solutionsList = props.solutionsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type TopicProps = {
  title?: string;
  parentTopic?: PlatformCore.RecordRef;
  description?: string;
  isInactive?: boolean;
  longDescription?: string;
  solutionList?: TopicSolutionList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class Topic extends PlatformCore.Record {
  title?: string;
  parentTopic?: PlatformCore.RecordRef;
  description?: string;
  isInactive?: boolean;
  longDescription?: string;
  solutionList?: TopicSolutionList;
  internalId?: string;
  externalId?: string;
  constructor(props: TopicProps) {
    super(props);
    this.title = props.title;
    this.parentTopic = props.parentTopic;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.longDescription = props.longDescription;
    this.solutionList = props.solutionList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type SolutionSearchAdvancedProps = {
  criteria?: SolutionSearch;
  columns?: SolutionSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class SolutionSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: SolutionSearch;
  columns?: SolutionSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: SolutionSearchAdvancedProps) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type SupportCaseIssueProps = {
  name?: string;
  insertBefore?: PlatformCore.RecordRef;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class SupportCaseIssue extends PlatformCore.Record {
  name?: string;
  insertBefore?: PlatformCore.RecordRef;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: SupportCaseIssueProps) {
    super(props);
    this.name = props.name;
    this.insertBefore = props.insertBefore;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type IssueSearchProps = {
  basic?: PlatformCommon.IssueSearchBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  fileJoin?: PlatformCommon.FileSearchBasic;
  productTeamJoin?: PlatformCommon.EntityGroupSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class IssueSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.IssueSearchBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  fileJoin?: PlatformCommon.FileSearchBasic;
  productTeamJoin?: PlatformCommon.EntityGroupSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: IssueSearchProps) {
    super();
    this.basic = props.basic;
    this.caseJoin = props.caseJoin;
    this.employeeJoin = props.employeeJoin;
    this.fileJoin = props.fileJoin;
    this.productTeamJoin = props.productTeamJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type SupportCaseSearchProps = {
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

export class SupportCaseSearch extends PlatformCore.SearchRecord {
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
  constructor(props: SupportCaseSearchProps) {
    super();
    this.basic = props.basic;
    this.companyJoin = props.companyJoin;
    this.contactJoin = props.contactJoin;
    this.customerJoin = props.customerJoin;
    this.employeeJoin = props.employeeJoin;
    this.fileJoin = props.fileJoin;
    this.issueJoin = props.issueJoin;
    this.itemJoin = props.itemJoin;
    this.messagesJoin = props.messagesJoin;
    this.timeJoin = props.timeJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type TopicSolutionListProps = {
  solution?: TopicSolution[];
  replaceAll?: boolean;
};

export class TopicSolutionList {
  solution?: TopicSolution[];
  replaceAll?: boolean;
  constructor(props: TopicSolutionListProps) {
    this.solution = props.solution;
    this.replaceAll = props.replaceAll;
  }
}
