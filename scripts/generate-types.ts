import fs from "fs";
import path from "path";
import TypeGenerator from "../src/util/type-gen";

const ROOT_DIR = path.dirname(__dirname);
const BASE_PATH = `${ROOT_DIR}/src/netsuite_webservices/2019_2`;
const MAPPINGS_DIR = `${BASE_PATH}/__mappings/`;

const generator = new TypeGenerator(MAPPINGS_DIR, `${BASE_PATH}/`);

const mappingModules = fs
  .readdirSync(MAPPINGS_DIR, { withFileTypes: true })
  .filter((item) => item.name.endsWith(".js"))
  .map((item) => item.name.replace(/\.js$/, ""));

mappingModules.forEach((mappingName) => generator.generateTypes(mappingName));
