export type CustomerMonthlyClosing =
  | "_one"
  | "_five"
  | "_ten"
  | "_fifteen"
  | "_twenty"
  | "_twentyFive"
  | "_endOfTheMonth";

export type CustomerCreditHoldOverride = "_auto" | "_on" | "_off";

export type PartnerOtherRelationships = "_customer" | "_otherName" | "_vendor";

export type CustomerNegativeNumberFormat =
  | "_bracketSurrounded"
  | "_minusSigned";

export type CustomerStatusStage = "_customer" | "_lead" | "_prospect";

export type ContactType =
  | "_customer"
  | "_employee"
  | "_otherName"
  | "_partner"
  | "_vendor";

export type JobBillingType =
  | "_none"
  | "_chargeBased"
  | "_fixedBidInterval"
  | "_fixedBidMilestone"
  | "_timeAndMaterials";

export type EntityGroupType =
  | "_contact"
  | "_customer"
  | "_employee"
  | "_partner"
  | "_vendor";

export type EntityType =
  | "_company"
  | "_contact"
  | "_customer"
  | "_employee"
  | "_genericResource"
  | "_group"
  | "_internal"
  | "_job"
  | "_otherName"
  | "_partner"
  | "_resourceGroup"
  | "_vendor";

export type VendorOtherRelationships = "_customer" | "_otherName" | "_partner";

export type CustomerOtherRelationships = "_otherName" | "_partner" | "_vendor";

export type EmailPreference = "_default" | "_hTML" | "_pDF";

export type CustomerStage = "_customer" | "_lead" | "_prospect";

export type BillingAccountFrequency =
  | "_annually"
  | "_custom"
  | "_daily"
  | "_endOfPeriod"
  | "_everyFourWeeks"
  | "_everyThreeYears"
  | "_everyTwoMonths"
  | "_everyTwoWeeks"
  | "_everyTwoYears"
  | "_hourly"
  | "_monthly"
  | "_never"
  | "_oneTime"
  | "_quarterly"
  | "_startOfPeriod"
  | "_twiceAMonth"
  | "_twiceAYear"
  | "_weekly";

export type TaxRounding = "_roundDown" | "_roundOff" | "_roundUp";

export type CustomerNumberFormat =
  | "_spaceAsDigitGroupSeparatorAndDecimalComma"
  | "_spaceAsDigitGroupSeparatorAndDecimalPoint"
  | "_commaAsDigitGroupSeparatorAndDecimalPoint"
  | "_pointAsDigitGroupSeparatorAndDecimalComma"
  | "_apostropheAsDigitGroupSeparatorAndDecimalComma"
  | "_apostropheAsDigitGroupSeparatorAndDecimalPoint";
