import {
  LoginRequest,
  SearchRequest,
} from "../src/netsuite_webservices/2019_2/platform_messages";
import { TransactionSearchAdvanced } from "../src/netsuite_webservices/2019_2/transactions_sales";
import { deserializeSoapResponse, serializeSoapRequest } from "../src/soap";
import {
  expectedDeserializedLoginRequest,
  expectedLoginRequestXml,
  expectedSearchRequestXml,
  tokenPassport,
} from "./fixtures";

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
