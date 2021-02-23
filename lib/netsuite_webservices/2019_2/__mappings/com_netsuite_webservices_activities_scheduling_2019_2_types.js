"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2FjdGl2aXRpZXNfc2NoZWR1bGluZ18yMDE5XzJfdHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbmV0c3VpdGVfd2Vic2VydmljZXMvMjAxOV8yL19fbWFwcGluZ3MvY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2FjdGl2aXRpZXNfc2NoZWR1bGluZ18yMDE5XzJfdHlwZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksMEVBQTBFLEdBQUc7SUFDL0UsSUFBSSwyREFBMkQsR0FBRztRQUNoRSxJQUFJLEVBQUUsNkRBQTZEO1FBQ25FLFNBQVMsRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsMkJBQTJCO2dCQUN0QyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQzthQUM1QyxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsY0FBYztnQkFDekIsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7YUFDckMsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7YUFDckMsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLDJCQUEyQjtnQkFDdEMsTUFBTSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsYUFBYSxDQUFDO2FBQzdDLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSxrQkFBa0I7Z0JBQzdCLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUM7YUFDbkMsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLGtDQUFrQztnQkFDN0MsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsQ0FBQzthQUN2RCxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsbUJBQW1CO2dCQUM5QixNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQzthQUNyRCxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsaUNBQWlDO2dCQUM1QyxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO2FBQ25DLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSxZQUFZO2dCQUN2QixNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQzthQUNyRCxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsdUJBQXVCO2dCQUNsQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDO2FBQ25DLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSx1Q0FBdUM7Z0JBQ2xELE1BQU0sRUFBRSxDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQzthQUNqRixFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUscUJBQXFCO2dCQUNoQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQzthQUNyQyxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsa0NBQWtDO2dCQUM3QyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUM7YUFDckMsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLGlCQUFpQjtnQkFDNUIsTUFBTSxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQzthQUNyQyxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUscUJBQXFCO2dCQUNoQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7YUFDaEUsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLDBCQUEwQjtnQkFDckMsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxhQUFhLENBQUM7YUFDL0MsQ0FBQztRQUNKLFlBQVksRUFBRSxFQUFFO0tBQ2pCLENBQUM7SUFDRixPQUFPO1FBQ0wsMkRBQTJELEVBQUUsMkRBQTJEO0tBQ3pILENBQUM7QUFDSixDQUFDLENBQUM7QUFDRixJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsMEVBQTBFLENBQUMsQ0FBQztDQUN4RjtLQUNJO0lBQ0gsSUFBSSxrRUFBa0UsR0FBRywwRUFBMEUsRUFBRSxDQUFDO0lBQ3RKLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQywyREFBMkQsR0FBRyxrRUFBa0UsQ0FBQywyREFBMkQsQ0FBQztLQUM3TTtTQUNJO1FBQ0gsSUFBSSwyREFBMkQsR0FBRyxrRUFBa0UsQ0FBQywyREFBMkQsQ0FBQztLQUNsTTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19hY3Rpdml0aWVzX3NjaGVkdWxpbmdfMjAxOV8yX3R5cGVzX01vZHVsZV9GYWN0b3J5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2FjdGl2aXRpZXNfc2NoZWR1bGluZ18yMDE5XzJfdHlwZXMgPSB7XG4gICAgbmFtZTogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19hY3Rpdml0aWVzX3NjaGVkdWxpbmdfMjAxOV8yX3R5cGVzJyxcbiAgICB0eXBlSW5mb3M6IFt7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0NhbGVuZGFyRXZlbnRSZW1pbmRlclR5cGUnLFxuICAgICAgICB2YWx1ZXM6IFsnX25vbmUnLCAnX2VNYWlsJywgJ19wb3B1cFdpbmRvdyddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ1Rhc2tQcmlvcml0eScsXG4gICAgICAgIHZhbHVlczogWydfaGlnaCcsICdfbG93JywgJ19tZWRpdW0nXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdQaG9uZUNhbGxQcmlvcml0eScsXG4gICAgICAgIHZhbHVlczogWydfaGlnaCcsICdfbG93JywgJ19tZWRpdW0nXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdQcm9qZWN0VGFza0NvbnN0cmFpbnRUeXBlJyxcbiAgICAgICAgdmFsdWVzOiBbJ19hc1Nvb25Bc1Bvc3NpYmxlJywgJ19maXhlZFN0YXJ0J11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnVGFza1JlbWluZGVyVHlwZScsXG4gICAgICAgIHZhbHVlczogWydfZU1haWwnLCAnX3BvcHVwV2luZG93J11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnUmVzb3VyY2VBbGxvY2F0aW9uQXBwcm92YWxTdGF0dXMnLFxuICAgICAgICB2YWx1ZXM6IFsnX2FwcHJvdmVkJywgJ19wZW5kaW5nQXBwcm92YWwnLCAnX3JlamVjdGVkJ11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnUHJvamVjdFRhc2tTdGF0dXMnLFxuICAgICAgICB2YWx1ZXM6IFsnX2NvbXBsZXRlZCcsICdfaW5Qcm9ncmVzcycsICdfbm90U3RhcnRlZCddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0NhbGVuZGFyRXZlbnRBdHRlbmRlZUF0dGVuZGFuY2UnLFxuICAgICAgICB2YWx1ZXM6IFsnX29wdGlvbmFsJywgJ19yZXF1aXJlZCddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ1Rhc2tTdGF0dXMnLFxuICAgICAgICB2YWx1ZXM6IFsnX2NvbXBsZXRlZCcsICdfaW5Qcm9ncmVzcycsICdfbm90U3RhcnRlZCddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ1Bob25lQ2FsbFJlbWluZGVyVHlwZScsXG4gICAgICAgIHZhbHVlczogWydfZU1haWwnLCAnX3BvcHVwV2luZG93J11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnUHJvamVjdFRhc2tQcmVkZWNlc3NvclByZWRlY2Vzc29yVHlwZScsXG4gICAgICAgIHZhbHVlczogWydfZmluaXNoVG9GaW5pc2gnLCAnX2ZpbmlzaFRvU3RhcnQnLCAnX3N0YXJ0VG9GaW5pc2gnLCAnX3N0YXJ0VG9TdGFydCddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ1Byb2plY3RUYXNrUHJpb3JpdHknLFxuICAgICAgICB2YWx1ZXM6IFsnX2hpZ2gnLCAnX2xvdycsICdfbWVkaXVtJ11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnUmVzb3VyY2VBbGxvY2F0aW9uQWxsb2NhdGlvblVuaXQnLFxuICAgICAgICB2YWx1ZXM6IFsnX2hvdXJzJywgJ19wZXJjZW50T2ZUaW1lJ11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnUGhvbmVDYWxsU3RhdHVzJyxcbiAgICAgICAgdmFsdWVzOiBbJ19jb21wbGV0ZWQnLCAnX3NjaGVkdWxlZCddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0NhbGVuZGFyRXZlbnRTdGF0dXMnLFxuICAgICAgICB2YWx1ZXM6IFsnX2NhbmNlbGVkJywgJ19jb21wbGV0ZWQnLCAnX2NvbmZpcm1lZCcsICdfdGVudGF0aXZlJ11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnQ2FsZW5kYXJFdmVudEFjY2Vzc0xldmVsJyxcbiAgICAgICAgdmFsdWVzOiBbJ19wcml2YXRlJywgJ19wdWJsaWMnLCAnX3Nob3dBc0J1c3knXVxuICAgICAgfV0sXG4gICAgZWxlbWVudEluZm9zOiBbXVxuICB9O1xuICByZXR1cm4ge1xuICAgIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19hY3Rpdml0aWVzX3NjaGVkdWxpbmdfMjAxOV8yX3R5cGVzOiBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfYWN0aXZpdGllc19zY2hlZHVsaW5nXzIwMTlfMl90eXBlc1xuICB9O1xufTtcbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKFtdLCBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfYWN0aXZpdGllc19zY2hlZHVsaW5nXzIwMTlfMl90eXBlc19Nb2R1bGVfRmFjdG9yeSk7XG59XG5lbHNlIHtcbiAgdmFyIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19hY3Rpdml0aWVzX3NjaGVkdWxpbmdfMjAxOV8yX3R5cGVzX01vZHVsZSA9IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19hY3Rpdml0aWVzX3NjaGVkdWxpbmdfMjAxOV8yX3R5cGVzX01vZHVsZV9GYWN0b3J5KCk7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzLmNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19hY3Rpdml0aWVzX3NjaGVkdWxpbmdfMjAxOV8yX3R5cGVzID0gY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2FjdGl2aXRpZXNfc2NoZWR1bGluZ18yMDE5XzJfdHlwZXNfTW9kdWxlLmNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19hY3Rpdml0aWVzX3NjaGVkdWxpbmdfMjAxOV8yX3R5cGVzO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfYWN0aXZpdGllc19zY2hlZHVsaW5nXzIwMTlfMl90eXBlcyA9IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19hY3Rpdml0aWVzX3NjaGVkdWxpbmdfMjAxOV8yX3R5cGVzX01vZHVsZS5jb21fbmV0c3VpdGVfd2Vic2VydmljZXNfYWN0aXZpdGllc19zY2hlZHVsaW5nXzIwMTlfMl90eXBlcztcbiAgfVxufSJdfQ==