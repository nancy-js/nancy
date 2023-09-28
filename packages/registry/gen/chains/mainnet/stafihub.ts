/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "stafihub",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://public-rpc1.stafihub.io:443",
        "https://public-rpc2.stafihub.io:443",
        "https://rpc.stafihub.nodestake.top:443",
        "https://stafihub.nodejumper.io",
      ],
    },
  },
  ibc: {
    channels: {
      kujira: {
        portId: "transfer",
        channelId:
          "channel-6",
        counterpartyChainId:
          "kujira",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-63",
        order: "unordered",
        version: "ics20-1",
      },
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-10",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-5413",
        order: "unordered",
        version: "ics20-1",
      },
      irisnet: {
        portId: "transfer",
        channelId:
          "channel-3",
        counterpartyChainId:
          "irisnet",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-33",
        order: "unordered",
        version: "ics20-1",
      },
      terra2: {
        portId: "transfer",
        channelId:
          "channel-9",
        counterpartyChainId:
          "terra2",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-204",
        order: "unordered",
        version: "ics20-1",
      },
      cosmoshub: {
        portId: "transfer",
        channelId:
          "channel-0",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-369",
        order: "unordered",
        version: "ics20-1",
      },
      chihuahua: {
        portId: "transfer",
        channelId:
          "channel-4",
        counterpartyChainId:
          "chihuahua",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-25",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
