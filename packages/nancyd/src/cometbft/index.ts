import { get } from "lodash-es";
import { DConfig } from "../createConfig.js";
import { CometBFTConfig } from "./config.js";

export const readCometConfigAsString = (
  config: DConfig,
) => {
  return Bun.file(
    config.defaultArgs.home + "/config/config.toml",
  ).text();
};

export const readCometConfig = async (config: DConfig) => {
  const cometConfig = await readCometConfigAsString(config);
  return Bun.TOML.parse(cometConfig) as CometBFTConfig;
};

export const writeCometConfig = async (
  config: DConfig,
  cometConfig: CometBFTConfig,
) => {
  let path: string[] = [];
  const cometConfigAsString = (
    await readCometConfigAsString(config)
  )
    .split("\n")
    .map((line) => {
      const [key] = line.match(/^ *([\w\[\]]+)/) ?? [];
      if (!key) return line;
      if (key.startsWith("[")) {
        path = key.slice(1, -1).split(".");
        return line;
      }

      const value = get(cometConfig, [...path, key]);

      if (typeof value === "undefined") return line;

      if (typeof value === "string")
        return `${key} = "${value}"`;
      if (typeof value === "number")
        return `${key} = ${value}`;
      if (typeof value === "boolean")
        return `${key} = ${value}`;
      if (typeof value === "object") {
        return `${key} = ${JSON.stringify(value)}`;
      }

      return line;
    })
    .join("\n");

  return Bun.write(
    config.defaultArgs.home + "/config/config.toml",
    cometConfigAsString,
  );
};

export const updateCometConfig = async (
  config: DConfig,
  updater: (cometConfig: CometBFTConfig) => CometBFTConfig,
) => {
  const cometConfig = await readCometConfig(config);
  const updatedCometConfig = updater(cometConfig);
  await writeCometConfig(config, updatedCometConfig);
  return updatedCometConfig;
};
