/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "medasdigital",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.medas-digital.io:26657/",
      ],
    },
  },
  ibc: {
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
          "channel-519",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
