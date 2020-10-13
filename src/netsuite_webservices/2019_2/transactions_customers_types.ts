export type ReturnAuthorizationOrderStatus =
  | "_pendingApproval"
  | "_pendingReceipt";

export type ChargeStage = "_hold" | "_nonBillable" | "_processed" | "_ready";

export type CashRefundHandlingMode =
  | "_process"
  | "_recordExternalEvent"
  | "_saveOnly";

export type CustomerPaymentPaymentOperation =
  | "_authorization"
  | "_capture"
  | "_sale"
  | "_refund"
  | "_credit"
  | "_refresh"
  | "_void";

export type CustomerDepositPaymentOperation =
  | "_authorization"
  | "_capture"
  | "_sale"
  | "_refund"
  | "_credit"
  | "_refresh"
  | "_void";

export type ChargeUse = "_actual" | "_forecast";

export type CustomerRefundHandlingMode =
  | "_process"
  | "_recordExternalEvent"
  | "_saveOnly";

export type CustomerDepositHandlingMode =
  | "_process"
  | "_recordExternalEvent"
  | "_saveOnly";

export type CustomerPaymentHandlingMode =
  | "_process"
  | "_recordExternalEvent"
  | "_saveOnly";

export type CashRefundPaymentOperation =
  | "_authorization"
  | "_capture"
  | "_sale"
  | "_refund"
  | "_credit"
  | "_refresh"
  | "_void";

export type CustomerRefundPaymentOperation =
  | "_authorization"
  | "_capture"
  | "_sale"
  | "_refund"
  | "_credit"
  | "_refresh"
  | "_void";
