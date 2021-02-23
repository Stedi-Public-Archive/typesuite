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
exports.TopicSolutionList = exports.SupportCaseSearch = exports.IssueSearch = exports.SupportCaseIssue = exports.SolutionSearchAdvanced = exports.Topic = exports.SupportCase = exports.SolutionSearch = exports.IssueVersion = exports.SupportCaseTimeItemList = exports.SupportCaseSearchAdvanced = exports.SolutionsList = exports.SupportCasePriority = exports.SupportCaseSolutionsList = exports.SolutionSearchRow = exports.TopicSearch = exports.SupportCaseSearchRow = exports.EmailEmployeesList = exports.Solutions = exports.TopicSearchRow = exports.SolutionTopicsList = exports.SupportCaseEscalateTo = exports.SolutionTopics = exports.SupportCaseSolutions = exports.SupportCaseType = exports.IssueVersionList = exports.TopicSearchAdvanced = exports.IssueRelatedIssuesList = exports.TopicSolution = exports.IssueSearchAdvanced = exports.IssueRelatedIssues = exports.SupportCaseOrigin = exports.SupportCaseEscalateToList = exports.IssueSearchRow = exports.Issue = exports.SupportCaseStatus = exports.Solution = void 0;
const PlatformCore = __importStar(require("./platform_core"));
const soap_types_1 = require("../../soap-types");
const MAPPINGS_NAME = "com_netsuite_webservices_lists_support_2019_2";
class Solution extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.Solution = Solution;
class SupportCaseStatus extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.SupportCaseStatus = SupportCaseStatus;
class Issue extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.Issue = Issue;
class IssueSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.IssueSearchRow = IssueSearchRow;
class SupportCaseEscalateToList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.escalateTo = props.escalateTo;
        this.replaceAll = props.replaceAll;
    }
}
exports.SupportCaseEscalateToList = SupportCaseEscalateToList;
class SupportCaseOrigin extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.insertBefore = props.insertBefore;
        this.description = props.description;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.SupportCaseOrigin = SupportCaseOrigin;
class IssueRelatedIssues extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.relationship = props.relationship;
        this.issueNumber = props.issueNumber;
        this.relationshipComment = props.relationshipComment;
    }
}
exports.IssueRelatedIssues = IssueRelatedIssues;
class IssueSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.IssueSearchAdvanced = IssueSearchAdvanced;
class TopicSolution extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.solution = props.solution;
        this.message = props.message;
    }
}
exports.TopicSolution = TopicSolution;
class IssueRelatedIssuesList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.issueRelatedIssues = props.issueRelatedIssues;
        this.replaceAll = props.replaceAll;
    }
}
exports.IssueRelatedIssuesList = IssueRelatedIssuesList;
class TopicSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.TopicSearchAdvanced = TopicSearchAdvanced;
class IssueVersionList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.issueVersion = props.issueVersion;
        this.replaceAll = props.replaceAll;
    }
}
exports.IssueVersionList = IssueVersionList;
class SupportCaseType extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.insertBefore = props.insertBefore;
        this.description = props.description;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.SupportCaseType = SupportCaseType;
class SupportCaseSolutions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.solution = props.solution;
        this.message = props.message;
        this.dateApplied = props.dateApplied;
    }
}
exports.SupportCaseSolutions = SupportCaseSolutions;
class SolutionTopics extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.topic = props.topic;
    }
}
exports.SolutionTopics = SolutionTopics;
class SupportCaseEscalateTo extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.escalatee = props.escalatee;
        this.email = props.email;
        this.phone = props.phone;
    }
}
exports.SupportCaseEscalateTo = SupportCaseEscalateTo;
class SolutionTopicsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.topics = props.topics;
        this.replaceAll = props.replaceAll;
    }
}
exports.SolutionTopicsList = SolutionTopicsList;
class TopicSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.solutionJoin = props.solutionJoin;
        this.userJoin = props.userJoin;
    }
}
exports.TopicSearchRow = TopicSearchRow;
class Solutions extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.solution = props.solution;
        this.message = props.message;
    }
}
exports.Solutions = Solutions;
class EmailEmployeesList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.emailEmployees = props.emailEmployees;
    }
}
exports.EmailEmployeesList = EmailEmployeesList;
class SupportCaseSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.SupportCaseSearchRow = SupportCaseSearchRow;
class TopicSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.solutionJoin = props.solutionJoin;
        this.userJoin = props.userJoin;
    }
}
exports.TopicSearch = TopicSearch;
class SolutionSearchRow extends PlatformCore.SearchRow {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.caseJoin = props.caseJoin;
        this.relatedSolutionJoin = props.relatedSolutionJoin;
        this.topicJoin = props.topicJoin;
        this.userJoin = props.userJoin;
        this.userNotesJoin = props.userNotesJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.SolutionSearchRow = SolutionSearchRow;
class SupportCaseSolutionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.solutions = props.solutions;
        this.replaceAll = props.replaceAll;
    }
}
exports.SupportCaseSolutionsList = SupportCaseSolutionsList;
class SupportCasePriority extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.insertBefore = props.insertBefore;
        this.description = props.description;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.SupportCasePriority = SupportCasePriority;
class SolutionsList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.solutions = props.solutions;
        this.replaceAll = props.replaceAll;
    }
}
exports.SolutionsList = SolutionsList;
class SupportCaseSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.SupportCaseSearchAdvanced = SupportCaseSearchAdvanced;
class SupportCaseTimeItemList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.timeItem = props.timeItem;
        this.replaceAll = props.replaceAll;
    }
}
exports.SupportCaseTimeItemList = SupportCaseTimeItemList;
class IssueVersion extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.primary = props.primary;
        this.version = props.version;
        this.build = props.build;
    }
}
exports.IssueVersion = IssueVersion;
class SolutionSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.basic = props.basic;
        this.caseJoin = props.caseJoin;
        this.relatedSolutionJoin = props.relatedSolutionJoin;
        this.topicJoin = props.topicJoin;
        this.userJoin = props.userJoin;
        this.userNotesJoin = props.userNotesJoin;
        this.customSearchJoin = props.customSearchJoin;
    }
}
exports.SolutionSearch = SolutionSearch;
class SupportCase extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.SupportCase = SupportCase;
class Topic extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.Topic = Topic;
class SolutionSearchAdvanced extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.criteria = props.criteria;
        this.columns = props.columns;
        this.savedSearchId = props.savedSearchId;
        this.savedSearchScriptId = props.savedSearchScriptId;
    }
}
exports.SolutionSearchAdvanced = SolutionSearchAdvanced;
class SupportCaseIssue extends PlatformCore.Record {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.name = props.name;
        this.insertBefore = props.insertBefore;
        this.description = props.description;
        this.isInactive = props.isInactive;
        this.internalId = props.internalId;
        this.externalId = props.externalId;
    }
}
exports.SupportCaseIssue = SupportCaseIssue;
class IssueSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.IssueSearch = IssueSearch;
class SupportCaseSearch extends PlatformCore.SearchRecord {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
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
exports.SupportCaseSearch = SupportCaseSearch;
class TopicSolutionList extends soap_types_1.SoapMappingBase {
    constructor(props) {
        super(soap_types_1.propsWithMappingsName(props, MAPPINGS_NAME));
        this.solution = props.solution;
        this.replaceAll = props.replaceAll;
    }
}
exports.TopicSolutionList = TopicSolutionList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHNfc3VwcG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uZXRzdWl0ZV93ZWJzZXJ2aWNlcy8yMDE5XzIvbGlzdHNfc3VwcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQWdEO0FBR2hELGlEQUEwRTtBQUMxRSxNQUFNLGFBQWEsR0FBRywrQ0FBK0MsQ0FBQztBQW9CdEUsTUFBYSxRQUFTLFNBQVEsWUFBWSxDQUFDLE1BQU07SUFpQi9DLFlBQVksS0FBb0I7UUFDOUIsS0FBSyxDQUFDLGtDQUFxQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztR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QyxDQUFDO0NBQ0Y7QUFSRCw4Q0FRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFBsYXRmb3JtQ29yZSBmcm9tIFwiLi9wbGF0Zm9ybV9jb3JlXCI7XG5pbXBvcnQgKiBhcyBQbGF0Zm9ybUNvbW1vbiBmcm9tIFwiLi9wbGF0Zm9ybV9jb21tb25cIjtcbmltcG9ydCAqIGFzIExpc3RzU3VwcG9ydFR5cGVzIGZyb20gXCIuL2xpc3RzX3N1cHBvcnRfdHlwZXNcIjtcbmltcG9ydCB7IFNvYXBNYXBwaW5nQmFzZSwgcHJvcHNXaXRoTWFwcGluZ3NOYW1lIH0gZnJvbSBcIi4uLy4uL3NvYXAtdHlwZXNcIjtcbmNvbnN0IE1BUFBJTkdTX05BTUUgPSBcImNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19saXN0c19zdXBwb3J0XzIwMTlfMlwiO1xuZXhwb3J0IHR5cGUgU29sdXRpb25Qcm9wcyA9IHtcbiAgY3VzdG9tRm9ybT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHNvbHV0aW9uQ29kZT86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIHN0YXR1cz86IExpc3RzU3VwcG9ydFR5cGVzLlNvbHV0aW9uU3RhdHVzO1xuICBkaXNwbGF5T25saW5lPzogYm9vbGVhbjtcbiAgYXNzaWduZWQ/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBpc0luYWN0aXZlPzogYm9vbGVhbjtcbiAgbG9uZ0Rlc2NyaXB0aW9uPzogc3RyaW5nO1xuICB0b3BpY3NMaXN0PzogU29sdXRpb25Ub3BpY3NMaXN0O1xuICBjcmVhdGVkRGF0ZT86IHN0cmluZztcbiAgbGFzdE1vZGlmaWVkRGF0ZT86IHN0cmluZztcbiAgc29sdXRpb25zTGlzdD86IFNvbHV0aW9uc0xpc3Q7XG4gIGN1c3RvbUZpZWxkTGlzdD86IFBsYXRmb3JtQ29yZS5DdXN0b21GaWVsZExpc3Q7XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG59ICYgUGxhdGZvcm1Db3JlLlJlY29yZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgU29sdXRpb24gZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuUmVjb3JkIHtcbiAgY3VzdG9tRm9ybT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHNvbHV0aW9uQ29kZT86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIHN0YXR1cz86IExpc3RzU3VwcG9ydFR5cGVzLlNvbHV0aW9uU3RhdHVzO1xuICBkaXNwbGF5T25saW5lPzogYm9vbGVhbjtcbiAgYXNzaWduZWQ/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBpc0luYWN0aXZlPzogYm9vbGVhbjtcbiAgbG9uZ0Rlc2NyaXB0aW9uPzogc3RyaW5nO1xuICB0b3BpY3NMaXN0PzogU29sdXRpb25Ub3BpY3NMaXN0O1xuICBjcmVhdGVkRGF0ZT86IHN0cmluZztcbiAgbGFzdE1vZGlmaWVkRGF0ZT86IHN0cmluZztcbiAgc29sdXRpb25zTGlzdD86IFNvbHV0aW9uc0xpc3Q7XG4gIGN1c3RvbUZpZWxkTGlzdD86IFBsYXRmb3JtQ29yZS5DdXN0b21GaWVsZExpc3Q7XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTb2x1dGlvblByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5jdXN0b21Gb3JtID0gcHJvcHMuY3VzdG9tRm9ybTtcbiAgICB0aGlzLnNvbHV0aW9uQ29kZSA9IHByb3BzLnNvbHV0aW9uQ29kZTtcbiAgICB0aGlzLnRpdGxlID0gcHJvcHMudGl0bGU7XG4gICAgdGhpcy5tZXNzYWdlID0gcHJvcHMubWVzc2FnZTtcbiAgICB0aGlzLnN0YXR1cyA9IHByb3BzLnN0YXR1cztcbiAgICB0aGlzLmRpc3BsYXlPbmxpbmUgPSBwcm9wcy5kaXNwbGF5T25saW5lO1xuICAgIHRoaXMuYXNzaWduZWQgPSBwcm9wcy5hc3NpZ25lZDtcbiAgICB0aGlzLmlzSW5hY3RpdmUgPSBwcm9wcy5pc0luYWN0aXZlO1xuICAgIHRoaXMubG9uZ0Rlc2NyaXB0aW9uID0gcHJvcHMubG9uZ0Rlc2NyaXB0aW9uO1xuICAgIHRoaXMudG9waWNzTGlzdCA9IHByb3BzLnRvcGljc0xpc3Q7XG4gICAgdGhpcy5jcmVhdGVkRGF0ZSA9IHByb3BzLmNyZWF0ZWREYXRlO1xuICAgIHRoaXMubGFzdE1vZGlmaWVkRGF0ZSA9IHByb3BzLmxhc3RNb2RpZmllZERhdGU7XG4gICAgdGhpcy5zb2x1dGlvbnNMaXN0ID0gcHJvcHMuc29sdXRpb25zTGlzdDtcbiAgICB0aGlzLmN1c3RvbUZpZWxkTGlzdCA9IHByb3BzLmN1c3RvbUZpZWxkTGlzdDtcbiAgICB0aGlzLmludGVybmFsSWQgPSBwcm9wcy5pbnRlcm5hbElkO1xuICAgIHRoaXMuZXh0ZXJuYWxJZCA9IHByb3BzLmV4dGVybmFsSWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3VwcG9ydENhc2VTdGF0dXNQcm9wcyA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgaW5zZXJ0QmVmb3JlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgc3RhZ2U/OiBMaXN0c1N1cHBvcnRUeXBlcy5TdXBwb3J0Q2FzZVN0YXR1c1N0YWdlO1xuICBjYXNlT25Ib2xkPzogYm9vbGVhbjtcbiAgYXV0b0Nsb3NlQ2FzZT86IGJvb2xlYW47XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBpc0luYWN0aXZlPzogYm9vbGVhbjtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgZXh0ZXJuYWxJZD86IHN0cmluZztcbn0gJiBQbGF0Zm9ybUNvcmUuUmVjb3JkUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBTdXBwb3J0Q2FzZVN0YXR1cyBleHRlbmRzIFBsYXRmb3JtQ29yZS5SZWNvcmQge1xuICBuYW1lPzogc3RyaW5nO1xuICBpbnNlcnRCZWZvcmU/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBzdGFnZT86IExpc3RzU3VwcG9ydFR5cGVzLlN1cHBvcnRDYXNlU3RhdHVzU3RhZ2U7XG4gIGNhc2VPbkhvbGQ/OiBib29sZWFuO1xuICBhdXRvQ2xvc2VDYXNlPzogYm9vbGVhbjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGlzSW5hY3RpdmU/OiBib29sZWFuO1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU3VwcG9ydENhc2VTdGF0dXNQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgdGhpcy5pbnNlcnRCZWZvcmUgPSBwcm9wcy5pbnNlcnRCZWZvcmU7XG4gICAgdGhpcy5zdGFnZSA9IHByb3BzLnN0YWdlO1xuICAgIHRoaXMuY2FzZU9uSG9sZCA9IHByb3BzLmNhc2VPbkhvbGQ7XG4gICAgdGhpcy5hdXRvQ2xvc2VDYXNlID0gcHJvcHMuYXV0b0Nsb3NlQ2FzZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgdGhpcy5pc0luYWN0aXZlID0gcHJvcHMuaXNJbmFjdGl2ZTtcbiAgICB0aGlzLmludGVybmFsSWQgPSBwcm9wcy5pbnRlcm5hbElkO1xuICAgIHRoaXMuZXh0ZXJuYWxJZCA9IHByb3BzLmV4dGVybmFsSWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgSXNzdWVQcm9wcyA9IHtcbiAgY3VzdG9tRm9ybT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGlzc3VlTnVtYmVyPzogc3RyaW5nO1xuICBjcmVhdGVkRGF0ZT86IHN0cmluZztcbiAgaXNzdWVUeXBlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgcHJvZHVjdD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIG1vZHVsZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGl0ZW0/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBwcm9kdWN0VGVhbT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHNvdXJjZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHJlcG9ydGVkQnk/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICByZXByb2R1Y2U/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICB2ZXJzaW9uQnJva2VuPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgYnVpbGRCcm9rZW4/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICB2ZXJzaW9uVGFyZ2V0PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgYnVpbGRUYXJnZXQ/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICB2ZXJzaW9uRml4ZWQ/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBidWlsZEZpeGVkPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgc2V2ZXJpdHk/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBwcmlvcml0eT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGlzU2hvd1N0b3BwZXI/OiBib29sZWFuO1xuICBhc3NpZ25lZD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHJldmlld2VyPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgaXNSZXZpZXdlZD86IGJvb2xlYW47XG4gIGlzc3VlU3RhdHVzPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgbGFzdE1vZGlmaWVkRGF0ZT86IHN0cmluZztcbiAgaXNzdWVUYWdzTGlzdD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWZMaXN0O1xuICBpc3N1ZUFic3RyYWN0Pzogc3RyaW5nO1xuICBuZXdEZXRhaWxzPzogc3RyaW5nO1xuICBpc093bmVyPzogYm9vbGVhbjtcbiAgdHJhY2tDb2RlPzogTGlzdHNTdXBwb3J0VHlwZXMuSXNzdWVUcmFja0NvZGU7XG4gIGVtYWlsQXNzaWduZWU/OiBib29sZWFuO1xuICBlbWFpbEVtcGxveWVlc0xpc3Q/OiBFbWFpbEVtcGxveWVlc0xpc3Q7XG4gIGVtYWlsQ2VsbHNMaXN0PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZkxpc3Q7XG4gIGV4dGVybmFsQWJzdHJhY3Q/OiBzdHJpbmc7XG4gIGV4dGVybmFsRGV0YWlscz86IHN0cmluZztcbiAgYnJva2VuSW5WZXJzaW9uTGlzdD86IElzc3VlVmVyc2lvbkxpc3Q7XG4gIHRhcmdldFZlcnNpb25MaXN0PzogSXNzdWVWZXJzaW9uTGlzdDtcbiAgZml4ZWRJblZlcnNpb25MaXN0PzogSXNzdWVWZXJzaW9uTGlzdDtcbiAgcmVsYXRlZElzc3Vlc0xpc3Q/OiBJc3N1ZVJlbGF0ZWRJc3N1ZXNMaXN0O1xuICBjdXN0b21GaWVsZExpc3Q/OiBQbGF0Zm9ybUNvcmUuQ3VzdG9tRmllbGRMaXN0O1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xufSAmIFBsYXRmb3JtQ29yZS5SZWNvcmRQcm9wcztcblxuZXhwb3J0IGNsYXNzIElzc3VlIGV4dGVuZHMgUGxhdGZvcm1Db3JlLlJlY29yZCB7XG4gIGN1c3RvbUZvcm0/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBpc3N1ZU51bWJlcj86IHN0cmluZztcbiAgY3JlYXRlZERhdGU/OiBzdHJpbmc7XG4gIGlzc3VlVHlwZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHByb2R1Y3Q/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBtb2R1bGU/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBpdGVtPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgcHJvZHVjdFRlYW0/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBzb3VyY2U/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICByZXBvcnRlZEJ5PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgcmVwcm9kdWNlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgdmVyc2lvbkJyb2tlbj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGJ1aWxkQnJva2VuPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgdmVyc2lvblRhcmdldD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGJ1aWxkVGFyZ2V0PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgdmVyc2lvbkZpeGVkPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgYnVpbGRGaXhlZD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHNldmVyaXR5PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgcHJpb3JpdHk/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBpc1Nob3dTdG9wcGVyPzogYm9vbGVhbjtcbiAgYXNzaWduZWQ/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICByZXZpZXdlcj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGlzUmV2aWV3ZWQ/OiBib29sZWFuO1xuICBpc3N1ZVN0YXR1cz86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGxhc3RNb2RpZmllZERhdGU/OiBzdHJpbmc7XG4gIGlzc3VlVGFnc0xpc3Q/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmTGlzdDtcbiAgaXNzdWVBYnN0cmFjdD86IHN0cmluZztcbiAgbmV3RGV0YWlscz86IHN0cmluZztcbiAgaXNPd25lcj86IGJvb2xlYW47XG4gIHRyYWNrQ29kZT86IExpc3RzU3VwcG9ydFR5cGVzLklzc3VlVHJhY2tDb2RlO1xuICBlbWFpbEFzc2lnbmVlPzogYm9vbGVhbjtcbiAgZW1haWxFbXBsb3llZXNMaXN0PzogRW1haWxFbXBsb3llZXNMaXN0O1xuICBlbWFpbENlbGxzTGlzdD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWZMaXN0O1xuICBleHRlcm5hbEFic3RyYWN0Pzogc3RyaW5nO1xuICBleHRlcm5hbERldGFpbHM/OiBzdHJpbmc7XG4gIGJyb2tlbkluVmVyc2lvbkxpc3Q/OiBJc3N1ZVZlcnNpb25MaXN0O1xuICB0YXJnZXRWZXJzaW9uTGlzdD86IElzc3VlVmVyc2lvbkxpc3Q7XG4gIGZpeGVkSW5WZXJzaW9uTGlzdD86IElzc3VlVmVyc2lvbkxpc3Q7XG4gIHJlbGF0ZWRJc3N1ZXNMaXN0PzogSXNzdWVSZWxhdGVkSXNzdWVzTGlzdDtcbiAgY3VzdG9tRmllbGRMaXN0PzogUGxhdGZvcm1Db3JlLkN1c3RvbUZpZWxkTGlzdDtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgZXh0ZXJuYWxJZD86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IElzc3VlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmN1c3RvbUZvcm0gPSBwcm9wcy5jdXN0b21Gb3JtO1xuICAgIHRoaXMuaXNzdWVOdW1iZXIgPSBwcm9wcy5pc3N1ZU51bWJlcjtcbiAgICB0aGlzLmNyZWF0ZWREYXRlID0gcHJvcHMuY3JlYXRlZERhdGU7XG4gICAgdGhpcy5pc3N1ZVR5cGUgPSBwcm9wcy5pc3N1ZVR5cGU7XG4gICAgdGhpcy5wcm9kdWN0ID0gcHJvcHMucHJvZHVjdDtcbiAgICB0aGlzLm1vZHVsZSA9IHByb3BzLm1vZHVsZTtcbiAgICB0aGlzLml0ZW0gPSBwcm9wcy5pdGVtO1xuICAgIHRoaXMucHJvZHVjdFRlYW0gPSBwcm9wcy5wcm9kdWN0VGVhbTtcbiAgICB0aGlzLnNvdXJjZSA9IHByb3BzLnNvdXJjZTtcbiAgICB0aGlzLnJlcG9ydGVkQnkgPSBwcm9wcy5yZXBvcnRlZEJ5O1xuICAgIHRoaXMucmVwcm9kdWNlID0gcHJvcHMucmVwcm9kdWNlO1xuICAgIHRoaXMudmVyc2lvbkJyb2tlbiA9IHByb3BzLnZlcnNpb25Ccm9rZW47XG4gICAgdGhpcy5idWlsZEJyb2tlbiA9IHByb3BzLmJ1aWxkQnJva2VuO1xuICAgIHRoaXMudmVyc2lvblRhcmdldCA9IHByb3BzLnZlcnNpb25UYXJnZXQ7XG4gICAgdGhpcy5idWlsZFRhcmdldCA9IHByb3BzLmJ1aWxkVGFyZ2V0O1xuICAgIHRoaXMudmVyc2lvbkZpeGVkID0gcHJvcHMudmVyc2lvbkZpeGVkO1xuICAgIHRoaXMuYnVpbGRGaXhlZCA9IHByb3BzLmJ1aWxkRml4ZWQ7XG4gICAgdGhpcy5zZXZlcml0eSA9IHByb3BzLnNldmVyaXR5O1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcm9wcy5wcmlvcml0eTtcbiAgICB0aGlzLmlzU2hvd1N0b3BwZXIgPSBwcm9wcy5pc1Nob3dTdG9wcGVyO1xuICAgIHRoaXMuYXNzaWduZWQgPSBwcm9wcy5hc3NpZ25lZDtcbiAgICB0aGlzLnJldmlld2VyID0gcHJvcHMucmV2aWV3ZXI7XG4gICAgdGhpcy5pc1Jldmlld2VkID0gcHJvcHMuaXNSZXZpZXdlZDtcbiAgICB0aGlzLmlzc3VlU3RhdHVzID0gcHJvcHMuaXNzdWVTdGF0dXM7XG4gICAgdGhpcy5sYXN0TW9kaWZpZWREYXRlID0gcHJvcHMubGFzdE1vZGlmaWVkRGF0ZTtcbiAgICB0aGlzLmlzc3VlVGFnc0xpc3QgPSBwcm9wcy5pc3N1ZVRhZ3NMaXN0O1xuICAgIHRoaXMuaXNzdWVBYnN0cmFjdCA9IHByb3BzLmlzc3VlQWJzdHJhY3Q7XG4gICAgdGhpcy5uZXdEZXRhaWxzID0gcHJvcHMubmV3RGV0YWlscztcbiAgICB0aGlzLmlzT3duZXIgPSBwcm9wcy5pc093bmVyO1xuICAgIHRoaXMudHJhY2tDb2RlID0gcHJvcHMudHJhY2tDb2RlO1xuICAgIHRoaXMuZW1haWxBc3NpZ25lZSA9IHByb3BzLmVtYWlsQXNzaWduZWU7XG4gICAgdGhpcy5lbWFpbEVtcGxveWVlc0xpc3QgPSBwcm9wcy5lbWFpbEVtcGxveWVlc0xpc3Q7XG4gICAgdGhpcy5lbWFpbENlbGxzTGlzdCA9IHByb3BzLmVtYWlsQ2VsbHNMaXN0O1xuICAgIHRoaXMuZXh0ZXJuYWxBYnN0cmFjdCA9IHByb3BzLmV4dGVybmFsQWJzdHJhY3Q7XG4gICAgdGhpcy5leHRlcm5hbERldGFpbHMgPSBwcm9wcy5leHRlcm5hbERldGFpbHM7XG4gICAgdGhpcy5icm9rZW5JblZlcnNpb25MaXN0ID0gcHJvcHMuYnJva2VuSW5WZXJzaW9uTGlzdDtcbiAgICB0aGlzLnRhcmdldFZlcnNpb25MaXN0ID0gcHJvcHMudGFyZ2V0VmVyc2lvbkxpc3Q7XG4gICAgdGhpcy5maXhlZEluVmVyc2lvbkxpc3QgPSBwcm9wcy5maXhlZEluVmVyc2lvbkxpc3Q7XG4gICAgdGhpcy5yZWxhdGVkSXNzdWVzTGlzdCA9IHByb3BzLnJlbGF0ZWRJc3N1ZXNMaXN0O1xuICAgIHRoaXMuY3VzdG9tRmllbGRMaXN0ID0gcHJvcHMuY3VzdG9tRmllbGRMaXN0O1xuICAgIHRoaXMuaW50ZXJuYWxJZCA9IHByb3BzLmludGVybmFsSWQ7XG4gICAgdGhpcy5leHRlcm5hbElkID0gcHJvcHMuZXh0ZXJuYWxJZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBJc3N1ZVNlYXJjaFJvd1Byb3BzID0ge1xuICBiYXNpYz86IFBsYXRmb3JtQ29tbW9uLklzc3VlU2VhcmNoUm93QmFzaWM7XG4gIGNhc2VKb2luPzogUGxhdGZvcm1Db21tb24uU3VwcG9ydENhc2VTZWFyY2hSb3dCYXNpYztcbiAgZW1wbG95ZWVKb2luPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hSb3dCYXNpYztcbiAgZmlsZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5GaWxlU2VhcmNoUm93QmFzaWM7XG4gIHByb2R1Y3RUZWFtSm9pbj86IFBsYXRmb3JtQ29tbW9uLkVudGl0eUdyb3VwU2VhcmNoUm93QmFzaWM7XG4gIHVzZXJKb2luPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hSb3dCYXNpYztcbiAgdXNlck5vdGVzSm9pbj86IFBsYXRmb3JtQ29tbW9uLk5vdGVTZWFyY2hSb3dCYXNpYztcbiAgY3VzdG9tU2VhcmNoSm9pbj86IFBsYXRmb3JtQ29tbW9uLkN1c3RvbVNlYXJjaFJvd0Jhc2ljW107XG59O1xuXG5leHBvcnQgY2xhc3MgSXNzdWVTZWFyY2hSb3cgZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuU2VhcmNoUm93IHtcbiAgYmFzaWM/OiBQbGF0Zm9ybUNvbW1vbi5Jc3N1ZVNlYXJjaFJvd0Jhc2ljO1xuICBjYXNlSm9pbj86IFBsYXRmb3JtQ29tbW9uLlN1cHBvcnRDYXNlU2VhcmNoUm93QmFzaWM7XG4gIGVtcGxveWVlSm9pbj86IFBsYXRmb3JtQ29tbW9uLkVtcGxveWVlU2VhcmNoUm93QmFzaWM7XG4gIGZpbGVKb2luPzogUGxhdGZvcm1Db21tb24uRmlsZVNlYXJjaFJvd0Jhc2ljO1xuICBwcm9kdWN0VGVhbUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbnRpdHlHcm91cFNlYXJjaFJvd0Jhc2ljO1xuICB1c2VySm9pbj86IFBsYXRmb3JtQ29tbW9uLkVtcGxveWVlU2VhcmNoUm93QmFzaWM7XG4gIHVzZXJOb3Rlc0pvaW4/OiBQbGF0Zm9ybUNvbW1vbi5Ob3RlU2VhcmNoUm93QmFzaWM7XG4gIGN1c3RvbVNlYXJjaEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5DdXN0b21TZWFyY2hSb3dCYXNpY1tdO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogSXNzdWVTZWFyY2hSb3dQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuYmFzaWMgPSBwcm9wcy5iYXNpYztcbiAgICB0aGlzLmNhc2VKb2luID0gcHJvcHMuY2FzZUpvaW47XG4gICAgdGhpcy5lbXBsb3llZUpvaW4gPSBwcm9wcy5lbXBsb3llZUpvaW47XG4gICAgdGhpcy5maWxlSm9pbiA9IHByb3BzLmZpbGVKb2luO1xuICAgIHRoaXMucHJvZHVjdFRlYW1Kb2luID0gcHJvcHMucHJvZHVjdFRlYW1Kb2luO1xuICAgIHRoaXMudXNlckpvaW4gPSBwcm9wcy51c2VySm9pbjtcbiAgICB0aGlzLnVzZXJOb3Rlc0pvaW4gPSBwcm9wcy51c2VyTm90ZXNKb2luO1xuICAgIHRoaXMuY3VzdG9tU2VhcmNoSm9pbiA9IHByb3BzLmN1c3RvbVNlYXJjaEpvaW47XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3VwcG9ydENhc2VFc2NhbGF0ZVRvTGlzdFByb3BzID0ge1xuICBlc2NhbGF0ZVRvPzogU3VwcG9ydENhc2VFc2NhbGF0ZVRvW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIFN1cHBvcnRDYXNlRXNjYWxhdGVUb0xpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBlc2NhbGF0ZVRvPzogU3VwcG9ydENhc2VFc2NhbGF0ZVRvW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU3VwcG9ydENhc2VFc2NhbGF0ZVRvTGlzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5lc2NhbGF0ZVRvID0gcHJvcHMuZXNjYWxhdGVUbztcbiAgICB0aGlzLnJlcGxhY2VBbGwgPSBwcm9wcy5yZXBsYWNlQWxsO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFN1cHBvcnRDYXNlT3JpZ2luUHJvcHMgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGluc2VydEJlZm9yZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBpc0luYWN0aXZlPzogYm9vbGVhbjtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgZXh0ZXJuYWxJZD86IHN0cmluZztcbn0gJiBQbGF0Zm9ybUNvcmUuUmVjb3JkUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBTdXBwb3J0Q2FzZU9yaWdpbiBleHRlbmRzIFBsYXRmb3JtQ29yZS5SZWNvcmQge1xuICBuYW1lPzogc3RyaW5nO1xuICBpbnNlcnRCZWZvcmU/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTdXBwb3J0Q2FzZU9yaWdpblByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICB0aGlzLmluc2VydEJlZm9yZSA9IHByb3BzLmluc2VydEJlZm9yZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgdGhpcy5pc0luYWN0aXZlID0gcHJvcHMuaXNJbmFjdGl2ZTtcbiAgICB0aGlzLmludGVybmFsSWQgPSBwcm9wcy5pbnRlcm5hbElkO1xuICAgIHRoaXMuZXh0ZXJuYWxJZCA9IHByb3BzLmV4dGVybmFsSWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgSXNzdWVSZWxhdGVkSXNzdWVzUHJvcHMgPSB7XG4gIHJlbGF0aW9uc2hpcD86IExpc3RzU3VwcG9ydFR5cGVzLklzc3VlUmVsYXRpb25zaGlwO1xuICBpc3N1ZU51bWJlcj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHJlbGF0aW9uc2hpcENvbW1lbnQ/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgSXNzdWVSZWxhdGVkSXNzdWVzIGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgcmVsYXRpb25zaGlwPzogTGlzdHNTdXBwb3J0VHlwZXMuSXNzdWVSZWxhdGlvbnNoaXA7XG4gIGlzc3VlTnVtYmVyPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgcmVsYXRpb25zaGlwQ29tbWVudD86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IElzc3VlUmVsYXRlZElzc3Vlc1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5yZWxhdGlvbnNoaXAgPSBwcm9wcy5yZWxhdGlvbnNoaXA7XG4gICAgdGhpcy5pc3N1ZU51bWJlciA9IHByb3BzLmlzc3VlTnVtYmVyO1xuICAgIHRoaXMucmVsYXRpb25zaGlwQ29tbWVudCA9IHByb3BzLnJlbGF0aW9uc2hpcENvbW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgSXNzdWVTZWFyY2hBZHZhbmNlZFByb3BzID0ge1xuICBjcml0ZXJpYT86IElzc3VlU2VhcmNoO1xuICBjb2x1bW5zPzogSXNzdWVTZWFyY2hSb3c7XG4gIHNhdmVkU2VhcmNoSWQ/OiBzdHJpbmc7XG4gIHNhdmVkU2VhcmNoU2NyaXB0SWQ/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgSXNzdWVTZWFyY2hBZHZhbmNlZCBleHRlbmRzIFBsYXRmb3JtQ29yZS5TZWFyY2hSZWNvcmQge1xuICBjcml0ZXJpYT86IElzc3VlU2VhcmNoO1xuICBjb2x1bW5zPzogSXNzdWVTZWFyY2hSb3c7XG4gIHNhdmVkU2VhcmNoSWQ/OiBzdHJpbmc7XG4gIHNhdmVkU2VhcmNoU2NyaXB0SWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJc3N1ZVNlYXJjaEFkdmFuY2VkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmNyaXRlcmlhID0gcHJvcHMuY3JpdGVyaWE7XG4gICAgdGhpcy5jb2x1bW5zID0gcHJvcHMuY29sdW1ucztcbiAgICB0aGlzLnNhdmVkU2VhcmNoSWQgPSBwcm9wcy5zYXZlZFNlYXJjaElkO1xuICAgIHRoaXMuc2F2ZWRTZWFyY2hTY3JpcHRJZCA9IHByb3BzLnNhdmVkU2VhcmNoU2NyaXB0SWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVG9waWNTb2x1dGlvblByb3BzID0ge1xuICBzb2x1dGlvbj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgVG9waWNTb2x1dGlvbiBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHNvbHV0aW9uPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IFRvcGljU29sdXRpb25Qcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc29sdXRpb24gPSBwcm9wcy5zb2x1dGlvbjtcbiAgICB0aGlzLm1lc3NhZ2UgPSBwcm9wcy5tZXNzYWdlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIElzc3VlUmVsYXRlZElzc3Vlc0xpc3RQcm9wcyA9IHtcbiAgaXNzdWVSZWxhdGVkSXNzdWVzPzogSXNzdWVSZWxhdGVkSXNzdWVzW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIElzc3VlUmVsYXRlZElzc3Vlc0xpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBpc3N1ZVJlbGF0ZWRJc3N1ZXM/OiBJc3N1ZVJlbGF0ZWRJc3N1ZXNbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJc3N1ZVJlbGF0ZWRJc3N1ZXNMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmlzc3VlUmVsYXRlZElzc3VlcyA9IHByb3BzLmlzc3VlUmVsYXRlZElzc3VlcztcbiAgICB0aGlzLnJlcGxhY2VBbGwgPSBwcm9wcy5yZXBsYWNlQWxsO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFRvcGljU2VhcmNoQWR2YW5jZWRQcm9wcyA9IHtcbiAgY3JpdGVyaWE/OiBUb3BpY1NlYXJjaDtcbiAgY29sdW1ucz86IFRvcGljU2VhcmNoUm93O1xuICBzYXZlZFNlYXJjaElkPzogc3RyaW5nO1xuICBzYXZlZFNlYXJjaFNjcmlwdElkPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIFRvcGljU2VhcmNoQWR2YW5jZWQgZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuU2VhcmNoUmVjb3JkIHtcbiAgY3JpdGVyaWE/OiBUb3BpY1NlYXJjaDtcbiAgY29sdW1ucz86IFRvcGljU2VhcmNoUm93O1xuICBzYXZlZFNlYXJjaElkPzogc3RyaW5nO1xuICBzYXZlZFNlYXJjaFNjcmlwdElkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVG9waWNTZWFyY2hBZHZhbmNlZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5jcml0ZXJpYSA9IHByb3BzLmNyaXRlcmlhO1xuICAgIHRoaXMuY29sdW1ucyA9IHByb3BzLmNvbHVtbnM7XG4gICAgdGhpcy5zYXZlZFNlYXJjaElkID0gcHJvcHMuc2F2ZWRTZWFyY2hJZDtcbiAgICB0aGlzLnNhdmVkU2VhcmNoU2NyaXB0SWQgPSBwcm9wcy5zYXZlZFNlYXJjaFNjcmlwdElkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIElzc3VlVmVyc2lvbkxpc3RQcm9wcyA9IHtcbiAgaXNzdWVWZXJzaW9uPzogSXNzdWVWZXJzaW9uW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIElzc3VlVmVyc2lvbkxpc3QgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBpc3N1ZVZlcnNpb24/OiBJc3N1ZVZlcnNpb25bXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJc3N1ZVZlcnNpb25MaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmlzc3VlVmVyc2lvbiA9IHByb3BzLmlzc3VlVmVyc2lvbjtcbiAgICB0aGlzLnJlcGxhY2VBbGwgPSBwcm9wcy5yZXBsYWNlQWxsO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFN1cHBvcnRDYXNlVHlwZVByb3BzID0ge1xuICBuYW1lPzogc3RyaW5nO1xuICBpbnNlcnRCZWZvcmU/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG59ICYgUGxhdGZvcm1Db3JlLlJlY29yZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgU3VwcG9ydENhc2VUeXBlIGV4dGVuZHMgUGxhdGZvcm1Db3JlLlJlY29yZCB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGluc2VydEJlZm9yZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBpc0luYWN0aXZlPzogYm9vbGVhbjtcbiAgaW50ZXJuYWxJZD86IHN0cmluZztcbiAgZXh0ZXJuYWxJZD86IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJvcHM6IFN1cHBvcnRDYXNlVHlwZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICB0aGlzLmluc2VydEJlZm9yZSA9IHByb3BzLmluc2VydEJlZm9yZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgdGhpcy5pc0luYWN0aXZlID0gcHJvcHMuaXNJbmFjdGl2ZTtcbiAgICB0aGlzLmludGVybmFsSWQgPSBwcm9wcy5pbnRlcm5hbElkO1xuICAgIHRoaXMuZXh0ZXJuYWxJZCA9IHByb3BzLmV4dGVybmFsSWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3VwcG9ydENhc2VTb2x1dGlvbnNQcm9wcyA9IHtcbiAgc29sdXRpb24/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICBkYXRlQXBwbGllZD86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBTdXBwb3J0Q2FzZVNvbHV0aW9ucyBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHNvbHV0aW9uPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgZGF0ZUFwcGxpZWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTdXBwb3J0Q2FzZVNvbHV0aW9uc1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5zb2x1dGlvbiA9IHByb3BzLnNvbHV0aW9uO1xuICAgIHRoaXMubWVzc2FnZSA9IHByb3BzLm1lc3NhZ2U7XG4gICAgdGhpcy5kYXRlQXBwbGllZCA9IHByb3BzLmRhdGVBcHBsaWVkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNvbHV0aW9uVG9waWNzUHJvcHMgPSB7XG4gIHRvcGljPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbn07XG5cbmV4cG9ydCBjbGFzcyBTb2x1dGlvblRvcGljcyBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHRvcGljPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNvbHV0aW9uVG9waWNzUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnRvcGljID0gcHJvcHMudG9waWM7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3VwcG9ydENhc2VFc2NhbGF0ZVRvUHJvcHMgPSB7XG4gIGVzY2FsYXRlZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBwaG9uZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBTdXBwb3J0Q2FzZUVzY2FsYXRlVG8gZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBlc2NhbGF0ZWU/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBlbWFpbD86IHN0cmluZztcbiAgcGhvbmU/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTdXBwb3J0Q2FzZUVzY2FsYXRlVG9Qcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZXNjYWxhdGVlID0gcHJvcHMuZXNjYWxhdGVlO1xuICAgIHRoaXMuZW1haWwgPSBwcm9wcy5lbWFpbDtcbiAgICB0aGlzLnBob25lID0gcHJvcHMucGhvbmU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU29sdXRpb25Ub3BpY3NMaXN0UHJvcHMgPSB7XG4gIHRvcGljcz86IFNvbHV0aW9uVG9waWNzW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIFNvbHV0aW9uVG9waWNzTGlzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHRvcGljcz86IFNvbHV0aW9uVG9waWNzW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU29sdXRpb25Ub3BpY3NMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnRvcGljcyA9IHByb3BzLnRvcGljcztcbiAgICB0aGlzLnJlcGxhY2VBbGwgPSBwcm9wcy5yZXBsYWNlQWxsO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFRvcGljU2VhcmNoUm93UHJvcHMgPSB7XG4gIGJhc2ljPzogUGxhdGZvcm1Db21tb24uVG9waWNTZWFyY2hSb3dCYXNpYztcbiAgc29sdXRpb25Kb2luPzogUGxhdGZvcm1Db21tb24uU29sdXRpb25TZWFyY2hSb3dCYXNpYztcbiAgdXNlckpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaFJvd0Jhc2ljO1xufTtcblxuZXhwb3J0IGNsYXNzIFRvcGljU2VhcmNoUm93IGV4dGVuZHMgUGxhdGZvcm1Db3JlLlNlYXJjaFJvdyB7XG4gIGJhc2ljPzogUGxhdGZvcm1Db21tb24uVG9waWNTZWFyY2hSb3dCYXNpYztcbiAgc29sdXRpb25Kb2luPzogUGxhdGZvcm1Db21tb24uU29sdXRpb25TZWFyY2hSb3dCYXNpYztcbiAgdXNlckpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaFJvd0Jhc2ljO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVG9waWNTZWFyY2hSb3dQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuYmFzaWMgPSBwcm9wcy5iYXNpYztcbiAgICB0aGlzLnNvbHV0aW9uSm9pbiA9IHByb3BzLnNvbHV0aW9uSm9pbjtcbiAgICB0aGlzLnVzZXJKb2luID0gcHJvcHMudXNlckpvaW47XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU29sdXRpb25zUHJvcHMgPSB7XG4gIHNvbHV0aW9uPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgbWVzc2FnZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBTb2x1dGlvbnMgZXh0ZW5kcyBTb2FwTWFwcGluZ0Jhc2Uge1xuICBzb2x1dGlvbj86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTb2x1dGlvbnNQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc29sdXRpb24gPSBwcm9wcy5zb2x1dGlvbjtcbiAgICB0aGlzLm1lc3NhZ2UgPSBwcm9wcy5tZXNzYWdlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEVtYWlsRW1wbG95ZWVzTGlzdFByb3BzID0ge1xuICBlbWFpbEVtcGxveWVlczogUGxhdGZvcm1Db3JlLlJlY29yZFJlZltdO1xufTtcblxuZXhwb3J0IGNsYXNzIEVtYWlsRW1wbG95ZWVzTGlzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIGVtYWlsRW1wbG95ZWVzOiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFbWFpbEVtcGxveWVlc0xpc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZW1haWxFbXBsb3llZXMgPSBwcm9wcy5lbWFpbEVtcGxveWVlcztcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTdXBwb3J0Q2FzZVNlYXJjaFJvd1Byb3BzID0ge1xuICBiYXNpYz86IFBsYXRmb3JtQ29tbW9uLlN1cHBvcnRDYXNlU2VhcmNoUm93QmFzaWM7XG4gIGNvbXBhbnlKb2luPzogUGxhdGZvcm1Db21tb24uRW50aXR5U2VhcmNoUm93QmFzaWM7XG4gIGNvbnRhY3RKb2luPzogUGxhdGZvcm1Db21tb24uQ29udGFjdFNlYXJjaFJvd0Jhc2ljO1xuICBjdXN0b21lckpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5DdXN0b21lclNlYXJjaFJvd0Jhc2ljO1xuICBlbXBsb3llZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaFJvd0Jhc2ljO1xuICBmaWxlSm9pbj86IFBsYXRmb3JtQ29tbW9uLkZpbGVTZWFyY2hSb3dCYXNpYztcbiAgaXNzdWVKb2luPzogUGxhdGZvcm1Db21tb24uSXNzdWVTZWFyY2hSb3dCYXNpYztcbiAgaXRlbUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5JdGVtU2VhcmNoUm93QmFzaWM7XG4gIG1lc3NhZ2VzSm9pbj86IFBsYXRmb3JtQ29tbW9uLk1lc3NhZ2VTZWFyY2hSb3dCYXNpYztcbiAgdGltZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5UaW1lQmlsbFNlYXJjaFJvd0Jhc2ljO1xuICB0cmFuc2FjdGlvbkpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5UcmFuc2FjdGlvblNlYXJjaFJvd0Jhc2ljO1xuICB1c2VySm9pbj86IFBsYXRmb3JtQ29tbW9uLkVtcGxveWVlU2VhcmNoUm93QmFzaWM7XG4gIHVzZXJOb3Rlc0pvaW4/OiBQbGF0Zm9ybUNvbW1vbi5Ob3RlU2VhcmNoUm93QmFzaWM7XG4gIGN1c3RvbVNlYXJjaEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5DdXN0b21TZWFyY2hSb3dCYXNpY1tdO1xufTtcblxuZXhwb3J0IGNsYXNzIFN1cHBvcnRDYXNlU2VhcmNoUm93IGV4dGVuZHMgUGxhdGZvcm1Db3JlLlNlYXJjaFJvdyB7XG4gIGJhc2ljPzogUGxhdGZvcm1Db21tb24uU3VwcG9ydENhc2VTZWFyY2hSb3dCYXNpYztcbiAgY29tcGFueUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbnRpdHlTZWFyY2hSb3dCYXNpYztcbiAgY29udGFjdEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5Db250YWN0U2VhcmNoUm93QmFzaWM7XG4gIGN1c3RvbWVySm9pbj86IFBsYXRmb3JtQ29tbW9uLkN1c3RvbWVyU2VhcmNoUm93QmFzaWM7XG4gIGVtcGxveWVlSm9pbj86IFBsYXRmb3JtQ29tbW9uLkVtcGxveWVlU2VhcmNoUm93QmFzaWM7XG4gIGZpbGVKb2luPzogUGxhdGZvcm1Db21tb24uRmlsZVNlYXJjaFJvd0Jhc2ljO1xuICBpc3N1ZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5Jc3N1ZVNlYXJjaFJvd0Jhc2ljO1xuICBpdGVtSm9pbj86IFBsYXRmb3JtQ29tbW9uLkl0ZW1TZWFyY2hSb3dCYXNpYztcbiAgbWVzc2FnZXNKb2luPzogUGxhdGZvcm1Db21tb24uTWVzc2FnZVNlYXJjaFJvd0Jhc2ljO1xuICB0aW1lSm9pbj86IFBsYXRmb3JtQ29tbW9uLlRpbWVCaWxsU2VhcmNoUm93QmFzaWM7XG4gIHRyYW5zYWN0aW9uSm9pbj86IFBsYXRmb3JtQ29tbW9uLlRyYW5zYWN0aW9uU2VhcmNoUm93QmFzaWM7XG4gIHVzZXJKb2luPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hSb3dCYXNpYztcbiAgdXNlck5vdGVzSm9pbj86IFBsYXRmb3JtQ29tbW9uLk5vdGVTZWFyY2hSb3dCYXNpYztcbiAgY3VzdG9tU2VhcmNoSm9pbj86IFBsYXRmb3JtQ29tbW9uLkN1c3RvbVNlYXJjaFJvd0Jhc2ljW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTdXBwb3J0Q2FzZVNlYXJjaFJvd1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5iYXNpYyA9IHByb3BzLmJhc2ljO1xuICAgIHRoaXMuY29tcGFueUpvaW4gPSBwcm9wcy5jb21wYW55Sm9pbjtcbiAgICB0aGlzLmNvbnRhY3RKb2luID0gcHJvcHMuY29udGFjdEpvaW47XG4gICAgdGhpcy5jdXN0b21lckpvaW4gPSBwcm9wcy5jdXN0b21lckpvaW47XG4gICAgdGhpcy5lbXBsb3llZUpvaW4gPSBwcm9wcy5lbXBsb3llZUpvaW47XG4gICAgdGhpcy5maWxlSm9pbiA9IHByb3BzLmZpbGVKb2luO1xuICAgIHRoaXMuaXNzdWVKb2luID0gcHJvcHMuaXNzdWVKb2luO1xuICAgIHRoaXMuaXRlbUpvaW4gPSBwcm9wcy5pdGVtSm9pbjtcbiAgICB0aGlzLm1lc3NhZ2VzSm9pbiA9IHByb3BzLm1lc3NhZ2VzSm9pbjtcbiAgICB0aGlzLnRpbWVKb2luID0gcHJvcHMudGltZUpvaW47XG4gICAgdGhpcy50cmFuc2FjdGlvbkpvaW4gPSBwcm9wcy50cmFuc2FjdGlvbkpvaW47XG4gICAgdGhpcy51c2VySm9pbiA9IHByb3BzLnVzZXJKb2luO1xuICAgIHRoaXMudXNlck5vdGVzSm9pbiA9IHByb3BzLnVzZXJOb3Rlc0pvaW47XG4gICAgdGhpcy5jdXN0b21TZWFyY2hKb2luID0gcHJvcHMuY3VzdG9tU2VhcmNoSm9pbjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBUb3BpY1NlYXJjaFByb3BzID0ge1xuICBiYXNpYz86IFBsYXRmb3JtQ29tbW9uLlRvcGljU2VhcmNoQmFzaWM7XG4gIHNvbHV0aW9uSm9pbj86IFBsYXRmb3JtQ29tbW9uLlNvbHV0aW9uU2VhcmNoQmFzaWM7XG4gIHVzZXJKb2luPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hCYXNpYztcbn07XG5cbmV4cG9ydCBjbGFzcyBUb3BpY1NlYXJjaCBleHRlbmRzIFBsYXRmb3JtQ29yZS5TZWFyY2hSZWNvcmQge1xuICBiYXNpYz86IFBsYXRmb3JtQ29tbW9uLlRvcGljU2VhcmNoQmFzaWM7XG4gIHNvbHV0aW9uSm9pbj86IFBsYXRmb3JtQ29tbW9uLlNvbHV0aW9uU2VhcmNoQmFzaWM7XG4gIHVzZXJKb2luPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hCYXNpYztcbiAgY29uc3RydWN0b3IocHJvcHM6IFRvcGljU2VhcmNoUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmJhc2ljID0gcHJvcHMuYmFzaWM7XG4gICAgdGhpcy5zb2x1dGlvbkpvaW4gPSBwcm9wcy5zb2x1dGlvbkpvaW47XG4gICAgdGhpcy51c2VySm9pbiA9IHByb3BzLnVzZXJKb2luO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNvbHV0aW9uU2VhcmNoUm93UHJvcHMgPSB7XG4gIGJhc2ljPzogUGxhdGZvcm1Db21tb24uU29sdXRpb25TZWFyY2hSb3dCYXNpYztcbiAgY2FzZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5TdXBwb3J0Q2FzZVNlYXJjaFJvd0Jhc2ljO1xuICByZWxhdGVkU29sdXRpb25Kb2luPzogUGxhdGZvcm1Db21tb24uU29sdXRpb25TZWFyY2hSb3dCYXNpYztcbiAgdG9waWNKb2luPzogUGxhdGZvcm1Db21tb24uVG9waWNTZWFyY2hSb3dCYXNpYztcbiAgdXNlckpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaFJvd0Jhc2ljO1xuICB1c2VyTm90ZXNKb2luPzogUGxhdGZvcm1Db21tb24uTm90ZVNlYXJjaFJvd0Jhc2ljO1xuICBjdXN0b21TZWFyY2hKb2luPzogUGxhdGZvcm1Db21tb24uQ3VzdG9tU2VhcmNoUm93QmFzaWNbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBTb2x1dGlvblNlYXJjaFJvdyBleHRlbmRzIFBsYXRmb3JtQ29yZS5TZWFyY2hSb3cge1xuICBiYXNpYz86IFBsYXRmb3JtQ29tbW9uLlNvbHV0aW9uU2VhcmNoUm93QmFzaWM7XG4gIGNhc2VKb2luPzogUGxhdGZvcm1Db21tb24uU3VwcG9ydENhc2VTZWFyY2hSb3dCYXNpYztcbiAgcmVsYXRlZFNvbHV0aW9uSm9pbj86IFBsYXRmb3JtQ29tbW9uLlNvbHV0aW9uU2VhcmNoUm93QmFzaWM7XG4gIHRvcGljSm9pbj86IFBsYXRmb3JtQ29tbW9uLlRvcGljU2VhcmNoUm93QmFzaWM7XG4gIHVzZXJKb2luPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hSb3dCYXNpYztcbiAgdXNlck5vdGVzSm9pbj86IFBsYXRmb3JtQ29tbW9uLk5vdGVTZWFyY2hSb3dCYXNpYztcbiAgY3VzdG9tU2VhcmNoSm9pbj86IFBsYXRmb3JtQ29tbW9uLkN1c3RvbVNlYXJjaFJvd0Jhc2ljW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTb2x1dGlvblNlYXJjaFJvd1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5iYXNpYyA9IHByb3BzLmJhc2ljO1xuICAgIHRoaXMuY2FzZUpvaW4gPSBwcm9wcy5jYXNlSm9pbjtcbiAgICB0aGlzLnJlbGF0ZWRTb2x1dGlvbkpvaW4gPSBwcm9wcy5yZWxhdGVkU29sdXRpb25Kb2luO1xuICAgIHRoaXMudG9waWNKb2luID0gcHJvcHMudG9waWNKb2luO1xuICAgIHRoaXMudXNlckpvaW4gPSBwcm9wcy51c2VySm9pbjtcbiAgICB0aGlzLnVzZXJOb3Rlc0pvaW4gPSBwcm9wcy51c2VyTm90ZXNKb2luO1xuICAgIHRoaXMuY3VzdG9tU2VhcmNoSm9pbiA9IHByb3BzLmN1c3RvbVNlYXJjaEpvaW47XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3VwcG9ydENhc2VTb2x1dGlvbnNMaXN0UHJvcHMgPSB7XG4gIHNvbHV0aW9ucz86IFN1cHBvcnRDYXNlU29sdXRpb25zW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIFN1cHBvcnRDYXNlU29sdXRpb25zTGlzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHNvbHV0aW9ucz86IFN1cHBvcnRDYXNlU29sdXRpb25zW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU3VwcG9ydENhc2VTb2x1dGlvbnNMaXN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnNvbHV0aW9ucyA9IHByb3BzLnNvbHV0aW9ucztcbiAgICB0aGlzLnJlcGxhY2VBbGwgPSBwcm9wcy5yZXBsYWNlQWxsO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFN1cHBvcnRDYXNlUHJpb3JpdHlQcm9wcyA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgaW5zZXJ0QmVmb3JlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGlzSW5hY3RpdmU/OiBib29sZWFuO1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xufSAmIFBsYXRmb3JtQ29yZS5SZWNvcmRQcm9wcztcblxuZXhwb3J0IGNsYXNzIFN1cHBvcnRDYXNlUHJpb3JpdHkgZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuUmVjb3JkIHtcbiAgbmFtZT86IHN0cmluZztcbiAgaW5zZXJ0QmVmb3JlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGlzSW5hY3RpdmU/OiBib29sZWFuO1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU3VwcG9ydENhc2VQcmlvcml0eVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICB0aGlzLmluc2VydEJlZm9yZSA9IHByb3BzLmluc2VydEJlZm9yZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgdGhpcy5pc0luYWN0aXZlID0gcHJvcHMuaXNJbmFjdGl2ZTtcbiAgICB0aGlzLmludGVybmFsSWQgPSBwcm9wcy5pbnRlcm5hbElkO1xuICAgIHRoaXMuZXh0ZXJuYWxJZCA9IHByb3BzLmV4dGVybmFsSWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU29sdXRpb25zTGlzdFByb3BzID0ge1xuICBzb2x1dGlvbnM/OiBTb2x1dGlvbnNbXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgU29sdXRpb25zTGlzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHNvbHV0aW9ucz86IFNvbHV0aW9uc1tdO1xuICByZXBsYWNlQWxsPzogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFNvbHV0aW9uc0xpc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc29sdXRpb25zID0gcHJvcHMuc29sdXRpb25zO1xuICAgIHRoaXMucmVwbGFjZUFsbCA9IHByb3BzLnJlcGxhY2VBbGw7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3VwcG9ydENhc2VTZWFyY2hBZHZhbmNlZFByb3BzID0ge1xuICBjcml0ZXJpYT86IFN1cHBvcnRDYXNlU2VhcmNoO1xuICBjb2x1bW5zPzogU3VwcG9ydENhc2VTZWFyY2hSb3c7XG4gIHNhdmVkU2VhcmNoSWQ/OiBzdHJpbmc7XG4gIHNhdmVkU2VhcmNoU2NyaXB0SWQ/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgU3VwcG9ydENhc2VTZWFyY2hBZHZhbmNlZCBleHRlbmRzIFBsYXRmb3JtQ29yZS5TZWFyY2hSZWNvcmQge1xuICBjcml0ZXJpYT86IFN1cHBvcnRDYXNlU2VhcmNoO1xuICBjb2x1bW5zPzogU3VwcG9ydENhc2VTZWFyY2hSb3c7XG4gIHNhdmVkU2VhcmNoSWQ/OiBzdHJpbmc7XG4gIHNhdmVkU2VhcmNoU2NyaXB0SWQ/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTdXBwb3J0Q2FzZVNlYXJjaEFkdmFuY2VkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLmNyaXRlcmlhID0gcHJvcHMuY3JpdGVyaWE7XG4gICAgdGhpcy5jb2x1bW5zID0gcHJvcHMuY29sdW1ucztcbiAgICB0aGlzLnNhdmVkU2VhcmNoSWQgPSBwcm9wcy5zYXZlZFNlYXJjaElkO1xuICAgIHRoaXMuc2F2ZWRTZWFyY2hTY3JpcHRJZCA9IHByb3BzLnNhdmVkU2VhcmNoU2NyaXB0SWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3VwcG9ydENhc2VUaW1lSXRlbUxpc3RQcm9wcyA9IHtcbiAgdGltZUl0ZW0/OiBQbGF0Zm9ybUNvbW1vbi5UaW1lSXRlbVtdO1xuICByZXBsYWNlQWxsPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjbGFzcyBTdXBwb3J0Q2FzZVRpbWVJdGVtTGlzdCBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHRpbWVJdGVtPzogUGxhdGZvcm1Db21tb24uVGltZUl0ZW1bXTtcbiAgcmVwbGFjZUFsbD86IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTdXBwb3J0Q2FzZVRpbWVJdGVtTGlzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy50aW1lSXRlbSA9IHByb3BzLnRpbWVJdGVtO1xuICAgIHRoaXMucmVwbGFjZUFsbCA9IHByb3BzLnJlcGxhY2VBbGw7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgSXNzdWVWZXJzaW9uUHJvcHMgPSB7XG4gIHByaW1hcnk/OiBib29sZWFuO1xuICB2ZXJzaW9uPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgYnVpbGQ/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xufTtcblxuZXhwb3J0IGNsYXNzIElzc3VlVmVyc2lvbiBleHRlbmRzIFNvYXBNYXBwaW5nQmFzZSB7XG4gIHByaW1hcnk/OiBib29sZWFuO1xuICB2ZXJzaW9uPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgYnVpbGQ/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogSXNzdWVWZXJzaW9uUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wc1dpdGhNYXBwaW5nc05hbWUocHJvcHMsIE1BUFBJTkdTX05BTUUpKTtcbiAgICB0aGlzLnByaW1hcnkgPSBwcm9wcy5wcmltYXJ5O1xuICAgIHRoaXMudmVyc2lvbiA9IHByb3BzLnZlcnNpb247XG4gICAgdGhpcy5idWlsZCA9IHByb3BzLmJ1aWxkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNvbHV0aW9uU2VhcmNoUHJvcHMgPSB7XG4gIGJhc2ljPzogUGxhdGZvcm1Db21tb24uU29sdXRpb25TZWFyY2hCYXNpYztcbiAgY2FzZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5TdXBwb3J0Q2FzZVNlYXJjaEJhc2ljO1xuICByZWxhdGVkU29sdXRpb25Kb2luPzogUGxhdGZvcm1Db21tb24uU29sdXRpb25TZWFyY2hCYXNpYztcbiAgdG9waWNKb2luPzogUGxhdGZvcm1Db21tb24uVG9waWNTZWFyY2hCYXNpYztcbiAgdXNlckpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaEJhc2ljO1xuICB1c2VyTm90ZXNKb2luPzogUGxhdGZvcm1Db21tb24uTm90ZVNlYXJjaEJhc2ljO1xuICBjdXN0b21TZWFyY2hKb2luPzogUGxhdGZvcm1Db21tb24uQ3VzdG9tU2VhcmNoSm9pbltdO1xufTtcblxuZXhwb3J0IGNsYXNzIFNvbHV0aW9uU2VhcmNoIGV4dGVuZHMgUGxhdGZvcm1Db3JlLlNlYXJjaFJlY29yZCB7XG4gIGJhc2ljPzogUGxhdGZvcm1Db21tb24uU29sdXRpb25TZWFyY2hCYXNpYztcbiAgY2FzZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5TdXBwb3J0Q2FzZVNlYXJjaEJhc2ljO1xuICByZWxhdGVkU29sdXRpb25Kb2luPzogUGxhdGZvcm1Db21tb24uU29sdXRpb25TZWFyY2hCYXNpYztcbiAgdG9waWNKb2luPzogUGxhdGZvcm1Db21tb24uVG9waWNTZWFyY2hCYXNpYztcbiAgdXNlckpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaEJhc2ljO1xuICB1c2VyTm90ZXNKb2luPzogUGxhdGZvcm1Db21tb24uTm90ZVNlYXJjaEJhc2ljO1xuICBjdXN0b21TZWFyY2hKb2luPzogUGxhdGZvcm1Db21tb24uQ3VzdG9tU2VhcmNoSm9pbltdO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU29sdXRpb25TZWFyY2hQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuYmFzaWMgPSBwcm9wcy5iYXNpYztcbiAgICB0aGlzLmNhc2VKb2luID0gcHJvcHMuY2FzZUpvaW47XG4gICAgdGhpcy5yZWxhdGVkU29sdXRpb25Kb2luID0gcHJvcHMucmVsYXRlZFNvbHV0aW9uSm9pbjtcbiAgICB0aGlzLnRvcGljSm9pbiA9IHByb3BzLnRvcGljSm9pbjtcbiAgICB0aGlzLnVzZXJKb2luID0gcHJvcHMudXNlckpvaW47XG4gICAgdGhpcy51c2VyTm90ZXNKb2luID0gcHJvcHMudXNlck5vdGVzSm9pbjtcbiAgICB0aGlzLmN1c3RvbVNlYXJjaEpvaW4gPSBwcm9wcy5jdXN0b21TZWFyY2hKb2luO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFN1cHBvcnRDYXNlUHJvcHMgPSB7XG4gIGVzY2FsYXRpb25NZXNzYWdlPzogc3RyaW5nO1xuICBsYXN0UmVvcGVuZWREYXRlPzogc3RyaW5nO1xuICBlbmREYXRlPzogc3RyaW5nO1xuICBpbmNvbWluZ01lc3NhZ2U/OiBzdHJpbmc7XG4gIGluc2VydFNvbHV0aW9uPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgb3V0Z29pbmdNZXNzYWdlPzogc3RyaW5nO1xuICBzZWFyY2hTb2x1dGlvbj86IHN0cmluZztcbiAgZW1haWxGb3JtPzogYm9vbGVhbjtcbiAgbmV3U29sdXRpb25Gcm9tTXNnPzogc3RyaW5nO1xuICBpbnRlcm5hbE9ubHk/OiBib29sZWFuO1xuICBjdXN0b21Gb3JtPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGNhc2VOdW1iZXI/OiBzdHJpbmc7XG4gIHN0YXJ0RGF0ZT86IHN0cmluZztcbiAgY3JlYXRlZERhdGU/OiBzdHJpbmc7XG4gIGxhc3RNb2RpZmllZERhdGU/OiBzdHJpbmc7XG4gIGxhc3RNZXNzYWdlRGF0ZT86IHN0cmluZztcbiAgY29tcGFueT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHByb2ZpbGU/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBzdWJzaWRpYXJ5PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgY29udGFjdD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBwaG9uZT86IHN0cmluZztcbiAgcHJvZHVjdD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIG1vZHVsZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGl0ZW0/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBzZXJpYWxOdW1iZXI/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBpbmJvdW5kRW1haWw/OiBzdHJpbmc7XG4gIGlzc3VlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgc3RhdHVzPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIHByaW9yaXR5PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgb3JpZ2luPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgY2F0ZWdvcnk/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBhc3NpZ25lZD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGhlbHBEZXNrPzogYm9vbGVhbjtcbiAgZW1haWxFbXBsb3llZXNMaXN0PzogRW1haWxFbXBsb3llZXNMaXN0O1xuICBlc2NhbGF0ZVRvTGlzdD86IFN1cHBvcnRDYXNlRXNjYWxhdGVUb0xpc3Q7XG4gIHRpbWVJdGVtTGlzdD86IFN1cHBvcnRDYXNlVGltZUl0ZW1MaXN0O1xuICBzb2x1dGlvbnNMaXN0PzogU3VwcG9ydENhc2VTb2x1dGlvbnNMaXN0O1xuICBjdXN0b21GaWVsZExpc3Q/OiBQbGF0Zm9ybUNvcmUuQ3VzdG9tRmllbGRMaXN0O1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xufSAmIFBsYXRmb3JtQ29yZS5SZWNvcmRQcm9wcztcblxuZXhwb3J0IGNsYXNzIFN1cHBvcnRDYXNlIGV4dGVuZHMgUGxhdGZvcm1Db3JlLlJlY29yZCB7XG4gIGVzY2FsYXRpb25NZXNzYWdlPzogc3RyaW5nO1xuICBsYXN0UmVvcGVuZWREYXRlPzogc3RyaW5nO1xuICBlbmREYXRlPzogc3RyaW5nO1xuICBpbmNvbWluZ01lc3NhZ2U/OiBzdHJpbmc7XG4gIGluc2VydFNvbHV0aW9uPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgb3V0Z29pbmdNZXNzYWdlPzogc3RyaW5nO1xuICBzZWFyY2hTb2x1dGlvbj86IHN0cmluZztcbiAgZW1haWxGb3JtPzogYm9vbGVhbjtcbiAgbmV3U29sdXRpb25Gcm9tTXNnPzogc3RyaW5nO1xuICBpbnRlcm5hbE9ubHk/OiBib29sZWFuO1xuICBjdXN0b21Gb3JtPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGNhc2VOdW1iZXI/OiBzdHJpbmc7XG4gIHN0YXJ0RGF0ZT86IHN0cmluZztcbiAgY3JlYXRlZERhdGU/OiBzdHJpbmc7XG4gIGxhc3RNb2RpZmllZERhdGU/OiBzdHJpbmc7XG4gIGxhc3RNZXNzYWdlRGF0ZT86IHN0cmluZztcbiAgY29tcGFueT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIHByb2ZpbGU/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBzdWJzaWRpYXJ5PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgY29udGFjdD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBwaG9uZT86IHN0cmluZztcbiAgcHJvZHVjdD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIG1vZHVsZT86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGl0ZW0/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBzZXJpYWxOdW1iZXI/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBpbmJvdW5kRW1haWw/OiBzdHJpbmc7XG4gIGlzc3VlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgc3RhdHVzPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIHByaW9yaXR5PzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgb3JpZ2luPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgY2F0ZWdvcnk/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBhc3NpZ25lZD86IFBsYXRmb3JtQ29yZS5SZWNvcmRSZWY7XG4gIGhlbHBEZXNrPzogYm9vbGVhbjtcbiAgZW1haWxFbXBsb3llZXNMaXN0PzogRW1haWxFbXBsb3llZXNMaXN0O1xuICBlc2NhbGF0ZVRvTGlzdD86IFN1cHBvcnRDYXNlRXNjYWxhdGVUb0xpc3Q7XG4gIHRpbWVJdGVtTGlzdD86IFN1cHBvcnRDYXNlVGltZUl0ZW1MaXN0O1xuICBzb2x1dGlvbnNMaXN0PzogU3VwcG9ydENhc2VTb2x1dGlvbnNMaXN0O1xuICBjdXN0b21GaWVsZExpc3Q/OiBQbGF0Zm9ybUNvcmUuQ3VzdG9tRmllbGRMaXN0O1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU3VwcG9ydENhc2VQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuZXNjYWxhdGlvbk1lc3NhZ2UgPSBwcm9wcy5lc2NhbGF0aW9uTWVzc2FnZTtcbiAgICB0aGlzLmxhc3RSZW9wZW5lZERhdGUgPSBwcm9wcy5sYXN0UmVvcGVuZWREYXRlO1xuICAgIHRoaXMuZW5kRGF0ZSA9IHByb3BzLmVuZERhdGU7XG4gICAgdGhpcy5pbmNvbWluZ01lc3NhZ2UgPSBwcm9wcy5pbmNvbWluZ01lc3NhZ2U7XG4gICAgdGhpcy5pbnNlcnRTb2x1dGlvbiA9IHByb3BzLmluc2VydFNvbHV0aW9uO1xuICAgIHRoaXMub3V0Z29pbmdNZXNzYWdlID0gcHJvcHMub3V0Z29pbmdNZXNzYWdlO1xuICAgIHRoaXMuc2VhcmNoU29sdXRpb24gPSBwcm9wcy5zZWFyY2hTb2x1dGlvbjtcbiAgICB0aGlzLmVtYWlsRm9ybSA9IHByb3BzLmVtYWlsRm9ybTtcbiAgICB0aGlzLm5ld1NvbHV0aW9uRnJvbU1zZyA9IHByb3BzLm5ld1NvbHV0aW9uRnJvbU1zZztcbiAgICB0aGlzLmludGVybmFsT25seSA9IHByb3BzLmludGVybmFsT25seTtcbiAgICB0aGlzLmN1c3RvbUZvcm0gPSBwcm9wcy5jdXN0b21Gb3JtO1xuICAgIHRoaXMudGl0bGUgPSBwcm9wcy50aXRsZTtcbiAgICB0aGlzLmNhc2VOdW1iZXIgPSBwcm9wcy5jYXNlTnVtYmVyO1xuICAgIHRoaXMuc3RhcnREYXRlID0gcHJvcHMuc3RhcnREYXRlO1xuICAgIHRoaXMuY3JlYXRlZERhdGUgPSBwcm9wcy5jcmVhdGVkRGF0ZTtcbiAgICB0aGlzLmxhc3RNb2RpZmllZERhdGUgPSBwcm9wcy5sYXN0TW9kaWZpZWREYXRlO1xuICAgIHRoaXMubGFzdE1lc3NhZ2VEYXRlID0gcHJvcHMubGFzdE1lc3NhZ2VEYXRlO1xuICAgIHRoaXMuY29tcGFueSA9IHByb3BzLmNvbXBhbnk7XG4gICAgdGhpcy5wcm9maWxlID0gcHJvcHMucHJvZmlsZTtcbiAgICB0aGlzLnN1YnNpZGlhcnkgPSBwcm9wcy5zdWJzaWRpYXJ5O1xuICAgIHRoaXMuY29udGFjdCA9IHByb3BzLmNvbnRhY3Q7XG4gICAgdGhpcy5lbWFpbCA9IHByb3BzLmVtYWlsO1xuICAgIHRoaXMucGhvbmUgPSBwcm9wcy5waG9uZTtcbiAgICB0aGlzLnByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0O1xuICAgIHRoaXMubW9kdWxlID0gcHJvcHMubW9kdWxlO1xuICAgIHRoaXMuaXRlbSA9IHByb3BzLml0ZW07XG4gICAgdGhpcy5zZXJpYWxOdW1iZXIgPSBwcm9wcy5zZXJpYWxOdW1iZXI7XG4gICAgdGhpcy5pbmJvdW5kRW1haWwgPSBwcm9wcy5pbmJvdW5kRW1haWw7XG4gICAgdGhpcy5pc3N1ZSA9IHByb3BzLmlzc3VlO1xuICAgIHRoaXMuc3RhdHVzID0gcHJvcHMuc3RhdHVzO1xuICAgIHRoaXMuaXNJbmFjdGl2ZSA9IHByb3BzLmlzSW5hY3RpdmU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByb3BzLnByaW9yaXR5O1xuICAgIHRoaXMub3JpZ2luID0gcHJvcHMub3JpZ2luO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBwcm9wcy5jYXRlZ29yeTtcbiAgICB0aGlzLmFzc2lnbmVkID0gcHJvcHMuYXNzaWduZWQ7XG4gICAgdGhpcy5oZWxwRGVzayA9IHByb3BzLmhlbHBEZXNrO1xuICAgIHRoaXMuZW1haWxFbXBsb3llZXNMaXN0ID0gcHJvcHMuZW1haWxFbXBsb3llZXNMaXN0O1xuICAgIHRoaXMuZXNjYWxhdGVUb0xpc3QgPSBwcm9wcy5lc2NhbGF0ZVRvTGlzdDtcbiAgICB0aGlzLnRpbWVJdGVtTGlzdCA9IHByb3BzLnRpbWVJdGVtTGlzdDtcbiAgICB0aGlzLnNvbHV0aW9uc0xpc3QgPSBwcm9wcy5zb2x1dGlvbnNMaXN0O1xuICAgIHRoaXMuY3VzdG9tRmllbGRMaXN0ID0gcHJvcHMuY3VzdG9tRmllbGRMaXN0O1xuICAgIHRoaXMuaW50ZXJuYWxJZCA9IHByb3BzLmludGVybmFsSWQ7XG4gICAgdGhpcy5leHRlcm5hbElkID0gcHJvcHMuZXh0ZXJuYWxJZDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBUb3BpY1Byb3BzID0ge1xuICB0aXRsZT86IHN0cmluZztcbiAgcGFyZW50VG9waWM/OiBQbGF0Zm9ybUNvcmUuUmVjb3JkUmVmO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaXNJbmFjdGl2ZT86IGJvb2xlYW47XG4gIGxvbmdEZXNjcmlwdGlvbj86IHN0cmluZztcbiAgc29sdXRpb25MaXN0PzogVG9waWNTb2x1dGlvbkxpc3Q7XG4gIGludGVybmFsSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ/OiBzdHJpbmc7XG59ICYgUGxhdGZvcm1Db3JlLlJlY29yZFByb3BzO1xuXG5leHBvcnQgY2xhc3MgVG9waWMgZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuUmVjb3JkIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHBhcmVudFRvcGljPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGlzSW5hY3RpdmU/OiBib29sZWFuO1xuICBsb25nRGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHNvbHV0aW9uTGlzdD86IFRvcGljU29sdXRpb25MaXN0O1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVG9waWNQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMudGl0bGUgPSBwcm9wcy50aXRsZTtcbiAgICB0aGlzLnBhcmVudFRvcGljID0gcHJvcHMucGFyZW50VG9waWM7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaXNJbmFjdGl2ZSA9IHByb3BzLmlzSW5hY3RpdmU7XG4gICAgdGhpcy5sb25nRGVzY3JpcHRpb24gPSBwcm9wcy5sb25nRGVzY3JpcHRpb247XG4gICAgdGhpcy5zb2x1dGlvbkxpc3QgPSBwcm9wcy5zb2x1dGlvbkxpc3Q7XG4gICAgdGhpcy5pbnRlcm5hbElkID0gcHJvcHMuaW50ZXJuYWxJZDtcbiAgICB0aGlzLmV4dGVybmFsSWQgPSBwcm9wcy5leHRlcm5hbElkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNvbHV0aW9uU2VhcmNoQWR2YW5jZWRQcm9wcyA9IHtcbiAgY3JpdGVyaWE/OiBTb2x1dGlvblNlYXJjaDtcbiAgY29sdW1ucz86IFNvbHV0aW9uU2VhcmNoUm93O1xuICBzYXZlZFNlYXJjaElkPzogc3RyaW5nO1xuICBzYXZlZFNlYXJjaFNjcmlwdElkPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIFNvbHV0aW9uU2VhcmNoQWR2YW5jZWQgZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuU2VhcmNoUmVjb3JkIHtcbiAgY3JpdGVyaWE/OiBTb2x1dGlvblNlYXJjaDtcbiAgY29sdW1ucz86IFNvbHV0aW9uU2VhcmNoUm93O1xuICBzYXZlZFNlYXJjaElkPzogc3RyaW5nO1xuICBzYXZlZFNlYXJjaFNjcmlwdElkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU29sdXRpb25TZWFyY2hBZHZhbmNlZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5jcml0ZXJpYSA9IHByb3BzLmNyaXRlcmlhO1xuICAgIHRoaXMuY29sdW1ucyA9IHByb3BzLmNvbHVtbnM7XG4gICAgdGhpcy5zYXZlZFNlYXJjaElkID0gcHJvcHMuc2F2ZWRTZWFyY2hJZDtcbiAgICB0aGlzLnNhdmVkU2VhcmNoU2NyaXB0SWQgPSBwcm9wcy5zYXZlZFNlYXJjaFNjcmlwdElkO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFN1cHBvcnRDYXNlSXNzdWVQcm9wcyA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgaW5zZXJ0QmVmb3JlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGlzSW5hY3RpdmU/OiBib29sZWFuO1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xufSAmIFBsYXRmb3JtQ29yZS5SZWNvcmRQcm9wcztcblxuZXhwb3J0IGNsYXNzIFN1cHBvcnRDYXNlSXNzdWUgZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuUmVjb3JkIHtcbiAgbmFtZT86IHN0cmluZztcbiAgaW5zZXJ0QmVmb3JlPzogUGxhdGZvcm1Db3JlLlJlY29yZFJlZjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGlzSW5hY3RpdmU/OiBib29sZWFuO1xuICBpbnRlcm5hbElkPzogc3RyaW5nO1xuICBleHRlcm5hbElkPzogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU3VwcG9ydENhc2VJc3N1ZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICB0aGlzLmluc2VydEJlZm9yZSA9IHByb3BzLmluc2VydEJlZm9yZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgdGhpcy5pc0luYWN0aXZlID0gcHJvcHMuaXNJbmFjdGl2ZTtcbiAgICB0aGlzLmludGVybmFsSWQgPSBwcm9wcy5pbnRlcm5hbElkO1xuICAgIHRoaXMuZXh0ZXJuYWxJZCA9IHByb3BzLmV4dGVybmFsSWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgSXNzdWVTZWFyY2hQcm9wcyA9IHtcbiAgYmFzaWM/OiBQbGF0Zm9ybUNvbW1vbi5Jc3N1ZVNlYXJjaEJhc2ljO1xuICBjYXNlSm9pbj86IFBsYXRmb3JtQ29tbW9uLlN1cHBvcnRDYXNlU2VhcmNoQmFzaWM7XG4gIGVtcGxveWVlSm9pbj86IFBsYXRmb3JtQ29tbW9uLkVtcGxveWVlU2VhcmNoQmFzaWM7XG4gIGZpbGVKb2luPzogUGxhdGZvcm1Db21tb24uRmlsZVNlYXJjaEJhc2ljO1xuICBwcm9kdWN0VGVhbUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbnRpdHlHcm91cFNlYXJjaEJhc2ljO1xuICB1c2VySm9pbj86IFBsYXRmb3JtQ29tbW9uLkVtcGxveWVlU2VhcmNoQmFzaWM7XG4gIHVzZXJOb3Rlc0pvaW4/OiBQbGF0Zm9ybUNvbW1vbi5Ob3RlU2VhcmNoQmFzaWM7XG4gIGN1c3RvbVNlYXJjaEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5DdXN0b21TZWFyY2hKb2luW107XG59O1xuXG5leHBvcnQgY2xhc3MgSXNzdWVTZWFyY2ggZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuU2VhcmNoUmVjb3JkIHtcbiAgYmFzaWM/OiBQbGF0Zm9ybUNvbW1vbi5Jc3N1ZVNlYXJjaEJhc2ljO1xuICBjYXNlSm9pbj86IFBsYXRmb3JtQ29tbW9uLlN1cHBvcnRDYXNlU2VhcmNoQmFzaWM7XG4gIGVtcGxveWVlSm9pbj86IFBsYXRmb3JtQ29tbW9uLkVtcGxveWVlU2VhcmNoQmFzaWM7XG4gIGZpbGVKb2luPzogUGxhdGZvcm1Db21tb24uRmlsZVNlYXJjaEJhc2ljO1xuICBwcm9kdWN0VGVhbUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbnRpdHlHcm91cFNlYXJjaEJhc2ljO1xuICB1c2VySm9pbj86IFBsYXRmb3JtQ29tbW9uLkVtcGxveWVlU2VhcmNoQmFzaWM7XG4gIHVzZXJOb3Rlc0pvaW4/OiBQbGF0Zm9ybUNvbW1vbi5Ob3RlU2VhcmNoQmFzaWM7XG4gIGN1c3RvbVNlYXJjaEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5DdXN0b21TZWFyY2hKb2luW107XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJc3N1ZVNlYXJjaFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHNXaXRoTWFwcGluZ3NOYW1lKHByb3BzLCBNQVBQSU5HU19OQU1FKSk7XG4gICAgdGhpcy5iYXNpYyA9IHByb3BzLmJhc2ljO1xuICAgIHRoaXMuY2FzZUpvaW4gPSBwcm9wcy5jYXNlSm9pbjtcbiAgICB0aGlzLmVtcGxveWVlSm9pbiA9IHByb3BzLmVtcGxveWVlSm9pbjtcbiAgICB0aGlzLmZpbGVKb2luID0gcHJvcHMuZmlsZUpvaW47XG4gICAgdGhpcy5wcm9kdWN0VGVhbUpvaW4gPSBwcm9wcy5wcm9kdWN0VGVhbUpvaW47XG4gICAgdGhpcy51c2VySm9pbiA9IHByb3BzLnVzZXJKb2luO1xuICAgIHRoaXMudXNlck5vdGVzSm9pbiA9IHByb3BzLnVzZXJOb3Rlc0pvaW47XG4gICAgdGhpcy5jdXN0b21TZWFyY2hKb2luID0gcHJvcHMuY3VzdG9tU2VhcmNoSm9pbjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTdXBwb3J0Q2FzZVNlYXJjaFByb3BzID0ge1xuICBiYXNpYz86IFBsYXRmb3JtQ29tbW9uLlN1cHBvcnRDYXNlU2VhcmNoQmFzaWM7XG4gIGNvbXBhbnlKb2luPzogUGxhdGZvcm1Db21tb24uRW50aXR5U2VhcmNoQmFzaWM7XG4gIGNvbnRhY3RKb2luPzogUGxhdGZvcm1Db21tb24uQ29udGFjdFNlYXJjaEJhc2ljO1xuICBjdXN0b21lckpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5DdXN0b21lclNlYXJjaEJhc2ljO1xuICBlbXBsb3llZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaEJhc2ljO1xuICBmaWxlSm9pbj86IFBsYXRmb3JtQ29tbW9uLkZpbGVTZWFyY2hCYXNpYztcbiAgaXNzdWVKb2luPzogUGxhdGZvcm1Db21tb24uSXNzdWVTZWFyY2hCYXNpYztcbiAgaXRlbUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5JdGVtU2VhcmNoQmFzaWM7XG4gIG1lc3NhZ2VzSm9pbj86IFBsYXRmb3JtQ29tbW9uLk1lc3NhZ2VTZWFyY2hCYXNpYztcbiAgdGltZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5UaW1lQmlsbFNlYXJjaEJhc2ljO1xuICB0cmFuc2FjdGlvbkpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5UcmFuc2FjdGlvblNlYXJjaEJhc2ljO1xuICB1c2VySm9pbj86IFBsYXRmb3JtQ29tbW9uLkVtcGxveWVlU2VhcmNoQmFzaWM7XG4gIHVzZXJOb3Rlc0pvaW4/OiBQbGF0Zm9ybUNvbW1vbi5Ob3RlU2VhcmNoQmFzaWM7XG4gIGN1c3RvbVNlYXJjaEpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5DdXN0b21TZWFyY2hKb2luW107XG59O1xuXG5leHBvcnQgY2xhc3MgU3VwcG9ydENhc2VTZWFyY2ggZXh0ZW5kcyBQbGF0Zm9ybUNvcmUuU2VhcmNoUmVjb3JkIHtcbiAgYmFzaWM/OiBQbGF0Zm9ybUNvbW1vbi5TdXBwb3J0Q2FzZVNlYXJjaEJhc2ljO1xuICBjb21wYW55Sm9pbj86IFBsYXRmb3JtQ29tbW9uLkVudGl0eVNlYXJjaEJhc2ljO1xuICBjb250YWN0Sm9pbj86IFBsYXRmb3JtQ29tbW9uLkNvbnRhY3RTZWFyY2hCYXNpYztcbiAgY3VzdG9tZXJKb2luPzogUGxhdGZvcm1Db21tb24uQ3VzdG9tZXJTZWFyY2hCYXNpYztcbiAgZW1wbG95ZWVKb2luPzogUGxhdGZvcm1Db21tb24uRW1wbG95ZWVTZWFyY2hCYXNpYztcbiAgZmlsZUpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5GaWxlU2VhcmNoQmFzaWM7XG4gIGlzc3VlSm9pbj86IFBsYXRmb3JtQ29tbW9uLklzc3VlU2VhcmNoQmFzaWM7XG4gIGl0ZW1Kb2luPzogUGxhdGZvcm1Db21tb24uSXRlbVNlYXJjaEJhc2ljO1xuICBtZXNzYWdlc0pvaW4/OiBQbGF0Zm9ybUNvbW1vbi5NZXNzYWdlU2VhcmNoQmFzaWM7XG4gIHRpbWVKb2luPzogUGxhdGZvcm1Db21tb24uVGltZUJpbGxTZWFyY2hCYXNpYztcbiAgdHJhbnNhY3Rpb25Kb2luPzogUGxhdGZvcm1Db21tb24uVHJhbnNhY3Rpb25TZWFyY2hCYXNpYztcbiAgdXNlckpvaW4/OiBQbGF0Zm9ybUNvbW1vbi5FbXBsb3llZVNlYXJjaEJhc2ljO1xuICB1c2VyTm90ZXNKb2luPzogUGxhdGZvcm1Db21tb24uTm90ZVNlYXJjaEJhc2ljO1xuICBjdXN0b21TZWFyY2hKb2luPzogUGxhdGZvcm1Db21tb24uQ3VzdG9tU2VhcmNoSm9pbltdO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU3VwcG9ydENhc2VTZWFyY2hQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuYmFzaWMgPSBwcm9wcy5iYXNpYztcbiAgICB0aGlzLmNvbXBhbnlKb2luID0gcHJvcHMuY29tcGFueUpvaW47XG4gICAgdGhpcy5jb250YWN0Sm9pbiA9IHByb3BzLmNvbnRhY3RKb2luO1xuICAgIHRoaXMuY3VzdG9tZXJKb2luID0gcHJvcHMuY3VzdG9tZXJKb2luO1xuICAgIHRoaXMuZW1wbG95ZWVKb2luID0gcHJvcHMuZW1wbG95ZWVKb2luO1xuICAgIHRoaXMuZmlsZUpvaW4gPSBwcm9wcy5maWxlSm9pbjtcbiAgICB0aGlzLmlzc3VlSm9pbiA9IHByb3BzLmlzc3VlSm9pbjtcbiAgICB0aGlzLml0ZW1Kb2luID0gcHJvcHMuaXRlbUpvaW47XG4gICAgdGhpcy5tZXNzYWdlc0pvaW4gPSBwcm9wcy5tZXNzYWdlc0pvaW47XG4gICAgdGhpcy50aW1lSm9pbiA9IHByb3BzLnRpbWVKb2luO1xuICAgIHRoaXMudHJhbnNhY3Rpb25Kb2luID0gcHJvcHMudHJhbnNhY3Rpb25Kb2luO1xuICAgIHRoaXMudXNlckpvaW4gPSBwcm9wcy51c2VySm9pbjtcbiAgICB0aGlzLnVzZXJOb3Rlc0pvaW4gPSBwcm9wcy51c2VyTm90ZXNKb2luO1xuICAgIHRoaXMuY3VzdG9tU2VhcmNoSm9pbiA9IHByb3BzLmN1c3RvbVNlYXJjaEpvaW47XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVG9waWNTb2x1dGlvbkxpc3RQcm9wcyA9IHtcbiAgc29sdXRpb24/OiBUb3BpY1NvbHV0aW9uW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIFRvcGljU29sdXRpb25MaXN0IGV4dGVuZHMgU29hcE1hcHBpbmdCYXNlIHtcbiAgc29sdXRpb24/OiBUb3BpY1NvbHV0aW9uW107XG4gIHJlcGxhY2VBbGw/OiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVG9waWNTb2x1dGlvbkxpc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xuICAgIHRoaXMuc29sdXRpb24gPSBwcm9wcy5zb2x1dGlvbjtcbiAgICB0aGlzLnJlcGxhY2VBbGwgPSBwcm9wcy5yZXBsYWNlQWxsO1xuICB9XG59XG4iXX0=