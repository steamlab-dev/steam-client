import fs from "node:fs";
import { readFile } from "node:fs/promises";
import path, { dirname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import type { ReflectionObject } from "protobufjs";
import protobuf from "protobufjs";
import { findFilesRecursive, pathExists } from "@/common/utils";
import { SteamProtocolError } from "./error";

type Namespaces = "steam" | "csgo" | "webui";
type Proto64BitIntegerType = "int64" | "uint64" | "sint64" | "fixed64" | "sfixed64";

const PROTO_64_BIT_INTEGER_TYPES = new Set<Proto64BitIntegerType>([
  "int64",
  "uint64",
  "sint64",
  "fixed64",
  "sfixed64",
]);

export class SteamProtoError extends SteamProtocolError {
  constructor(messageOrCause: string | unknown, cause?: unknown) {
    super(messageOrCause, "context", cause);
  }
}

const GOOGLE_PROTO_DIR = "google/protobuf";
const PROTO_EXTENSION = "proto";

/**
 * Manages the dynamic loading, caching, encoding, and decoding of .proto files
 * for Steam communication using protobuf.js.
 */
export default class ProtoManager {
  private protoCache: Map<string, protobuf.Type> = new Map();
  private loaded: boolean = false;
  private readonly namespace?: Namespaces;

  /**
   * Creates a new SteamProtoManager instance.
   * @param namespace An optional namespace to scope which protos are loaded.
   */
  constructor(namespace?: Namespaces) {
    this.namespace = namespace;
  }

  /**
   * Checks whether the protocol buffer files have been successfully loaded.
   */
  public isLoaded(): boolean {
    return this.loaded;
  }

  /**
   * Loads, parses, and caches all .proto files from the package's protos directory.
   * This method must be called before any encoding or decoding operations.
   * The protos directory is resolved relative to the package root automatically.
   * @throws {SteamProtoError} If protos are already loaded, path is invalid, or no .proto files are found.
   */
  public async loadProtos(): Promise<ProtoManager> {
    if (this.loaded) {
      throw new SteamProtoError("Protos were already loaded");
    }

    const resolvedPath = await this.resolveProtoPath();

    const dir = path.join(resolvedPath, this.namespace ?? "");
    const protoFiles = await findFilesRecursive(dir, PROTO_EXTENSION, [
      path.resolve(resolvedPath, GOOGLE_PROTO_DIR),
    ]);

    if (protoFiles.length === 0) {
      throw new SteamProtoError("No .proto files found in the specified path/namespace.");
    }

    const filesByNs = this.groupProtosByNamespace(protoFiles, resolvedPath);

    for (const ns in filesByNs) {
      const nsFiles = filesByNs[ns];
      if (!nsFiles) {
        continue;
      }
      const files = await this.getTopLevelProtoFiles(nsFiles);
      const root = new protobuf.Root();
      root.resolvePath = this.createPathResolver(resolvedPath);
      try {
        await root.load(files, { keepCase: true });
      } catch (error) {
        throw new SteamProtoError(`Failed loading proto namespace '${ns}'`, error);
      }
      this.cacheProtoNamespace(root);
    }

    this.loaded = true;
    return this;
  }

  /**
   * @private Resolves the proto path relative to the package root.
   */
  private async resolveProtoPath(): Promise<string> {
    // Start from the current module's directory
    let dir = dirname(fileURLToPath(import.meta.url));

    // Walk up until we find package.json
    while (dir !== "/" && dir !== "") {
      const packageJsonPath = path.resolve(dir, "package.json");
      if (await pathExists(packageJsonPath)) {
        return path.resolve(dir, "protos");
      }
      dir = dirname(dir);
    }

    throw new SteamProtoError("Could not find package root. Make sure protos directory exists.");
  }

  private createPathResolver(resolvedPath: string): protobuf.Root["resolvePath"] {
    return (origin: string, target: string) => {
      if (path.isAbsolute(target)) {
        return target;
      }

      const originDir = path.dirname(origin);
      let targetPath = path.resolve(originDir, target);
      if (fs.existsSync(targetPath)) {
        return targetPath;
      }

      if (target.startsWith(GOOGLE_PROTO_DIR)) {
        targetPath = path.join(resolvedPath, target);
        if (fs.existsSync(targetPath)) {
          return targetPath;
        }
      }

      throw new SteamProtoError(`Could not resolve ${target} from ${origin}`);
    };
  }

  /**
   * Verifies and encodes a payload object into a binary buffer using a specified proto definition.
   * @param protoName The fully qualified name of the message type to use for encoding.
   * @param body The JavaScript object to encode.
   * @throws {SteamProtoError} If the payload fails validation or if encoding fails.
   */
  public encodeRaw(protoName: string, body: Record<string, unknown>): Buffer {
    const proto = this.getProtoType(protoName);
    const verified = proto.verify(body);
    if (verified) {
      throw new SteamProtoError(`Validation failed: ${verified}`);
    }

    try {
      const message = proto.create(body);
      return Buffer.from(proto.encode(message).finish());
    } catch (error) {
      throw new SteamProtoError(
        `Encoding failed for ${protoName}, data: ${JSON.stringify(body, null, 2)}`,
        error,
      );
    }
  }

  /**
   * Encodes a payload object using bigint-aware normalization.
   * @param protoName The fully qualified name of the message type to use for encoding.
   * @param body The JavaScript object to encode.
   * @throws {SteamProtoError} If encoding fails.
   */
  public encode(protoName: string, body: Record<string, unknown>): Buffer {
    const proto = this.getProtoType(protoName);
    const normalizedBody = this.normalizeForEncode(proto, body) as Record<string, unknown>;
    try {
      const message = proto.create(normalizedBody);
      return Buffer.from(proto.encode(message).finish());
    } catch (error) {
      throw new SteamProtoError(
        `Encoding failed for ${protoName}, data: ${this.formatValueForError(body)}`,
        error,
      );
    }
  }

  /**
   * Decodes a binary buffer into a JavaScript object using a specified proto definition.
   * @param protoName The fully qualified name of the message type to use for decoding.
   * @param buffer The binary buffer to decode.
   * @throws {SteamProtoError} If decoding fails.
   */
  public decodeRaw(protoName: string, buffer: Buffer): Record<string, unknown> {
    const proto = this.getProtoType(protoName);
    try {
      const message = proto.decode(buffer);
      return proto.toObject(message);
    } catch (error) {
      throw new SteamProtoError(
        `Decoding failed for ${protoName}, data [${buffer.toString("hex")}]`,
        error,
      );
    }
  }

  /**
   * Decodes a binary buffer into a JavaScript object using bigint-aware normalization.
   * @param protoName The fully qualified name of the message type to use for decoding.
   * @param buffer The binary buffer to decode.
   * @throws {SteamProtoError} If decoding fails.
   */
  public decode(protoName: string, buffer: Buffer): Record<string, unknown> {
    const proto = this.getProtoType(protoName);
    try {
      const message = proto.decode(buffer);
      return this.normalizeForDecode(proto, proto.toObject(message)) as Record<string, unknown>;
    } catch (error) {
      throw new SteamProtoError(
        `Decoding failed for ${protoName}, data [${buffer.toString("hex")}]`,
        error,
      );
    }
  }

  /**
   * Retrieves a list of all loaded and cached proto message type names.
   * @throws {SteamProtoError} If protos have not been loaded yet.
   */
  public getProtoNames(): string[] {
    if (!this.loaded) {
      throw new SteamProtoError("Protocol buffers not loaded. Call loadProtos() first.");
    }
    return Array.from(this.protoCache.keys());
  }

  /**
   * @private Retrieves a cached protobuf.Type instance by its name.
   * @throws {SteamProtoError} If protos are not loaded or the type name is not found.
   */
  private getProtoType(protoName: string): protobuf.Type {
    if (!this.loaded) {
      throw new SteamProtoError("Proto types not loaded. Call loadProtos() first.");
    }

    if (!protoName) {
      throw new SteamProtoError("Proto type cannot be undefined.");
    }

    let proto = this.protoCache.get(protoName);
    // Fallback: try finding by short name (e.g., "CMsgProtoBufHeader" -> "steam.CMsgProtoBufHeader")
    if (!proto) {
      const entry = Array.from(this.protoCache.entries()).find(
        ([key]) => key === protoName || key.endsWith(`.${protoName}`),
      );
      if (entry) {
        proto = entry[1];
      }
    }

    if (!proto) {
      const known = Array.from(this.protoCache.keys()).slice(0, 50);
      throw new SteamProtoError(
        `Protocol buffer type ${protoName} not found — known: ${known.join(", ")}`,
      );
    }

    if (
      typeof (proto as protobuf.Type & { resolveAll?: () => unknown }).resolveAll === "function"
    ) {
      proto.resolveAll();
    }
    return proto;
  }

  /**
   * @private Recursively traverses a loaded protobuf.Root and caches all message types.
   */
  private cacheProtoNamespace(obj: ReflectionObject): void {
    if ("nested" in obj && obj.nested) {
      for (const [name, nested] of Object.entries(obj.nested)) {
        if (nested instanceof protobuf.Type) {
          const filePath = nested.filename;
          if (!filePath) {
            throw new SteamProtoError(`Error occurred while caching ${name}`);
          }

          const namespaceDirName = path.basename(path.dirname(filePath));
          if (namespaceDirName === "google" || namespaceDirName === "protobuf") {
            continue;
          }

          const fullName = `${namespaceDirName}.${name}`;
          if (!this.protoCache.has(fullName)) {
            this.protoCache.set(fullName, nested);
          }
        }

        if (nested && typeof nested === "object" && "nested" in nested) {
          // Structural runtime check for nested namespaces / objects
          this.cacheProtoNamespace(nested as unknown as ReflectionObject);
        }
      }
    }
  }

  /**
   * @private Groups a list of file paths by their top-level subdirectory relative to a base path.
   */
  private groupProtosByNamespace(
    protoFiles: string[],
    protoPath: string,
  ): { [key: string]: string[] } {
    const result: { [key: string]: string[] } = {};
    for (const file of protoFiles) {
      const firstSubfolder = path.relative(protoPath, file).split(path.sep)[0];
      if (!firstSubfolder) {
        continue;
      }
      result[firstSubfolder] = result[firstSubfolder] || [];
      result[firstSubfolder].push(file);
    }
    return result;
  }

  /**
   * @private Analyzes proto files to find which ones are not imported by any other files,
   * identifying them as top-level definitions for loading.
   */
  private async getTopLevelProtoFiles(protoPaths: string[]): Promise<string[]> {
    const importPromises = protoPaths.map(async (file) => {
      const dir = dirname(file);
      const src = await readFile(file, "utf8");
      return [...src.matchAll(/^\s*import\s+"([^"]+)";/gm)]
        .map((match) => match[1])
        .filter((imp): imp is string => Boolean(imp))
        .map((imp) => normalize(join(dir, imp)));
    });

    const importArrays = await Promise.all(importPromises);
    const imported = new Set(importArrays.flat());

    return protoPaths.map(normalize).filter((file) => !imported.has(file));
  }

  private normalizeForEncode(type: protobuf.Type, input: unknown): unknown {
    if (this.isBinaryLike(input) || !input || typeof input !== "object") {
      return input;
    }

    const out = { ...(input as Record<string, unknown>) };

    for (const [key, value] of Object.entries(out)) {
      if (value == null) {
        continue;
      }

      const field = type.fields[key];
      if (field) {
        out[key] = this.encodeField(field, value);
      }
    }

    return out;
  }

  private encodeField(field: protobuf.Field, value: unknown): unknown {
    if (field.repeated && Array.isArray(value)) {
      return value.map((item) => this.encodeSingle(field, item));
    }

    if (field.map && this.isPlainObject(value)) {
      return Object.fromEntries(
        Object.entries(value).map(([key, entry]) => [key, this.encodeSingle(field, entry)]),
      );
    }

    return this.encodeSingle(field, value);
  }

  private encodeSingle(field: protobuf.Field, value: unknown): unknown {
    if (value == null) {
      return value;
    }

    if (field.resolvedType instanceof protobuf.Type) {
      return this.normalizeForEncode(field.resolvedType, value);
    }

    if (this.is64BitIntegerField(field) && typeof value === "bigint") {
      return value.toString();
    }

    return value;
  }

  private normalizeForDecode(type: protobuf.Type, input: unknown): unknown {
    if (this.isBinaryLike(input) || !input || typeof input !== "object") {
      return input;
    }

    const out = { ...(input as Record<string, unknown>) };

    for (const [key, value] of Object.entries(out)) {
      if (value == null) {
        continue;
      }

      const field = type.fields[key];
      if (field) {
        out[key] = this.decodeField(field, value);
      }
    }

    return out;
  }

  private decodeField(field: protobuf.Field, value: unknown): unknown {
    if (field.repeated && Array.isArray(value)) {
      return value.map((item) => this.decodeSingle(field, item));
    }

    if (field.map && this.isPlainObject(value)) {
      return Object.fromEntries(
        Object.entries(value).map(([key, entry]) => [key, this.decodeSingle(field, entry)]),
      );
    }

    return this.decodeSingle(field, value);
  }

  private decodeSingle(field: protobuf.Field, value: unknown): unknown {
    if (value == null) {
      return value;
    }

    if (field.resolvedType instanceof protobuf.Type) {
      return this.normalizeForDecode(field.resolvedType, value);
    }

    if (!this.is64BitIntegerField(field)) {
      return value;
    }

    if (typeof value === "string") {
      return BigInt(value);
    }

    if (typeof value === "number") {
      if (!Number.isSafeInteger(value)) {
        throw new SteamProtoError("Unsafe 64-bit integer represented as number during decode");
      }
      return BigInt(value);
    }

    if (this.hasStringRepresentation(value)) {
      return BigInt(value.toString());
    }

    return value;
  }

  private is64BitIntegerField(field: protobuf.Field): boolean {
    return PROTO_64_BIT_INTEGER_TYPES.has(field.type as Proto64BitIntegerType);
  }

  private isPlainObject(value: unknown): value is Record<string, unknown> {
    return (
      !!value && typeof value === "object" && !Array.isArray(value) && !this.isBinaryLike(value)
    );
  }

  private isBinaryLike(value: unknown): value is Uint8Array {
    return Buffer.isBuffer(value) || value instanceof Uint8Array;
  }

  private hasStringRepresentation(value: unknown): value is { toString(): string } {
    return typeof value === "object" && value !== null && typeof value.toString === "function";
  }

  private formatValueForError(value: unknown): string {
    const seen = new WeakSet<object>();

    return (
      JSON.stringify(
        value,
        (_key, currentValue: unknown) => {
          if (typeof currentValue === "bigint") {
            return currentValue.toString();
          }

          if (Buffer.isBuffer(currentValue)) {
            return `Buffer<${currentValue.toString("hex")}>`;
          }

          if (currentValue instanceof Uint8Array) {
            return `Uint8Array<${Buffer.from(currentValue).toString("hex")}>`;
          }

          if (typeof currentValue === "object" && currentValue !== null) {
            if (seen.has(currentValue)) {
              return "[Circular]";
            }
            seen.add(currentValue);
          }

          return currentValue;
        },
        2,
      ) ?? String(value)
    );
  }
}
