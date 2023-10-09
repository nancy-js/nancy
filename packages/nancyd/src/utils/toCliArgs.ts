import { Errorlike } from "bun";
import { kebabCase, pick, snakeCase } from "lodash-es";
import { GLOBAL_FLAGS } from "../createConfig.js";
import { isPlainObject } from "@nancyjs/core";

type ArgsPrimitives = number | boolean | string | undefined;
interface Args {
  [key: string]: ArgsPrimitives | ArgsPrimitives[] | Args;
}

const kebabcaseKeys = new Set([
  "logFormat",
  "logLevel",
  "blockSync",
  "createEmptyBlocks",
  "createEmptyBlocksInterval",
  "doubleSignCheckHeight",
  "dbBackend",
  "dbDir",
  "genesisDir",
  "genesisHash",
  "persistentPeers",
  "privatePeerIds",
  "seedMode",
  "unconditionalPeerIds",
  "privValidatorLaddr",
  "proxyApp",
]);
export const toCliArgs = (
  options: Args,
  parentKey?: string
): string[] => {
  return Object.entries(options).flatMap(([key, value]) => {
    if (typeof value === "undefined") {
      return [];
    }
    if (isPlainObject(value)) {
      return toCliArgs(value, key);
    }
    const prefix = parentKey
      ? kebabCase(parentKey) + "."
      : "";
    return [
      kebabcaseKeys.has(key)
        ? `--${prefix}${snakeCase(key)}`
        : `--${prefix}${kebabCase(key)}`,
      typeof value === "boolean" ? "" : String(value),
    ].filter(Boolean);
  }) as string[];
};
