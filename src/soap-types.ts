/**
 * A base class that records the TYPE_NAME for a given subclass based on
 * the mappings name captured by propsWithMappingsName.
 *
 * jsonix uses TYPE_NAME to find the associated mappings, such that the JS
 * class can be serialized back into XML.
 */
export class SoapMappingBase {
  constructor(props: { MAPPINGS_NAME: string }) {
    Object.assign(this, {
      TYPE_NAME: `${props.MAPPINGS_NAME}.${this.constructor.name}`,
    });
  }
}

/**
 * Returns the provided props with the passed in mappings name.
 */
export function propsWithMappingsName<T>(
  props: T,
  mappingsName: string
): T & { MAPPINGS_NAME: string } {
  return { MAPPINGS_NAME: mappingsName, ...props };
}
