
export type TransferOrderItemCommitInventory =
  "_availableQty" |
  "_completeQty" |
  "_doNotCommit";

export type WorkOrderOrderStatus =
  "_built" |
  "_cancelled" |
  "_closed" |
  "_inProcess" |
  "_planned" |
  "_released" |
  "_undefined";

export type WorkOrderItemItemCommitInventory =
  "_availableQty" |
  "_completeQty" |
  "_doNotCommit";

export type WorkOrderSchedulingMethod =
  "_backward" |
  "_forward";

export type TransferOrderOrderStatus =
  "_pendingApproval" |
  "_pendingFulfillment" |
  "_rejected" |
  "_partiallyFulfilled" |
  "_pendingReceiptPartFulfilled" |
  "_pendingReceipt" |
  "_received" |
  "_closed" |
  "_undefined";
