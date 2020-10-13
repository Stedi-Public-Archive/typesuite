import { TypeInfo, EnumTypeInfo } from "./types";

export function isEnumTypeInfo(typeInfo: TypeInfo): typeInfo is EnumTypeInfo {
  return (typeInfo as EnumTypeInfo).type === "enumInfo";
}

export function isLocalType(baseTypeInfo?: string): boolean {
  return baseTypeInfo !== undefined && baseTypeInfo.startsWith(".");
}

export function fileNameForMappings(mappingsName: string): string {
  return mappingsName
    .replace("com_netsuite_webservices_", "")
    .replace("_2019_2", "")
    .replace("org_xmlsoap_schemas_soap_", "");
}

export function importNameForMappings(mappingsName: string): string {
  const fileName = fileNameForMappings(mappingsName);
  // Pascal Case
  return `_${fileName}`.replace(/_(\w)/g, (_, group1: string) =>
    group1.toUpperCase()
  );
}
