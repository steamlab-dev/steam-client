/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CMsgClientLANP2PRequestChunks {
  chunk_keys?: CMsgClientLANP2PRequestChunks.ChunkKey[];
}

export namespace CMsgClientLANP2PRequestChunks {
  export interface ChunkKey {
    depot_id?: number;
    sha?: Buffer;
  }
}

export interface CMsgClientLANP2PRequestChunksResponse {
  chunk_responses?: CMsgClientLANP2PRequestChunksResponse.ChunkData[];
}

export namespace CMsgClientLANP2PRequestChunksResponse {
  export interface ChunkData {
    result?: number;
    depot_id?: number;
    sha?: Buffer;
    chunk_data?: Buffer;
    encrypted?: boolean;
    compressed?: boolean;
  }
}

export interface CMsgClientPeerChunkRequest {
  app_id?: number;
  depot_id?: number;
  sha?: Buffer;
  access_token?: Long;
}

export interface CMsgClientPeerChunkResponse {
  result?: number;
  app_id?: number;
  depot_id?: number;
  sha?: Buffer;
  encrypted?: boolean;
  compressed?: boolean;
  chunk_data?: Buffer;
}
