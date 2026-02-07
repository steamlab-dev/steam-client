import type { ConnectionOptions } from "../types";
import DirectConnector from "./direct-connector";
import ConnectorError from "./error";
import HttpProxyConnector from "./http-proxy-connector";
import Socks4ProxyConnector from "./Socks4-proxy-connector";
import Socks5ProxyConnector from "./Socks5-proxy-connector";
import type { Connector } from "./types";

/**
 * A static factory for creating a connector instance based on the provided connection options.
 * This class cannot be instantiated.
 */
export default class ConnectorFactory {
  private constructor() {}

  private static readonly PROXY_CONNECTOR_MAP = {
    http: HttpProxyConnector,
    socks4: Socks4ProxyConnector,
    socks5: Socks5ProxyConnector,
  } as const;

  /**
   * Creates and returns a connector instance. It returns a direct connector
   * if no proxy is specified, or the appropriate proxy connector otherwise.
   * @throws {ConnectorError} If an unsupported proxy protocol is specified.
   */
  public static create(options: ConnectionOptions): Connector {
    if (!options.proxy) {
      return DirectConnector;
    }

    const Connector = ConnectorFactory.PROXY_CONNECTOR_MAP[options.proxy.protocol];
    if (!Connector) {
      throw new ConnectorError(`Unsupported proxy protocol: ${options.proxy.protocol}`);
    }

    return Connector;
  }
}
