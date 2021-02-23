"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19maW5hbmNpYWxfMjAxOV8yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25ldHN1aXRlX3dlYnNlcnZpY2VzLzIwMTlfMi9fX21hcHBpbmdzL2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZmluYW5jaWFsXzIwMTlfMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxxRUFBcUUsR0FBRztJQUMxRSxJQUFJLHNEQUFzRCxHQUFHO1FBQzNELElBQUksRUFBRSx3REFBd0Q7UUFDOUQsMEJBQTBCLEVBQUUsNERBQTREO1FBQ3hGLFlBQVksRUFBRSxDQUFDLCtDQUErQyxFQUFFLGlEQUFpRCxFQUFFLDhEQUE4RCxDQUFDO1FBQ2xMLFNBQVMsRUFBRSxDQUFDO2dCQUNSLFNBQVMsRUFBRSxRQUFRO2dCQUNuQixZQUFZLEVBQUUsc0RBQXNEO2dCQUNwRSxhQUFhLEVBQUUsQ0FBQzt3QkFDWixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUseURBQXlEO3FCQUNwRSxFQUFFO3dCQUNELElBQUksRUFBRSxVQUFVO3dCQUNoQixRQUFRLEVBQUUseURBQXlEO3FCQUNwRSxFQUFFO3dCQUNELElBQUksRUFBRSxNQUFNO3dCQUNaLFFBQVEsRUFBRSx5REFBeUQ7cUJBQ3BFLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLE9BQU87d0JBQ2IsV0FBVyxFQUFFLE9BQU87d0JBQ3BCLFFBQVEsRUFBRSx5REFBeUQ7cUJBQ3BFLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLFFBQVEsRUFBRSx5REFBeUQ7cUJBQ3BFLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLFFBQVEsRUFBRSx5REFBeUQ7cUJBQ3BFLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsUUFBUSxFQUFFLHlEQUF5RDtxQkFDcEUsRUFB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a0U7cUJBQzdFLENBQUM7YUFDTCxDQUFDO1FBQ0osWUFBWSxFQUFFLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFdBQVcsRUFBRSxRQUFRO2FBQ3RCLEVBQUU7Z0JBQ0QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSxjQUFjO2FBQzVCLENBQUM7S0FDTCxDQUFDO0lBQ0YsT0FBTztRQUNMLHNEQUFzRCxFQUFFLHNEQUFzRDtLQUMvRyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUM5QyxNQUFNLENBQUMsRUFBRSxFQUFFLHFFQUFxRSxDQUFDLENBQUM7Q0FDbkY7S0FDSTtJQUNILElBQUksNkRBQTZELEdBQUcscUVBQXFFLEVBQUUsQ0FBQztJQUM1SSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ25ELE1BQU0sQ0FBQyxPQUFPLENBQUMsc0RBQXNELEdBQUcsNkRBQTZELENBQUMsc0RBQXNELENBQUM7S0FDOUw7U0FDSTtRQUNILElBQUksc0RBQXNELEdBQUcsNkRBQTZELENBQUMsc0RBQXNELENBQUM7S0FDbkw7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbInZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2ZpbmFuY2lhbF8yMDE5XzJfTW9kdWxlX0ZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2ZpbmFuY2lhbF8yMDE5XzIgPSB7XG4gICAgbmFtZTogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZmluYW5jaWFsXzIwMTlfMicsXG4gICAgZGVmYXVsdEVsZW1lbnROYW1lc3BhY2VVUkk6ICd1cm46ZmluYW5jaWFsXzIwMTlfMi50cmFuc2FjdGlvbnMud2Vic2VydmljZXMubmV0c3VpdGUuY29tJyxcbiAgICBkZXBlbmRlbmNpZXM6IFsnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yJywgJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yJywgJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZmluYW5jaWFsXzIwMTlfMl90eXBlcyddLFxuICAgIHR5cGVJbmZvczogW3tcbiAgICAgICAgbG9jYWxOYW1lOiAnQnVkZ2V0JyxcbiAgICAgICAgYmFzZVR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yLlJlY29yZCcsXG4gICAgICAgIHByb3BlcnR5SW5mb3M6IFt7XG4gICAgICAgICAgICBuYW1lOiAneWVhcicsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmRSZWYnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2N1c3RvbWVyJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yLlJlY29yZFJlZidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaXRlbScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmRSZWYnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NsYXp6JyxcbiAgICAgICAgICAgIGVsZW1lbnROYW1lOiAnY2xhc3MnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuUmVjb3JkUmVmJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkZXBhcnRtZW50JyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yLlJlY29yZFJlZidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbG9jYXRpb24nLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuUmVjb3JkUmVmJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdhY2NvdW50JyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yLlJlY29yZFJlZidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnc3Vic2lkaWFyeScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmRSZWYnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yLlJlY29yZFJlZidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnYnVkZ2V0VHlwZScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZmluYW5jaWFsXzIwMTlfMl90eXBlcy5CdWRnZXRCdWRnZXRUeXBlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjdXJyZW5jeScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmRSZWYnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BlcmlvZEFtb3VudDEnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdEb3VibGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BlcmlvZEFtb3VudDInLFxuICAgICAgICAgICAgdHlwZUluZm86ICdEb3VibGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BlcmlvZEFtb3VudDMnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdEb3VibGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BlcmlvZEFtb3VudDQnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdEb3VibGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BlcmlvZEFtb3VudDUnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdEb3VibGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BlcmlvZEFtb3VudDYnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdEb3VibGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BlcmlvZEFtb3VudDcnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdEb3VibGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BlcmlvZEFtb3VudDgnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdEb3VibGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BlcmlvZEFtb3VudDknLFxuICAgICAgICAgICAgdHlwZUluZm86ICdEb3VibGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BlcmlvZEFtb3VudDEwJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnRG91YmxlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdwZXJpb2RBbW91bnQxMScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0RvdWJsZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncGVyaW9kQW1vdW50MTInLFxuICAgICAgICAgICAgdHlwZUluZm86ICdEb3VibGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BlcmlvZEFtb3VudDEzJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnRG91YmxlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdwZXJpb2RBbW91bnQxNCcsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0RvdWJsZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncGVyaW9kQW1vdW50MTUnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdEb3VibGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BlcmlvZEFtb3VudDE2JyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnRG91YmxlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdwZXJpb2RBbW91bnQxNycsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0RvdWJsZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncGVyaW9kQW1vdW50MTgnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdEb3VibGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BlcmlvZEFtb3VudDE5JyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnRG91YmxlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdwZXJpb2RBbW91bnQyMCcsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0RvdWJsZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncGVyaW9kQW1vdW50MjEnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdEb3VibGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BlcmlvZEFtb3VudDIyJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnRG91YmxlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdwZXJpb2RBbW91bnQyMycsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0RvdWJsZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncGVyaW9kQW1vdW50MjQnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdEb3VibGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2Ftb3VudCcsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0RvdWJsZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnYWNjb3VudGluZ0Jvb2snLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuUmVjb3JkUmVmJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjdXN0b21GaWVsZExpc3QnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuQ3VzdG9tRmllbGRMaXN0J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpbnRlcm5hbElkJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICAgICAgICAgICAgbG9jYWxQYXJ0OiAnaW50ZXJuYWxJZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlJ1xuICAgICAgICAgIH1dXG4gICAgICB9LCB7XG4gICAgICAgIGxvY2FsTmFtZTogJ0J1ZGdldFNlYXJjaFJvdycsXG4gICAgICAgIGJhc2VUeXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5TZWFyY2hSb3cnLFxuICAgICAgICBwcm9wZXJ0eUluZm9zOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2Jhc2ljJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuQnVkZ2V0U2VhcmNoUm93QmFzaWMnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2N1c3RvbVNlYXJjaEpvaW4nLFxuICAgICAgICAgICAgbWluT2NjdXJzOiAwLFxuICAgICAgICAgICAgY29sbGVjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuQ3VzdG9tU2VhcmNoUm93QmFzaWMnXG4gICAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgbG9jYWxOYW1lOiAnQnVkZ2V0U2VhcmNoQWR2YW5jZWQnLFxuICAgICAgICBiYXNlVHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuU2VhcmNoUmVjb3JkJyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdjcml0ZXJpYScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJy5CdWRnZXRTZWFyY2gnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NvbHVtbnMnLFxuICAgICAgICAgICAgdHlwZUluZm86ICcuQnVkZ2V0U2VhcmNoUm93J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzYXZlZFNlYXJjaElkJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICAgICAgICAgICAgbG9jYWxQYXJ0OiAnc2F2ZWRTZWFyY2hJZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzYXZlZFNlYXJjaFNjcmlwdElkJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICAgICAgICAgICAgbG9jYWxQYXJ0OiAnc2F2ZWRTZWFyY2hTY3JpcHRJZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlJ1xuICAgICAgICAgIH1dXG4gICAgICB9LCB7XG4gICAgICAgIGxvY2FsTmFtZTogJ0J1ZGdldFNlYXJjaCcsXG4gICAgICAgIGJhc2VUeXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5TZWFyY2hSZWNvcmQnLFxuICAgICAgICBwcm9wZXJ0eUluZm9zOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2Jhc2ljJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuQnVkZ2V0U2VhcmNoQmFzaWMnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2N1c3RvbVNlYXJjaEpvaW4nLFxuICAgICAgICAgICAgbWluT2NjdXJzOiAwLFxuICAgICAgICAgICAgY29sbGVjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuQ3VzdG9tU2VhcmNoSm9pbidcbiAgICAgICAgICB9XVxuICAgICAgfV0sXG4gICAgZWxlbWVudEluZm9zOiBbe1xuICAgICAgICB0eXBlSW5mbzogJy5CdWRnZXQnLFxuICAgICAgICBlbGVtZW50TmFtZTogJ2J1ZGdldCdcbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZUluZm86ICcuQnVkZ2V0U2VhcmNoJyxcbiAgICAgICAgZWxlbWVudE5hbWU6ICdidWRnZXRTZWFyY2gnXG4gICAgICB9XVxuICB9O1xuICByZXR1cm4ge1xuICAgIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZmluYW5jaWFsXzIwMTlfMjogY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19maW5hbmNpYWxfMjAxOV8yXG4gIH07XG59O1xuaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoW10sIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZmluYW5jaWFsXzIwMTlfMl9Nb2R1bGVfRmFjdG9yeSk7XG59XG5lbHNlIHtcbiAgdmFyIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZmluYW5jaWFsXzIwMTlfMl9Nb2R1bGUgPSBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2ZpbmFuY2lhbF8yMDE5XzJfTW9kdWxlX0ZhY3RvcnkoKTtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMuY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19maW5hbmNpYWxfMjAxOV8yID0gY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19maW5hbmNpYWxfMjAxOV8yX01vZHVsZS5jb21fbmV0c3VpdGVfd2Vic2VydmljZXNfdHJhbnNhY3Rpb25zX2ZpbmFuY2lhbF8yMDE5XzI7XG4gIH1cbiAgZWxzZSB7XG4gICAgdmFyIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZmluYW5jaWFsXzIwMTlfMiA9IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc190cmFuc2FjdGlvbnNfZmluYW5jaWFsXzIwMTlfMl9Nb2R1bGUuY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3RyYW5zYWN0aW9uc19maW5hbmNpYWxfMjAxOV8yO1xuICB9XG59Il19