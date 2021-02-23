"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2xpc3RzX3N1cHBvcnRfMjAxOV8yX3R5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25ldHN1aXRlX3dlYnNlcnZpY2VzLzIwMTlfMi9fX21hcHBpbmdzL2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19saXN0c19zdXBwb3J0XzIwMTlfMl90eXBlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxrRUFBa0UsR0FBRztJQUN2RSxJQUFJLG1EQUFtRCxHQUFHO1FBQ3hELElBQUksRUFBRSxxREFBcUQ7UUFDM0QsU0FBUyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsdUJBQXVCLEVBQUUsMkJBQTJCLENBQUM7YUFDL0ksRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQzthQUNyQyxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsa0JBQWtCO2dCQUM3QixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQzthQUMzQyxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsd0JBQXdCO2dCQUNuQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQzthQUMzQyxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsa0JBQWtCO2dCQUM3QixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUM7YUFDckQsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDO2FBQzlLLENBQUM7UUFDSixZQUFZLEVBQUUsRUFBRTtLQUNqQixDQUFDO0lBQ0YsT0FBTztRQUNMLG1EQUFtRCxFQUFFLG1EQUFtRDtLQUN6RyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUM5QyxNQUFNLENBQUMsRUFBRSxFQUFFLGtFQUFrRSxDQUFDLENBQUM7Q0FDaEY7S0FDSTtJQUNILElBQUksMERBQTBELEdBQUcsa0VBQWtFLEVBQUUsQ0FBQztJQUN0SSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ25ELE1BQU0sQ0FBQyxPQUFPLENBQUMsbURBQW1ELEdBQUcsMERBQTBELENBQUMsbURBQW1ELENBQUM7S0FDckw7U0FDSTtRQUNILElBQUksbURBQW1ELEdBQUcsMERBQTBELENBQUMsbURBQW1ELENBQUM7S0FDMUs7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbInZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfc3VwcG9ydF8yMDE5XzJfdHlwZXNfTW9kdWxlX0ZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfc3VwcG9ydF8yMDE5XzJfdHlwZXMgPSB7XG4gICAgbmFtZTogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19saXN0c19zdXBwb3J0XzIwMTlfMl90eXBlcycsXG4gICAgdHlwZUluZm9zOiBbe1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdJc3N1ZVRyYWNrQ29kZScsXG4gICAgICAgIHZhbHVlczogWydfbmV2ZXInLCAnX29uQW55Q2hhbmdlJywgJ193aGVuQmFzZVN0YXR1c0lzQ2xvc2VkJywgJ193aGVuQmFzZVN0YXR1c0lzT25Ib2xkJywgJ193aGVuQmFzZVN0YXR1c0lzT3BlbicsICdfd2hlbkJhc2VTdGF0dXNJc1Jlc29sdmVkJ11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnU29sdXRpb25TdGF0dXMnLFxuICAgICAgICB2YWx1ZXM6IFsnX2FwcHJvdmVkJywgJ191bmFwcHJvdmVkJ11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnU3VwcG9ydENhc2VTdGFnZScsXG4gICAgICAgIHZhbHVlczogWydfY2xvc2VkJywgJ19lc2NhbGF0ZWQnLCAnX29wZW4nXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdTdXBwb3J0Q2FzZVN0YXR1c1N0YWdlJyxcbiAgICAgICAgdmFsdWVzOiBbJ19jbG9zZWQnLCAnX2VzY2FsYXRlZCcsICdfb3BlbiddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0lzc3VlRXZlbnRTdGF0dXMnLFxuICAgICAgICB2YWx1ZXM6IFsnX2Nsb3NlZCcsICdfb25Ib2xkJywgJ19vcGVuJywgJ19yZXNvbHZlZCddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0lzc3VlUmVsYXRpb25zaGlwJyxcbiAgICAgICAgdmFsdWVzOiBbJ19ibG9ja3MnLCAnX2RlcGVuZHNPbicsICdfZHVwbGljYXRlZEJ5JywgJ19kdXBsaWNhdGVzJywgJ19mb2xsb3dlZFVwQnknLCAnX2ZvbGxvd1VwRm9yJywgJ19pbmplY3RlZEJ5JywgJ19pbmplY3RzJywgJ19pc0Jsb2NrZWRCeScsICdfaXNSZXF1aXJlZEZvcicsICdfcmVsYXRlZFRvJ11cbiAgICAgIH1dLFxuICAgIGVsZW1lbnRJbmZvczogW11cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfc3VwcG9ydF8yMDE5XzJfdHlwZXM6IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19saXN0c19zdXBwb3J0XzIwMTlfMl90eXBlc1xuICB9O1xufTtcbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKFtdLCBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfc3VwcG9ydF8yMDE5XzJfdHlwZXNfTW9kdWxlX0ZhY3RvcnkpO1xufVxuZWxzZSB7XG4gIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfc3VwcG9ydF8yMDE5XzJfdHlwZXNfTW9kdWxlID0gY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2xpc3RzX3N1cHBvcnRfMjAxOV8yX3R5cGVzX01vZHVsZV9GYWN0b3J5KCk7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzLmNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19saXN0c19zdXBwb3J0XzIwMTlfMl90eXBlcyA9IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19saXN0c19zdXBwb3J0XzIwMTlfMl90eXBlc19Nb2R1bGUuY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2xpc3RzX3N1cHBvcnRfMjAxOV8yX3R5cGVzO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfc3VwcG9ydF8yMDE5XzJfdHlwZXMgPSBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfc3VwcG9ydF8yMDE5XzJfdHlwZXNfTW9kdWxlLmNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19saXN0c19zdXBwb3J0XzIwMTlfMl90eXBlcztcbiAgfVxufSJdfQ==