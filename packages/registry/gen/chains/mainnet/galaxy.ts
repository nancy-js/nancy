/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "galaxy",
  tendermint: {
    api: {
      "jsonrpc-http": [],
    },
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-0",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-236",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;