export type ManufacturingOperationTaskPredecessorPredecessorType =
  | "_finishToFinish"
  | "_finishToStart"
  | "_startToFinish"
  | "_startToStart";

export type ManufacturingLagType =
  | "_quantity"
  | "_quantityPercentage"
  | "_time"
  | "_timePercentage";

export type ManufacturingOperationTaskStatus =
  | "_completed"
  | "_inProgress"
  | "_notStarted";
