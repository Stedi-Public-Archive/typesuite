"use strict";
var com_netsuite_webservices_lists_marketing_2019_2_types_Module_Factory = function () {
    var com_netsuite_webservices_lists_marketing_2019_2_types = {
        name: 'com_netsuite_webservices_lists_marketing_2019_2_types',
        typeInfos: [{
                type: 'enumInfo',
                localName: 'CampaignStatus',
                values: ['_closed', '_completed', '_execute', '_inProgress', '_scheduled', '_sent', '_toPrint']
            }, {
                type: 'enumInfo',
                localName: 'CampaignCampaignEmailStatus',
                values: ['_execute', '_inProgress', '_notStarted', '_sent']
            }, {
                type: 'enumInfo',
                localName: 'PromotionCodeUseType',
                values: ['_multipleUses', '_singleUse']
            }, {
                type: 'enumInfo',
                localName: 'CampaignChannelEventType',
                values: ['_directMail', '_email', '_integration', '_other']
            }, {
                type: 'enumInfo',
                localName: 'CampaignResponseResponse',
                values: ['_bounced', '_clickedThru', '_purchased', '_received', '_responded', '_sent', '_subscribed', '_unsubscribed']
            }, {
                type: 'enumInfo',
                localName: 'CampaignCampaignEventType',
                values: ['_default', '_directMail', '_email', '_integration', '_leadNurturingEmail', '_other']
            }, {
                type: 'enumInfo',
                localName: 'CampaignCampaignDirectMailStatus',
                values: ['_completed', '_execute', '_inProgress', '_notStarted']
            }, {
                type: 'enumInfo',
                localName: 'CampaignResponse',
                values: ['_clickedThrough', '_failedDeliveryFailure', '_failedInvalidAddress', '_failedOther', '_failedSpam', '_failedTemplateError', '_failedUnexpectedError', '_invalidSenderAddress', '_mailboxDisabled', '_mailboxIsFull', '_mailboxNotAcceptingMessages', '_mailProtocolIssues', '_mediaError', '_messageExceedsSizeLengthLimits', '_networkServerIssues', '_opened', '_purchased', '_queued', '_received', '_responded', '_securityIssues', '_sent', '_skippedDueToPreviousHardBounce', '_subscribed', '_tooManyRecipients', '_unsubscribed', '_unsubscribedByFeedbackLoop']
            }, {
                type: 'enumInfo',
                localName: 'PromotionCodeApplyDiscountTo',
                values: ['_allSales', '_firstSaleOnly']
            }, {
                type: 'enumInfo',
                localName: 'CampaignResponseCategory',
                values: ['_bounced', '_clickedThrough', '_failed', '_purchased', '_queued', '_received', '_responded', '_sent', '_subscribed', '_unsubscribed']
            }, {
                type: 'enumInfo',
                localName: 'CampaignCampaignEventStatus',
                values: ['_completed', '_execute', '_inProgress', '_notStarted']
            }],
        elementInfos: []
    };
    return {
        com_netsuite_webservices_lists_marketing_2019_2_types: com_netsuite_webservices_lists_marketing_2019_2_types
    };
};
if (typeof define === 'function' && define.amd) {
    define([], com_netsuite_webservices_lists_marketing_2019_2_types_Module_Factory);
}
else {
    var com_netsuite_webservices_lists_marketing_2019_2_types_Module = com_netsuite_webservices_lists_marketing_2019_2_types_Module_Factory();
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.com_netsuite_webservices_lists_marketing_2019_2_types = com_netsuite_webservices_lists_marketing_2019_2_types_Module.com_netsuite_webservices_lists_marketing_2019_2_types;
    }
    else {
        var com_netsuite_webservices_lists_marketing_2019_2_types = com_netsuite_webservices_lists_marketing_2019_2_types_Module.com_netsuite_webservices_lists_marketing_2019_2_types;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2xpc3RzX21hcmtldGluZ18yMDE5XzJfdHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbmV0c3VpdGVfd2Vic2VydmljZXMvMjAxOV8yL19fbWFwcGluZ3MvY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2xpc3RzX21hcmtldGluZ18yMDE5XzJfdHlwZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksb0VBQW9FLEdBQUc7SUFDekUsSUFBSSxxREFBcUQsR0FBRztRQUMxRCxJQUFJLEVBQUUsdURBQXVEO1FBQzdELFNBQVMsRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7YUFDaEcsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLDZCQUE2QjtnQkFDeEMsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDO2FBQzVELEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLE1BQU0sRUFBRSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUM7YUFDeEMsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLDBCQUEwQjtnQkFDckMsTUFBTSxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDO2FBQzVELEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSwwQkFBMEI7Z0JBQ3JDLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUM7YUFDdkgsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLDJCQUEyQjtnQkFDdEMsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsQ0FBQzthQUMvRixFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsa0NBQWtDO2dCQUM3QyxNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7YUFDakUsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLGtCQUFrQjtnQkFDN0IsTUFBTSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsdUJBQXVCLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSw4QkFBOEIsRUFBRSxxQkFBcUIsRUFBRSxhQUFhLEVBQUUsaUNBQWlDLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSw2QkFBNkIsQ0FBQzthQUNuakIsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLDhCQUE4QjtnQkFDekMsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDO2FBQ3hDLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSwwQkFBMEI7Z0JBQ3JDLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDO2FBQ2hKLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSw2QkFBNkI7Z0JBQ3hDLE1BQU0sRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQzthQUNqRSxDQUFDO1FBQ0osWUFBWSxFQUFFLEVBQUU7S0FDakIsQ0FBQztJQUNGLE9BQU87UUFDTCxxREFBcUQsRUFBRSxxREFBcUQ7S0FDN0csQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxvRUFBb0UsQ0FBQyxDQUFDO0NBQ2xGO0tBQ0k7SUFDSCxJQUFJLDREQUE0RCxHQUFHLG9FQUFvRSxFQUFFLENBQUM7SUFDMUksSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDLHFEQUFxRCxHQUFHLDREQUE0RCxDQUFDLHFEQUFxRCxDQUFDO0tBQzNMO1NBQ0k7UUFDSCxJQUFJLHFEQUFxRCxHQUFHLDREQUE0RCxDQUFDLHFEQUFxRCxDQUFDO0tBQ2hMO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2xpc3RzX21hcmtldGluZ18yMDE5XzJfdHlwZXNfTW9kdWxlX0ZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfbWFya2V0aW5nXzIwMTlfMl90eXBlcyA9IHtcbiAgICBuYW1lOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2xpc3RzX21hcmtldGluZ18yMDE5XzJfdHlwZXMnLFxuICAgIHR5cGVJbmZvczogW3tcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnQ2FtcGFpZ25TdGF0dXMnLFxuICAgICAgICB2YWx1ZXM6IFsnX2Nsb3NlZCcsICdfY29tcGxldGVkJywgJ19leGVjdXRlJywgJ19pblByb2dyZXNzJywgJ19zY2hlZHVsZWQnLCAnX3NlbnQnLCAnX3RvUHJpbnQnXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdDYW1wYWlnbkNhbXBhaWduRW1haWxTdGF0dXMnLFxuICAgICAgICB2YWx1ZXM6IFsnX2V4ZWN1dGUnLCAnX2luUHJvZ3Jlc3MnLCAnX25vdFN0YXJ0ZWQnLCAnX3NlbnQnXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdQcm9tb3Rpb25Db2RlVXNlVHlwZScsXG4gICAgICAgIHZhbHVlczogWydfbXVsdGlwbGVVc2VzJywgJ19zaW5nbGVVc2UnXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdDYW1wYWlnbkNoYW5uZWxFdmVudFR5cGUnLFxuICAgICAgICB2YWx1ZXM6IFsnX2RpcmVjdE1haWwnLCAnX2VtYWlsJywgJ19pbnRlZ3JhdGlvbicsICdfb3RoZXInXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdDYW1wYWlnblJlc3BvbnNlUmVzcG9uc2UnLFxuICAgICAgICB2YWx1ZXM6IFsnX2JvdW5jZWQnLCAnX2NsaWNrZWRUaHJ1JywgJ19wdXJjaGFzZWQnLCAnX3JlY2VpdmVkJywgJ19yZXNwb25kZWQnLCAnX3NlbnQnLCAnX3N1YnNjcmliZWQnLCAnX3Vuc3Vic2NyaWJlZCddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0NhbXBhaWduQ2FtcGFpZ25FdmVudFR5cGUnLFxuICAgICAgICB2YWx1ZXM6IFsnX2RlZmF1bHQnLCAnX2RpcmVjdE1haWwnLCAnX2VtYWlsJywgJ19pbnRlZ3JhdGlvbicsICdfbGVhZE51cnR1cmluZ0VtYWlsJywgJ19vdGhlciddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0NhbXBhaWduQ2FtcGFpZ25EaXJlY3RNYWlsU3RhdHVzJyxcbiAgICAgICAgdmFsdWVzOiBbJ19jb21wbGV0ZWQnLCAnX2V4ZWN1dGUnLCAnX2luUHJvZ3Jlc3MnLCAnX25vdFN0YXJ0ZWQnXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdDYW1wYWlnblJlc3BvbnNlJyxcbiAgICAgICAgdmFsdWVzOiBbJ19jbGlja2VkVGhyb3VnaCcsICdfZmFpbGVkRGVsaXZlcnlGYWlsdXJlJywgJ19mYWlsZWRJbnZhbGlkQWRkcmVzcycsICdfZmFpbGVkT3RoZXInLCAnX2ZhaWxlZFNwYW0nLCAnX2ZhaWxlZFRlbXBsYXRlRXJyb3InLCAnX2ZhaWxlZFVuZXhwZWN0ZWRFcnJvcicsICdfaW52YWxpZFNlbmRlckFkZHJlc3MnLCAnX21haWxib3hEaXNhYmxlZCcsICdfbWFpbGJveElzRnVsbCcsICdfbWFpbGJveE5vdEFjY2VwdGluZ01lc3NhZ2VzJywgJ19tYWlsUHJvdG9jb2xJc3N1ZXMnLCAnX21lZGlhRXJyb3InLCAnX21lc3NhZ2VFeGNlZWRzU2l6ZUxlbmd0aExpbWl0cycsICdfbmV0d29ya1NlcnZlcklzc3VlcycsICdfb3BlbmVkJywgJ19wdXJjaGFzZWQnLCAnX3F1ZXVlZCcsICdfcmVjZWl2ZWQnLCAnX3Jlc3BvbmRlZCcsICdfc2VjdXJpdHlJc3N1ZXMnLCAnX3NlbnQnLCAnX3NraXBwZWREdWVUb1ByZXZpb3VzSGFyZEJvdW5jZScsICdfc3Vic2NyaWJlZCcsICdfdG9vTWFueVJlY2lwaWVudHMnLCAnX3Vuc3Vic2NyaWJlZCcsICdfdW5zdWJzY3JpYmVkQnlGZWVkYmFja0xvb3AnXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdQcm9tb3Rpb25Db2RlQXBwbHlEaXNjb3VudFRvJyxcbiAgICAgICAgdmFsdWVzOiBbJ19hbGxTYWxlcycsICdfZmlyc3RTYWxlT25seSddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0NhbXBhaWduUmVzcG9uc2VDYXRlZ29yeScsXG4gICAgICAgIHZhbHVlczogWydfYm91bmNlZCcsICdfY2xpY2tlZFRocm91Z2gnLCAnX2ZhaWxlZCcsICdfcHVyY2hhc2VkJywgJ19xdWV1ZWQnLCAnX3JlY2VpdmVkJywgJ19yZXNwb25kZWQnLCAnX3NlbnQnLCAnX3N1YnNjcmliZWQnLCAnX3Vuc3Vic2NyaWJlZCddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0NhbXBhaWduQ2FtcGFpZ25FdmVudFN0YXR1cycsXG4gICAgICAgIHZhbHVlczogWydfY29tcGxldGVkJywgJ19leGVjdXRlJywgJ19pblByb2dyZXNzJywgJ19ub3RTdGFydGVkJ11cbiAgICAgIH1dLFxuICAgIGVsZW1lbnRJbmZvczogW11cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfbWFya2V0aW5nXzIwMTlfMl90eXBlczogY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2xpc3RzX21hcmtldGluZ18yMDE5XzJfdHlwZXNcbiAgfTtcbn07XG5pZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShbXSwgY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2xpc3RzX21hcmtldGluZ18yMDE5XzJfdHlwZXNfTW9kdWxlX0ZhY3RvcnkpO1xufVxuZWxzZSB7XG4gIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfbWFya2V0aW5nXzIwMTlfMl90eXBlc19Nb2R1bGUgPSBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfbWFya2V0aW5nXzIwMTlfMl90eXBlc19Nb2R1bGVfRmFjdG9yeSgpO1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cy5jb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfbWFya2V0aW5nXzIwMTlfMl90eXBlcyA9IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19saXN0c19tYXJrZXRpbmdfMjAxOV8yX3R5cGVzX01vZHVsZS5jb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfbWFya2V0aW5nXzIwMTlfMl90eXBlcztcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2xpc3RzX21hcmtldGluZ18yMDE5XzJfdHlwZXMgPSBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfbWFya2V0aW5nXzIwMTlfMl90eXBlc19Nb2R1bGUuY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2xpc3RzX21hcmtldGluZ18yMDE5XzJfdHlwZXM7XG4gIH1cbn0iXX0=