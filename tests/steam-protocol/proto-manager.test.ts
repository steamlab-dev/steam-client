import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import protobuf from "protobufjs";
import { afterEach, describe, expect, it, vi } from "vitest";
import { findFilesRecursive } from "@/common/utils";
import ProtoManager, { SteamProtoError } from "@/steam-protocol/proto-manager";

vi.mock("@/common/utils", () => ({
  findFilesRecursive: vi.fn(),
  pathExists: vi.fn().mockResolvedValue(true),
}));

describe("ProtoManager", () => {
  const tempDirs: string[] = [];

  afterEach(() => {
    vi.restoreAllMocks();
    for (const dir of tempDirs) {
      rmSync(dir, { recursive: true, force: true });
    }
    tempDirs.length = 0;
  });

  it("throws when no proto files are found", async () => {
    const manager = new ProtoManager("steam") as unknown as {
      loadProtos: () => Promise<unknown>;
      resolveProtoPath: () => Promise<string>;
    };

    vi.spyOn(manager, "resolveProtoPath").mockResolvedValue("/tmp/protos");
    vi.mocked(findFilesRecursive).mockResolvedValue([]);

    await expect(manager.loadProtos()).rejects.toThrow(SteamProtoError);
    await expect(manager.loadProtos()).rejects.toMatchObject({ subsystem: "context" });
    await expect(manager.loadProtos()).rejects.toThrow(
      "No .proto files found in the specified path/namespace.",
    );
  });

  it("resolves local and google/protobuf imports through path resolver", () => {
    const manager = new ProtoManager("steam") as unknown as {
      createPathResolver: (basePath: string) => (origin: string, target: string) => string;
    };

    const root = mkdtempSync(path.join(tmpdir(), "steam-proto-manager-"));
    tempDirs.push(root);

    const originDir = path.join(root, "steam");
    const localTarget = path.join(originDir, "foo.proto");
    const googleTarget = path.join(root, "google/protobuf/timestamp.proto");

    mkdirSync(path.dirname(localTarget), { recursive: true });
    mkdirSync(path.dirname(googleTarget), { recursive: true });
    writeFileSync(localTarget, 'syntax = "proto3";');
    writeFileSync(googleTarget, 'syntax = "proto3";');

    const resolver = manager.createPathResolver(root);

    expect(resolver(path.join(originDir, "bar.proto"), "foo.proto")).toBe(localTarget);
    expect(resolver(path.join(originDir, "bar.proto"), "google/protobuf/timestamp.proto")).toBe(
      googleTarget,
    );
  });

  it("supports short-name fallback lookup for proto types", () => {
    const manager = new ProtoManager("steam") as unknown as {
      loaded: boolean;
      protoCache: Map<string, unknown>;
      encode: (protoName: string, body: Record<string, unknown>) => Buffer;
    };

    const fakeType = {
      fields: {},
      verify: vi.fn().mockReturnValue(null),
      create: vi.fn((body: Record<string, unknown>) => body),
      encode: vi.fn().mockReturnValue({ finish: () => Buffer.from([1, 2, 3]) }),
    };

    manager.loaded = true;
    manager.protoCache = new Map([["steam.CMsgProtoBufHeader", fakeType]]);

    const encoded = manager.encode("CMsgProtoBufHeader", { hello: "world" });

    expect(encoded).toEqual(Buffer.from([1, 2, 3]));
  });

  it("wraps encode/decode failures with SteamProtoError", () => {
    const manager = new ProtoManager("steam") as unknown as {
      loaded: boolean;
      protoCache: Map<string, unknown>;
      encode: (protoName: string, body: Record<string, unknown>) => Buffer;
      decode: (protoName: string, buffer: Buffer) => Record<string, unknown>;
    };

    const fakeType = {
      fields: {},
      verify: vi.fn().mockReturnValue(null),
      create: vi.fn(() => {
        throw new Error("encode exploded");
      }),
      encode: vi.fn(),
      decode: vi.fn(() => {
        throw new Error("decode exploded");
      }),
      toObject: vi.fn(),
    };

    manager.loaded = true;
    manager.protoCache = new Map([["steam.CMsgProtoBufHeader", fakeType]]);

    expect(() => manager.encode("CMsgProtoBufHeader", { a: 1 })).toThrow(SteamProtoError);
    expect(() => manager.decode("CMsgProtoBufHeader", Buffer.from([0x01]))).toThrow(
      SteamProtoError,
    );
  });

  it("throws on encode validation failures", () => {
    const manager = new ProtoManager("steam") as unknown as {
      loaded: boolean;
      protoCache: Map<string, unknown>;
      encodeRaw: (protoName: string, body: Record<string, unknown>) => Buffer;
    };

    const fakeType = {
      verify: vi.fn().mockReturnValue("missing required field"),
      create: vi.fn(),
      encode: vi.fn(),
    };

    manager.loaded = true;
    manager.protoCache = new Map([["steam.CMsgProtoBufHeader", fakeType]]);

    expect(() => manager.encodeRaw("CMsgProtoBufHeader", { a: 1 })).toThrow("Validation failed");
  });

  it("throws when getting proto names before loading", () => {
    const manager = new ProtoManager("steam");
    expect(() => manager.getProtoNames()).toThrow(
      "Protocol buffers not loaded. Call loadProtos() first.",
    );
  });

  it("throws for missing or unknown proto types", () => {
    const manager = new ProtoManager("steam") as unknown as {
      loaded: boolean;
      protoCache: Map<string, unknown>;
      encode: (protoName: string, body: Record<string, unknown>) => Buffer;
    };

    const fakeType = {
      verify: vi.fn().mockReturnValue(null),
      create: vi.fn((body: Record<string, unknown>) => body),
      encode: vi.fn().mockReturnValue({ finish: () => Buffer.from([1]) }),
    };

    manager.loaded = true;
    manager.protoCache = new Map([["steam.CMsgProtoBufHeader", fakeType]]);

    expect(() => manager.encode("" as never, { a: 1 })).toThrow("Proto type cannot be undefined.");
    expect(() => manager.encode("UnknownProto", { a: 1 })).toThrow(
      "Protocol buffer type UnknownProto not found",
    );
  });

  it("throws from resolver when local/google proto paths cannot be resolved", () => {
    const manager = new ProtoManager("steam") as unknown as {
      createPathResolver: (basePath: string) => (origin: string, target: string) => string;
    };

    const root = mkdtempSync(path.join(tmpdir(), "steam-proto-manager-missing-"));
    tempDirs.push(root);
    const resolver = manager.createPathResolver(root);

    expect(() => resolver(path.join(root, "steam", "x.proto"), "missing.proto")).toThrow(
      "Could not resolve missing.proto",
    );
    expect(() =>
      resolver(path.join(root, "steam", "x.proto"), "google/protobuf/timestamp.proto"),
    ).toThrow("Could not resolve google/protobuf/timestamp.proto");
  });

  it("loadProtos uses root proto directory when namespace is omitted", async () => {
    const manager = new ProtoManager() as unknown as {
      loadProtos: () => Promise<unknown>;
      resolveProtoPath: () => Promise<string>;
      groupProtosByNamespace: (files: string[], root: string) => Record<string, string[]>;
      getTopLevelProtoFiles: (files: string[]) => Promise<string[]>;
      cacheProtoNamespace: (root: unknown) => void;
      loaded: boolean;
    };

    vi.spyOn(manager, "resolveProtoPath").mockResolvedValue("/tmp/protos");
    vi.mocked(findFilesRecursive).mockResolvedValue(["/tmp/protos/steam/test.proto"]);
    vi.spyOn(manager, "groupProtosByNamespace").mockReturnValue({
      steam: undefined as never,
      webui: ["/tmp/protos/webui/test.proto"],
    });
    vi.spyOn(manager, "getTopLevelProtoFiles").mockResolvedValue([]);
    const cacheSpy = vi.spyOn(manager, "cacheProtoNamespace");

    await manager.loadProtos();

    expect(findFilesRecursive).toHaveBeenCalledWith("/tmp/protos", "proto", [
      path.resolve("/tmp/protos", "google/protobuf"),
    ]);
    expect(cacheSpy).toHaveBeenCalledTimes(1);
    expect(manager.loaded).toBe(true);
  });

  it("normalizes bigint values for encode and decode", () => {
    const manager = new ProtoManager("steam") as unknown as {
      loaded: boolean;
      protoCache: Map<string, protobuf.Type>;
      encode: (protoName: string, body: Record<string, unknown>) => Buffer;
      decode: (protoName: string, buffer: Buffer) => Record<string, unknown>;
      encodeRaw: (protoName: string, body: Record<string, unknown>) => Buffer;
      decodeRaw: (protoName: string, buffer: Buffer) => Record<string, unknown>;
    };

    const root = protobuf.parse(`
      syntax = "proto3";

      message Nested {
        uint64 value = 1;
      }

      message Example {
        uint64 id = 1;
        repeated uint64 ids = 2;
        map<string, uint64> counts = 3;
        Nested nested = 4;
        repeated Nested items = 5;
        map<string, Nested> nested_map = 6;
        bytes payload = 7;
      }
    `).root;

    const exampleType = root.lookupType("Example") as protobuf.Type;
    const payload = {
      id: 1n,
      ids: [2n, 3n],
      counts: { alpha: 4n },
      nested: { value: 5n },
      items: [{ value: 6n }],
      nested_map: { bravo: { value: 7n } },
      payload: Buffer.from([0xde, 0xad, 0xbe, 0xef]),
    };

    manager.loaded = true;
    manager.protoCache = new Map([["steam.Example", exampleType]]);

    const encoded = manager.encode("Example", payload);
    const decoded = manager.decode("Example", encoded);
    const rawEncoded = manager.encodeRaw("Example", {
      ...payload,
      id: 1,
      ids: [2, 3],
      counts: { alpha: 4 },
      nested: { value: 5 },
      items: [{ value: 6 }],
      nested_map: { bravo: { value: 7 } },
    });
    const rawDecoded = manager.decodeRaw("Example", rawEncoded);

    expect(decoded).toMatchObject({
      id: 1n,
      ids: [2n, 3n],
      counts: { alpha: 4n },
      nested: { value: 5n },
      items: [{ value: 6n }],
    });
    expect(Buffer.from(decoded.payload as Uint8Array)).toEqual(
      Buffer.from([0xde, 0xad, 0xbe, 0xef]),
    );

    expect(rawDecoded.id).not.toBe(1n);
  });

  it("wraps encode failures even when payload contains bigint values", () => {
    const manager = new ProtoManager("steam") as unknown as {
      loaded: boolean;
      protoCache: Map<string, unknown>;
      encode: (protoName: string, body: Record<string, unknown>) => Buffer;
    };

    const fakeType = {
      fields: {
        id: { type: "uint64" },
      },
      verify: vi.fn().mockReturnValue(null),
      create: vi.fn(() => {
        throw new Error("encode exploded");
      }),
      encode: vi.fn(),
    };

    manager.loaded = true;
    manager.protoCache = new Map([["steam.CMsgProtoBufHeader", fakeType]]);

    expect(() => manager.encode("CMsgProtoBufHeader", { id: 123n })).toThrow(SteamProtoError);
  });

  it("normalizes Long-like decoded 64-bit values into bigint", () => {
    const manager = new ProtoManager("steam") as unknown as {
      loaded: boolean;
      protoCache: Map<string, protobuf.Type>;
      decode: (protoName: string, buffer: Buffer) => Record<string, unknown>;
    };

    const root = protobuf.parse(`
      syntax = "proto3";

      message Example {
        uint64 id = 1;
      }
    `).root;

    const exampleType = root.lookupType("Example") as protobuf.Type;
    const decodedLongLike = {
      toString: () => "123",
    };

    vi.spyOn(exampleType, "decode").mockReturnValue({} as never);
    vi.spyOn(exampleType, "toObject").mockReturnValue({ id: decodedLongLike });

    manager.loaded = true;
    manager.protoCache = new Map([["steam.Example", exampleType]]);

    expect(manager.decode("Example", Buffer.from([0x01]))).toEqual({ id: 123n });
  });
});
