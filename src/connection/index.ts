import Conn from "./connection";
import type { ConnectionOptions } from "./types";

const Connection = {
  create: (options: ConnectionOptions) => new Conn(options),
};

export default Connection;
