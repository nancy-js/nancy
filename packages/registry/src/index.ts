import { loadChains } from "./cosmos-registry/loaders/load-chains.js";
import { all } from "@nancy/core";
import { maybeUpdateRegistryRepo } from "./update-registry-repo.js";
import { makeTendermintModule } from "./cosmos-registry/tendermint/index.js";
import { mkdir } from "fs/promises";
import { writeTsFile } from "./writeTsFile.js";
import { makeIBCModule } from "./cosmos-registry/ibc/index.js";

const start =
  performance.now();

await maybeUpdateRegistryRepo();

const chains =
  await loadChains();

const modules = (
  await all(
    chains.map(
      async (chain) => ({
        name: chain.chain_name,
        tendermint:
          await makeTendermintModule(
            chain,
          ),

        ibc: await makeIBCModule(
          chain,
        ),
      }),
    ),
  )
).filter(({ name }) => name);

await mkdir(
  "gen/chains/mainnet",
  {
    recursive: true,
  },
);

await all(
  modules.map(
    async (chain) => {
      await writeTsFile(
        `gen/chains/mainnet/${chain.name}.ts`,
        `export default ${JSON.stringify(
          chain,
          null,
          2,
        )} as const;`,
      );
    },
  ),
);

await writeTsFile(
  `gen/chains/mainnet/index.ts`,
  modules
    .map(
      (chain) =>
        `export { default as ${
          chain.name ===
          "8ball"
            ? "eightball"
            : chain.name
        } } from "./${
          chain.name
        }.js";`,
    )
    .join("\n"),
);

console.log(
  "done",
  performance.now() - start,
);
