/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "xpla",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://dimension-rpc.xpla.dev",
        "https://xpla-rpc.lavenderfive.com:443",
      ],
    },
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
