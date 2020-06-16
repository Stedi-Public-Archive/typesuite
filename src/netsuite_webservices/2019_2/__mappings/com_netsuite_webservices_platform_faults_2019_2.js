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