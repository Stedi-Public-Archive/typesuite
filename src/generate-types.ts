import fs from "fs";
import { MessageStreamFactory } from "./generate-util/message-stream";
import { TypeEmitter } from "./generate-util/type-emitter";

const mappingsDir = `${__dirname}/netsuite_webservices/2019_2/__mappings/`;
const mappingModules = fs.readdirSync(mappingsDir, { withFileTypes: true })
  .filter(item => !item.isDirectory())
  .filter(item => item.name.startsWith("com_netsuite_webservices_"))
  .filter(item => item.name.endsWith(".js"))
  .map(item => item.name.replace(/\.js$/, ""));
// const mappingModules = ["com_netsuite_webservices_platform_faults_2019_2"];

const emitter = new TypeEmitter(mappingsDir);

const typesDir = `${__dirname}/netsuite_webservices/2019_2/`;
// mappingModules.forEach(mappingName => emitter.emitModule(mappingName, MessageStreamFactory.stdoutFactory(typesDir)));
mappingModules.forEach(mappingName => emitter.emitModule(mappingName, MessageStreamFactory.fileFactory(typesDir)));
