/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "assetmantle",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/assetmantle",
        "https://rpc.assetmantle.one",
        "https://rpc-assetmantle.blockpower.capital",
        "https://rpc-assetmantle.ecostake.com",
        "https://assetmantle-rpc.polkachu.com",
        "https://rpc.assetmantle.nodestake.top",
        "https://rpc-assetmantle-ia.cosmosia.notional.ventures/",
        "https://rpc-assetmanle.d-stake.xyz",
        "https://rpc-assetmantle.whispernode.com:443",
        "https://rpc-assetmantle.carbonZERO.zone:443",
        "https://assetmantle.nodejumper.io",
        "https://rpc.mantle.paranorm.pro:443",
        "https://assetmantle-rpc.stakerhouse.com",
        "https://assetmantle-rpc.publicnode.com",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/assetmantle",
        "https://rest.assetmantle.one",
        "https://rest-assetmantle.ecostake.com",
        "https://api.assetmantle.nodestake.top",
        "https://api-assetmantle-ia.cosmosia.notional.ventures",
        "https://assetmantle-api.polkachu.com",
        "https://api-assetmanle.d-stake.xyz",
        "https://lcd-assetmantle.whispernode.com:443",
        "https://rest-assetmantle.carbonZERO.zone:443",
        "https://assetmantle.nodejumper.io:1317",
        "https://api.mantle.paranorm.pro:443",
        "https://assetmantle-rest.stakerhouse.com",
        "https://assetmantle-rest.publicnode.com",
      ],
    },
  },
  evm: null,
  ibc: {
    channels: {
      kujira: {
        portId: "transfer",
        channelId:
          "channel-65",
        counterpartyChainId:
          "kujira",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-19",
        order: "unordered",
        version: "ics20-1",
      },
      okexchain: {
        portId: "transfer",
        channelId:
          "channel-14",
        counterpartyChainId:
          "okexchain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-30",
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
          "channel-232",
        order: "unordered",
        version: "ics20-1",
      },
      juno: {
        portId: "transfer",
        channelId:
          "channel-2",
        counterpartyChainId:
          "juno",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-83",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
