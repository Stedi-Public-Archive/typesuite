import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as ListsSupplychainTypes from "./lists_supplychain_types";

export type ManufacturingOperationTaskProps = {
  customForm?: PlatformCore.RecordRef;
  manufacturingWorkCenter?: PlatformCore.RecordRef;
  manufacturingCostTemplate?: PlatformCore.RecordRef;
  title?: string;
  operationSequence?: number;
  workOrder?: PlatformCore.RecordRef;
  order?: PlatformCore.RecordRef;
  status?: ListsSupplychainTypes.ManufacturingOperationTaskStatus;
  message?: string;
  estimatedWork?: number;
  actualWork?: number;
  remainingWork?: number;
  inputQuantity?: number;
  completedQuantity?: number;
  setupTime?: number;
  runRate?: number;
  startDate?: string;
  endDate?: string;
  autoCalculateLag?: boolean;
  machineResources?: number;
  laborResources?: number;
  costDetailList?: ManufacturingCostDetailList;
  predecessorList?: ManufacturingOperationTaskPredecessorList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class ManufacturingOperationTask extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  manufacturingWorkCenter?: PlatformCore.RecordRef;
  manufacturingCostTemplate?: PlatformCore.RecordRef;
  title?: string;
  operationSequence?: number;
  workOrder?: PlatformCore.RecordRef;
  order?: PlatformCore.RecordRef;
  status?: ListsSupplychainTypes.ManufacturingOperationTaskStatus;
  message?: string;
  estimatedWork?: number;
  actualWork?: number;
  remainingWork?: number;
  inputQuantity?: number;
  completedQuantity?: number;
  setupTime?: number;
  runRate?: number;
  startDate?: string;
  endDate?: string;
  autoCalculateLag?: boolean;
  machineResources?: number;
  laborResources?: number;
  costDetailList?: ManufacturingCostDetailList;
  predecessorList?: ManufacturingOperationTaskPredecessorList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: ManufacturingOperationTaskProps) {
    super(props);
    this.customForm = props.customForm;
    this.manufacturingWorkCenter = props.manufacturingWorkCenter;
    this.manufacturingCostTemplate = props.manufacturingCostTemplate;
    this.title = props.title;
    this.operationSequence = props.operationSequence;
    this.workOrder = props.workOrder;
    this.order = props.order;
    this.status = props.status;
    this.message = props.message;
    this.estimatedWork = props.estimatedWork;
    this.actualWork = props.actualWork;
    this.remainingWork = props.remainingWork;
    this.inputQuantity = props.inputQuantity;
    this.completedQuantity = props.completedQuantity;
    this.setupTime = props.setupTime;
    this.runRate = props.runRate;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.autoCalculateLag = props.autoCalculateLag;
    this.machineResources = props.machineResources;
    this.laborResources = props.laborResources;
    this.costDetailList = props.costDetailList;
    this.predecessorList = props.predecessorList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type ManufacturingOperationTaskSearchAdvancedProps = {
  criteria?: ManufacturingOperationTaskSearch;
  columns?: ManufacturingOperationTaskSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class ManufacturingOperationTaskSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ManufacturingOperationTaskSearch;
  columns?: ManufacturingOperationTaskSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ManufacturingOperationTaskSearchAdvancedProps) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type ManufacturingCostTemplateSearchAdvancedProps = {
  criteria?: ManufacturingCostTemplateSearch;
  columns?: ManufacturingCostTemplateSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class ManufacturingCostTemplateSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ManufacturingCostTemplateSearch;
  columns?: ManufacturingCostTemplateSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ManufacturingCostTemplateSearchAdvancedProps) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type ManufacturingCostDetailListProps = {
  manufacturingCostDetail?: ManufacturingCostDetail[];
  replaceAll?: boolean;
};

export class ManufacturingCostDetailList {
  manufacturingCostDetail?: ManufacturingCostDetail[];
  replaceAll?: boolean;
  constructor(props: ManufacturingCostDetailListProps) {
    this.manufacturingCostDetail = props.manufacturingCostDetail;
    this.replaceAll = props.replaceAll;
  }
}

export type ManufacturingRoutingProps = {
  customForm?: PlatformCore.RecordRef;
  billOfMaterials?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  locationList?: PlatformCore.RecordRefList;
  name?: string;
  memo?: string;
  isDefault?: boolean;
  isInactive?: boolean;
  autoCalculateLag?: boolean;
  routingStepList?: ManufacturingRoutingRoutingStepList;
  routingComponentList?: ManufacturingRoutingRoutingComponentList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class ManufacturingRouting extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  billOfMaterials?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  locationList?: PlatformCore.RecordRefList;
  name?: string;
  memo?: string;
  isDefault?: boolean;
  isInactive?: boolean;
  autoCalculateLag?: boolean;
  routingStepList?: ManufacturingRoutingRoutingStepList;
  routingComponentList?: ManufacturingRoutingRoutingComponentList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: ManufacturingRoutingProps) {
    super(props);
    this.customForm = props.customForm;
    this.billOfMaterials = props.billOfMaterials;
    this.subsidiary = props.subsidiary;
    this.item = props.item;
    this.locationList = props.locationList;
    this.name = props.name;
    this.memo = props.memo;
    this.isDefault = props.isDefault;
    this.isInactive = props.isInactive;
    this.autoCalculateLag = props.autoCalculateLag;
    this.routingStepList = props.routingStepList;
    this.routingComponentList = props.routingComponentList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type ManufacturingOperationTaskPredecessorListProps = {
  manufacturingOperationTaskPredecessor?: ManufacturingOperationTaskPredecessor[];
  replaceAll?: boolean;
};

export class ManufacturingOperationTaskPredecessorList {
  manufacturingOperationTaskPredecessor?: ManufacturingOperationTaskPredecessor[];
  replaceAll?: boolean;
  constructor(props: ManufacturingOperationTaskPredecessorListProps) {
    this.manufacturingOperationTaskPredecessor =
      props.manufacturingOperationTaskPredecessor;
    this.replaceAll = props.replaceAll;
  }
}

export type ManufacturingOperationTaskSearchRowProps = {
  basic?: PlatformCommon.ManufacturingOperationTaskSearchRowBasic;
  predecessorJoin?: PlatformCommon.ManufacturingOperationTaskSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  workOrderJoin?: PlatformCommon.TransactionSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class ManufacturingOperationTaskSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ManufacturingOperationTaskSearchRowBasic;
  predecessorJoin?: PlatformCommon.ManufacturingOperationTaskSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  workOrderJoin?: PlatformCommon.TransactionSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: ManufacturingOperationTaskSearchRowProps) {
    super();
    this.basic = props.basic;
    this.predecessorJoin = props.predecessorJoin;
    this.userJoin = props.userJoin;
    this.workOrderJoin = props.workOrderJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type ManufacturingCostTemplateSearchProps = {
  basic?: PlatformCommon.ManufacturingCostTemplateSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class ManufacturingCostTemplateSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ManufacturingCostTemplateSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: ManufacturingCostTemplateSearchProps) {
    super();
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type ManufacturingRoutingRoutingStepListProps = {
  manufacturingRoutingRoutingStep?: ManufacturingRoutingRoutingStep[];
  replaceAll?: boolean;
};

export class ManufacturingRoutingRoutingStepList {
  manufacturingRoutingRoutingStep?: ManufacturingRoutingRoutingStep[];
  replaceAll?: boolean;
  constructor(props: ManufacturingRoutingRoutingStepListProps) {
    this.manufacturingRoutingRoutingStep =
      props.manufacturingRoutingRoutingStep;
    this.replaceAll = props.replaceAll;
  }
}

export type ManufacturingRoutingRoutingStepProps = {
  operationSequence?: number;
  operationName?: string;
  manufacturingWorkCenter?: PlatformCore.RecordRef;
  machineResources?: number;
  laborResources?: number;
  manufacturingCostTemplate?: PlatformCore.RecordRef;
  setupTime?: number;
  runRate?: number;
  lagType?: ListsSupplychainTypes.ManufacturingLagType;
  lagAmount?: number;
  lagUnits?: string;
};

export class ManufacturingRoutingRoutingStep {
  operationSequence?: number;
  operationName?: string;
  manufacturingWorkCenter?: PlatformCore.RecordRef;
  machineResources?: number;
  laborResources?: number;
  manufacturingCostTemplate?: PlatformCore.RecordRef;
  setupTime?: number;
  runRate?: number;
  lagType?: ListsSupplychainTypes.ManufacturingLagType;
  lagAmount?: number;
  lagUnits?: string;
  constructor(props: ManufacturingRoutingRoutingStepProps) {
    this.operationSequence = props.operationSequence;
    this.operationName = props.operationName;
    this.manufacturingWorkCenter = props.manufacturingWorkCenter;
    this.machineResources = props.machineResources;
    this.laborResources = props.laborResources;
    this.manufacturingCostTemplate = props.manufacturingCostTemplate;
    this.setupTime = props.setupTime;
    this.runRate = props.runRate;
    this.lagType = props.lagType;
    this.lagAmount = props.lagAmount;
    this.lagUnits = props.lagUnits;
  }
}

export type ManufacturingRoutingRoutingComponentProps = {
  itemName?: string;
  revision?: string;
  description?: string;
  yield?: number;
  bomQuantity?: number;
  quantity?: number;
  units?: string;
  operationDisplayText?: PlatformCore.RecordRef;
  operationSequenceNumber?: number;
  component?: string;
  item?: string;
};

export class ManufacturingRoutingRoutingComponent {
  itemName?: string;
  revision?: string;
  description?: string;
  yield?: number;
  bomQuantity?: number;
  quantity?: number;
  units?: string;
  operationDisplayText?: PlatformCore.RecordRef;
  operationSequenceNumber?: number;
  component?: string;
  item?: string;
  constructor(props: ManufacturingRoutingRoutingComponentProps) {
    this.itemName = props.itemName;
    this.revision = props.revision;
    this.description = props.description;
    this.yield = props.yield;
    this.bomQuantity = props.bomQuantity;
    this.quantity = props.quantity;
    this.units = props.units;
    this.operationDisplayText = props.operationDisplayText;
    this.operationSequenceNumber = props.operationSequenceNumber;
    this.component = props.component;
    this.item = props.item;
  }
}

export type ManufacturingRoutingSearchAdvancedProps = {
  criteria?: ManufacturingRoutingSearch;
  columns?: ManufacturingRoutingSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class ManufacturingRoutingSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ManufacturingRoutingSearch;
  columns?: ManufacturingRoutingSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ManufacturingRoutingSearchAdvancedProps) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type ManufacturingOperationTaskSearchProps = {
  basic?: PlatformCommon.ManufacturingOperationTaskSearchBasic;
  predecessorJoin?: PlatformCommon.ManufacturingOperationTaskSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  workOrderJoin?: PlatformCommon.TransactionSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class ManufacturingOperationTaskSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ManufacturingOperationTaskSearchBasic;
  predecessorJoin?: PlatformCommon.ManufacturingOperationTaskSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  workOrderJoin?: PlatformCommon.TransactionSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: ManufacturingOperationTaskSearchProps) {
    super();
    this.basic = props.basic;
    this.predecessorJoin = props.predecessorJoin;
    this.userJoin = props.userJoin;
    this.workOrderJoin = props.workOrderJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type ManufacturingRoutingRoutingComponentListProps = {
  manufacturingRoutingRoutingComponent?: ManufacturingRoutingRoutingComponent[];
  replaceAll?: boolean;
};

export class ManufacturingRoutingRoutingComponentList {
  manufacturingRoutingRoutingComponent?: ManufacturingRoutingRoutingComponent[];
  replaceAll?: boolean;
  constructor(props: ManufacturingRoutingRoutingComponentListProps) {
    this.manufacturingRoutingRoutingComponent =
      props.manufacturingRoutingRoutingComponent;
    this.replaceAll = props.replaceAll;
  }
}

export type ManufacturingCostDetailProps = {
  costCategory?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  fixedRate?: number;
  runRate?: number;
};

export class ManufacturingCostDetail {
  costCategory?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  fixedRate?: number;
  runRate?: number;
  constructor(props: ManufacturingCostDetailProps) {
    this.costCategory = props.costCategory;
    this.item = props.item;
    this.fixedRate = props.fixedRate;
    this.runRate = props.runRate;
  }
}

export type ManufacturingOperationTaskPredecessorProps = {
  task?: PlatformCore.RecordRef;
  type?: ListsSupplychainTypes.ManufacturingOperationTaskPredecessorPredecessorType;
  startDate?: string;
  endDate?: string;
  lagType?: ListsSupplychainTypes.ManufacturingLagType;
  lagAmount?: number;
  lagUnits?: string;
};

export class ManufacturingOperationTaskPredecessor {
  task?: PlatformCore.RecordRef;
  type?: ListsSupplychainTypes.ManufacturingOperationTaskPredecessorPredecessorType;
  startDate?: string;
  endDate?: string;
  lagType?: ListsSupplychainTypes.ManufacturingLagType;
  lagAmount?: number;
  lagUnits?: string;
  constructor(props: ManufacturingOperationTaskPredecessorProps) {
    this.task = props.task;
    this.type = props.type;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.lagType = props.lagType;
    this.lagAmount = props.lagAmount;
    this.lagUnits = props.lagUnits;
  }
}

export type ManufacturingRoutingSearchRowProps = {
  basic?: PlatformCommon.ManufacturingRoutingSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  manufacturingCostTemplateJoin?: PlatformCommon.ManufacturingCostTemplateSearchRowBasic;
  manufacturingWorkCenterJoin?: PlatformCommon.EntityGroupSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class ManufacturingRoutingSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ManufacturingRoutingSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  manufacturingCostTemplateJoin?: PlatformCommon.ManufacturingCostTemplateSearchRowBasic;
  manufacturingWorkCenterJoin?: PlatformCommon.EntityGroupSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: ManufacturingRoutingSearchRowProps) {
    super();
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.locationJoin = props.locationJoin;
    this.manufacturingCostTemplateJoin = props.manufacturingCostTemplateJoin;
    this.manufacturingWorkCenterJoin = props.manufacturingWorkCenterJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type ManufacturingRoutingSearchProps = {
  basic?: PlatformCommon.ManufacturingRoutingSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  manufacturingCostTemplateJoin?: PlatformCommon.ManufacturingCostTemplateSearchBasic;
  manufacturingWorkCenterJoin?: PlatformCommon.EntityGroupSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class ManufacturingRoutingSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ManufacturingRoutingSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  manufacturingCostTemplateJoin?: PlatformCommon.ManufacturingCostTemplateSearchBasic;
  manufacturingWorkCenterJoin?: PlatformCommon.EntityGroupSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: ManufacturingRoutingSearchProps) {
    super();
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.locationJoin = props.locationJoin;
    this.manufacturingCostTemplateJoin = props.manufacturingCostTemplateJoin;
    this.manufacturingWorkCenterJoin = props.manufacturingWorkCenterJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type ManufacturingCostTemplateSearchRowProps = {
  basic?: PlatformCommon.ManufacturingCostTemplateSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class ManufacturingCostTemplateSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ManufacturingCostTemplateSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: ManufacturingCostTemplateSearchRowProps) {
    super();
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type ManufacturingCostTemplateProps = {
  customForm?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  name?: string;
  memo?: string;
  isInactive?: boolean;
  costDetailList?: ManufacturingCostDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
} & PlatformCore.RecordProps;

export class ManufacturingCostTemplate extends PlatformCore.Record {
  customForm?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  name?: string;
  memo?: string;
  isInactive?: boolean;
  costDetailList?: ManufacturingCostDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: ManufacturingCostTemplateProps) {
    super(props);
    this.customForm = props.customForm;
    this.subsidiary = props.subsidiary;
    this.name = props.name;
    this.memo = props.memo;
    this.isInactive = props.isInactive;
    this.costDetailList = props.costDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}
