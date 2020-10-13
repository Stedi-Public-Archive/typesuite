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