export type ItemPreferenceCriterion = "_A" | "_B" | "_C" | "_D" | "_E" | "_F";

export type CurrencyCurrencyPrecision = "_two" | "_zero";

export type ItemAtpMethod = "_cumulativeAtpWithLookAhead" | "_discreteAtp";

export type ItemCostingMethod =
  | "_average"
  | "_fifo"
  | "_groupAverage"
  | "_lifo"
  | "_lotNumbered"
  | "_serialized"
  | "_standard";

export type ItemMatrixType = "_parent" | "_child";

export type PaymentCardBrand =
  | "_amex"
  | "_cirrus"
  | "_dinersClub"
  | "_discover"
  | "_jcb"
  | "_laser"
  | "_localCard"
  | "_maestro"
  | "_masterCard"
  | "_solo"
  | "_unionPay"
  | "_visa";

export type BillingScheduleMonthDow =
  | "_sunday"
  | "_monday"
  | "_tuesday"
  | "_wednesday"
  | "_thursday"
  | "_friday"
  | "_saturday"
  | "_day";

export type ItemOutOfStockBehavior =
  | "_allowBackOrdersButDisplayOutOfStockMessage"
  | "_allowBackOrdersWithNoOutOfStockMessage"
  | "_default"
  | "_disallowBackOrdersButDisplayOutOfStockMessage"
  | "_removeItemWhenOutOfStock";

export type ItemType =
  | "_assembly"
  | "_description"
  | "_discount"
  | "_downloadItem"
  | "_giftCertificateItem"
  | "_inventoryItem"
  | "_itemGroup"
  | "_kit"
  | "_markup"
  | "_nonInventoryItem"
  | "_otherCharge"
  | "_payment"
  | "_service"
  | "_subtotal";

export type BillingScheduleType =
  | "_chargeBased"
  | "_fixedBidInterval"
  | "_fixedBidMilestone"
  | "_standard"
  | "_timeAndMaterials";

export type ItemSubType = "_forPurchase" | "_forResale" | "_forSale";

export type ItemSupplyLotSizingMethod =
  | "_fixedLotSize"
  | "_lotForLot"
  | "_periodsOfSupply";

export type ItemAccountMappingItemAccount =
  | "_asset"
  | "_costOfGoods"
  | "_customerReturnVariance"
  | "_deferral"
  | "_deferredRevenue"
  | "_discount"
  | "_dropShipExpense"
  | "_exchangeRateVariance"
  | "_expense"
  | "_foreignCurrencyAdjustmentRevenueAccount"
  | "_gainLoss"
  | "_income"
  | "_intercompanyCostOfGoods"
  | "_intercompanyDeferredRevenue"
  | "_intercompanyExpense"
  | "_intercompanyIncome"
  | "_liability"
  | "_markup"
  | "_payment"
  | "_priceVariance"
  | "_productionPriceVariance"
  | "_productionQuantityVariance"
  | "_purchasePriceVariance"
  | "_quantityVariance"
  | "_scrap"
  | "_unbuildVariance"
  | "_vendorReturnVariance"
  | "_wipVariance"
  | "_workInProcess"
  | "_writeOff";

export type CashFlowRateType = "_average" | "_current" | "_historical";

export type CurrencyFxRateUpdateTimezone =
  | "_americaNewYork"
  | "_asiaMagadan"
  | "_asiaTokyo"
  | "_europeParis";

export type BillingScheduleYearMonth =
  | "_january"
  | "_february"
  | "_march"
  | "_april"
  | "_may"
  | "_june"
  | "_july"
  | "_august"
  | "_september"
  | "_october"
  | "_november"
  | "_december";

export type BillingScheduleRecurrencePattern =
  | "_anniversaryBillDate"
  | "_fixedBillDate";

export type TaxAcctType = "_sale" | "_purchase";

export type GeneralRateType = "_average" | "_current" | "_historical";

export type PeriodicLotSizeType = "_interval" | "_monthly" | "_weekly";

export type HazmatPackingGroup = "_i" | "_ii" | "_iii";

export type ItemProductFeed =
  | "_googleBase"
  | "_nexTag"
  | "_shoppingCom"
  | "_shopzilla"
  | "_yahooShopping";

export type ItemSupplyReplenishmentMethod = "_reorderPoint" | "_timePhased";

export type BillingScheduleYearDowimMonth =
  | "_january"
  | "_february"
  | "_march"
  | "_april"
  | "_may"
  | "_june"
  | "_july"
  | "_august"
  | "_september"
  | "_october"
  | "_november"
  | "_december";

export type ItemDemandSource =
  | "_enteredAndPlannedOrders"
  | "_forecastAndOrders"
  | "_forecastConsumption"
  | "_forecastFromDemandPlan";

export type BillingScheduleYearDow =
  | "_sunday"
  | "_monday"
  | "_tuesday"
  | "_wednesday"
  | "_thursday"
  | "_friday"
  | "_saturday"
  | "_day";

export type LocationTimeZone =
  | "_africaCairo"
  | "_africaCasablanca"
  | "_africaJohannesburg"
  | "_africaNairobi"
  | "_africaTunis"
  | "_africaWindhoek"
  | "_americaAnchorage"
  | "_americaArgentinaBuenosAires"
  | "_americaBogota"
  | "_americaCaracas"
  | "_americaCayenne"
  | "_americaChicago"
  | "_americaChihuahua"
  | "_americaDenver"
  | "_americaGodthab"
  | "_americaGuatemala"
  | "_americaHalifax"
  | "_americaIndianaIndianapolis"
  | "_americaLaPaz"
  | "_americaLosAngeles"
  | "_americaManaus"
  | "_americaMexicoCity"
  | "_americaMontevideo"
  | "_americaNewYork"
  | "_americaNoronha"
  | "_americaPhoenix"
  | "_americaRegina"
  | "_americaSantiago"
  | "_americaSaoPaulo"
  | "_americaStJohns"
  | "_americaTijuana"
  | "_asiaAlmaty"
  | "_asiaAmman"
  | "_asiaBaghdad"
  | "_asiaBaku"
  | "_asiaBangkok"
  | "_asiaBeirut"
  | "_asiaDhaka"
  | "_asiaHongKong"
  | "_asiaIrkutsk"
  | "_asiaJerusalem"
  | "_asiaKabul"
  | "_asiaKarachi"
  | "_asiaKathmandu"
  | "_asiaKolkata"
  | "_asiaKrasnoyarsk"
  | "_asiaKualaLumpur"
  | "_asiaMagadan"
  | "_asiaManila"
  | "_asiaMuscat"
  | "_asiaRangoon"
  | "_asiaRiyadh"
  | "_asiaSeoul"
  | "_asiaTaipei"
  | "_asiaTashkent"
  | "_asiaTbilisi"
  | "_asiaTehran"
  | "_asiaTokyo"
  | "_asiaVladivostok"
  | "_asiaYakutsk"
  | "_asiaYekaterinburg"
  | "_asiaYerevan"
  | "_atlanticAzores"
  | "_atlanticCapeVerde"
  | "_atlanticReykjavik"
  | "_australiaAdelaide"
  | "_australiaBrisbane"
  | "_australiaDarwin"
  | "_australiaHobart"
  | "_australiaPerth"
  | "_australiaSydney"
  | "_etcGmtPlus12"
  | "_europeAmsterdam"
  | "_europeBudapest"
  | "_europeIstanbul"
  | "_europeKiev"
  | "_europeLondon"
  | "_europeMinsk"
  | "_europeMoscow"
  | "_europeParis"
  | "_europeWarsaw"
  | "_pacificAuckland"
  | "_pacificGuam"
  | "_pacificHonolulu"
  | "_pacificKwajalein"
  | "_pacificPagoPago"
  | "_pacificTongatapu";

export type AssemblyItemEffectiveBomControl =
  | "_effectiveDate"
  | "_revisionControl";

export type PaymentInstrumentSupportedOperation =
  | "_authorization"
  | "_capture"
  | "_sale"
  | "_credit"
  | "_refund"
  | "_override"
  | "_void"
  | "_refresh";

export type ItemCostAccountingStatus =
  | "_complete"
  | "_failed"
  | "_pending"
  | "_processing";

export type FairValuePriceFairValueRangePolicy =
  | "_boundary"
  | "_fairValue"
  | "_high"
  | "_low";

export type LocationGeolocationMethod =
  | "_deriveFromPostalCode"
  | "_useLatLongCoordinates";

export type BillingScheduleYearDowim =
  | "_first"
  | "_second"
  | "_third"
  | "_fourth"
  | "_last";

export type CostCategoryItemCostType =
  | "_laborRun"
  | "_laborRunOverhead"
  | "_laborSetup"
  | "_laborSetupOverhead"
  | "_landed"
  | "_machineRun"
  | "_machineRunOverhead"
  | "_machineSetup"
  | "_machineSetupOverhead"
  | "_material"
  | "_materialOverhead"
  | "_service";

export type LocationAutoAssignmentRegionSetting =
  | "_allowSpecifiedRegionsOnly"
  | "_allowWorldwide"
  | "_allowWorldwideExceptExcludedRegions"
  | "_disallow";

export type PaymentInstrumentState =
  | "_expired"
  | "_invalid"
  | "_unknown"
  | "_verified";

export type SalesTaxItemAvailable = "_both" | "_purchase" | "_sale";

export type ItemInvtClassification = "_a" | "_b" | "_c";

export type BillingScheduleRecurrenceMode = "_dom" | "_dowim";

export type AccountingBookStatus = "_active" | "_inactive" | "_pending";

export type ItemOverheadType =
  | "_amountBaseUnit"
  | "_percentOfMaterial"
  | "_percentOfTotal";

export type ItemWeightUnit = "_g" | "_kg" | "_lb" | "_oz";

export type ConsolidatedRate = "_average" | "_current" | "_historical";

export type BillingScheduleRecurrenceRecurrenceUnits =
  | "_custom"
  | "_days"
  | "_months"
  | "_weeks";

export type BillingScheduleMonthDowim =
  | "_first"
  | "_second"
  | "_third"
  | "_fourth"
  | "_last";

export type ItemEbayRelistingOption =
  | "_doNotRelist"
  | "_relistWhenItemExpires"
  | "_relistWhenItemIsSold"
  | "_relistWhenItemIsSoldExpires";

export type TokenFamily =
  | "_adyen"
  | "_altaPay"
  | "_cyberSource"
  | "_eway"
  | "_freedomPay"
  | "_merchantESolutions"
  | "_payCorp"
  | "_payu"
  | "_securePay"
  | "_soluPay"
  | "_vantivPayments";

export type RevRecScheduleAmortizationType = "_standard" | "_variable";

export type RevRecScheduleRecurrenceType =
  | "_custom"
  | "_straightLineByEvenPeriods"
  | "_straightLineProrateFirstAndLastPeriod"
  | "_straightLineProrateFirstAndLastPeriodPeriodRate"
  | "_straightLineUsingExactDays";

export type BillingScheduleFrequency =
  | "_annually"
  | "_custom"
  | "_daily"
  | "_endOfPeriod"
  | "_monthly"
  | "_never"
  | "_oneTime"
  | "_startOfPeriod"
  | "_weekly";

export type PaymentCardType = "_credit" | "_debit";

export type LocationType = "_store" | "_warehouse";

export type RevRecScheduleRecogIntervalSrc =
  | "_revRecDatesSpecifiedOnTransaction"
  | "_billingScheduleTranDateOnSalesOrder"
  | "_billingScheduleRevRecDateOnSalesOrder"
  | "_revRecDatesSpecifiedOnSalesOrder";

export type AccountType =
  | "_accountsPayable"
  | "_accountsReceivable"
  | "_bank"
  | "_costOfGoodsSold"
  | "_creditCard"
  | "_deferredExpense"
  | "_deferredRevenue"
  | "_equity"
  | "_expense"
  | "_fixedAsset"
  | "_income"
  | "_longTermLiability"
  | "_nonPosting"
  | "_otherAsset"
  | "_otherCurrentAsset"
  | "_otherCurrentLiability"
  | "_otherExpense"
  | "_otherIncome"
  | "_statistical"
  | "_unbilledReceivable";

export type RevRecScheduleAmortizationStatus =
  | "_notStarted"
  | "_inProgress"
  | "_completed"
  | "_onHold";

export type ItemSupplyType = "_build" | "_purchase" | "_transfer";

export type ItemOverallQuantityPricingType =
  | "_byLineQuantity"
  | "_byOverallItemQuantity"
  | "_byOverallParentQuantity"
  | "_byOverallScheduleQuantity";

export type InventoryItemFraudRisk = "_high" | "_low" | "_medium";

export type CurrencyLocale =
  | "_afghanistanPashto"
  | "_afghanistanPersian"
  | "_alandIslandsSwedish"
  | "_albaniaAlbanian"
  | "_algeriaArabic"
  | "_angolaPortuguese"
  | "_anguillaEnglish"
  | "_antiguaAndBarbudaEnglish"
  | "_argentinaSpanish"
  | "_armeniaArmenian"
  | "_arubaEnglish"
  | "_arubaPortuguese"
  | "_australiaEnglish"
  | "_austriaGerman"
  | "_azerbaijanAzerbaijani"
  | "_bahamasEnglish"
  | "_bahrainArabic"
  | "_barbadosEnglish"
  | "_belarusByelorussian"
  | "_belgiumDutch"
  | "_belgiumFrench"
  | "_belizeEnglish"
  | "_bengali"
  | "_beninFrench"
  | "_bermudaEnglish"
  | "_bhutanDzongkha"
  | "_boliviaSpanish"
  | "_bonaireSaintEustatiusAndSabaDutch"
  | "_bosniaAndHerzegovinaBosnian"
  | "_botswanaEnglish"
  | "_brazilPortuguese"
  | "_bruneiMalay"
  | "_bulgariaBulgarian"
  | "_burkinaFasoFrench"
  | "_burundiFrench"
  | "_cambodiaKhmer"
  | "_cameroonFrench"
  | "_canadaEnglish"
  | "_canadaFrench"
  | "_canaryIslandsSpanish"
  | "_capeVerdePortuguese"
  | "_caymanIslandsEnglish"
  | "_centralAfricanRepublicFrench"
  | "_ceutaAndMelillaSpanish"
  | "_chadFrench"
  | "_chileSpanish"
  | "_chinaChinese"
  | "_colombiaSpanish"
  | "_comorosFrench"
  | "_congoDemocraticRepublicEnglish"
  | "_congoDemocraticRepublicFrench"
  | "_congoRepublicOfFrench"
  | "_costaRicaSpanish"
  | "_coteDivoireFrench"
  | "_croatiaCroatian"
  | "_cubaSpanish"
  | "_curacaoDutch"
  | "_cyprusEnglish"
  | "_cyprusEnglishEuro"
  | "_czechRepublicCzech"
  | "_denmarkDanish"
  | "_djiboutiArabic"
  | "_djiboutiFrench"
  | "_dominicaEnglish"
  | "_dominicanRepublicSpanish"
  | "_ecuadorSpanish"
  | "_egyptArabic"
  | "_elSalvadorSpanish"
  | "_equatorialGuineaSpanish"
  | "_eritreaAfar"
  | "_estoniaEstonian"
  | "_ethiopiaAmharic"
  | "_falklandIslandsEnglish"
  | "_fijiFijian"
  | "_finlandFinnish"
  | "_finlandFinnishEuro"
  | "_franceFrench"
  | "_franceFrenchEuro"
  | "_frenchPolynesiaFrench"
  | "_gabonFrench"
  | "_gambiaEnglish"
  | "_georgiaGeorgian"
  | "_germanyGerman"
  | "_germanyGermanEuro"
  | "_ghanaEnglish"
  | "_gibraltarEnglish"
  | "_goldOunce"
  | "_greeceGreek"
  | "_grenadaEnglish"
  | "_guatemalaSpanish"
  | "_guineaBissauPortuguese"
  | "_guineaFrench"
  | "_guyanaEnglish"
  | "_haitian"
  | "_hondurasSpanish"
  | "_hongKongChinese"
  | "_hungaryHungarian"
  | "_icelandIcelandic"
  | "_indiaEnglish"
  | "_indiaGujarati"
  | "_indiaHindi"
  | "_indiaKannada"
  | "_indiaMarathi"
  | "_indiaPanjabi"
  | "_indiaTamil"
  | "_indiaTelugu"
  | "_indonesiaIndonesian"
  | "_iranPersian"
  | "_iraqArabic"
  | "_irelandEnglish"
  | "_israelHebrew"
  | "_italyItalian"
  | "_italyItalianEuro"
  | "_jamaicaEnglish"
  | "_japanJapanese"
  | "_jordanArabic"
  | "_jordanEnglish"
  | "_kazakhstanRussian"
  | "_kenyaEnglish"
  | "_kuwaitArabic"
  | "_kuwaitEnglish"
  | "_kyrgyzstanRussian"
  | "_laosLao"
  | "_latviaLatvianLettish"
  | "_lebanonArabic"
  | "_lesothoEnglish"
  | "_liberiaEnglish"
  | "_libyaArabic"
  | "_lithuaniaLithuanian"
  | "_luxembourgFrench"
  | "_luxembourgGerman"
  | "_luxembourgLuxembourgish"
  | "_macauChinese"
  | "_macedoniaMacedonian"
  | "_malawiEnglish"
  | "_malaysiaMalay"
  | "_maldivesDhivehi"
  | "_maliFrench"
  | "_mauritiusEnglish"
  | "_mexicoSpanish"
  | "_moldovaRomanian"
  | "_moldovaRussian"
  | "_mongoliaMongolian"
  | "_moroccoArabic"
  | "_mozambiquePortuguese"
  | "_myanmarBurmese"
  | "_namibiaEnglish"
  | "_nepalNepali"
  | "_netherlandsAntillesDutch"
  | "_netherlandsDutch"
  | "_netherlandsDutchEuro"
  | "_newCaledoniaFrench"
  | "_newZealandEnglish"
  | "_nicaraguaSpanish"
  | "_nigerFrench"
  | "_nigeriaEnglish"
  | "_northKoreaKorean"
  | "_norwayNorwegian"
  | "_omanArabic"
  | "_pakistanUrdu"
  | "_palladiumOunce"
  | "_panamaSpanish"
  | "_papuaNewGuineaEnglish"
  | "_paraguaySpanish"
  | "_peruSpanish"
  | "_philippinesEnglish"
  | "_philippinesTagalog"
  | "_platinumOunce"
  | "_polandPolish"
  | "_portugalPortuguese"
  | "_portugalPortugueseEuro"
  | "_puertoRicoSpanish"
  | "_qatarArabic"
  | "_qatarEnglish"
  | "_romaniaRomanian"
  | "_russiaRussian"
  | "_rwandaFrench"
  | "_saintBarthelemyFrench"
  | "_saintHelenaEnglish"
  | "_saintKittsAndNevisEnglish"
  | "_saintLuciaEnglish"
  | "_saintMartinEnglish"
  | "_saintVincentAndTheGrenadinesEnglish"
  | "_samoaSamoan"
  | "_saoTomeAndPrincipePortuguese"
  | "_saudiArabiaArabic"
  | "_senegalFrench"
  | "_serbiaAndMontenegroSerbian"
  | "_serbiaSerbian"
  | "_serbiaSerboCroatian"
  | "_seychellesEnglish"
  | "_seychellesFrench"
  | "_sierraLeoneEnglish"
  | "_silverOunce"
  | "_singaporeEnglish"
  | "_sintMaartenDutch"
  | "_slovakiaSlovak"
  | "_slovakiaSlovakEuro"
  | "_sloveniaSlovenian"
  | "_sloveniaSlovenianEuro"
  | "_solomonIslandsEnglish"
  | "_somaliaSomali"
  | "_southAfricaAfrikaans"
  | "_southAfricaEnglish"
  | "_southKoreaKorean"
  | "_southSudanEnglish"
  | "_spainCatalan"
  | "_spainSpanish"
  | "_spainSpanishEuro"
  | "_sriLankaSinhalese"
  | "_sudanArabic"
  | "_surinameDutch"
  | "_swazilandSwati"
  | "_swedenSwedish"
  | "_switzerlandFrench"
  | "_switzerlandGerman"
  | "_switzerlandItalian"
  | "_syriaArabic"
  | "_taiwanChinese"
  | "_tajikistanTajik"
  | "_tanzaniaEnglish"
  | "_thailandThai"
  | "_togoFrench"
  | "_tongaTonga"
  | "_trinidadAndTobagoEnglish"
  | "_tunisiaArabic"
  | "_turkeyTurkish"
  | "_turkmenistanTurkmen"
  | "_turksAndCaicosIslandsEnglish"
  | "_ugandaEnglish"
  | "_ukraineUkrainian"
  | "_unitedArabEmiratesArabic"
  | "_unitedArabEmiratesEnglish"
  | "_unitedKingdomEnglish"
  | "_unitedStatesEnglish"
  | "_uruguaySpanish"
  | "_uzbekistanUzbek"
  | "_vanuatuEnglish"
  | "_vanuatuFrench"
  | "_venezuelaSpanish"
  | "_vietnamVietnamese"
  | "_wallisAndFutunaFrench"
  | "_yemenArabic"
  | "_zambiaEnglish";
