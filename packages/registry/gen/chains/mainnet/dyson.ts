/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "dyson",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://dys-tm.dyson.lol:443",
        "https://dys-tm.dysonprotocol.com:443",
        "https://dyson-rpc.cogwheel.zone:443",
      ],
    },
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-2",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-526",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;