import * as TransactionsDemandplanningTypes from "./transactions_demandplanning_types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import { SoapMappingBase, propsWithMappingsName } from "../../soap-types";
const MAPPINGS_NAME =
  "com_netsuite_webservices_transactions_demandplanning_2019_2";
export type DemandPlanProps = {
  startDate: string;
  endDate?: string;
  calculatedQuantity?: number;
  periodDemandPlanList?: PeriodDemandPlanList;
};

export class DemandPlan extends SoapMappingBase {
  startDate: string;
  endDate?: string;
  calculatedQuantity?: number;
  periodDemandPlanList?: PeriodDemandPlanList;
  constructor(props: DemandPlanProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.calculatedQuantity = props.calculatedQuantity;
    this.periodDemandPlanList = props.periodDemandPlanList;
  }
}

export type ItemDemandPlanSearchAdvancedProps = {
  criteria?: ItemDemandPlanSearch;
  columns?: ItemDemandPlanSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class ItemDemandPlanSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ItemDemandPlanSearch;
  columns?: ItemDemandPlanSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ItemDemandPlanSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type ItemDemandPlanProps = {
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

export class ItemDemandPlan extends PlatformCore.Record {
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
  constructor(props: ItemDemandPlanProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.customForm = props.customForm;
    this.subsidiary = props.subsidiary;
    this.location = props.location;
    this.item = props.item;
    this.units = props.units;
    this.memo = props.memo;
    this.year = props.year;
    this.month = props.month;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.demandPlanCalendarType = props.demandPlanCalendarType;
    this.demandPlanMatrix = props.demandPlanMatrix;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type ItemSupplyPlanSearchRowProps = {
  basic?: PlatformCommon.ItemSupplyPlanSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class ItemSupplyPlanSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ItemSupplyPlanSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: ItemSupplyPlanSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.locationJoin = props.locationJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type ItemSupplyPlanOrderProps = {
  orderLineId?: number;
  orderDate?: string;
  receiptDate?: string;
  sourceLocation?: PlatformCore.RecordRef;
  quantity?: number;
  orderCreated?: boolean;
  orderType?: TransactionsDemandplanningTypes.ItemSupplyPlanOrderType;
};

export class ItemSupplyPlanOrder extends SoapMappingBase {
  orderLineId?: number;
  orderDate?: string;
  receiptDate?: string;
  sourceLocation?: PlatformCore.RecordRef;
  quantity?: number;
  orderCreated?: boolean;
  orderType?: TransactionsDemandplanningTypes.ItemSupplyPlanOrderType;
  constructor(props: ItemSupplyPlanOrderProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.orderLineId = props.orderLineId;
    this.orderDate = props.orderDate;
    this.receiptDate = props.receiptDate;
    this.sourceLocation = props.sourceLocation;
    this.quantity = props.quantity;
    this.orderCreated = props.orderCreated;
    this.orderType = props.orderType;
  }
}

export type PeriodDemandPlanProps = {
  quantity: number;
  dayOfTheWeek?: TransactionsDemandplanningTypes.DayOfTheWeek;
};

export class PeriodDemandPlan extends SoapMappingBase {
  quantity: number;
  dayOfTheWeek?: TransactionsDemandplanningTypes.DayOfTheWeek;
  constructor(props: PeriodDemandPlanProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.quantity = props.quantity;
    this.dayOfTheWeek = props.dayOfTheWeek;
  }
}

export type ItemDemandPlanSearchRowProps = {
  basic?: PlatformCommon.ItemDemandPlanSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  lastAlternateSourceItemJoin?: PlatformCommon.ItemSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};

export class ItemDemandPlanSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ItemDemandPlanSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  lastAlternateSourceItemJoin?: PlatformCommon.ItemSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: ItemDemandPlanSearchRowProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.lastAlternateSourceItemJoin = props.lastAlternateSourceItemJoin;
    this.locationJoin = props.locationJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type ItemDemandPlanSearchProps = {
  basic?: PlatformCommon.ItemDemandPlanSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  lastAlternateSourceItemJoin?: PlatformCommon.ItemSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class ItemDemandPlanSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ItemDemandPlanSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  lastAlternateSourceItemJoin?: PlatformCommon.ItemSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: ItemDemandPlanSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.lastAlternateSourceItemJoin = props.lastAlternateSourceItemJoin;
    this.locationJoin = props.locationJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type ItemSupplyPlanSearchProps = {
  basic?: PlatformCommon.ItemSupplyPlanSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};

export class ItemSupplyPlanSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ItemSupplyPlanSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: ItemSupplyPlanSearchProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.locationJoin = props.locationJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export type DemandPlanMatrixProps = {
  demandPlan?: DemandPlan[];
  replaceAll?: boolean;
};

export class DemandPlanMatrix extends SoapMappingBase {
  demandPlan?: DemandPlan[];
  replaceAll?: boolean;
  constructor(props: DemandPlanMatrixProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.demandPlan = props.demandPlan;
    this.replaceAll = props.replaceAll;
  }
}

export type PeriodDemandPlanListProps = {
  periodDemandPlan?: PeriodDemandPlan[];
};

export class PeriodDemandPlanList extends SoapMappingBase {
  periodDemandPlan?: PeriodDemandPlan[];
  constructor(props: PeriodDemandPlanListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.periodDemandPlan = props.periodDemandPlan;
  }
}

export type ItemSupplyPlanProps = {
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

export class ItemSupplyPlan extends PlatformCore.Record {
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
  constructor(props: ItemSupplyPlanProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.customForm = props.customForm;
    this.subsidiary = props.subsidiary;
    this.location = props.location;
    this.item = props.item;
    this.units = props.units;
    this.memo = props.memo;
    this.orderList = props.orderList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export type ItemSupplyPlanSearchAdvancedProps = {
  criteria?: ItemSupplyPlanSearch;
  columns?: ItemSupplyPlanSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
};

export class ItemSupplyPlanSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ItemSupplyPlanSearch;
  columns?: ItemSupplyPlanSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ItemSupplyPlanSearchAdvancedProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export type ItemSupplyPlanOrderListProps = {
  itemSupplyPlanOrder?: ItemSupplyPlanOrder[];
  replaceAll?: boolean;
};

export class ItemSupplyPlanOrderList extends SoapMappingBase {
  itemSupplyPlanOrder?: ItemSupplyPlanOrder[];
  replaceAll?: boolean;
  constructor(props: ItemSupplyPlanOrderListProps) {
    super(propsWithMappingsName(props, MAPPINGS_NAME));
    this.itemSupplyPlanOrder = props.itemSupplyPlanOrder;
    this.replaceAll = props.replaceAll;
  }
}
