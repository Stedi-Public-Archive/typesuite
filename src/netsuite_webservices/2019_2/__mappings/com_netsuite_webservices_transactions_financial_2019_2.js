var com_netsuite_webservices_transactions_financial_2019_2_Module_Factory = function () {
  var com_netsuite_webservices_transactions_financial_2019_2 = {
    name: 'com_netsuite_webservices_transactions_financial_2019_2',
    defaultElementNamespaceURI: 'urn:financial_2019_2.transactions.webservices.netsuite.com',
    dependencies: ['com_netsuite_webservices_platform_core_2019_2', 'com_netsuite_webservices_platform_common_2019_2', 'com_netsuite_webservices_transactions_financial_2019_2_types'],
    typeInfos: [{
        localName: 'Budget',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
        propertyInfos: [{
            name: 'year',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'customer',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'item',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'clazz',
            elementName: 'class',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'department',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'location',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'account',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'subsidiary',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'category',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'budgetType',
            typeInfo: 'com_netsuite_webservices_transactions_financial_2019_2_types.BudgetBudgetType'
          }, {
            name: 'currency',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'periodAmount1',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount2',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount3',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount4',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount5',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount6',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount7',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount8',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount9',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount10',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount11',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount12',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount13',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount14',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount15',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount16',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount17',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount18',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount19',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount20',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount21',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount22',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount23',
            typeInfo: 'Double'
          }, {
            name: 'periodAmount24',
            typeInfo: 'Double'
          }, {
            name: 'amount',
            typeInfo: 'Double'
          }, {
            name: 'accountingBook',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'customFieldList',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.CustomFieldList'
          }, {
            name: 'internalId',
            attributeName: {
              localPart: 'internalId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BudgetSearchRow',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRow',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.BudgetSearchRowBasic'
          }, {
            name: 'customSearchJoin',
            minOccurs: 0,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomSearchRowBasic'
          }]
      }, {
        localName: 'BudgetSearchAdvanced',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'criteria',
            typeInfo: '.BudgetSearch'
          }, {
            name: 'columns',
            typeInfo: '.BudgetSearchRow'
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
        localName: 'BudgetSearch',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.BudgetSearchBasic'
          }, {
            name: 'customSearchJoin',
            minOccurs: 0,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomSearchJoin'
          }]
      }],
    elementInfos: [{
        typeInfo: '.Budget',
        elementName: 'budget'
      }, {
        typeInfo: '.BudgetSearch',
        elementName: 'budgetSearch'
      }]
  };
  return {
    com_netsuite_webservices_transactions_financial_2019_2: com_netsuite_webservices_transactions_financial_2019_2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_transactions_financial_2019_2_Module_Factory);
}
else {
  var com_netsuite_webservices_transactions_financial_2019_2_Module = com_netsuite_webservices_transactions_financial_2019_2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_transactions_financial_2019_2 = com_netsuite_webservices_transactions_financial_2019_2_Module.com_netsuite_webservices_transactions_financial_2019_2;
  }
  else {
    var com_netsuite_webservices_transactions_financial_2019_2 = com_netsuite_webservices_transactions_financial_2019_2_Module.com_netsuite_webservices_transactions_financial_2019_2;
  }
}