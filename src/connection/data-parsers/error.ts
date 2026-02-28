import ConnectionError from "../error";

export default class DataParserError extends ConnectionError {
  constructor(messageOrCause: string | unknown, cause?: unknown) {
    super(messageOrCause, "parser", cause);
  }
}
