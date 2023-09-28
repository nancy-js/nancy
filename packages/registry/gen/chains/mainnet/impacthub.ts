/**
 * This file is auto-generated by the @nancy/registry package.
 */
export default {
  name: "impacthub",
  tendermint: {
    api: {
      "jsonrpc-http": [
        "https://proxies.sifchain.finance/api/impacthub-3/rpc",
        "https://impacthub.ixo.world/rpc/",
        "https://rpc-ixo-ia.cosmosia.notional.ventures/",
        "https://impacthub-rpc.lavenderfive.com/",
        "https://ixo-rpc.ibs.team",
      ],
    },
  },
  ibc: {
    channels: {
      osmosis: {
        portId: "transfer",
        channelId:
          "channel-4",
        counterpartyChainId:
          "osmosis",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-38",
        order: "unordered",
        version: "ics20-1",
      },
      axelar: {
        portId: "transfer",
        channelId:
          "channel-23",
        counterpartyChainId:
          "axelar",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-114",
        order: "unordered",
        version: "ics20-1",
      },
      sifchain: {
        portId: "transfer",
        channelId:
          "channel-11",
        counterpartyChainId:
          "sifchain",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-15",
        order: "unordered",
        version: "ics20-1",
      },
      noble: {
        portId: "transfer",
        channelId:
          "channel-26",
        counterpartyChainId:
          "noble",
        counterpartyPortId:
          "transfer",
        counterpartyChannelId:
          "channel-15",
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
          "channel-204",
        order: "unordered",
        version: "ics20-1",
      },
    },
  },
} as const;
