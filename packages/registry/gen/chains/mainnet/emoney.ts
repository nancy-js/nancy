/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "emoney",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://emoney.validator.network",
        "https://rpc-emoney-ia.cosmosia.notional.ventures/",
        "https://rpc.emoney.quokkastake.io",
        "https://e-money-rpc.ibs.team",
        "https://rpc.emoney.bh.rocks",
        "https://emoney-mainnet-rpc.autostake.com:443",
      ],
    },
    channels: {
      juno: {
        portId: "transfer",
        channelId:
          "channel-15",
        counterpartyChainId:
          "juno",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-9",
        order: "unordered",
        version: "ics20-1",
      },
      irisnet: {
        portId: "transfer",
        channelId:
          "channel-2",
        counterpartyChainId:
          "irisnet",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-23",
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
          "channel-37",
        order: "unordered",
        version: "ics20-1",
      },
      cosmoshub: {
        portId: "transfer",
        channelId:
          "channel-1",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-202",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;