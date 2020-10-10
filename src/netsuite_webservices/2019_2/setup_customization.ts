import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as SetupCustomizationTypes from "./setup_customization_types";
import * as PlatformCommonTypes from "./platform_common_types";

export class CustomRecordTypeTabs {
  tabTitle?: string;
  tabParent?: PlatformCore.RecordRef;
  tabTitleLanguageValueList?: LanguageValueList;
  constructor(props: CustomRecordTypeTabs) {
    this.tabTitle = props.tabTitle;
    this.tabParent = props.tabParent;
    this.tabTitleLanguageValueList = props.tabTitleLanguageValueList;
  }
}

export class CustomRecord extends PlatformCore.Record {
  customRecordId?: string;
  customForm?: PlatformCore.RecordRef;
  isInactive?: boolean;
  parent?: PlatformCore.RecordRef;
  disclaimer?: string;
  created?: string;
  lastModified?: string;
  name?: string;
  autoName?: boolean;
  altName?: string;
  owner?: PlatformCore.RecordRef;
  recType?: PlatformCore.RecordRef;
  enableNumbering?: boolean;
  numberingPrefix?: string;
  numberingSuffix?: string;
  numberingMinDigits?: number;
  description?: string;
  numberingInit?: number;
  numberingCurrentNumber?: number;
  allowNumberingOverride?: boolean;
  isNumberingUpdateable?: boolean;
  translationsList?: CustomRecordTranslationsList;
  includeName?: boolean;
  showId?: boolean;
  showCreationDate?: boolean;
  showCreationDateOnList?: boolean;
  showLastModified?: boolean;
  showLastModifiedOnList?: boolean;
  showOwner?: boolean;
  showOwnerOnList?: boolean;
  showOwnerAllowChange?: boolean;
  usePermissions?: boolean;
  allowAttachments?: boolean;
  showNotes?: boolean;
  enablEmailMerge?: boolean;
  isOrdered?: boolean;
  allowInlineEditing?: boolean;
  isAvailableOffline?: boolean;
  allowQuickSearch?: boolean;
  recordName?: string;
  scriptId?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: CustomRecord) {
    super(props);
    this.customRecordId = props.customRecordId;
    this.customForm = props.customForm;
    this.isInactive = props.isInactive;
    this.parent = props.parent;
    this.disclaimer = props.disclaimer;
    this.created = props.created;
    this.lastModified = props.lastModified;
    this.name = props.name;
    this.autoName = props.autoName;
    this.altName = props.altName;
    this.owner = props.owner;
    this.recType = props.recType;
    this.enableNumbering = props.enableNumbering;
    this.numberingPrefix = props.numberingPrefix;
    this.numberingSuffix = props.numberingSuffix;
    this.numberingMinDigits = props.numberingMinDigits;
    this.description = props.description;
    this.numberingInit = props.numberingInit;
    this.numberingCurrentNumber = props.numberingCurrentNumber;
    this.allowNumberingOverride = props.allowNumberingOverride;
    this.isNumberingUpdateable = props.isNumberingUpdateable;
    this.translationsList = props.translationsList;
    this.includeName = props.includeName;
    this.showId = props.showId;
    this.showCreationDate = props.showCreationDate;
    this.showCreationDateOnList = props.showCreationDateOnList;
    this.showLastModified = props.showLastModified;
    this.showLastModifiedOnList = props.showLastModifiedOnList;
    this.showOwner = props.showOwner;
    this.showOwnerOnList = props.showOwnerOnList;
    this.showOwnerAllowChange = props.showOwnerAllowChange;
    this.usePermissions = props.usePermissions;
    this.allowAttachments = props.allowAttachments;
    this.showNotes = props.showNotes;
    this.enablEmailMerge = props.enablEmailMerge;
    this.isOrdered = props.isOrdered;
    this.allowInlineEditing = props.allowInlineEditing;
    this.isAvailableOffline = props.isAvailableOffline;
    this.allowQuickSearch = props.allowQuickSearch;
    this.recordName = props.recordName;
    this.scriptId = props.scriptId;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CustomRecordTypeTabsList {
  tabs?: CustomRecordTypeTabs[];
  replaceAll?: boolean;
  constructor(props: CustomRecordTypeTabsList) {
    this.tabs = props.tabs;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomFieldType extends PlatformCore.Record {
  fieldType?: SetupCustomizationTypes.CustomizationFieldType;
  scriptId?: string;
  constructor(props: CustomFieldType) {
    super(props);
    this.fieldType = props.fieldType;
    this.scriptId = props.scriptId;
  }
}

export class OtherCustomField extends CustomFieldType {
  recType?: PlatformCore.RecordRef;
  label?: string;
  owner?: PlatformCore.RecordRef;
  description?: string;
  selectRecordType?: PlatformCore.RecordRef;
  storeValue?: boolean;
  showInList?: boolean;
  insertBefore?: PlatformCore.RecordRef;
  displayType?: SetupCustomizationTypes.CustomizationDisplayType;
  displayWidth?: number;
  displayHeight?: number;
  help?: string;
  linkText?: string;
  isMandatory?: boolean;
  checkSpelling?: boolean;
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
  defaultChecked?: boolean;
  defaultValue?: string;
  isFormula?: boolean;
  defaultSelection?: PlatformCore.RecordRef;
  dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
  searchDefault?: PlatformCore.RecordRef;
  searchCompareField?: PlatformCore.RecordRef;
  sourceList?: PlatformCore.RecordRef;
  sourceFrom?: PlatformCore.RecordRef;
  sourceFilterBy?: PlatformCore.RecordRef;
  customSegment?: PlatformCore.RecordRef;
  filterList?: OtherCustomFieldFilterList;
  accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
  searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
  roleAccessList?: CustomFieldRoleAccessList;
  deptAccessList?: CustomFieldDepartmentAccessList;
  subAccessList?: CustomFieldSubAccessList;
  translationsList?: CustomFieldTranslationsList;
  internalId?: string;
  constructor(props: OtherCustomField) {
    super(props);
    this.recType = props.recType;
    this.label = props.label;
    this.owner = props.owner;
    this.description = props.description;
    this.selectRecordType = props.selectRecordType;
    this.storeValue = props.storeValue;
    this.showInList = props.showInList;
    this.insertBefore = props.insertBefore;
    this.displayType = props.displayType;
    this.displayWidth = props.displayWidth;
    this.displayHeight = props.displayHeight;
    this.help = props.help;
    this.linkText = props.linkText;
    this.isMandatory = props.isMandatory;
    this.checkSpelling = props.checkSpelling;
    this.maxLength = props.maxLength;
    this.minValue = props.minValue;
    this.maxValue = props.maxValue;
    this.defaultChecked = props.defaultChecked;
    this.defaultValue = props.defaultValue;
    this.isFormula = props.isFormula;
    this.defaultSelection = props.defaultSelection;
    this.dynamicDefault = props.dynamicDefault;
    this.searchDefault = props.searchDefault;
    this.searchCompareField = props.searchCompareField;
    this.sourceList = props.sourceList;
    this.sourceFrom = props.sourceFrom;
    this.sourceFilterBy = props.sourceFilterBy;
    this.customSegment = props.customSegment;
    this.filterList = props.filterList;
    this.accessLevel = props.accessLevel;
    this.searchLevel = props.searchLevel;
    this.roleAccessList = props.roleAccessList;
    this.deptAccessList = props.deptAccessList;
    this.subAccessList = props.subAccessList;
    this.translationsList = props.translationsList;
    this.internalId = props.internalId;
  }
}

export class TransactionColumnCustomFieldFilter {
  fldFilter?: PlatformCore.RecordRef;
  fldFilterChecked?: boolean;
  fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
  fldFilterVal?: string;
  fldFilterSelList?: FldFilterSelList;
  fldFilterNotNull?: boolean;
  constructor(props: TransactionColumnCustomFieldFilter) {
    this.fldFilter = props.fldFilter;
    this.fldFilterChecked = props.fldFilterChecked;
    this.fldFilterCompareType = props.fldFilterCompareType;
    this.fldFilterVal = props.fldFilterVal;
    this.fldFilterSelList = props.fldFilterSelList;
    this.fldFilterNotNull = props.fldFilterNotNull;
  }
}

export class CustomSaleItem {
  item?: PlatformCore.RecordRef;
  line?: number;
  description?: string;
  amount?: number;
  isTaxable?: boolean;
  options?: PlatformCore.CustomFieldList;
  deferRevRec?: boolean;
  quantity?: number;
  currentPercent?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  serialNumbers?: string;
  binNumbers?: string;
  price?: PlatformCore.RecordRef;
  rate?: string;
  percentComplete?: number;
  quantityOnHand?: number;
  quantityAvailable?: number;
  quantityRemaining?: number;
  department?: PlatformCore.RecordRef;
  licenseCode?: string;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  revRecSchedule?: PlatformCore.RecordRef;
  revRecStartDate?: string;
  revRecEndDate?: string;
  grossAmt?: number;
  costEstimateType?: PlatformCommonTypes.ItemCostEstimateType;
  costEstimate?: number;
  taxDetailsReference?: string;
  excludeFromRateRequest?: boolean;
  catchUpPeriod?: PlatformCore.RecordRef;
  giftCertFrom?: string;
  giftCertRecipientName?: string;
  giftCertRecipientEmail?: string;
  giftCertMessage?: string;
  taxAmount?: number;
  vsoeSopGroup?: PlatformCommonTypes.VsoeSopGroup;
  vsoeIsEstimate?: boolean;
  vsoePrice?: number;
  vsoeAmount?: number;
  vsoeAllocation?: number;
  vsoeDeferral?: PlatformCommonTypes.VsoeDeferral;
  vsoePermitDiscount?: PlatformCommonTypes.VsoePermitDiscount;
  vsoeDelivered?: boolean;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: CustomSaleItem) {
    this.item = props.item;
    this.line = props.line;
    this.description = props.description;
    this.amount = props.amount;
    this.isTaxable = props.isTaxable;
    this.options = props.options;
    this.deferRevRec = props.deferRevRec;
    this.quantity = props.quantity;
    this.currentPercent = props.currentPercent;
    this.units = props.units;
    this.inventoryDetail = props.inventoryDetail;
    this.serialNumbers = props.serialNumbers;
    this.binNumbers = props.binNumbers;
    this.price = props.price;
    this.rate = props.rate;
    this.percentComplete = props.percentComplete;
    this.quantityOnHand = props.quantityOnHand;
    this.quantityAvailable = props.quantityAvailable;
    this.quantityRemaining = props.quantityRemaining;
    this.department = props.department;
    this.licenseCode = props.licenseCode;
    this.clazz = props.clazz;
    this.location = props.location;
    this.revRecSchedule = props.revRecSchedule;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecEndDate = props.revRecEndDate;
    this.grossAmt = props.grossAmt;
    this.costEstimateType = props.costEstimateType;
    this.costEstimate = props.costEstimate;
    this.taxDetailsReference = props.taxDetailsReference;
    this.excludeFromRateRequest = props.excludeFromRateRequest;
    this.catchUpPeriod = props.catchUpPeriod;
    this.giftCertFrom = props.giftCertFrom;
    this.giftCertRecipientName = props.giftCertRecipientName;
    this.giftCertRecipientEmail = props.giftCertRecipientEmail;
    this.giftCertMessage = props.giftCertMessage;
    this.taxAmount = props.taxAmount;
    this.vsoeSopGroup = props.vsoeSopGroup;
    this.vsoeIsEstimate = props.vsoeIsEstimate;
    this.vsoePrice = props.vsoePrice;
    this.vsoeAmount = props.vsoeAmount;
    this.vsoeAllocation = props.vsoeAllocation;
    this.vsoeDeferral = props.vsoeDeferral;
    this.vsoePermitDiscount = props.vsoePermitDiscount;
    this.vsoeDelivered = props.vsoeDelivered;
    this.customFieldList = props.customFieldList;
  }
}

export class CustomListTranslations {
  locale?: PlatformCommonTypes.Language;
  localeDescription?: string;
  name?: string;
  constructor(props: CustomListTranslations) {
    this.locale = props.locale;
    this.localeDescription = props.localeDescription;
    this.name = props.name;
  }
}

export class ItemOptionCustomFieldFilter {
  fldFilter?: PlatformCore.RecordRef;
  fldFilterChecked?: boolean;
  fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
  fldFilterVal?: string;
  fldFilterSelList?: FldFilterSelList;
  fldFilterNotNull?: boolean;
  constructor(props: ItemOptionCustomFieldFilter) {
    this.fldFilter = props.fldFilter;
    this.fldFilterChecked = props.fldFilterChecked;
    this.fldFilterCompareType = props.fldFilterCompareType;
    this.fldFilterVal = props.fldFilterVal;
    this.fldFilterSelList = props.fldFilterSelList;
    this.fldFilterNotNull = props.fldFilterNotNull;
  }
}

export class CustomRecordTypeParentsList {
  parents?: CustomRecordTypeParents[];
  replaceAll?: boolean;
  constructor(props: CustomRecordTypeParentsList) {
    this.parents = props.parents;
    this.replaceAll = props.replaceAll;
  }
}

export class CrmCustomFieldFilterList {
  filter?: CrmCustomFieldFilter[];
  replaceAll?: boolean;
  constructor(props: CrmCustomFieldFilterList) {
    this.filter = props.filter;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomListSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CustomListSearch;
  columns?: CustomListSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CustomListSearchAdvanced) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class TransactionColumnCustomFieldFilterList {
  filter?: TransactionColumnCustomFieldFilter[];
  replaceAll?: boolean;
  constructor(props: TransactionColumnCustomFieldFilterList) {
    this.filter = props.filter;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomRecordTranslationsList {
  customRecordTranslations?: CustomRecordTranslations[];
  replaceAll?: boolean;
  constructor(props: CustomRecordTranslationsList) {
    this.customRecordTranslations = props.customRecordTranslations;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomList extends PlatformCore.Record {
  name?: string;
  owner?: PlatformCore.RecordRef;
  isOrdered?: boolean;
  description?: string;
  isMatrixOption?: boolean;
  scriptId?: string;
  convertToCustomRecord?: boolean;
  isInactive?: boolean;
  customValueList?: CustomListCustomValueList;
  translationsList?: CustomListTranslationsList;
  internalId?: string;
  constructor(props: CustomList) {
    super(props);
    this.name = props.name;
    this.owner = props.owner;
    this.isOrdered = props.isOrdered;
    this.description = props.description;
    this.isMatrixOption = props.isMatrixOption;
    this.scriptId = props.scriptId;
    this.convertToCustomRecord = props.convertToCustomRecord;
    this.isInactive = props.isInactive;
    this.customValueList = props.customValueList;
    this.translationsList = props.translationsList;
    this.internalId = props.internalId;
  }
}

export class ItemCustomField extends CustomFieldType {
  label?: string;
  owner?: PlatformCore.RecordRef;
  itemMatrix?: boolean;
  description?: string;
  selectRecordType?: PlatformCore.RecordRef;
  storeValue?: boolean;
  showInList?: boolean;
  globalSearch?: boolean;
  isParent?: boolean;
  insertBefore?: PlatformCore.RecordRef;
  subtab?: PlatformCore.RecordRef;
  displayType?: SetupCustomizationTypes.CustomizationDisplayType;
  displayWidth?: number;
  displayHeight?: number;
  help?: string;
  parentSubtab?: PlatformCore.RecordRef;
  linkText?: string;
  isMandatory?: boolean;
  checkSpelling?: boolean;
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
  defaultChecked?: boolean;
  defaultValue?: string;
  isFormula?: boolean;
  defaultSelection?: PlatformCore.RecordRef;
  dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
  searchDefault?: PlatformCore.RecordRef;
  searchCompareField?: PlatformCore.RecordRef;
  sourceList?: PlatformCore.RecordRef;
  sourceFrom?: PlatformCore.RecordRef;
  sourceFilterBy?: PlatformCore.RecordRef;
  customSegment?: PlatformCore.RecordRef;
  appliesToInventory?: boolean;
  appliesToNonInventory?: boolean;
  appliesToService?: boolean;
  appliesToOtherCharge?: boolean;
  appliesToGroup?: boolean;
  appliesToKit?: boolean;
  appliesToItemAssembly?: boolean;
  availableToSso?: boolean;
  itemSubType?: SetupCustomizationTypes.ItemCustomFieldItemSubType;
  filterList?: ItemCustomFieldFilterList;
  appliesToPriceList?: boolean;
  accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
  searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
  roleAccessList?: CustomFieldRoleAccessList;
  deptAccessList?: CustomFieldDepartmentAccessList;
  subAccessList?: CustomFieldSubAccessList;
  translationsList?: CustomFieldTranslationsList;
  internalId?: string;
  constructor(props: ItemCustomField) {
    super(props);
    this.label = props.label;
    this.owner = props.owner;
    this.itemMatrix = props.itemMatrix;
    this.description = props.description;
    this.selectRecordType = props.selectRecordType;
    this.storeValue = props.storeValue;
    this.showInList = props.showInList;
    this.globalSearch = props.globalSearch;
    this.isParent = props.isParent;
    this.insertBefore = props.insertBefore;
    this.subtab = props.subtab;
    this.displayType = props.displayType;
    this.displayWidth = props.displayWidth;
    this.displayHeight = props.displayHeight;
    this.help = props.help;
    this.parentSubtab = props.parentSubtab;
    this.linkText = props.linkText;
    this.isMandatory = props.isMandatory;
    this.checkSpelling = props.checkSpelling;
    this.maxLength = props.maxLength;
    this.minValue = props.minValue;
    this.maxValue = props.maxValue;
    this.defaultChecked = props.defaultChecked;
    this.defaultValue = props.defaultValue;
    this.isFormula = props.isFormula;
    this.defaultSelection = props.defaultSelection;
    this.dynamicDefault = props.dynamicDefault;
    this.searchDefault = props.searchDefault;
    this.searchCompareField = props.searchCompareField;
    this.sourceList = props.sourceList;
    this.sourceFrom = props.sourceFrom;
    this.sourceFilterBy = props.sourceFilterBy;
    this.customSegment = props.customSegment;
    this.appliesToInventory = props.appliesToInventory;
    this.appliesToNonInventory = props.appliesToNonInventory;
    this.appliesToService = props.appliesToService;
    this.appliesToOtherCharge = props.appliesToOtherCharge;
    this.appliesToGroup = props.appliesToGroup;
    this.appliesToKit = props.appliesToKit;
    this.appliesToItemAssembly = props.appliesToItemAssembly;
    this.availableToSso = props.availableToSso;
    this.itemSubType = props.itemSubType;
    this.filterList = props.filterList;
    this.appliesToPriceList = props.appliesToPriceList;
    this.accessLevel = props.accessLevel;
    this.searchLevel = props.searchLevel;
    this.roleAccessList = props.roleAccessList;
    this.deptAccessList = props.deptAccessList;
    this.subAccessList = props.subAccessList;
    this.translationsList = props.translationsList;
    this.internalId = props.internalId;
  }
}

export class TransactionBodyCustomFieldFilter {
  fldFilter?: PlatformCore.RecordRef;
  fldFilterChecked?: boolean;
  fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
  fldFilterVal?: string;
  fldFilterSelList?: FldFilterSelList;
  fldFilterNotNull?: boolean;
  constructor(props: TransactionBodyCustomFieldFilter) {
    this.fldFilter = props.fldFilter;
    this.fldFilterChecked = props.fldFilterChecked;
    this.fldFilterCompareType = props.fldFilterCompareType;
    this.fldFilterVal = props.fldFilterVal;
    this.fldFilterSelList = props.fldFilterSelList;
    this.fldFilterNotNull = props.fldFilterNotNull;
  }
}

export class CustomPurchaseItemList {
  item?: CustomPurchaseItem[];
  replaceAll?: boolean;
  constructor(props: CustomPurchaseItemList) {
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomTransactionLine {
  account?: PlatformCore.RecordRef;
  line?: number;
  debit?: number;
  credit?: number;
  amount?: number;
  memo?: string;
  entity?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: CustomTransactionLine) {
    this.account = props.account;
    this.line = props.line;
    this.debit = props.debit;
    this.credit = props.credit;
    this.amount = props.amount;
    this.memo = props.memo;
    this.entity = props.entity;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customFieldList = props.customFieldList;
  }
}

export class CustomRecordCustomField extends CustomFieldType {
  label?: string;
  owner?: PlatformCore.RecordRef;
  description?: string;
  selectRecordType?: PlatformCore.RecordRef;
  storeValue?: boolean;
  showInList?: boolean;
  globalSearch?: boolean;
  isParent?: boolean;
  insertBefore?: PlatformCore.RecordRef;
  subtab?: PlatformCore.RecordRef;
  displayType?: SetupCustomizationTypes.CustomizationDisplayType;
  displayWidth?: number;
  displayHeight?: number;
  help?: string;
  parentSubtab?: PlatformCore.RecordRef;
  linkText?: string;
  isMandatory?: boolean;
  checkSpelling?: boolean;
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
  defaultChecked?: boolean;
  defaultValue?: string;
  isFormula?: boolean;
  defaultSelection?: PlatformCore.RecordRef;
  dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
  searchDefault?: PlatformCore.RecordRef;
  searchCompareField?: PlatformCore.RecordRef;
  sourceList?: PlatformCore.RecordRef;
  sourceFrom?: PlatformCore.RecordRef;
  sourcefilterby?: PlatformCore.RecordRef;
  customSegment?: PlatformCore.RecordRef;
  recType?: string;
  roleRestrict?: boolean;
  filterList?: CustomRecordCustomFieldFilterList;
  accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
  searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
  roleAccessList?: CustomFieldRoleAccessList;
  deptAccessList?: CustomFieldDepartmentAccessList;
  subAccessList?: CustomFieldSubAccessList;
  translationsList?: CustomFieldTranslationsList;
  internalId?: string;
  constructor(props: CustomRecordCustomField) {
    super(props);
    this.label = props.label;
    this.owner = props.owner;
    this.description = props.description;
    this.selectRecordType = props.selectRecordType;
    this.storeValue = props.storeValue;
    this.showInList = props.showInList;
    this.globalSearch = props.globalSearch;
    this.isParent = props.isParent;
    this.insertBefore = props.insertBefore;
    this.subtab = props.subtab;
    this.displayType = props.displayType;
    this.displayWidth = props.displayWidth;
    this.displayHeight = props.displayHeight;
    this.help = props.help;
    this.parentSubtab = props.parentSubtab;
    this.linkText = props.linkText;
    this.isMandatory = props.isMandatory;
    this.checkSpelling = props.checkSpelling;
    this.maxLength = props.maxLength;
    this.minValue = props.minValue;
    this.maxValue = props.maxValue;
    this.defaultChecked = props.defaultChecked;
    this.defaultValue = props.defaultValue;
    this.isFormula = props.isFormula;
    this.defaultSelection = props.defaultSelection;
    this.dynamicDefault = props.dynamicDefault;
    this.searchDefault = props.searchDefault;
    this.searchCompareField = props.searchCompareField;
    this.sourceList = props.sourceList;
    this.sourceFrom = props.sourceFrom;
    this.sourcefilterby = props.sourcefilterby;
    this.customSegment = props.customSegment;
    this.recType = props.recType;
    this.roleRestrict = props.roleRestrict;
    this.filterList = props.filterList;
    this.accessLevel = props.accessLevel;
    this.searchLevel = props.searchLevel;
    this.roleAccessList = props.roleAccessList;
    this.deptAccessList = props.deptAccessList;
    this.subAccessList = props.subAccessList;
    this.translationsList = props.translationsList;
    this.internalId = props.internalId;
  }
}

export class ItemOptionCustomFieldFilterList {
  filter?: ItemOptionCustomFieldFilter[];
  replaceAll?: boolean;
  constructor(props: ItemOptionCustomFieldFilterList) {
    this.filter = props.filter;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomRecordTypeSublistsList {
  sublists?: CustomRecordTypeSublists[];
  replaceAll?: boolean;
  constructor(props: CustomRecordTypeSublistsList) {
    this.sublists = props.sublists;
    this.replaceAll = props.replaceAll;
  }
}

export class TransactionBodyCustomField extends CustomFieldType {
  label?: string;
  owner?: PlatformCore.RecordRef;
  description?: string;
  selectRecordType?: PlatformCore.RecordRef;
  storeValue?: boolean;
  showInList?: boolean;
  globalSearch?: boolean;
  isParent?: boolean;
  insertBefore?: PlatformCore.RecordRef;
  subtab?: PlatformCore.RecordRef;
  availableToSso?: boolean;
  displayType?: SetupCustomizationTypes.CustomizationDisplayType;
  displayWidth?: number;
  displayHeight?: number;
  help?: string;
  parentSubtab?: PlatformCore.RecordRef;
  linkText?: string;
  isMandatory?: boolean;
  checkSpelling?: boolean;
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
  defaultChecked?: boolean;
  defaultValue?: string;
  isFormula?: boolean;
  defaultSelection?: PlatformCore.RecordRef;
  dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
  searchDefault?: PlatformCore.RecordRef;
  searchCompareField?: PlatformCore.RecordRef;
  sourceList?: PlatformCore.RecordRef;
  sourceFrom?: PlatformCore.RecordRef;
  sourceFilterBy?: PlatformCore.RecordRef;
  customSegment?: PlatformCore.RecordRef;
  bodyPurchase?: boolean;
  bodySale?: boolean;
  bodyOpportunity?: boolean;
  bodyJournal?: boolean;
  bodyExpenseReport?: boolean;
  bodyStore?: boolean;
  bodyTransferOrder?: boolean;
  bodyItemReceipt?: boolean;
  bodyItemReceiptOrder?: boolean;
  bodyItemFulfillment?: boolean;
  bodyItemFulfillmentOrder?: boolean;
  bodyInventoryAdjustment?: boolean;
  bodyBTegata?: boolean;
  bodyAssemblyBuild?: boolean;
  bodyPrintFlag?: boolean;
  bodyPickingTicket?: boolean;
  bodyOtherTransaction?: boolean;
  bodyPrintPackingSlip?: boolean;
  bodyCustomerPayment?: boolean;
  bodyVendorPayment?: boolean;
  bodyDeposit?: boolean;
  bodyBom?: boolean;
  bodyPrintStatement?: boolean;
  filterList?: TransactionBodyCustomFieldFilterList;
  accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
  searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
  roleAccessList?: CustomFieldRoleAccessList;
  deptAccessList?: CustomFieldDepartmentAccessList;
  subAccessList?: CustomFieldSubAccessList;
  translationsList?: CustomFieldTranslationsList;
  internalId?: string;
  constructor(props: TransactionBodyCustomField) {
    super(props);
    this.label = props.label;
    this.owner = props.owner;
    this.description = props.description;
    this.selectRecordType = props.selectRecordType;
    this.storeValue = props.storeValue;
    this.showInList = props.showInList;
    this.globalSearch = props.globalSearch;
    this.isParent = props.isParent;
    this.insertBefore = props.insertBefore;
    this.subtab = props.subtab;
    this.availableToSso = props.availableToSso;
    this.displayType = props.displayType;
    this.displayWidth = props.displayWidth;
    this.displayHeight = props.displayHeight;
    this.help = props.help;
    this.parentSubtab = props.parentSubtab;
    this.linkText = props.linkText;
    this.isMandatory = props.isMandatory;
    this.checkSpelling = props.checkSpelling;
    this.maxLength = props.maxLength;
    this.minValue = props.minValue;
    this.maxValue = props.maxValue;
    this.defaultChecked = props.defaultChecked;
    this.defaultValue = props.defaultValue;
    this.isFormula = props.isFormula;
    this.defaultSelection = props.defaultSelection;
    this.dynamicDefault = props.dynamicDefault;
    this.searchDefault = props.searchDefault;
    this.searchCompareField = props.searchCompareField;
    this.sourceList = props.sourceList;
    this.sourceFrom = props.sourceFrom;
    this.sourceFilterBy = props.sourceFilterBy;
    this.customSegment = props.customSegment;
    this.bodyPurchase = props.bodyPurchase;
    this.bodySale = props.bodySale;
    this.bodyOpportunity = props.bodyOpportunity;
    this.bodyJournal = props.bodyJournal;
    this.bodyExpenseReport = props.bodyExpenseReport;
    this.bodyStore = props.bodyStore;
    this.bodyTransferOrder = props.bodyTransferOrder;
    this.bodyItemReceipt = props.bodyItemReceipt;
    this.bodyItemReceiptOrder = props.bodyItemReceiptOrder;
    this.bodyItemFulfillment = props.bodyItemFulfillment;
    this.bodyItemFulfillmentOrder = props.bodyItemFulfillmentOrder;
    this.bodyInventoryAdjustment = props.bodyInventoryAdjustment;
    this.bodyBTegata = props.bodyBTegata;
    this.bodyAssemblyBuild = props.bodyAssemblyBuild;
    this.bodyPrintFlag = props.bodyPrintFlag;
    this.bodyPickingTicket = props.bodyPickingTicket;
    this.bodyOtherTransaction = props.bodyOtherTransaction;
    this.bodyPrintPackingSlip = props.bodyPrintPackingSlip;
    this.bodyCustomerPayment = props.bodyCustomerPayment;
    this.bodyVendorPayment = props.bodyVendorPayment;
    this.bodyDeposit = props.bodyDeposit;
    this.bodyBom = props.bodyBom;
    this.bodyPrintStatement = props.bodyPrintStatement;
    this.filterList = props.filterList;
    this.accessLevel = props.accessLevel;
    this.searchLevel = props.searchLevel;
    this.roleAccessList = props.roleAccessList;
    this.deptAccessList = props.deptAccessList;
    this.subAccessList = props.subAccessList;
    this.translationsList = props.translationsList;
    this.internalId = props.internalId;
  }
}

export class TransactionBodyCustomFieldFilterList {
  filter?: TransactionBodyCustomFieldFilter[];
  replaceAll?: boolean;
  constructor(props: TransactionBodyCustomFieldFilterList) {
    this.filter = props.filter;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomFieldSubAccess {
  sub?: PlatformCore.RecordRef;
  accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
  searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
  constructor(props: CustomFieldSubAccess) {
    this.sub = props.sub;
    this.accessLevel = props.accessLevel;
    this.searchLevel = props.searchLevel;
  }
}

export class TransactionColumnCustomField extends CustomFieldType {
  label?: string;
  owner?: PlatformCore.RecordRef;
  description?: string;
  selectRecordType?: PlatformCore.RecordRef;
  storeValue?: boolean;
  insertBefore?: PlatformCore.RecordRef;
  availableToSso?: boolean;
  displayType?: SetupCustomizationTypes.CustomizationDisplayType;
  displayWidth?: number;
  displayHeight?: number;
  help?: string;
  linkText?: string;
  isMandatory?: boolean;
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
  defaultChecked?: boolean;
  defaultValue?: string;
  isFormula?: boolean;
  defaultSelection?: PlatformCore.RecordRef;
  dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
  sourceList?: PlatformCore.RecordRef;
  sourceFrom?: PlatformCore.RecordRef;
  sourceFilterBy?: PlatformCore.RecordRef;
  customSegment?: PlatformCore.RecordRef;
  colExpense?: boolean;
  colPurchase?: boolean;
  colSale?: boolean;
  colOpportunity?: boolean;
  colStore?: boolean;
  colStoreHidden?: boolean;
  colJournal?: boolean;
  colBuild?: boolean;
  colExpenseReport?: boolean;
  colTime?: boolean;
  colTransferOrder?: boolean;
  colTimeGroup?: boolean;
  colItemReceipt?: boolean;
  colItemReceiptOrder?: boolean;
  colItemFulfillment?: boolean;
  colItemFulfillmentOrder?: boolean;
  colPrintFlag?: boolean;
  colPickingTicket?: boolean;
  colPackingSlip?: boolean;
  colReturnForm?: boolean;
  colStoreWithGroups?: boolean;
  colGroupOnInvoices?: boolean;
  colKitItem?: boolean;
  filterList?: TransactionColumnCustomFieldFilterList;
  accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
  searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
  roleAccessList?: CustomFieldRoleAccessList;
  deptAccessList?: CustomFieldDepartmentAccessList;
  subAccessList?: CustomFieldSubAccessList;
  translationsList?: CustomFieldTranslationsList;
  internalId?: string;
  constructor(props: TransactionColumnCustomField) {
    super(props);
    this.label = props.label;
    this.owner = props.owner;
    this.description = props.description;
    this.selectRecordType = props.selectRecordType;
    this.storeValue = props.storeValue;
    this.insertBefore = props.insertBefore;
    this.availableToSso = props.availableToSso;
    this.displayType = props.displayType;
    this.displayWidth = props.displayWidth;
    this.displayHeight = props.displayHeight;
    this.help = props.help;
    this.linkText = props.linkText;
    this.isMandatory = props.isMandatory;
    this.maxLength = props.maxLength;
    this.minValue = props.minValue;
    this.maxValue = props.maxValue;
    this.defaultChecked = props.defaultChecked;
    this.defaultValue = props.defaultValue;
    this.isFormula = props.isFormula;
    this.defaultSelection = props.defaultSelection;
    this.dynamicDefault = props.dynamicDefault;
    this.sourceList = props.sourceList;
    this.sourceFrom = props.sourceFrom;
    this.sourceFilterBy = props.sourceFilterBy;
    this.customSegment = props.customSegment;
    this.colExpense = props.colExpense;
    this.colPurchase = props.colPurchase;
    this.colSale = props.colSale;
    this.colOpportunity = props.colOpportunity;
    this.colStore = props.colStore;
    this.colStoreHidden = props.colStoreHidden;
    this.colJournal = props.colJournal;
    this.colBuild = props.colBuild;
    this.colExpenseReport = props.colExpenseReport;
    this.colTime = props.colTime;
    this.colTransferOrder = props.colTransferOrder;
    this.colTimeGroup = props.colTimeGroup;
    this.colItemReceipt = props.colItemReceipt;
    this.colItemReceiptOrder = props.colItemReceiptOrder;
    this.colItemFulfillment = props.colItemFulfillment;
    this.colItemFulfillmentOrder = props.colItemFulfillmentOrder;
    this.colPrintFlag = props.colPrintFlag;
    this.colPickingTicket = props.colPickingTicket;
    this.colPackingSlip = props.colPackingSlip;
    this.colReturnForm = props.colReturnForm;
    this.colStoreWithGroups = props.colStoreWithGroups;
    this.colGroupOnInvoices = props.colGroupOnInvoices;
    this.colKitItem = props.colKitItem;
    this.filterList = props.filterList;
    this.accessLevel = props.accessLevel;
    this.searchLevel = props.searchLevel;
    this.roleAccessList = props.roleAccessList;
    this.deptAccessList = props.deptAccessList;
    this.subAccessList = props.subAccessList;
    this.translationsList = props.translationsList;
    this.internalId = props.internalId;
  }
}

export class CustomListSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CustomListSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: CustomListSearchRow) {
    super();
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class CustomFieldTranslations {
  locale?: PlatformCommonTypes.Language;
  localeDescription?: string;
  label?: string;
  help?: string;
  constructor(props: CustomFieldTranslations) {
    this.locale = props.locale;
    this.localeDescription = props.localeDescription;
    this.label = props.label;
    this.help = props.help;
  }
}

export class ItemCustomFieldFilter {
  fldFilter?: PlatformCore.RecordRef;
  fldFilterChecked?: boolean;
  fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
  fldFilterVal?: string;
  fldFilterSelList?: FldFilterSelList;
  fldFilterNotNull?: boolean;
  constructor(props: ItemCustomFieldFilter) {
    this.fldFilter = props.fldFilter;
    this.fldFilterChecked = props.fldFilterChecked;
    this.fldFilterCompareType = props.fldFilterCompareType;
    this.fldFilterVal = props.fldFilterVal;
    this.fldFilterSelList = props.fldFilterSelList;
    this.fldFilterNotNull = props.fldFilterNotNull;
  }
}

export class CustomRecordTypeFieldList {
  customField?: CustomRecordCustomField[];
  replaceAll?: boolean;
  constructor(props: CustomRecordTypeFieldList) {
    this.customField = props.customField;
    this.replaceAll = props.replaceAll;
  }
}

export class ItemsList {
  items: PlatformCore.RecordRef[];
  constructor(props: ItemsList) {
    this.items = props.items;
  }
}

export class LanguageValueList {
  languageValue?: LanguageValue[];
  replaceAll?: boolean;
  constructor(props: LanguageValueList) {
    this.languageValue = props.languageValue;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomSegment extends PlatformCore.Record {
  label?: string;
  scriptId?: string;
  recordScriptId?: string;
  recordType?: PlatformCore.RecordRef;
  fieldType?: SetupCustomizationTypes.CustomizationFieldType;
  isInactive?: boolean;
  showInList?: boolean;
  filteredByList?: PlatformCore.RecordRefList;
  hasGLImpact?: boolean;
  help?: string;
  description?: string;
  isMandatory?: boolean;
  defaultSelection?: PlatformCore.RecordRef;
  internalId?: string;
  constructor(props: CustomSegment) {
    super(props);
    this.label = props.label;
    this.scriptId = props.scriptId;
    this.recordScriptId = props.recordScriptId;
    this.recordType = props.recordType;
    this.fieldType = props.fieldType;
    this.isInactive = props.isInactive;
    this.showInList = props.showInList;
    this.filteredByList = props.filteredByList;
    this.hasGLImpact = props.hasGLImpact;
    this.help = props.help;
    this.description = props.description;
    this.isMandatory = props.isMandatory;
    this.defaultSelection = props.defaultSelection;
    this.internalId = props.internalId;
  }
}

export class CustomRecordTypePermissionsList {
  permissions?: CustomRecordTypePermissions[];
  replaceAll?: boolean;
  constructor(props: CustomRecordTypePermissionsList) {
    this.permissions = props.permissions;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomPurchaseExpenseList {
  expense?: CustomPurchaseExpense[];
  replaceAll?: boolean;
  constructor(props: CustomPurchaseExpenseList) {
    this.expense = props.expense;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomRecordTypeChildrenList {
  children?: CustomRecordTypeChildren[];
  replaceAll?: boolean;
  constructor(props: CustomRecordTypeChildrenList) {
    this.children = props.children;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomListCustomValue {
  value?: string;
  abbreviation?: string;
  isInactive?: boolean;
  valueId?: number;
  valueLanguageValueList?: LanguageValueList;
  constructor(props: CustomListCustomValue) {
    this.value = props.value;
    this.abbreviation = props.abbreviation;
    this.isInactive = props.isInactive;
    this.valueId = props.valueId;
    this.valueLanguageValueList = props.valueLanguageValueList;
  }
}

export class CustomPurchase extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
  tranType?: PlatformCore.RecordRef;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  customForm?: PlatformCore.RecordRef;
  billAddressList?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  postingPeriod?: PlatformCore.RecordRef;
  tranDate?: string;
  currencyName?: string;
  billingAddress?: PlatformCommon.Address;
  exchangeRate?: number;
  entityTaxRegNum?: PlatformCore.RecordRef;
  terms?: PlatformCore.RecordRef;
  dueDate?: string;
  discountDate?: string;
  tranId?: string;
  createdFrom?: PlatformCore.RecordRef;
  userTotal?: number;
  discountAmount?: number;
  taxTotal?: number;
  paymentHold?: boolean;
  memo?: string;
  tranStatus?: PlatformCore.RecordRef;
  availableVendorCredit?: number;
  currency?: PlatformCore.RecordRef;
  incoterm?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  status?: string;
  transactionNumber?: string;
  expenseList?: CustomPurchaseExpenseList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  itemList?: CustomPurchaseItemList;
  purchaseOrderList?: PlatformCore.RecordRefList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: CustomPurchase) {
    super(props);
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.tranType = props.tranType;
    this.nexus = props.nexus;
    this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
    this.taxRegOverride = props.taxRegOverride;
    this.taxDetailsOverride = props.taxDetailsOverride;
    this.customForm = props.customForm;
    this.billAddressList = props.billAddressList;
    this.account = props.account;
    this.entity = props.entity;
    this.subsidiary = props.subsidiary;
    this.postingPeriod = props.postingPeriod;
    this.tranDate = props.tranDate;
    this.currencyName = props.currencyName;
    this.billingAddress = props.billingAddress;
    this.exchangeRate = props.exchangeRate;
    this.entityTaxRegNum = props.entityTaxRegNum;
    this.terms = props.terms;
    this.dueDate = props.dueDate;
    this.discountDate = props.discountDate;
    this.tranId = props.tranId;
    this.createdFrom = props.createdFrom;
    this.userTotal = props.userTotal;
    this.discountAmount = props.discountAmount;
    this.taxTotal = props.taxTotal;
    this.paymentHold = props.paymentHold;
    this.memo = props.memo;
    this.tranStatus = props.tranStatus;
    this.availableVendorCredit = props.availableVendorCredit;
    this.currency = props.currency;
    this.incoterm = props.incoterm;
    this.clazz = props.clazz;
    this.department = props.department;
    this.location = props.location;
    this.status = props.status;
    this.transactionNumber = props.transactionNumber;
    this.expenseList = props.expenseList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.itemList = props.itemList;
    this.purchaseOrderList = props.purchaseOrderList;
    this.taxDetailsList = props.taxDetailsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CustomRecordTypeChildren {
  childDescr?: string;
  childTab?: PlatformCore.RecordRef;
  constructor(props: CustomRecordTypeChildren) {
    this.childDescr = props.childDescr;
    this.childTab = props.childTab;
  }
}

export class CustomRecordTypeTranslations {
  locale?: PlatformCommonTypes.Language;
  localeDescription?: string;
  name?: string;
  constructor(props: CustomRecordTypeTranslations) {
    this.locale = props.locale;
    this.localeDescription = props.localeDescription;
    this.name = props.name;
  }
}

export class CustomFieldTranslationsList {
  translations?: CustomFieldTranslations[];
  replaceAll?: boolean;
  constructor(props: CustomFieldTranslationsList) {
    this.translations = props.translations;
    this.replaceAll = props.replaceAll;
  }
}

export class ItemCustomFieldFilterList {
  filter?: ItemCustomFieldFilter[];
  replaceAll?: boolean;
  constructor(props: ItemCustomFieldFilterList) {
    this.filter = props.filter;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomListCustomValueList {
  customValue?: CustomListCustomValue[];
  replaceAll?: boolean;
  constructor(props: CustomListCustomValueList) {
    this.customValue = props.customValue;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomFieldDepartmentAccessList {
  deptAccess?: CustomFieldDepartmentAccess[];
  replaceAll?: boolean;
  constructor(props: CustomFieldDepartmentAccessList) {
    this.deptAccess = props.deptAccess;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomTransactionLineList {
  customTransactionLine?: CustomTransactionLine[];
  replaceAll?: boolean;
  constructor(props: CustomTransactionLineList) {
    this.customTransactionLine = props.customTransactionLine;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomSalePartnersList {
  partners?: PlatformCommon.Partners[];
  replaceAll?: boolean;
  constructor(props: CustomSalePartnersList) {
    this.partners = props.partners;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomSaleItemList {
  item?: CustomSaleItem[];
  replaceAll?: boolean;
  constructor(props: CustomSaleItemList) {
    this.item = props.item;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomRecordTypeManagers {
  managerEmp?: PlatformCore.RecordRef;
  constructor(props: CustomRecordTypeManagers) {
    this.managerEmp = props.managerEmp;
  }
}

export class CustomRecordCustomFieldFilterList {
  filter?: CustomRecordCustomFieldFilter[];
  replaceAll?: boolean;
  constructor(props: CustomRecordCustomFieldFilterList) {
    this.filter = props.filter;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomTransaction extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
  customForm?: PlatformCore.RecordRef;
  tranType?: PlatformCore.RecordRef;
  tranId?: string;
  total?: number;
  currency?: PlatformCore.RecordRef;
  voidJournal?: PlatformCore.RecordRef;
  exchangeRate?: number;
  tranDate?: string;
  postingPeriod?: PlatformCore.RecordRef;
  memo?: string;
  tranStatus?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  lineList?: CustomTransactionLineList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: CustomTransaction) {
    super(props);
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.customForm = props.customForm;
    this.tranType = props.tranType;
    this.tranId = props.tranId;
    this.total = props.total;
    this.currency = props.currency;
    this.voidJournal = props.voidJournal;
    this.exchangeRate = props.exchangeRate;
    this.tranDate = props.tranDate;
    this.postingPeriod = props.postingPeriod;
    this.memo = props.memo;
    this.tranStatus = props.tranStatus;
    this.subsidiary = props.subsidiary;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.lineList = props.lineList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class CustomRecordTypeParents {
  childDescr?: string;
  constructor(props: CustomRecordTypeParents) {
    this.childDescr = props.childDescr;
  }
}

export class CustomFieldRoleAccessList {
  roleAccess?: CustomFieldRoleAccess[];
  replaceAll?: boolean;
  constructor(props: CustomFieldRoleAccessList) {
    this.roleAccess = props.roleAccess;
    this.replaceAll = props.replaceAll;
  }
}

export class LanguageValue {
  locale?: PlatformCommonTypes.Language;
  value?: string;
  constructor(props: LanguageValue) {
    this.locale = props.locale;
    this.value = props.value;
  }
}

export class CustomListTranslationsList {
  translations?: CustomListTranslations[];
  replaceAll?: boolean;
  constructor(props: CustomListTranslationsList) {
    this.translations = props.translations;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomRecordTypeOnlineForms {
  onlineFormName?: string;
  isOnline?: string;
  templateName?: string;
  constructor(props: CustomRecordTypeOnlineForms) {
    this.onlineFormName = props.onlineFormName;
    this.isOnline = props.isOnline;
    this.templateName = props.templateName;
  }
}

export class CustomRecordTypeForms {
  formEdit?: string;
  formName?: string;
  formPref?: boolean;
  constructor(props: CustomRecordTypeForms) {
    this.formEdit = props.formEdit;
    this.formName = props.formName;
    this.formPref = props.formPref;
  }
}

export class CustomRecordTypeFormsList {
  forms?: CustomRecordTypeForms[];
  replaceAll?: boolean;
  constructor(props: CustomRecordTypeFormsList) {
    this.forms = props.forms;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomRecordTypeSublists {
  recordSearch?: PlatformCore.RecordRef;
  recordDescr?: string;
  recordDescrLanguageValueList?: LanguageValueList;
  recordTab?: PlatformCore.RecordRef;
  recordId?: string;
  constructor(props: CustomRecordTypeSublists) {
    this.recordSearch = props.recordSearch;
    this.recordDescr = props.recordDescr;
    this.recordDescrLanguageValueList = props.recordDescrLanguageValueList;
    this.recordTab = props.recordTab;
    this.recordId = props.recordId;
  }
}

export class CustomRecordSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: CustomRecordSearch;
  columns?: CustomRecordSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: CustomRecordSearchAdvanced) {
    super();
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class CrmCustomFieldFilter {
  fldFilter?: PlatformCore.RecordRef;
  fldFilterChecked?: boolean;
  fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
  fldFilterVal?: string;
  fldFilterSelList?: FldFilterSelList;
  fldFilterNotNull?: boolean;
  constructor(props: CrmCustomFieldFilter) {
    this.fldFilter = props.fldFilter;
    this.fldFilterChecked = props.fldFilterChecked;
    this.fldFilterCompareType = props.fldFilterCompareType;
    this.fldFilterVal = props.fldFilterVal;
    this.fldFilterSelList = props.fldFilterSelList;
    this.fldFilterNotNull = props.fldFilterNotNull;
  }
}

export class CustomSaleSalesTeam {
  employee?: PlatformCore.RecordRef;
  salesRole?: PlatformCore.RecordRef;
  isPrimary?: boolean;
  contribution?: number;
  constructor(props: CustomSaleSalesTeam) {
    this.employee = props.employee;
    this.salesRole = props.salesRole;
    this.isPrimary = props.isPrimary;
    this.contribution = props.contribution;
  }
}

export class CustomRecordTypeLinks {
  linkCenter?: PlatformCore.RecordRef;
  linkSection?: PlatformCore.RecordRef;
  linkLabel?: string;
  constructor(props: CustomRecordTypeLinks) {
    this.linkCenter = props.linkCenter;
    this.linkSection = props.linkSection;
    this.linkLabel = props.linkLabel;
  }
}

export class CustomPurchaseExpense {
  line?: number;
  category?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  amount?: number;
  taxAmount?: number;
  memo?: string;
  grossAmt?: number;
  taxDetailsReference?: string;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  projectTask?: PlatformCore.RecordRef;
  amortizationSched?: PlatformCore.RecordRef;
  amortizStartDate?: string;
  amortizationEndDate?: string;
  amortizationResidual?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: CustomPurchaseExpense) {
    this.line = props.line;
    this.category = props.category;
    this.account = props.account;
    this.amount = props.amount;
    this.taxAmount = props.taxAmount;
    this.memo = props.memo;
    this.grossAmt = props.grossAmt;
    this.taxDetailsReference = props.taxDetailsReference;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customer = props.customer;
    this.isBillable = props.isBillable;
    this.projectTask = props.projectTask;
    this.amortizationSched = props.amortizationSched;
    this.amortizStartDate = props.amortizStartDate;
    this.amortizationEndDate = props.amortizationEndDate;
    this.amortizationResidual = props.amortizationResidual;
    this.customFieldList = props.customFieldList;
  }
}

export class CustomRecordTranslations {
  locale?: PlatformCommonTypes.Language;
  language?: string;
  label?: string;
  constructor(props: CustomRecordTranslations) {
    this.locale = props.locale;
    this.language = props.language;
    this.label = props.label;
  }
}

export class CustomFieldSubAccessList {
  subAccess?: CustomFieldSubAccess[];
  replaceAll?: boolean;
  constructor(props: CustomFieldSubAccessList) {
    this.subAccess = props.subAccess;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomRecordTypeTranslationsList {
  translations?: CustomRecordTypeTranslations[];
  replaceAll?: boolean;
  constructor(props: CustomRecordTypeTranslationsList) {
    this.translations = props.translations;
    this.replaceAll = props.replaceAll;
  }
}

export class CrmCustomField extends CustomFieldType {
  label?: string;
  owner?: PlatformCore.RecordRef;
  description?: string;
  selectRecordType?: PlatformCore.RecordRef;
  storeValue?: boolean;
  showInList?: boolean;
  globalSearch?: boolean;
  isParent?: boolean;
  insertBefore?: PlatformCore.RecordRef;
  subtab?: PlatformCore.RecordRef;
  displayType?: SetupCustomizationTypes.CustomizationDisplayType;
  displayWidth?: number;
  displayHeight?: number;
  help?: string;
  parentSubtab?: PlatformCore.RecordRef;
  linkText?: string;
  isMandatory?: boolean;
  checkSpelling?: boolean;
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
  defaultChecked?: boolean;
  defaultValue?: string;
  isFormula?: boolean;
  defaultSelection?: PlatformCore.RecordRef;
  dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
  searchDefault?: PlatformCore.RecordRef;
  searchCompareField?: PlatformCore.RecordRef;
  sourceList?: PlatformCore.RecordRef;
  sourceFrom?: PlatformCore.RecordRef;
  sourceFilterBy?: PlatformCore.RecordRef;
  customSegment?: PlatformCore.RecordRef;
  appliesToTask?: boolean;
  appliesToMfgProjectTask?: boolean;
  appliesToProjectTask?: boolean;
  appliesToPhoneCall?: boolean;
  appliesToEvent?: boolean;
  appliesToCase?: boolean;
  appliesToCampaign?: boolean;
  appliesPerKeyword?: boolean;
  appliesToSolution?: boolean;
  appliesToIssue?: boolean;
  availableExternally?: boolean;
  availableToSso?: boolean;
  showIssueChanges?: boolean;
  filterList?: CrmCustomFieldFilterList;
  accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
  searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
  roleAccessList?: CustomFieldRoleAccessList;
  deptAccessList?: CustomFieldDepartmentAccessList;
  subAccessList?: CustomFieldSubAccessList;
  translationsList?: CustomFieldTranslationsList;
  internalId?: string;
  constructor(props: CrmCustomField) {
    super(props);
    this.label = props.label;
    this.owner = props.owner;
    this.description = props.description;
    this.selectRecordType = props.selectRecordType;
    this.storeValue = props.storeValue;
    this.showInList = props.showInList;
    this.globalSearch = props.globalSearch;
    this.isParent = props.isParent;
    this.insertBefore = props.insertBefore;
    this.subtab = props.subtab;
    this.displayType = props.displayType;
    this.displayWidth = props.displayWidth;
    this.displayHeight = props.displayHeight;
    this.help = props.help;
    this.parentSubtab = props.parentSubtab;
    this.linkText = props.linkText;
    this.isMandatory = props.isMandatory;
    this.checkSpelling = props.checkSpelling;
    this.maxLength = props.maxLength;
    this.minValue = props.minValue;
    this.maxValue = props.maxValue;
    this.defaultChecked = props.defaultChecked;
    this.defaultValue = props.defaultValue;
    this.isFormula = props.isFormula;
    this.defaultSelection = props.defaultSelection;
    this.dynamicDefault = props.dynamicDefault;
    this.searchDefault = props.searchDefault;
    this.searchCompareField = props.searchCompareField;
    this.sourceList = props.sourceList;
    this.sourceFrom = props.sourceFrom;
    this.sourceFilterBy = props.sourceFilterBy;
    this.customSegment = props.customSegment;
    this.appliesToTask = props.appliesToTask;
    this.appliesToMfgProjectTask = props.appliesToMfgProjectTask;
    this.appliesToProjectTask = props.appliesToProjectTask;
    this.appliesToPhoneCall = props.appliesToPhoneCall;
    this.appliesToEvent = props.appliesToEvent;
    this.appliesToCase = props.appliesToCase;
    this.appliesToCampaign = props.appliesToCampaign;
    this.appliesPerKeyword = props.appliesPerKeyword;
    this.appliesToSolution = props.appliesToSolution;
    this.appliesToIssue = props.appliesToIssue;
    this.availableExternally = props.availableExternally;
    this.availableToSso = props.availableToSso;
    this.showIssueChanges = props.showIssueChanges;
    this.filterList = props.filterList;
    this.accessLevel = props.accessLevel;
    this.searchLevel = props.searchLevel;
    this.roleAccessList = props.roleAccessList;
    this.deptAccessList = props.deptAccessList;
    this.subAccessList = props.subAccessList;
    this.translationsList = props.translationsList;
    this.internalId = props.internalId;
  }
}

export class CustomRecordType extends PlatformCore.Record {
  recordName?: string;
  includeName?: boolean;
  showId?: boolean;
  showCreationDate?: boolean;
  showCreationDateOnList?: boolean;
  showLastModified?: boolean;
  showLastModifiedOnList?: boolean;
  showOwner?: boolean;
  showOwnerOnList?: boolean;
  showOwnerAllowChange?: boolean;
  accessType?: SetupCustomizationTypes.CustomRecordTypeAccessType;
  allowAttachments?: boolean;
  showNotes?: boolean;
  enableMailMerge?: boolean;
  isOrdered?: boolean;
  isAvailableOffline?: boolean;
  allowQuickSearch?: boolean;
  hierarchical?: boolean;
  enableDle?: boolean;
  enableNameTranslation?: boolean;
  isInactive?: boolean;
  disclaimer?: string;
  enableNumbering?: boolean;
  numberingPrefix?: string;
  numberingSuffix?: string;
  numberingMinDigits?: number;
  numberingInit?: number;
  numberingCurrentNumber?: number;
  allowNumberingOverride?: boolean;
  isNumberingUpdateable?: boolean;
  owner?: PlatformCore.RecordRef;
  description?: string;
  tabsList?: CustomRecordTypeTabsList;
  sublistsList?: CustomRecordTypeSublistsList;
  formsList?: CustomRecordTypeFormsList;
  onlineFormsList?: CustomRecordTypeOnlineFormsList;
  permissionsList?: CustomRecordTypePermissionsList;
  linksList?: CustomRecordTypeLinksList;
  managersList?: CustomRecordTypeManagersList;
  childrenList?: CustomRecordTypeChildrenList;
  parentsList?: CustomRecordTypeParentsList;
  translationsList?: CustomRecordTypeTranslationsList;
  scriptId?: string;
  customFieldList?: CustomRecordTypeFieldList;
  internalId?: string;
  constructor(props: CustomRecordType) {
    super(props);
    this.recordName = props.recordName;
    this.includeName = props.includeName;
    this.showId = props.showId;
    this.showCreationDate = props.showCreationDate;
    this.showCreationDateOnList = props.showCreationDateOnList;
    this.showLastModified = props.showLastModified;
    this.showLastModifiedOnList = props.showLastModifiedOnList;
    this.showOwner = props.showOwner;
    this.showOwnerOnList = props.showOwnerOnList;
    this.showOwnerAllowChange = props.showOwnerAllowChange;
    this.accessType = props.accessType;
    this.allowAttachments = props.allowAttachments;
    this.showNotes = props.showNotes;
    this.enableMailMerge = props.enableMailMerge;
    this.isOrdered = props.isOrdered;
    this.isAvailableOffline = props.isAvailableOffline;
    this.allowQuickSearch = props.allowQuickSearch;
    this.hierarchical = props.hierarchical;
    this.enableDle = props.enableDle;
    this.enableNameTranslation = props.enableNameTranslation;
    this.isInactive = props.isInactive;
    this.disclaimer = props.disclaimer;
    this.enableNumbering = props.enableNumbering;
    this.numberingPrefix = props.numberingPrefix;
    this.numberingSuffix = props.numberingSuffix;
    this.numberingMinDigits = props.numberingMinDigits;
    this.numberingInit = props.numberingInit;
    this.numberingCurrentNumber = props.numberingCurrentNumber;
    this.allowNumberingOverride = props.allowNumberingOverride;
    this.isNumberingUpdateable = props.isNumberingUpdateable;
    this.owner = props.owner;
    this.description = props.description;
    this.tabsList = props.tabsList;
    this.sublistsList = props.sublistsList;
    this.formsList = props.formsList;
    this.onlineFormsList = props.onlineFormsList;
    this.permissionsList = props.permissionsList;
    this.linksList = props.linksList;
    this.managersList = props.managersList;
    this.childrenList = props.childrenList;
    this.parentsList = props.parentsList;
    this.translationsList = props.translationsList;
    this.scriptId = props.scriptId;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
  }
}

export class FldFilterSelList {
  fldFilterSel: PlatformCore.RecordRef[];
  constructor(props: FldFilterSelList) {
    this.fldFilterSel = props.fldFilterSel;
  }
}

export class EntityCustomField extends CustomFieldType {
  label?: string;
  owner?: PlatformCore.RecordRef;
  description?: string;
  selectRecordType?: PlatformCore.RecordRef;
  storeValue?: boolean;
  showInList?: boolean;
  globalSearch?: boolean;
  isParent?: boolean;
  insertBefore?: PlatformCore.RecordRef;
  availableToSso?: boolean;
  subtab?: PlatformCore.RecordRef;
  displayType?: SetupCustomizationTypes.CustomizationDisplayType;
  displayWidth?: number;
  displayHeight?: number;
  help?: string;
  parentSubtab?: PlatformCore.RecordRef;
  linkText?: string;
  isMandatory?: boolean;
  checkSpelling?: boolean;
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
  defaultChecked?: boolean;
  defaultValue?: string;
  isFormula?: boolean;
  defaultSelection?: PlatformCore.RecordRef;
  dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
  searchDefault?: PlatformCore.RecordRef;
  searchCompareField?: PlatformCore.RecordRef;
  sourceList?: PlatformCore.RecordRef;
  sourceFrom?: PlatformCore.RecordRef;
  sourceFilterBy?: PlatformCore.RecordRef;
  customSegment?: PlatformCore.RecordRef;
  appliesToCustomer?: boolean;
  appliesToProject?: boolean;
  appliesToVendor?: boolean;
  appliesToEmployee?: boolean;
  appliesToOtherName?: boolean;
  appliesToContact?: boolean;
  appliesToPartner?: boolean;
  appliesToWebSite?: boolean;
  appliesToGroup?: boolean;
  availableExternally?: boolean;
  filterList?: EntityCustomFieldFilterList;
  accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
  appliesToStatement?: boolean;
  searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
  appliesToPriceList?: boolean;
  roleAccessList?: CustomFieldRoleAccessList;
  deptAccessList?: CustomFieldDepartmentAccessList;
  subAccessList?: CustomFieldSubAccessList;
  translationsList?: CustomFieldTranslationsList;
  internalId?: string;
  constructor(props: EntityCustomField) {
    super(props);
    this.label = props.label;
    this.owner = props.owner;
    this.description = props.description;
    this.selectRecordType = props.selectRecordType;
    this.storeValue = props.storeValue;
    this.showInList = props.showInList;
    this.globalSearch = props.globalSearch;
    this.isParent = props.isParent;
    this.insertBefore = props.insertBefore;
    this.availableToSso = props.availableToSso;
    this.subtab = props.subtab;
    this.displayType = props.displayType;
    this.displayWidth = props.displayWidth;
    this.displayHeight = props.displayHeight;
    this.help = props.help;
    this.parentSubtab = props.parentSubtab;
    this.linkText = props.linkText;
    this.isMandatory = props.isMandatory;
    this.checkSpelling = props.checkSpelling;
    this.maxLength = props.maxLength;
    this.minValue = props.minValue;
    this.maxValue = props.maxValue;
    this.defaultChecked = props.defaultChecked;
    this.defaultValue = props.defaultValue;
    this.isFormula = props.isFormula;
    this.defaultSelection = props.defaultSelection;
    this.dynamicDefault = props.dynamicDefault;
    this.searchDefault = props.searchDefault;
    this.searchCompareField = props.searchCompareField;
    this.sourceList = props.sourceList;
    this.sourceFrom = props.sourceFrom;
    this.sourceFilterBy = props.sourceFilterBy;
    this.customSegment = props.customSegment;
    this.appliesToCustomer = props.appliesToCustomer;
    this.appliesToProject = props.appliesToProject;
    this.appliesToVendor = props.appliesToVendor;
    this.appliesToEmployee = props.appliesToEmployee;
    this.appliesToOtherName = props.appliesToOtherName;
    this.appliesToContact = props.appliesToContact;
    this.appliesToPartner = props.appliesToPartner;
    this.appliesToWebSite = props.appliesToWebSite;
    this.appliesToGroup = props.appliesToGroup;
    this.availableExternally = props.availableExternally;
    this.filterList = props.filterList;
    this.accessLevel = props.accessLevel;
    this.appliesToStatement = props.appliesToStatement;
    this.searchLevel = props.searchLevel;
    this.appliesToPriceList = props.appliesToPriceList;
    this.roleAccessList = props.roleAccessList;
    this.deptAccessList = props.deptAccessList;
    this.subAccessList = props.subAccessList;
    this.translationsList = props.translationsList;
    this.internalId = props.internalId;
  }
}

export class CustomFieldRoleAccess {
  role?: PlatformCore.RecordRef;
  accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
  searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
  constructor(props: CustomFieldRoleAccess) {
    this.role = props.role;
    this.accessLevel = props.accessLevel;
    this.searchLevel = props.searchLevel;
  }
}

export class CustomRecordSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.CustomRecordSearchRowBasic;
  fileJoin?: PlatformCommon.FileSearchRowBasic;
  messagesJoin?: PlatformCommon.MessageSearchRowBasic;
  ownerJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  userNotesJoin?: PlatformCommon.NoteSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: CustomRecordSearchRow) {
    super();
    this.basic = props.basic;
    this.fileJoin = props.fileJoin;
    this.messagesJoin = props.messagesJoin;
    this.ownerJoin = props.ownerJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class CustomPurchaseItem {
  item?: PlatformCore.RecordRef;
  vendorName?: string;
  line?: number;
  quantity?: number;
  units?: PlatformCore.RecordRef;
  inventoryDetail?: PlatformCommon.InventoryDetail;
  description?: string;
  serialNumbers?: string;
  binNumbers?: string;
  grossAmt?: number;
  rate?: string;
  amount?: number;
  options?: PlatformCore.CustomFieldList;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  isBillable?: boolean;
  billVarianceStatus?: PlatformCommonTypes.TransactionBillVarianceStatus;
  amortizationSched?: PlatformCore.RecordRef;
  amortizStartDate?: string;
  amortizationEndDate?: string;
  amortizationResidual?: string;
  taxAmount?: number;
  taxDetailsReference?: string;
  customFieldList?: PlatformCore.CustomFieldList;
  constructor(props: CustomPurchaseItem) {
    this.item = props.item;
    this.vendorName = props.vendorName;
    this.line = props.line;
    this.quantity = props.quantity;
    this.units = props.units;
    this.inventoryDetail = props.inventoryDetail;
    this.description = props.description;
    this.serialNumbers = props.serialNumbers;
    this.binNumbers = props.binNumbers;
    this.grossAmt = props.grossAmt;
    this.rate = props.rate;
    this.amount = props.amount;
    this.options = props.options;
    this.department = props.department;
    this.clazz = props.clazz;
    this.location = props.location;
    this.customer = props.customer;
    this.isBillable = props.isBillable;
    this.billVarianceStatus = props.billVarianceStatus;
    this.amortizationSched = props.amortizationSched;
    this.amortizStartDate = props.amortizStartDate;
    this.amortizationEndDate = props.amortizationEndDate;
    this.amortizationResidual = props.amortizationResidual;
    this.taxAmount = props.taxAmount;
    this.taxDetailsReference = props.taxDetailsReference;
    this.customFieldList = props.customFieldList;
  }
}

export class CustomRecordTypeLinksList {
  links?: CustomRecordTypeLinks[];
  replaceAll?: boolean;
  constructor(props: CustomRecordTypeLinksList) {
    this.links = props.links;
    this.replaceAll = props.replaceAll;
  }
}

export class ItemOptionCustomField extends CustomFieldType {
  label?: string;
  owner?: PlatformCore.RecordRef;
  description?: string;
  selectRecordType?: PlatformCore.RecordRef;
  storeValue?: boolean;
  insertBefore?: PlatformCore.RecordRef;
  displayType?: SetupCustomizationTypes.CustomizationDisplayType;
  displayWidth?: number;
  displayHeight?: number;
  help?: string;
  linkText?: string;
  isMandatory?: boolean;
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
  defaultChecked?: boolean;
  defaultValue?: string;
  isFormula?: boolean;
  defaultSelection?: PlatformCore.RecordRef;
  dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
  searchDefault?: PlatformCore.RecordRef;
  searchCompareField?: PlatformCore.RecordRef;
  sourceList?: PlatformCore.RecordRef;
  sourceFrom?: PlatformCore.RecordRef;
  sourceFilterBy?: PlatformCore.RecordRef;
  colPurchase?: boolean;
  colSale?: boolean;
  colOpportunity?: boolean;
  colStore?: boolean;
  colStoreHidden?: boolean;
  colTransferOrder?: boolean;
  colAllItems?: boolean;
  itemsList?: ItemsList;
  colKitItem?: boolean;
  filterList?: ItemOptionCustomFieldFilterList;
  colOptionLabel?: string;
  accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
  searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
  roleAccessList?: CustomFieldRoleAccessList;
  deptAccessList?: CustomFieldDepartmentAccessList;
  subAccessList?: CustomFieldSubAccessList;
  translationsList?: CustomFieldTranslationsList;
  internalId?: string;
  constructor(props: ItemOptionCustomField) {
    super(props);
    this.label = props.label;
    this.owner = props.owner;
    this.description = props.description;
    this.selectRecordType = props.selectRecordType;
    this.storeValue = props.storeValue;
    this.insertBefore = props.insertBefore;
    this.displayType = props.displayType;
    this.displayWidth = props.displayWidth;
    this.displayHeight = props.displayHeight;
    this.help = props.help;
    this.linkText = props.linkText;
    this.isMandatory = props.isMandatory;
    this.maxLength = props.maxLength;
    this.minValue = props.minValue;
    this.maxValue = props.maxValue;
    this.defaultChecked = props.defaultChecked;
    this.defaultValue = props.defaultValue;
    this.isFormula = props.isFormula;
    this.defaultSelection = props.defaultSelection;
    this.dynamicDefault = props.dynamicDefault;
    this.searchDefault = props.searchDefault;
    this.searchCompareField = props.searchCompareField;
    this.sourceList = props.sourceList;
    this.sourceFrom = props.sourceFrom;
    this.sourceFilterBy = props.sourceFilterBy;
    this.colPurchase = props.colPurchase;
    this.colSale = props.colSale;
    this.colOpportunity = props.colOpportunity;
    this.colStore = props.colStore;
    this.colStoreHidden = props.colStoreHidden;
    this.colTransferOrder = props.colTransferOrder;
    this.colAllItems = props.colAllItems;
    this.itemsList = props.itemsList;
    this.colKitItem = props.colKitItem;
    this.filterList = props.filterList;
    this.colOptionLabel = props.colOptionLabel;
    this.accessLevel = props.accessLevel;
    this.searchLevel = props.searchLevel;
    this.roleAccessList = props.roleAccessList;
    this.deptAccessList = props.deptAccessList;
    this.subAccessList = props.subAccessList;
    this.translationsList = props.translationsList;
    this.internalId = props.internalId;
  }
}

export class CustomRecordSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CustomRecordSearchBasic;
  fileJoin?: PlatformCommon.FileSearchBasic;
  messagesJoin?: PlatformCommon.MessageSearchBasic;
  ownerJoin?: PlatformCommon.EmployeeSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  userNotesJoin?: PlatformCommon.NoteSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: CustomRecordSearch) {
    super();
    this.basic = props.basic;
    this.fileJoin = props.fileJoin;
    this.messagesJoin = props.messagesJoin;
    this.ownerJoin = props.ownerJoin;
    this.userJoin = props.userJoin;
    this.userNotesJoin = props.userNotesJoin;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class CustomFieldDepartmentAccess {
  dept?: PlatformCore.RecordRef;
  accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
  searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
  constructor(props: CustomFieldDepartmentAccess) {
    this.dept = props.dept;
    this.accessLevel = props.accessLevel;
    this.searchLevel = props.searchLevel;
  }
}

export class EntityCustomFieldFilter {
  fldFilter?: PlatformCore.RecordRef;
  fldFilterChecked?: boolean;
  fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
  fldFilterVal?: string;
  fldFilterSelList?: FldFilterSelList;
  fldFilterNotNull?: boolean;
  constructor(props: EntityCustomFieldFilter) {
    this.fldFilter = props.fldFilter;
    this.fldFilterChecked = props.fldFilterChecked;
    this.fldFilterCompareType = props.fldFilterCompareType;
    this.fldFilterVal = props.fldFilterVal;
    this.fldFilterSelList = props.fldFilterSelList;
    this.fldFilterNotNull = props.fldFilterNotNull;
  }
}

export class ItemNumberCustomField extends CustomFieldType {
  label?: string;
  owner?: PlatformCore.RecordRef;
  description?: string;
  selectRecordType?: PlatformCore.RecordRef;
  storeValue?: boolean;
  showInList?: boolean;
  insertBefore?: PlatformCore.RecordRef;
  displayType?: SetupCustomizationTypes.CustomizationDisplayType;
  displayWidth?: number;
  displayHeight?: number;
  help?: string;
  linkText?: string;
  isMandatory?: boolean;
  checkSpelling?: boolean;
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
  defaultChecked?: boolean;
  defaultValue?: string;
  isFormula?: boolean;
  defaultSelection?: PlatformCore.RecordRef;
  dynamicDefault?: SetupCustomizationTypes.CustomizationDynamicDefault;
  searchDefault?: PlatformCore.RecordRef;
  searchCompareField?: PlatformCore.RecordRef;
  sourceList?: PlatformCore.RecordRef;
  sourceFrom?: PlatformCore.RecordRef;
  sourceFilterBy?: PlatformCore.RecordRef;
  accessLevel?: SetupCustomizationTypes.CustomizationAccessLevel;
  searchLevel?: SetupCustomizationTypes.CustomizationSearchLevel;
  filterList?: ItemNumberCustomFieldFilterList;
  roleAccessList?: CustomFieldRoleAccessList;
  deptAccessList?: CustomFieldDepartmentAccessList;
  appliesToAllItems?: boolean;
  appliesToSerialized?: boolean;
  appliesToLots?: boolean;
  appliesToGiftCerts?: boolean;
  itemsList?: PlatformCore.RecordRefList;
  translationsList?: CustomFieldTranslationsList;
  internalId?: string;
  constructor(props: ItemNumberCustomField) {
    super(props);
    this.label = props.label;
    this.owner = props.owner;
    this.description = props.description;
    this.selectRecordType = props.selectRecordType;
    this.storeValue = props.storeValue;
    this.showInList = props.showInList;
    this.insertBefore = props.insertBefore;
    this.displayType = props.displayType;
    this.displayWidth = props.displayWidth;
    this.displayHeight = props.displayHeight;
    this.help = props.help;
    this.linkText = props.linkText;
    this.isMandatory = props.isMandatory;
    this.checkSpelling = props.checkSpelling;
    this.maxLength = props.maxLength;
    this.minValue = props.minValue;
    this.maxValue = props.maxValue;
    this.defaultChecked = props.defaultChecked;
    this.defaultValue = props.defaultValue;
    this.isFormula = props.isFormula;
    this.defaultSelection = props.defaultSelection;
    this.dynamicDefault = props.dynamicDefault;
    this.searchDefault = props.searchDefault;
    this.searchCompareField = props.searchCompareField;
    this.sourceList = props.sourceList;
    this.sourceFrom = props.sourceFrom;
    this.sourceFilterBy = props.sourceFilterBy;
    this.accessLevel = props.accessLevel;
    this.searchLevel = props.searchLevel;
    this.filterList = props.filterList;
    this.roleAccessList = props.roleAccessList;
    this.deptAccessList = props.deptAccessList;
    this.appliesToAllItems = props.appliesToAllItems;
    this.appliesToSerialized = props.appliesToSerialized;
    this.appliesToLots = props.appliesToLots;
    this.appliesToGiftCerts = props.appliesToGiftCerts;
    this.itemsList = props.itemsList;
    this.translationsList = props.translationsList;
    this.internalId = props.internalId;
  }
}

export class CustomRecordTypeOnlineFormsList {
  onlineForms?: CustomRecordTypeOnlineForms[];
  replaceAll?: boolean;
  constructor(props: CustomRecordTypeOnlineFormsList) {
    this.onlineForms = props.onlineForms;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomRecordTypePermissions {
  permittedRole?: PlatformCore.RecordRef;
  permittedLevel?: SetupCustomizationTypes.CustomRecordTypePermissionsPermittedLevel;
  restriction?: SetupCustomizationTypes.CustomRecordTypePermissionsRestriction;
  defaultForm?: PlatformCore.RecordRef;
  restrictForm?: boolean;
  searchForm?: PlatformCore.RecordRef;
  searchResults?: PlatformCore.RecordRef;
  listView?: PlatformCore.RecordRef;
  listViewRestricted?: boolean;
  dashboardView?: PlatformCore.RecordRef;
  restrictDashboardView?: boolean;
  sublistView?: PlatformCore.RecordRef;
  restrictSublistView?: boolean;
  constructor(props: CustomRecordTypePermissions) {
    this.permittedRole = props.permittedRole;
    this.permittedLevel = props.permittedLevel;
    this.restriction = props.restriction;
    this.defaultForm = props.defaultForm;
    this.restrictForm = props.restrictForm;
    this.searchForm = props.searchForm;
    this.searchResults = props.searchResults;
    this.listView = props.listView;
    this.listViewRestricted = props.listViewRestricted;
    this.dashboardView = props.dashboardView;
    this.restrictDashboardView = props.restrictDashboardView;
    this.sublistView = props.sublistView;
    this.restrictSublistView = props.restrictSublistView;
  }
}

export class EntityCustomFieldFilterList {
  filter?: EntityCustomFieldFilter[];
  replaceAll?: boolean;
  constructor(props: EntityCustomFieldFilterList) {
    this.filter = props.filter;
    this.replaceAll = props.replaceAll;
  }
}

export class OtherCustomFieldFilterList {
  filter?: OtherCustomFieldFilter[];
  replaceAll?: boolean;
  constructor(props: OtherCustomFieldFilterList) {
    this.filter = props.filter;
    this.replaceAll = props.replaceAll;
  }
}

export class ItemNumberCustomFieldFilter {
  fldFilter?: PlatformCore.RecordRef;
  fldFilterChecked?: boolean;
  fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
  fldFilterVal?: string;
  fldFilterNotNull?: boolean;
  fldfilterNull?: boolean;
  fldCompareField?: PlatformCore.RecordRef;
  constructor(props: ItemNumberCustomFieldFilter) {
    this.fldFilter = props.fldFilter;
    this.fldFilterChecked = props.fldFilterChecked;
    this.fldFilterCompareType = props.fldFilterCompareType;
    this.fldFilterVal = props.fldFilterVal;
    this.fldFilterNotNull = props.fldFilterNotNull;
    this.fldfilterNull = props.fldfilterNull;
    this.fldCompareField = props.fldCompareField;
  }
}

export class OtherCustomFieldFilter {
  fldFilter?: PlatformCore.RecordRef;
  fldFilterChecked?: boolean;
  fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
  fldFilterVal?: string;
  fldFilterSelList?: FldFilterSelList;
  fldFilterNotNull?: boolean;
  constructor(props: OtherCustomFieldFilter) {
    this.fldFilter = props.fldFilter;
    this.fldFilterChecked = props.fldFilterChecked;
    this.fldFilterCompareType = props.fldFilterCompareType;
    this.fldFilterVal = props.fldFilterVal;
    this.fldFilterSelList = props.fldFilterSelList;
    this.fldFilterNotNull = props.fldFilterNotNull;
  }
}

export class CustomRecordCustomFieldFilter {
  fldFilter?: PlatformCore.RecordRef;
  fldFilterChecked?: boolean;
  fldFilterCompareType?: SetupCustomizationTypes.CustomizationFilterCompareType;
  fldFilterVal?: string;
  fldFilterSelList?: FldFilterSelList;
  fldFilterNotNull?: boolean;
  constructor(props: CustomRecordCustomFieldFilter) {
    this.fldFilter = props.fldFilter;
    this.fldFilterChecked = props.fldFilterChecked;
    this.fldFilterCompareType = props.fldFilterCompareType;
    this.fldFilterVal = props.fldFilterVal;
    this.fldFilterSelList = props.fldFilterSelList;
    this.fldFilterNotNull = props.fldFilterNotNull;
  }
}

export class CustomSaleSalesTeamList {
  salesTeam?: CustomSaleSalesTeam[];
  replaceAll?: boolean;
  constructor(props: CustomSaleSalesTeamList) {
    this.salesTeam = props.salesTeam;
    this.replaceAll = props.replaceAll;
  }
}

export class ItemNumberCustomFieldFilterList {
  filter?: ItemNumberCustomFieldFilter[];
  replaceAll?: boolean;
  constructor(props: ItemNumberCustomFieldFilterList) {
    this.filter = props.filter;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomRecordTypeManagersList {
  managers?: CustomRecordTypeManagers[];
  replaceAll?: boolean;
  constructor(props: CustomRecordTypeManagersList) {
    this.managers = props.managers;
    this.replaceAll = props.replaceAll;
  }
}

export class CustomListSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.CustomListSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: CustomListSearch) {
    super();
    this.basic = props.basic;
    this.userJoin = props.userJoin;
  }
}

export class CustomSale extends PlatformCore.Record {
  createdDate?: string;
  lastModifiedDate?: string;
  tranType?: PlatformCore.RecordRef;
  nexus?: PlatformCore.RecordRef;
  subsidiaryTaxRegNum?: PlatformCore.RecordRef;
  taxRegOverride?: boolean;
  taxDetailsOverride?: boolean;
  customForm?: PlatformCore.RecordRef;
  entity?: PlatformCore.RecordRef;
  billingAccount?: PlatformCore.RecordRef;
  tranDate?: string;
  tranId?: string;
  entityTaxRegNum?: PlatformCore.RecordRef;
  source?: string;
  createdFrom?: PlatformCore.RecordRef;
  postingPeriod?: PlatformCore.RecordRef;
  opportunity?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  terms?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  currency?: PlatformCore.RecordRef;
  dueDate?: string;
  discountDate?: string;
  discountAmount?: number;
  salesRep?: PlatformCore.RecordRef;
  partner?: PlatformCore.RecordRef;
  leadSource?: PlatformCore.RecordRef;
  startDate?: string;
  endDate?: string;
  otherRefNum?: string;
  memo?: string;
  tranStatus?: PlatformCore.RecordRef;
  salesEffectiveDate?: string;
  excludeCommission?: boolean;
  totalCostEstimate?: number;
  estGrossProfit?: number;
  estGrossProfitPercent?: number;
  revRecSchedule?: PlatformCore.RecordRef;
  revRecStartDate?: string;
  revRecEndDate?: string;
  account?: PlatformCore.RecordRef;
  exchangeRate?: number;
  currencyName?: string;
  promoCode?: PlatformCore.RecordRef;
  discountItem?: PlatformCore.RecordRef;
  discountRate?: string;
  isTaxable?: boolean;
  toBePrinted?: boolean;
  toBeEmailed?: boolean;
  toBeFaxed?: boolean;
  fax?: string;
  messageSel?: PlatformCore.RecordRef;
  message?: string;
  billingAddress?: PlatformCommon.Address;
  billAddressList?: PlatformCore.RecordRef;
  shippingAddress?: PlatformCommon.Address;
  shipIsResidential?: boolean;
  shipAddressList?: PlatformCore.RecordRef;
  fob?: string;
  shipDate?: string;
  shipMethod?: PlatformCore.RecordRef;
  shippingCost?: number;
  handlingCost?: number;
  trackingNumbers?: string;
  linkedTrackingNumbers?: string;
  salesGroup?: PlatformCore.RecordRef;
  subTotal?: number;
  revenueStatus?: PlatformCommonTypes.RevenueStatus;
  recognizedRevenue?: number;
  deferredRevenue?: number;
  revRecOnRevCommitment?: boolean;
  syncSalesTeams?: boolean;
  discountTotal?: number;
  taxTotal?: number;
  altShippingCost?: number;
  altHandlingCost?: number;
  total?: number;
  status?: string;
  job?: PlatformCore.RecordRef;
  email?: string;
  giftCertApplied?: number;
  tranIsVsoeBundle?: boolean;
  vsoeAutoCalc?: boolean;
  syncPartnerTeams?: boolean;
  partnersList?: CustomSalePartnersList;
  itemList?: CustomSaleItemList;
  giftCertRedemptionList?: PlatformCommon.GiftCertRedemptionList;
  accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
  salesTeamList?: CustomSaleSalesTeamList;
  taxDetailsList?: PlatformCommon.TaxDetailsList;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  externalId?: string;
  constructor(props: CustomSale) {
    super(props);
    this.createdDate = props.createdDate;
    this.lastModifiedDate = props.lastModifiedDate;
    this.tranType = props.tranType;
    this.nexus = props.nexus;
    this.subsidiaryTaxRegNum = props.subsidiaryTaxRegNum;
    this.taxRegOverride = props.taxRegOverride;
    this.taxDetailsOverride = props.taxDetailsOverride;
    this.customForm = props.customForm;
    this.entity = props.entity;
    this.billingAccount = props.billingAccount;
    this.tranDate = props.tranDate;
    this.tranId = props.tranId;
    this.entityTaxRegNum = props.entityTaxRegNum;
    this.source = props.source;
    this.createdFrom = props.createdFrom;
    this.postingPeriod = props.postingPeriod;
    this.opportunity = props.opportunity;
    this.department = props.department;
    this.clazz = props.clazz;
    this.terms = props.terms;
    this.location = props.location;
    this.subsidiary = props.subsidiary;
    this.currency = props.currency;
    this.dueDate = props.dueDate;
    this.discountDate = props.discountDate;
    this.discountAmount = props.discountAmount;
    this.salesRep = props.salesRep;
    this.partner = props.partner;
    this.leadSource = props.leadSource;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.otherRefNum = props.otherRefNum;
    this.memo = props.memo;
    this.tranStatus = props.tranStatus;
    this.salesEffectiveDate = props.salesEffectiveDate;
    this.excludeCommission = props.excludeCommission;
    this.totalCostEstimate = props.totalCostEstimate;
    this.estGrossProfit = props.estGrossProfit;
    this.estGrossProfitPercent = props.estGrossProfitPercent;
    this.revRecSchedule = props.revRecSchedule;
    this.revRecStartDate = props.revRecStartDate;
    this.revRecEndDate = props.revRecEndDate;
    this.account = props.account;
    this.exchangeRate = props.exchangeRate;
    this.currencyName = props.currencyName;
    this.promoCode = props.promoCode;
    this.discountItem = props.discountItem;
    this.discountRate = props.discountRate;
    this.isTaxable = props.isTaxable;
    this.toBePrinted = props.toBePrinted;
    this.toBeEmailed = props.toBeEmailed;
    this.toBeFaxed = props.toBeFaxed;
    this.fax = props.fax;
    this.messageSel = props.messageSel;
    this.message = props.message;
    this.billingAddress = props.billingAddress;
    this.billAddressList = props.billAddressList;
    this.shippingAddress = props.shippingAddress;
    this.shipIsResidential = props.shipIsResidential;
    this.shipAddressList = props.shipAddressList;
    this.fob = props.fob;
    this.shipDate = props.shipDate;
    this.shipMethod = props.shipMethod;
    this.shippingCost = props.shippingCost;
    this.handlingCost = props.handlingCost;
    this.trackingNumbers = props.trackingNumbers;
    this.linkedTrackingNumbers = props.linkedTrackingNumbers;
    this.salesGroup = props.salesGroup;
    this.subTotal = props.subTotal;
    this.revenueStatus = props.revenueStatus;
    this.recognizedRevenue = props.recognizedRevenue;
    this.deferredRevenue = props.deferredRevenue;
    this.revRecOnRevCommitment = props.revRecOnRevCommitment;
    this.syncSalesTeams = props.syncSalesTeams;
    this.discountTotal = props.discountTotal;
    this.taxTotal = props.taxTotal;
    this.altShippingCost = props.altShippingCost;
    this.altHandlingCost = props.altHandlingCost;
    this.total = props.total;
    this.status = props.status;
    this.job = props.job;
    this.email = props.email;
    this.giftCertApplied = props.giftCertApplied;
    this.tranIsVsoeBundle = props.tranIsVsoeBundle;
    this.vsoeAutoCalc = props.vsoeAutoCalc;
    this.syncPartnerTeams = props.syncPartnerTeams;
    this.partnersList = props.partnersList;
    this.itemList = props.itemList;
    this.giftCertRedemptionList = props.giftCertRedemptionList;
    this.accountingBookDetailList = props.accountingBookDetailList;
    this.salesTeamList = props.salesTeamList;
    this.taxDetailsList = props.taxDetailsList;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}
