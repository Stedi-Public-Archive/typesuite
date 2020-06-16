
export type CustomizationFieldType =
  "_checkBox" |
  "_currency" |
  "_date" |
  "_datetime" |
  "_decimalNumber" |
  "_document" |
  "_eMailAddress" |
  "_freeFormText" |
  "_help" |
  "_hyperlink" |
  "_image" |
  "_inlineHTML" |
  "_integerNumber" |
  "_listRecord" |
  "_longText" |
  "_multipleSelect" |
  "_password" |
  "_percent" |
  "_phoneNumber" |
  "_richText" |
  "_textArea" |
  "_timeOfDay";

export type CustomizationDynamicDefault =
  "_currentDateTime" |
  "_currentUser" |
  "_currentUsersDepartment" |
  "_currentUsersLocation" |
  "_currentUsersSupervisor" |
  "_currentUsersSubsidiary";

export type CustomizationDisplayType =
  "_disabled" |
  "_hidden" |
  "_inlineText" |
  "_normal" |
  "_showAsList";

export type CustomizationFilterCompareType =
  "_equal" |
  "_greaterThan" |
  "_greaterThanOrEqual" |
  "_lessThan" |
  "_lessThanOrEqual" |
  "_notEqual";

export type CustomizationSearchLevel =
  "_none" |
  "_edit" |
  "_run";

export type CustomizationAccessLevel =
  "_none" |
  "_edit" |
  "_view";

export type CustomRecordTypePermissionsRestriction =
  "_editingOnly" |
  "_viewingAndEditing";

export type CustomRecordTypePermissionsPermittedLevel =
  "_create" |
  "_edit" |
  "_full" |
  "_none" |
  "_view";

export type ItemCustomFieldItemSubType =
  "_both" |
  "_purchase" |
  "_sale";

export type CustomRecordTypeAccessType =
  "_noPermissionRequired" |
  "_requireCustomRecordEntriesPermission" |
  "_usePermissionList";
