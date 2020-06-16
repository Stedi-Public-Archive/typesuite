export interface Mappings {
  readonly name: string;
  readonly defaultElementNamespaceURI?: string;
  readonly dependencies?: string[];
  readonly typeInfos: TypeInfo[];
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

export type TypeInfo = EnumTypeInfo | EntityTypeInfo

export interface PropertyInfo {
  readonly name: string;
  readonly required: boolean;
  readonly typeInfo?: string;
  readonly collection?: boolean;
}
