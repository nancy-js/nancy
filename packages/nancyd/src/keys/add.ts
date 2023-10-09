// Usage:
//   nancyd keys list [flags]

import { spawn } from "bun";
import { DConfig, GlobalFlags } from "../createConfig.js";
import { toCliArgs } from "../utils/toCliArgs.js";
import { pick } from "lodash-es";

// Usage:
//   nancyd keys add <name> [flags]

// Flags:
//       --account uint32           Account number for HD derivation (less than equal 2147483647)
//       --coin-type uint32         coin type number for HD derivation (default 118)
//       --dry-run                  Perform action, but don't add key to local keystore
//       --hd-path string           Manual HD Path derivation (overrides BIP44 config)
//   -h, --help                     help for add
//       --index uint32             Address index number for HD derivation (less than equal 2147483647)
//   -i, --interactive              Interactively prompt user for BIP39 passphrase and mnemonic
//       --key-type string          Key signing algorithm to generate keys for (default "secp256k1")
//       --ledger                   Store a local reference to a private key on a Ledger device
//       --multisig strings         List of key names stored in keyring to construct a public legacy multisig key
//       --multisig-threshold int   K out of N required signatures. For use in conjunction with --multisig (default 1)
//       --no-backup                Don't print out seed phrase (if others are watching the terminal)
//       --nosort                   Keys passed to --multisig are taken in the order they're supplied
//       --pubkey string            Parse a public key in JSON format and saves key info to <name> file.
//       --recover                  Provide seed phrase to recover existing key instead of creating

// Global Flags:
//       --home string              The application home directory (default "/Users/juliaortiz/.nancy")
//       --keyring-backend string   Select keyring's backend (os|file|kwallet|pass|test|memory) (default "test")
//       --keyring-dir string       The client Keyring directory; if omitted, the default 'home' directory will be used
//       --log_format string        The logging format (json|plain) (default "plain")
//       --log_level string         The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
//       --output string            Output format (text|json) (default "text")
//       --trace                    print out full stack trace on errors

type KeysAddFlags = {
  /**
   * Account number for HD derivation (less than equal 2147483647)
   */
  account?: number;
  /**
   * coin type number for HD derivation (default 118)
   */
  coinType?: number;
  /**
   * Perform action, but don't add key to local keystore
   */
  dryRun: boolean;
  /**
   * Manual HD Path derivation (overrides BIP44 config)
   */
  hdPath?: string;
  /**
   * Address index number for HD derivation (less than equal 2147483647)
   */
  index?: number;
  /**
   * Interactively prompt user for BIP39 passphrase and mnemonic
   */
  interactive: boolean;
  /**
   * Key signing algorithm to generate keys for (default "secp256k1")
   */
  keyType?: string;
  /**
   * Store a local reference to a private key on a Ledger device
   */
  ledger: boolean;
  /**
   * List of key names stored in keyring to construct a public legacy multisig key
   */
  multisig?: string[];
  /**
   * K out of N required signatures. For use in conjunction with --multisig (default 1)
   */
  multisigThreshold?: number;
  /**
   * Don't print out seed phrase (if others are watching the terminal)
   */
  noBackup: boolean;
  /**
   * Keys passed to --multisig are taken in the order they're supplied
   */
  nosort: boolean;
  /**
   * Parse a public key in JSON format and saves key info to <name> file.
   */
  pubkey?: string;
  /**
   * Provide seed phrase to recover existing key instead of creating
   */
  recover?: string;
};

export const keysAdd = async (
  config: DConfig,
  name: string,
  options: Partial<KeysAddFlags & GlobalFlags> = {}
) => {
  const { recover, ...mergedOptions } = Object.assign(
    {},
    pick(config.defaultArgs, [
      "home",
      "output",
      "logFormat",
      "logLevel",
      "pubkey",
      "recover",
      "keyringBackend",
    ]),
    options
  );

  const args = [
    config.executablePath,
    "keys",
    "add",
    name,
    ...toCliArgs(mergedOptions),
  ];

  if (recover) {
    args.push("--recover");
  }
  const enc = new TextEncoder();

  const proc = spawn(args, {
    stdin: recover ? enc.encode(recover) : "pipe",
    stdout: "pipe",
    stderr: "pipe",
  });

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
  };
};
