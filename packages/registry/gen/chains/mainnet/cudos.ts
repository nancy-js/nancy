/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "cudos",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "http://mainnet-full-node-01.hosts.cudos.org:26657",
        "https://mainnet-full-node-02.hosts.cudos.org:36657",
        "https://cudos-rpc.kleomedes.network",
        "https://cudos-mainnet-rpc.autostake.com:443",
        "https://cudos-rpc.lavenderfive.com",
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
          "channel-298",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
