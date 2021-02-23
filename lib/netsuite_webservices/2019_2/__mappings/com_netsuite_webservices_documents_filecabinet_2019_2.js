"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2RvY3VtZW50c19maWxlY2FiaW5ldF8yMDE5XzIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbmV0c3VpdGVfd2Vic2VydmljZXMvMjAxOV8yL19fbWFwcGluZ3MvY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2RvY3VtZW50c19maWxlY2FiaW5ldF8yMDE5XzIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksb0VBQW9FLEdBQUc7SUFDekUsSUFBSSxxREFBcUQsR0FBRztRQUMxRCxJQUFJLEVBQUUsdURBQXVEO1FBQzdELDBCQUEwQixFQUFFLDJEQUEyRDtRQUN2RixZQUFZLEVBQUUsQ0FBQywrQ0FBK0MsRUFBRSxpREFBaUQsRUFBRSw2REFBNkQsQ0FBQztRQUNqTCxTQUFTLEVBQUUsQ0FBQztnQkFDUixTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxhQUFhLEVBQUUsQ0FBQzt3QkFDWixJQUFJLEVBQUUsY0FBYzt3QkFDcEIsU0FBUyxFQUFFLENBQUM7d0JBQ1osVUFBVSxFQUFFLElBQUk7d0JBQ2hCLFFBQVEsRUFBRSxtQkFBbUI7cUJBQzlCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixhQUFhLEVBQUU7NEJBQ2IsU0FBUyxFQUFFLFlBQVk7eUJBQ3hCO3dCQUNELElBQUksRUFBRSxXQUFXO3FCQUNsQixDQUFDO2FBQ0wsRUFBRTtnQkFDRCxTQUFTLEVBQUUsb0JBQW9CO2dCQUMvQixZQUFZLEVBQUUsNERBQTREO2dCQUMxRSxhQUFhLEVBQUUsQ0FBQzt3QkFDWixJQUFJLEVBQUUsVUFBVTt3QkFDaEIsUUFBUSxFQUFFLGFBQWE7cUJBQ3hCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsUUFBUSxFQUFFLGdCQUFnQjtxQkFDM0IsRUFBRTt3QkFDRCxJQUFJLEVBQUUsZUFBZTt3QkFDckIsYUFBYSxFQUFFOzRCQUNiLFNBQVMsRUFBRSxlQUFlO3lCQUMzQjt3QkFDRCxJQUFJLEVBQUUsV0FBVztxQkFDbEIsRUFBRTt3QkFDRCxJQUFJLEVBQUUscUJBQXFCO3dCQUMzQixhQUFhLEVBQUU7NEJBQ2IsU0FBUyxFQUFFLHFCQUFxQjt5QkFDakM7d0JBQ0QsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCLENBQUM7YUFDTCxFQUFFO2dCQUNELFNBQVMsRUFBRSxrQkFBa0I7Z0JBQzdCLGFBQWEsRUFBRSxDQUFDO3dCQUNaLElBQUksRUFBRSxXQUFXO3dCQUNqQixRQUFRLEVBQUUsU0FBUztxQkFDcEIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsUUFBUSxFQUFFLHlEQUF5RDtxQkFDcEUsRUFBRTt3QkFDRCxJQUFJLEVBQUUscUJBQXFCO3FCQUM1QixFQUFFO3dCQUNELElBQUksRUFBRSxTQUFTO3dCQUNmLFFBQVEsRUFBRSx5REFBeUQ7cUJBQ3BFLENBQUM7YUFDTCxFQUFFO2dCQUNELFNBQVMsRUFBRSxZQUFZO2dCQUN2QixZQUFZLEVBQUUsNERBQTREO2dCQUMxRSxhQUFhLEVBQUUsQ0FBQzt3QkFDWixJQUFJLEVBQUUsT0FBTzt3QkFDYixRQUFRLEVBQUUsaUVBQWlFO3FCQUM1RSxFQUFFO3dCQUNELElBQUksRUFBRSxhQUFhO3dCQUNuQixRQUFRLEVBQUUscUVBQXFFO3FCQUNoRixFQUFFO3dCQUNELElBQUksRUFBRSxVQUFVO3dCQUNoQixRQUFRLEVBQUUscUVBQXFFO3FCQUNoRixDQUFDO2FBQ0wsRUFBRTtnQkFDRCxTQUFTLEVBQUUsZUFBZTtnQkFDMUIsWUFBWSxFQUFFLHlEQUF5RDtnQkFDdkUsYUFBYSxFQUFFLENBQUM7d0JBQ1osSUFBSSxFQUFFLE9BQU87d0JBQ2IsUUFBUSxFQUFFLG9FQUFvRTtxQkFDL0UsRUFBRTt3QkFDRCxJQUFJLEVBQUUsYUFBYTt3QkFDbkIsUUFBUSxFQUFFLHdFQUF3RTtxQkFDbkYsRUFBRTt3QkFDRCxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsUUFBUSxFQUFFLHdFQUF3RTtxQkFDbkYsQ0FBQzthQUNMLEVBQUU7Z0JBQ0QsU0FBUyxFQUFFLGlCQUFpQjtnQkFDNUIsWUFBWSxFQUFFLHlEQUF5RDtnQkFDdkUsYUFBYSxFQUFFLENBQUM7d0JBQ1osSUFBSSxFQUFFLE9BQU87d0JBQ2IsUUFBUSxFQUFFLHNFQUFzRTtxQkFDakYsRUFBRTt3QkFDRCxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsUUFBUSxFQUFFLG9FQUFvRTtxQkFDL0UsRUFBRTt3QkFDRCxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsUUFBUSxFQUFFLHdFQUF3RTtxQkFDbkYsQ0FBQzthQUNMLEVBQUU7Z0JBQ0QsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLFlBQVksRUFBRSxzREFBc0Q7Z0JBQ3BFLGFBQWEsRUFBRSxDQUFDO3dCQUNaLElBQUksRUFBRSxNQUFNO3FCQUNiLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLFFBQVEsRUFBRSw0RUFBNEU7cUJBQ3ZGLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLGVBQWU7cUJBQ3RCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLFFBQVEsRUFBRSx1RUFBdUU7cUJBQ2xGLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsUUFBUSxFQUFFLGNBQWM7cUJBQ3pCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsUUFBUSxFQUFFLHlEQUF5RDtxQkFDcEUsRUFBRTt3QkFDRCxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsUUFBUSxFQUFFLFFBQVE7cUJBQ25CLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLEtBQUs7cUJBQ1osRUFBRTt3QkFDRCxJQUFJLEVBQUUsY0FBYztxQkFDckIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsV0FBVzt3QkFDakIsUUFBUSxFQUFFLHlEQUF5RDtxQkFDcEUsRUFBRTt3QkFDRCxJQUFJLEVBQUUsa0JBQWtCO3dCQUN4QixRQUFRLEVBQUUsOEVBQThFO3FCQUN6RixFQUFFO3dCQUNELElBQUksRUFBRSxhQUFhO3FCQUNwQixFQUFFO3dCQUNELElBQUksRUFBRSxVQUFVO3dCQUNoQixRQUFRLEVBQUUsMEVBQTBFO3FCQUNyRixFQUFFO3dCQUNELElBQUksRUFBRSxlQUFlO3FCQUN0QixFQUFFO3dCQUNELElBQUksRUFBRSxVQUFVO3dCQUNoQixRQUFRLEVBQUUsU0FBUztxQkFDcEIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsUUFBUSxFQUFFLFNBQVM7cUJBQ3BCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLE9BQU87d0JBQ2IsV0FBVyxFQUFFLE9BQU87cUJBQ3JCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLFFBQVEsRUFBRSxTQUFTO3FCQUNwQixFQUFFO3dCQUNELElBQUksRUFBRSxZQUFZO3FCQUNuQixFQUFFO3dCQUNELElBQUksRUFBRSxjQUFjO3dCQUNwQixRQUFRLEVBQUUsU0FBUztxQkFDcEIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsV0FBVzt3QkFDakIsUUFBUSxFQUFFLFNBQVM7cUJBQ3BCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLE9BQU87d0JBQ2IsUUFBUSxFQUFFLHlEQUF5RDtxQkFDcEUsRUFBRTt3QkFDRCxJQUFJLEVBQUUsU0FBUztxQkFDaEIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsdUJBQXVCO3dCQUM3QixRQUFRLEVBQUUseURBQXlEO3FCQUNwRSxFQUFFO3dCQUNELElBQUksRUFBRSxpQkFBaUI7cUJBQ3hCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLHFCQUFxQjtxQkFDNUIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsa0JBQWtCO3dCQUN4QixRQUFRLEVBQUUsVUFBVTtxQkFDckIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsYUFBYTt3QkFDbkIsUUFBUSxFQUFFLFVBQVU7cUJBQ3JCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLGtCQUFrQjt3QkFDeEIsUUFBUSxFQUFFLHVCQUF1QjtxQkFDbEMsRUFBRTt3QkFDRCxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsYUFBYSxFQUFFOzRCQUNiLFNBQVMsRUFBRSxZQUFZO3lCQUN4Qjt3QkFDRCxJQUFJLEVBQUUsV0FBVztxQkFDbEIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsYUFBYSxFQUFFOzRCQUNiLFNBQVMsRUFBRSxZQUFZO3lCQUN4Qjt3QkFDRCxJQUFJLEVBQUUsV0FBVztxQkFDbEIsQ0FBQzthQUNMLEVBQUU7Z0JBQ0QsU0FBUyxFQUFFLFFBQVE7Z0JBQ25CLFlBQVksRUFBRSxzREFBc0Q7Z0JBQ3BFLGFBQWEsRUFBRSxDQUFDO3dCQUNaLElBQUksRUFBRSxNQUFNO3FCQUNiLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLFFBQVEsRUFBRSx5REFBeUQ7cUJBQ3BFLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLGFBQWE7cUJBQ3BCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLFFBQVEsRUFBRSxTQUFTO3FCQUNwQixFQUFFO3dCQUNELElBQUksRUFBRSxXQUFXO3dCQUNqQixRQUFRLEVBQUUsU0FBUztxQkFDcEIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsUUFBUSxFQUFFLFNBQVM7cUJBQ3BCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLGNBQWM7d0JBQ3BCLFFBQVEsRUFBRSxTQUFTO3FCQUNwQixFQUFFO3dCQUNELElBQUksRUFBRSxVQUFVO3dCQUNoQixRQUFRLEVBQUUsU0FBUztxQkFDcEIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsT0FBTzt3QkFDYixRQUFRLEVBQUUseURBQXlEO3FCQUNwRSxFQUFFO3dCQUNELElBQUksRUFBRSxRQUFRO3dCQUNkLFFBQVEsRUFBRSx5REFBeUQ7cUJBQ3BFLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLFFBQVEsRUFBRSw4RUFBOEU7cUJBQ3pGLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLE9BQU87d0JBQ2IsV0FBVyxFQUFFLE9BQU87d0JBQ3BCLFFBQVEsRUFBRSx5REFBeUQ7cUJBQ3BFLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLFFBQVEsRUFBRSx5REFBeUQ7cUJBQ3BFLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLFFBQVEsRUFBRSx5REFBeUQ7cUJBQ3BFLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLGFBQWEsRUFBRTs0QkFDYixTQUFTLEVBQUUsWUFBWTt5QkFDeEI7d0JBQ0QsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLGFBQWEsRUFBRTs0QkFDYixTQUFTLEVBQUUsWUFBWTt5QkFDeEI7d0JBQ0QsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCLENBQUM7YUFDTCxFQUFFO2dCQUNELFNBQVMsRUFBRSxjQUFjO2dCQUN6QixZQUFZLEVBQUUsNERBQTREO2dCQUMxRSxhQUFhLEVBQUUsQ0FBQzt3QkFDWixJQUFJLEVBQUUsT0FBTzt3QkFDYixRQUFRLEVBQUUsbUVBQW1FO3FCQUM5RSxFQUFFO3dCQUNELElBQUksRUFBRSxVQUFVO3dCQUNoQixRQUFRLEVBQUUsaUVBQWlFO3FCQUM1RSxFQUFFO3dCQUNELElBQUksRUFBRSxVQUFVO3dCQUNoQixRQUFRLEVBQUUscUVBQXFFO3FCQUNoRixDQUFDO2FBQ0wsRUFBRTtnQkFDRCxTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxZQUFZLEVBQUUsNERBQTREO2dCQUMxRSxhQUFhLEVBQUUsQ0FBQzt3QkFDWixJQUFJLEVBQUUsVUFBVTt3QkFDaEIsUUFBUSxFQUFFLGVBQWU7cUJBQzFCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsUUFBUSxFQUFFLGtCQUFrQjtxQkFDN0IsRUFBRTt3QkFDRCxJQUFJLEVBQUUsZUFBZTt3QkFDckIsYUFBYSxFQUFFOzRCQUNiLFNBQVMsRUFBRSxlQUFlO3lCQUMzQjt3QkFDRCxJQUFJLEVBQUUsV0FBVztxQkFDbEIsRUFBRTt3QkFDRCxJQUFJLEVBQUUscUJBQXFCO3dCQUMzQixhQUFhLEVBQUU7NEJBQ2IsU0FBUyxFQUFFLHFCQUFxQjt5QkFDakM7d0JBQ0QsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCLENBQUM7YUFDTCxDQUFDO1FBQ0osWUFBWSxFQUFFLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSxZQUFZO2FBQzFCLEVBQUU7Z0JBQ0QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSxjQUFjO2FBQzVCLENBQUM7S0FDTCxDQUFDO0lBQ0YsT0FBTztRQUNMLHFEQUFxRCxFQUFFLHFEQUFxRDtLQUM3RyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUM5QyxNQUFNLENBQUMsRUFBRSxFQUFFLG9FQUFvRSxDQUFDLENBQUM7Q0FDbEY7S0FDSTtJQUNILElBQUksNERBQTRELEdBQUcsb0VBQW9FLEVBQUUsQ0FBQztJQUMxSSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ25ELE1BQU0sQ0FBQyxPQUFPLENBQUMscURBQXFELEdBQUcsNERBQTRELENBQUMscURBQXFELENBQUM7S0FDM0w7U0FDSTtRQUNILElBQUkscURBQXFELEdBQUcsNERBQTRELENBQUMscURBQXFELENBQUM7S0FDaEw7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbInZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfZG9jdW1lbnRzX2ZpbGVjYWJpbmV0XzIwMTlfMl9Nb2R1bGVfRmFjdG9yeSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19kb2N1bWVudHNfZmlsZWNhYmluZXRfMjAxOV8yID0ge1xuICAgIG5hbWU6ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfZG9jdW1lbnRzX2ZpbGVjYWJpbmV0XzIwMTlfMicsXG4gICAgZGVmYXVsdEVsZW1lbnROYW1lc3BhY2VVUkk6ICd1cm46ZmlsZWNhYmluZXRfMjAxOV8yLmRvY3VtZW50cy53ZWJzZXJ2aWNlcy5uZXRzdWl0ZS5jb20nLFxuICAgIGRlcGVuZGVuY2llczogWydjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzInLCAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzInLCAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2RvY3VtZW50c19maWxlY2FiaW5ldF8yMDE5XzJfdHlwZXMnXSxcbiAgICB0eXBlSW5mb3M6IFt7XG4gICAgICAgIGxvY2FsTmFtZTogJ0ZpbGVTaXRlQ2F0ZWdvcnlMaXN0JyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdzaXRlQ2F0ZWdvcnknLFxuICAgICAgICAgICAgbWluT2NjdXJzOiAwLFxuICAgICAgICAgICAgY29sbGVjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnLkZpbGVTaXRlQ2F0ZWdvcnknXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3JlcGxhY2VBbGwnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdCb29sZWFuJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICAgICAgICAgICAgbG9jYWxQYXJ0OiAncmVwbGFjZUFsbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlJ1xuICAgICAgICAgIH1dXG4gICAgICB9LCB7XG4gICAgICAgIGxvY2FsTmFtZTogJ0ZpbGVTZWFyY2hBZHZhbmNlZCcsXG4gICAgICAgIGJhc2VUeXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5TZWFyY2hSZWNvcmQnLFxuICAgICAgICBwcm9wZXJ0eUluZm9zOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2NyaXRlcmlhJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnLkZpbGVTZWFyY2gnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NvbHVtbnMnLFxuICAgICAgICAgICAgdHlwZUluZm86ICcuRmlsZVNlYXJjaFJvdydcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnc2F2ZWRTZWFyY2hJZCcsXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiB7XG4gICAgICAgICAgICAgIGxvY2FsUGFydDogJ3NhdmVkU2VhcmNoSWQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogJ2F0dHJpYnV0ZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnc2F2ZWRTZWFyY2hTY3JpcHRJZCcsXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiB7XG4gICAgICAgICAgICAgIGxvY2FsUGFydDogJ3NhdmVkU2VhcmNoU2NyaXB0SWQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogJ2F0dHJpYnV0ZSdcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdGaWxlU2l0ZUNhdGVnb3J5JyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdpc0RlZmF1bHQnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdCb29sZWFuJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmRSZWYnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3J5RGVzY3JpcHRpb24nXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3dlYnNpdGUnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuUmVjb3JkUmVmJ1xuICAgICAgICAgIH1dXG4gICAgICB9LCB7XG4gICAgICAgIGxvY2FsTmFtZTogJ0ZpbGVTZWFyY2gnLFxuICAgICAgICBiYXNlVHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuU2VhcmNoUmVjb3JkJyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdiYXNpYycsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLkZpbGVTZWFyY2hCYXNpYydcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnc2hvcHBlckpvaW4nLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29tbW9uXzIwMTlfMi5DdXN0b21lclNlYXJjaEJhc2ljJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd1c2VySm9pbicsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLkVtcGxveWVlU2VhcmNoQmFzaWMnXG4gICAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgbG9jYWxOYW1lOiAnRmlsZVNlYXJjaFJvdycsXG4gICAgICAgIGJhc2VUeXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5TZWFyY2hSb3cnLFxuICAgICAgICBwcm9wZXJ0eUluZm9zOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2Jhc2ljJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuRmlsZVNlYXJjaFJvd0Jhc2ljJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzaG9wcGVySm9pbicsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLkN1c3RvbWVyU2VhcmNoUm93QmFzaWMnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3VzZXJKb2luJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuRW1wbG95ZWVTZWFyY2hSb3dCYXNpYydcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdGb2xkZXJTZWFyY2hSb3cnLFxuICAgICAgICBiYXNlVHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuU2VhcmNoUm93JyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdiYXNpYycsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLkZvbGRlclNlYXJjaFJvd0Jhc2ljJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWxlSm9pbicsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLkZpbGVTZWFyY2hSb3dCYXNpYydcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndXNlckpvaW4nLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29tbW9uXzIwMTlfMi5FbXBsb3llZVNlYXJjaFJvd0Jhc2ljJ1xuICAgICAgICAgIH1dXG4gICAgICB9LCB7XG4gICAgICAgIGxvY2FsTmFtZTogJ0ZpbGUnLFxuICAgICAgICBiYXNlVHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuUmVjb3JkJyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICduYW1lJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdhdHRhY2hGcm9tJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2RvY3VtZW50c19maWxlY2FiaW5ldF8yMDE5XzJfdHlwZXMuRmlsZUF0dGFjaEZyb20nXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ21lZGlhVHlwZU5hbWUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2ZpbGVUeXBlJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2RvY3VtZW50c19maWxlY2FiaW5ldF8yMDE5XzJfdHlwZXMuTWVkaWFUeXBlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjb250ZW50JyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnQmFzZTY0QmluYXJ5J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdmb2xkZXInLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuUmVjb3JkUmVmJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaWxlU2l6ZScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0RvdWJsZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndXJsJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd1cmxDb21wb25lbnQnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ21lZGlhRmlsZScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmRSZWYnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3RleHRGaWxlRW5jb2RpbmcnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfZG9jdW1lbnRzX2ZpbGVjYWJpbmV0XzIwMTlfMl90eXBlcy5UZXh0RmlsZUVuY29kaW5nJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkZXNjcmlwdGlvbidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZW5jb2RpbmcnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfZG9jdW1lbnRzX2ZpbGVjYWJpbmV0XzIwMTlfMl90eXBlcy5GaWxlRW5jb2RpbmcnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2FsdFRhZ0NhcHRpb24nXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2lzT25saW5lJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnQm9vbGVhbidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaXNJbmFjdGl2ZScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0Jvb2xlYW4nXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NsYXp6JyxcbiAgICAgICAgICAgIGVsZW1lbnROYW1lOiAnY2xhc3MnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2J1bmRsZWFibGUnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdCb29sZWFuJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkZXBhcnRtZW50J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdoaWRlSW5CdW5kbGUnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdCb29sZWFuJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpc1ByaXZhdGUnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdCb29sZWFuJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdvd25lcicsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmRSZWYnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NhcHRpb24nXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3N0b3JlRGlzcGxheVRodW1ibmFpbCcsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmRSZWYnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3NpdGVEZXNjcmlwdGlvbidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZmVhdHVyZWREZXNjcmlwdGlvbidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbGFzdE1vZGlmaWVkRGF0ZScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0RhdGVUaW1lJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjcmVhdGVkRGF0ZScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0RhdGVUaW1lJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzaXRlQ2F0ZWdvcnlMaXN0JyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnLkZpbGVTaXRlQ2F0ZWdvcnlMaXN0J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpbnRlcm5hbElkJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICAgICAgICAgICAgbG9jYWxQYXJ0OiAnaW50ZXJuYWxJZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdleHRlcm5hbElkJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICAgICAgICAgICAgbG9jYWxQYXJ0OiAnZXh0ZXJuYWxJZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlJ1xuICAgICAgICAgIH1dXG4gICAgICB9LCB7XG4gICAgICAgIGxvY2FsTmFtZTogJ0ZvbGRlcicsXG4gICAgICAgIGJhc2VUeXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmQnLFxuICAgICAgICBwcm9wZXJ0eUluZm9zOiBbe1xuICAgICAgICAgICAgbmFtZTogJ25hbWUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RlcGFydG1lbnQnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuUmVjb3JkUmVmJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkZXNjcmlwdGlvbidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaXNJbmFjdGl2ZScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0Jvb2xlYW4nXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2lzUHJpdmF0ZScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0Jvb2xlYW4nXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2J1bmRsZWFibGUnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdCb29sZWFuJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdoaWRlSW5CdW5kbGUnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdCb29sZWFuJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpc09ubGluZScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0Jvb2xlYW4nXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2dyb3VwJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yLlJlY29yZFJlZidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncGFyZW50JyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yLlJlY29yZFJlZidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZm9sZGVyVHlwZScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19kb2N1bWVudHNfZmlsZWNhYmluZXRfMjAxOV8yX3R5cGVzLkZvbGRlckZvbGRlclR5cGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NsYXp6JyxcbiAgICAgICAgICAgIGVsZW1lbnROYW1lOiAnY2xhc3MnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuUmVjb3JkUmVmJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdsb2NhdGlvbicsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmRSZWYnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3N1YnNpZGlhcnknLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuUmVjb3JkUmVmJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpbnRlcm5hbElkJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICAgICAgICAgICAgbG9jYWxQYXJ0OiAnaW50ZXJuYWxJZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdleHRlcm5hbElkJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICAgICAgICAgICAgbG9jYWxQYXJ0OiAnZXh0ZXJuYWxJZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlJ1xuICAgICAgICAgIH1dXG4gICAgICB9LCB7XG4gICAgICAgIGxvY2FsTmFtZTogJ0ZvbGRlclNlYXJjaCcsXG4gICAgICAgIGJhc2VUeXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5TZWFyY2hSZWNvcmQnLFxuICAgICAgICBwcm9wZXJ0eUluZm9zOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2Jhc2ljJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuRm9sZGVyU2VhcmNoQmFzaWMnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2ZpbGVKb2luJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuRmlsZVNlYXJjaEJhc2ljJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd1c2VySm9pbicsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLkVtcGxveWVlU2VhcmNoQmFzaWMnXG4gICAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgbG9jYWxOYW1lOiAnRm9sZGVyU2VhcmNoQWR2YW5jZWQnLFxuICAgICAgICBiYXNlVHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuU2VhcmNoUmVjb3JkJyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdjcml0ZXJpYScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJy5Gb2xkZXJTZWFyY2gnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NvbHVtbnMnLFxuICAgICAgICAgICAgdHlwZUluZm86ICcuRm9sZGVyU2VhcmNoUm93J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzYXZlZFNlYXJjaElkJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICAgICAgICAgICAgbG9jYWxQYXJ0OiAnc2F2ZWRTZWFyY2hJZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzYXZlZFNlYXJjaFNjcmlwdElkJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICAgICAgICAgICAgbG9jYWxQYXJ0OiAnc2F2ZWRTZWFyY2hTY3JpcHRJZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlJ1xuICAgICAgICAgIH1dXG4gICAgICB9XSxcbiAgICBlbGVtZW50SW5mb3M6IFt7XG4gICAgICAgIHR5cGVJbmZvOiAnLkZpbGVTZWFyY2gnLFxuICAgICAgICBlbGVtZW50TmFtZTogJ2ZpbGVTZWFyY2gnXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGVJbmZvOiAnLkZvbGRlclNlYXJjaCcsXG4gICAgICAgIGVsZW1lbnROYW1lOiAnZm9sZGVyU2VhcmNoJ1xuICAgICAgfV1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfZG9jdW1lbnRzX2ZpbGVjYWJpbmV0XzIwMTlfMjogY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2RvY3VtZW50c19maWxlY2FiaW5ldF8yMDE5XzJcbiAgfTtcbn07XG5pZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShbXSwgY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2RvY3VtZW50c19maWxlY2FiaW5ldF8yMDE5XzJfTW9kdWxlX0ZhY3RvcnkpO1xufVxuZWxzZSB7XG4gIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfZG9jdW1lbnRzX2ZpbGVjYWJpbmV0XzIwMTlfMl9Nb2R1bGUgPSBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfZG9jdW1lbnRzX2ZpbGVjYWJpbmV0XzIwMTlfMl9Nb2R1bGVfRmFjdG9yeSgpO1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cy5jb21fbmV0c3VpdGVfd2Vic2VydmljZXNfZG9jdW1lbnRzX2ZpbGVjYWJpbmV0XzIwMTlfMiA9IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19kb2N1bWVudHNfZmlsZWNhYmluZXRfMjAxOV8yX01vZHVsZS5jb21fbmV0c3VpdGVfd2Vic2VydmljZXNfZG9jdW1lbnRzX2ZpbGVjYWJpbmV0XzIwMTlfMjtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2RvY3VtZW50c19maWxlY2FiaW5ldF8yMDE5XzIgPSBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfZG9jdW1lbnRzX2ZpbGVjYWJpbmV0XzIwMTlfMl9Nb2R1bGUuY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2RvY3VtZW50c19maWxlY2FiaW5ldF8yMDE5XzI7XG4gIH1cbn0iXX0=