"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassGenerator = exports.TypeAliasGenerator = exports.UnionTypeGenerator = void 0;
const util_1 = __importDefault(require("util"));
const parsing_1 = require("./parsing");
class UnionTypeGenerator {
    constructor(writer) {
        this.writer = writer;
    }
    write(typeInfo) {
        this.writer.write("\nexport type %s =", typeInfo.localName);
        typeInfo.values
            .slice(0, -1)
            .forEach((value) => this.writer.write('  "%s" |', value));
        typeInfo.values
            .slice(-1)
            .forEach((value) => this.writer.write('  "%s";\n', value));
    }
}
exports.UnionTypeGenerator = UnionTypeGenerator;
/**
 * PRIMITIVE_TYPES is a mapping between NetSuite SOAP types and JS types.
 */
const PRIMITIVE_TYPES = {
    Base64Binary: "string",
    Boolean: "boolean",
    DateTime: "string",
    Double: "number",
    Int: "number",
    Long: "number",
    QName: "string",
};
function mappedType(typeInfo) {
    if (typeInfo === undefined)
        return undefined;
    if (parsing_1.isLocalType(typeInfo))
        return typeInfo.substr(1);
    if (typeInfo in PRIMITIVE_TYPES) {
        return PRIMITIVE_TYPES[typeInfo]; // FIXME: Is this type assertion avoidable?
    }
    const mappingsName = typeInfo.split(".")[0];
    return typeInfo.replace(mappingsName, parsing_1.importNameForMappings(mappingsName));
}
class TypeAliasGenerator {
    constructor(writer) {
        this.writer = writer;
    }
    write(typeInfo) {
        if (typeInfo.propertyInfos === undefined) {
            throw new Error("Type info has no associated property info");
        }
        const propertyInfo = typeInfo.propertyInfos[0];
        const optionalModifier = (propertyInfo === null || propertyInfo === void 0 ? void 0 : propertyInfo.required) ? "" : "?";
        const collectionModifier = (propertyInfo === null || propertyInfo === void 0 ? void 0 : propertyInfo.collection) ? "[]" : "";
        const propertyType = mappedType(propertyInfo === null || propertyInfo === void 0 ? void 0 : propertyInfo.typeInfo) || "string";
        const simpleType = util_1.default.format("%s%s", propertyType, collectionModifier);
        this.writer.write("\nexport type %s = %s | { %s%s: %s };\n", typeInfo.localName, simpleType, propertyInfo === null || propertyInfo === void 0 ? void 0 : propertyInfo.name, optionalModifier, simpleType);
    }
}
exports.TypeAliasGenerator = TypeAliasGenerator;
/**
 * A number of super classes are "markers" only and do not contain any data.
 * This function identifies those classes.
 *
 * @param className
 */
function emptySuperClass(className) {
    return [
        "AsyncResult",
        "PlatformCore.SearchRecord",
        "PlatformCore.SearchRecordBasic",
        "PlatformCore.SearchRow",
        "PlatformCore.SearchRowBasic",
    ].includes(className);
}
class ClassGenerator {
    constructor(writer) {
        this.writer = writer;
    }
    write(typeInfo) {
        var _a, _b;
        const classProps = [];
        const constructorAssignments = [];
        (_a = typeInfo.propertyInfos) === null || _a === void 0 ? void 0 : _a.forEach((propertyInfo) => {
            const optionalModifier = propertyInfo.required ? "" : "?";
            const collectionModifier = propertyInfo.collection ? "[]" : "";
            const propertyType = mappedType(propertyInfo.typeInfo) || "string";
            classProps.push(util_1.default.format("  %s%s: %s%s;", propertyInfo.name, optionalModifier, propertyType, collectionModifier));
            constructorAssignments.push(util_1.default.format("    this.%s = props.%s;", propertyInfo.name, propertyInfo.name));
        });
        const superClass = (_b = mappedType(typeInfo.baseTypeInfo)) !== null && _b !== void 0 ? _b : "SoapMappingBase";
        // Write props type only if there are props for the associated class.
        if (classProps.length > 0) {
            this.writer.write("\nexport type %sProps = {\n", typeInfo.localName);
            this.writer.write(classProps.join("\n"));
            if (!emptySuperClass(superClass) && superClass !== "SoapMappingBase") {
                this.writer.write("\n} & %sProps;\n", superClass);
            }
            else {
                this.writer.write("\n}\n");
            }
        }
        this.writer.write("\nexport class %s extends %s {", typeInfo.localName, superClass);
        this.writer.write(classProps.join("\n"));
        // Write constructor assignments where there are any.
        if (constructorAssignments.length > 0) {
            this.writer.write("  constructor(props: %sProps) {\n", typeInfo.localName);
            this.writer.write("    super(propsWithMappingsName(props, MAPPINGS_NAME));\n");
            this.writer.write(constructorAssignments.join("\n"));
            this.writer.write("  }\n");
        }
        this.writer.write("}\n");
    }
}
exports.ClassGenerator = ClassGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlLWdlbi9nZW5lcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdEQUF3QjtBQVF4Qix1Q0FBK0Q7QUFFL0QsTUFBYSxrQkFBa0I7SUFFN0IsWUFBWSxNQUFjO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxLQUFLLENBQUMsUUFBc0I7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVELFFBQVEsQ0FBQyxNQUFNO2FBQ1osS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNaLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUQsUUFBUSxDQUFDLE1BQU07YUFDWixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDVCxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDRjtBQWZELGdEQWVDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLGVBQWUsR0FBc0M7SUFDekQsWUFBWSxFQUFFLFFBQVE7SUFDdEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsR0FBRyxFQUFFLFFBQVE7SUFDYixJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0NBQ2hCLENBQUM7QUFFRixTQUFTLFVBQVUsQ0FBQyxRQUFpQjtJQUNuQyxJQUFJLFFBQVEsS0FB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LEVBQUU7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQ2YsbUNBQW1DLEVBQ25DLFFBQVEsQ0FBQyxTQUFTLENBQ25CLENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FDZiwyREFBMkQsQ0FDNUQsQ0FBQztZQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNGO0FBbkVELHdDQW1FQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlsIGZyb20gXCJ1dGlsXCI7XG5pbXBvcnQge1xuICBQcmltaXRpdmUsXG4gIEphdmFTY3JpcHRUeXBlLFxuICBXcml0ZXIsXG4gIEVudW1UeXBlSW5mbyxcbiAgRW50aXR5VHlwZUluZm8sXG59IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBpc0xvY2FsVHlwZSwgaW1wb3J0TmFtZUZvck1hcHBpbmdzIH0gZnJvbSBcIi4vcGFyc2luZ1wiO1xuXG5leHBvcnQgY2xhc3MgVW5pb25UeXBlR2VuZXJhdG9yIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3cml0ZXI6IFdyaXRlcjtcbiAgY29uc3RydWN0b3Iod3JpdGVyOiBXcml0ZXIpIHtcbiAgICB0aGlzLndyaXRlciA9IHdyaXRlcjtcbiAgfVxuXG4gIHdyaXRlKHR5cGVJbmZvOiBFbnVtVHlwZUluZm8pOiB2b2lkIHtcbiAgICB0aGlzLndyaXRlci53cml0ZShcIlxcbmV4cG9ydCB0eXBlICVzID1cIiwgdHlwZUluZm8ubG9jYWxOYW1lKTtcbiAgICB0eXBlSW5mby52YWx1ZXNcbiAgICAgIC5zbGljZSgwLCAtMSlcbiAgICAgIC5mb3JFYWNoKCh2YWx1ZSkgPT4gdGhpcy53cml0ZXIud3JpdGUoJyAgXCIlc1wiIHwnLCB2YWx1ZSkpO1xuICAgIHR5cGVJbmZvLnZhbHVlc1xuICAgICAgLnNsaWNlKC0xKVxuICAgICAgLmZvckVhY2goKHZhbHVlKSA9PiB0aGlzLndyaXRlci53cml0ZSgnICBcIiVzXCI7XFxuJywgdmFsdWUpKTtcbiAgfVxufVxuXG4vKipcbiAqIFBSSU1JVElWRV9UWVBFUyBpcyBhIG1hcHBpbmcgYmV0d2VlbiBOZXRTdWl0ZSBTT0FQIHR5cGVzIGFuZCBKUyB0eXBlcy5cbiAqL1xuY29uc3QgUFJJTUlUSVZFX1RZUEVTOiBSZWNvcmQ8UHJpbWl0aXZlLCBKYXZhU2NyaXB0VHlwZT4gPSB7XG4gIEJhc2U2NEJpbmFyeTogXCJzdHJpbmdcIixcbiAgQm9vbGVhbjogXCJib29sZWFuXCIsXG4gIERhdGVUaW1lOiBcInN0cmluZ1wiLFxuICBEb3VibGU6IFwibnVtYmVyXCIsXG4gIEludDogXCJudW1iZXJcIixcbiAgTG9uZzogXCJudW1iZXJcIixcbiAgUU5hbWU6IFwic3RyaW5nXCIsXG59O1xuXG5mdW5jdGlvbiBtYXBwZWRUeXBlKHR5cGVJbmZvPzogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVJbmZvID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gIGlmIChpc0xvY2FsVHlwZSh0eXBlSW5mbykpIHJldHVybiB0eXBlSW5mby5zdWJzdHIoMSk7XG4gIGlmICh0eXBlSW5mbyBpbiBQUklNSVRJVkVfVFlQRVMpIHtcbiAgICByZXR1cm4gUFJJTUlUSVZFX1RZUEVTW3R5cGVJbmZvIGFzIFByaW1pdGl2ZV07IC8vIEZJWE1FOiBJcyB0aGlzIHR5cGUgYXNzZXJ0aW9uIGF2b2lkYWJsZT9cbiAgfVxuICBjb25zdCBtYXBwaW5nc05hbWUgPSB0eXBlSW5mby5zcGxpdChcIi5cIilbMF07XG4gIHJldHVybiB0eXBlSW5mby5yZXBsYWNlKG1hcHBpbmdzTmFtZSwgaW1wb3J0TmFtZUZvck1hcHBpbmdzKG1hcHBpbmdzTmFtZSkpO1xufVxuXG5leHBvcnQgY2xhc3MgVHlwZUFsaWFzR2VuZXJhdG9yIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3cml0ZXI6IFdyaXRlcjtcbiAgY29uc3RydWN0b3Iod3JpdGVyOiBXcml0ZXIpIHtcbiAgICB0aGlzLndyaXRlciA9IHdyaXRlcjtcbiAgfVxuXG4gIHdyaXRlKHR5cGVJbmZvOiBFbnRpdHlUeXBlSW5mbyk6IHZvaWQge1xuICAgIGlmICh0eXBlSW5mby5wcm9wZXJ0eUluZm9zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlR5cGUgaW5mbyBoYXMgbm8gYXNzb2NpYXRlZCBwcm9wZXJ0eSBpbmZvXCIpO1xuICAgIH1cbiAgICBjb25zdCBwcm9wZXJ0eUluZm8gPSB0eXBlSW5mby5wcm9wZXJ0eUluZm9zWzBdO1xuICAgIGNvbnN0IG9wdGlvbmFsTW9kaWZpZXIgPSBwcm9wZXJ0eUluZm8/LnJlcXVpcmVkID8gXCJcIiA6IFwiP1wiO1xuICAgIGNvbnN0IGNvbGxlY3Rpb25Nb2RpZmllciA9IHByb3BlcnR5SW5mbz8uY29sbGVjdGlvbiA/IFwiW11cIiA6IFwiXCI7XG4gICAgY29uc3QgcHJvcGVydHlUeXBlID0gbWFwcGVkVHlwZShwcm9wZXJ0eUluZm8/LnR5cGVJbmZvKSB8fCBcInN0cmluZ1wiO1xuICAgIGNvbnN0IHNpbXBsZVR5cGUgPSB1dGlsLmZvcm1hdChcIiVzJXNcIiwgcHJvcGVydHlUeXBlLCBjb2xsZWN0aW9uTW9kaWZpZXIpO1xuICAgIHRoaXMud3JpdGVyLndyaXRlKFxuICAgICAgXCJcXG5leHBvcnQgdHlwZSAlcyA9ICVzIHwgeyAlcyVzOiAlcyB9O1xcblwiLFxuICAgICAgdHlwZUluZm8ubG9jYWxOYW1lLFxuICAgICAgc2ltcGxlVHlwZSxcbiAgICAgIHByb3BlcnR5SW5mbz8ubmFtZSxcbiAgICAgIG9wdGlvbmFsTW9kaWZpZXIsXG4gICAgICBzaW1wbGVUeXBlXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEEgbnVtYmVyIG9mIHN1cGVyIGNsYXNzZXMgYXJlIFwibWFya2Vyc1wiIG9ubHkgYW5kIGRvIG5vdCBjb250YWluIGFueSBkYXRhLlxuICogVGhpcyBmdW5jdGlvbiBpZGVudGlmaWVzIHRob3NlIGNsYXNzZXMuXG4gKlxuICogQHBhcmFtIGNsYXNzTmFtZVxuICovXG5mdW5jdGlvbiBlbXB0eVN1cGVyQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFtcbiAgICBcIkFzeW5jUmVzdWx0XCIsXG4gICAgXCJQbGF0Zm9ybUNvcmUuU2VhcmNoUmVjb3JkXCIsXG4gICAgXCJQbGF0Zm9ybUNvcmUuU2VhcmNoUmVjb3JkQmFzaWNcIixcbiAgICBcIlBsYXRmb3JtQ29yZS5TZWFyY2hSb3dcIixcbiAgICBcIlBsYXRmb3JtQ29yZS5TZWFyY2hSb3dCYXNpY1wiLFxuICBdLmluY2x1ZGVzKGNsYXNzTmFtZSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc0dlbmVyYXRvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd3JpdGVyOiBXcml0ZXI7XG4gIGNvbnN0cnVjdG9yKHdyaXRlcjogV3JpdGVyKSB7XG4gICAgdGhpcy53cml0ZXIgPSB3cml0ZXI7XG4gIH1cblxuICB3cml0ZSh0eXBlSW5mbzogRW50aXR5VHlwZUluZm8pOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc1Byb3BzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGNvbnN0cnVjdG9yQXNzaWdubWVudHM6IHN0cmluZ1tdID0gW107XG4gICAgdHlwZUluZm8ucHJvcGVydHlJbmZvcz8uZm9yRWFjaCgocHJvcGVydHlJbmZvKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25hbE1vZGlmaWVyID0gcHJvcGVydHlJbmZvLnJlcXVpcmVkID8gXCJcIiA6IFwiP1wiO1xuICAgICAgY29uc3QgY29sbGVjdGlvbk1vZGlmaWVyID0gcHJvcGVydHlJbmZvLmNvbGxlY3Rpb24gPyBcIltdXCIgOiBcIlwiO1xuICAgICAgY29uc3QgcHJvcGVydHlUeXBlID0gbWFwcGVkVHlwZShwcm9wZXJ0eUluZm8udHlwZUluZm8pIHx8IFwic3RyaW5nXCI7XG4gICAgICBjbGFzc1Byb3BzLnB1c2goXG4gICAgICAgIHV0aWwuZm9ybWF0KFxuICAgICAgICAgIFwiICAlcyVzOiAlcyVzO1wiLFxuICAgICAgICAgIHByb3BlcnR5SW5mby5uYW1lLFxuICAgICAgICAgIG9wdGlvbmFsTW9kaWZpZXIsXG4gICAgICAgICAgcHJvcGVydHlUeXBlLFxuICAgICAgICAgIGNvbGxlY3Rpb25Nb2RpZmllclxuICAgICAgICApXG4gICAgICApO1xuICAgICAgY29uc3RydWN0b3JBc3NpZ25tZW50cy5wdXNoKFxuICAgICAgICB1dGlsLmZvcm1hdChcbiAgICAgICAgICBcIiAgICB0aGlzLiVzID0gcHJvcHMuJXM7XCIsXG4gICAgICAgICAgcHJvcGVydHlJbmZvLm5hbWUsXG4gICAgICAgICAgcHJvcGVydHlJbmZvLm5hbWVcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHN1cGVyQ2xhc3MgPSBtYXBwZWRUeXBlKHR5cGVJbmZvLmJhc2VUeXBlSW5mbykgPz8gXCJTb2FwTWFwcGluZ0Jhc2VcIjtcblxuICAgIC8vIFdyaXRlIHByb3BzIHR5cGUgb25seSBpZiB0aGVyZSBhcmUgcHJvcHMgZm9yIHRoZSBhc3NvY2lhdGVkIGNsYXNzLlxuICAgIGlmIChjbGFzc1Byb3BzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMud3JpdGVyLndyaXRlKFwiXFxuZXhwb3J0IHR5cGUgJXNQcm9wcyA9IHtcXG5cIiwgdHlwZUluZm8ubG9jYWxOYW1lKTtcbiAgICAgIHRoaXMud3JpdGVyLndyaXRlKGNsYXNzUHJvcHMuam9pbihcIlxcblwiKSk7XG4gICAgICBpZiAoIWVtcHR5U3VwZXJDbGFzcyhzdXBlckNsYXNzKSAmJiBzdXBlckNsYXNzICE9PSBcIlNvYXBNYXBwaW5nQmFzZVwiKSB7XG4gICAgICAgIHRoaXMud3JpdGVyLndyaXRlKFwiXFxufSAmICVzUHJvcHM7XFxuXCIsIHN1cGVyQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53cml0ZXIud3JpdGUoXCJcXG59XFxuXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMud3JpdGVyLndyaXRlKFxuICAgICAgXCJcXG5leHBvcnQgY2xhc3MgJXMgZXh0ZW5kcyAlcyB7XCIsXG4gICAgICB0eXBlSW5mby5sb2NhbE5hbWUsXG4gICAgICBzdXBlckNsYXNzXG4gICAgKTtcblxuICAgIHRoaXMud3JpdGVyLndyaXRlKGNsYXNzUHJvcHMuam9pbihcIlxcblwiKSk7XG5cbiAgICAvLyBXcml0ZSBjb25zdHJ1Y3RvciBhc3NpZ25tZW50cyB3aGVyZSB0aGVyZSBhcmUgYW55LlxuICAgIGlmIChjb25zdHJ1Y3RvckFzc2lnbm1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMud3JpdGVyLndyaXRlKFxuICAgICAgICBcIiAgY29uc3RydWN0b3IocHJvcHM6ICVzUHJvcHMpIHtcXG5cIixcbiAgICAgICAgdHlwZUluZm8ubG9jYWxOYW1lXG4gICAgICApO1xuICAgICAgdGhpcy53cml0ZXIud3JpdGUoXG4gICAgICAgIFwiICAgIHN1cGVyKHByb3BzV2l0aE1hcHBpbmdzTmFtZShwcm9wcywgTUFQUElOR1NfTkFNRSkpO1xcblwiXG4gICAgICApO1xuXG4gICAgICB0aGlzLndyaXRlci53cml0ZShjb25zdHJ1Y3RvckFzc2lnbm1lbnRzLmpvaW4oXCJcXG5cIikpO1xuICAgICAgdGhpcy53cml0ZXIud3JpdGUoXCIgIH1cXG5cIik7XG4gICAgfVxuICAgIHRoaXMud3JpdGVyLndyaXRlKFwifVxcblwiKTtcbiAgfVxufVxuIl19