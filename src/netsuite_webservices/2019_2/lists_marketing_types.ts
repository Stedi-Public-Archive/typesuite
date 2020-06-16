
export type CampaignStatus =
  "_closed" |
  "_completed" |
  "_execute" |
  "_inProgress" |
  "_scheduled" |
  "_sent" |
  "_toPrint";

export type CampaignCampaignEmailStatus =
  "_execute" |
  "_inProgress" |
  "_notStarted" |
  "_sent";

export type PromotionCodeUseType =
  "_multipleUses" |
  "_singleUse";

export type CampaignChannelEventType =
  "_directMail" |
  "_email" |
  "_integration" |
  "_other";

export type CampaignResponseResponse =
  "_bounced" |
  "_clickedThru" |
  "_purchased" |
  "_received" |
  "_responded" |
  "_sent" |
  "_subscribed" |
  "_unsubscribed";

export type CampaignCampaignEventType =
  "_default" |
  "_directMail" |
  "_email" |
  "_integration" |
  "_leadNurturingEmail" |
  "_other";

export type CampaignCampaignDirectMailStatus =
  "_completed" |
  "_execute" |
  "_inProgress" |
  "_notStarted";

export type CampaignResponse =
  "_clickedThrough" |
  "_failedDeliveryFailure" |
  "_failedInvalidAddress" |
  "_failedOther" |
  "_failedSpam" |
  "_failedTemplateError" |
  "_failedUnexpectedError" |
  "_invalidSenderAddress" |
  "_mailboxDisabled" |
  "_mailboxIsFull" |
  "_mailboxNotAcceptingMessages" |
  "_mailProtocolIssues" |
  "_mediaError" |
  "_messageExceedsSizeLengthLimits" |
  "_networkServerIssues" |
  "_opened" |
  "_purchased" |
  "_queued" |
  "_received" |
  "_responded" |
  "_securityIssues" |
  "_sent" |
  "_skippedDueToPreviousHardBounce" |
  "_subscribed" |
  "_tooManyRecipients" |
  "_unsubscribed" |
  "_unsubscribedByFeedbackLoop";

export type PromotionCodeApplyDiscountTo =
  "_allSales" |
  "_firstSaleOnly";

export type CampaignResponseCategory =
  "_bounced" |
  "_clickedThrough" |
  "_failed" |
  "_purchased" |
  "_queued" |
  "_received" |
  "_responded" |
  "_sent" |
  "_subscribed" |
  "_unsubscribed";

export type CampaignCampaignEventStatus =
  "_completed" |
  "_execute" |
  "_inProgress" |
  "_notStarted";
