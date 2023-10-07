/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "realio",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc.cosmos.directory/realio",
        "https://realio-rpc.genznodes.dev",
        "https://rpc-realio-network.nodeist.net",
        "http://realio.rpc.m.stavr.tech:21097",
        "https://rpc.realio.indonode.net",
        "https://rpc.realio.nodestake.top",
      ],
    },
  },
  cosmossdk: {
    api: {
      rest: [
        "https://rest.cosmos.directory/realio",
        "https://realio-api.genznodes.dev",
        "https://api-realio-network.nodeist.net",
        "https://realio.api.m.stavr.tech",
        "https://api.realio.indonode.net",
        "https://api.realio.nodestake.top",
      ],
    },
  },
  evm: {
    api: {
      "jsonrpc-http": [
        "https://realio-rpc-evm.genznodes.dev",
        "https://jsonrpc.realio.nodestake.top",
      ],
    },
  },
  ibc: {
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-1",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-1424",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
