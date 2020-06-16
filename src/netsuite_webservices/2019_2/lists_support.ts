import * as SoapTypes from "../soap-types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as ListsSupportTypes from "./lists_support_types";

const mappingsName = "com_netsuite_webservices_lists_support_2019_2";

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
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  solutionsList?: SolutionsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Solution) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
  constructor(props: SupportCaseStatus) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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

export class Issue extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  issueNumber?: string;
  createdDate?: SoapTypes.Dateish;
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
  lastModifiedDate?: SoapTypes.Dateish;
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
  constructor(props: Issue) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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

export class IssueSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.IssueSearchRowBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  fileJoin?: PlatformCommon.FileSearchRowBasic;
  productTeamJoin?: PlatformCommon.EntityGroupSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: IssueSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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

export class SupportCaseEscalateToList extends SoapTypes.Base {
  escalateTo?: SupportCaseEscalateTo[];
  replaceAll?: boolean;
  constructor(props: SupportCaseEscalateToList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.escalateTo = props.escalateTo;
    this.replaceAll = props.replaceAll;
  }
}

export class SupportCaseOrigin extends PlatformCore.Record {
  name?: string;
  insertBefore?: PlatformCore.RecordRef;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: SupportCaseOrigin) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.insertBefore = props.insertBefore;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class IssueRelatedIssues extends SoapTypes.Base {
  relationship?: ListsSupportTypes.IssueRelationship;
  issueNumber?: PlatformCore.RecordRef;
  relationshipComment?: string;
  constructor(props: IssueRelatedIssues) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.relationship = props.relationship;
    this.issueNumber = props.issueNumber;
    this.relationshipComment = props.relationshipComment;
  }
}

export class IssueSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: IssueSearch;
  columns?: IssueSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: IssueSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class TopicSolution extends SoapTypes.Base {
  solution?: PlatformCore.RecordRef;
  message?: string;
  constructor(props: TopicSolution) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.solution = props.solution;
    this.message = props.message;
  }
}

export class IssueRelatedIssuesList extends SoapTypes.Base {
  issueRelatedIssues?: IssueRelatedIssues[];
  replaceAll?: boolean;
  constructor(props: IssueRelatedIssuesList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.issueRelatedIssues = props.issueRelatedIssues;
    this.replaceAll = props.replaceAll;
  }
}

export class TopicSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: TopicSearch;
  columns?: TopicSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: TopicSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class IssueVersionList extends SoapTypes.Base {
  issueVersion?: IssueVersion[];
  replaceAll?: boolean;
  constructor(props: IssueVersionList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.issueVersion = props.issueVersion;
    this.replaceAll = props.replaceAll;
  }
}

export class SupportCaseType extends PlatformCore.Record {
  name?: string;
  insertBefore?: PlatformCore.RecordRef;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: SupportCaseType) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.insertBefore = props.insertBefore;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class SupportCaseSolutions extends SoapTypes.Base {
  solution?: PlatformCore.RecordRef;
  message?: string;
  dateApplied?: SoapTypes.Dateish;
  constructor(props: SupportCaseSolutions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.solution = props.solution;
    this.message = props.message;
    this.dateApplied = props.dateApplied;
  }
}

export class SolutionTopics extends SoapTypes.Base {
  topic?: PlatformCore.RecordRef;
  constructor(props: SolutionTopics) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.topic = props.topic;
  }
}

export class SupportCaseEscalateTo extends SoapTypes.Base {
  escalatee?: PlatformCore.RecordRef;
  email?: string;
  phone?: string;
  constructor(props: SupportCaseEscalateTo) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.escalatee = props.escalatee;
    this.email = props.email;
    this.phone = props.phone;
  }
}

export class SolutionTopicsList extends SoapTypes.Base {
  topics?: SolutionTopics[];
  replaceAll?: boolean;
  constructor(props: SolutionTopicsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.topics = props.topics;
    this.replaceAll = props.replaceAll;
  }
}

export class TopicSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.TopicSearchRowBasic;
  solutionJoin?: PlatformCommon.SolutionSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: TopicSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.solutionJoin = props.solutionJoin;
    this.userJoin = props.userJoin;
  }
}

export class Solutions extends SoapTypes.Base {
  solution?: PlatformCore.RecordRef;
  message?: string;
  constructor(props: Solutions) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.solution = props.solution;
    this.message = props.message;
  }
}

export class EmailEmployeesList extends SoapTypes.Base {
  emailEmployees: PlatformCore.RecordRef[];
  constructor(props: EmailEmployeesList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.emailEmployees = props.emailEmployees;
  }
}

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
  constructor(props: SupportCaseSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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

export class TopicSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.TopicSearchBasic;
  solutionJoin?: PlatformCommon.SolutionSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: TopicSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.solutionJoin = props.solutionJoin;
    this.userJoin = props.userJoin;
  }
}

export class SolutionSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.SolutionSearchRowBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
  relatedSolutionJoin?: PlatformCommon.SolutionSearchRowBasic;
  topicJoin?: PlatformCommon.TopicSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: SolutionSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.caseJoin = props.caseJoin;
    this.relatedSolutionJoin = props.relatedSolutionJoin;
    this.topicJoin = props.topicJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class SupportCaseSolutionsList extends SoapTypes.Base {
  solutions?: SupportCaseSolutions[];
  replaceAll?: boolean;
  constructor(props: SupportCaseSolutionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.solutions = props.solutions;
    this.replaceAll = props.replaceAll;
  }
}

export class SupportCasePriority extends PlatformCore.Record {
  name?: string;
  insertBefore?: PlatformCore.RecordRef;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: SupportCasePriority) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.insertBefore = props.insertBefore;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class SolutionsList extends SoapTypes.Base {
  solutions?: Solutions[];
  replaceAll?: boolean;
  constructor(props: SolutionsList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.solutions = props.solutions;
    this.replaceAll = props.replaceAll;
  }
}

export class SupportCaseSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: SupportCaseSearch;
  columns?: SupportCaseSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: SupportCaseSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class SupportCaseTimeItemList extends SoapTypes.Base {
  timeItem?: PlatformCommon.TimeItem[];
  replaceAll?: boolean;
  constructor(props: SupportCaseTimeItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.timeItem = props.timeItem;
    this.replaceAll = props.replaceAll;
  }
}

export class IssueVersion extends SoapTypes.Base {
  primary?: boolean;
  version?: PlatformCore.RecordRef;
  build?: PlatformCore.RecordRef;
  constructor(props: IssueVersion) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.primary = props.primary;
    this.version = props.version;
    this.build = props.build;
  }
}

export class SolutionSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.SolutionSearchBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchBasic;
  relatedSolutionJoin?: PlatformCommon.SolutionSearchBasic;
  topicJoin?: PlatformCommon.TopicSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: SolutionSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.caseJoin = props.caseJoin;
    this.relatedSolutionJoin = props.relatedSolutionJoin;
    this.topicJoin = props.topicJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class SupportCase extends PlatformCore.Record {
  escalationMessage?: string;
  lastReopenedDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
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
  startDate?: SoapTypes.Dateish;
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  lastMessageDate?: SoapTypes.Dateish;
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
  constructor(props: SupportCase) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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

export class Topic extends PlatformCore.Record {
  title?: string;
  parentTopic?: PlatformCore.RecordRef;
  description?: string;
  isInactive?: boolean;
  longDescription?: string;
  solutionList?: TopicSolutionList;
  internalId?: string;
  externalId?: string;
  constructor(props: Topic) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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

export class SolutionSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: SolutionSearch;
  columns?: SolutionSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: SolutionSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class SupportCaseIssue extends PlatformCore.Record {
  name?: string;
  insertBefore?: PlatformCore.RecordRef;
  description?: string;
  isInactive?: boolean;
  internalId?: string;
  externalId?: string;
  constructor(props: SupportCaseIssue) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.insertBefore = props.insertBefore;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class IssueSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.IssueSearchBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  fileJoin?: PlatformCommon.FileSearchBasic;
  productTeamJoin?: PlatformCommon.EntityGroupSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: IssueSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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
  constructor(props: SupportCaseSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
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

export class TopicSolutionList extends SoapTypes.Base {
  solution?: TopicSolution[];
  replaceAll?: boolean;
  constructor(props: TopicSolutionList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.solution = props.solution;
    this.replaceAll = props.replaceAll;
  }
}
