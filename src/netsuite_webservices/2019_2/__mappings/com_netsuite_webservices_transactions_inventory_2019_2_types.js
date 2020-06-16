var com_netsuite_webservices_transactions_inventory_2019_2_types_Module_Factory = function () {
  var com_netsuite_webservices_transactions_inventory_2019_2_types = {
    name: 'com_netsuite_webservices_transactions_inventory_2019_2_types',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'TransferOrderItemCommitInventory',
        values: ['_availableQty', '_completeQty', '_doNotCommit']
      }, {
        type: 'enumInfo',
        localName: 'WorkOrderOrderStatus',
        values: ['_built', '_cancelled', '_closed', '_inProcess', '_planned', '_released', '_undefined']
      }, {
        type: 'enumInfo',
        localName: 'WorkOrderItemItemCommitInventory',
        values: ['_availableQty', '_completeQty', '_doNotCommit']
      }, {
        type: 'enumInfo',
        localName: 'WorkOrderSchedulingMethod',
        values: ['_backward', '_forward']
      }, {
        type: 'enumInfo',
        localName: 'TransferOrderOrderStatus',
        values: ['_pendingApproval', '_pendingFulfillment', '_rejected', '_partiallyFulfilled', '_pendingReceiptPartFulfilled', '_pendingReceipt', '_received', '_closed', '_undefined']
      }],
    elementInfos: []
  };
  return {
    com_netsuite_webservices_transactions_inventory_2019_2_types: com_netsuite_webservices_transactions_inventory_2019_2_types
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_transactions_inventory_2019_2_types_Module_Factory);
}
else {
  var com_netsuite_webservices_transactions_inventory_2019_2_types_Module = com_netsuite_webservices_transactions_inventory_2019_2_types_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_transactions_inventory_2019_2_types = com_netsuite_webservices_transactions_inventory_2019_2_types_Module.com_netsuite_webservices_transactions_inventory_2019_2_types;
  }
  else {
    var com_netsuite_webservices_transactions_inventory_2019_2_types = com_netsuite_webservices_transactions_inventory_2019_2_types_Module.com_netsuite_webservices_transactions_inventory_2019_2_types;
  }
}