/**
 * This file is auto-generated by the @nancyjs/registry package.
 */
export default {
  name: "xpla",
  displayName: "XPLA",
  website: "https://xpla.io",
  logo: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg",
  },
  repository:
    "https://github.com/xpladev/xpla",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/xpla",
        "https://dimension-rpc.xpla.dev",
        "https://xpla-rpc.lavenderfive.com:443",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/xpla",
        "https://dimension-lcd.xpla.io",
        "https://dimension-lcd.xpla.dev",
        "https://xpla-api.lavenderfive.com:443",
      ],
    },
  },
  evm: {
    api: {
      "jsonrpc-http": [
        "https://dimension-evm-rpc.xpla.dev",
      ],
    },
  },
  ibc: {
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-9",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-1634",
        order: "unordered",
        version: "ics20-1",
      },
      injective: {
        portId: "transfer",
        channelId:
          "channel-7",
        counterpartyChainId:
          "injective",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-137",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
