import { Writer, MappingsLoader, MappingsInfo } from "./types";
export declare class FileWriter implements Writer {
    private readonly targetDirectory;
    private writable;
    constructor(targetDirectory: string);
    open(fileName: string): void;
    close(): void;
    write(message?: string, ...optionalParams: string[]): void;
}
export declare class FileMappingsLoader implements MappingsLoader {
    private readonly mappingsDir;
    constructor(mappingsDir: string);
    load(mappingsName: string): MappingsInfo;
    allMappingsFiles(): string[];
}
export default class TypeGenerator {
    private readonly mappingsLoader;
    private readonly writer;
    constructor(loader: MappingsLoader, writer: Writer);
    generateTypesFromMappings(): void;
    private generateTypes;
    private writeFile;
}
