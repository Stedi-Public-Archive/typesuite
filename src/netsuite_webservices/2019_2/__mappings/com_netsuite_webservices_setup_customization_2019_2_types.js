var com_netsuite_webservices_setup_customization_2019_2_types_Module_Factory = function () {
  var com_netsuite_webservices_setup_customization_2019_2_types = {
    name: 'com_netsuite_webservices_setup_customization_2019_2_types',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'CustomizationFieldType',
        values: ['_checkBox', '_currency', '_date', '_datetime', '_decimalNumber', '_document', '_eMailAddress', '_freeFormText', '_help', '_hyperlink', '_image', '_inlineHTML', '_integerNumber', '_listRecord', '_longText', '_multipleSelect', '_password', '_percent', '_phoneNumber', '_richText', '_textArea', '_timeOfDay']
      }, {
        type: 'enumInfo',
        localName: 'CustomizationDynamicDefault',
        values: ['_currentDateTime', '_currentUser', '_currentUsersDepartment', '_currentUsersLocation', '_currentUsersSupervisor', '_currentUsersSubsidiary']
      }, {
        type: 'enumInfo',
        localName: 'CustomizationDisplayType',
        values: ['_disabled', '_hidden', '_inlineText', '_normal', '_showAsList']
      }, {
        type: 'enumInfo',
        localName: 'CustomizationFilterCompareType',
        values: ['_equal', '_greaterThan', '_greaterThanOrEqual', '_lessThan', '_lessThanOrEqual', '_notEqual']
      }, {
        type: 'enumInfo',
        localName: 'CustomizationSearchLevel',
        values: ['_none', '_edit', '_run']
      }, {
        type: 'enumInfo',
        localName: 'CustomizationAccessLevel',
        values: ['_none', '_edit', '_view']
      }, {
        type: 'enumInfo',
        localName: 'CustomRecordTypePermissionsRestriction',
        values: ['_editingOnly', '_viewingAndEditing']
      }, {
        type: 'enumInfo',
        localName: 'CustomRecordTypePermissionsPermittedLevel',
        values: ['_create', '_edit', '_full', '_none', '_view']
      }, {
        type: 'enumInfo',
        localName: 'ItemCustomFieldItemSubType',
        values: ['_both', '_purchase', '_sale']
      }, {
        type: 'enumInfo',
        localName: 'CustomRecordTypeAccessType',
        values: ['_noPermissionRequired', '_requireCustomRecordEntriesPermission', '_usePermissionList']
      }],
    elementInfos: []
  };
  return {
    com_netsuite_webservices_setup_customization_2019_2_types: com_netsuite_webservices_setup_customization_2019_2_types
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_setup_customization_2019_2_types_Module_Factory);
}
else {
  var com_netsuite_webservices_setup_customization_2019_2_types_Module = com_netsuite_webservices_setup_customization_2019_2_types_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_setup_customization_2019_2_types = com_netsuite_webservices_setup_customization_2019_2_types_Module.com_netsuite_webservices_setup_customization_2019_2_types;
  }
  else {
    var com_netsuite_webservices_setup_customization_2019_2_types = com_netsuite_webservices_setup_customization_2019_2_types_Module.com_netsuite_webservices_setup_customization_2019_2_types;
  }
}