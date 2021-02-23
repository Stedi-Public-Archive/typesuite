import { Writer, EnumTypeInfo, EntityTypeInfo } from "./types";
export declare class UnionTypeGenerator {
    private readonly writer;
    constructor(writer: Writer);
    write(typeInfo: EnumTypeInfo): void;
}
export declare class TypeAliasGenerator {
    private readonly writer;
    constructor(writer: Writer);
    write(typeInfo: EntityTypeInfo): void;
}
export declare class ClassGenerator {
    private readonly writer;
    constructor(writer: Writer);
    write(typeInfo: EntityTypeInfo): void;
}
