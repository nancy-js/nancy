/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "oraichain",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/oraichain",
        "https://rpc.orai.io",
        "http://64.225.53.108:26657",
        "https://rpc-oraichain.vchain.zone",
        "https://rpc-orai.nodine.id/",
        "https://rpc-oraichain.mms.team",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/oraichain",
        "http://lcd.orai.io",
        "http://64.225.53.108:1317",
        "https://rest-oraichain.vchain.zone",
        "https://api-orai.nodine.id",
        "https://api-oraichain.mms.team",
      ],
    },
  },
  evm: null,
  ibc: {
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-13",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-216",
        order: "unordered",
        version: "ics20-1",
      },
      acrechain: {
        portId: "transfer",
        channelId:
          "channel-33",
        counterpartyChainId:
          "acrechain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-10",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
