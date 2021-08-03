// Because axios doesn't declare the types
declare module "axios/lib/adapters/http" {
  import { Adapter } from "axios";

  const HttpAdapter: Adapter;

  export default HttpAdapter;
}
