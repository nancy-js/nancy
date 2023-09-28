/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "rizon",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "http://seed-1.mainnet.rizon.world:26657",
        "https://rpcapi.rizon.world/",
        "https://rpc.rizon.chaintools.tech/",
        "https://rizon-rpc.ibs.team/",
        "https://rizon.nodejumper.io",
        "https://rpc-rizon.mms.team",
        "https://rizon-rpc.publicnode.com",
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
          "channel-221",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
