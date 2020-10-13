import {
  TokenPassport,
  TokenPassportSignature,
} from "../src/netsuite_webservices/2019_2/platform_core";
import { LoginRequest } from "../src/netsuite_webservices/2019_2/platform_messages";
import {
  deserializeSoapResponse,
  serializeSoapRequest,
} from "../src/soap-mapper";

describe("Soap Mapper", () => {
  describe("serializing and deserializing requests", () => {
    it("works in both directions", () => {
      const tokenPassport = new TokenPassport({
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

      const result = serializeSoapRequest(
        tokenPassport,
        new LoginRequest({
          passport: {
            email: "email",
            password: "password",
            account: "account",
          },
        })
      );

      expect(result).toEqual(
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

      const other = deserializeSoapResponse(result);

      expect(other).toEqual({
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
      });
    });
  });
});
