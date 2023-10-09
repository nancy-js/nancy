import { exists } from "fs/promises";

const pullLatestRegistry =
  () => {
    const args = [
      "git",
      "pull",
      "origin",
      "master",
    ];

    return Bun.spawnSync(
      args,
      {
        cwd: "./chain-registry",
      },
    );
  };

const cloneRegistry = () => {
  const args = [
    "git",
    "clone",
    "git@github.com:cosmos/chain-registry.git",
    "--depth",
    "1",
  ];
  return Bun.spawnSync(args);
};

export const updateRegistryRepo =
  async () => {
    const doesExist =
      await exists(
        "./chain-registry",
      );
    if (doesExist) {
      return pullLatestRegistry();
    }
    return cloneRegistry();
  };

const hasArg = (
  arg: string,
) => Bun.argv.includes(arg);

export const maybeUpdateRegistryRepo =
  () => {
    if (
      hasArg(
        "--ignore-repo-update",
      )
    ) {
      return;
    }
    return updateRegistryRepo();
  };
