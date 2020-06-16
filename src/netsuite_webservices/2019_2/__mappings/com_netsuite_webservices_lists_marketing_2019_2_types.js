var com_netsuite_webservices_lists_marketing_2019_2_types_Module_Factory = function () {
  var com_netsuite_webservices_lists_marketing_2019_2_types = {
    name: 'com_netsuite_webservices_lists_marketing_2019_2_types',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'CampaignStatus',
        values: ['_closed', '_completed', '_execute', '_inProgress', '_scheduled', '_sent', '_toPrint']
      }, {
        type: 'enumInfo',
        localName: 'CampaignCampaignEmailStatus',
        values: ['_execute', '_inProgress', '_notStarted', '_sent']
      }, {
        type: 'enumInfo',
        localName: 'PromotionCodeUseType',
        values: ['_multipleUses', '_singleUse']
      }, {
        type: 'enumInfo',
        localName: 'CampaignChannelEventType',
        values: ['_directMail', '_email', '_integration', '_other']
      }, {
        type: 'enumInfo',
        localName: 'CampaignResponseResponse',
        values: ['_bounced', '_clickedThru', '_purchased', '_received', '_responded', '_sent', '_subscribed', '_unsubscribed']
      }, {
        type: 'enumInfo',
        localName: 'CampaignCampaignEventType',
        values: ['_default', '_directMail', '_email', '_integration', '_leadNurturingEmail', '_other']
      }, {
        type: 'enumInfo',
        localName: 'CampaignCampaignDirectMailStatus',
        values: ['_completed', '_execute', '_inProgress', '_notStarted']
      }, {
        type: 'enumInfo',
        localName: 'CampaignResponse',
        values: ['_clickedThrough', '_failedDeliveryFailure', '_failedInvalidAddress', '_failedOther', '_failedSpam', '_failedTemplateError', '_failedUnexpectedError', '_invalidSenderAddress', '_mailboxDisabled', '_mailboxIsFull', '_mailboxNotAcceptingMessages', '_mailProtocolIssues', '_mediaError', '_messageExceedsSizeLengthLimits', '_networkServerIssues', '_opened', '_purchased', '_queued', '_received', '_responded', '_securityIssues', '_sent', '_skippedDueToPreviousHardBounce', '_subscribed', '_tooManyRecipients', '_unsubscribed', '_unsubscribedByFeedbackLoop']
      }, {
        type: 'enumInfo',
        localName: 'PromotionCodeApplyDiscountTo',
        values: ['_allSales', '_firstSaleOnly']
      }, {
        type: 'enumInfo',
        localName: 'CampaignResponseCategory',
        values: ['_bounced', '_clickedThrough', '_failed', '_purchased', '_queued', '_received', '_responded', '_sent', '_subscribed', '_unsubscribed']
      }, {
        type: 'enumInfo',
        localName: 'CampaignCampaignEventStatus',
        values: ['_completed', '_execute', '_inProgress', '_notStarted']
      }],
    elementInfos: []
  };
  return {
    com_netsuite_webservices_lists_marketing_2019_2_types: com_netsuite_webservices_lists_marketing_2019_2_types
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_lists_marketing_2019_2_types_Module_Factory);
}
else {
  var com_netsuite_webservices_lists_marketing_2019_2_types_Module = com_netsuite_webservices_lists_marketing_2019_2_types_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_lists_marketing_2019_2_types = com_netsuite_webservices_lists_marketing_2019_2_types_Module.com_netsuite_webservices_lists_marketing_2019_2_types;
  }
  else {
    var com_netsuite_webservices_lists_marketing_2019_2_types = com_netsuite_webservices_lists_marketing_2019_2_types_Module.com_netsuite_webservices_lists_marketing_2019_2_types;
  }
}