"use strict";
var com_netsuite_webservices_platform_faults_2019_2_Module_Factory = function () {
    var com_netsuite_webservices_platform_faults_2019_2 = {
        name: 'com_netsuite_webservices_platform_faults_2019_2',
        defaultElementNamespaceURI: 'urn:faults_2019_2.platform.webservices.netsuite.com',
        dependencies: ['com_netsuite_webservices_platform_faults_2019_2_types'],
        typeInfos: [{
                localName: 'ExceededRecordCountFault',
                baseTypeInfo: '.SoapFault'
            }, {
                localName: 'InvalidVersionFault',
                baseTypeInfo: '.SoapFault'
            }, {
                localName: 'ExceededConcurrentRequestLimitFault',
                baseTypeInfo: '.SoapFault'
            }, {
                localName: 'InvalidSessionFault',
                baseTypeInfo: '.SoapFault'
            }, {
                localName: 'InvalidAccountFault',
                baseTypeInfo: '.SoapFault'
            }, {
                localName: 'AsyncFault',
                baseTypeInfo: '.SoapFault'
            }, {
                localName: 'InvalidCredentialsFault',
                baseTypeInfo: '.SoapFault'
            }, {
                localName: 'InsufficientPermissionFault',
                baseTypeInfo: '.SoapFault'
            }, {
                localName: 'ExceededRequestSizeFault',
                baseTypeInfo: '.SoapFault'
            }, {
                localName: 'SoapFault',
                propertyInfos: [{
                        name: 'code',
                        required: true,
                        typeInfo: 'com_netsuite_webservices_platform_faults_2019_2_types.FaultCodeType'
                    }, {
                        name: 'message',
                        required: true
                    }]
            }, {
                localName: 'ExceededUsageLimitFault',
                baseTypeInfo: '.SoapFault'
            }, {
                localName: 'ExceededRequestLimitFault',
                baseTypeInfo: '.SoapFault'
            }, {
                localName: 'UnexpectedErrorFault',
                baseTypeInfo: '.SoapFault'
            }],
        elementInfos: [{
                typeInfo: '.ExceededRequestLimitFault',
                elementName: 'exceededRequestLimitFault'
            }, {
                typeInfo: '.ExceededRecordCountFault',
                elementName: 'exceededRecordCountFault'
            }, {
                typeInfo: '.ExceededUsageLimitFault',
                elementName: 'exceededUsageLimitFault'
            }, {
                typeInfo: '.InsufficientPermissionFault',
                elementName: 'insufficientPermissionFault'
            }, {
                typeInfo: '.ExceededConcurrentRequestLimitFault',
                elementName: 'exceededConcurrentRequestLimitFault'
            }, {
                typeInfo: '.AsyncFault',
                elementName: 'asyncFault'
            }, {
                typeInfo: '.UnexpectedErrorFault',
                elementName: 'unexpectedErrorFault'
            }, {
                typeInfo: '.ExceededRequestSizeFault',
                elementName: 'exceededRequestSizeFault'
            }, {
                typeInfo: '.InvalidVersionFault',
                elementName: 'invalidVersionFault'
            }, {
                typeInfo: '.InvalidSessionFault',
                elementName: 'invalidSessionFault'
            }, {
                typeInfo: '.InvalidAccountFault',
                elementName: 'invalidAccountFault'
            }, {
                typeInfo: '.InvalidCredentialsFault',
                elementName: 'invalidCredentialsFault'
            }]
    };
    return {
        com_netsuite_webservices_platform_faults_2019_2: com_netsuite_webservices_platform_faults_2019_2
    };
};
if (typeof define === 'function' && define.amd) {
    define([], com_netsuite_webservices_platform_faults_2019_2_Module_Factory);
}
else {
    var com_netsuite_webservices_platform_faults_2019_2_Module = com_netsuite_webservices_platform_faults_2019_2_Module_Factory();
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.com_netsuite_webservices_platform_faults_2019_2 = com_netsuite_webservices_platform_faults_2019_2_Module.com_netsuite_webservices_platform_faults_2019_2;
    }
    else {
        var com_netsuite_webservices_platform_faults_2019_2 = com_netsuite_webservices_platform_faults_2019_2_Module.com_netsuite_webservices_platform_faults_2019_2;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2ZhdWx0c18yMDE5XzIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbmV0c3VpdGVfd2Vic2VydmljZXMvMjAxOV8yL19fbWFwcGluZ3MvY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2ZhdWx0c18yMDE5XzIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksOERBQThELEdBQUc7SUFDbkUsSUFBSSwrQ0FBK0MsR0FBRztRQUNwRCxJQUFJLEVBQUUsaURBQWlEO1FBQ3ZELDBCQUEwQixFQUFFLHFEQUFxRDtRQUNqRixZQUFZLEVBQUUsQ0FBQyx1REFBdUQsQ0FBQztRQUN2RSxTQUFTLEVBQUUsQ0FBQztnQkFDUixTQUFTLEVBQUUsMEJBQTBCO2dCQUNyQyxZQUFZLEVBQUUsWUFBWTthQUMzQixFQUFFO2dCQUNELFNBQVMsRUFBRSxxQkFBcUI7Z0JBQ2hDLFlBQVksRUFBRSxZQUFZO2FBQzNCLEVBQUU7Z0JBQ0QsU0FBUyxFQUFFLHFDQUFxQztnQkFDaEQsWUFBWSxFQUFFLFlBQVk7YUFDM0IsRUFBRTtnQkFDRCxTQUFTLEVBQUUscUJBQXFCO2dCQUNoQyxZQUFZLEVBQUUsWUFBWTthQUMzQixFQUFFO2dCQUNELFNBQVMsRUFBRSxxQkFBcUI7Z0JBQ2hDLFlBQVksRUFBRSxZQUFZO2FBQzNCLEVBQUU7Z0JBQ0QsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLFlBQVksRUFBRSxZQUFZO2FBQzNCLEVBQUU7Z0JBQ0QsU0FBUyxFQUFFLHlCQUF5QjtnQkFDcEMsWUFBWSxFQUFFLFlBQVk7YUFDM0IsRUFBRTtnQkFDRCxTQUFTLEVBQUUsNkJBQTZCO2dCQUN4QyxZQUFZLEVBQUUsWUFBWTthQUMzQixFQUFFO2dCQUNELFNBQVMsRUFBRSwwQkFBMEI7Z0JBQ3JDLFlBQVksRUFBRSxZQUFZO2FBQzNCLEVBQUU7Z0JBQ0QsU0FBUyxFQUFFLFdBQVc7Z0JBQ3RCLGFBQWEsRUFBRSxDQUFDO3dCQUNaLElBQUksRUFBRSxNQUFNO3dCQUNaLFFBQVEsRUFBRSxJQUFJO3dCQUNkLFFBQVEsRUFBRSxxRUFBcUU7cUJBQ2hGLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsUUFBUSxFQUFFLElBQUk7cUJBQ2YsQ0FBQzthQUNMLEVBQUU7Z0JBQ0QsU0FBUyxFQUFFLHlCQUF5QjtnQkFDcEMsWUFBWSxFQUFFLFlBQVk7YUFDM0IsRUFBRTtnQkFDRCxTQUFTLEVBQUUsMkJBQTJCO2dCQUN0QyxZQUFZLEVBQUUsWUFBWTthQUMzQixFQUFFO2dCQUNELFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLFlBQVksRUFBRSxZQUFZO2FBQzNCLENBQUM7UUFDSixZQUFZLEVBQUUsQ0FBQztnQkFDWCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsMkJBQTJCO2FBQ3pDLEVBQUU7Z0JBQ0QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLDBCQUEwQjthQUN4QyxFQUFFO2dCQUNELFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSx5QkFBeUI7YUFDdkMsRUFBRTtnQkFDRCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsNkJBQTZCO2FBQzNDLEVBQUU7Z0JBQ0QsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQsV0FBVyxFQUFFLHFDQUFxQzthQUNuRCxFQUFFO2dCQUNELFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsWUFBWTthQUMxQixFQUFFO2dCQUNELFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSxzQkFBc0I7YUFDcEMsRUFBRTtnQkFDRCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsMEJBQTBCO2FBQ3hDLEVBQUU7Z0JBQ0QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLHFCQUFxQjthQUNuQyxFQUFFO2dCQUNELFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSxxQkFBcUI7YUFDbkMsRUFBRTtnQkFDRCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUscUJBQXFCO2FBQ25DLEVBQUU7Z0JBQ0QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLHlCQUF5QjthQUN2QyxDQUFDO0tBQ0wsQ0FBQztJQUNGLE9BQU87UUFDTCwrQ0FBK0MsRUFBRSwrQ0FBK0M7S0FDakcsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxDQUFDLEVBQUUsRUFBRSw4REFBOEQsQ0FBQyxDQUFDO0NBQzVFO0tBQ0k7SUFDSCxJQUFJLHNEQUFzRCxHQUFHLDhEQUE4RCxFQUFFLENBQUM7SUFDOUgsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDLCtDQUErQyxHQUFHLHNEQUFzRCxDQUFDLCtDQUErQyxDQUFDO0tBQ3pLO1NBQ0k7UUFDSCxJQUFJLCtDQUErQyxHQUFHLHNEQUFzRCxDQUFDLCtDQUErQyxDQUFDO0tBQzlKO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2ZhdWx0c18yMDE5XzJfTW9kdWxlX0ZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fZmF1bHRzXzIwMTlfMiA9IHtcbiAgICBuYW1lOiAnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2ZhdWx0c18yMDE5XzInLFxuICAgIGRlZmF1bHRFbGVtZW50TmFtZXNwYWNlVVJJOiAndXJuOmZhdWx0c18yMDE5XzIucGxhdGZvcm0ud2Vic2VydmljZXMubmV0c3VpdGUuY29tJyxcbiAgICBkZXBlbmRlbmNpZXM6IFsnY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2ZhdWx0c18yMDE5XzJfdHlwZXMnXSxcbiAgICB0eXBlSW5mb3M6IFt7XG4gICAgICAgIGxvY2FsTmFtZTogJ0V4Y2VlZGVkUmVjb3JkQ291bnRGYXVsdCcsXG4gICAgICAgIGJhc2VUeXBlSW5mbzogJy5Tb2FwRmF1bHQnXG4gICAgICB9LCB7XG4gICAgICAgIGxvY2FsTmFtZTogJ0ludmFsaWRWZXJzaW9uRmF1bHQnLFxuICAgICAgICBiYXNlVHlwZUluZm86ICcuU29hcEZhdWx0J1xuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdFeGNlZWRlZENvbmN1cnJlbnRSZXF1ZXN0TGltaXRGYXVsdCcsXG4gICAgICAgIGJhc2VUeXBlSW5mbzogJy5Tb2FwRmF1bHQnXG4gICAgICB9LCB7XG4gICAgICAgIGxvY2FsTmFtZTogJ0ludmFsaWRTZXNzaW9uRmF1bHQnLFxuICAgICAgICBiYXNlVHlwZUluZm86ICcuU29hcEZhdWx0J1xuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdJbnZhbGlkQWNjb3VudEZhdWx0JyxcbiAgICAgICAgYmFzZVR5cGVJbmZvOiAnLlNvYXBGYXVsdCdcbiAgICAgIH0sIHtcbiAgICAgICAgbG9jYWxOYW1lOiAnQXN5bmNGYXVsdCcsXG4gICAgICAgIGJhc2VUeXBlSW5mbzogJy5Tb2FwRmF1bHQnXG4gICAgICB9LCB7XG4gICAgICAgIGxvY2FsTmFtZTogJ0ludmFsaWRDcmVkZW50aWFsc0ZhdWx0JyxcbiAgICAgICAgYmFzZVR5cGVJbmZvOiAnLlNvYXBGYXVsdCdcbiAgICAgIH0sIHtcbiAgICAgICAgbG9jYWxOYW1lOiAnSW5zdWZmaWNpZW50UGVybWlzc2lvbkZhdWx0JyxcbiAgICAgICAgYmFzZVR5cGVJbmZvOiAnLlNvYXBGYXVsdCdcbiAgICAgIH0sIHtcbiAgICAgICAgbG9jYWxOYW1lOiAnRXhjZWVkZWRSZXF1ZXN0U2l6ZUZhdWx0JyxcbiAgICAgICAgYmFzZVR5cGVJbmZvOiAnLlNvYXBGYXVsdCdcbiAgICAgIH0sIHtcbiAgICAgICAgbG9jYWxOYW1lOiAnU29hcEZhdWx0JyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdjb2RlJyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZUluZm86ICdjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fZmF1bHRzXzIwMTlfMl90eXBlcy5GYXVsdENvZGVUeXBlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdtZXNzYWdlJyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgbG9jYWxOYW1lOiAnRXhjZWVkZWRVc2FnZUxpbWl0RmF1bHQnLFxuICAgICAgICBiYXNlVHlwZUluZm86ICcuU29hcEZhdWx0J1xuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdFeGNlZWRlZFJlcXVlc3RMaW1pdEZhdWx0JyxcbiAgICAgICAgYmFzZVR5cGVJbmZvOiAnLlNvYXBGYXVsdCdcbiAgICAgIH0sIHtcbiAgICAgICAgbG9jYWxOYW1lOiAnVW5leHBlY3RlZEVycm9yRmF1bHQnLFxuICAgICAgICBiYXNlVHlwZUluZm86ICcuU29hcEZhdWx0J1xuICAgICAgfV0sXG4gICAgZWxlbWVudEluZm9zOiBbe1xuICAgICAgICB0eXBlSW5mbzogJy5FeGNlZWRlZFJlcXVlc3RMaW1pdEZhdWx0JyxcbiAgICAgICAgZWxlbWVudE5hbWU6ICdleGNlZWRlZFJlcXVlc3RMaW1pdEZhdWx0J1xuICAgICAgfSwge1xuICAgICAgICB0eXBlSW5mbzogJy5FeGNlZWRlZFJlY29yZENvdW50RmF1bHQnLFxuICAgICAgICBlbGVtZW50TmFtZTogJ2V4Y2VlZGVkUmVjb3JkQ291bnRGYXVsdCdcbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZUluZm86ICcuRXhjZWVkZWRVc2FnZUxpbWl0RmF1bHQnLFxuICAgICAgICBlbGVtZW50TmFtZTogJ2V4Y2VlZGVkVXNhZ2VMaW1pdEZhdWx0J1xuICAgICAgfSwge1xuICAgICAgICB0eXBlSW5mbzogJy5JbnN1ZmZpY2llbnRQZXJtaXNzaW9uRmF1bHQnLFxuICAgICAgICBlbGVtZW50TmFtZTogJ2luc3VmZmljaWVudFBlcm1pc3Npb25GYXVsdCdcbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZUluZm86ICcuRXhjZWVkZWRDb25jdXJyZW50UmVxdWVzdExpbWl0RmF1bHQnLFxuICAgICAgICBlbGVtZW50TmFtZTogJ2V4Y2VlZGVkQ29uY3VycmVudFJlcXVlc3RMaW1pdEZhdWx0J1xuICAgICAgfSwge1xuICAgICAgICB0eXBlSW5mbzogJy5Bc3luY0ZhdWx0JyxcbiAgICAgICAgZWxlbWVudE5hbWU6ICdhc3luY0ZhdWx0J1xuICAgICAgfSwge1xuICAgICAgICB0eXBlSW5mbzogJy5VbmV4cGVjdGVkRXJyb3JGYXVsdCcsXG4gICAgICAgIGVsZW1lbnROYW1lOiAndW5leHBlY3RlZEVycm9yRmF1bHQnXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGVJbmZvOiAnLkV4Y2VlZGVkUmVxdWVzdFNpemVGYXVsdCcsXG4gICAgICAgIGVsZW1lbnROYW1lOiAnZXhjZWVkZWRSZXF1ZXN0U2l6ZUZhdWx0J1xuICAgICAgfSwge1xuICAgICAgICB0eXBlSW5mbzogJy5JbnZhbGlkVmVyc2lvbkZhdWx0JyxcbiAgICAgICAgZWxlbWVudE5hbWU6ICdpbnZhbGlkVmVyc2lvbkZhdWx0J1xuICAgICAgfSwge1xuICAgICAgICB0eXBlSW5mbzogJy5JbnZhbGlkU2Vzc2lvbkZhdWx0JyxcbiAgICAgICAgZWxlbWVudE5hbWU6ICdpbnZhbGlkU2Vzc2lvbkZhdWx0J1xuICAgICAgfSwge1xuICAgICAgICB0eXBlSW5mbzogJy5JbnZhbGlkQWNjb3VudEZhdWx0JyxcbiAgICAgICAgZWxlbWVudE5hbWU6ICdpbnZhbGlkQWNjb3VudEZhdWx0J1xuICAgICAgfSwge1xuICAgICAgICB0eXBlSW5mbzogJy5JbnZhbGlkQ3JlZGVudGlhbHNGYXVsdCcsXG4gICAgICAgIGVsZW1lbnROYW1lOiAnaW52YWxpZENyZWRlbnRpYWxzRmF1bHQnXG4gICAgICB9XVxuICB9O1xuICByZXR1cm4ge1xuICAgIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9mYXVsdHNfMjAxOV8yOiBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fZmF1bHRzXzIwMTlfMlxuICB9O1xufTtcbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKFtdLCBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fZmF1bHRzXzIwMTlfMl9Nb2R1bGVfRmFjdG9yeSk7XG59XG5lbHNlIHtcbiAgdmFyIGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9mYXVsdHNfMjAxOV8yX01vZHVsZSA9IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9mYXVsdHNfMjAxOV8yX01vZHVsZV9GYWN0b3J5KCk7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzLmNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9mYXVsdHNfMjAxOV8yID0gY29tX25ldHN1aXRlX3dlYnNlcnZpY2VzX3BsYXRmb3JtX2ZhdWx0c18yMDE5XzJfTW9kdWxlLmNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9mYXVsdHNfMjAxOV8yO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBjb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fZmF1bHRzXzIwMTlfMiA9IGNvbV9uZXRzdWl0ZV93ZWJzZXJ2aWNlc19wbGF0Zm9ybV9mYXVsdHNfMjAxOV8yX01vZHVsZS5jb21fbmV0c3VpdGVfd2Vic2VydmljZXNfcGxhdGZvcm1fZmF1bHRzXzIwMTlfMjtcbiAgfVxufSJdfQ==