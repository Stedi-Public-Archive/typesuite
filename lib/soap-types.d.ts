/**
 * A base class that records the TYPE_NAME for a given subclass based on
 * the mappings name captured by propsWithMappingsName.
 *
 * jsonix uses TYPE_NAME to find the associated mappings, such that the JS
 * class can be serialized back into XML.
 */
export declare class SoapMappingBase {
    constructor(props: {
        MAPPINGS_NAME: string;
    });
}
/**
 * Returns the provided props with the passed in mappings name.
 */
export declare function propsWithMappingsName<T>(props: T, mappingsName: string): T & {
    MAPPINGS_NAME: string;
};
