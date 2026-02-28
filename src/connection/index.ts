import Conn from "./connection";

export { default as ConnectionError } from "./error";

import type { ConnectionOptions } from "./types";

const Connection = {
  create: (options: ConnectionOptions) => new Conn(options),
};

export default Connection;
