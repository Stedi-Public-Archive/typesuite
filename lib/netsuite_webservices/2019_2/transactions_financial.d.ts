import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as TransactionsFinancialTypes from "./transactions_financial_types";
export declare type BudgetProps = {
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
} & PlatformCore.RecordProps;
export declare class Budget extends PlatformCore.Record {
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
    constructor(props: BudgetProps);
}
export declare type BudgetSearchRowProps = {
    basic?: PlatformCommon.BudgetSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
};
export declare class BudgetSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.BudgetSearchRowBasic;
    customSearchJoin?: PlatformCommon.CustomSearchRowBasic[];
    constructor(props: BudgetSearchRowProps);
}
export declare type BudgetSearchAdvancedProps = {
    criteria?: BudgetSearch;
    columns?: BudgetSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class BudgetSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: BudgetSearch;
    columns?: BudgetSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: BudgetSearchAdvancedProps);
}
export declare type BudgetSearchProps = {
    basic?: PlatformCommon.BudgetSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
};
export declare class BudgetSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.BudgetSearchBasic;
    customSearchJoin?: PlatformCommon.CustomSearchJoin[];
    constructor(props: BudgetSearchProps);
}
