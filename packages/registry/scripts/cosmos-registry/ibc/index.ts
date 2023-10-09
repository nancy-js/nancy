import { memoize } from "lodash";
import { CosmosChain } from "../types/chain.js";
import { makeChannel } from "./makeChannels.js";
export * from "./tokens.js";

export const makeIBCModule =
  memoize(
    async (
      chain: CosmosChain,
    ) => ({
      channels:
        await makeChannel(
          chain,
        ),
    }),
  );
