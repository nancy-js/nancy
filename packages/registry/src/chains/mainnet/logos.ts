/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "logos",
  displayName: "Logos",
  website: null,
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg",
  },
  repository: null,
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/logos",
        "https://logos-rpc.provable.dev:443/",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/logos",
        "https://logos.provable.dev/rest/",
      ],
    },
  },
  evm: {
    api: {
      "jsonrpc-http": [
        "https://logos-evm.provable.dev/",
      ],
    },
  },
  ibc: {},
} as const;
