/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export type CShader_GetShaderReportingCadence_Request = Record<string, never>;

export interface CShader_GetShaderReportingCadence_Response {
  rereport_time_threshold?: Long;
  percent_to_rereport?: number;
}

export interface CShader_RegisterShader_Request {
  appid?: number;
  gpu_desc?: string;
  driver_desc?: string;
  shaders?: CShader_RegisterShader_Request.Shader[];
}

export namespace CShader_RegisterShader_Request {
  export interface Shader {
    cache_key_sha?: Buffer;
    shader_code_sha?: Buffer;
  }
}

export interface CShader_RegisterShader_Response {
  requested_codeids?: number[];
}

export interface CShader_SendShader_Request {
  appid?: number;
  shaders?: CShader_SendShader_Request.ShaderCode[];
}

export namespace CShader_SendShader_Request {
  export interface ShaderCode {
    shader_code_sha?: Buffer;
    shader_code?: Buffer;
  }
}

export type CShader_SendShader_Response = Record<string, never>;

export interface CShader_GetBucketManifest_Request {
  appid?: number;
  gpu_desc?: string;
  driver_desc?: string;
}

export interface CShader_GetBucketManifest_Response {
  manifestid?: Long;
  depotsize?: Long;
  bucketid?: Long;
}

export interface CShader_GetStaleBucket_Request {
  gpu_desc?: string;
  driver_desc?: string;
}

export interface CShader_GetStaleBucket_Response {
  bucketid?: Long;
  appid?: number;
  manifestid?: Long;
  gpu_desc?: string;
  driver_desc?: string;
  depot_encryption_key?: Buffer;
}

export interface CShader_ReportExternalBuild_Request {
  appid?: number;
  gpu_desc?: string;
  driver_desc?: string;
  manifestid?: Long;
  source_gpu_desc?: string;
  source_driver_desc?: string;
  depotsize?: Long;
}

export type CShader_ReportExternalBuild_Response = Record<string, never>;

export abstract class ShaderService {
  abstract GetShaderReportingCadence(
    request: CShader_GetShaderReportingCadence_Request,
  ): Promise<CShader_GetShaderReportingCadence_Response>;
  abstract RegisterShader(
    request: CShader_RegisterShader_Request,
  ): Promise<CShader_RegisterShader_Response>;
  abstract SendShader(request: CShader_SendShader_Request): Promise<CShader_SendShader_Response>;
  abstract GetBucketManifest(
    request: CShader_GetBucketManifest_Request,
  ): Promise<CShader_GetBucketManifest_Response>;
  abstract GetStaleBucket(
    request: CShader_GetStaleBucket_Request,
  ): Promise<CShader_GetStaleBucket_Response>;
  abstract ReportExternalBuild(
    request: CShader_ReportExternalBuild_Request,
  ): Promise<CShader_ReportExternalBuild_Response>;
}
