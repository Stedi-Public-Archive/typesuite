export interface Mappings {
  readonly name: string;
  readonly dependencies?: string[];
  readonly typeInfos: TypeInfo[];
}

export interface MappingsInfo extends Mappings {
  readonly sortedTypeInfos: TypeInfo[];
}

export interface EnumTypeInfo {
  readonly type: "enumInfo";
  readonly localName: string;
  readonly values: string[];
}

export interface EntityTypeInfo {
  readonly localName: string;
  readonly baseTypeInfo?: string;
  readonly propertyInfos?: PropertyInfo[];
}

export type TypeInfo = EnumTypeInfo | EntityTypeInfo;

export interface PropertyInfo {
  readonly name: string;
  readonly required: boolean;
  readonly typeInfo?: Primitive;
  readonly collection?: boolean;
}

/**
 * NETSUITE_TYPE includes all the types that appear in the NetSuite webservices schema.
 */
export type NetSuitePrimitive =
  | "Base64Binary"
  | "Boolean"
  | "DateTime"
  | "Double"
  | "Int"
  | "Long";

export type XmlSoapPrimitive = "QName";

export type Primitive = NetSuitePrimitive | XmlSoapPrimitive;

/**
 * JS_TYPE includes all the types that NetSuite types are transformed into.
 */
export type JavaScriptType = "string" | "boolean" | "number";

export interface MappingsLoader {
  load(mappingName: string): MappingsInfo;
  allMappingsFiles(): string[];
}

export interface Writer {
  open(fileName: string): void;
  close(): void;
  write(message: string, ...optionalParams: string[]): void;
}
