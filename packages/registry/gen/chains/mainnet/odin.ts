/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "odin",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "http://34.79.179.216:26657",
        "https://odin-rpc.lavenderfive.com/",
        "https://odin-mainnet-rpc.autostake.com:443",
      ],
    },
    channels: {
      axelar: {
        portId: "transfer",
        channelId:
          "channel-37",
        counterpartyChainId:
          "axelar",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-102",
        order: "unordered",
        version: "ics20-1",
      },
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-3",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-258",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
