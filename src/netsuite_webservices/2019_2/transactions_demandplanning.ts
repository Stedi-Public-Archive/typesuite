import * as TransactionsDemandplanningTypes from "./transactions_demandplanning_types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";

export class DemandPlan {
  startDate: string;
  endDate?: string;
  calculatedQuantity?: number;
  periodDemandPlanList?: PeriodDemandPlanList;
  constructor(props: DemandPlan) {
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.calculatedQuantity = props.calculatedQuantity;
    this.periodDemandPlanList = props.periodDemandPlanList;
  }
}

export class ItemDemandPlanSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ItemDemandPlanSearch;
  columns?: ItemDemandPlanSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ItemDemandPlanSearchAdvanced) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

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
  constructor(props: ItemDemandPlan) {
    super(props);
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

export class ItemSupplyPlanSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ItemSupplyPlanSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: ItemSupplyPlanSearchRow) {
    super();
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.locationJoin = props.locationJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class ItemSupplyPlanOrder {
  orderLineId?: number;
  orderDate?: string;
  receiptDate?: string;
  sourceLocation?: PlatformCore.RecordRef;
  quantity?: number;
  orderCreated?: boolean;
  orderType?: TransactionsDemandplanningTypes.ItemSupplyPlanOrderType;
  constructor(props: ItemSupplyPlanOrder) {
    this.orderLineId = props.orderLineId;
    this.orderDate = props.orderDate;
    this.receiptDate = props.receiptDate;
    this.sourceLocation = props.sourceLocation;
    this.quantity = props.quantity;
    this.orderCreated = props.orderCreated;
    this.orderType = props.orderType;
  }
}

export class PeriodDemandPlan {
  quantity: number;
  dayOfTheWeek?: TransactionsDemandplanningTypes.DayOfTheWeek;
  constructor(props: PeriodDemandPlan) {
    this.quantity = props.quantity;
    this.dayOfTheWeek = props.dayOfTheWeek;
  }
}

export class ItemDemandPlanSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.ItemDemandPlanSearchRowBasic;
  itemJoin?: PlatformCommon.ItemSearchRowBasic;
  lastAlternateSourceItemJoin?: PlatformCommon.ItemSearchRowBasic;
  locationJoin?: PlatformCommon.LocationSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: ItemDemandPlanSearchRow) {
    super();
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.lastAlternateSourceItemJoin = props.lastAlternateSourceItemJoin;
    this.locationJoin = props.locationJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class ItemDemandPlanSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ItemDemandPlanSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  lastAlternateSourceItemJoin?: PlatformCommon.ItemSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: ItemDemandPlanSearch) {
    super();
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.lastAlternateSourceItemJoin = props.lastAlternateSourceItemJoin;
    this.locationJoin = props.locationJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class ItemSupplyPlanSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.ItemSupplyPlanSearchBasic;
  itemJoin?: PlatformCommon.ItemSearchBasic;
  locationJoin?: PlatformCommon.LocationSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: ItemSupplyPlanSearch) {
    super();
    this.basic = props.basic;
    this.itemJoin = props.itemJoin;
    this.locationJoin = props.locationJoin;
    this.userJoin = props.userJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class DemandPlanMatrix {
  demandPlan?: DemandPlan[];
  replaceAll?: boolean;
  constructor(props: DemandPlanMatrix) {
    this.demandPlan = props.demandPlan;
    this.replaceAll = props.replaceAll;
  }
}

export class PeriodDemandPlanList {
  periodDemandPlan?: PeriodDemandPlan[];
  constructor(props: PeriodDemandPlanList) {
    this.periodDemandPlan = props.periodDemandPlan;
  }
}

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
  constructor(props: ItemSupplyPlan) {
    super(props);
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

export class ItemSupplyPlanSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: ItemSupplyPlanSearch;
  columns?: ItemSupplyPlanSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: ItemSupplyPlanSearchAdvanced) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class ItemSupplyPlanOrderList {
  itemSupplyPlanOrder?: ItemSupplyPlanOrder[];
  replaceAll?: boolean;
  constructor(props: ItemSupplyPlanOrderList) {
    this.itemSupplyPlanOrder = props.itemSupplyPlanOrder;
    this.replaceAll = props.replaceAll;
  }
}
