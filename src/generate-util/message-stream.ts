import fs from "fs";
import util from "util";
import { FileModule } from "./file-module";

export interface MessageStream {
  writeMsg: (message?: any, ...optionalParams: any[]) => void;
  end: (cb?: () => void) => void;
}

export class MessageStreamFactory {
  static stdoutFactory(targetDirectory: string): (module: FileModule) => MessageStream {
    return (module) => {
      console.log("###  %s%s.ts  ###", targetDirectory, module.fileName);
      return {
        writeMsg: (message = "", ...optionalParams) => {
          process.stdout.write(util.format(message, ...optionalParams) + "\n");
        },
        end: () => {
        },
      };
    };
  }

  static fileFactory(targetDirectory: string): (module: FileModule) => MessageStream {
    fs.mkdirSync(targetDirectory, { recursive: true });
    return function (module) {
      console.log("###  %s%s.ts  ###", targetDirectory, module.fileName);
      const writable = fs.createWriteStream(`${targetDirectory}${module.fileName}.ts`);
      return {
        writeMsg: (message = "", ...optionalParams) => {
          writable.write(util.format(message, ...optionalParams) + "\n");
        },
        end: (cb) => {
          writable.end(cb);
        },
      };
    };
  }
}
