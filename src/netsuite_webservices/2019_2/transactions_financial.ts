import * as SoapTypes from "../../util/soap-types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as TransactionsFinancialTypes from "./transactions_financial_types";

const mappingsName = "com_netsuite_webservices_transactions_financial_2019_2";

export class Budget extends PlatformCore.Record {
  year?: PlatformCore.RecordRef;
  customer?: PlatformCore.RecordRef;
  item?: PlatformCore.RecordRef;
  clazz?: PlatformCore.RecordRef;
  department?: PlatformCore.RecordRef;
  location?: PlatformCore.RecordRef;
  account?: PlatformCore.RecordRef;
  subsidiary?: PlatformCore.RecordRef;
  category?: PlatformCore.RecordRef;
  budgetType?: TransactionsFinancialTypes.BudgetBudgetType;
  currency?: PlatformCore.RecordRef;
  periodAmount1?: number;
  periodAmount2?: number;
  periodAmount3?: number;
  periodAmount4?: number;
  periodAmount5?: number;
  periodAmount6?: number;
  periodAmount7?: number;
  periodAmount8?: number;
  periodAmount9?: number;
  periodAmount10?: number;
  periodAmount11?: number;
  periodAmount12?: number;
  periodAmount13?: number;
  periodAmount14?: number;
  periodAmount15?: number;
  periodAmount16?: number;
  periodAmount17?: number;
  periodAmount18?: number;
  periodAmount19?: number;
  periodAmount20?: number;
  periodAmount21?: number;
  periodAmount22?: number;
  periodAmount23?: number;
  periodAmount24?: number;
  amount?: number;
  accountingBook?: PlatformCore.RecordRef;
  customFieldList?: PlatformCore.CustomFieldList;
  internalId?: string;
  constructor(props: Budget) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.year = props.year;
    this.customer = props.customer;
    this.item = props.item;
    this.clazz = props.clazz;
    this.department = props.department;
    this.location = props.location;
    this.account = props.account;
    this.subsidiary = props.subsidiary;
    this.category = props.category;
    this.budgetType = props.budgetType;
    this.currency = props.currency;
    this.periodAmount1 = props.periodAmount1;
    this.periodAmount2 = props.periodAmount2;
    this.periodAmount3 = props.periodAmount3;
    this.periodAmount4 = props.periodAmount4;
    this.periodAmount5 = props.periodAmount5;
    this.periodAmount6 = props.periodAmount6;
    this.periodAmount7 = props.periodAmount7;
    this.periodAmount8 = props.periodAmount8;
    this.periodAmount9 = props.periodAmount9;
    this.periodAmount10 = props.periodAmount10;
    this.periodAmount11 = props.periodAmount11;
    this.periodAmount12 = props.periodAmount12;
    this.periodAmount13 = props.periodAmount13;
    this.periodAmount14 = props.periodAmount14;
    this.periodAmount15 = props.periodAmount15;
    this.periodAmount16 = props.periodAmount16;
    this.periodAmount17 = props.periodAmount17;
    this.periodAmount18 = props.periodAmount18;
    this.periodAmount19 = props.periodAmount19;
    this.periodAmount20 = props.periodAmount20;
    this.periodAmount21 = props.periodAmount21;
    this.periodAmount22 = props.periodAmount22;
    this.periodAmount23 = props.periodAmount23;
    this.periodAmount24 = props.periodAmount24;
    this.amount = props.amount;
    this.accountingBook = props.accountingBook;
    this.customFieldList = props.customFieldList;
    this.internalId = props.internalId;
  }
}

export class BudgetSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.BudgetSearchRowBasic;
  customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
  constructor(props: BudgetSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.customSearchJoin = props.customSearchJoin;
  }
}

export class BudgetSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: BudgetSearch;
  columns?: BudgetSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: BudgetSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class BudgetSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.BudgetSearchBasic;
  customSearchJoin?: PlatformCommon.CustomSearchJoin[];
  constructor(props: BudgetSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.customSearchJoin = props.customSearchJoin;
  }
}
