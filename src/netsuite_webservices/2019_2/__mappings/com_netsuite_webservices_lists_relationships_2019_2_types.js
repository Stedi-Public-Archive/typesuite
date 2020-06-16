var com_netsuite_webservices_lists_relationships_2019_2_types_Module_Factory = function () {
  var com_netsuite_webservices_lists_relationships_2019_2_types = {
    name: 'com_netsuite_webservices_lists_relationships_2019_2_types',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'CustomerMonthlyClosing',
        values: ['_one', '_five', '_ten', '_fifteen', '_twenty', '_twentyFive', '_endOfTheMonth']
      }, {
        type: 'enumInfo',
        localName: 'CustomerCreditHoldOverride',
        values: ['_auto', '_on', '_off']
      }, {
        type: 'enumInfo',
        localName: 'PartnerOtherRelationships',
        values: ['_customer', '_otherName', '_vendor']
      }, {
        type: 'enumInfo',
        localName: 'CustomerNegativeNumberFormat',
        values: ['_bracketSurrounded', '_minusSigned']
      }, {
        type: 'enumInfo',
        localName: 'CustomerStatusStage',
        values: ['_customer', '_lead', '_prospect']
      }, {
        type: 'enumInfo',
        localName: 'ContactType',
        values: ['_customer', '_employee', '_otherName', '_partner', '_vendor']
      }, {
        type: 'enumInfo',
        localName: 'JobBillingType',
        values: ['_none', '_chargeBased', '_fixedBidInterval', '_fixedBidMilestone', '_timeAndMaterials']
      }, {
        type: 'enumInfo',
        localName: 'EntityGroupType',
        values: ['_contact', '_customer', '_employee', '_partner', '_vendor']
      }, {
        type: 'enumInfo',
        localName: 'EntityType',
        values: ['_company', '_contact', '_customer', '_employee', '_genericResource', '_group', '_internal', '_job', '_otherName', '_partner', '_resourceGroup', '_vendor']
      }, {
        type: 'enumInfo',
        localName: 'VendorOtherRelationships',
        values: ['_customer', '_otherName', '_partner']
      }, {
        type: 'enumInfo',
        localName: 'CustomerOtherRelationships',
        values: ['_otherName', '_partner', '_vendor']
      }, {
        type: 'enumInfo',
        localName: 'EmailPreference',
        values: ['_default', '_hTML', '_pDF']
      }, {
        type: 'enumInfo',
        localName: 'CustomerStage',
        values: ['_customer', '_lead', '_prospect']
      }, {
        type: 'enumInfo',
        localName: 'BillingAccountFrequency',
        values: ['_annually', '_custom', '_daily', '_endOfPeriod', '_everyFourWeeks', '_everyThreeYears', '_everyTwoMonths', '_everyTwoWeeks', '_everyTwoYears', '_hourly', '_monthly', '_never', '_oneTime', '_quarterly', '_startOfPeriod', '_twiceAMonth', '_twiceAYear', '_weekly']
      }, {
        type: 'enumInfo',
        localName: 'TaxRounding',
        values: ['_roundDown', '_roundOff', '_roundUp']
      }, {
        type: 'enumInfo',
        localName: 'CustomerNumberFormat',
        values: ['_spaceAsDigitGroupSeparatorAndDecimalComma', '_spaceAsDigitGroupSeparatorAndDecimalPoint', '_commaAsDigitGroupSeparatorAndDecimalPoint', '_pointAsDigitGroupSeparatorAndDecimalComma', '_apostropheAsDigitGroupSeparatorAndDecimalComma', '_apostropheAsDigitGroupSeparatorAndDecimalPoint']
      }],
    elementInfos: []
  };
  return {
    com_netsuite_webservices_lists_relationships_2019_2_types: com_netsuite_webservices_lists_relationships_2019_2_types
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_lists_relationships_2019_2_types_Module_Factory);
}
else {
  var com_netsuite_webservices_lists_relationships_2019_2_types_Module = com_netsuite_webservices_lists_relationships_2019_2_types_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_lists_relationships_2019_2_types = com_netsuite_webservices_lists_relationships_2019_2_types_Module.com_netsuite_webservices_lists_relationships_2019_2_types;
  }
  else {
    var com_netsuite_webservices_lists_relationships_2019_2_types = com_netsuite_webservices_lists_relationships_2019_2_types_Module.com_netsuite_webservices_lists_relationships_2019_2_types;
  }
}