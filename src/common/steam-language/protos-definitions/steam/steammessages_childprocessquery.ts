/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { EGpuDriverId } from "./enums";

export interface CMsgChildProcessQueryResponse {
  response?: { gpu_topology: CMsgChildProcessQueryGpuTopology };
}

export interface CMsgChildProcessQueryGpuTopology {
  gpus?: CMsgChildProcessQueryGpuTopology.GpuInfo[];
  default_gpu_id?: number;
}

export namespace CMsgChildProcessQueryGpuTopology {
  export interface GpuInfo {
    id?: number;
    name?: string;
    vram_size_bytes?: Long;
    driver_id?: EGpuDriverId;
    driver_version_major?: number;
    driver_version_minor?: number;
    driver_version_patch?: number;
    luid?: Long;
  }
}
