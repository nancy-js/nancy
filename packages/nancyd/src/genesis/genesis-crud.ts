import { DConfig } from "../createConfig.js";
import { Genesis } from "./types.js";

export const readGenesis = async (config: DConfig) => {
  return Bun.file(
    config.defaultArgs.home + "/config/genesis.json",
  ).json();
};

export const writeGenesis = async (
  config: DConfig,
  genesis: Genesis,
) => {
  return Bun.write(
    config.defaultArgs.home + "/config/genesis.json",
    JSON.stringify(genesis),
  );
};

export const updateGenesis = async (
  config: DConfig,
  updater: (genesis: Genesis) => Genesis,
) => {
  const genesis = await readGenesis(config);
  const updatedGenesis = updater(genesis);
  await writeGenesis(config, updatedGenesis);
  return updatedGenesis;
};
