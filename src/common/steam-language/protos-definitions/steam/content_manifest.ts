/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const EContentDeltaChunkDataLocation = {
  k_EContentDeltaChunkDataLocationInProtobuf: 0,
  k_EContentDeltaChunkDataLocationAfterProtobuf: 1,
} as const;

export type EContentDeltaChunkDataLocation =
  (typeof EContentDeltaChunkDataLocation)[keyof typeof EContentDeltaChunkDataLocation];

export interface ContentManifestPayload {
  mappings?: ContentManifestPayload.FileMapping[];
}

export namespace ContentManifestPayload {
  export interface FileMapping {
    filename?: string;
    size?: Long;
    flags?: number;
    sha_filename?: Buffer;
    sha_content?: Buffer;
    linktarget?: string;
  }

  export namespace FileMapping {
    export interface ChunkData {
      sha?: Buffer;
      crc?: number;
      offset?: Long;
      cb_original?: number;
      cb_compressed?: number;
    }
  }
}

export interface ContentManifestMetadata {
  depot_id?: number;
  gid_manifest?: Long;
  creation_time?: number;
  filenames_encrypted?: boolean;
  cb_disk_original?: Long;
  cb_disk_compressed?: Long;
  unique_chunks?: number;
  crc_encrypted?: number;
  crc_clear?: number;
}

export interface ContentManifestSignature {
  signature?: Buffer;
}

export interface ContentDeltaChunks {
  depot_id?: number;
  manifest_id_source?: Long;
  manifest_id_target?: Long;
  deltaChunks?: ContentDeltaChunks.DeltaChunk[];
  chunk_data_location?: EContentDeltaChunkDataLocation;
}

export namespace ContentDeltaChunks {
  export interface DeltaChunk {
    sha_source?: Buffer;
    sha_target?: Buffer;
    size_original?: number;
    patch_method?: number;
    chunk?: Buffer;
    size_delta?: number;
  }
}
