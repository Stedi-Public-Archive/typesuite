export class SoapMappingBase {
  constructor(props: { MAPPINGS_NAME: string }) {
    Object.assign(this, {
      TYPE_NAME: `${props.MAPPINGS_NAME}.${this.constructor.name}`,
    });
  }
}

export function propsWithMappingsName<T>(
  props: T,
  mappingsName: string
): T & { MAPPINGS_NAME: string } {
  return { MAPPINGS_NAME: mappingsName, ...props };
}
