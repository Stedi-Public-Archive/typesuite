var com_netsuite_webservices_lists_accounting_2019_2_types_Module_Factory = function () {
  var com_netsuite_webservices_lists_accounting_2019_2_types = {
    name: 'com_netsuite_webservices_lists_accounting_2019_2_types',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'ItemPreferenceCriterion',
        values: ['_A', '_B', '_C', '_D', '_E', '_F']
      }, {
        type: 'enumInfo',
        localName: 'CurrencyCurrencyPrecision',
        values: ['_two', '_zero']
      }, {
        type: 'enumInfo',
        localName: 'ItemAtpMethod',
        values: ['_cumulativeAtpWithLookAhead', '_discreteAtp']
      }, {
        type: 'enumInfo',
        localName: 'ItemCostingMethod',
        values: ['_average', '_fifo', '_groupAverage', '_lifo', '_lotNumbered', '_serialized', '_standard']
      }, {
        type: 'enumInfo',
        localName: 'ItemMatrixType',
        values: ['_parent', '_child']
      }, {
        type: 'enumInfo',
        localName: 'PaymentCardBrand',
        values: ['_amex', '_cirrus', '_dinersClub', '_discover', '_jcb', '_laser', '_localCard', '_maestro', '_masterCard', '_solo', '_unionPay', '_visa']
      }, {
        type: 'enumInfo',
        localName: 'BillingScheduleMonthDow',
        values: ['_sunday', '_monday', '_tuesday', '_wednesday', '_thursday', '_friday', '_saturday', '_day']
      }, {
        type: 'enumInfo',
        localName: 'ItemOutOfStockBehavior',
        values: ['_allowBackOrdersButDisplayOutOfStockMessage', '_allowBackOrdersWithNoOutOfStockMessage', '_default', '_disallowBackOrdersButDisplayOutOfStockMessage', '_removeItemWhenOutOfStock']
      }, {
        type: 'enumInfo',
        localName: 'ItemType',
        values: ['_assembly', '_description', '_discount', '_downloadItem', '_giftCertificateItem', '_inventoryItem', '_itemGroup', '_kit', '_markup', '_nonInventoryItem', '_otherCharge', '_payment', '_service', '_subtotal']
      }, {
        type: 'enumInfo',
        localName: 'BillingScheduleType',
        values: ['_chargeBased', '_fixedBidInterval', '_fixedBidMilestone', '_standard', '_timeAndMaterials']
      }, {
        type: 'enumInfo',
        localName: 'ItemSubType',
        values: ['_forPurchase', '_forResale', '_forSale']
      }, {
        type: 'enumInfo',
        localName: 'ItemSupplyLotSizingMethod',
        values: ['_fixedLotSize', '_lotForLot', '_periodsOfSupply']
      }, {
        type: 'enumInfo',
        localName: 'ItemAccountMappingItemAccount',
        values: ['_asset', '_costOfGoods', '_customerReturnVariance', '_deferral', '_deferredRevenue', '_discount', '_dropShipExpense', '_exchangeRateVariance', '_expense', '_foreignCurrencyAdjustmentRevenueAccount', '_gainLoss', '_income', '_intercompanyCostOfGoods', '_intercompanyDeferredRevenue', '_intercompanyExpense', '_intercompanyIncome', '_liability', '_markup', '_payment', '_priceVariance', '_productionPriceVariance', '_productionQuantityVariance', '_purchasePriceVariance', '_quantityVariance', '_scrap', '_unbuildVariance', '_vendorReturnVariance', '_wipVariance', '_workInProcess', '_writeOff']
      }, {
        type: 'enumInfo',
        localName: 'CashFlowRateType',
        values: ['_average', '_current', '_historical']
      }, {
        type: 'enumInfo',
        localName: 'CurrencyFxRateUpdateTimezone',
        values: ['_americaNewYork', '_asiaMagadan', '_asiaTokyo', '_europeParis']
      }, {
        type: 'enumInfo',
        localName: 'BillingScheduleYearMonth',
        values: ['_january', '_february', '_march', '_april', '_may', '_june', '_july', '_august', '_september', '_october', '_november', '_december']
      }, {
        type: 'enumInfo',
        localName: 'BillingScheduleRecurrencePattern',
        values: ['_anniversaryBillDate', '_fixedBillDate']
      }, {
        type: 'enumInfo',
        localName: 'TaxAcctType',
        values: ['_sale', '_purchase']
      }, {
        type: 'enumInfo',
        localName: 'GeneralRateType',
        values: ['_average', '_current', '_historical']
      }, {
        type: 'enumInfo',
        localName: 'PeriodicLotSizeType',
        values: ['_interval', '_monthly', '_weekly']
      }, {
        type: 'enumInfo',
        localName: 'HazmatPackingGroup',
        values: ['_i', '_ii', '_iii']
      }, {
        type: 'enumInfo',
        localName: 'ItemProductFeed',
        values: ['_googleBase', '_nexTag', '_shoppingCom', '_shopzilla', '_yahooShopping']
      }, {
        type: 'enumInfo',
        localName: 'ItemSupplyReplenishmentMethod',
        values: ['_reorderPoint', '_timePhased']
      }, {
        type: 'enumInfo',
        localName: 'BillingScheduleYearDowimMonth',
        values: ['_january', '_february', '_march', '_april', '_may', '_june', '_july', '_august', '_september', '_october', '_november', '_december']
      }, {
        type: 'enumInfo',
        localName: 'ItemDemandSource',
        values: ['_enteredAndPlannedOrders', '_forecastAndOrders', '_forecastConsumption', '_forecastFromDemandPlan']
      }, {
        type: 'enumInfo',
        localName: 'BillingScheduleYearDow',
        values: ['_sunday', '_monday', '_tuesday', '_wednesday', '_thursday', '_friday', '_saturday', '_day']
      }, {
        type: 'enumInfo',
        localName: 'LocationTimeZone',
        values: ['_africaCairo', '_africaCasablanca', '_africaJohannesburg', '_africaNairobi', '_africaTunis', '_africaWindhoek', '_americaAnchorage', '_americaArgentinaBuenosAires', '_americaBogota', '_americaCaracas', '_americaCayenne', '_americaChicago', '_americaChihuahua', '_americaDenver', '_americaGodthab', '_americaGuatemala', '_americaHalifax', '_americaIndianaIndianapolis', '_americaLaPaz', '_americaLosAngeles', '_americaManaus', '_americaMexicoCity', '_americaMontevideo', '_americaNewYork', '_americaNoronha', '_americaPhoenix', '_americaRegina', '_americaSantiago', '_americaSaoPaulo', '_americaStJohns', '_americaTijuana', '_asiaAlmaty', '_asiaAmman', '_asiaBaghdad', '_asiaBaku', '_asiaBangkok', '_asiaBeirut', '_asiaDhaka', '_asiaHongKong', '_asiaIrkutsk', '_asiaJerusalem', '_asiaKabul', '_asiaKarachi', '_asiaKathmandu', '_asiaKolkata', '_asiaKrasnoyarsk', '_asiaKualaLumpur', '_asiaMagadan', '_asiaManila', '_asiaMuscat', '_asiaRangoon', '_asiaRiyadh', '_asiaSeoul', '_asiaTaipei', '_asiaTashkent', '_asiaTbilisi', '_asiaTehran', '_asiaTokyo', '_asiaVladivostok', '_asiaYakutsk', '_asiaYekaterinburg', '_asiaYerevan', '_atlanticAzores', '_atlanticCapeVerde', '_atlanticReykjavik', '_australiaAdelaide', '_australiaBrisbane', '_australiaDarwin', '_australiaHobart', '_australiaPerth', '_australiaSydney', '_etcGmtPlus12', '_europeAmsterdam', '_europeBudapest', '_europeIstanbul', '_europeKiev', '_europeLondon', '_europeMinsk', '_europeMoscow', '_europeParis', '_europeWarsaw', '_pacificAuckland', '_pacificGuam', '_pacificHonolulu', '_pacificKwajalein', '_pacificPagoPago', '_pacificTongatapu']
      }, {
        type: 'enumInfo',
        localName: 'AssemblyItemEffectiveBomControl',
        values: ['_effectiveDate', '_revisionControl']
      }, {
        type: 'enumInfo',
        localName: 'PaymentInstrumentSupportedOperation',
        values: ['_authorization', '_capture', '_sale', '_credit', '_refund', '_override', '_void', '_refresh']
      }, {
        type: 'enumInfo',
        localName: 'ItemCostAccountingStatus',
        values: ['_complete', '_failed', '_pending', '_processing']
      }, {
        type: 'enumInfo',
        localName: 'FairValuePriceFairValueRangePolicy',
        values: ['_boundary', '_fairValue', '_high', '_low']
      }, {
        type: 'enumInfo',
        localName: 'LocationGeolocationMethod',
        values: ['_deriveFromPostalCode', '_useLatLongCoordinates']
      }, {
        type: 'enumInfo',
        localName: 'BillingScheduleYearDowim',
        values: ['_first', '_second', '_third', '_fourth', '_last']
      }, {
        type: 'enumInfo',
        localName: 'CostCategoryItemCostType',
        values: ['_laborRun', '_laborRunOverhead', '_laborSetup', '_laborSetupOverhead', '_landed', '_machineRun', '_machineRunOverhead', '_machineSetup', '_machineSetupOverhead', '_material', '_materialOverhead', '_service']
      }, {
        type: 'enumInfo',
        localName: 'LocationAutoAssignmentRegionSetting',
        values: ['_allowSpecifiedRegionsOnly', '_allowWorldwide', '_allowWorldwideExceptExcludedRegions', '_disallow']
      }, {
        type: 'enumInfo',
        localName: 'PaymentInstrumentState',
        values: ['_expired', '_invalid', '_unknown', '_verified']
      }, {
        type: 'enumInfo',
        localName: 'SalesTaxItemAvailable',
        values: ['_both', '_purchase', '_sale']
      }, {
        type: 'enumInfo',
        localName: 'ItemInvtClassification',
        values: ['_a', '_b', '_c']
      }, {
        type: 'enumInfo',
        localName: 'BillingScheduleRecurrenceMode',
        values: ['_dom', '_dowim']
      }, {
        type: 'enumInfo',
        localName: 'AccountingBookStatus',
        values: ['_active', '_inactive', '_pending']
      }, {
        type: 'enumInfo',
        localName: 'ItemOverheadType',
        values: ['_amountBaseUnit', '_percentOfMaterial', '_percentOfTotal']
      }, {
        type: 'enumInfo',
        localName: 'ItemWeightUnit',
        values: ['_g', '_kg', '_lb', '_oz']
      }, {
        type: 'enumInfo',
        localName: 'ConsolidatedRate',
        values: ['_average', '_current', '_historical']
      }, {
        type: 'enumInfo',
        localName: 'BillingScheduleRecurrenceRecurrenceUnits',
        values: ['_custom', '_days', '_months', '_weeks']
      }, {
        type: 'enumInfo',
        localName: 'BillingScheduleMonthDowim',
        values: ['_first', '_second', '_third', '_fourth', '_last']
      }, {
        type: 'enumInfo',
        localName: 'ItemEbayRelistingOption',
        values: ['_doNotRelist', '_relistWhenItemExpires', '_relistWhenItemIsSold', '_relistWhenItemIsSoldExpires']
      }, {
        type: 'enumInfo',
        localName: 'TokenFamily',
        values: ['_adyen', '_altaPay', '_cyberSource', '_eway', '_freedomPay', '_merchantESolutions', '_payCorp', '_payu', '_securePay', '_soluPay', '_vantivPayments']
      }, {
        type: 'enumInfo',
        localName: 'RevRecScheduleAmortizationType',
        values: ['_standard', '_variable']
      }, {
        type: 'enumInfo',
        localName: 'RevRecScheduleRecurrenceType',
        values: ['_custom', '_straightLineByEvenPeriods', '_straightLineProrateFirstAndLastPeriod', '_straightLineProrateFirstAndLastPeriodPeriodRate', '_straightLineUsingExactDays']
      }, {
        type: 'enumInfo',
        localName: 'BillingScheduleFrequency',
        values: ['_annually', '_custom', '_daily', '_endOfPeriod', '_monthly', '_never', '_oneTime', '_startOfPeriod', '_weekly']
      }, {
        type: 'enumInfo',
        localName: 'PaymentCardType',
        values: ['_credit', '_debit']
      }, {
        type: 'enumInfo',
        localName: 'LocationType',
        values: ['_store', '_warehouse']
      }, {
        type: 'enumInfo',
        localName: 'RevRecScheduleRecogIntervalSrc',
        values: ['_revRecDatesSpecifiedOnTransaction', '_billingScheduleTranDateOnSalesOrder', '_billingScheduleRevRecDateOnSalesOrder', '_revRecDatesSpecifiedOnSalesOrder']
      }, {
        type: 'enumInfo',
        localName: 'AccountType',
        values: ['_accountsPayable', '_accountsReceivable', '_bank', '_costOfGoodsSold', '_creditCard', '_deferredExpense', '_deferredRevenue', '_equity', '_expense', '_fixedAsset', '_income', '_longTermLiability', '_nonPosting', '_otherAsset', '_otherCurrentAsset', '_otherCurrentLiability', '_otherExpense', '_otherIncome', '_statistical', '_unbilledReceivable']
      }, {
        type: 'enumInfo',
        localName: 'RevRecScheduleAmortizationStatus',
        values: ['_notStarted', '_inProgress', '_completed', '_onHold']
      }, {
        type: 'enumInfo',
        localName: 'ItemSupplyType',
        values: ['_build', '_purchase', '_transfer']
      }, {
        type: 'enumInfo',
        localName: 'ItemOverallQuantityPricingType',
        values: ['_byLineQuantity', '_byOverallItemQuantity', '_byOverallParentQuantity', '_byOverallScheduleQuantity']
      }, {
        type: 'enumInfo',
        localName: 'InventoryItemFraudRisk',
        values: ['_high', '_low', '_medium']
      }, {
        type: 'enumInfo',
        localName: 'CurrencyLocale',
        values: ['_afghanistanPashto', '_afghanistanPersian', '_alandIslandsSwedish', '_albaniaAlbanian', '_algeriaArabic', '_angolaPortuguese', '_anguillaEnglish', '_antiguaAndBarbudaEnglish', '_argentinaSpanish', '_armeniaArmenian', '_arubaEnglish', '_arubaPortuguese', '_australiaEnglish', '_austriaGerman', '_azerbaijanAzerbaijani', '_bahamasEnglish', '_bahrainArabic', '_barbadosEnglish', '_belarusByelorussian', '_belgiumDutch', '_belgiumFrench', '_belizeEnglish', '_bengali', '_beninFrench', '_bermudaEnglish', '_bhutanDzongkha', '_boliviaSpanish', '_bonaireSaintEustatiusAndSabaDutch', '_bosniaAndHerzegovinaBosnian', '_botswanaEnglish', '_brazilPortuguese', '_bruneiMalay', '_bulgariaBulgarian', '_burkinaFasoFrench', '_burundiFrench', '_cambodiaKhmer', '_cameroonFrench', '_canadaEnglish', '_canadaFrench', '_canaryIslandsSpanish', '_capeVerdePortuguese', '_caymanIslandsEnglish', '_centralAfricanRepublicFrench', '_ceutaAndMelillaSpanish', '_chadFrench', '_chileSpanish', '_chinaChinese', '_colombiaSpanish', '_comorosFrench', '_congoDemocraticRepublicEnglish', '_congoDemocraticRepublicFrench', '_congoRepublicOfFrench', '_costaRicaSpanish', '_coteDivoireFrench', '_croatiaCroatian', '_cubaSpanish', '_curacaoDutch', '_cyprusEnglish', '_cyprusEnglishEuro', '_czechRepublicCzech', '_denmarkDanish', '_djiboutiArabic', '_djiboutiFrench', '_dominicaEnglish', '_dominicanRepublicSpanish', '_ecuadorSpanish', '_egyptArabic', '_elSalvadorSpanish', '_equatorialGuineaSpanish', '_eritreaAfar', '_estoniaEstonian', '_ethiopiaAmharic', '_falklandIslandsEnglish', '_fijiFijian', '_finlandFinnish', '_finlandFinnishEuro', '_franceFrench', '_franceFrenchEuro', '_frenchPolynesiaFrench', '_gabonFrench', '_gambiaEnglish', '_georgiaGeorgian', '_germanyGerman', '_germanyGermanEuro', '_ghanaEnglish', '_gibraltarEnglish', '_goldOunce', '_greeceGreek', '_grenadaEnglish', '_guatemalaSpanish', '_guineaBissauPortuguese', '_guineaFrench', '_guyanaEnglish', '_haitian', '_hondurasSpanish', '_hongKongChinese', '_hungaryHungarian', '_icelandIcelandic', '_indiaEnglish', '_indiaGujarati', '_indiaHindi', '_indiaKannada', '_indiaMarathi', '_indiaPanjabi', '_indiaTamil', '_indiaTelugu', '_indonesiaIndonesian', '_iranPersian', '_iraqArabic', '_irelandEnglish', '_israelHebrew', '_italyItalian', '_italyItalianEuro', '_jamaicaEnglish', '_japanJapanese', '_jordanArabic', '_jordanEnglish', '_kazakhstanRussian', '_kenyaEnglish', '_kuwaitArabic', '_kuwaitEnglish', '_kyrgyzstanRussian', '_laosLao', '_latviaLatvianLettish', '_lebanonArabic', '_lesothoEnglish', '_liberiaEnglish', '_libyaArabic', '_lithuaniaLithuanian', '_luxembourgFrench', '_luxembourgGerman', '_luxembourgLuxembourgish', '_macauChinese', '_macedoniaMacedonian', '_malawiEnglish', '_malaysiaMalay', '_maldivesDhivehi', '_maliFrench', '_mauritiusEnglish', '_mexicoSpanish', '_moldovaRomanian', '_moldovaRussian', '_mongoliaMongolian', '_moroccoArabic', '_mozambiquePortuguese', '_myanmarBurmese', '_namibiaEnglish', '_nepalNepali', '_netherlandsAntillesDutch', '_netherlandsDutch', '_netherlandsDutchEuro', '_newCaledoniaFrench', '_newZealandEnglish', '_nicaraguaSpanish', '_nigerFrench', '_nigeriaEnglish', '_northKoreaKorean', '_norwayNorwegian', '_omanArabic', '_pakistanUrdu', '_palladiumOunce', '_panamaSpanish', '_papuaNewGuineaEnglish', '_paraguaySpanish', '_peruSpanish', '_philippinesEnglish', '_philippinesTagalog', '_platinumOunce', '_polandPolish', '_portugalPortuguese', '_portugalPortugueseEuro', '_puertoRicoSpanish', '_qatarArabic', '_qatarEnglish', '_romaniaRomanian', '_russiaRussian', '_rwandaFrench', '_saintBarthelemyFrench', '_saintHelenaEnglish', '_saintKittsAndNevisEnglish', '_saintLuciaEnglish', '_saintMartinEnglish', '_saintVincentAndTheGrenadinesEnglish', '_samoaSamoan', '_saoTomeAndPrincipePortuguese', '_saudiArabiaArabic', '_senegalFrench', '_serbiaAndMontenegroSerbian', '_serbiaSerbian', '_serbiaSerboCroatian', '_seychellesEnglish', '_seychellesFrench', '_sierraLeoneEnglish', '_silverOunce', '_singaporeEnglish', '_sintMaartenDutch', '_slovakiaSlovak', '_slovakiaSlovakEuro', '_sloveniaSlovenian', '_sloveniaSlovenianEuro', '_solomonIslandsEnglish', '_somaliaSomali', '_southAfricaAfrikaans', '_southAfricaEnglish', '_southKoreaKorean', '_southSudanEnglish', '_spainCatalan', '_spainSpanish', '_spainSpanishEuro', '_sriLankaSinhalese', '_sudanArabic', '_surinameDutch', '_swazilandSwati', '_swedenSwedish', '_switzerlandFrench', '_switzerlandGerman', '_switzerlandItalian', '_syriaArabic', '_taiwanChinese', '_tajikistanTajik', '_tanzaniaEnglish', '_thailandThai', '_togoFrench', '_tongaTonga', '_trinidadAndTobagoEnglish', '_tunisiaArabic', '_turkeyTurkish', '_turkmenistanTurkmen', '_turksAndCaicosIslandsEnglish', '_ugandaEnglish', '_ukraineUkrainian', '_unitedArabEmiratesArabic', '_unitedArabEmiratesEnglish', '_unitedKingdomEnglish', '_unitedStatesEnglish', '_uruguaySpanish', '_uzbekistanUzbek', '_vanuatuEnglish', '_vanuatuFrench', '_venezuelaSpanish', '_vietnamVietnamese', '_wallisAndFutunaFrench', '_yemenArabic', '_zambiaEnglish']
      }],
    elementInfos: []
  };
  return {
    com_netsuite_webservices_lists_accounting_2019_2_types: com_netsuite_webservices_lists_accounting_2019_2_types
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_lists_accounting_2019_2_types_Module_Factory);
}
else {
  var com_netsuite_webservices_lists_accounting_2019_2_types_Module = com_netsuite_webservices_lists_accounting_2019_2_types_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_lists_accounting_2019_2_types = com_netsuite_webservices_lists_accounting_2019_2_types_Module.com_netsuite_webservices_lists_accounting_2019_2_types;
  }
  else {
    var com_netsuite_webservices_lists_accounting_2019_2_types = com_netsuite_webservices_lists_accounting_2019_2_types_Module.com_netsuite_webservices_lists_accounting_2019_2_types;
  }
}