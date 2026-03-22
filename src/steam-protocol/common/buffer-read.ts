export interface BufferReadResult<T> {
  value: T;
  offset: number;
}

export type BufferReadErrorFactory = (message: string) => Error;

export function ensureBytesAvailable(
  buffer: Buffer,
  offset: number,
  size: number,
  fieldName: string,
  createError: BufferReadErrorFactory,
): void {
  if (offset + size > buffer.length) {
    throw createError(
      `Malformed message: expected ${size} bytes for ${fieldName} but only ${buffer.length - offset} available`,
    );
  }
}

export function readUInt8(
  buffer: Buffer,
  offset: number,
  fieldName: string,
  createError: BufferReadErrorFactory,
): BufferReadResult<number> {
  ensureBytesAvailable(buffer, offset, 1, fieldName, createError);
  return { value: buffer.readUInt8(offset), offset: offset + 1 };
}

export function readUInt16LE(
  buffer: Buffer,
  offset: number,
  fieldName: string,
  createError: BufferReadErrorFactory,
): BufferReadResult<number> {
  ensureBytesAvailable(buffer, offset, 2, fieldName, createError);
  return { value: buffer.readUInt16LE(offset), offset: offset + 2 };
}

export function readUInt32LE(
  buffer: Buffer,
  offset: number,
  fieldName: string,
  createError: BufferReadErrorFactory,
): BufferReadResult<number> {
  ensureBytesAvailable(buffer, offset, 4, fieldName, createError);
  return { value: buffer.readUInt32LE(offset), offset: offset + 4 };
}

export function readInt32LE(
  buffer: Buffer,
  offset: number,
  fieldName: string,
  createError: BufferReadErrorFactory,
): BufferReadResult<number> {
  ensureBytesAvailable(buffer, offset, 4, fieldName, createError);
  return { value: buffer.readInt32LE(offset), offset: offset + 4 };
}

export function readBigUInt64LE(
  buffer: Buffer,
  offset: number,
  fieldName: string,
  createError: BufferReadErrorFactory,
): BufferReadResult<bigint> {
  ensureBytesAvailable(buffer, offset, 8, fieldName, createError);
  return { value: buffer.readBigUInt64LE(offset), offset: offset + 8 };
}

export function readBytes(
  buffer: Buffer,
  offset: number,
  length: number,
  fieldName: string,
  createError: BufferReadErrorFactory,
): BufferReadResult<Buffer> {
  ensureBytesAvailable(buffer, offset, length, fieldName, createError);
  return { value: buffer.subarray(offset, offset + length), offset: offset + length };
}
