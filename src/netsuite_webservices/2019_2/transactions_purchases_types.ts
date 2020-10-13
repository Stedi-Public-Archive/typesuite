export type VendorReturnAuthorizationOrderStatus =
  | "_cancelled"
  | "_closed"
  | "_credited"
  | "_partiallyReturned"
  | "_pendingApproval"
  | "_pendingCredit"
  | "_pendingCreditPartiallyReturned"
  | "_pendingReturn"
  | "_undefined";

export type PurchaseOrderOrderStatus =
  | "_closed"
  | "_fullyBilled"
  | "_partiallyReceived"
  | "_pendingBillingPartiallyReceived"
  | "_pendingBilling"
  | "_pendingReceipt"
  | "_pendingSupervisorApproval"
  | "_rejectedBySupervisor";

export type InboundShipmentShipmentStatus =
  | "_closed"
  | "_inTransit"
  | "_partiallyReceived"
  | "_received"
  | "_toBeShipped";

export type InboundShipmentLandedCostAllocationMethod =
  | "_quantity"
  | "_value"
  | "_weight";
