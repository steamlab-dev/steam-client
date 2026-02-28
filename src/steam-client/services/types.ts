export type RequireSome<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
