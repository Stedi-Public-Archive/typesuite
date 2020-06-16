export class FileModule {
  readonly mappingsName: string;   // e.g. com_netsuite_webservices_platform_faults_2019_2
  readonly fileName: string;       // e.g. platform_faults
  readonly importName: string;     // e.g. PlatformFaults
  constructor(mappingsName: string) {
    this.mappingsName = mappingsName;
    this.fileName = fileNameForModule(mappingsName);
    this.importName = toPascalCase(this.fileName);
  }
}

function fileNameForModule(moduleName: string): string {
  moduleName = moduleName.replace("com_netsuite_webservices_", "");
  moduleName = moduleName.replace("_2019_2", "");
  return moduleName;
}

function toPascalCase(s: string): string {
  return `_${s}`.replace(/_(\w)/g, (_, group1) => group1.toUpperCase());
}
