import { TypeInfo, EnumTypeInfo } from "./types";
export declare function isEnumTypeInfo(typeInfo: TypeInfo): typeInfo is EnumTypeInfo;
export declare function isLocalType(baseTypeInfo?: string): boolean;
export declare function fileNameForMappings(mappingsName: string): string;
export declare function importNameForMappings(mappingsName: string): string;
