/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "rebus",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://api.rebuschain.com:26657/",
        "https://rebus.rpc.bccnodes.com:443",
        "https://rebus.rpc.manticore.team:443/",
        "https://rpc.rebus.nodestake.top/",
        "http://rebus.rpc.m.stavr.tech:40107",
        "https://rpc-1.rebus.nodes.guru",
        "https://api.mainnet.rebus.money:26657",
        "https://rpc-rebus.d-stake.xyz",
        "https://rebus-rpc.brocha.in",
        "https://rebus.nodejumper.io",
        "https://rpc.rebus.bh.rocks",
        "https://rebus-rpc.kleomedes.network",
        "https://rpc-rebus.huginn.tech",
        "https://rebus-mainnet-rpc.autostake.com:443",
        "https://rebus.rpc.liveraven.net",
        "https://rpc.rebus.safeblock.space",
        "https://rebus-rpc.publicnode.com",
      ],
    },
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-0",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-355",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
