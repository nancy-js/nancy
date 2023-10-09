import { CosmosChain } from "../types/chain.js";

export const makeCosmosModule = async (
  chain: CosmosChain,
) => {
  const restApi = chain.apis?.rest;
  if (!restApi) return null;
  return {
    api: {
      rest: [
        `https://rest.cosmos.directory/${chain.chain_name}`,
        ...restApi.map(({ address }) => address),
      ],
    },
  };
};
