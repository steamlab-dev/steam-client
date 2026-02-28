import ConnectionError from "../error";

export default class DataSenderError extends ConnectionError {
  constructor(messageOrCause: string | unknown, cause?: unknown) {
    super(messageOrCause, "sender", cause);
  }
}
