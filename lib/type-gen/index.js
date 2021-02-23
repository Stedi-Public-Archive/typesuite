"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileMappingsLoader = exports.FileWriter = void 0;
const fs_1 = __importDefault(require("fs"));
const util_1 = __importDefault(require("util"));
const parsing_1 = require("./parsing");
const generators_1 = require("./generators");
class FileWriter {
    constructor(targetDirectory) {
        this.targetDirectory = targetDirectory;
        fs_1.default.mkdirSync(this.targetDirectory, { recursive: true });
    }
    open(fileName) {
        if (this.writable !== undefined) {
            throw new Error(`FileWriter is already open for ${fileName}`);
        }
        this.writable = fs_1.default.createWriteStream(`${this.targetDirectory}/${fileName}.ts`);
    }
    close() {
        if (this.writable === undefined) {
            throw new Error(`Failed to close FileWriter. Call open() first.`);
        }
        this.writable.close();
        this.writable = undefined;
    }
    write(message, ...optionalParams) {
        if (this.writable === undefined) {
            throw new Error("FileWrite is not open. Call open() before writing");
        }
        this.writable.write(util_1.default.format(message, ...optionalParams));
    }
}
exports.FileWriter = FileWriter;
function typeInfoExtends(typeInfo, localBaseType) {
    if (!parsing_1.isEnumTypeInfo(typeInfo)) {
        return typeInfo.baseTypeInfo === `.${localBaseType}`;
    }
    return false;
}
class FileMappingsLoader {
    constructor(mappingsDir) {
        this.mappingsDir = mappingsDir;
    }
    load(mappingsName) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const mappings = require(this.mappingsDir + mappingsName + ".js")[mappingsName];
        const sortedTypeInfos = [];
        const referencedTypes = [];
        let needsSoapTypesImport = false;
        mappings.typeInfos.forEach((typeInfo) => {
            if (parsing_1.isEnumTypeInfo(typeInfo)) {
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
                if (typeInfo.baseTypeInfo && parsing_1.isLocalType(typeInfo.baseTypeInfo)) {
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
    allMappingsFiles() {
        return fs_1.default
            .readdirSync(this.mappingsDir, { withFileTypes: true })
            .map((item) => item.name.replace(/\.js$/, ""));
    }
}
exports.FileMappingsLoader = FileMappingsLoader;
function isSimpleSearchValue(typeInfo) {
    var _a;
    return (typeInfo.baseTypeInfo === undefined &&
        ((_a = typeInfo.propertyInfos) === null || _a === void 0 ? void 0 : _a.length) === 1 &&
        typeInfo.propertyInfos[0].name === "searchValue");
}
class TypeGenerator {
    constructor(loader, writer) {
        this.mappingsLoader = loader;
        this.writer = writer;
    }
    generateTypesFromMappings() {
        this.mappingsLoader
            .allMappingsFiles()
            .forEach((mappingName) => this.generateTypes(mappingName, new Set()));
    }
    generateTypes(mappingsName, processedModules) {
        var _a;
        if (mappingsName in processedModules)
            return;
        processedModules.add(mappingsName);
        const mappingsInfo = this.mappingsLoader.load(mappingsName);
        (_a = mappingsInfo.dependencies) === null || _a === void 0 ? void 0 : _a.forEach((mappingsName) => this.generateTypes(mappingsName, processedModules));
        this.writeFile(mappingsInfo);
    }
    writeFile(mappings) {
        var _a;
        const fileName = parsing_1.fileNameForMappings(mappings.name);
        console.log(`Writing ${fileName}...`);
        this.writer.open(fileName);
        (_a = mappings.dependencies) === null || _a === void 0 ? void 0 : _a.forEach((dependency) => {
            this.writer.write('import * as %s from "./%s";\n', parsing_1.importNameForMappings(dependency), parsing_1.fileNameForMappings(dependency));
        });
        if (mappings.needsSoapTypesImport) {
            this.writer.write('import { SoapMappingBase, propsWithMappingsName } from "../../soap-types";');
            this.writer.write('const MAPPINGS_NAME = "%s";', mappings.name);
        }
        mappings.sortedTypeInfos.forEach((typeInfo) => {
            if (parsing_1.isEnumTypeInfo(typeInfo)) {
                new generators_1.UnionTypeGenerator(this.writer).write(typeInfo);
            }
            else if (isSimpleSearchValue(typeInfo)) {
                new generators_1.TypeAliasGenerator(this.writer).write(typeInfo);
            }
            else {
                new generators_1.ClassGenerator(this.writer).write(typeInfo);
            }
        });
        this.writer.close();
    }
}
exports.default = TypeGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHlwZS1nZW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNENBQXFDO0FBQ3JDLGdEQUF3QjtBQVN4Qix1Q0FLbUI7QUFDbkIsNkNBSXNCO0FBRXRCLE1BQWEsVUFBVTtJQUdyQixZQUFZLGVBQXVCO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLFlBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxJQUFJLENBQUMsUUFBZ0I7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFFLENBQUMsaUJBQWlCLENBQ2xDLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxRQUFRLEtBQUssQ0FDekMsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7U0FDbkU7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBZ0IsRUFBRSxHQUFHLGNBQXdCO1FBQ2pELElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENB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Q0FBQyxDQUNoQyxDQUFDO1FBQ0osQ0FBQyxFQUFFO1FBQ0gsSUFBSSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQ2YsNEVBQTRFLENBQzdFLENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakU7UUFFRCxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzVDLElBQUksd0JBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDNUIsSUFBSSwrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3JEO2lCQUFNLElBQUksbUJBQW1CLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3hDLElBQUksK0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNyRDtpQkFBTTtnQkFDTCxJQUFJLDJCQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUE3REQsZ0NBNkRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzLCB7IFdyaXRlU3RyZWFtIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgdXRpbCBmcm9tIFwidXRpbFwiO1xuaW1wb3J0IHtcbiAgV3JpdGVyLFxuICBFbnRpdHlUeXBlSW5mbyxcbiAgVHlwZUluZm8sXG4gIE1hcHBpbmdzTG9hZGVyLFxuICBNYXBwaW5ncyxcbiAgTWFwcGluZ3NJbmZvLFxufSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgaXNFbnVtVHlwZUluZm8sXG4gIGlzTG9jYWxUeXBlLFxuICBmaWxlTmFtZUZvck1hcHBpbmdzLFxuICBpbXBvcnROYW1lRm9yTWFwcGluZ3MsXG59IGZyb20gXCIuL3BhcnNpbmdcIjtcbmltcG9ydCB7XG4gIFVuaW9uVHlwZUdlbmVyYXRvcixcbiAgVHlwZUFsaWFzR2VuZXJhdG9yLFxuICBDbGFzc0dlbmVyYXRvcixcbn0gZnJvbSBcIi4vZ2VuZXJhdG9yc1wiO1xuXG5leHBvcnQgY2xhc3MgRmlsZVdyaXRlciBpbXBsZW1lbnRzIFdyaXRlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgdGFyZ2V0RGlyZWN0b3J5OiBzdHJpbmc7XG4gIHByaXZhdGUgd3JpdGFibGU6IFdyaXRlU3RyZWFtIHwgdW5kZWZpbmVkO1xuICBjb25zdHJ1Y3Rvcih0YXJnZXREaXJlY3Rvcnk6IHN0cmluZykge1xuICAgIHRoaXMudGFyZ2V0RGlyZWN0b3J5ID0gdGFyZ2V0RGlyZWN0b3J5O1xuICAgIGZzLm1rZGlyU3luYyh0aGlzLnRhcmdldERpcmVjdG9yeSwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gIH1cblxuICBvcGVuKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy53cml0YWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZpbGVXcml0ZXIgaXMgYWxyZWFkeSBvcGVuIGZvciAke2ZpbGVOYW1lfWApO1xuICAgIH1cbiAgICB0aGlzLndyaXRhYmxlID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0oXG4gICAgICBgJHt0aGlzLnRhcmdldERpcmVjdG9yeX0vJHtmaWxlTmFtZX0udHNgXG4gICAgKTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLndyaXRhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGNsb3NlIEZpbGVXcml0ZXIuIENhbGwgb3BlbigpIGZpcnN0LmApO1xuICAgIH1cbiAgICB0aGlzLndyaXRhYmxlLmNsb3NlKCk7XG4gICAgdGhpcy53cml0YWJsZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHdyaXRlKG1lc3NhZ2U/OiBzdHJpbmcsIC4uLm9wdGlvbmFsUGFyYW1zOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLndyaXRhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZpbGVXcml0ZSBpcyBub3Qgb3Blbi4gQ2FsbCBvcGVuKCkgYmVmb3JlIHdyaXRpbmdcIik7XG4gICAgfVxuICAgIHRoaXMud3JpdGFibGUud3JpdGUodXRpbC5mb3JtYXQobWVzc2FnZSwgLi4ub3B0aW9uYWxQYXJhbXMpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0eXBlSW5mb0V4dGVuZHModHlwZUluZm86IFR5cGVJbmZvLCBsb2NhbEJhc2VUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKCFpc0VudW1UeXBlSW5mbyh0eXBlSW5mbykpIHtcbiAgICByZXR1cm4gdHlwZUluZm8uYmFzZVR5cGVJbmZvID09PSBgLiR7bG9jYWxCYXNlVHlwZX1gO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVNYXBwaW5nc0xvYWRlciBpbXBsZW1lbnRzIE1hcHBpbmdzTG9hZGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBtYXBwaW5nc0Rpcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG1hcHBpbmdzRGlyOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1hcHBpbmdzRGlyID0gbWFwcGluZ3NEaXI7XG4gIH1cblxuICBsb2FkKG1hcHBpbmdzTmFtZTogc3RyaW5nKTogTWFwcGluZ3NJbmZvIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlc1xuICAgIGNvbnN0IG1hcHBpbmdzOiBNYXBwaW5ncyA9IHJlcXVpcmUodGhpcy5tYXBwaW5nc0RpciArIG1hcHBpbmdzTmFtZSArIFwiLmpzXCIpW1xuICAgICAgbWFwcGluZ3NOYW1lXG4gICAgXTtcblxuICAgIGNvbnN0IHNvcnRlZFR5cGVJbmZvczogVHlwZUluZm9bXSA9IFtdO1xuICAgIGNvbnN0IHJlZmVyZW5jZWRUeXBlczogc3RyaW5nW10gPSBbXTtcbiAgICBsZXQgbmVlZHNTb2FwVHlwZXNJbXBvcnQgPSBmYWxzZTtcblxuICAgIG1hcHBpbmdzLnR5cGVJbmZvcy5mb3JFYWNoKCh0eXBlSW5mbykgPT4ge1xuICAgICAgaWYgKGlzRW51bVR5cGVJbmZvKHR5cGVJbmZvKSkge1xuICAgICAgICBzb3J0ZWRUeXBlSW5mb3MucHVzaCh0eXBlSW5mbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZWVkc1NvYXBUeXBlc0ltcG9ydCA9IHRydWU7XG4gICAgICAgIGlmIChyZWZlcmVuY2VkVHlwZXMuaW5jbHVkZXModHlwZUluZm8ubG9jYWxOYW1lKSkge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gc29ydGVkVHlwZUluZm9zLmZpbmRJbmRleCgoc29ydGVkVHlwZUluZm8pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlSW5mb0V4dGVuZHMoc29ydGVkVHlwZUluZm8sIHR5cGVJbmZvLmxvY2FsTmFtZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc29ydGVkVHlwZUluZm9zLnNwbGljZShpbmRleCwgMCwgdHlwZUluZm8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvcnRlZFR5cGVJbmZvcy5wdXNoKHR5cGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZUluZm8uYmFzZVR5cGVJbmZvICYmIGlzTG9jYWxUeXBlKHR5cGVJbmZvLmJhc2VUeXBlSW5mbykpIHtcbiAgICAgICAgICByZWZlcmVuY2VkVHlwZXMucHVzaCh0eXBlSW5mby5iYXNlVHlwZUluZm8uc3Vic3RyKDEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm1hcHBpbmdzLFxuICAgICAgc29ydGVkVHlwZUluZm9zLFxuICAgICAgbmVlZHNTb2FwVHlwZXNJbXBvcnQ6IG5lZWRzU29hcFR5cGVzSW1wb3J0LFxuICAgIH07XG4gIH1cblxuICBhbGxNYXBwaW5nc0ZpbGVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gZnNcbiAgICAgIC5yZWFkZGlyU3luYyh0aGlzLm1hcHBpbmdzRGlyLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcbiAgICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZS5yZXBsYWNlKC9cXC5qcyQvLCBcIlwiKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTaW1wbGVTZWFyY2hWYWx1ZSh0eXBlSW5mbzogRW50aXR5VHlwZUluZm8pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlSW5mby5iYXNlVHlwZUluZm8gPT09IHVuZGVmaW5lZCAmJlxuICAgIHR5cGVJbmZvLnByb3BlcnR5SW5mb3M/Lmxlbmd0aCA9PT0gMSAmJlxuICAgIHR5cGVJbmZvLnByb3BlcnR5SW5mb3NbMF0ubmFtZSA9PT0gXCJzZWFyY2hWYWx1ZVwiXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR5cGVHZW5lcmF0b3Ige1xuICBwcml2YXRlIHJlYWRvbmx5IG1hcHBpbmdzTG9hZGVyOiBNYXBwaW5nc0xvYWRlcjtcbiAgcHJpdmF0ZSByZWFkb25seSB3cml0ZXI6IFdyaXRlcjtcblxuICBjb25zdHJ1Y3Rvcihsb2FkZXI6IE1hcHBpbmdzTG9hZGVyLCB3cml0ZXI6IFdyaXRlcikge1xuICAgIHRoaXMubWFwcGluZ3NMb2FkZXIgPSBsb2FkZXI7XG4gICAgdGhpcy53cml0ZXIgPSB3cml0ZXI7XG4gIH1cblxuICBnZW5lcmF0ZVR5cGVzRnJvbU1hcHBpbmdzKCk6IHZvaWQge1xuICAgIHRoaXMubWFwcGluZ3NMb2FkZXJcbiAgICAgIC5hbGxNYXBwaW5nc0ZpbGVzKClcbiAgICAgIC5mb3JFYWNoKChtYXBwaW5nTmFtZSkgPT5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZVR5cGVzKG1hcHBpbmdOYW1lLCBuZXcgU2V0PHN0cmluZz4oKSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlVHlwZXMoXG4gICAgbWFwcGluZ3NOYW1lOiBzdHJpbmcsXG4gICAgcHJvY2Vzc2VkTW9kdWxlczogU2V0PHN0cmluZz5cbiAgKTogdm9pZCB7XG4gICAgaWYgKG1hcHBpbmdzTmFtZSBpbiBwcm9jZXNzZWRNb2R1bGVzKSByZXR1cm47XG4gICAgcHJvY2Vzc2VkTW9kdWxlcy5hZGQobWFwcGluZ3NOYW1lKTtcbiAgICBjb25zdCBtYXBwaW5nc0luZm86IE1hcHBpbmdzSW5mbyA9IHRoaXMubWFwcGluZ3NMb2FkZXIubG9hZChtYXBwaW5nc05hbWUpO1xuICAgIG1hcHBpbmdzSW5mby5kZXBlbmRlbmNpZXM/LmZvckVhY2goKG1hcHBpbmdzTmFtZSkgPT5cbiAgICAgIHRoaXMuZ2VuZXJhdGVUeXBlcyhtYXBwaW5nc05hbWUsIHByb2Nlc3NlZE1vZHVsZXMpXG4gICAgKTtcbiAgICB0aGlzLndyaXRlRmlsZShtYXBwaW5nc0luZm8pO1xuICB9XG5cbiAgcHJpdmF0ZSB3cml0ZUZpbGUobWFwcGluZ3M6IE1hcHBpbmdzSW5mbykge1xuICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZU5hbWVGb3JNYXBwaW5ncyhtYXBwaW5ncy5uYW1lKTtcbiAgICBjb25zb2xlLmxvZyhgV3JpdGluZyAke2ZpbGVOYW1lfS4uLmApO1xuICAgIHRoaXMud3JpdGVyLm9wZW4oZmlsZU5hbWUpO1xuXG4gICAgbWFwcGluZ3MuZGVwZW5kZW5jaWVzPy5mb3JFYWNoKChkZXBlbmRlbmN5KSA9PiB7XG4gICAgICB0aGlzLndyaXRlci53cml0ZShcbiAgICAgICAgJ2ltcG9ydCAqIGFzICVzIGZyb20gXCIuLyVzXCI7XFxuJyxcbiAgICAgICAgaW1wb3J0TmFtZUZvck1hcHBpbmdzKGRlcGVuZGVuY3kpLFxuICAgICAgICBmaWxlTmFtZUZvck1hcHBpbmdzKGRlcGVuZGVuY3kpXG4gICAgICApO1xuICAgIH0pO1xuICAgIGlmIChtYXBwaW5ncy5uZWVkc1NvYXBUeXBlc0ltcG9ydCkge1xuICAgICAgdGhpcy53cml0ZXIud3JpdGUoXG4gICAgICAgICdpbXBvcnQgeyBTb2FwTWFwcGluZ0Jhc2UsIHByb3BzV2l0aE1hcHBpbmdzTmFtZSB9IGZyb20gXCIuLi8uLi9zb2FwLXR5cGVzXCI7J1xuICAgICAgKTtcbiAgICAgIHRoaXMud3JpdGVyLndyaXRlKCdjb25zdCBNQVBQSU5HU19OQU1FID0gXCIlc1wiOycsIG1hcHBpbmdzLm5hbWUpO1xuICAgIH1cblxuICAgIG1hcHBpbmdzLnNvcnRlZFR5cGVJbmZvcy5mb3JFYWNoKCh0eXBlSW5mbykgPT4ge1xuICAgICAgaWYgKGlzRW51bVR5cGVJbmZvKHR5cGVJbmZvKSkge1xuICAgICAgICBuZXcgVW5pb25UeXBlR2VuZXJhdG9yKHRoaXMud3JpdGVyKS53cml0ZSh0eXBlSW5mbyk7XG4gICAgICB9IGVsc2UgaWYgKGlzU2ltcGxlU2VhcmNoVmFsdWUodHlwZUluZm8pKSB7XG4gICAgICAgIG5ldyBUeXBlQWxpYXNHZW5lcmF0b3IodGhpcy53cml0ZXIpLndyaXRlKHR5cGVJbmZvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBDbGFzc0dlbmVyYXRvcih0aGlzLndyaXRlcikud3JpdGUodHlwZUluZm8pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy53cml0ZXIuY2xvc2UoKTtcbiAgfVxufVxuIl19