import path from "path";
import TypeGenerator, { FileMappingsLoader, FileWriter } from "../src/type-gen";

const ROOT_DIR = path.dirname(__dirname);

const netSuitBasePath = `${ROOT_DIR}/src/netsuite_webservices/2019_2`;
const mappingsDir = `${netSuitBasePath}/__mappings/`;

const nsGenerator = new TypeGenerator(
  new FileMappingsLoader(mappingsDir),
  new FileWriter(netSuitBasePath)
);
nsGenerator.generateTypesFromMappings();

// TODO: run the generator for the XML Soap types
// const xmlSoapBasePath = `${ROOT_DIR}/src/xmlsoap`;
// const soapGenerator = new TypeGenerator(xmlSoapBasePath);
// soapGenerator.generateTypesFromMappings();
