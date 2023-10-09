import { loadChains } from "./cosmos-registry/loaders/load-chains.js";
import { all } from "@nancyjs/core";
import { maybeUpdateRegistryRepo } from "./update-registry-repo.js";
import { makeTendermintModule } from "./cosmos-registry/tendermint/index.js";
import { mkdir } from "fs/promises";
import { writeTsFile } from "./writeTsFile.js";
import { makeIBCModule } from "./cosmos-registry/ibc/index.js";
import { makeCosmosModule } from "./cosmos-registry/cosmos/index.js";
import { makeEVMModule } from "./cosmos-registry/evm/index.js";

const start = performance.now();

await maybeUpdateRegistryRepo();

const chains = await loadChains();

const modules = (
  await all(
    chains.map(async (chain) => ({
      name: chain.chain_name,
      displayName: chain.pretty_name ?? chain.chain_name,

      website: chain.website ?? null,
      logo: {
        png: chain.logo_URIs?.png ?? null,
        svg: chain.logo_URIs?.svg ?? null,
      },
      repository: chain.codebase?.git_repo ?? null,
      tendermint: await makeTendermintModule(chain),
      cosmossdk: await makeCosmosModule(chain),
      evm: await makeEVMModule(chain),
      ibc: await makeIBCModule(chain),
    }))
  )
).filter(({ name }) => name);

await mkdir("src/chains/mainnet", {
  recursive: true,
});

await all(
  modules.map(async (chain) => {
    await writeTsFile(
      `src/chains/mainnet/${chain.name}.ts`,
      `export default ${JSON.stringify(
        chain,
        null,
        2
      )} as const;`
    );
  })
);

await writeTsFile(
  `src/chains/mainnet/index.ts`,
  modules
    .map(
      (chain) =>
        `export { default as ${
          chain.name === "8ball" ? "eightball" : chain.name
        } } from "./${chain.name}.js";`
    )
    .join("\n")
);

console.log("done", performance.now() - start);
