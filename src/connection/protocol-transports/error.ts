import ConnectionError from "../error";

export default class TransportError extends ConnectionError {
  constructor(messageOrCause: string | unknown, cause?: unknown) {
    super(messageOrCause, "transport", cause);
  }
}
