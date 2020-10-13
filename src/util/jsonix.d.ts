/* eslint-disable @typescript-eslint/no-explicit-any */

// Adapted and simplied from draft types.
// See https://github.com/highsource/jsonix/blob/master/typescript/src/main/typescript/Jsonix.d.ts.
declare module "jsonix" {
  interface Unmarshaller<T> {
    unmarshalString(arg: string): T;
  }

  interface Marshaller<T> {
    marshalString(object: T): string;
  }

  declare namespace Jsonix {
    export class Context {
      constructor(
        s: any[],
        options: { namespacePrefixes?: { [key: string]: string } } = {}
      );

      createMarshaller<T>(): Marshaller<T>;

      createUnmarshaller<T>(): Unmarshaller<T>;
    }
  }
}
