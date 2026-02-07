export default class GenericError extends Error {
  public override cause?: Error;

  /**
   * Creates a new GenericError.
   * Can be instantiated in two ways:
   * - new GenericError(message: string, cause?: unknown)
   * - new GenericError(cause: unknown)
   */
  constructor(messageOrCause: string | unknown, cause?: unknown) {
    // 1. Determine the primary message and the initial cause from arguments.
    const isMessageProvided = typeof messageOrCause === "string";
    const primaryMessage = isMessageProvided ? messageOrCause : undefined;
    const initialCause = isMessageProvided ? cause : messageOrCause;

    // 2. Normalize the cause into a proper Error object.
    const normalizedCause = GenericError._normalizeCause(initialCause);

    // 3. Construct the final error message.
    let finalMessage = primaryMessage ?? normalizedCause?.message ?? "An unknown error occurred";

    // Append cause's message only if a primary message was explicitly provided
    // and the cause's message is meaningful and not redundant.
    if (
      primaryMessage &&
      normalizedCause?.message &&
      primaryMessage !== normalizedCause.message &&
      !GenericError._isMessageInCauseChain(normalizedCause, primaryMessage)
    ) {
      finalMessage = `${primaryMessage}: ${normalizedCause.message}`;
    }

    // 4. Call the super constructor with the final message and cause.
    super(finalMessage, { cause: normalizedCause });
    this.name = new.target.name;
    this.cause = normalizedCause;

    // 5. Preserve the original stack trace behavior.
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, new.target);
    }
  }

  /**
   * Helper to ensure the cause is an Error object.
   */
  private static _normalizeCause(potentialCause: unknown): Error | undefined {
    if (potentialCause instanceof Error) {
      return potentialCause;
    }
    if (potentialCause !== undefined && potentialCause !== null) {
      const message = (() => {
        if (typeof potentialCause === "string") {
          return potentialCause;
        }
        try {
          return JSON.stringify(potentialCause);
        } catch {
          return String(potentialCause);
        }
      })();
      return new Error(message);
    }
    return undefined;
  }

  /**
   * Helper to check if a target message is already present in the cause chain.
   */
  private static _isMessageInCauseChain(err: Error, target: string): boolean {
    let current: Error | undefined = err;
    while (current) {
      if (current.message === target) {
        return true;
      }
      current = current.cause instanceof Error ? current.cause : undefined;
    }
    return false;
  }
}
