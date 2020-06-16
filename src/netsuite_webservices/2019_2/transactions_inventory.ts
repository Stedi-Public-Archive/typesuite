import * as SoapTypes from "../soap-types";
import * as TransactionsInventoryTypes from "./transactions_inventory_types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as PlatformCommonTypes from "./platform_common_types";

const mappingsName = "com_netsuite_webservices_transactions_inventory_2019_2";

export class WorkOrderItem extends SoapTypes.Base {
  line?: number;
  item?: PlatformCore.RecordRef;
  operationSequenceNumber?: number;
  componentYield?: number;
  bomQuantity?: number;
  quantityCommitted?: number;
  quantityBackOrdered?: number;
  quantityAvailable?: number;
  averageCost?: number;
  lastPurchasePrice?: number;
  quantityOnHand?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  serialNumbers?: string;
  orderPriority?: number;
  options?: PlatformCore.CustomFieldList;
  itemSource?: PlatformCommonTypes.ItemSource;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  poVendor?: PlatformCore.RecordRef;
  poRate?: number;
  percentComplete?: number;
  contribution?: number;
  description?: string;
  commitInventory?: TransactionsInventoryTypes.WorkOrderItemItemCommitInventory;
  plannedIssueDate?: SoapTypes.Dateish;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: WorkOrderItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.line = props.line;
    this.item = props.item;
    this.operationSequenceNumber = props.operationSequenceNumber;
    this.componentYield = props.componentYield;
    this.bomQuantity = props.bomQuantity;
    this.quantityCommitted = props.quantityCommitted;
    this.quantityBackOrdered = props.quantityBackOrdered;
    this.quantityAvailable = props.quantityAvailable;
    this.averageCost = props.averageCost;
    this.lastPurchasePrice = props.lastPurchasePrice;
    this.quantityOnHand = props.quantityOnHand;
    this.quantity = props.quantity;
    this.units = props.units;
    this.inventoryDetail = props.inventoryDetail;
    this.serialNumbers = props.serialNumbers;
    this.orderPriority = props.orderPriority;
    this.options = props.options;
    this.itemSource = props.itemSource;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.poVendor = props.poVendor;
    this.poRate = props.poRate;
    this.percentComplete = props.percentComplete;
    this.contribution = props.contribution;
    this.description = props.description;
    this.commitInventory = props.commitInventory;
    this.plannedIssueDate = props.plannedIssueDate;
    this.customFieldList = props.customFieldList;
  }
}

export class TransferOrderItemList extends SoapTypes.Base {
  item?: TransferOrderItem[];
  replaceAll?: boolean;
  constructor(props: TransferOrderItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export class InventoryAdjustmentInventory extends SoapTypes.Base {
  item?: PlatformCore.RecordRef;
  line?: number;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  description?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  units?: PlatformCore.RecordRef;
  quantityOnHand?: number;
  currentValue?: number;
  adjustQtyBy?: number;
  binNumbers?: string;
  serialNumbers?: string;
  newQuantity?: number;
  unitCost?: number;
  foreignCurrencyUnitCost?: number;
  memo?: string;
  currency?: string;
  expirationDate?: SoapTypes.Dateish;
  exchangeRate?: number;
  constructor(props: InventoryAdjustmentInventory) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.line = props.line;
    this.inventoryDetail = props.inventoryDetail;
    this.description = props.description;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.units = props.units;
    this.quantityOnHand = props.quantityOnHand;
    this.currentValue = props.currentValue;
    this.adjustQtyBy = props.adjustQtyBy;
    this.binNumbers = props.binNumbers;
    this.serialNumbers = props.serialNumbers;
    this.newQuantity = props.newQuantity;
    this.unitCost = props.unitCost;
    this.foreignCurrencyUnitCost = props.foreignCurrencyUnitCost;
    this.memo = props.memo;
    this.currency = props.currency;
    this.expirationDate = props.expirationDate;
    this.exchangeRate = props.exchangeRate;
  }
}

export class BinTransfer extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  tranDate?: SoapTypes.Dateish;
  memo?: string;
  location?: PlatformCore.RecordRef;
  inventoryList?: BinTransferInventoryList;
  subsidiary?: PlatformCore.RecordRef;
  tranId?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: BinTransfer) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.tranDate = props.tranDate;
    this.memo = props.memo;
    this.location = props.location;
    this.inventoryList = props.inventoryList;
    this.subsidiary = props.subsidiary;
    this.tranId = props.tranId;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class WorkOrderIssueComponentList extends SoapTypes.Base {
  workOrderIssueComponent?: WorkOrderIssueComponent[];
  replaceAll?: boolean;
  constructor(props: WorkOrderIssueComponentList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.workOrderIssueComponent = props.workOrderIssueComponent;
    this.replaceAll = props.replaceAll;
  }
}

export class WorkOrderIssue extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  tranId?: string;
  item?: PlatformCore.RecordRef;
  createdFrom?: PlatformCore.RecordRef;
  tranDate?: SoapTypes.Dateish;
  postingPeriod?: PlatformCore.RecordRef;
  memo?: string;
  subsidiary?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  revision?: PlatformCore.RecordRef;
  manufacturingRouting?: PlatformCore.RecordRef;
  startOperation?: PlatformCore.RecordRef;
  endOperation?: PlatformCore.RecordRef;
  componentList?: WorkOrderIssueComponentList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: WorkOrderIssue) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.tranId = props.tranId;
    this.item = props.item;
    this.createdFrom = props.createdFrom;
    this.tranDate = props.tranDate;
    this.postingPeriod = props.postingPeriod;
    this.memo = props.memo;
    this.subsidiary = props.subsidiary;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.revision = props.revision;
    this.manufacturingRouting = props.manufacturingRouting;
    this.startOperation = props.startOperation;
    this.endOperation = props.endOperation;
    this.componentList = props.componentList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class BinWorksheetItemList extends SoapTypes.Base {
  item?: BinWorksheetItem[];
  replaceAll?: boolean;
  constructor(props: BinWorksheetItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export class WorkOrderCompletionOperationList extends SoapTypes.Base {
  workOrderCompletionOperation?: WorkOrderCompletionOperation[];
  replaceAll?: boolean;
  constructor(props: WorkOrderCompletionOperationList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.workOrderCompletionOperation = props.workOrderCompletionOperation;
    this.replaceAll = props.replaceAll;
  }
}

export class InterCompanyTransferOrderItemList extends SoapTypes.Base {
  item?: InterCompanyTransferOrderItem[];
  replaceAll?: boolean;
  constructor(props: InterCompanyTransferOrderItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export class PartnersList extends SoapTypes.Base {
  partners?: PlatformCommon.Partners[];
  replaceAll?: boolean;
  constructor(props: PartnersList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.partners = props.partners;
    this.replaceAll = props.replaceAll;
  }
}

export class WorkOrderItemList extends SoapTypes.Base {
  item?: WorkOrderItem[];
  replaceAll?: boolean;
  constructor(props: WorkOrderItemList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export class BinWorksheetItem extends SoapTypes.Base {
  item?: PlatformCore.RecordRef;
  itemName?: string;
  description?: string;
  quantity?: number;
  itemOnHand?: string;
  itemUnitsLabel?: string;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  itemBins?: string;
  itemBinNumbers?: string;
  itemBinList?: string;
  itemPreferBin?: string;
  itemBlank?: string;
  constructor(props: BinWorksheetItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.itemName = props.itemName;
    this.description = props.description;
    this.quantity = props.quantity;
    this.itemOnHand = props.itemOnHand;
    this.itemUnitsLabel = props.itemUnitsLabel;
    this.inventoryDetail = props.inventoryDetail;
    this.itemBins = props.itemBins;
    this.itemBinNumbers = props.itemBinNumbers;
    this.itemBinList = props.itemBinList;
    this.itemPreferBin = props.itemPreferBin;
    this.itemBlank = props.itemBlank;
  }
}

export class WorkOrderCompletionComponent extends SoapTypes.Base {
  item?: PlatformCore.RecordRef;
  operationSequenceNumber?: number;
  quantityPer?: number;
  quantity?: number;
  componentInventoryDetail?: PlatformCommon.InventoryDetail;
  lineNumber?: number;
  constructor(props: WorkOrderCompletionComponent) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.operationSequenceNumber = props.operationSequenceNumber;
    this.quantityPer = props.quantityPer;
    this.quantity = props.quantity;
    this.componentInventoryDetail = props.componentInventoryDetail;
    this.lineNumber = props.lineNumber;
  }
}

export class AssemblyBuild extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  expirationDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  createdFrom?: PlatformCore.RecordRef;
  tranDate?: SoapTypes.Dateish;
  postingPeriod?: PlatformCore.RecordRef;
  tranId?: string;
  item?: PlatformCore.RecordRef;
  buildable?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  total?: number;
  billOfMaterials?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  serialNumbers?: string;
  binNumbers?: string;
  subsidiary?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  revision?: PlatformCore.RecordRef;
  billOfMaterialsRevision?: PlatformCore.RecordRef;
  memo?: string;
  componentList?: AssemblyComponentList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: AssemblyBuild) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.expirationDate = props.expirationDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.createdFrom = props.createdFrom;
    this.tranDate = props.tranDate;
    this.postingPeriod = props.postingPeriod;
    this.tranId = props.tranId;
    this.item = props.item;
    this.buildable = props.buildable;
    this.quantity = props.quantity;
    this.units = props.units;
    this.total = props.total;
    this.billOfMaterials = props.billOfMaterials;
    this.inventoryDetail = props.inventoryDetail;
    this.serialNumbers = props.serialNumbers;
    this.binNumbers = props.binNumbers;
    this.subsidiary = props.subsidiary;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.revision = props.revision;
    this.billOfMaterialsRevision = props.billOfMaterialsRevision;
    this.memo = props.memo;
    this.componentList = props.componentList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class TransferOrder extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  shippingCost?: number;
  subTotal?: number;
  status?: string;
  shippingAddress?: PlatformCommon.Address;
  shipIsResidential?: boolean;
  shipAddressList?: PlatformCore.RecordRef;
  fob?: string;
  tranDate?: SoapTypes.Dateish;
  tranId?: string;
  source?: string;
  orderStatus?: TransactionsInventoryTypes.TransferOrderOrderStatus;
  subsidiary?: PlatformCore.RecordRef;
  employee?: PlatformCore.RecordRef;
  useItemCostAsTransferCost?: boolean;
  incoterm?: PlatformCore.RecordRef;
  firmed?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  transferLocation?: PlatformCore.RecordRef;
  memo?: string;
  shipDate?: SoapTypes.Dateish;
  shipMethod?: PlatformCore.RecordRef;
  trackingNumbers?: string;
  linkedTrackingNumbers?: string;
  shipComplete?: boolean;
  altShippingCost?: number;
  shippingTax1Rate?: number;
  shippingTax2Rate?: number;
  handlingTax1Rate?: number;
  handlingTax2Rate?: number;
  shippingTaxCode?: PlatformCore.RecordRef;
  handlingTaxCode?: PlatformCore.RecordRef;
  total?: number;
  itemList?: TransferOrderItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: TransferOrder) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.shippingCost = props.shippingCost;
    this.subTotal = props.subTotal;
    this.status = props.status;
    this.shippingAddress = props.shippingAddress;
    this.shipIsResidential = props.shipIsResidential;
    this.shipAddressList = props.shipAddressList;
    this.fob = props.fob;
    this.tranDate = props.tranDate;
    this.tranId = props.tranId;
    this.source = props.source;
    this.orderStatus = props.orderStatus;
    this.subsidiary = props.subsidiary;
    this.employee = props.employee;
    this.useItemCostAsTransferCost = props.useItemCostAsTransferCost;
    this.incoterm = props.incoterm;
    this.firmed = props.firmed;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.transferLocation = props.transferLocation;
    this.memo = props.memo;
    this.shipDate = props.shipDate;
    this.shipMethod = props.shipMethod;
    this.trackingNumbers = props.trackingNumbers;
    this.linkedTrackingNumbers = props.linkedTrackingNumbers;
    this.shipComplete = props.shipComplete;
    this.altShippingCost = props.altShippingCost;
    this.shippingTax1Rate = props.shippingTax1Rate;
    this.shippingTax2Rate = props.shippingTax2Rate;
    this.handlingTax1Rate = props.handlingTax1Rate;
    this.handlingTax2Rate = props.handlingTax2Rate;
    this.shippingTaxCode = props.shippingTaxCode;
    this.handlingTaxCode = props.handlingTaxCode;
    this.total = props.total;
    this.itemList = props.itemList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class InventoryCostRevaluationCostComponent extends SoapTypes.Base {
  cost?: number;
  componentItem?: PlatformCore.RecordRef;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  costCategory?: PlatformCore.RecordRef;
  constructor(props: InventoryCostRevaluationCostComponent) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.cost = props.cost;
    this.componentItem = props.componentItem;
    this.quantity = props.quantity;
    this.units = props.units;
    this.costCategory = props.costCategory;
  }
}

export class InventoryAdjustment extends PlatformCore.Record {
  postingPeriod?: PlatformCore.RecordRef;
  tranDate?: SoapTypes.Dateish;
  createdDate?: SoapTypes.Dateish;
  tranId?: string;
  lastModifiedDate?: SoapTypes.Dateish;
  subsidiary?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  customForm?: PlatformCore.RecordRef;
  estimatedTotalValue?: number;
  customer?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  adjLocation?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  memo?: string;
  inventoryList?: InventoryAdjustmentInventoryList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: InventoryAdjustment) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.postingPeriod = props.postingPeriod;
    this.tranDate = props.tranDate;
    this.createdDate = props.createdDate;
    this.tranId = props.tranId;
    this.lastModifiedDate = props.lastModifiedDate;
    this.subsidiary = props.subsidiary;
    this.account = props.account;
    this.customForm = props.customForm;
    this.estimatedTotalValue = props.estimatedTotalValue;
    this.customer = props.customer;
    this.department = props.department;
    this.clazz = props.clazz;
    this.adjLocation = props.adjLocation;
    this.location = props.location;
    this.memo = props.memo;
    this.inventoryList = props.inventoryList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class BinTransferInventoryList extends SoapTypes.Base {
  inventory?: BinTransferInventory[];
  replaceAll?: boolean;
  constructor(props: BinTransferInventoryList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.inventory = props.inventory;
    this.replaceAll = props.replaceAll;
  }
}

export class InterCompanyTransferOrderItem extends SoapTypes.Base {
  item?: PlatformCore.RecordRef;
  line?: number;
  quantityAvailable?: number;
  quantityOnHand?: number;
  quantityBackOrdered?: number;
  quantityCommitted?: number;
  quantityFulfilled?: number;
  quantityReceived?: number;
  quantity?: number;
  rate?: number;
  units?: PlatformCore.RecordRef;
  amount?: number;
  description?: string;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  commitInventory?: TransactionsInventoryTypes.TransferOrderItemCommitInventory;
  options?: PlatformCore.CustomFieldList;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  lastPurchasePrice?: number;
  averageCost?: number;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: InterCompanyTransferOrderItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.line = props.line;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityOnHand = props.quantityOnHand;
    this.quantityBackOrdered = props.quantityBackOrdered;
    this.quantityCommitted = props.quantityCommitted;
    this.quantityFulfilled = props.quantityFulfilled;
    this.quantityReceived = props.quantityReceived;
    this.quantity = props.quantity;
    this.rate = props.rate;
    this.units = props.units;
    this.amount = props.amount;
    this.description = props.description;
    this.inventoryDetail = props.inventoryDetail;
    this.commitInventory = props.commitInventory;
    this.options = props.options;
    this.department = props.department;
    this.clazz = props.clazz;
    this.lastPurchasePrice = props.lastPurchasePrice;
    this.averageCost = props.averageCost;
    this.customFieldList = props.customFieldList;
  }
}

export class WorkOrderIssueComponent extends SoapTypes.Base {
  item?: PlatformCore.RecordRef;
  operationSequenceNumber?: number;
  quantity?: number;
  componentInventoryDetail?: PlatformCommon.InventoryDetail;
  lineNumber?: number;
  constructor(props: WorkOrderIssueComponent) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.operationSequenceNumber = props.operationSequenceNumber;
    this.quantity = props.quantity;
    this.componentInventoryDetail = props.componentInventoryDetail;
    this.lineNumber = props.lineNumber;
  }
}

export class SalesTeamList extends SoapTypes.Base {
  salesTeam?: PlatformCommon.CustomerSalesTeam[];
  replaceAll?: boolean;
  constructor(props: SalesTeamList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.salesTeam = props.salesTeam;
    this.replaceAll = props.replaceAll;
  }
}

export class AssemblyComponentList extends SoapTypes.Base {
  component?: AssemblyComponent[];
  replaceAll?: boolean;
  constructor(props: AssemblyComponentList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.component = props.component;
    this.replaceAll = props.replaceAll;
  }
}

export class InventoryCostRevaluation extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  tranDate?: SoapTypes.Dateish;
  postingPeriod?: PlatformCore.RecordRef;
  tranId?: string;
  account?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  memo?: string;
  total?: number;
  inventoryValue?: number;
  unitCost?: number;
  costComponentList?: InventoryCostRevaluationCostComponentList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: InventoryCostRevaluation) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.subsidiary = props.subsidiary;
    this.tranDate = props.tranDate;
    this.postingPeriod = props.postingPeriod;
    this.tranId = props.tranId;
    this.account = props.account;
    this.item = props.item;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.memo = props.memo;
    this.total = props.total;
    this.inventoryValue = props.inventoryValue;
    this.unitCost = props.unitCost;
    this.costComponentList = props.costComponentList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class AssemblyUnbuild extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  tranDate?: SoapTypes.Dateish;
  postingPeriod?: PlatformCore.RecordRef;
  tranId?: string;
  item?: PlatformCore.RecordRef;
  built?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  total?: number;
  billOfMaterials?: PlatformCore.RecordRef;
  billOfMaterialsRevision?: PlatformCore.RecordRef;
  serialNumbers?: string;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  binNumbers?: string;
  subsidiary?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  memo?: string;
  componentList?: AssemblyComponentList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: AssemblyUnbuild) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.tranDate = props.tranDate;
    this.postingPeriod = props.postingPeriod;
    this.tranId = props.tranId;
    this.item = props.item;
    this.built = props.built;
    this.quantity = props.quantity;
    this.units = props.units;
    this.total = props.total;
    this.billOfMaterials = props.billOfMaterials;
    this.billOfMaterialsRevision = props.billOfMaterialsRevision;
    this.serialNumbers = props.serialNumbers;
    this.inventoryDetail = props.inventoryDetail;
    this.binNumbers = props.binNumbers;
    this.subsidiary = props.subsidiary;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.memo = props.memo;
    this.componentList = props.componentList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class AssemblyComponent extends SoapTypes.Base {
  item?: PlatformCore.RecordRef;
  quantity?: number;
  quantityOnHand?: number;
  componentInventoryDetail?: PlatformCommon.InventoryDetail;
  componentNumbers?: string;
  binNumbers?: string;
  lineNumber?: number;
  constructor(props: AssemblyComponent) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.quantity = props.quantity;
    this.quantityOnHand = props.quantityOnHand;
    this.componentInventoryDetail = props.componentInventoryDetail;
    this.componentNumbers = props.componentNumbers;
    this.binNumbers = props.binNumbers;
    this.lineNumber = props.lineNumber;
  }
}

export class InventoryAdjustmentInventoryList extends SoapTypes.Base {
  inventory?: InventoryAdjustmentInventory[];
  replaceAll?: boolean;
  constructor(props: InventoryAdjustmentInventoryList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.inventory = props.inventory;
    this.replaceAll = props.replaceAll;
  }
}

export class TransferOrderItem extends SoapTypes.Base {
  item?: PlatformCore.RecordRef;
  line?: number;
  quantityAvailable?: number;
  quantityOnHand?: number;
  quantityBackOrdered?: number;
  quantityCommitted?: number;
  quantityFulfilled?: number;
  quantityPacked?: number;
  quantityPicked?: number;
  quantityReceived?: number;
  quantity?: number;
  rate?: number;
  units?: PlatformCore.RecordRef;
  amount?: number;
  description?: string;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  serialNumbers?: string;
  commitInventory?: TransactionsInventoryTypes.TransferOrderItemCommitInventory;
  orderPriority?: number;
  options?: PlatformCore.CustomFieldList;
  isClosed?: boolean;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  lastPurchasePrice?: number;
  averageCost?: number;
  expectedShipDate?: SoapTypes.Dateish;
  expectedReceiptDate?: SoapTypes.Dateish;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: TransferOrderItem) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.item = props.item;
    this.line = props.line;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityOnHand = props.quantityOnHand;
    this.quantityBackOrdered = props.quantityBackOrdered;
    this.quantityCommitted = props.quantityCommitted;
    this.quantityFulfilled = props.quantityFulfilled;
    this.quantityPacked = props.quantityPacked;
    this.quantityPicked = props.quantityPicked;
    this.quantityReceived = props.quantityReceived;
    this.quantity = props.quantity;
    this.rate = props.rate;
    this.units = props.units;
    this.amount = props.amount;
    this.description = props.description;
    this.inventoryDetail = props.inventoryDetail;
    this.serialNumbers = props.serialNumbers;
    this.commitInventory = props.commitInventory;
    this.orderPriority = props.orderPriority;
    this.options = props.options;
    this.isClosed = props.isClosed;
    this.department = props.department;
    this.clazz = props.clazz;
    this.lastPurchasePrice = props.lastPurchasePrice;
    this.averageCost = props.averageCost;
    this.expectedShipDate = props.expectedShipDate;
    this.expectedReceiptDate = props.expectedReceiptDate;
    this.customFieldList = props.customFieldList;
  }
}

export class InventoryCostRevaluationCostComponentList extends SoapTypes.Base {
  costComponent?: InventoryCostRevaluationCostComponent[];
  replaceAll?: boolean;
  constructor(props: InventoryCostRevaluationCostComponentList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.costComponent = props.costComponent;
    this.replaceAll = props.replaceAll;
  }
}

export class WorkOrder extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  manufacturingRouting?: PlatformCore.RecordRef;
  autoCalculateLag?: boolean;
  status?: string;
  tranId?: string;
  entity?: PlatformCore.RecordRef;
  job?: PlatformCore.RecordRef;
  assemblyItem?: PlatformCore.RecordRef;
  expandAssembly?: boolean;
  isWip?: boolean;
  quantity?: number;
  billOfMaterials?: PlatformCore.RecordRef;
  units?: PlatformCore.RecordRef;
  tranDate?: SoapTypes.Dateish;
  orderStatus?: TransactionsInventoryTypes.WorkOrderOrderStatus;
  firmed?: boolean;
  memo?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  itemList?: WorkOrderItemList;
  location?: PlatformCore.RecordRef;
  schedulingMethod?: TransactionsInventoryTypes.WorkOrderSchedulingMethod;
  salesTeamList?: SalesTeamList;
  partnersList?: PartnersList;
  createdFrom?: PlatformCore.RecordRef;
  sourceTransactionId?: string;
  sourceTransactionLine?: number;
  specialOrder?: boolean;
  buildable?: number;
  options?: PlatformCore.CustomFieldList;
  built?: number;
  startDate?: SoapTypes.Dateish;
  endDate?: SoapTypes.Dateish;
  revision?: PlatformCore.RecordRef;
  billOfMaterialsRevision?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: WorkOrder) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.manufacturingRouting = props.manufacturingRouting;
    this.autoCalculateLag = props.autoCalculateLag;
    this.status = props.status;
    this.tranId = props.tranId;
    this.entity = props.entity;
    this.job = props.job;
    this.assemblyItem = props.assemblyItem;
    this.expandAssembly = props.expandAssembly;
    this.isWip = props.isWip;
    this.quantity = props.quantity;
    this.billOfMaterials = props.billOfMaterials;
    this.units = props.units;
    this.tranDate = props.tranDate;
    this.orderStatus = props.orderStatus;
    this.firmed = props.firmed;
    this.memo = props.memo;
    this.department = props.department;
    this.clazz = props.clazz;
    this.itemList = props.itemList;
    this.location = props.location;
    this.schedulingMethod = props.schedulingMethod;
    this.salesTeamList = props.salesTeamList;
    this.partnersList = props.partnersList;
    this.createdFrom = props.createdFrom;
    this.sourceTransactionId = props.sourceTransactionId;
    this.sourceTransactionLine = props.sourceTransactionLine;
    this.specialOrder = props.specialOrder;
    this.buildable = props.buildable;
    this.options = props.options;
    this.built = props.built;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.revision = props.revision;
    this.billOfMaterialsRevision = props.billOfMaterialsRevision;
    this.subsidiary = props.subsidiary;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class InventoryTransferInventoryList extends SoapTypes.Base {
  inventory?: InventoryTransferInventory[];
  replaceAll?: boolean;
  constructor(props: InventoryTransferInventoryList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.inventory = props.inventory;
    this.replaceAll = props.replaceAll;
  }
}

export class WorkOrderCompletion extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  tranId?: string;
  item?: PlatformCore.RecordRef;
  quantity?: number;
  scrapQuantity?: number;
  units?: PlatformCore.RecordRef;
  isBackflush?: boolean;
  orderQuantity?: number;
  total?: number;
  createdFrom?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  tranDate?: SoapTypes.Dateish;
  postingPeriod?: PlatformCore.RecordRef;
  memo?: string;
  subsidiary?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  revision?: PlatformCore.RecordRef;
  startOperation?: PlatformCore.RecordRef;
  endOperation?: PlatformCore.RecordRef;
  completedQuantity?: number;
  manufacturingRouting?: PlatformCore.RecordRef;
  componentList?: WorkOrderCompletionComponentList;
  operationList?: WorkOrderCompletionOperationList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: WorkOrderCompletion) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.tranId = props.tranId;
    this.item = props.item;
    this.quantity = props.quantity;
    this.scrapQuantity = props.scrapQuantity;
    this.units = props.units;
    this.isBackflush = props.isBackflush;
    this.orderQuantity = props.orderQuantity;
    this.total = props.total;
    this.createdFrom = props.createdFrom;
    this.inventoryDetail = props.inventoryDetail;
    this.tranDate = props.tranDate;
    this.postingPeriod = props.postingPeriod;
    this.memo = props.memo;
    this.subsidiary = props.subsidiary;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.revision = props.revision;
    this.startOperation = props.startOperation;
    this.endOperation = props.endOperation;
    this.completedQuantity = props.completedQuantity;
    this.manufacturingRouting = props.manufacturingRouting;
    this.componentList = props.componentList;
    this.operationList = props.operationList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class InventoryTransfer extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  tranDate?: SoapTypes.Dateish;
  postingPeriod?: PlatformCore.RecordRef;
  tranId?: string;
  memo?: string;
  location?: PlatformCore.RecordRef;
  transferLocation?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  inventoryList?: InventoryTransferInventoryList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: InventoryTransfer) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.tranDate = props.tranDate;
    this.postingPeriod = props.postingPeriod;
    this.tranId = props.tranId;
    this.memo = props.memo;
    this.location = props.location;
    this.transferLocation = props.transferLocation;
    this.department = props.department;
    this.clazz = props.clazz;
    this.subsidiary = props.subsidiary;
    this.inventoryList = props.inventoryList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class BinTransferInventory extends SoapTypes.Base {
  line?: number;
  item?: PlatformCore.RecordRef;
  description?: string;
  preferredBin?: string;
  quantity?: number;
  itemUnitsLabel?: string;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  fromBins?: string;
  toBins?: string;
  constructor(props: BinTransferInventory) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.line = props.line;
    this.item = props.item;
    this.description = props.description;
    this.preferredBin = props.preferredBin;
    this.quantity = props.quantity;
    this.itemUnitsLabel = props.itemUnitsLabel;
    this.inventoryDetail = props.inventoryDetail;
    this.fromBins = props.fromBins;
    this.toBins = props.toBins;
  }
}

export class WorkOrderCompletionOperation extends SoapTypes.Base {
  operationSequence?: number;
  operationName?: string;
  workCenter?: string;
  machineResources?: number;
  laborResources?: number;
  inputQuantity?: number;
  quantityRemaining?: number;
  predecessorCompletedQuantity?: number;
  completedQuantity?: number;
  recordSetup?: boolean;
  machineSetupTime?: number;
  laborSetupTime?: number;
  machineRunTime?: number;
  laborRunTime?: number;
  constructor(props: WorkOrderCompletionOperation) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.operationSequence = props.operationSequence;
    this.operationName = props.operationName;
    this.workCenter = props.workCenter;
    this.machineResources = props.machineResources;
    this.laborResources = props.laborResources;
    this.inputQuantity = props.inputQuantity;
    this.quantityRemaining = props.quantityRemaining;
    this.predecessorCompletedQuantity = props.predecessorCompletedQuantity;
    this.completedQuantity = props.completedQuantity;
    this.recordSetup = props.recordSetup;
    this.machineSetupTime = props.machineSetupTime;
    this.laborSetupTime = props.laborSetupTime;
    this.machineRunTime = props.machineRunTime;
    this.laborRunTime = props.laborRunTime;
  }
}

export class WorkOrderCompletionComponentList extends SoapTypes.Base {
  workOrderCompletionComponent?: WorkOrderCompletionComponent[];
  replaceAll?: boolean;
  constructor(props: WorkOrderCompletionComponentList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.workOrderCompletionComponent = props.workOrderCompletionComponent;
    this.replaceAll = props.replaceAll;
  }
}

export class BinWorksheet extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  tranDate?: SoapTypes.Dateish;
  memo?: string;
  location?: PlatformCore.RecordRef;
  tranId?: string;
  itemList?: BinWorksheetItemList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: BinWorksheet) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.tranDate = props.tranDate;
    this.memo = props.memo;
    this.location = props.location;
    this.tranId = props.tranId;
    this.itemList = props.itemList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class WorkOrderClose extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  tranId?: string;
  item?: PlatformCore.RecordRef;
  quantity?: number;
  orderQuantity?: number;
  scrapQuantity?: number;
  createdFrom?: PlatformCore.RecordRef;
  tranDate?: SoapTypes.Dateish;
  postingPeriod?: PlatformCore.RecordRef;
  memo?: string;
  subsidiary?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  revision?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: WorkOrderClose) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.tranId = props.tranId;
    this.item = props.item;
    this.quantity = props.quantity;
    this.orderQuantity = props.orderQuantity;
    this.scrapQuantity = props.scrapQuantity;
    this.createdFrom = props.createdFrom;
    this.tranDate = props.tranDate;
    this.postingPeriod = props.postingPeriod;
    this.memo = props.memo;
    this.subsidiary = props.subsidiary;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.revision = props.revision;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class InterCompanyTransferOrder extends PlatformCore.Record {
  createdDate?: SoapTypes.Dateish;
  lastModifiedDate?: SoapTypes.Dateish;
  customForm?: PlatformCore.RecordRef;
  shippingCost?: number;
  subTotal?: number;
  status?: string;
  shippingAddress?: PlatformCommon.Address;
  shipIsResidential?: boolean;
  shipAddressList?: PlatformCore.RecordRef;
  fob?: string;
  tranDate?: SoapTypes.Dateish;
  tranId?: string;
  source?: string;
  orderStatus?: TransactionsInventoryTypes.TransferOrderOrderStatus;
  subsidiary?: PlatformCore.RecordRef;
  toSubsidiary?: PlatformCore.RecordRef;
  employee?: PlatformCore.RecordRef;
  useItemCostAsTransferCost?: boolean;
  incoterm?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  transferLocation?: PlatformCore.RecordRef;
  memo?: string;
  shipDate?: SoapTypes.Dateish;
  shipMethod?: PlatformCore.RecordRef;
  trackingNumbers?: string;
  linkedTrackingNumbers?: string;
  shipComplete?: boolean;
  altShippingCost?: number;
  shippingTax1Rate?: number;
  handlingTax1Rate?: number;
  shippingTax2Rate?: number;
  handlingTax2Rate?: number;
  shippingTaxCode?: PlatformCore.RecordRef;
  handlingTaxCode?: PlatformCore.RecordRef;
  total?: number;
  itemList?: InterCompanyTransferOrderItemList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: InterCompanyTransferOrder) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.shippingCost = props.shippingCost;
    this.subTotal = props.subTotal;
    this.status = props.status;
    this.shippingAddress = props.shippingAddress;
    this.shipIsResidential = props.shipIsResidential;
    this.shipAddressList = props.shipAddressList;
    this.fob = props.fob;
    this.tranDate = props.tranDate;
    this.tranId = props.tranId;
    this.source = props.source;
    this.orderStatus = props.orderStatus;
    this.subsidiary = props.subsidiary;
    this.toSubsidiary = props.toSubsidiary;
    this.employee = props.employee;
    this.useItemCostAsTransferCost = props.useItemCostAsTransferCost;
    this.incoterm = props.incoterm;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.transferLocation = props.transferLocation;
    this.memo = props.memo;
    this.shipDate = props.shipDate;
    this.shipMethod = props.shipMethod;
    this.trackingNumbers = props.trackingNumbers;
    this.linkedTrackingNumbers = props.linkedTrackingNumbers;
    this.shipComplete = props.shipComplete;
    this.altShippingCost = props.altShippingCost;
    this.shippingTax1Rate = props.shippingTax1Rate;
    this.handlingTax1Rate = props.handlingTax1Rate;
    this.shippingTax2Rate = props.shippingTax2Rate;
    this.handlingTax2Rate = props.handlingTax2Rate;
    this.shippingTaxCode = props.shippingTaxCode;
    this.handlingTaxCode = props.handlingTaxCode;
    this.total = props.total;
    this.itemList = props.itemList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class InventoryTransferInventory extends SoapTypes.Base {
  line?: number;
  item?: PlatformCore.RecordRef;
  description?: string;
  units?: PlatformCore.RecordRef;
  quantityOnHand?: number;
  adjustQtyBy?: number;
  serialNumbers?: string;
  fromBinNumbers?: string;
  toBinNumbers?: string;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: InventoryTransferInventory) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.line = props.line;
    this.item = props.item;
    this.description = props.description;
    this.units = props.units;
    this.quantityOnHand = props.quantityOnHand;
    this.adjustQtyBy = props.adjustQtyBy;
    this.serialNumbers = props.serialNumbers;
    this.fromBinNumbers = props.fromBinNumbers;
    this.toBinNumbers = props.toBinNumbers;
    this.inventoryDetail = props.inventoryDetail;
    this.customFieldList = props.customFieldList;
  }
}
