/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "echelon",
  displayName: "Echelon",
  website: null,
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/logo.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/echelon.svg",
  },
  repository:
    "https://github.com/echelonfoundation/echelon",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/echelon",
        "https://ech01trpc.mindheartsoul.org",
        "https://rpc.echjoker.lol",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/echelon",
        "https://ech01api.mindheartsoul.org",
        "https://api.echjoker.lol",
      ],
    },
  },
  evm: {
    api: {
      "jsonrpc-http": [
        "https://ech01jrpc.mindheartsoul.org",
        "https://jrpc.echjoker.lol",
      ],
    },
  },
  ibc: {
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-11",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-403",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;