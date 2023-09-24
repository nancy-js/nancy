/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "tgrade",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.mainnet-1.tgrade.confio.run",
        "https://rpc.tgrade.posthuman.digital",
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
          "channel-263",
        order: "unordered",
        version: "ics20-1",
      },
      evmos: {
        portId: "transfer",
        channelId:
          "channel-9",
        counterpartyChainId:
          "evmos",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-34",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;