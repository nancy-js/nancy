/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "unification",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc1.unification.io:443",
        "https://rpc.unification.chainmasters.ninja/",
      ],
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
          "channel-382",
        order: "unordered",
        version: "ics20-1",
      },
      gravitybridge: {
        portId: "transfer",
        channelId:
          "channel-2",
        counterpartyChainId:
          "gravitybridge",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-98",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;