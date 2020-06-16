var com_netsuite_webservices_lists_supplychain_2019_2_types_Module_Factory = function () {
  var com_netsuite_webservices_lists_supplychain_2019_2_types = {
    name: 'com_netsuite_webservices_lists_supplychain_2019_2_types',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'ManufacturingOperationTaskPredecessorPredecessorType',
        values: ['_finishToFinish', '_finishToStart', '_startToFinish', '_startToStart']
      }, {
        type: 'enumInfo',
        localName: 'ManufacturingLagType',
        values: ['_quantity', '_quantityPercentage', '_time', '_timePercentage']
      }, {
        type: 'enumInfo',
        localName: 'ManufacturingOperationTaskStatus',
        values: ['_completed', '_inProgress', '_notStarted']
      }],
    elementInfos: []
  };
  return {
    com_netsuite_webservices_lists_supplychain_2019_2_types: com_netsuite_webservices_lists_supplychain_2019_2_types
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_lists_supplychain_2019_2_types_Module_Factory);
}
else {
  var com_netsuite_webservices_lists_supplychain_2019_2_types_Module = com_netsuite_webservices_lists_supplychain_2019_2_types_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_lists_supplychain_2019_2_types = com_netsuite_webservices_lists_supplychain_2019_2_types_Module.com_netsuite_webservices_lists_supplychain_2019_2_types;
  }
  else {
    var com_netsuite_webservices_lists_supplychain_2019_2_types = com_netsuite_webservices_lists_supplychain_2019_2_types_Module.com_netsuite_webservices_lists_supplychain_2019_2_types;
  }
}