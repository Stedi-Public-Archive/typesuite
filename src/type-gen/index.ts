import fs, { WriteStream } from "fs";
import util from "util";
import {
  Writer,
  EntityTypeInfo,
  TypeInfo,
  MappingsLoader,
  Mappings,
  MappingsInfo,
} from "./types";
import {
  isEnumTypeInfo,
  isLocalType,
  fileNameForMappings,
  importNameForMappings,
} from "./parsing";
import {
  UnionTypeGenerator,
  TypeAliasGenerator,
  ClassGenerator,
} from "./generators";

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

function typeInfoExtends(typeInfo: TypeInfo, localBaseType: string): boolean {
  if (!isEnumTypeInfo(typeInfo)) {
    return typeInfo.baseTypeInfo === `.${localBaseType}`;
  }
  return false;
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
    let needsSoapTypesImport = false;

    mappings.typeInfos.forEach((typeInfo) => {
      if (isEnumTypeInfo(typeInfo)) {
        sortedTypeInfos.push(typeInfo);
      } else {
        needsSoapTypesImport = true;
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
      needsSoapTypesImport: needsSoapTypesImport,
    };
  }

  allMappingsFiles(): string[] {
    return fs
      .readdirSync(this.mappingsDir, { withFileTypes: true })
      .map((item) => item.name.replace(/\.js$/, ""));
  }
}

function isSimpleSearchValue(typeInfo: EntityTypeInfo): boolean {
  return (
    typeInfo.baseTypeInfo === undefined &&
    typeInfo.propertyInfos?.length === 1 &&
    typeInfo.propertyInfos[0].name === "searchValue"
  );
}

export default class TypeGenerator {
  private readonly mappingsLoader: MappingsLoader;
  private readonly writer: Writer;

  constructor(loader: MappingsLoader, writer: Writer) {
    this.mappingsLoader = loader;
    this.writer = writer;
  }

  generateTypesFromMappings(): void {
    this.mappingsLoader
      .allMappingsFiles()
      .forEach((mappingName) =>
        this.generateTypes(mappingName, new Set<string>())
      );
  }

  private generateTypes(
    mappingsName: string,
    processedModules: Set<string>
  ): void {
    if (mappingsName in processedModules) return;
    processedModules.add(mappingsName);
    const mappingsInfo: MappingsInfo = this.mappingsLoader.load(mappingsName);
    mappingsInfo.dependencies?.forEach((mappingsName) =>
      this.generateTypes(mappingsName, processedModules)
    );
    this.writeFile(mappingsInfo);
  }

  private writeFile(mappings: MappingsInfo) {
    const fileName = fileNameForMappings(mappings.name);
    console.log(`Writing ${fileName}...`);
    this.writer.open(fileName);

    mappings.dependencies?.forEach((dependency) => {
      this.writer.write(
        'import * as %s from "./%s";\n',
        importNameForMappings(dependency),
        fileNameForMappings(dependency)
      );
    });
    if (mappings.needsSoapTypesImport) {
      this.writer.write(
        'import { SoapMappingBase, propsWithMappingsName } from "../../soap-types";'
      );
      this.writer.write('const MAPPINGS_NAME = "%s";', mappings.name);
    }

    mappings.sortedTypeInfos.forEach((typeInfo) => {
      if (isEnumTypeInfo(typeInfo)) {
        new UnionTypeGenerator(this.writer).write(typeInfo);
      } else if (isSimpleSearchValue(typeInfo)) {
        new TypeAliasGenerator(this.writer).write(typeInfo);
      } else {
        new ClassGenerator(this.writer).write(typeInfo);
      }
    });

    this.writer.close();
  }
}
