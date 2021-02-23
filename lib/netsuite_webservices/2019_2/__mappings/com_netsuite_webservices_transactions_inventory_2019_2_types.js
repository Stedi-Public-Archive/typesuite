"use strict";
var com_netsuite_webservices_transactions_inventory_2019_2_types_Module_Factory = function () {
    var com_netsuite_webservices_transactions_inventory_2019_2_types = {
        name: 'com_netsuite_webservices_transactions_inventory_2019_2_types',
        typeInfos: [{
                type: 'enumInfo',
                localName: 'TransferOrderItemCommitInventory',
                values: ['_availableQty', '_completeQty', '_doNotCommit']
            }, {
                type: 'enumInfo',
                localName: 'WorkOrderOrderStatus',
                values: ['_built', '_cancelled', '_closed', '_inProcess', '_planned', '_released', '_undefined']
            }, {
                type: 'enumInfo',
                localName: 'WorkOrderItemItemCommitInventory',
                values: ['_availableQty', '_completeQty', '_doNotCommit']
            }, {
                type: 'enumInfo',
                localName: 'WorkOrderSchedulingMethod',
                values: ['_backward', '_forward']
            }, {
                type: 'enumInfo',
                localName: 'TransferOrderOrderStatus',
                values: ['_pendingApproval', '_pendingFulfillment', '_rejected', '_partiallyFulfilled', '_pendingReceiptPartFulfilled', '_pendingReceipt', '_received', '_closed', '_undefined']
            }],
        elementInfos: []
    };
    return {
        com_netsuite_webservices_transactions_inventory_2019_2_types: com_netsuite_webservices_transactions_inventory_2019_2_types
    };
};
if (typeof define === 'function' && define.amd) {
    define([], com_netsuite_webservices_transactions_inventory_2019_2_types_Module_Factory);
}
else {
    var com_netsuite_webservices_transactions_inventory_2019_2_types_Module = com_netsuite_webservices_transactions_inventory_2019_2_types_Module_Factory();
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.com_netsuite_webservices_transactions_inventory_2019_2_types = com_netsuite_webservices_transactions_inventory_2019_2_types_Module.com_netsuite_webservices_transactions_inventory_2019_2_types;
    }
    else {
        var com_netsuite_webservices_transactions_inventory_2019_2_types = com_netsuite_webservices_transactions_inventory_2019_2_types_Module.com_netsuite_webservices_transactions_inventory_2019_2_types;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19pbnZlbnRvcnlfMjAxOV8yX3R5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25ldHN1aXRlX3dlYnNlcnZpY2VzLzIwMTlfMi9fX21hcHBpbmdzL2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfaW52ZW50b3J5XzIwMTlfMl90eXBlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSwyRUFBMkUsR0FBRztJQUNoRixJQUFJLDREQUE0RCxHQUFHO1FBQ2pFLElBQUksRUFBRSw4REFBOEQ7UUFDcEUsU0FBUyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSxrQ0FBa0M7Z0JBQzdDLE1BQU0sRUFBRSxDQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDO2FBQzFELEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQzthQUNqRyxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsa0NBQWtDO2dCQUM3QyxNQUFNLEVBQUUsQ0FBQyxlQUFlLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQzthQUMxRCxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsMkJBQTJCO2dCQUN0QyxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDO2FBQ2xDLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSwwQkFBMEI7Z0JBQ3JDLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSw4QkFBOEIsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQzthQUNqTCxDQUFDO1FBQ0osWUFBWSxFQUFFLEVBQUU7S0FDakIsQ0FBQztJQUNGLE9BQU87UUFDTCw0REFBNEQsRUFBRSw0REFBNEQ7S0FDM0gsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxDQUFDLEVBQUUsRUFBRSwyRUFBMkUsQ0FBQyxDQUFDO0NBQ3pGO0tBQ0k7SUFDSCxJQUFJLG1FQUFtRSxHQUFHLDJFQUEyRSxFQUFFLENBQUM7SUFDeEosSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDLDREQUE0RCxHQUFHLG1FQUFtRSxDQUFDLDREQUE0RCxDQUFDO0tBQ2hOO1NBQ0k7UUFDSCxJQUFJLDREQUE0RCxHQUFHLG1FQUFtRSxDQUFDLDREQUE0RCxDQUFDO0tBQ3JNO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19pbnZlbnRvcnlfMjAxOV8yX3R5cGVzX01vZHVsZV9GYWN0b3J5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19pbnZlbnRvcnlfMjAxOV8yX3R5cGVzID0ge1xuICAgIG5hbWU6ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2ludmVudG9yeV8yMDE5XzJfdHlwZXMnLFxuICAgIHR5cGVJbmZvczogW3tcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnVHJhbnNmZXJPcmRlckl0ZW1Db21taXRJbnZlbnRvcnknLFxuICAgICAgICB2YWx1ZXM6IFsnX2F2YWlsYWJsZVF0eScsICdfY29tcGxldGVRdHknLCAnX2RvTm90Q29tbWl0J11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnV29ya09yZGVyT3JkZXJTdGF0dXMnLFxuICAgICAgICB2YWx1ZXM6IFsnX2J1aWx0JywgJ19jYW5jZWxsZWQnLCAnX2Nsb3NlZCcsICdfaW5Qcm9jZXNzJywgJ19wbGFubmVkJywgJ19yZWxlYXNlZCcsICdfdW5kZWZpbmVkJ11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnV29ya09yZGVySXRlbUl0ZW1Db21taXRJbnZlbnRvcnknLFxuICAgICAgICB2YWx1ZXM6IFsnX2F2YWlsYWJsZVF0eScsICdfY29tcGxldGVRdHknLCAnX2RvTm90Q29tbWl0J11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnV29ya09yZGVyU2NoZWR1bGluZ01ldGhvZCcsXG4gICAgICAgIHZhbHVlczogWydfYmFja3dhcmQnLCAnX2ZvcndhcmQnXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdUcmFuc2Zlck9yZGVyT3JkZXJTdGF0dXMnLFxuICAgICAgICB2YWx1ZXM6IFsnX3BlbmRpbmdBcHByb3ZhbCcsICdfcGVuZGluZ0Z1bGZpbGxtZW50JywgJ19yZWplY3RlZCcsICdfcGFydGlhbGx5RnVsZmlsbGVkJywgJ19wZW5kaW5nUmVjZWlwdFBhcnRGdWxmaWxsZWQnLCAnX3BlbmRpbmdSZWNlaXB0JywgJ19yZWNlaXZlZCcsICdfY2xvc2VkJywgJ191bmRlZmluZWQnXVxuICAgICAgfV0sXG4gICAgZWxlbWVudEluZm9zOiBbXVxuICB9O1xuICByZXR1cm4ge1xuICAgIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfaW52ZW50b3J5XzIwMTlfMl90eXBlczogY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19pbnZlbnRvcnlfMjAxOV8yX3R5cGVzXG4gIH07XG59O1xuaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoW10sIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfaW52ZW50b3J5XzIwMTlfMl90eXBlc19Nb2R1bGVfRmFjdG9yeSk7XG59XG5lbHNlIHtcbiAgdmFyIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfaW52ZW50b3J5XzIwMTlfMl90eXBlc19Nb2R1bGUgPSBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2ludmVudG9yeV8yMDE5XzJfdHlwZXNfTW9kdWxlX0ZhY3RvcnkoKTtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMuY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19pbnZlbnRvcnlfMjAxOV8yX3R5cGVzID0gY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19pbnZlbnRvcnlfMjAxOV8yX3R5cGVzX01vZHVsZS5jb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2ludmVudG9yeV8yMDE5XzJfdHlwZXM7XG4gIH1cbiAgZWxzZSB7XG4gICAgdmFyIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfaW52ZW50b3J5XzIwMTlfMl90eXBlcyA9IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfaW52ZW50b3J5XzIwMTlfMl90eXBlc19Nb2R1bGUuY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19pbnZlbnRvcnlfMjAxOV8yX3R5cGVzO1xuICB9XG59Il19