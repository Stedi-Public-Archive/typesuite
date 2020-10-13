export type ItemFulfillmentTermsOfSaleFedEx =
  | "_cfr"
  | "_cif"
  | "_cip"
  | "_cpt"
  | "_dap"
  | "_dat"
  | "_ddp"
  | "_ddu"
  | "_exw"
  | "_fca"
  | "_fob";

export type ItemFulfillmentPackageFedExCodFreightTypeFedEx =
  | "_cODCharge"
  | "_noneSelected"
  | "_orderChargeNet"
  | "_orderChargeTotal"
  | "_shippingCharge"
  | "_totalCharge";

export type ItemFulfillmentAncillaryEndorsementFedEx =
  | "_addressCorrection"
  | "_carrierLeaveIfNoResponse"
  | "_changeService"
  | "_forwardingService"
  | "_returnService";

export type TransactionChargeType =
  | "_concession"
  | "_fixedDate"
  | "_fixedUsage"
  | "_milestone"
  | "_oneTime"
  | "_penalty"
  | "_projectProgress"
  | "_recurringService"
  | "_timeBased"
  | "_variableUsage";

export type SalesOrderHandlingMode =
  | "_process"
  | "_recordExternalEvent"
  | "_saveOnly";

export type ItemFulfillmentPackageUpsPackagingUps =
  | "_upsExpressBox"
  | "_upsLetter"
  | "_upsPak"
  | "_upsTube"
  | "_yourPackaging";

export type AccountingTransactionRevenueStatus =
  | "_completed"
  | "_inProgress"
  | "_onRevCommitment"
  | "_pending";

export type ItemFulfillmentThirdPartyTypeFedEx =
  | "_billRecipient"
  | "_billThirdParty"
  | "_noneSelected";

export type TransactionType =
  | "_assemblyBuild"
  | "_assemblyUnbuild"
  | "_binTransfer"
  | "_binWorksheet"
  | "_cashRefund"
  | "_cashSale"
  | "_check"
  | "_creditMemo"
  | "_custom"
  | "_customPurchase"
  | "_customSale"
  | "_customerDeposit"
  | "_customerPayment"
  | "_customerRefund"
  | "_deposit"
  | "_depositApplication"
  | "_estimate"
  | "_expenseReport"
  | "_inboundShipment"
  | "_inventoryAdjustment"
  | "_inventoryCostRevaluation"
  | "_inventoryTransfer"
  | "_invoice"
  | "_itemFulfillment"
  | "_itemReceipt"
  | "_journal"
  | "_opportunity"
  | "_paycheck"
  | "_paycheckJournal"
  | "_periodEndJournal"
  | "_purchaseOrder"
  | "_requisition"
  | "_returnAuthorization"
  | "_salesOrder"
  | "_transferOrder"
  | "_vendorBill"
  | "_vendorCredit"
  | "_vendorPayment"
  | "_vendorReturnAuthorization"
  | "_workOrder"
  | "_workOrderClose"
  | "_workOrderCompletion"
  | "_workOrderIssue";

export type CashSalePaymentOperation =
  | "_authorization"
  | "_capture"
  | "_sale"
  | "_refund"
  | "_credit"
  | "_refresh"
  | "_void";

export type ItemFulfillmentPackageFedExDeliveryConfFedEx = "_signatureRequired";

export type TransactionPaymentEventHoldReason =
  | "_amountExceedsMaximumAllowedAmount"
  | "_authorizationDecline"
  | "_cardExpired"
  | "_cardInvalid"
  | "_confirmationOfTheOperationIsPending"
  | "_externalFraudRejection"
  | "_externalFraudReview"
  | "_failedToPrimeDevice"
  | "_fatalError"
  | "_forwardedToPayerAuthentication"
  | "_forwardRequested"
  | "_gatewayAsynchronousNotification"
  | "_gatewayError"
  | "_generalHold"
  | "_generalReject"
  | "_operationWasSuccessful"
  | "_operationWasTerminated"
  | "_overridenBy"
  | "_partnerDecline"
  | "_paymentDeviceWasPrimed"
  | "_paymentOperationWasCanceled"
  | "_systemError"
  | "_verbalAuthorizationRequested"
  | "_verificationRejection"
  | "_verificationRequired";

export type SalesOrderItemCreatePo = "_dropShipment" | "_specialOrder";

export type TransactionApprovalStatus =
  | "_approved"
  | "_open"
  | "_pendingApproval"
  | "_rejected";

export type TransactionPaymentEventResult =
  | "_accept"
  | "_holdOverride"
  | "_paymentHold"
  | "_pending"
  | "_reject";

export type ItemFulfillmentAccessibilityTypeFedEx =
  | "_accessible"
  | "_inaccessible";

export type CashSaleHandlingMode =
  | "_process"
  | "_recordExternalEvent"
  | "_saveOnly";

export type ItemFulfillmentPackageUpsDeliveryConfUps =
  | "_noneSelected"
  | "_adultSignatureRequired"
  | "_deliveryConfirmation"
  | "_signatureRequired";

export type ItemFulfillmentPackageUspsPackagingUsps =
  | "_parcel"
  | "_flatRateBox"
  | "_flatRateEnvelope"
  | "_smallFlatRateBox"
  | "_mediumFlatRateBox"
  | "_largeFlatRateBox"
  | "_irregularPackage"
  | "_largePackage"
  | "_oversizedPackage";

export type ForecastType =
  | "_omitted"
  | "_worstCase"
  | "_mostLikely"
  | "_upside";

export type TransactionLineType =
  | "_adjustedQuantity"
  | "_advanceToApplyAmount"
  | "_billExchangeRateVariance"
  | "_billPriceVariance"
  | "_billQuantityVariance"
  | "_countQuantity"
  | "_dropshipExpense"
  | "_gainLoss"
  | "_inTransit"
  | "_item"
  | "_materialOverhead"
  | "_nonReimbursuableExpenseOffset"
  | "_nonReimbursuableExpenseOriginal"
  | "_ownershipTransfer"
  | "_personalExpensesNettingLine"
  | "_personalExpensesTheExpenseLine"
  | "_pickingLine"
  | "_productionPriceVariance"
  | "_productionQuantityVariance"
  | "_purchasePriceVariance"
  | "_receiving"
  | "_routingItem"
  | "_routingWorkInProcess"
  | "_scrap"
  | "_shipping"
  | "_snapshotQuantity"
  | "_stagingLine"
  | "_totalBillVariance"
  | "_unbuildVariance"
  | "_workInProcess"
  | "_workInProcessVariance";

export type ItemFulfillmentPackageFedExPackagingFedEx =
  | "_fedExBox"
  | "_fedEx10kgBox"
  | "_fedEx25kgBox"
  | "_fedExEnvelope"
  | "_fedExPak"
  | "_fedExTube"
  | "_yourPackaging";

export type SalesOrderPaymentOperation =
  | "_authorization"
  | "_capture"
  | "_sale"
  | "_refund"
  | "_credit"
  | "_refresh"
  | "_void";

export type AccountingTransactionRevCommitStatus =
  | "_committed"
  | "_partiallyCommitted"
  | "_pendingCommitment";

export type ItemFulfillmentHomeDeliveryTypeFedEx =
  | "_appointment"
  | "_dateCertain"
  | "_evening";

export type ItemFulfillmentPackageFedExPriorityAlertTypeFedEx =
  | "_fedexPriorityAlert"
  | "_fedexPriorityAlertPlus"
  | "_noneSelected";

export type ItemFulfillmentThirdPartyTypeUps =
  | "_consigneeBilling"
  | "_noneSelected"
  | "_thirdPartyBilling";

export type ItemFulfillmentPackageFedExSignatureOptionsFedEx =
  | "_adult"
  | "_direct"
  | "_indirect";

export type ItemFulfillmentLicenseExceptionUps =
  | "_agr"
  | "_apr"
  | "_avs"
  | "_bag"
  | "_civ"
  | "_ctp"
  | "_enc"
  | "_gbs"
  | "_gft"
  | "_gov"
  | "_kmi"
  | "_lvs"
  | "_nlr"
  | "_rpl"
  | "_tmp"
  | "_tspa"
  | "_tsr"
  | "_tsu";

export type ItemFulfillmentExportTypeUps =
  | "_domesticExports"
  | "_foreignExports"
  | "_foreignMilitarySales";

export type ItemFulfillmentB13AFilingOptionFedEx =
  | "_filedElectronically"
  | "_manuallyAttached"
  | "_notRequired"
  | "_summaryReporting";

export type ItemFulfillmentPackageUspsDeliveryConfUsps =
  | "_deliveryConfirmation"
  | "_signatureConfirmation";

export type ItemFulfillmentPackageFedExCodMethodFedEx =
  | "_any"
  | "_cash"
  | "_guaranteedFunds";

export type OpportunityStatus =
  | "_closedLost"
  | "_closedWon"
  | "_inProgress"
  | "_issuedEstimate";

export type TransactionLinkType =
  | "_advancedCostAmortization"
  | "_advancedExpenseAmortization"
  | "_authorizationDeposit"
  | "_blcgaJeFullfillment"
  | "_captureAuthorization"
  | "_closedPeriodFxVariance"
  | "_closeWorkOrder"
  | "_cogsLink"
  | "_collectTegata"
  | "_commission"
  | "_contractCostDeferral"
  | "_contractCostDeferralReversal"
  | "_deferredRevenueReallocation"
  | "_depositApplication"
  | "_depositRefundCheck"
  | "_discountTegata"
  | "_dropShipment"
  | "_endorseTegata"
  | "_estimateInvoicing"
  | "_fulfillmentRequestFulfillment"
  | "_glImpactAdjustment"
  | "_intercompanyAdjustment"
  | "_inTransitPayment"
  | "_inventoryCountAdjustment"
  | "_kitShipment"
  | "_landedCost"
  | "_linkedReturnCost"
  | "_opportunityClose"
  | "_opportunityEstimate"
  | "_orderBillInvoice"
  | "_orderFulfillmentRequest"
  | "_orderPickingPacking"
  | "_ownershipTransferItemReceipt"
  | "_payment"
  | "_paymentRefund"
  | "_payTegata"
  | "_poToOwnershipTransfer"
  | "_prepaymentApplication"
  | "_purchaseContractOrder"
  | "_purchaseOrderPrepayment"
  | "_purchaseOrderRequisition"
  | "_purchaseOrderToBlanket"
  | "_purchaseReturn"
  | "_receiptBill"
  | "_receiptFulfillment"
  | "_reimbursement"
  | "_revalueWorkOrder"
  | "_revenueAmortizatonRecognition"
  | "_revenueArrangement"
  | "_revenueCommitted"
  | "_rfqToVendorRfq"
  | "_saleReturn"
  | "_salesOrderAuthorization"
  | "_salesOrderDegross"
  | "_salesOrderDeposit"
  | "_salesOrderRevenueRevaluation"
  | "_sourceOfRevenueContract"
  | "_specialOrder"
  | "_systemJournal"
  | "_transferOrderFulfillmentReceipt"
  | "_vendorBillVariance"
  | "_vendorRfqToPurchaseContract"
  | "_waveOrder"
  | "_waveShipment"
  | "_wipBuild"
  | "_workOrderBuild";

export type ItemFulfillmentMethodOfTransportUps =
  | "_air"
  | "_airContainerized"
  | "_auto"
  | "_fixedTransportInstallations"
  | "_mail"
  | "_passengerHandcarried"
  | "_pedestrian"
  | "_rail"
  | "_railContainerized"
  | "_roadOther"
  | "_seaBarge"
  | "_seaContainerized"
  | "_seaNoncontainerized"
  | "_truck"
  | "_truckContainerized";

export type ItemFulfillmentShipStatus = "_packed" | "_picked" | "_shipped";

export type TransactionStatus =
  | "_billCancelled"
  | "_billOpen"
  | "_billPaidInFull"
  | "_billPaymentApproved"
  | "_billPaymentConfirmed"
  | "_billPaymentDeclined"
  | "_billPaymentInTransit"
  | "_billPaymentOnlineBillPayPendingAccountingApproval"
  | "_billPaymentPendingApproval"
  | "_billPaymentRejected"
  | "_billPaymentVoided"
  | "_billPendingApproval"
  | "_billRejected"
  | "_cashSaleDeposited"
  | "_cashSaleNotDeposited"
  | "_cashSaleUnapprovedPayment"
  | "_checkOnlineBillPayPendingAccountingApproval"
  | "_checkVoided"
  | "_commissionOverpaid"
  | "_commissionPaidInFull"
  | "_commissionPendingAccountingApproval"
  | "_commissionPendingPayment"
  | "_commissionRejectedByAccounting"
  | "_creditMemoFullyApplied"
  | "_creditMemoOpen"
  | "_creditMemoVoided"
  | "_customerDepositDeposited"
  | "_customerDepositFullyApplied"
  | "_customerDepositNotDeposited"
  | "_customerDepositUnapprovedPayment"
  | "_customerRefundVoided"
  | "_estimateClosed"
  | "_estimateExpired"
  | "_estimateOpen"
  | "_estimateProcessed"
  | "_estimateVoided"
  | "_expenseReportApprovedByAccounting"
  | "_expenseReportApprovedOverriddenByAccounting"
  | "_expenseReportInProgress"
  | "_expenseReportPaidInFull"
  | "_expenseReportPaymentInTransit"
  | "_expenseReportPendingAccountingApproval"
  | "_expenseReportPendingSupervisorApproval"
  | "_expenseReportRejectedByAccounting"
  | "_expenseReportRejectedBySupervisor"
  | "_expenseReportRejectedOverriddenByAccounting"
  | "_expenseReportVoided"
  | "_invoiceOpen"
  | "_invoicePaidInFull"
  | "_invoicePendingApproval"
  | "_invoiceRejected"
  | "_invoiceVoided"
  | "_itemFulfillmentPacked"
  | "_itemFulfillmentPicked"
  | "_itemFulfillmentShipped"
  | "_journalApprovedForPosting"
  | "_journalPendingApproval"
  | "_journalRejected"
  | "_opportunityClosedLost"
  | "_opportunityClosedWon"
  | "_opportunityInProgress"
  | "_opportunityIssuedEstimate"
  | "_paycheckCommitted"
  | "_paycheckCreated"
  | "_paycheckError"
  | "_paycheckPendingCommitment"
  | "_paycheckPendingTaxCalculation"
  | "_paycheckPreview"
  | "_paycheckReversed"
  | "_paymentDeposited"
  | "_paymentNotDeposited"
  | "_paymentUnapprovedPayment"
  | "_payrollLiabilityCheckVoided"
  | "_periodEndJournalApprovedForPosting"
  | "_periodEndJournalPendingApproval"
  | "_periodEndJournalRejected"
  | "_purchaseOrderClosed"
  | "_purchaseOrderFullyBilled"
  | "_purchaseOrderPartiallyReceived"
  | "_purchaseOrderPendingBill"
  | "_purchaseOrderPendingBillingPartiallyReceived"
  | "_purchaseOrderPendingReceipt"
  | "_purchaseOrderPendingSupervisorApproval"
  | "_purchaseOrderPlanned"
  | "_purchaseOrderRejectedBySupervisor"
  | "_requisitionCancelled"
  | "_requisitionClosed"
  | "_requisitionFullyOrdered"
  | "_requisitionFullyReceived"
  | "_requisitionPartiallyOrdered"
  | "_requisitionPartiallyReceived"
  | "_requisitionPendingApproval"
  | "_requisitionPendingOrder"
  | "_requisitionRejected"
  | "_returnAuthorizationCancelled"
  | "_returnAuthorizationClosed"
  | "_returnAuthorizationPartiallyReceived"
  | "_returnAuthorizationPendingApproval"
  | "_returnAuthorizationPendingReceipt"
  | "_returnAuthorizationPendingRefund"
  | "_returnAuthorizationPendingRefundPartiallyReceived"
  | "_returnAuthorizationRefunded"
  | "_salesOrderBilled"
  | "_salesOrderCancelled"
  | "_salesOrderClosed"
  | "_salesOrderPartiallyFulfilled"
  | "_salesOrderPendingApproval"
  | "_salesOrderPendingBilling"
  | "_salesOrderPendingBillingPartiallyFulfilled"
  | "_salesOrderPendingFulfillment"
  | "_salesTaxPaymentOnlineBillPayPendingAccountingApproval"
  | "_salesTaxPaymentVoided"
  | "_statementChargeOpen"
  | "_statementChargePaidInFull"
  | "_taxLiabilityChequeVoided"
  | "_tegataPayableEndorsed"
  | "_tegataPayableIssued"
  | "_tegataPayablePaid"
  | "_tegataReceivablesCollected"
  | "_tegataReceivablesDiscounted"
  | "_tegataReceivablesEndorsed"
  | "_tegataReceivablesHolding"
  | "_tegataReceivablesVoided"
  | "_transferOrderClosed"
  | "_transferOrderPartiallyFulfilled"
  | "_transferOrderPendingApproval"
  | "_transferOrderPendingFulfillment"
  | "_transferOrderPendingReceipt"
  | "_transferOrderPendingReceiptPartiallyFulfilled"
  | "_transferOrderReceived"
  | "_transferOrderRejected"
  | "_vendorReturnAuthorizationCancelled"
  | "_vendorReturnAuthorizationClosed"
  | "_vendorReturnAuthorizationCredited"
  | "_vendorReturnAuthorizationPartiallyReturned"
  | "_vendorReturnAuthorizationPendingApproval"
  | "_vendorReturnAuthorizationPendingCredit"
  | "_vendorReturnAuthorizationPendingCreditPartiallyReturned"
  | "_vendorReturnAuthorizationPendingReturn"
  | "_workOrderBuilt"
  | "_workOrderCancelled"
  | "_workOrderClosed"
  | "_workOrderPartiallyBuilt"
  | "_workOrderPendingBuild"
  | "_workOrderPlanned";

export type ItemFulfillmentHazmatTypeFedEx = "_dangerousGoods" | "_hazmat";

export type SalesOrderItemCommitInventory =
  | "_availableQty"
  | "_completeQty"
  | "_doNotCommit";

export type ItemFulfillmentPackageUpsCodMethodUps =
  | "_cashiersCheckMoneyOrder"
  | "_checkCashiersCheckMoneyOrder";

export type SalesOrderItemFulfillmentChoice = "_ship" | "_storePickup";

export type SalesOrderOrderStatus =
  | "_pendingApproval"
  | "_pendingFulfillment"
  | "_cancelled"
  | "_partiallyFulfilled"
  | "_pendingBillingPartFulfilled"
  | "_pendingBilling"
  | "_fullyBilled"
  | "_closed"
  | "_undefined";

export type ItemFulfillmentPackageFedExAdmPackageTypeFedEx =
  | "_bag"
  | "_barrel"
  | "_basketOrHamper"
  | "_box"
  | "_bucket"
  | "_bundle"
  | "_cage"
  | "_carton"
  | "_case"
  | "_chest"
  | "_container"
  | "_crate"
  | "_cylinder"
  | "_drum"
  | "_envelope"
  | "_package"
  | "_pail"
  | "_pallet"
  | "_parcel"
  | "_pieces"
  | "_reel"
  | "_roll"
  | "_sack"
  | "_shrinkWrapped"
  | "_skid"
  | "_tank"
  | "_toteBin"
  | "_tube"
  | "_unit";

export type TransactionPaymentEventType =
  | "_authorization"
  | "_captureAuthorization"
  | "_credit"
  | "_overrideHold"
  | "_refreshAuthorization"
  | "_refund"
  | "_sale"
  | "_voidAuthorization";
