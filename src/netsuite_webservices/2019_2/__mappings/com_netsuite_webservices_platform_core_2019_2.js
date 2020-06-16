var com_netsuite_webservices_platform_core_2019_2_Module_Factory = function () {
  var com_netsuite_webservices_platform_core_2019_2 = {
    name: 'com_netsuite_webservices_platform_core_2019_2',
    defaultElementNamespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com',
    dependencies: ['com_netsuite_webservices_platform_faults_2019_2_types', 'com_netsuite_webservices_platform_core_2019_2_types'],
    typeInfos: [{
        localName: 'SearchColumnCustomField',
        propertyInfos: [{
            name: 'customLabel'
          }, {
            name: 'internalId',
            attributeName: {
              localPart: 'internalId'
            },
            type: 'attribute'
          }, {
            name: 'scriptId',
            attributeName: {
              localPart: 'scriptId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CustomFieldList',
        propertyInfos: [{
            name: 'customField',
            minOccurs: 0,
            collection: true,
            typeInfo: '.CustomFieldRef'
          }]
      }, {
        localName: 'SearchEnumMultiSelectField',
        propertyInfos: [{
            name: 'searchValue',
            minOccurs: 0,
            collection: true
          }, {
            name: 'operator',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.SearchEnumMultiSelectFieldOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BaseRefList',
        propertyInfos: [{
            name: 'baseRef',
            minOccurs: 0,
            collection: true,
            typeInfo: '.BaseRef'
          }]
      }, {
        localName: 'DeletedRecordList',
        propertyInfos: [{
            name: 'deletedRecord',
            minOccurs: 0,
            collection: true,
            typeInfo: '.DeletedRecord'
          }]
      }, {
        localName: 'WsRoleList',
        propertyInfos: [{
            name: 'wsRole',
            minOccurs: 0,
            collection: true,
            typeInfo: '.WsRole'
          }]
      }, {
        localName: 'SearchBooleanCustomField',
        baseTypeInfo: '.SearchCustomField',
        propertyInfos: [{
            name: 'searchValue',
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'SearchColumnField',
        propertyInfos: [{
            name: 'customLabel'
          }]
      }, {
        localName: 'BudgetExchangeRateFilter',
        propertyInfos: [{
            name: 'period',
            required: true,
            typeInfo: '.RecordRef'
          }, {
            name: 'fromSubsidiary',
            typeInfo: '.RecordRef'
          }, {
            name: 'toSubsidiary',
            typeInfo: '.RecordRef'
          }]
      }, {
        localName: 'GetSelectFilterByFieldValueList',
        propertyInfos: [{
            name: 'filterBy',
            required: true,
            collection: true,
            typeInfo: '.GetSelectFilterByFieldValue'
          }]
      }, {
        localName: 'GetSavedSearchResult',
        propertyInfos: [{
            name: 'status',
            required: true,
            typeInfo: '.Status'
          }, {
            name: 'totalRecords',
            typeInfo: 'Int'
          }, {
            name: 'recordRefList',
            typeInfo: '.RecordRefList'
          }]
      }, {
        localName: 'PostingTransactionSummaryField',
        propertyInfos: [{
            name: 'period',
            typeInfo: 'Boolean'
          }, {
            name: 'account',
            typeInfo: 'Boolean'
          }, {
            name: 'parentItem',
            typeInfo: 'Boolean'
          }, {
            name: 'item',
            typeInfo: 'Boolean'
          }, {
            name: 'entity',
            typeInfo: 'Boolean'
          }, {
            name: 'department',
            typeInfo: 'Boolean'
          }, {
            name: 'clazz',
            elementName: 'class',
            typeInfo: 'Boolean'
          }, {
            name: 'location',
            typeInfo: 'Boolean'
          }, {
            name: 'subsidiary',
            typeInfo: 'Boolean'
          }, {
            name: 'book',
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'SearchColumnLongCustomField',
        baseTypeInfo: '.SearchColumnCustomField',
        propertyInfos: [{
            name: 'searchValue',
            typeInfo: 'Long'
          }]
      }, {
        localName: 'DetachBasicReference',
        baseTypeInfo: '.DetachReference',
        propertyInfos: [{
            name: 'detachedRecord',
            required: true,
            typeInfo: '.BaseRef'
          }]
      }, {
        localName: 'SearchDoubleCustomField',
        baseTypeInfo: '.SearchCustomField',
        propertyInfos: [{
            name: 'searchValue',
            typeInfo: 'Double'
          }, {
            name: 'searchValue2',
            typeInfo: 'Double'
          }, {
            name: 'operator',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.SearchDoubleFieldOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CustomizationRef',
        baseTypeInfo: '.RecordRef',
        propertyInfos: [{
            name: 'scriptId',
            attributeName: {
              localPart: 'scriptId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'RecordRef',
        baseTypeInfo: '.BaseRef',
        propertyInfos: [{
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
          }, {
            name: 'type',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.RecordType',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DateCustomFieldRef',
        baseTypeInfo: '.CustomFieldRef',
        propertyInfos: [{
            name: 'value',
            required: true,
            typeInfo: 'DateTime'
          }]
      }, {
        localName: 'SearchTextNumberField',
        propertyInfos: [{
            name: 'searchValue'
          }, {
            name: 'searchValue2'
          }, {
            name: 'operator',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.SearchTextNumberFieldOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SearchMultiSelectField',
        propertyInfos: [{
            name: 'searchValue',
            minOccurs: 0,
            collection: true,
            typeInfo: '.RecordRef'
          }, {
            name: 'operator',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.SearchMultiSelectFieldOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DimensionList',
        propertyInfos: [{
            name: 'dimension',
            minOccurs: 0,
            collection: true,
            typeInfo: '.DimensionRef'
          }]
      }, {
        localName: 'StatusDetail',
        propertyInfos: [{
            name: 'code',
            typeInfo: 'com_netsuite_webservices_platform_faults_2019_2_types.StatusDetailCodeType'
          }, {
            name: 'message'
          }, {
            name: 'afterSubmitFailed',
            typeInfo: 'Boolean'
          }, {
            name: 'type',
            typeInfo: 'com_netsuite_webservices_platform_faults_2019_2_types.StatusDetailType',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'StringCustomFieldRef',
        baseTypeInfo: '.CustomFieldRef',
        propertyInfos: [{
            name: 'value',
            required: true
          }]
      }, {
        localName: 'InitializeAuxRef',
        baseTypeInfo: '.BaseRef',
        propertyInfos: [{
            name: 'type',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.InitializeAuxRefType',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
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
          }, {
            name: 'scriptId',
            attributeName: {
              localPart: 'scriptId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'GetSelectValueResult',
        propertyInfos: [{
            name: 'status',
            required: true,
            typeInfo: '.Status'
          }, {
            name: 'totalRecords',
            typeInfo: 'Int'
          }, {
            name: 'totalPages',
            typeInfo: 'Int'
          }, {
            name: 'baseRefList',
            typeInfo: '.BaseRefList'
          }]
      }, {
        localName: 'SearchRow'
      }, {
        localName: 'SearchColumnMultiSelectCustomField',
        baseTypeInfo: '.SearchColumnCustomField',
        propertyInfos: [{
            name: 'searchValue',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ListOrRecordRef'
          }]
      }, {
        localName: 'SsoCredentials',
        propertyInfos: [{
            name: 'email',
            required: true
          }, {
            name: 'password',
            required: true
          }, {
            name: 'account',
            required: true
          }, {
            name: 'role',
            typeInfo: '.RecordRef'
          }, {
            name: 'authenticationToken',
            required: true
          }, {
            name: 'partnerId',
            required: true
          }]
      }, {
        localName: 'SearchColumnDateCustomField',
        baseTypeInfo: '.SearchColumnCustomField',
        propertyInfos: [{
            name: 'searchValue',
            typeInfo: 'DateTime'
          }]
      }, {
        localName: 'SearchStringCustomField',
        baseTypeInfo: '.SearchCustomField',
        propertyInfos: [{
            name: 'searchValue'
          }, {
            name: 'operator',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.SearchStringFieldOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SearchColumnStringField',
        baseTypeInfo: '.SearchColumnField',
        propertyInfos: [{
            name: 'searchValue'
          }]
      }, {
        localName: 'GetAllResult',
        propertyInfos: [{
            name: 'status',
            required: true,
            typeInfo: '.Status'
          }, {
            name: 'totalRecords',
            typeInfo: 'Int'
          }, {
            name: 'recordList',
            typeInfo: '.RecordList'
          }]
      }, {
        localName: 'CustomTransactionRef',
        baseTypeInfo: '.BaseRef',
        propertyInfos: [{
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
          }, {
            name: 'typeId',
            attributeName: {
              localPart: 'typeId'
            },
            type: 'attribute'
          }, {
            name: 'scriptId',
            attributeName: {
              localPart: 'scriptId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CurrencyRateList',
        propertyInfos: [{
            name: 'currencyRate',
            minOccurs: 0,
            collection: true,
            typeInfo: '.CurrencyRate'
          }]
      }, {
        localName: 'DataCenterUrls',
        propertyInfos: [{
            name: 'restDomain',
            required: true
          }, {
            name: 'webservicesDomain',
            required: true
          }, {
            name: 'systemDomain',
            required: true
          }]
      }, {
        localName: 'SsoPassport',
        propertyInfos: [{
            name: 'authenticationToken',
            required: true
          }, {
            name: 'partnerId',
            required: true
          }, {
            name: 'partnerAccount',
            required: true
          }, {
            name: 'partnerUserId',
            required: true
          }]
      }, {
        localName: 'PostingTransactionSummary',
        propertyInfos: [{
            name: 'period',
            typeInfo: '.RecordRef'
          }, {
            name: 'account',
            typeInfo: '.RecordRef'
          }, {
            name: 'parentItem',
            typeInfo: '.RecordRef'
          }, {
            name: 'item',
            typeInfo: '.RecordRef'
          }, {
            name: 'entity',
            typeInfo: '.RecordRef'
          }, {
            name: 'department',
            typeInfo: '.RecordRef'
          }, {
            name: 'clazz',
            elementName: 'class',
            typeInfo: '.RecordRef'
          }, {
            name: 'location',
            typeInfo: '.RecordRef'
          }, {
            name: 'subsidiary',
            typeInfo: '.RecordRef'
          }, {
            name: 'book',
            typeInfo: '.RecordRef'
          }, {
            name: 'amount',
            required: true,
            typeInfo: 'Double'
          }]
      }, {
        localName: 'PostingTransactionSummaryFilter',
        propertyInfos: [{
            name: 'period',
            typeInfo: '.RecordRefList'
          }, {
            name: 'account',
            typeInfo: '.RecordRefList'
          }, {
            name: 'parentItem',
            typeInfo: '.RecordRefList'
          }, {
            name: 'item',
            typeInfo: '.RecordRefList'
          }, {
            name: 'entity',
            typeInfo: '.RecordRefList'
          }, {
            name: 'department',
            typeInfo: '.RecordRefList'
          }, {
            name: 'clazz',
            elementName: 'class',
            typeInfo: '.RecordRefList'
          }, {
            name: 'location',
            typeInfo: '.RecordRefList'
          }, {
            name: 'subsidiary',
            typeInfo: '.RecordRefList'
          }, {
            name: 'book',
            typeInfo: '.RecordRefList'
          }]
      }, {
        localName: 'SearchColumnBooleanCustomField',
        baseTypeInfo: '.SearchColumnCustomField',
        propertyInfos: [{
            name: 'searchValue',
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'SearchEnumMultiSelectCustomField',
        baseTypeInfo: '.SearchCustomField',
        propertyInfos: [{
            name: 'searchValue',
            minOccurs: 0,
            collection: true
          }, {
            name: 'operator',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.SearchEnumMultiSelectFieldOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SearchResult',
        propertyInfos: [{
            name: 'status',
            required: true,
            typeInfo: '.Status'
          }, {
            name: 'totalRecords',
            typeInfo: 'Int'
          }, {
            name: 'pageSize',
            typeInfo: 'Int'
          }, {
            name: 'totalPages',
            typeInfo: 'Int'
          }, {
            name: 'pageIndex',
            typeInfo: 'Int'
          }, {
            name: 'searchId'
          }, {
            name: 'recordList',
            typeInfo: '.RecordList'
          }, {
            name: 'searchRowList',
            typeInfo: '.SearchRowList'
          }]
      }, {
        localName: 'GetCurrencyRateResult',
        propertyInfos: [{
            name: 'status',
            required: true,
            typeInfo: '.Status'
          }, {
            name: 'currencyRateList',
            typeInfo: '.CurrencyRateList'
          }]
      }, {
        localName: 'SelectCustomFieldRef',
        baseTypeInfo: '.CustomFieldRef',
        propertyInfos: [{
            name: 'value',
            required: true,
            typeInfo: '.ListOrRecordRef'
          }]
      }, {
        localName: 'RecordRefList',
        propertyInfos: [{
            name: 'recordRef',
            minOccurs: 0,
            collection: true,
            typeInfo: '.RecordRef'
          }]
      }, {
        localName: 'SearchDoubleField',
        propertyInfos: [{
            name: 'searchValue',
            typeInfo: 'Double'
          }, {
            name: 'searchValue2',
            typeInfo: 'Double'
          }, {
            name: 'operator',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.SearchDoubleFieldOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SearchRowList',
        propertyInfos: [{
            name: 'searchRow',
            minOccurs: 0,
            collection: true,
            typeInfo: '.SearchRow'
          }]
      }, {
        localName: 'AsyncStatusResult',
        propertyInfos: [{
            name: 'jobId',
            required: true
          }, {
            name: 'status',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.AsyncStatusType'
          }, {
            name: 'percentCompleted',
            required: true,
            typeInfo: 'Double'
          }, {
            name: 'estRemainingDuration',
            required: true,
            typeInfo: 'Double'
          }]
      }, {
        localName: 'SearchRowBasic',
        baseTypeInfo: '.SearchRow'
      }, {
        localName: 'CustomFieldRef',
        propertyInfos: [{
            name: 'internalId',
            attributeName: {
              localPart: 'internalId'
            },
            type: 'attribute'
          }, {
            name: 'scriptId',
            attributeName: {
              localPart: 'scriptId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ChangeEmail',
        propertyInfos: [{
            name: 'currentPassword',
            required: true
          }, {
            name: 'newEmail',
            required: true
          }, {
            name: 'newEmail2',
            required: true
          }, {
            name: 'justThisAccount',
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'SearchCustomField',
        propertyInfos: [{
            name: 'internalId',
            attributeName: {
              localPart: 'internalId'
            },
            type: 'attribute'
          }, {
            name: 'scriptId',
            attributeName: {
              localPart: 'scriptId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SearchRecordBasic',
        baseTypeInfo: '.SearchRecord'
      }, {
        localName: 'SearchCustomFieldList',
        propertyInfos: [{
            name: 'customField',
            minOccurs: 0,
            collection: true,
            typeInfo: '.SearchCustomField'
          }]
      }, {
        localName: 'DeletionReason',
        propertyInfos: [{
            name: 'deletionReasonCode',
            required: true,
            typeInfo: '.RecordRef'
          }, {
            name: 'deletionReasonMemo'
          }]
      }, {
        localName: 'InitializeRef',
        baseTypeInfo: '.BaseRef',
        propertyInfos: [{
            name: 'type',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.InitializeRefType',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
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
        localName: 'AttachContactReference',
        baseTypeInfo: '.AttachReference',
        propertyInfos: [{
            name: 'contact',
            required: true,
            typeInfo: '.RecordRef'
          }, {
            name: 'contactRole',
            typeInfo: '.RecordRef'
          }]
      }, {
        localName: 'SearchColumnBooleanField',
        baseTypeInfo: '.SearchColumnField',
        propertyInfos: [{
            name: 'searchValue',
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'Record',
        propertyInfos: [{
            name: 'nullFieldList',
            typeInfo: '.NullField'
          }]
      }, {
        localName: 'AttachBasicReference',
        baseTypeInfo: '.AttachReference',
        propertyInfos: [{
            name: 'attachedRecord',
            required: true,
            typeInfo: '.BaseRef'
          }]
      }, {
        localName: 'SearchBooleanField',
        propertyInfos: [{
            name: 'searchValue',
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'NullField',
        propertyInfos: [{
            name: 'name',
            minOccurs: 0,
            collection: true
          }]
      }, {
        localName: 'GetItemAvailabilityResult',
        propertyInfos: [{
            name: 'status',
            required: true,
            typeInfo: '.Status'
          }, {
            name: 'itemAvailabilityList',
            typeInfo: '.ItemAvailabilityList'
          }]
      }, {
        localName: 'SearchColumnTextNumberField',
        baseTypeInfo: '.SearchColumnField',
        propertyInfos: [{
            name: 'searchValue'
          }]
      }, {
        localName: 'ItemAvailability',
        propertyInfos: [{
            name: 'item',
            required: true,
            typeInfo: '.RecordRef'
          }, {
            name: 'lastQtyAvailableChange',
            typeInfo: 'DateTime'
          }, {
            name: 'locationId',
            typeInfo: '.RecordRef'
          }, {
            name: 'quantityOnHand',
            typeInfo: 'Double'
          }, {
            name: 'onHandValueMli',
            typeInfo: 'Double'
          }, {
            name: 'reorderPoint',
            typeInfo: 'Double'
          }, {
            name: 'preferredStockLevel',
            typeInfo: 'Double'
          }, {
            name: 'quantityOnOrder',
            typeInfo: 'Double'
          }, {
            name: 'quantityCommitted',
            typeInfo: 'Double'
          }, {
            name: 'quantityBackOrdered',
            typeInfo: 'Double'
          }, {
            name: 'quantityAvailable',
            typeInfo: 'Double'
          }]
      }, {
        localName: 'CurrencyRateFilter',
        propertyInfos: [{
            name: 'baseCurrency',
            typeInfo: '.RecordRef'
          }, {
            name: 'fromCurrency',
            typeInfo: '.RecordRef'
          }, {
            name: 'effectiveDate',
            typeInfo: 'DateTime'
          }]
      }, {
        localName: 'RecordList',
        propertyInfos: [{
            name: 'record',
            minOccurs: 0,
            collection: true,
            typeInfo: '.Record'
          }]
      }, {
        localName: 'GetSelectValueFieldDescription',
        propertyInfos: [{
            name: 'recordType',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.RecordType'
          }, {
            name: 'customRecordType',
            typeInfo: '.RecordRef'
          }, {
            name: 'customTransactionType',
            typeInfo: '.RecordRef'
          }, {
            name: 'sublist'
          }, {
            name: 'field',
            required: true
          }, {
            name: 'customForm',
            typeInfo: '.RecordRef'
          }, {
            name: 'filter',
            typeInfo: '.GetSelectValueFilter'
          }, {
            name: 'filterByValueList',
            typeInfo: '.GetSelectFilterByFieldValueList'
          }]
      }, {
        localName: 'BooleanCustomFieldRef',
        baseTypeInfo: '.CustomFieldRef',
        propertyInfos: [{
            name: 'value',
            required: true,
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'SearchColumnSelectField',
        baseTypeInfo: '.SearchColumnField',
        propertyInfos: [{
            name: 'searchValue',
            typeInfo: '.RecordRef'
          }]
      }, {
        localName: 'DeletedRecord',
        propertyInfos: [{
            name: 'deletedDate',
            typeInfo: 'DateTime'
          }, {
            name: 'record',
            typeInfo: '.BaseRef'
          }]
      }, {
        localName: 'WsRole',
        propertyInfos: [{
            name: 'role',
            typeInfo: '.RecordRef'
          }, {
            name: 'isDefault',
            typeInfo: 'Boolean'
          }, {
            name: 'isInactive',
            typeInfo: 'Boolean'
          }, {
            name: 'isLoggedInRole',
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'SearchRecord'
      }, {
        localName: 'GetDeletedResult',
        propertyInfos: [{
            name: 'status',
            required: true,
            typeInfo: '.Status'
          }, {
            name: 'totalRecords',
            typeInfo: 'Int'
          }, {
            name: 'pageSize',
            typeInfo: 'Int'
          }, {
            name: 'totalPages',
            typeInfo: 'Int'
          }, {
            name: 'pageIndex',
            typeInfo: 'Int'
          }, {
            name: 'deletedRecordList',
            typeInfo: '.DeletedRecordList'
          }]
      }, {
        localName: 'MultiSelectCustomFieldRef',
        baseTypeInfo: '.CustomFieldRef',
        propertyInfos: [{
            name: 'value',
            required: true,
            collection: true,
            typeInfo: '.ListOrRecordRef'
          }]
      }, {
        localName: 'SearchColumnLongField',
        baseTypeInfo: '.SearchColumnField',
        propertyInfos: [{
            name: 'searchValue',
            typeInfo: 'Long'
          }]
      }, {
        localName: 'GetSelectFilterByFieldValue',
        propertyInfos: [{
            name: 'sublist'
          }, {
            name: 'field',
            required: true
          }, {
            name: 'internalId',
            required: true
          }]
      }, {
        localName: 'GetDeletedFilter',
        propertyInfos: [{
            name: 'deletedDate',
            typeInfo: '.SearchDateField'
          }, {
            name: 'type',
            typeInfo: '.SearchEnumMultiSelectField'
          }, {
            name: 'scriptId',
            typeInfo: '.SearchStringField'
          }]
      }, {
        localName: 'ItemAvailabilityList',
        propertyInfos: [{
            name: 'itemAvailability',
            required: true,
            collection: true,
            typeInfo: '.ItemAvailability'
          }]
      }, {
        localName: 'SearchDateField',
        propertyInfos: [{
            name: 'predefinedSearchValue',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.SearchDate'
          }, {
            name: 'searchValue',
            typeInfo: 'DateTime'
          }, {
            name: 'searchValue2',
            typeInfo: 'DateTime'
          }, {
            name: 'operator',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.SearchDateFieldOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SearchColumnSelectCustomField',
        baseTypeInfo: '.SearchColumnCustomField',
        propertyInfos: [{
            name: 'searchValue',
            typeInfo: '.ListOrRecordRef'
          }]
      }, {
        localName: 'GetDataCenterUrlsResult',
        propertyInfos: [{
            name: 'status',
            required: true,
            typeInfo: '.Status'
          }, {
            name: 'dataCenterUrls',
            typeInfo: '.DataCenterUrls'
          }]
      }, {
        localName: 'PostingTransactionSummaryList',
        propertyInfos: [{
            name: 'postingTransactionSummary',
            required: true,
            collection: true,
            typeInfo: '.PostingTransactionSummary'
          }]
      }, {
        localName: 'DimensionRef',
        propertyInfos: [{
            name: 'scriptId',
            attributeName: {
              localPart: 'scriptId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SearchLongField',
        propertyInfos: [{
            name: 'searchValue',
            typeInfo: 'Long'
          }, {
            name: 'searchValue2',
            typeInfo: 'Long'
          }, {
            name: 'operator',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.SearchLongFieldOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CustomizationRefList',
        propertyInfos: [{
            name: 'customizationRef',
            minOccurs: 0,
            collection: true,
            typeInfo: '.CustomizationRef'
          }]
      }, {
        localName: 'GetSavedSearchRecord',
        propertyInfos: [{
            name: 'searchType',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.SearchRecordType',
            attributeName: {
              localPart: 'searchType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CurrencyRate',
        propertyInfos: [{
            name: 'baseCurrency',
            required: true,
            typeInfo: '.RecordRef'
          }, {
            name: 'fromCurrency',
            required: true,
            typeInfo: '.RecordRef'
          }, {
            name: 'exchangeRate',
            required: true,
            typeInfo: 'Double'
          }, {
            name: 'effectiveDate',
            required: true,
            typeInfo: 'DateTime'
          }]
      }, {
        localName: 'Duration',
        propertyInfos: [{
            name: 'timeSpan',
            required: true,
            typeInfo: 'Double'
          }, {
            name: 'unit',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.DurationUnit'
          }]
      }, {
        localName: 'CustomizationType',
        propertyInfos: [{
            name: 'getCustomizationType',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.GetCustomizationType',
            attributeName: {
              localPart: 'getCustomizationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SearchColumnDoubleCustomField',
        baseTypeInfo: '.SearchColumnCustomField',
        propertyInfos: [{
            name: 'searchValue',
            typeInfo: 'Double'
          }]
      }, {
        localName: 'ListOrRecordRef',
        propertyInfos: [{
            name: 'name'
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
          }, {
            name: 'typeId',
            attributeName: {
              localPart: 'typeId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'LongCustomFieldRef',
        baseTypeInfo: '.CustomFieldRef',
        propertyInfos: [{
            name: 'value',
            required: true,
            typeInfo: 'Long'
          }]
      }, {
        localName: 'AttachReference',
        propertyInfos: [{
            name: 'attachTo',
            required: true,
            typeInfo: '.BaseRef'
          }]
      }, {
        localName: 'TokenPassport',
        propertyInfos: [{
            name: 'account',
            required: true
          }, {
            name: 'consumerKey',
            required: true
          }, {
            name: 'token',
            required: true
          }, {
            name: 'nonce',
            required: true
          }, {
            name: 'timestamp',
            required: true,
            typeInfo: 'Long'
          }, {
            name: 'signature',
            required: true,
            typeInfo: '.TokenPassportSignature'
          }]
      }, {
        localName: 'DoubleCustomFieldRef',
        baseTypeInfo: '.CustomFieldRef',
        propertyInfos: [{
            name: 'value',
            required: true,
            typeInfo: 'Double'
          }]
      }, {
        localName: 'GetCustomizationIdResult',
        propertyInfos: [{
            name: 'status',
            required: true,
            typeInfo: '.Status'
          }, {
            name: 'totalRecords',
            typeInfo: 'Int'
          }, {
            name: 'customizationRefList',
            typeInfo: '.CustomizationRefList'
          }]
      }, {
        localName: 'GetSelectValueFilter',
        propertyInfos: [{
            name: 'filterValue',
            required: true
          }, {
            name: 'operator',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.GetSelectValueFilterOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Passport',
        propertyInfos: [{
            name: 'email',
            required: true
          }, {
            name: 'password',
            required: true
          }, {
            name: 'account',
            required: true
          }, {
            name: 'role',
            typeInfo: '.RecordRef'
          }]
      }, {
        localName: 'DetachReference',
        propertyInfos: [{
            name: 'detachFrom',
            required: true,
            typeInfo: '.BaseRef'
          }]
      }, {
        localName: 'BudgetExchangeRate',
        propertyInfos: [{
            name: 'period',
            required: true,
            typeInfo: '.RecordRef'
          }, {
            name: 'fromSubsidiary',
            required: true,
            typeInfo: '.RecordRef'
          }, {
            name: 'toSubsidiary',
            required: true,
            typeInfo: '.RecordRef'
          }, {
            name: 'currentRate',
            typeInfo: 'Double'
          }, {
            name: 'averageRate',
            typeInfo: 'Double'
          }, {
            name: 'historicalRate',
            typeInfo: 'Double'
          }]
      }, {
        localName: 'Status',
        propertyInfos: [{
            name: 'statusDetail',
            minOccurs: 0,
            collection: true,
            typeInfo: '.StatusDetail'
          }, {
            name: 'isSuccess',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'isSuccess'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SearchDateCustomField',
        baseTypeInfo: '.SearchCustomField',
        propertyInfos: [{
            name: 'predefinedSearchValue',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.SearchDate'
          }, {
            name: 'searchValue',
            typeInfo: 'DateTime'
          }, {
            name: 'searchValue2',
            typeInfo: 'DateTime'
          }, {
            name: 'operator',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.SearchDateFieldOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SearchMultiSelectCustomField',
        baseTypeInfo: '.SearchCustomField',
        propertyInfos: [{
            name: 'searchValue',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ListOrRecordRef'
          }, {
            name: 'operator',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.SearchMultiSelectFieldOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'StringDimensionRef',
        baseTypeInfo: '.DimensionRef',
        propertyInfos: [{
            name: 'value',
            required: true
          }]
      }, {
        localName: 'GetPostingTransactionSummaryResult',
        propertyInfos: [{
            name: 'status',
            required: true,
            typeInfo: '.Status'
          }, {
            name: 'totalRecords',
            typeInfo: 'Int'
          }, {
            name: 'pageSize',
            typeInfo: 'Int'
          }, {
            name: 'totalPages',
            typeInfo: 'Int'
          }, {
            name: 'pageIndex',
            typeInfo: 'Int'
          }, {
            name: 'operationId'
          }, {
            name: 'postingTransactionSummaryList',
            typeInfo: '.PostingTransactionSummaryList'
          }]
      }, {
        localName: 'SelectDimensionRef',
        baseTypeInfo: '.DimensionRef',
        propertyInfos: [{
            name: 'value',
            required: true,
            typeInfo: '.ListOrRecordRef'
          }]
      }, {
        localName: 'SearchColumnStringCustomField',
        baseTypeInfo: '.SearchColumnCustomField',
        propertyInfos: [{
            name: 'searchValue'
          }]
      }, {
        localName: 'GetAllRecord',
        propertyInfos: [{
            name: 'recordType',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.GetAllRecordType',
            attributeName: {
              localPart: 'recordType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SearchStringField',
        propertyInfos: [{
            name: 'searchValue'
          }, {
            name: 'operator',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.SearchStringFieldOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'InitializeRefList',
        propertyInfos: [{
            name: 'initializeRef',
            minOccurs: 0,
            collection: true,
            typeInfo: '.InitializeRef'
          }]
      }, {
        localName: 'ChangePassword',
        propertyInfos: [{
            name: 'currentPassword',
            required: true
          }, {
            name: 'newPassword'
          }, {
            name: 'newPassword2'
          }]
      }, {
        localName: 'SearchColumnEnumMultiSelectCustomField',
        baseTypeInfo: '.SearchColumnCustomField',
        propertyInfos: [{
            name: 'searchValue',
            minOccurs: 0,
            collection: true
          }]
      }, {
        localName: 'UpdateInviteeStatusReference',
        propertyInfos: [{
            name: 'eventId',
            required: true,
            typeInfo: '.RecordRef'
          }, {
            name: 'responseCode',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.CalendarEventAttendeeResponse'
          }]
      }, {
        localName: 'GetServerTimeResult',
        propertyInfos: [{
            name: 'status',
            required: true,
            typeInfo: '.Status'
          }, {
            name: 'serverTime',
            required: true,
            typeInfo: 'DateTime'
          }]
      }, {
        localName: 'CustomRecordRef',
        baseTypeInfo: '.BaseRef',
        propertyInfos: [{
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
          }, {
            name: 'typeId',
            attributeName: {
              localPart: 'typeId'
            },
            type: 'attribute'
          }, {
            name: 'scriptId',
            attributeName: {
              localPart: 'scriptId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BaseRef',
        propertyInfos: [{
            name: 'name'
          }]
      }, {
        localName: 'BudgetExchangeRateList',
        propertyInfos: [{
            name: 'budgetExchangeRate',
            required: true,
            collection: true,
            typeInfo: '.BudgetExchangeRate'
          }]
      }, {
        localName: 'InitializeRecord',
        propertyInfos: [{
            name: 'type',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.InitializeType'
          }, {
            name: 'reference',
            typeInfo: '.InitializeRef'
          }, {
            name: 'auxReference',
            typeInfo: '.InitializeAuxRef'
          }, {
            name: 'referenceList',
            typeInfo: '.InitializeRefList'
          }]
      }, {
        localName: 'SearchColumnEnumSelectField',
        baseTypeInfo: '.SearchColumnField',
        propertyInfos: [{
            name: 'searchValue'
          }]
      }, {
        localName: 'SearchColumnDoubleField',
        baseTypeInfo: '.SearchColumnField',
        propertyInfos: [{
            name: 'searchValue',
            typeInfo: 'Double'
          }]
      }, {
        localName: 'GetBudgetExchangeRateResult',
        propertyInfos: [{
            name: 'status',
            required: true,
            typeInfo: '.Status'
          }, {
            name: 'budgetExchangeRateList',
            typeInfo: '.BudgetExchangeRateList'
          }]
      }, {
        localName: 'SearchLongCustomField',
        baseTypeInfo: '.SearchCustomField',
        propertyInfos: [{
            name: 'searchValue',
            typeInfo: 'Long'
          }, {
            name: 'searchValue2',
            typeInfo: 'Long'
          }, {
            name: 'operator',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2_types.SearchLongFieldOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TokenPassportSignature',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'algorithm',
            required: true,
            attributeName: {
              localPart: 'algorithm'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ItemAvailabilityFilter',
        propertyInfos: [{
            name: 'item',
            required: true,
            typeInfo: '.RecordRefList'
          }, {
            name: 'lastQtyAvailableChange',
            typeInfo: 'DateTime'
          }]
      }, {
        localName: 'SearchColumnDateField',
        baseTypeInfo: '.SearchColumnField',
        propertyInfos: [{
            name: 'searchValue',
            typeInfo: 'DateTime'
          }]
      }, {
        localName: 'SearchColumnCustomFieldList',
        propertyInfos: [{
            name: 'customField',
            minOccurs: 0,
            collection: true,
            typeInfo: '.SearchColumnCustomField'
          }]
      }],
    elementInfos: [{
        typeInfo: '.GetCustomizationIdResult',
        elementName: 'getCustomizationIdResult'
      }, {
        typeInfo: '.BaseRefList',
        elementName: 'baseRefList'
      }, {
        typeInfo: '.BaseRef',
        elementName: 'baseRef'
      }, {
        typeInfo: '.SearchRecord',
        elementName: 'searchRecord'
      }, {
        typeInfo: '.GetCurrencyRateResult',
        elementName: 'getCurrencyRateResult'
      }, {
        typeInfo: '.GetItemAvailabilityResult',
        elementName: 'getItemAvailabilityResult'
      }, {
        typeInfo: '.SearchRowList',
        elementName: 'searchRowList'
      }, {
        typeInfo: '.GetAllResult',
        elementName: 'getAllResult'
      }, {
        typeInfo: '.GetBudgetExchangeRateResult',
        elementName: 'getBudgetExchangeRateResult'
      }, {
        typeInfo: '.AsyncStatusResult',
        elementName: 'asyncStatusResult'
      }, {
        typeInfo: '.DeletedRecordList',
        elementName: 'deletedRecordList'
      }, {
        typeInfo: '.GetDataCenterUrlsResult',
        elementName: 'getDataCenterUrlsResult'
      }, {
        typeInfo: '.WsRoleList',
        elementName: 'wsRoleList'
      }, {
        typeInfo: '.GetDeletedResult',
        elementName: 'getDeletedResult'
      }, {
        typeInfo: '.GetServerTimeResult',
        elementName: 'getServerTimeResult'
      }, {
        typeInfo: '.GetSavedSearchResult',
        elementName: 'getSavedSearchResult'
      }, {
        typeInfo: '.SearchRowBasic',
        elementName: 'searchRowBasic'
      }, {
        typeInfo: '.GetPostingTransactionSummaryResult',
        elementName: 'getPostingTransactionSummaryResult'
      }, {
        typeInfo: '.SearchRecordBasic',
        elementName: 'searchRecordBasic'
      }, {
        typeInfo: '.RecordList',
        elementName: 'recordList'
      }, {
        typeInfo: '.GetSelectValueResult',
        elementName: 'getSelectValueResult'
      }, {
        typeInfo: '.SearchResult',
        elementName: 'searchResult'
      }, {
        typeInfo: '.CustomizationRefList',
        elementName: 'customizationRefList'
      }, {
        typeInfo: '.Record',
        elementName: 'record'
      }, {
        typeInfo: '.InitializeRefList',
        elementName: 'initializeRefList'
      }, {
        typeInfo: '.RecordRefList',
        elementName: 'recordRefList'
      }, {
        typeInfo: '.Status',
        elementName: 'status'
      }]
  };
  return {
    com_netsuite_webservices_platform_core_2019_2: com_netsuite_webservices_platform_core_2019_2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_platform_core_2019_2_Module_Factory);
}
else {
  var com_netsuite_webservices_platform_core_2019_2_Module = com_netsuite_webservices_platform_core_2019_2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_platform_core_2019_2 = com_netsuite_webservices_platform_core_2019_2_Module.com_netsuite_webservices_platform_core_2019_2;
  }
  else {
    var com_netsuite_webservices_platform_core_2019_2 = com_netsuite_webservices_platform_core_2019_2_Module.com_netsuite_webservices_platform_core_2019_2;
  }
}