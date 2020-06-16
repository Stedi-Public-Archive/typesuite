import util from "util";
import { FileModule } from "./file-module";
import { EntityTypeInfo, EnumTypeInfo, Mappings, PropertyInfo, TypeInfo } from "./jsonix";
import { MessageStream } from "./message-stream";

const primitiveTypes: Record<string, string> = {
  Base64Binary: "SoapTypes.Base64Binary",
  Boolean: "boolean",
  DateTime: "SoapTypes.Dateish",
  Double: "number",
  Int: "number",
  Long: "number"
};

interface MappingsInfo extends Mappings {
  readonly sortedTypeInfos: TypeInfo[];
  readonly needsSoapTypesImport: boolean;
}

export class TypeEmitter {
  private readonly processedModules: Record<string, FileModule> = {};
  private readonly mappingsDir: string;

  constructor(mappingsDir: string) {
    this.mappingsDir = mappingsDir;
  }

  emitModule(mappingsName: string, messageStreamFactory: (module: FileModule) => MessageStream) {
    if (mappingsName in this.processedModules) return;

    const module = new FileModule(mappingsName);
    this.processedModules[mappingsName] = module;

    const mappingsInfo: MappingsInfo = this.loadMappings(mappingsName);
    mappingsInfo.dependencies?.forEach(mappingsName => this.emitModule(mappingsName, messageStreamFactory));
    this.emitFile(module, mappingsInfo, messageStreamFactory(module));
  }

  private emitFile(module: FileModule, mappings: MappingsInfo, writeStream: MessageStream) {
    if (mappings.needsSoapTypesImport) {
      writeStream.writeMsg("import * as SoapTypes from \"../soap-types\";");
    }

    mappings.dependencies
      ?.map(mappingsName => this.processedModules[mappingsName])
      .forEach((dependency) => {
        writeStream.writeMsg("import * as %s from \"./%s\";", dependency.importName, dependency.fileName);
      });
    if (mappings.dependencies?.length ?? 0 > 0) writeStream.writeMsg();

    if (mappings.needsSoapTypesImport) {
      writeStream.writeMsg("const mappingsName = \"%s\";", module.mappingsName);
    }

    mappings.sortedTypeInfos.forEach((typeInfo) => {
      if (isEnumTypeInfo(typeInfo)) {
        this.emitEnumType(typeInfo, writeStream);
      }
      else if (typeInfo.propertyInfos && isSimpleSearchValue(typeInfo)) {
        this.emitEntityTypeAlias(typeInfo, typeInfo.propertyInfos[0], writeStream);
      }
      else {
        this.emitEntityType(typeInfo, writeStream);
      }
    });
  }

  private emitEnumType(typeInfo: EnumTypeInfo, writeStream: MessageStream) {
    writeStream.writeMsg("\nexport type %s =", typeInfo.localName);
    typeInfo.values.slice(0, -1).forEach(value => writeStream.writeMsg("  \"%s\" |", value));
    typeInfo.values.slice(-1).forEach(value => writeStream.writeMsg("  \"%s\";", value));
  }

  private emitEntityTypeAlias(typeInfo: EntityTypeInfo, propertyInfo: PropertyInfo, writeStream: MessageStream) {
    const optionalModifier = propertyInfo?.required ? "" : "?";
    const collectionModifier = propertyInfo?.collection ? "[]" : "";
    const propertyType = this.mappedType(propertyInfo?.typeInfo) || "string";
    const simpleType = util.format("%s%s", propertyType, collectionModifier);
    writeStream.writeMsg("\nexport type %s = %s | { %s%s: %s };",
      typeInfo.localName,
      simpleType,
      propertyInfo?.name,
      optionalModifier,
      simpleType);
  }

  private emitEntityType(typeInfo: EntityTypeInfo, writeStream: MessageStream) {
    const baseType = this.mappedType(typeInfo.baseTypeInfo) ?? "SoapTypes.Base";
    writeStream.writeMsg("\nexport class %s extends %s {", typeInfo.localName, baseType);

    const constructorProps: string[] = [];
    typeInfo.propertyInfos?.forEach((propertyInfo) => {
      const optionalModifier = propertyInfo.required ? "" : "?";
      const collectionModifier = propertyInfo.collection ? "[]" : "";
      const propertyType = this.mappedType(propertyInfo.typeInfo) || "string";
      writeStream.writeMsg("  %s%s: %s%s;",
        propertyInfo.name,
        optionalModifier,
        propertyType,
        collectionModifier);
      constructorProps.push(util.format("    this.%s = props.%s;", propertyInfo.name, propertyInfo.name));
    });

    writeStream.writeMsg("  constructor(props: %s) {", typeInfo.localName);
    writeStream.writeMsg("    super(SoapTypes.captureMappingsName(props, mappingsName));");

    if (constructorProps.length > 0) writeStream.writeMsg(constructorProps.join("\n"));
    writeStream.writeMsg("  }\n}");
  }

  private loadMappings(mappingsName: string): MappingsInfo {
    const mappings: Mappings = require(this.mappingsDir + mappingsName + ".js")[mappingsName];

    const sortedTypeInfos: TypeInfo[] = [];
    let needsSoapTypesImport = false;

    const referencedTypes: string[] = [];
    mappings.typeInfos.forEach((typeInfo) => {
      if (isEnumTypeInfo(typeInfo)) {
        sortedTypeInfos.push(typeInfo);
      }
      else {
        needsSoapTypesImport = true;
        if (referencedTypes.includes(typeInfo.localName)) {
          const index = sortedTypeInfos.findIndex((sortedTypeInfo) => {
            return typeInfoExtends(sortedTypeInfo, typeInfo.localName);
          });
          sortedTypeInfos.splice(index, 0, typeInfo);
        }
        else {
          sortedTypeInfos.push(typeInfo);
        }

        if (typeInfo.baseTypeInfo && isLocalType(typeInfo.baseTypeInfo)) {
          referencedTypes.push(typeInfo.baseTypeInfo.substr(1));
        }
      }
    });

    return {
      ...mappings,
      sortedTypeInfos: sortedTypeInfos,
      needsSoapTypesImport: needsSoapTypesImport,
    };
  }

  private mappedType(typeInfo?: string): string | undefined {
    if (typeInfo === undefined) return undefined;
    if (isLocalType(typeInfo)) return typeInfo.substr(1);
    if (typeInfo in primitiveTypes) return primitiveTypes[typeInfo];
    const mappingsName = typeInfo.split(".")[0];
    if (mappingsName in this.processedModules) {
      return typeInfo.replace(mappingsName, this.processedModules[mappingsName].importName);
    }
    return typeInfo;
  }
}

function typeInfoExtends(typeInfo: TypeInfo, localBaseType: string): boolean {
  if (!isEnumTypeInfo(typeInfo)) {
    return typeInfo.baseTypeInfo === `.${localBaseType}`;
  }
  return false;
}

function isLocalType(baseTypeInfo?: string): boolean {
  return (baseTypeInfo !== undefined) && baseTypeInfo.startsWith(".");
}

function isEnumTypeInfo(typeInfo: TypeInfo): typeInfo is EnumTypeInfo {
  return (typeInfo as EnumTypeInfo).type === "enumInfo";
}

function isSimpleSearchValue(typeInfo: EntityTypeInfo) {
  return typeInfo.baseTypeInfo === undefined
    && typeInfo.propertyInfos?.length === 1
    && typeInfo.propertyInfos[0].name === "searchValue";
}
