var com_netsuite_webservices_platform_messages_2019_2_Module_Factory = function () {
  var com_netsuite_webservices_platform_messages_2019_2 = {
    name: 'com_netsuite_webservices_platform_messages_2019_2',
    defaultElementNamespaceURI: 'urn:messages_2019_2.platform.webservices.netsuite.com',
    dependencies: ['com_netsuite_webservices_platform_core_2019_2'],
    typeInfos: [{
        localName: 'SearchPreferences',
        propertyInfos: [{
            name: 'bodyFieldsOnly',
            typeInfo: 'Boolean'
          }, {
            name: 'returnSearchColumns',
            typeInfo: 'Boolean'
          }, {
            name: 'pageSize',
            typeInfo: 'Int'
          }]
      }, {
        localName: 'DeleteListRequest',
        propertyInfos: [{
            name: 'baseRef',
            required: true,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.BaseRef'
          }, {
            name: 'deletionReason',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.DeletionReason'
          }]
      }, {
        localName: 'MapSsoRequest',
        propertyInfos: [{
            name: 'ssoCredentials',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.SsoCredentials'
          }]
      }, {
        localName: 'DocumentInfo',
        propertyInfos: [{
            name: 'nsId',
            required: true
          }]
      }, {
        localName: 'AsyncUpsertListRequest',
        propertyInfos: [{
            name: 'record',
            required: true,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record'
          }]
      }, {
        localName: 'AttachRequest',
        propertyInfos: [{
            name: 'attachReference',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.AttachReference'
          }]
      }, {
        localName: 'DetachResponse',
        propertyInfos: [{
            name: 'writeResponse',
            required: true,
            typeInfo: '.WriteResponse'
          }]
      }, {
        localName: 'UpdateInviteeStatusListRequest',
        propertyInfos: [{
            name: 'updateInviteeStatusReference',
            required: true,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.UpdateInviteeStatusReference'
          }]
      }, {
        localName: 'AsyncGetListRequest',
        propertyInfos: [{
            name: 'baseRef',
            required: true,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.BaseRef'
          }]
      }, {
        localName: 'UpdateResponse',
        propertyInfos: [{
            name: 'writeResponse',
            required: true,
            typeInfo: '.WriteResponse'
          }]
      }, {
        localName: 'GetSavedSearchResponse',
        propertyInfos: [{
            name: 'getSavedSearchResult',
            required: true,
            elementName: {
              localPart: 'getSavedSearchResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.GetSavedSearchResult'
          }]
      }, {
        localName: 'InitializeResponse',
        propertyInfos: [{
            name: 'readResponse',
            required: true,
            typeInfo: '.ReadResponse'
          }]
      }, {
        localName: 'GetPostingTransactionSummaryResponse',
        propertyInfos: [{
            name: 'getPostingTransactionSummaryResult',
            required: true,
            elementName: {
              localPart: 'getPostingTransactionSummaryResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.GetPostingTransactionSummaryResult'
          }]
      }, {
        localName: 'DeleteResponse',
        propertyInfos: [{
            name: 'writeResponse',
            required: true,
            typeInfo: '.WriteResponse'
          }]
      }, {
        localName: 'AsyncAddListResult',
        baseTypeInfo: '.AsyncResult',
        propertyInfos: [{
            name: 'writeResponseList',
            required: true,
            typeInfo: '.WriteResponseList'
          }]
      }, {
        localName: 'GetServerTimeResponse',
        propertyInfos: [{
            name: 'getServerTimeResult',
            required: true,
            elementName: {
              localPart: 'getServerTimeResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.GetServerTimeResult'
          }]
      }, {
        localName: 'GetRequest',
        propertyInfos: [{
            name: 'baseRef',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.BaseRef'
          }]
      }, {
        localName: 'InitializeListResponse',
        propertyInfos: [{
            name: 'readResponseList',
            required: true,
            typeInfo: '.ReadResponseList'
          }]
      }, {
        localName: 'CheckAsyncStatusRequest',
        propertyInfos: [{
            name: 'jobId',
            required: true
          }]
      }, {
        localName: 'WriteResponse',
        propertyInfos: [{
            name: 'status',
            required: true,
            elementName: {
              localPart: 'status',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Status'
          }, {
            name: 'baseRef',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.BaseRef'
          }]
      }, {
        localName: 'GetResponse',
        propertyInfos: [{
            name: 'readResponse',
            required: true,
            typeInfo: '.ReadResponse'
          }]
      }, {
        localName: 'AsyncUpsertListResult',
        baseTypeInfo: '.AsyncResult',
        propertyInfos: [{
            name: 'writeResponseList',
            required: true,
            typeInfo: '.WriteResponseList'
          }]
      }, {
        localName: 'AddRequest',
        propertyInfos: [{
            name: 'record',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record'
          }]
      }, {
        localName: 'AsyncDeleteListRequest',
        propertyInfos: [{
            name: 'baseRef',
            required: true,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.BaseRef'
          }, {
            name: 'deletionReason',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.DeletionReason'
          }]
      }, {
        localName: 'SearchRequest',
        propertyInfos: [{
            name: 'searchRecord',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord'
          }]
      }, {
        localName: 'LogoutResponse',
        propertyInfos: [{
            name: 'sessionResponse',
            required: true,
            typeInfo: '.SessionResponse'
          }]
      }, {
        localName: 'GetSelectValueResponse',
        typeName: 'getSelectValueResponse',
        propertyInfos: [{
            name: 'getSelectValueResult',
            required: true,
            elementName: {
              localPart: 'getSelectValueResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.GetSelectValueResult'
          }]
      }, {
        localName: 'AsyncSearchResult',
        baseTypeInfo: '.AsyncResult',
        propertyInfos: [{
            name: 'searchResult',
            required: true,
            elementName: {
              localPart: 'searchResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchResult'
          }]
      }, {
        localName: 'UpdateInviteeStatusRequest',
        propertyInfos: [{
            name: 'updateInviteeStatusReference',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.UpdateInviteeStatusReference'
          }]
      }, {
        localName: 'SsoLoginResponse',
        propertyInfos: [{
            name: 'sessionResponse',
            required: true,
            typeInfo: '.SessionResponse'
          }]
      }, {
        localName: 'AsyncInitializeListRequest',
        propertyInfos: [{
            name: 'initializeRecord',
            required: true,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.InitializeRecord'
          }]
      }, {
        localName: 'GetCurrencyRateResponse',
        propertyInfos: [{
            name: 'getCurrencyRateResult',
            required: true,
            elementName: {
              localPart: 'getCurrencyRateResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.GetCurrencyRateResult'
          }]
      }, {
        localName: 'GetSavedSearchRequest',
        propertyInfos: [{
            name: 'record',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.GetSavedSearchRecord'
          }]
      }, {
        localName: 'SessionResponse',
        propertyInfos: [{
            name: 'status',
            required: true,
            elementName: {
              localPart: 'status',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Status'
          }, {
            name: 'userId',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'wsRoleList',
            elementName: {
              localPart: 'wsRoleList',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.WsRoleList'
          }]
      }, {
        localName: 'AddListResponse',
        propertyInfos: [{
            name: 'writeResponseList',
            required: true,
            typeInfo: '.WriteResponseList'
          }]
      }, {
        localName: 'LoginRequest',
        propertyInfos: [{
            name: 'passport',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Passport'
          }]
      }, {
        localName: 'UpdateRequest',
        propertyInfos: [{
            name: 'record',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record'
          }]
      }, {
        localName: 'GetAsyncResultRequest',
        propertyInfos: [{
            name: 'jobId',
            required: true
          }, {
            name: 'pageIndex',
            required: true,
            typeInfo: 'Int'
          }]
      }, {
        localName: 'ReadResponse',
        propertyInfos: [{
            name: 'status',
            required: true,
            elementName: {
              localPart: 'status',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Status'
          }, {
            name: 'record',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record'
          }]
      }, {
        localName: 'AsyncDeleteListResult',
        baseTypeInfo: '.AsyncResult',
        propertyInfos: [{
            name: 'writeResponseList',
            required: true,
            typeInfo: '.WriteResponseList'
          }]
      }, {
        localName: 'SsoLoginRequest',
        propertyInfos: [{
            name: 'ssoPassport',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.SsoPassport'
          }]
      }, {
        localName: 'ApplicationInfo',
        propertyInfos: [{
            name: 'applicationId',
            required: true
          }]
      }, {
        localName: 'PartnerInfo',
        propertyInfos: [{
            name: 'partnerId'
          }]
      }, {
        localName: 'AddListRequest',
        propertyInfos: [{
            name: 'record',
            required: true,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record'
          }]
      }, {
        localName: 'UpdateListRequest',
        propertyInfos: [{
            name: 'record',
            required: true,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record'
          }]
      }, {
        localName: 'UpdateListResponse',
        propertyInfos: [{
            name: 'writeResponseList',
            required: true,
            typeInfo: '.WriteResponseList'
          }]
      }, {
        localName: 'GetCustomizationIdResponse',
        propertyInfos: [{
            name: 'getCustomizationIdResult',
            required: true,
            elementName: {
              localPart: 'getCustomizationIdResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.GetCustomizationIdResult'
          }]
      }, {
        localName: 'SearchMoreWithIdResponse',
        propertyInfos: [{
            name: 'searchResult',
            required: true,
            elementName: {
              localPart: 'searchResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchResult'
          }]
      }, {
        localName: 'ChangeEmailResponse',
        propertyInfos: [{
            name: 'sessionResponse',
            required: true,
            typeInfo: '.SessionResponse'
          }]
      }, {
        localName: 'GetDeletedResponse',
        propertyInfos: [{
            name: 'getDeletedResult',
            required: true,
            elementName: {
              localPart: 'getDeletedResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.GetDeletedResult'
          }]
      }, {
        localName: 'GetItemAvailabilityResponse',
        propertyInfos: [{
            name: 'getItemAvailabilityResult',
            required: true,
            elementName: {
              localPart: 'getItemAvailabilityResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.GetItemAvailabilityResult'
          }]
      }, {
        localName: 'GetItemAvailabilityRequest',
        propertyInfos: [{
            name: 'itemAvailabilityFilter',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.ItemAvailabilityFilter'
          }]
      }, {
        localName: 'GetDataCenterUrlsRequest',
        propertyInfos: [{
            name: 'account',
            required: true
          }]
      }, {
        localName: 'AsyncStatusResponse',
        propertyInfos: [{
            name: 'asyncStatusResult',
            required: true,
            elementName: {
              localPart: 'asyncStatusResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.AsyncStatusResult'
          }]
      }, {
        localName: 'GetCurrencyRateRequest',
        propertyInfos: [{
            name: 'currencyRateFilter',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.CurrencyRateFilter'
          }]
      }, {
        localName: 'GetCustomizationIdRequest',
        propertyInfos: [{
            name: 'customizationType',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.CustomizationType'
          }, {
            name: 'includeInactives',
            required: true,
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'GetSelectValueRequest',
        typeName: 'getSelectValueRequest',
        propertyInfos: [{
            name: 'fieldDescription',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.GetSelectValueFieldDescription'
          }, {
            name: 'pageIndex',
            required: true,
            typeInfo: 'Int'
          }]
      }, {
        localName: 'SearchNextResponse',
        propertyInfos: [{
            name: 'searchResult',
            required: true,
            elementName: {
              localPart: 'searchResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchResult'
          }]
      }, {
        localName: 'AsyncSearchRequest',
        propertyInfos: [{
            name: 'searchRecord',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord'
          }]
      }, {
        localName: 'GetListRequest',
        propertyInfos: [{
            name: 'baseRef',
            required: true,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.BaseRef'
          }]
      }, {
        localName: 'AsyncUpdateListResult',
        baseTypeInfo: '.AsyncResult',
        propertyInfos: [{
            name: 'writeResponseList',
            required: true,
            typeInfo: '.WriteResponseList'
          }]
      }, {
        localName: 'AsyncUpdateListRequest',
        propertyInfos: [{
            name: 'record',
            required: true,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record'
          }]
      }, {
        localName: 'ChangeEmailRequest',
        propertyInfos: [{
            name: 'changeEmail',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.ChangeEmail'
          }]
      }, {
        localName: 'GetBudgetExchangeRateRequest',
        propertyInfos: [{
            name: 'budgetExchangeRateFilter',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.BudgetExchangeRateFilter'
          }]
      }, {
        localName: 'SearchMoreResponse',
        propertyInfos: [{
            name: 'searchResult',
            required: true,
            elementName: {
              localPart: 'searchResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchResult'
          }]
      }, {
        localName: 'GetAsyncResultResponse',
        propertyInfos: [{
            name: 'asyncResult',
            required: true,
            typeInfo: '.AsyncResult'
          }]
      }, {
        localName: 'SearchMoreWithIdRequest',
        propertyInfos: [{
            name: 'searchId',
            required: true
          }, {
            name: 'pageIndex',
            required: true,
            typeInfo: 'Int'
          }]
      }, {
        localName: 'SearchNextRequest'
      }, {
        localName: 'DetachRequest',
        propertyInfos: [{
            name: 'detachReference',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.DetachReference'
          }]
      }, {
        localName: 'SearchResponse',
        propertyInfos: [{
            name: 'searchResult',
            required: true,
            elementName: {
              localPart: 'searchResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchResult'
          }]
      }, {
        localName: 'GetAllResponse',
        propertyInfos: [{
            name: 'getAllResult',
            required: true,
            elementName: {
              localPart: 'getAllResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.GetAllResult'
          }]
      }, {
        localName: 'AddResponse',
        propertyInfos: [{
            name: 'writeResponse',
            required: true,
            typeInfo: '.WriteResponse'
          }]
      }, {
        localName: 'GetDataCenterUrlsResponse',
        propertyInfos: [{
            name: 'getDataCenterUrlsResult',
            required: true,
            elementName: {
              localPart: 'getDataCenterUrlsResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.GetDataCenterUrlsResult'
          }]
      }, {
        localName: 'AsyncGetListResult',
        baseTypeInfo: '.AsyncResult',
        propertyInfos: [{
            name: 'readResponseList',
            required: true,
            typeInfo: '.ReadResponseList'
          }]
      }, {
        localName: 'UpsertRequest',
        propertyInfos: [{
            name: 'record',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record'
          }]
      }, {
        localName: 'GetAllRequest',
        propertyInfos: [{
            name: 'record',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.GetAllRecord'
          }]
      }, {
        localName: 'MapSsoResponse',
        propertyInfos: [{
            name: 'sessionResponse',
            required: true,
            typeInfo: '.SessionResponse'
          }]
      }, {
        localName: 'AsyncResult'
      }, {
        localName: 'SearchMoreRequest',
        propertyInfos: [{
            name: 'pageIndex',
            required: true,
            typeInfo: 'Int'
          }]
      }, {
        localName: 'GetDeletedRequest',
        propertyInfos: [{
            name: 'getDeletedFilter',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.GetDeletedFilter'
          }, {
            name: 'pageIndex',
            required: true,
            typeInfo: 'Int'
          }]
      }, {
        localName: 'DeleteRequest',
        propertyInfos: [{
            name: 'baseRef',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.BaseRef'
          }, {
            name: 'deletionReason',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.DeletionReason'
          }]
      }, {
        localName: 'AsyncInitializeListResult',
        baseTypeInfo: '.AsyncResult',
        propertyInfos: [{
            name: 'readResponseList',
            required: true,
            typeInfo: '.ReadResponseList'
          }]
      }, {
        localName: 'ChangePasswordRequest',
        propertyInfos: [{
            name: 'changePassword',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.ChangePassword'
          }]
      }, {
        localName: 'WriteResponseList',
        propertyInfos: [{
            name: 'status',
            elementName: {
              localPart: 'status',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Status'
          }, {
            name: 'writeResponse',
            required: true,
            collection: true,
            typeInfo: '.WriteResponse'
          }]
      }, {
        localName: 'GetBudgetExchangeRateResponse',
        propertyInfos: [{
            name: 'getBudgetExchangeRateResult',
            required: true,
            elementName: {
              localPart: 'getBudgetExchangeRateResult',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.GetBudgetExchangeRateResult'
          }]
      }, {
        localName: 'ReadResponseList',
        propertyInfos: [{
            name: 'status',
            elementName: {
              localPart: 'status',
              namespaceURI: 'urn:core_2019_2.platform.webservices.netsuite.com'
            },
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Status'
          }, {
            name: 'readResponse',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ReadResponse'
          }]
      }, {
        localName: 'UpsertResponse',
        propertyInfos: [{
            name: 'writeResponse',
            required: true,
            typeInfo: '.WriteResponse'
          }]
      }, {
        localName: 'GetServerTimeRequest'
      }, {
        localName: 'LogoutRequest'
      }, {
        localName: 'UpsertListRequest',
        propertyInfos: [{
            name: 'record',
            required: true,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record'
          }]
      }, {
        localName: 'GetPostingTransactionSummaryRequest',
        propertyInfos: [{
            name: 'fields',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.PostingTransactionSummaryField'
          }, {
            name: 'filters',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.PostingTransactionSummaryFilter'
          }, {
            name: 'pageIndex',
            required: true,
            typeInfo: 'Int'
          }, {
            name: 'operationId'
          }]
      }, {
        localName: 'UpsertListResponse',
        propertyInfos: [{
            name: 'writeResponseList',
            required: true,
            typeInfo: '.WriteResponseList'
          }]
      }, {
        localName: 'ChangePasswordResponse',
        propertyInfos: [{
            name: 'sessionResponse',
            required: true,
            typeInfo: '.SessionResponse'
          }]
      }, {
        localName: 'DeleteListResponse',
        propertyInfos: [{
            name: 'writeResponseList',
            required: true,
            typeInfo: '.WriteResponseList'
          }]
      }, {
        localName: 'UpdateInviteeStatusResponse',
        propertyInfos: [{
            name: 'writeResponse',
            required: true,
            typeInfo: '.WriteResponse'
          }]
      }, {
        localName: 'AsyncAddListRequest',
        propertyInfos: [{
            name: 'record',
            required: true,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record'
          }]
      }, {
        localName: 'InitializeRequest',
        propertyInfos: [{
            name: 'initializeRecord',
            required: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.InitializeRecord'
          }]
      }, {
        localName: 'InitializeListRequest',
        propertyInfos: [{
            name: 'initializeRecord',
            required: true,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.InitializeRecord'
          }]
      }, {
        localName: 'Preferences',
        propertyInfos: [{
            name: 'warningAsError',
            typeInfo: 'Boolean'
          }, {
            name: 'disableMandatoryCustomFieldValidation',
            typeInfo: 'Boolean'
          }, {
            name: 'disableSystemNotesForCustomFields',
            typeInfo: 'Boolean'
          }, {
            name: 'ignoreReadOnlyFields',
            typeInfo: 'Boolean'
          }, {
            name: 'runServerSuiteScriptAndTriggerWorkflows',
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'GetListResponse',
        propertyInfos: [{
            name: 'readResponseList',
            required: true,
            typeInfo: '.ReadResponseList'
          }]
      }, {
        localName: 'AttachResponse',
        propertyInfos: [{
            name: 'writeResponse',
            required: true,
            typeInfo: '.WriteResponse'
          }]
      }, {
        localName: 'UpdateInviteeStatusListResponse',
        propertyInfos: [{
            name: 'writeResponseList',
            required: true,
            typeInfo: '.WriteResponseList'
          }]
      }, {
        localName: 'LoginResponse',
        propertyInfos: [{
            name: 'sessionResponse',
            required: true,
            typeInfo: '.SessionResponse'
          }]
      }],
    elementInfos: [{
        typeInfo: '.LoginResponse',
        elementName: 'loginResponse'
      }, {
        typeInfo: '.GetDeletedResponse',
        elementName: 'getDeletedResponse'
      }, {
        typeInfo: '.AsyncSearchRequest',
        elementName: 'asyncSearch'
      }, {
        typeInfo: 'com_netsuite_webservices_platform_core_2019_2.Passport',
        elementName: 'passport'
      }, {
        typeInfo: '.GetListResponse',
        elementName: 'getListResponse'
      }, {
        typeInfo: '.GetItemAvailabilityRequest',
        elementName: 'getItemAvailability'
      }, {
        typeInfo: '.AsyncUpdateListResult',
        elementName: 'asyncUpdateListResult'
      }, {
        typeInfo: '.DetachResponse',
        elementName: 'detachResponse'
      }, {
        typeInfo: '.ChangePasswordResponse',
        elementName: 'changePasswordResponse'
      }, {
        typeInfo: '.AttachResponse',
        elementName: 'attachResponse'
      }, {
        typeInfo: '.UpsertListResponse',
        elementName: 'upsertListResponse'
      }, {
        typeInfo: '.AsyncStatusResponse',
        elementName: 'asyncInitializeListResponse'
      }, {
        typeInfo: '.AddRequest',
        elementName: 'add'
      }, {
        typeInfo: '.GetSavedSearchRequest',
        elementName: 'getSavedSearch'
      }, {
        typeInfo: '.AsyncInitializeListResult',
        elementName: 'asyncInitializeListResult'
      }, {
        typeInfo: '.GetRequest',
        elementName: 'get'
      }, {
        typeInfo: '.DeleteResponse',
        elementName: 'deleteResponse'
      }, {
        typeInfo: '.GetDeletedRequest',
        elementName: 'getDeleted'
      }, {
        typeInfo: '.AsyncStatusResponse',
        elementName: 'checkAsyncStatusResponse'
      }, {
        typeInfo: '.UpdateResponse',
        elementName: 'updateResponse'
      }, {
        typeInfo: '.UpdateInviteeStatusListResponse',
        elementName: 'updateInviteeStatusListResponse'
      }, {
        typeInfo: '.ChangeEmailRequest',
        elementName: 'changeEmail'
      }, {
        typeInfo: '.GetListRequest',
        elementName: 'getList'
      }, {
        typeInfo: '.AddListRequest',
        elementName: 'addList'
      }, {
        typeInfo: '.AsyncDeleteListResult',
        elementName: 'asyncDeleteListResult'
      }, {
        typeInfo: '.UpdateListResponse',
        elementName: 'updateListResponse'
      }, {
        typeInfo: '.SearchPreferences',
        elementName: 'searchPreferences'
      }, {
        typeInfo: '.LoginRequest',
        elementName: 'login'
      }, {
        typeInfo: '.PartnerInfo',
        elementName: 'partnerInfo'
      }, {
        typeInfo: '.SearchNextResponse',
        elementName: 'searchNextResponse'
      }, {
        typeInfo: '.GetPostingTransactionSummaryRequest',
        elementName: 'getPostingTransactionSummary'
      }, {
        typeInfo: '.AsyncStatusResponse',
        elementName: 'asyncGetListResponse'
      }, {
        typeInfo: '.SearchNextRequest',
        elementName: 'searchNext'
      }, {
        typeInfo: '.AsyncAddListRequest',
        elementName: 'asyncAddList'
      }, {
        typeInfo: '.SearchMoreResponse',
        elementName: 'searchMoreResponse'
      }, {
        typeInfo: '.ChangePasswordRequest',
        elementName: 'changePassword'
      }, {
        typeInfo: '.AsyncAddListResult',
        elementName: 'asyncAddListResult'
      }, {
        typeInfo: '.SearchMoreWithIdResponse',
        elementName: 'searchMoreWithIdResponse'
      }, {
        typeInfo: '.UpdateListRequest',
        elementName: 'updateList'
      }, {
        typeInfo: '.UpsertResponse',
        elementName: 'upsertResponse'
      }, {
        typeInfo: '.DeleteRequest',
        elementName: 'delete'
      }, {
        typeInfo: '.AddListResponse',
        elementName: 'addListResponse'
      }, {
        typeInfo: '.DocumentInfo',
        elementName: 'documentInfo'
      }, {
        typeInfo: '.UpdateInviteeStatusResponse',
        elementName: 'updateInviteeStatusResponse'
      }, {
        typeInfo: '.UpsertListRequest',
        elementName: 'upsertList'
      }, {
        typeInfo: '.UpdateInviteeStatusRequest',
        elementName: 'updateInviteeStatus'
      }, {
        typeInfo: '.AsyncUpsertListResult',
        elementName: 'asyncUpsertListResult'
      }, {
        typeInfo: '.DeleteListRequest',
        elementName: 'deleteList'
      }, {
        typeInfo: '.GetAsyncResultRequest',
        elementName: 'getAsyncResult'
      }, {
        typeInfo: '.InitializeResponse',
        elementName: 'initializeResponse'
      }, {
        typeInfo: '.LogoutRequest',
        elementName: 'logout'
      }, {
        typeInfo: '.InitializeRequest',
        elementName: 'initialize'
      }, {
        typeInfo: '.GetAsyncResultResponse',
        elementName: 'getAsyncResultResponse'
      }, {
        typeInfo: '.SessionResponse',
        elementName: 'sessionResponse'
      }, {
        typeInfo: '.GetBudgetExchangeRateRequest',
        elementName: 'getBudgetExchangeRate'
      }, {
        typeInfo: '.WriteResponse',
        elementName: 'writeResponse'
      }, {
        typeInfo: '.WriteResponseList',
        elementName: 'writeResponseList'
      }, {
        typeInfo: '.GetDataCenterUrlsRequest',
        elementName: 'getDataCenterUrls'
      }, {
        typeInfo: '.GetPostingTransactionSummaryResponse',
        elementName: 'getPostingTransactionSummaryResponse'
      }, {
        typeInfo: '.SsoLoginResponse',
        elementName: 'ssoLoginResponse'
      }, {
        typeInfo: '.DeleteListResponse',
        elementName: 'deleteListResponse'
      }, {
        typeInfo: '.GetCurrencyRateRequest',
        elementName: 'getCurrencyRate'
      }, {
        typeInfo: '.GetAllRequest',
        elementName: 'getAll'
      }, {
        typeInfo: '.AsyncGetListResult',
        elementName: 'asyncGetListResult'
      }, {
        typeInfo: '.GetSavedSearchResponse',
        elementName: 'getSavedSearchResponse'
      }, {
        typeInfo: '.MapSsoResponse',
        elementName: 'mapSsoResponse'
      }, {
        typeInfo: '.AsyncStatusResponse',
        elementName: 'asyncAddListResponse'
      }, {
        typeInfo: '.GetItemAvailabilityResponse',
        elementName: 'getItemAvailabilityResponse'
      }, {
        typeInfo: '.GetBudgetExchangeRateResponse',
        elementName: 'getBudgetExchangeRateResponse'
      }, {
        typeInfo: '.DetachRequest',
        elementName: 'detach'
      }, {
        typeInfo: '.CheckAsyncStatusRequest',
        elementName: 'checkAsyncStatus'
      }, {
        typeInfo: '.SearchResponse',
        elementName: 'searchResponse'
      }, {
        typeInfo: '.ApplicationInfo',
        elementName: 'applicationInfo'
      }, {
        typeInfo: '.AsyncUpsertListRequest',
        elementName: 'asyncUpsertList'
      }, {
        typeInfo: '.GetCustomizationIdResponse',
        elementName: 'getCustomizationIdResponse'
      }, {
        typeInfo: '.GetCurrencyRateResponse',
        elementName: 'getCurrencyRateResponse'
      }, {
        typeInfo: '.GetCustomizationIdRequest',
        elementName: 'getCustomizationId'
      }, {
        typeInfo: '.AsyncUpdateListRequest',
        elementName: 'asyncUpdateList'
      }, {
        typeInfo: '.InitializeListResponse',
        elementName: 'initializeListResponse'
      }, {
        typeInfo: '.GetAllResponse',
        elementName: 'getAllResponse'
      }, {
        typeInfo: '.LogoutResponse',
        elementName: 'logoutResponse'
      }, {
        typeInfo: '.UpsertRequest',
        elementName: 'upsert'
      }, {
        typeInfo: '.AttachRequest',
        elementName: 'attach'
      }, {
        typeInfo: '.UpdateInviteeStatusListRequest',
        elementName: 'updateInviteeStatusList'
      }, {
        typeInfo: '.AsyncGetListRequest',
        elementName: 'asyncGetList'
      }, {
        typeInfo: '.GetResponse',
        elementName: 'getResponse'
      }, {
        typeInfo: '.AsyncSearchResult',
        elementName: 'asyncSearchResult'
      }, {
        typeInfo: '.AsyncStatusResponse',
        elementName: 'asyncUpdateListResponse'
      }, {
        typeInfo: '.AddResponse',
        elementName: 'addResponse'
      }, {
        typeInfo: '.MapSsoRequest',
        elementName: 'mapSso'
      }, {
        typeInfo: '.SearchRequest',
        elementName: 'search'
      }, {
        typeInfo: '.SearchMoreRequest',
        elementName: 'searchMore'
      }, {
        typeInfo: '.Preferences',
        elementName: 'preferences'
      }, {
        typeInfo: '.AsyncDeleteListRequest',
        elementName: 'asyncDeleteList'
      }, {
        typeInfo: '.AsyncResult',
        elementName: 'asyncResult'
      }, {
        typeInfo: '.SsoLoginRequest',
        elementName: 'ssoLogin'
      }, {
        typeInfo: '.ReadResponse',
        elementName: 'readResponse'
      }, {
        typeInfo: 'com_netsuite_webservices_platform_core_2019_2.TokenPassport',
        elementName: 'tokenPassport'
      }, {
        typeInfo: '.GetServerTimeResponse',
        elementName: 'getServerTimeResponse'
      }, {
        typeInfo: '.ChangeEmailResponse',
        elementName: 'changeEmailResponse'
      }, {
        typeInfo: '.GetDataCenterUrlsResponse',
        elementName: 'getDataCenterUrlsResponse'
      }, {
        typeInfo: '.AsyncStatusResponse',
        elementName: 'asyncUpsertListResponse'
      }, {
        typeInfo: '.GetSelectValueRequest',
        elementName: 'getSelectValue'
      }, {
        typeInfo: '.AsyncStatusResponse',
        elementName: 'asyncSearchResponse'
      }, {
        typeInfo: '.AsyncInitializeListRequest',
        elementName: 'asyncInitializeList'
      }, {
        typeInfo: '.ReadResponseList',
        elementName: 'readResponseList'
      }, {
        typeInfo: '.UpdateRequest',
        elementName: 'update'
      }, {
        typeInfo: '.AsyncStatusResponse',
        elementName: 'asyncDeleteListResponse'
      }, {
        typeInfo: '.InitializeListRequest',
        elementName: 'initializeList'
      }, {
        typeInfo: '.SearchMoreWithIdRequest',
        elementName: 'searchMoreWithId'
      }, {
        typeInfo: '.GetServerTimeRequest',
        elementName: 'getServerTime'
      }, {
        typeInfo: '.GetSelectValueResponse',
        elementName: 'getSelectValueResponse'
      }]
  };
  return {
    com_netsuite_webservices_platform_messages_2019_2: com_netsuite_webservices_platform_messages_2019_2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_platform_messages_2019_2_Module_Factory);
}
else {
  var com_netsuite_webservices_platform_messages_2019_2_Module = com_netsuite_webservices_platform_messages_2019_2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_platform_messages_2019_2 = com_netsuite_webservices_platform_messages_2019_2_Module.com_netsuite_webservices_platform_messages_2019_2;
  }
  else {
    var com_netsuite_webservices_platform_messages_2019_2 = com_netsuite_webservices_platform_messages_2019_2_Module.com_netsuite_webservices_platform_messages_2019_2;
  }
}