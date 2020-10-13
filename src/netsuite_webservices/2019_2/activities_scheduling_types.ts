export type CalendarEventReminderType = "_none" | "_eMail" | "_popupWindow";

export type TaskPriority = "_high" | "_low" | "_medium";

export type PhoneCallPriority = "_high" | "_low" | "_medium";

export type ProjectTaskConstraintType = "_asSoonAsPossible" | "_fixedStart";

export type TaskReminderType = "_eMail" | "_popupWindow";

export type ResourceAllocationApprovalStatus =
  | "_approved"
  | "_pendingApproval"
  | "_rejected";

export type ProjectTaskStatus = "_completed" | "_inProgress" | "_notStarted";

export type CalendarEventAttendeeAttendance = "_optional" | "_required";

export type TaskStatus = "_completed" | "_inProgress" | "_notStarted";

export type PhoneCallReminderType = "_eMail" | "_popupWindow";

export type ProjectTaskPredecessorPredecessorType =
  | "_finishToFinish"
  | "_finishToStart"
  | "_startToFinish"
  | "_startToStart";

export type ProjectTaskPriority = "_high" | "_low" | "_medium";

export type ResourceAllocationAllocationUnit = "_hours" | "_percentOfTime";

export type PhoneCallStatus = "_completed" | "_scheduled";

export type CalendarEventStatus =
  | "_canceled"
  | "_completed"
  | "_confirmed"
  | "_tentative";

export type CalendarEventAccessLevel = "_private" | "_public" | "_showAsBusy";
