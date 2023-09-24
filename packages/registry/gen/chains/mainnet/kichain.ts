/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "kichain",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://rpc-mainnet.blockchain.ki",
        "https://kichain-rpc.polkachu.com",
        "https://rpc-kichain-ia.cosmosia.notional.ventures/",
        "https://rpc.kichain.chaintools.tech/",
        "https://kichain-rpc.lavenderfive.com/",
        "https://ki-rpc.ibs.team/",
        "https://kichain-rpc.panthea.eu",
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
          "channel-77",
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
          "channel-223",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;