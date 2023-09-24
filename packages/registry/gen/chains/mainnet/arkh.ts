/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "arkh",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://asc-dataseed.arkhadian.com/",
        "https://rpc.arkh.nodestake.top",
        "https://rpc-arkhadian.comunitynode.my.id",
        "https://arkh-rpc.kynraze.com",
        "https://rpc.arkh.nodexcapital.com",
      ],
    },
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-12",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-648",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;