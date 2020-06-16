var com_netsuite_webservices_lists_support_2019_2_types_Module_Factory = function () {
  var com_netsuite_webservices_lists_support_2019_2_types = {
    name: 'com_netsuite_webservices_lists_support_2019_2_types',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'IssueTrackCode',
        values: ['_never', '_onAnyChange', '_whenBaseStatusIsClosed', '_whenBaseStatusIsOnHold', '_whenBaseStatusIsOpen', '_whenBaseStatusIsResolved']
      }, {
        type: 'enumInfo',
        localName: 'SolutionStatus',
        values: ['_approved', '_unapproved']
      }, {
        type: 'enumInfo',
        localName: 'SupportCaseStage',
        values: ['_closed', '_escalated', '_open']
      }, {
        type: 'enumInfo',
        localName: 'SupportCaseStatusStage',
        values: ['_closed', '_escalated', '_open']
      }, {
        type: 'enumInfo',
        localName: 'IssueEventStatus',
        values: ['_closed', '_onHold', '_open', '_resolved']
      }, {
        type: 'enumInfo',
        localName: 'IssueRelationship',
        values: ['_blocks', '_dependsOn', '_duplicatedBy', '_duplicates', '_followedUpBy', '_followUpFor', '_injectedBy', '_injects', '_isBlockedBy', '_isRequiredFor', '_relatedTo']
      }],
    elementInfos: []
  };
  return {
    com_netsuite_webservices_lists_support_2019_2_types: com_netsuite_webservices_lists_support_2019_2_types
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_lists_support_2019_2_types_Module_Factory);
}
else {
  var com_netsuite_webservices_lists_support_2019_2_types_Module = com_netsuite_webservices_lists_support_2019_2_types_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_lists_support_2019_2_types = com_netsuite_webservices_lists_support_2019_2_types_Module.com_netsuite_webservices_lists_support_2019_2_types;
  }
  else {
    var com_netsuite_webservices_lists_support_2019_2_types = com_netsuite_webservices_lists_support_2019_2_types_Module.com_netsuite_webservices_lists_support_2019_2_types;
  }
}