import path from "path";
import TypeGenerator, { FileWriter } from "../src/util/type-gen";

const ROOT_DIR = path.dirname(__dirname);

const netSuitBasePath = `${ROOT_DIR}/src/netsuite_webservices/2019_2`;
const nsGenerator = new TypeGenerator(
  `${netSuitBasePath}/__mappings/`,
  new FileWriter(netSuitBasePath)
);
nsGenerator.generateTypesFromMappings();

// TODO: run the generator for the XML Soap types
// const xmlSoapBasePath = `${ROOT_DIR}/src/xmlsoap`;
// const soapGenerator = new TypeGenerator(xmlSoapBasePath);
// soapGenerator.generateTypesFromMappings();
