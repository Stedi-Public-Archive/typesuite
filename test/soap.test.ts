/* eslint-disable jest/no-conditional-expect */
import {
  LoginRequest,
  Preferences,
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
  soapSuccessXml,
  tokenPassport,
} from "./fixtures";
import { TransactionSearchBasic } from "../src/netsuite_webservices/2019_2/platform_common";
import { mocked } from "ts-jest/utils";
import axios from "axios";
import { Fault } from "../src/xmlsoap/envelope";

jest.mock("axios");

describe("serializing and deserializing requests", () => {
  it("supports preferences", () => {
    const result = serializeSoapRequest(
      tokenPassport(),
      new LoginRequest({
        passport: {
          email: "email",
          password: "password",
          account: "account",
        },
      }),
      new Preferences({
        ignoreReadOnlyFields: true,
      })
    );
    expect(result).toContain(
      "<platform_messages:preferences><platform_messages:ignoreReadOnlyFields>true</platform_messages:ignoreReadOnlyFields></platform_messages:preferences></soap:Header>"
    );
  });

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

function mockSoapSuccess() {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const httpMock = mocked(axios.post).mockResolvedValue({
    data: soapSuccessXml(),
    status: 200,
    statusText: "OK",
    headers: {},
    config: {},
  });

  return { httpMock };
}

function mockSoapFault() {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const httpMock = mocked(axios.post).mockRejectedValue({
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

  return { httpMock };
}

describe("Sending requests", () => {
  afterEach(jest.resetAllMocks);

  it("returns the response deserialized from XML", async () => {
    mockSoapSuccess();

    const response = await sendSoapRequest(
      {
        account: "good-value",
        apiVersion: "2019_2",
        token: {
          consumerKey: "good-value",
          consumerSecret: "good-value",
          tokenKey: "good-value",
          tokenSecret: "good-value",
        },
      },
      new SearchRequest({
        searchRecord: new TransactionSearchAdvanced({
          criteria: {
            basic: new TransactionSearchBasic({
              type: {
                operator: "anyOf",
                searchValue: ["_purchaseOrder"],
              },
              lastModifiedDate: {
                operator: "after",
                searchValue: "2020-10-13T21:31:19.359Z",
              },
            }),
          },
        }),
      }),
      "search"
    );

    expect(response).toEqual({
      TYPE_NAME:
        "com_netsuite_webservices_platform_messages_2019_2.SearchResponse",
      searchResult: {
        TYPE_NAME: "com_netsuite_webservices_platform_core_2019_2.SearchResult",
        pageIndex: 1,
        pageSize: 1000,
        searchId:
          "WEBSERVICES_TSTDRV1982068_101420206783052241624369917_9d3834",
        searchRowList: {
          TYPE_NAME:
            "com_netsuite_webservices_platform_core_2019_2.SearchRowList",
          searchRow: [
            {
              TYPE_NAME:
                "com_netsuite_webservices_transactions_sales_2019_2.TransactionSearchRow",
              basic: {
                TYPE_NAME:
                  "com_netsuite_webservices_platform_common_2019_2.TransactionSearchRowBasic",
                internalId: [
                  {
                    TYPE_NAME:
                      "com_netsuite_webservices_platform_core_2019_2.SearchColumnSelectField",
                    searchValue: {
                      TYPE_NAME:
                        "com_netsuite_webservices_platform_core_2019_2.RecordRef",
                      internalId: "392562",
                    },
                  },
                ],
              },
            },
          ],
        },
        status: {
          TYPE_NAME: "com_netsuite_webservices_platform_core_2019_2.Status",
          isSuccess: true,
        },
        totalPages: 1,
        totalRecords: 1,
      },
    });
  });

  it("rejects the promise when there is a fault", async () => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    mockSoapFault();

    expect.assertions(3);
    try {
      await sendSoapRequest(
        {
          account: "wrong-value",
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
