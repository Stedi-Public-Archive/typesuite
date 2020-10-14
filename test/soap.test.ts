/* eslint-disable jest/no-conditional-expect */
import {
  LoginRequest,
  SearchRequest,
} from "../src/netsuite_webservices/2019_2/platform_messages";
import { TransactionSearchAdvanced } from "../src/netsuite_webservices/2019_2/transactions_sales";
import {
  deserializeSoapResponse,
  sendSoapRequest,
  serializeSoapRequest,
} from "../src/soap";
import {
  expectedDeserializedLoginRequest,
  expectedLoginRequestXml,
  expectedSearchRequestXml,
  soapFaultXml,
  tokenPassport,
} from "./fixtures";
import { TransactionSearchBasic } from "../src/netsuite_webservices/2019_2/platform_common";
import { mocked } from "ts-jest/utils";
import axios from "axios";
import { Fault } from "../src/xmlsoap/envelope";

jest.mock("axios");

describe("serializing and deserializing requests", () => {
  it("works in both directions", () => {
    const result = serializeSoapRequest(
      tokenPassport(),
      new LoginRequest({
        passport: {
          email: "email",
          password: "password",
          account: "account",
        },
      })
    );
    expect(result).toEqual(expectedLoginRequestXml());

    const other = deserializeSoapResponse(result);
    expect(other).toEqual(expectedDeserializedLoginRequest());
  });

  it("works for types with super classes", () => {
    const aDate = new Date().toISOString();
    const searchRecord = new TransactionSearchAdvanced({
      criteria: {
        basic: {
          closed: false,
          mainLine: true,
          status: {
            operator: "anyOf",
            searchValue: ["_purchaseOrderPendingReceipt"],
          },
          type: {
            operator: "anyOf",
            searchValue: ["_purchaseOrder"],
          },
          dateCreated: {
            operator: "after",
            searchValue: aDate,
          },
        },
      },
    });

    const result = serializeSoapRequest(
      tokenPassport(),
      new SearchRequest({ searchRecord })
    );

    expect(result).toEqual(expectedSearchRequestXml(aDate));
  });
});

describe("Sending requests", () => {
  it("rejects the promise when there is a fault", async () => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    mocked(axios.post).mockRejectedValue({
      config: {},
      response: {
        data: soapFaultXml(),
        status: 500,
        statusText: "Server Error",
        headers: {},
        config: {},
      },
      isAxiosError: false,
      toJSON: () => "",
    });

    expect.assertions(3);
    try {
      await sendSoapRequest(
        {
          account: "fake",
          apiVersion: "2019_2",
          token: {
            consumerKey: "wrong-value",
            consumerSecret: "wrong-value",
            tokenKey: "wrong-value",
            tokenSecret: "wrong-value",
          },
        },
        new SearchRequest({
          searchRecord: new TransactionSearchAdvanced({
            criteria: {
              basic: new TransactionSearchBasic({
                closed: false,
              }),
            },
          }),
        }),
        "search"
      );
    } catch (error) {
      const fault = (error as unknown) as Fault;
      expect(fault.faultstring).toEqual("Invalid login attempt.");
      expect(fault.faultcode).toEqual({
        key: "{http://schemas.xmlsoap.org/soap/envelope/}Server.userException",
        localPart: "Server.userException",
        namespaceURI: "http://schemas.xmlsoap.org/soap/envelope/",
        prefix: "soapenv",
        string:
          "{http://schemas.xmlsoap.org/soap/envelope/}soapenv:Server.userException",
      });
      expect(fault.detail?.any?.[0]).toEqual({
        name: {
          key:
            "{urn:faults_2019_2.platform.webservices.netsuite.com}invalidCredentialsFault",
          localPart: "invalidCredentialsFault",
          namespaceURI: "urn:faults_2019_2.platform.webservices.netsuite.com",
          prefix: "platformFaults",
          string:
            "{urn:faults_2019_2.platform.webservices.netsuite.com}platformFaults:invalidCredentialsFault",
        },
        value: {
          TYPE_NAME:
            "com_netsuite_webservices_platform_faults_2019_2.InvalidCredentialsFault",
          code: "USER_ERROR",
          message: "Invalid login attempt.",
        },
      });
    }
  });
});
