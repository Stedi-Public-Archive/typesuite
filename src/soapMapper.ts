// @ts-ignore
import { Jsonix } from "jsonix";
import { AllMappings } from "./netsuite_webservices/2019_2/__mappings/netsuite";
import { Body, Envelope, Header } from "./xmlsoap/xmlsoap_envelope";

interface soapObject {
}

interface ElementInfo {
  typeInfo: string;
  elementName: string;
}

export abstract class SoapMapper {
  static serializeSoapRequest(header: soapObject, body: soapObject): string {
    const headerElementKey = SoapMapper.elementKeyFor(header);
    const bodyElementKey = SoapMapper.elementKeyFor(body);
    const envelope = new Envelope({
      header: new Header({ any: [{ name: headerElementKey, value: header }] }),
      body: new Body({ any: [{ name: bodyElementKey, value: body }] }),
    });

    const mappings = [
      require("./xmlsoap/org_xmlsoap_schemas_soap_envelope").org_xmlsoap_schemas_soap_envelope,
    ].concat(AllMappings);
    const options = {
      namespacePrefixes: {
        "http://www.w3.org/2001/XMLSchema-instance": "xsi",
        "http://schemas.xmlsoap.org/soap/envelope/": "soap",
        'urn:common_2019_2.platform.webservices.netsuite.com': 'platform_common',
        'urn:core_2019_2.platform.webservices.netsuite.com': 'platform_core',
        'urn:messages_2019_2.platform.webservices.netsuite.com': 'platform_messages',
      },
    };

    const data = { "soap:Envelope": envelope };
    try {
      return '<?xml version="1.0" encoding="utf-8"?>' + new Jsonix.Context(mappings, options)
        .createMarshaller()
        .marshalString(data);
    }
    catch (err) {
      console.log('Caught exception: ' + err);
      throw err;
    }
  }

  static deserializeSoapResponse(xmlContent: string) {
    const mappings = [
      require("./xmlsoap/org_xmlsoap_schemas_soap_envelope").org_xmlsoap_schemas_soap_envelope,
    ].concat(AllMappings);

    try {
      return new Jsonix.Context(mappings)
        .createUnmarshaller()
        .unmarshalString(xmlContent);
    }
    catch (err) {
      console.log('Caught exception: ' + err);
      throw err;
    }
  }

  private static elementKeyFor(object: soapObject) {
    const elementName =
      require("./netsuite_webservices/2019_2/__mappings/com_netsuite_webservices_platform_messages_2019_2")
        .com_netsuite_webservices_platform_messages_2019_2
        .elementInfos
        .find((elementInfo: ElementInfo) => {
          const typeInfo = elementInfo.typeInfo.split('.').slice(-1)[0];
          return typeInfo === object.constructor.name;

        })
        ?.elementName;
    return `platform_messages:${elementName ?? "<<" + object.constructor.name + ">>"}`;
  }
}



