type PendingEntry<T> = {
  resolve: (value: T) => void;
  reject: (reason?: unknown) => void;
  timeout: NodeJS.Timeout;
};

/**
 * Generic manager for pending requests keyed by K, resolving T.
 * Automatically handles timeouts and cleanup.
 */
export default class PendingRequestMap<K, T> {
  private map = new Map<K, PendingEntry<T>>();

  constructor(private readonly timeout: number) {
    if (timeout < 10_000 || timeout > 60_000) {
      throw new Error("Timeout must be between 10_000 and 60_000 ms");
    }
  }

  /**
   * Adds a new pending request for the given key.
   * @param key - The unique key for the request.
   * @returns A promise that resolves when the request is completed.
   */
  public add(key: K): Promise<T> {
    if (this.map.has(key)) {
      const errorMsg = `Pending request for key already exists: ${key}`;
      throw new Error(errorMsg);
    }

    return new Promise<T>((resolve, reject) => {
      const timeout = setTimeout(() => {
        if (!this.map.has(key)) {
          return; // Already resolved/rejected
        }
        this.map.delete(key);
        const msg = `Timeout waiting for response for key: ${key} after ${this.timeout}ms`;
        reject(new Error(msg));
      }, this.timeout);

      this.map.set(key, { resolve, reject, timeout });
    });
  }

  /**
   * Resolves the pending request for the given key with the provided value.
   * @param key - The key of the request to resolve.
   * @param value - The value to resolve the promise with.
   * @returns True if the request was found and resolved, false otherwise.
   */
  public resolve(key: K, value: T): boolean {
    const entry = this.map.get(key);
    if (!entry) {
      return false;
    }
    clearTimeout(entry.timeout);
    entry.resolve(value);
    this.map.delete(key);
    return true;
  }

  public reject(key: K, error: Error): boolean {
    const entry = this.map.get(key);
    if (!entry) {
      return false;
    }
    clearTimeout(entry.timeout);
    entry.reject(error);
    this.map.delete(key);
    return true;
  }

  public cleanUp(error: Error): void {
    for (const [_key, entry] of this.map) {
      clearTimeout(entry.timeout);
      entry.reject(error);
    }
    this.map.clear();
  }

  public size(): number {
    return this.map.size;
  }

  public pendingKeys(): K[] {
    return [...this.map.keys()];
  }
}
