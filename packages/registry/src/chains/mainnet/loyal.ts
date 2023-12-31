/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "loyal",
  displayName: "Loyal",
  website:
    "https://www.joinloyal.com/",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg",
  },
  repository:
    "https://github.com/LoyalLabs/loyal",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/loyal",
        "https://rpc-main.joinloyal.io/",
        "https://loyal-rpc.polkachu.com",
        "https://rpc.loyal.nodestake.top",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/loyal",
        "https://lcd-main.joinloyal.io/",
        "https://loyal-api.polkachu.com",
        "https://api.loyal.nodestake.top",
      ],
    },
  },
  evm: null,
  ibc: {},
} as const;
