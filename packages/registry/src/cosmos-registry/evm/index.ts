import { CosmosChain } from "../types/chain.js";
import { makeChannel } from "../ibc/makeChannels.js";

export const makeEVMModule = async (chain: CosmosChain) => {
  const jsonrpcApi = chain.apis?.["evm-http-jsonrpc"];
  if (!jsonrpcApi) return null;
  return {
    api: {
      "jsonrpc-http": jsonrpcApi.map(
        ({ address }) => address,
      ),
    },
  };
};
