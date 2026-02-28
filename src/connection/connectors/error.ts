import ConnectionError from "../error";

export default class ConnectorError extends ConnectionError {
  constructor(messageOrCause: string | unknown, cause?: unknown) {
    super(messageOrCause, "connector", cause);
  }
}
