/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "tenet",
  displayName: "Tenet",
  website:
    "https://tenet.org/",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg",
  },
  repository:
    "https://github.com/tenet-org/tenet-mainnet",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/tenet",
        "https://tendermint-1.rpc.tenet.org",
        "https://rpc-tenet.nodeist.net",
        "https://tenet-rpc.publicnode.com",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/tenet",
        "https://app.rpc.tenet.org",
        "https://api-tenet.nodeist.net",
        "https://tenet-rest.publicnode.com",
      ],
    },
  },
  evm: {
    api: {
      "jsonrpc-http": [
        "https://rpc.tenet.org",
        "https://tenet-evm.publicnode.com",
      ],
    },
  },
  ibc: {},
} as const;
