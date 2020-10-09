import fs from "fs";
import util from "util";

interface Mappings {
  readonly name: string;
  readonly defaultElementNamespaceURI?: string;
  readonly dependencies?: string[];
  readonly typeInfos: TypeInfo[];
}

interface MappingsInfo extends Mappings {
  readonly sortedTypeInfos: TypeInfo[];
  readonly needsSoapTypesImport: boolean;
}

interface EnumTypeInfo {
  readonly type: "enumInfo";
  readonly localName: string;
  readonly values: string[];
}

interface EntityTypeInfo {
  readonly localName: string;
  readonly baseTypeInfo?: string;
  readonly propertyInfos?: PropertyInfo[];
}

type TypeInfo = EnumTypeInfo | EntityTypeInfo;

interface PropertyInfo {
  readonly name: string;
  readonly required: boolean;
  readonly typeInfo?: string;
  readonly collection?: boolean;
}

type WriteFn = (message?: string, ...optionalParams: string[]) => void;

export default class TypeGenerator {
  private readonly processedModules: Record<string, FileModule> = {};
  private readonly mappingsDir: string;
  private readonly targetDirectory: string;

  constructor(mappingsDir: string, targetDirectory: string) {
    this.mappingsDir = mappingsDir;
    this.targetDirectory = targetDirectory;
  }

  generateTypes(mappingsName: string): void {
    if (mappingsName in this.processedModules) return;
    const module = new FileModule(mappingsName);
    this.processedModules[mappingsName] = module;
    const mappingsInfo: MappingsInfo = this.loadMappings(mappingsName);
    mappingsInfo.dependencies?.forEach((mappingsName) =>
      this.generateTypes(mappingsName)
    );
    this.writeFile(module, mappingsInfo);
  }

  private writeFile(module: FileModule, mappings: MappingsInfo) {
    console.log(`Writing ${module.fileName}...`);

    fs.mkdirSync(this.targetDirectory, { recursive: true });
    const writable = fs.createWriteStream(
      `${this.targetDirectory}${module.fileName}.ts`
    );
    const write = function (message = "", ...optionalParams: string[]) {
      writable.write(util.format(message, ...optionalParams) + "\n");
    };

    if (mappings.needsSoapTypesImport) {
      write('import * as SoapTypes from "../../util/soap-types";');
    }

    mappings.dependencies
      ?.map((mappingsName) => this.processedModules[mappingsName])
      .forEach((dependency) => {
        write(
          'import * as %s from "./%s";',
          dependency.importName,
          dependency.fileName
        );
      });
    if (mappings.dependencies?.length ?? 0 > 0) write();

    if (mappings.needsSoapTypesImport) {
      write('const mappingsName = "%s";', module.mappingsName);
    }

    mappings.sortedTypeInfos.forEach((typeInfo) => {
      if (this.isEnumTypeInfo(typeInfo)) {
        this.writeEnumType(typeInfo, write);
      } else if (typeInfo.propertyInfos && this.isSimpleSearchValue(typeInfo)) {
        this.writeEntityTypeAlias(typeInfo, typeInfo.propertyInfos[0], write);
      } else {
        this.writeEntityType(typeInfo, write);
      }
    });
  }

  private isSimpleSearchValue(typeInfo: EntityTypeInfo) {
    return (
      typeInfo.baseTypeInfo === undefined &&
      typeInfo.propertyInfos?.length === 1 &&
      typeInfo.propertyInfos[0].name === "searchValue"
    );
  }

  private writeEnumType(typeInfo: EnumTypeInfo, write: WriteFn) {
    write("\nexport type %s =", typeInfo.localName);
    typeInfo.values.slice(0, -1).forEach((value) => write('  "%s" |', value));
    typeInfo.values.slice(-1).forEach((value) => write('  "%s";', value));
  }

  private writeEntityTypeAlias(
    typeInfo: EntityTypeInfo,
    propertyInfo: PropertyInfo,
    write: WriteFn
  ) {
    const optionalModifier = propertyInfo?.required ? "" : "?";
    const collectionModifier = propertyInfo?.collection ? "[]" : "";
    const propertyType = this.mappedType(propertyInfo?.typeInfo) || "string";
    const simpleType = util.format("%s%s", propertyType, collectionModifier);
    write(
      "\nexport type %s = %s | { %s%s: %s };",
      typeInfo.localName,
      simpleType,
      propertyInfo?.name,
      optionalModifier,
      simpleType
    );
  }

  private writeEntityType(typeInfo: EntityTypeInfo, write: WriteFn) {
    const baseType = this.mappedType(typeInfo.baseTypeInfo) ?? "SoapTypes.Base";
    write("\nexport class %s extends %s {", typeInfo.localName, baseType);

    const constructorProps: string[] = [];
    typeInfo.propertyInfos?.forEach((propertyInfo) => {
      const optionalModifier = propertyInfo.required ? "" : "?";
      const collectionModifier = propertyInfo.collection ? "[]" : "";
      const propertyType = this.mappedType(propertyInfo.typeInfo) || "string";
      write(
        "  %s%s: %s%s;",
        propertyInfo.name,
        optionalModifier,
        propertyType,
        collectionModifier
      );
      constructorProps.push(
        util.format(
          "    this.%s = props.%s;",
          propertyInfo.name,
          propertyInfo.name
        )
      );
    });

    write("  constructor(props: %s) {", typeInfo.localName);
    write("    super(SoapTypes.captureMappingsName(props, mappingsName));");

    if (constructorProps.length > 0) write(constructorProps.join("\n"));
    write("  }\n}");
  }

  private loadMappings(mappingsName: string): MappingsInfo {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mappings: Mappings = require(this.mappingsDir + mappingsName + ".js")[
      mappingsName
    ];

    const sortedTypeInfos: TypeInfo[] = [];
    let needsSoapTypesImport = false;
    const referencedTypes: string[] = [];

    mappings.typeInfos.forEach((typeInfo) => {
      if (this.isEnumTypeInfo(typeInfo)) {
        sortedTypeInfos.push(typeInfo);
      } else {
        needsSoapTypesImport = true;
        if (referencedTypes.includes(typeInfo.localName)) {
          const index = sortedTypeInfos.findIndex((sortedTypeInfo) => {
            return this.typeInfoExtends(sortedTypeInfo, typeInfo.localName);
          });
          sortedTypeInfos.splice(index, 0, typeInfo);
        } else {
          sortedTypeInfos.push(typeInfo);
        }
        if (typeInfo.baseTypeInfo && this.isLocalType(typeInfo.baseTypeInfo)) {
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
    const primitiveTypes: Record<string, string> = {
      Base64Binary: "SoapTypes.Base64Binary",
      Boolean: "boolean",
      DateTime: "SoapTypes.Dateish",
      Double: "number",
      Int: "number",
      Long: "number",
    };
    if (typeInfo === undefined) return undefined;
    if (this.isLocalType(typeInfo)) return typeInfo.substr(1);
    if (typeInfo in primitiveTypes) {
      return primitiveTypes[typeInfo];
    }
    const mappingsName = typeInfo.split(".")[0];
    if (mappingsName in this.processedModules) {
      return typeInfo.replace(
        mappingsName,
        this.processedModules[mappingsName].importName
      );
    }
    return typeInfo;
  }

  private typeInfoExtends(typeInfo: TypeInfo, localBaseType: string): boolean {
    if (!this.isEnumTypeInfo(typeInfo)) {
      return typeInfo.baseTypeInfo === `.${localBaseType}`;
    }
    return false;
  }

  private isLocalType(baseTypeInfo?: string): boolean {
    return baseTypeInfo !== undefined && baseTypeInfo.startsWith(".");
  }

  private isEnumTypeInfo(typeInfo: TypeInfo): typeInfo is EnumTypeInfo {
    return (typeInfo as EnumTypeInfo).type === "enumInfo";
  }
}

class FileModule {
  readonly mappingsName: string; // e.g. com_netsuite_webservices_platform_faults_2019_2
  readonly fileName: string; // e.g. platform_faults
  readonly importName: string; // e.g. PlatformFaults
  constructor(mappingsName: string) {
    this.mappingsName = mappingsName;
    this.fileName = this.fileNameForModule(mappingsName);
    this.importName = this.toPascalCase(this.fileName);
  }

  private fileNameForModule(moduleName: string): string {
    moduleName = moduleName.replace("com_netsuite_webservices_", "");
    moduleName = moduleName.replace("_2019_2", "");
    return moduleName;
  }

  private toPascalCase(s: string): string {
    return `_${s}`.replace(/_(\w)/g, (_, group1: string) =>
      group1.toUpperCase()
    );
  }
}
