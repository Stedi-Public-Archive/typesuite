var com_netsuite_webservices_transactions_customers_2019_2_types_Module_Factory = function () {
  var com_netsuite_webservices_transactions_customers_2019_2_types = {
    name: 'com_netsuite_webservices_transactions_customers_2019_2_types',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'ReturnAuthorizationOrderStatus',
        values: ['_pendingApproval', '_pendingReceipt']
      }, {
        type: 'enumInfo',
        localName: 'ChargeStage',
        values: ['_hold', '_nonBillable', '_processed', '_ready']
      }, {
        type: 'enumInfo',
        localName: 'CashRefundHandlingMode',
        values: ['_process', '_recordExternalEvent', '_saveOnly']
      }, {
        type: 'enumInfo',
        localName: 'CustomerPaymentPaymentOperation',
        values: ['_authorization', '_capture', '_sale', '_refund', '_credit', '_refresh', '_void']
      }, {
        type: 'enumInfo',
        localName: 'CustomerDepositPaymentOperation',
        values: ['_authorization', '_capture', '_sale', '_refund', '_credit', '_refresh', '_void']
      }, {
        type: 'enumInfo',
        localName: 'ChargeUse',
        values: ['_actual', '_forecast']
      }, {
        type: 'enumInfo',
        localName: 'CustomerRefundHandlingMode',
        values: ['_process', '_recordExternalEvent', '_saveOnly']
      }, {
        type: 'enumInfo',
        localName: 'CustomerDepositHandlingMode',
        values: ['_process', '_recordExternalEvent', '_saveOnly']
      }, {
        type: 'enumInfo',
        localName: 'CustomerPaymentHandlingMode',
        values: ['_process', '_recordExternalEvent', '_saveOnly']
      }, {
        type: 'enumInfo',
        localName: 'CashRefundPaymentOperation',
        values: ['_authorization', '_capture', '_sale', '_refund', '_credit', '_refresh', '_void']
      }, {
        type: 'enumInfo',
        localName: 'CustomerRefundPaymentOperation',
        values: ['_authorization', '_capture', '_sale', '_refund', '_credit', '_refresh', '_void']
      }],
    elementInfos: []
  };
  return {
    com_netsuite_webservices_transactions_customers_2019_2_types: com_netsuite_webservices_transactions_customers_2019_2_types
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_transactions_customers_2019_2_types_Module_Factory);
}
else {
  var com_netsuite_webservices_transactions_customers_2019_2_types_Module = com_netsuite_webservices_transactions_customers_2019_2_types_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_transactions_customers_2019_2_types = com_netsuite_webservices_transactions_customers_2019_2_types_Module.com_netsuite_webservices_transactions_customers_2019_2_types;
  }
  else {
    var com_netsuite_webservices_transactions_customers_2019_2_types = com_netsuite_webservices_transactions_customers_2019_2_types_Module.com_netsuite_webservices_transactions_customers_2019_2_types;
  }
}