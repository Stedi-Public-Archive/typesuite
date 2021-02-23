import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as DocumentsFilecabinetTypes from "./documents_filecabinet_types";
import { SoapMappingBase } from "../../soap-types";
export declare type FileSiteCategoryListProps = {
    siteCategory?: FileSiteCategory[];
    replaceAll?: boolean;
};
export declare class FileSiteCategoryList extends SoapMappingBase {
    siteCategory?: FileSiteCategory[];
    replaceAll?: boolean;
    constructor(props: FileSiteCategoryListProps);
}
export declare type FileSearchAdvancedProps = {
    criteria?: FileSearch;
    columns?: FileSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class FileSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: FileSearch;
    columns?: FileSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: FileSearchAdvancedProps);
}
export declare type FileSiteCategoryProps = {
    isDefault?: boolean;
    category?: PlatformCore.RecordRef;
    categoryDescription?: string;
    website?: PlatformCore.RecordRef;
};
export declare class FileSiteCategory extends SoapMappingBase {
    isDefault?: boolean;
    category?: PlatformCore.RecordRef;
    categoryDescription?: string;
    website?: PlatformCore.RecordRef;
    constructor(props: FileSiteCategoryProps);
}
export declare type FileSearchProps = {
    basic?: PlatformCommon.FileSearchBasic;
    shopperJoin?: PlatformCommon.CustomerSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
};
export declare class FileSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.FileSearchBasic;
    shopperJoin?: PlatformCommon.CustomerSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    constructor(props: FileSearchProps);
}
export declare type FileSearchRowProps = {
    basic?: PlatformCommon.FileSearchRowBasic;
    shopperJoin?: PlatformCommon.CustomerSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};
export declare class FileSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.FileSearchRowBasic;
    shopperJoin?: PlatformCommon.CustomerSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    constructor(props: FileSearchRowProps);
}
export declare type FolderSearchRowProps = {
    basic?: PlatformCommon.FolderSearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
};
export declare class FolderSearchRow extends PlatformCore.SearchRow {
    basic?: PlatformCommon.FolderSearchRowBasic;
    fileJoin?: PlatformCommon.FileSearchRowBasic;
    userJoin?: PlatformCommon.EmployeeSearchRowBasic;
    constructor(props: FolderSearchRowProps);
}
export declare type FileProps = {
    name?: string;
    attachFrom?: DocumentsFilecabinetTypes.FileAttachFrom;
    mediaTypeName?: string;
    fileType?: DocumentsFilecabinetTypes.MediaType;
    content?: string;
    folder?: PlatformCore.RecordRef;
    fileSize?: number;
    url?: string;
    urlComponent?: string;
    mediaFile?: PlatformCore.RecordRef;
    textFileEncoding?: DocumentsFilecabinetTypes.TextFileEncoding;
    description?: string;
    encoding?: DocumentsFilecabinetTypes.FileEncoding;
    altTagCaption?: string;
    isOnline?: boolean;
    isInactive?: boolean;
    clazz?: string;
    bundleable?: boolean;
    department?: string;
    hideInBundle?: boolean;
    isPrivate?: boolean;
    owner?: PlatformCore.RecordRef;
    caption?: string;
    storeDisplayThumbnail?: PlatformCore.RecordRef;
    siteDescription?: string;
    featuredDescription?: string;
    lastModifiedDate?: string;
    createdDate?: string;
    siteCategoryList?: FileSiteCategoryList;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class File extends PlatformCore.Record {
    name?: string;
    attachFrom?: DocumentsFilecabinetTypes.FileAttachFrom;
    mediaTypeName?: string;
    fileType?: DocumentsFilecabinetTypes.MediaType;
    content?: string;
    folder?: PlatformCore.RecordRef;
    fileSize?: number;
    url?: string;
    urlComponent?: string;
    mediaFile?: PlatformCore.RecordRef;
    textFileEncoding?: DocumentsFilecabinetTypes.TextFileEncoding;
    description?: string;
    encoding?: DocumentsFilecabinetTypes.FileEncoding;
    altTagCaption?: string;
    isOnline?: boolean;
    isInactive?: boolean;
    clazz?: string;
    bundleable?: boolean;
    department?: string;
    hideInBundle?: boolean;
    isPrivate?: boolean;
    owner?: PlatformCore.RecordRef;
    caption?: string;
    storeDisplayThumbnail?: PlatformCore.RecordRef;
    siteDescription?: string;
    featuredDescription?: string;
    lastModifiedDate?: string;
    createdDate?: string;
    siteCategoryList?: FileSiteCategoryList;
    internalId?: string;
    externalId?: string;
    constructor(props: FileProps);
}
export declare type FolderProps = {
    name?: string;
    department?: PlatformCore.RecordRef;
    description?: string;
    isInactive?: boolean;
    isPrivate?: boolean;
    bundleable?: boolean;
    hideInBundle?: boolean;
    isOnline?: boolean;
    group?: PlatformCore.RecordRef;
    parent?: PlatformCore.RecordRef;
    folderType?: DocumentsFilecabinetTypes.FolderFolderType;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    internalId?: string;
    externalId?: string;
} & PlatformCore.RecordProps;
export declare class Folder extends PlatformCore.Record {
    name?: string;
    department?: PlatformCore.RecordRef;
    description?: string;
    isInactive?: boolean;
    isPrivate?: boolean;
    bundleable?: boolean;
    hideInBundle?: boolean;
    isOnline?: boolean;
    group?: PlatformCore.RecordRef;
    parent?: PlatformCore.RecordRef;
    folderType?: DocumentsFilecabinetTypes.FolderFolderType;
    clazz?: PlatformCore.RecordRef;
    location?: PlatformCore.RecordRef;
    subsidiary?: PlatformCore.RecordRef;
    internalId?: string;
    externalId?: string;
    constructor(props: FolderProps);
}
export declare type FolderSearchProps = {
    basic?: PlatformCommon.FolderSearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
};
export declare class FolderSearch extends PlatformCore.SearchRecord {
    basic?: PlatformCommon.FolderSearchBasic;
    fileJoin?: PlatformCommon.FileSearchBasic;
    userJoin?: PlatformCommon.EmployeeSearchBasic;
    constructor(props: FolderSearchProps);
}
export declare type FolderSearchAdvancedProps = {
    criteria?: FolderSearch;
    columns?: FolderSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
};
export declare class FolderSearchAdvanced extends PlatformCore.SearchRecord {
    criteria?: FolderSearch;
    columns?: FolderSearchRow;
    savedSearchId?: string;
    savedSearchScriptId?: string;
    constructor(props: FolderSearchAdvancedProps);
}
