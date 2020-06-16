var com_netsuite_webservices_lists_website_2019_2_Module_Factory = function () {
  var com_netsuite_webservices_lists_website_2019_2 = {
    name: 'com_netsuite_webservices_lists_website_2019_2',
    defaultElementNamespaceURI: 'urn:website_2019_2.lists.webservices.netsuite.com',
    dependencies: ['com_netsuite_webservices_platform_core_2019_2', 'com_netsuite_webservices_platform_common_2019_2', 'com_netsuite_webservices_platform_common_2019_2_types'],
    typeInfos: [{
        localName: 'SiteCategoryTranslation',
        propertyInfos: [{
            name: 'locale',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2_types.Language'
          }, {
            name: 'language'
          }, {
            name: 'displayName'
          }, {
            name: 'description'
          }, {
            name: 'storeDetailedDescription'
          }, {
            name: 'pageTitle'
          }]
      }, {
        localName: 'SiteCategory',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
        propertyInfos: [{
            name: 'website',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'itemId'
          }, {
            name: 'parentCategory',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'categoryListLayout',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'itemListLayout',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'relatedItemsListLayout',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'correlatedItemsListLayout',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'isOnline',
            typeInfo: 'Boolean'
          }, {
            name: 'isInactive',
            typeInfo: 'Boolean'
          }, {
            name: 'description'
          }, {
            name: 'storeDetailedDescription'
          }, {
            name: 'storeDisplayThumbnail',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'storeDisplayImage',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'pageTitle'
          }, {
            name: 'metaTagHtml'
          }, {
            name: 'excludeFromSitemap',
            typeInfo: 'Boolean'
          }, {
            name: 'urlComponent'
          }, {
            name: 'sitemapPriority',
            values: ['_00', '_01', '_02', '_03', '_04', '_05', '_06', '_07', '_08', '_09', '_10', '_auto']
          }, {
            name: 'searchKeywords'
          }, {
            name: 'presentationItemList',
            typeInfo: '.SiteCategoryPresentationItemList'
          }, {
            name: 'translationsList',
            typeInfo: '.SiteCategoryTranslationList'
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
        localName: 'SiteCategorySearchAdvanced',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'criteria',
            typeInfo: '.SiteCategorySearch'
          }, {
            name: 'columns',
            typeInfo: '.SiteCategorySearchRow'
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
        localName: 'SiteCategorySearch',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.SiteCategorySearchBasic'
          }, {
            name: 'shopperJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomerSearchBasic'
          }, {
            name: 'userJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchBasic'
          }]
      }, {
        localName: 'SiteCategorySearchRow',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRow',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.SiteCategorySearchRowBasic'
          }, {
            name: 'shopperJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomerSearchRowBasic'
          }, {
            name: 'userJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchRowBasic'
          }]
      }, {
        localName: 'SiteCategoryPresentationItemList',
        propertyInfos: [{
            name: 'presentationItem',
            minOccurs: 0,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.PresentationItem'
          }, {
            name: 'replaceAll',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'replaceAll'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SiteCategoryTranslationList',
        propertyInfos: [{
            name: 'translation',
            minOccurs: 0,
            collection: true,
            typeInfo: '.SiteCategoryTranslation'
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
        typeInfo: '.SiteCategorySearch',
        elementName: 'siteCategorySearch'
      }, {
        typeInfo: '.SiteCategory',
        elementName: 'SiteCategory'
      }]
  };
  return {
    com_netsuite_webservices_lists_website_2019_2: com_netsuite_webservices_lists_website_2019_2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_lists_website_2019_2_Module_Factory);
}
else {
  var com_netsuite_webservices_lists_website_2019_2_Module = com_netsuite_webservices_lists_website_2019_2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_lists_website_2019_2 = com_netsuite_webservices_lists_website_2019_2_Module.com_netsuite_webservices_lists_website_2019_2;
  }
  else {
    var com_netsuite_webservices_lists_website_2019_2 = com_netsuite_webservices_lists_website_2019_2_Module.com_netsuite_webservices_lists_website_2019_2;
  }
}