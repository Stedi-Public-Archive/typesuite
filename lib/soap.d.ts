import { TokenPassport } from "./netsuite_webservices/2019_2/platform_core";
import { Configuration } from "./types";
import { PreferencesProps } from "./netsuite_webservices/2019_2/platform_messages";
interface soapObject {
}
export declare function serializeSoapRequest(passport: TokenPassport, body: soapObject, preferences?: PreferencesProps): string;
export declare function deserializeSoapResponse(xmlContent: string): XmlObject;
export interface XmlObject {
    value: {
        body: {
            any: [{
                value: unknown;
            }];
        };
    };
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
export declare function sendSoapRequest<T, R>(config: Configuration, request: T, soapAction: string): Promise<R>;
export {};
