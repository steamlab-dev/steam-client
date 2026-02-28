import { afterEach, describe, expect, it } from "vitest";
import GenericError from "@/common/generic-error";

describe("GenericError", () => {
  const captureStackTrace = Error.captureStackTrace;

  afterEach(() => {
    Error.captureStackTrace = captureStackTrace;
  });

  it("uses an explicit message when only message is provided", () => {
    const error = new GenericError("boom");

    expect(error.message).toBe("boom");
    expect(error.cause).toBeUndefined();
  });

  it("appends cause message when primary message differs", () => {
    const cause = new Error("root");
    const error = new GenericError("outer", cause);

    expect(error.message).toBe("outer: root");
    expect(error.cause).toBe(cause);
  });

  it("does not duplicate a cause message when primary message matches cause", () => {
    const cause = new Error("same");
    const error = new GenericError("same", cause);

    expect(error.message).toBe("same");
  });

  it("does not duplicate message if already present in cause chain", () => {
    const root = new Error("outer");
    const cause = new Error("middle");
    cause.cause = root;

    const error = new GenericError("outer", cause);

    expect(error.message).toBe("outer");
  });

  it("supports constructor mode with cause only", () => {
    const cause = new Error("root");
    const error = new GenericError(cause);

    expect(error.message).toBe("root");
    expect(error.cause).toBe(cause);
  });

  it("normalizes non-error object causes to Error", () => {
    const error = new GenericError("outer", { code: "E_FAIL" });

    expect(error.cause).toBeInstanceOf(Error);
    expect(error.cause?.message).toContain('"code":"E_FAIL"');
  });

  it("falls back to String() when cause serialization throws", () => {
    const cause = {
      toJSON() {
        throw new Error("cannot serialize");
      },
      toString() {
        return "custom-cause";
      },
    };

    const error = new GenericError(cause);

    expect(error.cause?.message).toBe("custom-cause");
  });

  it("uses default message when no message and no cause", () => {
    const error = new GenericError(undefined);

    expect(error.message).toBe("An unknown error occurred");
  });

  it("works when Error.captureStackTrace is unavailable", () => {
    // Cover fallback behavior on runtimes that don't expose captureStackTrace.
    const originalCaptureStackTrace = Error.captureStackTrace;
    (Error as unknown as { captureStackTrace?: typeof Error.captureStackTrace }).captureStackTrace =
      undefined;

    const error = new GenericError("fallback");

    expect(error.message).toBe("fallback");
    expect(error.name).toBe("GenericError");

    Error.captureStackTrace = originalCaptureStackTrace;
  });
});
