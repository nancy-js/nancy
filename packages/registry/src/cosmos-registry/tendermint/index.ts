import { CosmosChain } from "../types/chain.js";
import { makeChannel } from "../ibc/makeChannels.js";

export const makeTendermintModule =
  async (
    chain: CosmosChain,
  ) => ({
    api: {
      "jsonrpc-http":
        chain.apis?.rpc?.map(
          ({ address }) =>
            address,
        ),
    },
  });
