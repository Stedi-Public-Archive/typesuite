var com_netsuite_webservices_activities_scheduling_2019_2_types_Module_Factory = function () {
  var com_netsuite_webservices_activities_scheduling_2019_2_types = {
    name: 'com_netsuite_webservices_activities_scheduling_2019_2_types',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'CalendarEventReminderType',
        values: ['_none', '_eMail', '_popupWindow']
      }, {
        type: 'enumInfo',
        localName: 'TaskPriority',
        values: ['_high', '_low', '_medium']
      }, {
        type: 'enumInfo',
        localName: 'PhoneCallPriority',
        values: ['_high', '_low', '_medium']
      }, {
        type: 'enumInfo',
        localName: 'ProjectTaskConstraintType',
        values: ['_asSoonAsPossible', '_fixedStart']
      }, {
        type: 'enumInfo',
        localName: 'TaskReminderType',
        values: ['_eMail', '_popupWindow']
      }, {
        type: 'enumInfo',
        localName: 'ResourceAllocationApprovalStatus',
        values: ['_approved', '_pendingApproval', '_rejected']
      }, {
        type: 'enumInfo',
        localName: 'ProjectTaskStatus',
        values: ['_completed', '_inProgress', '_notStarted']
      }, {
        type: 'enumInfo',
        localName: 'CalendarEventAttendeeAttendance',
        values: ['_optional', '_required']
      }, {
        type: 'enumInfo',
        localName: 'TaskStatus',
        values: ['_completed', '_inProgress', '_notStarted']
      }, {
        type: 'enumInfo',
        localName: 'PhoneCallReminderType',
        values: ['_eMail', '_popupWindow']
      }, {
        type: 'enumInfo',
        localName: 'ProjectTaskPredecessorPredecessorType',
        values: ['_finishToFinish', '_finishToStart', '_startToFinish', '_startToStart']
      }, {
        type: 'enumInfo',
        localName: 'ProjectTaskPriority',
        values: ['_high', '_low', '_medium']
      }, {
        type: 'enumInfo',
        localName: 'ResourceAllocationAllocationUnit',
        values: ['_hours', '_percentOfTime']
      }, {
        type: 'enumInfo',
        localName: 'PhoneCallStatus',
        values: ['_completed', '_scheduled']
      }, {
        type: 'enumInfo',
        localName: 'CalendarEventStatus',
        values: ['_canceled', '_completed', '_confirmed', '_tentative']
      }, {
        type: 'enumInfo',
        localName: 'CalendarEventAccessLevel',
        values: ['_private', '_public', '_showAsBusy']
      }],
    elementInfos: []
  };
  return {
    com_netsuite_webservices_activities_scheduling_2019_2_types: com_netsuite_webservices_activities_scheduling_2019_2_types
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_activities_scheduling_2019_2_types_Module_Factory);
}
else {
  var com_netsuite_webservices_activities_scheduling_2019_2_types_Module = com_netsuite_webservices_activities_scheduling_2019_2_types_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_activities_scheduling_2019_2_types = com_netsuite_webservices_activities_scheduling_2019_2_types_Module.com_netsuite_webservices_activities_scheduling_2019_2_types;
  }
  else {
    var com_netsuite_webservices_activities_scheduling_2019_2_types = com_netsuite_webservices_activities_scheduling_2019_2_types_Module.com_netsuite_webservices_activities_scheduling_2019_2_types;
  }
}