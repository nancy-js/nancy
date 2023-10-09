import { uniqueId } from "lodash-es";
import os from "os";
import path from "path";
import { KeyringBackend } from "./utils/types.js";

export type GlobalFlags = {
  /**
   * The logging format (json|plain) (default "plain")
   * @default "plain"
   */
  logFormat: "json" | "plain";
  /**
   * The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
   * @default "info"
   */
  logLevel:
    | "trace"
    | "debug"
    | "info"
    | "warn"
    | "error"
    | "fatal"
    | "panic";
  /**
   * print out full stack trace on errors
   */
  trace: boolean;

  /**
   * Output format (text|json) (default "text")
   * @default "text"
   */
  output: "text" | "json";

  /**
   * The application home directory (default "/Users/juliaortiz/.nancy")
   * @default "/Users/juliaortiz/.nancy"
   */
  home: string;

  /**
   * Select keyring's backend (os|file|kwallet|pass|test|memory) (default "test")
   * @default "test"
   */
  keyringBackend: KeyringBackend;

  /**
   * The client Keyring directory; if omitted, the default 'home' directory will be used
   */
  keyringDir: string;
};
export const GLOBAL_FLAGS = [
  "logFormat",
  "logLevel",
  "trace",
  "output",
  "home",
  "keyringBackend",
  "keyringDir",
] as const;

export const createConfig = (
  options: {
    executablePath: string;
    moniker?: string;
    chainId: string;
    home?: string;
    keyringBackend?: KeyringBackend;
    logLevel?: string;
    output?: "text" | "json";
    logFormat?: "plain" | "json";
  } & Partial<GlobalFlags>,
) => {
  const {
    executablePath,
    moniker = uniqueId("node-"),
    chainId,
    home = path.join(os.tmpdir(), chainId, moniker),
    keyringBackend = "test",
    output = "json",
    logFormat = "json",
    logLevel,
  } = options;
  return {
    executablePath,
    defaultArgs: {
      chainId,
      moniker,
      home,
      keyringBackend,
      logLevel,
      output,
      logFormat,
    },
  };
};

export type DConfig = ReturnType<typeof createConfig>;
