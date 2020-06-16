var com_netsuite_webservices_general_communication_2019_2_types_Module_Factory = function () {
  var com_netsuite_webservices_general_communication_2019_2_types = {
    name: 'com_netsuite_webservices_general_communication_2019_2_types',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'MessageMessageType',
        values: ['_email', '_emailedReport', '_fax', '_pdf', '_print']
      }, {
        type: 'enumInfo',
        localName: 'NoteDirection',
        values: ['_incoming', '_outgoing']
      }],
    elementInfos: []
  };
  return {
    com_netsuite_webservices_general_communication_2019_2_types: com_netsuite_webservices_general_communication_2019_2_types
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_general_communication_2019_2_types_Module_Factory);
}
else {
  var com_netsuite_webservices_general_communication_2019_2_types_Module = com_netsuite_webservices_general_communication_2019_2_types_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_general_communication_2019_2_types = com_netsuite_webservices_general_communication_2019_2_types_Module.com_netsuite_webservices_general_communication_2019_2_types;
  }
  else {
    var com_netsuite_webservices_general_communication_2019_2_types = com_netsuite_webservices_general_communication_2019_2_types_Module.com_netsuite_webservices_general_communication_2019_2_types;
  }
}