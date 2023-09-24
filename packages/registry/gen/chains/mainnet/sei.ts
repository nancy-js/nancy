/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "sei",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://sei-rpc.lavenderfive.com:443",
        "https://sei-rpc.polkachu.com/",
        "https://sei-rpc.brocha.in/",
        "https://rpc-sei.stingray.plus/",
        "https://rpc-sei.rhinostake.com",
        "https://rpc-sei.whispernode.com:443",
      ],
    },
    channels: {
      neutron: {
        portId: "transfer",
        channelId:
          "channel-15",
        counterpartyChainId:
          "neutron",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-19",
        order: "unordered",
        version: "ics20-1",
      },
      stride: {
        portId: "transfer",
        channelId:
          "channel-11",
        counterpartyChainId:
          "stride",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-149",
        order: "unordered",
        version: "ics20-1",
      },
      planq: {
        portId: "transfer",
        channelId:
          "channel-13",
        counterpartyChainId:
          "planq",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-59",
        order: "unordered",
        version: "ics20-1",
      },
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-0",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-782",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;