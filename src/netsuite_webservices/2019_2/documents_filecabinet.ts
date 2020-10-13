import * as SoapTypes from "../../util/soap-types";
import * as PlatformCore from "./platform_core";
import * as PlatformCommon from "./platform_common";
import * as DocumentsFilecabinetTypes from "./documents_filecabinet_types";

const mappingsName = "com_netsuite_webservices_documents_filecabinet_2019_2";

export class FileSiteCategoryList extends SoapTypes.Base {
  siteCategory?: FileSiteCategory[];
  replaceAll?: boolean;
  constructor(props: FileSiteCategoryList) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.siteCategory = props.siteCategory;
    this.replaceAll = props.replaceAll;
  }
}

export class FileSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: FileSearch;
  columns?: FileSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: FileSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}

export class FileSiteCategory extends SoapTypes.Base {
  isDefault?: boolean;
  category?: PlatformCore.RecordRef;
  categoryDescription?: string;
  website?: PlatformCore.RecordRef;
  constructor(props: FileSiteCategory) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.isDefault = props.isDefault;
    this.category = props.category;
    this.categoryDescription = props.categoryDescription;
    this.website = props.website;
  }
}

export class FileSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.FileSearchBasic;
  shopperJoin?: PlatformCommon.CustomerSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: FileSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.shopperJoin = props.shopperJoin;
    this.userJoin = props.userJoin;
  }
}

export class FileSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.FileSearchRowBasic;
  shopperJoin?: PlatformCommon.CustomerSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: FileSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.shopperJoin = props.shopperJoin;
    this.userJoin = props.userJoin;
  }
}

export class FolderSearchRow extends PlatformCore.SearchRow {
  basic?: PlatformCommon.FolderSearchRowBasic;
  fileJoin?: PlatformCommon.FileSearchRowBasic;
  userJoin?: PlatformCommon.EmployeeSearchRowBasic;
  constructor(props: FolderSearchRow) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.fileJoin = props.fileJoin;
    this.userJoin = props.userJoin;
  }
}

export class File extends PlatformCore.Record {
  name?: string;
  attachFrom?: DocumentsFilecabinetTypes.FileAttachFrom;
  mediaTypeName?: string;
  fileType?: DocumentsFilecabinetTypes.MediaType;
  content?: SoapTypes.Base64Binary;
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
  lastModifiedDate?: SoapTypes.Dateish;
  createdDate?: SoapTypes.Dateish;
  siteCategoryList?: FileSiteCategoryList;
  internalId?: string;
  externalId?: string;
  constructor(props: File) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.attachFrom = props.attachFrom;
    this.mediaTypeName = props.mediaTypeName;
    this.fileType = props.fileType;
    this.content = props.content;
    this.folder = props.folder;
    this.fileSize = props.fileSize;
    this.url = props.url;
    this.urlComponent = props.urlComponent;
    this.mediaFile = props.mediaFile;
    this.textFileEncoding = props.textFileEncoding;
    this.description = props.description;
    this.encoding = props.encoding;
    this.altTagCaption = props.altTagCaption;
    this.isOnline = props.isOnline;
    this.isInactive = props.isInactive;
    this.clazz = props.clazz;
    this.bundleable = props.bundleable;
    this.department = props.department;
    this.hideInBundle = props.hideInBundle;
    this.isPrivate = props.isPrivate;
    this.owner = props.owner;
    this.caption = props.caption;
    this.storeDisplayThumbnail = props.storeDisplayThumbnail;
    this.siteDescription = props.siteDescription;
    this.featuredDescription = props.featuredDescription;
    this.lastModifiedDate = props.lastModifiedDate;
    this.createdDate = props.createdDate;
    this.siteCategoryList = props.siteCategoryList;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class Folder extends PlatformCore.Record {
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
  constructor(props: Folder) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.name = props.name;
    this.department = props.department;
    this.description = props.description;
    this.isInactive = props.isInactive;
    this.isPrivate = props.isPrivate;
    this.bundleable = props.bundleable;
    this.hideInBundle = props.hideInBundle;
    this.isOnline = props.isOnline;
    this.group = props.group;
    this.parent = props.parent;
    this.folderType = props.folderType;
    this.clazz = props.clazz;
    this.location = props.location;
    this.subsidiary = props.subsidiary;
    this.internalId = props.internalId;
    this.externalId = props.externalId;
  }
}

export class FolderSearch extends PlatformCore.SearchRecord {
  basic?: PlatformCommon.FolderSearchBasic;
  fileJoin?: PlatformCommon.FileSearchBasic;
  userJoin?: PlatformCommon.EmployeeSearchBasic;
  constructor(props: FolderSearch) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.basic = props.basic;
    this.fileJoin = props.fileJoin;
    this.userJoin = props.userJoin;
  }
}

export class FolderSearchAdvanced extends PlatformCore.SearchRecord {
  criteria?: FolderSearch;
  columns?: FolderSearchRow;
  savedSearchId?: string;
  savedSearchScriptId?: string;
  constructor(props: FolderSearchAdvanced) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.criteria = props.criteria;
    this.columns = props.columns;
    this.savedSearchId = props.savedSearchId;
    this.savedSearchScriptId = props.savedSearchScriptId;
  }
}
