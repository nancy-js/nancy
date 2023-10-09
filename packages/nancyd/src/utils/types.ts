export type Amount = `${number}${string}`;
export type KeyringBackend =
  | "os"
  | "file"
  | "kwallet"
  | "pass"
  | "test";

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
