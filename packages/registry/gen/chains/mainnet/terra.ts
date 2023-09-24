/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "terra",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.terrarebels.net",
        "https://terra-classic-rpc.publicnode.com",
        "https://rpc-terra-ia.cosmosia.notional.ventures/",
        "https://terraclassic-mainnet-rpc.autostake.com:443",
        "https://terraclassic-rpc-server-01.stakely.io",
      ],
    },
    channels: {
      acrechain: {
        portId: "transfer",
        channelId:
          "channel-69",
        counterpartyChainId:
          "acrechain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-12",
        order: "unordered",
        version: "ics20-1",
      },
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-1",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-72",
        order: "unordered",
        version: "ics20-1",
      },
      secretnetwork: {
        portId: "transfer",
        channelId:
          "channel-16",
        counterpartyChainId:
          "secretnetwork",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-2",
        order: "unordered",
        version: "ics20-1",
      },
      juno: {
        portId: "transfer",
        channelId:
          "channel-20",
        counterpartyChainId:
          "juno",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-27",
        order: "unordered",
        version: "ics20-1",
      },
      crescent: {
        portId: "transfer",
        channelId:
          "channel-49",
        counterpartyChainId:
          "crescent",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-0",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;