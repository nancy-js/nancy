/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "commercionetwork",
  displayName:
    "Commercio.network",
  website: null,
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg",
  },
  repository:
    "https://github.com/commercionetwork/commercionetwork",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/commercionetwork",
        "https://rpc-mainnet.commercio.network",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/commercionetwork",
        "https://lcd-mainnet.commercio.network",
      ],
    },
  },
  evm: null,
  ibc: {},
} as const;