
export type IssueTrackCode =
  "_never" |
  "_onAnyChange" |
  "_whenBaseStatusIsClosed" |
  "_whenBaseStatusIsOnHold" |
  "_whenBaseStatusIsOpen" |
  "_whenBaseStatusIsResolved";

export type SolutionStatus =
  "_approved" |
  "_unapproved";

export type SupportCaseStage =
  "_closed" |
  "_escalated" |
  "_open";

export type SupportCaseStatusStage =
  "_closed" |
  "_escalated" |
  "_open";

export type IssueEventStatus =
  "_closed" |
  "_onHold" |
  "_open" |
  "_resolved";

export type IssueRelationship =
  "_blocks" |
  "_dependsOn" |
  "_duplicatedBy" |
  "_duplicates" |
  "_followedUpBy" |
  "_followUpFor" |
  "_injectedBy" |
  "_injects" |
  "_isBlockedBy" |
  "_isRequiredFor" |
  "_relatedTo";
