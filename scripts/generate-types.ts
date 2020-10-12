import fs from "fs";
import path from "path";
import TypeGenerator from "../src/util/type-gen";

function generateTypes(basePath: string, mappingsDir: string) {
  const generator = new TypeGenerator(mappingsDir, `${basePath}/`);

  const mappingModules = fs
    .readdirSync(mappingsDir, { withFileTypes: true })
    .map((item) => item.name.replace(/\.js$/, ""));
  mappingModules.forEach((mappingName) => generator.generateTypes(mappingName));
}

const ROOT_DIR = path.dirname(__dirname);
const netSuitBasePath = `${ROOT_DIR}/src/netsuite_webservices/2019_2`;
const netSuiteMappings = `${netSuitBasePath}/__mappings/`;
generateTypes(netSuitBasePath, netSuiteMappings);

// TODO: run the generator for the XML Soap types
// const xmlSoapBasePath = `${ROOT_DIR}/src/xmlsoap`;
// const xmlSoapMappings = `${xmlSoapBasePath}/__mappings/`;
// generateTypes(xmlSoapBasePath, xmlSoapMappings);
