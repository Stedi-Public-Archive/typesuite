var com_netsuite_webservices_transactions_employees_2019_2_types_Module_Factory = function () {
  var com_netsuite_webservices_transactions_employees_2019_2_types = {
    name: 'com_netsuite_webservices_transactions_employees_2019_2_types',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'TimeBillTimeType',
        values: ['_actualTime', '_allocatedTime', '_plannedTime']
      }],
    elementInfos: []
  };
  return {
    com_netsuite_webservices_transactions_employees_2019_2_types: com_netsuite_webservices_transactions_employees_2019_2_types
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_transactions_employees_2019_2_types_Module_Factory);
}
else {
  var com_netsuite_webservices_transactions_employees_2019_2_types_Module = com_netsuite_webservices_transactions_employees_2019_2_types_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_transactions_employees_2019_2_types = com_netsuite_webservices_transactions_employees_2019_2_types_Module.com_netsuite_webservices_transactions_employees_2019_2_types;
  }
  else {
    var com_netsuite_webservices_transactions_employees_2019_2_types = com_netsuite_webservices_transactions_employees_2019_2_types_Module.com_netsuite_webservices_transactions_employees_2019_2_types;
  }
}