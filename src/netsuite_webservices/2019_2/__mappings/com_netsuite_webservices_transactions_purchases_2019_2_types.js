var com_netsuite_webservices_transactions_purchases_2019_2_types_Module_Factory = function () {
  var com_netsuite_webservices_transactions_purchases_2019_2_types = {
    name: 'com_netsuite_webservices_transactions_purchases_2019_2_types',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'VendorReturnAuthorizationOrderStatus',
        values: ['_cancelled', '_closed', '_credited', '_partiallyReturned', '_pendingApproval', '_pendingCredit', '_pendingCreditPartiallyReturned', '_pendingReturn', '_undefined']
      }, {
        type: 'enumInfo',
        localName: 'PurchaseOrderOrderStatus',
        values: ['_closed', '_fullyBilled', '_partiallyReceived', '_pendingBillingPartiallyReceived', '_pendingBilling', '_pendingReceipt', '_pendingSupervisorApproval', '_rejectedBySupervisor']
      }, {
        type: 'enumInfo',
        localName: 'InboundShipmentShipmentStatus',
        values: ['_closed', '_inTransit', '_partiallyReceived', '_received', '_toBeShipped']
      }, {
        type: 'enumInfo',
        localName: 'InboundShipmentLandedCostAllocationMethod',
        values: ['_quantity', '_value', '_weight']
      }],
    elementInfos: []
  };
  return {
    com_netsuite_webservices_transactions_purchases_2019_2_types: com_netsuite_webservices_transactions_purchases_2019_2_types
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_transactions_purchases_2019_2_types_Module_Factory);
}
else {
  var com_netsuite_webservices_transactions_purchases_2019_2_types_Module = com_netsuite_webservices_transactions_purchases_2019_2_types_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_transactions_purchases_2019_2_types = com_netsuite_webservices_transactions_purchases_2019_2_types_Module.com_netsuite_webservices_transactions_purchases_2019_2_types;
  }
  else {
    var com_netsuite_webservices_transactions_purchases_2019_2_types = com_netsuite_webservices_transactions_purchases_2019_2_types_Module.com_netsuite_webservices_transactions_purchases_2019_2_types;
  }
}