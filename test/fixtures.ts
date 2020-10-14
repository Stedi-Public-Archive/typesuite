import {
  TokenPassport,
  TokenPassportSignature,
} from "../src/netsuite_webservices/2019_2/platform_core";

export function tokenPassport(): TokenPassport {
  return new TokenPassport({
    account: "some-account",
    consumerKey: "some-key",
    token: "some-token",
    nonce: "nounce",
    timestamp: 0,
    signature: new TokenPassportSignature({
      algorithm: "HMAC_SHA256",
      value: "some-value",
    }),
  });
}

export function expectedLoginRequestXml(): string {
  return (
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" ' +
    'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
    'xmlns:platform_common="urn:common_2019_2.platform.webservices.netsuite.com" ' +
    'xmlns:platform_core="urn:core_2019_2.platform.webservices.netsuite.com" ' +
    'xmlns:platform_messages="urn:messages_2019_2.platform.webservices.netsuite.com">' +
    "<soap:Header>" +
    "<platform_messages:tokenPassport>" +
    "<platform_core:account>some-account</platform_core:account>" +
    "<platform_core:consumerKey>some-key</platform_core:consumerKey>" +
    "<platform_core:token>some-token</platform_core:token>" +
    "<platform_core:nonce>nounce</platform_core:nonce>" +
    "<platform_core:timestamp>0</platform_core:timestamp>" +
    '<platform_core:signature algorithm="HMAC_SHA256">some-value</platform_core:signature>' +
    "</platform_messages:tokenPassport>" +
    "</soap:Header>" +
    "<soap:Body>" +
    "<platform_messages:login><platform_messages:passport>" +
    "<platform_core:email>email</platform_core:email>" +
    "<platform_core:password>password</platform_core:password>" +
    "<platform_core:account>account</platform_core:account>" +
    "</platform_messages:passport></platform_messages:login>" +
    "</soap:Body>" +
    "</soap:Envelope>"
  );
}

export function expectedDeserializedLoginRequest() {
  return {
    name: {
      key: "{http://schemas.xmlsoap.org/soap/envelope/}Envelope",
      localPart: "Envelope",
      namespaceURI: "http://schemas.xmlsoap.org/soap/envelope/",
      prefix: "soap",
      string: "{http://schemas.xmlsoap.org/soap/envelope/}soap:Envelope",
    },
    value: {
      TYPE_NAME: "org_xmlsoap_schemas_soap_envelope.Envelope",
      body: {
        TYPE_NAME: "org_xmlsoap_schemas_soap_envelope.Body",
        any: [
          {
            name: {
              key:
                "{urn:messages_2019_2.platform.webservices.netsuite.com}login",
              localPart: "login",
              namespaceURI:
                "urn:messages_2019_2.platform.webservices.netsuite.com",
              prefix: "platform_messages",
              string:
                "{urn:messages_2019_2.platform.webservices.netsuite.com}platform_messages:login",
            },
            value: {
              TYPE_NAME:
                "com_netsuite_webservices_platform_messages_2019_2.LoginRequest",
              passport: {
                TYPE_NAME:
                  "com_netsuite_webservices_platform_core_2019_2.Passport",
                account: "account",
                email: "email",
                password: "password",
              },
            },
          },
        ],
      },
      header: {
        TYPE_NAME: "org_xmlsoap_schemas_soap_envelope.Header",
        any: [
          {
            name: {
              key:
                "{urn:messages_2019_2.platform.webservices.netsuite.com}tokenPassport",
              localPart: "tokenPassport",
              namespaceURI:
                "urn:messages_2019_2.platform.webservices.netsuite.com",
              prefix: "platform_messages",
              string:
                "{urn:messages_2019_2.platform.webservices.netsuite.com}platform_messages:tokenPassport",
            },
            value: {
              TYPE_NAME:
                "com_netsuite_webservices_platform_core_2019_2.TokenPassport",
              account: "some-account",
              consumerKey: "some-key",
              nonce: "nounce",
              signature: {
                TYPE_NAME:
                  "com_netsuite_webservices_platform_core_2019_2.TokenPassportSignature",
                algorithm: "HMAC_SHA256",
                value: "some-value",
              },
              timestamp: 0,
              token: "some-token",
            },
          },
        ],
      },
      otherAttributes: {
        "{http://www.w3.org/2000/xmlns/}platform_common":
          "urn:common_2019_2.platform.webservices.netsuite.com",
        "{http://www.w3.org/2000/xmlns/}platform_core":
          "urn:core_2019_2.platform.webservices.netsuite.com",
        "{http://www.w3.org/2000/xmlns/}platform_messages":
          "urn:messages_2019_2.platform.webservices.netsuite.com",
        "{http://www.w3.org/2000/xmlns/}soap":
          "http://schemas.xmlsoap.org/soap/envelope/",
        "{http://www.w3.org/2000/xmlns/}xsi":
          "http://www.w3.org/2001/XMLSchema-instance",
      },
    },
  };
}

export function expectedSearchRequestXml(date: string): string {
  return (
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" ' +
    'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
    'xmlns:platform_common="urn:common_2019_2.platform.webservices.netsuite.com" ' +
    'xmlns:platform_core="urn:core_2019_2.platform.webservices.netsuite.com" ' +
    'xmlns:platform_messages="urn:messages_2019_2.platform.webservices.netsuite.com">' +
    "<soap:Header>" +
    "<platform_messages:tokenPassport>" +
    "<platform_core:account>some-account</platform_core:account>" +
    "<platform_core:consumerKey>some-key</platform_core:consumerKey>" +
    "<platform_core:token>some-token</platform_core:token>" +
    "<platform_core:nonce>nounce</platform_core:nonce>" +
    "<platform_core:timestamp>0</platform_core:timestamp>" +
    '<platform_core:signature algorithm="HMAC_SHA256">some-value</platform_core:signature>' +
    "</platform_messages:tokenPassport></soap:Header>" +
    "<soap:Body>" +
    "<platform_messages:search>" +
    '<platform_messages:searchRecord xmlns:p0="urn:sales_2019_2.transactions.webservices.netsuite.com" ' +
    'xsi:type="p0:TransactionSearchAdvanced">' +
    "<p0:criteria><p0:basic>" +
    "<platform_common:closed>" +
    "<platform_core:searchValue>false</platform_core:searchValue>" +
    "</platform_common:closed>" +
    '<platform_common:dateCreated operator="after">' +
    `<platform_core:searchValue>${date}</platform_core:searchValue>` +
    "</platform_common:dateCreated>" +
    "<platform_common:mainLine><platform_core:searchValue>true</platform_core:searchValue></platform_common:mainLine>" +
    '<platform_common:status operator="anyOf">' +
    "<platform_core:searchValue>_purchaseOrderPendingReceipt</platform_core:searchValue></platform_common:status>" +
    '<platform_common:type operator="anyOf"><platform_core:searchValue>_purchaseOrder</platform_core:searchValue></platform_common:type>' +
    "</p0:basic></p0:criteria>" +
    "</platform_messages:searchRecord>" +
    "</platform_messages:search>" +
    "</soap:Body>" +
    "</soap:Envelope>"
  );
}

export function soapFaultXml(): string {
  return (
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"' +
    '                  xmlns:xsd="http://www.w3.org/2001/XMLSchema"' +
    '                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
    "    <soapenv:Body>" +
    "        <soapenv:Fault>" +
    "            <faultcode>soapenv:Server.userException</faultcode>" +
    "            <faultstring>Invalid login attempt.</faultstring>" +
    "            <detail>" +
    "                <platformFaults:invalidCredentialsFault" +
    '                        xmlns:platformFaults="urn:faults_2019_2.platform.webservices.netsuite.com">' +
    "                    <platformFaults:code>USER_ERROR</platformFaults:code>" +
    "                    <platformFaults:message>Invalid login attempt.</platformFaults:message>" +
    "                </platformFaults:invalidCredentialsFault>" +
    '                <ns1:hostname xmlns:ns1="http://xml.apache.org/axis/">partners030' +
    "                </ns1:hostname>" +
    "            </detail>" +
    "        </soapenv:Fault>" +
    "    </soapenv:Body>" +
    "</soapenv:Envelope>"
  );
}
