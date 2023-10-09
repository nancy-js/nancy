// Usage:
//   nancyd keys list [flags]

import { spawn } from "bun";
import { DConfig, GlobalFlags } from "../createConfig.js";
import { toCliArgs } from "../utils/toCliArgs.js";
import { pick } from "lodash-es";

// Flags:
//   -h, --help         help for list
//   -n, --list-names   List names only

// Global Flags:
//       --home string              The application home directory (default "/Users/juliaortiz/.nancy")
//       --keyring-backend string   Select keyring's backend (os|file|kwallet|pass|test|memory) (default "test")
//       --keyring-dir string       The client Keyring directory; if omitted, the default 'home' directory will be used
//       --log_format string        The logging format (json|plain) (default "plain")
//       --log_level string         The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
//       --output string            Output format (text|json) (default "text")
//       --trace                    print out full stack trace on errors

export const keysList = async (
  config: DConfig,
  options: Partial<GlobalFlags> = {}
) => {
  const mergedOptions = Object.assign(
    {},
    pick(config.defaultArgs, [
      "home",
      "keyringBackend",
      "keyringDir",
      "logFormat",
      "logLevel",
      "output",
      "trace",
    ]),
    options
  );

  const args = [
    config.executablePath,
    "keys",
    "list",
    ...toCliArgs(mergedOptions),
  ];

  const proc = spawn(args, {
    stdio: ["pipe", "pipe", "pipe"],
  });
  await proc.exited;
  if ((await proc.exited) !== 0) {
    throw new Error(
      `exited with code ${proc.exitCode}, stderr: ${
        (await new Response(proc.stderr).text()).split(
          "\n"
        )[0]
      }`
    );
  }
  return (await new Response(proc.stdout).json()) as {
    name: string;
    type: string;
    address: string;
    pubkey: string;
  }[];
};
