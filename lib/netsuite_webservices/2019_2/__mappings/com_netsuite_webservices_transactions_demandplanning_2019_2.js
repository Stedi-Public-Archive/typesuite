"use strict";
var com_netsuite_webservices_transactions_demandplanning_2019_2_Module_Factory = function () {
    var com_netsuite_webservices_transactions_demandplanning_2019_2 = {
        name: 'com_netsuite_webservices_transactions_demandplanning_2019_2',
        defaultElementNamespaceURI: 'urn:demandplanning_2019_2.transactions.webservices.netsuite.com',
        dependencies: ['com_netsuite_webservices_transactions_demandplanning_2019_2_types', 'com_netsuite_webservices_platform_core_2019_2', 'com_netsuite_webservices_platform_common_2019_2'],
        typeInfos: [{
                localName: 'DemandPlan',
                propertyInfos: [{
                        name: 'startDate',
                        required: true,
                        typeInfo: 'DateTime'
                    }, {
                        name: 'endDate',
                        typeInfo: 'DateTime'
                    }, {
                        name: 'calculatedQuantity',
                        typeInfo: 'Double'
                    }, {
                        name: 'periodDemandPlanList',
                        typeInfo: '.PeriodDemandPlanList'
                    }]
            }, {
                localName: 'ItemDemandPlanSearchAdvanced',
                baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
                propertyInfos: [{
                        name: 'criteria',
                        typeInfo: '.ItemDemandPlanSearch'
                    }, {
                        name: 'columns',
                        typeInfo: '.ItemDemandPlanSearchRow'
                    }, {
                        name: 'savedSearchId',
                        attributeName: {
                            localPart: 'savedSearchId'
                        },
                        type: 'attribute'
                    }, {
                        name: 'savedSearchScriptId',
                        attributeName: {
                            localPart: 'savedSearchScriptId'
                        },
                        type: 'attribute'
                    }]
            }, {
                localName: 'ItemDemandPlan',
                baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
                propertyInfos: [{
                        name: 'customForm',
                        typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
                    }, {
                        name: 'subsidiary',
                        typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
                    }, {
                        name: 'location',
                        typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
                    }, {
                        name: 'item',
                        typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
                    }, {
                        name: 'units',
                        typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
                    }, {
                        name: 'memo'
                    }, {
                        name: 'year',
                        typeInfo: 'Long'
                    }, {
                        name: 'month',
                        typeInfo: 'com_netsuite_webservices_transactions_demandplanning_2019_2_types.DemandPlanMonth'
                    }, {
                        name: 'startDate',
                        typeInfo: 'DateTime'
                    }, {
                        name: 'endDate',
                        typeInfo: 'DateTime'
                    }, {
                        name: 'demandPlanCalendarType',
                        typeInfo: 'com_netsuite_webservices_transactions_demandplanning_2019_2_types.DemandPlanCalendarType'
                    }, {
                        name: 'demandPlanMatrix',
                        typeInfo: '.DemandPlanMatrix'
                    }, {
                        name: 'customFieldList',
                        typeInfo: 'com_netsuite_webservices_platform_core_2019_2.CustomFieldList'
                    }, {
                        name: 'internalId',
                        attributeName: {
                            localPart: 'internalId'
                        },
                        type: 'attribute'
                    }, {
                        name: 'externalId',
                        attributeName: {
                            localPart: 'externalId'
                        },
                        type: 'attribute'
                    }]
            }, {
                localName: 'ItemSupplyPlanSearchRow',
                baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRow',
                propertyInfos: [{
                        name: 'basic',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ItemSupplyPlanSearchRowBasic'
                    }, {
                        name: 'itemJoin',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ItemSearchRowBasic'
                    }, {
                        name: 'locationJoin',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.LocationSearchRowBasic'
                    }, {
                        name: 'userJoin',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchRowBasic'
                    }, {
                        name: 'customSearchJoin',
                        minOccurs: 0,
                        collection: true,
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomSearchRowBasic'
                    }]
            }, {
                localName: 'ItemSupplyPlanOrder',
                propertyInfos: [{
                        name: 'orderLineId',
                        typeInfo: 'Long'
                    }, {
                        name: 'orderDate',
                        typeInfo: 'DateTime'
                    }, {
                        name: 'receiptDate',
                        typeInfo: 'DateTime'
                    }, {
                        name: 'sourceLocation',
                        typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
                    }, {
                        name: 'quantity',
                        typeInfo: 'Double'
                    }, {
                        name: 'orderCreated',
                        typeInfo: 'Boolean'
                    }, {
                        name: 'orderType',
                        typeInfo: 'com_netsuite_webservices_transactions_demandplanning_2019_2_types.ItemSupplyPlanOrderType'
                    }]
            }, {
                localName: 'PeriodDemandPlan',
                propertyInfos: [{
                        name: 'quantity',
                        required: true,
                        typeInfo: 'Double'
                    }, {
                        name: 'dayOfTheWeek',
                        typeInfo: 'com_netsuite_webservices_transactions_demandplanning_2019_2_types.DayOfTheWeek'
                    }]
            }, {
                localName: 'ItemDemandPlanSearchRow',
                baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRow',
                propertyInfos: [{
                        name: 'basic',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ItemDemandPlanSearchRowBasic'
                    }, {
                        name: 'itemJoin',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ItemSearchRowBasic'
                    }, {
                        name: 'lastAlternateSourceItemJoin',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ItemSearchRowBasic'
                    }, {
                        name: 'locationJoin',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.LocationSearchRowBasic'
                    }, {
                        name: 'userJoin',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchRowBasic'
                    }, {
                        name: 'customSearchJoin',
                        minOccurs: 0,
                        collection: true,
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomSearchRowBasic'
                    }]
            }, {
                localName: 'ItemDemandPlanSearch',
                baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
                propertyInfos: [{
                        name: 'basic',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ItemDemandPlanSearchBasic'
                    }, {
                        name: 'itemJoin',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ItemSearchBasic'
                    }, {
                        name: 'lastAlternateSourceItemJoin',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ItemSearchBasic'
                    }, {
                        name: 'locationJoin',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.LocationSearchBasic'
                    }, {
                        name: 'userJoin',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchBasic'
                    }, {
                        name: 'customSearchJoin',
                        minOccurs: 0,
                        collection: true,
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomSearchJoin'
                    }]
            }, {
                localName: 'ItemSupplyPlanSearch',
                baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
                propertyInfos: [{
                        name: 'basic',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ItemSupplyPlanSearchBasic'
                    }, {
                        name: 'itemJoin',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ItemSearchBasic'
                    }, {
                        name: 'locationJoin',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.LocationSearchBasic'
                    }, {
                        name: 'userJoin',
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchBasic'
                    }, {
                        name: 'customSearchJoin',
                        minOccurs: 0,
                        collection: true,
                        typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomSearchJoin'
                    }]
            }, {
                localName: 'DemandPlanMatrix',
                propertyInfos: [{
                        name: 'demandPlan',
                        minOccurs: 0,
                        collection: true,
                        typeInfo: '.DemandPlan'
                    }, {
                        name: 'replaceAll',
                        typeInfo: 'Boolean',
                        attributeName: {
                            localPart: 'replaceAll'
                        },
                        type: 'attribute'
                    }]
            }, {
                localName: 'PeriodDemandPlanList',
                propertyInfos: [{
                        name: 'periodDemandPlan',
                        minOccurs: 0,
                        collection: true,
                        typeInfo: '.PeriodDemandPlan'
                    }]
            }, {
                localName: 'ItemSupplyPlan',
                baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
                propertyInfos: [{
                        name: 'customForm',
                        typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
                    }, {
                        name: 'subsidiary',
                        typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
                    }, {
                        name: 'location',
                        typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
                    }, {
                        name: 'item',
                        typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
                    }, {
                        name: 'units',
                        typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
                    }, {
                        name: 'memo'
                    }, {
                        name: 'orderList',
                        typeInfo: '.ItemSupplyPlanOrderList'
                    }, {
                        name: 'customFieldList',
                        typeInfo: 'com_netsuite_webservices_platform_core_2019_2.CustomFieldList'
                    }, {
                        name: 'internalId',
                        attributeName: {
                            localPart: 'internalId'
                        },
                        type: 'attribute'
                    }, {
                        name: 'externalId',
                        attributeName: {
                            localPart: 'externalId'
                        },
                        type: 'attribute'
                    }]
            }, {
                localName: 'ItemSupplyPlanSearchAdvanced',
                baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
                propertyInfos: [{
                        name: 'criteria',
                        typeInfo: '.ItemSupplyPlanSearch'
                    }, {
                        name: 'columns',
                        typeInfo: '.ItemSupplyPlanSearchRow'
                    }, {
                        name: 'savedSearchId',
                        attributeName: {
                            localPart: 'savedSearchId'
                        },
                        type: 'attribute'
                    }, {
                        name: 'savedSearchScriptId',
                        attributeName: {
                            localPart: 'savedSearchScriptId'
                        },
                        type: 'attribute'
                    }]
            }, {
                localName: 'ItemSupplyPlanOrderList',
                propertyInfos: [{
                        name: 'itemSupplyPlanOrder',
                        minOccurs: 0,
                        collection: true,
                        typeInfo: '.ItemSupplyPlanOrder'
                    }, {
                        name: 'replaceAll',
                        typeInfo: 'Boolean',
                        attributeName: {
                            localPart: 'replaceAll'
                        },
                        type: 'attribute'
                    }]
            }],
        elementInfos: [{
                typeInfo: '.ItemSupplyPlan',
                elementName: 'itemSupplyPlan'
            }, {
                typeInfo: '.ItemDemandPlan',
                elementName: 'itemDemandPlan'
            }, {
                typeInfo: '.ItemDemandPlanSearch',
                elementName: 'itemDemandPlanSearch'
            }, {
                typeInfo: '.ItemSupplyPlanSearch',
                elementName: 'itemSupplyPlanSearch'
            }]
    };
    return {
        com_netsuite_webservices_transactions_demandplanning_2019_2: com_netsuite_webservices_transactions_demandplanning_2019_2
    };
};
if (typeof define === 'function' && define.amd) {
    define([], com_netsuite_webservices_transactions_demandplanning_2019_2_Module_Factory);
}
else {
    var com_netsuite_webservices_transactions_demandplanning_2019_2_Module = com_netsuite_webservices_transactions_demandplanning_2019_2_Module_Factory();
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.com_netsuite_webservices_transactions_demandplanning_2019_2 = com_netsuite_webservices_transactions_demandplanning_2019_2_Module.com_netsuite_webservices_transactions_demandplanning_2019_2;
    }
    else {
        var com_netsuite_webservices_transactions_demandplanning_2019_2 = com_netsuite_webservices_transactions_demandplanning_2019_2_Module.com_netsuite_webservices_transactions_demandplanning_2019_2;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19kZW1hbmRwbGFubmluZ18yMDE5XzIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbmV0c3VpdGVfd2Vic2VydmljZXMvMjAxOV8yL19fbWFwcGluZ3MvY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19kZW1hbmRwbGFubmluZ18yMDE5XzIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksMEVBQTBFLEdBQUc7SUFDL0UsSUFBSSwyREFBMkQsR0FBRztRQUNoRSxJQUFJLEVBQUUsNkRBQTZEO1FBQ25FLDBCQUEwQixFQUFFLGlFQUFpRTtRQUM3RixZQUFZLEVBQUUsQ0FBQyxtRUFBbUUsRUFBRSwrQ0FBK0MsRUFBRSxpREFBaUQsQ0FBQztRQUN2TCxTQUFTLEVBQUUsQ0FBQztnQkFDUixTQUFTLEVBQUUsWUFBWTtnQkFDdkIsYUFBYSxFQUFFLENBQUM7d0JBQ1osSUFBSSxFQUFFLFdBQVc7d0JBQ2pCLFFBQVEsRUFBRSxJQUFJO3dCQUNkLFFBQVEsRUFBRSxVQUFVO3FCQUNyQixFQUFFO3dCQUNELElBQUksRUFBRSxTQUFTO3dCQUNmLFFBQVEsRUFBRSxVQUFVO3FCQUNyQixFQUFFO3dCQUNELElBQUksRUFBRSxvQkFBb0I7d0JBQzFCLFFBQVEsRUFBRSxRQUFRO3FCQUNuQixFQUFFO3dCQUNELElBQUksRUFBRSxzQkFBc0I7d0JBQzVCLFFBQVEsRUFBRSx1QkFBdUI7cUJBQ2xDLENBQUM7YUFDTCxFQUFFO2dCQUNELFNBQVMsRUFBRSw4QkFBOEI7Z0JBQ3pDLFlBQVksRUFBRSw0REFBNEQ7Z0JBQzFFLGFBQWEsRUFBRSxDQUFDO3dCQUNaLElBQUksRUFBRSxVQUFVO3dCQUNoQixRQUFRLEVBQUUsdUJBQXVCO3FCQUNsQyxFQUFFO3dCQUNELElBQUksRUFBRSxTQUFTO3dCQUNmLFFBQVEsRUFBRSwwQkFBMEI7cUJBQ3JDLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLGVBQWU7d0JBQ3JCLGFBQWEsRUFBRTs0QkFDYixTQUFTLEVBQUUsZUFBZTt5QkFDM0I7d0JBQ0QsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLHFCQUFxQjt3QkFDM0IsYUFBYSxFQUFFOzRCQUNiLFNBQVMsRUFBRSxxQkFBcUI7eUJBQ2pDO3dCQUNELElBQUksRUFBRSxXQUFXO3FCQUNsQixDQUFDO2FBQ0wsRUFBRTtnQkFDRCxTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixZQUFZLEVBQUUsc0RBQXNEO2dCQUNwRSxhQUFhLEVBQUUsQ0FBQzt3QkFDWixJQUFJLEVBQUUsWUFBWTt3QkFDbEIsUUFBUSxFQUFFLHlEQUF5RDtxQkFDcEUsRUFBRTt3QkFDRCxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsUUFBUSxFQUFFLHlEQUF5RDtxQkFDcEUsRUFBRTt3QkFDRCxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsUUFBUSxFQUFFLHlEQUF5RDtxQkFDcEUsRUFBRTt3QkFDRCxJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUseURBQXlEO3FCQUNwRSxFQUFFO3dCQUNELElBQUksRUFBRSxPQUFPO3dCQUNiLFFBQVEsRUFBRSx5REFBeUQ7cUJBQ3BFLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLE1BQU07cUJBQ2IsRUFBRTt3QkFDRCxJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsTUFBTTtxQkFDakIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsT0FBTzt3QkFDYixRQUFRLEVBQUUsbUZBQW1GO3FCQUM5RixFQUFFO3dCQUNELElBQUksRUFBRSxXQUFXO3dCQUNqQixRQUFRLEVBQUUsVUFBVTtxQkFDckIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsU0FBUzt3QkFDZixRQUFRLEVBQUUsVUFBVTtxQkFDckIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsd0JBQXdCO3dCQUM5QixRQUFRLEVBQUUsMEZBQTBGO3FCQUNyRyxFQUFFO3dCQUNELElBQUksRUFBRSxrQkFBa0I7d0JBQ3hCLFFBQVEsRUFBRSxtQkFBbUI7cUJBQzlCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLGlCQUFpQjt3QkFDdkIsUUFBUSxFQUFFLCtEQUErRDtxQkFDMUUsRUFBRTt3QkFDRCxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsYUFBYSxFQUFFOzRCQUNiLFNBQVMsRUFBRSxZQUFZO3lCQUN4Qjt3QkFDRCxJQUFJLEVBQUUsV0FBVztxQkFDbEIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsYUFBYSxFQUFFOzRCQUNiLFNBQVMsRUFBRSxZQUFZO3lCQUN4Qjt3QkFDRCxJQUFJLEVBQUUsV0FBVztxQkFDbEIsQ0FBQzthQUNMLEVBQUU7Z0JBQ0QsU0FBUyxFQUFFLHlCQUF5QjtnQkFDcEMsWUFBWSxFQUFFLHlEQUF5RDtnQkFDdkUsYUFBYSxFQUFFLENBQUM7d0JBQ1osSUFBSSxFQUFFLE9BQU87d0JBQ2IsUUFBUSxFQUFFLDhFQUE4RTtxQkFDekYsRUFBRTt3QkFDRCxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsUUFBUSxFQUFFLG9FQUFvRTtxQkFDL0UsRUFBRTt3QkFDRCxJQUFJLEVBQUUsY0FBYzt3QkFDcEIsUUFBUSxFQUFFLHdFQUF3RTtxQkFDbkYsRUFBRTt3QkFDRCxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsUUFBUSxFQUFFLHdFQUF3RTtxQkFDbkYsRUFBRTt3QkFDRCxJQUFJLEVBQUUsa0JBQWtCO3dCQUN4QixTQUFTLEVBQUUsQ0FBQzt3QkFDWixVQUFVLEVBQUUsSUFBSTt3QkFDaEIsUUFBUSxFQUFFLHNFQUFzRTtxQkFDakYsQ0FBQzthQUNMLEVBQUU7Z0JBQ0QsU0FBUyxFQUFFLHFCQUFxQjtnQkFDaEMsYUFBYSxFQUFFLENBQUM7d0JBQ1osSUFBSSxFQUFFLGFBQWE7d0JBQ25CLFFBQVEsRUFBRSxNQUFNO3FCQUNqQixFQUFFO3dCQUNELElBQUksRUFBRSxXQUFXO3dCQUNqQixRQUFRLEVBQUUsVUFBVTtxQkFDckIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsYUFBYTt3QkFDbkIsUUFBUSxFQUFFLFVBQVU7cUJBQ3JCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLGdCQUFnQjt3QkFDdEIsUUFBUSxFQUFFLHlEQUF5RDtxQkFDcEUsRUFBRTt3QkFDRCxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsUUFBUSxFQUFFLFFBQVE7cUJBQ25CLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLGNBQWM7d0JBQ3BCLFFBQVEsRUFBRSxTQUFTO3FCQUNwQixFQUFFO3dCQUNELElBQUksRUFBRSxXQUFXO3dCQUNqQixRQUFRLEVBQUUsMkZBQTJGO3FCQUN0RyxDQUFDO2FBQ0wsRUFBRTtnQkFDRCxTQUFTLEVBQUUsa0JBQWtCO2dCQUM3QixhQUFhLEVBQUUsQ0FBQzt3QkFDWixJQUFJLEVBQUUsVUFBVTt3QkFDaEIsUUFBUSxFQUFFLElBQUk7d0JBQ2QsUUFBUSxFQUFFLFFBQVE7cUJBQ25CLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLGNBQWM7d0JBQ3BCLFFBQVEsRUFBRSxnRkFBZ0Y7cUJBQzNGLENBQUM7YUFDTCxFQUFFO2dCQUNELFNBQVMsRUFBRSx5QkFBeUI7Z0JBQ3BDLFlBQVksRUFBRSx5REFBeUQ7Z0JBQ3ZFLGFBQWEsRUFBRSxDQUFDO3dCQUNaLElBQUksRUFBRSxPQUFPO3dCQUNiLFFBQVEsRUFBRSw4RUFBOEU7cUJBQ3pGLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLFFBQVEsRUFBRSxvRUFBb0U7cUJBQy9FLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLDZCQUE2Qjt3QkFDbkMsUUFBUSxFQUFFLG9FQUFvRTtxQkFDL0UsRUFBRTt3QkFDRCxJQUFJLEVBQUUsY0FBYzt3QkFDcEIsUUFBUSxFQUFFLHdFQUF3RTtxQkFDbkYsRUFBRTt3QkFDRCxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsUUFBUSxFQUFFLHdFQUF3RTtxQkFDbkYsRUFBRTt3QkFDRCxJQUFJLEVBQUUsa0JBQWtCO3dCQUN4QixTQUFTLEVBQUUsQ0FBQzt3QkFDWixVQUFVLEVBQUUsSUFBSTt3QkFDaEIsUUFBUSxFQUFFLHNFQUFzRTtxQkFDakYsQ0FBQzthQUNMLEVBQUU7Z0JBQ0QsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsWUFBWSxFQUFFLDREQUE0RDtnQkFDMUUsYUFBYSxFQUFFLENBQUM7d0JBQ1osSUFBSSxFQUFFLE9BQU87d0JBQ2IsUUFBUSxFQUFFLDJFQUEyRTtxQkFDdEYsRUFBRTt3QkFDRCxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsUUFBUSxFQUFFLGlFQUFpRTtxQkFDNUUsRUFBRTt3QkFDRCxJQUFJLEVBQUUsNkJBQTZCO3dCQUNuQyxRQUFRLEVBQUUsaUVBQWlFO3FCQUM1RSxFQUFFO3dCQUNELElBQUksRUFBRSxjQUFjO3dCQUNwQixRQUFRLEVBQUUscUVBQXFFO3FCQUNoRixFQUFFO3dCQUNELElBQUksRUFBRSxVQUFVO3dCQUNoQixRQUFRLEVBQUUscUVBQXFFO3FCQUNoRixFQUFFO3dCQUNELElBQUksRUFBRSxrQkFBa0I7d0JBQ3hCLFNBQVMsRUFBRSxDQUFDO3dCQUNaLFVBQVUsRUFBRSxJQUFJO3dCQUNoQixRQUFRLEVBQUUsa0VBQWtFO3FCQUM3RSxDQUFDO2FBQ0wsRUFBRTtnQkFDRCxTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxZQUFZLEVBQUUsNERBQTREO2dCQUMxRSxhQUFhLEVBQUUsQ0FBQzt3QkFDWixJQUFJLEVBQUUsT0FBTzt3QkFDYixRQUFRLEVBQUUsMkVBQTJFO3FCQUN0RixFQUFFO3dCQUNELElBQUksRUFBRSxVQUFVO3dCQUNoQixRQUFRLEVBQUUsaUVBQWlFO3FCQUM1RSxFQUFFO3dCQUNELElBQUksRUFBRSxjQUFjO3dCQUNwQixRQUFRLEVBQUUscUVBQXFFO3FCQUNoRixFQUFFO3dCQUNELElBQUksRUFBRSxVQUFVO3dCQUNoQixRQUFRLEVBQUUscUVBQXFFO3FCQUNoRixFQUFFO3dCQUNELElBQUksRUFBRSxrQkFBa0I7d0JBQ3hCLFNBQVMsRUFBRSxDQUFDO3dCQUNaLFVBQVUsRUFBRSxJQUFJO3dCQUNoQixRQUFRLEVBQUUsa0VBQWtFO3FCQUM3RSxDQUFDO2FBQ0wsRUFBRTtnQkFDRCxTQUFTLEVBQUUsa0JBQWtCO2dCQUM3QixhQUFhLEVBQUUsQ0FBQzt3QkFDWixJQUFJLEVBQUUsWUFBWTt3QkFDbEIsU0FBUyxFQUFFLENBQUM7d0JBQ1osVUFBVSxFQUFFLElBQUk7d0JBQ2hCLFFBQVEsRUFBRSxhQUFhO3FCQUN4QixFQUFFO3dCQUNELElBQUksRUFBRSxZQUFZO3dCQUNsQixRQUFRLEVBQUUsU0FBUzt3QkFDbkIsYUFBYSxFQUFFOzRCQUNiLFNBQVMsRUFBRSxZQUFZO3lCQUN4Qjt3QkFDRCxJQUFJLEVBQUUsV0FBVztxQkFDbEIsQ0FBQzthQUNMLEVBQUU7Z0JBQ0QsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsYUFBYSxFQUFFLENBQUM7d0JBQ1osSUFBSSxFQUFFLGtCQUFrQjt3QkFDeEIsU0FBUyxFQUFFLENBQUM7d0JBQ1osVUFBVSxFQUFFLElBQUk7d0JBQ2hCLFFBQVEsRUFBRSxtQkFBbUI7cUJBQzlCLENBQUM7YUFDTCxFQUFFO2dCQUNELFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLFlBQVksRUFBRSxzREFBc0Q7Z0JBQ3BFLGFBQWEsRUFBRSxDQUFDO3dCQUNaLElBQUksRUFBRSxZQUFZO3dCQUNsQixRQUFRLEVBQUUseURBQXlEO3FCQUNwRSxFQUFFO3dCQUNELElBQUksRUFBRSxZQUFZO3dCQUNsQixRQUFRLEVBQUUseURBQXlEO3FCQUNwRSxFQUFFO3dCQUNELElBQUksRUFBRSxVQUFVO3dCQUNoQixRQUFRLEVBQUUseURBQXlEO3FCQUNwRSxFQUFFO3dCQUNELElBQUksRUFBRSxNQUFNO3dCQUNaLFFBQVEsRUFBRSx5REFBeUQ7cUJBQ3BFLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLE9BQU87d0JBQ2IsUUFBUSxFQUFFLHlEQUF5RDtxQkFDcEUsRUFBRTt3QkFDRCxJQUFJLEVBQUUsTUFBTTtxQkFDYixFQUFFO3dCQUNELElBQUksRUFBRSxXQUFXO3dCQUNqQixRQUFRLEVBQUUsMEJBQTBCO3FCQUNyQyxFQUFFO3dCQUNELElBQUksRUFBRSxpQkFBaUI7d0JBQ3ZCLFFBQVEsRUFBRSwrREFBK0Q7cUJBQzFFLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLGFBQWEsRUFBRTs0QkFDYixTQUFTLEVBQUUsWUFBWTt5QkFDeEI7d0JBQ0QsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLGFBQWEsRUFBRTs0QkFDYixTQUFTLEVBQUUsWUFBWTt5QkFDeEI7d0JBQ0QsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCLENBQUM7YUFDTCxFQUFFO2dCQUNELFNBQVMsRUFBRSw4QkFBOEI7Z0JBQ3pDLFlBQVksRUFBRSw0REFBNEQ7Z0JBQzFFLGFBQWEsRUFBRSxDQUFDO3dCQUNaLElBQUksRUFBRSxVQUFVO3dCQUNoQixRQUFRLEVBQUUsdUJBQXVCO3FCQUNsQyxFQUFFO3dCQUNELElBQUksRUFBRSxTQUFTO3dCQUNmLFFBQVEsRUFBRSwwQkFBMEI7cUJBQ3JDLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLGVBQWU7d0JBQ3JCLGFBQWEsRUFBRTs0QkFDYixTQUFTLEVBQUUsZUFBZTt5QkFDM0I7d0JBQ0QsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLHFCQUFxQjt3QkFDM0IsYUFBYSxFQUFFOzRCQUNiLFNBQVMsRUFBRSxxQkFBcUI7eUJBQ2pDO3dCQUNELElBQUksRUFBRSxXQUFXO3FCQUNsQixDQUFDO2FBQ0wsRUFBRTtnQkFDRCxTQUFTLEVBQUUseUJBQXlCO2dCQUNwQyxhQUFhLEVBQUUsQ0FBQzt3QkFDWixJQUFJLEVBQUUscUJBQXFCO3dCQUMzQixTQUFTLEVBQUUsQ0FBQzt3QkFDWixVQUFVLEVBQUUsSUFBSTt3QkFDaEIsUUFBUSxFQUFFLHNCQUFzQjtxQkFDakMsRUFBRTt3QkFDRCxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLGFBQWEsRUFBRTs0QkFDYixTQUFTLEVBQUUsWUFBWTt5QkFDeEI7d0JBQ0QsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCLENBQUM7YUFDTCxDQUFDO1FBQ0osWUFBWSxFQUFFLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLGdCQUFnQjthQUM5QixFQUFFO2dCQUNELFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSxnQkFBZ0I7YUFDOUIsRUFBRTtnQkFDRCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsc0JBQXNCO2FBQ3BDLEVBQUU7Z0JBQ0QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLHNCQUFzQjthQUNwQyxDQUFDO0tBQ0wsQ0FBQztJQUNGLE9BQU87UUFDTCwyREFBMkQsRUFBRSwyREFBMkQ7S0FDekgsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxDQUFDLEVBQUUsRUFBRSwwRUFBMEUsQ0FBQyxDQUFDO0NBQ3hGO0tBQ0k7SUFDSCxJQUFJLGtFQUFrRSxHQUFHLDBFQUEwRSxFQUFFLENBQUM7SUFDdEosSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDLDJEQUEyRCxHQUFHLGtFQUFrRSxDQUFDLDJEQUEyRCxDQUFDO0tBQzdNO1NBQ0k7UUFDSCxJQUFJLDJEQUEyRCxHQUFHLGtFQUFrRSxDQUFDLDJEQUEyRCxDQUFDO0tBQ2xNO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19kZW1hbmRwbGFubmluZ18yMDE5XzJfTW9kdWxlX0ZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2RlbWFuZHBsYW5uaW5nXzIwMTlfMiA9IHtcbiAgICBuYW1lOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19kZW1hbmRwbGFubmluZ18yMDE5XzInLFxuICAgIGRlZmF1bHRFbGVtZW50TmFtZXNwYWNlVVJJOiAndXJuOmRlbWFuZHBsYW5uaW5nXzIwMTlfMi50cmFuc2FjdGlvbnMud2Vic2VydmljZXMubmV0c3VpdGUuY29tJyxcbiAgICBkZXBlbmRlbmNpZXM6IFsnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19kZW1hbmRwbGFubmluZ18yMDE5XzJfdHlwZXMnLCAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yJywgJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yJ10sXG4gICAgdHlwZUluZm9zOiBbe1xuICAgICAgICBsb2NhbE5hbWU6ICdEZW1hbmRQbGFuJyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdzdGFydERhdGUnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0RhdGVUaW1lJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdlbmREYXRlJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnRGF0ZVRpbWUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NhbGN1bGF0ZWRRdWFudGl0eScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0RvdWJsZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncGVyaW9kRGVtYW5kUGxhbkxpc3QnLFxuICAgICAgICAgICAgdHlwZUluZm86ICcuUGVyaW9kRGVtYW5kUGxhbkxpc3QnXG4gICAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgbG9jYWxOYW1lOiAnSXRlbURlbWFuZFBsYW5TZWFyY2hBZHZhbmNlZCcsXG4gICAgICAgIGJhc2VUeXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5TZWFyY2hSZWNvcmQnLFxuICAgICAgICBwcm9wZXJ0eUluZm9zOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2NyaXRlcmlhJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnLkl0ZW1EZW1hbmRQbGFuU2VhcmNoJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjb2x1bW5zJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnLkl0ZW1EZW1hbmRQbGFuU2VhcmNoUm93J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzYXZlZFNlYXJjaElkJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICAgICAgICAgICAgbG9jYWxQYXJ0OiAnc2F2ZWRTZWFyY2hJZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzYXZlZFNlYXJjaFNjcmlwdElkJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICAgICAgICAgICAgbG9jYWxQYXJ0OiAnc2F2ZWRTZWFyY2hTY3JpcHRJZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlJ1xuICAgICAgICAgIH1dXG4gICAgICB9LCB7XG4gICAgICAgIGxvY2FsTmFtZTogJ0l0ZW1EZW1hbmRQbGFuJyxcbiAgICAgICAgYmFzZVR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yLlJlY29yZCcsXG4gICAgICAgIHByb3BlcnR5SW5mb3M6IFt7XG4gICAgICAgICAgICBuYW1lOiAnY3VzdG9tRm9ybScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmRSZWYnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3N1YnNpZGlhcnknLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuUmVjb3JkUmVmJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdsb2NhdGlvbicsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmRSZWYnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2l0ZW0nLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuUmVjb3JkUmVmJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd1bml0cycsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmRSZWYnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ21lbW8nXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3llYXInLFxuICAgICAgICAgICAgdHlwZUluZm86ICdMb25nJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdtb250aCcsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZGVtYW5kcGxhbm5pbmdfMjAxOV8yX3R5cGVzLkRlbWFuZFBsYW5Nb250aCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnc3RhcnREYXRlJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnRGF0ZVRpbWUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2VuZERhdGUnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdEYXRlVGltZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGVtYW5kUGxhbkNhbGVuZGFyVHlwZScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZGVtYW5kcGxhbm5pbmdfMjAxOV8yX3R5cGVzLkRlbWFuZFBsYW5DYWxlbmRhclR5cGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RlbWFuZFBsYW5NYXRyaXgnLFxuICAgICAgICAgICAgdHlwZUluZm86ICcuRGVtYW5kUGxhbk1hdHJpeCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY3VzdG9tRmllbGRMaXN0JyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yLkN1c3RvbUZpZWxkTGlzdCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaW50ZXJuYWxJZCcsXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiB7XG4gICAgICAgICAgICAgIGxvY2FsUGFydDogJ2ludGVybmFsSWQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogJ2F0dHJpYnV0ZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZXh0ZXJuYWxJZCcsXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiB7XG4gICAgICAgICAgICAgIGxvY2FsUGFydDogJ2V4dGVybmFsSWQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogJ2F0dHJpYnV0ZSdcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdJdGVtU3VwcGx5UGxhblNlYXJjaFJvdycsXG4gICAgICAgIGJhc2VUeXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5TZWFyY2hSb3cnLFxuICAgICAgICBwcm9wZXJ0eUluZm9zOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2Jhc2ljJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuSXRlbVN1cHBseVBsYW5TZWFyY2hSb3dCYXNpYydcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaXRlbUpvaW4nLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29tbW9uXzIwMTlfMi5JdGVtU2VhcmNoUm93QmFzaWMnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2xvY2F0aW9uSm9pbicsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLkxvY2F0aW9uU2VhcmNoUm93QmFzaWMnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3VzZXJKb2luJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuRW1wbG95ZWVTZWFyY2hSb3dCYXNpYydcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY3VzdG9tU2VhcmNoSm9pbicsXG4gICAgICAgICAgICBtaW5PY2N1cnM6IDAsXG4gICAgICAgICAgICBjb2xsZWN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29tbW9uXzIwMTlfMi5DdXN0b21TZWFyY2hSb3dCYXNpYydcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdJdGVtU3VwcGx5UGxhbk9yZGVyJyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdvcmRlckxpbmVJZCcsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0xvbmcnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ29yZGVyRGF0ZScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0RhdGVUaW1lJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZWNlaXB0RGF0ZScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0RhdGVUaW1lJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzb3VyY2VMb2NhdGlvbicsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmRSZWYnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3F1YW50aXR5JyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnRG91YmxlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdvcmRlckNyZWF0ZWQnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdCb29sZWFuJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdvcmRlclR5cGUnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2RlbWFuZHBsYW5uaW5nXzIwMTlfMl90eXBlcy5JdGVtU3VwcGx5UGxhbk9yZGVyVHlwZSdcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdQZXJpb2REZW1hbmRQbGFuJyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdxdWFudGl0eScsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnRG91YmxlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkYXlPZlRoZVdlZWsnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2RlbWFuZHBsYW5uaW5nXzIwMTlfMl90eXBlcy5EYXlPZlRoZVdlZWsnXG4gICAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgbG9jYWxOYW1lOiAnSXRlbURlbWFuZFBsYW5TZWFyY2hSb3cnLFxuICAgICAgICBiYXNlVHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuU2VhcmNoUm93JyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdiYXNpYycsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLkl0ZW1EZW1hbmRQbGFuU2VhcmNoUm93QmFzaWMnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2l0ZW1Kb2luJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuSXRlbVNlYXJjaFJvd0Jhc2ljJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdsYXN0QWx0ZXJuYXRlU291cmNlSXRlbUpvaW4nLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29tbW9uXzIwMTlfMi5JdGVtU2VhcmNoUm93QmFzaWMnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2xvY2F0aW9uSm9pbicsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLkxvY2F0aW9uU2VhcmNoUm93QmFzaWMnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3VzZXJKb2luJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuRW1wbG95ZWVTZWFyY2hSb3dCYXNpYydcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY3VzdG9tU2VhcmNoSm9pbicsXG4gICAgICAgICAgICBtaW5PY2N1cnM6IDAsXG4gICAgICAgICAgICBjb2xsZWN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29tbW9uXzIwMTlfMi5DdXN0b21TZWFyY2hSb3dCYXNpYydcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdJdGVtRGVtYW5kUGxhblNlYXJjaCcsXG4gICAgICAgIGJhc2VUeXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5TZWFyY2hSZWNvcmQnLFxuICAgICAgICBwcm9wZXJ0eUluZm9zOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2Jhc2ljJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuSXRlbURlbWFuZFBsYW5TZWFyY2hCYXNpYydcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaXRlbUpvaW4nLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29tbW9uXzIwMTlfMi5JdGVtU2VhcmNoQmFzaWMnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2xhc3RBbHRlcm5hdGVTb3VyY2VJdGVtSm9pbicsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLkl0ZW1TZWFyY2hCYXNpYydcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbG9jYXRpb25Kb2luJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuTG9jYXRpb25TZWFyY2hCYXNpYydcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndXNlckpvaW4nLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29tbW9uXzIwMTlfMi5FbXBsb3llZVNlYXJjaEJhc2ljJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjdXN0b21TZWFyY2hKb2luJyxcbiAgICAgICAgICAgIG1pbk9jY3VyczogMCxcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHRydWUsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLkN1c3RvbVNlYXJjaEpvaW4nXG4gICAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgbG9jYWxOYW1lOiAnSXRlbVN1cHBseVBsYW5TZWFyY2gnLFxuICAgICAgICBiYXNlVHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuU2VhcmNoUmVjb3JkJyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdiYXNpYycsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLkl0ZW1TdXBwbHlQbGFuU2VhcmNoQmFzaWMnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2l0ZW1Kb2luJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuSXRlbVNlYXJjaEJhc2ljJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdsb2NhdGlvbkpvaW4nLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29tbW9uXzIwMTlfMi5Mb2NhdGlvblNlYXJjaEJhc2ljJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd1c2VySm9pbicsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLkVtcGxveWVlU2VhcmNoQmFzaWMnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2N1c3RvbVNlYXJjaEpvaW4nLFxuICAgICAgICAgICAgbWluT2NjdXJzOiAwLFxuICAgICAgICAgICAgY29sbGVjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuQ3VzdG9tU2VhcmNoSm9pbidcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdEZW1hbmRQbGFuTWF0cml4JyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdkZW1hbmRQbGFuJyxcbiAgICAgICAgICAgIG1pbk9jY3VyczogMCxcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHRydWUsXG4gICAgICAgICAgICB0eXBlSW5mbzogJy5EZW1hbmRQbGFuJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZXBsYWNlQWxsJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnQm9vbGVhbicsXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiB7XG4gICAgICAgICAgICAgIGxvY2FsUGFydDogJ3JlcGxhY2VBbGwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogJ2F0dHJpYnV0ZSdcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdQZXJpb2REZW1hbmRQbGFuTGlzdCcsXG4gICAgICAgIHByb3BlcnR5SW5mb3M6IFt7XG4gICAgICAgICAgICBuYW1lOiAncGVyaW9kRGVtYW5kUGxhbicsXG4gICAgICAgICAgICBtaW5PY2N1cnM6IDAsXG4gICAgICAgICAgICBjb2xsZWN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgdHlwZUluZm86ICcuUGVyaW9kRGVtYW5kUGxhbidcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdJdGVtU3VwcGx5UGxhbicsXG4gICAgICAgIGJhc2VUeXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmQnLFxuICAgICAgICBwcm9wZXJ0eUluZm9zOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2N1c3RvbUZvcm0nLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuUmVjb3JkUmVmJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzdWJzaWRpYXJ5JyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yLlJlY29yZFJlZidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbG9jYXRpb24nLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuUmVjb3JkUmVmJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpdGVtJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yLlJlY29yZFJlZidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndW5pdHMnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuUmVjb3JkUmVmJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdtZW1vJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdvcmRlckxpc3QnLFxuICAgICAgICAgICAgdHlwZUluZm86ICcuSXRlbVN1cHBseVBsYW5PcmRlckxpc3QnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2N1c3RvbUZpZWxkTGlzdCcsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5DdXN0b21GaWVsZExpc3QnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2ludGVybmFsSWQnLFxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZToge1xuICAgICAgICAgICAgICBsb2NhbFBhcnQ6ICdpbnRlcm5hbElkJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6ICdhdHRyaWJ1dGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2V4dGVybmFsSWQnLFxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZToge1xuICAgICAgICAgICAgICBsb2NhbFBhcnQ6ICdleHRlcm5hbElkJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6ICdhdHRyaWJ1dGUnXG4gICAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgbG9jYWxOYW1lOiAnSXRlbVN1cHBseVBsYW5TZWFyY2hBZHZhbmNlZCcsXG4gICAgICAgIGJhc2VUeXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5TZWFyY2hSZWNvcmQnLFxuICAgICAgICBwcm9wZXJ0eUluZm9zOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2NyaXRlcmlhJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnLkl0ZW1TdXBwbHlQbGFuU2VhcmNoJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjb2x1bW5zJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnLkl0ZW1TdXBwbHlQbGFuU2VhcmNoUm93J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzYXZlZFNlYXJjaElkJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICAgICAgICAgICAgbG9jYWxQYXJ0OiAnc2F2ZWRTZWFyY2hJZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzYXZlZFNlYXJjaFNjcmlwdElkJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICAgICAgICAgICAgbG9jYWxQYXJ0OiAnc2F2ZWRTZWFyY2hTY3JpcHRJZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlJ1xuICAgICAgICAgIH1dXG4gICAgICB9LCB7XG4gICAgICAgIGxvY2FsTmFtZTogJ0l0ZW1TdXBwbHlQbGFuT3JkZXJMaXN0JyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdpdGVtU3VwcGx5UGxhbk9yZGVyJyxcbiAgICAgICAgICAgIG1pbk9jY3VyczogMCxcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHRydWUsXG4gICAgICAgICAgICB0eXBlSW5mbzogJy5JdGVtU3VwcGx5UGxhbk9yZGVyJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZXBsYWNlQWxsJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnQm9vbGVhbicsXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiB7XG4gICAgICAgICAgICAgIGxvY2FsUGFydDogJ3JlcGxhY2VBbGwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogJ2F0dHJpYnV0ZSdcbiAgICAgICAgICB9XVxuICAgICAgfV0sXG4gICAgZWxlbWVudEluZm9zOiBbe1xuICAgICAgICB0eXBlSW5mbzogJy5JdGVtU3VwcGx5UGxhbicsXG4gICAgICAgIGVsZW1lbnROYW1lOiAnaXRlbVN1cHBseVBsYW4nXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGVJbmZvOiAnLkl0ZW1EZW1hbmRQbGFuJyxcbiAgICAgICAgZWxlbWVudE5hbWU6ICdpdGVtRGVtYW5kUGxhbidcbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZUluZm86ICcuSXRlbURlbWFuZFBsYW5TZWFyY2gnLFxuICAgICAgICBlbGVtZW50TmFtZTogJ2l0ZW1EZW1hbmRQbGFuU2VhcmNoJ1xuICAgICAgfSwge1xuICAgICAgICB0eXBlSW5mbzogJy5JdGVtU3VwcGx5UGxhblNlYXJjaCcsXG4gICAgICAgIGVsZW1lbnROYW1lOiAnaXRlbVN1cHBseVBsYW5TZWFyY2gnXG4gICAgICB9XVxuICB9O1xuICByZXR1cm4ge1xuICAgIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZGVtYW5kcGxhbm5pbmdfMjAxOV8yOiBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2RlbWFuZHBsYW5uaW5nXzIwMTlfMlxuICB9O1xufTtcbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKFtdLCBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2RlbWFuZHBsYW5uaW5nXzIwMTlfMl9Nb2R1bGVfRmFjdG9yeSk7XG59XG5lbHNlIHtcbiAgdmFyIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZGVtYW5kcGxhbm5pbmdfMjAxOV8yX01vZHVsZSA9IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZGVtYW5kcGxhbm5pbmdfMjAxOV8yX01vZHVsZV9GYWN0b3J5KCk7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzLmNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZGVtYW5kcGxhbm5pbmdfMjAxOV8yID0gY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19kZW1hbmRwbGFubmluZ18yMDE5XzJfTW9kdWxlLmNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZGVtYW5kcGxhbm5pbmdfMjAxOV8yO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2RlbWFuZHBsYW5uaW5nXzIwMTlfMiA9IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZGVtYW5kcGxhbm5pbmdfMjAxOV8yX01vZHVsZS5jb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2RlbWFuZHBsYW5uaW5nXzIwMTlfMjtcbiAgfVxufSJdfQ==