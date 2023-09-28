/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "canto",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.canto.nodestake.top",
        "https://canto-rpc.polkachu.com",
        "https://rpc.canto.silentvalidator.com/",
        "https://canto.gravitychain.io:26657",
        "https://canto-rpc.lgns.net:443",
        "https://rpc-canto.cosmos-spaces.cloud",
        "https://rpc-canto.carbonZERO.zone:443",
        "https://canto-mainnet-rpc.autostake.com:443",
      ],
    },
  },
  ibc: {
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-5",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-550",
        order: "unordered",
        version: "ics20-1",
      },
      carbon: {
        portId: "transfer",
        channelId:
          "channel-6",
        counterpartyChainId:
          "carbon",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-18",
        order: "unordered",
        version: "ics20-1",
      },
      composable: {
        portId: "transfer",
        channelId:
          "channel-23",
        counterpartyChainId:
          "composable",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-12",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
