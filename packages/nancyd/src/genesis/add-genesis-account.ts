import { spawn } from "bun";
import { toCliArgs } from "../utils/toCliArgs.js";
import { DConfig, GlobalFlags } from "../createConfig.js";
import { Amount, KeyringBackend } from "../utils/types.js";
import { readStd } from "../utils/readStd.js";
import { pick } from "lodash-es";

// Flags:
//       --grpc-addr string         the gRPC endpoint to use for this chain
//       --grpc-insecure            allow gRPC over insecure channels, if not TLS the server must use TLS
//       --height int               Use a specific height to query state at (this can error if the node is pruning state)
//   -h, --help                     help for add-genesis-account
//       --home string              The application home directory (default "/Users/juliaortiz/.nancy")
//       --keyring-backend string   Select keyring's backend (os|file|kwallet|pass|test) (default "test")
//       --node string              <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
//   -o, --output string            Output format (text|json) (default "text")
//       --vesting-amount string    amount of coins for vesting accounts
//       --vesting-end-time int     schedule end time (unix epoch) for vesting accounts
//       --vesting-start-time int   schedule start time (unix epoch) for vesting accounts

// Global Flags:
//       --log_format string   The logging format (json|plain) (default "plain")
//       --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
//       --trace               print out full stack trace on errors

type AddGenesisAccountFlags = {
  /**
   * the gRPC endpoint to use for this chain
   */
  grpcAddr: string;
  /**
   * allow gRPC over insecure channels, if not TLS the server must use TLS
   */
  grpcInsecure: boolean;
  /**
   * Use a specific height to query state at (this can error if the node is pruning state)
   */
  height: number;
  /**
   * The application home directory
   */
  home: string;
  /**
   * Select keyring's backend (os|file|kwallet|pass|test)
   */
  keyringBackend: KeyringBackend;
  /**
   * <host>:<port> to Tendermint RPC interface for this chain
   */
  node: string;
  /**
   * Output format (text|json)
   */
  output: "text" | "json";
  /**
   * amount of coins for vesting accounts
   */
  vestingAmount: string;
  /**
   * schedule end time (unix epoch) for vesting accounts
   */
  vestingEndTime: number;
  /**
   * schedule start time (unix epoch) for vesting accounts
   */
  vestingStartTime: number;
};
export const addGenesisAccount = async (
  config: DConfig,
  addressOrKeyName: string,
  coin: [Amount, ...Amount[]],
  options: Partial<
    AddGenesisAccountFlags & GlobalFlags
  > = {}
) => {
  const { ...mergedOptions } = Object.assign(
    {},
    pick(config.defaultArgs, [
      "logFormat",
      "logLevel",
      "trace",
      "output",
      "home",
    ]),
    options
  );

  const args = [
    config.executablePath,
    "add-genesis-account",
    addressOrKeyName,
    coin.join(","),
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
