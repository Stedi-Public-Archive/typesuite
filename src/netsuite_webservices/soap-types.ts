export class Base {
  constructor(props: any) {
    Object.assign(this, { TYPE_NAME: `${props["MAPPINGS_NAME"]}.${this.constructor.name}` });
  }
}

export function captureMappingsName<T>(props: T, mappingsName: string): T {
  return { MAPPINGS_NAME: mappingsName, ...props };
}

export type Base64Binary = string;
export type Dateish = Date | string;
