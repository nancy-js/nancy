// Usage:
//   nancyd gentx [key_name] [amount] [flags]

import { spawn } from "bun";
import { DConfig, GlobalFlags } from "../createConfig.js";
import { Amount, KeyringBackend } from "../utils/types.js";
import { toCliArgs } from "../utils/toCliArgs.js";
import { readStd } from "../utils/readStd.js";
import { pick } from "lodash-es";

// Flags:
//   -a, --account-number uint                 The account number of the signing account (offline mode only)
//       --amount string                       Amount of coins to bond
//       --aux                                 Generate aux signer data instead of sending a tx
//   -b, --broadcast-mode string               Transaction broadcasting mode (sync|async) (default "sync")
//       --chain-id string                     The network chain ID (default "nancy")
//       --commission-max-change-rate string   The maximum commission change rate percentage (per day)
//       --commission-max-rate string          The maximum commission rate percentage
//       --commission-rate string              The initial commission rate percentage
//       --details string                      The validator's (optional) details
//       --dry-run                             ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it (when enabled, the local Keybase is not accessible)
//       --fee-granter string                  Fee granter grants fees for the transaction
//       --fee-payer string                    Fee payer pays fees for the transaction instead of deducting from the signer
//       --fees string                         Fees to pay along with transaction; eg: 10uatom
//       --from string                         Name or address of private key with which to sign
//       --gas string                          gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn't always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)
//       --gas-adjustment float                adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)
//       --gas-prices string                   Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)
//       --generate-only                       Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)
//   -h, --help                                help for gentx
//       --home string                         The application home directory (default "/Users/juliaortiz/.nancy")
//       --identity string                     The (optional) identity signature (ex. UPort or Keybase)
//       --ip string                           The node's public P2P IP (default "192.168.68.116")
//       --keyring-backend string              Select keyring's backend (os|file|kwallet|pass|test|memory) (default "test")
//       --keyring-dir string                  The client Keyring directory; if omitted, the default 'home' directory will be used
//       --ledger                              Use a connected Ledger device
//       --min-self-delegation string          The minimum self delegation required on the validator
//       --moniker string                      The validator's (optional) moniker
//       --node string                         <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
//       --node-id string                      The node's NodeID
//       --note string                         Note to add a description to the transaction (previously --memo)
//       --offline                             Offline mode (does not allow any online functionality)
//   -o, --output string                       Output format (text|json) (default "json")
//       --output-document string              Write the genesis transaction JSON document to the given file instead of the default location
//       --p2p-port uint                       The node's public P2P port (default 26656)
//       --pubkey string                       The validator's Protobuf JSON encoded public key
//       --security-contact string             The validator's (optional) security contact email
//   -s, --sequence uint                       The sequence number of the signing account (offline mode only)
//       --sign-mode string                    Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature
//       --timeout-height uint                 Set a block timeout height to prevent the tx from being committed past a certain height
//       --tip string                          Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn't enable the TipDecorator
//       --website string                      The validator's (optional) website
//   -y, --yes                                 Skip tx broadcasting prompt confirmation

// Global Flags:
//       --log_format string   The logging format (json|plain) (default "plain")
//       --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
//       --trace               print out full stack trace on errors

type GentxFlags = {
  /**
   * The account number of the signing account (offline mode only)
   */
  accountNumber: number;
  /**
   * Amount of coins to bond
   */
  amount: Amount;
  /**
   * Generate aux signer data instead of sending a tx
   */
  aux: boolean;
  /**
   * Transaction broadcasting mode (sync|async)
   */
  broadcastMode: "sync" | "async";
  /**
   * The network chain ID
   */
  chainId: string;
  /**
   * The maximum commission change rate percentage (per day)
   */
  commissionMaxChangeRate: string;
  /**
   * The maximum commission rate percentage
   */
  commissionMaxRate: string;
  /**
   * The initial commission rate percentage
   */
  commissionRate: string;
  /**
   * The validator's (optional) details
   */
  details: string;
  /**
   * ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it (when enabled, the local Keybase is not accessible)
   */
  dryRun: boolean;
  /**
   * Fee granter grants fees for the transaction
   */
  feeGranter: string;
  /**
   * Fee payer pays fees for the transaction instead of deducting from the signer
   */
  feePayer: string;
  /**
   * Fees to pay along with transaction; eg: 10uatom
   */
  fees: string;
  /**
   * Name or address of private key with which to sign
   */
  from: string;
  /**
   * gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn't always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees".
   */
  gas: string;
  /**
   * adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored
   */
  gasAdjustment: number;
  /**
   * Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)
   */
  gasPrices: string;
  /**
   * Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)
   */
  generateOnly: boolean;
  /**
   * The application home directory
   */
  home: string;
  /**
   * The (optional) identity signature (ex. UPort or Keybase)
   */
  identity: string;
  /**
   * The node's public P2P IP
   */
  ip: string;
  /**
   * Select keyring's backend (os|file|kwallet|pass|test|memory)
   */
  keyringBackend: KeyringBackend;
  /**
   * The client Keyring directory; if omitted, the default 'home' directory will be used
   */
  keyringDir: string;
  /**
   * Use a connected Ledger device
   */
  ledger: boolean;
  /**
   * The minimum self delegation required on the validator
   */
  minSelfDelegation: string;
  /**
   * The validator's (optional) moniker
   */
  moniker: string;
  /**
   * <host>:<port> to tendermint rpc interface for this chain
   */
  node: string;
  /**
   * The node's NodeID
   */
  nodeId: string;
  /**
   * Note to add a description to the transaction (previously --memo)
   */
  note: string;
  /**
   * Offline mode (does not allow any online functionality)
   */
  offline: boolean;
  /**
   * Output format (text|json)
   */
  output: "text" | "json";
  /**
   * Write the genesis transaction JSON document to the given file instead of the default location
   */
  outputDocument: string;
  /**
   * The node's public P2P port
   */
  p2pPort: number;
  /**
   * The validator's Protobuf JSON encoded public key
   */
  pubkey: string;
  /**
   * The validator's (optional) security contact email
   */
  securityContact: string;
  /**
   * The sequence number of the signing account (offline mode only)
   */
  sequence: number;
  /**
   * Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature
   */
  signMode: string;
  /**
   * Set a block timeout height to prevent the tx from being committed past a certain height
   */
  timeoutHeight: number;
  /**
   * Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn't enable the TipDecorator
   */
  tip: string;
  /**
   * The validator's (optional) website
   */
  website: string;
  // /**
  //  * Skip tx broadcasting prompt confirmation
  //  */
  // yes: boolean;
};

// Usage:
//   nancyd gentx [key_name] [amount] [flags]

export const gentx = async (
  config: DConfig,
  keyName: string,
  amount: Amount,
  options: Partial<GentxFlags & GlobalFlags> = {}
) => {
  const mergedOptions = Object.assign(
    {},
    pick(config.defaultArgs, [
      "keyringBackend",
      "output",
      "moniker",
      "home",
      "chainId",
      "logFormat",
      "logLevel",
      "trace",
    ]),
    options
  );

  const args = [
    config.executablePath,
    "gentx",
    keyName,
    amount,
    ...toCliArgs(mergedOptions),
    "--yes",
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
