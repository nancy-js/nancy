import { CosmosChain } from "../types/chain.js";

export const makeTendermintModule = async (
  chain: CosmosChain,
) => {
  const rpcApi = chain.apis?.rpc;
  if (!rpcApi) return null;
  return {
    api: {
      "jsonrpc-http": [
        `https://rpc.cosmos.directory/${chain.chain_name}`,
        ...rpcApi.map(({ address }) => address),
      ],
    },
  };
};
