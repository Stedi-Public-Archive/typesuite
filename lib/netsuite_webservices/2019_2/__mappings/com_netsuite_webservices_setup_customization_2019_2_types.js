"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3NldHVwX2N1c3RvbWl6YXRpb25fMjAxOV8yX3R5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25ldHN1aXRlX3dlYnNlcnZpY2VzLzIwMTlfMi9fX21hcHBpbmdzL2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19zZXR1cF9jdXN0b21pemF0aW9uXzIwMTlfMl90eXBlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSx3RUFBd0UsR0FBRztJQUM3RSxJQUFJLHlEQUF5RCxHQUFHO1FBQzlELElBQUksRUFBRSwyREFBMkQ7UUFDakUsU0FBUyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSx3QkFBd0I7Z0JBQ25DLE1BQU0sRUFBRSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQzthQUM1VCxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsNkJBQTZCO2dCQUN4QyxNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLEVBQUUseUJBQXlCLEVBQUUsdUJBQXVCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLENBQUM7YUFDdkosRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLDBCQUEwQjtnQkFDckMsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQzthQUMxRSxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsZ0NBQWdDO2dCQUMzQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLENBQUM7YUFDeEcsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLDBCQUEwQjtnQkFDckMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7YUFDbkMsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLDBCQUEwQjtnQkFDckMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7YUFDcEMsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLHdDQUF3QztnQkFDbkQsTUFBTSxFQUFFLENBQUMsY0FBYyxFQUFFLG9CQUFvQixDQUFDO2FBQy9DLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSwyQ0FBMkM7Z0JBQ3RELE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7YUFDeEQsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLDRCQUE0QjtnQkFDdkMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUM7YUFDeEMsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLDRCQUE0QjtnQkFDdkMsTUFBTSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsdUNBQXVDLEVBQUUsb0JBQW9CLENBQUM7YUFDakcsQ0FBQztRQUNKLFlBQVksRUFBRSxFQUFFO0tBQ2pCLENBQUM7SUFDRixPQUFPO1FBQ0wseURBQXlELEVBQUUseURBQXlEO0tBQ3JILENBQUM7QUFDSixDQUFDLENBQUM7QUFDRixJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsd0VBQXdFLENBQUMsQ0FBQztDQUN0RjtLQUNJO0lBQ0gsSUFBSSxnRUFBZ0UsR0FBRyx3RUFBd0UsRUFBRSxDQUFDO0lBQ2xKLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyx5REFBeUQsR0FBRyxnRUFBZ0UsQ0FBQyx5REFBeUQsQ0FBQztLQUN2TTtTQUNJO1FBQ0gsSUFBSSx5REFBeUQsR0FBRyxnRUFBZ0UsQ0FBQyx5REFBeUQsQ0FBQztLQUM1TDtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19zZXR1cF9jdXN0b21pemF0aW9uXzIwMTlfMl90eXBlc19Nb2R1bGVfRmFjdG9yeSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19zZXR1cF9jdXN0b21pemF0aW9uXzIwMTlfMl90eXBlcyA9IHtcbiAgICBuYW1lOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3NldHVwX2N1c3RvbWl6YXRpb25fMjAxOV8yX3R5cGVzJyxcbiAgICB0eXBlSW5mb3M6IFt7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0N1c3RvbWl6YXRpb25GaWVsZFR5cGUnLFxuICAgICAgICB2YWx1ZXM6IFsnX2NoZWNrQm94JywgJ19jdXJyZW5jeScsICdfZGF0ZScsICdfZGF0ZXRpbWUnLCAnX2RlY2ltYWxOdW1iZXInLCAnX2RvY3VtZW50JywgJ19lTWFpbEFkZHJlc3MnLCAnX2ZyZWVGb3JtVGV4dCcsICdfaGVscCcsICdfaHlwZXJsaW5rJywgJ19pbWFnZScsICdfaW5saW5lSFRNTCcsICdfaW50ZWdlck51bWJlcicsICdfbGlzdFJlY29yZCcsICdfbG9uZ1RleHQnLCAnX211bHRpcGxlU2VsZWN0JywgJ19wYXNzd29yZCcsICdfcGVyY2VudCcsICdfcGhvbmVOdW1iZXInLCAnX3JpY2hUZXh0JywgJ190ZXh0QXJlYScsICdfdGltZU9mRGF5J11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnQ3VzdG9taXphdGlvbkR5bmFtaWNEZWZhdWx0JyxcbiAgICAgICAgdmFsdWVzOiBbJ19jdXJyZW50RGF0ZVRpbWUnLCAnX2N1cnJlbnRVc2VyJywgJ19jdXJyZW50VXNlcnNEZXBhcnRtZW50JywgJ19jdXJyZW50VXNlcnNMb2NhdGlvbicsICdfY3VycmVudFVzZXJzU3VwZXJ2aXNvcicsICdfY3VycmVudFVzZXJzU3Vic2lkaWFyeSddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0N1c3RvbWl6YXRpb25EaXNwbGF5VHlwZScsXG4gICAgICAgIHZhbHVlczogWydfZGlzYWJsZWQnLCAnX2hpZGRlbicsICdfaW5saW5lVGV4dCcsICdfbm9ybWFsJywgJ19zaG93QXNMaXN0J11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnQ3VzdG9taXphdGlvbkZpbHRlckNvbXBhcmVUeXBlJyxcbiAgICAgICAgdmFsdWVzOiBbJ19lcXVhbCcsICdfZ3JlYXRlclRoYW4nLCAnX2dyZWF0ZXJUaGFuT3JFcXVhbCcsICdfbGVzc1RoYW4nLCAnX2xlc3NUaGFuT3JFcXVhbCcsICdfbm90RXF1YWwnXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdDdXN0b21pemF0aW9uU2VhcmNoTGV2ZWwnLFxuICAgICAgICB2YWx1ZXM6IFsnX25vbmUnLCAnX2VkaXQnLCAnX3J1biddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0N1c3RvbWl6YXRpb25BY2Nlc3NMZXZlbCcsXG4gICAgICAgIHZhbHVlczogWydfbm9uZScsICdfZWRpdCcsICdfdmlldyddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0N1c3RvbVJlY29yZFR5cGVQZXJtaXNzaW9uc1Jlc3RyaWN0aW9uJyxcbiAgICAgICAgdmFsdWVzOiBbJ19lZGl0aW5nT25seScsICdfdmlld2luZ0FuZEVkaXRpbmcnXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdDdXN0b21SZWNvcmRUeXBlUGVybWlzc2lvbnNQZXJtaXR0ZWRMZXZlbCcsXG4gICAgICAgIHZhbHVlczogWydfY3JlYXRlJywgJ19lZGl0JywgJ19mdWxsJywgJ19ub25lJywgJ192aWV3J11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnSXRlbUN1c3RvbUZpZWxkSXRlbVN1YlR5cGUnLFxuICAgICAgICB2YWx1ZXM6IFsnX2JvdGgnLCAnX3B1cmNoYXNlJywgJ19zYWxlJ11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnQ3VzdG9tUmVjb3JkVHlwZUFjY2Vzc1R5cGUnLFxuICAgICAgICB2YWx1ZXM6IFsnX25vUGVybWlzc2lvblJlcXVpcmVkJywgJ19yZXF1aXJlQ3VzdG9tUmVjb3JkRW50cmllc1Blcm1pc3Npb24nLCAnX3VzZVBlcm1pc3Npb25MaXN0J11cbiAgICAgIH1dLFxuICAgIGVsZW1lbnRJbmZvczogW11cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfc2V0dXBfY3VzdG9taXphdGlvbl8yMDE5XzJfdHlwZXM6IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19zZXR1cF9jdXN0b21pemF0aW9uXzIwMTlfMl90eXBlc1xuICB9O1xufTtcbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKFtdLCBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfc2V0dXBfY3VzdG9taXphdGlvbl8yMDE5XzJfdHlwZXNfTW9kdWxlX0ZhY3RvcnkpO1xufVxuZWxzZSB7XG4gIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfc2V0dXBfY3VzdG9taXphdGlvbl8yMDE5XzJfdHlwZXNfTW9kdWxlID0gY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3NldHVwX2N1c3RvbWl6YXRpb25fMjAxOV8yX3R5cGVzX01vZHVsZV9GYWN0b3J5KCk7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzLmNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19zZXR1cF9jdXN0b21pemF0aW9uXzIwMTlfMl90eXBlcyA9IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19zZXR1cF9jdXN0b21pemF0aW9uXzIwMTlfMl90eXBlc19Nb2R1bGUuY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3NldHVwX2N1c3RvbWl6YXRpb25fMjAxOV8yX3R5cGVzO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfc2V0dXBfY3VzdG9taXphdGlvbl8yMDE5XzJfdHlwZXMgPSBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfc2V0dXBfY3VzdG9taXphdGlvbl8yMDE5XzJfdHlwZXNfTW9kdWxlLmNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19zZXR1cF9jdXN0b21pemF0aW9uXzIwMTlfMl90eXBlcztcbiAgfVxufSJdfQ==