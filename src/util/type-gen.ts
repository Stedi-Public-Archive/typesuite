import fs from "fs";
import util from "util";

interface Mappings {
  readonly name: string;
  readonly dependencies?: string[];
  readonly typeInfos: TypeInfo[];
}

interface MappingsInfo extends Mappings {
  readonly sortedTypeInfos: TypeInfo[];
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
  readonly typeInfo?: Primitive;
  readonly collection?: boolean;
}

type WriteFn = (message?: string, ...optionalParams: string[]) => void;

/**
 * NETSUITE_TYPE includes all the types that appear in the NetSuite webservices schema.
 */
type NetSuitePrimitive =
  | "Base64Binary"
  | "Boolean"
  | "DateTime"
  | "Double"
  | "Int"
  | "Long";

type XmlSoapPrimitive = "QName";

type Primitive = NetSuitePrimitive | XmlSoapPrimitive;

/**
 * JS_TYPE includes all the types that NetSuite types are transformed into.
 */
type JS_TYPE = "string" | "boolean" | "number";

/**
 * PRIMITIVE_TYPES is a mapping between NetSuite SOAP types and JS types.
 */
const PRIMITIVE_TYPES: Record<Primitive, JS_TYPE> = {
  Base64Binary: "string",
  Boolean: "boolean",
  DateTime: "string",
  Double: "number",
  Int: "number",
  Long: "number",
  QName: "string",
};

/**
 * A number of super classes are "markers" only and do not contain any data.
 * This function identifies those classes.
 *
 * @param className
 */
function emptySuperClass(className: string): boolean {
  return [
    "AsyncResult",
    "PlatformCore.SearchRecord",
    "PlatformCore.SearchRecordBasic",
    "PlatformCore.SearchRow",
    "PlatformCore.SearchRowBasic",
  ].includes(className);
}

export default class TypeGenerator {
  private readonly processedModules: Record<string, FileModule>;
  private readonly mappingsDir: string;
  private readonly targetDirectory: string;

  constructor(mappingsDir: string, targetDirectory: string) {
    this.processedModules = {};
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

  private loadMappings(mappingsName: string): MappingsInfo {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mappings: Mappings = require(this.mappingsDir + mappingsName + ".js")[
      mappingsName
    ];

    const sortedTypeInfos: TypeInfo[] = [];
    const referencedTypes: string[] = [];

    mappings.typeInfos.forEach((typeInfo) => {
      if (this.isEnumTypeInfo(typeInfo)) {
        sortedTypeInfos.push(typeInfo);
      } else {
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
      sortedTypeInfos,
    };
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

    mappings.sortedTypeInfos.forEach((typeInfo) => {
      if (this.isEnumTypeInfo(typeInfo)) {
        this.writeUnion(typeInfo, write);
      } else if (typeInfo.propertyInfos && this.isSimpleSearchValue(typeInfo)) {
        this.writeTypeAlias(typeInfo, typeInfo.propertyInfos[0], write);
      } else {
        this.writeClass(typeInfo, write);
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

  private writeUnion(typeInfo: EnumTypeInfo, write: WriteFn) {
    write("\nexport type %s =", typeInfo.localName);
    typeInfo.values.slice(0, -1).forEach((value) => write('  "%s" |', value));
    typeInfo.values.slice(-1).forEach((value) => write('  "%s";', value));
  }

  private writeTypeAlias(
    typeInfo: EntityTypeInfo,
    propertyInfo: PropertyInfo,
    write: WriteFn
  ) {
    const optionalModifier = propertyInfo?.required ? "" : "?";
    const collectionModifier = propertyInfo?.collection ? "[]" : "";
    const propertyType = this.mappedType(propertyInfo?.typeInfo);
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

  private writeClass(typeInfo: EntityTypeInfo, write: WriteFn) {
    const classProps: string[] = [];
    const constructorAssignments: string[] = [];
    typeInfo.propertyInfos?.forEach((propertyInfo) => {
      const optionalModifier = propertyInfo.required ? "" : "?";
      const collectionModifier = propertyInfo.collection ? "[]" : "";
      const propertyType = this.mappedType(propertyInfo.typeInfo);
      classProps.push(
        util.format(
          "  %s%s: %s%s;",
          propertyInfo.name,
          optionalModifier,
          propertyType,
          collectionModifier
        )
      );
      constructorAssignments.push(
        util.format(
          "    this.%s = props.%s;",
          propertyInfo.name,
          propertyInfo.name
        )
      );
    });

    const superClass =
      typeInfo.baseTypeInfo && this.mappedType(typeInfo.baseTypeInfo);

    // Write props type only if there are props for the associated class.
    if (classProps.length > 0) {
      write("\nexport type %sProps = {", typeInfo.localName);
      write(classProps.join("\n"));
      if (superClass && !emptySuperClass(superClass)) {
        write("\n} & %sProps", superClass);
      } else {
        write("\n}");
      }
    }

    // Add a super class when there is one.
    if (superClass) {
      write("\nexport class %s extends %s {", typeInfo.localName, superClass);
    } else {
      write("\nexport class %s {", typeInfo.localName);
    }

    write(classProps.join("\n"));

    // Write constructor assignments where there are any.
    if (constructorAssignments.length > 0) {
      write("  constructor(props: %sProps) {", typeInfo.localName);
      if (superClass) {
        if (emptySuperClass(superClass)) {
          write("    super();");
        } else {
          write("    super(props);");
        }
      }

      write(constructorAssignments.join("\n"));
      write("  }\n");
    }
    write("}\n");
  }

  private mappedType(typeInfo?: string): string {
    if (typeInfo === undefined) return "string";
    if (this.isLocalType(typeInfo)) return typeInfo.substr(1);
    if (typeInfo in PRIMITIVE_TYPES) {
      return PRIMITIVE_TYPES[typeInfo as Primitive]; // FIXME: Is this type assertion avoidable?
    }
    const mappingsName = typeInfo.split(".")[0];
    if (mappingsName in this.processedModules) {
      return typeInfo.replace(
        mappingsName,
        this.processedModules[mappingsName].importName
      );
    }
    throw new Error(`Failed to find type info = ${typeInfo}`);
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

/**
 * A data class that holds a mappings name, the file name, and the import name.
 */
export class FileModule {
  // e.g. com_netsuite_webservices_platform_faults_2019_2
  readonly mappingsName: string;
  // e.g. platform_faults
  readonly fileName: string;
  // e.g. PlatformFaults
  readonly importName: string;
  constructor(mappingsName: string) {
    this.mappingsName = mappingsName;
    this.fileName = this.fileNameForModule(mappingsName);
    this.importName = this.toPascalCase(this.fileName);
  }

  private fileNameForModule(moduleName: string): string {
    return moduleName
      .replace("com_netsuite_webservices_", "")
      .replace("_2019_2", "")
      .replace("org_xmlsoap_schemas_soap_", "");
  }

  private toPascalCase(s: string): string {
    return `_${s}`.replace(/_(\w)/g, (_, group1: string) =>
      group1.toUpperCase()
    );
  }
}
