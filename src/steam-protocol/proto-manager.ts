import fs from "node:fs";
import { readFile } from "node:fs/promises";
import path, { dirname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import type { ReflectionObject } from "protobufjs";
import protobuf from "protobufjs";
import GenericError from "@/common/generic-error";
import { findFilesRecursive, pathExists } from "@/common/utils";

type Namespaces = "steam" | "csgo" | "webui";

export class SteamProtoError extends GenericError {}

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
    const protoFiles = await findFilesRecursive(dir, "proto", [
      path.resolve(resolvedPath, "google/protobuf"),
    ]);

    if (protoFiles.length === 0) {
      throw new SteamProtoError("No .proto files found in the specified path/namespace.");
    }

    const filesByNs = this.groupProtosByNamespace(protoFiles, resolvedPath);

    const resolvePath = (origin: string, target: string) => {
      if (path.isAbsolute(target)) {
        return target;
      }

      const originDir = path.dirname(origin);
      let targetPath = path.resolve(originDir, target);
      if (fs.existsSync(targetPath)) {
        return targetPath;
      }

      if (target.startsWith("google/protobuf")) {
        targetPath = path.join(resolvedPath, target);
        if (fs.existsSync(targetPath)) {
          return targetPath;
        }
      }

      throw new SteamProtoError(`Could not resolve ${target} from ${origin}`);
    };

    for (const ns in filesByNs) {
      const nsFiles = filesByNs[ns];
      if (!nsFiles) {
        continue;
      }
      const files = await this.getTopLevelProtoFiles(nsFiles);
      const root = new protobuf.Root();
      root.resolvePath = resolvePath;
      await root.load(files, { keepCase: true });
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

  /**
   * Verifies and encodes a payload object into a binary buffer using a specified proto definition.
   * @param protoName The fully qualified name of the message type to use for encoding.
   * @param body The JavaScript object to encode.
   * @throws {SteamProtoError} If the payload fails validation or if encoding fails.
   */
  public encode(protoName: string, body: Record<string, unknown>): Buffer {
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
   * Encodes a payload object without performing validation. Use for trusted data to improve performance.
   * @param protoName The fully qualified name of the message type to use for encoding.
   * @param body The JavaScript object to encode.
   * @throws {SteamProtoError} If encoding fails.
   */
  public encodeUnsafe(protoName: string, body: Record<string, unknown>): Buffer {
    const proto = this.getProtoType(protoName);
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
   * Decodes a binary buffer into a JavaScript object using a specified proto definition.
   * @param protoName The fully qualified name of the message type to use for decoding.
   * @param buffer The binary buffer to decode.
   * @throws {SteamProtoError} If decoding fails.
   */
  public decode(protoName: string, buffer: Buffer): Record<string, unknown> {
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
}
