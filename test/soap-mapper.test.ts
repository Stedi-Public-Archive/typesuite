import { SoapMapper } from "../src/soapMapper";
import { TokenPassport } from "../src/netsuite_webservices/2019_2/platform_core";
import { GetRequest } from "../src/netsuite_webservices/2019_2/platform_messages";

test.skip("requires table name environment variable to be set", async () => {
  const tokenPassport = new TokenPassport({
    account: "myAccount",
    consumerKey: "myConsumerKey",
    nonce: "elNonce",
    timestamp: 1234,
    token: "leTokenKey",
    signature: {
      algorithm: "HMAC_SHA256",
      value: "base64hashValue",
    }
  });
  const getRequest = new GetRequest({ baseRef: {} });
  const soapRequest = SoapMapper.serializeSoapRequest(tokenPassport, getRequest);

  const expectedSoap =
`<?xml version="1.0" encoding="utf-8"?>`;

  expect(soapRequest).toEqual(expectedSoap);
});
