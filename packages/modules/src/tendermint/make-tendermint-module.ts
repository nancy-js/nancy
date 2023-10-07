// import {
//   TendermintClient,
//   makeTendermintApiClient,
// } from "@nancy/apis";
// // import {} from "@nancy/registry";
import osmosis from "@nancy/registry/gen/chains/mainnet/osmosis.ts";
// import {
//   ChainMap,
//   Config,
//   createConfig,
// } from "../client.ts";
// import { get } from "lodash-es";
// import { ClientOptions } from "@nancy/apis/dist/createClient.js";

import {
  TendermintClient,
  makeTendermintApiClient,
} from "@nancy/apis";
import {
  ChainMap,
  Config,
  R,
  createConfig,
  makeUnwrapablePromise,
} from "@nancy/core";
import { get } from "lodash-es";

// export const makeTendermintClient =
//   <const T extends ChainMap>(
//     { chains }: Config<T>,
//     options?: ClientOptions,
//   ) =>
//   async <TParams extends Parameters<TendermintClient>>(
//     chainKey: keyof T,
//     method: TParams[0],
//     params: TParams[1],
//     //  ^?
//   ) => {
//     const chain = await chains[chainKey];
//     const tendermintUrl: unknown = get(
//       chain,
//       "tendermint.api.jsonrpc-http[0]",
//     );
//     if (typeof tendermintUrl !== "string") {
//       throw new Error(
//         `tendermintUrl is not a string: ${tendermintUrl}`,
//       );
//     }
//     const client = makeTendermintApiClient({
//       baseUrl: tendermintUrl,
//     });

//     return client<TParams[0]>(method, params);
//   };

// const config = createConfig({
//   chains: {
//     evmos: async () =>
//       (
//         await import(
//           "@nancy/registry/gen/chains/mainnet/evmos.ts"
//         )
//       ).default,
//     osmosis,
//   },
// });

// const client = await makeTendermintClient(config);
// const a = await client("evmos", "GET /abci_info", {});

const tendermintModule = <T extends ChainMap>(
  config: Config<T>,
  chain: keyof T,
) => {
  const send: TendermintClient = (...args) => {
    const chainConfig = config.chains[chain];
    return makeUnwrapablePromise(async () => {
      const resolvedChain =
        typeof chainConfig === "function"
          ? await chainConfig()
          : chainConfig;

      const url: string = get(
        resolvedChain,
        "tendermint.api.jsonrpc-http[0]",
        "",
      );
      const client = makeTendermintApiClient(url);

      return (await client(...args)) as never;
    });
  };
  return {
    send,
  } as const;
};
const config = createConfig({
  chains: {
    osmosis,
  },
});
const [, block] = await tendermintModule(
  config,
  "osmosis",
).send("GET /block", {
  query: {
    height: 1,
  },
});
