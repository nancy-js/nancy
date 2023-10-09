// Usage:
//   nancyd gentx [key_name] [amount] [flags]

import { spawn } from "bun";
import { DConfig, GlobalFlags } from "../createConfig.js";
import { toCliArgs } from "../utils/toCliArgs.js";
import { readStd } from "../utils/readStd.js";
import { pick } from "lodash-es";
// Usage:
//   nancyd collect-gentxs [flags]

// Flags:
//       --gentx-dir string   override default "gentx" directory from which collect and execute genesis transactions; default [--home]/config/gentx/
//   -h, --help               help for collect-gentxs
//       --home string        The application home directory (default "/Users/juliaortiz/.nancy")

// Global Flags:
//       --log_format string   The logging format (json|plain) (default "plain")
//       --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
//       --trace               print out full stack trace on errors

type CollectGentxsFlags = {
  /**
   * override default "gentx" directory from which collect and execute genesis transactions; default [--home]/config/gentx/
   */
  gentxDir: string;

  /**
   * The application home directory (default "/Users/juliaortiz/.nancy")
   */
  home: string;
};

export const collectGentxs = async (
  config: DConfig,
  options: Partial<GlobalFlags> = {}
) => {
  const mergedOptions = Object.assign(
    {},
    pick(config.defaultArgs, [
      "home",
      "logFormat",
      "logLevel",
      "trace",
    ]),
    options
  );

  const args = [
    config.executablePath,
    "collect-gentxs",
    ...toCliArgs(mergedOptions),
  ];

  const proc = spawn(args, {
    stdio: ["pipe", "pipe", "pipe"],
  });

  if ((await proc.exited) !== 0) {
    throw new Error(
      `exited with code ${proc.exitCode}, stderr: ${
        (await readStd(proc.stderr)).split("\n")[0]
      }`
    );
  }
};
