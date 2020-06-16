var com_netsuite_webservices_documents_filecabinet_2019_2_Module_Factory = function () {
  var com_netsuite_webservices_documents_filecabinet_2019_2 = {
    name: 'com_netsuite_webservices_documents_filecabinet_2019_2',
    defaultElementNamespaceURI: 'urn:filecabinet_2019_2.documents.webservices.netsuite.com',
    dependencies: ['com_netsuite_webservices_platform_core_2019_2', 'com_netsuite_webservices_platform_common_2019_2', 'com_netsuite_webservices_documents_filecabinet_2019_2_types'],
    typeInfos: [{
        localName: 'FileSiteCategoryList',
        propertyInfos: [{
            name: 'siteCategory',
            minOccurs: 0,
            collection: true,
            typeInfo: '.FileSiteCategory'
          }, {
            name: 'replaceAll',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'replaceAll'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'FileSearchAdvanced',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'criteria',
            typeInfo: '.FileSearch'
          }, {
            name: 'columns',
            typeInfo: '.FileSearchRow'
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
        localName: 'FileSiteCategory',
        propertyInfos: [{
            name: 'isDefault',
            typeInfo: 'Boolean'
          }, {
            name: 'category',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'categoryDescription'
          }, {
            name: 'website',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }]
      }, {
        localName: 'FileSearch',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.FileSearchBasic'
          }, {
            name: 'shopperJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomerSearchBasic'
          }, {
            name: 'userJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchBasic'
          }]
      }, {
        localName: 'FileSearchRow',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRow',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.FileSearchRowBasic'
          }, {
            name: 'shopperJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomerSearchRowBasic'
          }, {
            name: 'userJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchRowBasic'
          }]
      }, {
        localName: 'FolderSearchRow',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRow',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.FolderSearchRowBasic'
          }, {
            name: 'fileJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.FileSearchRowBasic'
          }, {
            name: 'userJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchRowBasic'
          }]
      }, {
        localName: 'File',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
        propertyInfos: [{
            name: 'name'
          }, {
            name: 'attachFrom',
            typeInfo: 'com_netsuite_webservices_documents_filecabinet_2019_2_types.FileAttachFrom'
          }, {
            name: 'mediaTypeName'
          }, {
            name: 'fileType',
            typeInfo: 'com_netsuite_webservices_documents_filecabinet_2019_2_types.MediaType'
          }, {
            name: 'content',
            typeInfo: 'Base64Binary'
          }, {
            name: 'folder',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'fileSize',
            typeInfo: 'Double'
          }, {
            name: 'url'
          }, {
            name: 'urlComponent'
          }, {
            name: 'mediaFile',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'textFileEncoding',
            typeInfo: 'com_netsuite_webservices_documents_filecabinet_2019_2_types.TextFileEncoding'
          }, {
            name: 'description'
          }, {
            name: 'encoding',
            typeInfo: 'com_netsuite_webservices_documents_filecabinet_2019_2_types.FileEncoding'
          }, {
            name: 'altTagCaption'
          }, {
            name: 'isOnline',
            typeInfo: 'Boolean'
          }, {
            name: 'isInactive',
            typeInfo: 'Boolean'
          }, {
            name: 'clazz',
            elementName: 'class'
          }, {
            name: 'bundleable',
            typeInfo: 'Boolean'
          }, {
            name: 'department'
          }, {
            name: 'hideInBundle',
            typeInfo: 'Boolean'
          }, {
            name: 'isPrivate',
            typeInfo: 'Boolean'
          }, {
            name: 'owner',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'caption'
          }, {
            name: 'storeDisplayThumbnail',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'siteDescription'
          }, {
            name: 'featuredDescription'
          }, {
            name: 'lastModifiedDate',
            typeInfo: 'DateTime'
          }, {
            name: 'createdDate',
            typeInfo: 'DateTime'
          }, {
            name: 'siteCategoryList',
            typeInfo: '.FileSiteCategoryList'
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
        localName: 'Folder',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
        propertyInfos: [{
            name: 'name'
          }, {
            name: 'department',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'description'
          }, {
            name: 'isInactive',
            typeInfo: 'Boolean'
          }, {
            name: 'isPrivate',
            typeInfo: 'Boolean'
          }, {
            name: 'bundleable',
            typeInfo: 'Boolean'
          }, {
            name: 'hideInBundle',
            typeInfo: 'Boolean'
          }, {
            name: 'isOnline',
            typeInfo: 'Boolean'
          }, {
            name: 'group',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'parent',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'folderType',
            typeInfo: 'com_netsuite_webservices_documents_filecabinet_2019_2_types.FolderFolderType'
          }, {
            name: 'clazz',
            elementName: 'class',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'location',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'subsidiary',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
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
        localName: 'FolderSearch',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.FolderSearchBasic'
          }, {
            name: 'fileJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.FileSearchBasic'
          }, {
            name: 'userJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchBasic'
          }]
      }, {
        localName: 'FolderSearchAdvanced',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'criteria',
            typeInfo: '.FolderSearch'
          }, {
            name: 'columns',
            typeInfo: '.FolderSearchRow'
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
      }],
    elementInfos: [{
        typeInfo: '.FileSearch',
        elementName: 'fileSearch'
      }, {
        typeInfo: '.FolderSearch',
        elementName: 'folderSearch'
      }]
  };
  return {
    com_netsuite_webservices_documents_filecabinet_2019_2: com_netsuite_webservices_documents_filecabinet_2019_2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_documents_filecabinet_2019_2_Module_Factory);
}
else {
  var com_netsuite_webservices_documents_filecabinet_2019_2_Module = com_netsuite_webservices_documents_filecabinet_2019_2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_documents_filecabinet_2019_2 = com_netsuite_webservices_documents_filecabinet_2019_2_Module.com_netsuite_webservices_documents_filecabinet_2019_2;
  }
  else {
    var com_netsuite_webservices_documents_filecabinet_2019_2 = com_netsuite_webservices_documents_filecabinet_2019_2_Module.com_netsuite_webservices_documents_filecabinet_2019_2;
  }
}