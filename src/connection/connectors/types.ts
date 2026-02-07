import type { Socket } from "node:net";
import type { ConnectionOptions } from "../types";

export type Connector = {
  connect(options: ConnectionOptions): Promise<Socket>;
};
