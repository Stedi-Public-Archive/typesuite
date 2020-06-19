var com_netsuite_webservices_lists_supplychain_2019_2_Module_Factory = function () {
  var com_netsuite_webservices_lists_supplychain_2019_2 = {
    name: 'com_netsuite_webservices_lists_supplychain_2019_2',
    defaultElementNamespaceURI: 'urn:supplychain_2019_2.lists.webservices.netsuite.com',
    dependencies: ['com_netsuite_webservices_platform_core_2019_2', 'com_netsuite_webservices_platform_common_2019_2', 'com_netsuite_webservices_lists_supplychain_2019_2_types'],
    typeInfos: [{
        localName: 'ManufacturingOperationTask',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
        propertyInfos: [{
            name: 'customForm',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'manufacturingWorkCenter',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'manufacturingCostTemplate',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'title'
          }, {
            name: 'operationSequence',
            typeInfo: 'Long'
          }, {
            name: 'workOrder',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'order',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'status',
            typeInfo: 'com_netsuite_webservices_lists_supplychain_2019_2_types.ManufacturingOperationTaskStatus'
          }, {
            name: 'message'
          }, {
            name: 'estimatedWork',
            typeInfo: 'Double'
          }, {
            name: 'actualWork',
            typeInfo: 'Double'
          }, {
            name: 'remainingWork',
            typeInfo: 'Double'
          }, {
            name: 'inputQuantity',
            typeInfo: 'Double'
          }, {
            name: 'completedQuantity',
            typeInfo: 'Double'
          }, {
            name: 'setupTime',
            typeInfo: 'Double'
          }, {
            name: 'runRate',
            typeInfo: 'Double'
          }, {
            name: 'startDate',
            typeInfo: 'DateTime'
          }, {
            name: 'endDate',
            typeInfo: 'DateTime'
          }, {
            name: 'autoCalculateLag',
            typeInfo: 'Boolean'
          }, {
            name: 'machineResources',
            typeInfo: 'Double'
          }, {
            name: 'laborResources',
            typeInfo: 'Double'
          }, {
            name: 'costDetailList',
            typeInfo: '.ManufacturingCostDetailList'
          }, {
            name: 'predecessorList',
            typeInfo: '.ManufacturingOperationTaskPredecessorList'
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
        localName: 'ManufacturingOperationTaskSearchAdvanced',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'criteria',
            typeInfo: '.ManufacturingOperationTaskSearch'
          }, {
            name: 'columns',
            typeInfo: '.ManufacturingOperationTaskSearchRow'
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
        localName: 'ManufacturingCostTemplateSearchAdvanced',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'criteria',
            typeInfo: '.ManufacturingCostTemplateSearch'
          }, {
            name: 'columns',
            typeInfo: '.ManufacturingCostTemplateSearchRow'
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
        localName: 'ManufacturingCostDetailList',
        propertyInfos: [{
            name: 'manufacturingCostDetail',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ManufacturingCostDetail'
          }, {
            name: 'replaceAll',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'replaceAll'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ManufacturingRouting',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
        propertyInfos: [{
            name: 'customForm',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'billOfMaterials',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'subsidiary',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'item',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'locationList',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRefList'
          }, {
            name: 'name'
          }, {
            name: 'memo'
          }, {
            name: 'isDefault',
            typeInfo: 'Boolean'
          }, {
            name: 'isInactive',
            typeInfo: 'Boolean'
          }, {
            name: 'autoCalculateLag',
            typeInfo: 'Boolean'
          }, {
            name: 'routingStepList',
            typeInfo: '.ManufacturingRoutingRoutingStepList'
          }, {
            name: 'routingComponentList',
            typeInfo: '.ManufacturingRoutingRoutingComponentList'
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
        localName: 'ManufacturingOperationTaskPredecessorList',
        propertyInfos: [{
            name: 'manufacturingOperationTaskPredecessor',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ManufacturingOperationTaskPredecessor'
          }, {
            name: 'replaceAll',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'replaceAll'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ManufacturingOperationTaskSearchRow',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRow',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ManufacturingOperationTaskSearchRowBasic'
          }, {
            name: 'predecessorJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ManufacturingOperationTaskSearchRowBasic'
          }, {
            name: 'userJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchRowBasic'
          }, {
            name: 'workOrderJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.TransactionSearchRowBasic'
          }, {
            name: 'customSearchJoin',
            minOccurs: 0,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomSearchRowBasic'
          }]
      }, {
        localName: 'ManufacturingCostTemplateSearch',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ManufacturingCostTemplateSearchBasic'
          }, {
            name: 'itemJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ItemSearchBasic'
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
        localName: 'ManufacturingRoutingRoutingStepList',
        propertyInfos: [{
            name: 'manufacturingRoutingRoutingStep',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ManufacturingRoutingRoutingStep'
          }, {
            name: 'replaceAll',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'replaceAll'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ManufacturingRoutingRoutingStep',
        propertyInfos: [{
            name: 'operationSequence',
            typeInfo: 'Long'
          }, {
            name: 'operationName'
          }, {
            name: 'manufacturingWorkCenter',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'machineResources',
            typeInfo: 'Double'
          }, {
            name: 'laborResources',
            typeInfo: 'Double'
          }, {
            name: 'manufacturingCostTemplate',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'setupTime',
            typeInfo: 'Double'
          }, {
            name: 'runRate',
            typeInfo: 'Double'
          }, {
            name: 'lagType',
            typeInfo: 'com_netsuite_webservices_lists_supplychain_2019_2_types.ManufacturingLagType'
          }, {
            name: 'lagAmount',
            typeInfo: 'Long'
          }, {
            name: 'lagUnits'
          }]
      }, {
        localName: 'ManufacturingRoutingRoutingComponent',
        propertyInfos: [{
            name: 'itemName'
          }, {
            name: 'revision'
          }, {
            name: 'description'
          }, {
            name: 'yield',
            typeInfo: 'Double'
          }, {
            name: 'bomQuantity',
            typeInfo: 'Double'
          }, {
            name: 'quantity',
            typeInfo: 'Double'
          }, {
            name: 'units'
          }, {
            name: 'operationDisplayText',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'operationSequenceNumber',
            typeInfo: 'Long'
          }, {
            name: 'component'
          }, {
            name: 'item'
          }]
      }, {
        localName: 'ManufacturingRoutingSearchAdvanced',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'criteria',
            typeInfo: '.ManufacturingRoutingSearch'
          }, {
            name: 'columns',
            typeInfo: '.ManufacturingRoutingSearchRow'
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
        localName: 'ManufacturingOperationTaskSearch',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ManufacturingOperationTaskSearchBasic'
          }, {
            name: 'predecessorJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ManufacturingOperationTaskSearchBasic'
          }, {
            name: 'userJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchBasic'
          }, {
            name: 'workOrderJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.TransactionSearchBasic'
          }, {
            name: 'customSearchJoin',
            minOccurs: 0,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomSearchJoin'
          }]
      }, {
        localName: 'ManufacturingRoutingRoutingComponentList',
        propertyInfos: [{
            name: 'manufacturingRoutingRoutingComponent',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ManufacturingRoutingRoutingComponent'
          }, {
            name: 'replaceAll',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'replaceAll'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ManufacturingCostDetail',
        propertyInfos: [{
            name: 'costCategory',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'item',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'fixedRate',
            typeInfo: 'Double'
          }, {
            name: 'runRate',
            typeInfo: 'Double'
          }]
      }, {
        localName: 'ManufacturingOperationTaskPredecessor',
        propertyInfos: [{
            name: 'task',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'type',
            typeInfo: 'com_netsuite_webservices_lists_supplychain_2019_2_types.ManufacturingOperationTaskPredecessorPredecessorType'
          }, {
            name: 'startDate',
            typeInfo: 'DateTime'
          }, {
            name: 'endDate',
            typeInfo: 'DateTime'
          }, {
            name: 'lagType',
            typeInfo: 'com_netsuite_webservices_lists_supplychain_2019_2_types.ManufacturingLagType'
          }, {
            name: 'lagAmount',
            typeInfo: 'Long'
          }, {
            name: 'lagUnits'
          }]
      }, {
        localName: 'ManufacturingRoutingSearchRow',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRow',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ManufacturingRoutingSearchRowBasic'
          }, {
            name: 'itemJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ItemSearchRowBasic'
          }, {
            name: 'locationJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.LocationSearchRowBasic'
          }, {
            name: 'manufacturingCostTemplateJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ManufacturingCostTemplateSearchRowBasic'
          }, {
            name: 'manufacturingWorkCenterJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EntityGroupSearchRowBasic'
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
        localName: 'ManufacturingRoutingSearch',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ManufacturingRoutingSearchBasic'
          }, {
            name: 'itemJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ItemSearchBasic'
          }, {
            name: 'locationJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.LocationSearchBasic'
          }, {
            name: 'manufacturingCostTemplateJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ManufacturingCostTemplateSearchBasic'
          }, {
            name: 'manufacturingWorkCenterJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EntityGroupSearchBasic'
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
        localName: 'ManufacturingCostTemplateSearchRow',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRow',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ManufacturingCostTemplateSearchRowBasic'
          }, {
            name: 'itemJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ItemSearchRowBasic'
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
        localName: 'ManufacturingCostTemplate',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
        propertyInfos: [{
            name: 'customForm',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'subsidiary',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'name'
          }, {
            name: 'memo'
          }, {
            name: 'isInactive',
            typeInfo: 'Boolean'
          }, {
            name: 'costDetailList',
            typeInfo: '.ManufacturingCostDetailList'
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
      }],
    elementInfos: [{
        typeInfo: '.ManufacturingOperationTaskSearch',
        elementName: 'manufacturingOperationTaskSearch'
      }, {
        typeInfo: '.ManufacturingCostTemplateSearch',
        elementName: 'manufacturingCostTemplateSearch'
      }, {
        typeInfo: '.ManufacturingRouting',
        elementName: 'manufacturingRouting'
      }, {
        typeInfo: '.ManufacturingRoutingSearch',
        elementName: 'manufacturingRoutingSearch'
      }, {
        typeInfo: '.ManufacturingCostTemplate',
        elementName: 'manufacturingCostTemplate'
      }, {
        typeInfo: '.ManufacturingOperationTask',
        elementName: 'manufacturingOperationTask'
      }]
  };
  return {
    com_netsuite_webservices_lists_supplychain_2019_2: com_netsuite_webservices_lists_supplychain_2019_2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_lists_supplychain_2019_2_Module_Factory);
}
else {
  var com_netsuite_webservices_lists_supplychain_2019_2_Module = com_netsuite_webservices_lists_supplychain_2019_2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_lists_supplychain_2019_2 = com_netsuite_webservices_lists_supplychain_2019_2_Module.com_netsuite_webservices_lists_supplychain_2019_2;
  }
  else {
    var com_netsuite_webservices_lists_supplychain_2019_2 = com_netsuite_webservices_lists_supplychain_2019_2_Module.com_netsuite_webservices_lists_supplychain_2019_2;
  }
}