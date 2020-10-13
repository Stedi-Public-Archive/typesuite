import { createHmac, randomBytes } from "crypto";
import axios from "axios";
import { Jsonix } from "jsonix";
import { TokenPassport } from "./netsuite_webservices/2019_2/platform_core";
import NetSuiteMappings from "./netsuite_webservices/2019_2/mappings";
import XmlSoapMappings from "./xmlsoap/mappings";
import { Body, Envelope, Header } from "./xmlsoap/envelope";
import { com_netsuite_webservices_platform_messages_2019_2 as platform } from "./netsuite_webservices/2019_2/__mappings/com_netsuite_webservices_platform_messages_2019_2";
import { Configuration } from "./types";

const ALL_MAPPINGS = [...XmlSoapMappings, ...NetSuiteMappings];

const JSONIX_CONTEXT_OPTIONS = {
  namespacePrefixes: {
    "http://www.w3.org/2001/XMLSchema-instance": "xsi",
    "http://schemas.xmlsoap.org/soap/envelope/": "soap",
    "urn:common_2019_2.platform.webservices.netsuite.com": "platform_common",
    "urn:core_2019_2.platform.webservices.netsuite.com": "platform_core",
    "urn:messages_2019_2.platform.webservices.netsuite.com":
      "platform_messages",
  },
};

interface soapObject {}

interface ElementInfo {
  typeInfo: string;
  elementName: string;
}

function elementKeyFor(object: { constructor: { name: string } }) {
  const elementName = platform.elementInfos.find((elementInfo: ElementInfo) => {
    const typeInfo = elementInfo.typeInfo.split(".").slice(-1)[0];
    return typeInfo === object.constructor.name;
  })?.elementName;
  return `platform_messages:${
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    elementName ?? "<<" + object.constructor.name + ">>"
  }`;
}

export function serializeSoapRequest(
  header: TokenPassport,
  body: soapObject
): string {
  const headerElementKey = elementKeyFor(header);
  const bodyElementKey = elementKeyFor(body);
  const envelope = new Envelope({
    header: new Header({ any: [{ name: headerElementKey, value: header }] }),
    body: new Body({ any: [{ name: bodyElementKey, value: body }] }),
  });

  const data = { "soap:Envelope": envelope };
  const context = new Jsonix.Context(ALL_MAPPINGS, JSONIX_CONTEXT_OPTIONS);
  const xmlString = context.createMarshaller().marshalString(data);

  return '<?xml version="1.0" encoding="utf-8"?>' + xmlString;
}

export function deserializeSoapResponse(xmlContent: string): XmlObject {
  const context = new Jsonix.Context(ALL_MAPPINGS);
  return context.createUnmarshaller<XmlObject>().unmarshalString(xmlContent);
}

export interface XmlObject {
  value: {
    body: {
      any: [{ value: unknown }];
    };
  };
}

function endpoint(config: Configuration): string {
  const account = config.account.replace("_", "-");
  return `https://${account}.suitetalk.api.netsuite.com/services/NetSuitePort_${config.apiVersion}`;
}

export async function sendSoapRequest<T, R>(
  config: Configuration,
  request: T,
  soapAction: string
): Promise<R> {
  const authToken = authenticateRequestWithTokenPassport(config);
  const soapXML = serializeSoapRequest(authToken, request);
  const response = await axios.post(endpoint(config), {
    headers: { SOAPAction: soapAction, contentType: "text/xml; charset=UTF-8" },
    body: soapXML,
  });
  const soapObj = deserializeSoapResponse(response.data);
  return soapObj.value.body.any[0].value as R;
}

function authenticateRequestWithTokenPassport(
  config: Configuration
): TokenPassport {
  const nonce = randomBytes(18).toString("hex");
  const timeStamp = Math.round(new Date().getTime() / 1000);
  const baseString = [
    config.account,
    config.token.consumerKey,
    config.token.tokenKey,
    nonce,
    timeStamp,
  ].join("&");
  const base64hash = createHmac(
    "sha256",
    `${config.token.consumerSecret}&${config.token.tokenSecret}`
  )
    .update(baseString)
    .digest("base64");

  return new TokenPassport({
    account: config.account,
    consumerKey: config.token.consumerKey,
    nonce: nonce,
    timestamp: timeStamp,
    token: config.token.tokenKey,
    signature: {
      algorithm: "HMAC_SHA256",
      value: base64hash,
    },
  });
}
