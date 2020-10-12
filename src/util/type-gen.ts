import fs, { WriteStream } from "fs";
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

export function isEnumTypeInfo(typeInfo: TypeInfo): typeInfo is EnumTypeInfo {
  return (typeInfo as EnumTypeInfo).type === "enumInfo";
}

export function typeInfoExtends(
  typeInfo: TypeInfo,
  localBaseType: string
): boolean {
  if (!isEnumTypeInfo(typeInfo)) {
    return typeInfo.baseTypeInfo === `.${localBaseType}`;
  }
  return false;
}

export function isLocalType(baseTypeInfo?: string): boolean {
  return baseTypeInfo !== undefined && baseTypeInfo.startsWith(".");
}

export function isSimpleSearchValue(typeInfo: EntityTypeInfo): boolean {
  return (
    typeInfo.baseTypeInfo === undefined &&
    typeInfo.propertyInfos?.length === 1 &&
    typeInfo.propertyInfos[0].name === "searchValue"
  );
}

export function mappedType(typeInfo?: string): string {
  if (typeInfo === undefined) return "string";
  if (isLocalType(typeInfo)) return typeInfo.substr(1);
  if (typeInfo in PRIMITIVE_TYPES) {
    return PRIMITIVE_TYPES[typeInfo as Primitive]; // FIXME: Is this type assertion avoidable?
  }
  const mappingsName = typeInfo.split(".")[0];
  return typeInfo.replace(
    mappingsName,
    new FileModule(mappingsName).importName
  );
}

export interface Writer {
  open(fileName: string): void;
  close(): void;
  write(message: string, ...optionalParams: string[]): void;
}

export class FileWriter implements Writer {
  private readonly targetDirectory: string;
  private writable: WriteStream | undefined;
  constructor(targetDirectory: string) {
    this.targetDirectory = targetDirectory;
    fs.mkdirSync(this.targetDirectory, { recursive: true });
  }

  open(fileName: string): void {
    if (this.writable !== undefined) {
      throw new Error(`FileWriter is already open for ${fileName}`);
    }
    this.writable = fs.createWriteStream(
      `${this.targetDirectory}/${fileName}.ts`
    );
  }

  close(): void {
    if (this.writable === undefined) {
      throw new Error(`Failed to close FileWriter. Call open() first.`);
    }
    this.writable.close();
    this.writable = undefined;
  }

  write(message?: string, ...optionalParams: string[]): void {
    if (this.writable === undefined) {
      throw new Error("FileWrite is not open. Call open() before writing");
    }
    this.writable.write(util.format(message, ...optionalParams));
  }
}

export interface MappingsLoader {
  load(mappingName: string): MappingsInfo;
  allMappingsFiles(): string[];
}

export class FileMappingsLoader implements MappingsLoader {
  private readonly mappingsDir: string;

  constructor(mappingsDir: string) {
    this.mappingsDir = mappingsDir;
  }

  load(mappingsName: string): MappingsInfo {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mappings: Mappings = require(this.mappingsDir + mappingsName + ".js")[
      mappingsName
    ];

    const sortedTypeInfos: TypeInfo[] = [];
    const referencedTypes: string[] = [];

    mappings.typeInfos.forEach((typeInfo) => {
      if (isEnumTypeInfo(typeInfo)) {
        sortedTypeInfos.push(typeInfo);
      } else {
        if (referencedTypes.includes(typeInfo.localName)) {
          const index = sortedTypeInfos.findIndex((sortedTypeInfo) => {
            return typeInfoExtends(sortedTypeInfo, typeInfo.localName);
          });
          sortedTypeInfos.splice(index, 0, typeInfo);
        } else {
          sortedTypeInfos.push(typeInfo);
        }
        if (typeInfo.baseTypeInfo && isLocalType(typeInfo.baseTypeInfo)) {
          referencedTypes.push(typeInfo.baseTypeInfo.substr(1));
        }
      }
    });

    return {
      ...mappings,
      sortedTypeInfos,
    };
  }

  allMappingsFiles(): string[] {
    return fs
      .readdirSync(this.mappingsDir, { withFileTypes: true })
      .map((item) => item.name.replace(/\.js$/, ""));
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

export default class TypeGenerator {
  private readonly processedModules: Record<string, FileModule>;
  private readonly mappingsLoader: MappingsLoader;
  private readonly writer: Writer;

  constructor(loader: MappingsLoader, writer: Writer) {
    this.processedModules = {};
    this.mappingsLoader = loader;
    this.writer = writer;
  }

  generateTypesFromMappings(): void {
    this.mappingsLoader
      .allMappingsFiles()
      .forEach((mappingName) => this.generateTypes(mappingName));
  }

  private generateTypes(mappingsName: string): void {
    if (mappingsName in this.processedModules) return;
    const module = new FileModule(mappingsName);
    this.processedModules[mappingsName] = module;
    const mappingsInfo: MappingsInfo = this.mappingsLoader.load(mappingsName);
    mappingsInfo.dependencies?.forEach((mappingsName) =>
      this.generateTypes(mappingsName)
    );
    this.writeFile(module, mappingsInfo);
  }

  private writeFile(module: FileModule, mappings: MappingsInfo) {
    console.log(`Writing ${module.fileName}...`);
    this.writer.open(module.fileName);

    mappings.dependencies
      ?.map((mappingsName) => new FileModule(mappingsName))
      .forEach((dependency) => {
        this.writer.write(
          'import * as %s from "./%s";\n',
          dependency.importName,
          dependency.fileName
        );
      });

    mappings.sortedTypeInfos.forEach((typeInfo) => {
      if (isEnumTypeInfo(typeInfo)) {
        this.writeUnion(typeInfo);
      } else if (typeInfo.propertyInfos && isSimpleSearchValue(typeInfo)) {
        this.writeTypeAlias(typeInfo, typeInfo.propertyInfos[0]);
      } else {
        this.writeClass(typeInfo);
      }
    });

    this.writer.close();
  }

  private writeUnion(typeInfo: EnumTypeInfo) {
    this.writer.write("\nexport type %s =", typeInfo.localName);
    typeInfo.values
      .slice(0, -1)
      .forEach((value) => this.writer.write('  "%s" |', value));
    typeInfo.values
      .slice(-1)
      .forEach((value) => this.writer.write('  "%s";\n', value));
  }

  private writeTypeAlias(typeInfo: EntityTypeInfo, propertyInfo: PropertyInfo) {
    const optionalModifier = propertyInfo?.required ? "" : "?";
    const collectionModifier = propertyInfo?.collection ? "[]" : "";
    const propertyType = mappedType(propertyInfo?.typeInfo);
    const simpleType = util.format("%s%s", propertyType, collectionModifier);
    this.writer.write(
      "\nexport type %s = %s | { %s%s: %s };\n",
      typeInfo.localName,
      simpleType,
      propertyInfo?.name,
      optionalModifier,
      simpleType
    );
  }

  private writeClass(typeInfo: EntityTypeInfo) {
    const classProps: string[] = [];
    const constructorAssignments: string[] = [];
    typeInfo.propertyInfos?.forEach((propertyInfo) => {
      const optionalModifier = propertyInfo.required ? "" : "?";
      const collectionModifier = propertyInfo.collection ? "[]" : "";
      const propertyType = mappedType(propertyInfo.typeInfo);
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
      typeInfo.baseTypeInfo && mappedType(typeInfo.baseTypeInfo);

    // Write props type only if there are props for the associated class.
    if (classProps.length > 0) {
      this.writer.write("\nexport type %sProps = {\n", typeInfo.localName);
      this.writer.write(classProps.join("\n"));
      if (superClass && !emptySuperClass(superClass)) {
        this.writer.write("\n} & %sProps;\n", superClass);
      } else {
        this.writer.write("\n}\n");
      }
    }

    // Add a super class when there is one.
    if (superClass) {
      this.writer.write(
        "\nexport class %s extends %s {",
        typeInfo.localName,
        superClass
      );
    } else {
      this.writer.write("\nexport class %s {", typeInfo.localName);
    }

    this.writer.write(classProps.join("\n"));

    // Write constructor assignments where there are any.
    if (constructorAssignments.length > 0) {
      this.writer.write(
        "  constructor(props: %sProps) {\n",
        typeInfo.localName
      );
      if (superClass) {
        if (emptySuperClass(superClass)) {
          this.writer.write("    super();\n");
        } else {
          this.writer.write("    super(props);\n");
        }
      }

      this.writer.write(constructorAssignments.join("\n"));
      this.writer.write("  }\n");
    }
    this.writer.write("}\n");
  }
}
