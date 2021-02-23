import * as TransactionsDemandplanningTypes from "./transactions_demandplanning_types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import { SoapMappingBase } from "../../soap-types";
export declare type DemandPlanProps = {
    startDate: string;
    endDate?: string;
    calculatedQuantity?: number;
    periodDemandPlanList?: PeriodDemandPlanList;
};
export declare class DemandPlan extends SoapMappingBase {
    startDate: string;
    endDate?: string;
    calculatedQuantity?: number;
    periodDemandPlanList?: PeriodDemandPlanList;
    constructor(props: DemandPlanProps);
}
export declare type ItemDemandPlanSearchAdvancedProps = {
    criteria?: ItemDemandPlanSearch;
    columns?: ItemDemandPlanSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class ItemDemandPlanSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: ItemDemandPlanSearch;
    columns?: ItemDemandPlanSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: ItemDemandPlanSearchAdvancedProps);
}
export declare type ItemDemandPlanProps = {
    customForm?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    item?: PlatformCore.RecordRef;
    units?: PlatformCore.RecordRef;
    memo?: string;
    year?: number;
    month?: TransactionsDemandplanningTypes.DemandPlanMonth;
    startDate?: string;
    endDate?: string;
    demandPlanCalendarType?: TransactionsDemandplanningTypes.DemandPlanCalendarType;
    demandPlanMatrix?: DemandPlanMatrix;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class ItemDemandPlan extends PlatformCore.Record {
    customForm?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    item?: PlatformCore.RecordRef;
    units?: PlatformCore.RecordRef;
    memo?: string;
    year?: number;
    month?: TransactionsDemandplanningTypes.DemandPlanMonth;
    startDate?: string;
    endDate?: string;
    demandPlanCalendarType?: TransactionsDemandplanningTypes.DemandPlanCalendarType;
    demandPlanMatrix?: DemandPlanMatrix;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: ItemDemandPlanProps);
}
export declare type ItemSupplyPlanSearchRowProps = {
    basic?: PlatformCommon.ItemSupplyPlanSearchRowBasic;
    itemJoin?: PlatformCommon.ItemSearchRowBasic;
    locationJoin?: PlatformCommon.LocationSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class ItemSupplyPlanSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.ItemSupplyPlanSearchRowBasic;
    itemJoin?: PlatformCommon.ItemSearchRowBasic;
    locationJoin?: PlatformCommon.LocationSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: ItemSupplyPlanSearchRowProps);
}
export declare type ItemSupplyPlanOrderProps = {
    orderLineId?: number;
    orderDate?: string;
    receiptDate?: string;
    sourceLocation?: PlatformCore.RecordRef;
    quantity?: number;
    orderCreated?: boolean;
    orderType?: TransactionsDemandplanningTypes.ItemSupplyPlanOrderType;
};
export declare class ItemSupplyPlanOrder extends SoapMappingBase {
    orderLineId?: number;
    orderDate?: string;
    receiptDate?: string;
    sourceLocation?: PlatformCore.RecordRef;
    quantity?: number;
    orderCreated?: boolean;
    orderType?: TransactionsDemandplanningTypes.ItemSupplyPlanOrderType;
    constructor(props: ItemSupplyPlanOrderProps);
}
export declare type PeriodDemandPlanProps = {
    quantity: number;
    dayOfTheWeek?: TransactionsDemandplanningTypes.DayOfTheWeek;
};
export declare class PeriodDemandPlan extends SoapMappingBase {
    quantity: number;
    dayOfTheWeek?: TransactionsDemandplanningTypes.DayOfTheWeek;
    constructor(props: PeriodDemandPlanProps);
}
export declare type ItemDemandPlanSearchRowProps = {
    basic?: PlatformCommon.ItemDemandPlanSearchRowBasic;
    itemJoin?: PlatformCommon.ItemSearchRowBasic;
    lastAlternateSourceItemJoin?: PlatformCommon.ItemSearchRowBasic;
    locationJoin?: PlatformCommon.LocationSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class ItemDemandPlanSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.ItemDemandPlanSearchRowBasic;
    itemJoin?: PlatformCommon.ItemSearchRowBasic;
    lastAlternateSourceItemJoin?: PlatformCommon.ItemSearchRowBasic;
    locationJoin?: PlatformCommon.LocationSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: ItemDemandPlanSearchRowProps);
}
export declare type ItemDemandPlanSearchProps = {
    basic?: PlatformCommon.ItemDemandPlanSearchBasic;
    itemJoin?: PlatformCommon.ItemSearchBasic;
    lastAlternateSourceItemJoin?: PlatformCommon.ItemSearchBasic;
    locationJoin?: PlatformCommon.LocationSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class ItemDemandPlanSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.ItemDemandPlanSearchBasic;
    itemJoin?: PlatformCommon.ItemSearchBasic;
    lastAlternateSourceItemJoin?: PlatformCommon.ItemSearchBasic;
    locationJoin?: PlatformCommon.LocationSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: ItemDemandPlanSearchProps);
}
export declare type ItemSupplyPlanSearchProps = {
    basic?: PlatformCommon.ItemSupplyPlanSearchBasic;
    itemJoin?: PlatformCommon.ItemSearchBasic;
    locationJoin?: PlatformCommon.LocationSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class ItemSupplyPlanSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.ItemSupplyPlanSearchBasic;
    itemJoin?: PlatformCommon.ItemSearchBasic;
    locationJoin?: PlatformCommon.LocationSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: ItemSupplyPlanSearchProps);
}
export declare type DemandPlanMatrixProps = {
    demandPlan?: DemandPlan[];
    replaceAll?: boolean;
};
export declare class DemandPlanMatrix extends SoapMappingBase {
    demandPlan?: DemandPlan[];
    replaceAll?: boolean;
    constructor(props: DemandPlanMatrixProps);
}
export declare type PeriodDemandPlanListProps = {
    periodDemandPlan?: PeriodDemandPlan[];
};
export declare class PeriodDemandPlanList extends SoapMappingBase {
    periodDemandPlan?: PeriodDemandPlan[];
    constructor(props: PeriodDemandPlanListProps);
}
export declare type ItemSupplyPlanProps = {
    customForm?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    item?: PlatformCore.RecordRef;
    units?: PlatformCore.RecordRef;
    memo?: string;
    orderList?: ItemSupplyPlanOrderList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class ItemSupplyPlan extends PlatformCore.Record {
    customForm?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    item?: PlatformCore.RecordRef;
    units?: PlatformCore.RecordRef;
    memo?: string;
    orderList?: ItemSupplyPlanOrderList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: ItemSupplyPlanProps);
}
export declare type ItemSupplyPlanSearchAdvancedProps = {
    criteria?: ItemSupplyPlanSearch;
    columns?: ItemSupplyPlanSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class ItemSupplyPlanSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: ItemSupplyPlanSearch;
    columns?: ItemSupplyPlanSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: ItemSupplyPlanSearchAdvancedProps);
}
export declare type ItemSupplyPlanOrderListProps = {
    itemSupplyPlanOrder?: ItemSupplyPlanOrder[];
    replaceAll?: boolean;
};
export declare class ItemSupplyPlanOrderList extends SoapMappingBase {
    itemSupplyPlanOrder?: ItemSupplyPlanOrder[];
    replaceAll?: boolean;
    constructor(props: ItemSupplyPlanOrderListProps);
}
