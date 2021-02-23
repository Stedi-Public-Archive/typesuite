"use strict";
var com_netsuite_webservices_transactions_customers_2019_2_types_Module_Factory = function () {
    var com_netsuite_webservices_transactions_customers_2019_2_types = {
        name: 'com_netsuite_webservices_transactions_customers_2019_2_types',
        typeInfos: [{
                type: 'enumInfo',
                localName: 'ReturnAuthorizationOrderStatus',
                values: ['_pendingApproval', '_pendingReceipt']
            }, {
                type: 'enumInfo',
                localName: 'ChargeStage',
                values: ['_hold', '_nonBillable', '_processed', '_ready']
            }, {
                type: 'enumInfo',
                localName: 'CashRefundHandlingMode',
                values: ['_process', '_recordExternalEvent', '_saveOnly']
            }, {
                type: 'enumInfo',
                localName: 'CustomerPaymentPaymentOperation',
                values: ['_authorization', '_capture', '_sale', '_refund', '_credit', '_refresh', '_void']
            }, {
                type: 'enumInfo',
                localName: 'CustomerDepositPaymentOperation',
                values: ['_authorization', '_capture', '_sale', '_refund', '_credit', '_refresh', '_void']
            }, {
                type: 'enumInfo',
                localName: 'ChargeUse',
                values: ['_actual', '_forecast']
            }, {
                type: 'enumInfo',
                localName: 'CustomerRefundHandlingMode',
                values: ['_process', '_recordExternalEvent', '_saveOnly']
            }, {
                type: 'enumInfo',
                localName: 'CustomerDepositHandlingMode',
                values: ['_process', '_recordExternalEvent', '_saveOnly']
            }, {
                type: 'enumInfo',
                localName: 'CustomerPaymentHandlingMode',
                values: ['_process', '_recordExternalEvent', '_saveOnly']
            }, {
                type: 'enumInfo',
                localName: 'CashRefundPaymentOperation',
                values: ['_authorization', '_capture', '_sale', '_refund', '_credit', '_refresh', '_void']
            }, {
                type: 'enumInfo',
                localName: 'CustomerRefundPaymentOperation',
                values: ['_authorization', '_capture', '_sale', '_refund', '_credit', '_refresh', '_void']
            }],
        elementInfos: []
    };
    return {
        com_netsuite_webservices_transactions_customers_2019_2_types: com_netsuite_webservices_transactions_customers_2019_2_types
    };
};
if (typeof define === 'function' && define.amd) {
    define([], com_netsuite_webservices_transactions_customers_2019_2_types_Module_Factory);
}
else {
    var com_netsuite_webservices_transactions_customers_2019_2_types_Module = com_netsuite_webservices_transactions_customers_2019_2_types_Module_Factory();
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.com_netsuite_webservices_transactions_customers_2019_2_types = com_netsuite_webservices_transactions_customers_2019_2_types_Module.com_netsuite_webservices_transactions_customers_2019_2_types;
    }
    else {
        var com_netsuite_webservices_transactions_customers_2019_2_types = com_netsuite_webservices_transactions_customers_2019_2_types_Module.com_netsuite_webservices_transactions_customers_2019_2_types;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19jdXN0b21lcnNfMjAxOV8yX3R5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25ldHN1aXRlX3dlYnNlcnZpY2VzLzIwMTlfMi9fX21hcHBpbmdzL2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfY3VzdG9tZXJzXzIwMTlfMl90eXBlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSwyRUFBMkUsR0FBRztJQUNoRixJQUFJLDREQUE0RCxHQUFHO1FBQ2pFLElBQUksRUFBRSw4REFBOEQ7UUFDcEUsU0FBUyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSxnQ0FBZ0M7Z0JBQzNDLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDO2FBQ2hELEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSxhQUFhO2dCQUN4QixNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxRQUFRLENBQUM7YUFDMUQsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLHdCQUF3QjtnQkFDbkMsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLHNCQUFzQixFQUFFLFdBQVcsQ0FBQzthQUMxRCxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsaUNBQWlDO2dCQUM1QyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQzthQUMzRixFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsaUNBQWlDO2dCQUM1QyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQzthQUMzRixFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsV0FBVztnQkFDdEIsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQzthQUNqQyxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsNEJBQTRCO2dCQUN2QyxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsc0JBQXNCLEVBQUUsV0FBVyxDQUFDO2FBQzFELEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSw2QkFBNkI7Z0JBQ3hDLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxzQkFBc0IsRUFBRSxXQUFXLENBQUM7YUFDMUQsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLDZCQUE2QjtnQkFDeEMsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLHNCQUFzQixFQUFFLFdBQVcsQ0FBQzthQUMxRCxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsNEJBQTRCO2dCQUN2QyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQzthQUMzRixFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsZ0NBQWdDO2dCQUMzQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQzthQUMzRixDQUFDO1FBQ0osWUFBWSxFQUFFLEVBQUU7S0FDakIsQ0FBQztJQUNGLE9BQU87UUFDTCw0REFBNEQsRUFBRSw0REFBNEQ7S0FDM0gsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxDQUFDLEVBQUUsRUFBRSwyRUFBMkUsQ0FBQyxDQUFDO0NBQ3pGO0tBQ0k7SUFDSCxJQUFJLG1FQUFtRSxHQUFHLDJFQUEyRSxFQUFFLENBQUM7SUFDeEosSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDLDREQUE0RCxHQUFHLG1FQUFtRSxDQUFDLDREQUE0RCxDQUFDO0tBQ2hOO1NBQ0k7UUFDSCxJQUFJLDREQUE0RCxHQUFHLG1FQUFtRSxDQUFDLDREQUE0RCxDQUFDO0tBQ3JNO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19jdXN0b21lcnNfMjAxOV8yX3R5cGVzX01vZHVsZV9GYWN0b3J5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19jdXN0b21lcnNfMjAxOV8yX3R5cGVzID0ge1xuICAgIG5hbWU6ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2N1c3RvbWVyc18yMDE5XzJfdHlwZXMnLFxuICAgIHR5cGVJbmZvczogW3tcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnUmV0dXJuQXV0aG9yaXphdGlvbk9yZGVyU3RhdHVzJyxcbiAgICAgICAgdmFsdWVzOiBbJ19wZW5kaW5nQXBwcm92YWwnLCAnX3BlbmRpbmdSZWNlaXB0J11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnQ2hhcmdlU3RhZ2UnLFxuICAgICAgICB2YWx1ZXM6IFsnX2hvbGQnLCAnX25vbkJpbGxhYmxlJywgJ19wcm9jZXNzZWQnLCAnX3JlYWR5J11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnQ2FzaFJlZnVuZEhhbmRsaW5nTW9kZScsXG4gICAgICAgIHZhbHVlczogWydfcHJvY2VzcycsICdfcmVjb3JkRXh0ZXJuYWxFdmVudCcsICdfc2F2ZU9ubHknXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdDdXN0b21lclBheW1lbnRQYXltZW50T3BlcmF0aW9uJyxcbiAgICAgICAgdmFsdWVzOiBbJ19hdXRob3JpemF0aW9uJywgJ19jYXB0dXJlJywgJ19zYWxlJywgJ19yZWZ1bmQnLCAnX2NyZWRpdCcsICdfcmVmcmVzaCcsICdfdm9pZCddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0N1c3RvbWVyRGVwb3NpdFBheW1lbnRPcGVyYXRpb24nLFxuICAgICAgICB2YWx1ZXM6IFsnX2F1dGhvcml6YXRpb24nLCAnX2NhcHR1cmUnLCAnX3NhbGUnLCAnX3JlZnVuZCcsICdfY3JlZGl0JywgJ19yZWZyZXNoJywgJ192b2lkJ11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnQ2hhcmdlVXNlJyxcbiAgICAgICAgdmFsdWVzOiBbJ19hY3R1YWwnLCAnX2ZvcmVjYXN0J11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnQ3VzdG9tZXJSZWZ1bmRIYW5kbGluZ01vZGUnLFxuICAgICAgICB2YWx1ZXM6IFsnX3Byb2Nlc3MnLCAnX3JlY29yZEV4dGVybmFsRXZlbnQnLCAnX3NhdmVPbmx5J11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnQ3VzdG9tZXJEZXBvc2l0SGFuZGxpbmdNb2RlJyxcbiAgICAgICAgdmFsdWVzOiBbJ19wcm9jZXNzJywgJ19yZWNvcmRFeHRlcm5hbEV2ZW50JywgJ19zYXZlT25seSddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0N1c3RvbWVyUGF5bWVudEhhbmRsaW5nTW9kZScsXG4gICAgICAgIHZhbHVlczogWydfcHJvY2VzcycsICdfcmVjb3JkRXh0ZXJuYWxFdmVudCcsICdfc2F2ZU9ubHknXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdDYXNoUmVmdW5kUGF5bWVudE9wZXJhdGlvbicsXG4gICAgICAgIHZhbHVlczogWydfYXV0aG9yaXphdGlvbicsICdfY2FwdHVyZScsICdfc2FsZScsICdfcmVmdW5kJywgJ19jcmVkaXQnLCAnX3JlZnJlc2gnLCAnX3ZvaWQnXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdDdXN0b21lclJlZnVuZFBheW1lbnRPcGVyYXRpb24nLFxuICAgICAgICB2YWx1ZXM6IFsnX2F1dGhvcml6YXRpb24nLCAnX2NhcHR1cmUnLCAnX3NhbGUnLCAnX3JlZnVuZCcsICdfY3JlZGl0JywgJ19yZWZyZXNoJywgJ192b2lkJ11cbiAgICAgIH1dLFxuICAgIGVsZW1lbnRJbmZvczogW11cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2N1c3RvbWVyc18yMDE5XzJfdHlwZXM6IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfY3VzdG9tZXJzXzIwMTlfMl90eXBlc1xuICB9O1xufTtcbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKFtdLCBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2N1c3RvbWVyc18yMDE5XzJfdHlwZXNfTW9kdWxlX0ZhY3RvcnkpO1xufVxuZWxzZSB7XG4gIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2N1c3RvbWVyc18yMDE5XzJfdHlwZXNfTW9kdWxlID0gY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19jdXN0b21lcnNfMjAxOV8yX3R5cGVzX01vZHVsZV9GYWN0b3J5KCk7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzLmNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfY3VzdG9tZXJzXzIwMTlfMl90eXBlcyA9IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfY3VzdG9tZXJzXzIwMTlfMl90eXBlc19Nb2R1bGUuY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19jdXN0b21lcnNfMjAxOV8yX3R5cGVzO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2N1c3RvbWVyc18yMDE5XzJfdHlwZXMgPSBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2N1c3RvbWVyc18yMDE5XzJfdHlwZXNfTW9kdWxlLmNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfY3VzdG9tZXJzXzIwMTlfMl90eXBlcztcbiAgfVxufSJdfQ==