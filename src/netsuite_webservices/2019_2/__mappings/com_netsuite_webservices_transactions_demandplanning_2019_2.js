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