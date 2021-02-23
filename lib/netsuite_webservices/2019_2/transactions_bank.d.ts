import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as PlatformCommonTypes from "./platform_common_types";
import { SoapMappingBase } from "../../soap-types";
export declare type CheckItemListProps = {
    item?: CheckItem[];
    replaceAll?: boolean;
};
export declare class CheckItemList extends SoapMappingBase {
    item?: CheckItem[];
    replaceAll?: boolean;
    constructor(props: CheckItemListProps);
}
export declare type DepositCashBackProps = {
    amount?: number;
    account?: PlatformCore.RecordRef;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    memo?: string;
};
export declare class DepositCashBack extends SoapMappingBase {
    amount?: number;
    account?: PlatformCore.RecordRef;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    memo?: string;
    constructor(props: DepositCashBackProps);
}
export declare type CheckExpenseListProps = {
    expense?: CheckExpense[];
    replaceAll?: boolean;
};
export declare class CheckExpenseList extends SoapMappingBase {
    expense?: CheckExpense[];
    replaceAll?: boolean;
    constructor(props: CheckExpenseListProps);
}
export declare type DepositPaymentListProps = {
    depositPayment?: DepositPayment[];
    replaceAll?: boolean;
};
export declare class DepositPaymentList extends SoapMappingBase {
    depositPayment?: DepositPayment[];
    replaceAll?: boolean;
    constructor(props: DepositPaymentListProps);
}
export declare type DepositPaymentProps = {
    deposit?: boolean;
    id?: number;
    docDate?: string;
    type?: string;
    docNumber?: string;
    memo?: string;
    paymentMethod?: PlatformCore.RecordRef;
    refNum?: string;
    entity?: PlatformCore.RecordRef;
    currency?: PlatformCore.RecordRef;
    transactionAmount?: number;
    paymentAmount?: number;
    lineId?: number;
};
export declare class DepositPayment extends SoapMappingBase {
    deposit?: boolean;
    id?: number;
    docDate?: string;
    type?: string;
    docNumber?: string;
    memo?: string;
    paymentMethod?: PlatformCore.RecordRef;
    refNum?: string;
    entity?: PlatformCore.RecordRef;
    currency?: PlatformCore.RecordRef;
    transactionAmount?: number;
    paymentAmount?: number;
    lineId?: number;
    constructor(props: DepositPaymentProps);
}
export declare type CheckItemProps = {
    item?: PlatformCore.RecordRef;
    vendorName?: string;
    line?: number;
    quantity?: number;
    units?: PlatformCore.RecordRef;
    inventoryDetail?: PlatformCommon.InventoryDetail;
    description?: string;
    binNumbers?: string;
    serialNumbers?: string;
    expirationDate?: string;
    rate?: string;
    taxCode?: PlatformCore.RecordRef;
    amount?: number;
    options?: PlatformCore.CustomFieldList;
    taxRate1?: number;
    taxRate2?: number;
    department?: PlatformCore.RecordRef;
    grossAmt?: number;
    clazz?: PlatformCore.RecordRef;
    tax1Amt?: number;
    location?: PlatformCore.RecordRef;
    customer?: PlatformCore.RecordRef;
    isBillable?: boolean;
    landedCost?: PlatformCommon.LandedCost;
    customFieldList?: PlatformCore.CustomFieldList;
};
export declare class CheckItem extends SoapMappingBase {
    item?: PlatformCore.RecordRef;
    vendorName?: string;
    line?: number;
    quantity?: number;
    units?: PlatformCore.RecordRef;
    inventoryDetail?: PlatformCommon.InventoryDetail;
    description?: string;
    binNumbers?: string;
    serialNumbers?: string;
    expirationDate?: string;
    rate?: string;
    taxCode?: PlatformCore.RecordRef;
    amount?: number;
    options?: PlatformCore.CustomFieldList;
    taxRate1?: number;
    taxRate2?: number;
    department?: PlatformCore.RecordRef;
    grossAmt?: number;
    clazz?: PlatformCore.RecordRef;
    tax1Amt?: number;
    location?: PlatformCore.RecordRef;
    customer?: PlatformCore.RecordRef;
    isBillable?: boolean;
    landedCost?: PlatformCommon.LandedCost;
    customFieldList?: PlatformCore.CustomFieldList;
    constructor(props: CheckItemProps);
}
export declare type CheckLandedCostListProps = {
    landedCost?: PlatformCommon.LandedCostSummary[];
    replaceAll?: boolean;
};
export declare class CheckLandedCostList extends SoapMappingBase {
    landedCost?: PlatformCommon.LandedCostSummary[];
    replaceAll?: boolean;
    constructor(props: CheckLandedCostListProps);
}
export declare type DepositCashBackListProps = {
    depositCashBack?: DepositCashBack[];
    replaceAll?: boolean;
};
export declare class DepositCashBackList extends SoapMappingBase {
    depositCashBack?: DepositCashBack[];
    replaceAll?: boolean;
    constructor(props: DepositCashBackListProps);
}
export declare type CheckExpenseProps = {
    line?: number;
    category?: PlatformCore.RecordRef;
    account?: PlatformCore.RecordRef;
    amount?: number;
    memo?: string;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customer?: PlatformCore.RecordRef;
    isBillable?: boolean;
    taxCode?: PlatformCore.RecordRef;
    taxRate1?: number;
    tax1Amt?: number;
    taxRate2?: number;
    grossAmt?: number;
    customFieldList?: PlatformCore.CustomFieldList;
};
export declare class CheckExpense extends SoapMappingBase {
    line?: number;
    category?: PlatformCore.RecordRef;
    account?: PlatformCore.RecordRef;
    amount?: number;
    memo?: string;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    customer?: PlatformCore.RecordRef;
    isBillable?: boolean;
    taxCode?: PlatformCore.RecordRef;
    taxRate1?: number;
    tax1Amt?: number;
    taxRate2?: number;
    grossAmt?: number;
    customFieldList?: PlatformCore.CustomFieldList;
    constructor(props: CheckExpenseProps);
}
export declare type DepositProps = {
    createdDate?: string;
    lastModifiedDate?: string;
    customForm?: PlatformCore.RecordRef;
    currencyName?: string;
    tranId?: string;
    account?: PlatformCore.RecordRef;
    total?: number;
    exchangeRate?: number;
    tranDate?: string;
    postingPeriod?: PlatformCore.RecordRef;
    memo?: string;
    toBePrinted?: boolean;
    subsidiary?: PlatformCore.RecordRef;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    paymentList?: DepositPaymentList;
    otherList?: DepositOtherList;
    cashBackList?: DepositCashBackList;
    accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class Deposit extends PlatformCore.Record {
    createdDate?: string;
    lastModifiedDate?: string;
    customForm?: PlatformCore.RecordRef;
    currencyName?: string;
    tranId?: string;
    account?: PlatformCore.RecordRef;
    total?: number;
    exchangeRate?: number;
    tranDate?: string;
    postingPeriod?: PlatformCore.RecordRef;
    memo?: string;
    toBePrinted?: boolean;
    subsidiary?: PlatformCore.RecordRef;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    paymentList?: DepositPaymentList;
    otherList?: DepositOtherList;
    cashBackList?: DepositCashBackList;
    accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: DepositProps);
}
export declare type DepositOtherListProps = {
    depositOther?: DepositOther[];
    replaceAll?: boolean;
};
export declare class DepositOtherList extends SoapMappingBase {
    depositOther?: DepositOther[];
    replaceAll?: boolean;
    constructor(props: DepositOtherListProps);
}
export declare type CheckProps = {
    createdDate?: string;
    lastModifiedDate?: string;
    status?: string;
    customForm?: PlatformCore.RecordRef;
    account?: PlatformCore.RecordRef;
    balance?: number;
    entity?: PlatformCore.RecordRef;
    address?: string;
    subsidiary?: PlatformCore.RecordRef;
    postingPeriod?: PlatformCore.RecordRef;
    tranDate?: string;
    currency?: PlatformCore.RecordRef;
    voidJournal?: PlatformCore.RecordRef;
    exchangeRate?: number;
    toBePrinted?: boolean;
    tranId?: string;
    memo?: string;
    department?: PlatformCore.RecordRef;
    taxTotal?: number;
    clazz?: PlatformCore.RecordRef;
    tax2Total?: number;
    location?: PlatformCore.RecordRef;
    userTotal?: number;
    landedCostMethod?: PlatformCommonTypes.LandedCostMethod;
    landedCostPerLine?: boolean;
    transactionNumber?: string;
    expenseList?: CheckExpenseList;
    itemList?: CheckItemList;
    accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
    landedCostsList?: CheckLandedCostList;
    billPay?: boolean;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class Check extends PlatformCore.Record {
    createdDate?: string;
    lastModifiedDate?: string;
    status?: string;
    customForm?: PlatformCore.RecordRef;
    account?: PlatformCore.RecordRef;
    balance?: number;
    entity?: PlatformCore.RecordRef;
    address?: string;
    subsidiary?: PlatformCore.RecordRef;
    postingPeriod?: PlatformCore.RecordRef;
    tranDate?: string;
    currency?: PlatformCore.RecordRef;
    voidJournal?: PlatformCore.RecordRef;
    exchangeRate?: number;
    toBePrinted?: boolean;
    tranId?: string;
    memo?: string;
    department?: PlatformCore.RecordRef;
    taxTotal?: number;
    clazz?: PlatformCore.RecordRef;
    tax2Total?: number;
    location?: PlatformCore.RecordRef;
    userTotal?: number;
    landedCostMethod?: PlatformCommonTypes.LandedCostMethod;
    landedCostPerLine?: boolean;
    transactionNumber?: string;
    expenseList?: CheckExpenseList;
    itemList?: CheckItemList;
    accountingBookDetailList?: PlatformCommon.AccountingBookDetailList;
    landedCostsList?: CheckLandedCostList;
    billPay?: boolean;
    customFieldList?: PlatformCore.CustomFieldList;
    internalId?: string;
    externalId?: string;
    constructor(props: CheckProps);
}
export declare type DepositOtherProps = {
    entity?: PlatformCore.RecordRef;
    amount?: number;
    account?: PlatformCore.RecordRef;
    paymentMethod?: PlatformCore.RecordRef;
    refNum?: string;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    memo?: string;
};
export declare class DepositOther extends SoapMappingBase {
    entity?: PlatformCore.RecordRef;
    amount?: number;
    account?: PlatformCore.RecordRef;
    paymentMethod?: PlatformCore.RecordRef;
    refNum?: string;
    department?: PlatformCore.RecordRef;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    memo?: string;
    constructor(props: DepositOtherProps);
}
