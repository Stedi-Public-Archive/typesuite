"use strict";
var org_xmlsoap_schemas_soap_envelope_Module_Factory = function () {
    var org_xmlsoap_schemas_soap_envelope = {
        name: 'org_xmlsoap_schemas_soap_envelope',
        defaultElementNamespaceURI: 'http:\/\/schemas.xmlsoap.org\/soap\/envelope\/',
        typeInfos: [{
                localName: 'Fault',
                propertyInfos: [{
                        name: 'faultcode',
                        required: true,
                        elementName: {
                            localPart: 'faultcode'
                        },
                        typeInfo: 'QName'
                    }, {
                        name: 'faultstring',
                        required: true,
                        elementName: {
                            localPart: 'faultstring'
                        }
                    }, {
                        name: 'faultactor',
                        elementName: {
                            localPart: 'faultactor'
                        }
                    }, {
                        name: 'detail',
                        elementName: {
                            localPart: 'detail'
                        },
                        typeInfo: '.Detail'
                    }]
            }, {
                localName: 'Detail',
                typeName: 'detail',
                propertyInfos: [{
                        name: 'otherAttributes',
                        type: 'anyAttribute'
                    }, {
                        name: 'any',
                        minOccurs: 0,
                        collection: true,
                        mixed: false,
                        type: 'anyElement'
                    }]
            }, {
                localName: 'Envelope',
                propertyInfos: [{
                        name: 'otherAttributes',
                        type: 'anyAttribute'
                    }, {
                        name: 'header',
                        elementName: 'Header',
                        typeInfo: '.Header'
                    }, {
                        name: 'body',
                        required: true,
                        elementName: 'Body',
                        typeInfo: '.Body'
                    }, {
                        name: 'any',
                        minOccurs: 0,
                        collection: true,
                        mixed: false,
                        type: 'anyElement'
                    }]
            }, {
                localName: 'Body',
                propertyInfos: [{
                        name: 'otherAttributes',
                        type: 'anyAttribute'
                    }, {
                        name: 'any',
                        minOccurs: 0,
                        collection: true,
                        mixed: false,
                        type: 'anyElement'
                    }]
            }, {
                localName: 'Header',
                propertyInfos: [{
                        name: 'otherAttributes',
                        type: 'anyAttribute'
                    }, {
                        name: 'any',
                        minOccurs: 0,
                        collection: true,
                        mixed: false,
                        type: 'anyElement'
                    }]
            }],
        elementInfos: [{
                elementName: 'Header',
                typeInfo: '.Header'
            }, {
                elementName: 'Body',
                typeInfo: '.Body'
            }, {
                elementName: 'Envelope',
                typeInfo: '.Envelope'
            }, {
                elementName: 'Fault',
                typeInfo: '.Fault'
            }]
    };
    return {
        org_xmlsoap_schemas_soap_envelope: org_xmlsoap_schemas_soap_envelope
    };
};
if (typeof define === 'function' && define.amd) {
    define([], org_xmlsoap_schemas_soap_envelope_Module_Factory);
}
else {
    var org_xmlsoap_schemas_soap_envelope_Module = org_xmlsoap_schemas_soap_envelope_Module_Factory();
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.org_xmlsoap_schemas_soap_envelope = org_xmlsoap_schemas_soap_envelope_Module.org_xmlsoap_schemas_soap_envelope;
    }
    else {
        var org_xmlsoap_schemas_soap_envelope = org_xmlsoap_schemas_soap_envelope_Module.org_xmlsoap_schemas_soap_envelope;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnX3htbHNvYXBfc2NoZW1hc19zb2FwX2VudmVsb3BlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3htbHNvYXAvX19tYXBwaW5ncy9vcmdfeG1sc29hcF9zY2hlbWFzX3NvYXBfZW52ZWxvcGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksZ0RBQWdELEdBQUc7SUFDckQsSUFBSSxpQ0FBaUMsR0FBRztRQUN0QyxJQUFJLEVBQUUsbUNBQW1DO1FBQ3pDLDBCQUEwQixFQUFFLGdEQUFnRDtRQUM1RSxTQUFTLEVBQUUsQ0FBQztnQkFDUixTQUFTLEVBQUUsT0FBTztnQkFDbEIsYUFBYSxFQUFFLENBQUM7d0JBQ1osSUFBSSxFQUFFLFdBQVc7d0JBQ2pCLFFBQVEsRUFBRSxJQUFJO3dCQUNkLFdBQVcsRUFBRTs0QkFDWCxTQUFTLEVBQUUsV0FBVzt5QkFDdkI7d0JBQ0QsUUFBUSxFQUFFLE9BQU87cUJBQ2xCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLGFBQWE7d0JBQ25CLFFBQVEsRUFBRSxJQUFJO3dCQUNkLFdBQVcsRUFBRTs0QkFDWCxTQUFTLEVBQUUsYUFBYTt5QkFDekI7cUJBQ0YsRUFBRTt3QkFDRCxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsV0FBVyxFQUFFOzRCQUNYLFNBQVMsRUFBRSxZQUFZO3lCQUN4QjtxQkFDRixFQUFFO3dCQUNELElBQUksRUFBRSxRQUFRO3dCQUNkLFdBQVcsRUFBRTs0QkFDWCxTQUFTLEVBQUUsUUFBUTt5QkFDcEI7d0JBQ0QsUUFBUSxFQUFFLFNBQVM7cUJBQ3BCLENBQUM7YUFDTCxFQUFFO2dCQUNELFNBQVMsRUFBRSxRQUFRO2dCQUNuQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsYUFBYSxFQUFFLENBQUM7d0JBQ1osSUFBSSxFQUFFLGlCQUFpQjt3QkFDdkIsSUFBSSxFQUFFLGNBQWM7cUJBQ3JCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsU0FBUyxFQUFFLENBQUM7d0JBQ1osVUFBVSxFQUFFLElBQUk7d0JBQ2hCLEtBQUssRUFBRSxLQUFLO3dCQUNaLElBQUksRUFBRSxZQUFZO3FCQUNuQixDQUFDO2FBQ0wsRUFBRTtnQkFDRCxTQUFTLEVBQUUsVUFBVTtnQkFDckIsYUFBYSxFQUFFLENBQUM7d0JBQ1osSUFBSSxFQUFFLGlCQUFpQjt3QkFDdkIsSUFBSSxFQUFFLGNBQWM7cUJBQ3JCLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsV0FBVyxFQUFFLFFBQVE7d0JBQ3JCLFFBQVEsRUFBRSxTQUFTO3FCQUNwQixFQUFFO3dCQUNELElBQUksRUFBRSxNQUFNO3dCQUNaLFFBQVEsRUFBRSxJQUFJO3dCQUNkLFdBQVcsRUFBRSxNQUFNO3dCQUNuQixRQUFRLEVBQUUsT0FBTztxQkFDbEIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsS0FBSzt3QkFDWCxTQUFTLEVBQUUsQ0FBQzt3QkFDWixVQUFVLEVBQUUsSUFBSTt3QkFDaEIsS0FBSyxFQUFFLEtBQUs7d0JBQ1osSUFBSSxFQUFFLFlBQVk7cUJBQ25CLENBQUM7YUFDTCxFQUFFO2dCQUNELFNBQVMsRUFBRSxNQUFNO2dCQUNqQixhQUFhLEVBQUUsQ0FBQzt3QkFDWixJQUFJLEVBQUUsaUJBQWlCO3dCQUN2QixJQUFJLEVBQUUsY0FBYztxQkFDckIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsS0FBSzt3QkFDWCxTQUFTLEVBQUUsQ0FBQzt3QkFDWixVQUFVLEVBQUUsSUFBSTt3QkFDaEIsS0FBSyxFQUFFLEtBQUs7d0JBQ1osSUFBSSxFQUFFLFlBQVk7cUJBQ25CLENBQUM7YUFDTCxFQUFFO2dCQUNELFNBQVMsRUFBRSxRQUFRO2dCQUNuQixhQUFhLEVBQUUsQ0FBQzt3QkFDWixJQUFJLEVBQUUsaUJBQWlCO3dCQUN2QixJQUFJLEVBQUUsY0FBYztxQkFDckIsRUFBRTt3QkFDRCxJQUFJLEVBQUUsS0FBSzt3QkFDWCxTQUFTLEVBQUUsQ0FBQzt3QkFDWixVQUFVLEVBQUUsSUFBSTt3QkFDaEIsS0FBSyxFQUFFLEtBQUs7d0JBQ1osSUFBSSxFQUFFLFlBQVk7cUJBQ25CLENBQUM7YUFDTCxDQUFDO1FBQ0osWUFBWSxFQUFFLENBQUM7Z0JBQ1gsV0FBVyxFQUFFLFFBQVE7Z0JBQ3JCLFFBQVEsRUFBRSxTQUFTO2FBQ3BCLEVBQUU7Z0JBQ0QsV0FBVyxFQUFFLE1BQU07Z0JBQ25CLFFBQVEsRUFBRSxPQUFPO2FBQ2xCLEVBQUU7Z0JBQ0QsV0FBVyxFQUFFLFVBQVU7Z0JBQ3ZCLFFBQVEsRUFBRSxXQUFXO2FBQ3RCLEVBQUU7Z0JBQ0QsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLFFBQVEsRUFBRSxRQUFRO2FBQ25CLENBQUM7S0FDTCxDQUFDO0lBQ0YsT0FBTztRQUNMLGlDQUFpQyxFQUFFLGlDQUFpQztLQUNyRSxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUM5QyxNQUFNLENBQUMsRUFBRSxFQUFFLGdEQUFnRCxDQUFDLENBQUM7Q0FDOUQ7S0FDSTtJQUNILElBQUksd0NBQXdDLEdBQUcsZ0RBQWdELEVBQUUsQ0FBQztJQUNsRyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ25ELE1BQU0sQ0FBQyxPQUFPLENBQUMsaUNBQWlDLEdBQUcsd0NBQXdDLENBQUMsaUNBQWlDLENBQUM7S0FDL0g7U0FDSTtRQUNILElBQUksaUNBQWlDLEdBQUcsd0NBQXdDLENBQUMsaUNBQWlDLENBQUM7S0FDcEg7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbInZhciBvcmdfeG1sc29hcF9zY2hlbWFzX3NvYXBfZW52ZWxvcGVfTW9kdWxlX0ZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvcmdfeG1sc29hcF9zY2hlbWFzX3NvYXBfZW52ZWxvcGUgPSB7XG4gICAgbmFtZTogJ29yZ194bWxzb2FwX3NjaGVtYXNfc29hcF9lbnZlbG9wZScsXG4gICAgZGVmYXVsdEVsZW1lbnROYW1lc3BhY2VVUkk6ICdodHRwOlxcL1xcL3NjaGVtYXMueG1sc29hcC5vcmdcXC9zb2FwXFwvZW52ZWxvcGVcXC8nLFxuICAgIHR5cGVJbmZvczogW3tcbiAgICAgICAgbG9jYWxOYW1lOiAnRmF1bHQnLFxuICAgICAgICBwcm9wZXJ0eUluZm9zOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2ZhdWx0Y29kZScsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVsZW1lbnROYW1lOiB7XG4gICAgICAgICAgICAgIGxvY2FsUGFydDogJ2ZhdWx0Y29kZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlSW5mbzogJ1FOYW1lJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdmYXVsdHN0cmluZycsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVsZW1lbnROYW1lOiB7XG4gICAgICAgICAgICAgIGxvY2FsUGFydDogJ2ZhdWx0c3RyaW5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdmYXVsdGFjdG9yJyxcbiAgICAgICAgICAgIGVsZW1lbnROYW1lOiB7XG4gICAgICAgICAgICAgIGxvY2FsUGFydDogJ2ZhdWx0YWN0b3InXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RldGFpbCcsXG4gICAgICAgICAgICBlbGVtZW50TmFtZToge1xuICAgICAgICAgICAgICBsb2NhbFBhcnQ6ICdkZXRhaWwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZUluZm86ICcuRGV0YWlsJ1xuICAgICAgICAgIH1dXG4gICAgICB9LCB7XG4gICAgICAgIGxvY2FsTmFtZTogJ0RldGFpbCcsXG4gICAgICAgIHR5cGVOYW1lOiAnZGV0YWlsJyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdvdGhlckF0dHJpYnV0ZXMnLFxuICAgICAgICAgICAgdHlwZTogJ2FueUF0dHJpYnV0ZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnYW55JyxcbiAgICAgICAgICAgIG1pbk9jY3VyczogMCxcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHRydWUsXG4gICAgICAgICAgICBtaXhlZDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiAnYW55RWxlbWVudCdcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdFbnZlbG9wZScsXG4gICAgICAgIHByb3BlcnR5SW5mb3M6IFt7XG4gICAgICAgICAgICBuYW1lOiAnb3RoZXJBdHRyaWJ1dGVzJyxcbiAgICAgICAgICAgIHR5cGU6ICdhbnlBdHRyaWJ1dGUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2hlYWRlcicsXG4gICAgICAgICAgICBlbGVtZW50TmFtZTogJ0hlYWRlcicsXG4gICAgICAgICAgICB0eXBlSW5mbzogJy5IZWFkZXInXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2JvZHknLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBlbGVtZW50TmFtZTogJ0JvZHknLFxuICAgICAgICAgICAgdHlwZUluZm86ICcuQm9keSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnYW55JyxcbiAgICAgICAgICAgIG1pbk9jY3VyczogMCxcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHRydWUsXG4gICAgICAgICAgICBtaXhlZDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiAnYW55RWxlbWVudCdcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdCb2R5JyxcbiAgICAgICAgcHJvcGVydHlJbmZvczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdvdGhlckF0dHJpYnV0ZXMnLFxuICAgICAgICAgICAgdHlwZTogJ2FueUF0dHJpYnV0ZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnYW55JyxcbiAgICAgICAgICAgIG1pbk9jY3VyczogMCxcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHRydWUsXG4gICAgICAgICAgICBtaXhlZDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiAnYW55RWxlbWVudCdcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsb2NhbE5hbWU6ICdIZWFkZXInLFxuICAgICAgICBwcm9wZXJ0eUluZm9zOiBbe1xuICAgICAgICAgICAgbmFtZTogJ290aGVyQXR0cmlidXRlcycsXG4gICAgICAgICAgICB0eXBlOiAnYW55QXR0cmlidXRlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdhbnknLFxuICAgICAgICAgICAgbWluT2NjdXJzOiAwLFxuICAgICAgICAgICAgY29sbGVjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIG1peGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6ICdhbnlFbGVtZW50J1xuICAgICAgICAgIH1dXG4gICAgICB9XSxcbiAgICBlbGVtZW50SW5mb3M6IFt7XG4gICAgICAgIGVsZW1lbnROYW1lOiAnSGVhZGVyJyxcbiAgICAgICAgdHlwZUluZm86ICcuSGVhZGVyJ1xuICAgICAgfSwge1xuICAgICAgICBlbGVtZW50TmFtZTogJ0JvZHknLFxuICAgICAgICB0eXBlSW5mbzogJy5Cb2R5J1xuICAgICAgfSwge1xuICAgICAgICBlbGVtZW50TmFtZTogJ0VudmVsb3BlJyxcbiAgICAgICAgdHlwZUluZm86ICcuRW52ZWxvcGUnXG4gICAgICB9LCB7XG4gICAgICAgIGVsZW1lbnROYW1lOiAnRmF1bHQnLFxuICAgICAgICB0eXBlSW5mbzogJy5GYXVsdCdcbiAgICAgIH1dXG4gIH07XG4gIHJldHVybiB7XG4gICAgb3JnX3htbHNvYXBfc2NoZW1hc19zb2FwX2VudmVsb3BlOiBvcmdfeG1sc29hcF9zY2hlbWFzX3NvYXBfZW52ZWxvcGVcbiAgfTtcbn07XG5pZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShbXSwgb3JnX3htbHNvYXBfc2NoZW1hc19zb2FwX2VudmVsb3BlX01vZHVsZV9GYWN0b3J5KTtcbn1cbmVsc2Uge1xuICB2YXIgb3JnX3htbHNvYXBfc2NoZW1hc19zb2FwX2VudmVsb3BlX01vZHVsZSA9IG9yZ194bWxzb2FwX3NjaGVtYXNfc29hcF9lbnZlbG9wZV9Nb2R1bGVfRmFjdG9yeSgpO1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cy5vcmdfeG1sc29hcF9zY2hlbWFzX3NvYXBfZW52ZWxvcGUgPSBvcmdfeG1sc29hcF9zY2hlbWFzX3NvYXBfZW52ZWxvcGVfTW9kdWxlLm9yZ194bWxzb2FwX3NjaGVtYXNfc29hcF9lbnZlbG9wZTtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgb3JnX3htbHNvYXBfc2NoZW1hc19zb2FwX2VudmVsb3BlID0gb3JnX3htbHNvYXBfc2NoZW1hc19zb2FwX2VudmVsb3BlX01vZHVsZS5vcmdfeG1sc29hcF9zY2hlbWFzX3NvYXBfZW52ZWxvcGU7XG4gIH1cbn0iXX0=