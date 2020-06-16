var com_netsuite_webservices_transactions_demandplanning_2019_2_types_Module_Factory = function () {
  var com_netsuite_webservices_transactions_demandplanning_2019_2_types = {
    name: 'com_netsuite_webservices_transactions_demandplanning_2019_2_types',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'DemandPlanCalendarType',
        values: ['_daily', '_monthly', '_weekly']
      }, {
        type: 'enumInfo',
        localName: 'ItemSupplyPlanOrderType',
        values: ['_purchaseOrder', '_transferOrder', '_workOrder']
      }, {
        type: 'enumInfo',
        localName: 'ItemDemandPlanProjectionMethod',
        values: ['_linearRegression', '_movingAverage', '_salesForecast', '_seasonalAverage']
      }, {
        type: 'enumInfo',
        localName: 'DemandPlanMonth',
        values: ['_april', '_august', '_december', '_february', '_january', '_july', '_june', '_march', '_may', '_november', '_october', '_september']
      }, {
        type: 'enumInfo',
        localName: 'DayOfTheWeek',
        values: ['_sunday', '_monday', '_tuesday', '_wednesday', '_thursday', '_friday', '_saturday']
      }],
    elementInfos: []
  };
  return {
    com_netsuite_webservices_transactions_demandplanning_2019_2_types: com_netsuite_webservices_transactions_demandplanning_2019_2_types
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_transactions_demandplanning_2019_2_types_Module_Factory);
}
else {
  var com_netsuite_webservices_transactions_demandplanning_2019_2_types_Module = com_netsuite_webservices_transactions_demandplanning_2019_2_types_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_transactions_demandplanning_2019_2_types = com_netsuite_webservices_transactions_demandplanning_2019_2_types_Module.com_netsuite_webservices_transactions_demandplanning_2019_2_types;
  }
  else {
    var com_netsuite_webservices_transactions_demandplanning_2019_2_types = com_netsuite_webservices_transactions_demandplanning_2019_2_types_Module.com_netsuite_webservices_transactions_demandplanning_2019_2_types;
  }
}