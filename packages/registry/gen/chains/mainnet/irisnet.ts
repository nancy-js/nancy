/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "irisnet",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc-iris.keplr.app",
        "https://rpc-irisnet-ia.cosmosia.notional.ventures/",
        "https://rpc-irisnet-01.stakeflow.io",
        "https://irisnet-rpc.w3coins.io",
        "https://iris-rpc.publicnode.com",
        "https://iris-rpc.highstakes.ch:26657/",
      ],
    },
  },
  ibc: {
    channels: {
      persistence: {
        portId: "transfer",
        channelId:
          "channel-15",
        counterpartyChainId:
          "persistence",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-19",
        order: "unordered",
        version: "ics20-1",
      },
      crescent: {
        portId: "transfer",
        channelId:
          "channel-37",
        counterpartyChainId:
          "crescent",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-37",
        order: "unordered",
        version: "ics20-1",
      },
      cryptoorgchain: {
        portId: "transfer",
        channelId:
          "channel-13",
        counterpartyChainId:
          "cryptoorgchain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-23",
        order: "unordered",
        version: "ics20-1",
      },
      sifchain: {
        portId: "transfer",
        channelId:
          "channel-19",
        counterpartyChainId:
          "sifchain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-8",
        order: "unordered",
        version: "ics20-1",
      },
      uptick: {
        portId: "transfer",
        channelId:
          "channel-39",
        counterpartyChainId:
          "uptick",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-2",
        order: "unordered",
        version: "ics20-1",
      },
      emoney: {
        portId: "transfer",
        channelId:
          "channel-23",
        counterpartyChainId:
          "emoney",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-2",
        order: "unordered",
        version: "ics20-1",
      },
      sentinel: {
        portId: "transfer",
        channelId:
          "channel-17",
        counterpartyChainId:
          "sentinel",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-9",
        order: "unordered",
        version: "ics20-1",
      },
      akash: {
        portId: "transfer",
        channelId:
          "channel-9",
        counterpartyChainId:
          "akash",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-11",
        order: "unordered",
        version: "ics20-1",
      },
      cosmoshub: {
        portId: "transfer",
        channelId:
          "channel-12",
        counterpartyChainId:
          "cosmoshub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-182",
        order: "unordered",
        version: "ics20-1",
      },
      starname: {
        portId: "transfer",
        channelId:
          "channel-21",
        counterpartyChainId:
          "starname",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-11",
        order: "unordered",
        version: "ics20-1",
      },
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-3",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-6",
        order: "unordered",
        version: "ics20-1",
      },
      stafihub: {
        portId: "transfer",
        channelId:
          "channel-33",
        counterpartyChainId:
          "stafihub",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-3",
        order: "unordered",
        version: "ics20-1",
      },
      regen: {
        portId: "transfer",
        channelId:
          "channel-16",
        counterpartyChainId:
          "regen",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-9",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
