import { EventEmitter } from "node:events";

export class TypedEventEmitter<T> {
  private readonly emitter = new EventEmitter();

  getEmitter(): TypedEventEmitter<T> {
    return this;
  }

  on<K extends keyof T>(event: K, listener: T[K]): this {
    this.emitter.on(event as string, listener as (...args: unknown[]) => void);
    return this;
  }

  once<K extends keyof T>(event: K, listener: T[K]): this {
    this.emitter.once(event as string, listener as (...args: unknown[]) => void);
    return this;
  }

  off<K extends keyof T>(event: K, listener?: T[K]): this {
    if (!listener) {
      return this;
    }
    this.emitter.off(event as string, listener as (...args: unknown[]) => void);
    return this;
  }

  emit<K extends keyof T>(
    event: K,
    ...args: T[K] extends (...args: infer P) => unknown ? P : never
  ): boolean {
    return this.emitter.emit(event as string, ...args);
  }

  removeAllListeners<K extends keyof T>(event?: K): this {
    if (typeof event === "undefined") {
      this.emitter.removeAllListeners();
      return this;
    }

    this.emitter.removeAllListeners(event as string);
    return this;
  }
}
