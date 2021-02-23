"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2xpc3RzX3dlYnNpdGVfMjAxOV8yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25ldHN1aXRlX3dlYnNlcnZpY2VzLzIwMTlfMi9fX21hcHBpbmdzL2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19saXN0c193ZWJzaXRlXzIwMTlfMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSw0REFBNEQsR0FBRztJQUNqRSxJQUFJLDZDQUE2QyxHQUFHO1FBQ2xELElBQUksRUFBRSwrQ0FBK0M7UUFDckQsMEJBQTBCLEVBQUUsbURBQW1EO1FBQy9FLFlBQVksRUFBRSxDQUFDLCtDQUErQyxFQUFFLGlEQUFpRCxFQUFFLHVEQUF1RCxDQUFDO1FBQzNLLFNBQVMsRUFBRSxDQUFDO2dCQUNSLFNBQVMsRUFBRSx5QkFBeUI7Z0JBQ3BDLGFBQWEsRUFBRSxDQUFDO3dCQUNaLElBQUksRUFBRSxRQUFRO3dCQUNkLFFBQVEsRUFBRSxnRUFBZ0U7cUJBQzNFLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFVBQVU7cUJBQ2pCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLGFBQWE7cUJBQ3BCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLGFBQWE7cUJBQ3BCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLDBCQUEwQjtxQkFDakMsRUFBRTt3QkFDRCxJQUFJLEVBQUUsV0FBVztxQkFDbEIsQ0FBQzthQUNMLEVBQUU7Z0JBQ0QsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLFlBQVksRUFBRSxzREFBc0Q7Z0JBQ3BFLGFBQWEsRUFBRSxDQUFDO3dCQUNaLElBQUksRUFBRSxTQUFTO3dCQUNmLFFBQVEsRUFBRSx5REFBeUQ7cUJBQ3BFLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFFBQVE7cUJBQ2YsRUFBRTt3QkFDRCxJQUFJLEVBQUUsZ0JBQWdCO3dCQUN0QixRQUFRLEVBQUUseURBQXlEO3FCQUNwRSxFQUFFO3dCQUNELElB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cUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsb0JBQW9CO2FBQ2xDLEVBQUU7Z0JBQ0QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSxjQUFjO2FBQzVCLENBQUM7S0FDTCxDQUFDO0lBQ0YsT0FBTztRQUNMLDZDQUE2QyxFQUFFLDZDQUE2QztLQUM3RixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUM5QyxNQUFNLENBQUMsRUFBRSxFQUFFLDREQUE0RCxDQUFDLENBQUM7Q0FDMUU7S0FDSTtJQUNILElBQUksb0RBQW9ELEdBQUcsNERBQTRELEVBQUUsQ0FBQztJQUMxSCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ25ELE1BQU0sQ0FBQyxPQUFPLENBQUMsNkNBQTZDLEdBQUcsb0RBQW9ELENBQUMsNkNBQTZDLENBQUM7S0FDbks7U0FDSTtRQUNILElBQUksNkNBQTZDLEdBQUcsb0RBQW9ELENBQUMsNkNBQTZDLENBQUM7S0FDeEo7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbInZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfd2Vic2l0ZV8yMDE5XzJfTW9kdWxlX0ZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfd2Vic2l0ZV8yMDE5XzIgPSB7XG4gICAgbmFtZTogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19saXN0c193ZWJzaXRlXzIwMTlfMicsXG4gICAgZGVmYXVsdEVsZW1lbnROYW1lc3BhY2VVUkk6ICd1cm46d2Vic2l0ZV8yMDE5XzIubGlzdHMud2Vic2VydmljZXMubmV0c3VpdGUuY29tJyxcbiAgICBkZXBlbmRlbmNpZXM6IFsnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yJywgJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yJywgJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yX3R5cGVzJ10sXG4gICAgdHlwZUluZm9zOiBbe1xuICAgICAgICBsb2NhbE5hbWU6ICdTaXRlQ2F0ZWdvcnlUcmFuc2xhdGlvbicsXG4gICAgICAgIHByb3BlcnR5SW5mb3M6IFt7XG4gICAgICAgICAgICBuYW1lOiAnbG9jYWxlJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzJfdHlwZXMuTGFuZ3VhZ2UnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2xhbmd1YWdlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkaXNwbGF5TmFtZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGVzY3JpcHRpb24nXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3N0b3JlRGV0YWlsZWREZXNjcmlwdGlvbidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncGFnZVRpdGxlJ1xuICAgICAgICAgIH1dXG4gICAgICB9LCB7XG4gICAgICAgIGxvY2FsTmFtZTogJ1NpdGVDYXRlZ29yeScsXG4gICAgICAgIGJhc2VUeXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmQnLFxuICAgICAgICBwcm9wZXJ0eUluZm9zOiBbe1xuICAgICAgICAgICAgbmFtZTogJ3dlYnNpdGUnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuUmVjb3JkUmVmJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpdGVtSWQnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BhcmVudENhdGVnb3J5JyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yLlJlY29yZFJlZidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlMaXN0TGF5b3V0JyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yLlJlY29yZFJlZidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaXRlbUxpc3RMYXlvdXQnLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuUmVjb3JkUmVmJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZWxhdGVkSXRlbXNMaXN0TGF5b3V0JyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yLlJlY29yZFJlZidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY29ycmVsYXRlZEl0ZW1zTGlzdExheW91dCcsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmRSZWYnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2lzT25saW5lJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnQm9vbGVhbidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaXNJbmFjdGl2ZScsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0Jvb2xlYW4nXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzdG9yZURldGFpbGVkRGVzY3JpcHRpb24nXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3N0b3JlRGlzcGxheVRodW1ibmFpbCcsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb3JlXzIwMTlfMi5SZWNvcmRSZWYnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3N0b3JlRGlzcGxheUltYWdlJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yLlJlY29yZFJlZidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncGFnZVRpdGxlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdtZXRhVGFnSHRtbCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZXhjbHVkZUZyb21TaXRlbWFwJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnQm9vbGVhbidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndXJsQ29tcG9uZW50J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzaXRlbWFwUHJpb3JpdHknLFxuICAgICAgICAgICAgdmFsdWVzOiBbJ18wMCcsICdfMDEnLCAnXzAyJywgJ18wMycsICdfMDQnLCAnXzA1JywgJ18wNicsICdfMDcnLCAnXzA4JywgJ18wOScsICdfMTAnLCAnX2F1dG8nXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hLZXl3b3JkcydcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncHJlc2VudGF0aW9uSXRlbUxpc3QnLFxuICAgICAgICAgICAgdHlwZUluZm86ICcuU2l0ZUNhdGVnb3J5UHJlc2VudGF0aW9uSXRlbUxpc3QnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3RyYW5zbGF0aW9uc0xpc3QnLFxuICAgICAgICAgICAgdHlwZUluZm86ICcuU2l0ZUNhdGVnb3J5VHJhbnNsYXRpb25MaXN0J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpbnRlcm5hbElkJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICAgICAgICAgICAgbG9jYWxQYXJ0OiAnaW50ZXJuYWxJZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdleHRlcm5hbElkJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICAgICAgICAgICAgbG9jYWxQYXJ0OiAnZXh0ZXJuYWxJZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlJ1xuICAgICAgICAgIH1dXG4gICAgICB9LCB7XG4gICAgICAgIGxvY2FsTmFtZTogJ1NpdGVDYXRlZ29yeVNlYXJjaEFkdmFuY2VkJyxcbiAgICAgICAgYmFzZVR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvcmVfMjAxOV8yLlNlYXJjaFJlY29yZCcsXG4gICAgICAgIHByb3BlcnR5SW5mb3M6IFt7XG4gICAgICAgICAgICBuYW1lOiAnY3JpdGVyaWEnLFxuICAgICAgICAgICAgdHlwZUluZm86ICcuU2l0ZUNhdGVnb3J5U2VhcmNoJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjb2x1bW5zJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnLlNpdGVDYXRlZ29yeVNlYXJjaFJvdydcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnc2F2ZWRTZWFyY2hJZCcsXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiB7XG4gICAgICAgICAgICAgIGxvY2FsUGFydDogJ3NhdmVkU2VhcmNoSWQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogJ2F0dHJpYnV0ZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnc2F2ZWRTZWFyY2hTY3JpcHRJZCcsXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiB7XG4gICAgICAgICAgICAgIGxvY2FsUGFydDogJ3NhdmVkU2VhcmNoU2NyaXB0SWQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogJ2F0dHJpYnV0ZSdcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdTaXRlQ2F0ZWdvcnlTZWFyY2gnLFxuICAgICAgICBiYXNlVHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuU2VhcmNoUmVjb3JkJyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdiYXNpYycsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLlNpdGVDYXRlZ29yeVNlYXJjaEJhc2ljJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzaG9wcGVySm9pbicsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLkN1c3RvbWVyU2VhcmNoQmFzaWMnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3VzZXJKb2luJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuRW1wbG95ZWVTZWFyY2hCYXNpYydcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdTaXRlQ2F0ZWdvcnlTZWFyY2hSb3cnLFxuICAgICAgICBiYXNlVHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29yZV8yMDE5XzIuU2VhcmNoUm93JyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdiYXNpYycsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLlNpdGVDYXRlZ29yeVNlYXJjaFJvd0Jhc2ljJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzaG9wcGVySm9pbicsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ2NvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9jb21tb25fMjAxOV8yLkN1c3RvbWVyU2VhcmNoUm93QmFzaWMnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3VzZXJKb2luJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2NvbW1vbl8yMDE5XzIuRW1wbG95ZWVTZWFyY2hSb3dCYXNpYydcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdTaXRlQ2F0ZWdvcnlQcmVzZW50YXRpb25JdGVtTGlzdCcsXG4gICAgICAgIHByb3BlcnR5SW5mb3M6IFt7XG4gICAgICAgICAgICBuYW1lOiAncHJlc2VudGF0aW9uSXRlbScsXG4gICAgICAgICAgICBtaW5PY2N1cnM6IDAsXG4gICAgICAgICAgICBjb2xsZWN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fY29tbW9uXzIwMTlfMi5QcmVzZW50YXRpb25JdGVtJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZXBsYWNlQWxsJyxcbiAgICAgICAgICAgIHR5cGVJbmZvOiAnQm9vbGVhbicsXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiB7XG4gICAgICAgICAgICAgIGxvY2FsUGFydDogJ3JlcGxhY2VBbGwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogJ2F0dHJpYnV0ZSdcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdTaXRlQ2F0ZWdvcnlUcmFuc2xhdGlvbkxpc3QnLFxuICAgICAgICBwcm9wZXJ0eUluZm9zOiBbe1xuICAgICAgICAgICAgbmFtZTogJ3RyYW5zbGF0aW9uJyxcbiAgICAgICAgICAgIG1pbk9jY3VyczogMCxcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHRydWUsXG4gICAgICAgICAgICB0eXBlSW5mbzogJy5TaXRlQ2F0ZWdvcnlUcmFuc2xhdGlvbidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncmVwbGFjZUFsbCcsXG4gICAgICAgICAgICB0eXBlSW5mbzogJ0Jvb2xlYW4nLFxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZToge1xuICAgICAgICAgICAgICBsb2NhbFBhcnQ6ICdyZXBsYWNlQWxsJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6ICdhdHRyaWJ1dGUnXG4gICAgICAgICAgfV1cbiAgICAgIH1dLFxuICAgIGVsZW1lbnRJbmZvczogW3tcbiAgICAgICAgdHlwZUluZm86ICcuU2l0ZUNhdGVnb3J5U2VhcmNoJyxcbiAgICAgICAgZWxlbWVudE5hbWU6ICdzaXRlQ2F0ZWdvcnlTZWFyY2gnXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGVJbmZvOiAnLlNpdGVDYXRlZ29yeScsXG4gICAgICAgIGVsZW1lbnROYW1lOiAnU2l0ZUNhdGVnb3J5J1xuICAgICAgfV1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfd2Vic2l0ZV8yMDE5XzI6IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19saXN0c193ZWJzaXRlXzIwMTlfMlxuICB9O1xufTtcbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKFtdLCBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfd2Vic2l0ZV8yMDE5XzJfTW9kdWxlX0ZhY3RvcnkpO1xufVxuZWxzZSB7XG4gIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfd2Vic2l0ZV8yMDE5XzJfTW9kdWxlID0gY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2xpc3RzX3dlYnNpdGVfMjAxOV8yX01vZHVsZV9GYWN0b3J5KCk7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzLmNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19saXN0c193ZWJzaXRlXzIwMTlfMiA9IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19saXN0c193ZWJzaXRlXzIwMTlfMl9Nb2R1bGUuY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX2xpc3RzX3dlYnNpdGVfMjAxOV8yO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfd2Vic2l0ZV8yMDE5XzIgPSBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfbGlzdHNfd2Vic2l0ZV8yMDE5XzJfTW9kdWxlLmNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19saXN0c193ZWJzaXRlXzIwMTlfMjtcbiAgfVxufSJdfQ==