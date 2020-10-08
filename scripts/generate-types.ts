import fs from "fs";
import TypeGenerator from "../src/util/type-gen";

const BASE_PATH = `${__dirname}/../src/netsuite_webservices/2019_2`;
const mappingsDir = `${BASE_PATH}/__mappings/`;
const generator = new TypeGenerator(mappingsDir, `${BASE_PATH}/`);

const mappingModules = fs
  .readdirSync(mappingsDir, { withFileTypes: true })
  .filter((item) => item.name.endsWith(".js"))
  .map((item) => item.name.replace(/\.js$/, ""));

mappingModules.forEach((mappingName) => generator.generateTypes(mappingName));
