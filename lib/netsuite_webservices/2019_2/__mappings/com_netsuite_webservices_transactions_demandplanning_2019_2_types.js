"use strict";
var com_netsuite_webservices_transactions_demandplanning_2019_2_types_Module_Factory = function () {
    var com_netsuite_webservices_transactions_demandplanning_2019_2_types = {
        name: 'com_netsuite_webservices_transactions_demandplanning_2019_2_types',
        typeInfos: [{
                type: 'enumInfo',
                localName: 'DemandPlanCalendarType',
                values: ['_daily', '_monthly', '_weekly']
            }, {
                type: 'enumInfo',
                localName: 'ItemSupplyPlanOrderType',
                values: ['_purchaseOrder', '_transferOrder', '_workOrder']
            }, {
                type: 'enumInfo',
                localName: 'ItemDemandPlanProjectionMethod',
                values: ['_linearRegression', '_movingAverage', '_salesForecast', '_seasonalAverage']
            }, {
                type: 'enumInfo',
                localName: 'DemandPlanMonth',
                values: ['_april', '_august', '_december', '_february', '_january', '_july', '_june', '_march', '_may', '_november', '_october', '_september']
            }, {
                type: 'enumInfo',
                localName: 'DayOfTheWeek',
                values: ['_sunday', '_monday', '_tuesday', '_wednesday', '_thursday', '_friday', '_saturday']
            }],
        elementInfos: []
    };
    return {
        com_netsuite_webservices_transactions_demandplanning_2019_2_types: com_netsuite_webservices_transactions_demandplanning_2019_2_types
    };
};
if (typeof define === 'function' && define.amd) {
    define([], com_netsuite_webservices_transactions_demandplanning_2019_2_types_Module_Factory);
}
else {
    var com_netsuite_webservices_transactions_demandplanning_2019_2_types_Module = com_netsuite_webservices_transactions_demandplanning_2019_2_types_Module_Factory();
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.com_netsuite_webservices_transactions_demandplanning_2019_2_types = com_netsuite_webservices_transactions_demandplanning_2019_2_types_Module.com_netsuite_webservices_transactions_demandplanning_2019_2_types;
    }
    else {
        var com_netsuite_webservices_transactions_demandplanning_2019_2_types = com_netsuite_webservices_transactions_demandplanning_2019_2_types_Module.com_netsuite_webservices_transactions_demandplanning_2019_2_types;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19kZW1hbmRwbGFubmluZ18yMDE5XzJfdHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbmV0c3VpdGVfd2Vic2VydmljZXMvMjAxOV8yL19fbWFwcGluZ3MvY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19kZW1hbmRwbGFubmluZ18yMDE5XzJfdHlwZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksZ0ZBQWdGLEdBQUc7SUFDckYsSUFBSSxpRUFBaUUsR0FBRztRQUN0RSxJQUFJLEVBQUUsbUVBQW1FO1FBQ3pFLFNBQVMsRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsd0JBQXdCO2dCQUNuQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQzthQUMxQyxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUseUJBQXlCO2dCQUNwQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUM7YUFDM0QsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLGdDQUFnQztnQkFDM0MsTUFBTSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUM7YUFDdEYsRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLGlCQUFpQjtnQkFDNUIsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUM7YUFDL0ksRUFBRTtnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQzthQUM5RixDQUFDO1FBQ0osWUFBWSxFQUFFLEVBQUU7S0FDakIsQ0FBQztJQUNGLE9BQU87UUFDTCxpRUFBaUUsRUFBRSxpRUFBaUU7S0FDckksQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxnRkFBZ0YsQ0FBQyxDQUFDO0NBQzlGO0tBQ0k7SUFDSCxJQUFJLHdFQUF3RSxHQUFHLGdGQUFnRixFQUFFLENBQUM7SUFDbEssSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDLGlFQUFpRSxHQUFHLHdFQUF3RSxDQUFDLGlFQUFpRSxDQUFDO0tBQy9OO1NBQ0k7UUFDSCxJQUFJLGlFQUFpRSxHQUFHLHdFQUF3RSxDQUFDLGlFQUFpRSxDQUFDO0tBQ3BOO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19kZW1hbmRwbGFubmluZ18yMDE5XzJfdHlwZXNfTW9kdWxlX0ZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2RlbWFuZHBsYW5uaW5nXzIwMTlfMl90eXBlcyA9IHtcbiAgICBuYW1lOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19kZW1hbmRwbGFubmluZ18yMDE5XzJfdHlwZXMnLFxuICAgIHR5cGVJbmZvczogW3tcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnRGVtYW5kUGxhbkNhbGVuZGFyVHlwZScsXG4gICAgICAgIHZhbHVlczogWydfZGFpbHknLCAnX21vbnRobHknLCAnX3dlZWtseSddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0l0ZW1TdXBwbHlQbGFuT3JkZXJUeXBlJyxcbiAgICAgICAgdmFsdWVzOiBbJ19wdXJjaGFzZU9yZGVyJywgJ190cmFuc2Zlck9yZGVyJywgJ193b3JrT3JkZXInXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZW51bUluZm8nLFxuICAgICAgICBsb2NhbE5hbWU6ICdJdGVtRGVtYW5kUGxhblByb2plY3Rpb25NZXRob2QnLFxuICAgICAgICB2YWx1ZXM6IFsnX2xpbmVhclJlZ3Jlc3Npb24nLCAnX21vdmluZ0F2ZXJhZ2UnLCAnX3NhbGVzRm9yZWNhc3QnLCAnX3NlYXNvbmFsQXZlcmFnZSddXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdlbnVtSW5mbycsXG4gICAgICAgIGxvY2FsTmFtZTogJ0RlbWFuZFBsYW5Nb250aCcsXG4gICAgICAgIHZhbHVlczogWydfYXByaWwnLCAnX2F1Z3VzdCcsICdfZGVjZW1iZXInLCAnX2ZlYnJ1YXJ5JywgJ19qYW51YXJ5JywgJ19qdWx5JywgJ19qdW5lJywgJ19tYXJjaCcsICdfbWF5JywgJ19ub3ZlbWJlcicsICdfb2N0b2JlcicsICdfc2VwdGVtYmVyJ11cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2VudW1JbmZvJyxcbiAgICAgICAgbG9jYWxOYW1lOiAnRGF5T2ZUaGVXZWVrJyxcbiAgICAgICAgdmFsdWVzOiBbJ19zdW5kYXknLCAnX21vbmRheScsICdfdHVlc2RheScsICdfd2VkbmVzZGF5JywgJ190aHVyc2RheScsICdfZnJpZGF5JywgJ19zYXR1cmRheSddXG4gICAgICB9XSxcbiAgICBlbGVtZW50SW5mb3M6IFtdXG4gIH07XG4gIHJldHVybiB7XG4gICAgY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19kZW1hbmRwbGFubmluZ18yMDE5XzJfdHlwZXM6IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZGVtYW5kcGxhbm5pbmdfMjAxOV8yX3R5cGVzXG4gIH07XG59O1xuaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoW10sIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZGVtYW5kcGxhbm5pbmdfMjAxOV8yX3R5cGVzX01vZHVsZV9GYWN0b3J5KTtcbn1cbmVsc2Uge1xuICB2YXIgY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19kZW1hbmRwbGFubmluZ18yMDE5XzJfdHlwZXNfTW9kdWxlID0gY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19kZW1hbmRwbGFubmluZ18yMDE5XzJfdHlwZXNfTW9kdWxlX0ZhY3RvcnkoKTtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMuY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19kZW1hbmRwbGFubmluZ18yMDE5XzJfdHlwZXMgPSBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2RlbWFuZHBsYW5uaW5nXzIwMTlfMl90eXBlc19Nb2R1bGUuY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19kZW1hbmRwbGFubmluZ18yMDE5XzJfdHlwZXM7XG4gIH1cbiAgZWxzZSB7XG4gICAgdmFyIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZGVtYW5kcGxhbm5pbmdfMjAxOV8yX3R5cGVzID0gY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19kZW1hbmRwbGFubmluZ18yMDE5XzJfdHlwZXNfTW9kdWxlLmNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZGVtYW5kcGxhbm5pbmdfMjAxOV8yX3R5cGVzO1xuICB9XG59Il19