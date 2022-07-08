import { createHmac, randomBytes } from "crypto";
import axios from "axios";
import { TokenPassport } from "./netsuite_webservices/2019_2/platform_core";
import NetSuiteMappings from "./netsuite_webservices/2019_2/mappings";
import XmlSoapMappings from "./xmlsoap/mappings";
import { Body, Envelope, Fault, Header } from "./xmlsoap/envelope";
import { com_netsuite_webservices_platform_messages_2019_2 as platform } from "./netsuite_webservices/2019_2/__mappings/com_netsuite_webservices_platform_messages_2019_2";
import { Configuration } from "./types";
import {
  Preferences,
  PreferencesProps,
} from "./netsuite_webservices/2019_2/platform_messages";
import { Jsonix } from "jsonix";

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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
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
  passport: TokenPassport,
  body: soapObject,
  preferences?: PreferencesProps
): string {
  const passportElement = { name: elementKeyFor(passport), value: passport };
  const headerElements: any[] = [passportElement];
  if (preferences) {
    const prefs = new Preferences(preferences);
    headerElements.push({
      name: elementKeyFor(prefs),
      value: prefs,
    });
  }
  const bodyElement = { name: elementKeyFor(body), value: body };
  const envelope = new Envelope({
    header: new Header({ any: headerElements }),
    body: new Body({ any: [bodyElement] }),
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

/**
 * Serializes the provided request into XML and sends a SOAP request to the configured
 * endpoint. For successful responses, returns the data extracted the envelope and cast
 * into the type specified by the generic type parameter R.
 *
 * If the SOAP request results in a failed response, returns the SOAP Fault within
 * the envelope as a rejected promise.
 *
 * @param config
 * @param request
 * @param soapAction
 */
export async function sendSoapRequest<T, R>(
  config: Configuration,
  request: T,
  soapAction: string
): Promise<R> {
  const authToken = authenticateRequestWithTokenPassport(config);
  const soapXML = serializeSoapRequest(authToken, request, config.preferences);
  try {
    const response = await axios.post(endpoint(config), soapXML, {
      headers: {
        SOAPAction: soapAction,
        contentType: "text/xml; charset=UTF-8",
      },
    });
    const soapEnvelope = deserializeSoapResponse(response.data);
    return soapEnvelope.value.body.any[0].value as R;
  } catch (error) {
    if (error.response) {
      // Non 20x response
      const soapEnvelope = deserializeSoapResponse(error.response.data);
      const fault = soapEnvelope.value.body.any[0].value as Fault;
      return Promise.reject(fault);
    } else {
      // Network error.
      throw error;
    }
  }
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
