/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "carbon",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://tm-api.carbon.network",
        "https://carbon-rpc.lavenderfive.com",
        "https://rpc.carbon.blockhunters.org",
      ],
    },
  },
  ibc: {
    channels: {
      stride: {
        portId: "transfer",
        channelId:
          "channel-8",
        counterpartyChainId:
          "stride",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-47",
        order: "unordered",
        version: "ics20-1",
      },
      canto: {
        portId: "transfer",
        channelId:
          "channel-18",
        counterpartyChainId:
          "canto",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-6",
        order: "unordered",
        version: "ics20-1",
      },
      stargaze: {
        portId: "transfer",
        channelId:
          "channel-15",
        counterpartyChainId:
          "stargaze",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-123",
        order: "unordered",
        version: "ics20-1",
      },
      terra2: {
        portId: "transfer",
        channelId:
          "channel-12",
        counterpartyChainId:
          "terra2",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-36",
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
          "channel-188",
        order: "unordered",
        version: "ics20-1",
      },
      cosmoshub: {
        portId: "transfer",
        channelId:
          "channel-3",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-342",
        order: "unordered",
        version: "ics20-1",
      },
      kujira: {
        portId: "transfer",
        channelId:
          "channel-9",
        counterpartyChainId:
          "kujira",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-46",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
