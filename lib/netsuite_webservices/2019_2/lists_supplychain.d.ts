import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as ListsSupplychainTypes from "./lists_supplychain_types";
import { SoapMappingBase } from "../../soap-types";
export declare type ManufacturingOperationTaskProps = {
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
export declare class ManufacturingOperationTask extends PlatformCore.Record {
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
    constructor(props: ManufacturingOperationTaskProps);
}
export declare type ManufacturingOperationTaskSearchAdvancedProps = {
    criteria?: ManufacturingOperationTaskSearch;
    columns?: ManufacturingOperationTaskSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class ManufacturingOperationTaskSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: ManufacturingOperationTaskSearch;
    columns?: ManufacturingOperationTaskSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: ManufacturingOperationTaskSearchAdvancedProps);
}
export declare type ManufacturingCostTemplateSearchAdvancedProps = {
    criteria?: ManufacturingCostTemplateSearch;
    columns?: ManufacturingCostTemplateSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class ManufacturingCostTemplateSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: ManufacturingCostTemplateSearch;
    columns?: ManufacturingCostTemplateSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: ManufacturingCostTemplateSearchAdvancedProps);
}
export declare type ManufacturingCostDetailListProps = {
    manufacturingCostDetail?: ManufacturingCostDetail[];
    replaceAll?: boolean;
};
export declare class ManufacturingCostDetailList extends SoapMappingBase {
    manufacturingCostDetail?: ManufacturingCostDetail[];
    replaceAll?: boolean;
    constructor(props: ManufacturingCostDetailListProps);
}
export declare type ManufacturingRoutingProps = {
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
export declare class ManufacturingRouting extends PlatformCore.Record {
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
    constructor(props: ManufacturingRoutingProps);
}
export declare type ManufacturingOperationTaskPredecessorListProps = {
    manufacturingOperationTaskPredecessor?: ManufacturingOperationTaskPredecessor[];
    replaceAll?: boolean;
};
export declare class ManufacturingOperationTaskPredecessorList extends SoapMappingBase {
    manufacturingOperationTaskPredecessor?: ManufacturingOperationTaskPredecessor[];
    replaceAll?: boolean;
    constructor(props: ManufacturingOperationTaskPredecessorListProps);
}
export declare type ManufacturingOperationTaskSearchRowProps = {
    basic?: PlatformCommon.ManufacturingOperationTaskSearchRowBasic;
    predecessorJoin?: PlatformCommon.ManufacturingOperationTaskSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    workOrderJoin?: PlatformCommon.TransactionSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class ManufacturingOperationTaskSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.ManufacturingOperationTaskSearchRowBasic;
    predecessorJoin?: PlatformCommon.ManufacturingOperationTaskSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    workOrderJoin?: PlatformCommon.TransactionSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: ManufacturingOperationTaskSearchRowProps);
}
export declare type ManufacturingCostTemplateSearchProps = {
    basic?: PlatformCommon.ManufacturingCostTemplateSearchBasic;
    itemJoin?: PlatformCommon.ItemSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class ManufacturingCostTemplateSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.ManufacturingCostTemplateSearchBasic;
    itemJoin?: PlatformCommon.ItemSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: ManufacturingCostTemplateSearchProps);
}
export declare type ManufacturingRoutingRoutingStepListProps = {
    manufacturingRoutingRoutingStep?: ManufacturingRoutingRoutingStep[];
    replaceAll?: boolean;
};
export declare class ManufacturingRoutingRoutingStepList extends SoapMappingBase {
    manufacturingRoutingRoutingStep?: ManufacturingRoutingRoutingStep[];
    replaceAll?: boolean;
    constructor(props: ManufacturingRoutingRoutingStepListProps);
}
export declare type ManufacturingRoutingRoutingStepProps = {
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
export declare class ManufacturingRoutingRoutingStep extends SoapMappingBase {
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
    constructor(props: ManufacturingRoutingRoutingStepProps);
}
export declare type ManufacturingRoutingRoutingComponentProps = {
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
export declare class ManufacturingRoutingRoutingComponent extends SoapMappingBase {
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
    constructor(props: ManufacturingRoutingRoutingComponentProps);
}
export declare type ManufacturingRoutingSearchAdvancedProps = {
    criteria?: ManufacturingRoutingSearch;
    columns?: ManufacturingRoutingSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class ManufacturingRoutingSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: ManufacturingRoutingSearch;
    columns?: ManufacturingRoutingSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: ManufacturingRoutingSearchAdvancedProps);
}
export declare type ManufacturingOperationTaskSearchProps = {
    basic?: PlatformCommon.ManufacturingOperationTaskSearchBasic;
    predecessorJoin?: PlatformCommon.ManufacturingOperationTaskSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    workOrderJoin?: PlatformCommon.TransactionSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class ManufacturingOperationTaskSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.ManufacturingOperationTaskSearchBasic;
    predecessorJoin?: PlatformCommon.ManufacturingOperationTaskSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    workOrderJoin?: PlatformCommon.TransactionSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: ManufacturingOperationTaskSearchProps);
}
export declare type ManufacturingRoutingRoutingComponentListProps = {
    manufacturingRoutingRoutingComponent?: ManufacturingRoutingRoutingComponent[];
    replaceAll?: boolean;
};
export declare class ManufacturingRoutingRoutingComponentList extends SoapMappingBase {
    manufacturingRoutingRoutingComponent?: ManufacturingRoutingRoutingComponent[];
    replaceAll?: boolean;
    constructor(props: ManufacturingRoutingRoutingComponentListProps);
}
export declare type ManufacturingCostDetailProps = {
    costCategory?: PlatformCore.RecordRef;
    item?: PlatformCore.RecordRef;
    fixedRate?: number;
    runRate?: number;
};
export declare class ManufacturingCostDetail extends SoapMappingBase {
    costCategory?: PlatformCore.RecordRef;
    item?: PlatformCore.RecordRef;
    fixedRate?: number;
    runRate?: number;
    constructor(props: ManufacturingCostDetailProps);
}
export declare type ManufacturingOperationTaskPredecessorProps = {
    task?: PlatformCore.RecordRef;
    type?: ListsSupplychainTypes.ManufacturingOperationTaskPredecessorPredecessorType;
    startDate?: string;
    endDate?: string;
    lagType?: ListsSupplychainTypes.ManufacturingLagType;
    lagAmount?: number;
    lagUnits?: string;
};
export declare class ManufacturingOperationTaskPredecessor extends SoapMappingBase {
    task?: PlatformCore.RecordRef;
    type?: ListsSupplychainTypes.ManufacturingOperationTaskPredecessorPredecessorType;
    startDate?: string;
    endDate?: string;
    lagType?: ListsSupplychainTypes.ManufacturingLagType;
    lagAmount?: number;
    lagUnits?: string;
    constructor(props: ManufacturingOperationTaskPredecessorProps);
}
export declare type ManufacturingRoutingSearchRowProps = {
    basic?: PlatformCommon.ManufacturingRoutingSearchRowBasic;
    itemJoin?: PlatformCommon.ItemSearchRowBasic;
    locationJoin?: PlatformCommon.LocationSearchRowBasic;
    manufacturingCostTemplateJoin?: PlatformCommon.ManufacturingCostTemplateSearchRowBasic;
    manufacturingWorkCenterJoin?: PlatformCommon.EntityGroupSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class ManufacturingRoutingSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.ManufacturingRoutingSearchRowBasic;
    itemJoin?: PlatformCommon.ItemSearchRowBasic;
    locationJoin?: PlatformCommon.LocationSearchRowBasic;
    manufacturingCostTemplateJoin?: PlatformCommon.ManufacturingCostTemplateSearchRowBasic;
    manufacturingWorkCenterJoin?: PlatformCommon.EntityGroupSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: ManufacturingRoutingSearchRowProps);
}
export declare type ManufacturingRoutingSearchProps = {
    basic?: PlatformCommon.ManufacturingRoutingSearchBasic;
    itemJoin?: PlatformCommon.ItemSearchBasic;
    locationJoin?: PlatformCommon.LocationSearchBasic;
    manufacturingCostTemplateJoin?: PlatformCommon.ManufacturingCostTemplateSearchBasic;
    manufacturingWorkCenterJoin?: PlatformCommon.EntityGroupSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class ManufacturingRoutingSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.ManufacturingRoutingSearchBasic;
    itemJoin?: PlatformCommon.ItemSearchBasic;
    locationJoin?: PlatformCommon.LocationSearchBasic;
    manufacturingCostTemplateJoin?: PlatformCommon.ManufacturingCostTemplateSearchBasic;
    manufacturingWorkCenterJoin?: PlatformCommon.EntityGroupSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: ManufacturingRoutingSearchProps);
}
export declare type ManufacturingCostTemplateSearchRowProps = {
    basic?: PlatformCommon.ManufacturingCostTemplateSearchRowBasic;
    itemJoin?: PlatformCommon.ItemSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class ManufacturingCostTemplateSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.ManufacturingCostTemplateSearchRowBasic;
    itemJoin?: PlatformCommon.ItemSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: ManufacturingCostTemplateSearchRowProps);
}
export declare type ManufacturingCostTemplateProps = {
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
export declare class ManufacturingCostTemplate extends PlatformCore.Record {
    customForm?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    name?: string;
    memo?: string;
    isInactive?: boolean;
    costDetailList?: ManufacturingCostDetailList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: ManufacturingCostTemplateProps);
}
