import { spawn } from "bun";
import { DConfig, GlobalFlags } from "../createConfig.js";
import { toCliArgs } from "../utils/toCliArgs.js";
import { readStd } from "../utils/readStd.js";
import { isPlainObject, pick } from "lodash-es";
import { rm } from "fs/promises";
import { CometBFTConfig } from "../cometbft/config.js";
import { DeepPartial } from "../utils/types.js";
import { updateCometConfig } from "../cometbft/index.js";

type InitFlags = {
  /**
   * genesis file chain-id, if left blank will be randomly created
   */
  chainId: string;
  /**
   * genesis file default denomination, if left blank default value is 'stake'
   */
  defaultDenom: string;
  /**
   * node's home directory
   */
  home: string;
  /**
   * specify the initial block height at genesis (default 1)
   */
  initialHeight: number;
  /**
   * overwrite the genesis.json file
   */
  overwrite: boolean;
  /**
   * provide seed phrase to recover existing key instead of creating
   */
  recover: string;
};

const deepMerge = <T extends Record<string, any>>(
  a: T,
  b: DeepPartial<T>
) => {
  const copy = { ...a };
  for (const key in b) {
    const value = b[key];
    if (typeof value === "undefined") continue;
    if (isPlainObject(value)) {
      copy[key] = deepMerge(
        copy[key] as Record<string, any>,
        b[key] as never
      ) as T[typeof key];
    } else {
      copy[key] = value as T[typeof key]; //= value;
    }
  }
  return copy;
};
export const init = async (
  config: DConfig,
  options: Partial<InitFlags & GlobalFlags> & {
    cometBFTConfig?: DeepPartial<CometBFTConfig>;
  } = {}
) => {
  const {
    moniker = config.defaultArgs.moniker,
    recover,
    overwrite,
    cometBFTConfig = {},
    ...mergedOptions
  } = Object.assign(
    {},
    pick(config.defaultArgs, [
      "moniker",
      "chainId",
      "home",
      "defaultDenom",
      "initialHeight",
      "recover",
      // globals
      "logFormat",
      "logLevel",
      "trace",
    ]),
    options
  );

  const args = [
    config.executablePath,
    "init",
    moniker,
    ...toCliArgs(mergedOptions),
  ];

  if (recover) {
    args.push("--recover");
  }
  if (overwrite) {
    await rm(config.defaultArgs.home, { recursive: true });
    args.push("--overwrite");
  }
  const enc = new TextEncoder();

  const proc = spawn(args, {
    stdin: recover ? enc.encode(recover) : "pipe",
    stdout: "pipe",
    stderr: "pipe",
  });

  await proc.exited;

  if ((await proc.exited) !== 0) {
    throw new Error(
      `Error initializing node: ${await readStd(
        proc.stderr
      )}`
    );
  }

  await updateCometConfig(config, (config) => {
    return deepMerge(config, {
      ...cometBFTConfig,
      moniker,
    });
  });
};
