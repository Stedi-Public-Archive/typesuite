import * as GeneralCommunicationTypes from "./general_communication_types";
import * as PlatformCore from "./platform_core";
import * as DocumentsFilecabinet from "./documents_filecabinet";
import * as PlatformCommon from "./platform_common";

export class NoteSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: NoteSearch;
  columns?: NoteSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: NoteSearchAdvanced) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class MessageMediaItemList {
  mediaItem: DocumentsFilecabinet.File[];
  replaceAll?: boolean;
  constructor(props: MessageMediaItemList) {
    this.mediaItem = props.mediaItem;
    this.replaceAll = props.replaceAll;
  }
}

export class NoteSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.NoteSearchBasic;
  authorJoin?: PlatformCommon.EmployeeSearchBasic;
  callJoin?: PlatformCommon.PhoneCallSearchBasic;
  campaignJoin?: PlatformCommon.CampaignSearchBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchBasic;
  contactJoin?: PlatformCommon.ContactSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  entityJoin?: PlatformCommon.EntitySearchBasic;
  eventJoin?: PlatformCommon.CalendarEventSearchBasic;
  issueJoin?: PlatformCommon.IssueSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  opportunityJoin?: PlatformCommon.OpportunitySearchBasic;
  originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchBasic;
  partnerJoin?: PlatformCommon.PartnerSearchBasic;
  solutionJoin?: PlatformCommon.SolutionSearchBasic;
  taskJoin?: PlatformCommon.TaskSearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  vendorJoin?: PlatformCommon.VendorSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: NoteSearch) {
    super();
    this.basic = props.basic;
    this.authorJoin = props.authorJoin;
    this.callJoin = props.callJoin;
    this.campaignJoin = props.campaignJoin;
    this.caseJoin = props.caseJoin;
    this.contactJoin = props.contactJoin;
    this.customerJoin = props.customerJoin;
    this.employeeJoin = props.employeeJoin;
    this.entityJoin = props.entityJoin;
    this.eventJoin = props.eventJoin;
    this.issueJoin = props.issueJoin;
    this.itemJoin = props.itemJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.originatingLeadJoin = props.originatingLeadJoin;
    this.partnerJoin = props.partnerJoin;
    this.solutionJoin = props.solutionJoin;
    this.taskJoin = props.taskJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.vendorJoin = props.vendorJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class MessageSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.MessageSearchRowBasic;
  attachmentsJoin?: PlatformCommon.FileSearchRowBasic;
  authorJoin?: PlatformCommon.EntitySearchRowBasic;
  campaignJoin?: PlatformCommon.CampaignSearchRowBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
  contactJoin?: PlatformCommon.ContactSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  entityJoin?: PlatformCommon.EntitySearchRowBasic;
  opportunityJoin?: PlatformCommon.OpportunitySearchRowBasic;
  originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchRowBasic;
  partnerJoin?: PlatformCommon.PartnerSearchRowBasic;
  recipientJoin?: PlatformCommon.EntitySearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  vendorJoin?: PlatformCommon.VendorSearchRowBasic;
  constructor(props: MessageSearchRow) {
    super();
    this.basic = props.basic;
    this.attachmentsJoin = props.attachmentsJoin;
    this.authorJoin = props.authorJoin;
    this.campaignJoin = props.campaignJoin;
    this.caseJoin = props.caseJoin;
    this.contactJoin = props.contactJoin;
    this.customerJoin = props.customerJoin;
    this.employeeJoin = props.employeeJoin;
    this.entityJoin = props.entityJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.originatingLeadJoin = props.originatingLeadJoin;
    this.partnerJoin = props.partnerJoin;
    this.recipientJoin = props.recipientJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.vendorJoin = props.vendorJoin;
  }
}

export class Note extends PlatformCore.Record {
  title?: string;
  noteType?: PlatformCore.RecordRef;
  direction?: GeneralCommunicationTypes.NoteDirection;
  noteDate?: string;
  note?: string;
  lastModifiedDate?: string;
  activity?: PlatformCore.RecordRef;
  author?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  folder?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  media?: PlatformCore.RecordRef;
  record?: PlatformCore.RecordRef;
  recordType?: PlatformCore.RecordRef;
  topic?: PlatformCore.RecordRef;
  transaction?: PlatformCore.RecordRef;
  customForm?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: Note) {
    super(props);
    this.title = props.title;
    this.noteType = props.noteType;
    this.direction = props.direction;
    this.noteDate = props.noteDate;
    this.note = props.note;
    this.lastModifiedDate = props.lastModifiedDate;
    this.activity = props.activity;
    this.author = props.author;
    this.entity = props.entity;
    this.folder = props.folder;
    this.item = props.item;
    this.media = props.media;
    this.record = props.record;
    this.recordType = props.recordType;
    this.topic = props.topic;
    this.transaction = props.transaction;
    this.customForm = props.customForm;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class MessageSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.MessageSearchBasic;
  attachmentsJoin?: PlatformCommon.FileSearchBasic;
  authorJoin?: PlatformCommon.EntitySearchBasic;
  campaignJoin?: PlatformCommon.CampaignSearchBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchBasic;
  contactJoin?: PlatformCommon.ContactSearchBasic;
  customerJoin?: PlatformCommon.CustomerSearchBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchBasic;
  entityJoin?: PlatformCommon.EntitySearchBasic;
  opportunityJoin?: PlatformCommon.OpportunitySearchBasic;
  originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchBasic;
  partnerJoin?: PlatformCommon.PartnerSearchBasic;
  recipientJoin?: PlatformCommon.EntitySearchBasic;
  transactionJoin?: PlatformCommon.TransactionSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  vendorJoin?: PlatformCommon.VendorSearchBasic;
  constructor(props: MessageSearch) {
    super();
    this.basic = props.basic;
    this.attachmentsJoin = props.attachmentsJoin;
    this.authorJoin = props.authorJoin;
    this.campaignJoin = props.campaignJoin;
    this.caseJoin = props.caseJoin;
    this.contactJoin = props.contactJoin;
    this.customerJoin = props.customerJoin;
    this.employeeJoin = props.employeeJoin;
    this.entityJoin = props.entityJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.originatingLeadJoin = props.originatingLeadJoin;
    this.partnerJoin = props.partnerJoin;
    this.recipientJoin = props.recipientJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.vendorJoin = props.vendorJoin;
  }
}

export class Message extends PlatformCore.Record {
  author?: PlatformCore.RecordRef;
  authorEmail?: string;
  recipient?: PlatformCore.RecordRef;
  recipientEmail?: string;
  cc?: string;
  bcc?: string;
  messageDate?: string;
  recordName?: string;
  recordTypeName?: string;
  subject?: string;
  message?: string;
  emailed?: boolean;
  activity?: PlatformCore.RecordRef;
  compressAttachments?: boolean;
  incoming?: boolean;
  lastModifiedDate?: string;
  transaction?: PlatformCore.RecordRef;
  mediaItemList?: MessageMediaItemList;
  dateTime?: string;
  internalId?: string;
  externalId?: string;
  constructor(props: Message) {
    super(props);
    this.author = props.author;
    this.authorEmail = props.authorEmail;
    this.recipient = props.recipient;
    this.recipientEmail = props.recipientEmail;
    this.cc = props.cc;
    this.bcc = props.bcc;
    this.messageDate = props.messageDate;
    this.recordName = props.recordName;
    this.recordTypeName = props.recordTypeName;
    this.subject = props.subject;
    this.message = props.message;
    this.emailed = props.emailed;
    this.activity = props.activity;
    this.compressAttachments = props.compressAttachments;
    this.incoming = props.incoming;
    this.lastModifiedDate = props.lastModifiedDate;
    this.transaction = props.transaction;
    this.mediaItemList = props.mediaItemList;
    this.dateTime = props.dateTime;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class MessageSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: MessageSearch;
  columns?: MessageSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: MessageSearchAdvanced) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class NoteSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.NoteSearchRowBasic;
  authorJoin?: PlatformCommon.EmployeeSearchRowBasic;
  callJoin?: PlatformCommon.PhoneCallSearchRowBasic;
  campaignJoin?: PlatformCommon.CampaignSearchRowBasic;
  caseJoin?: PlatformCommon.SupportCaseSearchRowBasic;
  contactJoin?: PlatformCommon.ContactSearchRowBasic;
  customerJoin?: PlatformCommon.CustomerSearchRowBasic;
  employeeJoin?: PlatformCommon.EmployeeSearchRowBasic;
  entityJoin?: PlatformCommon.EntitySearchRowBasic;
  eventJoin?: PlatformCommon.CalendarEventSearchRowBasic;
  issueJoin?: PlatformCommon.IssueSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  opportunityJoin?: PlatformCommon.OpportunitySearchRowBasic;
  originatingLeadJoin?: PlatformCommon.OriginatingLeadSearchRowBasic;
  partnerJoin?: PlatformCommon.PartnerSearchRowBasic;
  solutionJoin?: PlatformCommon.SolutionSearchRowBasic;
  taskJoin?: PlatformCommon.TaskSearchRowBasic;
  transactionJoin?: PlatformCommon.TransactionSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  vendorJoin?: PlatformCommon.VendorSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: NoteSearchRow) {
    super();
    this.basic = props.basic;
    this.authorJoin = props.authorJoin;
    this.callJoin = props.callJoin;
    this.campaignJoin = props.campaignJoin;
    this.caseJoin = props.caseJoin;
    this.contactJoin = props.contactJoin;
    this.customerJoin = props.customerJoin;
    this.employeeJoin = props.employeeJoin;
    this.entityJoin = props.entityJoin;
    this.eventJoin = props.eventJoin;
    this.issueJoin = props.issueJoin;
    this.itemJoin = props.itemJoin;
    this.opportunityJoin = props.opportunityJoin;
    this.originatingLeadJoin = props.originatingLeadJoin;
    this.partnerJoin = props.partnerJoin;
    this.solutionJoin = props.solutionJoin;
    this.taskJoin = props.taskJoin;
    this.transactionJoin = props.transactionJoin;
    this.userJoin = props.userJoin;
    this.vendorJoin = props.vendorJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}
