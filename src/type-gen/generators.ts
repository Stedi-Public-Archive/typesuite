import util from "util";
import {
  Primitive,
  JavaScriptType,
  Writer,
  EnumTypeInfo,
  EntityTypeInfo,
} from "./types";
import { isLocalType, importNameForMappings } from "./parsing";

export class UnionTypeGenerator {
  private readonly writer: Writer;
  constructor(writer: Writer) {
    this.writer = writer;
  }

  write(typeInfo: EnumTypeInfo): void {
    this.writer.write("\nexport type %s =", typeInfo.localName);
    typeInfo.values
      .slice(0, -1)
      .forEach((value) => this.writer.write('  "%s" |', value));
    typeInfo.values
      .slice(-1)
      .forEach((value) => this.writer.write('  "%s";\n', value));
  }
}

/**
 * PRIMITIVE_TYPES is a mapping between NetSuite SOAP types and JS types.
 */
const PRIMITIVE_TYPES: Record<Primitive, JavaScriptType> = {
  Base64Binary: "string",
  Boolean: "boolean",
  DateTime: "string",
  Double: "number",
  Int: "number",
  Long: "number",
  QName: "string",
};

function mappedType(typeInfo?: string): string {
  if (typeInfo === undefined) return "string";
  if (isLocalType(typeInfo)) return typeInfo.substr(1);
  if (typeInfo in PRIMITIVE_TYPES) {
    return PRIMITIVE_TYPES[typeInfo as Primitive]; // FIXME: Is this type assertion avoidable?
  }
  const mappingsName = typeInfo.split(".")[0];
  return typeInfo.replace(mappingsName, importNameForMappings(mappingsName));
}

export class TypeAliasGenerator {
  private readonly writer: Writer;
  constructor(writer: Writer) {
    this.writer = writer;
  }

  write(typeInfo: EntityTypeInfo): void {
    if (typeInfo.propertyInfos === undefined) {
      throw new Error("Type info has no associated property info");
    }
    const propertyInfo = typeInfo.propertyInfos[0];
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
}

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

export class ClassGenerator {
  private readonly writer: Writer;
  constructor(writer: Writer) {
    this.writer = writer;
  }

  write(typeInfo: EntityTypeInfo): void {
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
